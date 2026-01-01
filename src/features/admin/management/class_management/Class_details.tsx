import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Pencil, Trash2 } from 'lucide-react';
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
import { getClassById, updateClass, ClassItem, Section, getClasses } from './data/class_data';

const Class_details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [currentClass, setCurrentClass] = useState<ClassItem | null>(null);

  // Section Delete States
  const [isSectionDeleteOpen, setIsSectionDeleteOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<Section | null>(null);

  useEffect(() => {
    if (id) {
      // Ideally subscribe or fetch fresh
      const cls = getClassById(parseInt(id));
      setCurrentClass(cls || null);
    }
  }, [id, isSectionDeleteOpen]); // Refresh on delete

  const handleBackClick = () => {
    navigate('/admin/management/class-management');
  };

  const handleEditSectionClick = (section: Section) => {
    if (currentClass) {
      navigate(`section/edit/${section.id}`);
    }
  };

  const handleDeleteSectionClick = (section: Section) => {
    setCurrentSection(section);
    setIsSectionDeleteOpen(true);
  };

  const confirmDeleteSection = () => {
    if (!currentClass || !currentSection) return;

    const updatedSections = currentClass.sections.filter((s) => s.id !== currentSection.id);
    updateClass(currentClass.id, { sections: updatedSections });

    // Refresh
    const cls = getClassById(currentClass.id);
    setCurrentClass(cls || null);
    setIsSectionDeleteOpen(false);
  };

  if (!currentClass) {
    return <div className="p-8">Loading or Class not found...</div>; // Simple fallback
  }

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          onClick={handleBackClick}
          className="gap-2"
        >
          <ArrowLeft className="h-4 w-4" /> Back
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">{currentClass.name}</h1>
      </div>

      <div className="space-y-4">
        <div className="grid gap-1">
          <div className="text-lg font-medium">Class: {currentClass.name}</div>
          <div className="text-lg font-medium">Total Students: {currentClass.totalStudents}</div>
        </div>

        <div className="space-y-2">
          <h3 className="text-xl font-semibold tracking-tight">Section List</h3>
          <div className="rounded-md border bg-card">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Section Name</TableHead>
                  <TableHead>Seat Capability</TableHead>
                  <TableHead>Total Students</TableHead>
                  <TableHead className="w-[150px] text-right">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {currentClass.sections.map((section) => (
                  <TableRow key={section.id}>
                    <TableCell className="font-medium">{section.name}</TableCell>
                    <TableCell>{section.capacity}</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => handleEditSectionClick(section)}
                          title="Edit"
                        >
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon-sm"
                          onClick={() => handleDeleteSectionClick(section)}
                          className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          title="Delete"
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Delete</span>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Delete Section Dialog */}
      <Dialog
        open={isSectionDeleteOpen}
        onOpenChange={setIsSectionDeleteOpen}
      >
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete section <strong>{currentSection?.name}</strong>? This
              action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setIsSectionDeleteOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={confirmDeleteSection}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Class_details;
