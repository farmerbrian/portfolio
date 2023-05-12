import './App.css';
import GetPortfolio from './components/Portfolio.js';
import Header from './components/Header.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Skills from './components/Skills.js';

function App() {
	return (
		<div className="App">
			<Header />
			<About />
			<Skills />
			<GetPortfolio />
			<Contact />
		</div>
	);
}

export default App;
