import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import firebase from './Firebase';
import withFirebaseAuth from 'react-with-firebase-auth';

class PrivateRoute extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      let redirectTo = {pathname: "/", state: { from: this.props.location }};
      return <Redirect to={redirectTo} />
    }
    return (
      <Route {...this.props}></Route>
    );
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
})(PrivateRoute);