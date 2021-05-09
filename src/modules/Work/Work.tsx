import TabPanel from '../../components/TabPanel';
import Jobs from './Jobs';

const Work = (): React.ReactElement => (
    <section id="workSection" className='u-color-light u-background-dark u-border-angled-primary'>
        <div className='u-container'>
            <h2>My work</h2>
            <TabPanel content={Jobs} />
        </div>
    </section>
);

export default Work;
