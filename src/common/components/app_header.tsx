import { Avatar, Badge, Button, Dropdown, Input, Layout, MenuProps, theme } from 'antd';
import {
  BarChart2,
  Bell,
  Bot,
  ChevronDown,
  Globe,
  LogOut,
  Menu as MenuIcon,
  MessageSquare,
  Search,
  Settings,
  User,
} from 'lucide-react';
import React from 'react';

const { Header } = Layout;

interface HeaderProps {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  setMobileOpen: (open: boolean) => void;
}

const App_header: React.FC<HeaderProps> = ({ collapsed, setCollapsed, setMobileOpen }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleToggle = () => {
    if (window.innerWidth < 1024) {
      setMobileOpen(true);
    } else {
      setCollapsed(!collapsed);
    }
  };

  const dropdownMenu: MenuProps['items'] = [
    {
      key: 'profile',
      label: 'Profile',
      icon: <User size={14} />,
    },
    {
      key: 'settings',
      label: 'Settings',
      icon: <Settings size={14} />,
    },
    { type: 'divider' },
    {
      key: 'logout',
      label: 'Logout',
      icon: (
        <LogOut
          size={14}
          className="text-red-500"
        />
      ),
      danger: true,
    },
  ];

  const handleMenuClick: MenuProps['onClick'] = ({ key }) => {
    switch (key) {
      case 'profile':
        console.log('Go to profile page');
        break;
      case 'settings':
        console.log('Go to settings page');
        break;
      case 'logout':
        alert('Logging out...');
        break;
      default:
        break;
    }
  };

  return (
    <Header
      style={{ background: colorBgContainer }}
      className="sticky top-0 z-10 w-full flex items-center justify-between px-4 lg:px-6 shadow-sm h-16"
    >
      {/* Left Section: Toggle & Search */}
      <div className="flex items-center gap-4 flex-1">
        <Button
          type="text"
          icon={<MenuIcon className="h-6 w-6 text-slate-600" />}
          onClick={handleToggle}
          className="flex items-center justify-center hover:bg-slate-100"
        />

        {/* Desktop Search */}
        <div className="hidden md:flex items-center gap-2 w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search"
              className="pl-10 border-none bg-transparent shadow-none focus:shadow-none placeholder:text-slate-400 text-slate-600"
            />
          </div>
          {/* <h3 className="text-lg font-semibold text-slate-600 text-center">Admin Dashboard</h3> */}
        </div>
      </div>

      {/* Right Section: Actions & Profile */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* User Profile */}
        <Dropdown
          menu={{ items: dropdownMenu, onClick: handleMenuClick }}
          trigger={['click']}
        >
          <div className="flex items-center gap-3 cursor-pointer pl-2 border-l border-slate-200 ml-2">
            <Avatar
              size={40}
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
              className="border-2 border-white shadow-sm"
            />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

export default App_header;
