import Child_profile from '@/features/parent/pages/child_profile/Child_profile';
import Child_result from '@/features/parent/pages/child_result/Child_result';
import Parent from '@/features/parent/Parent';
import Notice from '@/features/parent/pages/notice/Notice';
import Exam_schedule from '@/features/parent/pages/exam_schedule/Exam_schedule';
import Fees from '@/features/parent/pages/fees/Fees';
import Parent_profile from '@/features/parent/pages/parent_profile/Parent_profile';

const parent_router = [
  { index: true, element: <Parent /> },
  { path: 'profile', element: <Parent_profile /> },
  { path: 'child-profile', element: <Child_profile /> },
  { path: 'child-result', element: <Child_result /> },
  { path: 'notice', element: <Notice /> },
  { path: 'exam-schedule', element: <Exam_schedule /> },
  { path: 'fees', element: <Fees /> },
];

export default parent_router;
