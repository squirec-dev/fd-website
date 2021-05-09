import SVG from '../../../components/SVGImage';
import {
    Node,
    Postcss,
    Reactjs,
    Sass,
} from '../../../objects/brands';

const Booking = (): React.ReactElement => (
    <>
        <h3>Transport@Booking.com</h3>
        <p>I built mobile-first AA-accessible layouts using the MVC pattern with Express routing, ReactJS and NodeJS. I am passionate about developing design systems, after noticing a problem with duplicated and complex code I suggested we build a component library and I was a core contributor in developing it using TDD, ITCSS and BEM. I noticed several knowledge gaps and undocumented areas, after exploration I added suitable information/ diagrams and ran knowledge sessions. I learnt PostCSS and created a proof of concept to replace SASS. I was heavily involved in the redesign of the core booking journey including; Google Optimise experiments, the implementation of feature toggles, implementing the Booking.com payment API and moving from a monolithic to a micro-frontend architecture. I learnt Git and was able to run scripts effectively using the terminal.</p>
        <p>I had experience using AWS i.e.; SDK, CloudWatch and S3, regularly deploying to an EC2 instance using Bamboo. As a warden, I monitored dashboards with Sensu alerts and reacted to issues on a priority basis. I created new alerts and guided colleagues on our set up of Sensu. I updated our static content process and actioned changes to ensure versioning with automated deployments to S3.</p>
        <p>I voluntarily took on roles as an Ethics Ambassador, Fire Warden and First Aider. I joined the Diversity &amp; Inclusion Guild, aimed at improving the business' operations and culture, working with Tech Returners to help people get back into tech-based roles. I ran a Hackathon by myself, organising a 3-day opportunity for hundreds of people to develop something of interest to them, to be judged and awarded. In my last three months at Booking I mentored a new associate developer, pairing with her frequently.</p>
        
        <div className='c-masonry__container'>
            <div className='u-p+ c-masonry__block u-brand-react'>
                <SVG {...Reactjs} />
            </div>
            <div className='u-p+ c-masonry__block u-brand-sass'>
                <SVG {...Sass} />
            </div>
            <div className='u-p+ c-masonry__block u-brand-postcss'>
                <SVG {...Postcss} />
            </div>
            <div className='u-p+ c-masonry__block u-brand-node'>
                <SVG {...Node} />
            </div>
        </div>
    </>
);

export default Booking;
