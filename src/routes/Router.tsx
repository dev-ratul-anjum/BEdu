import { createBrowserRouter } from 'react-router-dom';
import student_router from './student_router';
import auth_router from './auth_router';
import teacher_router from './teacher_router';
import Protected_route from './Protected_route';
import Auth_route from './Auth_route';
import Common_layout from '@/common/layout/Common_layout';
import {
    admin_menu_items,
    parent_menu_items,
    student_menu_items,
    super_admin_menu_items,
    teacher_menu_items,
} from '@/data/menu_items';
import super_admin_router from './super_admin_router';
import admin_router from './admin_router';
import parent_router from './parent_router';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Auth_route />,
        children: auth_router,
    },
    {
        path: '/super-admin-dashboard',
        element: <Protected_route allowedRole="SUPER_ADMIN" />,
        children: [
            {
                element: <Common_layout menuItems={super_admin_menu_items} />,
                children: super_admin_router,
            },
        ],
    },
    {
        path: '/admin-dashboard',
        element: <Protected_route allowedRole="ADMIN" />,
        children: [
            {
                element: <Common_layout menuItems={admin_menu_items} />,
                children: admin_router,
            },
        ],
    },
    {
        path: '/teacher-dashboard',
        element: <Protected_route allowedRole="TEACHER" />,
        children: [
            {
                element: <Common_layout menuItems={teacher_menu_items} />,
                children: teacher_router,
            },
        ],
    },

    {
        path: '/student-dashboard',
        element: <Protected_route allowedRole="STUDENT" />,
        children: [
            {
                element: <Common_layout menuItems={student_menu_items} />,
                children: student_router,
            },
        ],
    },

    {
        path: '/parent-dashboard',
        element: <Protected_route allowedRole="PARENT" />,
        children: [
            {
                element: <Common_layout menuItems={parent_menu_items} />,
                children: parent_router,
            },
        ],
    },
]);

export default router;
