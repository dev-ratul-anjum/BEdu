import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Input, Row, Select, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface StudentRecord {
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

const mockStudents: StudentRecord[] = [
  {
    id: '0024',
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
    id: '0025',
    name: 'Sarah Connor',
    gender: 'Female',
    class: '2',
    subject: 'Physics',
    section: 'B',
    address: 'CA-202 Los Angeles',
    phone: '+1 456 7890123',
    email: 'sarah.connor@example.com',
    avatar: 'Sarah',
  },
  {
    id: '0026',
    name: 'John Doe',
    gender: 'Male',
    class: '2',
    subject: 'MATH',
    section: 'C',
    address: 'TX-303 Austin',
    phone: '+1 789 0123456',
    email: 'john.doe@example.com',
    avatar: 'John',
  },
];

export default function Students_page() {
  const [searchText, setSearchText] = useState('');
  const [classFilter, setClassFilter] = useState('All');
  const [sectionFilter, setSectionFilter] = useState('All');

  const resetFilters = () => {
    setSearchText('');
    setClassFilter('All');
    setSectionFilter('All');
  };

  const filteredData = mockStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.phone.includes(searchText) ||
      student.email.toLowerCase().includes(searchText.toLowerCase());
    const matchesClass = classFilter === 'All' || student.class === classFilter;
    const matchesSection = sectionFilter === 'All' || student.section === sectionFilter;
    return matchesSearch && matchesClass && matchesSection;
  });

  const columns: ColumnsType<StudentRecord> = [
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
          style={{ backgroundColor: '#1890ff' }}
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
          <h2 className="text-lg font-bold">All Students Data</h2>
          <Link to="/admin/student-admission">
            <Button
              type="primary"
              icon={<PlusOutlined />}
            >
              ADD STUDENT
            </Button>
          </Link>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search by Name, Phone, Email..."
            className="w-full md:w-80"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Select
            value={classFilter}
            className="w-full md:w-40"
            onChange={setClassFilter}
            options={[
              { value: 'All', label: 'All Classes' },
              { value: '1', label: 'Class 1' },
              { value: '2', label: 'Class 2' },
              { value: '3', label: 'Class 3' },
            ]}
          />
          <Select
            value={sectionFilter}
            className="w-full md:w-40"
            onChange={setSectionFilter}
            options={[
              { value: 'All', label: 'All Sections' },
              { value: 'A', label: 'Section A' },
              { value: 'B', label: 'Section B' },
              { value: 'C', label: 'Section C' },
            ]}
          />
          <Button
            danger
            onClick={resetFilters}
          >
            Reset Filters
          </Button>
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
