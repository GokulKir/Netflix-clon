import axios from "axios";

import {TMDB_BASE_URL} from './Urls';

const instance = axios.create({
    baseURL:TMDB_BASE_URL
 
  });

export default instance;