export interface Department {
  id: number;
  name: string;
}

let departments: Department[] = [
  { id: 1, name: 'Science' },
  { id: 2, name: 'Mathematics' },
  { id: 3, name: 'English' },
  { id: 4, name: 'History' },
  { id: 5, name: 'Computer Science' },
];

export const getDepartments = () => [...departments];

export const getDepartmentById = (id: number) => departments.find((d) => d.id === id);

export const addDepartment = (name: string) => {
  const newId = Math.max(...departments.map((d) => d.id), 0) + 1;
  const newDept = { id: newId, name };
  departments = [...departments, newDept];
  return newDept;
};

export const updateDepartment = (id: number, name: string) => {
  departments = departments.map((d) => (d.id === id ? { ...d, name } : d));
};

export const deleteDepartment = (id: number) => {
  departments = departments.filter((d) => d.id !== id);
};
