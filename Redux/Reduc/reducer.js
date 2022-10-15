import { ACTION_TYPE} from '../types';



export  const APIReducer = (state = {},action) =>{
   switch (action.type) {
    case ACTION_TYPE:
      return {
           ...state,
           APIS:action.payload
      }   
     
   
    default:
        return state
   }
}

export default APIReducer;
