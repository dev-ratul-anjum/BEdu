import Scroll_to_top from '@/common/components/scroll-to-top';
import { get_current_user } from '@/features/auth/service/auth.queries';
import { redirectByRole } from '@/lib/utils';
import { useQuery } from '@tanstack/react-query';
import { Navigate, Outlet } from 'react-router-dom';

const Auth_layout = () => {
  const { data: user, isLoading } = useQuery(get_current_user());

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
      <Scroll_to_top />
      <Outlet />
    </>
  );
};

export default Auth_layout;
