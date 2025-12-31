import { Card } from 'antd';

type AttendanceStatus = 'P' | 'A' | 'L' | 'W';

interface AttendanceRecord {
  date: number;
  status: AttendanceStatus;
}

interface AttendanceCalendarProps {
  studentName: string;
  month: string;
  year: number;
  attendance: AttendanceRecord[];
}

const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const Monthly_attendance_card: React.FC<AttendanceCalendarProps> = ({
  studentName,
  month,
  year,
  attendance,
}) => {
  const getStatusStyle = (status: AttendanceStatus) => {
    switch (status) {
      case 'P':
        return 'bg-emerald-500/20 border-emerald-500/40 text-emerald-400';
      case 'A':
        return 'bg-red-600/20 border-red-600/40 text-red-600';
      case 'L':
        return 'bg-blue-500/20 border-blue-500/40 text-blue-400';
      case 'W':
        return 'bg-black-700/20 border-black-500/40 text-black-400';
      default:
        return 'bg-slate-700';
    }
  };

  return (
    <Card className="bg-gray-600 border border-slate-700/50 backdrop-blur-sm p-6 rounded-xl">
      {/* 🔹 TITLE */}
      <h3 className="text-slate-100 font-semibold text-lg mb-4">
        Attendance Report of {studentName} — {month} {year}
      </h3>

      {/* 🔹 DAY HEADER */}
      <div className="grid grid-cols-7 gap-2 mb-3">
        {dayLabels.map((day) => (
          <div
            key={day}
            className="text-center text-xs font-semibold text-cyan-400 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      {/* 🔹 CALENDAR GRID */}
      <div className="grid grid-cols-7 gap-2">
        {attendance.map((item) => (
          <div
            key={item.date}
            title={`Day ${item.date} - ${item.status}`}
            className={`h-10 flex items-center justify-center rounded-lg border text-sm font-semibold ${getStatusStyle(
              item.status
            )}`}
          >
            {item.date}
          </div>
        ))}
      </div>

      {/* 🔹 LEGEND */}
      <div className="flex flex-wrap gap-4 mt-4 text-xs">
        <Legend
          color="bg-emerald-500/50"
          label="Present"
        />
        <Legend
          color="bg-red-600/50"
          label="Absent"
        />
        <Legend
          color="bg-blue-500/50"
          label="Leave"
        />
        <Legend
          color="bg-black-600/50"
          label="Weekend"
        />
      </div>
    </Card>
  );
};

const Legend = ({ color, label }: { color: string; label: string }) => (
  <div className="flex items-center gap-2">
    <div className={`w-3 h-3 rounded ${color}`} />
    <span className="text-slate-400">{label}</span>
  </div>
);
