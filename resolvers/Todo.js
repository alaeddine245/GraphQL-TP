import { db } from "../data/db.js";
export const Todo = {
  user: ({ userId }, args, info) => {
    const user = db.users.find((user) => user.id === userId);
    if (!user) {
      throw new Error(`todo without user`);
    }
    return user;
  },
};
