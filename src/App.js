import React, {Component} from 'react';
import './App.css';
//import * as serviceWorker from './serviceWorker';
//import * as firebase from 'firebase';
//import Auth from './Auth';
import Login from "./Login";


  // Initialize Firebase
  //firebase.initializeApp(firebaseConfig);

class App extends Component {
	// constructor () {
	// 	super ()
	// 	this.state = {nota: "cargando nota"}
	// }
	// componentDidMount() {
	// 	const docRef = firebase.firestore().collection("prueba").doc("c8JSPplRHnnYqUREqbqm").get().then((doc)=>{
	// 		this.setState({
	// 			nota: doc.data().nota
	// 		})
	// 	})
	// }
    render () {
        return (
            <div className="App">
            	{/* <p>{this.state.nota}</p> */}
               <Login />
            </div>
                       
        );
    }
}
export default App;