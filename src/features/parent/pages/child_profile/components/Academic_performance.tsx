import React from 'react';
import { Card, Row, Col, Progress, Typography, Table, Tag } from 'antd';
import { Flame, TrendingUp } from 'lucide-react';

const { Title, Text } = Typography;

interface SubjectPerformance {
  name: string;
  marks: number;
  totalMarks: number;
  grade: string;
  status: 'excellent' | 'good' | 'average' | 'needs-improvement';
}

interface AcademicPerformanceProps {
  subjects?: SubjectPerformance[];
}

const AcademicPerformance: React.FC<AcademicPerformanceProps> = ({
  subjects = [
    {
      name: 'Mathematics',
      marks: 92,
      totalMarks: 100,
      grade: 'A+',
      status: 'excellent',
    },
    {
      name: 'English',
      marks: 85,
      totalMarks: 100,
      grade: 'A',
      status: 'good',
    },
    {
      name: 'Science',
      marks: 78,
      totalMarks: 100,
      grade: 'B+',
      status: 'good',
    },
    {
      name: 'Social Studies',
      marks: 88,
      totalMarks: 100,
      grade: 'A',
      status: 'excellent',
    },
    {
      name: 'Computer Science',
      marks: 95,
      totalMarks: 100,
      grade: 'A+',
      status: 'excellent',
    },
  ],
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'excellent':
        return 'success';
      case 'good':
        return 'processing';
      case 'average':
        return 'warning';
      case 'needs-improvement':
        return 'error';
      default:
        return 'default';
    }
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 90) return '#10b981';
    if (percentage >= 80) return '#3b82f6';
    if (percentage >= 70) return '#f59e0b';
    return '#ef4444';
  };

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => <Text className="font-medium">{text}</Text>,
    },
    {
      title: 'Marks',
      dataIndex: 'marks',
      key: 'marks',
      render: (marks: number, record: SubjectPerformance) => (
        <Text>
          {marks}/{record.totalMarks}
        </Text>
      ),
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      render: (grade: string) => <Text className="font-semibold text-lg">{grade}</Text>,
    },
    {
      title: 'Performance',
      dataIndex: 'status',
      key: 'status',
      render: (status: string, record: SubjectPerformance) => (
        <Tag
          color={getStatusColor(status)}
          className="capitalize"
        >
          {status.replace('-', ' ')}
        </Tag>
      ),
    },
    {
      title: 'Progress',
      dataIndex: 'marks',
      key: 'progress',
      render: (marks: number, record: SubjectPerformance) => {
        const percentage = (marks / record.totalMarks) * 100;
        return (
          <div className="flex items-center gap-2">
            <Progress
              type="circle"
              percent={Math.round(percentage)}
              width={40}
              strokeColor={getProgressColor(percentage)}
              format={(percent) => <span className="text-xs font-semibold">{percent}%</span>}
            />
          </div>
        );
      },
    },
  ];

  const averageMarks =
    subjects.reduce((sum, subject) => sum + (subject.marks / subject.totalMarks) * 100, 0) /
    subjects.length;

  return (
    <Card className="shadow-sm border-gray-200">
      <Title
        level={4}
        className="!mb-6 flex items-center gap-2"
      >
        <TrendingUp className="h-5 w-5 text-cyan-500" />
        Academic Performance
      </Title>

      {/* Overall Performance */}
      <Row
        gutter={[16, 16]}
        className="mb-8"
      >
        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
            <div className="flex items-center justify-between">
              <div>
                <Text className="text-sm text-gray-600 block mb-2">Overall Grade</Text>
                <Title
                  level={3}
                  className="!mb-0"
                >
                  A
                </Title>
              </div>
              <Flame className="h-8 w-8 text-orange-500" />
            </div>
          </div>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
            <Text className="text-sm text-gray-600 block mb-2">Average Score</Text>
            <Title
              level={3}
              className="!mb-0"
            >
              {averageMarks.toFixed(1)}%
            </Title>
          </div>
        </Col>

        <Col
          xs={24}
          sm={12}
          md={8}
        >
          <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
            <Text className="text-sm text-gray-600 block mb-2">Total Subjects</Text>
            <Title
              level={3}
              className="!mb-0"
            >
              {subjects.length}
            </Title>
          </div>
        </Col>
      </Row>

      {/* Subjects Table */}
      <Table
        dataSource={subjects.map((subject, index) => ({
          ...subject,
          key: index,
        }))}
        columns={columns}
        pagination={false}
        className="border rounded-lg"
      />
    </Card>
  );
};

export default AcademicPerformance;
