import { useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";

const Song = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    setIsPlaying(!isPlaying);
    if (isPlaying) {
      audio?.pause();
    } else {
      audio?.play();
    }
  };

  // useEffect(() => {
  //   // Play the song on page load
  //   if (audioRef.current) {
  //     (audioRef.current as HTMLMediaElement).play().catch((err) => {
  //       console.log("Autoplay prevented:", err);
  //     });
  //   }
  // }, []);
  return (
    <div
    // className="fixed bottom-0 left-0 z-10 mx-[50%] w-full -translate-x-[50%]"
    // style={{ height: "1vh", maxWidth: "700px" }}
    >
      {/* <div className="absolute right-0 bottom-0 p-2 sm:p-4"> */}
      <audio ref={audioRef} loop>
        <source src="/wedding-song.mp3" type="audio/mpeg" />
      </audio>
      <button
        onClick={togglePlay}
        className="flex cursor-pointer flex-col items-center gap-1 text-sm"
      >
        {isPlaying ? (
          <div>
            <FaPause size={25} />
          </div>
        ) : (
          <div>
            <FaPlay size={23} />
          </div>
        )}
        <p className="hidden sm:block">Song</p>
      </button>
    </div>
    // </div>
    // <div>
    //   <audio ref={audioRef} controls loop className="mt-2">
    //     <source src="/wedding-song.mp3" type="audio/mp3" />
    //     Your browser does not support the audio element.
    //   </audio>

    //   <button
    //     className={`rounded-xl transition-transform duration-700 ease-in-out ${isPlaying ? "animate-spin-slow" : ""}`}
    //     style={{ fontSize: "36px" }}
    //     onClick={togglePlay}
    //   >
    //     {isPlaying ? <Pause /> : <PlayCircle />}
    //   </button>
    // </div>
  );
};

export default Song;
