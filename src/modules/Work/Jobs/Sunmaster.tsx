import SVG from "../../../components/SVGImage";
import {
    Css,
    Html,
    Less,
    Twig,
    Reactjs,
    Javascript,
} from "../../../objects/Brands";

const Sunmaster = (): React.ReactElement => (
    <>
        <h3>Sunmaster</h3>
        <div className="u-mb+">
            Halifax
            <span className="u-divider--vertical" aria-hidden="true" />
            2014 - 2017
        </div>
        <p>I used the Twig templating engine with a combination of PHP and jQuery to update the company website making it responsive and SEO friendly. I was involved in setting-up the Node environment, integration of LESS and setting up mixins/ variables to improve reusability. I gained experience of using SVN version control and Gulp task runners. With attention to detail, I accurately reproduced designs and worked closely with the designer to resolve UX and accessibility problems. Although not responsible for the images, I often needed to amend images and add sprites.</p>
        <p>I was solely responsible for building the frontend of an in-house flight booking tool. I had to learn ReactJS and how to handle API endpoints, fetching and updating data, within a tight deadline. I considered browser compatibility and set up unit testing.</p>
        <div className="c-masonry__wrapper">
            <div className="c-masonry__block c-masonry__span-x u-brand-html">
                <SVG id="WorkSmHtml" {...Html} />
            </div>
            <div className="c-masonry__block u-brand-react">
                <SVG id="WorkSmReact" {...Reactjs} />
            </div>
            <div className="c-masonry__block u-brand-twig">
                <SVG id="WorkSmTwig" {...Twig} />
            </div>
            <div className="c-masonry__block u-brand-css">
                <SVG id="WorkSmCss" {...Css} />
            </div>
            <div className="c-masonry__block c-masonry__align-end u-brand-js">
                <SVG id="WorkSmJs" {...Javascript} />
            </div>
            <div className="c-masonry__block c-masonry__span-x u-brand-less">
                <SVG id="WorkSmLess" {...Less} />
            </div>
        </div>
    </>
);

export default Sunmaster;
