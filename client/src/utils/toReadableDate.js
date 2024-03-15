export default function toReadableDate(date) {
  const toDate = new Date(date);

  return `${toDate.getFullYear()}-${
    (toDate.getMonth() + 1 < 10 ? "0" : "") + (toDate.getMonth() + 1)
  }-${(toDate.getDate() < 10 ? "0" : "") + toDate.getDate()}`;
}
