import Student_details_page from '@/common/pages/Student_details_page';
import Super_admin_dashboard_page from '@/features/super_admin/pages/Super_admin_dashboard_page';
import Super_admin_student_admission_page from '@/features/super_admin/pages/Super_admin_student_admission_page';
import Super_admin_students_page from '@/features/super_admin/pages/Super_admin_students_page';
import { RouteObject } from 'react-router-dom';

const super_admin_routes = [
  { index: true, element: <Super_admin_dashboard_page /> },

  { path: 'students', element: <Super_admin_students_page /> },
  { path: 'students/:studentId', element: <Student_details_page /> },
  { path: 'student-admission', element: <Super_admin_student_admission_page /> },

  { path: 'teachers', element: <div>Teachers</div> },
  { path: 'parents', element: <div>Parents</div> },

  // -----------------------------
  //  TODO: Implement these routes later
  // -----------------------------

  // { path: 'routine', element: <Super_admin_routine_page /> },
  // { path: 'notice-board', element: <Super_admin_notice_board_page /> },
  // { path: 'student-admission', element: <Super_admin_student_admission_page /> },
] satisfies RouteObject[];

export default super_admin_routes;
