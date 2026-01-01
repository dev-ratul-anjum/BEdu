// components/ProfileMenu.tsx
import { Avatar, Dropdown } from 'antd';
import { UserOutlined, LogoutOutlined, ProfileOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';

interface ProfileMenuProps {
  onProfile?: () => void;
  onLogout?: () => void;
}

const Profile_pic: React.FC<ProfileMenuProps> = ({ onProfile, onLogout }) => {
  const items: MenuProps['items'] = [
    {
      key: 'profile',
      icon: <ProfileOutlined />,
      label: 'Profile',
      onClick: onProfile,
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: onLogout,
    },
  ];

  return (
    <Dropdown
      menu={{ items }}
      placement="bottomRight"
    >
      <Avatar
        size="large"
        icon={<UserOutlined />}
        style={{ cursor: 'pointer' }}
      />
    </Dropdown>
  );
};
export default Profile_pic;
