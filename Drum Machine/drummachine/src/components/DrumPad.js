import Button from "./components/Button"

export default function DrumPad() {
    return (
        <div className="pad grid grid-cols-3  gap-x-4 m-4 items-center justify-items-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3" >
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
    )
}