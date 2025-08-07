import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings, Save, RefreshCw } from "lucide-react";

export default function SystemSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Settings className="h-6 w-6" />
          <h1 className="text-2xl font-bold">System Settings</h1>
        </div>
        <Button className="btn-academic">
          <Save className="h-4 w-4 mr-2" />
          Save Settings
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="academic-card">
          <CardHeader>
            <CardTitle>General Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="institution">Institution Name</Label>
              <Input id="institution" defaultValue="Engineering College" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="academic-year">Academic Year</Label>
              <Input id="academic-year" defaultValue="2023-2024" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="evaluation-cycle">Evaluation Cycle</Label>
              <Input id="evaluation-cycle" defaultValue="Annual" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications">Email Notifications</Label>
              <Switch id="email-notifications" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="sms-alerts">SMS Alerts</Label>
              <Switch id="sms-alerts" />
            </div>
            <div className="flex items-center justify-between">
              <Label htmlFor="auto-reminders">Auto Reminders</Label>
              <Switch id="auto-reminders" defaultChecked />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardHeader>
            <CardTitle>Scoring Configuration</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="teaching-weight">Teaching Weight (%)</Label>
              <Input id="teaching-weight" type="number" defaultValue="40" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="research-weight">Research Weight (%)</Label>
              <Input id="research-weight" type="number" defaultValue="40" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service-weight">Service Weight (%)</Label>
              <Input id="service-weight" type="number" defaultValue="20" />
            </div>
          </CardContent>
        </Card>

        <Card className="academic-card">
          <CardHeader>
            <CardTitle>System Maintenance</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="maintenance-mode">Maintenance Mode</Label>
              <Switch id="maintenance-mode" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="backup-frequency">Backup Frequency</Label>
              <Input id="backup-frequency" defaultValue="Daily" />
            </div>
            <Button variant="outline" className="w-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              Run System Backup
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="academic-card">
        <CardHeader>
          <CardTitle>Recent Activity Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <span>System backup completed</span>
              <span className="text-sm text-muted-foreground">2024-01-15 10:30 AM</span>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <span>User role updated: Dr. Smith</span>
              <span className="text-sm text-muted-foreground">2024-01-15 09:15 AM</span>
            </div>
            <div className="flex justify-between items-center p-3 border rounded-lg">
              <span>Settings configuration saved</span>
              <span className="text-sm text-muted-foreground">2024-01-14 04:45 PM</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}