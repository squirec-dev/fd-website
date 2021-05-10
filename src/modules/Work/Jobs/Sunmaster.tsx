import SVG from '../../../components/SVGImage';
import {
    Css,
    Html,
    Less,
    Twig,
    Reactjs,
} from '../../../objects/brands';

const Sunmaster = (): React.ReactElement => (
    <>
        <h3>Sunmaster</h3>
        <span>
            Halifax
            <span className="u-divider" aria-hidden="true" />
            2014 - 2017
        </span>
        <p>I used the Twig templating engine with a combination of PHP and jQuery to update the company website making it responsive and SEO friendly. I was involved in setting-up the Node environment, integration of LESS and setting up mixins/ variables to improve reusability. I gained experience of using SVN version control and Gulp task runners. With attention to detail, I accurately reproduced designs and worked closely with the designer to resolve UX and accessibility problems. Although not responsible for the images, I often needed to amend images and add sprites.</p>
        <p>I was solely responsible for building the frontend of an in-house flight booking tool. I had to learn ReactJS and how to handle API endpoints, fetching and updating data, within a tight deadline. I considered browser compatibility and set up unit testing.</p>
        
        <div className='c-masonry__container'>
            <div className='u-p+ c-masonry__block u-brand-html'>
                <SVG {...Html} id="WorkPageSHtml" />
            </div>
            <div className='u-p+ c-masonry__block u-brand-css'>
                <SVG {...Css} id="WorkPageSCss" />
            </div>
            <div className='u-p+ c-masonry__block u-brand-twig'>
                <SVG {...Twig} id="WorkPageSTwig" />
            </div>
            <div className='u-p+ c-masonry__block u-brand-react'>
                <SVG {...Reactjs} id="WorkPageSReact" />
            </div>
            <div className='u-p+ c-masonry__block u-brand-less'>
                <SVG {...Less} id="WorkPageSLess" />
            </div>
        </div>
    </>
);

export default Sunmaster;
