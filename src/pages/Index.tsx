import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import FacultyDashboard from "@/components/FacultyDashboard";
import KPIForms from "@/components/pages/KPIForms";
import UploadEvidence from "@/components/pages/UploadEvidence";
import ScoreAnalysis from "@/components/pages/ScoreAnalysis";
import Reports from "@/components/pages/Reports";
import FacultyReview from "@/components/pages/FacultyReview";
import Approvals from "@/components/pages/Approvals";
import DepartmentData from "@/components/pages/DepartmentData";
import AllDepartments from "@/components/pages/AllDepartments";
import InstituteReports from "@/components/pages/InstituteReports";
import UserManagement from "@/components/pages/UserManagement";
import SystemSettings from "@/components/pages/SystemSettings";
import { cn } from "@/lib/utils";

type UserRole = "faculty" | "hod" | "admin";

const Index = () => {
  const [currentRole, setCurrentRole] = useState<UserRole>("faculty");
  const [currentPage, setCurrentPage] = useState("dashboard");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);


  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  const renderPageContent = () => {
    switch (currentPage) {
      case "dashboard":
        return <FacultyDashboard />;
      
      // Faculty pages
      case "kpi-forms":
      case "kpi-teaching":
      case "kpi-research":
      case "kpi-service":
        return <KPIForms />;
      case "upload":
        return <UploadEvidence />;
      case "scores":
        return <ScoreAnalysis />;
      case "reports":
        return <Reports />;
      
      // HoD pages
      case "faculty-review":
      case "pending-reviews":
      case "completed-reviews":
      case "dept-stats":
        return <FacultyReview />;
      case "approvals":
        return <Approvals />;
      case "department-data":
        return <DepartmentData />;
      
      // Admin pages
      case "departments":
      case "dept-cse":
      case "dept-ece":
      case "dept-mech":
      case "dept-civil":
        return <AllDepartments />;
      case "institute-reports":
        return <InstituteReports />;
      case "user-management":
        return <UserManagement />;
      case "settings":
        return <SystemSettings />;
      
      default:
        return <FacultyDashboard />;
    }
  };


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
