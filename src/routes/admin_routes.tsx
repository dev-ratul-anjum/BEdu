import Add_teacher_page from '@/features/shared/pages/administrators/add_teacher_page/Add_teacher_page';
import Administrator_dashboard_page from '@/features/shared/pages/administrators/administrator_dashboard_page';
import Student_admission_page from '@/features/shared/pages/administrators/student_admission_page/Student_admission_page';
import Attendance_page from '@/features/shared/pages/attendance_page';
import Exam_results_page from '@/features/shared/pages/exam_results_page';
import Notice_board_page from '@/features/shared/pages/notice_board_page';
import Parents_page from '@/features/shared/pages/parents_page/Parents_page';
import Routine_schedule_page from '@/features/shared/pages/routine_schedule_page';
import Students_page from '@/features/shared/pages/all_students_page/All_students_page';
import Teachers_page from '@/features/shared/pages/teachers_page';
import User_details_page from '@/features/shared/pages/parents_page/Parent_details_page';
import { Navigate, RouteObject } from 'react-router-dom';
import Student_details_page from '@/features/shared/pages/all_students_page/Student_details_page';
import Parent_details_page from '@/features/shared/pages/parents_page/Parent_details_page';
import Teacher_payroll_page from '@/features/shared/pages/administrators/teacher_payroll_page/Teacher_payroll_page';
import Students_due_page from '@/features/shared/pages/administrators/students_due/Students_due_page';
import Student_due_details from '@/features/shared/pages/administrators/students_due/Student_due_details';

const admin_routes = [
  { path: 'dashboard', element: <Administrator_dashboard_page /> },

  { path: 'teachers', element: <Teachers_page /> },
  { path: 'teachers/:teacherId', element: <User_details_page /> },
  { path: 'add-new-teacher', element: <Add_teacher_page /> },
  { path: 'teacher-payroll', element: <Teacher_payroll_page /> },
  { path: 'parents', element: <Parents_page /> },
  { path: 'parents/:parentId', element: <Parent_details_page /> },

  { path: 'students', element: <Students_page /> },
  { path: 'students/:studentId', element: <Student_details_page /> },
  { path: 'student-admission', element: <Student_admission_page /> },
  { path: 'students-due', element: <Students_due_page /> },
  { path: 'students-due/:studentId', element: <Student_due_details /> },

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

export default admin_routes;
