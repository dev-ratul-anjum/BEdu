import { Navigate } from 'react-router-dom';
import Parents_login from '@/features/auth/parents/Parents_login';
import All_notice_list from '@/features/parent/pages/all_notice_list/All_notice_list';
import All_attendance from '@/features/parent/pages/all_attendance/All_attendance';
import Parent from '@/features/parent/Parent';
import Student_history from '@/features/parent/pages/student_history/Student_history';
import Detail_notice from '@/features/parent/pages/detail_notice/Detail_notice';

const parent_routes = [
  { path: 'dashboard', element: <Parent /> },
  { path: 'allnotice', element: <All_notice_list /> },
  { path: 'all-attendance', element: <All_attendance /> },
  { path: 'student-history', element: <Student_history /> },
  { path: 'detail-notice', element: <Detail_notice /> },
  { path: 'login', element: <Parents_login /> },
  {
    index: true,
    element: (
      <Navigate
        replace
        to={'dashboard'}
      />
    ),
  },
];

export default parent_routes;
