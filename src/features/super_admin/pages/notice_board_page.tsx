import {
  AlertCircle,
  Bell,
  Calendar,
  Check,
  ChevronLeft,
  ChevronRight,
  Download,
  Edit2,
  Eye,
  FileText,
  Filter,
  Image as ImageIcon,
  MoreVertical,
  Paperclip,
  Plus,
  Save,
  Search,
  Send,
  Trash2,
  X,
} from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';

// --- Types & Interfaces ---

type Role = 'All' | 'Student' | 'Teacher' | 'Admin' | 'Parent';
type Status = 'Published' | 'Draft' | 'Archived';

interface Attachment {
  id: string;
  name: string;
  type: 'image' | 'pdf' | 'doc';
  url: string;
  size: string;
}

interface Notice {
  id: string;
  title: string;
  content: string;
  targetRoles: Role[];
  status: Status;
  priority: 'Low' | 'Medium' | 'High';
  attachments: Attachment[];
  author: string;
  createdAt: string; // ISO Date string
  updatedAt: string;
  publishDate?: string;
}

// --- Mock Data ---

const MOCK_NOTICES: Notice[] = [
  {
    id: '1',
    title: 'Mid-Term Examination Schedule Released',
    content:
      'The mid-term examination schedule for Grades 9-12 has been finalized. Please check the attached PDF for detailed timings.',
    targetRoles: ['Student', 'Parent', 'Teacher'],
    status: 'Published',
    priority: 'High',
    author: 'Admin Office',
    createdAt: '2023-11-20T10:00:00Z',
    updatedAt: '2023-11-20T10:00:00Z',
    publishDate: '2023-11-20',
    attachments: [
      {
        id: 'a1',
        name: 'Exam_Schedule_Fall_2023.pdf',
        type: 'pdf',
        url: '#',
        size: '2.4 MB',
      },
    ],
  },
  {
    id: '2',
    title: 'Science Fair Registration Deadline',
    content:
      'All students interested in participating in the Annual Science Fair must register by this Friday. Late submissions will not be accepted.',
    targetRoles: ['Student'],
    status: 'Published',
    priority: 'Medium',
    author: 'Science Dept',
    createdAt: '2023-11-18T09:30:00Z',
    updatedAt: '2023-11-18T09:30:00Z',
    publishDate: '2023-11-18',
    attachments: [],
  },
  {
    id: '3',
    title: 'Staff Meeting: Curriculum Review',
    content:
      'A mandatory meeting for all teaching staff to review the new curriculum changes proposed by the board.',
    targetRoles: ['Teacher', 'Admin'],
    status: 'Draft',
    priority: 'High',
    author: 'Principal',
    createdAt: '2023-11-25T14:00:00Z',
    updatedAt: '2023-11-26T08:15:00Z',
    attachments: [
      {
        id: 'a2',
        name: 'Curriculum_Draft_v2.docx',
        type: 'doc',
        url: '#',
        size: '1.1 MB',
      },
    ],
  },
  {
    id: '4',
    title: 'Winter Holiday Announcement',
    content: 'School will remain closed for winter break from Dec 20th to Jan 5th. Happy Holidays!',
    targetRoles: ['All'],
    status: 'Published',
    priority: 'Low',
    author: 'Admin Office',
    createdAt: '2023-11-15T11:00:00Z',
    updatedAt: '2023-11-15T11:00:00Z',
    publishDate: '2023-11-15',
    attachments: [
      {
        id: 'a3',
        name: 'Holiday_Greeting_Card.png',
        type: 'image',
        url: '#',
        size: '3.5 MB',
      },
    ],
  },
  {
    id: '5',
    title: 'Cafeteria Menu Update',
    content: 'We have introduced new healthy options in the cafeteria menu starting next week.',
    targetRoles: ['Student', 'Teacher'],
    status: 'Archived',
    priority: 'Low',
    author: 'Cafeteria Mgr',
    createdAt: '2023-10-01T08:00:00Z',
    updatedAt: '2023-10-01T08:00:00Z',
    attachments: [],
  },
];

// --- Components ---

const Badge = ({
  children,
  type,
}: {
  children: React.ReactNode;
  type: 'role' | 'status' | 'priority';
}) => {
  let styles = 'px-2 py-0.5 rounded text-xs font-medium border ';

  if (type === 'role') styles += 'bg-blue-50 text-blue-700 border-blue-100';
  if (type === 'status') {
    if (children === 'Published') styles += 'bg-green-50 text-green-700 border-green-100';
    else if (children === 'Draft') styles += 'bg-yellow-50 text-yellow-700 border-yellow-100';
    else styles += 'bg-gray-100 text-gray-600 border-gray-200';
  }
  if (type === 'priority') {
    if (children === 'High') styles += 'bg-red-50 text-red-700 border-red-100';
    else if (children === 'Medium') styles += 'bg-orange-50 text-orange-700 border-orange-100';
    else styles += 'bg-green-50 text-green-700 border-green-100';
  }

  return <span className={styles}>{children}</span>;
};

// --- Main Application ---

export default function NoticeBoardPage() {
  // State: Data
  const [notices, setNotices] = useState<Notice[]>(MOCK_NOTICES);

  // State: UI & Controls
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterRole, setFilterRole] = useState<Role | ''>('');
  const [filterStatus, setFilterStatus] = useState<Status | ''>('');
  const [sortBy, setSortBy] = useState<'date' | 'title'>('date');

  // State: Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // State: Modals
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'view'>('create');
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  // State: Delete Confirmation
  const [deleteId, setDeleteId] = useState<string | null>(null);

  // State: Form Data
  const [formData, setFormData] = useState<Partial<Notice>>({
    title: '',
    content: '',
    targetRoles: [],
    priority: 'Medium',
    status: 'Draft',
    attachments: [],
  });

  // State: Feedback
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error';
  } | null>(null);

  // --- Helpers ---

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleCreateNew = () => {
    setModalMode('create');
    setFormData({
      title: '',
      content: '',
      targetRoles: ['All'],
      priority: 'Medium',
      status: 'Draft',
      attachments: [],
    });
    setIsModalOpen(true);
  };

  const handleEdit = (notice: Notice) => {
    setModalMode('edit');
    setSelectedNotice(notice);
    setFormData({ ...notice });
    setIsModalOpen(true);
  };

  const handleView = (notice: Notice) => {
    setModalMode('view');
    setSelectedNotice(notice);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (id: string) => {
    setDeleteId(id);
  };

  const confirmDelete = () => {
    if (deleteId) {
      setNotices((prev) => prev.filter((n) => n.id !== deleteId));
      setDeleteId(null);
      showToast('Notice deleted successfully', 'success');
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.title || !formData.content) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    const timestamp = new Date().toISOString();

    if (modalMode === 'create') {
      const newNotice: Notice = {
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title!,
        content: formData.content!,
        targetRoles: (formData.targetRoles as Role[]) || ['All'],
        status: (formData.status as Status) || 'Draft',
        priority: (formData.priority as any) || 'Medium',
        attachments: formData.attachments || [],
        author: 'Current User', // Mocked
        createdAt: timestamp,
        updatedAt: timestamp,
        publishDate: formData.status === 'Published' ? timestamp.split('T')[0] : undefined,
      };
      setNotices([newNotice, ...notices]);
      showToast('Notice created successfully', 'success');
    } else if (modalMode === 'edit' && selectedNotice) {
      setNotices((prev) =>
        prev.map((n) =>
          n.id === selectedNotice.id
            ? ({
                ...n,
                ...formData,
                updatedAt: timestamp,
                publishDate:
                  formData.status === 'Published' && !n.publishDate
                    ? timestamp.split('T')[0]
                    : n.publishDate,
              } as Notice)
            : n
        )
      );
      showToast('Notice updated successfully', 'success');
    }

    setIsModalOpen(false);
  };

  // --- Filtering & Logic ---

  const filteredNotices = useMemo(() => {
    return notices
      .filter((n) => {
        const matchesSearch =
          n.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          n.content.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRole = filterRole
          ? n.targetRoles.includes(filterRole as Role) || n.targetRoles.includes('All')
          : true;
        const matchesStatus = filterStatus ? n.status === filterStatus : true;
        return matchesSearch && matchesRole && matchesStatus;
      })
      .sort((a, b) => {
        if (sortBy === 'title') return a.title.localeCompare(b.title);
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      });
  }, [notices, searchQuery, filterRole, filterStatus, sortBy]);

  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const paginatedNotices = filteredNotices.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // --- Render Sub-Components ---

  const renderModal = () => {
    if (!isModalOpen) return null;

    if (modalMode === 'view' && selectedNotice) {
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{selectedNotice.title}</h2>
                <p className="text-sm text-gray-500 mt-1">
                  {selectedNotice.publishDate
                    ? `Published: ${selectedNotice.publishDate}`
                    : 'Not Published'}{' '}
                  • By {selectedNotice.author}
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <div className="flex gap-2">
                <Badge type="status">{selectedNotice.status}</Badge>
                <Badge type="priority">{selectedNotice.priority}</Badge>
                {selectedNotice.targetRoles.map((r) => (
                  <Badge
                    key={r}
                    type="role"
                  >
                    {r}
                  </Badge>
                ))}
              </div>

              <div className="prose max-w-none text-gray-700 whitespace-pre-line bg-gray-50 p-4 rounded-lg border">
                {selectedNotice.content}
              </div>

              {selectedNotice.attachments.length > 0 && (
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Paperclip className="w-4 h-4" /> Attachments
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedNotice.attachments.map((att) => (
                      <div
                        key={att.id}
                        className="flex items-center p-3 border rounded-lg hover:bg-blue-50 transition cursor-pointer group"
                      >
                        {att.type === 'pdf' ? (
                          <FileText className="w-8 h-8 text-red-500 mr-3" />
                        ) : att.type === 'image' ? (
                          <ImageIcon className="w-8 h-8 text-blue-500 mr-3" />
                        ) : (
                          <FileText className="w-8 h-8 text-gray-500 mr-3" />
                        )}
                        <div className="flex-1 overflow-hidden">
                          <p className="font-medium text-sm text-gray-800 truncate group-hover:text-blue-700">
                            {att.name}
                          </p>
                          <p className="text-xs text-gray-500">{att.size}</p>
                        </div>
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="p-6 border-t bg-gray-50 flex justify-end gap-3 rounded-b-xl">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 border rounded-lg bg-white text-gray-700 hover:bg-gray-50"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setIsModalOpen(false);
                  handleEdit(selectedNotice);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <Edit2 className="w-4 h-4" /> Edit Notice
              </button>
            </div>
          </div>
        </div>
      );
    }

    // Create/Edit Form
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto">
          <div className="p-6 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
            <h2 className="text-xl font-bold text-gray-800">
              {modalMode === 'create' ? 'Create New Notice' : 'Edit Notice'}
            </h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>

          <form
            onSubmit={handleFormSubmit}
            className="p-6 space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">
                  Notice Title <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  placeholder="e.g., Annual Sports Day 2024"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Priority Level</label>
                <select
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority: e.target.value as any,
                    })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                >
                  <option value="Low">Low</option>
                  <option value="Medium">Medium</option>
                  <option value="High">High - Urgent</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 flex justify-between">
                <span>
                  Content (Markdown Friendly) <span className="text-red-500">*</span>
                </span>
                <span className="text-xs text-gray-400 font-normal">
                  Supports simple text formatting
                </span>
              </label>
              <textarea
                value={formData.content}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    content: e.target.value,
                  })
                }
                className="w-full h-40 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="Write your detailed notice here..."
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Target Audience</label>
                <div className="flex flex-wrap gap-2 p-2 border rounded-lg bg-gray-50 min-h-[50px]">
                  {['All', 'Student', 'Teacher', 'Parent', 'Admin'].map((role) => (
                    <label
                      key={role}
                      className="flex items-center space-x-2 bg-white px-3 py-1.5 rounded border cursor-pointer hover:border-blue-300"
                    >
                      <input
                        type="checkbox"
                        checked={formData.targetRoles?.includes(role as Role)}
                        onChange={(e) => {
                          const current = formData.targetRoles || [];
                          if (role === 'All') {
                            setFormData({
                              ...formData,
                              targetRoles: e.target.checked ? ['All'] : [],
                            });
                          } else {
                            const newRoles = e.target.checked
                              ? [...current.filter((r) => r !== 'All'), role as Role]
                              : current.filter((r) => r !== role);
                            setFormData({
                              ...formData,
                              targetRoles: newRoles,
                            });
                          }
                        }}
                        className="rounded text-blue-600 focus:ring-blue-500 h-4 w-4"
                      />
                      <span className="text-sm text-gray-700">{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Attachments</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer">
                  <input
                    type="file"
                    className="hidden"
                    id="file-upload"
                  />
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer"
                  >
                    <div className="mx-auto h-10 w-10 text-gray-400 mb-2">
                      <Paperclip className="h-full w-full" />
                    </div>
                    <p className="text-sm text-gray-600">Click to upload files</p>
                    <p className="text-xs text-gray-400 mt-1">PDF, JPG, DOC up to 10MB</p>
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t flex justify-between items-center">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-gray-700">Status:</label>
                <select
                  value={formData.status}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status: e.target.value as Status,
                    })
                  }
                  className="border rounded px-2 py-1 text-sm bg-gray-50"
                >
                  <option value="Draft">Draft</option>
                  <option value="Published">Publish Immediately</option>
                </select>
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg border text-gray-700 hover:bg-gray-50 font-medium"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-medium flex items-center gap-2 shadow-lg shadow-blue-200"
                >
                  {formData.status === 'Published' ? (
                    <Send className="w-4 h-4" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {modalMode === 'create' ? 'Create Notice' : 'Save Changes'}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8 font-sans text-gray-900">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <div className="p-2 bg-blue-600 rounded-lg text-white">
                <Bell className="w-6 h-6" />
              </div>
              Notice Board
            </h1>
            <p className="text-gray-500 mt-1 ml-1">
              Manage school announcements, circulars, and exam updates.
            </p>
          </div>
          <button
            onClick={handleCreateNew}
            className="group flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-xl shadow-xl transition-all transform hover:-translate-y-0.5"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            Create Notice
          </button>
        </div>

        {/* Stats / Quick Actions (Optional Enhancement) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Total Active</p>
              <p className="text-2xl font-bold text-gray-800">
                {notices.filter((n) => n.status === 'Published').length}
              </p>
            </div>
            <div className="p-3 bg-green-50 rounded-full text-green-600">
              <Check className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Drafts</p>
              <p className="text-2xl font-bold text-gray-800">
                {notices.filter((n) => n.status === 'Draft').length}
              </p>
            </div>
            <div className="p-3 bg-yellow-50 rounded-full text-yellow-600">
              <Edit2 className="w-5 h-5" />
            </div>
          </div>
          <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium">Priority High</p>
              <p className="text-2xl font-bold text-gray-800">
                {notices.filter((n) => n.priority === 'High').length}
              </p>
            </div>
            <div className="p-3 bg-red-50 rounded-full text-red-600">
              <AlertCircle className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* Filters Bar */}
          <div className="p-5 border-b border-gray-100 flex flex-col lg:flex-row gap-4 justify-between items-center bg-white">
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search notices by title, content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition"
              />
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={filterRole}
                  onChange={(e) => setFilterRole(e.target.value as Role)}
                  className="pl-9 pr-8 py-2.5 border border-gray-200 rounded-lg bg-white text-sm focus:border-blue-400 outline-none appearance-none cursor-pointer hover:bg-gray-50"
                >
                  <option value="">All Roles</option>
                  <option value="Student">Students</option>
                  <option value="Teacher">Teachers</option>
                  <option value="Parent">Parents</option>
                </select>
              </div>

              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value as Status)}
                className="px-4 py-2.5 border border-gray-200 rounded-lg bg-white text-sm focus:border-blue-400 outline-none cursor-pointer hover:bg-gray-50"
              >
                <option value="">All Status</option>
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>

              <div className="border-l pl-3 ml-1 flex items-center bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Filter className="w-4 h-4 rotate-180" />{' '}
                  {/* Using generic icon for list view metaphor */}
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-white shadow text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
                >
                  <Filter className="w-4 h-4" /> {/* Using generic icon for grid view metaphor */}
                </button>
              </div>
            </div>
          </div>

          {/* Notices List */}
          <div className="p-0">
            {paginatedNotices.length > 0 ? (
              <div
                className={`
                ${viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6' : 'divide-y divide-gray-100'}
              `}
              >
                {paginatedNotices.map((notice) => (
                  <div
                    key={notice.id}
                    className={`
                      group relative transition-all duration-200
                      ${
                        viewMode === 'grid'
                          ? 'bg-white border rounded-xl p-5 hover:shadow-lg hover:-translate-y-1'
                          : 'p-5 hover:bg-gray-50 flex flex-col sm:flex-row gap-4 items-start sm:items-center'
                      }
                    `}
                  >
                    {/* Date Block (List View Only) */}
                    {viewMode === 'list' && (
                      <div className="hidden sm:flex flex-col items-center justify-center bg-blue-50 text-blue-700 rounded-lg h-16 w-16 min-w-[4rem]">
                        <span className="text-xl font-bold">
                          {new Date(notice.createdAt).getDate()}
                        </span>
                        <span className="text-xs font-medium uppercase">
                          {new Date(notice.createdAt).toLocaleString('default', { month: 'short' })}
                        </span>
                      </div>
                    )}

                    {/* Content */}
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2 mb-1">
                        {viewMode === 'grid' && (
                          <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Calendar className="w-3 h-3" />{' '}
                            {new Date(notice.createdAt).toLocaleDateString()}
                          </span>
                        )}
                        <Badge type="status">{notice.status}</Badge>
                        <Badge type="priority">{notice.priority}</Badge>
                      </div>

                      <h3
                        className="text-lg font-bold text-gray-900 truncate pr-8 group-hover:text-blue-600 cursor-pointer"
                        onClick={() => handleView(notice)}
                      >
                        {notice.title}
                      </h3>

                      <p className="text-gray-500 text-sm line-clamp-2">{notice.content}</p>

                      <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          Target: {notice.targetRoles.join(', ')}
                        </span>
                        {notice.attachments.length > 0 && (
                          <span className="flex items-center gap-1 text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                            <Paperclip className="w-3 h-3" /> {notice.attachments.length}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div
                      className={`flex items-center gap-2 ${viewMode === 'grid' ? 'mt-4 pt-4 border-t justify-end' : 'sm:ml-auto'}`}
                    >
                      <button
                        onClick={() => handleView(notice)}
                        className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleEdit(notice)}
                        className="p-2 text-gray-500 hover:text-green-600 hover:bg-green-50 rounded-lg transition"
                        title="Edit"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteClick(notice.id)}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-12 text-center text-gray-500">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-medium text-gray-900">No notices found</h3>
                <p>Try adjusting your search or filters to find what you're looking for.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setFilterRole('');
                    setFilterStatus('');
                  }}
                  className="mt-4 text-blue-600 hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {filteredNotices.length > 0 && (
              <div className="p-4 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-500">
                  Showing{' '}
                  <span className="font-medium">{(currentPage - 1) * itemsPerPage + 1}</span> to{' '}
                  <span className="font-medium">
                    {Math.min(currentPage * itemsPerPage, filteredNotices.length)}
                  </span>{' '}
                  of <span className="font-medium">{filteredNotices.length}</span> results
                </p>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentPage(i + 1)}
                      className={`w-8 h-8 rounded-lg text-sm font-medium transition ${
                        currentPage === i + 1
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {deleteId && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 max-w-sm w-full">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mx-auto mb-4">
              <Trash2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-center text-gray-900 mb-2">Delete Notice?</h3>
            <p className="text-center text-gray-500 mb-6 text-sm">
              Are you sure you want to delete this notice? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => setDeleteId(null)}
                className="flex-1 px-4 py-2 border rounded-lg hover:bg-gray-50 text-gray-700 font-medium"
              >
                Cancel
              </button>
              <button
                onClick={confirmDelete}
                className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium shadow-lg shadow-red-200"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Global Toast Notification */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 px-6 py-3 rounded-xl shadow-2xl text-white font-medium flex items-center gap-3 transition-all transform animate-in slide-in-from-bottom-5 z-[70] ${
            toast.type === 'success' ? 'bg-gray-900' : 'bg-red-600'
          }`}
        >
          {toast.type === 'success' ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <AlertCircle className="w-5 h-5 text-white" />
          )}
          {toast.message}
        </div>
      )}

      {/* Main Modal (Create/Edit/View) */}
      {renderModal()}
    </div>
  );
}
