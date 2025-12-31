import { Card } from 'antd';

interface AttendanceDay {
  date: number;
  dayOfWeek: number;
  status: 'present' | 'absent' | 'leave' | 'weekend';
}

interface MonthAttendance {
  month: string;
  year: number;
  days: AttendanceDay[];
}

interface AttendanceCalendarProps {
  monthData: MonthAttendance;
}

// ... (interfaces stay the same)

export const Attendance_calendar: React.FC<AttendanceCalendarProps> = ({ monthData }) => {
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'present':
        return 'bg-emerald-500 text-white border-transparent shadow-lg';
      case 'absent':
        return 'bg-red-500 text-white border-transparent shadow-lg';
      case 'leave':
        return 'bg-blue-500 text-white border-transparent';
      case 'weekend':
        // Adjusted for gray-500 background: darker gray with lower opacity
        return 'bg-gray-600/40 text-gray-300 border-gray-400/20';
      default:
        return 'bg-transparent text-white border-transparent';
    }
  };

  const firstDayOfWeek = monthData.days[0]?.dayOfWeek || 0;
  const paddingSlots = Array(firstDayOfWeek).fill(null);

  return (
    // CHANGED: Added bg-gray-500 and ensured text is white
    <Card className="bg-gray-400 border-none shadow-xl rounded-2xl overflow-hidden p-4">
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-black font-bold text-lg">
          {monthData.month} <span className="text-black font-bold">{monthData.year}</span>
        </h4>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-[20px] text-gray-200">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span> Present
          </div>
          <div className="flex items-center gap-1 text-[20px] text-gray-200">
            <span className="w-2 h-2 rounded-full bg-red-500"></span> Absent
          </div>
          <div className="flex items-center gap-1 text-[20px] text-gray-200">
            <span className="w-2 h-2 rounded-full bg-blue-500"></span> Leave
          </div>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-2 mb-2">
        {dayLabels.map((day) => (
          <div
            key={day}
            className="text-center text-[20px] uppercase tracking-wider text-gray-200 font-bold"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 text-[20px] gap-2">
        {paddingSlots.map((_, i) => (
          <div
            key={`pad-${i}`}
            className="aspect-square"
          />
        ))}

        {monthData.days.map((record, idx) => (
          <div
            key={idx}
            className={`aspect-square flex items-center justify-center rounded-lg border transition-all duration-200 font-bold text-[20px] ${getStatusStyle(record.status)}`}
          >
            {record.date}
          </div>
        ))}
      </div>
    </Card>
  );
};
