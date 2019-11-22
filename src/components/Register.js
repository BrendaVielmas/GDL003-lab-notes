import React, { Component } from 'react';
import 'firebase/auth';
import withFirebaseAuth from 'react-with-firebase-auth';
import { Redirect, Link } from 'react-router-dom';
import Logo from "./images/note.png";
import firebase from './Firebase';

class Register extends Component {
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
            createUserWithEmailAndPassword
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
                                <h1  className="textInLogin">Register in Not-E with:</h1>
                                <div className="btnSection">
                                    <div onClick={signInWithFacebook} className="social-button facebook-button"></div>
                                    <div onClick={signInWithGoogle} className="social-button google-button"></div>
                                </div>
                                <div><h1 className="textInLogin">Or</h1></div>
                                <div>
                                    <input type="text" onChange={this.myChangeHandler} placeholder="Enter an Email Address" required="" id="username"></input>
                                </div>
                                <div>
                                    <input type="password" onChange={this.myChangeHandler2} placeholder="Enter a Password" required="" id="password"></input>
                                </div>
                                <div>
                                    <button className="register" onClick={() =>{ createUserWithEmailAndPassword(this.state.email, this.state.password)}}>Register</button>
                                    <Link to="/reset-password">Lost your password?</Link>
                                    <Link to="/">Login</Link>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            )} 
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