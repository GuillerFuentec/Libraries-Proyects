import LabelDisplay from "./components/LabelDisplay";
import ToggleDisplay from "./components/ToggleDisplay";
import RangeDisplay from "./components/RangeDisplay";
import {useSelector} from 'react-redux';

export default function Display() {
  const display = useSelector(state => state.displayReducer);
  console.log(display)
  return (
    <div id="display" className="Display grid grid-rows-4 p-4 grid-flow-col gap-1">
      <div className="toggle-box">
        <LabelDisplay>POWER</LabelDisplay>
        <ToggleDisplay />
      </div>
      <div className="screen" >{display}</div>
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
