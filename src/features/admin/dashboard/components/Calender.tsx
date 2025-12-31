import {
  LayoutDashboard,
  Users,
  GraduationCap,
  Calendar as CalendarIcon,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
  Bell,
  Search,
  UserCircle,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date()); // Start with current date, user can navigate to 2026

  // Helper to format date like "Tuesday, December 30, 2025"
  const formattedFullDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Bangladesh Public Holidays 2026 (General + Executive + Religious Estimates)
  // Format: 'M-D'
  const holidays2026 = {
    '2-4': { label: 'Shab-e-Barat' },
    '2-21': { label: 'Language Movement Day' },
    '3-17': { label: 'Shab-e-Qadar' },
    '3-18': { label: 'Laylat al Qadr' },
    '3-19': { label: 'Eid ul-Fitr Holiday' },
    '3-20': { label: 'Eid ul-Fitr Holiday' },
    '3-21': { label: 'Eid ul-Fitr' },
    '3-26': { label: 'Independence Day' },
    '4-14': { label: 'Pohela Boishakh' },
    '5-1': { label: 'May Day' },
    '5-26': { label: 'Eid al-Adha Holiday' },
    '5-27': { label: 'Eid al-Adha' },
    '5-28': { label: 'Eid al-Adha Holiday' },
    '6-26': { label: 'Ashura' },
    '8-5': { label: 'July Mass Uprising Day' },
    '8-26': { label: 'Mawlid' },
    '9-4': { label: 'Krishna Janmashtami' },
    '10-21': { label: 'Vijayadashami' },
    '12-16': { label: 'Victory Day' },
    '12-25': { label: 'Christmas Day' },
  };

  // Birthday Checker
  const isBirthday = (d) => {
    // Example: Nabila's Birthday is Feb 14
    return d.getMonth() === 1 && d.getDate() === 14;
  };

  const getDaysInMonth = (y, m) => new Date(y, m + 1, 0).getDate();
  const getFirstDay = (y, m) => new Date(y, m, 1).getDay();

  const days = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
  const start = getFirstDay(currentDate.getFullYear(), currentDate.getMonth());

  const renderCells = () => {
    let cells = [];
    // Empty cells for days before start of month
    for (let i = 0; i < start; i++) {
      cells.push(
        <div
          key={`empty-${i}`}
          className="h-28 border-b border-r border-gray-100"
        ></div>
      );
    }

    for (let d = 1; d <= days; d++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth(); // 0-indexed
      const dateStr = `${month + 1}-${d}`;
      const dayObj = new Date(year, month, d);

      const holiday = holidays2026[dateStr];
      const birthday = isBirthday(dayObj);
      const isWeekend = dayObj.getDay() === 5 || dayObj.getDay() === 6; // Friday(5) and Saturday(6) are weekends in BD usually

      // Determine styling
      // Priorities: Birthday > Holiday > Weekend > Regular
      let bgClass = 'bg-white';
      let label = null;

      if (birthday) {
        bgClass = 'bg-green-50'; // Light Green
        label = "Nabila's Birthday";
      } else if (holiday) {
        bgClass = 'bg-red-50'; // Light Red
        label = holiday.label;
      } else if (isWeekend) {
        bgClass = 'bg-red-50/50'; // Very Light Red for weekend
        label = 'Weekend';
      }

      // Today check
      const today = new Date();
      if (today.getDate() === d && today.getMonth() === month && today.getFullYear() === year) {
        if (!birthday && !holiday && !isWeekend) {
          bgClass = 'bg-blue-50'; // Light Blue for today
          label = 'Today';
        } else {
          label = `Today - ${label || ''}`;
        }
      }

      cells.push(
        <div
          key={`day-${d}`}
          className={`h-28 p-2 border-b border-r border-gray-100 relative group transition-colors ${bgClass}`}
        >
          <span
            className={`text-sm font-bold ${bgClass !== 'bg-white' ? 'text-gray-800' : 'text-gray-400'}`}
          >
            {d}
          </span>
          {label && (
            <div
              className={`mt-2 text-[10px] font-medium leading-tight ${birthday ? 'text-green-700' : holiday || isWeekend ? 'text-red-700' : 'text-blue-700'}`}
            >
              {label}
            </div>
          )}
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl border border-gray-100 text-gray-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between mb-8 gap-4 sm:gap-0">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-blue-600">
            <CalendarIcon size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </h2>
            <p className="text-sm text-gray-500">{formattedFullDate}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 ">
          <button
            onClick={() =>
              setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1))
            }
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            onClick={() => setCurrentDate(new Date())}
            className="px-4 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
          >
            Today
          </button>
          <button
            onClick={() =>
              setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1))
            }
            className="w-8 h-8 flex items-center justify-center rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors text-gray-600"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-4 mb-6 text-xs text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-blue-50"></div>
          <span>Today</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-red-50"></div>
          <span>Holiday/Weekend</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded bg-green-50"></div>
          <span>Birthday</span>
        </div>
      </div>

      {/* Bottom Message Box for Today's Birthday if applicable */}
      {isBirthday(currentDate) && (
        <div className="mb-4 p-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl text-center shadow-lg animate-pulse">
          <p className="text-sm font-bold text-white">🎉 Today is Nabila's Birthday! 🎂</p>
        </div>
      )}

      {/* Calendar Grid */}
      <div className="rounded-xl overflow-hidden border border-gray-100">
        {/* Days Header */}
        <div className="grid grid-cols-7 text-center py-4 bg-gray-50 border-b border-gray-100">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
            <span
              key={d}
              className="text-xs font-bold text-gray-400 uppercase tracking-wider"
            >
              {d}
            </span>
          ))}
        </div>
        {/* Days Cells */}
        <div className="grid grid-cols-7 bg-white">{renderCells()}</div>
      </div>
    </div>
  );
};

export default Calendar;
