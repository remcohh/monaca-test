// it is good practice to store the action types in constants
import {
  ADD_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  RESET_TODO_ITEM
} from "./constants";

// this adds a type to the object
export const addTodoItem = name => ({
  type: ADD_TODO_ITEM,
  name
});

export const completeTodoItem = id => ({
  type: COMPLETE_TODO_ITEM,
  id
});

export const resetTodoItem = id => ({
  type: RESET_TODO_ITEM,
  id
});
