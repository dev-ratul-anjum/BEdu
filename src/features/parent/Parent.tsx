import React, { useState } from 'react';
import { Typography } from 'antd';
import { Bell, BookOpen, CalendarCheck, CreditCard, FileText, Monitor, Users } from 'lucide-react';
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
      label: 'Total Subject',
      value: 11,
      icon: BookOpen,
      color: 'text-cyan-600 bg-cyan-100',
    },
    {
      id: 2,
      label: 'Total Teachers',
      value: 8,
      icon: Users,
      color: 'text-green-600 bg-green-100',
    },
    {
      id: 3,
      label: 'Total Due Fees',
      value: 0,
      icon: CreditCard,
      color: 'text-red-600 bg-red-100',
    },
    {
      id: 4,
      label: 'Total Notice',
      value: 0,
      icon: Bell,
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      id: 5,
      label: 'Total Exam',
      value: 14,
      icon: FileText,
      color: 'text-purple-600 bg-purple-100',
    },
    {
      id: 6,
      label: 'Total Online Exam',
      value: 10,
      icon: Monitor,
      color: 'text-pink-600 bg-pink-100',
    },
    {
      id: 7,
      label: 'Attendance (Month)',
      value: 0,
      icon: CalendarCheck,
      color: 'text-blue-600 bg-blue-100',
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
