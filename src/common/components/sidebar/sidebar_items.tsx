import {
  Bell,
  BookOpen,
  Calendar,
  CreditCard,
  FileText,
  LayoutDashboard,
  Users,
} from 'lucide-react';

const sidebar_items = {
  super_admin: [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      children: [{ key: '/teacher-dashboard', label: 'Dashboard' }],
    },
    {
      key: 'administration',
      label: 'Administration',
      icon: <BookOpen size={20} />,
      children: [
        { key: '/teacher-dashboard/academics', label: 'Academics' },
        { key: '/teacher-dashboard/users', label: 'User Management' },
        { key: '/teacher-dashboard/notice', label: 'Notice Management' },
        { key: '/teacher-dashboard/routine', label: 'Routine Management' },
        { key: '/teacher-dashboard/bulk-print', label: 'Bulk Print' },
        {
          key: '/teacher-dashboard/download-center',
          label: 'Download Center',
        },
      ],
    },
    {
      key: 'student',
      label: 'Student',
      icon: <Users size={20} />,
      children: [
        { key: '/teacher-dashboard/student-info', label: 'Student Info' },
        {
          key: '/teacher-dashboard/student-addmission',
          label: 'Add Student',
        },
        { key: '/teacher-dashboard/fees', label: 'Fees' },
        { key: '/teacher-dashboard/homework', label: 'Homework' },
        { key: '/teacher-dashboard/library', label: 'Library' },
        { key: '/teacher-dashboard/transport', label: 'Transport' },
        { key: '/teacher-dashboard/dormitory', label: 'Dormitory' },
      ],
    },
    {
      key: 'exam',
      label: 'Exam',
      icon: <FileText size={20} />,
      children: [
        { key: '/teacher-dashboard/examination', label: 'Examination' },
        { key: '/teacher-dashboard/exam-plan', label: 'Exam Plan' },
      ],
    },
  ],

  admin: [],

  teacher: [
    {
      key: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
      children: [{ key: '/teacher-dashboard', label: 'Dashboard' }],
    },
    {
      key: 'administration',
      label: 'Administration',
      icon: <BookOpen size={20} />,
      children: [
        { key: '/teacher-dashboard/academics', label: 'Academics' },
        { key: '/teacher-dashboard/users', label: 'User Management' },
        { key: '/teacher-dashboard/notice', label: 'Notice Management' },
        { key: '/teacher-dashboard/routine', label: 'Routine Management' },
        { key: '/teacher-dashboard/bulk-print', label: 'Bulk Print' },
        {
          key: '/teacher-dashboard/download-center',
          label: 'Download Center',
        },
      ],
    },
    {
      key: 'student',
      label: 'Student',
      icon: <Users size={20} />,
      children: [
        { key: '/teacher-dashboard/student-info', label: 'Student Info' },
        {
          key: '/teacher-dashboard/student-addmission',
          label: 'Add Student',
        },
        { key: '/teacher-dashboard/fees', label: 'Fees' },
        { key: '/teacher-dashboard/homework', label: 'Homework' },
        { key: '/teacher-dashboard/library', label: 'Library' },
        { key: '/teacher-dashboard/transport', label: 'Transport' },
        { key: '/teacher-dashboard/dormitory', label: 'Dormitory' },
      ],
    },
    {
      key: 'exam',
      label: 'Exam',
      icon: <FileText size={20} />,
      children: [
        { key: '/teacher-dashboard/examination', label: 'Examination' },
        { key: '/teacher-dashboard/exam-plan', label: 'Exam Plan' },
      ],
    },
  ],

  student: [],

  parent: [
    {
      key: '/parent-dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    {
      key: '/parent-dashboard/child-profile',
      label: 'Child Profile',
      icon: <Users size={20} />,
    },
    {
      key: '/parent-dashboard/child-result',
      label: 'Child Result',
      icon: <FileText size={20} />,
    },
    {
      key: '/parent-dashboard/notice',
      label: 'Notice',
      icon: <Bell size={20} />,
    },
    {
      key: '/parent-dashboard/exam-schedule',
      label: 'Exam Schedule',
      icon: <Calendar size={20} />,
    },
    {
      key: '/parent-dashboard/fees',
      label: 'Fees',
      icon: <CreditCard size={20} />,
    },
  ],
};

export default sidebar_items;
