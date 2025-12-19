import Parents_page from '@/features/shared/pages/Parents_page';
import Student_admission from '@/features/shared/pages/Student_admission';
import Students_page from '@/features/shared/pages/Students_page';
import Teachers_page from '@/features/shared/pages/Teachers_page';
import User_details_page from '@/features/shared/pages/User_details_page';
import Super_admin_dashboard from '@/features/super_admin/super_admin_dashboard';
import { Navigate, RouteObject } from 'react-router-dom';

const super_admin_routes = [
  { index: true, element: <Navigate to="dashboard" /> },

  { path: 'dashboard', element: <Super_admin_dashboard /> },

  { path: 'teachers', element: <Teachers_page /> },
  { path: 'teachers/:teacherId', element: <User_details_page /> },

  { path: 'parents', element: <Parents_page /> },
  { path: 'parents/:parentId', element: <User_details_page /> },

  { path: 'students', element: <Students_page /> },
  { path: 'students/:studentId', element: <User_details_page /> },
  { path: 'student-admission', element: <Student_admission /> },

  { path: 'attendance', element: <div>Super Admin attendance</div> },

  { path: 'routine', element: <div>Super Admin routine</div> },

  { path: 'results', element: <div>Super Admin results</div> },

  { path: 'notices', element: <div>Super Admin notices</div> },

  { path: 'system', element: <div>Super Admin system</div> },
] satisfies RouteObject[];

export default super_admin_routes;
