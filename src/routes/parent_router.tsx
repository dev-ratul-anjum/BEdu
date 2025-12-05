import Guardian from '@/features/parent/Guardian';
import Attendance_history from '@/features/parent/pages/attendance_history/Attendance_history';
import Child_profile from '@/features/parent/pages/child_profile/Child_profile';
import Child_result from '@/features/parent/pages/child_result/Child_result';
import Exam_schedule from '@/features/parent/pages/exam_schedule/Exam_schedule';
import Fees from '@/features/parent/pages/fees/Fees';
import Notice from '@/features/parent/pages/notice/Notice';

const parent_router = [
    { index: true, element: <Guardian /> },
    { path: 'child-profile', element: <Child_profile /> },
    { path: 'child-result', element: <Child_result /> },
    { path: 'attendance-history', element: <Attendance_history /> },
    { path: 'exam-schedule', element: <Exam_schedule /> },
    { path: 'fees', element: <Fees /> },
    { path: 'notice', element: <Notice /> },
];

export default parent_router;
