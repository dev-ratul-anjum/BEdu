import StudentAddPage from '@/features/teacher/pages/StudentAddPage';
import Dashboard_page from '@/features/teacher/pages/dashboard_page';
import NoticeBoardPage from '@/features/teacher/pages/notice_board_page';
import Teacher_profile from '@/features/teacher/pages/profile_page';
import RoutineSchedulePage from '@/features/teacher/pages/routine_schedule_page';
import UserManagementPage from '@/features/teacher/pages/user_management_page';

const teacher_router = [
    { index: true, element: <Dashboard_page /> },
    { path: 'profile', element: <Teacher_profile /> },
    { path: 'users', element: <UserManagementPage /> },
    { path: 'routine', element: <RoutineSchedulePage /> },
    { path: 'notice', element: <NoticeBoardPage /> },
    { path: 'student-addmission', element: <StudentAddPage /> },
];

export default teacher_router;
