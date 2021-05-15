import {
	ReactElement,
    ReactNode,
	useEffect,
} from 'react';
import { useRouter } from 'next/router';

import { scrollTop } from '../../utilities/scroll';

interface ScrollNavigationProps {
    path: string;
    children: ReactNode;
}

const ScrollNavigation = ({
    path,
    children,
}: ScrollNavigationProps): ReactElement => {
	const router = useRouter();

	const scrollNavigation = (): void => {
        console.log("new")
		if (router.asPath === path) {
			return;
		}
		
		let newSection = path.replace('/', '');
		
		if (newSection.length < 1) {
			newSection = 'home';
		}
		
		router.push(path).then(() => scrollTop(`${newSection}Section`));
	}

	useEffect((): void => 
		scrollNavigation(), [path]);

	return (
		<>
			{children}
		</>
	);
};

export default ScrollNavigation;
