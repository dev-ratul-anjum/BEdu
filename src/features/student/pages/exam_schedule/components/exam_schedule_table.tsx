import React, { useMemo } from 'react';
import { Table, Tag, Typography } from 'antd';

const { Text } = Typography;

export interface Schedule_Record {
  key: string | number;
  exam_name: string;
  subject: string;
  date: string; // display date
  time: string;
  venue: string;
  teacher: string;
}

interface Exam_Schedule_TableProps {
  records: Schedule_Record[];
  selected_exam?: string;
  selected_year?: string;
}

const Exam_Schedule_Table: React.FC<Exam_Schedule_TableProps> = ({
  records,
  selected_exam,
  selected_year,
}) => {
  const filtered = useMemo(() => {
    return records.filter((r) => {
      const examMatch = selected_exam ? r.exam_name === selected_exam : true;
      const yearMatch = selected_year ? r.date.endsWith(selected_year) : true;
      return examMatch && yearMatch;
    });
  }, [records, selected_exam, selected_year]);

  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      key: 'venue',
    },
    {
      title: 'Teacher',
      dataIndex: 'teacher',
      key: 'teacher',
    },
  ];

  return (
    <Table
      dataSource={filtered}
      columns={columns}
      pagination={false}
      className="border rounded-lg"
    />
  );
};

export default Exam_Schedule_Table;
