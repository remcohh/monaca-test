import { h } from "preact";
import { Router as PreactRouter } from "preact-router";
import { history } from "src/support/history";
import { augmentRouter } from "src/support/pageTransitionSupport";
import WelcomePage from "src/modules/welcome/containers/WelcomePage";
import DetailPage from "src/modules/welcome/containers/DetailPage";
import TodoPage from "src/modules/todo/containers/TodoPage";
import CounterPage from "src/modules/counter/containers/CounterPage";

const Router = augmentRouter(PreactRouter);

export default () => (
  <Router history={history}>
    <DetailPage path="/detail" />
    <TodoPage path="/todo" />
    <CounterPage path="/counter" />
    <WelcomePage default />
  </Router>
);
