import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';
import { Input } from '@/common/components/shadcn-ui/input';
import { addClass, getClassById, updateClass, Section } from './data/class_data';

const Class_form = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);

  const [formData, setFormData] = useState<{
    name: string;
    sections: Section[];
  }>({
    name: '',
    sections: [{ id: 0, name: '', capacity: 0 }], // id: 0 as placeholder for new
  });

  useEffect(() => {
    if (isEditMode && id) {
      const cls = getClassById(parseInt(id));
      if (cls) {
        setFormData({
          name: cls.name,
          sections: cls.sections.map((s) => ({ ...s })),
        });
      }
    }
  }, [isEditMode, id]);

  const handleSectionChange = (index: number, field: keyof Section, value: string | number) => {
    const newSections = [...formData.sections];
    newSections[index] = { ...newSections[index], [field]: value };
    setFormData({ ...formData, sections: newSections });
  };

  const addSection = () => {
    setFormData({
      ...formData,
      sections: [...formData.sections, { id: 0, name: '', capacity: 0 }],
    });
  };

  const removeSection = (index: number) => {
    const newSections = formData.sections.filter((_, i) => i !== index);
    setFormData({ ...formData, sections: newSections });
  };

  const handleSave = () => {
    if (!formData.name.trim()) return;
    const validSections = formData.sections.filter((s) => s.name.trim() !== '');

    if (isEditMode && id) {
      updateClass(parseInt(id), {
        name: formData.name,
        sections: validSections,
      });
    } else {
      addClass({
        name: formData.name,
        sections: validSections,
      });
    }
    navigate('/admin/management/class-management');
  };

  return (
    <div className="p-8 space-y-6">
      <div className="max-w-2xl space-y-6">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft className="h-4 w-4" /> Back
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">
            {isEditMode ? 'Edit Class' : 'Add New Class'}
          </h1>
        </div>

        <div className="rounded-md border p-6 w-full space-y-6 bg-card">
          <div className="grid gap-2">
            <label
              htmlFor="className"
              className="text-sm font-medium"
            >
              Name of the class
            </label>
            <Input
              id="className"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g. Class 10"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold">Sections</h4>
              <Button
                variant="outline"
                size="sm"
                onClick={addSection}
              >
                <Plus className="h-3 w-3 mr-1" /> Add More
              </Button>
            </div>

            <div className="space-y-3">
              {formData.sections.map((section, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-end"
                >
                  <div className="flex-1 gap-2">
                    <label className="text-xs text-muted-foreground">Section Name</label>
                    <Input
                      value={section.name}
                      onChange={(e) => handleSectionChange(index, 'name', e.target.value)}
                      placeholder="e.g. A"
                    />
                  </div>
                  <div className="w-1/3 gap-2">
                    <label className="text-xs text-muted-foreground">Seat Capability</label>
                    <Input
                      type="number"
                      value={section.capacity || ''}
                      onChange={(e) =>
                        handleSectionChange(index, 'capacity', parseInt(e.target.value) || 0)
                      }
                      placeholder="0"
                    />
                  </div>
                  {formData.sections.length > 1 && (
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive"
                      onClick={() => removeSection(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
            >
              Cancel
            </Button>
            <Button onClick={handleSave}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Class_form;
