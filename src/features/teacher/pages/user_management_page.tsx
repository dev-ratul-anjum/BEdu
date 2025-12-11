import {
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit,
  Filter,
  Mail,
  MoreVertical,
  Plus,
  Search,
  Shield,
  Trash2,
  Users,
  X,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

// --- Mock Data ---
const MOCK_USERS = [
  {
    id: 'T-1001',
    name: 'Dr. Sarah Wilson',
    email: 'sarah.w@school.edu',
    role: 'Teacher',
    department: 'Science',
    status: 'Active',
    lastLogin: '2 mins ago',
    biometric: true,
  },
  {
    id: 'S-202401',
    name: 'Michael Chen',
    email: 'michael.c@student.edu',
    role: 'Student',
    department: 'Grade 10',
    status: 'Active',
    lastLogin: '1 hour ago',
    biometric: true,
  },
  {
    id: 'A-001',
    name: 'James Rodriquez',
    email: 'admin.james@school.edu',
    role: 'Admin',
    department: 'IT Support',
    status: 'Active',
    lastLogin: 'Yesterday',
    biometric: true,
  },
  {
    id: 'S-202402',
    name: 'Emma Watson',
    email: 'emma.w@student.edu',
    role: 'Student',
    department: 'Grade 11',
    status: 'Inactive',
    lastLogin: '3 days ago',
    biometric: false,
  },
  {
    id: 'T-1002',
    name: 'Robert Brown',
    email: 'r.brown@school.edu',
    role: 'Teacher',
    department: 'Mathematics',
    status: 'On Leave',
    lastLogin: '1 week ago',
    biometric: true,
  },
  {
    id: 'S-202403',
    name: 'Lucas Miller',
    email: 'lucas.m@student.edu',
    role: 'Student',
    department: 'Grade 9',
    status: 'Active',
    lastLogin: '5 hours ago',
    biometric: true,
  },
];

export default function UserManagementPage() {
  // --- State Management ---
  const [users, setUsers] = useState(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New User Form State
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    role: 'Student',
    id: '',
    department: '',
    status: 'Active',
    biometric: false,
  });

  // --- Handlers ---

  // Filter Logic
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = roleFilter === 'All' || user.role === roleFilter;
    const matchesStatus = statusFilter === 'All' || user.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleDelete = (userId) => {
    if (
      window.confirm('Are you sure you want to delete this user? This action cannot be undone.')
    ) {
      setUsers(users.filter((u) => u.id !== userId));
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    // Basic validation
    if (!newUser.name || !newUser.id || !newUser.email) return;

    const userToAdd = {
      ...newUser,
      lastLogin: 'Never',
    };

    setUsers([userToAdd, ...users]);
    setIsModalOpen(false);
    // Reset form
    setNewUser({
      name: '',
      email: '',
      role: 'Student',
      id: '',
      department: '',
      status: 'Active',
      biometric: false,
    });
  };

  // Helper to get role badge color
  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'Admin':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Teacher':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Student':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  // Helper to get status dot color
  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'text-emerald-500 bg-emerald-50';
      case 'Inactive':
        return 'text-red-500 bg-red-50';
      case 'On Leave':
        return 'text-amber-500 bg-amber-50';
      default:
        return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-3 bg-blue-600 rounded-lg shadow-lg shadow-blue-200">
                <Users className="w-8 h-8 text-white" />
              </div>
              User Management
            </h1>
            <p className="text-gray-500 mt-1 ml-1">
              Manage access, roles, and profiles for the school system.
            </p>
          </div>

          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-all shadow-sm">
              <Download className="w-4 h-4" />
              <span className="hidden sm:inline">Export CSV</span>
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all shadow-lg shadow-blue-200 transform hover:-translate-y-0.5"
            >
              <Plus className="w-5 h-5" />
              Add New User
            </button>
          </div>
        </div>

        {/* --- Filters & Search Bar --- */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 mb-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, ID, or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                <Filter className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500 font-medium">Role:</span>
                <select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  className="bg-transparent border-none text-gray-900 text-sm font-semibold focus:ring-0 cursor-pointer"
                >
                  <option value="All">All Roles</option>
                  <option value="Student">Student</option>
                  <option value="Teacher">Teacher</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg">
                <Shield className="w-4 h-4 text-gray-500" />
                <span className="text-sm text-gray-500 font-medium">Status:</span>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-transparent border-none text-gray-900 text-sm font-semibold focus:ring-0 cursor-pointer"
                >
                  <option value="All">All Status</option>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="On Leave">On Leave</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* --- Data Table --- */}
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    User Info
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    Role & ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    Biometric
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    Last Login
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 text-right text-xs font-semibold text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.length > 0 ? (
                  filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-sm">
                            {user.name.charAt(0)}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{user.name}</div>
                            <div className="text-xs text-gray-500 flex items-center gap-1">
                              <Mail className="w-3 h-3" /> {user.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex flex-col items-start gap-1">
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.role)}`}
                          >
                            {user.role}
                          </span>
                          <span className="text-xs text-gray-500 font-mono">ID: {user.id}</span>
                          <span className="text-xs text-gray-400">{user.department}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(user.status)}`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full mr-1.5 ${user.status === 'Active' ? 'bg-emerald-500' : user.status === 'Inactive' ? 'bg-red-500' : 'bg-amber-500'}`}
                          ></span>
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.biometric ? (
                          <div className="flex items-center text-emerald-600 gap-1.5 bg-emerald-50 w-fit px-2 py-1 rounded">
                            <CheckCircle className="h-4 w-4" />
                            <span className="text-xs font-medium">Registered</span>
                          </div>
                        ) : (
                          <div className="flex items-center text-red-500 gap-1.5 bg-red-50 w-fit px-2 py-1 rounded">
                            <AlertCircle className="h-4 w-4" />
                            <span className="text-xs font-medium">Pending</span>
                          </div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(user.id)}
                            className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="6"
                      className="px-6 py-12 text-center"
                    >
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <Search className="w-12 h-12 mb-3 text-gray-300" />
                        <p className="text-lg font-medium">No users found</p>
                        <p className="text-sm">Try adjusting your search or filters.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer */}
          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-sm text-slate-500">
              Showing <span className="font-semibold text-slate-700">1</span> to{' '}
              <span className="font-semibold text-slate-700">{filteredUsers.length}</span> of{' '}
              <span className="font-semibold text-slate-700">{filteredUsers.length}</span> entries
            </span>
            <div className="flex gap-2">
              <button
                disabled
                className="p-2 border border-slate-200 rounded-lg bg-white text-slate-300 cursor-not-allowed shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="hidden sm:flex gap-1">
                <button className="px-3.5 py-2 border border-blue-500 bg-blue-50 text-blue-600 rounded-lg text-sm font-medium">
                  1
                </button>
                <button className="px-3.5 py-2 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
                  2
                </button>
                <button className="px-3.5 py-2 border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 rounded-lg text-sm font-medium transition-colors">
                  3
                </button>
              </div>
              <button className="p-2 border border-slate-200 rounded-lg bg-white text-slate-600 hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* --- Add User Modal --- */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl transform transition-all animate-in fade-in zoom-in duration-200">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Add New User</h3>
                <p className="text-sm text-gray-500 mt-0.5">
                  Enter the details for the new account.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Form */}
            <form
              onSubmit={handleAddUser}
              className="p-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={newUser.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g. John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={newUser.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="john@school.edu"
                  />
                </div>

                {/* ID Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ID Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="id"
                    required
                    value={newUser.id}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder="e.g. T-2024001"
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="role"
                      value={newUser.role}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none appearance-none bg-white"
                    >
                      <option value="Student">Student</option>
                      <option value="Teacher">Teacher</option>
                      <option value="Admin">Admin</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                      <Users className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>

                {/* Department/Grade */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {newUser.role === 'Student' ? 'Class / Grade' : 'Department'}
                  </label>
                  <input
                    type="text"
                    name="department"
                    value={newUser.department}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                    placeholder={newUser.role === 'Student' ? 'e.g. Grade 10' : 'e.g. Science'}
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Account Status
                  </label>
                  <select
                    name="status"
                    value={newUser.status}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="On Leave">On Leave</option>
                  </select>
                </div>

                {/* Biometric Toggle */}
                <div className="flex items-center mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <input
                    id="biometric"
                    type="checkbox"
                    name="biometric"
                    checked={newUser.biometric}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="biometric"
                    className="ml-3 block text-sm font-medium text-gray-700"
                  >
                    Biometric Data Registered?
                  </label>
                </div>
              </div>

              {/* Form Footer */}
              <div className="mt-8 flex justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm"
                >
                  Create User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
