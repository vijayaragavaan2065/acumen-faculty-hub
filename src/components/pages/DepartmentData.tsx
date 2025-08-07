import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Users, TrendingUp } from "lucide-react";

export default function DepartmentData() {
  const departmentStats = [
    { name: "Computer Science", faculty: 15, avgScore: 87, completion: 95 },
    { name: "Electronics", faculty: 12, avgScore: 84, completion: 90 },
    { name: "Mechanical", faculty: 18, avgScore: 82, completion: 88 },
    { name: "Civil", faculty: 14, avgScore: 85, completion: 92 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Department Data</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold">59</p>
              <p className="text-sm text-muted-foreground">Total Faculty</p>
            </div>
          </CardContent>
        </Card>
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">84.5%</p>
              <p className="text-sm text-muted-foreground">Avg Performance</p>
            </div>
          </CardContent>
        </Card>
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <BarChart3 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold">91%</p>
              <p className="text-sm text-muted-foreground">Completion Rate</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Department Performance Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {departmentStats.map((dept, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{dept.name}</h3>
                  <span className="text-sm text-muted-foreground">{dept.faculty} Faculty</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Score</span>
                      <span>{dept.avgScore}%</span>
                    </div>
                    <Progress value={dept.avgScore} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion</span>
                      <span>{dept.completion}%</span>
                    </div>
                    <Progress value={dept.completion} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}