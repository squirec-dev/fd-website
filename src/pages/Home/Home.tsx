import Hero from '../../components/Hero';

const HomePage = (): React.ReactElement => (
    <section id="homePage">
		<div className="container">
            <Hero
                title="Fluid Designs"
                subtitle="Beautiful Code"
                strapline="Claire Squire | Software Engineer"
            />
        </div>
    </section>
);

export default HomePage;
