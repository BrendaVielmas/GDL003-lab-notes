import React, { Component } from 'react';
import 'firebase/auth';
import { Link } from 'react-router-dom';

class ResetPassword extends Component {
    state = { redirectToReferrer: false };

    render() {
       
            return (
                <section className="login">
                    <div class="container lostPassword">
                        <section id="content">
                            <form className="resetP" action="">
                                <h1  className="textInLogin">Lost your password?</h1>
                                
                                <div><h1 className="textInLogin">Write your email to change it.</h1></div>
                                <div>
                                    <input type="text" className="inputReset"placeholder="Email Address" required="" id="username" />
                                </div>
                                <div>
                                    <input className="logIn" type="submit" value="Send" />
                                    <Link className="ObjA"to="/register">Register</Link>
                                    <Link className="ObjA" to="/">Login</Link>
                                </div>
                            </form>
                        </section>
                    </div>
                </section>
            )
        }       
    }
    export default ResetPassword;