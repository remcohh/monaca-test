// Import preact stuff, we need 'h' because return(<div/>) will be transpiled to return(h("<div/>"))
import { h, Component } from "preact";

import I18n from "src/config/i18n";
import { Page, Main } from "src/components/Page";
import { Header, BackButton } from "src/components/Header";

import { connect } from "preact-redux";

// Import components used within this container
import TodoList from "../components/TodoList";
import AddTodoItem from "../components/AddTodoItem";

// Import actions used inside this container and sub components
import { addTodoItem, resetTodoItem, completeTodoItem } from "../actions";

// Import selectors for aggregating data
import { itemsDone, itemsTodo } from "../selectors";

// Container definition as a function, actions and aggregators are arguments
const TodoPage = ({
  todo,
  addTodoItem,
  completeTodoItem,
  resetTodoItem,
  amountTodo,
  amountDone
}) => {

  // create actions
  const ResetItemAction = item => resetTodoItem(item.id);
  const CompleteItemAction = item => completeTodoItem(item.id);

  return (
    <Page>
      <Header>
        <BackButton href="/" />
        <h1>Todo app</h1>
      </Header>
      <Main>
        <h1>Items todo</h1>
        <h3>Todo: {amountTodo}</h3>
        <h3>Done: {amountDone}</h3>
        <TodoList
          todo={todo}
          onCompleteItem={CompleteItemAction}
          onResetItem={ResetItemAction}
        />
        <AddTodoItem onAddTodoItem={addTodoItem} />
      </Main>
    </Page>
  );
};

// creating props from state and selectors
const mapStateToProps = state => ({
  todo: state.todo,
  amountDone: itemsDone(state),
  amountTodo: itemsTodo(state)
});


// everything in here will be wrapped in a dispatch function
const mapDispatchToProps = {
  addTodoItem,
  completeTodoItem,
  resetTodoItem
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
