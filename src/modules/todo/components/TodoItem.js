import { h } from "preact";
import styles from "./TodoItem.scss";

const TodoItem = ({ item, onCompleteItem, onResetItem }) => {

  const checkTodo = (e) => {
    item.done ? onResetItem(item) : onCompleteItem(item);
    e.preventDefault()
  };

  return (
    <li class={item.done && styles.strike}>
      <a href="#" onClick={checkTodo}>{item.name}</a>
    </li>
  );
};

export default TodoItem;
