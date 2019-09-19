import React, {Component} from 'react';
import Note from './Note';
import AddNoteContainer from './AddNoteContainer';
import {getNotesSnapshot} from './NotesLogic';
import { Route } from 'react-router-dom';
import EditNote from './EditNote';

class NotesContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { notes: [] };
		this.updateNotes = this.updateNotes.bind(this);
	}

	updateNotes() {
		let thisComponent = this;
		getNotesSnapshot((querySnapShot) => {
			let notes = []
			querySnapShot.forEach(function(doc) {
	            notes.push(doc);
			});
			thisComponent.setState({notes: notes});
		})
	}

	componentDidMount() {
		this.updateNotes();
	}

	render () {
		let thisComponent = this;
		return (
			<div className="NotesContainer">
				<Route path={`${this.props.match.path}/:noteId/edit`} render= {() => 
					{
						return (
							<EditNote afterEdit={thisComponent.updateNotes} {...this.props}/>
						)
					} 
				} />
				<Route exact path={this.props.match.path} render= {() => 
					{
						return (
							<section>
							{
								this.state.notes.map(function(note) {
									return <Note key={note.id} dashboardPath={thisComponent.props.match.path} noteId={note.id} title={ note.data().title } message={ note.data().message } afterDelete={thisComponent.updateNotes} />;	
								})
							}
							<AddNoteContainer afterSubmit={this.updateNotes}/>
							</section>
						)
					}
				} />
				
			</div>
		)
	}
}
export default NotesContainer;
