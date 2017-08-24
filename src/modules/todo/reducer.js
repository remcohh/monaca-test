import {
  ADD_TODO_ITEM,
  COMPLETE_TODO_ITEM,
  RESET_TODO_ITEM
} from "./constants";

let id = 0;

const createTodo = name => ({
  id: ++id,
  name,
  done: false
});

const initialState = [
  createTodo("Demonstrate 'render'"),
  createTodo("Demonstrate props"),
  createTodo("Demonstrate Component class"),
  createTodo("Demonstrate Component state"),
  createTodo("Demonstrate modular CSS"),
  createTodo("Demonstrate Redux state"),
  createTodo("Demonstrate Redux actions"),
  createTodo("Demonstrate reducers"),
  createTodo("Demonstrate tests ...")
];

export default (state = initialState, action) => {
  if (action.type === ADD_TODO_ITEM) {
    if (action.name == "") return state;
    return [...state].concat(createTodo(action.name));
  }
  if (action.type === COMPLETE_TODO_ITEM || action.type == RESET_TODO_ITEM) {
    return state.map(
      item =>
        item.id === action.id
          ? { ...item, done: action.type === COMPLETE_TODO_ITEM }
          : item
    );
  }
  return state;
};
