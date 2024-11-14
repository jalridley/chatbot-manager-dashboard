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
  title: 'Chatbot Content Manager Dashboard',
  description:
    'Interview challenge to create a chatbot content manger dashboard',
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
          <SidebarInset className="bg-black py-2">
            <header className="h-16 shrink-0 items-center gap-2 rounded-tl-lg bg-gray-50 px-4 pt-2">
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
                <Bot className="h-10 w-10 rounded-full bg-teal-400 p-1.5 ring-2 ring-black" />
              </div>
            </header>
            <main className="flex min-h-screen w-full justify-center rounded-bl-lg bg-gray-50 pb-16 text-sm">
              <section className="w-full p-6 xl:w-5/6 2xl:w-1/2">
                {children}
              </section>
            </main>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
