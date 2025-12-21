import { Button, Card, Col, Row, Select, Statistic, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import dayjs from 'dayjs';
import { AlertCircle, CheckCircle, Clock, Download, FileText, Wallet } from 'lucide-react';
import React, { useMemo, useState } from 'react';

const { Title, Text } = Typography;

interface PaymentRecord {
  transactionId: string;
  month: string;
  year: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Failed';
  paymentDate?: string;
  paymentMethod?: 'SSLCommerz' | 'Bank Transfer' | 'Cash' | 'Mobile Banking';
}

const paymentHistoryData: PaymentRecord[] = [
  {
    transactionId: 'TXN-20250112-001',
    month: 'January',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-01-12',
    paymentMethod: 'SSLCommerz',
  },
  {
    transactionId: 'TXN-20250211-002',
    month: 'February',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-02-11',
    paymentMethod: 'Mobile Banking',
  },
  {
    transactionId: 'TXN-20250315-003',
    month: 'March',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-03-15',
    paymentMethod: 'Bank Transfer',
  },
  {
    transactionId: 'TXN-20250410-004',
    month: 'April',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-04-10',
    paymentMethod: 'SSLCommerz',
  },
  {
    transactionId: 'TXN-20250608-005',
    month: 'June',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-06-08',
    paymentMethod: 'Cash',
  },
  {
    transactionId: 'TXN-20250709-006',
    month: 'July',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-07-09',
    paymentMethod: 'SSLCommerz',
  },
  {
    transactionId: 'TXN-20250910-007',
    month: 'September',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-09-10',
    paymentMethod: 'Mobile Banking',
  },
  {
    transactionId: 'TXN-20251012-008',
    month: 'October',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-10-12',
    paymentMethod: 'SSLCommerz',
  },
  {
    transactionId: 'TXN-20251111-009',
    month: 'November',
    year: '2025',
    amount: 3500,
    status: 'Paid',
    paymentDate: '2025-11-11',
    paymentMethod: 'Bank Transfer',
  },
  // 2024 Data
  {
    transactionId: 'TXN-20241210-001',
    month: 'December',
    year: '2024',
    amount: 3200,
    status: 'Paid',
    paymentDate: '2024-12-10',
    paymentMethod: 'SSLCommerz',
  },
  {
    transactionId: 'TXN-20241115-002',
    month: 'November',
    year: '2024',
    amount: 3200,
    status: 'Paid',
    paymentDate: '2024-11-15',
    paymentMethod: 'Mobile Banking',
  },
];

const Student_payment_history: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2025');

  const filteredData = useMemo(() => {
    return paymentHistoryData.filter((item) => item.year === selectedYear);
  }, [selectedYear]);

  const stats = useMemo(() => {
    const totalPaid = filteredData
      .filter((item) => item.status === 'Paid')
      .reduce((sum, item) => sum + item.amount, 0);
    const totalTransactions = filteredData.length;
    return { totalPaid, totalTransactions };
  }, [filteredData]);

  const columns: ColumnsType<PaymentRecord> = [
    {
      title: 'Transaction Info',
      dataIndex: 'transactionId',
      key: 'transactionId',
      render: (text, record) => (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700">{text}</span>
          <span className="text-xs text-gray-400">
            {record.paymentDate ? dayjs(record.paymentDate).format('DD MMM YYYY') : '-'}
          </span>
        </div>
      ),
    },
    {
      title: 'Description',
      key: 'description',
      render: (_, record) => (
        <div className="flex flex-col">
          <span className="font-medium text-gray-700">{record.month} Fee</span>
          <span className="text-xs text-gray-400 flex items-center gap-1">
            via {record.paymentMethod}
          </span>
        </div>
      ),
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => <span className="font-bold text-gray-700">৳ {amount}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: string) => {
        let color = 'default';
        let icon = null;
        if (status === 'Paid') {
          color = 'success';
          icon = <CheckCircle className="w-3 h-3" />;
        } else if (status === 'Pending') {
          color = 'warning';
          icon = <Clock className="w-3 h-3" />;
        } else {
          color = 'error';
          icon = <AlertCircle className="w-3 h-3" />;
        }
        return (
          <Tag
            icon={icon}
            color={color}
            className="flex items-center gap-1 w-fit"
          >
            {status}
          </Tag>
        );
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Button
          type="text"
          icon={<Download className="w-4 h-4" />}
          className="text-gray-500 hover:text-blue-600"
          onClick={() => alert(`Downloading receipt for ${record.transactionId}`)}
        >
          Receipt
        </Button>
      ),
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center mb-2">
        <Title
          level={3}
          className="text-gray-700 !mb-0"
        >
          Payment History
        </Title>
      </div>

      {/* Summary Cards */}
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <Card className="shadow-sm border-l-4 border-l-green-500 bg-green-500/10 rounded-lg">
            <Statistic
              title={
                <div className="flex items-center gap-2 text-gray-500">
                  <Wallet className="w-4 h-4" /> Total Paid ({selectedYear})
                </div>
              }
              value={stats.totalPaid}
              precision={0}
              prefix={<span className="text-green-600">৳</span>}
              formatter={(value) => <span className="text-green-700 font-bold">{value}</span>}
            />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <Card className="shadow-sm border-l-4 border-l-blue-500 bg-blue-500/10 rounded-lg">
            <Statistic
              title={
                <div className="flex items-center gap-2 text-gray-500">
                  <FileText className="w-4 h-4" /> Total Transactions
                </div>
              }
              value={stats.totalTransactions}
              precision={0}
              formatter={(value) => <span className="text-blue-700 font-bold">{value}</span>}
            />
          </Card>
        </Col>
      </Row>

      <Card
        className="shadow-sm border-gray-200 rounded-lg"
        title={
          <div className="flex justify-between items-center">
            <Text
              strong
              className="text-lg text-gray-700"
            >
              Transaction History
            </Text>
            <Select
              value={selectedYear}
              onChange={setSelectedYear}
              options={[
                { value: '2024', label: '2024' },
                { value: '2025', label: '2025' },
                { value: '2026', label: '2026' },
              ]}
              style={{ width: 120 }}
            />
          </div>
        }
      >
        <Table
          dataSource={filteredData}
          columns={columns}
          rowKey="transactionId"
          pagination={{ pageSize: 8 }}
        />
      </Card>
    </div>
  );
};

export default Student_payment_history;
