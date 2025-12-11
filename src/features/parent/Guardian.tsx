import React, { useState } from 'react';
import { Row, Col, Typography } from 'antd';
import StatCard from './components/Stat_card';
import ChildSelector from './components/Child_selector';
import ClassRoutine from './components/Class_routine';

const { Title } = Typography;

interface StatData {
  title: string;
  subtitle: string;
  count: number;
  bgColor: string;
}

const Guardian = () => {
  const [selectedChildId, setSelectedChildId] = useState('1');

  // Mock data - Replace with actual API calls
  const children = [
    { id: '1', name: 'Johnnie Rau' },
    { id: '2', name: 'Jane Doe' },
  ];

  const statData: StatData[] = [
    {
      title: 'Subject',
      subtitle: 'Total Subject',
      count: 11,
      bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    },
    {
      title: 'Teachers',
      subtitle: 'Total Teachers',
      count: 8,
      bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    },
    {
      title: 'Fees',
      subtitle: 'Total Due Fees',
      count: 0,
      bgColor: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
    },
    {
      title: 'Notice',
      subtitle: 'Total Notice',
      count: 0,
      bgColor: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      title: 'Exam',
      subtitle: 'Total Exam',
      count: 14,
      bgColor: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'Online Exam',
      subtitle: 'Total Online Exam',
      count: 10,
      bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600',
    },
    {
      title: 'Attendance in Current Month',
      subtitle: 'Total Attendance in Current Month',
      count: 0,
      bgColor: 'bg-gradient-to-br from-pink-500 to-pink-600',
    },
  ];

  return (
    <div className="w-full">
      {/* Child Selector */}
      <ChildSelector
        children={children}
        onSelect={setSelectedChildId}
        selectedChildId={selectedChildId}
      />

      {/* Statistics Cards Grid */}
      <div className="mb-8">
        <Row gutter={[16, 16]}>
          {statData.map((stat, index) => (
            <Col
              key={index}
              xs={24}
              sm={12}
              md={8}
              lg={6}
            >
              <StatCard
                title={stat.title}
                subtitle={stat.subtitle}
                count={stat.count}
                backgroundColor={stat.bgColor}
              />
            </Col>
          ))}
        </Row>
      </div>

      {/* Class Routine */}
      <div className="mb-8">
        <Title
          level={5}
          className="!mb-4"
        >
          Class Routine
        </Title>
        <ClassRoutine
          selectedClass="CLASS I (A)"
          holidays={['Friday']}
        />
      </div>
    </div>
  );
};

export default Guardian;
