import Student_fees from '@/features/student/pages/fees_status/Fees_status';
import Student_attendance from '@/features/student/pages/student_attendance/Student_attendance';
import Student_notice_board from '@/features/student/pages/student_notice_board/Student_notice_board';
import Student_payment_history from '@/features/student/pages/student_payment_history/Student_payment_history';
import Student_routine from '@/features/student/pages/student_routine/Student_routine';
import Student_exam_schedule from '@/features/student/pages/exam_schedule/Exam_schedule';
import Student from '@/features/student/Student';
import Student_result from '@/features/student/pages/student_result/Student_result';
import NoticeDetails from '@/features/parent/pages/notice/NoticeDetails';
import { RouteObject } from 'react-router-dom';

const student_routes = [
  { path: 'dashboard', element: <Student /> },
  // { path: 'profile', element: <Student_profile},
  { path: 'routine', element: <Student_routine /> },
  { path: 'fees', element: <Student_fees /> },
  { path: 'payment-history', element: <Student_payment_history /> },
  { path: 'attendance', element: <Student_attendance /> },
  { path: 'result', element: <Student_result /> },
  { path: 'notice', element: <Student_notice_board /> },
  { path: 'notice/:id', element: <NoticeDetails /> },
  { path: 'exam-schedule', element: <Student_exam_schedule /> },
] as RouteObject[];

export default student_routes;
