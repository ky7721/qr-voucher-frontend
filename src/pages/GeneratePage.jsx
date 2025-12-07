import axios from "axios";
import { useState } from "react";
import QRCode from "react-qr-code";

const backendURL = "https://qr-voucher-backend.onrender.com";

export default function GeneratePage() {
  const [count, setCount] = useState(1);
  const [detail, setDetail] = useState("");
  const [vouchers, setVouchers] = useState([]);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    if (!count || !detail) return alert("Please enter count and detail");

    setLoading(true);
    try {
      const res = await axios.post(`${backendURL}/api/generate`, { count, detail });
      setVouchers(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate vouchers");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10 text-gray-800">Generate Voucher QR Codes</h1>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="number"
              min="1"
              placeholder="Quantity"
              className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-600 focus:outline-none w-full md:w-32"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Voucher detail (e.g., $50 discount)"
              className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-600 focus:outline-none flex-1"
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
            />
            <button
              onClick={generate}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold px-6 py-3 rounded-lg transition shadow"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        {vouchers.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Generated Vouchers ({vouchers.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {vouchers.map((v) => (
                <div key={v.code} className="border-2 border-gray-200 rounded-lg p-6 text-center hover:shadow-lg transition">
                  <div className="flex justify-center mb-4">
                    <QRCode value={`${backendURL}/redeem/${v.code}`} size={128} />
                  </div>
                  <p className="text-sm font-mono font-bold text-blue-600 mb-2">{v.code}</p>
                  <p className="text-gray-600">{v.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}