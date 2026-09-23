import SVG from "../../components/SVGImage";
import {
    Css,
    Html,
    Javascript,
    Node,
    Reactjs,
    Typescript
} from "../../objects/brands";
import USP from "../../components/USP";

const About = (): React.ReactElement => (
    <section id="aboutSection" className="u-background-light u-border-angled-primary">
        <div className="u-container u-pt+">
            <h2>About me</h2>

            <USP />

            <p>Hello! I'm Claire, a front-end software engineer based near Manchester, UK</p>
            <p>I'm passionate about creating amazing user experiences - making fun, easy to use and accessible websites</p>
            <p>I like building reusable design systems, learning and sharing new things</p>
            <p>When I'm not coding I like to get creative using a range of art mediums and get outdoors, either off on mini adventures or trying to grow things in my garden</p>
        
            <div className="u-mb+ c-masonry__wrapper">
                <div className="c-masonry__block c-masonry__span-x u-brand-react">
                    <SVG id="AboutReact" {...Reactjs} />
                </div>
                <div className="c-masonry__block c-masonry__align-end u-brand-js">
                    <SVG id="AboutJs" {...Javascript} />
                </div>
                <div className="c-masonry__block u-brand-css">
                    <SVG id="AboutCss" {...Css} />
                </div>
                <div className="c-masonry__block u-brand-html">
                    <SVG id="AboutHtml" {...Html} />
                </div>
                <div className="c-masonry__block c-masonry__align-end u-brand-ts">
                    <SVG id="AboutTs" {...Typescript} />
                </div>
                <div className="c-masonry__block c-masonry__span-x u-brand-node">
                    <SVG id="AboutNode" {...Node} />
                </div>
            </div>
        </div>
    </section>
);

export default About;
