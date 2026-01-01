import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';
import { Input } from '@/common/components/shadcn-ui/input';
import { addDepartment, getDepartmentById, updateDepartment } from '../data/department_data';

const Department_form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [formData, setFormData] = useState({ name: '' });

  useEffect(() => {
    if (isEditMode && id) {
      const dept = getDepartmentById(parseInt(id));
      if (dept) {
        setFormData({ name: dept.name });
      }
    }
  }, [isEditMode, id]);

  const handleSave = () => {
    if (!formData.name.trim()) return;

    if (isEditMode && id) {
      updateDepartment(parseInt(id), formData.name);
    } else {
      addDepartment(formData.name);
    }
    navigate('/admin/management/department-management');
  };

  return (
    <div className="p-8 space-y-6">
      <div className="max-w-lg space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">
            {isEditMode ? 'Edit Department' : 'Add New Department'}
          </h1>
        </div>

        <div className="rounded-md border p-4 w-full space-y-4 bg-card">
          <div className="grid gap-2">
            <label
              htmlFor="name"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Department Name
            </label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Science"
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button onClick={handleSave}>Save Changes</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Department_form;
