import { useEffect, useRef, createRef } from "react";
import Button from "../components/Button";
import { songs, bank, letters } from "./data/data";
import { useDispatch, useSelector } from "react-redux";

export default function ButtonGeneretor() {
  const audioRefs = useRef([]);
  const dispatch = useDispatch();
  const volume = useSelector((state) => state.volume);
  const muted = useSelector((state) => state.power);
  const { state, _payload } = muted;

  const playAudio = (index) => {
    const audioElement = audioRefs.current[index]?.current;

    if (audioElement) {
      const parentElement = audioElement.parentElement;

      audioElement.onplay = () => {
        parentElement.classList.add("parent-active");
      };

      audioElement.onended = () => {
        setTimeout(() => {
          parentElement.classList.remove("parent-active");
        }, 400); // 400ms es la duración de tu animación
      };

      audioElement.volume = volume / 100;

      audioElement
        .play()
        .then(() => {
          let songName = songs[index].name;

          dispatch({ type: "SET/DISPLAY", payload: songName });
        })
        .catch((error) =>
          console.error("Error al reproducir el audio:", error)
        );
    }
  };

  const handleClick = (index) => {
    playAudio(index);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const index = letters.indexOf(e.key.toUpperCase());
      if (index !== -1 && audioRefs.current[index]) {
        playAudio(index);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [volume]);

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
              src={`../media/audio/music/zelda/bank_${bank[0]}/${songs[index].song}`}
              ref={audioRefs.current[index]}
              muted={state}
            />
            {letters[index]}
          </Button>
        );
      })}
    </>
  );
}
