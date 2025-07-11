
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LayoutDashboard, Menu, ShoppingBag, Settings, ArrowLeft } from "lucide-react";

const AdminNavbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === `/admin${path}`;

  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <Link to="/" className="flex items-center text-green-600 hover:text-green-700">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back
            </Link>
            <div className="h-6 w-px bg-gray-300"></div>
            <Link to="/admin" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">VP</span>
              </div>
              <span className="text-xl font-bold text-green-600">Vendor Portal</span>
            </Link>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/admin"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('') || isActive('/')
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              <LayoutDashboard size={16} />
              <span>Dashboard</span>
            </Link>
            
            <Link
              to="/admin/menu"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/menu')
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              <Menu size={16} />
              <span>Menu</span>
            </Link>
            
            <Link
              to="/admin/orders"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/orders')
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              <ShoppingBag size={16} />
              <span>Orders</span>
            </Link>
            
            <Link
              to="/admin/settings"
              className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/settings')
                  ? "text-green-600 bg-green-50"
                  : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
              }`}
            >
              <Settings size={16} />
              <span>Settings</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
