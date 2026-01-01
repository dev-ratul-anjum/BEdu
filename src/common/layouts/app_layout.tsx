import { Outlet } from 'react-router-dom';
import { Dynamic_breadcrumb } from '../components/Dynamic_breadcrumb';
import { Separator } from '../components/shadcn-ui/separator';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '../components/shadcn-ui/sidebar';
import { AppSidebar } from '../components/sidebar/app_sidebar';
import { TSidebar_Items } from '../components/sidebar/sidebar_items';

const App_layout = ({ sidebar_items }: { sidebar_items: TSidebar_Items[keyof TSidebar_Items] }) => {
  return (
    <SidebarProvider>
      <AppSidebar sidebar_items={sidebar_items} />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <nav className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Dynamic_breadcrumb />
          </nav>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default App_layout;
