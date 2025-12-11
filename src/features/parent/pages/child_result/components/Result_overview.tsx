import React from 'react';
import { Row, Col, Typography } from 'antd';

const { Title, Text } = Typography;

interface Result_OverviewProps {
  overall_grade: string;
  average: number;
  total_subjects: number;
}

const Result_Overview: React.FC<Result_OverviewProps> = ({
  overall_grade,
  average,
  total_subjects,
}) => {
  return (
    <Row gutter={[16, 16]}>
      <Col
        xs={24}
        sm={8}
        md={8}
      >
        <div className="p-4 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg border border-cyan-200">
          <Text className="text-sm text-gray-600 block mb-2">Overall Grade</Text>
          <Title
            level={3}
            className="!mb-0"
          >
            {overall_grade}
          </Title>
        </div>
      </Col>

      <Col
        xs={24}
        sm={8}
        md={8}
      >
        <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
          <Text className="text-sm text-gray-600 block mb-2">Average Score</Text>
          <Title
            level={3}
            className="!mb-0"
          >
            {average}%
          </Title>
        </div>
      </Col>

      <Col
        xs={24}
        sm={8}
        md={8}
      >
        <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
          <Text className="text-sm text-gray-600 block mb-2">Total Subjects</Text>
          <Title
            level={3}
            className="!mb-0"
          >
            {total_subjects}
          </Title>
        </div>
      </Col>
    </Row>
  );
};

export default Result_Overview;
