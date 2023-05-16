const generateDatesOfDate = (date: Date): string[] => {
  const dates: string[] = [];
  let currentDate = new Date(date.getFullYear(), date.getMonth(), 1);
  const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  while (currentDate <= lastDay) {
    dates.push(currentDate.toISOString());
    currentDate = new Date(
      new Date(currentDate).getTime() + 24 * 60 * 60 * 1000
    );
  }
  return dates;
};

export { generateDatesOfDate };
