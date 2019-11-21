import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './Firebase';
import 'firebase/auth';
import { Redirect, Link } from 'react-router-dom';
import Logo from "./images/note.png";


class Login extends Component {
    state = { redirectToReferrer: false };

    render() {
        const {
            user,
            signInWithFacebook,
            signInWithGoogle
        } = this.props;
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        if (redirectToReferrer) return <Redirect to={from} />;
        if (user) {
            return <Redirect to="/dashboard" />
        } else {
            return (
                <section className="login">
                       <div><img className="loginImg" src={Logo}/></div> 
                    <div class="container">
                        <section id="content">
                            <form action="">
                                <h1  className="textInLogin">Login to Not-E with:</h1>
                                <div className="btnSection">
                                    <div onClick={signInWithFacebook} class="social-button facebook-button"></div>
                                    <div onClick={signInWithGoogle} class="social-button google-button"></div>
                                </div>
                                <div><h1 className="textInLogin">Or</h1></div>
                                <div>
                                    <input type="text" placeholder="Write your Email Address" required="" id="username" />
                                </div>
                                <div>
                                    <input type="password" placeholder="Write your Password" required="" id="password" />
                                </div>
                                <div>
                                    <input type="submit" value="Log in" />
                                    <Link to="/reset-password">Lost your password?</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                            </form>
                        </section>
                    </div>
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