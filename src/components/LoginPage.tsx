import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, User, Shield, BookOpen } from "lucide-react";

type UserRole = "faculty" | "hod" | "admin";

interface LoginPageProps {
  onLogin: (role: UserRole) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState<UserRole>("faculty");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      onLogin(selectedRole);
    }, 1500);
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate register process
    setTimeout(() => {
      setIsLoading(false);
      onLogin(selectedRole);
    }, 1500);
  };

  const roleConfig = {
    faculty: {
      icon: User,
      title: "Faculty Member",
      description: "Access your KPI forms, upload evidence, and view performance scores"
    },
    hod: {
      icon: BookOpen,
      title: "Head of Department",
      description: "Review faculty submissions, approve scores, and manage department reports"
    },
    admin: {
      icon: Shield,
      title: "Admin/Scrutiny Panel",
      description: "Monitor all departments and generate institute-wide reports"
    }
  };

  const currentRole = roleConfig[selectedRole];
  const IconComponent = currentRole.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/20 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Branding */}
        <div className="text-center lg:text-left space-y-6">
          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="p-3 bg-gradient-primary rounded-xl">
              <GraduationCap className="h-8 w-8 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Faculty Performance</h1>
              <p className="text-muted-foreground">Evaluation System</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Streamline Academic
              <span className="text-primary block">Excellence</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-md mx-auto lg:mx-0">
              AI-powered faculty evaluation system for engineering colleges. 
              Track KPIs, manage appraisals, and generate comprehensive reports.
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-4 pt-8">
            {Object.entries(roleConfig).map(([role, config]) => {
              const Icon = config.icon;
              return (
                <div key={role} className="academic-card p-4 text-center float-element">
                  <Icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h3 className="font-medium text-sm">{config.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full max-w-md mx-auto">
          <Card className="academic-card">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto p-3 bg-gradient-primary rounded-xl w-fit">
                <IconComponent className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-2xl">{currentRole.title}</CardTitle>
                <CardDescription className="mt-2">{currentRole.description}</CardDescription>
              </div>
            </CardHeader>

            <CardContent>
              <Tabs defaultValue="login" className="space-y-6">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Sign In</TabsTrigger>
                  <TabsTrigger value="register">Sign Up</TabsTrigger>
                </TabsList>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="role">Select Role</Label>
                    <Select 
                      value={selectedRole} 
                      onValueChange={(value: UserRole) => setSelectedRole(value)}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="faculty">Faculty Member</SelectItem>
                        <SelectItem value="hod">Head of Department</SelectItem>
                        <SelectItem value="admin">Admin/Scrutiny Panel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <TabsContent value="login" className="space-y-4">
                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.name@college.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="btn-academic w-full" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Signing In..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="register" className="space-y-4">
                  <form onSubmit={handleRegister} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="registerEmail">Email</Label>
                      <Input
                        id="registerEmail"
                        type="email"
                        placeholder="your.name@college.edu"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="department">Department</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cse">Computer Science</SelectItem>
                          <SelectItem value="ece">Electronics & Communication</SelectItem>
                          <SelectItem value="mech">Mechanical</SelectItem>
                          <SelectItem value="civil">Civil</SelectItem>
                          <SelectItem value="eee">Electrical & Electronics</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="registerPassword">Password</Label>
                      <Input id="registerPassword" type="password" required />
                    </div>
                    <Button 
                      type="submit" 
                      className="btn-academic w-full" 
                      disabled={isLoading}
                    >
                      {isLoading ? "Creating Account..." : "Create Account"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}