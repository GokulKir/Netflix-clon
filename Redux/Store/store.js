
import { createStore,combineReducers } from 'redux'

import APIReducer  from '../Reduc/reducer';


const store = createStore(APIReducer)


export default store



