import { useEffect, useRef, createRef } from "react";
import Button from "../components/Button";

const songs = [
  { song: "LOZ_Arrow_Boomerang.mp3" },
  { song: "LOZ_Bomb_Blow.mp3" },
  { song: "LOZ_Bomb_Drop.mp3" },
  { song: "LOZ_Candle.mp3" },
  { song: "LOZ_MagicalRod.mp3" },
  { song: "LOZ_Shield.mp3" },
  { song: "LOZ_Sword_Combined.mp3" },
  { song: "LOZ_Sword_Shoot.mp3" },
  { song: "LOZ_Sword_Slash.mp3" },
];
const bank = [1, 2];

export default function ButtonGeneretor() {

  const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
  const audioRefs = useRef([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const index = letters.indexOf(e.key.toUpperCase());
      if (index !== -1 && audioRefs.current[index]) {
        audioRefs.current[index].current
          .play()
          .catch((error) =>
            console.error("Error al reproducir el audio:", error)
          );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <>
      {songs.map((_item, index) => {
        if (!audioRefs.current[index]) {
          audioRefs.current[index] = createRef();
        }

        return (
          <Button
            id={songs[index].song}
            key={index}
          >
            <audio
              id={letters[index]}
              className="clip"
              src={`../media/audio/music/zelda/bank${bank[0]}/${songs[index].song}`}
              ref={audioRefs.current[index]}
              muted={false}
            />
            {letters[index]}
          </Button>
        );
      })}
    </>
  );
}
