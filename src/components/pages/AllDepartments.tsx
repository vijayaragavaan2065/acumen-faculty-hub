import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, BarChart3 } from "lucide-react";

export default function AllDepartments() {
  const departments = {
    cse: { name: "Computer Science", faculty: 15, avgScore: 87 },
    ece: { name: "Electronics & Communication", faculty: 12, avgScore: 84 },
    mech: { name: "Mechanical Engineering", faculty: 18, avgScore: 82 },
    civil: { name: "Civil Engineering", faculty: 14, avgScore: 85 }
  };

  const renderDepartmentTab = (deptKey: string, dept: any) => (
    <TabsContent key={deptKey} value={deptKey} className="space-y-4">
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            {dept.name} Department
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 border rounded-lg">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">{dept.faculty}</p>
              <p className="text-sm text-muted-foreground">Faculty Members</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <BarChart3 className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">{dept.avgScore}%</p>
              <p className="text-sm text-muted-foreground">Average Score</p>
            </div>
            <div className="text-center p-4 border rounded-lg">
              <p className="text-2xl font-bold">92%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <span>Faculty evaluations completed</span>
              <span className="text-green-600 font-medium">12/15</span>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <span>Pending approvals</span>
              <span className="text-orange-600 font-medium">3</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </TabsContent>
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <BookOpen className="h-6 w-6" />
        <h1 className="text-2xl font-bold">All Departments</h1>
      </div>

      <Tabs defaultValue="cse" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="cse">Computer Science</TabsTrigger>
          <TabsTrigger value="ece">Electronics</TabsTrigger>
          <TabsTrigger value="mech">Mechanical</TabsTrigger>
          <TabsTrigger value="civil">Civil</TabsTrigger>
        </TabsList>

        {Object.entries(departments).map(([key, dept]) => 
          renderDepartmentTab(key, dept)
        )}
      </Tabs>
    </div>
  );
}