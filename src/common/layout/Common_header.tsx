import React from 'react';
import {
    Layout,
    Button,
    Input,
    Badge,
    Avatar,
    Dropdown,
    MenuProps,
    theme,
} from 'antd';
import {
    Menu as MenuIcon,
    Search,
    Bot,
    MessageSquare,
    Bell,
    Globe,
    BarChart2,
    ChevronDown,
    User,
    LogOut,
    Settings,
} from 'lucide-react';

const { Header } = Layout;

interface HeaderProps {
    collapsed: boolean;
    setCollapsed: (collapsed: boolean) => void;
    setMobileOpen: (open: boolean) => void;
}

const Common_header: React.FC<HeaderProps> = ({
    collapsed,
    setCollapsed,
    setMobileOpen,
}) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const handleToggle = () => {
        if (window.innerWidth < 1024) {
            setMobileOpen(true);
        } else {
            setCollapsed(!collapsed);
        }
    };

    const userMenu: MenuProps['items'] = [
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
    ];

    return (
        <Header
            style={{ background: colorBgContainer }}
            className="sticky top-0 z-10 w-full flex items-center justify-between px-4 lg:px-6 shadow-sm h-16"
        >
            {/* Left Section: Toggle & Search */}
            <div className="flex items-center gap-4 flex-1">
                <Button
                    type="text"
                    icon={<MenuIcon className="h-6 w-6 text-slate-600" />}
                    onClick={handleToggle}
                    className="flex items-center justify-center hover:bg-slate-100"
                />

                {/* Desktop Search */}
                <div className="hidden md:flex items-center gap-2 w-full max-w-md">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Search"
                            className="pl-10 border-none bg-transparent shadow-none focus:shadow-none placeholder:text-slate-400 text-slate-600"
                        />
                    </div>
                </div>
            </div>

            {/* Right Section: Actions & Profile */}
            <div className="flex items-center gap-2 sm:gap-4">
                {/* Secondary Search (Name/Admission) - Desktop only */}
                <div className="hidden xl:flex items-center gap-2 mr-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                        <Input
                            placeholder="Name/Admission No."
                            className="pl-10 border-none bg-transparent shadow-none focus:shadow-none placeholder:text-slate-400 text-slate-600 w-48"
                        />
                    </div>
                </div>

                {/* Session Year */}
                <div className="hidden lg:flex items-center gap-1 text-slate-600 text-sm font-medium cursor-pointer hover:text-blue-600">
                    <span>2025 [Jan-Dec]</span>
                    <ChevronDown size={14} />
                </div>

                {/* Language */}
                <div className="hidden lg:flex items-center gap-1 text-slate-600 text-sm font-medium cursor-pointer hover:text-blue-600">
                    <span>EN</span>
                    <ChevronDown size={14} />
                </div>

                {/* Icons */}
                <div className="flex items-center gap-1 sm:gap-2">
                    <Button
                        type="text"
                        shape="circle"
                        icon={
                            <Bot
                                size={20}
                                className="text-slate-500"
                            />
                        }
                    />

                    <Badge
                        count={0}
                        size="small"
                        color="#8b5cf6"
                    >
                        <Button
                            type="text"
                            shape="circle"
                            icon={
                                <MessageSquare
                                    size={20}
                                    className="text-slate-500"
                                />
                            }
                        />
                    </Badge>

                    <Badge
                        count={0}
                        size="small"
                        color="#8b5cf6"
                    >
                        <Button
                            type="text"
                            shape="circle"
                            icon={
                                <Bell
                                    size={20}
                                    className="text-slate-500"
                                />
                            }
                        />
                    </Badge>

                    <Button
                        type="text"
                        shape="circle"
                        icon={
                            <Globe
                                size={20}
                                className="text-slate-500"
                            />
                        }
                        className="hidden sm:flex"
                    />
                    <Button
                        type="text"
                        shape="circle"
                        icon={
                            <BarChart2
                                size={20}
                                className="text-slate-500"
                            />
                        }
                        className="hidden sm:flex"
                    />
                </div>

                {/* User Profile */}
                <Dropdown
                    menu={{ items: userMenu }}
                    trigger={['click']}
                >
                    <div className="flex items-center gap-3 cursor-pointer pl-2 border-l border-slate-200 ml-2">
                        <Avatar
                            size={40}
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                            className="border-2 border-white shadow-sm"
                        />
                    </div>
                </Dropdown>
            </div>
        </Header>
    );
};

export default Common_header;
