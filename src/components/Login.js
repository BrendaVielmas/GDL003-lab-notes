import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import firebase from './Firebase';
import 'firebase/auth';
import { Redirect, Link } from 'react-router-dom';
import Logo from "./images/note.png";


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            email: '', 
            password: ''};
      }
    state = { redirectToReferrer: false };
    myChangeHandler = (event) => {
        this.setState({email: event.target.value});
      }
    myChangeHandler2 = (event) => { 
    this.setState({password: event.target.value});
    }
    render() {
        const {
            user,
            signInWithFacebook,
            signInWithGoogle,
            signInWithEmailAndPassword
        } = this.props;
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
        if (redirectToReferrer) return <Redirect to={from} />;
        if (user) {
            return <Redirect to="/dashboard" />
        } else {
            return (
                <section className="login">
                       <img className="loginImg"  alt="" src={Logo}/> 
                    <div className="container">
                        <section id="content">
                            <div className="form">
                                <h1  className="textInLogin">Login to Not-E with:</h1>
                                <div className="btnSection">
                                    <div onClick={signInWithFacebook} className="social-button facebook-button"></div>
                                    <div onClick={signInWithGoogle} className="social-button google-button"></div>
                                </div>
                                <div><h1 className="textInLogin">Or</h1></div>
                                <div>
                                    <input type="text" onChange={this.myChangeHandler} placeholder="Write your Email Address" required="" id="username" />
                                </div>
                                <div>
                                    <input type="password" onChange={this.myChangeHandler2} placeholder="Write your Password" required="" id="password" />
                                </div>
                                <div>
                                    <button className="logIn" onClick={() =>{ signInWithEmailAndPassword(this.state.email, this.state.password)}}>Log in</button>
                                    <Link to="/reset-password">Lost your password?</Link>
                                    <Link to="/register">Register</Link>
                                </div>
                            </div>
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