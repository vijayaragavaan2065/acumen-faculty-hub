import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Bell, 
  Menu, 
  User, 
  Settings, 
  LogOut, 
  Moon, 
  Sun,
  GraduationCap
} from "lucide-react";
import { cn } from "@/lib/utils";

type UserRole = "faculty" | "hod" | "admin";

interface HeaderProps {
  currentRole: UserRole;
  sidebarCollapsed: boolean;
  onToggleSidebar: () => void;
  onLogout: () => void;
}

export default function Header({ currentRole, sidebarCollapsed, onToggleSidebar, onLogout }: HeaderProps) {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications] = useState([
    { id: 1, title: "KPI Form Due Tomorrow", type: "warning", time: "2h ago" },
    { id: 2, title: "Score Updated", type: "success", time: "4h ago" },
    { id: 3, title: "New Department Announcement", type: "info", time: "1d ago" }
  ]);

  const userConfig = {
    faculty: {
      name: "Dr. Sarah Johnson",
      email: "sarah.johnson@college.edu",
      department: "Computer Science",
      initials: "SJ"
    },
    hod: {
      name: "Prof. Michael Chen",
      email: "michael.chen@college.edu", 
      department: "Electronics & Communication",
      initials: "MC"
    },
    admin: {
      name: "Dr. Admin User",
      email: "admin@college.edu",
      department: "Administration",
      initials: "AU"
    }
  };

  const currentUser = userConfig[currentRole];

  return (
    <header className="bg-card border-b border-border px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleSidebar}
          className="lg:hidden"
        >
          <Menu className="h-4 w-4" />
        </Button>

        <div className="hidden lg:flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <GraduationCap className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-foreground">Faculty Performance System</h1>
            <p className="text-xs text-muted-foreground">Engineering College Portal</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="h-4 w-4" />
              {notifications.length > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs bg-primary">
                  {notifications.length}
                </Badge>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 bg-card">
            <div className="p-3 border-b border-border">
              <h4 className="font-medium">Notifications</h4>
              <p className="text-sm text-muted-foreground">You have {notifications.length} new notifications</p>
            </div>
            <div className="max-h-64 overflow-y-auto">
              {notifications.map((notification) => (
                <DropdownMenuItem key={notification.id} className="p-3 cursor-pointer">
                  <div className="w-full">
                    <div className="flex items-start justify-between">
                      <p className="font-medium text-sm">{notification.title}</p>
                      <Badge 
                        variant={notification.type === "warning" ? "destructive" : 
                                notification.type === "success" ? "default" : "secondary"}
                        className="text-xs ml-2"
                      >
                        {notification.type}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Theme Toggle */}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 hover:bg-accent">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-gradient-primary text-primary-foreground text-sm">
                  {currentUser.initials}
                </AvatarFallback>
              </Avatar>
              <div className="hidden md:block text-left">
                <p className="text-sm font-medium">{currentUser.name}</p>
                <p className="text-xs text-muted-foreground">{currentUser.department}</p>
              </div>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56 bg-card">
            <div className="p-3 border-b border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gradient-primary text-primary-foreground">
                    {currentUser.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{currentUser.name}</p>
                  <p className="text-sm text-muted-foreground">{currentUser.email}</p>
                  <Badge variant="outline" className="mt-1 text-xs">
                    {currentRole.toUpperCase()}
                  </Badge>
                </div>
              </div>
            </div>
            
            <DropdownMenuItem className="cursor-pointer">
              <User className="h-4 w-4 mr-2" />
              Profile Settings
            </DropdownMenuItem>
            
            <DropdownMenuItem className="cursor-pointer">
              <Settings className="h-4 w-4 mr-2" />
              Preferences
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem 
              className="cursor-pointer text-destructive focus:text-destructive"
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}