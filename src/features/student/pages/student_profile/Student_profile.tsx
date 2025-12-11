import React from 'react';
import { Card, Row, Col, Avatar, Typography, Tag } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface Student {
  id: number;
  name: string;
  age: number;
  grade: string;
  email: string;
  phone: string;
  address: string;
  profilePicture?: string;
  subjects: string[];
  attendance: number; // percentage
  extraActivities: string[];
}

interface StudentProfileProps {
  student: Student;
}

const StudentProfile: React.FC<StudentProfileProps> = ({ student }) => {
  return (
    <Card
      style={{
        width: '90%',
        maxWidth: 1200,
        margin: '40px auto',
        borderRadius: 16,
        padding: 40,
        boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
      }}
    >
      <Row
        gutter={[32, 32]}
        align="middle"
      >
        <Col>
          {student.profilePicture ? (
            <Avatar
              size={150}
              src={student.profilePicture}
            />
          ) : (
            <Avatar
              size={150}
              icon={<UserOutlined />}
            />
          )}
        </Col>
        <Col flex="auto">
          <Title style={{ fontSize: '3rem', marginBottom: 20 }}>{student.name}</Title>
          <Text
            style={{
              fontSize: '1.8rem',
              display: 'block',
              marginBottom: 10,
            }}
          >
            <strong>Age:</strong> {student.age}
          </Text>
          <Text
            style={{
              fontSize: '1.8rem',
              display: 'block',
              marginBottom: 10,
            }}
          >
            <strong>Grade:</strong> {student.grade}
          </Text>
          <Text
            style={{
              fontSize: '1.8rem',
              display: 'block',
              marginBottom: 10,
            }}
          >
            <strong>Email:</strong> {student.email}
          </Text>
          <Text
            style={{
              fontSize: '1.8rem',
              display: 'block',
              marginBottom: 10,
            }}
          >
            <strong>Phone:</strong> {student.phone}
          </Text>
          <Text
            style={{
              fontSize: '1.8rem',
              display: 'block',
              marginBottom: 10,
            }}
          >
            <strong>Address:</strong> {student.address}
          </Text>
        </Col>
      </Row>

      <Row
        gutter={[32, 32]}
        style={{ marginTop: 40 }}
      >
        <Col span={24}>
          <Title style={{ fontSize: '2.2rem' }}>Subjects</Title>
          {student.subjects.map((subject, index) => (
            <Tag
              key={index}
              color="blue"
              style={{
                fontSize: '1.5rem',
                padding: '10px 20px',
                marginBottom: 10,
              }}
            >
              {subject}
            </Tag>
          ))}
        </Col>

        <Col span={12}>
          <Title style={{ fontSize: '2.2rem' }}>Attendance</Title>
          <Text style={{ fontSize: '1.8rem' }}>{student.attendance}%</Text>
        </Col>

        <Col span={12}>
          <Title style={{ fontSize: '2.2rem' }}>Extra Activities</Title>
          {student.extraActivities.length > 0 ? (
            student.extraActivities.map((activity, index) => (
              <Tag
                key={index}
                color="green"
                style={{
                  fontSize: '1.5rem',
                  padding: '10px 20px',
                  marginBottom: 10,
                }}
              >
                {activity}
              </Tag>
            ))
          ) : (
            <Text style={{ fontSize: '1.8rem' }}>No activities</Text>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default StudentProfile;
