import { useAuth } from '@/contexts/Auth_context';
import { Navigate, Outlet } from 'react-router-dom';

const Protected_route = ({ allowedRole }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (!user || user.data.role !== allowedRole)
        return (
            <Navigate
                to="/"
                replace
            />
        );

    return <Outlet />;
};

export default Protected_route;
