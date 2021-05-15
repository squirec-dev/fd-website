import {
	Dispatch,
	ReactElement,
	SetStateAction,
	useState,
} from 'react';

import ScrollNavigation from "../objects/ScrollNavigation";

import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

import Home from '../modules/Home';
import About from '../modules/About';
import Work from '../modules/Work';
import Contact from '../modules/Contact';

const Index = (): ReactElement => {
	const [path, setPath]: [string, Dispatch<SetStateAction<string>>] = useState("");

	return (
		<ScrollNavigation path={path}>
			<SEOHead />

			<Header>
				<Menu dispatch={setPath} />
			</Header>

			<main>
				<Home />
				<About />
				<Work />
				<Contact />
			</main>

			<Footer />
		</ScrollNavigation>
	);
};

export default Index;
