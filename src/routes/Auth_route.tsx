import { useAuth } from '@/contexts/Auth_context';
import ScrollToTop from '@/Hooks/ScrollTop';
import { Navigate, Outlet } from 'react-router-dom';

export const redirectByRole = (role: string) => {
    switch (role) {
        case 'TEACHER':
            return '/teacher-dashboard';
        case 'STUDENT':
            return '/student-dashboard';
        case 'GUARDIAN':
            return '/guardian-dashboard';
        default:
            return '/';
    }
};

const Auth_route = () => {
    const { user, isLoading } = useAuth();
    console.log('auth route', user);
    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (user) {
        return (
            <Navigate
                to={redirectByRole(user.data.role)}
                replace
            />
        );
    }
    return (
        <>
            <ScrollToTop />
            <Outlet />
        </>
    );
};

export default Auth_route;
