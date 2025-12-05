import React from 'react';
import {
    ContainerOutlined,
    DesktopOutlined,
    PieChartOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Button, Menu } from 'antd';
import type { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

interface StudentNavbarProps {
    collapsed: boolean;
    onToggleSidebar: () => void;
}

const items: MenuItem[] = [
    { key: '1', icon: <PieChartOutlined />, label: 'Profile' },
    { key: '2', icon: <DesktopOutlined />, label: 'Attendance' },
    { key: '3', icon: <ContainerOutlined />, label: 'Dues & Status' },
    { key: '4', icon: <ContainerOutlined />, label: 'Payment History' },
];

const Student_navbar: React.FC<StudentNavbarProps> = ({
    collapsed,
    onToggleSidebar,
}) => {
    return (
        <div
            style={{
                width: collapsed ? 80 : 250,
                height: '100vh',
                background: '#001529',
                position: 'fixed',
                left: 0,
                top: 0,
                overflowY: 'auto',
                transition: '0.3s',
            }}
        >
            <div
                style={{
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: collapsed ? '10' : '20px 0',
                }}
            >
                <img
                    src="/logo.png"
                    alt="School Logo"
                    style={{
                        width: collapsed ? 40 : 70,
                        height: collapsed ? 40 : 70,
                        borderRadius: '50%',
                        background: 'white',
                        objectFit: 'cover',
                        justifyContent: 'center',
                        marginBottom: collapsed ? 0 : 8,
                    }}
                />

                {!collapsed && (
                    <>
                        <h2 style={{ color: 'white', fontSize: 18, margin: 0 }}>
                            ABCD SCHOOL
                        </h2>
                        <p
                            style={{
                                color: '#cbd6f4',
                                fontSize: 12,
                                margin: 0,
                            }}
                        >
                            Student Panel
                        </p>
                    </>
                )}
            </div>

            <Menu
                style={{ color: 'white', fontSize: 15, margin: 0 }}
                theme="dark"
                mode="inline"
                inlineCollapsed={collapsed}
                items={items}
            />
        </div>
    );
};

export default Student_navbar;
