import ScrollToTop from '@/Hooks/ScrollTop';
import Auth_layout from '@/layouts/Auth_layout';
import { createBrowserRouter } from 'react-router-dom';
import student_router from './student_router';
import auth_router from './auth_router';

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
]);

export default router;
