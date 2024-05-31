import { songs, bank, letters } from "../utils/data/data";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";

export default function Audio({ index,...props }) {
  const audioRefs = useRef([]);
  const dispatch = useDispatch();
  // handle Volume
  const volume = useSelector((state) => state.volume);
  // handle power
  const muted = useSelector((state) => state.power);
  const { state, _payload } = muted;
  // Handle Bank
  const changeBank = useSelector((state) => state.bank);
  const { _state = false } = changeBank;
  const numberBank = state ? 1 : 0;

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
    <audio
      {...props}
      id={letters[index]}
      className="clip"
      src={`../media/audio/music/zelda/bank_${bank[numberBank]}/${songs[index].song}`}
      ref={audioRefs.current[index]}
      muted={state}
    />
  );
}
