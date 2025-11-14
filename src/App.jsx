import { useRef, useState } from "react";
import NewYearCelebration from "./NewYearCelebration";

export default function App() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
      setPlaying(false);   // set EXACT state
    } else {
      audioRef.current.play().then(() => {
        setPlaying(true);  // set ONLY when it starts
      });
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      
      <audio ref={audioRef} src="/paattu.mp3" loop />
      
      <button
        onClick={toggleMusic}
        className="text-black font-bold mt-4 p-3 rounded-lg bg-purple-700"
      >
        {playing ? "Pause Music 🎵" : "Play Music 🎵"}
      </button>

      <NewYearCelebration />
    </div>
  );
}

