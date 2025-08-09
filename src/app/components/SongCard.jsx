"use client";

import Image from "next/image";
import Link from "next/link";
import playerStore from "../store/playerStore";
import play from "../../../public/play-button.svg";
import pause from "../../../public/pause-button.svg";

const SongCard = ({ id, title, artist, image, src }) => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    playerStore((state) => state);

  const handleClick = async () => {
    if (currentMusic.id !== id) {
      await setCurrentMusic({ src: src, id: id });
      setIsPlaying(true);
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const isPlayingMusic = isPlaying && currentMusic.id === id;

  return (
    <div
      href="/"
      className="group flex flex-col rounded-md shrink-0 p-3 space-y-2 hover:bg-neutral-800 cursor-pointer"
    >
      <div className="relative">
        <Image
          src={image}
          alt={`${artist}'s song image`}
          width={160}
          height={160}
          className="w-[160px] h-[160px] rounded-md"
        />

        <button
          className="duration-300 transition-all transition-discrete not-group-hover:opacity-0 group-hover:-translate-y-3 cursor-pointer absolute bottom-0 right-0 pr-1.5 hover:scale-105"
          onClick={handleClick}
        >
          <Image
            src={isPlayingMusic ? pause : play}
            alt="Play button"
            width={46}
            height={46}
            className="w-[46px] h-[46px]"
          ></Image>
        </button>
      </div>

      <div className="items-start flex flex-col space-y-1">
        <Link
          href="/"
          className="font-medium text-base hover:underline text-white w-40 truncate"
        >
          {title}
        </Link>
        <Link
          href="/"
          className="font-normal text-sm hover:underline text-neutral-400 w-40 truncate"
        >
          {artist}
        </Link>
      </div>
    </div>
  );
};

export default SongCard;
