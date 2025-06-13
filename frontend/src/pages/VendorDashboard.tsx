
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Plus, 
  DollarSign, 
  Users, 
  Star, 
  TrendingUp,
  Edit,
  Eye,
  MessageSquare
} from "lucide-react";

const VendorDashboard = () => {
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Custom Website Design",
      price: 899,
      category: "Web Design",
      status: "active",
      views: 245,
      orders: 12
    },
    {
      id: 2,
      title: "SEO Optimization Package",
      price: 299,
      category: "Digital Marketing",
      status: "active",
      views: 189,
      orders: 8
    },
    {
      id: 3,
      title: "Logo Design & Branding",
      price: 199,
      category: "Graphic Design",
      status: "paused",
      views: 156,
      orders: 15
    }
  ]);

  const stats = [
    {
      title: "Total Revenue",
      value: "$12,420",
      change: "+12%",
      icon: DollarSign,
      color: "text-green-600"
    },
    {
      title: "Active Orders",
      value: "23",
      change: "+5",
      icon: Users,
      color: "text-blue-600"
    },
    {
      title: "Average Rating",
      value: "4.9",
      change: "+0.1",
      icon: Star,
      color: "text-yellow-600"
    },
    {
      title: "Profile Views",
      value: "1,842",
      change: "+18%",
      icon: TrendingUp,
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Vendor Dashboard
          </h1>
          <p className="text-gray-600">
            Manage your services, track performance, and grow your business
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </p>
                    <p className={`text-sm ${stat.color}`}>
                      {stat.change} from last month
                    </p>
                  </div>
                  <div className={`p-3 rounded-full bg-gray-100`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">My Services</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="messages">Messages</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-900">
                Your Services
              </h2>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="h-4 w-4 mr-2" />
                Add New Service
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {services.map((service) => (
                <Card key={service.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <p className="text-sm text-gray-600">{service.category}</p>
                      </div>
                      <Badge 
                        variant={service.status === 'active' ? 'default' : 'secondary'}
                      >
                        {service.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-green-600">
                          ${service.price}
                        </span>
                      </div>
                      
                      <div className="flex justify-between text-sm text-gray-600">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {service.views} views
                        </div>
                        <div className="flex items-center">
                          <Users className="h-4 w-4 mr-1" />
                          {service.orders} orders
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Recent Orders</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No orders yet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Your orders will appear here when customers start booking your services
                  </p>
                  <Button variant="outline">
                    Promote Your Services
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="messages" className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Messages</h2>
            <Card>
              <CardContent className="p-6">
                <div className="text-center py-12">
                  <MessageSquare className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No messages yet
                  </h3>
                  <p className="text-gray-600">
                    Customer messages will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900">Profile Settings</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Basic Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" placeholder="Tell customers about yourself..." />
                  </div>
                  <Button className="w-full">Save Changes</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="skills">Skills</Label>
                    <Input id="skills" placeholder="e.g., Web Design, SEO, Marketing" />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" type="number" placeholder="Enter years" />
                  </div>
                  <div>
                    <Label htmlFor="rate">Hourly Rate</Label>
                    <Input id="rate" type="number" placeholder="Enter hourly rate" />
                  </div>
                  <div>
                    <Label htmlFor="portfolio">Portfolio URL</Label>
                    <Input id="portfolio" placeholder="https://yourportfolio.com" />
                  </div>
                  <Button className="w-full" variant="outline">
                    Update Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default VendorDashboard;
