import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Download,
  Plus,
} from 'lucide-react';
import { useState } from 'react';

export default function Administrator_dashboard_page() {
  const [current_view, set_current_view] = useState('Month');

  const stats = [
    { label: 'Student', count: '125', sub_label: 'Total Students', color: 'bg-cyan-400' },
    { label: 'Teachers', count: '34', sub_label: 'Total Teachers', color: 'bg-purple-400' },
    { label: 'Parents', count: '125', sub_label: 'Total Parents', color: 'bg-blue-400' },
    { label: 'Staffs', count: '59', sub_label: 'Total Staffs', color: 'bg-pink-400' },
  ];

  const income_expense_stats = [
    { label: 'Total Income', value: '($) 0' },
    { label: 'Total Expenses', value: '($) 0' },
    { label: 'Total Profit', value: '($) 0' },
    { label: 'Total Revenue', value: '($) 0' },
  ];

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const calendar_days = [
    { day: 'Sun' },
    { day: 'Mon' },
    { day: 'Tue' },
    { day: 'Wed' },
    { day: 'Thu' },
    { day: 'Fri' },
    { day: 'Sat' },
  ];

  const get_days_in_month = () => {
    const days = [];
    for (let i = 1; i <= 31; i++) {
      days.push(i);
    }
    return days;
  };

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      {/* Header */}

      <h1 className="text-2xl font-semibold mb-6">Welcome - BEdu | Super admin</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <article
            key={index}
            className={`${stat.color} text-white rounded-lg p-6 shadow-sm flex items-center justify-between`}
          >
            <hgroup>
              <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
              <p className="text-xs opacity-90">{stat.sub_label}</p>
            </hgroup>
            <footer className="text-4xl font-bold">{stat.count}</footer>
          </article>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Income and Expenses Chart 1 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-700 font-semibold">Income and Expenses for Dec 2026</h2>
            <div className="flex gap-2">
              <button className="p-2 border rounded hover:bg-gray-50">
                <Download className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {income_expense_stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-sm font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center h-48 border rounded">
            <div className="text-center p-4 border rounded bg-gray-50">
              <p className="text-sm text-gray-500">19</p>
              <p className="text-xs text-gray-400">Income: 0</p>
              <p className="text-xs text-gray-400">Expense: 0</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <span>Wallet Balance</span>
          </div>
        </div>

        {/* Income and Expenses Chart 2 */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-700 font-semibold">Income and Expenses for 2026</h2>
            <div className="flex gap-2">
              <button className="p-2 border rounded hover:bg-gray-50">
                <Download className="w-4 h-4 text-gray-600" />
              </button>
              <button className="p-2 bg-purple-600 text-white rounded hover:bg-purple-700">
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            {income_expense_stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >
                <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                <p className="text-sm font-semibold">{stat.value}</p>
              </div>
            ))}
          </div>

          <div className="h-48 relative">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 200"
            >
              <polyline
                points="50,150 120,100 190,120 260,80 330,90 400,70 470,85 540,60 610,75 680,55 750,70"
                fill="none"
                stroke="#8B5CF6"
                strokeWidth="2"
              />
              <polyline
                points="50,150 120,100 190,120 260,80 330,90 400,70 470,85 540,60 610,75 680,55 750,70 750,200 50,200"
                fill="url(#gradient)"
                opacity="0.3"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor="#8B5CF6"
                    stopOpacity="0.5"
                  />
                  <stop
                    offset="100%"
                    stopColor="#8B5CF6"
                    stopOpacity="0"
                  />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 text-xs text-gray-500">
              {months.map((month, i) => (
                <span key={i}>{month}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notice Board and To Do List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Notice Board */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-700 font-semibold">Notice Board</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="border-t pt-4">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
              <span>DATE</span>
              <span className="flex-1 ml-8">TITLE</span>
              <span>ACTIONS</span>
            </div>
          </div>
        </div>

        {/* To Do List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-700 font-semibold">To Do List</h2>
            <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-purple-600 text-white text-xs rounded">INCOMPLETE</span>
            <button className="px-3 py-1 border border-gray-300 text-gray-600 text-xs rounded hover:bg-gray-50">
              COMPLETED
            </button>
          </div>
          <div className="text-center py-8 text-gray-400 text-sm">No Do Lists Assigned Yet</div>
        </div>
      </div>

      {/* Calendar */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-gray-700 font-semibold">Calendar</h2>
          <button className="px-4 py-2 bg-purple-600 text-white rounded text-sm hover:bg-purple-700">
            CALENDAR SETTINGS
          </button>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button className="p-2 border rounded hover:bg-gray-50">
              <ChevronsLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
              <ChevronRight className="w-4 h-4" />
            </button>
            <button className="p-2 border rounded hover:bg-gray-50">
              <ChevronsRight className="w-4 h-4" />
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded text-sm">Today</button>
          </div>

          <h3 className="text-lg font-semibold text-gray-700">December 2025</h3>

          <div className="flex gap-2">
            <button
              onClick={() => set_current_view('Month')}
              className={`px-4 py-2 rounded text-sm ${current_view === 'Month' ? 'bg-purple-600 text-white' : 'border hover:bg-gray-50'}`}
            >
              Month
            </button>
            <button
              onClick={() => set_current_view('Week')}
              className={`px-4 py-2 rounded text-sm ${current_view === 'Week' ? 'bg-purple-600 text-white' : 'border hover:bg-gray-50'}`}
            >
              Week
            </button>
            <button
              onClick={() => set_current_view('Day')}
              className={`px-4 py-2 rounded text-sm ${current_view === 'Day' ? 'bg-purple-600 text-white' : 'border hover:bg-gray-50'}`}
            >
              Day
            </button>
            <button
              onClick={() => set_current_view('List')}
              className={`px-4 py-2 rounded text-sm ${current_view === 'List' ? 'bg-purple-600 text-white' : 'border hover:bg-gray-50'}`}
            >
              List
            </button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="border rounded-lg overflow-hidden">
          <div className="grid grid-cols-7 bg-gray-50 border-b">
            {calendar_days.map((day, index) => (
              <div
                key={index}
                className="p-4 text-center text-sm font-medium text-gray-600 border-r last:border-r-0"
              >
                {day.day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7">
            {get_days_in_month().map((day, index) => (
              <div
                key={index}
                className={`min-h-24 p-2 border-r border-b last:border-r-0 ${day === 19 ? 'bg-purple-600 text-white' : 'hover:bg-gray-50'}`}
              >
                <span className="text-sm">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
