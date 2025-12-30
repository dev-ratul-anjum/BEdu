import { Navigate, RouteObject } from 'react-router-dom';
import Admin_page from '../features/admin/Admin';
import Management from '@/features/admin/management/Management';
import Teacher_management from '@/features/admin/management/teacher_management/Teacher_management';

const admin_routes = [
  { path: 'dashboard', element: <Admin_page /> },
  { path: 'management', element: <Management /> },
  { path: 'management/teacher-management', element: <Teacher_management /> },

  {
    index: true,
    element: (
      <Navigate
        replace
        to={'dashboard'}
      />
    ),
  },
] satisfies RouteObject[];

export default admin_routes;
