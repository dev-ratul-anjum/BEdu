import React, { useState } from 'react';
import { Tabs, Space } from 'antd';
import ChildProfileHeader from './components/ChildProfileHeader';
import AcademicPerformance from './components/AcademicPerformance';
import PersonalInformation from './components/PersonalInformation';

const Child_profile = () => {
    const [selectedChild] = useState('1');

    const tabItems = [
        {
            key: 'overview',
            label: 'Overview',
            children: (
                <Space
                    direction="vertical"
                    size="large"
                    className="w-full"
                >
                    <ChildProfileHeader
                        childName="Johnnie Rau"
                        class="Class I (A)"
                        rollNumber="01"
                        section="A"
                    />
                    <AcademicPerformance />
                </Space>
            ),
        },
        {
            key: 'personal',
            label: 'Personal Information',
            children: <PersonalInformation />,
        },
        {
            key: 'documents',
            label: 'Documents',
            children: (
                <div className="p-8 text-center text-gray-500">
                    Documents section coming soon...
                </div>
            ),
        },
    ];

    return (
        <div className="w-full">
            <Tabs
                items={tabItems}
                defaultActiveKey="overview"
            />
        </div>
    );
};

export default Child_profile;
