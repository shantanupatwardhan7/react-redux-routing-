import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';
import {createPost} from '../actions';
import {Link} from 'react-router-dom';

class PostNew extends Component{
	
	renderField(field){
		const {meta:{touched,error}} = field;
		const className = `form-group ${touched && error ? 'has-danger':''}`;
		return(
			<div className={className}>
			 	<label>{field.label}</label>
				<input 
				className="form-control"
				type="text"
				{...field.input}

				/>
				<div className="text-help">
				{field.meta.touched ? field.meta.error : ''}
				</div>
			</div> 
		);
	}
	onSubmit(values){
		this.props.createPost(values,()=>{
			this.props.history.push('/');
		});
		console.log("inside on submit",values);
	}

	
	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
				label="Title"
				name="title"
				component={this.renderField}
				/>
				<Field
				label="Categories"
				name="categories"
				component={this.renderField}
				/>
				<Field
				label="Post content"
				name="content"
				component={this.renderField}
				/>
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link className="btn btn-danger" to="/">Cancel</Link>
			</form>
			
	 	);
	}
}

function validate(values){
		const errors = {};	
		if(!values.title){
			errors.title = "please provide the titile";
		}
		if(!values.categories){
			errors.categories = "please provide the categories";
		}
		if(!values.content){
			errors.content = "please provide the content";
		}
		return errors;
}

export default reduxForm({
	validate,
	form:'PostsNewForm'
})(
	connect(null,{createPost})(PostNew)
);
