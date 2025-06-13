import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children, role }) => {
  const token =
    role === "client"
      ? localStorage.getItem("client_token")
      : localStorage.getItem("admin_token") // or "vendor_token"

  if (!token) {
    const redirectPath = role === "client" ? "/userlogin" : "/vendorlogin"
    return <Navigate to={redirectPath} />
  }

  return children
}

export default PrivateRoute
