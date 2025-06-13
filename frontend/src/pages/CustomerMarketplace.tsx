
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Clock,
  Heart,
  MessageCircle
} from "lucide-react";

const CustomerMarketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [
    "Web Design",
    "Digital Marketing",
    "Content Writing",
    "Graphic Design",
    "Photography",
    "Video Editing",
    "Consulting",
    "Development"
  ];

  const vendors = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Full-Stack Web Developer",
      category: "Web Design",
      rating: 4.9,
      reviews: 127,
      hourlyRate: 75,
      location: "San Francisco, CA",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b77c?w=150&h=150&fit=crop&crop=face",
      skills: ["React", "Node.js", "MongoDB", "UI/UX"],
      description: "Experienced full-stack developer specializing in modern web applications with clean, responsive designs.",
      responseTime: "2 hours",
      online: true
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Digital Marketing Specialist",
      category: "Digital Marketing",
      rating: 4.8,
      reviews: 89,
      hourlyRate: 65,
      location: "New York, NY",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["SEO", "Google Ads", "Social Media", "Analytics"],
      description: "Digital marketing expert helping businesses grow their online presence and increase conversions.",
      responseTime: "1 hour",
      online: true
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      title: "Content Writer & Copywriter",
      category: "Content Writing",
      rating: 5.0,
      reviews: 156,
      hourlyRate: 45,
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      skills: ["Blog Writing", "Copy Writing", "SEO Writing", "Social Media"],
      description: "Creative content writer who crafts compelling stories that engage audiences and drive results.",
      responseTime: "30 minutes",
      online: false
    },
    {
      id: 4,
      name: "David Park",
      title: "UI/UX Designer",
      category: "Graphic Design",
      rating: 4.7,
      reviews: 73,
      hourlyRate: 80,
      location: "Seattle, WA",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
      description: "Passionate designer creating intuitive user experiences that balance beauty with functionality.",
      responseTime: "4 hours",
      online: true
    },
    {
      id: 5,
      name: "Emma Thompson",
      title: "Brand Photographer",
      category: "Photography",
      rating: 4.9,
      reviews: 94,
      hourlyRate: 120,
      location: "Los Angeles, CA",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      skills: ["Portrait Photography", "Product Photography", "Editing", "Lighting"],
      description: "Professional photographer specializing in brand photography that tells your unique story.",
      responseTime: "6 hours",
      online: false
    },
    {
      id: 6,
      name: "Alex Kumar",
      title: "Video Editor & Motion Graphics",
      category: "Video Editing",
      rating: 4.6,
      reviews: 51,
      hourlyRate: 90,
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      skills: ["After Effects", "Premiere Pro", "Motion Graphics", "Color Grading"],
      description: "Creative video editor bringing stories to life through engaging visuals and smooth animations.",
      responseTime: "3 hours",
      online: true
    }
  ];

  const filteredVendors = vendors.filter(vendor => {
    const matchesSearch = vendor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         vendor.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = !selectedCategory || vendor.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Find Your Perfect Vendor
          </h1>
          <p className="text-gray-600">
            Browse through hundreds of verified professionals ready to help with your project
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search vendors, skills, or services..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="w-full lg:w-48">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredVendors.length} vendors
          </p>
        </div>

        {/* Vendor Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredVendors.map((vendor) => (
            <Card key={vendor.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="relative">
                    <img
                      src={vendor.image}
                      alt={vendor.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    {vendor.online && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">
                          {vendor.name}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">
                          {vendor.title}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                          <div className="flex items-center">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                            {vendor.rating} ({vendor.reviews})
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            {vendor.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {vendor.responseTime}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">
                          ${vendor.hourlyRate}
                        </p>
                        <p className="text-sm text-gray-600">per hour</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3 line-clamp-2">
                      {vendor.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vendor.skills.slice(0, 3).map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {vendor.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{vendor.skills.length - 3} more
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" size="icon">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredVendors.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Vendors
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredVendors.length === 0 && (
          <div className="text-center py-12">
            <div className="max-w-md mx-auto">
              <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No vendors found
              </h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search criteria or browse all categories
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("");
                }}
              >
                Clear Filters
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomerMarketplace;
