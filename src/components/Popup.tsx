import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import data from "../data/activities.json";
import "../styles/popup.css";

export default function Popup() {
  const { id } = useParams();
  const navigate = useNavigate();

  const activity = data.find((a: any) => a.id === Number(id));

  // Close on ESC
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [navigate]);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!activity) return null;

  return (
    <div className="popupOverlay" onClick={() => navigate("/")}>
      <div className="popupCard" onClick={(e) => e.stopPropagation()}>
        <h3>{activity.user}</h3>
        <p>{activity.description}</p>
        <p><strong>Id:</strong>{activity.id}</p>
        <p><strong>Customer:</strong> {activity.customer}</p>
        <p><strong>Module:</strong> {activity.module}</p>
        <p><strong>Amount:</strong> ₹ {activity.amount}</p>
        <p><strong>Activity Type:</strong> {activity.activityType}</p>
        <p><strong>Date:</strong> {activity.date}</p>
        <p><strong>Time:</strong> {activity.time}</p>
        <p><strong>GSTIN:</strong> {activity.gstin}</p>
        <p><strong>Tag:</strong> {activity.tag}</p>
      </div>
    </div>
  );
}

