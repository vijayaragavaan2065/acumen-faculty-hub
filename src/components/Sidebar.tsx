import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  Upload, 
  BarChart3, 
  Download, 
  Users, 
  Settings,
  ChevronDown,
  ChevronRight,
  Award,
  BookOpen,
  Shield,
  Bell,
  HelpCircle
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

type UserRole = "faculty" | "hod" | "admin";

interface SidebarProps {
  currentRole: UserRole;
  currentPage: string;
  onPageChange: (page: string) => void;
  collapsed?: boolean;
}

const navigationConfig = {
  faculty: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "dashboard",
      badge: null
    },
    {
      title: "KPI Forms",
      icon: FileText,
      href: "kpi-forms",
      badge: "2",
      submenu: [
        { title: "Teaching", href: "kpi-teaching" },
        { title: "Research", href: "kpi-research" },
        { title: "Service", href: "kpi-service" }
      ]
    },
    {
      title: "Upload Evidence",
      icon: Upload,
      href: "upload",
      badge: null
    },
    {
      title: "Score Analysis",
      icon: BarChart3,
      href: "scores",
      badge: null
    },
    {
      title: "Reports",
      icon: Download,
      href: "reports",
      badge: null
    }
  ],
  hod: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "dashboard",
      badge: null
    },
    {
      title: "Faculty Review",
      icon: Users,
      href: "faculty-review",
      badge: "5",
      submenu: [
        { title: "Pending Reviews", href: "pending-reviews" },
        { title: "Completed", href: "completed-reviews" },
        { title: "Department Stats", href: "dept-stats" }
      ]
    },
    {
      title: "Approvals",
      icon: Award,
      href: "approvals",
      badge: "3"
    },
    {
      title: "Reports",
      icon: Download,
      href: "reports",
      badge: null
    },
    {
      title: "Department Data",
      icon: BarChart3,
      href: "department-data",
      badge: null
    }
  ],
  admin: [
    {
      title: "Dashboard",
      icon: LayoutDashboard,
      href: "dashboard",
      badge: null
    },
    {
      title: "All Departments",
      icon: BookOpen,
      href: "departments",
      badge: null,
      submenu: [
        { title: "Computer Science", href: "dept-cse" },
        { title: "Electronics", href: "dept-ece" },
        { title: "Mechanical", href: "dept-mech" },
        { title: "Civil", href: "dept-civil" }
      ]
    },
    {
      title: "Institute Reports",
      icon: BarChart3,
      href: "institute-reports",
      badge: null
    },
    {
      title: "User Management",
      icon: Shield,
      href: "user-management",
      badge: null
    },
    {
      title: "System Settings",
      icon: Settings,
      href: "settings",
      badge: null
    }
  ]
};

export default function Sidebar({ currentRole, currentPage, onPageChange, collapsed = false }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const navigation = navigationConfig[currentRole];

  const toggleExpanded = (href: string) => {
    setExpandedItems(prev => 
      prev.includes(href) 
        ? prev.filter(item => item !== href)
        : [...prev, href]
    );
  };

  const roleConfig = {
    faculty: { title: "Faculty Portal", icon: FileText, color: "text-primary" },
    hod: { title: "HoD Portal", icon: BookOpen, color: "text-orange-500" },
    admin: { title: "Admin Portal", icon: Shield, color: "text-purple-500" }
  };

  const currentRoleConfig = roleConfig[currentRole];
  const RoleIcon = currentRoleConfig.icon;

  return (
    <div className={cn(
      "bg-card border-r border-border h-screen transition-all duration-300",
      collapsed ? "w-16" : "w-64"
    )}>
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-primary rounded-lg">
            <RoleIcon className="h-5 w-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <div>
              <h2 className="font-semibold text-sm">{currentRoleConfig.title}</h2>
              <p className="text-xs text-muted-foreground">Performance System</p>
            </div>
          )}
        </div>
      </div>

      <nav className="p-4 space-y-2">
        {navigation.map((item) => (
          <div key={item.href}>
            {item.submenu ? (
              <Collapsible
                open={!collapsed && expandedItems.includes(item.href)}
                onOpenChange={() => toggleExpanded(item.href)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="ghost"
                    className={cn(
                      "w-full justify-start gap-3 hover:bg-accent/50",
                      currentPage === item.href && "bg-primary/10 text-primary border-r-2 border-primary"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {!collapsed && (
                      <>
                        <span className="flex-1 text-left">{item.title}</span>
                        <div className="flex items-center gap-1">
                          {item.badge && (
                            <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {expandedItems.includes(item.href) ? (
                            <ChevronDown className="h-3 w-3" />
                          ) : (
                            <ChevronRight className="h-3 w-3" />
                          )}
                        </div>
                      </>
                    )}
                  </Button>
                </CollapsibleTrigger>
                {!collapsed && (
                  <CollapsibleContent className="ml-6 mt-1 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Button
                        key={subItem.href}
                        variant="ghost"
                        size="sm"
                        onClick={() => onPageChange(subItem.href)}
                        className={cn(
                          "w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent/30",
                          currentPage === subItem.href && "text-primary bg-primary/5"
                        )}
                      >
                        {subItem.title}
                      </Button>
                    ))}
                  </CollapsibleContent>
                )}
              </Collapsible>
            ) : (
              <Button
                variant="ghost"
                onClick={() => onPageChange(item.href)}
                className={cn(
                  "w-full justify-start gap-3 hover:bg-accent/50",
                  currentPage === item.href && "bg-primary/10 text-primary border-r-2 border-primary"
                )}
              >
                <item.icon className="h-4 w-4" />
                {!collapsed && (
                  <>
                    <span className="flex-1 text-left">{item.title}</span>
                    {item.badge && (
                      <span className="bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Button>
            )}
          </div>
        ))}
      </nav>

      {!collapsed && (
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <Button variant="ghost" size="sm" className="w-full justify-start gap-3">
            <Bell className="h-4 w-4" />
            Notifications
          </Button>
          <Button variant="ghost" size="sm" className="w-full justify-start gap-3">
            <HelpCircle className="h-4 w-4" />
            Help & Support
          </Button>
        </div>
      )}
    </div>
  );
}