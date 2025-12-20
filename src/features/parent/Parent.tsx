import React, { useState } from 'react';
import { Typography } from 'antd';
import StatCard from './components/Stat_card';
import ChildSelector from './components/Child_selector';
import ClassRoutine from './components/Class_routine';

const { Title } = Typography;

const Parent = () => {
  const [selectedChildId, setSelectedChildId] = useState('1');

  // Mock data - Replace with actual API calls
  const children = [
    { id: '1', name: 'Johnnie Rau' },
    { id: '2', name: 'Jane Doe' },
  ];

  const stats = [
    {
      id: 1,
      title: 'Subject',
      subtitle: 'Total Subject',
      value: 11,
      gradient: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    },
    {
      id: 2,
      title: 'Notice',
      subtitle: 'Total Notice',
      value: 0,
      gradient: 'bg-gradient-to-r from-purple-500 to-purple-400',
    },
    {
      id: 3,
      title: 'Exam',
      subtitle: 'Total Exam',
      value: 14,
      gradient: 'bg-gradient-to-r from-blue-500 to-blue-400',
    },
    {
      id: 5,
      title: 'Teachers',
      subtitle: 'Total Teachers',
      value: 8,
      gradient: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    },
    {
      id: 6,
      title: 'Attendance This Month',
      subtitle: 'Total Attendance This Month',
      value: 0,
      gradient: 'bg-gradient-to-r from-fuchsia-500 to-fuchsia-400',
    },
    {
      id: 6,
      title: 'Fees',
      subtitle: 'Total Due Fees',
      value: '$0',
      gradient: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
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
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
          />
        ))}
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

export default Parent;
