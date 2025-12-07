import axios from "axios";
import { useState } from "react";
import QRCode from "react-qr-code";

const backendURL = "https://qr-voucher-backend.onrender.com";

export default function GeneratePage() {
  const [count, setCount] = useState(1);
  const [detail, setDetail] = useState("");
  const [vouchers, setVouchers] = useState([]);

  const generate = async () => {
    if (!count || !detail) return alert("Please enter count and detail");

    try {
      const res = await axios.post(`${backendURL}/api/generate`, { count, detail });
      setVouchers(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to generate vouchers");
    }
  };

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-5">Generate Voucher QR Codes</h1>

      <div className="flex mb-5 space-x-3">
        <input
          type="number"
          min="1"
          placeholder="Count"
          className="border p-2 w-24"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <input
          type="text"
          placeholder="Voucher detail"
          className="border p-2 flex-1"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
        />
        <button onClick={generate} className="bg-blue-600 text-white px-4 py-2 rounded">
          Generate
        </button>
      </div>

      {vouchers.length > 0 && (
        <div className="grid grid-cols-3 gap-4 mt-10">
          {vouchers.map((v) => (
            <div key={v.code} className="p-4 border rounded text-center">
              <QRCode value={`${backendURL}/redeem/${v.code}`} size={128} />
              <p className="mt-2 font-bold">{v.code}</p>
              <p>{v.detail}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
