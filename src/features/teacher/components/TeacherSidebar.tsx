import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';
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
import { useNavigate, useLocation } from 'react-router-dom';

const { Sider } = Layout;

interface TeacherSidebarProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    mobileOpen: boolean;
    setMobileOpen: (open: boolean) => void;
}

const TeacherSidebar: React.FC<TeacherSidebarProps> = ({
    collapsed,
    setCollapsed,
    mobileOpen,
    setMobileOpen,
}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // Define menu items structure
    const menuItems = [
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
                {
                    key: '/teacher-dashboard/notice',
                    label: 'Notice Management',
                },
                {
                    key: '/teacher-dashboard/routine',
                    label: 'Routine Management',
                },
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
                {
                    key: '/teacher-dashboard/student-info',
                    label: 'Student Info',
                },
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

    const handleMenuClick = (e: { key: string }) => {
        navigate(e.key);
        if (window.innerWidth < 1024) {
            setMobileOpen(false);
        }
    };

    // Transform menu items for Ant Design Menu
    const items = menuItems.map(item => ({
        key: item.key,
        icon: item.icon,
        label: item.label,
        children: item.children?.map(child => ({
            key: child.key,
            label: child.label,
        })),
    }));

    // Find open keys based on current path
    const getOpenKeys = () => {
        const foundItem = menuItems.find(item =>
            item.children?.some(child => child.key === location.pathname)
        );
        return foundItem ? [foundItem.key] : [];
    };

    return (
        <Sider
            width={260}
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
            breakpoint="lg"
            collapsedWidth="80"
            onBreakpoint={broken => {
                if (broken) setCollapsed(true);
            }}
            trigger={null}
            className={`!bg-[#0f172a] h-screen overflow-y-auto fixed left-0 top-0 z-50 transition-all duration-300 ${
                mobileOpen
                    ? 'translate-x-0'
                    : '-translate-x-full lg:translate-x-0'
            }`}
            style={{
                position: 'fixed',
                height: '100vh',
                left: 0,
                top: 0,
                bottom: 0,
            }}
        >
            {/* Logo Area */}
            <div className="h-16 flex items-center justify-center border-b border-slate-800/50">
                {collapsed ? (
                    <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg">
                        <span className="text-white font-bold text-xl">I</span>
                    </div>
                ) : (
                    <div className="flex items-center gap-2 px-4">
                        <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">
                                I
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-bold text-lg tracking-wide">
                                INFIX
                            </span>
                            <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                                Ultimate Education ERP
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Menu */}
            <div className="py-4">
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultOpenKeys={getOpenKeys()}
                    selectedKeys={[location.pathname]}
                    items={items}
                    onClick={handleMenuClick}
                    className="bg-transparent border-none px-2 [&_.ant-menu-item-selected]:!bg-blue-600 [&_.ant-menu-item-selected]:!text-white [&_.ant-menu-item]:text-slate-300 [&_.ant-menu-item]:my-1"
                    // Custom styles for menu items
                    style={{
                        background: 'transparent',
                    }}
                />
            </div>
        </Sider>
    );
};

export default TeacherSidebar;
