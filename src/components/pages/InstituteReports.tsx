import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, Download, TrendingUp, Users } from "lucide-react";

export default function InstituteReports() {
  const instituteStats = [
    { department: "Computer Science", faculty: 15, avgScore: 87, completion: 95 },
    { department: "Electronics", faculty: 12, avgScore: 84, completion: 90 },
    { department: "Mechanical", faculty: 18, avgScore: 82, completion: 88 },
    { department: "Civil", faculty: 14, avgScore: 85, completion: 92 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <BarChart3 className="h-6 w-6" />
          <h1 className="text-2xl font-bold">Institute Reports</h1>
        </div>
        <Button className="btn-academic">
          <Download className="h-4 w-4 mr-2" />
          Export Institute Report
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
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
              <p className="text-sm text-muted-foreground">Institute Average</p>
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
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">4</p>
              <p className="text-sm text-muted-foreground">Departments</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Department Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {instituteStats.map((dept, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">{dept.department}</h3>
                  <span className="text-sm text-muted-foreground">{dept.faculty} Faculty</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Average Performance</span>
                      <span>{dept.avgScore}%</span>
                    </div>
                    <Progress value={dept.avgScore} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Completion Rate</span>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="academic-card">
          <CardHeader>
            <CardTitle>Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>2024 Average</span>
                <span className="font-bold text-green-600">84.5%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>2023 Average</span>
                <span className="font-bold">82.1%</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Improvement</span>
                <span className="font-bold text-green-600">+2.4%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button variant="outline" className="w-full justify-start">
              <Download className="h-4 w-4 mr-2" />
              Generate Annual Report
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <BarChart3 className="h-4 w-4 mr-2" />
              Department Analytics
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <TrendingUp className="h-4 w-4 mr-2" />
              Performance Trends
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}