import React from 'react';
import { Table, Typography } from 'antd';

const { Text } = Typography;

interface Subject_Result {
  key: string | number;
  subject: string;
  marks: number;
  total: number;
  grade: string;
  remark?: string;
}

interface Results_TableProps {
  subjects: Subject_Result[];
}

const Results_Table: React.FC<Results_TableProps> = ({ subjects }) => {
  const columns = [
    {
      title: 'Subject',
      dataIndex: 'subject',
      key: 'subject',
      render: (t: string) => <Text className="font-medium">{t}</Text>,
    },
    {
      title: 'Marks',
      dataIndex: 'marks',
      key: 'marks',
      render: (_: number, record: Subject_Result) => (
        <Text>
          {record.marks}/{record.total}
        </Text>
      ),
    },
    {
      title: 'Grade',
      dataIndex: 'grade',
      key: 'grade',
      render: (g: string) => <Text className="font-semibold">{g}</Text>,
    },
    {
      title: 'Remark',
      dataIndex: 'remark',
      key: 'remark',
      render: (_: any, record: Subject_Result) => (
        <Text className="text-sm text-gray-500">
          {record.grade === 'A+'
            ? 'Excellent'
            : record.grade.startsWith('A')
              ? 'Very Good'
              : 'Good'}
        </Text>
      ),
    },
  ];

  return (
    <Table
      dataSource={subjects}
      columns={columns}
      pagination={false}
      className="border rounded-lg"
    />
  );
};

export default Results_Table;
