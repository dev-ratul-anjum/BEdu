import { useNavigate } from 'react-router-dom';

export default function Management() {
  const navigate = useNavigate();

  const managementItems = [
    { title: 'Teacher Management', path: '/admin/management/teacher-management' },
    { title: 'Student Management', path: '/admin/management/student-management' },
    { title: 'Department Management', path: '/admin/management/department-management' },
    { title: 'Routine Management', path: '/admin/management/routine-management' },
    { title: 'Class Management', path: '/admin/management/class-management' },
    { title: 'Fees Management', path: '/admin/management/fees-management' },
    { title: 'Exams Routine Management', path: '/admin/management/exams-routine-management' },
    { title: 'Result Management', path: 'result-management' }, // Placeholder
    { title: 'Admission Management', path: 'admission-management' }, // Placeholder
  ];

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Management</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {managementItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.path && navigate(item.path)}
            className="
              h-24 rounded-2xl border-2 border-slate-200 bg-white text-lg font-medium text-slate-700
              transition-all duration-200
              hover:bg-primary hover:border-primary hover:text-white hover:shadow-md
              active:scale-95
            "
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
