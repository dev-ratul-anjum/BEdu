import { Navigate, RouteObject } from 'react-router-dom';
import Admin_page from '../features/admin/Admin';
import Management from '@/features/admin/management/Management';
import Teacher_management from '@/features/admin/management/teacher_management/Teacher_management';
import Add_teacher from '@/features/admin/management/teacher_management/add_teacher/Add_teacher';
import Teacher_profile from '@/features/admin/management/teacher_management/teacher_profile/Teacher_profile';
import All_notice from '@/features/admin/management/notice_management/Notice_management';
import Add_notice from '@/features/admin/management/notice_management/pages/add_new_notice/Add_notice';
import Notice_detail from '@/features/admin/management/notice_management/pages/notice_details/Notice_detail';

const admin_routes = [
  { path: 'dashboard', element: <Admin_dashboard /> },
  { path: 'role-management', element: <Role_management /> },
  // { path: 'dashboard', element: <Admin_page /> },
  { path: 'management', element: <Management /> },
  { path: 'management/teacher-management', element: <Teacher_management /> },
  { path: 'management/teacher-management/add-teacher', element: <Add_teacher /> },
  { path: 'management/notice-management', element: <All_notice /> },
  { path: 'management/notice-management/add-notice', element: <Add_notice /> },
  { path: 'management/notice-management/notice-details', element: <Notice_detail /> },
  {
    path: 'management/teacher-management/teacher-profile/:teacherId',
    element: <Teacher_profile />,
  },

  {
    index: true,
    element: (
      <Navigate
        replace
        to={'dashboard'}
      />
    ),
  },
] satisfies RouteObject[];

export default admin_routes;
