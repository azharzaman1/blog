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

export const formatDate = (date, format = "Mon DD, YYYY") => {
  const d = new Date(date);
  let formatted = "";

  if (!format || format === "Mon DD, YYYY") {
    formatted = `${
      monthNames[d.getUTCMonth()]
    } ${d.getDate()}, ${d.getFullYear()}`;
  }

  if (format === "YYYY/MM/DD") {
    formatted = `${d.getFullYear()}/${d.getUTCMonth() + 1}/${d.getDate()}`;
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
