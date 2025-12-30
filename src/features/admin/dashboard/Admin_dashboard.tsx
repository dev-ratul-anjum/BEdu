import React, { useState, useEffect, useRef } from 'react';
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

/**
 * ------------------------------------------------------------------
 * MOCK DATA & API LAYER
 * ------------------------------------------------------------------
 */
const mockAxios = {
  get: (url) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (url === '/api/students/history') {
          resolve({
            total: 2500,
            data: [
              { day: 'Mon', present: 2200, absent: 300 },
              { day: 'Tue', present: 2250, absent: 250 },
              { day: 'Wed', present: 2100, absent: 400 },
              { day: 'Thu', present: 2300, absent: 200 },
              { day: 'Fri', present: 2200, absent: 300 }, // 88% of 2500
              { day: 'Sat', present: 2000, absent: 500 },
              { day: 'Sun', present: 0, absent: 0 },
            ],
          });
        } else if (url === '/api/teachers/history') {
          resolve({
            total: 150,
            data: [
              { day: 'Mon', present: 145, absent: 5 },
              { day: 'Tue', present: 148, absent: 2 },
              { day: 'Wed', present: 140, absent: 10 },
              { day: 'Thu', present: 142, absent: 8 },
              { day: 'Fri', present: 132, absent: 18 }, // 88% of 150
              { day: 'Sat', present: 135, absent: 15 },
              { day: 'Sun', present: 0, absent: 0 },
            ],
          });
        }
      }, 500);
    });
  },
};

const useQuery = ({ queryKey, queryFn }) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    queryFn().then((res) => {
      if (isMounted) {
        setData(res);
        setIsLoading(false);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [JSON.stringify(queryKey)]);

  return { data, isLoading };
};

/**
 * ------------------------------------------------------------------
 * COMPONENTS
 * ------------------------------------------------------------------
 */

const CustomBarChart = ({ data, totalCount, title, type }) => {
  if (!data) return <div className="h-80 bg-gray-50 rounded-2xl animate-pulse"></div>;
  const height = 200;
  const maxVal = Math.max(...data.map((d) => Math.max(d.present, d.absent))) * 1.2 || 100;

  // Calculate totals for the displayed period
  // Showing the Overall Total for the week as requested, distinct from the daily labels
  const totalPresent = data.reduce((acc, curr) => acc + curr.present, 0);
  const totalAbsent = data.reduce((acc, curr) => acc + curr.absent, 0);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* Header with Title and See All Button */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-lg font-bold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500 mt-1">Last 7 Days History</p>
        </div>

        <button className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-full border border-blue-200 transition-colors">
          See All
        </button>
      </div>

      {/* Totals Section - Displayed above the chart */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-400 uppercase">Total Present</span>
          <span className="text-xl font-bold text-blue-600">{totalPresent}</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-gray-400 uppercase">Total Absent</span>
          <span className="text-xl font-bold text-red-500">{totalAbsent}</span>
        </div>
      </div>

      <div className="relative h-52 w-full">
        {/* HTML Labels Overlay */}
        {/* HTML Labels Overlay */}
        <div className="absolute inset-0 pointer-events-none z-10">
          {data.map((item, index) => {
            // Re-calculating exact positions to match SVG bars exactly
            // SVG Logic: xPos = index * gap + gap / 2 - barWidth; (barWidth=4%)
            // Blue Bar: start at xPos, width 3%. Center = xPos + 1.5%
            // Red Bar: start at xPos + 4%, width 3%. Center = xPos + 4 + 1.5% = xPos + 5.5%

            const barWidth = 4;
            const gap = 100 / data.length;
            const startX = index * gap + gap / 2 - barWidth;

            const blueCenter = startX + 1.5;
            const redCenter = startX + 5.5;

            const hP_percent = (item.present / maxVal) * 100;
            const hA_percent = (item.absent / maxVal) * 100;

            return (
              <React.Fragment key={`lbl-pair-${index}`}>
                {/* Present Label */}
                <div
                  className="absolute text-[8px] sm:text-[10px] font-bold text-blue-600 transform -translate-x-1/2"
                  style={{ left: `${blueCenter}%`, bottom: `calc(${hP_percent}% + 2px)` }}
                >
                  {item.present}
                </div>
                {/* Absent Label */}
                <div
                  className="absolute text-[8px] sm:text-[10px] font-bold text-red-500 transform -translate-x-1/2"
                  style={{ left: `${redCenter}%`, bottom: `calc(${hA_percent}% + 2px)` }}
                >
                  {item.absent}
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <svg
          viewBox={`0 0 100 ${height}`}
          className="w-full h-full overflow-visible"
          preserveAspectRatio="none"
        >
          {/* Grid lines (Optional but nice for context) */}
          <line
            x1="0"
            y1="200"
            x2="100"
            y2="200"
            stroke="#f1f5f9"
            strokeWidth="1"
          />

          {/* Bars Group (Flipped) */}
          <g transform="scale(1, -1) translate(0, -200)">
            {data.map((item, index) => {
              const barWidth = 4;
              const gap = 100 / data.length;
              const xPos = index * gap + gap / 2 - barWidth;
              const hP = (item.present / maxVal) * height;
              const hA = (item.absent / maxVal) * height;
              return (
                <g key={`bar-${type}-${index}`}>
                  {/* Present Bar (Blue) */}
                  <rect
                    x={`${xPos}%`}
                    y="0"
                    width="3%"
                    height={hP}
                    fill="#3b82f6"
                    rx="2"
                  />
                  {/* Absent Bar (Red) */}
                  <rect
                    x={`${xPos + 4}%`}
                    y="0"
                    width="3%"
                    height={hA}
                    fill="#ef4444"
                    rx="2"
                  />
                </g>
              );
            })}
          </g>
        </svg>
        <div className="flex justify-between mt-2 text-[10px] font-bold text-gray-400">
          {data.map((d, i) => (
            <span
              key={`lbl-${type}-${i}`}
              className="flex-1 text-center"
            >
              {d.day}
            </span>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500"></div>
            <span className="text-xs text-gray-500 font-medium">Present</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500"></div>
            <span className="text-xs text-gray-500 font-medium">Absent</span>
          </div>
        </div>
      </div>
    </div>
  );
};

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
      <div className="flex items-center justify-between mb-8">
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

        <div className="flex items-center gap-2">
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

export default function Admin_dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data: students } = useQuery({
    queryKey: ['stu'],
    queryFn: () => mockAxios.get('/api/students/history'),
  });
  const { data: teachers } = useQuery({
    queryKey: ['tea'],
    queryFn: () => mockAxios.get('/api/teachers/history'),
  });

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-y-auto p-4 lg:p-8 space-y-8">
          {/* Top Summary Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-600 rounded-3xl p-6 flex items-center gap-6 shadow-xl shadow-blue-200">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <GraduationCap size={32} />
              </div>
              <div>
                <p className="text-blue-100 font-medium">Total Students</p>
                <h3 className="text-3xl font-bold text-white">2,500</h3>
              </div>
            </div>
            <div className="bg-orange-500 rounded-3xl p-6 flex items-center gap-6 shadow-xl shadow-orange-200">
              <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                <Users size={32} />
              </div>
              <div>
                <p className="text-orange-100 font-medium">Total Teachers</p>
                <h3 className="text-3xl font-bold text-white">150</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-8">
              <CustomBarChart
                title="Students History"
                type="std"
                data={students?.data}
                totalCount={2500}
              />
              <CustomBarChart
                title="Teachers History"
                type="tch"
                data={teachers?.data}
                totalCount={150}
              />
            </div>
            <div className="xl:col-span-1">
              <Calendar />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
