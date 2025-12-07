import { useEffect, useState } from "react";
import axios from "axios";

const backendURL = "https://qr-voucher-backend.onrender.com";

export default function DashboardPage() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    axios.get(`${backendURL}/api/stats`)
      .then((res) => setStats(res.data))
      .catch((err) => console.error(err));
  }, []);

  if (!stats) return <p className="text-center">Loading...</p>;

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold mb-10">Voucher Dashboard</h1>

      <div className="grid grid-cols-3 gap-10 max-w-4xl mx-auto">
        <div className="p-5 bg-blue-100 rounded shadow">
          <h2 className="text-2xl font-bold">{stats.total}</h2>
          <p>Total</p>
        </div>
        <div className="p-5 bg-green-100 rounded shadow">
          <h2 className="text-2xl font-bold">{stats.unused}</h2>
          <p>Unused</p>
        </div>
        <div className="p-5 bg-red-100 rounded shadow">
          <h2 className="text-2xl font-bold">{stats.used}</h2>
          <p>Used</p>
        </div>
      </div>
    </div>
  );
}
