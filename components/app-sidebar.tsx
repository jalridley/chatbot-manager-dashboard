import * as React from 'react';
import { Bot, Code, Speech } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';

// This is sample data.
const data = {
  navMain: [
    {
      title: 'Implementation',
      url: '/',
      items: [
        {
          title: 'Dashboard',
          url: '/',
          isActive: true,
        },
      ],
    },
    {
      title: 'Discussion',
      url: '#',
      items: [
        {
          title: 'AI Influence',
          url: '#',
          isActive: false,
        },
        {
          title: 'Design and Interaction Patterns',
          url: '#',
          isActive: false,
        },
        {
          title: 'Opportunities and Challenges',
          url: '#',
          isActive: false,
        },
        {
          title: 'Implications and Directions',
          url: '#',
          isActive: false,
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-12 items-center justify-center rounded-lg border-2 border-black bg-teal-400 p-1">
                  <Bot className="h-24 w-24" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="text-lg font-bold tracking-wide">
                    Chatter Boxer
                  </span>
                  <span className="font-bold tracking-widest">Manager</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu className="gap-2">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  <a href={item.url} className="font-bold">
                    {item.title === 'Implementation' ? (
                      <Code className="h-8 w-8" />
                    ) : (
                      <Speech className="h-8 w-8" />
                    )}
                    {item.title}
                  </a>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
                    {item.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <SidebarMenuSubButton asChild isActive={item.isActive}>
                          <a href={item.url}>{item.title}</a>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
