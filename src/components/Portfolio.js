import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Connect to Supabase
const supabase = createClient(
	process.env.REACT_APP_SUPABASE_URL,
	process.env.REACT_APP_SUPABASE_API
);

const bucketUrl =
	'https://ejrpqbyhqgmjpufgsfnj.supabase.co/storage/v1/object/public/portfolio_assets/public/';

function GetPortfolio() {
	const [project, setProject] = useState([]);

	useEffect(() => {
		getProjects();
	}, []);

	async function getProjects() {
		const { data } = await supabase
			.from('projects')
			.select('*')
			.order('sort_key');
		setProject(data);
		console.log(data);
	}

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
				{project.map((project) => (
					<div className="ProjectCard" key={project.sort_key}>
						<div>
							<h3>{project.name}</h3>
							<img
								// src={require('../assets/' + project.image + '.png')}
								src={bucketUrl + project.image}
								alt={
									'A screenshot of the ' + project.name + ' project'
								}
							></img>
							<p>{project.description}</p>
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
