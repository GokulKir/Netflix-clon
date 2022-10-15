const API_KEY = "f15afd7ae1d0b5ff16ce11ce965e05fb";

const GET_LETEST = `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`;
const GET_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
const  GET_RATE_MOVIES = `https://api.themoviedb.org/3/movie/{movie_id}/rating?api_key=${API_KEY}`
const GET_TRENDING_MOVIES = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
export  default{GET_LETEST,GET_TOP_RATED,GET_RATE_MOVIES,GET_TRENDING_MOVIES} 