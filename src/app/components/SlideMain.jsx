import Link from "next/link";
import SongCard from "./SongCard";

const SlideMain = ({ songs, title }) => {
  return (
    <div className="pb-10 space-y-2 text-white">
      <Link href="/" className="flex pl-3 text-2xl font-bold hover:underline">
        {title}
      </Link>

      <div className="flex overflow-x-auto scroll-smooth scrollbar-none">
        {songs.map((song) => {
          return (
            <SongCard
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist}
              image={song.image}
              src={song.src}
            />
          );
        })}
      </div>
    </div>
  );
};

export default SlideMain;
