import {
    LayoutDashboard,
    BookOpen,
    Users,
    FileText,
    Calendar,
    Settings,
    Download,
    Printer,
    Library,
    Bus,
    Bed,
    GraduationCap,
    ChevronRight,
    ChevronDown,
} from 'lucide-react';

// Define menu items structure
export const teacher_menu_items = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        icon: <LayoutDashboard size={20} />,
        children: [{ key: '/teacher-dashboard', label: 'Dashboard' }],
    },
    {
        key: 'administration',
        label: 'Administration',
        icon: <BookOpen size={20} />,
        children: [
            { key: '/teacher-dashboard/academics', label: 'Academics' },
            { key: '/teacher-dashboard/users', label: 'User Management' },
            { key: '/teacher-dashboard/notice', label: 'Notice Management' },
            { key: '/teacher-dashboard/routine', label: 'Routine Management' },
            { key: '/teacher-dashboard/bulk-print', label: 'Bulk Print' },
            {
                key: '/teacher-dashboard/download-center',
                label: 'Download Center',
            },
        ],
    },
    {
        key: 'student',
        label: 'Student',
        icon: <Users size={20} />,
        children: [
            { key: '/teacher-dashboard/student-info', label: 'Student Info' },
            {
                key: '/teacher-dashboard/student-addmission',
                label: 'Add Student',
            },
            { key: '/teacher-dashboard/fees', label: 'Fees' },
            { key: '/teacher-dashboard/homework', label: 'Homework' },
            { key: '/teacher-dashboard/library', label: 'Library' },
            { key: '/teacher-dashboard/transport', label: 'Transport' },
            { key: '/teacher-dashboard/dormitory', label: 'Dormitory' },
        ],
    },
    {
        key: 'exam',
        label: 'Exam',
        icon: <FileText size={20} />,
        children: [
            { key: '/teacher-dashboard/examination', label: 'Examination' },
            { key: '/teacher-dashboard/exam-plan', label: 'Exam Plan' },
        ],
    },
];
