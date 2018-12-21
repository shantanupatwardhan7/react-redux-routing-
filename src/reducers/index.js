import { combineReducers } from 'redux';
import PostsFetch from './reducer_fetch_posts';

const rootReducer = combineReducers({
  posts:PostsFetch
});

export default rootReducer;
