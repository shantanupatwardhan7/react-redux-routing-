import React,{Component} from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions';
import {Link} from 'react-router-dom';

class PostsIndex extends Component{
	componentDidMount(){
		this.props.fetchPosts();
	}

    renderList(){
    	return _.map(this.props.posts, post =>	{
    			return (<li className="list-group-item" key={post.id}>{post.title}</li>);
    	});
    }
	render(){
		return (
		<div>
		 <div className="text-xs-right">
		 	<Link className="btn btn-primary" to="/posts/New">Add post</Link>
		</div>
		 	<h3>List group</h3>

			<ul className="list-group">
			{this.renderList()}
			</ul>
		</div>
		);
	}
}


function mapStateToProps(state){
 	return {
 		posts:state.posts
 	};
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex)