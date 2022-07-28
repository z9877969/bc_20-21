import { v4 as uuidv4 } from "uuid";

export const todo = [
  {
    id: uuidv4(),
    date: "2022-05-03",
    title: "Title-1",
    descr: "Description for title - 1",
    priority: "medium",
    isDoneStatus: false,
  },
  {
    id: uuidv4(),
    date: "2022-05-03",
    title: "Title-2",
    descr: "Description for title - 2",
    priority: "low",
    isDoneStatus: false,
  },
  {
    id: uuidv4(),
    date: "2022-05-03",
    title: "Title-3",
    descr: "Description for title - 3",
    priority: "medium",
    isDoneStatus: false,
  },
  {
    id: uuidv4(),
    date: "2022-05-03",
    title: "Title-4",
    descr: "Description for title - 4",
    priority: "high",
    isDoneStatus: false,
  },
];
