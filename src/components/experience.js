import { useEffect } from 'react';
// import { firebaseConfig } from '../firebase-config.js';
// import { initializeApp } from 'firebase/app';
import db from '../firebase-config';
// import { firestore } from '../firebase-config.js';
// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
import {
	getFirestore,
	collection,
	addDoc,
	query,
	orderBy,
	doc,
	getDocs,
	onSnapshot,
} from 'firebase/firestore';

// const app = initializeApp(getFirebaseConfig);
// const db = getFirestore(app);

// console.log(firestore);

// async function GetExperience(firestore) {
// const experience = collection(firestore, 'experience');
// const experienceSnapshot = await getDocs(experience);
// const experienceList = experienceSnapshot.docs.map((doc) =>
// 	doc.data()
// );
// return experienceList;
// console.log(firestore);
// }

function GetExperience() {
	// console.log(firestore);
	useEffect(() => {
		onSnapshot(collection(db, 'experience'), (snapshot) => {
			console.log(snapshot.docs.map((doc) => doc.data()));
		});
	});
}

export default GetExperience;
