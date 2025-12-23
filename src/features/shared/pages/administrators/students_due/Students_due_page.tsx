import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { SearchOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Row, Select, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const { Title } = Typography;

interface StudentDueRecord {
  key: string;
  studentId: string;
  name: string;
  class: string;
  section: string;
  roll: number;
  month: string;
  totalFee: number;
  paidAmount: number;
  dueAmount: number;
  status: 'Cleared' | 'Due';
  admitCardEligible: boolean;
}

const mockData: StudentDueRecord[] = [
  {
    key: '1',
    studentId: 'S-2023001',
    name: 'John Doe',
    class: 'Class 10',
    section: 'A',
    roll: 1,
    month: 'October',
    totalFee: 5000,
    paidAmount: 5000,
    dueAmount: 0,
    status: 'Cleared',
    admitCardEligible: true,
  },
  {
    key: '2',
    studentId: 'S-2023002',
    name: 'Jane Smith',
    class: 'Class 10',
    section: 'A',
    roll: 2,
    month: 'October',
    totalFee: 5000,
    paidAmount: 2000,
    dueAmount: 3000,
    status: 'Due',
    admitCardEligible: false,
  },
  {
    key: '3',
    studentId: 'S-2023003',
    name: 'Alice Johnson',
    class: 'Class 10',
    section: 'B',
    roll: 1,
    month: 'October',
    totalFee: 5000,
    paidAmount: 0,
    dueAmount: 5000,
    status: 'Due',
    admitCardEligible: false,
  },
  {
    key: '4',
    studentId: 'S-2023004',
    name: 'Bob Brown',
    class: 'Class 9',
    section: 'A',
    roll: 5,
    month: 'October',
    totalFee: 4000,
    paidAmount: 4000,
    dueAmount: 0,
    status: 'Cleared',
    admitCardEligible: true,
  },
];

export default function Students_due_page() {
  const [searchText, setSearchText] = useState('');
  const [selectedClass, setSelectedClass] = useState<string>('All');
  const [selectedSection, setSelectedSection] = useState<string>('All');
  const [selectedMonth, setSelectedMonth] = useState<string>('October');

  const resetFilters = () => {
    setSearchText('');
    setSelectedClass('All');
    setSelectedSection('All');
  };

  const filteredData = mockData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.studentId.toLowerCase().includes(searchText.toLowerCase());
    const matchesClass = selectedClass === 'All' || item.class === selectedClass;
    const matchesSection = selectedSection === 'All' || item.section === selectedSection;
    const matchesMonth = selectedMonth === 'All' || item.month === selectedMonth;

    return matchesSearch && matchesClass && matchesSection && matchesMonth;
  });

  const columns: ColumnsType<StudentDueRecord> = [
    {
      title: 'Student ID',
      dataIndex: 'studentId',
      key: 'studentId',
      render: (text, record) => (
        <Link
          to={`/admin/students-due/${text}`}
          state={{ name: record.name }}
          className="font-medium text-primary hover:underline"
        >
          {text}
        </Link>
      ),
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
    },
    {
      title: 'Roll',
      dataIndex: 'roll',
      key: 'roll',
    },
    {
      title: 'Total Fee',
      dataIndex: 'totalFee',
      key: 'totalFee',
      render: (val) => `৳${val.toLocaleString()}`,
    },
    {
      title: 'Paid',
      dataIndex: 'paidAmount',
      key: 'paidAmount',
      render: (val) => <span className="text-success">৳{val.toLocaleString()}</span>,
    },
    {
      title: 'Due',
      dataIndex: 'dueAmount',
      key: 'dueAmount',
      render: (val) => <span className="text-danger font-bold">৳{val.toLocaleString()}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Cleared' ? 'success' : 'error'}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: 'Admit Card',
      key: 'admitCard',
      render: (_, record) => (
        <Tag
          color={record.admitCardEligible ? 'blue' : 'default'}
          bordered={false}
        >
          {record.admitCardEligible ? 'ELIGIBLE' : 'NOT ELIGIBLE'}
        </Tag>
      ),
    },
  ];

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <Card className="rounded-lg shadow-sm border-0">
        <div className="border-b pb-4 mb-6">
          <Row
            justify="space-between"
            align="middle"
            gutter={[16, 16]}
          >
            <Col>
              <Title
                level={4}
                style={{ margin: 0 }}
              >
                Student Due List
              </Title>
              <span className="text-gray-500 text-sm">
                Monitor payments and admit card eligibility
              </span>
            </Col>
            <Col>
              <Button icon={<PrinterOutlined />}>Print Report</Button>
            </Col>
          </Row>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <Select
            defaultValue="Select Class"
            className="w-full lg:w-40"
            onChange={setSelectedClass}
            options={[
              { value: 'Select Class', label: 'Select Class' },
              { value: 'Class 6', label: 'Class 6' },
              { value: 'Class 7', label: 'Class 7' },
              { value: 'Class 8', label: 'Class 8' },
              { value: 'Class 9', label: 'Class 9' },
              { value: 'Class 10', label: 'Class 10' },
            ]}
          />
          <Select
            defaultValue="Select Section"
            className="w-full lg:w-40"
            onChange={setSelectedSection}
            options={[
              { value: 'Select Section', label: 'Select Section' },
              { value: 'A', label: 'Section A' },
              { value: 'B', label: 'Section B' },
            ]}
          />
          <Input
            prefix={<SearchOutlined className="text-gray-400" />}
            placeholder="Search Student..."
            className="w-full lg:w-64"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
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
          rowClassName={(record) =>
            !record.admitCardEligible ? 'bg-red-50 hover:bg-red-100 transition-colors' : ''
          }
        />
      </Card>
    </>
  );
}
