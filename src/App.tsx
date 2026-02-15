import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Popup from "./components/Popup";



export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/activity/:id" element={<><Dashboard /><Popup /></>} />
      </Routes>
    </BrowserRouter>
  );
}
