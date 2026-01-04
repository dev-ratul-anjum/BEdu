import { useNavigate } from 'react-router-dom';
import {
  CalendarCheck,
  Wallet,
  Clock,
  FileText,
  CreditCard,
  BarChart3,
  BookOpenCheck,
  Library,
  Stethoscope,
} from 'lucide-react';

const Student_history = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: 'Attendance', icon: CalendarCheck, path: '/parent/all-attendance' },
    { label: 'Dues', icon: Wallet, path: '/parent/dues' },
    { label: 'Class Routine', icon: Clock, path: '/parent/class-routine' },
    { label: 'Exams', icon: FileText, path: '/parent/exams' },
    { label: 'Fee', icon: CreditCard, path: '/parent/fees' },
    { label: 'Grades', icon: BarChart3, path: '/parent/grades' },
    { label: 'Homework', icon: BookOpenCheck, path: '/parent/homework' },
    { label: 'Library', icon: Library, path: '/parent/library' },
    { label: 'Medical', icon: Stethoscope, path: '/parent/medical' },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-800">Student Management</h1>
        <p className="text-slate-500 mt-1">Quick access to all student-related records</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map(({ label, icon: Icon, path }) => (
          <div
            key={label}
            onClick={() => navigate(path)}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-slate-100
                       hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full bg-blue-100 text-blue-600
                              group-hover:bg-blue-500 group-hover:text-white transition-colors"
              >
                <Icon size={28} />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-xl font-medium text-slate-800">{label}</h2>
                <p className="text-sm text-slate-500">View student {label.toLowerCase()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Student_history;
