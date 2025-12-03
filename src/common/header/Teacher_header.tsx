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
import {
    BrowserRouter,
    Outlet,
    useLocation,
    useNavigate,
} from 'react-router-dom';

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

const UserProfile = () => (
    <div className="flex items-center space-x-3 cursor-pointer p-2 hover:bg-gray-100 rounded-lg transition-colors">
        <Avatar
            className="bg-blue-100 text-blue-600"
            icon={<Users className="w-4 h-4" />}
        />
        <div className="hidden md:block text-left">
            <Text
                strong
                className="block text-sm leading-tight text-gray-700"
            >
                Demo User
            </Text>
            <Text className="block text-xs text-gray-400">ADMIN</Text>
        </div>
    </div>
);

const AppLogo = () => (
    <div className="flex items-center space-x-2 px-4 h-16 border-b border-slate-700/50">
        <GraduationCap className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold text-white tracking-tight">
            BEdu SMS
        </span>
    </div>
);

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

const NotificationBadge = () => (
    <Badge
        count={5}
        size="small"
        offset={[-2, 2]}
    >
        <Button
            type="text"
            shape="circle"
            icon={<Bell className="w-5 h-5 text-gray-600" />}
            className="flex items-center justify-center hover:bg-gray-100"
        />
    </Badge>
);

const Teacher_header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    // Get Ant Design tokens for consistent spacing/colors if needed
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

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

    // Mobile Drawer Content
    const MobileSidebar = (
        <div className="flex flex-col h-full bg-slate-900 text-white">
            <AppLogo />
            <div className="flex-1 overflow-y-auto py-4">
                <Menu
                    mode="inline"
                    selectedKeys={[activeKey]}
                    items={menuItems}
                    className="bg-transparent border-none custom-dark-menu"
                    theme="dark"
                />
            </div>
            <SidebarFooter />
        </div>
    );

    return (
        <Header
            style={{ background: colorBgContainer }}
            className="sticky top-0 z-10 w-full flex items-center justify-between px-4 lg:px-6 shadow-sm h-16"
        >
            <div className="flex items-center gap-4">
                {/* Mobile Menu Trigger */}
                <Button
                    type="text"
                    icon={<MenuIcon className="h-6 w-6" />}
                    onClick={() => setMobileOpen(true)}
                    className="lg:hidden flex items-center justify-center"
                />

                {/* Desktop Collapse Trigger (Optional, uncomment to enable manual toggle on desktop) */}
                {/* <Button
              type="text"
              icon={collapsed ? <MenuIcon className="h-5 w-5"/> : <MenuIcon className="h-5 w-5"/>}
              onClick={() => setCollapsed(!collapsed)}
              className="hidden lg:flex items-center justify-center"
            />
            */}

                {/* Page Title */}
                <Title
                    level={4}
                    className="!mb-0 !text-gray-800 hidden sm:block"
                >
                    {SIDEBAR_LINKS.find(l => l.path === currentPath)?.title ||
                        'Dashboard'}
                </Title>
            </div>

            {/* Right Side Header Actions */}
            <div className="flex items-center space-x-2 sm:space-x-4">
                <NotificationBadge />

                <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                <Dropdown
                    menu={{
                        items: [
                            {
                                key: '1',
                                label: 'Profile',
                                icon: <Users size={14} />,
                            },
                            {
                                key: '2',
                                label: 'Settings',
                                icon: <Settings size={14} />,
                            },
                            { type: 'divider' },
                            {
                                key: '3',
                                label: 'Logout',
                                icon: (
                                    <LogOut
                                        size={14}
                                        className="text-red-500"
                                    />
                                ),
                                danger: true,
                            },
                        ],
                    }}
                    trigger={['click']}
                >
                    <div className="transition-colors rounded-lg hover:bg-gray-50 pr-2">
                        <UserProfile />
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default Teacher_header;
