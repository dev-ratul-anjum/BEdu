import {
  Button,
  Card,
  Col,
  Divider,
  Modal,
  Radio,
  Row,
  Select,
  Space,
  Statistic,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { AlertCircle, CheckCircle, CreditCard, Download, Info, Wallet } from 'lucide-react';
import { useMemo, useState } from 'react';

const { Title, Text } = Typography;

interface FeeDetail {
  title: string;
  amount: number;
}

interface MonthFee {
  key: string;
  month: string;
  year: string;
  details: FeeDetail[];
  status: 'Paid' | 'Unpaid' | 'Overdue';
  dueDate: string;
}

const feeData: MonthFee[] = [
  {
    key: '1',
    month: 'January',
    year: '2025',
    details: [
      { title: 'Tuition Fee', amount: 2000 },
      { title: 'Library Fee', amount: 500 },
      { title: 'Lab Fee', amount: 500 },
    ],
    status: 'Paid',
    dueDate: '10-01-2025',
  },
  {
    key: '2',
    month: 'February',
    year: '2025',
    details: [
      { title: 'Tuition Fee', amount: 2000 },
      { title: 'Sports Fee', amount: 300 },
    ],
    status: 'Paid',
    dueDate: '10-02-2025',
  },
  {
    key: '3',
    month: 'March',
    year: '2025',
    details: [
      { title: 'Tuition Fee', amount: 2000 },
      { title: 'Exam Fee', amount: 1000 },
    ],
    status: 'Unpaid',
    dueDate: '10-03-2025',
  },
  {
    key: '4',
    month: 'April',
    year: '2025',
    details: [{ title: 'Tuition Fee', amount: 2000 }],
    status: 'Unpaid',
    dueDate: '10-04-2025',
  },
  {
    key: '5',
    month: 'December',
    year: '2024',
    details: [
      { title: 'Tuition Fee', amount: 2000 },
      { title: 'Annual Fee', amount: 5000 },
    ],
    status: 'Overdue',
    dueDate: '10-12-2024',
  },
];

const Student_fees = () => {
  const [selectedYear, setSelectedYear] = useState<string>('2025');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'SSL' | 'Online'>('SSL');
  const [selectedFee, setSelectedFee] = useState<MonthFee | null>(null);

  // Filter data by year
  const filteredData = useMemo(() => {
    return feeData.filter((d) => d.year === selectedYear);
  }, [selectedYear]);

  // Calculate stats
  const stats = useMemo(() => {
    const total = feeData.reduce(
      (sum, item) => sum + item.details.reduce((s, d) => s + d.amount, 0),
      0
    );
    const paid = feeData
      .filter((item) => item.status === 'Paid')
      .reduce((sum, item) => sum + item.details.reduce((s, d) => s + d.amount, 0), 0);
    const due = total - paid;
    return { total, paid, due };
  }, []);

  const handlePayClick = (record: MonthFee) => {
    setSelectedFee(record);
    setIsModalOpen(true);
  };

  const handlePaymentConfirm = () => {
    // Determine the current total amount for the selected fee
    const amount = selectedFee?.details.reduce((acc, curr) => acc + curr.amount, 0) || 0;

    alert(`Processing ${paymentMethod} payment of ৳${amount} for ${selectedFee?.month}`);
    setIsModalOpen(false);
  };

  const columns: ColumnsType<MonthFee> = [
    {
      title: 'Month',
      dataIndex: 'month',
      key: 'month',
      render: (text, record) => (
        <div className="flex flex-col">
          <span className="font-semibold text-gray-700">{text}</span>
          <span className="text-xs text-gray-400">Due: {record.dueDate}</span>
        </div>
      ),
    },
    {
      title: 'Breakdown',
      key: 'details',
      render: (_, record) => (
        <Space
          size="small"
          wrap
        >
          {record.details.map((d, idx) => (
            <Tag
              key={idx}
              bordered={false}
              className="bg-gray-50 text-gray-600 text-xs"
            >
              {d.title}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: 'Total Amount',
      key: 'amount',
      render: (_, record) => {
        const total = record.details.reduce((acc, curr) => acc + curr.amount, 0);
        return <span className="font-bold text-gray-700">৳ {total}</span>;
      },
    },
    {
      title: 'Status',
      key: 'status',
      dataIndex: 'status',
      render: (status) => {
        let color = 'default';
        let icon = null;
        if (status === 'Paid') {
          color = 'success';
          icon = <CheckCircle className="w-3 h-3" />;
        } else if (status === 'Unpaid') {
          color = 'warning';
          icon = <Info className="w-3 h-3" />;
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
      title: 'Action',
      key: 'action',
      render: (_, record) => {
        if (record.status === 'Paid') {
          return (
            <Button
              type="primary"
              size="small"
              icon={<Download className="w-4 h-4" />}
              className="bg-primary hover:bg-primary/90"
            >
              Receipt
            </Button>
          );
        }
        return (
          <Button
            type="primary"
            size="small"
            className="bg-primary hover:bg-primary/90"
            onClick={() => handlePayClick(record)}
          >
            Pay Now
          </Button>
        );
      },
    },
  ];

  return (
    <div className="w-full space-y-6">
      <div className="flex justify-between items-center mb-2">
        <Title
          level={3}
          className="text-gray-700 !mb-0"
        >
          Fees Management
        </Title>
      </div>

      {/* Summary Cards */}
      <Row gutter={[16, 16]}>
        <Col
          xs={24}
          sm={8}
        >
          <Card className="shadow-sm border-l-4 border-l-primary bg-primary/20 rounded-lg">
            <Statistic
              title={
                <div className="flex items-center gap-2 text-gray-500">
                  <Wallet className="w-4 h-4" /> Total Payable
                </div>
              }
              value={stats.total}
              precision={0}
              prefix="৳"
              formatter={(value) => <span className="text-gray-800 font-bold">{value}</span>}
            />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={8}
        >
          <Card className="shadow-sm border-l-4 border-l-green-500 bg-green-500/20 rounded-lg">
            <Statistic
              title={
                <div className="flex items-center gap-2 text-gray-500">
                  <CheckCircle className="w-4 h-4" /> Total Paid
                </div>
              }
              value={stats.paid}
              precision={0}
              prefix={<span className="text-green-500">৳</span>}
              formatter={(value) => <span className="text-green-500 font-bold">{value}</span>}
            />
          </Card>
        </Col>
        <Col
          xs={24}
          sm={8}
        >
          <Card className="shadow-sm border-l-4 border-l-red-500 bg-red-500/20 rounded-lg">
            <Statistic
              title={
                <div className="flex items-center gap-2 text-gray-500">
                  <AlertCircle className="w-4 h-4" /> Total Due
                </div>
              }
              value={stats.due}
              precision={0}
              prefix={<span className="text-red-500">৳</span>}
              formatter={(value) => <span className="text-red-500 font-bold">{value}</span>}
            />
          </Card>
        </Col>
      </Row>

      {/* Fees Table */}
      <Card
        className="shadow-sm border-gray-200 rounded-lg"
        title={
          <div className="flex justify-between items-center">
            <Text
              strong
              className="text-lg text-gray-700"
            >
              Fees History
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
          columns={columns}
          dataSource={filteredData}
          pagination={{ pageSize: 5 }}
          rowKey="key"
        />
      </Card>

      {/* Payment Modal */}
      <Modal
        title={
          <div className="flex items-center gap-2 text-primary">
            <CreditCard className="w-5 h-5" /> Pay Fees
          </div>
        }
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[
          <Button
            key="cancel"
            type="primary"
            className="bg-primary hover:bg-primary/90"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handlePaymentConfirm}
            className="bg-primary hover:bg-primary/90"
          >
            Confirm Payment
          </Button>,
        ]}
      >
        {selectedFee && (
          <div className="space-y-4 py-4">
            <div className="bg-primary/20 p-4 rounded-lg flex justify-between items-center border border-primary/200">
              <div>
                <p className="text-sm text-primary font-medium">
                  {selectedFee.month} {selectedFee.year}
                </p>
                <p className="text-xs text-blue-400">Due Date: {selectedFee.dueDate}</p>
              </div>
              <div className="text-xl font-bold text-primary">
                ৳ {selectedFee.details.reduce((acc, curr) => acc + curr.amount, 0)}
              </div>
            </div>

            <Divider className="my-2" />

            <div>
              <p className="font-semibold mb-2">Select Payment Method:</p>
              <Radio.Group
                onChange={(e) => setPaymentMethod(e.target.value)}
                value={paymentMethod}
                className="w-full flex flex-col gap-2"
              >
                <Radio
                  value="SSL"
                  className="border p-3 rounded-md hover:border-primary/200 transition-colors"
                >
                  <span className="font-medium">SSLCommerz</span>
                  <span className="block text-xs text-gray-500">
                    Cards, Mobile Banking, Net Banking
                  </span>
                </Radio>
                <Radio
                  value="Online"
                  className="border p-3 rounded-md hover:border-primary/200 transition-colors"
                >
                  <span className="font-medium">Online Banking Payment</span>
                  <span className="block text-xs text-gray-500">Direct Bank Transfer</span>
                </Radio>
              </Radio.Group>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Student_fees;
