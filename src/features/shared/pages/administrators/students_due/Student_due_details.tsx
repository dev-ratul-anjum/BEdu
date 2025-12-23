import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { ArrowLeftOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Card, Col, Row, Select, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const { Title } = Typography;

interface PaymentHistoryRecord {
  key: string;
  date: string;
  month: string;
  totalFee: number;
  paidAmount: number;
  dueAmount: number;
  status: 'Cleared' | 'Due' | 'Partial';
  method: 'Cash' | 'Online' | 'Bank Transfer';
}

const mockPaymentHistory: PaymentHistoryRecord[] = [
  {
    key: '1',
    date: '2023-10-05',
    month: 'October',
    totalFee: 5000,
    paidAmount: 5000,
    dueAmount: 0,
    status: 'Cleared',
    method: 'Online',
  },
  {
    key: '2',
    date: '2023-09-05',
    month: 'September',
    totalFee: 5000,
    paidAmount: 5000,
    dueAmount: 0,
    status: 'Cleared',
    method: 'Cash',
  },
  {
    key: '3',
    date: '2023-08-10',
    month: 'August',
    totalFee: 5000,
    paidAmount: 2500,
    dueAmount: 2500,
    status: 'Partial',
    method: 'Bank Transfer',
  },
];

export default function Student_due_details() {
  const { studentId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const studentName = location.state?.name || '';
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredData = mockPaymentHistory.filter((item) => {
    if (statusFilter === 'All') return true;
    if (statusFilter === 'Paid') return item.status === 'Cleared';
    if (statusFilter === 'Unpaid') return ['Due', 'Partial'].includes(item.status);
    return true;
  });

  const columns: ColumnsType<PaymentHistoryRecord> = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
    },
    {
      title: 'Total Fee',
      dataIndex: 'totalFee',
      key: 'totalFee',
      render: (val) => `৳${val.toLocaleString()}`,
    },
    {
      title: 'Paid Amount',
      dataIndex: 'paidAmount',
      key: 'paidAmount',
      render: (val) => <span className="text-success">৳{val.toLocaleString()}</span>,
    },
    {
      title: 'Due Amount',
      dataIndex: 'dueAmount',
      key: 'dueAmount',
      render: (val) => <span className="text-danger font-bold">৳{val.toLocaleString()}</span>,
    },
    {
      title: 'Payment Method',
      dataIndex: 'method',
      key: 'method',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'default';
        if (status === 'Cleared') color = 'success';
        if (status === 'Due') color = 'error';
        if (status === 'Partial') color = 'warning';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
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
              <span className="text-lg font-bold align-middle">
                Payment History Of - {studentId} {studentName && `- ${studentName}`}
              </span>
            </Col>
            <Col className="flex gap-4">
              <Select
                defaultValue="All"
                style={{ width: 120 }}
                onChange={setStatusFilter}
                options={[
                  { value: 'All', label: 'All Status' },
                  { value: 'Paid', label: 'Paid' },
                  { value: 'Unpaid', label: 'Unpaid' },
                ]}
              />
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
