import { Navigate, RouteObject } from 'react-router-dom';

const teacher_routes = [
  { index: true, element: <Navigate to="dashboard" /> },

  { path: 'dashboard', element: <div>Teacher Dashboard</div> },
  { path: 'classes', element: <div>Teacher Classes</div> },
  { path: 'attendance', element: <div>Teacher attendance</div> },
  { path: 'grades', element: <div>Teacher grades</div> },
  { path: 'routine', element: <div>Teacher routine</div> },
  { path: 'notices', element: <div>Teacher notices</div> },

  // { index: true, element: <Dashboard_page /> },
  // { path: 'profile', element: <Teacher_profile /> },
  // { path: 'users', element: <UserManagementPage /> },
  // { path: 'routine', element: <RoutineSchedulePage /> },
  // { path: 'notice', element: <NoticeBoardPage /> },
  // { path: 'student-addmission', element: <Super_admin_student_admission_page /> },
] satisfies RouteObject[];

export default teacher_routes;
