import LabelDisplay from "./components/LabelDisplay";
import ToggleDisplay from "./components/ToggleDisplay";
import RangeDisplay from "./components/RangeDisplay";

export default function Display() {
  return (
    <div className="Display grid grid-rows-4 p-4 grid-flow-col gap-1">
      <div className="toggle-box">
        <LabelDisplay>POWER</LabelDisplay>
        <ToggleDisplay />
      </div>
      <div className="screen"></div>
      <div>
        <RangeDisplay/>
      </div>
      <div className="toggle-box">
        <LabelDisplay>BANK</LabelDisplay>
        <ToggleDisplay />
      </div>
    </div>
  );
}
