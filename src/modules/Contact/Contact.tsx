import SVG from '../../components/SVGImage';
import {
    Hashnode,
    Linkedin,
    Twitter
 } from '../../objects/brands';

const Contact = (): React.ReactElement => (
    <section id="contactSection" className="u-background-light u-border-angled-dark">
        <div className='u-container'>
            <h2>Contact me</h2>
            <p>Thanks for taking a look!</p>
            <p>Please feel free to get in touch</p>
            
            <div className="u-pbxl u-grid__row">
                <div className="u-grid__col4">
                    <a
                        className="u-elevation--mid c-bubble-link"
                        href="https://www.linkedin.com/in/claire-squire-48b043a2/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVG id="ContactLI" svgAttr={{className:"c-bubble-link__icon"}} {...Linkedin} />
                        <span className="c-bubble-link__text">LinkedIn</span>
                    </a>
                </div>
                <div className="u-grid__col4">
                    <a
                        className="u-elevation--mid c-bubble-link"
                        href="https://twitter.com/SquireC_dev"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVG id="ContactTW" svgAttr={{className:"c-bubble-link__icon"}} {...Twitter} />
                        <span className="c-bubble-link__text">Twitter</span>
                    </a>
                </div>
                <div className="u-grid__col4">
                    <a
                        className="u-elevation--mid c-bubble-link"
                        href="https://squirec-dev.hashnode.dev/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <SVG id="ContactHN" svgAttr={{className:"c-bubble-link__icon"}} {...Hashnode} />
                        <span className="c-bubble-link__text">Hashnode</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
