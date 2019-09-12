import React, {Component} from 'react';
import Note from './Note';
import AddNoteContainer from './AddNoteContainer';
import {getNotes} from './NotesLogic';

class NotesContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { notes: [] };
		this.updateNotes = this.updateNotes.bind(this);
	}

	updateNotes() {
		getNotes().then((querySnapShot) => {
			let notes = []
			querySnapShot.forEach(function(doc) {
	            notes.push(doc);
	        });
			this.setState({notes: notes})
		}).catch((err) => {
			console.log(err)
		})
	}

	componentDidMount() {
		this.updateNotes();
	}

	render () {
		let thisComponent = this;
		return (
			<div className="NotesContainer">
				{
					this.state.notes.map(function(note) {
						return <Note noteId={note.id} title={ note.data().title } message={ note.data().message } afterDelete={thisComponent.updateNotes} />;
						
					  })
					  
				}
				
				<AddNoteContainer afterSubmit={this.updateNotes}/>
			</div>
		)
	}
}
export default NotesContainer;
