import Login_page from '@/features/auth/login/Login';
import { RouteObject } from 'react-router-dom';

const auth_routes = [
  {
    path: '/',
    element: <Login_page />,
  },
] satisfies RouteObject[];

export default auth_routes;
