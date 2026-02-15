export function groupActivities(data: any[]) {
  const groups: Record<string, any[]> = {};

  const today = new Date();

  data.forEach(item => {
    const activityDate = new Date(item.date);
    const diffDays =
      (today.getTime() - activityDate.getTime()) /
      (1000 * 60 * 60 * 24);

    let label = "Older";

    if (diffDays < 1) label = "Today";
    else if (diffDays < 2) label = "Yesterday";
    else if (diffDays <= 7) label = "Last Week";
    else if (diffDays <= 30) label = "Last 30 Days";

    if (!groups[label]) groups[label] = [];
    groups[label].push(item);
  });

  return groups;
}
