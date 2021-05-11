import SVG from "../../../components/SVGImage";
import {
    Javascript,
    Node,
    Postcss,
    Reactjs,
    Sass,
    Typescript,
} from "../../../objects/brands";

const Booking = (): React.ReactElement => (
    <>
        <h3>Transport@Booking.com</h3>
        <span>
            Manchester
            <span className="u-divider--vertical" aria-hidden="true" />
            2017 - 2020
        </span>
        <p>I worked on the customer experience team, building an accessible journey with mobile-first layouts. I worked with MVC patterns, Express, ReactJS and NodeJS. I was a core contributor in developing a design system using TDD, ITCSS and BEM. I also worked with PostCSS to create a proof of concept for replacing SASS.</p>
        <p>I've created Google Optimise experiments, the implementation of feature toggles, implementing API's and creating documentation.</p>
        <p>I was involved in the set up and move from a monolithic to a micro-frontend architecture.</p>
        <p>I had experience using AWS, including SDK, CloudWatch and S3, and regularly deployed work to an EC2 instance using Bamboo. As a warden I created and monitored Sensu alerts, reacting to issues on a priority basis.</p>
        <p>I voluntarily took on roles as an Ethics Ambassador, Fire Warden and First Aider. I joined the Diversity &amp; Inclusion Guild, aimed at improving the business' operations and culture, working with Tech Returners and mentoring the successful applicant. I also ran my first Hackathon with lots of positive feedback, organising a 3-day opportunity for hundreds of people to develop something of interest to them, to be judged and awarded.</p>
        <div className="c-masonry__wrapper">
            <div className="c-masonry__block c-masonry__span-x u-brand-react">
                <SVG id="WorkBkReact" {...Reactjs} />
            </div>
            <div className="c-masonry__block c-masonry__align-end u-brand-js">
                <SVG id="WorkBkJs" {...Javascript} />
            </div>
            <div className="c-masonry__block u-brand-node">
                <SVG id="WorkBkNode" {...Node} />
            </div>
            <div className="c-masonry__block u-brand-sass">
                <SVG id="WorkBkSass" {...Sass} />
            </div>
            <div className="c-masonry__block c-masonry__align-end u-brand-ts">
                <SVG id="WorkBkTs" {...Typescript} />
            </div>
            <div className="c-masonry__block c-masonry__span-x u-brand-postcss">
                <SVG id="WorkBkPostcss" {...Postcss} />
            </div>
        </div>
    </>
);

export default Booking;
