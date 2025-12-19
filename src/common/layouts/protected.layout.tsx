import { Outlet } from 'react-router-dom';
import { TUser_Role } from '../types/models';

export default function Protected_layout({ allowed_role }: { allowed_role: TUser_Role }) {
  // const { data: user, isLoading } = useQuery(get_current_user());

  // if (isLoading) {
  //   return (
  //     <div className="flex justify-center items-center min-h-screen bg-gray-50">
  //       <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  //     </div>
  //   );
  // }

  // if (!user || user.role !== allowed_role)
  //   return (
  //     <Navigate
  //       to="/"
  //       replace
  //     />
  //   );

  return <Outlet />;
}
