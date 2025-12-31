import { Eye, Pencil, Trash2, Plus, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Avatar, Space, Button, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface TeacherType {
  key: string;
  id: string;
  name: string;
  designation: string;
  address: string;
  phone: string;
  email: string;
  avatar: string;
}

export default function Teacher_management() {
  const navigate = useNavigate();

  // Mock data
  const teachers: TeacherType[] = [
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

  const [searchText, setSearchText] = useState('');

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchText.toLowerCase()) ||
      teacher.id.toLowerCase().includes(searchText.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchText.toLowerCase()) ||
      teacher.phone.toLowerCase().includes(searchText.toLowerCase())
  );

  const columns: ColumnsType<TeacherType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Photo',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (text) => (
        <Avatar
          src={text}
          size={48}
        />
      ),
    },
    {
      title: 'Name and Designation',
      key: 'name_designation',
      render: (_, record) => (
        <div className="flex flex-col">
          <span className="font-semibold text-slate-800 text-base">{record.name}</span>
          <span className="text-slate-500 text-sm">{record.designation}</span>
        </div>
      ),
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
      render: (text) => <span className="text-slate-600">{text}</span>,
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
      render: (text) => <span className="text-slate-600">{text}</span>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <button
            onClick={() =>
              navigate(`/admin/management/teacher-management/teacher-profile/${record.id}`)
            }
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors"
          >
            <Eye size={16} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors">
            <Pencil size={16} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-red-100 bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Teacher Management</h1>
      </header>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-medium text-slate-700">List of Teacher</h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <Input
                prefix={
                  <Search
                    size={18}
                    className="text-slate-400"
                  />
                }
                placeholder="Search by ID, name..."
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="w-full sm:w-64"
                allowClear
              />
              <Button
                onClick={() => setSearchText('')}
                disabled={!searchText}
              >
                Reset
              </Button>
            </div>

            <button
              onClick={() => navigate('/admin/management/teacher-management/add-teacher')}
              className="flex items-center gap-2 rounded-xl border-2 border-primary border-dashed bg-blue-50 px-4 py-2 text-primary font-medium hover:bg-primary/10 transition-colors whitespace-nowrap"
            >
              <Plus size={18} />
              Add New Teacher
            </button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredTeachers}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            showTotal: (total) => `Total ${total} items`,
          }}
          className="overflow-hidden"
        />
      </div>
    </div>
  );
}
