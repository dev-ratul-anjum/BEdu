import Admin_dashboard from '@/features/admin/dashboard/Admin_dashboard';
import Management from '@/features/admin/management/Management';
import Class_details from '@/features/admin/management/class_management/Class_details';
import Class_form from '@/features/admin/management/class_management/Class_form';
import Class_management from '@/features/admin/management/class_management/Class_management';
import Section_edit from '@/features/admin/management/class_management/Section_edit';
import Department_form from '@/features/admin/management/department_management/Department_form';
import Department_management from '@/features/admin/management/department_management/Department_management';
import Notice_management_page from '@/features/admin/management/notice_management/Notice_management_page';
import Add_notice_page from '@/features/admin/management/notice_management/pages/add_new_notice/Add_notice_page';
import Notice_detail_page from '@/features/admin/management/notice_management/pages/notice_details/Notice_detail_page';
import Student_management from '@/features/admin/management/student_management/Student_management';
import Student_profile from '@/features/admin/management/student_management/Student_profile/Student_profile';
import Add_student from '@/features/admin/management/student_management/add_student/Add_student';
import Teacher_management_page from '@/features/admin/management/teacher_management/Teacher_management_page';
import Add_teacher from '@/features/admin/management/teacher_management/add_teacher/Add_teacher';
import Teacher_profile from '@/features/admin/management/teacher_management/teacher_profile/Teacher_profile';
import Role_management from '@/features/admin/role-management/Role_management';
import { Navigate, RouteObject } from 'react-router-dom';

const admin_routes = [
  { path: 'dashboard', element: <Admin_dashboard /> },
  { path: 'role-management', element: <Role_management /> },

  { path: 'management', element: <Management /> },

  // teacher Management Routes
  { path: 'management/teacher-management', element: <Teacher_management_page /> },
  { path: 'management/teacher-management/add-teacher', element: <Add_teacher /> },
  {
    path: 'management/teacher-management/edit-teacher/:teacherId',
    element: <div>Edit Teacher</div>,
  },
  {
    path: 'management/teacher-management/:teacherId',
    element: <Teacher_profile />,
  },

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

  { path: 'management/notice-management', element: <Notice_management_page /> },
  { path: 'management/notice-management/add-notice', element: <Add_notice_page /> },
  { path: 'management/notice-management/edit-notice/:noticeId', element: <div>Edit Notice</div> },
  { path: 'management/notice-management/:noticeId', element: <Notice_detail_page /> },
  { path: 'management/student-management', element: <Student_management /> },
  { path: 'management/student-management/add-student', element: <Add_student /> },
  {
    path: 'management/student-management/student-profile/:studentId',
    element: <Student_profile />,
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
