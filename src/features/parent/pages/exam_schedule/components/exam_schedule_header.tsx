import React from 'react';
import { Card, Select, Input, Typography } from 'antd';
import { Calendar } from 'lucide-react';

const { Title } = Typography;

interface Exam_Schedule_HeaderProps {
  selected_exams: string[];
  on_exams_change: (exams: string[]) => void;
  search_query: string;
  on_search_change: (q: string) => void;
  exam_options: { label: string; value: string }[];
}

const Exam_Schedule_Header: React.FC<Exam_Schedule_HeaderProps> = ({
  selected_exams,
  on_exams_change,
  search_query,
  on_search_change,
  exam_options,
}) => {
  return (
    <Card className="shadow-sm border-gray-200 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Calendar className="h-5 w-5 text-cyan-500" />
          <Title
            level={4}
            className="!mb-0 !text-xl !font-semibold"
          >
            Exam Schedule
          </Title>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <Select
            mode="multiple"
            allowClear
            placeholder="Select exam(s)"
            value={selected_exams}
            onChange={(vals) => on_exams_change(vals as string[])}
            options={exam_options}
            style={{ minWidth: 240 }}
          />

          <Input
            placeholder="Search by subject, teacher or venue"
            value={search_query}
            onChange={(e) => on_search_change(e.target.value)}
            className="w-full sm:w-80"
          />
        </div>
      </div>
    </Card>
  );
};

export default Exam_Schedule_Header;
