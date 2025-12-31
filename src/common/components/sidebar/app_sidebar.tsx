import * as React from 'react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/common/components/shadcn-ui/sidebar';
import { Logo } from '@/common/components/sidebar/Logo';
import { NavUser } from '@/common/components/sidebar/nav_user';
import { SidebarLinks } from '@/common/components/sidebar/sidebar_links';
import { TSidebar_Items } from './sidebar_items';

export function AppSidebar({ sidebar_items, ...props }: TProps) {
  return (
    <Sidebar
      collapsible="icon"
      {...props}
    >
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarLinks items={sidebar_items()} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}

type TProps = { sidebar_items: TSidebar_Items[keyof TSidebar_Items] } & React.ComponentProps<
  typeof Sidebar
>;
