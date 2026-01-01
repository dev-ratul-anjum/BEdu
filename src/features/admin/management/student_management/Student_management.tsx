import { Eye, Pencil, Trash2, Plus, Search } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Avatar, Button, Input, Select } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface StudentType {
  key: string;
  id: string;
  name: string;
  class: string;
  section: string;
  address: string;
  phone: string;
  email: string;
  avatar: string;
}

export default function Student_management() {
  const navigate = useNavigate();

  // Mock data
  const students: StudentType[] = [
    {
      key: '1',
      id: '32452',
      name: 'Simon',
      class: '5',
      section: 'A',
      address: 'Jamalpur Sadar',
      phone: '0143242345',
      email: 'simon@simon.com',
      avatar: 'https://placehold.co/100',
    },
    {
      key: '2',
      id: '32453',
      name: 'Jhony',
      class: '6',
      section: 'B',
      address: 'Dhaka City',
      phone: '0198765432',
      email: 'jhony@jhony.com',
      avatar: 'https://placehold.co/100',
    },
  ];

  const [searchText, setSearchText] = useState('');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const filteredStudents = students.filter(
    (student) =>
      (selectedClass ? student.class === selectedClass : true) &&
      (student.name.toLowerCase().includes(searchText.toLowerCase()) ||
        student.id.toLowerCase().includes(searchText.toLowerCase()) ||
        student.email.toLowerCase().includes(searchText.toLowerCase()) ||
        student.phone.toLowerCase().includes(searchText.toLowerCase()))
  );

  const columns: ColumnsType<StudentType> = [
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
      title: 'Name and Class',
      key: 'name_class',
      render: (_, record) => (
        <div className="flex flex-col">
          <span className="font-semibold text-slate-800 text-base">{record.name}</span>
          <span className="text-slate-500 text-sm">
            Class: {record.class}, Section : {record.section}
          </span>
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
              navigate(`/admin/management/student-management/student-profile/${record.id}`)
            }
            className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-primary transition-colors"
          >
            <Eye size={16} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-500 hover:bg-slate-50 hover:text-blue-600 transition-colors">
            <Pencil size={16} />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-red-100 bg-red-50 text-red-500 hover:bg-red-100 transition-colors">
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6">
      <header className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-gray-800">Student Management</h1>
      </header>

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-medium text-slate-700">List of Student</h2>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="flex items-center gap-2">
              <Select
                placeholder="Select by class"
                style={{ width: 150 }}
                allowClear
                onChange={(value) => setSelectedClass(value)}
                options={[
                  { value: '1', label: 'Class 1' },
                  { value: '2', label: 'Class 2' },
                  { value: '3', label: 'Class 3' },
                  { value: '4', label: 'Class 4' },
                  { value: '5', label: 'Class 5' },
                  { value: '6', label: 'Class 6' },
                  { value: '7', label: 'Class 7' },
                  { value: '8', label: 'Class 8' },
                  { value: '9', label: 'Class 9' },
                  { value: '10', label: 'Class 10' },
                ]}
              />
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
                onClick={() => {
                  setSearchText('');
                  setSelectedClass(null);
                }}
                disabled={!searchText && !selectedClass}
              >
                Reset
              </Button>
            </div>

            <button
              onClick={() => navigate('/admin/management/student-management/add-student')}
              className="flex items-center gap-2 rounded-md border-2 border-primary border-dashed bg-blue-50 px-4 py-2 text-primary font-medium hover:bg-primary/10 transition-colors whitespace-nowrap"
            >
              <Plus size={18} />
              Add New Student
            </button>
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={filteredStudents}
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
