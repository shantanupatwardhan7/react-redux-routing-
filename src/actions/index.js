import axios from 'axios';
const URL='http://reduxblog.herokuapp.com/api';
export const FETCH_POSTS = 'fetch_posts';
export const CREATE_POST = 'create_post';
export const FETCH_POST = 'fetch_post';
export const DELETE_POST = 'delete_post';

export function fetchPosts(){
 	const request = axios.get(`${URL}/posts?key=PETER123456`);
 	console.log(request,"<---------------");
 	return {
 		type:FETCH_POSTS ,
 		payload:request
 	} 
}
export function createPost(values, callback){
 	const request = axios.post(`${URL}/posts?key=PETER123456`,values).then(()=>{
 		callback()
 	});
 	console.log(request,"<---------------");
 	return {
 		type:CREATE_POST ,
 		payload:request
 	} 
}
export function fetchPost(id){
 	const request = axios.get(`${URL}/posts/${id}?key=PETER123456`);
 	return {
 		type:FETCH_POST ,
 		payload:request
 	} 
}
export function deletePost(id,callback){
const request = axios.delete(`${URL}/posts/${id}?key=PETER123456`).then(()=>{
	callback();
});
 	return {
 		type:DELETE_POST ,
 		payload:request
 	}	
}