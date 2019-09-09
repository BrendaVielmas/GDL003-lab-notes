import { deleteNote } from './NotesLogic';
import React, { Component } from 'react';

class DeleteNoteContainer extends Component {
	constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        
		
         
    }
    delete() {
        deleteNote;
    }
    render () {
        return (
            <button onclick={this.delete}>Delete</button>
        )
    }
}
export default DeleteNoteContainer;
