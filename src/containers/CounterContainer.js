import { connect } from "react-redux";
import { decreaseAsync, increaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer({ number, increaseAsync, decreaseAsync }) {
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
}

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increaseAsync,
    decreaseAsync,
  }
)(CounterContainer);
