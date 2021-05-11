import SVG from "../../components/SVGImage";

interface BubbleLinkProps {
    external?: boolean,
    href: string,
    iconAttr: {
        id: string
        paths: string[],
        text: string,
        viewbox: string,
    },
    text: string,
}

const BubbleLink = ({
    external = true,
    href,
    iconAttr,
    text,
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
            <SVG {...iconAttr} svgAttr={{className:"c-bubble-link__icon"}} />
            <div className="c-bubble-link__text">
                {text}
            </div>
        </a>
    );
}

export default BubbleLink;
