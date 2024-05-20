// import Button from "./components/Button"
import ButtonGeneretor from "./utils/ButtonCreator";

export default function DrumPad() {
  return (
    <div className=" p ad grid grid-cols-3  gap-x-4 m-4 items-center justify-items-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      <ButtonGeneretor/>
    </div>
  );
}
