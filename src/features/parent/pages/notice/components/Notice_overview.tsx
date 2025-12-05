import React from 'react';
import { Row, Col, Typography, Badge } from 'antd';
import { BookOpen, Eye, Pin } from 'lucide-react';

const { Title, Text } = Typography;

interface Notice_OverviewProps {
    total_notices: number;
    unread_notices: number;
    pinned_notices: number;
}

const Notice_Overview: React.FC<Notice_OverviewProps> = ({
    total_notices,
    unread_notices,
    pinned_notices,
}) => {
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
                                Total Notices
                            </Text>
                            <Title
                                level={3}
                                className="!mb-0"
                            >
                                {total_notices}
                            </Title>
                        </div>
                        <BookOpen className="h-8 w-8 text-cyan-500" />
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
                                Unread
                            </Text>
                            <Title
                                level={3}
                                className="!mb-0"
                            >
                                <Badge
                                    count={unread_notices}
                                    style={{
                                        backgroundColor: '#ef4444',
                                    }}
                                />
                            </Title>
                        </div>
                        <Eye className="h-8 w-8 text-purple-500" />
                    </div>
                </div>
            </Col>

            <Col
                xs={24}
                sm={8}
                md={8}
            >
                <div className="p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                    <div className="flex items-center justify-between">
                        <div>
                            <Text className="text-sm text-gray-600 block mb-2">
                                Pinned
                            </Text>
                            <Title
                                level={3}
                                className="!mb-0"
                            >
                                {pinned_notices}
                            </Title>
                        </div>
                        <Pin className="h-8 w-8 text-orange-500" />
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default Notice_Overview;
