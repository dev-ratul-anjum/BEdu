import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, MoreVertical } from 'lucide-react';
import { useState } from 'react';

export default function Exam_results_page() {
  const [formData, setFormData] = useState({
    gradeName: '',
    gradePoint: '',
    percentageFrom: '',
    percentageUpto: '',
    comments: '',
  });

  const [searchGrade, setSearchGrade] = useState('');
  const [searchPoint, setSearchPoint] = useState('');
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const grades = [
    {
      name: 'A+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'A+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'A+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'A+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'B+',
      point: '4.00',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'B+',
      point: '4.00',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'B+',
      point: '4.00',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'B+',
      point: '4.00',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'C+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'C+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'C+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'C+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'D+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'D+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'D+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
    {
      name: 'D+',
      point: '3.50',
      percentFrom: '95.00',
      percentUpto: '100.00',
      comment: 'Good Result',
    },
  ];

  const handleChange = (field) => (e) => {
    setFormData({
      ...formData,
      [field]: e.target.value,
    });
  };

  const handleSave = () => {
    console.log('Saving grade:', formData);
    alert('Grade saved successfully!');
  };

  const handleReset = () => {
    setFormData({
      gradeName: '',
      gradePoint: '',
      percentageFrom: '',
      percentageUpto: '',
      comments: '',
    });
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const SortIcon = ({ column }) => {
    if (sortColumn !== column) return <ChevronUp className="w-3 h-3 text-gray-300 inline ml-1" />;
    return sortDirection === 'asc' ? (
      <ChevronUp className="w-3 h-3 inline ml-1" />
    ) : (
      <ChevronDown className="w-3 h-3 inline ml-1" />
    );
  };

  return (
    <>
      <Dynamic_breadcrumb />

      <main className="min-h-screen bg-gray-50 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Add New Grade Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-bold">Add New Grade</h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 space-y-6">
                {/* Grade Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Grade Name</label>
                  <input
                    type="text"
                    value={formData.gradeName}
                    onChange={handleChange('gradeName')}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>
                {/* Grade Point */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Grade Point
                  </label>
                  <select
                    value={formData.gradePoint}
                    onChange={handleChange('gradePoint')}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none appearance-none text-gray-400"
                  >
                    <option value="">Please Select</option>
                    <option value="4.00">4.00</option>
                    <option value="3.75">3.75</option>
                    <option value="3.50">3.50</option>
                    <option value="3.25">3.25</option>
                    <option value="3.00">3.00</option>
                  </select>
                </div>
                {/* Percentage From */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Percentage From
                  </label>
                  <input
                    type="text"
                    value={formData.percentageFrom}
                    onChange={handleChange('percentageFrom')}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>
                {/* Percentage Upto */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Percentage Upto
                  </label>
                  <input
                    type="text"
                    value={formData.percentageUpto}
                    onChange={handleChange('percentageUpto')}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                </div>
                {/* Comments */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Comments</label>
                  <textarea
                    value={formData.comments}
                    onChange={handleChange('comments')}
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none"
                  />
                </div>
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleSave}
                    className="px-8 py-2 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleReset}
                    className="px-8 py-2 bg-blue-900 text-white rounded font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Exam Grade Lists */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm">
              <div className="flex items-center justify-between p-6 border-b">
                <h2 className="text-lg font-bold">Exam Grade Lists</h2>
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
              {/* Search Filters */}
              <div className="p-6 border-b">
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Search by Grade ..."
                    value={searchGrade}
                    onChange={(e) => setSearchGrade(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Search by Point ..."
                    value={searchPoint}
                    onChange={(e) => setSearchPoint(e.target.value)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
                  />
                  <button className="px-8 py-2 bg-orange-500 text-white rounded font-semibold hover:bg-orange-600 transition-colors">
                    SEARCH
                  </button>
                </div>
              </div>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b">
                    <tr>
                      <th className="px-6 py-3 text-left">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                        />
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('name')}
                      >
                        Grade Name <SortIcon column="name" />
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('point')}
                      >
                        Grade Point <SortIcon column="point" />
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('from')}
                      >
                        Percent From <SortIcon column="from" />
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('upto')}
                      >
                        Percent Upto <SortIcon column="upto" />
                      </th>
                      <th
                        className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100"
                        onClick={() => handleSort('comment')}
                      >
                        Comment <SortIcon column="comment" />
                      </th>
                      <th className="px-6 py-3"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {grades.map((grade, index) => (
                      <tr
                        key={index}
                        className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                      >
                        <td className="px-6 py-4">
                          <input
                            type="checkbox"
                            className="rounded border-gray-300"
                          />
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                          {grade.name}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{grade.point}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{grade.percentFrom}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{grade.percentUpto}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{grade.comment}</td>
                        <td className="px-6 py-4">
                          <button className="text-gray-400 hover:text-gray-600">
                            <MoreVertical className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* Pagination */}
              <div className="p-6 border-t">
                <div className="flex items-center justify-between">
                  {/* Progress Bar */}
                  <div className="flex items-center gap-2 flex-1">
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <div className="flex-1 h-1 bg-gray-300 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gray-400"
                        style={{ width: '25%' }}
                      ></div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  {/* Page Numbers */}
                  <div className="flex items-center gap-2 ml-6">
                    <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                      Previous
                    </button>
                    <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded font-medium">
                      1
                    </button>
                    <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
