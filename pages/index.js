import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/700.css';

import Masthead from '../components/Sections/Masthead/Masthead';
import Lead from '../components/Sections/Lead/Lead';
import About from '../components/Sections/About/About';
import Platform from '../components/Sections/Platform/Platform';
import Security from '../components/Sections/Security/Security';
import Features from '../components/Sections/Features/Features';
import Launchpad from '../components/Sections/Launchpad/Launchpad';
import Locker from '../components/Sections/Locker/Locker';
import Contact from '../components/Sections/Contact/Contact';
import Footer from '../components/UI/Footer';

export default function Home() {
	return (
		<>
			<Masthead />
			<Lead />
			<About />
			<Platform />
			<Security />
			<Features />
			<Launchpad />
			<Locker />
			<Contact />
			<Footer />
		</>
	);
}
