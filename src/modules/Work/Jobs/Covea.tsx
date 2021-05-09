import SVG from '../../../components/SVGImage';
import {
    Nextjs,
    Node,
    Sass,
    Typescript,
} from '../../../objects/brands';

const Covea = (): React.ReactElement => (
    <>
        <h3>Covea</h3>
        <p>Working remotely I got myself set up quickly, built good working relationships and developed frontend user journeys with Typescript, ReactJS and NextJS. I also used ContentStack and Camunda as part of writing integration layers. During my time here I have built several proof of concepts including custom routing and feature toggles. I have made contributions to improve engineering quality and consistency including talks &amp; refinement of their implementation of BEM/ ITCSS, sharing articles and acting as a sounding board to the principal engineer. I identified accessibility issues, provided solutions and discussed the issues/ tools we can use. I have taken ownership of planning a remote Hackathon as well as running the upskill working group and mentoring juniors, tailoring my approaches to suit and help the individual.</p>
        <div className='c-masonry__container'>
            <div className='u-p+ c-masonry__block u-brand-ts'>
                <SVG {...Typescript} />
            </div>
            <div className='u-p+ c-masonry__block u-brand-sass'>
                <SVG {...Sass} />
            </div>
            <div className='u-p+ c-masonry__block u-brand-next'>
                <SVG {...Nextjs} />
            </div>
            <div className='u-p+ c-masonry__block u-brand-node'>
                <SVG {...Node} />
            </div>
        </div>
    </>
);

export default Covea;
