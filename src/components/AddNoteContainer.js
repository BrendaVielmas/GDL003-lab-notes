import { createNote } from './NotesLogic';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
		event.preventDefault();
		console.log(this.state)
		if (!this.state.title || !this.state.message) {
			alert("title/message cannot be empty")
			return
		}
		createNote(this.state.title, this.state.message).then((result) => {
			console.log("note created!")
			let currentState = this.state
			currentState.title = '';
			currentState.message = '';
			this.setState(currentState);
			this.props.history.push("/dashboard");
		})
	
	}
	render() {
		return (
			<form className="formForEditOrAdd">
				<label>
					<textarea rows="5" cols="35" placeholder="Title of Note" className="inputTitle" type="text" value={this.state.title} onChange={this.handleTitleChange} />
				</label>
				<label>
					<textarea rows="10" cols="35" placeholder="Message of Note" className="inputMessage" type="text" value={this.state.message} onChange={this.handleMessageChange} />
				</label>
				<section className="CreateNoteBtns">
				<button onClick={this.handleSubmit} className="submitBtn" value="Submit"><img  alt="" src={require("./images/save.jpg")} title="Save note"/></button>
				<Link to="/dashboard"><img className="backBtn" alt="" src={require("./images/back.png")} title="Back"/></Link>
				</section>
			</form>
		);
	}
}

export default AddNoteContainer;