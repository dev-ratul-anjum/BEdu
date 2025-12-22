import { Dynamic_breadcrumb } from '@/common/components/Dynamic_breadcrumb';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Parents_page() {
  const [searchQuery, setSearchQuery] = useState('');

  const parents = [
    {
      id: '0020',
      name: 'Mark Jhon',
      gender: 'Male',
      class: '12',
      subject: 'English',
      section: 'A',
      address: 'TA-107 Newyork',
      phone: '+8801754841256',
      email: 'mark@gmail.com',
      avatar: '👨',
    },
    {
      id: '0021',
      name: 'Milar',
      gender: 'Male',
      class: '5',
      subject: 'Physics',
      section: 'A',
      address: 'TA-107 Newyork',
      phone: '+8801752541256',
      email: 'milar@gmail.com',
      avatar: '👨',
    },
    {
      id: '0022',
      name: 'Christopher',
      gender: 'Male',
      class: '10',
      subject: 'English',
      section: 'A',
      address: 'TA-107 Newyork',
      phone: '+8801752525410',
      email: 'christopher@gmail.com',
      avatar: '👨',
    },
  ];

  const filteredParents = parents.filter(
    (parent) =>
      parent.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
      parent.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Dynamic_breadcrumb className="mb-6" />

      <main className="min-h-screen">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Table Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-bold">All Parents Data</h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Search by name, phone, email..."
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
                    Child Class
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
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredParents.map((parent, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-gray-900">#{parent.id}</td>
                    <td className="px-6 py-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white text-lg">
                        {parent.avatar}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{parent.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{parent.gender}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{parent.class}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{parent.address}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{parent.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{parent.email}</td>
                    <td className="px-6 py-4">
                      <Link
                        to={parent.id}
                        className="px-3 py-1 text-xs font-medium text-white bg-primary rounded hover:bg-primary/90 hover:text-white"
                      >
                        Details
                      </Link>
                    </td>
                  </tr>
                ))}
                {filteredParents.length === 0 && (
                  <tr>
                    <td
                      colSpan={11}
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No parents found matching your search.
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
