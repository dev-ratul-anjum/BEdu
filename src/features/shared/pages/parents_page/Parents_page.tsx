import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Input, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface ParentRecord {
  id: string;
  name: string;
  gender: 'Male' | 'Female';
  occupation: string;
  address: string;
  phone: string;
  email: string;
  childrenCount: number;
}

const mockParents: ParentRecord[] = [
  {
    id: 'P-0020',
    name: 'Mark Jhon',
    gender: 'Male',
    occupation: 'Engineer',
    address: 'TA-107 Newyork',
    phone: '+1 123 9988568',
    email: 'mark@gmail.com',
    childrenCount: 2,
  },
  {
    id: 'P-0021',
    name: 'Sarah Miller',
    gender: 'Female',
    occupation: 'Doctor',
    address: 'CA-202 Los Angeles',
    phone: '+1 456 7890123',
    email: 'sarah.m@gmail.com',
    childrenCount: 1,
  },
  {
    id: 'P-0022',
    name: 'Christopher Nolan',
    gender: 'Male',
    occupation: 'Director',
    address: 'NY-505 Manhattan',
    phone: '+1 789 0123456',
    email: 'chris.nolan@gmail.com',
    childrenCount: 3,
  },
];

export default function Parents_page() {
  const [searchText, setSearchText] = useState('');

  const filteredData = mockParents.filter(
    (parent) =>
      parent.name.toLowerCase().includes(searchText.toLowerCase()) ||
      parent.phone.includes(searchText) ||
      parent.email.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns: ColumnsType<ParentRecord> = [
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
      key: 'avatar',
      render: (_, record) => (
        <Avatar
          style={{ backgroundColor: record.gender === 'Male' ? '#1890ff' : '#eb2f96' }}
          icon={<UserOutlined />}
        >
          {record.name[0]}
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
      title: 'Occupation',
      dataIndex: 'occupation',
      key: 'occupation',
    },
    {
      title: 'Children',
      dataIndex: 'childrenCount',
      key: 'childrenCount',
      render: (count) => (
        <Tag color="blue">
          {count} Child{count > 1 ? 'ren' : ''}
        </Tag>
      ),
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
          <h2 className="text-lg font-bold">All Parents Data</h2>
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
