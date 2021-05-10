import SVG from '../../components/SVGImage';

interface BubbleLinkProps {
    external: boolean,
    href: string,
    iconId: string,
    iconName: string,
}

const BubbleLink = ({
    external = true,
    href,
    iconId,
    iconName,
}: BubbleLinkProps): React.ReactElement => {
    let externalAttr = {};
    
    if (external) {
        externalAttr = {
            target: "_blank",
            rel: "noopener noreferrer",
        };
    }

    return (
        <a
            className="u-elevation--mid c-bubble-link"
            href={href}
            {...externalAttr}
        >
            <div className="c-bubble-link__icon">
                <SVG id={iconId} {...iconName} />
            </div>
            <div className="c-bubble-link__text">
                {iconName}
            </div>
        </a>
    );
}

export default BubbleLink;
