import ToggleDisplay from "./components/ToggleDisplay";
import RangeDisplay from "./components/RangeDisplay";
import { useSelector } from "react-redux";
import ToggleBank from "./components/ToggleBank";

export default function Display() {
  const display = useSelector((state) => state.display);
  const power = useSelector((state) => state.power);
  const { state = false } = power;
  return (
    <div
      id="screen"
      className="Display grid grid-rows-4 p-4 grid-flow-col gap-1"
    >
      <div className="toggle-box">
        <ToggleDisplay />
      </div>
      <div className="screen">
        <span id="display" >{state ? "" : display}</span>
      </div>
      <div>
        <RangeDisplay />
      </div>
      <div>
        <ToggleBank />
      </div>
    </div>
  );
}
