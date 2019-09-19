import React, {Component} from 'react';
import firebase from './Firebase';
import NotesContainer from './NotesContainer';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Route, Link } from 'react-router-dom';

class HomeContainer extends Component {
	render () {
		const { user, signOut } = this.props;
		return (
            <section className="homeContainer">
	            <header>
	            	{user ? <button className="signOutBtn" onClick={signOut}>Sign out</button> : <Link to="/login">Sign in</Link>}
	            </header>
				<Route path={this.props.match.path} component={NotesContainer} />
			</section>
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
