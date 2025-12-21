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
  const [selected_exam, set_selected_exam] = useState<string | undefined>(undefined);
  const [selected_year, set_selected_year] = useState<string>('2025');
  const [show_results, set_show_results] = useState<boolean>(false);

  const exam_options = useMemo(() => {
    return Array.from(new Set(sample_schedules.map((s) => s.exam_name))).map((e) => ({
      label: e,
      value: e,
    }));
  }, []);

  const handleSearch = () => {
    if (selected_exam && selected_year) {
      set_show_results(true);
    }
  };

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
          selected_exam={selected_exam}
          on_exam_change={set_selected_exam}
          selected_year={selected_year}
          on_year_change={set_selected_year}
          exam_options={exam_options}
          on_search_click={handleSearch}
        />

        {show_results && (
          <Exam_Schedule_Table
            records={sample_schedules}
            selected_exam={selected_exam}
            selected_year={selected_year}
          />
        )}
      </Space>
    </div>
  );
};

export default Exam_schedule;
