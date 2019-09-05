import React, {Component} from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

class Auth extends Component {
	constructor () {
		super()
		this.createUser = this.createUser.bind(this);
	}
	createUser () {
		let email = "bren@gmaail.com";
		let password = "123456"
		

		firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
			let user = firebase.auth().currentUser;
			console.log(user);
		})
	}
	render (){
        return (
            <div className="Auth">
            <button onClick={this.createUser}>Auth</button>
            </div>
        );
    }
}
export default Auth;