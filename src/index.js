import "babel-polyfill";
import "./styles/shell.scss";
import { h, render } from "preact";
import { Provider } from "preact-redux";
import FastClick from "fastclick";
import "src/config/sentry";
import store from "./store";
import TodoPage from "./modules/todo/containers/TodoPage"
//import App from "./containers/App";

const renderApp = function() {
  const root = document.querySelector("#maji-app");
  const App = require("./containers/App").default;

  root.innerHTML = "";


  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  );
};

FastClick.attach(document.body);
renderApp();

if (process.env.NODE_ENV !== "production") {
  require("preact/devtools");

  if (module.hot) {
    module.hot.accept();
  }
}
