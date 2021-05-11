import {
    Hashnode,
    Linkedin,
    Twitter
} from '../../objects/brands';

import BubbleLink from '../../components/BubbleLink';

const Contact = (): React.ReactElement => (
    <section id="contactSection" className="u-background-light u-border-angled-dark">
        <div className='u-container'>
            <h2>Contact me</h2>
            <p>Thanks for taking a look!</p>
            <p>Please feel free to get in touch</p>
            
            <div className="u-pbxl u-grid__row u-grid__row-wrap">
                <div className="u-grid__col u-p+">
                    <BubbleLink
                        href="https://www.linkedin.com/in/claire-squire-48b043a2/"
                        iconAttr={{
                            id: "ContactLI",
                            ...Linkedin
                        }}
                        text="LinkedIn"
                    />
                </div>
                <div className="u-grid__col u-p+">
                    <BubbleLink
                        href="https://twitter.com/SquireC_dev"
                        iconAttr={{
                            id: "ContactTW",
                            ...Twitter
                        }}
                        text="Twitter"
                    />
                </div>
                <div className="u-grid__col u-p+">
                    <BubbleLink
                        href="https://squirec-dev.hashnode.dev/"
                        iconAttr={{
                            id: "ContactHN",
                            ...Hashnode
                        }}
                        text="Hashnode"
                    />
                </div>
            </div>
        </div>
    </section>
);

export default Contact;
