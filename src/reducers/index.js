import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import PostsFetch from './reducer_fetch_posts';

const rootReducer = combineReducers({
  posts:PostsFetch,
  form:formReducer
});

export default rootReducer;