import Student_navbar from '@/common/sidenav/Student_navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Student_layout = () => {
    return (
        <div>
            <Student_navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Student_layout;
