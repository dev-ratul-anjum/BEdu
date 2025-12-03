import React, { useState } from 'react';
import {
    Layout,
    Menu,
    Drawer,
    Button,
    Avatar,
    Badge,
    Dropdown,
    theme,
    Typography,
} from 'antd';
import {
    Menu as MenuIcon,
    Bell,
    LogOut,
    GraduationCap,
    Users,
    LayoutDashboard,
    Settings,
    BookOpen,
    Calendar,
    ChevronDown,
} from 'lucide-react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

interface SidebarLink {
    id: string;
    title: string;
    path: string;
    icon: React.ElementType;
}

const SIDEBAR_LINKS: SidebarLink[] = [
    { id: '1', title: 'Dashboard', path: '/', icon: LayoutDashboard },
    { id: '2', title: 'Courses', path: '/courses', icon: BookOpen },
    { id: '3', title: 'Schedule', path: '/schedule', icon: Calendar },
    { id: '4', title: 'Settings', path: '/settings', icon: Settings },
];

const SidebarFooter = () => (
    <div className="p-4 border-t border-slate-800 bg-slate-900/50">
        <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700">
                <Users className="h-5 w-5 text-slate-300" />
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-medium text-slate-200 truncate">
                    Demo User
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                    Admin
                </p>
            </div>
        </div>
    </div>
);
const Teacher_navbar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    // Handle active menu key based on current path
    const currentPath = location.pathname;
    const activeKey =
        SIDEBAR_LINKS.find(link => link.path === currentPath)?.id || '1';

    const handleMenuClick = (path: string) => {
        navigate(path);
        setMobileOpen(false); // Close drawer on mobile when clicking a link
    };

    // Ant Design Menu Items
    const menuItems = SIDEBAR_LINKS.map(link => ({
        key: link.id,
        icon: <link.icon size={18} />,
        label: link.title,
        onClick: () => handleMenuClick(link.path),
    }));

    return (
        <Sider
            width={260}
            collapsible
            collapsed={collapsed}
            onCollapse={value => setCollapsed(value)}
            breakpoint="lg"
            collapsedWidth="80"
            onBreakpoint={broken => {
                // Auto-collapse logic handled by Antd, but we can sync state here if needed
                if (broken) {
                    setCollapsed(true);
                }
            }}
            className="hidden lg:block !bg-slate-900 shadow-xl z-20 overflow-hidden"
            trigger={null} // We can hide default trigger and make our own if desired
        >
            <div className="flex flex-col h-full">
                {/* Logo Area */}
                <div
                    className={`flex items-center h-16 px-4 transition-all duration-300 border-b border-slate-800 ${collapsed ? 'justify-center' : ''}`}
                >
                    {collapsed ? (
                        <GraduationCap className="h-8 w-8 text-blue-400" />
                    ) : (
                        <>
                            <GraduationCap className="h-8 w-8 text-blue-400 mr-2" />
                            <span className="text-xl font-bold text-white truncate">
                                BEdu SMS
                            </span>
                        </>
                    )}
                </div>

                {/* Menu Area */}
                <div className="flex-1 py-4 overflow-y-auto custom-scrollbar">
                    <Menu
                        theme="dark"
                        mode="inline"
                        selectedKeys={[activeKey]}
                        items={menuItems}
                        className="bg-slate-900 !border-r-0 text-slate-300 [&_.ant-menu-item-selected]:!bg-blue-600 [&_.ant-menu-item-selected]:!text-white [&_.ant-menu-item]:my-1"
                    />
                </div>

                {/* Footer Area */}
                {!collapsed && <SidebarFooter />}
            </div>
        </Sider>
    );
};

export default Teacher_navbar;
