
import { Routes, Route } from "react-router-dom";
import AdminNavbar from "./components/AdminNavbar";
import AdminDashboard from "./pages/AdminDashboard";
import MenuManagement from "./pages/MenuManagement";
import OrderManagement from "./pages/OrderManagement";
import StoreSettings from "./pages/StoreSettings";

const AdminApp = () => {
  return (
    <div className="min-h-screen">
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/menu" element={<MenuManagement />} />
        <Route path="/orders" element={<OrderManagement />} />
        <Route path="/settings" element={<StoreSettings />} />
      </Routes>
    </div>
  );
};

export default AdminApp;
