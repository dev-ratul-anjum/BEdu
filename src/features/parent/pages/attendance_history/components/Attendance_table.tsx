import React from 'react';
import { Table, Typography, Tag } from 'antd';

const { Text } = Typography;

interface Attendance_Record {
    key: string | number;
    date: string;
    day: string;
    status: 'present' | 'absent' | 'leave';
    remark?: string;
}

interface Attendance_TableProps {
    records: Attendance_Record[];
}

const Attendance_Table: React.FC<Attendance_TableProps> = ({ records }) => {
    const get_status_color = (status: string) => {
        switch (status) {
            case 'present':
                return 'success';
            case 'absent':
                return 'error';
            case 'leave':
                return 'warning';
            default:
                return 'default';
        }
    };

    const columns = [
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
            render: (t: string) => <Text className="font-medium">{t}</Text>,
        },
        {
            title: 'Day',
            dataIndex: 'day',
            key: 'day',
            render: (d: string) => <Text>{d}</Text>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (status: string) => (
                <Tag
                    color={get_status_color(status)}
                    className="capitalize"
                >
                    {status}
                </Tag>
            ),
        },
        {
            title: 'Remark',
            dataIndex: 'remark',
            key: 'remark',
            render: (_: any, record: Attendance_Record) => (
                <Text className="text-sm text-gray-500">
                    {record.remark || '-'}
                </Text>
            ),
        },
    ];

    return (
        <Table
            dataSource={records}
            columns={columns}
            pagination={{ pageSize: 10 }}
            className="border rounded-lg"
        />
    );
};

export default Attendance_Table;
