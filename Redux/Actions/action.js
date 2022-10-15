import { ACTION_TYPE} from '../types';
import axios from 'axios';
const KEY = "f15afd7ae1d0b5ff16ce11ce965e05fb"

/*/Action Movies/*/
const API = `https://api.themoviedb.org/3/movie/latest?api_key=${KEY}&language=en-US`
/*/Action Movies/*/

export function actionMovies() {

     const request =  axios.get(API);
 return dispatch =>{
    return request.then((data)=>{
        dispatch({
            type:ACTION_TYPE,
            payload:data,
        })
    })
 }

    
}