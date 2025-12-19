import Child_profile from '@/features/parent/pages/child_profile/Child_profile';
import Child_result from '@/features/parent/pages/child_result/Child_result';
import Exam_schedule from '@/features/parent/pages/exam_schedule/Exam_schedule';
import Fees from '@/features/parent/pages/fees/Fees';
import Notice from '@/features/parent/pages/notice/Notice';
import NoticeDetails from '@/features/parent/pages/notice/NoticeDetails';
import Parent_profile from '@/features/parent/pages/parent_profile/Parent_profile';
import Parent from '@/features/parent/Parent';

const parent_router = [
  { path: 'dashboard', element: <Parent /> },
  { path: 'profile', element: <Parent_profile /> },
  { path: 'children', element: <Child_profile /> },
  { path: 'notice', element: <Notice /> },
  { path: 'notice/:id', element: <NoticeDetails /> },
  { path: 'fees', element: <Fees /> },
  { path: 'exam-schedule', element: <Exam_schedule /> },
  { path: 'result', element: <Child_result /> },
];

export default parent_router;
