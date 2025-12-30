export default function Management() {
  const managementItems = [
    { title: 'Teacher Management' },
    { title: 'Student Management' },
    { title: 'Department Management' },
    { title: 'Routine Management' },
    { title: 'Class Management' },
    { title: 'Fees Management' },
    { title: 'Exams Routine Management' },
    { title: 'Result Management' },
    { title: 'Admission Management' },
  ];

  return (
    <div className="p-6">
      <header className="mb-6">
        <h1 className="text-xl font-semibold text-gray-800">Management</h1>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
        {managementItems.map((item, index) => (
          <button
            key={index}
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
