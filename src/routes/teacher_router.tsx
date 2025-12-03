import StudentAddPage from '@/features/teacher/pages/StudentAddPage';
import Dashboard_page from '@/pages/dashboard/teacher/dashboard_page';
import NoticeBoardPage from '@/pages/dashboard/teacher/notice_board_page';
import Teacher_profile from '@/pages/dashboard/teacher/profile_page';
import RoutineSchedulePage from '@/pages/dashboard/teacher/routine_schedule_page';
import UserManagementPage from '@/pages/dashboard/teacher/user_management_page';

const teacher_router = [
    { index: true, element: <Dashboard_page /> },
    { path: 'profile', element: <Teacher_profile /> },
    { path: 'users', element: <UserManagementPage /> },
    { path: 'routine', element: <RoutineSchedulePage /> },
    { path: 'notice', element: <NoticeBoardPage /> },
    { path: 'student-addmission', element: <StudentAddPage /> },
];

export default teacher_router;
