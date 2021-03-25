import { useRouter } from 'next/router';

import SEOHead from '../components/SEOHead';
import Header from '../components/Header';

import HomePage from '../modules/Home';
import AboutPage from '../modules/About';
import WorkPage from '../modules/Work';
import ContactPage from '../modules/Contact';

const App = (): React.ReactElement => {
	const router = useRouter()
	
	return (
		<>
			<SEOHead />
			<Header />
			<main>
				{router.pathname}
				<HomePage />
				<AboutPage />
				<WorkPage />
				<ContactPage />
			</main>

			<footer></footer>
		</>
	);
};

export default App;
