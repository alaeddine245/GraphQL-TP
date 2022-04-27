import { db } from "../data/db.js";

export const ToDo = {
  user: (todo) => {
    return db.users.find((user) => user.id == todo.user);
  },
};
