import * as firebase from 'firebase'

let config = {
  apiKey: "AIzaSyA_mHCrrEFr-Jd3_iTVI9FK0cK7FLJFXao",
   authDomain: "labnotes-03.firebaseapp.com",
   databaseURL: "https://labnotes-03.firebaseio.com",
   projectId: "labnotes-03",
   storageBucket: "",
   messagingSenderId: "570875223847",
   appId: "1:570875223847:web:9f27e96942ab383bfa9302"
};

if (!firebase.apps.length) {
	firebase.initializeApp(config)
}
export default firebase;