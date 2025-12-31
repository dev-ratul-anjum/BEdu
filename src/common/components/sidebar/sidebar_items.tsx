import {
  Bell,
  BookOpen,
  Briefcase,
  Calendar,
  CalendarCheck,
  CreditCard,
  DollarSign,
  FileText,
  GraduationCap,
  LayoutDashboard,
  Megaphone,
  Newspaper,
  ScrollText,
  User,
  Users,
  UsersRound,
} from 'lucide-react';
import { TSidebar_Link } from './sidebar_links';

const sidebar_items = {
  super_admin: () => [
    // Copy all common super-admin items
    ...replaceKeyPrefix(sidebar_items.admin(), '/admin', '/super-admin'),

    // 👇 Add admin-specific items here (if any)
  ],

  admin: () => [
    {
      url: '/admin/dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      url: '/admin/management',
      title: 'Management',
      icon: LayoutDashboard,
    },

    // Students Section
    {
      url: 'students',
      title: 'Students',
      icon: Users,
      children: [
        {
          url: '/admin/students',
          title: 'All Students',
        },
        {
          url: '/admin/student-admission',
          title: 'Student Admission',
        },
        {
          url: '/admin/students-due',
          title: 'Students Due',
        },
      ],
    },

    // Teachers Section
    {
      url: 'teachers',
      title: 'Teachers',
      icon: Briefcase,
      children: [
        {
          url: '/admin/teachers',
          title: 'Teachers',
        },
        {
          url: '/admin/add-new-teacher',
          title: 'Add Teacher',
        },
        {
          url: '/admin/teacher-payroll',
          title: 'Teacher Payroll',
        },
      ],
    },

    {
      url: '/admin/parents',
      title: 'Parents',
      icon: UsersRound,
    },

    {
      url: '/admin/attendance',
      title: 'Attendance',
      icon: ScrollText,
    },

    { url: '/admin/class-routine', title: 'Class Routine', icon: Calendar },

    { url: '/admin/exam-results', title: 'Exam Results', icon: Newspaper },

    { url: '/admin/notice-board', title: 'Notice Board', icon: Megaphone },
  ],

  teacher: () => [
    {
      url: '/teacher/dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      url: '/teacher/attendance',
      title: 'Attendance',
      icon: ScrollText,
    },

    { url: '/teacher/class-routine', title: 'Class Routine', icon: Calendar },

    { url: '/teacher/notice-board', title: 'Notice Board', icon: Megaphone },

    { url: '/teacher/classes', title: 'Classes', icon: CreditCard },

    { url: '/teacher/grades', title: 'Grades', icon: GraduationCap },
  ],

  student: () => [
    {
      url: '/student/dashboard',
      title: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      url: '/student/profile',
      title: 'My Profile',
      icon: User,
    },
    {
      url: '/student/notice',
      title: 'Notice',
      icon: Bell,
    },
    {
      url: '/student/attendance',
      title: 'Attendance',
      icon: CalendarCheck,
    },
    {
      url: '/student/routine',
      title: 'Routine',
      icon: BookOpen,
    },
    {
      url: '/student/exam-schedule',
      title: 'Exam Schedule',
      icon: Calendar,
    },
    {
      url: '/student/result',
      title: 'Result',
      icon: FileText,
    },
    {
      url: '/student/fees',
      title: 'Fees',
      icon: DollarSign,
    },
    {
      url: '/student/payment-history',
      title: 'Payment History',
      icon: CreditCard,
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
      title: 'All Notice',
      icon: Bell,
    },
  ],
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
