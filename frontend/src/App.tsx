import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientApp from "./client/ClientApp";
import AdminApp from "./admin/AdminApp";
import LandingPage from "./pages/LandingPage";
import UserLogin from "./auth/userlogin"
import VendorLogin from "./auth/VendorLogin";
import PrivateRoute from "./components/PrivateRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route path="/vendorlogin" element={<VendorLogin />} />

            {/* Protected Routes */}
            <Route
              path="/client/*"
              element={
                <PrivateRoute role="client">
                  <ClientApp />
                </PrivateRoute>
              }
            />
            <Route
              path="/admin/*"
              element={
                <PrivateRoute role="admin">
                  <AdminApp />
                </PrivateRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
