"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import playerStore from "../store/playerStore";
import play from "../../../public/play-white-button.svg";
import pause from "../../../public/pause-white-button.svg";

const Player = () => {
  const { isPlaying, setIsPlaying, currentMusic, setCurrentMusic } =
    playerStore((state) => state);

  const audioRef = useRef();

  useEffect(() => {
    isPlaying ? audioRef.current.play() : audioRef.current.pause();
  }, [isPlaying]);

  useEffect(() => {
    const { src } = currentMusic;
    if (src) {
      audioRef.current.src = src;
      audioRef.current.play();
    }
  }, [currentMusic]);

  const handleClick = () => {
    if (currentMusic.id) {
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="w-full h-24 bg-black flex items-center justify-between px-4">
      <div className=""></div>
      <div className="flex items-center justify-center space-x-6">
        <button className="cursor-pointer hover:scale-105">
          <Image
            src="/shuffle-button.svg"
            alt="Shuffle button"
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
          />
        </button>
        <button className="cursor-pointer hover:scale-105">
          <Image
            src="/previous-button.svg"
            alt="Previous button"
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
          />
        </button>
        <button
          className="cursor-pointer hover:scale-105"
          onClick={handleClick}
        >
          <Image
            src={isPlaying ? pause : play}
            alt="Player button"
            className="w-[34px] h-[34px]"
          />
        </button>
        <button className="cursor-pointer hover:scale-105">
          <Image
            src="/next-button.svg"
            alt="Next button"
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
          />
        </button>
        <button className="cursor-pointer hover:scale-105">
          <Image
            src="/repeat-button.svg"
            alt="Repeat button"
            width={16}
            height={16}
            className="w-[16px] h-[16px]"
          />
        </button>
      </div>
      <div></div>

      <audio ref={audioRef}></audio>
    </div>
  );
};

export default Player;
