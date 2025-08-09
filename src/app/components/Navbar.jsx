import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full h-18 bg-black flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <div>
          <Link href="/">
            <Image src="/spotifyg.svg" alt="Spotify" width={40} height={40} />
          </Link>
        </div>
        <div className="rounded-full bg-neutral-950 p-3">
          <Link href="/">
            <Image
              src="/home.svg"
              alt="Return"
              className="fill-white filter invert-[70%]"
              width={25}
              height={25}
            />
          </Link>
        </div>
        <div className="pr-12 py-3 bg-neutral-800 rounded-full flex items-center justify-center text-center">
          <div className="ml-3 flex items-center justify-center h-full">
            <Image
              src="/search.svg"
              alt="Search"
              width={25}
              height={25}
              className="fill-white filter invert-[70%] "
            />
            <div>
              <div className="pl-4">
                <input
                  type="search"
                  placeholder="¿Que quieres reproducir?"
                  className="text-neutral-300 flex items-center outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-x-4">
        <Link href="" className="text-neutral-400 font-semibold">
          Registrate
        </Link>
        <Link
          href=""
          className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Iniciar Sesion
        </Link>
      </div>
    </nav>
  );
};

export { Navbar };
