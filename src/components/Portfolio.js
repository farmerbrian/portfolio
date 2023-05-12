import { useEffect, useState } from 'react';
import db from '../firebase-config';
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
					<ul>
						<a href={project.github_url}>{project.name}</a> -{' '}
						<a href={project.live_url}>Preview</a>
					</ul>
				))}
			</ul>
		</div>
	);
}

export default GetPortfolio;
