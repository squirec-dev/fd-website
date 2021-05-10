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
        <span>
            Remote
            <span className="u-divider" aria-hidden="true" />
            2020 - Present
        </span>
        <p>Building accessible user jouneys using Nextjs and Typescript, utilising React context and hooks. I've worked on integration layers using Camunda and Swagger. During my time here I've built several proof of concepts including custom routing with transitions and feature toggles.</p>
        <p>I've contributed to engineering quality and consistency including talks &amp; refinement of their implementation of BEM/ ITCSS. I've run training sessions on accessibility, discussing the issues and tools we can use.</p>
        <p>As well as my day to day coding, I ran a Hackathon, upskill working group and mentored juniors, tailoring my approaches to suit and help the individual.</p>
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
