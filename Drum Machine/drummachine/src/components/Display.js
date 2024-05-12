import LabelDisplay from "./components/LabelDisplay";
import RangeDisplay from "./components/RangleDisplay";
import Toggle from "./components/ToggleDisplay";

export default function Display() {
  return (
    <>
      <div className="grid grid-rows-4 gap-3 w-5/12 place-items-center">
        <div>
          <LabelDisplay>Power</LabelDisplay>
          <Toggle />
        </div>
        <div className="display"></div>
        <RangeDisplay />
        <div>
          <LabelDisplay>Bank</LabelDisplay>
          <Toggle />
        </div>
      </div>
    </>
  );
}
