export   function groupActivitiesByDate(data: any[]) {
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