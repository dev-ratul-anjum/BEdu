import React, { useState, useEffect } from 'react';
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
    Tag,
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
    Mail,
    Phone,
    MapPin,
    Shield,
    User,
} from 'lucide-react';
import {
    BrowserRouter,
    Outlet,
    useLocation,
    useNavigate,
} from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title, Text } = Typography;

// --- Types & Constants ---

interface SidebarLink {
    id: string;
    title: string;
    path: string;
    icon: React.ElementType;
}

const SIDEBAR_LINKS: SidebarLink[] = [
    { id: '1', title: 'Dashboard', path: '/teacher', icon: LayoutDashboard },
    {
        id: '2',
        title: 'User Management',
        path: '/teacher/users',
        icon: BookOpen,
    },
    {
        id: '3',
        title: 'Routine Management',
        path: '/teacher/routine',
        icon: Calendar,
    },
    {
        id: '4',
        title: 'Notice Management',
        path: '/teacher/notice',
        icon: Settings,
    },
];

// --- Components ---

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

const AppLogo = () => (
    <div className="flex items-center space-x-2 px-4 h-16 border-b border-slate-700/50">
        <GraduationCap className="h-8 w-8 text-blue-400" />
        <span className="text-xl font-bold text-white tracking-tight">
            BEdu SMS
        </span>
    </div>
);

const SidebarFooter = ({ onClick }: { onClick: () => void }) => (
    <div
        onClick={onClick}
        className="p-4 border-t border-slate-800 bg-slate-900/50 cursor-pointer hover:bg-slate-800/80 transition-colors group"
    >
        <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 group-hover:border-slate-600 transition-colors">
                <Users className="h-5 w-5 text-slate-300" />
            </div>
            <div className="overflow-hidden">
                <p className="text-sm font-medium text-slate-200 truncate group-hover:text-white transition-colors">
                    Demo User
                </p>
                <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider group-hover:text-slate-400 transition-colors">
                    Admin
                </p>
            </div>
        </div>
    </div>
);

const UserProfilePage = () => (
    <div className="max-w-5xl mx-auto animate-fade-in">
        {/* Cover Image & Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
            <div className="h-48 bg-gradient-to-r from-blue-600 to-indigo-600 relative">
                <div className="absolute inset-0 bg-black/10"></div>
            </div>
            <div className="px-6 pb-8 relative">
                <div className="flex flex-col md:flex-row items-start md:items-end -mt-16 mb-6">
                    <div className="h-32 w-32 rounded-2xl bg-white p-1.5 shadow-lg relative z-10">
                        <div className="h-full w-full rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 overflow-hidden">
                            <Users
                                size={64}
                                className="text-slate-300"
                            />
                        </div>
                    </div>
                    <div className="md:ml-6 mt-4 md:mt-0 mb-2 flex-1">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">
                                    Demo User
                                </h1>
                                <div className="flex items-center gap-2 text-gray-500 mt-1">
                                    <Shield
                                        size={16}
                                        className="text-blue-500"
                                    />
                                    <span className="font-medium">
                                        System Administrator
                                    </span>
                                    <span className="text-gray-300">•</span>
                                    <span>Dhaka, Bangladesh</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button>Cancel</Button>
                                <Button type="primary">Save Changes</Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Left Column - Contact Info */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
                                Contact Details
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg border border-gray-200 text-gray-500">
                                        <Mail size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">
                                            Email Address
                                        </p>
                                        <p className="text-sm font-medium text-gray-800 break-all">
                                            admin@bedusms.com
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg border border-gray-200 text-gray-500">
                                        <Phone size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">
                                            Phone Number
                                        </p>
                                        <p className="text-sm font-medium text-gray-800">
                                            +880 1712 345678
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="p-2 bg-white rounded-lg border border-gray-200 text-gray-500">
                                        <MapPin size={16} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500 mb-0.5">
                                            Location
                                        </p>
                                        <p className="text-sm font-medium text-gray-800">
                                            Mirpur, Dhaka
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
                            <h3 className="text-blue-800 font-semibold mb-2">
                                Account Status
                            </h3>
                            <div className="flex items-center gap-2">
                                <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
                                <span className="text-blue-900 font-medium">
                                    Active
                                </span>
                            </div>
                            <p className="text-xs text-blue-600 mt-2">
                                Member since January 12, 2024
                            </p>
                        </div>
                    </div>

                    {/* Right Column - General Info / Form */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="border-b pb-4 mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">
                                Personal Information
                            </h3>
                            <p className="text-gray-500 text-sm">
                                Update your personal details and public profile.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="Demo"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue="User"
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-sm font-medium text-gray-700">
                                    Bio
                                </label>
                                <textarea
                                    rows={4}
                                    defaultValue="Administrator for the BEdu SMS platform. Managing courses, schedules, and user permissions."
                                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                />
                            </div>
                        </div>

                        <div className="pt-6 border-t">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Notification Settings
                            </h3>
                            <div className="space-y-3">
                                {[
                                    'Email notifications for new messages',
                                    'Push notifications for schedule changes',
                                    'Weekly summary reports',
                                ].map((label, idx) => (
                                    <label
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                        />
                                        <span className="text-gray-700 text-sm">
                                            {label}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

// --- Main Layout Component ---

const Teacher_layout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const currentPath = location.pathname;
    const activeKey =
        SIDEBAR_LINKS.find(link => link.path === currentPath)?.id || '';

    // Helper to check if we are on the profile page
    const isProfilePage = currentPath === '/teacher/profile';

    const handleMenuClick = (path: string) => {
        navigate(path);
        setMobileOpen(false);
    };

    const handleProfileClick = () => {
        navigate('/teacher/profile');
        setMobileOpen(false);
    };

    const menuItems = SIDEBAR_LINKS.map(link => ({
        key: link.id,
        icon: <link.icon size={18} />,
        label: link.title,
        onClick: () => handleMenuClick(link.path),
    }));

    // Handle Dropdown Menu Click
    const handleDropdownClick = (e: { key: string }) => {
        if (e.key === '/teacher/profile') {
            handleProfileClick();
        } else if (e.key === 'logout') {
            console.log('Logging out...');
        }
    };

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
            <SidebarFooter onClick={handleProfileClick} />
        </div>
    );

    return (
        <Layout className="min-h-screen">
            {/* Desktop Sider */}
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
                className="hidden lg:block !bg-slate-900 shadow-xl z-20 overflow-hidden"
                trigger={null}
            >
                <div className="flex flex-col h-full">
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

                    <div className="flex-1 py-4 overflow-y-auto custom-scrollbar">
                        <Menu
                            theme="dark"
                            mode="inline"
                            selectedKeys={[activeKey]}
                            items={menuItems}
                            className="bg-slate-900 !border-r-0 text-slate-300 [&_.ant-menu-item-selected]:!bg-blue-600 [&_.ant-menu-item-selected]:!text-white [&_.ant-menu-item]:my-1"
                        />
                    </div>

                    {!collapsed && (
                        <SidebarFooter onClick={handleProfileClick} />
                    )}
                </div>
            </Sider>

            {/* Mobile Drawer */}
            <Drawer
                placement="left"
                onClose={() => setMobileOpen(false)}
                open={mobileOpen}
                styles={{ body: { padding: 0 } }}
                width={280}
                closable={false}
                className="lg:hidden"
            >
                {MobileSidebar}
            </Drawer>

            <Layout>
                {/* Header */}
                <Header
                    style={{ background: colorBgContainer }}
                    className="sticky top-0 z-10 w-full flex items-center justify-between px-4 lg:px-6 shadow-sm h-16"
                >
                    <div className="flex items-center gap-4">
                        <Button
                            type="text"
                            icon={<MenuIcon className="h-6 w-6" />}
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden flex items-center justify-center"
                        />

                        <Title
                            level={4}
                            className="!mb-0 !text-gray-800 hidden sm:block"
                        >
                            {isProfilePage
                                ? 'User Profile'
                                : SIDEBAR_LINKS.find(
                                      l => l.path === currentPath
                                  )?.title || 'Dashboard'}
                        </Title>
                    </div>

                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <NotificationBadge />

                        <div className="h-8 w-px bg-gray-200 mx-2 hidden sm:block"></div>

                        <Dropdown
                            menu={{
                                onClick: handleDropdownClick,
                                items: [
                                    {
                                        key: 'profile',
                                        label: 'Profile',
                                        icon: <User size={14} />,
                                    },
                                    {
                                        key: 'settings',
                                        label: 'Settings',
                                        icon: <Settings size={14} />,
                                    },
                                    { type: 'divider' },
                                    {
                                        key: 'logout',
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

                {/* Content Area */}
                <Content className="p-4 md:p-6 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50/50">
                    <div
                        style={{
                            background: isProfilePage
                                ? 'transparent'
                                : colorBgContainer,
                            minHeight: '100%',
                            borderRadius: isProfilePage ? 0 : borderRadiusLG,
                        }}
                        className={
                            isProfilePage
                                ? ''
                                : 'p-6 shadow-sm border border-gray-100'
                        }
                    >
                        {isProfilePage ? <UserProfilePage /> : <Outlet />}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Teacher_layout;
