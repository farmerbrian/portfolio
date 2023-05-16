import { useEffect, useState } from 'react';
import db from '../firebase-config';
import {
	collection,
	onSnapshot,
	// getFirestore,
	// addDoc,
	// query,
	// orderBy,
	// doc,
	// getDocs,
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
					<div className="ProjectCard" key={project.key}>
						<div>
							<h3>{project.name}</h3>
							<img
								src={require('../assets/' + project.image + '.png')}
								alt={
									'A screenshot of the ' + project.name + ' project'
								}
							></img>
							<p>{project.disc}</p>
						</div>

						<div className="ButtonContainer">
							<a href={project.github_url} target="_blank">
								<button
									className="CodeButton ProjectButtons"
									value={
										'View the code of the ' +
										project.name +
										' project in a new tab.'
									}
								>
									View Code
								</button>
							</a>
							<a href={project.live_url} target="_blank">
								<button
									className="PreviewButton ProjectButtons"
									value={
										'View the live preview of the ' +
										project.name +
										' project in a new tab.'
									}
								>
									Live Preview
								</button>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default GetPortfolio;
