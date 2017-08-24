import { h } from "preact";
import TodoItem from "./TodoItem";

const TodoList = ({ todo = [], onCompleteItem, onResetItem }) => (
  <ul>
    {todo.map((item, i) => (
      <TodoItem
        key={i}
        item={item}
        onCompleteItem={onCompleteItem}
        onResetItem={onResetItem}
      />
    ))}
  </ul>
);

export default TodoList;
