import SVG from "../../../components/SVGImage";
import {
    Javascript,
    Nextjs,
    Node,
    Reactjs,
    Sass,
    Typescript,
} from "../../../objects/brands";

const Covea = (): React.ReactElement => (
    <>
        <h3>Covea</h3>
        <div className="u-mb+">
            Remote
            <span className="u-divider--vertical" aria-hidden="true" />
            2020 - Present
        </div>
        <p>Building accessible user jouneys using Nextjs and Typescript, utilising React context and hooks. I've worked on integration layers using Camunda and Swagger. During my time here I've built several proof of concepts including custom routing with transitions and feature toggles.</p>
        <p>I've contributed to engineering quality and consistency including talks &amp; refinement of their implementation of BEM/ ITCSS. I've run training sessions on accessibility, discussing the issues and tools we can use.</p>
        <p>As well as my day to day coding, I ran a Hackathon, upskill working group and mentored juniors, tailoring my approaches to suit and help the individual.</p>
        <div className="c-masonry__wrapper">
            <div className="c-masonry__block c-masonry__span-x u-brand-next">
                <SVG id="WorkCvNext" {...Nextjs} />
            </div>
            <div className="c-masonry__block c-masonry__align-end u-brand-js">
                <SVG id="WorkCvJs" {...Javascript} />
            </div>
            <div className="c-masonry__block u-brand-sass">
                <SVG id="WorkCvSass" {...Sass} />
            </div>
            <div className="c-masonry__block u-brand-node">
                <SVG id="WorkCvNode" {...Node} />
            </div>
            <div className="c-masonry__block c-masonry__align-end u-brand-ts">
                <SVG id="WorkCvTs" {...Typescript} />
            </div>
            <div className="c-masonry__block c-masonry__span-x u-brand-react">
                <SVG id="WorkCvReact" {...Reactjs} />
            </div>
        </div>
    </>
);

export default Covea;
