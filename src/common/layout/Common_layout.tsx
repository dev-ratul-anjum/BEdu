import { useState } from 'react';
import { Layout, theme, Drawer } from 'antd';
import { Outlet } from 'react-router-dom';
import ScrollToTop from '@/Hooks/ScrollTop';
import Common_sidebar from './Common_sidebar';
import Common_header from './Common_header';

const { Content } = Layout;

const Common_layout = ({ menuItems }: { menuItems: any }) => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [collapsed, setCollapsed] = useState(false);

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout className="min-h-screen">
            <ScrollToTop />

            {/* Sidebar for Desktop */}
            <Common_sidebar
                collapsed={collapsed}
                setCollapsed={setCollapsed}
                mobileOpen={mobileOpen}
                setMobileOpen={setMobileOpen}
                menuItems={menuItems}
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
                <Common_sidebar
                    collapsed={false}
                    setCollapsed={() => {}}
                    mobileOpen={true}
                    setMobileOpen={setMobileOpen}
                    menuItems={menuItems}
                />
            </Drawer>

            <Layout
                className={`transition-all duration-300 ${
                    collapsed ? 'lg:ml-[80px]' : 'lg:ml-[260px]'
                }`}
            >
                <Common_header
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

export default Common_layout;
