import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { Check, MoreVertical, X } from 'lucide-react';

export default function Attendance_page() {
  // Generate days array (1-31)
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  // Sample students
  const students = [
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
    'Michele Johnson',
    'Richi Akon',
    'Amanda Kherr',
  ];

  // Generate random attendance pattern
  const getAttendanceStatus = (studentIndex, day) => {
    // Create a repeating pattern: P, P, P, A, P, P, -, A, P, P, P, P, A, -, P, P, P, A, P, P, -, P, P, A, P, P, P, -, P, P, -
    const pattern = [
      'P',
      'P',
      'P',
      'A',
      'P',
      'P',
      '-',
      'A',
      'P',
      'P',
      'P',
      'P',
      'A',
      '-',
      'P',
      'P',
      'P',
      'A',
      'P',
      'P',
      '-',
      'P',
      'P',
      'A',
      'P',
      'P',
      'P',
      '-',
      'P',
      'P',
      '-',
    ];
    return pattern[(day - 1) % pattern.length];
  };

  return (
    <>
      <Dynamic_breadcrumb />

      <main className="min-h-screen">
        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-bold">Student Attendence</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              {/* Select Class */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Class</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none text-gray-400">
                  <option value="">Select Class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                </select>
              </div>
              {/* Select Section */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Section
                </label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none text-gray-400">
                  <option value="">Select Section</option>
                  <option value="A">Section A</option>
                  <option value="B">Section B</option>
                  <option value="C">Section C</option>
                </select>
              </div>
              {/* Select Month */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Select Month</label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none text-gray-400">
                  <option value="">Select Month</option>
                  <option value="january">January</option>
                  <option value="february">February</option>
                  <option value="march">March</option>
                  <option value="april">April</option>
                </select>
              </div>
              {/* Select Session */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Session
                </label>
                <select className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none text-gray-400">
                  <option value="">Select Session</option>
                  <option value="2019">2019</option>
                  <option value="2020">2020</option>
                  <option value="2021">2021</option>
                </select>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="px-8 py-2 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors">
                Save
              </button>
              <button className="px-8 py-2 bg-blue-900 text-white rounded font-semibold hover:bg-blue-800 transition-colors">
                Reset
              </button>
            </div>
          </div>
        </div>
        {/* Attendance Sheet */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-bold">
              Attendence Sheet Of Class One: Section A, April 2019
            </h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreVertical className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-bold uppercase bg-gray-50">
                    Students
                  </th>
                  {days.map((day) => (
                    <th
                      key={day}
                      className="px-3 py-3 text-center text-xs font-bold min-w-[40px]"
                    >
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {students.map((student, studentIndex) => (
                  <tr
                    key={studentIndex}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-3 text-sm text-gray-700 sticky left-0 bg-white z-10 font-medium">
                      {student}
                    </td>
                    {days.map((day) => {
                      const status = getAttendanceStatus(studentIndex, day);
                      return (
                        <td
                          key={day}
                          className="px-3 py-3 text-center"
                        >
                          {status === 'P' && <Check className="w-4 h-4 text-green-500 mx-auto" />}
                          {status === 'A' && <X className="w-4 h-4 text-red-500 mx-auto" />}
                          {status === '-' && <span className="text-gray-300">-</span>}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}
