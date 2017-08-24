import { h, Component } from "preact";

class AddTodoItem extends Component {
  constructor() {
    super();
    this.state = { item: "" };
  }

  // onAddTodoItem is the function to execute when a new item is added
  render({ onAddTodoItem }) {

    const updateItem = e => {
      this.setState({ item: e.target.value });
    };

    const onAdd = (e) => {
      onAddTodoItem(this.state.item);
      this.setState({ item: "" });
    };

    return (
      <span>
        <input
          type="text"
          name="newTodo"
          onInput={updateItem}
          value={this.state.item}
        />
        <button onClick={onAdd} disabled={this.state.item.trim() == ""}>
          Add
        </button>
      </span>
    );
  }
}

export default AddTodoItem;
