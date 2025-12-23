import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { ArrowLeftOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Descriptions, Row, Tag, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const { Title, Text } = Typography;

export default function Teacher_details_page() {
  const { teacherId } = useParams();
  const navigate = useNavigate();

  // Mock data for demonstration - in a real app, fetch based on teacherId
  const teacherData = {
    id: teacherId,
    name: 'Mark Willy',
    role: 'Teacher',
    designation: 'Senior Teacher',
    joinDate: '12 June 2020',
    gender: 'Male',
    dob: '15 Aug 1985',
    bloodGroup: 'O+',
    religion: 'Islam',
    status: 'Active',
    email: 'mark@example.com',
    phone: '+1 123 456 7890',
    address: '123 Main St, New York, NY 10001',
    bio: 'Passionate mathematics teacher with over 10 years of experience in high school education.',
    class: '10',
    section: 'A',
    subject: 'Mathematics',
  };

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <div className="mb-6">
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={() => navigate(-1)}
          className="hover:bg-gray-100"
        >
          Back to Teachers
        </Button>
      </div>

      <Row gutter={[24, 24]}>
        {/* Profile Card */}
        <Col
          xs={24}
          md={8}
          lg={6}
        >
          <Card className="rounded-lg shadow-sm border-0 text-center">
            <div className="flex flex-col items-center">
              <Avatar
                size={120}
                icon={<UserOutlined />}
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                className="mb-4 border-1 border-primary"
              />
              <Title level={4}>{teacherData.name}</Title>
              <Text type="secondary">{teacherData.designation}</Text>
              <div className="mt-4 flex gap-2">
                <Button
                  shape="circle"
                  icon={<PhoneOutlined />}
                />
                <Button
                  shape="circle"
                  icon={<MailOutlined />}
                />
              </div>
            </div>
            <div className="mt-6 text-left">
              <div className="mb-2">
                <Text strong>ID: </Text>
                <Text>#{teacherData.id}</Text>
              </div>
              <div className="mb-2">
                <Text strong>Status: </Text>
                <Tag color="success">{teacherData.status}</Tag>
              </div>
              <div className="mb-2">
                <Text strong>Join Date: </Text>
                <Text>{teacherData.joinDate}</Text>
              </div>
            </div>
          </Card>
        </Col>

        {/* Details Card */}
        <Col
          xs={24}
          md={16}
          lg={18}
        >
          <Card className="rounded-lg shadow-sm border-0 h-full">
            <Title
              level={4}
              className="mb-6 border-b pb-4"
            >
              Teacher Information
            </Title>

            <Descriptions
              column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
              bordered
            >
              <Descriptions.Item label="Full Name">{teacherData.name}</Descriptions.Item>
              <Descriptions.Item label="Gender">{teacherData.gender}</Descriptions.Item>
              <Descriptions.Item label="Date of Birth">{teacherData.dob}</Descriptions.Item>
              <Descriptions.Item label="Blood Group">{teacherData.bloodGroup}</Descriptions.Item>
              <Descriptions.Item label="Religion">{teacherData.religion}</Descriptions.Item>
              <Descriptions.Item label="Email">{teacherData.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{teacherData.phone}</Descriptions.Item>
              <Descriptions.Item label="Address">{teacherData.address}</Descriptions.Item>

              <Descriptions.Item label="Class Teacher">{teacherData.class}</Descriptions.Item>
              <Descriptions.Item label="Section">{teacherData.section}</Descriptions.Item>
              <Descriptions.Item label="Main Subject">{teacherData.subject}</Descriptions.Item>
            </Descriptions>

            <div className="mt-8">
              <Title
                level={5}
                className="mb-4"
              >
                About
              </Title>
              <p className="text-gray-600">{teacherData.bio}</p>
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
