import React from 'react';
import { Card, Avatar, Typography, Row, Col, Divider, Tag, Space } from 'antd';
import { Mail, Phone, MapPin, Calendar, BookOpen, Award } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

interface ChildProfileHeaderProps {
    childName?: string;
    class?: string;
    rollNumber?: string;
    section?: string;
    imageUrl?: string;
}

const ChildProfileHeader: React.FC<ChildProfileHeaderProps> = ({
    childName = 'Johnnie Rau',
    class: studentClass = 'Class I (A)',
    rollNumber = '01',
    section = 'A',
    imageUrl,
}) => {
    return (
        <Card className="shadow-sm border-gray-200 mb-6">
            <Row
                gutter={[32, 32]}
                align="middle"
            >
                {/* Avatar Section */}
                <Col
                    xs={24}
                    sm={24}
                    md={6}
                    className="flex justify-center"
                >
                    <div className="text-center">
                        <Avatar
                            size={120}
                            className="bg-gradient-to-br from-cyan-500 to-cyan-600 text-white font-bold text-2xl"
                            src={imageUrl}
                        >
                            {childName?.charAt(0)}
                        </Avatar>
                        <Paragraph className="!mt-4 !mb-0">
                            <Text className="block text-sm text-gray-500">
                                Student ID
                            </Text>
                            <Text className="block text-lg font-semibold">
                                {rollNumber}
                            </Text>
                        </Paragraph>
                    </div>
                </Col>

                {/* Profile Info Section */}
                <Col
                    xs={24}
                    sm={24}
                    md={18}
                >
                    <div className="space-y-4">
                        <div>
                            <Title
                                level={3}
                                className="!mb-2"
                            >
                                {childName}
                            </Title>
                            <Space wrap>
                                <Tag color="cyan">{studentClass}</Tag>
                                <Tag color="blue">Section {section}</Tag>
                            </Space>
                        </div>

                        <Divider className="!my-4" />

                        {/* Quick Info Grid */}
                        <Row gutter={[16, 16]}>
                            <Col
                                xs={24}
                                sm={12}
                                md={8}
                            >
                                <div className="flex items-start space-x-3">
                                    <Mail className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <Text className="text-xs text-gray-500 block">
                                            Email
                                        </Text>
                                        <Text className="text-sm font-medium">
                                            johnnie@example.com
                                        </Text>
                                    </div>
                                </div>
                            </Col>

                            <Col
                                xs={24}
                                sm={12}
                                md={8}
                            >
                                <div className="flex items-start space-x-3">
                                    <Phone className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <Text className="text-xs text-gray-500 block">
                                            Contact
                                        </Text>
                                        <Text className="text-sm font-medium">
                                            +1 (555) 123-4567
                                        </Text>
                                    </div>
                                </div>
                            </Col>

                            <Col
                                xs={24}
                                sm={12}
                                md={8}
                            >
                                <div className="flex items-start space-x-3">
                                    <Calendar className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <Text className="text-xs text-gray-500 block">
                                            DOB
                                        </Text>
                                        <Text className="text-sm font-medium">
                                            15 May 2010
                                        </Text>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default ChildProfileHeader;
