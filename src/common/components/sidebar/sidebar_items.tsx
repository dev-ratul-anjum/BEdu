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
} from 'lucide-react';

const sidebar_items = {
  super_admin: () => [
    {
      key: '/super-admin/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },

    // Students Section
    {
      key: 'students',
      label: 'Students',
      icon: <Users size={18} />,
      children: [
        {
          key: '/super-admin/students',
          label: 'All Students',
        },
        {
          key: '/super-admin/student-admission',
          label: 'Student Admission',
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
          key: '/super-admin/teachers',
          label: 'Teachers',
        },
        {
          key: '/super-admin/add-new-teacher',
          label: 'Add Teacher',
        },
        {
          key: '/super-admin/teacher-payment',
          label: 'Teacher Payment',
        },
      ],
    },

    {
      key: '/super-admin/parents',
      label: 'Parents',
      icon: <UsersRound size={18} />,
    },

    {
      key: '/super-admin/attendance',
      label: 'Attendance',
      icon: <ScrollText size={18} />,
    },

    { key: '/super-admin/class-routine', label: 'Class Routine', icon: <Calendar size={18} /> },

    { key: '/super-admin/exam-results', label: 'Exam Results', icon: <Newspaper size={18} /> },

    { key: '/super-admin/notice-board', label: 'Notice Board', icon: <Megaphone size={18} /> },
  ],

  admin: () => [
    // Copy all common super-admin items
    ...replaceKeyPrefix(sidebar_items.super_admin(), '/super-admin', '/admin'),

    // 👇 Add admin-specific items here (if any)
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

  student: () => [],
  parent: () => [],
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
