import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp } from "lucide-react";

export default function ScoreAnalysis() {
  const scores = [
    { category: "Teaching", score: 85, maxScore: 100, color: "bg-blue-500" },
    { category: "Research", score: 72, maxScore: 100, color: "bg-green-500" },
    { category: "Service", score: 90, maxScore: 100, color: "bg-orange-500" },
    { category: "Overall", score: 82, maxScore: 100, color: "bg-primary" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <BarChart3 className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Score Analysis</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {scores.map((item) => (
          <Card key={item.category} className="academic-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {item.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{item.score}</span>
                  <span className="text-muted-foreground">/ {item.maxScore}</span>
                </div>
                <Progress value={item.score} className="h-2" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            Performance Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {scores.slice(0, 3).map((item) => (
              <div key={item.category} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{item.category}</span>
                  <span>{item.score}%</span>
                </div>
                <Progress value={item.score} className="h-3" />
                <p className="text-xs text-muted-foreground">
                  Based on submitted KPI data and evidence
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}