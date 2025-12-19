import { Navigate, RouteObject } from 'react-router-dom';

const admin_routes = [
  { index: true, element: <Navigate to="dashboard" /> },

  { path: 'dashboard', element: <div>Admin Dashboard</div> },
  { path: 'users', element: <div>Admin Users</div> },
  { path: 'attendance', element: <div>Admin attendance</div> },
  { path: 'routine', element: <div>Admin routine</div> },
  { path: 'results', element: <div>Admin results</div> },
  { path: 'notices', element: <div>Admin notices</div> },
  { path: 'system', element: <div>Admin system</div> },
] satisfies RouteObject[];

export default admin_routes;
