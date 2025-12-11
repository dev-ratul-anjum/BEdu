import React, { useState } from 'react';
import { Tabs, Space, Typography } from 'antd';
import ChildProfileHeader from './components/Child_profile_header';
import AcademicPerformance from './components/Academic_performance';
import PersonalInformation from './components/Personal_information';

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
        <div className="p-8 text-center text-gray-500">Documents section coming soon...</div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <div className="mb-6">
        <Typography.Title
          level={3}
          className="!mb-0"
        >
          Child Profile
        </Typography.Title>
      </div>
      <Tabs
        items={tabItems}
        defaultActiveKey="overview"
      />
    </div>
  );
};

export default Child_profile;
