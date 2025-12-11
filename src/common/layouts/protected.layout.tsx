import { get_current_user } from '@/features/auth/service/auth.queries';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

const Protected_layout = ({ allowedRole }) => {
  const { data: user, isLoading } = useQuery(get_current_user());

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

export default Protected_layout;
