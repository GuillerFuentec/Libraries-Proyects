import LabelDisplay from "./components/LabelDisplay"
import ToggleDisplay from "./components/ToggleDisplay"

export default function Display() {
  return (
      <div className="Display grid grid-rows-4 grid-flow-col gap-1" >
        <div className="toggle-box">
          <LabelDisplay>POWER</LabelDisplay>
          <ToggleDisplay/>
        </div>
      </div>
  )
}