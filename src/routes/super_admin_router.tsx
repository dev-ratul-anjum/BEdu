import Dashboard_page from '@/features/super_admin/pages/dashboard_page';
import NoticeBoardPage from '@/features/super_admin/pages/notice_board_page';
import RoutineSchedulePage from '@/features/super_admin/pages/routine_schedule_page';
import UserManagementPage from '@/features/super_admin/pages/user_management_page';
import StudentAddPage from '@/features/teacher/pages/StudentAddPage';

const super_admin_router = [
    { index: true, element: <Dashboard_page /> },
    { path: 'users', element: <UserManagementPage /> },
    { path: 'routine', element: <RoutineSchedulePage /> },
    { path: 'notice', element: <NoticeBoardPage /> },
    { path: 'student-addmission', element: <StudentAddPage /> },
];

export default super_admin_router;
