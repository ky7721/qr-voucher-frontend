import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import GeneratePage from "./pages/GeneratePage";
import DashboardPage from "./pages/DashboardPage";
import RedeemPage from "./pages/RedeemPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/" className="font-bold text-xl hover:text-blue-100 transition">
            🎟️ QR Voucher System
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:bg-blue-700 px-3 py-2 rounded transition">Home</Link>
            <Link to="/generate" className="hover:bg-blue-700 px-3 py-2 rounded transition">Generate</Link>
            <Link to="/dashboard" className="hover:bg-blue-700 px-3 py-2 rounded transition">Dashboard</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/redeem/:code" element={<RedeemPage />} />
          <Route path="*" element={<p className="text-center py-10">Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}