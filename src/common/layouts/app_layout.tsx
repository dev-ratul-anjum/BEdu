import Scroll_to_top from '@/common/components/scroll-to-top';
import { Drawer, Layout, theme } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import App_header from '../components/app_header';
import App_sidebar from '../components/sidebar/app_sidebar';
import { TSidebar_Items } from '../components/sidebar/sidebar_items';

const { Content } = Layout;

const App_layout = ({ sidebar_items }: { sidebar_items: TSidebar_Items[keyof TSidebar_Items] }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Scroll_to_top />

      {/* Sidebar for Desktop */}
      <App_sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        sidebar_items={sidebar_items}
      />

      {/* Drawer for Mobile Sidebar */}
      <Drawer
        placement="left"
        onClose={() => setMobileOpen(false)}
        open={mobileOpen}
        styles={{ body: { padding: 0 } }}
        width={260}
        closable={false}
        className="lg:hidden"
      >
        <App_sidebar
          collapsed={false}
          setCollapsed={() => {}}
          mobileOpen={true}
          setMobileOpen={setMobileOpen}
          sidebar_items={sidebar_items}
        />
      </Drawer>

      <Layout
        className={`transition-all duration-300 ${collapsed ? 'lg:ml-[80px]' : 'lg:ml-[260px]'}`}
      >
        <App_header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />

        <Content className="overflow-hidden h-[calc(100vh-64px)] bg-stone-200/50">
          <div
            style={{
              background: 'transparent',
              minHeight: '100%',
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App_layout;
