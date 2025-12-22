import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Dynamic_breadcrumb } from '../../../../common/components/Dynamic_breadcrumb';

export default function Students_page() {
  const [searchQuery, setSearchQuery] = useState('');

  const students = [
    {
      id: '0024',
      name: 'Mark Willy',
      gender: 'Male',
      class: '2',
      subject: 'English',
      section: 'A',
      address: 'TA-107 Newyork',
      phone: '+1 123 9988568',
      email: 'kazifahim93@gmail.com',
      avatar: '👨',
    },
    {
      id: '0025',
      name: 'Sarah Connor',
      gender: 'Female',
      class: '2',
      subject: 'Physics',
      section: 'B',
      address: 'CA-202 Los Angeles',
      phone: '+1 456 7890123',
      email: 'sarah.connor@example.com',
      avatar: '�',
    },
    {
      id: '0026',
      name: 'John Doe',
      gender: 'Male',
      class: '2',
      subject: 'MATH',
      section: 'C',
      address: 'TX-303 Austin',
      phone: '+1 789 0123456',
      email: 'john.doe@example.com',
      avatar: '�',
    },
  ];

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <main className="min-h-screen bg-stone-100">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Table Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-bold">All Students Data</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by Name, Phone, Email ..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-4 w-96 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/80 font-medium">
                SEARCH
              </button>
            </div>
          </div>
          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Photo
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Gender
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Class
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Subject
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Section
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Address
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Phone
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    E-mail
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredStudents.map((student, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">#{student.id}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={student.id}
                        className="block"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-lg">
                          {student.avatar}
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <Link
                        to={student.id}
                        className="block"
                      >
                        {student.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.gender}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.section}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.address}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{student.email}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={student.id}
                        className="px-3 py-1 text-xs font-medium text-white bg-primary rounded hover:bg-primary/90 hover:text-white"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
                {filteredStudents.length === 0 && (
                  <tr>
                    <td
                      colSpan={11}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No students found matching your search.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 p-6 border-t">
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
              Previous
            </button>
            <button className="px-4 py-2 text-sm bg-primary text-white rounded">1</button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">2</button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
              Next
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
