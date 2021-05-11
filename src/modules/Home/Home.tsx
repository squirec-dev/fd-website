import Hero from "../../components/Hero";

const Home = (): React.ReactElement => (
    <section id="homeSection" className="u-border-straight-primary">
        <Hero
            title="Fluid Designs"
            subtitle="Beautiful Code"
            strapline="Claire Squire | Software Engineer"
        />
    </section>
);

export default Home;
