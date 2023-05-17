import { useEffect, useState } from 'react';
import db from '../firebase-config';
import {
	collection,
	onSnapshot,
	query,
	orderBy,
	// getFirestore,
	// addDoc,
	// doc,
	// getDocs,
} from 'firebase/firestore';

// Go get data from Firebase.
function GetPortfolio() {
	const [projects, setProjects] = useState([]);

	//Seperate out the collection function so that we can query it and order by the 'key' field
	const q = query(collection(db, 'portfolio'), orderBy('key', 'asc'));

	useEffect(
		() =>
			onSnapshot(q, (snapshot) => {
				setProjects(snapshot.docs.map((doc) => doc.data()));
			}),
		[]
	);

	return (
		<div className="Projects">
			<h2>Projects</h2>
			<p>
				Here's some projects that I created while working through{' '}
				<a href="https://theodinproject.com" target="_blank">
					The Odin Project
				</a>{' '}
				curriculum.
			</p>
			<div className="ProjectsContainer">
				{/* Create the project Cards */}
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
							<a
								href={project.github_url}
								target="_blank"
								className="CodeButton ProjectButtons"
							>
								View Code
							</a>
							<a
								href={project.live_url}
								target="_blank"
								className="PreviewButton ProjectButtons"
							>
								Live Preview
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default GetPortfolio;
