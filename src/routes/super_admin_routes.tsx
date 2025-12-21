import Add_teacher_page from '@/features/shared/pages/administrators/add_teacher_page';
import Administrator_dashboard_page from '@/features/shared/pages/administrators/administrator_dashboard_page';
import Student_admission_page from '@/features/shared/pages/administrators/student_admission_page';
import Teacher_payment_page from '@/features/shared/pages/administrators/teacher_payment_page';
import Attendance_page from '@/features/shared/pages/attendance_page';
import Exam_results_page from '@/features/shared/pages/exam_results_page';
import Notice_board_page from '@/features/shared/pages/notice_board_page';
import Parents_page from '@/features/shared/pages/parents_page';
import Routine_schedule_page from '@/features/shared/pages/routine_schedule_page';
import Students_page from '@/features/shared/pages/students_page';
import Teachers_page from '@/features/shared/pages/teachers_page';
import User_details_page from '@/features/shared/pages/user_details_page';
import { Navigate, RouteObject } from 'react-router-dom';

const super_admin_routes = [
  { path: 'dashboard', element: <Administrator_dashboard_page /> },

  { path: 'teachers', element: <Teachers_page /> },
  { path: 'teachers/:teacherId', element: <User_details_page /> },
  { path: 'add-new-teacher', element: <Add_teacher_page /> },
  { path: 'teacher-payment', element: <Teacher_payment_page /> },

  { path: 'parents', element: <Parents_page /> },
  { path: 'parents/:parentId', element: <User_details_page /> },

  { path: 'students', element: <Students_page /> },
  { path: 'students/:studentId', element: <User_details_page /> },
  { path: 'student-admission', element: <Student_admission_page /> },

  { path: 'attendance', element: <Attendance_page /> },

  { path: 'class-routine', element: <Routine_schedule_page /> },

  { path: 'exam-results', element: <Exam_results_page /> },

  { path: 'notice-board', element: <Notice_board_page /> },

  {
    index: true,
    element: (
      <Navigate
        replace
        to={'dashboard'}
      />
    ),
  },
] satisfies RouteObject[];

export default super_admin_routes;
