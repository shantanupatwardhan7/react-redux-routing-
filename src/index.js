import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter,Route} from 'react-router-dom';
import PostsIndex from './components/posts-index';
import promise from 'redux-promise';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

class hello extends Component {
	render(){
		return <div>Hello</div>
	}
}
class bye extends Component {
	render(){
		return <div>bye</div>
	}
}


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
 	
 		<BrowserRouter>
 		<div>
 		<Route path="/hello" component={PostsIndex}/>
 		<Route path="/bye" component={bye}/>
 		</div>
 		</BrowserRouter>
 	
  </Provider>
  , document.querySelector('.container'));
