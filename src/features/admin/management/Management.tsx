import { useNavigate } from 'react-router-dom';
import {
  UserCheck,
  Users,
  Building2,
  CalendarClock,
  School,
  CreditCard,
  ClipboardList,
  BarChart4,
  UserPlus,
  Bell,
} from 'lucide-react';

export default function Management() {
  const navigate = useNavigate();

  const managementItems = [
    { title: 'Teacher Management', path: '/admin/management/teacher-management', icon: UserCheck },
    { title: 'Student Management', path: '/admin/management/student-management', icon: Users },
    {
      title: 'Department Management',
      path: '/admin/management/department-management',
      icon: Building2,
    },
    {
      title: 'Routine Management',
      path: '/admin/management/routine-management',
      icon: CalendarClock,
    },
    { title: 'Class Management', path: '/admin/management/class-management', icon: School },
    { title: 'Fees Management', path: '/admin/management/fees-management', icon: CreditCard },
    {
      title: 'Exams Routine Management',
      path: '/admin/management/exams-routine-management',
      icon: ClipboardList,
    },
    { title: 'Result Management', path: '/admin/management/result-management', icon: BarChart4 },
    {
      title: 'Admission Management',
      path: '/admin/management/admission-management',
      icon: UserPlus,
    },
    { title: 'Notice Management', path: '/admin/management/notice-management', icon: Bell },
  ];

  return (
    <div className="w-full min-h-screen bg-slate-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-semibold text-slate-800">Administration Management</h1>
        <p className="text-slate-500 mt-1">Manage all institutional operations from one place</p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {managementItems.map(({ title, path, icon: Icon }) => (
          <div
            key={title}
            onClick={() => navigate(path)}
            className="group cursor-pointer rounded-2xl bg-white p-6 shadow-sm border border-slate-100
                       hover:shadow-md hover:-translate-y-1 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              {/* Icon */}
              <div
                className="flex items-center justify-center h-14 w-14 rounded-full
                           bg-indigo-100 text-indigo-600
                           group-hover:bg-indigo-600 group-hover:text-white
                           transition-colors"
              >
                <Icon size={28} />
              </div>

              {/* Text */}
              <div>
                <h2 className="text-lg font-medium text-slate-800">{title}</h2>
                <p className="text-sm text-slate-500">Configure and manage {title.toLowerCase()}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
