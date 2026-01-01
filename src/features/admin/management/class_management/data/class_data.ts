export interface Section {
  id: number;
  name: string;
  capacity: number;
}

export interface ClassItem {
  id: number;
  name: string;
  sections: Section[];
  totalStudents: number;
}

let classes: ClassItem[] = [
  {
    id: 1,
    name: 'Class 1',
    sections: [
      { id: 101, name: 'A', capacity: 40 },
      { id: 102, name: 'B', capacity: 35 },
    ],
    totalStudents: 72,
  },
  {
    id: 2,
    name: 'Class 2',
    sections: [{ id: 201, name: 'A', capacity: 40 }],
    totalStudents: 38,
  },
];

export const getClasses = () => [...classes];

export const getClassById = (id: number) => classes.find((c) => c.id === id);

export const addClass = (newItem: Omit<ClassItem, 'id' | 'totalStudents'>) => {
  const newId = Math.max(...classes.map((c) => c.id), 0) + 1;
  // Ensure sections have IDs if missing (mock logic)
  const sectionsWithIds = newItem.sections.map((s, index) => ({
    ...s,
    id: s.id || newId * 1000 + index, // Simple mock ID generation
  }));

  const newClass = { ...newItem, sections: sectionsWithIds, id: newId, totalStudents: 0 };
  classes = [...classes, newClass];
  return newClass;
};

export const updateClass = (id: number, updatedItem: Partial<ClassItem>) => {
  if (updatedItem.sections) {
    // Ensure new sections have IDs
    updatedItem.sections = updatedItem.sections.map((s, idx) => ({
      ...s,
      id: s.id || id * 1000 + Math.floor(Math.random() * 1000), // ensure ID
    }));
  }
  classes = classes.map((c) => (c.id === id ? { ...c, ...updatedItem } : c));
};

export const deleteClass = (id: number) => {
  classes = classes.filter((c) => c.id !== id);
};
