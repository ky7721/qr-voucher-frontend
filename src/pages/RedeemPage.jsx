import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const backendURL = "https://qr-voucher-backend.onrender.com"; // Render backend URL

export default function RedeemPage() {
  const { code } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    axios.get(`${backendURL}/api/redeem/${code}`)
      .then((res) => setResult(res.data))
      .catch((err) => console.error(err));
  }, [code]);

  if (!result) return <p>Loading...</p>;

  return (
    <div className="p-10 text-center">
      {result.status === "valid" && (
        <div>
          <h1 className="text-3xl font-bold text-green-600">Voucher Valid!</h1>
          <p className="text-xl mt-5">{result.detail}</p>
        </div>
      )}
      {result.status === "used" && (
        <div>
          <h1 className="text-3xl font-bold text-red-600">Voucher Already Used</h1>
          <p className="mt-4">{result.used_time}</p>
        </div>
      )}
      {result.status === "invalid" && (
        <h1 className="text-3xl font-bold text-gray-600">Invalid Voucher</h1>
      )}
    </div>
  );
}
