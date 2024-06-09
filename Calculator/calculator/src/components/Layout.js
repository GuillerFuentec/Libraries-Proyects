import Display from "./Display";
import NumberPad from "./NumberPad";

export default function Layout() {
  return (
    <div className="layout">
      <Display />
      <NumberPad />
    </div>
  );
}
