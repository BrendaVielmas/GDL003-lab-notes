import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './Firebase';
import 'firebase/auth';
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

        const { user } = this.props;
        if (user) {
            return <Redirect to="/dashboard" />
        } else {
            return (
                <section className="login">
                    <div class="container">
	<section id="content">
		<form action="">
			<h1  className="textInLogin">Save notes, be Not-E</h1>
            <div className="btnSection">
                <div class="social-button facebook-button"></div>
                <div  onClick={this.signInWithGoogle} class="social-button google-button"></div>
            </div>
            
			<div>
				<input type="text" placeholder="Username" required="" id="username" />
			</div>
			<div>
				<input type="password" placeholder="Password" required="" id="password" />
			</div>
			<div>
				<input type="submit" value="Log in" />
				<a href="#">Lost your password?</a>
				<a href="#">Register</a>
			</div>
		</form>
		
	</section>
</div>
                    {/* <button class="btn" onClick={this.signInWithFacebook}>Sign in with Facebook</button>  */}
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