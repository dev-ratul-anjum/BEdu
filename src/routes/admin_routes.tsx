import { Navigate, RouteObject } from 'react-router-dom';
import Admin_page from '../features/admin/Admin';
import Management from '@/features/admin/management/Management';
import Teacher_management from '@/features/admin/management/teacher_management/Teacher_management';
import Add_teacher from '@/features/admin/management/teacher_management/add_teacher/Add_teacher';
import Teacher_profile from '@/features/admin/management/teacher_management/teacher_profile/Teacher_profile';
import Admin_dashboard from '@/features/admin/dashboard/Admin_dashboard';
import Role_management from '@/features/admin/role-management/Role_management';
import Student_management from '@/features/admin/management/student_management/Student_management';
import Add_student from '@/features/admin/management/student_management/add_student/Add_student';

const admin_routes = [
  { path: 'dashboard', element: <Admin_dashboard /> },
  { path: 'role-management', element: <Role_management /> },
  // { path: 'dashboard', element: <Admin_page /> },
  { path: 'management', element: <Management /> },
  { path: 'management/teacher-management', element: <Teacher_management /> },
  { path: 'management/teacher-management/add-teacher', element: <Add_teacher /> },
  {
    path: 'management/teacher-management/teacher-profile/:teacherId',
    element: <Teacher_profile />,
  },

  { path: 'management/student-management', element: <Student_management /> },
  { path: 'management/student-management/add-student', element: <Add_student /> },

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
