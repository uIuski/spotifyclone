
export const getMusica = async () => {

  try {
    const response = await fetch("https://v1.nocodeapi.com/uluski/spotify/MYwqpRjOnzIMWfHF/search?q=slowdive&type=album,artist,track&perPage=10&page=1"

);
    const data = await response.json();
    console.log("Respuesta de api",data);
   return {
    tracks:
  data.tracks.items,
  artists:
  data.artists.items

   };
  } catch (error) {
    console.error("Error fetching music:", error);
    throw error;
  }
};