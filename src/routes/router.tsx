import sidebar_items from '@/common/components/sidebar/sidebar_items';
import App_layout from '@/common/layouts/app_layout';
import { createBrowserRouter } from 'react-router-dom';
import Auth_layout from '../common/layouts/auth_layout';
import Protected_layout from '../common/layouts/protected_layout';
import admin_routes from './admin_routes';
import auth_routes from './auth_routes';
import parent_routes from './parent_routes';
import student_routes from './student_routes';
import super_admin_routes from './super_admin_routes';
import teacher_routes from './teacher_routes';
import Admin_dashboard from '@/features/admin/dashboard/Admin_dashboard';
import Role_management from '@/features/admin/role-management/Role_management';

const app_router = createBrowserRouter([
  {
    path: '/',
    element: <Auth_layout />,
    children: auth_routes,
  },

  {
    path: '/admin-dashboard',
    element: <Admin_dashboard />,
  },
  {
    path: '/role-management',
    element: <Role_management />,
  },
  {
    path: '/super-admin',
    element: <Protected_layout allowed_role="SUPER_ADMIN" />,
    children: [
      {
        element: <App_layout sidebar_items={sidebar_items.super_admin} />,
        children: super_admin_routes,
      },
    ],
  },

  {
    path: '/admin',
    element: <Protected_layout allowed_role="ADMIN" />,
    children: [
      {
        element: <App_layout sidebar_items={sidebar_items.admin} />,
        children: admin_routes,
      },
    ],
  },

  {
    path: '/teacher',
    element: <Protected_layout allowed_role="TEACHER" />,
    children: [
      {
        element: <App_layout sidebar_items={sidebar_items.teacher} />,
        children: teacher_routes,
      },
    ],
  },

  {
    path: '/student',
    element: <Protected_layout allowed_role="STUDENT" />,
    children: [
      {
        element: <App_layout sidebar_items={sidebar_items.student} />,
        children: student_routes,
      },
    ],
  },

  {
    path: '/parent',
    element: <Protected_layout allowed_role="PARENT" />,
    children: [
      {
        element: <App_layout sidebar_items={sidebar_items.parent} />,
        children: parent_routes,
      },
    ],
  },

  {
    path: '*',
    element: <div>404</div>,
  },
]);

export default app_router;
