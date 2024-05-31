import { useDispatch, useSelector } from "react-redux";
import LabelDisplay from "./LabelDisplay";

export default function TogglePower() {
  const power = useSelector((state) => state.power);
  const {state = false} = power;
  const dispatch = useDispatch();
  const setPower = state ? 'OFF' : 'ON'
  return (
    <>
      <LabelDisplay>POWER/{setPower}</LabelDisplay>
      <input
        type="checkbox"
        className="toggle [--tglbg:white] opacity-20"
        checked={state}
        onChange={() => dispatch({ type: "SET/POWER", payload: !state })}
      />
    </>
  );
}
