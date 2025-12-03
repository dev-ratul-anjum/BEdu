import ScrollToTop from '@/Hooks/ScrollTop';
import Auth_layout from '@/layouts/Auth_layout';
import { createBrowserRouter } from 'react-router-dom';
import student_router from './student_router';
import auth_router from './auth_router';
import Teacher_layout from '@/layouts/Teacher_layout';
import Student_layout from '@/layouts/Student_layout';
import Gurdian_layout from '@/layouts/Gurdian_layout';
import NoticeBoardPage from '@/pages/dashboard/teacher/notice_board_page';
import RoutineSchedulePage from '@/pages/dashboard/teacher/routine_schedule_page';
import UserManagementPage from '@/pages/dashboard/teacher/user_management_page';
import Dashboard_page from '@/pages/dashboard/teacher/dashboard_page';
import teacher_router from './teacher_router';

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <ScrollToTop />
                <Auth_layout />
            </>
        ),
        children: auth_router,
    },
    {
        path: '/teacher',
        element: (
            <>
                <ScrollToTop />
                <Teacher_layout />
            </>
        ),
        children: teacher_router,
    },
    {
        path: '/student',
        element: (
            <>
                <ScrollToTop />
                <Student_layout />
            </>
        ),
    },
    {
        path: '/gurdian',
        element: (
            <>
                <ScrollToTop />
                <Gurdian_layout />
            </>
        ),
    },
]);

export default router;
