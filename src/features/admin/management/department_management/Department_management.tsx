import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus, Pencil, Trash2 } from 'lucide-react';

import { Button } from '@/common/components/shadcn-ui/button';
import { getDepartments, deleteDepartment, Department } from './data/department_data';
import Department_table from './components/Department_table';
import Delete_dialog from './components/Dialog';

const Department_management = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState<Department[]>([]);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentDepartment, setCurrentDepartment] = useState<Department | null>(null);

  useEffect(() => {
    setDepartments(getDepartments());
  }, [isDeleteDialogOpen]);

  const handleDeleteClick = (dept: Department) => {
    setCurrentDepartment(dept);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (currentDepartment) {
      deleteDepartment(currentDepartment.id);
      setDepartments(getDepartments()); // Refresh local state
      setIsDeleteDialogOpen(false);
      setCurrentDepartment(null);
    }
  };

  return (
    <div className="p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Department Management</h1>
          <p className="text-muted-foreground mt-1">Manage your school departments here.</p>
        </div>
        <Button
          onClick={() => navigate('add')}
          className="gap-2"
        >
          <Plus className="h-4 w-4" /> Add New
        </Button>
      </div>

      <Department_table
        departments={departments}
        onDelete={handleDeleteClick}
      />

      <Delete_dialog
        isDeleteDialogOpen={isDeleteDialogOpen}
        setIsDeleteDialogOpen={setIsDeleteDialogOpen}
        currentDepartment={currentDepartment}
        confirmDelete={confirmDelete}
      />
    </div>
  );
};

export default Department_management;
