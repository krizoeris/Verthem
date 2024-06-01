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
function formatDateTime(isoString: string | number | Date) {
  const date = new Date(isoString);
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZoneName: "short",
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
  return `${formattedDate}`;
}

export { campaignStatusClass, formatDateTime };
