import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';

import { SearchOutlined, PrinterOutlined } from '@ant-design/icons';
import { Button, Card, Input, Select, Table, Tag, Tooltip } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { useState } from 'react';

interface PaymentRecord {
  key: string;
  id: string;
  name: string;
  phone: string;
  month: string;
  year: string;
  amount: number;
  status: 'Paid' | 'Pending' | 'Unpaid';
  transactionId?: string;
  date: string;
}

const mockData: PaymentRecord[] = [
  {
    key: '1',
    id: 'T-2023001',
    name: 'Sarah Wilson',
    phone: '+1 234 567 890',
    month: 'October',
    year: '2023',
    amount: 5000,
    status: 'Paid',
    transactionId: 'TXN-123456',
    date: '2023-10-25',
  },
  {
    key: '2',
    id: 'T-2023002',
    name: 'James Rodriguez',
    phone: '+1 987 654 321',
    month: 'October',
    year: '2023',
    amount: 4800,
    status: 'Pending',
    date: '-',
  },
  {
    key: '3',
    id: 'T-2023003',
    name: 'Emily Chen',
    phone: '+1 456 789 012',
    month: 'September',
    year: '2023',
    amount: 5200,
    status: 'Paid',
    transactionId: 'TXN-789012',
    date: '2023-09-28',
  },
  {
    key: '4',
    id: 'T-2023001',
    name: 'Sarah Wilson',
    phone: '+1 234 567 890',
    month: 'September',
    year: '2023',
    amount: 5000,
    status: 'Paid',
    transactionId: 'TXN-112233',
    date: '2023-09-26',
  },
  {
    key: '5',
    id: 'T-2023002',
    name: 'James Rodriguez',
    phone: '+1 987 654 321',
    month: 'September',
    year: '2023',
    amount: 4800,
    status: 'Unpaid',
    date: '-',
  },
];

export default function Teacher_payroll_page() {
  const [searchText, setSearchText] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredData = mockData.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchText.toLowerCase()) ||
      item.id.toLowerCase().includes(searchText.toLowerCase()) ||
      item.phone.includes(searchText);
    const matchesStatus = statusFilter === 'All' || item.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const handlePrint = (record: PaymentRecord) => {
    const printContent = `
      <html>
        <head>
          <title>Payment Slip - ${record.id}</title>
          <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 40px; color: #333; }
            .header { text-align: center; margin-bottom: 30px; border-bottom: 2px solid #f0f0f0; padding-bottom: 20px; }
            .school-name { font-size: 24px; font-weight: bold; color: #2c3e50; margin: 0; }
            .slip-title { font-size: 16px; color: #7f8c8d; margin: 5px 0 0 0; text-transform: uppercase; letter-spacing: 1px; }
            .content { max-width: 500px; margin: 0 auto; }
            .row { display: flex; justify-content: space-between; margin-bottom: 15px; border-bottom: 1px dashed #eee; padding-bottom: 5px; }
            .label { font-weight: 600; color: #555; }
            .value { font-weight: 500; }
            .amount-row { margin-top: 20px; border-top: 2px solid #333; padding-top: 10px; border-bottom: none; }
            .amount { font-size: 1.4em; font-weight: bold; color: #000; }
            .status { padding: 4px 10px; border-radius: 12px; font-size: 0.85em; font-weight: bold; display: inline-block; }
            .paid { background: #d1fae5; color: #065f46; }
            .pending { background: #fef3c7; color: #92400e; }
            .unpaid { background: #fee2e2; color: #991b1b; }
            .footer { text-align: center; font-size: 12px; color: #aaa; margin-top: 50px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 class="school-name">Bright Future School</h1>
            <h2 class="slip-title">Official Payment Slip</h2>
          </div>
          <div class="content">
            <div class="row">
              <span class="label">Teacher Name</span>
              <span class="value">${record.name}</span>
            </div>
             <div class="row">
              <span class="label">Teacher ID</span>
              <span class="value">${record.id}</span>
            </div>
            <div class="row">
              <span class="label">Phone</span>
              <span class="value">${record.phone}</span>
            </div>
            
            <div style="height: 20px;"></div>

            <div class="row">
              <span class="label">Payment for</span>
              <span class="value">${record.month} ${record.year}</span>
            </div>
            <div class="row">
              <span class="label">Date</span>
              <span class="value">${record.date}</span>
            </div>
            <div class="row">
              <span class="label">Transaction ID</span>
              <span class="value">${record.transactionId || 'N/A'}</span>
            </div>
             <div class="row">
              <span class="label">Status</span>
              <span class="value">
                <span class="status ${record.status.toLowerCase()}">${record.status}</span>
              </span>
            </div>
             <div class="row amount-row">
              <span class="label">Total Amount</span>
              <span class="amount">৳${record.amount.toLocaleString()}</span>
            </div>
          </div>
          <div class="footer">
            <p>This document is computer generated and valid without signature.</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>
          <script>
            window.onload = function() { window.print(); }
          </script>
        </body>
      </html>
    `;

    const printWindow = window.open('', '_blank', 'width=800,height=800');
    if (printWindow) {
      printWindow.document.write(printContent);
      printWindow.document.close();
    }
  };

  const columns: ColumnsType<PaymentRecord> = [
    {
      title: 'Teacher ID',
      dataIndex: 'id',
      key: 'id',
      render: (text) => <span className="font-medium text-primary">{text}</span>,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Month / Year',
      key: 'period',
      render: (_, record) => `${record.month} ${record.year}`,
    },
    {
      title: 'Payment Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
      render: (amount) => <span className="font-semibold">৳{amount.toLocaleString()}</span>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        let color = 'default';
        if (status === 'Paid') color = 'success';
        if (status === 'Pending') color = 'warning';
        if (status === 'Unpaid') color = 'error';
        return <Tag color={color}>{status.toUpperCase()}</Tag>;
      },
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <div className="flex gap-2">
          <Tooltip title={record.status === 'Paid' ? 'Print Slip' : 'Payment Pending'}>
            <Button
              type="primary"
              ghost
              shape="circle"
              icon={<PrinterOutlined />}
              onClick={() => handlePrint(record)}
              disabled={record.status !== 'Paid'}
            />
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <Card className="rounded-lg shadow-sm border-0">
        <div className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-6 gap-4">
          <h2 className="text-lg font-bold">Teacher Payroll</h2>
          <div className="flex w-full md:w-auto gap-4">
            <Select
              defaultValue="All"
              className="w-full md:w-40"
              onChange={(value) => setStatusFilter(value)}
              options={[
                { value: 'All', label: 'All Status' },
                { value: 'Paid', label: 'Paid' },
                { value: 'Pending', label: 'Pending' },
                { value: 'Unpaid', label: 'Unpaid' },
              ]}
            />
            <Input
              prefix={<SearchOutlined className="text-gray-400" />}
              placeholder="Search by ID, Name, Phone..."
              className="w-full md:w-80"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
          </div>
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
