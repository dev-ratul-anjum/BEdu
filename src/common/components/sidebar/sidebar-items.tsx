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
      key: '/super-admin/dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      key: 'Students',
      label: 'Students',
      icon: <Users size={18} />,
      children: [
        {
          key: '/super-admin/dashboard/students',
          label: 'All Students',
        },
        {
          key: '/super-admin/dashboard/student-admission',
          label: 'Student Admission',
        },
      ],
    },
    {
      key: '/super-admin/dashboard/teachers',
      label: 'Teachers',
      icon: <Briefcase size={18} />,
    },
    {
      key: '/super-admin/dashboard/parents',
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
      key: '/parent/dashboard/profile',
      label: 'My Profile',
      icon: <User size={20} />,
    },
    {
      key: '/parent/dashboard/child-profile',
      label: 'Child Profile',
      icon: <Users size={20} />,
    },
    {
      key: '/parent/dashboard/child-result',
      label: 'Child Result',
      icon: <FileText size={20} />,
    },
    {
      key: '/parent/dashboard/notice',
      label: 'Notice',
      icon: <Bell size={20} />,
    },
    {
      key: '/parent/dashboard/exam-schedule',
      label: 'Exam Schedule',
      icon: <Calendar size={20} />,
    },
    {
      key: '/parent/dashboard/fees',
      label: 'Fees',
      icon: <CreditCard size={20} />,
    },
  ],
} satisfies Record<string, ItemType<MenuItemType>[]>;

export default sidebar_items;
