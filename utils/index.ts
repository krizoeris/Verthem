/**
 * Change campaigns status styling
 * @param status
 * @returns
 */
const campaignStatusClass = (status: string): string => {
  switch (status) {
    case "active":
      return "bg-slate-100 text-slate-700";
    case "inactive":
      return "bg-slate-100 text-slate-400";
    case "draft":
      return "bg-slate-100 text-slate-900";
    case "live":
      return "bg-verthem-900 text-slate-700";
    default:
      return "bg-slate-100 text-slate-900";
  }
};

/**
 * Convert the last updated date
 * @param isoString
 * @returns
 */
function formatDateTime(isoString: string | number | Date): string {
  const date = new Date(isoString);

  // Define formatting options
  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  };

  // Format the date using the specified options
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  // Return the formatted date string
  return `${formattedDate}`;
}

export { campaignStatusClass, formatDateTime };
