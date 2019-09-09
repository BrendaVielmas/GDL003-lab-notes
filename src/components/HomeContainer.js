import React, {Component} from 'react';
import firebase from './Firebase';
import NotesContainer from './NotesContainer';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Link } from 'react-router-dom';

class HomeContainer extends Component {
	render () {
		const { user, signOut } = this.props;
		return (
            <div>
	            <header>
	            	{user ? <button onClick={signOut}>Sign out</button> : <Link to="/login">Sign in</Link>}
	            </header>
				<NotesContainer />
			</div>
		)
	}
}
const firebaseAppAuth = firebase.auth();
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
    facebookProvider : new firebase.auth.FacebookAuthProvider(),
};
export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(HomeContainer);
