import { PostDataProps } from "@/data/postList";

export const getThisMonthTIL = (tilData: Array<PostDataProps>) => {
  const thisMonth = new Date().getMonth() + 1;
  return tilData.filter((til) => {
    const tilMonth = new Date(til.date).getMonth() + 1;
    return tilMonth === thisMonth;
  });
};

export const getThisYearTIL = (tilData: Array<PostDataProps>) => {
  const thisYear = new Date().getFullYear();
  return tilData.filter((til) => {
    const tilYear = new Date(til.date).getFullYear();
    return tilYear === thisYear;
  });
};

export const getTilForMonth = (
  tilData: Array<PostDataProps>,
  month: number
) => {
  if (month === 0) return tilData;
  return tilData.filter((til) => {
    const tilMonth = new Date(til.date).getMonth() + 1;
    return tilMonth === month;
  });
};

export const getLatestNTil = (tilData: Array<PostDataProps>, n: number) => {
  return tilData
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .slice(0, n);
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getAvailableMonths = (tilData: Array<PostDataProps>) => {
  const monthNumbers = tilData.map((til) => new Date(til.date).getMonth() + 1);

  const availableMonths = Array.from(new Set(monthNumbers)).sort(
    (a, b) => a - b
  );

  return availableMonths.map((month) => months[month - 1]);
};

export const monthToNumber = (month: string) => {
  return months.indexOf(month) + 1;
};
