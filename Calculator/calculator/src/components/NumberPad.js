import { useDispatch } from "react-redux";
import {
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,
  EQUALS,
  CLEAR,
  INPUT_DECIMAL,
  INPUT_NUMBER,
} from "../state/reducers/actions/actions";

export default function NumberPad() {
  const dispatch = useDispatch();

  const handleClick = (valor) => {
    dispatch({ type: INPUT_NUMBER, payload: valor });
  }

  return (
    <>
      <div className="buttons">
        <button className="button" id="clear" onClick={() => dispatch({type: CLEAR})}>
          AC
        </button>
        <button className="button" id="divide" onClick={() => dispatch({type: DIVIDE})}>
          /
        </button>
        <button className="button" id="multiply" onClick={() => dispatch({type: MULTIPLY})}>
          *
        </button>
        <button className="button" id="seven" onClick={() => handleClick(7)}>
          7
        </button>
        <button className="button" id="eight" onClick={() => handleClick(8)}>
          8
        </button>
        <button className="button" id="nine" onClick={() => handleClick(9)}>
          9
        </button>
        <button className="button" id="subtract" onClick={() => dispatch({type: SUBTRACT})}>
          -
        </button>
        <button className="button" id="four" onClick={() => handleClick(4)}>
          4
        </button>
        <button className="button" id="five" onClick={() => handleClick(5)}>
          5
        </button>
        <button className="button" id="six" onClick={() => handleClick(6)}>
          6
        </button>
        <button className="button" id="add" onClick={() => dispatch({type: ADD})}>
          +
        </button>
        <button className="button" id="one" onClick={() => handleClick(1)}>
          1
        </button>
        <button className="button" id="two" onClick={() => handleClick(2)}>
          2
        </button>
        <button className="button" id="three" onClick={() => handleClick(3)}>
          3
        </button>
        <button className="button" id="equals" onClick={() => dispatch({type: EQUALS})}>
          =
        </button>
        <button className="button" id="zero" onClick={() => handleClick(0)}>
          0
        </button>
        <button className="button" id="decimal" onClick={() => dispatch({type: INPUT_DECIMAL})}>
          .
        </button>
      </div>
    </>
  );
}