import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetchPost,deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostShow extends Component{
	componentDidMount(){ 
		const { id } = this.props.match.params;
		this.props.fetchPost(id);
	}
	onDeletePost(){
		const { id } = this.props.match.params;
		this.props.deletePost(id,()=>{
			this.props.history.push('/');
		});	
	}
	render(){
		const {post} = this.props;
		if(!post){
			return <div>Loading..</div>
		}
		return(
			<div>
			<Link to="/">Back to index</Link>
			<button className="btn btn-danger pull-xs-right"
			onClick={this.onDeletePost.bind(this)}
			>
			Delete post	
			</button>
			
				<h3>{post.title}</h3>
				<h6>Categories : {post.categories}</h6>
				<h6>{post.content}</h6>
			</div>
		);
	}
}
function mapStateToProps({posts},ownProps){
	return {
		post:posts[ownProps.match.params.id]
	}
}
export default connect(mapStateToProps,{fetchPost,deletePost})(PostShow)