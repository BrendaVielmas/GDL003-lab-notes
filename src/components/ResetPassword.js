import React, { Component } from 'react';
import 'firebase/auth';
import { Link } from 'react-router-dom';

class ResetPassword extends Component {
    state = { redirectToReferrer: false };

    render() {
       
            return (
                <section className="login">
                    <div class="container">
                        <section id="content">
                            <form action="">
                                <h1  className="textInLogin">Lost your password?</h1>
                                
                                <div><h1 className="textInLogin">Write your email to change it.</h1></div>
                                <div>
                                    <input type="text" placeholder="Email Address" required="" id="username" />
                                </div>
                                <div>
                                    <input type="submit" value="Send" />
                                    <Link to="/register">Register</Link>
                                    <Link to="/">Login</Link>
                                </div>
                            </form>
                        </section>
                    </div>
                </section>
            )
        }       
    }
    export default ResetPassword;