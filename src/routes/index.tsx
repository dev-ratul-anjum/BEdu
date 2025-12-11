import sidebar_items from '@/common/components/sidebar/sidebar_items';
import Dashboard_layout from '@/common/layouts/dashboard.layout';
import { createBrowserRouter } from 'react-router-dom';
import Auth_layout from '../common/layouts/auth.layout';
import Protected_layout from '../common/layouts/protected.layout';
import admin_routes from './admin_routes';
import auth_routes from './auth_routes';
import parent_routes from './parent_routes';
import student_routes from './student_routes';
import super_admin_routes from './super_admin_routes';
import teacher_routes from './teacher_routes';

const app_router = createBrowserRouter([
  {
    path: '/',
    element: <Auth_layout />,
    children: auth_routes,
  },

  {
    path: '/super-admin-dashboard',
    element: <Protected_layout allowedRole="SUPER_ADMIN" />,
    children: [
      {
        element: <Dashboard_layout sidebar_items={sidebar_items.super_admin} />,
        children: super_admin_routes,
      },
    ],
  },

  {
    path: '/admin-dashboard',
    element: <Protected_layout allowedRole="ADMIN" />,
    children: [
      {
        element: <Dashboard_layout sidebar_items={sidebar_items.admin} />,
        children: admin_routes,
      },
    ],
  },

  {
    path: '/teacher-dashboard',
    element: <Protected_layout allowedRole="TEACHER" />,
    children: [
      {
        element: <Dashboard_layout sidebar_items={sidebar_items.teacher} />,
        children: teacher_routes,
      },
    ],
  },

  {
    path: '/student-dashboard',
    element: <Protected_layout allowedRole="STUDENT" />,
    children: [
      {
        element: <Dashboard_layout sidebar_items={sidebar_items.student} />,
        children: student_routes,
      },
    ],
  },

  {
    path: '/parent-dashboard',
    element: <Protected_layout allowedRole="PARENT" />,
    children: [
      {
        element: <Dashboard_layout sidebar_items={sidebar_items.parent} />,
        children: parent_routes,
      },
    ],
  },
]);

export default app_router;
