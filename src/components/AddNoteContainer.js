import { createNote } from './NotesLogic';
import React, { Component } from 'react';

class AddNoteContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {title: '', message:''};
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
		console.log(this.state)
		createNote(this.state.title, this.state.message).then((result) => {
			console.log("note created!")
			let currentState = this.state
			currentState.title = '';
			currentState.message = '';
			this.props.afterSubmit();
			this.setState(currentState);
		})
		event.preventDefault();
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					Title:<input type="text" value={this.state.title} onChange={this.handleTitleChange} />
				</label>
				<label>
					Message:<input type="text" value={this.state.message} onChange={this.handleMessageChange} />
				</label>
				<input type="submit" value="Submit" />
			</form>
		);
	}
}

export default AddNoteContainer;