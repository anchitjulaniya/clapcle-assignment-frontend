import "../styles/activityCard.css";
import { useNavigate } from "react-router-dom";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";

export default function ActivityCard({ activity }: any) {

  const navigate = useNavigate();

 
  const getDotColor = (type: string) => {
  switch (type) {
    case "Added":
      return "#22c55e"; // green
    case "Modified":
      return "#3b82f6"; // blue
    case "Deleted":
      return "#ef4444"; // red
    default:
      return "#6c63ff"; // default purple
  }
};


  return (
    <div className="timelineItem">

      <div
  className="timelineDot"
  style={{ background: getDotColor(activity.activityType) }}
></div>


      <div className="timelineCard">
        <div className="cardHeader">
          <strong>{activity.user}</strong>
          <span className="tag">{activity.module}</span>
        </div>

        <div className="cardBody">
          {activity.description}
        </div>

        <div className="cardBody-2" >
          <span>This message has been deleted</span>
          <button
          style={{}}
            className="viewBtn"
            onClick={() => navigate(`/activity/${activity.id}`)}
            >
            View Details
          </button>
        </div>

        <div className="cardFooter">
          <div className="cardFooterSection">
            <span style={{color:"#6c63ff"}}>{activity.customer}</span>
          <span>Gst {activity.gstin}</span>
          </div>
          <div className="cardFooterSection">
            <div className="cardFooterSection-icons" style={{color:"#6c63ff"}}>
              <BiSolidPhoneCall />
              <MdEmail />
            </div>
            <span>Time {activity.time}</span>
          </div>
        </div>
      </div>

    </div>
  );
}


// {
    // "id": 10,
    // "user": "Vivek Choudhary", // 
    // "customer": "Nitin Arora", // 
    // "module": "Returns",
    // "activityType": "Processed",
    // "amount": 3200,
    // "date": "2024-02-23",
    // "time": "11:05 AM",
    // "gstin": "06FFFFF6666F1Z6",
    // "description": "Product return processed",
    // "tag": "customer"
  // }