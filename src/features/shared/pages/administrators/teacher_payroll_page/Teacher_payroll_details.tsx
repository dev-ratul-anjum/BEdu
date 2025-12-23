import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { ArrowLeftOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Select, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const { Title } = Typography;

interface PayrollHistoryRecord {
  key: string;
  month: string;
  year: string;
  amount: number;
  status: 'Paid' | 'Unpaid' | 'Pending';
  transactionId?: string;
  date: string;
}

const mockPayrollHistory: PayrollHistoryRecord[] = [
  {
    key: '1',
    month: 'October',
    year: '2023',
    amount: 5000,
    status: 'Paid',
    transactionId: 'TXN-123456',
    date: '2023-10-25',
  },
  {
    key: '2',
    month: 'September',
    year: '2023',
    amount: 5000,
    status: 'Paid',
    transactionId: 'TXN-789012',
    date: '2023-09-28',
  },
  {
    key: '3',
    month: 'August',
    year: '2023',
    amount: 5000,
    status: 'Paid',
    transactionId: 'TXN-456789',
    date: '2023-08-25',
  },
  {
    key: '4',
    month: 'July',
    year: '2023',
    amount: 4500,
    status: 'Unpaid',
    date: '-',
  },
  {
    key: '5',
    month: 'June',
    year: '2023',
    amount: 4500,
    status: 'Pending',
    date: '-',
  },
  {
    key: '6',
    month: 'May',
    year: '2023',
    amount: 5000,
    status: 'Paid',
    transactionId: 'TXN-987654',
    date: '2023-05-25',
  },
  {
    key: '7',
    month: 'December',
    year: '2022',
    amount: 4800,
    status: 'Paid',
    transactionId: 'TXN-654321',
    date: '2022-12-24',
  },
];

export default function Teacher_payroll_details() {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [yearFilter, setYearFilter] = useState<string>('All');

  const resetFilters = () => {
    setStatusFilter('All');
    setYearFilter('All');
  };

  const filteredData = mockPayrollHistory.filter((item) => {
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;
    const matchesYear = yearFilter === 'All' || item.year === yearFilter;
    return matchesStatus && matchesYear;
  });

  const columns: ColumnsType<PayrollHistoryRecord> = [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Year',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (val) => `৳${val.toLocaleString()}`,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'default';
        if (status === 'Paid') color = 'success';
        if (status === 'Unpaid') color = 'error';
        if (status === 'Pending') color = 'warning';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Transaction ID',
      dataIndex: 'transactionId',
      key: 'transactionId',
      render: (text) => text || 'N/A',
    },
    {
      title: 'Payment Date',
      dataIndex: 'date',
      key: 'date',
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
              <Button
                type="text"
                icon={<ArrowLeftOutlined />}
                onClick={() => navigate(-1)}
                className="mr-2"
              />
              <span className="text-lg font-bold align-middle">Payroll History - {teacherId}</span>
            </Col>
            <Col className="flex gap-4">
              <Select
                value={yearFilter}
                style={{ width: 120 }}
                onChange={setYearFilter}
                options={[
                  { value: 'All', label: 'All Years' },
                  { value: '2023', label: '2023' },
                  { value: '2022', label: '2022' },
                  { value: '2021', label: '2021' },
                ]}
              />
              <Select
                value={statusFilter}
                style={{ width: 120 }}
                onChange={setStatusFilter}
                options={[
                  { value: 'All', label: 'All Status' },
                  { value: 'Paid', label: 'Paid' },
                  { value: 'Unpaid', label: 'Unpaid' },
                  { value: 'Pending', label: 'Pending' },
                ]}
              />
              <Button
                danger
                onClick={resetFilters}
              >
                Reset Filters
              </Button>
              <Button icon={<PrinterOutlined />}>Print Report</Button>
            </Col>
          </Row>
        </div>

        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 10 }}
          scroll={{ x: true }}
        />
      </Card>
    </>
  );
}
