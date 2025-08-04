import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ArtistInfo(){
    const router = useRouter();
    const {id} = router.query;

    const [artistInfo,setArtistInfo] = useState ();
    const [tracks,setTracks] = useState([]);

    useEffect(() => {
        if(id){
            fetchArtistData(id);
        }
    },[id]);

    const fetchArtistData = async(artistid)=>{
      try {
        const res = await fetch(`https://v1.nocodeapi.com/<user>/spotify/<token>/artists/${artistid}`);
        const data = await res.json()
        setArtistInfo(data);

        const trackRes = await fetch(`https://v1.nocodeapi.com/uluski/spotify/MYwqpRjOnzIMWfHF/artists/${artistid}/top-tracks?market=US`);
        const trackData = await trackRes.json();
        setTracks(trackData.tracks);
      } catch (error) {
        console.error("error al obtener info",error);
      }
    }
    return(
        <section className="w-3/4 h-full flex flex-col overflow-y-auto bg-neutral-900 rounded-xl p-4 text-white">
            <div className="w-full h-[30%]">
                {artistInfo && <h1 className="font-bold text-4xl">{artistInfo.name}</h1>}
            </div>
    
            <div className="w-full h-[70%] flex flex-col align-start">
                <div className="relative">
                  <button className="absolute top-28 right-2 bg-green-500 rounded-full w-10 h-10 cursor-pointer">
                                        <img src="/play.svg" alt="play" className="w-4 h-4 absolute left-3.5 bottom-3" />
                                    </button>
                </div>
                <h1>Popular</h1>
                {tracks.map((track)=>(
                    <div className="flex flex-row g-2">
                    <div className="text-gray-400 font-medium text-sm">1</div>
                    <div>
                        <img src={artistInfo.images?.[0]?.url} alt={artistInfo.name} width={25} height={25}/>
                    </div>
                    <div className="font-medium text-lg font-semibold">When the Sun Hits</div>
                </div>
            ))}
                
            </div>
        </section>
    )
}
