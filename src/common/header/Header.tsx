import React from 'react';
import { Layout, Input, Badge, Avatar, Tooltip } from 'antd';
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    BellOutlined,
} from '@ant-design/icons';

const { Header } = Layout;
const { Search } = Input;

interface AppHeaderProps {
    collapsed: boolean;
    onToggleSidebar: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
    collapsed,
    onToggleSidebar,
}) => {
    return (
        <Header
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0 20px',
                height: 100,
                background: '#002766',
                boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
            }}
        >
            {/* LEFT — SIDEBAR TOGGLE BUTTON */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
                <div
                    onClick={onToggleSidebar}
                    style={{
                        fontSize: 24,
                        color: 'white',
                        cursor: 'pointer',
                    }}
                >
                    {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </div>
            </div>

            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    position: 'absolute',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <img
                    src="/logo.png"
                    alt="School Logo"
                    style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '60%',
                        background: 'white',
                        objectFit: 'cover',
                    }}
                />

                <div style={{ lineHeight: 1.1 }}>
                    <h1
                        style={{
                            color: 'white',
                            fontSize: '28px',
                            margin: 0,
                            fontWeight: 700,
                            letterSpacing: '1px',
                            textAlign: 'center',
                        }}
                    >
                        ABCD SCHOOL
                    </h1>

                    <p
                        style={{
                            color: '#cdd6f4',
                            fontSize: '14px',
                            margin: 0,
                            fontWeight: 500,
                            textAlign: 'center',
                        }}
                    >
                        Excellence • Discipline • Innovation
                    </p>
                </div>
            </div>

            {/* RIGHT — SEARCH, NOTIFICATION, USER */}
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '20px',
                }}
            >
                <Search
                    placeholder="Search..."
                    style={{ width: 250, background: 'white' }}
                />

                {/* NOTIFICATIONS */}
                <Badge
                    count={5}
                    size="small"
                >
                    <BellOutlined
                        style={{
                            color: 'white',
                            fontSize: 22,
                            cursor: 'pointer',
                        }}
                    />
                </Badge>

                {/* USER NAME */}
                <Tooltip title="Profile">
                    <span
                        style={{
                            color: 'white',
                            fontSize: 16,
                            fontWeight: 500,
                        }}
                    >
                        John Doe
                    </span>
                </Tooltip>

                {/* USER AVATAR */}
                <Avatar
                    src="https://i.pravatar.cc/150?img=3"
                    size={42}
                    style={{ cursor: 'pointer', border: '2px solid #fff' }}
                />
            </div>
        </Header>
    );
};

export default AppHeader;
