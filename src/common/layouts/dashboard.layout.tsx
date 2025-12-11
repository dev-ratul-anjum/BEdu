import Scroll_to_top from '@/common/components/scroll-to-top';
import { Drawer, Layout, theme } from 'antd';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Dashboard_header from '../components/Dashboard_header';
import Dashboard_sidebar from '../components/sidebar/Dashboard_sidebar';

const { Content } = Layout;

const Dashboard_layout = ({ sidebar_items }: { sidebar_items: any }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="min-h-screen">
      <Scroll_to_top />

      {/* Sidebar for Desktop */}
      <Dashboard_sidebar
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
        <Dashboard_sidebar
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
        <Dashboard_header
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          setMobileOpen={setMobileOpen}
        />

        <Content className="p-4 md:p-6 overflow-y-auto h-[calc(100vh-64px)] bg-slate-50">
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

export default Dashboard_layout;
