import Parent from '@/features/parent/Parent';
import { Navigate } from 'react-router-dom';
const parent_routes = [
  { path: 'dashboard', element: <Parent /> },
  {
    index: true,
    element: (
      <Navigate
        replace
        to={'dashboard'}
      />
    ),
  },
];

export default parent_routes;
