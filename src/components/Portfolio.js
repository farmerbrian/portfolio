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
		<div className="Projects">
			<h2>Projects</h2>
			<div className="ProjectsContainer">
				{projects.map((project) => (
					<div className="ProjectCard">
						<h3>{project.name}</h3>
						<a href={project.github_url}>
							<button className="CodeButton">Code</button>
						</a>{' '}
						<a href={project.live_url}>
							<button className="PreviewButton">Preview</button>
						</a>
					</div>
				))}
			</div>
		</div>
	);
}

export default GetPortfolio;
