import Hero from '../../components/Hero';

const Home = (): React.ReactElement => (
    <section id="homeSection">
		<div className="container">
            <Hero
                title="Fluid Designs"
                subtitle="Beautiful Code"
                strapline="Claire Squire | Software Engineer"
            />
        </div>
    </section>
);

export default Home;
