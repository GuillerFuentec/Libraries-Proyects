import { useDispatch, useSelector } from "react-redux";
import LabelDisplay from "./LabelDisplay";

export default function ToggleBank() {
  const power = useSelector((state) => state.bank);
  const {state = false} = power;
  const dispatch = useDispatch();
  const setPower = state ? '02' : '01'
  return (
    <>
      <LabelDisplay>Bank/{setPower}</LabelDisplay>
      <input
        type="checkbox"
        className="toggle [--tglbg:black]"
        onChange={() => dispatch({ type: "SET/BANK", payload: !state})}
      />
    </>
  );
}