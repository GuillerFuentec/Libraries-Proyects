import "../media/css/theme.css";
import DrumPad from "./DrumPad";
import Display from "./Display";


export default function Layout({ children }) {
  return (
    <div className="Layout mx-auto bg-box">
      {children}
    </div>
  );
}
