import { useDispatch, useSelector } from "react-redux";

export default function RangeDisplay() {
  let volume = useSelector((state) => state.volume);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const newVolume = Number(e.target.value);
    dispatch({ type: "SET/VOLUME", payload: newVolume });
  };

  return (
    <div className="flex items-center p-px h-14 w-full">
      <input
        type="range"
        min={0}
        max="100"
        value={volume}
        onChange={handleChange}
        className="range range-sm"
      />
    </div>
  );
}
