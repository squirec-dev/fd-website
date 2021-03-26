
import { useEffect, useState } from 'react';{/*, useLayoutEffect*/}
import { useRouter } from 'next/router';

import { scrollTop } from '../utilities/scroll';

import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import PushMenu from '../components/PushMenu';

import Home from '../modules/Home';
import About from '../modules/About';
import Work from '../modules/Work';
import Contact from '../modules/Contact';

const App = (): React.ReactElement => {
	const router = useRouter();

	const [path, setPath] = useState('');

	const scrollNavigation = () => {
		if (router.asPath === path) {
			return;
		}
		
		let newSection = path.replace('/', '');
		if (newSection.length <= 1) {
			newSection = 'home';
		}
		
		router.push(path).then(() => scrollTop(`${newSection}Section`));
	}

	useEffect(() => 
		scrollNavigation(), [path]);

	return (
		<div className='u-wrapper'>
			<SEOHead />

			<Header>
				<div className='u-container u-p+'>
					<PushMenu dispatch={setPath} />
				</div>
			</Header>

			<main>
				<div className='u-container'>
					<Home />
					<About />
					<Work />
					<Contact />
				</div>
			</main>

			<footer className='c-footer'>
				<div className='u-container u-p+'>
					<div className='c-footer__icon' />
					Designed &amp; Built by Claire Squire
					{/* TODO:
					<br />
					* #GithubStars | |/ #GithubShares
					*/}
				</div>
			</footer>
		</div>
	);
};

export default App;
