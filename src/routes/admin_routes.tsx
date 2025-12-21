import { RouteObject } from 'react-router-dom';
import super_admin_routes from './super_admin_routes';

const admin_routes = [
  // Copy all existing super-admin routes
  ...super_admin_routes,

  // 👇 Add admin-specific routes here (if any)
] satisfies RouteObject[];

export default admin_routes;
