import BrianNicholsResume from '../assets/BrianNicholsResume.pdf';

// Build component for linked contact icons

function Contact() {
	return (
		<div className="Contact">
			<h2>Contact Me</h2>
			<div className="ContactIcons">
				<a
					href="https://github.com/farmerbrian?tab=repositories"
					target="_blank"
				>
					<i class="fa-brands fa-github fa-2xl"></i>
				</a>
				<a href="mailto:nichols.brian.d@gmail.com">
					<i class="fa-solid fa-envelope fa-2xl"></i>
				</a>
				<a
					href={BrianNicholsResume}
					download="BrianNicholsResume.pdf"
					target="_blank"
				>
					<i class="fa-solid fa-file fa-xl"></i>
				</a>
				<a
					href="https://www.linkedin.com/in/brian-nichols-75187224/"
					target="_blank"
				>
					<i class="fa-brands fa-linkedin fa-2xl"></i>
				</a>
			</div>
		</div>
	);
}

export default Contact;
