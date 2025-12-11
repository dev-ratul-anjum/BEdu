import { DynamicBreadcrumb } from '@/common/components/Breadcrumbs';
import { Space, Table, TableProps } from 'antd';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

type TUser_data_type = {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'uknown';
  father_name: string;
  date_of_birth: string;
  father_occupation: string;
  email: string;
  class: string;
  section: string;
  roll: string;
  address: string;
  phone: string;
};

const user_data: TUser_data_type[] = [
  {
    id: '1',
    name: 'Ikram',
    gender: 'male',
    father_name: 'Ismail',
    date_of_birth: '2005-04-28',
    father_occupation: 'Libririan',
    email: 'ikram@gmail.com',
    class: 'class 6',
    section: 'section b',
    roll: 'R32',
    address: 'Sylhet, Kazitula',
    phone: '+880 1712829340',
  },
];

const columns: TableProps<TUser_data_type>['columns'] = [
  {
    title: 'Roll',
    dataIndex: 'roll',
    key: 'roll',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Class',
    dataIndex: 'class',
    key: 'class',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Section',
    dataIndex: 'section',
    key: 'section',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Father Name',
    dataIndex: 'father_name',
    key: 'father_name',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Date of Birth',
    dataIndex: 'date_of_birth',
    key: 'date_of_birth',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Phone',
    dataIndex: 'phone',
    key: 'phone',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <span>{text}</span>,
  },
  {
    title: 'Action',
    key: 'action',
    render: (_, user) => (
      <Space size="middle">
        <Link
          to={user.id}
          className="text-blue-500"
        >
          See details
        </Link>
        <button className="text-red-500">Delete</button>
      </Space>
    ),
  },
];

export default function Super_admin_students_page() {
  return (
    <main className="min-h-screen bg-gray-50 p-4 font-sans">
      <h1 className="mb-3 text-3xl font-semibold">All Students</h1>
      <DynamicBreadcrumb className="mb-6" />

      {/* --- Filters & Search Bar --- */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6">
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
          {/* Search */}
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by Roll..."
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
          </div>
        </div>
      </div>

      {/* table */}
      <Table<TUser_data_type>
        columns={columns}
        dataSource={user_data}
      />
    </main>
  );
}
