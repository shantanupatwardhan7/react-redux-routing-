import React,{Component} from 'react';
import { Field, reduxForm } from 'redux-form';


class PostNew extends Component{
	
	renderField(field){
		return(
			<div>
				<input 
				type="text"
				{...field.input}

				/>
			</div>
		);
	}

	render(){
		return(
		<form>
			<Field
			name="title"
			component={this.renderField}
			/>
		</form>);
	}
}


export default reduxForm({
	form:'PostNewForm'
})(PostNew);
