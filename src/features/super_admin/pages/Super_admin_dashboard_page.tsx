import StatCard from '@/features/parent/components/Stat_card';
import { Briefcase, DollarSign, MoreVertical, Users, UsersRound } from 'lucide-react';

const ChartCard = ({ title, children, className = '' }) => (
  <div
    className={`bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow ${className}`}
  >
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-lg font-bold">{title}</h3>
      <button className="text-gray-400 hover:text-gray-600">
        <MoreVertical className="w-5 h-5" />
      </button>
    </div>
    {children}
  </div>
);

export default function Super_admin_dashboard_page() {
  const stats = [
    {
      id: 1,
      label: 'Students',
      value: '1550',
      icon: Users,
      color: 'text-blue-600 bg-blue-100',
    },
    {
      id: 2,
      label: 'Teachers',
      value: '45',
      icon: Briefcase,
      color: 'text-green-600 bg-green-100',
    },
    {
      id: 3,
      label: 'Parents',
      value: '800',
      icon: UsersRound,
      color: 'text-yellow-600 bg-yellow-100',
    },
    {
      id: 4,
      label: 'Earnings',
      value: '$193000',
      icon: DollarSign,
      color: 'text-red-600 bg-red-100',
    },
  ];

  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <main>
      <h1 className="text-3xl font-semibold mb-6">Super Admin Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <StatCard
            key={stat.id}
            stat={stat}
          />
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Earnings Chart */}
        <ChartCard
          title="Earnings"
          className="lg:col-span-1"
        >
          <div className="mb-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <div>
                    <p className="text-xs text-gray-500">Total Collections</p>
                    <p className="text-lg font-bold">$ 75,000</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div>
                    <p className="text-xs text-gray-500">Fees Collection</p>
                    <p className="text-lg font-bold">$ 15,000</p>
                  </div>
                </div>
              </div>
              <select className="text-sm border rounded px-2 py-1 text-gray-600">
                <option>Jan 20, 2019</option>
              </select>
            </div>
          </div>
          <div className="h-48 flex items-end space-x-1">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
              const redHeight = 40 + Math.random() * 60;
              const blueHeight = 30 + Math.random() * 40;
              return (
                <div
                  key={day}
                  className="flex-1 flex flex-col items-center"
                >
                  <div className="w-full relative h-full">
                    <div
                      className="absolute bottom-0 w-full bg-red-500 rounded-t transition-all hover:bg-red-600"
                      style={{ height: `${redHeight}%` }}
                    ></div>
                    <div
                      className="absolute bottom-0 w-full bg-blue-500 rounded-t transition-all hover:bg-blue-600"
                      style={{ height: `${blueHeight}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">{day}</p>
                </div>
              );
            })}
          </div>
        </ChartCard>

        {/* Expenses Chart */}
        <ChartCard
          title="Expenses"
          className="lg:col-span-1"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-4">
              <div>
                <p className="text-xs text-gray-400">Jan 2019</p>
                <p className="text-lg font-bold">$ 15,000</p>
                <div className="h-1 w-12 bg-teal-400 rounded mt-1"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400">Feb 2019</p>
                <p className="text-lg font-bold">$ 10,000</p>
                <div className="h-1 w-12 bg-blue-500 rounded mt-1"></div>
              </div>
              <div>
                <p className="text-xs text-gray-400">Mar 2019</p>
                <p className="text-lg font-bold">$ 8,000</p>
                <div className="h-1 w-12 bg-yellow-500 rounded mt-1"></div>
              </div>
            </div>
          </div>
          <div className="h-48 flex items-end justify-around gap-4">
            <div
              className="w-20 bg-teal-400 rounded-t hover:bg-teal-500 transition-colors cursor-pointer"
              style={{ height: '85%' }}
            ></div>
            <div
              className="w-20 bg-blue-500 rounded-t hover:bg-blue-600 transition-colors cursor-pointer"
              style={{ height: '68%' }}
            ></div>
            <div
              className="w-20 bg-yellow-500 rounded-t hover:bg-yellow-600 transition-colors cursor-pointer"
              style={{ height: '50%' }}
            ></div>
          </div>
        </ChartCard>

        {/* Students Donut Chart */}
        <ChartCard
          title="Students"
          className="lg:col-span-1"
        >
          <div className="flex flex-col items-center justify-center h-64">
            <div className="relative w-48 h-48">
              <svg
                viewBox="0 0 100 100"
                className="transform -rotate-90"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="20"
                  strokeDasharray="125.6 251.2"
                  className="transition-all"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="20"
                  strokeDasharray="125.6 251.2"
                  strokeDashoffset="-125.6"
                  className="transition-all"
                />
              </svg>
            </div>
            <div className="flex items-center justify-around w-full mt-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  <p className="text-xs text-gray-500">Female Students</p>
                </div>
                <p className="text-lg font-bold">45,000</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <p className="text-xs text-gray-500">Male Students</p>
                </div>
                <p className="text-lg font-bold">1,05,000</p>
              </div>
            </div>
          </div>
        </ChartCard>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Event Calendar */}
        <ChartCard title="Event Calender">
          <div className="mb-4">
            <p className="font-bold mb-3">December 2025</p>
            <div className="flex items-center justify-between mb-4">
              <div className="flex space-x-2">
                <button className="px-4 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  Day
                </button>
                <button className="px-4 py-1 text-sm rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                  Week
                </button>
                <button className="px-4 py-1 text-sm rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors">
                  Month
                </button>
              </div>
              <div className="flex space-x-2">
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                  ‹
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
                  ›
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-sm">
            {weekDays.map((day) => (
              <div
                key={day}
                className="text-gray-500 font-medium py-2 text-xs"
              >
                {day}
              </div>
            ))}
            {calendarDays.map((day) => (
              <div
                key={day}
                className="py-2 hover:bg-blue-50 rounded cursor-pointer transition-colors text-gray-700"
              >
                {day}
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Website Traffic */}
        <ChartCard title="Website Traffic">
          <div className="mb-4">
            <p className="text-xs text-gray-500 mb-1">Unique Visitors</p>
            <p className="text-3xl font-bold mb-3">2,590</p>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden flex">
              <div
                className="bg-teal-400 hover:bg-teal-500 transition-colors"
                style={{ width: '50%' }}
              ></div>
              <div
                className="bg-blue-500 hover:bg-blue-600 transition-colors"
                style={{ width: '27%' }}
              ></div>
              <div
                className="bg-yellow-400 hover:bg-yellow-500 transition-colors"
                style={{ width: '15%' }}
              ></div>
              <div
                className="bg-red-500 hover:bg-red-600 transition-colors"
                style={{ width: '8%' }}
              ></div>
            </div>
          </div>
          <div className="space-y-3 mt-6">
            {[
              { label: 'Direct', value: '12,890', percent: '50%', color: 'bg-teal-400' },
              { label: 'Search', value: '7,245', percent: '27%', color: 'bg-blue-500' },
              { label: 'Referrals', value: '4,256', percent: '8%', color: 'bg-yellow-400' },
              { label: 'Social', value: '500', percent: '7%', color: 'bg-red-500' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <div className="flex items-center">
                  <div className={`w-2 h-2 ${item.color} rounded-full mr-3`}></div>
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <div className="flex items-center space-x-6">
                  <span className="text-sm font-medium">{item.value}</span>
                  <span className="text-sm text-gray-500 w-10 text-right">{item.percent}</span>
                </div>
              </div>
            ))}
          </div>
        </ChartCard>

        {/* Notice Board */}
        <ChartCard title="Notice Board">
          <div className="space-y-4">
            {[
              {
                date: '16 June, 2019',
                text: 'Great School manag mene esom text of the printing.',
                color: 'bg-teal-400',
              },
              {
                date: '16 June, 2019',
                text: 'Great School manag printing.',
                color: 'bg-yellow-400',
              },
              {
                date: '16 June, 2019',
                text: 'Great School manag meneesom.',
                color: 'bg-pink-500',
              },
            ].map((notice, i) => (
              <div
                key={i}
                className="border-l-4 border-blue-500 pl-4 py-2 hover:bg-gray-50 transition-colors rounded-r"
              >
                <span
                  className={`inline-block ${notice.color} text-white text-xs px-3 py-1 rounded-full mb-2`}
                >
                  {notice.date}
                </span>
                <p className="text-sm font-medium mb-1">{notice.text}</p>
                <p className="text-xs text-gray-400">Jennyfar Lopez / 5 min ago</p>
              </div>
            ))}
          </div>
        </ChartCard>
      </div>
    </main>
  );
}
