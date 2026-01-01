import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/common/components/shadcn-ui/button';
import { Input } from '@/common/components/shadcn-ui/input';
import { getClassById, updateClass, Section } from './data/class_data';

const Section_edit = () => {
  const navigate = useNavigate();
  const { id, sectionId } = useParams(); // id is classId
  const [sectionData, setSectionData] = useState<Section | null>(null);

  useEffect(() => {
    if (id && sectionId) {
      const cls = getClassById(parseInt(id));
      if (cls) {
        const section = cls.sections.find((s) => s.id === parseInt(sectionId));
        if (section) {
          setSectionData({ ...section });
        }
      }
    }
  }, [id, sectionId]);

  const handleSave = () => {
    if (!id || !sectionData) return;

    const cls = getClassById(parseInt(id));
    if (cls) {
      const updatedSections = cls.sections.map((s) => (s.id === sectionData.id ? sectionData : s));
      updateClass(cls.id, { sections: updatedSections });
      navigate(-1); // Go back to details
    }
  };

  if (!sectionData) return <div className="p-8">Loading...</div>;

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
          <h1 className="text-3xl font-bold tracking-tight">Edit Section</h1>
        </div>

        <div className="rounded-md border p-6 w-full space-y-6 bg-card">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Section Name</label>
            <Input
              value={sectionData.name}
              onChange={(e) => setSectionData({ ...sectionData, name: e.target.value })}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Seat Capability</label>
            <Input
              type="number"
              value={sectionData.capacity || ''}
              onChange={(e) =>
                setSectionData({ ...sectionData, capacity: parseInt(e.target.value) || 0 })
              }
            />
          </div>
          <div className="flex justify-end gap-2 pt-4">
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

export default Section_edit;
