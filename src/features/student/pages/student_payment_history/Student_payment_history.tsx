import React from 'react';
import { Card, Table, Tag, Button } from 'antd';
import dayjs from 'dayjs';

interface PaymentRecord {
    month: string;
    amount: number;
    status: 'Paid' | 'Unpaid';
    paymentDate?: string;
}

const paymentHistoryData: PaymentRecord[] = [
    {
        month: 'January',
        amount: 3500,
        status: 'Paid',
        paymentDate: '2025-01-12',
    },
    {
        month: 'February',
        amount: 3500,
        status: 'Paid',
        paymentDate: '2025-02-11',
    },
    { month: 'March', amount: 3500, status: 'Paid', paymentDate: '2025-03-15' },
    { month: 'April', amount: 3500, status: 'Paid', paymentDate: '2025-04-10' },
    { month: 'May', amount: 3500, status: 'Unpaid' },
    { month: 'June', amount: 3500, status: 'Paid', paymentDate: '2025-06-08' },
    { month: 'July', amount: 3500, status: 'Paid', paymentDate: '2025-07-09' },
    { month: 'August', amount: 3500, status: 'Unpaid' },
    {
        month: 'September',
        amount: 3500,
        status: 'Paid',
        paymentDate: '2025-09-10',
    },
    {
        month: 'October',
        amount: 3500,
        status: 'Paid',
        paymentDate: '2025-10-12',
    },
    {
        month: 'November',
        amount: 3500,
        status: 'Paid',
        paymentDate: '2025-11-11',
    },
    { month: 'December', amount: 3500, status: 'Unpaid' },
];

const Student_payment_history: React.FC = () => {
    const columns = [
        {
            title: 'Month',
            dataIndex: 'month',
            key: 'month',
            render: (text: string) => <b>{text}</b>,
        },
        {
            title: 'Amount (৳)',
            dataIndex: 'amount',
            key: 'amount',
            render: (amt: number) => (
                <span style={{ fontWeight: 600 }}>{amt}</span>
            ),
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) =>
                status === 'Paid' ? (
                    <Tag
                        color="green"
                        style={{ padding: '5px 12px', fontSize: 14 }}
                    >
                        Paid
                    </Tag>
                ) : (
                    <Tag
                        color="red"
                        style={{ padding: '5px 12px', fontSize: 14 }}
                    >
                        Unpaid
                    </Tag>
                ),
        },
        {
            title: 'Payment Date',
            dataIndex: 'paymentDate',
            key: 'paymentDate',
            render: (date?: string) =>
                date ? dayjs(date).format('DD MMM YYYY') : '-',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: PaymentRecord) =>
                record.status === 'Paid' ? (
                    <>
                        <Button
                            size="small"
                            style={{ marginRight: 8 }}
                            onClick={() =>
                                alert(`Download receipt for ${record.month}`)
                            }
                        >
                            Download
                        </Button>
                        <Button
                            size="small"
                            onClick={() => window.print()}
                        >
                            Print
                        </Button>
                    </>
                ) : (
                    <span style={{ color: '#999' }}>N/A</span>
                ),
        },
    ];

    return (
        <div style={{ padding: 25 }}>
            <Card
                title="Payment History (Last 12 Months)"
                style={{ maxWidth: 900, margin: 'auto' }}
            >
                <Table
                    dataSource={paymentHistoryData}
                    columns={columns}
                    rowKey="month"
                    pagination={false}
                />
            </Card>
        </div>
    );
};

export default Student_payment_history;
