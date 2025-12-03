import React, { useMemo, useState } from 'react';
import { Space, Typography } from 'antd';
import Attendance_Header from './components/Attendance_header';
import Attendance_Overview from './components/Attendance_overview';
import Attendance_Table from './components/Attendance_table';

const { Title } = Typography;

interface Attendance_Record {
    key: string | number;
    date: string;
    day: string;
    status: 'present' | 'absent' | 'leave';
    remark?: string;
}

const sample_attendance: Record<string, Attendance_Record[]> = {
    'January 2025': [
        {
            key: 1,
            date: '01-01-2025',
            day: 'Wednesday',
            status: 'leave',
            remark: 'Holiday',
        },
        { key: 2, date: '02-01-2025', day: 'Thursday', status: 'present' },
        { key: 3, date: '03-01-2025', day: 'Friday', status: 'present' },
        { key: 4, date: '04-01-2025', day: 'Saturday', status: 'absent' },
        { key: 5, date: '05-01-2025', day: 'Sunday', status: 'leave' },
        { key: 6, date: '06-01-2025', day: 'Monday', status: 'present' },
        { key: 7, date: '07-01-2025', day: 'Tuesday', status: 'present' },
        { key: 8, date: '08-01-2025', day: 'Wednesday', status: 'present' },
        { key: 9, date: '09-01-2025', day: 'Thursday', status: 'present' },
        { key: 10, date: '10-01-2025', day: 'Friday', status: 'absent' },
    ],
    'December 2024': [
        { key: 1, date: '01-12-2024', day: 'Sunday', status: 'leave' },
        { key: 2, date: '02-12-2024', day: 'Monday', status: 'present' },
        { key: 3, date: '03-12-2024', day: 'Tuesday', status: 'present' },
        { key: 4, date: '04-12-2024', day: 'Wednesday', status: 'present' },
        { key: 5, date: '05-12-2024', day: 'Thursday', status: 'present' },
        { key: 6, date: '06-12-2024', day: 'Friday', status: 'absent' },
        { key: 7, date: '07-12-2024', day: 'Saturday', status: 'leave' },
        { key: 8, date: '08-12-2024', day: 'Sunday', status: 'leave' },
        { key: 9, date: '09-12-2024', day: 'Monday', status: 'present' },
        { key: 10, date: '10-12-2024', day: 'Tuesday', status: 'present' },
    ],
    'November 2024': [
        { key: 1, date: '01-11-2024', day: 'Friday', status: 'present' },
        { key: 2, date: '02-11-2024', day: 'Saturday', status: 'leave' },
        { key: 3, date: '03-11-2024', day: 'Sunday', status: 'leave' },
        { key: 4, date: '04-11-2024', day: 'Monday', status: 'present' },
        { key: 5, date: '05-11-2024', day: 'Tuesday', status: 'present' },
        { key: 6, date: '06-11-2024', day: 'Wednesday', status: 'absent' },
        { key: 7, date: '07-11-2024', day: 'Thursday', status: 'present' },
        { key: 8, date: '08-11-2024', day: 'Friday', status: 'present' },
        { key: 9, date: '09-11-2024', day: 'Saturday', status: 'leave' },
        { key: 10, date: '10-11-2024', day: 'Sunday', status: 'leave' },
    ],
};

const Attendance_history: React.FC = () => {
    const [selected_month, set_selected_month] =
        useState<string>('January 2025');

    // student name shown in header (replace with real data when available)
    const student_name = 'Johnnie Rau';

    const records = useMemo(
        () => sample_attendance[selected_month] || [],
        [selected_month]
    );

    const total_days = useMemo(() => records.length, [records]);

    const present_days = useMemo(() => {
        return records.filter(r => r.status === 'present').length;
    }, [records]);

    const absent_days = useMemo(() => {
        return records.filter(r => r.status === 'absent').length;
    }, [records]);

    const month_options = Object.keys(sample_attendance).map(m => ({
        label: m,
        value: m,
    }));

    return (
        <div className="w-full">
            <div className="mb-6">
                <Title
                    level={3}
                    className="!mb-0"
                >
                    {student_name}
                </Title>
            </div>

            <Space
                direction="vertical"
                size="large"
                className="w-full"
            >
                <Attendance_Header
                    selected_month={selected_month}
                    on_month_change={val => set_selected_month(String(val))}
                    month_options={month_options}
                />

                <div className="mb-6">
                    <Attendance_Overview
                        total_days={total_days}
                        present_days={present_days}
                        absent_days={absent_days}
                    />
                </div>

                <Attendance_Table records={records} />
            </Space>
        </div>
    );
};

export default Attendance_history;
