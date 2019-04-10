import axios from "axios";

const api = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	params: {
		api_key: "7e26c6722e5de8a326e71bf65a8b0446",
		language: "en-US"
	}
});

export const movieApi = {
	nowPlaying: () => api.get("movie/now_playing"),
	upcoming: () => api.get("movie/upcoming"),
	popular: () => api.get("movie/popular"),
	movieDetail: (id) => (
		api.get(`movie/${id}`, { params: { append_to_response: "videos" }})
	),
	movieReview: (id) => api.get(`movie/${id}/reviews`),
	search: (term) => api.get("search/movie", {
		params: {
			query: term
		}
	})
}

export const tvApi = {
	topRated: () => api.get("tv/top_rated"),
	popular: () => api.get("tv/popular"),
	airingToday: () => api.get("tv/airing_today"),
	tvDetail: (id) => api.get(`tv/${id}`, {
		params: {
			append_to_response: "videos"
		}
	}),
	tvReview: (id) => api.get(`tv/${id}/reviews`),	
	seasonDetail: (id, seasonNumber) => api.get(`tv/${id}/season/${seasonNumber}`),
	search: (term) => api.get("search/tv", {
		params: {
			query: term
		}
	})
}

export const collectionApi = {
	collectionDetail: (id) => api.get(`collection/${id}`)
};