import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import GeneratePage from "./pages/GeneratePage";
import DashboardPage from "./pages/DashboardPage";
import RedeemPage from "./pages/RedeemPage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <span className="font-bold text-xl">QR Voucher System</span>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Generate</Link>
            <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="py-10">
        <Routes>
          <Route path="/" element={<GeneratePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/redeem/:code" element={<RedeemPage />} />
          <Route path="*" element={<p className="text-center">Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}
