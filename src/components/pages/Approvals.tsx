import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, Check, X } from "lucide-react";

export default function Approvals() {
  const approvalRequests = [
    { 
      faculty: "Dr. John Smith", 
      type: "KPI Submission", 
      score: 85, 
      date: "2024-01-15",
      status: "pending"
    },
    { 
      faculty: "Prof. Sarah Johnson", 
      type: "Evidence Upload", 
      score: 92, 
      date: "2024-01-14",
      status: "pending"
    },
    { 
      faculty: "Dr. Mike Wilson", 
      type: "Final Review", 
      score: 78, 
      date: "2024-01-13",
      status: "pending"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Award className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Approvals</h1>
      </div>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Pending Approvals</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {approvalRequests.map((request, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{request.faculty}</p>
                  <p className="text-sm text-muted-foreground">{request.type}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span>Score: <span className="font-medium">{request.score}%</span></span>
                    <span>Date: {request.date}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline">Pending</Badge>
                  <Button size="sm" variant="outline">
                    <X className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                  <Button size="sm">
                    <Check className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-primary">12</p>
              <p className="text-sm text-muted-foreground">Approved This Month</p>
            </div>
          </CardContent>
        </Card>
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">3</p>
              <p className="text-sm text-muted-foreground">Pending Approval</p>
            </div>
          </CardContent>
        </Card>
        <Card className="academic-card">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-red-600">1</p>
              <p className="text-sm text-muted-foreground">Rejected</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}