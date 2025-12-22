import { Navigate } from 'react-router-dom';

const parent_router = [
  { index: true, element: <Navigate to="dashboard" /> },

  { path: 'dashboard', element: <div>Parent Dashboard</div> },
  { path: 'children', element: <div>Parent Children</div> },
  { path: 'payments', element: <div>Parent payments</div> },
  { path: 'notices', element: <div>Parent notices</div> },

  // { index: true, element: <Parent /> },
  // { path: 'profile', element: <Parent_profile /> },
  // { path: 'child-profile', element: <Child_profile /> },
  // { path: 'child-result', element: <Child_result /> },
  // { path: 'notice', element: <Notice /> },
  // { path: 'exam-schedule', element: <Exam_schedule /> },
  // { path: 'fees', element: <Fees /> },
];

export default parent_router;
