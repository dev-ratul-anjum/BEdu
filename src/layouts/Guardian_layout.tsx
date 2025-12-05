import React, { useState } from 'react';
import { Layout, Drawer, Button, Dropdown, theme, Typography } from 'antd';
import { Menu as MenuIcon, Bell, LogOut, Settings, Users } from 'lucide-react';
import Guardian_navbar, {
    UserProfile,
    NotificationBadge,
} from '@/common/sidenav/Guardian_navbar';
import { Outlet, useLocation } from 'react-router-dom';

const { Header, Sider, Content } = Layout;
const { Title } = Typography;

const Guardian_layout = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);
    const location = useLocation();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const getPageTitle = () => {
        const path = location.pathname;
        const titleMap: Record<string, string> = {
            '/guardian': 'Dashboard',
            '/guardian/my-children': 'My Children',
            '/guardian/fees': 'Fees',
            '/guardian/lessons': 'Lessons',
            '/guardian/class-routine': 'Class Routine',
            '/guardian/lms': 'LMS',
            '/guardian/homework': 'Homework',
            '/guardian/attendance': 'Student Attendance',
            '/guardian/examination': 'Examination',
            '/guardian/leave': 'Leave',
            '/guardian/notice': 'Notice Board',
            '/guardian/subjects': 'Subjects',
            '/guardian/teacher': 'Teachers',
            '/guardian/library': 'Library',
            '/guardian/transport': 'Transport',
            '/guardian/dormitory': 'Dormitory',
        };
        return titleMap[path] || 'Dashboard';
    };

    const MobileSidebar = <Guardian_navbar collapsed={false} />;

    return (
        <Layout className="min-h-screen">
            {/* Desktop Sider */}
            <Sider
                width={260}
                collapsible
                collapsed={collapsed}
                onCollapse={value => setCollapsed(value)}
                breakpoint="lg"
                collapsedWidth={70}
                onBreakpoint={broken => {
                    if (broken) {
                        setCollapsed(true);
                    }
                }}
                className="hidden lg:block !bg-slate-900 shadow-xl z-20 overflow-hidden"
                trigger={null}
            >
                <Guardian_navbar
                    collapsed={collapsed}
                    onCollapse={setCollapsed}
                />
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
                        {/* Mobile Menu Trigger */}
                        <Button
                            type="text"
                            icon={<MenuIcon className="h-6 w-6" />}
                            onClick={() => setMobileOpen(true)}
                            className="lg:hidden flex items-center justify-center"
                        />

                        {/* Page Title */}
                        <Title
                            level={4}
                            className="!mb-0 !text-gray-800 hidden sm:block"
                        >
                            {getPageTitle()}
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

                {/* Content Area */}
                <Content className="p-4 md:p-6 overflow-y-auto h-[calc(100vh-64px)] bg-gray-50">
                    <div
                        style={{
                            background: colorBgContainer,
                            minHeight: '100%',
                            borderRadius: borderRadiusLG,
                        }}
                        className="p-6 shadow-sm border border-gray-100"
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Guardian_layout;
