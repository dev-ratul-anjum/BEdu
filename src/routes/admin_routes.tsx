import Admin_dashboard from '@/features/admin/dashboard/Admin_dashboard';
import Management from '@/features/admin/management/Management';
import Notice_management_page from '@/features/admin/management/notice_management/Notice_management_page';
import Add_notice_page from '@/features/admin/management/notice_management/pages/add_new_notice/Add_notice_page';
import Notice_detail_page from '@/features/admin/management/notice_management/pages/notice_details/Notice_detail_page';
import Teacher_management from '@/features/admin/management/teacher_management/Teacher_management';
import Add_teacher from '@/features/admin/management/teacher_management/add_teacher/Add_teacher';
import Teacher_profile from '@/features/admin/management/teacher_management/teacher_profile/Teacher_profile';
import Role_management from '@/features/admin/role-management/Role_management';
import { Navigate, RouteObject } from 'react-router-dom';

const admin_routes = [
  { path: 'dashboard', element: <Admin_dashboard /> },
  { path: 'role-management', element: <Role_management /> },
  { path: 'management', element: <Management /> },

  { path: 'management/teacher-management', element: <Teacher_management /> },
  { path: 'management/teacher-management/add-teacher', element: <Add_teacher /> },
  {
    path: 'management/teacher-management/teacher-profile/:teacherId',
    element: <Teacher_profile />,
  },

  { path: 'management/notice-management', element: <Notice_management_page /> },
  { path: 'management/notice-management/add-notice', element: <Add_notice_page /> },
  { path: 'management/notice-management/edit-notice/:noticeId', element: <div>Edit Notice</div> },
  { path: 'management/notice-management/:noticeId', element: <Notice_detail_page /> },

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
