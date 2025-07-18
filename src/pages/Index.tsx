import { useState } from "react";
import LoginPage from "@/components/LoginPage";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FacultyDashboard from "@/components/FacultyDashboard";
import { cn } from "@/lib/utils";

type UserRole = "faculty" | "hod" | "admin";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole>("faculty");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleLogin = (role: UserRole) => {
    setCurrentRole(role);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage("dashboard");
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <FacultyDashboard />;
      case "kpi-forms":
        return (
          <div className="academic-card p-6">
            <h2 className="text-xl font-semibold mb-4">KPI Forms</h2>
            <p className="text-muted-foreground">KPI form interface will be implemented here.</p>
          </div>
        );
      case "upload":
        return (
          <div className="academic-card p-6">
            <h2 className="text-xl font-semibold mb-4">Upload Evidence</h2>
            <p className="text-muted-foreground">File upload interface will be implemented here.</p>
          </div>
        );
      default:
        return <FacultyDashboard />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar
        currentRole={currentRole}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        collapsed={sidebarCollapsed}
      />
      
      <div className="flex-1 flex flex-col">
        <Header
          currentRole={currentRole}
          sidebarCollapsed={sidebarCollapsed}
          onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)}
          onLogout={handleLogout}
        />
        
        <main className="flex-1 p-6 overflow-auto">
          {renderPageContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
