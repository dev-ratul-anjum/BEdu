import React from 'react';
import { Table, Tag, Card } from 'antd';

interface RoutineItem {
  key: string;
  day: string;
  period1: string;
  period2: string;
  period3: string;
  period4: string;
  period5: string;
}

const routineData: RoutineItem[] = [
  {
    key: '1',
    day: 'Sunday',
    period1: 'Mathematics',
    period2: 'English',
    period3: 'Physics',
    period4: 'Chemistry',
    period5: 'ICT',
  },
  {
    key: '2',
    day: 'Monday',
    period1: 'Biology',
    period2: 'Bangla',
    period3: 'English',
    period4: 'Math',
    period5: 'Islamic Studies',
  },
  {
    key: '3',
    day: 'Tuesday',
    period1: 'Science',
    period2: 'Math',
    period3: 'English',
    period4: 'Art',
    period5: 'Physical Education',
  },
  {
    key: '4',
    day: 'Wednesday',
    period1: 'Physics',
    period2: 'Chemistry',
    period3: 'Biology',
    period4: 'Math',
    period5: 'ICT',
  },
  {
    key: '5',
    day: 'Thursday',
    period1: 'Bangla',
    period2: 'English',
    period3: 'Religion',
    period4: 'Math',
    period5: 'Sports',
  },
];

const columns = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
    fixed: 'left' as const,
    width: 120,
    render: (day: string) => <Tag color="blue">{day}</Tag>,
  },
  {
    title: 'Period 1 (8:00 - 9:00)',
    dataIndex: 'period1',
    key: 'p1',
  },
  {
    title: 'Period 2 (9:00 - 10:00)',
    dataIndex: 'period2',
    key: 'p2',
  },
  {
    title: 'Period 3 (10:00 - 11:00)',
    dataIndex: 'period3',
    key: 'p3',
  },
  {
    title: 'Period 4 (11:00 - 12:00)',
    dataIndex: 'period4',
    key: 'p4',
  },
  {
    title: 'Period 5 (12:00 - 1:00)',
    dataIndex: 'period5',
    key: 'p5',
  },
];

const Student_routine = () => {
  return (
    <Card
      title="📘 Class Routine"
      style={{ margin: '20px', borderRadius: 12 }}
      headStyle={{ fontSize: 30, fontWeight: 'bold' }}
    >
      <Table
        columns={columns}
        dataSource={routineData}
        bordered
        pagination={false}
        scroll={{ x: 900 }}
        style={{ borderRadius: 15 }}
      />
    </Card>
  );
};

export default Student_routine;
