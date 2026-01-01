import Student from '@/features/student/Student';
import { Navigate, RouteObject } from 'react-router-dom';

const student_routes = [
  { path: 'dashboard', element: <Student /> },
  {
    index: true,
    element: (
      <Navigate
        replace
        to={'dashboard'}
      />
    ),
  },
] as RouteObject[];

export default student_routes;
