import React, {Component} from 'react';
import './App.css';
import Login from './Login';
import Register from './Register';
import ResetPassword from './ResetPassword';
import { BrowserRouter as Router, Route, HashRouter, Switch } from 'react-router-dom';
import HomeContainer from './HomeContainer';
import PrivateRoute from './PrivateRoute';
class App extends Component {
	render () {
		return (
			<HashRouter>
				<Switch>
					<Router>
						<div className="App">
							<Route exact path="/" component={Login} />
							<Route path="/register" component={Register} />
							<Route path="/reset-password" component={ResetPassword} />
							<PrivateRoute path="/dashboard" component={HomeContainer} />
						</div>
					</Router>
				</Switch>
			</HashRouter>
        );
    }
}
export default App;