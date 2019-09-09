import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './Firebase';
import 'firebase/auth';
import logo from './images/home.gif';
import Note from './Note';
import { Redirect } from 'react-router-dom';


class Login extends Component {
    state = { redirectToReferrer: false };

    signInWithGoogle = () => {
        const { signInWithGoogle } = this.props
        let currentComponent = this;
        signInWithGoogle().then((result) => {
            if (result.user) {
                currentComponent.setState({ redirectToReferrer: true });
            }
        });
    };

    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        const { user, signOut } = this.props;
        if (user) {
            return <Redirect to="/dashboard" />
        } else {
            return (
                <section className="login">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Please, sign in</p>
                    <button onClick={this.signInWithGoogle}>Sign in with Google</button>
                    <button onClick={this.signInWithFacebook}>Sign in with Facebook</button> 
                </section>
            )
        }       
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
})(Login);