import Teacher_navbar from '@/common/sidenav/Teacher_navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Teacher_layout = () => {
    return (
        <div>
            <Teacher_navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Teacher_layout;
