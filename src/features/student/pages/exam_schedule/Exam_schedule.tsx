import React, { useMemo, useState } from 'react';
import { Space, Typography } from 'antd';
import Exam_Schedule_Header from './components/exam_schedule_header';
import Exam_Schedule_Table, { Schedule_Record } from './components/exam_schedule_table';

const { Title } = Typography;

const sample_schedules: Schedule_Record[] = [
  {
    key: 1,
    exam_name: 'Term 1',
    subject: 'Mathematics',
    date: '15-01-2025',
    time: '09:00 AM - 11:00 AM',
    venue: 'Hall A',
    teacher: 'Mr. Allen',
    class_name: 'Class I (A)',
  },
  {
    key: 2,
    exam_name: 'Term 1',
    subject: 'English',
    date: '16-01-2025',
    time: '09:00 AM - 11:00 AM',
    venue: 'Hall B',
    teacher: 'Ms. Clara',
    class_name: 'Class I (A)',
  },
  {
    key: 3,
    exam_name: 'Term 2',
    subject: 'Science',
    date: '20-04-2025',
    time: '10:00 AM - 12:00 PM',
    venue: 'Lab 1',
    teacher: 'Mr. Stone',
    class_name: 'Class I (A)',
  },
  {
    key: 4,
    exam_name: 'Final',
    subject: 'Computer Science',
    date: '10-11-2025',
    time: '11:00 AM - 01:00 PM',
    venue: 'Lab 2',
    teacher: 'Ms. Roberts',
    class_name: 'Class I (A)',
  },
  {
    key: 5,
    exam_name: 'Term 2',
    subject: 'Mathematics',
    date: '21-04-2025',
    time: '09:00 AM - 11:00 AM',
    venue: 'Hall A',
    teacher: 'Mr. Allen',
    class_name: 'Class I (B)',
  },
];

const Exam_schedule: React.FC = () => {
  const [selected_exams, set_selected_exams] = useState<string[]>([]);
  const [search_query, set_search_query] = useState<string>('');

  const exam_options = useMemo(() => {
    return Array.from(new Set(sample_schedules.map((s) => s.exam_name))).map((e) => ({
      label: e,
      value: e,
    }));
  }, []);

  return (
    <div className="w-full">
      <div className="mb-6">
        <Title
          level={3}
          className="!mb-0"
        >
          Exam Schedule
        </Title>
      </div>

      <Space
        direction="vertical"
        size="large"
        className="w-full"
      >
        <Exam_Schedule_Header
          selected_exams={selected_exams}
          on_exams_change={set_selected_exams}
          search_query={search_query}
          on_search_change={set_search_query}
          exam_options={exam_options}
        />

        <Exam_Schedule_Table
          records={sample_schedules}
          selected_exams={selected_exams}
          search_query={search_query}
        />
      </Space>
    </div>
  );
};

export default Exam_schedule;
