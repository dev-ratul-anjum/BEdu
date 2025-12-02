import ScrollToTop from '@/Hooks/ScrollTop';
import Auth_layout from '@/layouts/Auth_layout';
import { createBrowserRouter } from 'react-router-dom';
import student_router from './student_router';
import auth_router from './auth_router';
import Teacher_layout from '@/layouts/Teacher_layout';
import Student_layout from '@/layouts/Student_layout';
import Guardian_layout from '@/layouts/Guardian_layout';
import Guardian_router from './guardian_router';
import guardian_router from './guardian_router';

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
    },
    {
        path: '/guardian',
        element: (
            <>
                <ScrollToTop />
                <Guardian_layout />
            </>
        ),
        children: guardian_router,
    },
]);

export default router;
