import React, {Component} from 'react';
import './App.css';
//import * as serviceWorker from './serviceWorker';
// import firebase from './Firebase';
//import Auth from './Auth';
import Login from './Login';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import PrivateRoute from './PrivateRoute';

class App extends Component {
	render () {
		return (
			<Router>
				<div  className="App">
					<Route exact path="/" component={Login} />
					<PrivateRoute path="/dashboard" component={HomeContainer} />
				</div>
			</Router>
        );
    }
}
export default App;