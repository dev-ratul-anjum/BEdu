import React from 'react';
import { Row, Col, Typography, Tag } from 'antd';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const { Title, Text } = Typography;

interface Attendance_OverviewProps {
    total_days: number;
    present_days: number;
    absent_days: number;
}

const Attendance_Overview: React.FC<Attendance_OverviewProps> = ({
    total_days,
    present_days,
    absent_days,
}) => {
    const attendance_percentage =
        total_days > 0 ? ((present_days / total_days) * 100).toFixed(1) : 0;

    return (
        <Row gutter={[16, 16]}>
            <Col
                xs={24}
                sm={8}
                md={8}
            >
                <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <Text className="text-sm text-gray-600 block mb-2">
                                Attendance
                            </Text>
                            <Title
                                level={3}
                                className="!mb-0"
                            >
                                {attendance_percentage}%
                            </Title>
                        </div>
                        <CheckCircle className="h-8 w-8 text-green-500" />
                    </div>
                </div>
            </Col>

            <Col
                xs={24}
                sm={8}
                md={8}
            >
                <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <Text className="text-sm text-gray-600 block mb-2">
                                Present
                            </Text>
                            <Title
                                level={3}
                                className="!mb-0"
                            >
                                {present_days}/{total_days}
                            </Title>
                        </div>
                        <CheckCircle className="h-8 w-8 text-blue-500" />
                    </div>
                </div>
            </Col>

            <Col
                xs={24}
                sm={8}
                md={8}
            >
                <div className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <Text className="text-sm text-gray-600 block mb-2">
                                Absent
                            </Text>
                            <Title
                                level={3}
                                className="!mb-0"
                            >
                                {absent_days}
                            </Title>
                        </div>
                        <XCircle className="h-8 w-8 text-red-500" />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Attendance_Overview;
