import axios from 'axios';
 const API_KEY = "f15afd7ae1d0b5ff16ce11ce965e05fb";
 export const POPULAR_MOVIES = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
export const  URLS = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
export const POPULAR_W = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
export const NOW_PLAYING_MOVIES = axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`)
// export const GET_MOVIE_DETAILES = axios.get(`https://api.themoviedb.org/3/movie/{movie_id}?api_key=${API_KEY}&language=en-US`)
