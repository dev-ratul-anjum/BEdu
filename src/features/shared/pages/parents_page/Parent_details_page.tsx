import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { ArrowLeftOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Card, Col, Descriptions, Row, Table, Tag, Typography } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';

const { Title, Text } = Typography;

export default function Parent_details_page() {
  const { parentId } = useParams();
  const navigate = useNavigate();

  // Mock data for parent
  const parentData = {
    id: parentId,
    name: 'Mark Jhon',
    role: 'Parent',
    gender: 'Male',
    occupation: 'Senior Engineer',
    religion: 'Christianity',
    status: 'Active',
    email: 'mark@gmail.com',
    phone: '+1 123 9988568',
    address: 'TA-107 Newyork, USA',
    bio: 'Responsible parent, actively involved in school activities.',
  };

  // Mock data for linked children
  const linkedChildren = [
    {
      key: '1',
      id: 'S-2023001',
      name: 'Mark Willy',
      class: '10',
      section: 'A',
      roll: '01',
      status: 'Active',
    },
    {
      key: '2',
      id: 'S-2023045',
      name: 'Emily Willy',
      class: '8',
      section: 'B',
      roll: '12',
      status: 'Active',
    },
  ];

  const childrenColumns = [
    {
      title: 'Student ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Class',
      dataIndex: 'class',
      key: 'class',
    },
    {
      title: 'Section',
      dataIndex: 'section',
      key: 'section',
    },
  ];

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
          Back to Parents
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
                style={{ backgroundColor: '#1890ff' }}
                className="mb-4"
              />
              <Title level={4}>{parentData.name}</Title>
              <Text type="secondary">{parentData.occupation}</Text>
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
                <Text>#{parentData.id}</Text>
              </div>
              <div className="mb-2">
                <Text strong>Status: </Text>
                <Tag color="success">{parentData.status}</Tag>
              </div>
              <div className="mb-2">
                <Text strong>Role: </Text>
                <Text>{parentData.role}</Text>
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
              Parent Information
            </Title>

            <Descriptions
              column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
              bordered
            >
              <Descriptions.Item label="Full Name">{parentData.name}</Descriptions.Item>
              <Descriptions.Item label="Gender">{parentData.gender}</Descriptions.Item>
              <Descriptions.Item label="Religion">{parentData.religion}</Descriptions.Item>
              <Descriptions.Item label="Occupation">{parentData.occupation}</Descriptions.Item>
              <Descriptions.Item label="Email">{parentData.email}</Descriptions.Item>
              <Descriptions.Item label="Phone">{parentData.phone}</Descriptions.Item>
              <Descriptions.Item
                label="Address"
                span={2}
              >
                {parentData.address}
              </Descriptions.Item>
            </Descriptions>

            <div className="mt-8">
              <Title
                level={5}
                className="mb-4"
              >
                Linked Children
              </Title>
              <Table
                columns={childrenColumns}
                dataSource={linkedChildren}
                pagination={false}
                size="small"
                bordered
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
}
