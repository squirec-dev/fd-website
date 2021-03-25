import { ReactNode } from 'react';
import {Card, CardHeader, CardBody} from '../../components/Card';

const About = (): React.ReactElement => (
    <section id="aboutSection">
		<div className="container">
            <h2>About</h2>
            <div className="fd-grid__row">
                <div className="fd-grid__col3">
                    <Card>
                        <CardHeader backgroundClass="droplet" header="+XP" />
                        <CardBody>Over 6 years commercial experience</CardBody>
                    </Card>
                </div>
                <div className="fd-grid__col3">
                    <Card>
                        <CardHeader backgroundClass="droplet" header="UX" />
                        <CardBody>Creating beautiful user experiences</CardBody>
                    </Card>
                </div>
                <div className="fd-grid__col3">
                    <Card>
                        <CardHeader backgroundClass="droplet" header="AA +" />
                        <CardBody>Making inclusive &amp; accessible web content</CardBody>
                    </Card>
                </div>
            </div>
            
            {/* <img src="/images/droplet.png" /> */}
            <p>Hi, I'm Claire.</p>
            <p>I'm a frontend software engineer passionate about building design systems and providing amazing user experiences.</p>
            <p>I am experienced in using:</p>
            <ul>
                <li>ReactJS &amp; NextJS frameworks</li>
                <li>JavaScript, TypeScript &amp; jQuery</li>
                <li>Semantic HTML &amp; micro-frontends</li>
                <li>CSS, PostCSS &amp; preprocessors i.e. LESS, SASS</li>
                <li>Version control i.e. Git, SVN</li>
                <li>Test frameworks i.e. Jest, Cypress, Cucumber, Nightwatch, Selenium</li>
                <li>NodeJS environments with Docker &amp; CI/CD deployment tools i.e. AWS, Bamboo</li>
                <li>Build tools &amp; compilers i.e. Webpack, Grunt, Gulp, Babel</li>
            </ul>
        </div>
    </section>
);

export default About;
