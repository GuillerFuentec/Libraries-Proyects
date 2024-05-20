import { useEffect, useRef, createRef, useReducer } from "react";
import Button from "../components/Button";
import { displayReducer } from "./DrumMachine";

export const songs = [
  { song: "LOZ_Arrow_Boomerang.mp3", name: "Arrow_Boomerang" },
  { song: "LOZ_Bomb_Blow.mp3", name: "Bomb_Blow" },
  { song: "LOZ_Bomb_Drop.mp3", name: "" },
  { song: "LOZ_Candle.mp3", name: "Bomb_Drop" },
  { song: "LOZ_MagicalRod.mp3", name: "MagicalRod" },
  { song: "LOZ_Shield.mp3", name: "" },
  { song: "LOZ_Sword_Combined.mp3", name: "Shield" },
  { song: "LOZ_Sword_Shoot.mp3", name: "Sword_Shoot" },
  { song: "LOZ_Sword_Slash.mp3", name: "Sword_Slash" },
];
const bank = [1, 2];

export default function ButtonGeneretor() {
  const letters = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const [state, dispatch] = useReducer(displayReducer, "");
  const audioRefs = useRef([]);

  const handleClick = (index) => {
    if (letters[index]) {
      audioRefs.current[index].current
        .play()
        .then(() => {
          let songName = songs[index].name;
          console.log(songName); // Imprime el name del archivo de audio

          dispatch({ type: "SET/DISPLAY", payload: songName });
        })
        .catch((error) =>
          console.error("Error al reproducir el audio:", error)
        );
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const index = letters.indexOf(e.key.toUpperCase());
      if (index !== -1 && audioRefs.current[index]) {
        const audioElement = audioRefs.current[index].current;
  
        if (audioElement) {
          const parentElement = audioElement.parentElement;
      
          audioElement.onplay = () => {
            parentElement.classList.add('parent-active');
          };
      
          audioElement.onended = () => {
            setTimeout(() => {
              parentElement.classList.remove('parent-active');
            }, 400); // 400ms es la duración de tu animación
          };
  
          audioElement
            .play()
            .then(() => {
              let songName = songs[index].name;
              console.log(songName); // Imprime el name del archivo de audio
  
              dispatch({ type: "SET/DISPLAY", payload: songName });
            })
            .catch((error) =>
              console.error("Error al reproducir el audio:", error)
            );
        }
      }
    };
  
    window.addEventListener("keydown", handleKeyDown);
  
    return () => window.removeEventListener("keydown", handleKeyDown);
  });
  

  return (
    <>
      {songs.map((item, index) => {
        if (!audioRefs.current[index]) {
          audioRefs.current[index] = createRef();
        }

        return (
          <Button
            id={songs[index].song}
            key={index}
            onClick={() => handleClick(index)}
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
