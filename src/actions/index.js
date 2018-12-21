import axios from 'axios';
const URL='http://reduxblog.herokuapp.com/api';
export const FETCH_POSTS = 'fetch_posts';

export function fetchPosts(){
 	const request = axios.get(`${URL}/posts?key=PETER123456`);
 	console.log(request,"<---------------");
 	return {
 		type:FETCH_POSTS ,
 		payload:request
 	} 
}