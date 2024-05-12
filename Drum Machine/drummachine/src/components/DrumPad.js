import Button from "./components/Button"


export default function DrumPad() {
  
  return (
    <>
      <div className="grid grid-cols-3 gap-4 w-7/12">
        <Button>Q</Button>
        <Button>W</Button>
        <Button>E</Button>
        <Button>A</Button>
        <Button>S</Button>
        <Button>D</Button>
        <Button>Z</Button>
        <Button>X</Button>
        <Button>C</Button>
      </div>
    </>
  );
}
