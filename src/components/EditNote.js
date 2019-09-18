import React, {Component} from 'react';
import { editNoteMessage } from './NotesLogic';
import {editNoteTitle} from './NotesLogic';
import NotesContainer from './NotesContainer';
import Note from './Note';
class EditNote extends Component {
	constructor (props) {

	 console.log(props.noteId);
		 super (props)
	 	this.state = {
	 		title: props.title,
			 message: props.message
		 }
		 this.EditNote = this.EditNote.bind(this);
    }

	EditNote(noteId) {
        console.log(noteId);
        editNoteMessage(this.props.noteId).then(()=> {
        	this.props.afterEditNote()
        })
    }
	render () {
        let noteId = this.props.noteId ;
		return (
            <section className="EditNote">
        <button onClick={ () => {this.EditNote(noteId)}}> Edit </button>
        </section>
        )
    }
}

export default EditNote;