import Guardian from '@/pages/dashboard/guardian/Guardian';
import Attendance_history from '@/pages/dashboard/guardian/pages/attendance_history/Attendance_history';
import Child_profile from '@/pages/dashboard/guardian/pages/child_profile/Child_profile';
import Child_result from '@/pages/dashboard/guardian/pages/child_result/Child_result';
import Notice from '@/pages/dashboard/guardian/pages/notice/Notice';

const guardian_router = [
    { index: true, element: <Guardian /> },
    { path: 'child-profile', element: <Child_profile /> },
    { path: 'child-result', element: <Child_result /> },
    { path: 'attendance-history', element: <Attendance_history /> },
    { path: 'Notice', element: <Notice /> },
];

export default guardian_router;
