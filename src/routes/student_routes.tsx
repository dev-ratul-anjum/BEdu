import { Navigate, RouteObject } from 'react-router-dom';

const student_routes = [
  { index: true, element: <Navigate to="dashboard" /> },

  { path: 'dashboard', element: <div>Student Dashboard</div> },
  { path: 'attendance', element: <div>Student Attendance</div> },
  { path: 'routine', element: <div>Student routine</div> },
  { path: 'results', element: <div>Student results</div> },
  { path: 'fees', element: <div>Student fees</div> },
  { path: 'notices', element: <div>Student notices</div> },

  // {
  //   index: true,
  //   element: <Student />,
  // },
  // {
  //   path: 'routine',
  //   element: <Student_routine />,
  // },
  // {
  //   path: 'profile',
  //   element: (
  //     <Student_profile
  //       student={{
  //         id: 1,
  //         name: 'John Doe',
  //         age: 16,
  //         grade: '10th Grade',
  //         email: 'johndoe@gmail.com',
  //         phone: '123-456-7890',
  //         address: '123 Main St, Cityville',
  //         profilePicture: 'https://randomuser.me/api/portraits/men/75.jpg',
  //         subjects: ['Math', 'Science', 'History', 'English'],
  //         attendance: 95,
  //         extraActivities: ['Basketball', 'Debate Club'],
  //       }}
  //     />
  //   ),
  // },
  // {
  //   path: 'attendance',
  //   element: <Student_attendance />,
  // },
  // {
  //   path: 'fees',
  //   element: <Student_fees />,
  // },
  // {
  //   path: 'payment-history',
  //   element: <Student_payment_history />,
  // },
] satisfies RouteObject[];

export default student_routes;
