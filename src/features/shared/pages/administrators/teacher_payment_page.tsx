import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { MoreVertical } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Teacher_payment_page() {
  const teachers = [
    {
      id: '0021',
      name: 'Mark Willy',
      gender: 'Male',
      class: '2',
      subject: 'English',
      section: 'A',
      address: 'TA-107 Newyork',
      ammount: 20000,
      payment_status: 'paid',
      phone: '+ 123 9988568',
      email: 'kazifahim93@gmail.com',
      avatar: '👨',
    },
    {
      id: '0021',
      name: 'Mark Willy',
      gender: 'Male',
      class: '2',
      subject: 'Physics',
      section: 'A',
      address: 'TA-107 Newyork',
      ammount: 20000,
      payment_status: 'paid',
      phone: '+ 123 9988568',
      email: 'kazifahim93@gmail.com',
      avatar: '👨',
    },
    {
      id: '0021',
      name: 'Mark Willy',
      gender: 'Male',
      class: '2',
      subject: 'English',
      section: 'A',
      address: 'TA-107 Newyork',
      ammount: 20000,
      payment_status: 'paid',
      phone: '+ 123 9988568',
      email: 'kazifahim93@gmail.com',
      avatar: '👨',
    },
  ];

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <main className="min-h-screen">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Table Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-bold">All Teachers Data</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by Phone ..."
                className="flex-1 px-4 w-96 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none"
              />
              <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium">
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
                    Ammount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase cursor-pointer hover:bg-gray-100">
                    Payment Status
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
                {teachers.map((teacher, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">#{teacher.id}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={teacher.id}
                        className="block"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-lg">
                          {teacher.avatar}
                        </div>
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      <Link
                        to={teacher.id}
                        className="block"
                      >
                        {teacher.name}
                      </Link>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.gender}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.subject}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.section}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.address}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">৳ {teacher.ammount}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <span className="inline-block px-3 py-0.5 bg-blue-500 text-white capitalize rounded-full">
                        {teacher.payment_status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{teacher.email}</td>
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
          <div className="flex items-center justify-end gap-2 p-6 border-t">
            <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded">
              Previous
            </button>
            <button className="px-4 py-2 text-sm bg-orange-500 text-white rounded">1</button>
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
