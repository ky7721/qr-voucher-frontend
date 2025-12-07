import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center max-w-2xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">QR Voucher System</h1>
        <p className="text-xl text-gray-600 mb-12">Manage and generate QR code vouchers efficiently</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Generate Vouchers Button */}
          <Link
            to="/generate"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            <div className="text-3xl mb-2">📱</div>
            <div>Generate Vouchers</div>
            <p className="text-sm mt-2 opacity-90">Create new QR code vouchers</p>
          </Link>

          {/* Dashboard Button */}
          <Link
            to="/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg shadow-lg transform transition hover:scale-105"
          >
            <div className="text-3xl mb-2">📊</div>
            <div>Dashboard</div>
            <p className="text-sm mt-2 opacity-90">View voucher statistics</p>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">How it works:</h2>
          <ol className="text-left text-gray-600 space-y-2">
            <li><span className="font-bold">1.</span> Go to "Generate Vouchers" to create QR codes</li>
            <li><span className="font-bold">2.</span> View statistics on the Dashboard</li>
            <li><span className="font-bold">3.</span> Share QR codes with customers to redeem</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Home;