import { h, Component } from "preact";
import { connect } from "preact-redux";
import { Page, Main } from "src/components/Page";
import { Header, BackButton } from "src/components/Header";
import Counter from "../components/Counter";
import * as actions from "../actions";


export class CounterPage extends Component {
  render({ counter, ...otherProps }) {
    return (
      <Page>
        <Header>
          <BackButton href="/" />
          <h1>Todo app</h1>
        </Header>
        <Main>
          <Counter value={counter} {...otherProps} />
        </Main>
      </Page>
    );
  }
}

const mapStateToProps = state => ({ counter: state.counter.counter });

// const mapDispatchToProps = dispatch => ({
//   onIncrement: () => dispatch({ type: actions.COUNTER_INCREMENT }),
//   onDecrement: () => dispatch({ type: actions.COUNTER_DECREMENT })
// });

let onIncrement = ()=> ({ type: actions.COUNTER_INCREMENT})
let onDecrement = ()=> ({ type: actions.COUNTER_DECREMENT})

const mapDispatchToProps = {
  onIncrement,
  onDecrement
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterPage);
