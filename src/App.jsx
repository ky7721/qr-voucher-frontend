import { BrowserRouter, Routes, Route } from "react-router-dom";
import GeneratePage from "./pages/GeneratePage";
import RedeemPage from "./pages/RedeemPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GeneratePage />} />
        <Route path="/redeem/:code" element={<RedeemPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
