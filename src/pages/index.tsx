import { Dispatch, ReactElement, SetStateAction, useEffect, useState } from 'react';
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


const App = (): ReactElement => {
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
		<div className='u-wrapper'>
			<SEOHead />

			<Header>
				<PushMenu dispatch={setPath} />
			</Header>

			<main>
				<div className='u-container'>
					<Home />
					<About />
					<Work />
					<Contact />
				</div>
			</main>

			<Footer />
		</div>
	);
};

export default App;
