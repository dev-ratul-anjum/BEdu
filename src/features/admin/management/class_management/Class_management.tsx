import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Eye, Pencil, Trash2 } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/common/components/shadcn-ui/table';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/common/components/shadcn-ui/dialog';
import { Button } from '@/common/components/shadcn-ui/button';
import { getClasses, deleteClass, ClassItem, Section } from './data/class_data';

const Class_management = () => {
  const navigate = useNavigate();
  const [classes, setClasses] = useState<ClassItem[]>([]);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [currentClass, setCurrentClass] = useState<ClassItem | null>(null);

  // Load Data
  useEffect(() => {
    setClasses(getClasses());
  }, [isDeleteOpen]); // Reload on delete

  const calculateTotalCapacity = (sections: Section[]) => {
    return sections.reduce((sum, section) => sum + (section.capacity || 0), 0);
  };

  const handleDeleteClick = (cls: ClassItem) => {
    setCurrentClass(cls);
    setIsDeleteOpen(true);
  };

  const confirmDelete = () => {
    if (currentClass) {
      deleteClass(currentClass.id);
      setClasses(getClasses());
      setIsDeleteOpen(false);
      setCurrentClass(null);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Class Management</h1>
          <p className="text-muted-foreground mt-1">
            Manage your school classes and sections here.
          </p>
        </div>
        <Button
          onClick={() => navigate('add')}
          className="gap-2"
        >
          <Plus className="h-4 w-4" /> Add New
        </Button>
      </div>

      <div className="rounded-md border bg-card">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Class</TableHead>
              <TableHead>Total Seat Capability</TableHead>
              <TableHead>Total Student</TableHead>
              <TableHead className="w-[100px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {classes.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={4}
                  className="h-24 text-center"
                >
                  No classes found.
                </TableCell>
              </TableRow>
            ) : (
              classes.map((cls) => (
                <TableRow key={cls.id}>
                  <TableCell className="font-medium">{cls.name}</TableCell>
                  <TableCell>{calculateTotalCapacity(cls.sections)}</TableCell>
                  <TableCell>{cls.totalStudents}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => navigate(`${cls.id}`)}
                        title="View"
                      >
                        <Eye className="h-4 w-4" />
                        <span className="sr-only">View</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => navigate(`edit/${cls.id}`)}
                        title="Edit"
                      >
                        <Pencil className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon-sm"
                        onClick={() => handleDeleteClick(cls)}
                        className="text-destructive hover:text-destructive hover:bg-destructive/10"
                        title="Delete"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Delete Confirmation Dialog (Class) */}
      <Dialog
        open={isDeleteOpen}
        onOpenChange={setIsDeleteOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete <strong>{currentClass?.name}</strong>? This will
              remove all associated sections and data.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsDeleteOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDelete}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Class_management;
