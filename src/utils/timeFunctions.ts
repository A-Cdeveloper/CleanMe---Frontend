import { format } from "date-fns";

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const formattedDate = (date: Date) => format(date, "dd.MM.yyyy HH:mm");
