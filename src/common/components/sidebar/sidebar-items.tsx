import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import {
  Bell,
  Briefcase,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  User,
  Users,
  UsersRound,
} from 'lucide-react';

const sidebar_items = {
  super_admin: [
    {
      key: '/super-admin',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      key: 'Students',
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
    {
      key: '/super-admin/teachers',
      label: 'Teachers',
      icon: <Briefcase size={18} />,
    },
    {
      key: '/super-admin/parents',
      label: 'Parents',
      icon: <UsersRound size={18} />,
    },
  ],

  admin: [],

  teacher: [],

  student: [],

  parent: [
    {
      key: '/parent/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    {
      key: '/parent/profile',
      label: 'My Profile',
      icon: <User size={20} />,
    },
    {
      key: '/parent/children',
      label: 'Child Profile',
      icon: <Users size={20} />,
    },
    {
      key: '/parent/result',
      label: 'Result',
      icon: <FileText size={20} />,
    },
    {
      key: '/parent/notice',
      label: 'Notice',
      icon: <Bell size={20} />,
    },
    {
      key: '/parent/exam-schedule',
      label: 'Exam Schedule',
      icon: <Calendar size={20} />,
    },
    {
      key: '/parent/fees',
      label: 'Fees',
      icon: <CreditCard size={20} />,
    },
  ],
} satisfies Record<string, ItemType<MenuItemType>[]>;

export default sidebar_items;
