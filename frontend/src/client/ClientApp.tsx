
import { Routes, Route } from "react-router-dom";
import ClientNavbar from "./components/ClientNavbar";
import ClientHome from "./pages/ClientHome";
import VendorList from "./pages/VendorList";
import VendorDetail from "./pages/VendorDetail";

const ClientApp = () => {
  return (
    <div className="min-h-screen">
      <ClientNavbar />
      <Routes>
        <Route path="/" element={<ClientHome />} />
        <Route path="/vendors" element={<VendorList />} />
        <Route path="/vendor/:id" element={<VendorDetail />} />
      </Routes>
    </div>
  );
};

export default ClientApp;
