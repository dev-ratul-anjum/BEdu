import Gurdian_navbar from '@/common/sidenav/Gurdian_navbar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const Gurdian_layout = () => {
    return (
        <div>
            <Gurdian_navbar />
            <div>
                <Outlet />
            </div>
        </div>
    );
};

export default Gurdian_layout;
