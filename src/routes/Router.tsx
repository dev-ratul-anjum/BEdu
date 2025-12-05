import ScrollToTop from '@/Hooks/ScrollTop';
import Auth_layout from '@/layouts/Auth_layout';
import { createBrowserRouter } from 'react-router-dom';
import student_router from './student_router';
import auth_router from './auth_router';
import Teacher_layout from '@/layouts/Teacher_layout';
import Student_layout from '@/layouts/Student_layout';
import Gurdian_layout from '@/layouts/Gurdian_layout';

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
    },
    {
        path: '/student',
        element: (
            <>
                <ScrollToTop />
                <Student_layout />
            </>
        ),
        children: student_router,
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
