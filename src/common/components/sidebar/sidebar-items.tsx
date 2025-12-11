import { ItemType, MenuItemType } from 'antd/es/menu/interface';
import { Briefcase, LayoutDashboard, Users, UsersRound } from 'lucide-react';

const sidebar_items = {
  super_admin: [
    {
      key: '/super-admin-dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={18} />,
    },
    {
      key: 'Students',
      label: 'Students',
      icon: <Users size={18} />,
      children: [
        {
          key: '/super-admin-dashboard/students',
          label: 'All Students',
        },
        {
          key: '/super-admin-dashboard/student-admission',
          label: 'Student Admission',
        },
      ],
    },
    {
      key: '/super-admin-dashboard/teachers',
      label: 'Teachers',
      icon: <Briefcase size={18} />,
    },
    {
      key: '/super-admin-dashboard/parents',
      label: 'Parents',
      icon: <UsersRound size={18} />,
    },
  ],

  admin: [],

  teacher: [],

  student: [],

  parent: [],
} satisfies Record<string, ItemType<MenuItemType>[]>;

export default sidebar_items;
