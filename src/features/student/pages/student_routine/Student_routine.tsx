import { Card, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';

const { Title } = Typography;

interface ClassInfo {
  subject: string;
  code: string;
  teacher: string;
  room: string;
}

interface RoutineRow {
  key: string;
  day: string;
  period1?: ClassInfo;
  period2?: ClassInfo;
  period3?: ClassInfo;
  period4?: ClassInfo;
  period5?: ClassInfo;
}

const routineData: RoutineRow[] = [
  {
    key: '1',
    day: 'Saturday',
    period1: { subject: 'Mathematics', code: 'M-101', teacher: 'Mr. Anderson', room: '101' },
    period2: { subject: 'English', code: 'E-102', teacher: 'Ms. Smith', room: '101' },
    period3: { subject: 'Physics', code: 'P-103', teacher: 'Dr. Einstein', room: 'Lab A' },
    period4: { subject: 'Chemistry', code: 'C-104', teacher: 'Mrs. Curie', room: 'Lab B' },
    period5: { subject: 'ICT', code: 'CS-109', teacher: 'Mr. Gates', room: 'Lab 1' },
  },
  {
    key: '2',
    day: 'Sunday',
    period1: { subject: 'Mathematics', code: 'M-101', teacher: 'Mr. Anderson', room: '101' },
    period2: { subject: 'English', code: 'E-102', teacher: 'Ms. Smith', room: '101' },
    period3: { subject: 'Physics', code: 'P-103', teacher: 'Dr. Einstein', room: 'Lab A' },
    period4: { subject: 'Chemistry', code: 'C-104', teacher: 'Mrs. Curie', room: 'Lab B' },
    period5: { subject: 'ICT', code: 'CS-109', teacher: 'Mr. Gates', room: 'Lab 1' },
  },
  {
    key: '3',
    day: 'Monday',
    period1: { subject: 'Biology', code: 'B-105', teacher: 'Mr. Darwin', room: '102' },
    period2: { subject: 'Bangla', code: 'Bn-106', teacher: 'Mr. Rahman', room: '102' },
    period3: { subject: 'English', code: 'E-102', teacher: 'Ms. Smith', room: '102' },
    period4: { subject: 'Higher Math', code: 'HM-110', teacher: 'Mr. Anderson', room: '102' },
    period5: { subject: 'Islamic Studies', code: 'IS-111', teacher: 'Mr. Islamic', room: '102' },
  },
  {
    key: '4',
    day: 'Tuesday',
    period1: { subject: 'Science', code: 'S-107', teacher: 'Mrs. Newton', room: '103' },
    period2: { subject: 'Mathematics', code: 'M-101', teacher: 'Mr. Anderson', room: '103' },
    period3: { subject: 'English', code: 'E-102', teacher: 'Ms. Smith', room: '103' },
    period4: { subject: 'Art', code: 'A-112', teacher: 'Ms. Picasso', room: 'Studio' },
    period5: { subject: 'Physical Edu', code: 'PE-113', teacher: 'Mr. Bolt', room: 'Field' },
  },
  {
    key: '6',
    day: 'Wednesday',
    period1: { subject: 'Physics', code: 'P-103', teacher: 'Dr. Einstein', room: 'Lab A' },
    period2: { subject: 'Chemistry', code: 'C-104', teacher: 'Mrs. Curie', room: 'Lab B' },
    period3: { subject: 'Biology', code: 'B-105', teacher: 'Mr. Darwin', room: 'Lab C' },
    period4: { subject: 'Mathematics', code: 'M-101', teacher: 'Mr. Anderson', room: '103' },
    period5: { subject: 'ICT', code: 'CS-109', teacher: 'Mr. Gates', room: 'Lab 1' },
  },
  {
    key: '7',
    day: 'Thursday',
    period1: { subject: 'Bangla', code: 'Bn-106', teacher: 'Mr. Rahman', room: '104' },
    period2: { subject: 'English', code: 'E-102', teacher: 'Ms. Smith', room: '104' },
    period3: { subject: 'Religion', code: 'R-108', teacher: 'Mr. Islamic', room: '104' },
    period4: { subject: 'Mathematics', code: 'M-101', teacher: 'Mr. Anderson', room: '104' },
    period5: { subject: 'Sports', code: 'SP-114', teacher: 'Mr. Messi', room: 'Field' },
  },
];

// Reusable Cell Renderer
const renderClassCell = (classInfo?: ClassInfo) => {
  if (!classInfo) return <span className="text-gray-400">-</span>;
  return (
    <div className="flex flex-col space-y-1">
      <div className="text-sm font-bold text-gray-800">
        {classInfo.subject}{' '}
        <span className="text-xs font-normal text-gray-500">({classInfo.code})</span>
      </div>
      <div className="text-xs text-gray-600">
        <span className="font-semibold">Room:</span> {classInfo.room}
      </div>
      <div className="text-xs text-primary font-medium">{classInfo.teacher}</div>
    </div>
  );
};

const columns: ColumnsType<RoutineRow> = [
  {
    title: 'Day',
    dataIndex: 'day',
    key: 'day',
    fixed: 'left',
    width: 120,
    render: (day: string) => (
      <Tag
        color="blue"
        className="font-bold border-none text-sm px-2 py-1"
      >
        {day}
      </Tag>
    ),
  },
  {
    title: '09:00 AM - 09:45 AM',
    dataIndex: 'period1',
    key: 'period1',
    width: 220,
    render: renderClassCell,
  },
  {
    title: '09:45 AM - 10:30 AM',
    dataIndex: 'period2',
    key: 'period2',
    width: 220,
    render: renderClassCell,
  },
  {
    title: '10:30 AM - 11:15 AM',
    dataIndex: 'period3',
    key: 'period3',
    width: 220,
    render: renderClassCell,
  },
  {
    title: '11:15 AM - 12:00 PM',
    dataIndex: 'period4',
    key: 'period4',
    width: 220,
    render: renderClassCell,
  },
  {
    title: '12:00 PM - 12:45 PM',
    dataIndex: 'period5',
    key: 'period5',
    width: 220,
    render: renderClassCell,
  },
];

const Student_routine = () => {
  return (
    <div className="w-full">
      <Title
        level={3}
        className="text-gray-700 !mb-6"
      >
        Class Routine
      </Title>

      <Card
        className="shadow-sm border-gray-200 rounded-lg overflow-hidden"
        bodyStyle={{ padding: 0 }}
      >
        <div className="px-6 py-4 border-b border-gray-100 bg-white">
          <div className="border border-purple-200 bg-purple-50 text-purple-700 px-4 py-1.5 rounded text-sm font-bold uppercase inline-block">
            Class 9 (A)
          </div>
        </div>

        <Table
          columns={columns}
          dataSource={routineData}
          bordered
          pagination={false}
          scroll={{ x: 1200 }}
          className="custom-table custom-scrollbar"
        />
      </Card>
    </div>
  );
};

export default Student_routine;
