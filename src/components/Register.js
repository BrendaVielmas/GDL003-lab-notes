import React, { Component } from 'react';
import 'firebase/auth';
import { Link } from 'react-router-dom';
import withFirebaseAuth from 'react-with-firebase-auth';

class Register extends Component {
    state = { redirectToReferrer: false };

    render() {
       
            return (
                <section className="login">
                    <div class="container">
                        <section id="content">
                            <form action="">
                                <h1  className="textInLogin">Register in Not-E with:</h1>
                                <div className="btnSection">
                                    <div onClick={signInWithFacebook} class="social-button facebook-button"></div>
                                    <div   class="social-button google-button"></div>
                                </div>
                                <div><h1 className="textInLogin">Or</h1></div>
                                <div>
                                    <input type="text" placeholder="Enter an Email Address" required="" id="username" />
                                </div>
                                <div>
                                    <input type="password" placeholder="Enter a Password" required="" id="password" />
                                </div>
                                <div>
                                    <input type="submit" value="Register" />
                                    <Link to="/reset-password">Lost your password?</Link>
                                    <Link to="/">Login</Link>
                                </div>
                            </form>
                        </section>
                    </div>
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
    })(Register);