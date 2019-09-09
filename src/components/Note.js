
import React, {Component} from 'react';
import './Note.css';
import DeleteNoteContainer from './DeleteNoteContainer';


class Note extends Component {
	constructor (props) {
		 super (props)
		// this.delete = this.delete.bind(this);
		// delete() {
		// 	deleteNote;
		//   }
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
				{/* <button>Delete</button> */}
				{/* <button onclick={this.delete}>Delete</button> */}
				<DeleteNoteContainer noteId={}/>
				{/* <BtnEdit/> */}
			</section>
		)
	}
}

export default Note;