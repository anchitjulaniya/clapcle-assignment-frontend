import ActivityCard from "./ActivityCard";
import { groupActivitiesByDate } from "../utils/groupActivities";
import "../styles/timeline.css";

export default function ActivityTimeline({ data }: any) {



 if (!data.length) {
    return <div style={{ padding: 20 }}>No activities found</div>;
  }

   const grouped = groupActivitiesByDate(data);

  return (
    <div className="timelineWrapper">
      {Object.entries(grouped).map(([groupName, activities]) => (
        <div key={groupName} className="timelineGroup">

          <h4 className="timelineTitle">{groupName}</h4>

          {activities.map((activity: any) => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}

        </div>
      ))}
    </div>
  );
}
