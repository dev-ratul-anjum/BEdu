import React from 'react';
import { Card, Row, Col, Descriptions, Typography, Divider } from 'antd';
import { User, Home, BookOpen, Users } from 'lucide-react';

const { Title, Text } = Typography;

interface PersonalInfo {
    fatherName?: string;
    motherName?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    guardianPhone?: string;
    emergencyContact?: string;
    bloodGroup?: string;
    nationality?: string;
}

interface PersonalInformationProps {
    info?: PersonalInfo;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
    info = {
        fatherName: 'Robert Rau',
        motherName: 'Sarah Rau',
        address: '123 Main Street',
        city: 'New York',
        state: 'NY',
        zipCode: '10001',
        guardianPhone: '+1 (555) 123-4567',
        emergencyContact: '+1 (555) 987-6543',
        bloodGroup: 'O+',
        nationality: 'American',
    },
}) => {
    const items = [
        {
            label: 'Father Name',
            children: info.fatherName || '-',
            icon: <User className="h-4 w-4 text-cyan-500" />,
        },
        {
            label: 'Mother Name',
            children: info.motherName || '-',
            icon: <Users className="h-4 w-4 text-cyan-500" />,
        },
        {
            label: 'Address',
            children: info.address || '-',
            icon: <Home className="h-4 w-4 text-cyan-500" />,
            span: 3,
        },
        {
            label: 'City',
            children: info.city || '-',
        },
        {
            label: 'State/Province',
            children: info.state || '-',
        },
        {
            label: 'Zip Code',
            children: info.zipCode || '-',
        },
        {
            label: 'Guardian Phone',
            children: info.guardianPhone || '-',
        },
        {
            label: 'Emergency Contact',
            children: info.emergencyContact || '-',
        },
        {
            label: 'Blood Group',
            children: info.bloodGroup || '-',
        },
        {
            label: 'Nationality',
            children: info.nationality || '-',
        },
    ];

    return (
        <Card className="shadow-sm border-gray-200">
            <Title
                level={4}
                className="!mb-6 flex items-center gap-2"
            >
                <BookOpen className="h-5 w-5 text-cyan-500" />
                Personal Information
            </Title>

            <Descriptions
                items={items.map(item => ({
                    key: item.label,
                    label: (
                        <div className="flex items-center gap-2">
                            {item.icon && item.icon}
                            <span>{item.label}</span>
                        </div>
                    ),
                    children: <Text>{item.children}</Text>,
                    span: item.span || 1,
                }))}
                column={{ xxl: 3, xl: 3, lg: 2, md: 2, sm: 1, xs: 1 }}
                bordered
            />

            <Divider />

            <Row gutter={[16, 16]}>
                <Col
                    xs={24}
                    sm={12}
                    md={8}
                >
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <Text className="text-sm text-gray-600 block mb-2">
                            Blood Group
                        </Text>
                        <Title
                            level={4}
                            className="!mb-0"
                        >
                            {info.bloodGroup || '-'}
                        </Title>
                    </div>
                </Col>
                <Col
                    xs={24}
                    sm={12}
                    md={8}
                >
                    <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                        <Text className="text-sm text-gray-600 block mb-2">
                            Nationality
                        </Text>
                        <Title
                            level={4}
                            className="!mb-0"
                        >
                            {info.nationality || '-'}
                        </Title>
                    </div>
                </Col>
                <Col
                    xs={24}
                    sm={12}
                    md={8}
                >
                    <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <Text className="text-sm text-gray-600 block mb-2">
                            Guardian Contact
                        </Text>
                        <Title
                            level={4}
                            className="!mb-0 text-sm"
                        >
                            {info.guardianPhone || '-'}
                        </Title>
                    </div>
                </Col>
            </Row>
        </Card>
    );
};

export default PersonalInformation;
