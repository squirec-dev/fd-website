interface HeroProps {
    title: string;
    subtitle: string;
    strapline: string;
}

const Hero = ({
    title,
    subtitle,
    strapline,
}: HeroProps): React.ReactElement => (
    <div className="u-container u-centered c-hero__wrapper">
        <div>
            <div className="c-hero__gooey" />
            <span
                className="c-hero__subtitle"
                data-testid="c-hero__subtitle"
            >
                {subtitle}
            </span>
            <h1
                className="c-hero__title"
                data-testid="c-hero__title"
            >
                {title}
            </h1>
        </div>
        <span 
            className="c-hero__strapline" 
            data-testid="c-hero__strapline"
        >
            {strapline}
        </span>
    </div>
);

export default Hero;
