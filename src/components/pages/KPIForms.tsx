import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Save, Eye } from "lucide-react";

export default function KPIForms() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">KPI Forms</h1>
        <Button className="btn-academic">
          <Save className="h-4 w-4 mr-2" />
          Save Draft
        </Button>
      </div>

      <Tabs defaultValue="teaching" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="teaching">Teaching</TabsTrigger>
          <TabsTrigger value="research">Research</TabsTrigger>
          <TabsTrigger value="service">Service</TabsTrigger>
        </TabsList>

        <TabsContent value="teaching" className="space-y-4">
          <Card className="academic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Teaching Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Courses Taught</label>
                  <input className="w-full p-2 border rounded-lg" placeholder="Number of courses" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Student Feedback Score</label>
                  <input className="w-full p-2 border rounded-lg" placeholder="Out of 5" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="research" className="space-y-4">
          <Card className="academic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Research Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Publications</label>
                  <input className="w-full p-2 border rounded-lg" placeholder="Number of publications" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Citations</label>
                  <input className="w-full p-2 border rounded-lg" placeholder="Total citations" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="service" className="space-y-4">
          <Card className="academic-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Service Performance Indicators
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Committee Memberships</label>
                  <input className="w-full p-2 border rounded-lg" placeholder="Number of committees" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Administrative Roles</label>
                  <input className="w-full p-2 border rounded-lg" placeholder="Current roles" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}