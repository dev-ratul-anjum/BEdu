import React from 'react';
import { Table, Button, Tag } from 'antd';

export type Invoice = {
    key: string;
    invoice_no: string;
    student_name: string;
    due_date: string;
    amount: number;
    status: 'paid' | 'due' | 'overdue';
};

export const Fees_Table: React.FC<{
    data: Invoice[];
    on_pay?: (row: Invoice) => void;
    on_view?: (row: Invoice) => void;
}> = ({ data, on_pay, on_view }) => {
    const columns = [
        { title: 'Invoice', dataIndex: 'invoice_no', key: 'invoice_no' },
        { title: 'Student', dataIndex: 'student_name', key: 'student_name' },
        { title: 'Due Date', dataIndex: 'due_date', key: 'due_date' },
        {
            title: 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: (v: number) => `৳ ${v.toFixed(2)}`,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (s: Invoice['status']) => {
                const color =
                    s === 'paid' ? 'green' : s === 'overdue' ? 'red' : 'gold';
                return <Tag color={color}>{s.toUpperCase()}</Tag>;
            },
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_: any, record: Invoice) => (
                <div className="flex gap-2">
                    <Button
                        size="small"
                        onClick={() => on_pay && on_pay(record)}
                        type="primary"
                    >
                        Pay
                    </Button>
                    <Button
                        size="small"
                        onClick={() => on_view && on_view(record)}
                    >
                        View
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
        />
    );
};

export default Fees_Table;
