import { db } from "../data/db.js";

export const Query = {
  getUsers: (parent, args, info) => {
    return db.users;
  },
  getUserById: (parent, { id }, info) => {
    const user = db.users.find((user) => user.id === id);
    if (!user) {
      throw new Error(`user with id ${id} doesn't exist`);
    } else {
      return user;
    }
  },
  getTodos: (parent, args, info) => {
    return db.todos;
  },
  getTodoById: (parent, { id }, info) => {
    const todo = db.todos.find((todo) => todo.id === id);
    if (!todo) {
      throw new Error(`user with id ${id} doesn't exist`);
    } else {
      return todo;
    }
  },
};
