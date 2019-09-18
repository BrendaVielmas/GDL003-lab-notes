
import React, {Component} from 'react';
import './Note.css';
import { deleteNote } from './NotesLogic';
import EditNote from './EditNote';

class Note extends Component {
	constructor (props) {
	 console.log(props.noteId)
		 super (props)
	 	this.state = {
	 		title: props.title,
			 message: props.message
		 }
		 this.delete = this.delete.bind(this);
	}
	delete() {
        deleteNote(this.props.noteId).then(()=> {
        	this.props.afterDelete()
        })
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
				<EditNote/>
				<button onClick={this.delete}>Delete</button>
			</section>
		)
	}
}
export default Note;