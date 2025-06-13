// src/pages/VendorLogin.jsx
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const VendorLogin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()

    const res = await fetch("http://localhost:5000/api/vendor-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem("vendor_token", data.token)
      navigate("/vendor")
    } else {
      alert(data.message || "Login failed")
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Vendor Login
        </h2>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Vendor email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default VendorLogin
