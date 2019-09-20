import React, {Component} from 'react';
import { editNote } from './NotesLogic';
import {Link} from 'react-router-dom';

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
		if (!this.state.title || !this.state.message) {
			alert("title/message cannot be empty")
			return
		}
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
			<form>
				<label>
					<textarea rows="10" cols="15" placeholder="Title of Note" className="inputTitle" value={this.state.title} onChange={this.handleTitleChange} />
				</label>
				<label>
					<textarea rows="20" cols="30" placeholder="Message of Note" className="inputMessage" value={this.state.message} onChange={this.handleMessageChange} />
				</label>
				<section className="CreateNoteBtns">
				<button onClick={this.handleSubmit} className="submitBtn" value="Submit"><img src={require("./images/save.jpg")}/></button>
				<Link to="/dashboard"><img src={require("./images/back.png")}/></Link>
				</section>
			</form>
        )
    }
}

export default EditNote;