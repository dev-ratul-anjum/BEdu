import Login_page from '@/features/auth/pages/Login_page';
import Forget_pass from '@/pages/auth/forget_pass/Forget_pass';
import Sign_in from '@/pages/auth/sign_in/Sign_in';

import Sign_up from '@/pages/auth/sign_up/Sign_up';

const auth_router = [
    {
        path: '/',
        element: <Login_page />,
    },
    {
        path: '/sign-in',
        element: <Sign_in />,
    },
    {
        path: '/sign-up',
        element: <Sign_up />,
    },
    {
        path: '/forget-password',
        element: <Forget_pass />,
    },
];

export default auth_router;
