
export const getMusica = async () => {

  try {
    const response = await fetch("https://v1.nocodeapi.com/uluski/spotify/bHMEfTtGdxlzystR/search?q=drake%2Cslowdive&type=track&perPage=10&page=1"
    );
    const data = await response.json();
    console.log("Respuesta de api",data);
   return data.tracks.items;
  } catch (error) {
    console.error("Error fetching music:", error);
    throw error;
  }
};