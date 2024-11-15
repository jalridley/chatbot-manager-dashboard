import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Bot } from 'lucide-react';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'ChatterBoxer',
  description: 'ChatterBoxer is a chatbot content manger dashboard',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} bg-black antialiased`}>
        <SidebarProvider
          style={
            {
              '--sidebar-width': '19rem',
            } as React.CSSProperties
          }
        >
          <AppSidebar />
          <SidebarInset className="bg-black md:py-2">
            <header className="h-14 shrink-0 items-center gap-2 border-b-2 bg-gray-50 p-2 md:h-16 md:rounded-tl-lg lg:border-none">
              <div className="flex justify-between">
                <div>
                  <div className="flex">
                    <div className="mr-1 h-2 w-14 rounded-tl-full bg-teal-400" />
                    <div className="h-1 w-2 bg-teal-400" />
                  </div>
                  <div className="flex">
                    <div className="mr-1 h-1 w-14 bg-black" />
                    <div className="h-1 w-2 bg-black" />
                  </div>
                  <SidebarTrigger className="-ml-1 size-8" />
                </div>
                <Bot className="h-8 w-8 rounded-full bg-teal-400 p-1.5 ring-2 ring-black md:h-10 md:w-10" />
              </div>
            </header>
            <main className="flex min-h-screen w-full justify-center rounded-bl-lg bg-gray-50 pb-16 text-sm lg:min-h-[calc(100vh-5rem)]">
              <section className="w-full p-2 lg:p-6 xl:w-5/6 2xl:w-1/2">
                {children}
              </section>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
