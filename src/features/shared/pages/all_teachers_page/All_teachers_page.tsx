import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Input, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface TeacherRecord {
  id: string;
  name: string;
  gender: string;
  class: string;
  subject: string;
  section: string;
  address: string;
  phone: string;
  email: string;
  avatar: string;
}

const mockTeachers: TeacherRecord[] = [
  {
    id: '0021',
    name: 'Mark Willy',
    gender: 'Male',
    class: '2',
    subject: 'English',
    section: 'A',
    address: 'TA-107 Newyork',
    phone: '+1 123 9988568',
    email: 'kazifahim93@gmail.com',
    avatar: 'Mark',
  },
  {
    id: '0022',
    name: 'Sarah Connor',
    gender: 'Female',
    class: '2',
    subject: 'Physics',
    section: 'A',
    address: 'CA-202 Los Angeles',
    phone: '+1 456 7890123',
    email: 'sarah.connor@example.com',
    avatar: 'Sarah',
  },
  {
    id: '0023',
    name: 'John Doe',
    gender: 'Male',
    class: '2',
    subject: 'MATH',
    section: 'B',
    address: 'TX-303 Austin',
    phone: '+1 789 0123456',
    email: 'john.doe@example.com',
    avatar: 'John',
  },
];

export default function All_teachers_page() {
  const [searchText, setSearchText] = useState('');

  const filteredData = mockTeachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchText.toLowerCase()) ||
      teacher.phone.includes(searchText) ||
      teacher.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns: ColumnsType<TeacherRecord> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => (
        <Link
          to={text}
          className="font-semibold text-primary hover:underline"
        >
          #{text}
        </Link>
      ),
    },
    {
      title: 'Photo',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (name) => (
        <Avatar
          style={{ backgroundColor: '#f56a00' }}
          icon={<UserOutlined />}
        >
          {name[0]}
        </Avatar>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <Link
          to={record.id}
          className="font-medium hover:text-primary hover:underline"
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'E-mail',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Link to={record.id}>
          <Button
            type="primary"
            size="small"
          >
            Details
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <Card className="rounded-lg shadow-sm border-0">
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-6 gap-4">
          <h2 className="text-lg font-bold">All Teachers Data</h2>
          <Link to="/admin/add-new-teacher">
            <Button
              type="primary"
              icon={<PlusOutlined />}
            >
              ADD TEACHER
            </Button>
          </Link>
        </div>

        <div className="mb-6">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search by ID, Name, Phone..."
            className="w-full md:w-80"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: true }}
          rowKey="id"
        />
      </Card>
    </>
  );
}
