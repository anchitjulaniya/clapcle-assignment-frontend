import ActivityCard from "./ActivityCard";
import { groupActivities } from "../utils/groupActivities";
import "../styles/timeline.css";

export default function ActivityTimeline({ data }: any) {

  function groupActivitiesByDate(data: any[]) {
  const groups: Record<string, any[]> = {};

  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  data.forEach((item) => {
    const itemDate = new Date(item.date);

    let label = "Earlier";

    if (itemDate.toDateString() === today.toDateString()) {
      label = "Today";
    } else if (itemDate.toDateString() === yesterday.toDateString()) {
      label = "Yesterday";
    }

    if (!groups[label]) groups[label] = [];
    groups[label].push(item);
  });

  return groups;
}

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
