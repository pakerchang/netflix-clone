const API_KEY = "f48c83f1a2f413186327be34e394dd5c";

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=zh-TW`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=zh-TW&with_networks=213&with_crew&with_people&include_video=true`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=zh-TW`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&language=zh-TW&with_genres=99`,
};

export default requests;


