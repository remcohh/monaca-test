import { createSelector } from "reselect";

const todoItems = state => state.todo;

// creating the selectors, first argument is a list of items do derive the data from, second is the derivation function

export const itemsDone = createSelector(todoItems, todoItems =>
  todoItems.reduce((result, item) => result + (item.done ? 1 : 0), 0)
);

export const itemsTodo = createSelector(todoItems, todoItems =>
  todoItems.reduce((result, item) => result + (item.done ? 0 : 1), 0)
);
