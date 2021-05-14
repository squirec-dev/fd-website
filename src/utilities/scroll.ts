import { noMotionPreference } from './accessibility';

const scrollTop = (id: string): void => {
	const element = document.getElementById(id);
	const topOffset = element ? element.offsetTop : 0;
	const allowScroll = noMotionPreference();

	if (allowScroll && 'scrollBehavior' in document.documentElement.style) {
		
		window.scrollTo({
			top: topOffset,
			left: 0,
			behavior: 'smooth'
		});

		return;
	}

	window.scrollTo(0, topOffset);
	return;
};

export {
    scrollTop,
};
