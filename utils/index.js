let monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const formatDate = (date, format) => {
  const d = new Date(date);
  let formatted = "";

  if (format == 1) {
    formatted = `${
      monthNames[d.getUTCMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;
  }

  return formatted;
};

export const limitString = (str, limit, concat) => {
  if (String(str) < limit) {
    return str;
  }

  let limitedStr = `${String(str).substring(0, limit)}${concat && "..."}`;

  return limitedStr;
};
