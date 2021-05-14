import {
	Dispatch,
	ReactElement,
	SetStateAction,
	useEffect,
	useState,
} from 'react';
import { useRouter } from 'next/router';

import { scrollTop } from '../utilities/scroll';

import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import PushMenu from '../components/PushMenu';
import Footer from '../components/Footer';

import Home from '../modules/Home';
import About from '../modules/About';
import Work from '../modules/Work';
import Contact from '../modules/Contact';

const Index = (): ReactElement => {
	const router = useRouter();

	const [path, setPath]: [string, Dispatch<SetStateAction<string>>] = useState('');

	const scrollNavigation = (): void => {
		if (router.asPath === path) {
			return;
		}
		
		let newSection = path.replace('/', '');
		
		if (newSection.length <= 1) {
			newSection = 'home';
		}
		
		router.push(path).then(() => scrollTop(`${newSection}Section`));
	}

	useEffect((): void => 
		scrollNavigation(), [path]);

	return (
		<>
			<SEOHead />

			<Header>
				<PushMenu dispatch={setPath} />
			</Header>

			<main>
				<Home />
				<About />
				<Work />
				<Contact />
			</main>

			<Footer />
		</>
	);
};

export default Index;
