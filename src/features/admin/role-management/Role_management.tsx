import React, { useState } from 'react';
import { Table, Button, Input, Form, Select, Card, Space, Tag, Typography, Dropdown } from 'antd';
import type { TableProps, MenuProps } from 'antd';
import {
  PlusOutlined,
  ArrowLeftOutlined,
  EllipsisOutlined,
  EditOutlined,
  DeleteOutlined,
} from '@ant-design/icons';

const { Title } = Typography;
const { Search } = Input;
const { Option } = Select;

// --- Interfaces ---
interface Role {
  key: string;
  name: string;
  contact: string;
  email: string;
  department: string;
  permissions: string[];
}

interface Teacher {
  id: string;
  name: string;
  contact: string;
  email: string;
}

// --- Mock Data ---
const MOCK_TEACHERS: Teacher[] = [
  { id: '1', name: 'Xyz', contact: '01793245', email: 'xyz@xyz.com' },
  { id: '2', name: 'Abc', contact: '01812345', email: 'abc@abc.com' },
  { id: '3', name: 'Def', contact: '01998765', email: 'def@def.com' },
];

const MOCK_DEPARTMENTS = ['Class Teacher', 'Admin', 'Accounts', 'Library'];
const MOCK_PERMISSIONS = [
  'View student',
  'Parent Info check',
  'Bulk SMS Send',
  'Edit Grades',
  'Manage Attendance',
  'View Reports',
];

const INITIAL_ROLES: Role[] = [
  {
    key: '1',
    name: 'Xyz',
    contact: '01793245',
    email: 'xyz@xyz.com',
    department: 'Class Teacher',
    permissions: ['View student', 'Parent Info check', 'Bulk SMS Send'],
  },
];

export default function Role_management() {
  const [view, setView] = useState<'list' | 'add'>('list');
  const [roles, setRoles] = useState<Role[]>(INITIAL_ROLES);
  const [searchText, setSearchText] = useState('');
  const [form] = Form.useForm();

  // --- Search Logic ---
  const filteredRoles = roles.filter((role) => {
    const searchLower = searchText.toLowerCase();
    return (
      role.name.toLowerCase().includes(searchLower) ||
      role.department.toLowerCase().includes(searchLower) ||
      role.contact.includes(searchLower)
    );
  });

  // --- Actions ---
  const handleDelete = (key: string) => {
    setRoles(roles.filter((role) => role.key !== key));
  };

  const getActionMenu = (record: Role): MenuProps => ({
    items: [
      {
        key: 'edit',
        label: 'Edit',
        icon: <EditOutlined />,
        onClick: () => {
          // Placeholder for Edit logic
          console.log('Edit role', record);
        },
      },
      {
        key: 'delete',
        label: 'Delete',
        icon: <DeleteOutlined />,
        danger: true,
        onClick: () => handleDelete(record.key),
      },
    ],
  });

  // --- Table Columns ---
  const columns: TableProps<Role>['columns'] = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Contact',
      key: 'contact',
      render: (_, record) => (
        <div>
          <div>{record.contact}</div>
          <div style={{ fontSize: '12px', color: '#888' }}>{record.email}</div>
        </div>
      ),
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Permission',
      key: 'permissions',
      render: (_, record) => (
        <>
          {record.permissions.map((perm) => (
            <Tag
              color="blue"
              key={perm}
              style={{ marginBottom: 4 }}
            >
              {perm}
            </Tag>
          ))}
        </>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 80,
      render: (_, record) => (
        <Dropdown
          menu={getActionMenu(record)}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button
            type="text"
            icon={<EllipsisOutlined style={{ fontSize: '20px', transform: 'rotate(90deg)' }} />}
          />
        </Dropdown>
      ),
    },
  ];

  // --- Form Submit ---
  const handleFinish = (values: any) => {
    const teacher = MOCK_TEACHERS.find((t) => t.id === values.teacherId);
    if (!teacher) return;

    const newRole: Role = {
      key: Math.random().toString(36).substr(2, 9),
      name: teacher.name,
      contact: teacher.contact,
      email: teacher.email,
      department: values.department, // Can be from list or created
      permissions: values.permissions,
    };

    setRoles([...roles, newRole]);
    form.resetFields();
    setView('list');
  };

  return (
    <div className="w-full  mx-auto space-y-6">
      {/* --- LIST VIEW --- */}
      {view === 'list' && (
        <Card>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
            <Title
              level={4}
              style={{ margin: 0 }}
            >
              Manage All Department
            </Title>
            <Space wrap>
              <Search
                placeholder="Search roles..."
                allowClear
                onSearch={(value) => setSearchText(value)}
                onChange={(e) => setSearchText(e.target.value)}
                style={{ width: 250 }}
              />
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={() => setView('add')}
                className="bg-green-600 hover:bg-green-500" // Custom color to match greenish hint if desired, or standard Primary
              >
                Add
              </Button>
            </Space>
          </div>

          <Table
            columns={columns}
            dataSource={filteredRoles}
            pagination={{ pageSize: 5 }}
            scroll={{ x: true }} // Responsive table
            bordered
          />
        </Card>
      )}

      {/* --- ADD VIEW --- */}
      {view === 'add' && (
        <Card
          title="Add Role"
          extra={
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => setView('list')}
            >
              Back
            </Button>
          }
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleFinish}
            style={{ maxWidth: 600, margin: '0 auto' }}
          >
            <Form.Item
              label="Select Teacher"
              name="teacherId"
              rules={[{ required: true, message: 'Please select a teacher!' }]}
            >
              <Select placeholder="Select a teacher">
                {MOCK_TEACHERS.map((t) => (
                  <Option
                    key={t.id}
                    value={t.id}
                  >
                    {t.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Select Department"
              name="department"
              rules={[{ required: true, message: 'Please select or enter a department!' }]}
            >
              {/* Using standard select with tags mode allowing creation */}
              <Select
                placeholder="Select or type department"
                // mode="tags" // Uncomment if truly 'Creatable' (typing new values) is needed.
                // If just 'Select' from fixed list, remove `mode="tags"`.
                // User requirements were "Select Department", Diagram said "Creatable Select".
                // I'll enable showSearch for better UX on select, and stick to select for now unless 'tags' behavior is explicitly confirmed as 'typing arbitrary text'.
                // Given "Creatable Select" note in diagram, tags is best fit.
                showSearch
                optionFilterProp="children"
              >
                {MOCK_DEPARTMENTS.map((dept) => (
                  <Option
                    key={dept}
                    value={dept}
                  >
                    {dept}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Select Permission"
              name="permissions"
              rules={[{ required: true, message: 'Please select permissions!' }]}
            >
              <Select
                mode="multiple"
                placeholder="Select permissions"
              >
                {MOCK_PERMISSIONS.map((perm) => (
                  <Option
                    key={perm}
                    value={perm}
                  >
                    {perm}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                block
                size="large"
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Card>
      )}
    </div>
  );
}
