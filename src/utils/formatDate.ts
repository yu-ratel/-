export const formatStrDate = (dateStr: string, start: number = 0, end: number = 10) => {
  return dateStr.slice(start, end);
};

export const formatToday = () => {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};
