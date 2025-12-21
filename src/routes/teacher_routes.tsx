import Attendance_page from '@/features/shared/pages/attendance_page';
import Notice_board_page from '@/features/shared/pages/notice_board_page';
import Routine_schedule_page from '@/features/shared/pages/routine_schedule_page';
import { Navigate, RouteObject } from 'react-router-dom';

const teacher_routes = [
  { path: 'dashboard', element: <div>Teacher Dashboard</div> },
  { path: 'attendance', element: <Attendance_page /> },
  { path: 'class-routine', element: <Routine_schedule_page /> },
  { path: 'notice-board', element: <Notice_board_page /> },

  { path: 'classes', element: <div>Teacher Classes</div> },
  { path: 'grades', element: <div>Teacher grades</div> },

  { index: true, element: <Navigate to="dashboard" /> },
] satisfies RouteObject[];

export default teacher_routes;
