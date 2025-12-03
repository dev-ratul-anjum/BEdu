import React from 'react';
import { Card, Select, Button, DatePicker, Typography } from 'antd';
import { Calendar, Download } from 'lucide-react';
import dayjs from 'dayjs';

const { Title } = Typography;

interface Attendance_HeaderProps {
    selected_month: string;
    on_month_change: (month: string) => void;
    month_options: { label: string; value: string }[];
}

const Attendance_Header: React.FC<Attendance_HeaderProps> = ({
    selected_month,
    on_month_change,
    month_options,
}) => {
    return (
        <Card className="shadow-sm border-gray-200 mb-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-cyan-500" />
                    <Title
                        level={4}
                        className="!mb-0"
                    >
                        Attendance Record
                    </Title>
                </div>

                <div className="flex items-center gap-3">
                    <Select
                        value={selected_month}
                        onChange={on_month_change}
                        options={month_options}
                        style={{ width: 180 }}
                    />

                    <Button
                        type="primary"
                        icon={<Download className="h-4 w-4" />}
                    >
                        Download
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default Attendance_Header;
