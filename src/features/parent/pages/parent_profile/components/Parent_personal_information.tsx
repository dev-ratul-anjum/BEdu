import React from 'react';
import { Card, Descriptions, Typography, List, Avatar } from 'antd';
import { User, Smartphone, Mail, Briefcase, Smile } from 'lucide-react';

const { Title, Text } = Typography;

interface Student {
  id: string;
  name: string;
  class: string;
}

interface ParentPersonalInfo {
  name: string;
  occupation: string; // Kept as requested
  email: string | null;
  phones: string[];
  students: Student[];
}

const ParentPersonalInformation = () => {
  // Mock Data reflecting Prisma Schema + Occupation
  const info: ParentPersonalInfo = {
    name: 'Robert Rau',
    occupation: 'Software Engineer',
    email: 'robert.rau@example.com',
    phones: ['+1 (555) 123-4567', '+1 (555) 987-6543'],
    students: [
      { id: '1', name: 'Johnnie Rau', class: 'Class I (A)' },
      { id: '2', name: 'Jane Rau', class: 'Class III (B)' },
    ],
  };

  const items = [
    {
      label: 'Name',
      children: info.name,
      icon: <User className="h-4 w-4 text-cyan-500" />,
    },
    {
      label: 'Occupation',
      children: info.occupation,
      icon: <Briefcase className="h-4 w-4 text-cyan-500" />,
    },
    {
      label: 'Email',
      children: info.email || 'N/A',
      icon: <Mail className="h-4 w-4 text-cyan-500" />,
    },
    {
      label: 'Phones',
      children: (
        <div className="flex flex-col">
          {info.phones.map((p, i) => (
            <span key={i}>{p}</span>
          ))}
        </div>
      ),
      icon: <Smartphone className="h-4 w-4 text-cyan-500" />,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-sm border-gray-200">
        <Title
          level={4}
          className="!mb-6 flex items-center gap-2"
        >
          <User className="h-5 w-5 text-cyan-500" />
          Personal Details
        </Title>

        <Descriptions
          items={items.map((item) => ({
            key: item.label,
            label: (
              <div className="flex items-center gap-2">
                {item.icon && item.icon}
                <span>{item.label}</span>
              </div>
            ),
            children: <Text>{item.children}</Text>,
            span: 1,
          }))}
          column={{ xxl: 2, xl: 2, lg: 2, md: 1, sm: 1, xs: 1 }}
          bordered
        />
      </Card>

      <Card className="shadow-sm border-gray-200">
        <Title
          level={4}
          className="!mb-6 flex items-center gap-2"
        >
          <Smile className="h-5 w-5 text-cyan-500" />
          My Children
        </Title>
        <List
          itemLayout="horizontal"
          dataSource={info.students}
          renderItem={(student) => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar style={{ backgroundColor: '#06b6d4' }}>{student.name[0]}</Avatar>}
                title={<Text strong>{student.name}</Text>}
                description={student.class}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default ParentPersonalInformation;
