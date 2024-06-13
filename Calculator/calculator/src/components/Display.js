import { useSelector } from "react-redux";

export default function Display() {
  const displayValue = useSelector(
    (state) => state.calculatorReducer.displayValue
  );
  const previousValue = useSelector(
    (state) => state.calculatorReducer.previousValue
  );
  const operator = useSelector((state) => state.calculatorReducer.operator);

  return (
    <div className="display">
      <div className="realtime">
        <span>{displayValue}</span>
      </div>
      <div className="operation">
        <span>
          {previousValue} 
          {operator}
        </span>
      </div>
    </div>
  );
}
