import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import { TSidebar_Items } from './sidebar_items';

const { Sider } = Layout;

export default function Dashboard_sidebar({
  collapsed,
  setCollapsed,
  mobileOpen,
  setMobileOpen,
  sidebar_items,
}: TProps) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (e: { key: string }) => {
    navigate(e.key);
    if (window.innerWidth < 1024) {
      setMobileOpen(false);
    }
  };

  return (
    <Sider
      width={260}
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      breakpoint="lg"
      collapsedWidth="80"
      onBreakpoint={(broken) => {
        if (broken) setCollapsed(true);
      }}
      trigger={null}
      className={`!bg-[#0f172a] h-screen overflow-y-auto fixed left-0 top-0 z-50 transition-all duration-300 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
      style={{
        position: 'fixed',
        height: '100vh',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      {/* Logo Area */}
      <div className="h-16 flex items-center justify-center border-b border-slate-800/50">
        {collapsed ? (
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg">
            <span className="text-white font-bold text-xl">I</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 px-4">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">I</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg tracking-wide">INFIX</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider">
                Ultimate Education ERP
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Menu */}
      <div className="py-4">
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={sidebar_items()}
          onClick={handleMenuClick}
          className="bg-transparent border-none px-2 [&_.ant-menu-item-selected]:!bg-blue-600 [&_.ant-menu-item-selected]:!text-white [&_.ant-menu-item]:text-slate-300 [&_.ant-menu-item]:my-1 [&_.ant-menu-item]:rounded-none"
          // Custom styles for menu items
          style={{
            background: 'transparent',
          }}
        />
      </div>
    </Sider>
  );
}

type TProps = {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
  sidebar_items: TSidebar_Items[keyof TSidebar_Items];
};
