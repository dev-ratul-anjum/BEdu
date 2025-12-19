import { RouteObject } from 'react-router-dom';

const super_admin_routes = [
  { path: 'dashboard', element: <div>Super Admin Dashboard</div> },
  { path: 'users', element: <div>Super Admin Users</div> },
  { path: 'attendance', element: <div>Super Admin attendance</div> },
  { path: 'routine', element: <div>Super Admin routine</div> },
  { path: 'results', element: <div>Super Admin results</div> },
  { path: 'notices', element: <div>Super Admin notices</div> },
  { path: 'system', element: <div>Super Admin system</div> },

  // { path: 'students', element: <Super_admin_students_page /> },
  // { path: 'students/:studentId', element: <Student_details_page /> },
  // { path: 'student-admission', element: <Super_admin_student_admission_page /> },

  // { path: 'teachers', element: <div>Teachers</div> },
  // { path: 'parents', element: <div>Parents</div> },
] satisfies RouteObject[];

export default super_admin_routes;
