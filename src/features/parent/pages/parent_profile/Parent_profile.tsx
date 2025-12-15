import React from 'react';
import { Space, Typography } from 'antd';
import ParentProfileHeader from './components/Parent_profile_header';
import ParentPersonalInformation from './components/Parent_personal_information';

const Parent_profile = () => {
  return (
    <div className="w-full">
      <div className="mb-6">
        <Typography.Title
          level={3}
          className="!mb-0"
        >
          My Profile
        </Typography.Title>
      </div>

      <Space
        direction="vertical"
        size="large"
        className="w-full"
      >
        <ParentProfileHeader />
        <ParentPersonalInformation />
      </Space>
    </div>
  );
};

export default Parent_profile;
