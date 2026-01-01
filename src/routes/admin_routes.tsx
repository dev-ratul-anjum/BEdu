import { Navigate, RouteObject } from 'react-router-dom';
import Admin_page from '../features/admin/Admin';
import Management from '@/features/admin/management/Management';
import Teacher_management from '@/features/admin/management/teacher_management/Teacher_management';
import Add_teacher from '@/features/admin/management/teacher_management/add_teacher/Add_teacher';
import Teacher_profile from '@/features/admin/management/teacher_management/teacher_profile/Teacher_profile';
import Admin_dashboard from '@/features/admin/dashboard/Admin_dashboard';
import Role_management from '@/features/admin/role-management/Role_management';
import Department_management from '@/features/admin/management/department_management/Department_management';
import Department_form from '@/features/admin/management/department_management/Department_form';
import Class_management from '@/features/admin/management/class_management/Class_management';
import Class_form from '@/features/admin/management/class_management/Class_form';
import Class_details from '@/features/admin/management/class_management/Class_details';
import Section_edit from '@/features/admin/management/class_management/Section_edit';

const admin_routes = [
  { path: 'dashboard', element: <Admin_dashboard /> },
  { path: 'role-management', element: <Role_management /> },

  // Department Management Routes
  { path: 'management/department-management', element: <Department_management /> },
  { path: 'management/department-management/add', element: <Department_form /> },
  { path: 'management/department-management/edit/:id', element: <Department_form /> },

  // Class Management Routes
  { path: 'management/class-management', element: <Class_management /> },
  { path: 'management/class-management/add', element: <Class_form /> },
  { path: 'management/class-management/edit/:id', element: <Class_form /> },
  { path: 'management/class-management/:id', element: <Class_details /> },
  { path: 'management/class-management/:id/section/edit/:sectionId', element: <Section_edit /> },

  // { path: 'dashboard', element: <Admin_page /> },
  { path: 'management', element: <Management /> },
  { path: 'management/teacher-management', element: <Teacher_management /> },
  { path: 'management/teacher-management/add-teacher', element: <Add_teacher /> },
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
