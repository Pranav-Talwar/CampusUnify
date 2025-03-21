"use client"
import { 
  Home, 
  Users, 
  Bell, 
  Ticket, 
  ShoppingCart, 
  Plus,
  Search,
  Lock,
  LogOut
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarInput
} from "@/components/ui/sidebar"
import { useSession, signOut } from "next-auth/react"

  
  const mainItems = [
    {
      title: "Home",
      url: "#",
      icon: Home,
    },
    {
      title: "Friends",
      url: "#",
      icon: Users,
    },
    {
      title: "Marketplace",
      url: "#",
      icon: ShoppingCart,
    },
    {
      title: "Events",
      url: "#",
      icon: Ticket,
    },
    {
      title: "Notifications",
      url: "#",
      icon: Bell,
    },
  ]

  export function AppSidebar() {
    const { data: session } = useSession()

    return (
<Sidebar className="bg-gray-900 text-gray-300 border-r border-gray-700" >
<SidebarContent>
          {/* Search Input */}
       
   {/* CampusUnify Title */}
   <div className="text-blue-300 text-2xl  font-semibold px-10  py-3 border-b border-gray-700">
      CampusUnify
    </div>
          {/* Main Navigation */}
          <SidebarGroup >
            <SidebarGroupLabel className="text-gray-400 px-3 ">Navigation</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {mainItems.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="hover:bg-gray-800 rounded-lg group">
                      <a href={item.url} className="gap-3 px-3 py-2.5 relative flex items-center">
                        <div className={`p-1 rounded-lg ${
                          item.title === 'Marketplace' ? 'bg-gradient-to-tr from-purple-500 to-blue-500' :
                          item.title === 'Events' ? 'bg-gradient-to-tr from-green-500 to-cyan-500' :
                          'bg-gradient-to-tr from-orange-500 to-pink-500'
                        }`}>
                          <item.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-medium flex-1">{item.title}</span>
                        {(item.title === 'Marketplace' || item.title === 'Events') && (
                          <Lock className="w-4 h-4 text-yellow-400 ml-2" />
                        )}
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
  
          <hr className="w-full px-2 border-gray-700 border-t" />
  
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400 px-3">Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <div className="px-3 py-2.5 flex flex-col gap-2">
                    {/* User Account Info */}
                    {session?.user && (
                      <div className="flex items-center gap-3">
                        <img
                          src={session.user.image || ''}
                          alt="User avatar"
                          className="w-8 h-8 rounded-full"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-sm">{session.user.name}</p>
                          <p className="text-xs text-gray-400">{session.user.email}</p>
                        </div>
                      </div>
                    )}

                    {/* Sign Out Button */}
                    <SidebarMenuButton
                      className="bg-gray-800 rounded-lg justify-center mt-2"
                      onClick={() => signOut()}
                    >
                      <div className="flex items-center gap-2 text-red-400 hover:text-red-300 py-2 px-3">
                        <LogOut className="w-4 h-4" />
                        <span className="font-medium text-sm">Sign Out</span>
                      </div>
                    </SidebarMenuButton>
                  </div>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }