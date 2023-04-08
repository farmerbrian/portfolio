import './App.css';
// import { getFirebaseConfig } from './firebase-config.js';
// import { initializeApp } from 'firebase/app';
// import {
// 	getFirestore,
// 	collection,
// 	addDoc,
// 	query,
// 	orderBy,
// 	limit,
// 	onSnapshot,
// 	setDoc,
// 	updateDoc,
// 	doc,
// 	serverTimestamp,
// } from 'firebase/firestore';
import Experience from './components/experience';

function App() {
	return (
		<div className="App">
			<Experience />
		</div>
	);
}

// // Initialize Firebase
// const firebaseAppConfig = getFirebaseConfig();
// initializeApp(firebaseAppConfig);

export default App;
