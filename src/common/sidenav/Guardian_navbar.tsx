import React, { useMemo } from 'react';
import { Avatar, Badge, Button, Dropdown, Menu, Typography, theme } from 'antd';
import {
    Bell,
    LogOut,
    Settings,
    Users,
    BookOpen,
    LayoutDashboard,
    Calendar,
    GraduationCap,
    AlertCircle,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const { Text } = Typography;

interface MenuItem {
    key: string;
    title: string;
    icon: React.ElementType;
    path?: string;
}

const MENU_ITEMS: MenuItem[] = [
    { key: '1', title: 'Dashboard', icon: LayoutDashboard, path: '/guardian' },
    {
        key: '2',
        title: 'Child Profile',
        icon: Users,
        path: '/guardian/child-profile',
    },
    {
        key: '3',
        title: 'Results',
        icon: BookOpen,
        path: '/guardian/child-result',
    },
    {
        key: '4',
        title: 'Attendance History',
        icon: Calendar,
        path: '/guardian/attendance-history',
    },
    { key: '5', title: 'Notice', icon: AlertCircle, path: '/guardian/notice' },
];

interface GuardianNavbarProps {
    collapsed?: boolean;
    onCollapse?: (collapsed: boolean) => void;
}

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
                Guardian
            </Text>
            <Text className="block text-xs text-gray-400">Parent</Text>
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

const SidebarFooter = ({ collapsed }: { collapsed: boolean }) => (
    <div className="p-4 border-t border-slate-700 bg-slate-800/40">
        {collapsed ? (
            <div className="flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 flex-shrink-0">
                    <Users className="h-5 w-5 text-slate-300" />
                </div>
            </div>
        ) : (
            <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 flex items-center justify-center border border-slate-600 flex-shrink-0">
                    <Users className="h-5 w-5 text-slate-300" />
                </div>
                <div className="overflow-hidden flex-1">
                    <p className="text-sm font-medium text-slate-200 truncate">
                        Guardian
                    </p>
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                        Parent
                    </p>
                </div>
            </div>
        )}
    </div>
);

const Guardian_navbar: React.FC<GuardianNavbarProps> = ({
    collapsed = false,
    onCollapse,
}) => {
    const navigate = useNavigate();
    const location = useLocation();

    const currentPath = location.pathname;
    const activeKey = useMemo(
        () => MENU_ITEMS.find(item => item.path === currentPath)?.key || '1',
        [currentPath]
    );

    const handleMenuClick = (path: string) => {
        navigate(path);
    };

    const handleCollapse = () => {
        onCollapse?.(!collapsed);
    };

    const menuItems = MENU_ITEMS.map(item => ({
        key: item.key,
        icon: React.createElement(item.icon, { size: 20, strokeWidth: 1.5 }),
        label: collapsed ? null : item.title,
        onClick: () => handleMenuClick(item.path || ''),
    }));

    return (
        <div className="flex flex-col h-full bg-slate-950 text-white">
            {/* Logo Area */}
            <div
                className={`flex items-center h-16 border-b border-slate-800 transition-all duration-300 relative ${collapsed ? 'justify-center px-2' : 'justify-between px-4'}`}
            >
                {!collapsed && (
                    <>
                        <div className="flex items-center space-x-2 flex-1">
                            <GraduationCap className="h-8 w-8 text-cyan-400" />
                            <span className="text-lg font-bold text-white">
                                BEdu
                            </span>
                        </div>
                        <Button
                            type="text"
                            size="small"
                            icon={<ChevronLeft className="h-5 w-5" />}
                            onClick={handleCollapse}
                            className="!p-0 ml-2 text-slate-400 hover:!text-white transition-colors flex-shrink-0"
                        />
                    </>
                )}
                {collapsed && (
                    <>
                        <GraduationCap className="h-8 w-8 text-cyan-400" />
                        <Button
                            type="text"
                            size="small"
                            icon={<ChevronRight className="h-5 w-5" />}
                            onClick={handleCollapse}
                            className="!p-0 text-slate-400 hover:!text-white transition-colors absolute right-1 top-1/2 transform -translate-y-1/2"
                        />
                    </>
                )}
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <Menu
                    theme="dark"
                    mode="inline"
                    selectedKeys={[activeKey]}
                    items={menuItems}
                    className="!bg-slate-950 !border-none"
                    style={{
                        background: 'transparent',
                    }}
                    inlineIndent={collapsed ? 0 : 16}
                />
            </div>

            {/* Footer */}
            <SidebarFooter collapsed={collapsed} />

            <style>{`
        .custom-scrollbar {
          scrollbar-color: #475569 transparent;
          scrollbar-width: thin;
        }

        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #475569;
          border-radius: 3px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #64748b;
        }

        /* Guardian Navbar Menu Styles */
        .ant-menu-dark {
          background: transparent !important;
        }

        .ant-menu.ant-menu-dark .ant-menu-item {
          background: transparent !important;
          margin: 0 !important;
          padding: 0 16px !important;
          color: #cbd5e1 !important;
          line-height: 40px !important;
          height: 40px !important;
          border-radius: 0 !important;
          transition: all 0.3s ease !important;
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
        }

        /* Center icons when collapsed */
        .ant-layout-sider-collapsed .ant-menu.ant-menu-dark .ant-menu-item {
          justify-content: center !important;
          padding: 0 !important;
        }

        .ant-menu.ant-menu-dark .ant-menu-item:hover {
          background: #1e293b !important;
          color: #e2e8f0 !important;
        }

        .ant-menu.ant-menu-dark .ant-menu-item-selected {
          background: #1e293b !important;
          color: #06b6d4 !important;
          border-radius: 0 !important;
        }

        .ant-menu.ant-menu-dark .ant-menu-item-selected::after {
          border-right: 3px solid #06b6d4 !important;
        }

        .ant-menu-dark .ant-menu-item-icon {
          color: #94a3b8 !important;
          min-width: 20px !important;
          margin-right: 12px !important;
          flex-shrink: 0 !important;
        }

        .ant-menu-dark .ant-menu-item-selected .ant-menu-item-icon {
          color: #06b6d4 !important;
        }
      `}</style>
        </div>
    );
};

export default Guardian_navbar;
export { UserProfile, NotificationBadge, type MenuItem };
