export const isValidDate = (date?: Date | null) =>
  date instanceof Date && !isNaN(Number(date));
