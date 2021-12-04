const API_KEY = "3baab1aad5acf94e1117188df686f466";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchShooting: `/discover/tv?api_key=${API_KEY}&with_networks=21`,
  fetchSweet: `/discover/tv?api_key=${API_KEY}&with_networks=26`,
  fetchScared: `/discover/tv?api_key=${API_KEY}&with_networks=30`,
  fetchGhost: `/discover/tv?api_key=${API_KEY}&with_networks=35`,
  fetchGH: `/discover/tv?api_key=${API_KEY}&with_networks=36`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchDramasolo: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
  fetchHooly: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
};
export default requests;
