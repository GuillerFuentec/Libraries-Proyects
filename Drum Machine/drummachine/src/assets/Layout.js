import DrumPad from "./DrumPad";
import Display from "./Display";

export default function Layout() {
  return (
    <div id="drum-machine" className="Layout grid grid-cols-2 constrast-bg-box">
      <DrumPad />
      <Display />
    </div>
  );
}
