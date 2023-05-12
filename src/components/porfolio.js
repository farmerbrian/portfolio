import { useEffect, useState } from 'react';
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

function GetPortfolio() {
	const [projects, setProjects] = useState([]);

	useEffect(
		() =>
			onSnapshot(collection(db, 'portfolio'), (snapshot) => {
				setProjects(snapshot.docs.map((doc) => doc.data()));
			}),
		[]
	);

	return (
		<div className="projects">
			<ul>
				{projects.map((project) => (
					<li>
						<a href={project.github_url}>{project.name}</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default GetPortfolio;
