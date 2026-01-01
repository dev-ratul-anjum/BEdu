import { Button } from '@/common/components/shadcn-ui/button';
import { Link } from 'react-router-dom';
import Teacher_table, { TTeacherTable } from './components/Teacher_table';

const mockTeachers: TTeacherTable[] = [
  {
    key: '1',
    id: '32452',
    name: 'Full Name',
    designation: 'Designation',
    address: 'Jamalpur Sadar',
    phone: '0143242345',
    email: 'xyz@xyz.com',
    avatar: 'https://placehold.co/100',
  },
  {
    key: '2',
    id: '32453',
    name: 'Jane Doe',
    designation: 'Assistant Teacher',
    address: 'Dhaka City',
    phone: '0198765432',
    email: 'jane@example.com',
    avatar: 'https://placehold.co/100',
  },
];

export default function Teacher_management_page() {
  return (
    <main>
      <header className="flex items-center justify-between mt-4 mb-6">
        <h1 className="text-3xl font-semibold">Teacher Management</h1>

        <Button asChild>
          <Link to={'add-teacher'}>Add Teacher</Link>
        </Button>
      </header>

      <Teacher_table teachers={mockTeachers} />
    </main>
  );
}
