interface SvgProps {
    id: string
    paths: string[],
    text: string,
    viewbox: string,
    svgAttr?: Record<string, any>,
}

const SVG = ({
    id,
    paths,
    text,
    viewbox,
    svgAttr = {},
}: SvgProps): React.ReactElement => (
    <svg
        aria-labelledby={id}
        role="img"
        viewBox={viewbox} 
        xmlns="http://www.w3.org/2000/svg" 
        {...svgAttr}
    >
        <text id={`svgText${id}`}>{text}</text>
        {paths.map((path, idx) => (
            <path key={idx} d={path} />
        ))}
    </svg>
);

export default SVG;