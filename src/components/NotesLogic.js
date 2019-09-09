import firebase from './Firebase';

export function createNote(title, message) {
	if (message == "") {
		return "Error. El mensaje no puede estar vacío";
	}
	let uid = firebase.auth().currentUser.uid;
	console.log("in data.js createPost");
	let db = firebase.firestore();
	let day = new Date().toLocaleDateString();

	return db.collection("Notes").add({
			"title": title,
			"message": message,
			"uid": uid,
			"dates": day
		})
		.then((docRef) => {
			console.log("Document written with ID: ", docRef.id);
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		});
}

export function deleteNote(noteId) {
	let db = firebase.firestore();
	return db.collection("Notes").doc(noteId).delete().then(() => {
		console.log("Document successfully deleted!");
	}).catch(function(error) {
		console.error("Error removing document: ", error);
	});
}

export function editNoteMessage(noteId, newMessage) {
	let db = firebase.firestore();
	return db.collection("Notes").doc(noteId).set({
		"message": newMessage
	}, {
		merge: true
	}).then(() => {
		console.log("Document successfully edit!");
		console.log(noteId);
		console.log(newMessage);
	}).catch(function(error) {
		console.error("Error edit document: ", error);
	});
}

export function editNoteTitle(noteId, newTitle) {
	let db = firebase.firestore();
	return db.collection("Notes").doc(noteId).set({
		"title": newTitle
	}, {
		merge: true
	}).then(() => {
		console.log("Document successfully edit!");
		console.log(noteId);
		console.log(newTitle);
	}).catch(function(error) {
		console.error("Error edit document: ", error);
	});
}

export function getNotes() {
	let db = firebase.firestore()
	let uid = firebase.auth().currentUser.uid;
	return db.collection("Notes").orderBy("dates", "desc").where("uid", "==", uid).get()
}
