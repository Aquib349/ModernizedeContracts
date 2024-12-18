// Helper function to format the time
export const formattedTime = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  const now = new Date();
  now.setHours(hours, minutes, 0, 0);

  return now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
};

// heplper function to convert to minutes
export function timeToMinute(time: string): number {
  const [hour, minutes] = time.split(":").map(Number);
  return hour * 60 + minutes;
}

// helper function to convert time to fractional hour
export function timeToFraction(time: string): number {
  const [hour, minutes] = time.split(":").map(Number);
  return hour + minutes / 60;
}
