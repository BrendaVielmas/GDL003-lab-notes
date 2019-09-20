import React, {Component} from 'react';
import Note from './Note';
import AddNoteContainer from './AddNoteContainer';
import {getNotesSnapshot} from './NotesLogic';
import {Link, Route } from 'react-router-dom';
import EditNote from './EditNote';

class NotesContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { notes: [] };
	}

	componentDidMount() {
		let thisComponent = this;
		getNotesSnapshot((querySnapShot) => {
			let notes = []
			querySnapShot.forEach(function(doc) {
	            notes.push(doc);
			});
			thisComponent.setState({notes: notes});
		})
	}

	render () {
		let thisComponent = this;
		return (
			<div className="NotesContainer">
				<Route path={`${this.props.match.path}/:noteId/edit`} component={EditNote} />
				<Route exact path={this.props.match.path} render= {() => 
					{
						return (
							<section className="notesContainer">
								{
									this.state.notes.map(function(note) {
										return <Note key={note.id} dashboardPath={thisComponent.props.match.path} noteId={note.id} title={ note.data().title } message={ note.data().message } />;	
									})
								}
								<section className="createNoteBtnPlus">
								<Link to={`${this.props.match.path}/createNote`}><img src={require("./images/create.png")} title="Add new note"/></Link>
								</section>
							
							</section>
						)
					}
				} />
				<Route path={`${this.props.match.path}/createNote`} component={AddNoteContainer} />
				
			</div>
		)
	}
}
export default NotesContainer;
