import LabelDisplay from "./components/LabelDisplay";
import RangeDisplay from "./components/RangleDisplay";
import Toggle from "./components/ToggleDisplay";

export default function Display() {
  return (
    <>
      <div className="display">
        <div className="control">
          <LabelDisplay>Power</LabelDisplay>
          <Toggle />
        </div>
        <div className="screen"></div>
        <RangeDisplay />
        <div className="control">
          <LabelDisplay>Bank</LabelDisplay>
          <Toggle />
        </div>
      </div>
    </>
  );
}
