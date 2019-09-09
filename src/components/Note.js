
import React, {Component} from 'react';
import './Note.css';
import firebase from './Firebase';
import './NotesLogic';

class Note extends Component {
	constructor (props) {
	 	super (props)
	 	this.state = {
	 		title: props.title,
	 		message: props.message
	 	}
	}
	render () {
		return (
			<section className="noteContainer">
				<header>
					<p>{this.state.title}</p>
				</header>
				<section className="noteBody">
					<p>{this.state.message}</p>
				</section>

				<button>Edit</button>
				<button>Delete</button>
			</section>
		)
	}
}

export default Note;