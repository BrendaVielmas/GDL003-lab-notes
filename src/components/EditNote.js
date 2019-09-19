import React, {Component} from 'react';
import { editNote } from './NotesLogic';

class EditNote extends Component {
	constructor (props) {

	 	console.log(props);
		super (props)
	 	this.state = {
	 		title: props.location.state.title,
			 message: props.location.state.message
		 }
		this.handleTitleChange = this.handleTitleChange.bind(this);
		this.handleMessageChange = this.handleMessageChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
    }

	handleTitleChange(event) {
		let currentState = this.state
		currentState.title = event.target.value
		this.setState(currentState);
	}

	handleMessageChange(event) {
		let currentState = this.state
		currentState.message = event.target.value
		this.setState(currentState);
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log(this.state)
		editNote(this.props.location.state.noteId, this.state.title, this.state.message).then((result) => {
			console.log("note created!")
			let currentState = this.state
			currentState.title = '';
			currentState.message = '';
			this.setState(currentState);
			this.props.history.push("/dashboard");
		})
		
		
	}
	
	render () {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Title:<input type="text" value={this.state.title} onChange={this.handleTitleChange} />
				</label>
				<label>
					Message:<textarea value={this.state.message} onChange={this.handleMessageChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
        )
    }
}

export default EditNote;