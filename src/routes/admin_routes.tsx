import { Navigate, RouteObject } from 'react-router-dom';
import Admin_page from '../features/admin/Admin';

const admin_routes = [
  { path: 'dashboard', element: <Admin_page /> },

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
