import { Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import Student_routine from './pages/student_routine/Student_routine';
import Student_stat_card from './components/Student_stat_card';

const { Title, Text } = Typography;

const Student = () => {
  const navigate = useNavigate();

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
      id: 4,
      title: 'Teachers',
      subtitle: 'Total Teachers',
      value: 8,
      gradient: 'bg-gradient-to-r from-cyan-500 to-cyan-400',
    },
    {
      id: 5,
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

  const notices = [
    {
      id: 1,
      title: 'Exam schedule published',
      date: '2025-12-03',
      type: 'info',
    },
    {
      id: 2,
      title: 'Emergency meeting at 3 PM',
      date: '2025-12-02',
      type: 'urgent',
    },
    {
      id: 3,
      title: 'No classes on Friday',
      date: '2025-12-01',
      type: 'warning',
    },
  ];

  return (
    <div className="w-full">
      {/* Statistics Cards Grid */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Student_stat_card
            key={stat.id}
            stat={stat}
          />
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8">
        <Student_routine />
      </div>

      <div className="mb-8">
        <Title
          level={3}
          className="!mb-4"
        >
          Latest Notice
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              onClick={() => navigate('/student/notice')}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 cursor-pointer transition-all hover:border-info group"
            >
              <div className="flex justify-between items-start mb-2">
                <Text
                  strong
                  className="text-lg group-hover:text-info transition-colors"
                >
                  {notice.title}
                </Text>
                <span
                  className={`px-2 py-1 rounded text-xs capitalize ${
                    notice.type === 'urgent'
                      ? 'bg-red-100 text-red-600'
                      : notice.type === 'warning'
                        ? 'bg-orange-100 text-orange-600'
                        : 'bg-blue-100 text-blue-600'
                  }`}
                >
                  {notice.type}
                </span>
              </div>
              <Text
                type="secondary"
                className="text-sm"
              >
                {notice.date}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Student;
