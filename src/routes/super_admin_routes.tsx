import { RouteObject } from 'react-router-dom';
import admin_routes from './admin_routes';

const super_admin_routes = [
  // Copy all existing admin routes
  ...admin_routes,

  // 👇 Add super-admin-specific routes here (if any)
] satisfies RouteObject[];

export default super_admin_routes;
