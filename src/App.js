import React, {Component} from 'react';
import './index.css';
import Greet from "./components/Greet"
import Welcome from "./components/Welcome"
import * as serviceWorker from './serviceWorker';
import Tittle from "./components/Tittle"

class App extends Comment {
    render () {
        return (
            <div className="App">
            {/* <Greet /> */ }
            {/*<Welcome /> */}
            <Hello/>
            </div>
        );
    }
}

export default App;