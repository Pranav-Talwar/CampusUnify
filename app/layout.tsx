import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/auth-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your App",
  description: "Your app description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-gray-300`}>
        <AuthProvider>
          <SidebarProvider>
            <div className="flex w-full min-h-screen">
              <AppSidebar />
              <div className="hidden md:block w-16 border-r border-gray-900"></div>
              <main className="flex-grow max-w-3xl border-l border-r border-gray-900">
                {children}
              </main>
            </div>
          </SidebarProvider>
        </AuthProvider>
      </body>
    </html>
  );
}