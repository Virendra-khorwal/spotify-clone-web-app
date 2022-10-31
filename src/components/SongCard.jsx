import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import PlayPause from "./PlayPause";
import { playPause, setActiveSong } from "../redux/features/playerSlice";

const SongCard = ({ song,isPlaying,activeSong, i, data }) => {

  const handlePauseClick = () => {

  }

  const handlePlayClick = () => {

  }

//   FIX Hover Effect not working.

  return (
    <div className="bg-neutral p-4 rounded flex flex-col cursor-pointer animate-slideup">
      <div className="overflow-hidden bg-base-100 rounded relative">
        <div
          className={`absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 group-hover:flex ${
            activeSong?.title === song.title
              ? "flex bg-black bg-opacity-70"
              : "hidden"
          }`}
        >
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images.coverart} alt="cover art" />
      </div>
      <div className="mt-2">
        <h1 className="font-bold text-xl truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </h1>
        <p>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : "/top-artists"
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;
