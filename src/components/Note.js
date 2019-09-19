
import React, {Component} from 'react';
import './Note.css';
import { deleteNote } from './NotesLogic';
import { Link } from 'react-router-dom';

class Note extends Component {
	constructor (props) {
		super (props)
	 	this.state = {
	 		title: props.title,
			message: props.message
		}
		this.delete = this.delete.bind(this);
	}
	delete() {
        deleteNote(this.props.noteId).then(()=> {
        	this.props.afterDelete();
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
				<Link to={{
					pathname: `${this.props.dashboardPath}/${this.props.noteId}/edit`,
					state: {
						title: this.state.title,
						message: this.state.message,
						noteId: this.props.noteId
					}
				}}>Edit</Link>
				<button onClick={this.delete}>Delete</button>
			</section>
		)
	}
}
export default Note;