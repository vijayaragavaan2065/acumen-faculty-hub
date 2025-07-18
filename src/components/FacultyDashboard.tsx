import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Upload, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  Download,
  TrendingUp,
  Award,
  BookOpen,
  Users,
  BarChart3
} from "lucide-react";

interface KPIScore {
  category: string;
  current: number;
  target: number;
  status: "excellent" | "good" | "needs-improvement" | "pending";
}

export default function FacultyDashboard() {
  const [kpiScores] = useState<KPIScore[]>([
    { category: "Teaching Performance", current: 85, target: 80, status: "excellent" },
    { category: "Research & Publications", current: 70, target: 75, status: "needs-improvement" },
    { category: "Service & Administration", current: 90, target: 70, status: "excellent" },
    { category: "Professional Development", current: 60, target: 65, status: "needs-improvement" },
    { category: "Student Mentoring", current: 88, target: 80, status: "excellent" }
  ]);

  const overallScore = Math.round(kpiScores.reduce((acc, kpi) => acc + kpi.current, 0) / kpiScores.length);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "excellent": return "success";
      case "good": return "primary";
      case "needs-improvement": return "warning";
      case "pending": return "secondary";
      default: return "secondary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "excellent": return CheckCircle;
      case "good": return CheckCircle;
      case "needs-improvement": return AlertTriangle;
      case "pending": return Clock;
      default: return Clock;
    }
  };

  const recentActivities = [
    { action: "KPI Form Submitted", category: "Teaching Performance", time: "2 hours ago", status: "completed" },
    { action: "Evidence Uploaded", category: "Research Publications", time: "1 day ago", status: "completed" },
    { action: "Review Pending", category: "Service Activities", time: "3 days ago", status: "pending" },
    { action: "Score Updated", category: "Professional Development", time: "1 week ago", status: "completed" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Header */}
      <div className="page-header">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Welcome back, Dr. Sarah Johnson</h1>
            <p className="opacity-90">Computer Science Department • Associate Professor</p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{overallScore}%</div>
            <p className="text-sm opacity-90">Overall Performance</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Button className="btn-academic h-auto p-4 flex-col gap-2">
          <FileText className="h-6 w-6" />
          <span>Fill KPI Form</span>
        </Button>
        <Button variant="outline" className="btn-secondary-academic h-auto p-4 flex-col gap-2">
          <Upload className="h-6 w-6" />
          <span>Upload Evidence</span>
        </Button>
        <Button variant="outline" className="btn-secondary-academic h-auto p-4 flex-col gap-2">
          <BarChart3 className="h-6 w-6" />
          <span>View Scores</span>
        </Button>
        <Button variant="outline" className="btn-secondary-academic h-auto p-4 flex-col gap-2">
          <Download className="h-6 w-6" />
          <span>Download Report</span>
        </Button>
      </div>

      {/* KPI Performance Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="academic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-primary" />
              KPI Performance Overview
            </CardTitle>
            <CardDescription>
              Track your progress across all performance indicators
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {kpiScores.map((kpi, index) => {
              const StatusIcon = getStatusIcon(kpi.status);
              return (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <StatusIcon className={`h-4 w-4 text-${getStatusColor(kpi.status)}`} />
                      <span className="font-medium text-sm">{kpi.category}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold">{kpi.current}%</span>
                      <Badge variant={getStatusColor(kpi.status) as any} className="text-xs">
                        Target: {kpi.target}%
                      </Badge>
                    </div>
                  </div>
                  <Progress 
                    value={kpi.current} 
                    className="h-2 score-animation"
                  />
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Recent Activities */}
        <Card className="academic-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              Recent Activities
            </CardTitle>
            <CardDescription>
              Latest updates and submissions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-accent/20 rounded-lg">
                  <div className={`p-1 rounded-full ${activity.status === 'completed' ? 'bg-success' : 'bg-warning'}`}>
                    {activity.status === 'completed' ? (
                      <CheckCircle className="h-3 w-3 text-white" />
                    ) : (
                      <Clock className="h-3 w-3 text-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.category}</p>
                    <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Performance Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="academic-card float-element">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg">
                <BookOpen className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Courses Taught</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card float-element">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-success/10 rounded-lg">
                <Users className="h-6 w-6 text-success" />
              </div>
              <div>
                <p className="text-2xl font-bold">450</p>
                <p className="text-sm text-muted-foreground">Students Mentored</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card float-element">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-warning/10 rounded-lg">
                <TrendingUp className="h-6 w-6 text-warning" />
              </div>
              <div>
                <p className="text-2xl font-bold">8</p>
                <p className="text-sm text-muted-foreground">Research Papers</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Tasks */}
      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Pending Tasks
          </CardTitle>
          <CardDescription>
            Complete these tasks to improve your performance score
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-warning/5 border border-warning/20 rounded-lg">
              <div>
                <p className="font-medium">Submit Research KPI Form</p>
                <p className="text-sm text-muted-foreground">Due in 3 days</p>
              </div>
              <Button size="sm" className="btn-academic">
                Complete
              </Button>
            </div>
            <div className="flex items-center justify-between p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <div>
                <p className="font-medium">Upload Professional Development Certificate</p>
                <p className="text-sm text-muted-foreground">Due in 1 week</p>
              </div>
              <Button size="sm" variant="outline" className="btn-secondary-academic">
                Upload
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}