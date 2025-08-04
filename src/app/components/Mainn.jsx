"use client";
import { useEffect, useState } from "react";
import { getMusica } from "../services/musicService.js";
export default function Mainn() {
   const [musica, setMusica] = useState({ tracks: [], artists: [] });
   
  useEffect(() => {
    const fetchMusica = async () => {
      try {
        const musica = await getMusica();
        setMusica(musica);
      } catch (error) {
        console.error("Error al obtener las canciones:", error);
      }
    };

    fetchMusica();
  }, []);

    return (
        <section className="w-3/4 h-full overflow-y-auto bg-neutral-900 rounded-xl p-4 text-white">
            <div className="flex flex-col align-center p-3 " >
                <h1 className="text-2xl font-bold mb-4 ">
                    Canciones del momento
                </h1>
                <div className="flex flex-row items-start justify-start text-start w-[200%]  ">
                    {musica.tracks.map((track, index) => (

                        <div key={index} className="flex flex-col p-2 w-48">
                            <div className="bg-neutral-700 rounded-md w-40 h-40">
                                <div className="relative">
                                    <img src={track.album.images[0]?.url} alt={track.name} className="w-full rounded h-full w-full" />
                                    <button className="absolute top-28 right-2 bg-green-500 rounded-full w-10 h-10 cursor-pointer">
                                        <img src="/play.svg" alt="play" className="w-4 h-4 absolute left-3.5 bottom-3" />
                                    </button>
                                </div>
                            </div>
                            <h2 className="font-medium text-lg">{track.name}</h2>
                            <h5 className="text-gray-400 font-medium text-sm">{track.album.artists[0].name}</h5>
                            {/*
                            <audio src={track.preview_url} controls className=""></audio>
                              */}
                        </div>
                    ))}


                </div>

            </div>
         <div className="flex flex-col align-center p-3">
                <h1 className="text-2xl font-bold mb-4">
                    Artistas
                </h1>
                <div className="flex flex-row items-start justify-start text-start w-[200%] p-2 g-2">
                    {musica.artists.map((artist, index) => (

                        <div key={index} className="flex flex-col p-2 w-48">

                            <div className="rounded-full w-40 h-40">
                                <div className="w-full h-full">
                                    <img src={artist.images[0]?.url} alt={artist.name} className="cursor-pointer rounded-full w-full h-full object-cover" />

                                </div>
                                 <h2 className="font-medium py-2">{artist.name}</h2>
                                <h5 className="font-medium text-gray-400 text-sm">Artista</h5>
                            </div>

                        </div>
                    ))}


                </div>

            </div>
         
        </section>
    )
}