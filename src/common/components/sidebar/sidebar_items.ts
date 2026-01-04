import { Building2, LayoutDashboard, ShieldUser } from 'lucide-react';
import { TSidebar_Link } from './sidebar_links';

const sidebar_items = {
  super_admin: () => [...replaceKeyPrefix(sidebar_items.admin(), '/admin', '/super-admin')],

  admin: () => [
    {
      url: '/admin/dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      url: '/admin/role-management',
      title: 'Role Management',
      icon: ShieldUser,
    },
    {
      url: '/admin/management',
      title: 'Management',
      icon: Building2,
    },
  ],
  parent: () => [
    {
      url: '/parent/dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      url: '/parent/allnotice',
      title: 'All Notices',
      icon: Building2,
    },
  ],

  teacher: () => [],

  student: () => [],
} satisfies TSidebar_Items;

export default sidebar_items;

function replaceKeyPrefix(items: TSidebar_Link[], from: string, to: string) {
  return items.map((item) => ({
    ...item,
    url: item.url?.replace(from, to),
    children: item.children ? replaceKeyPrefix(item.children, from, to) : undefined,
  }));
}

export type TSidebar_Items = Record<string, () => TSidebar_Link[]>;
