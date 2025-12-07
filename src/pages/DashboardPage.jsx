import { useEffect, useState } from "react";
import axios from "axios";

const backendURL = "https://qr-voucher-backend.onrender.com";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${backendURL}/api/stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center py-10 text-lg">Loading...</p>;
  if (!stats) return <p className="text-center py-10 text-red-600">Failed to load statistics</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-100 py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">Voucher Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-500 text-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition">
            <h2 className="text-5xl font-bold">{stats.total}</h2>
            <p className="text-xl mt-2 opacity-90">Total Vouchers</p>
          </div>
          <div className="bg-green-500 text-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition">
            <h2 className="text-5xl font-bold">{stats.unused}</h2>
            <p className="text-xl mt-2 opacity-90">Unused</p>
          </div>
          <div className="bg-red-500 text-white rounded-lg shadow-lg p-8 transform hover:scale-105 transition">
            <h2 className="text-5xl font-bold">{stats.used}</h2>
            <p className="text-xl mt-2 opacity-90">Used</p>
          </div>
        </div>
      </div>
    </div>
  );
}