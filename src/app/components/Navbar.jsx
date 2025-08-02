"use client"
import Link from "next/link";
import React, { useState } from "react";

export default function Navbar() {
    const [menuOpened,setMenuOpened] = useState(false);
    
    return (
        <nav className="w-full h-16 bg-black flex items-center justify-between px-4">

            <div className="flex items-center space-x-4">
                <div>
                    <Link href="/">
                        <img src="/spotifyg.svg" alt="Spotify" width={40} height={40} />
                    </Link>
                </div>
                <div className="hidden md:flex rounded-full bg-neutral-950 p-4 ">

                    <Link href="/">
                        <img src="/home.svg" alt="Return" className="fill-white filter invert-[70%] " width={25} height={25} />
                    </Link>
                </div>
                <div className="hidden md:flex pr-70 py-3 bg-neutral-800 rounded-full flex items-center justify-center text-center ">
                    <button className="ml-3 flex items-center justify-center h-full  ">
                        <img src="/search.svg" alt="Search" width={28} height={25} className="fill-white filter invert-[70%] " />
                        <div>
                            <div className="pl-4">
                                <input type="text" placeholder="¿Que quieres reproducir?" className="text-neutral-300 flex items-center outline-none"/>
                            </div>
                            
                        </div>
                    </button>
                </div>
            </div>

            <div className="flex items-center justify-center gap-x-4 hidden md:flex">
                <div className="text-neutral-400 font-semibold">Registrate</div>
                <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                    Iniciar Sesión
                </button>
            </div>
            
           <div className="md:hidden">
            <button className="cursor-pointer" onClick={() => setMenuOpened(!menuOpened)}>
                <img src="/hamburger.svg" alt="Return" className="fill-white filter invert-[100%] " width={40} height={40}/>
                
            </button>
           </div>
          {menuOpened && (
        <div className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col p-6 z-50">
    
          <div className="flex justify-end">
            <button className="cursor-pointer" onClick={() => setMenuOpened(false)}>
              <img src="/close.svg" alt="cerrar" className="fill-white filter invert-[100%]" width={30} height={30}/>
            </button>
          </div>

          <div className="mt-10 space-y-6 text-lg font-semibold">
            <a href="#" className="block">Iniciar sesión</a>
            <a href="#" className="block">Registrarse</a>
          </div>
        </div>
      )}
        </nav>
    );
}