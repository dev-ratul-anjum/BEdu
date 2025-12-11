import React from 'react';
import { Card, Avatar, Typography, Row, Col, Divider, Tag } from 'antd';
import { Mail, Phone, Briefcase } from 'lucide-react';

const { Title, Text, Paragraph } = Typography;

interface ParentProfileHeaderProps {
  name?: string;
  occupation?: string;
  email?: string | null;
  phone?: string[];
  imageUrl?: string;
}

const ParentProfileHeader: React.FC<ParentProfileHeaderProps> = ({
  name = 'Robert Rau',
  occupation = 'Software Engineer', // Kept as requested
  email = 'robert.rau@example.com',
  phone = ['+1 (555) 123-4567'],
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
              {name?.charAt(0)}
            </Avatar>
            <Paragraph className="!mt-4 !mb-0">
              <Tag
                color="cyan"
                className="!text-sm px-3 py-1"
              >
                Parent
              </Tag>
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
                level={4}
                className="!mb-1 !text-2xl !font-semibold"
              >
                {name}
              </Title>
              <Text className="text-gray-500 flex items-center gap-2">
                <Briefcase size={16} /> {occupation}
              </Text>
            </div>

            <Divider className="!my-4" />

            {/* Quick Info Grid */}
            <Row gutter={[16, 16]}>
              <Col
                xs={24}
                sm={12}
                md={12}
              >
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <Text className="text-xs text-gray-500 block">Email</Text>
                    <Text className="text-sm font-medium">{email || 'N/A'}</Text>
                  </div>
                </div>
              </Col>

              <Col
                xs={24}
                sm={12}
                md={12}
              >
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-cyan-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <Text className="text-xs text-gray-500 block">Phone(s)</Text>
                    <div className="flex flex-col">
                      {phone.map((p, index) => (
                        <Text
                          key={index}
                          className="text-sm font-medium"
                        >
                          {p}
                        </Text>
                      ))}
                    </div>
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

export default ParentProfileHeader;
