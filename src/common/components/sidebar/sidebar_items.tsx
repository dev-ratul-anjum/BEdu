import {
  Briefcase,
  Calendar,
  CreditCard,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  ScrollText,
  Users,
  UsersRound,
  Bell,
  BookOpen,
  CalendarCheck,
  FileText,
  DollarSign,
  User,
} from 'lucide-react';

const sidebar_items = {
  super_admin: () => [
    // Copy all common super-admin items
    ...replaceKeyPrefix(sidebar_items.admin(), '/admin', '/super-admin'),

    // 👇 Add admin-specific items here (if any)
  ],

  admin: () => [
    {
      key: '/admin/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      key: '/admin/management',
      label: 'Management',
      icon: <LayoutDashboard size={18} />,
    },

    // Students Section
    {
      key: 'students',
      label: 'Students',
      icon: <Users size={18} />,
      children: [
        {
          key: '/admin/students',
          label: 'All Students',
        },
        {
          key: '/admin/student-admission',
          label: 'Student Admission',
        },
        {
          key: '/admin/students-due',
          label: 'Students Due',
        },
      ],
    },

    // Teachers Section
    {
      key: 'teachers',
      label: 'Teachers',
      icon: <Briefcase size={18} />,
      children: [
        {
          key: '/admin/teachers',
          label: 'Teachers',
        },
        {
          key: '/admin/add-new-teacher',
          label: 'Add Teacher',
        },
        {
          key: '/admin/teacher-payroll',
          label: 'Teacher Payroll',
        },
      ],
    },

    {
      key: '/admin/parents',
      label: 'Parents',
      icon: <UsersRound size={18} />,
    },

    {
      key: '/admin/attendance',
      label: 'Attendance',
      icon: <ScrollText size={18} />,
    },

    { key: '/admin/class-routine', label: 'Class Routine', icon: <Calendar size={18} /> },

    { key: '/admin/exam-results', label: 'Exam Results', icon: <Newspaper size={18} /> },

    { key: '/admin/notice-board', label: 'Notice Board', icon: <Megaphone size={18} /> },
  ],

  teacher: () => [
    {
      key: '/teacher/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      key: '/teacher/attendance',
      label: 'Attendance',
      icon: <ScrollText size={18} />,
    },

    { key: '/teacher/class-routine', label: 'Class Routine', icon: <Calendar size={18} /> },

    { key: '/teacher/notice-board', label: 'Notice Board', icon: <Megaphone size={18} /> },

    { key: '/teacher/classes', label: 'Classes', icon: <CreditCard size={18} /> },

    { key: '/teacher/grades', label: 'Grades', icon: <GraduationCap size={18} /> },
  ],

  student: () => [
    {
      key: '/student/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    {
      key: '/student/profile',
      label: 'My Profile',
      icon: <User size={20} />,
    },
    {
      key: '/student/notice',
      label: 'Notice',
      icon: <Bell size={20} />,
    },
    {
      key: '/student/attendance',
      label: 'Attendance',
      icon: <CalendarCheck size={20} />,
    },
    {
      key: '/student/routine',
      label: 'Routine',
      icon: <BookOpen size={20} />,
    },
    {
      key: '/student/exam-schedule',
      label: 'Exam Schedule',
      icon: <Calendar size={20} />,
    },
    {
      key: '/student/result',
      label: 'Result',
      icon: <FileText size={20} />,
    },
    {
      key: '/student/fees',
      label: 'Fees',
      icon: <DollarSign size={20} />,
    },
    {
      key: '/student/payment-history',
      label: 'Payment History',
      icon: <CreditCard size={20} />,
    },
  ],

  parent: () => [
    {
      key: '/parent/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    {
      key: '/parent/allnotice',
      label: 'All Notice',
      icon: <Bell size={20} />,
    },
  ],
} satisfies TSidebar_Items;

export default sidebar_items;

function replaceKeyPrefix(items: TMenu_Item[], from: string, to: string) {
  return items.map((item) => ({
    ...item,
    key: item.key?.replace(from, to),
    children: item.children ? replaceKeyPrefix(item.children, from, to) : undefined,
  }));
}

type TMenu_Item = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: TMenu_Item[];
};

export type TSidebar_Items = Record<string, () => TMenu_Item[]>;
