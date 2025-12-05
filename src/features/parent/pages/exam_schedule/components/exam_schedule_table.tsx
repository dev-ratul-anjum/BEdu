import React, { useMemo } from 'react';
import { Table, Tag, Typography } from 'antd';

const { Text } = Typography;

export interface Schedule_Record {
    key: string | number;
    exam_name: string;
    subject: string;
    date: string; // display date
    time: string;
    venue: string;
    teacher: string;
    class_name?: string;
}

interface Exam_Schedule_TableProps {
    records: Schedule_Record[];
    selected_exams: string[];
    search_query: string;
}

const Exam_Schedule_Table: React.FC<Exam_Schedule_TableProps> = ({
    records,
    selected_exams,
    search_query,
}) => {
    const filtered = useMemo(() => {
        const q = (search_query || '').trim().toLowerCase();
        return records
            .filter(r =>
                selected_exams.length > 0
                    ? selected_exams.includes(r.exam_name)
                    : true
            )
            .filter(r => {
                if (!q) return true;
                return (
                    r.subject.toLowerCase().includes(q) ||
                    r.teacher.toLowerCase().includes(q) ||
                    r.venue.toLowerCase().includes(q) ||
                    r.exam_name.toLowerCase().includes(q)
                );
            });
    }, [records, selected_exams, search_query]);

    const columns = [
        {
            title: 'Exam',
            dataIndex: 'exam_name',
            key: 'exam_name',
            render: (t: string) => <Text className="font-medium">{t}</Text>,
        },
        {
            title: 'Subject',
            dataIndex: 'subject',
            key: 'subject',
        },
        {
            title: 'Date',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
        },
        {
            title: 'Venue',
            dataIndex: 'venue',
            key: 'venue',
        },
        {
            title: 'Teacher',
            dataIndex: 'teacher',
            key: 'teacher',
        },
        {
            title: 'Class',
            dataIndex: 'class_name',
            key: 'class_name',
            render: (c: string) => c || '-',
        },
    ];

    return (
        <Table
            dataSource={filtered}
            columns={columns}
            pagination={{ pageSize: 10 }}
            className="border rounded-lg"
        />
    );
};

export default Exam_Schedule_Table;
