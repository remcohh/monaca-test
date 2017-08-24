import { createStore, combineReducers } from "redux";
import { counter } from "src/modules/counter/reducer";
import todo from "src/modules/todo/reducer"

const rootReducer = combineReducers({
  counter,
  todo
  // additional reducers would be added here
});

const store = createStore(
  rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : f => f
);
window.store = store;

export default store;
