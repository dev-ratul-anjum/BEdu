import { ChevronRight, type LucideIcon } from 'lucide-react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/common/components/shadcn-ui/collapsible';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/common/components/shadcn-ui/sidebar';
import { NavLink } from 'react-router-dom';

export function SidebarLinks({ items }: { items: TSidebar_Link[] }) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="px-4">Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) =>
          item.children ? (
            <Collapsible
              key={item.url}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    className="px-4"
                    tooltip={item.title}
                  >
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.children.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <NavLink
                            to={subItem.url}
                            className="[.active]:text-primary [.active]:bg-primary/10"
                          >
                            <span>{subItem.title}</span>
                          </NavLink>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          ) : (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="px-4"
                asChild
                tooltip={item.title}
              >
                <NavLink
                  to={item.url}
                  className="[.active]:text-primary [.active]:bg-primary/10"
                >
                  <item.icon />
                  <span>{item.title}</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          )
        )}
      </SidebarMenu>
    </SidebarGroup>
  );
}
export type TSidebar_Link = {
  title: string;
  url?: string;
  icon?: LucideIcon;
  isActive?: boolean;
  children?: {
    title: string;
    url: string;
  }[];
};
