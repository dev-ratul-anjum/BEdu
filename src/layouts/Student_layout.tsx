import Student_navbar from '@/common/sidenav/Student_navbar';
import AppHeader from '@/common/header/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Student from '@/pages/dashboard/student/Student';

const Student_layout = () => {
    const [collapsed, setCollapsed] = React.useState(false);

    return (
        <div>
            {/* SIDEBAR */}
            <Student_navbar
                collapsed={collapsed}
                onToggleSidebar={() => setCollapsed(!collapsed)}
            />

            {/* MAIN AREA */}
            <div
                style={{
                    marginLeft: collapsed ? 80 : 250,
                    transition: '0.3s',
                }}
            >
                {/* HEADER */}
                <AppHeader
                    collapsed={collapsed}
                    onToggleSidebar={() => setCollapsed(!collapsed)}
                />

                {/* PAGE CONTENT */}
                <div style={{ padding: '20px' }}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Student_layout;
