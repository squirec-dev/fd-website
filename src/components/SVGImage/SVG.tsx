interface SvgProps {
    id: string
    paths: string[],
    text: string,
    transform: string,
    viewbox: string,
}

const SVG = ({
    id,
    paths,
    text,
    transform,
    viewbox,
}: SvgProps): React.ReactElement => (
    <svg
        aria-labelledby={id}
        preserveAspectRatio="xMidYMid meet"  
        role="img"
        viewBox={viewbox} 
        xmlns="http://www.w3.org/2000/svg" 
    >
        <text id={`svgText${id}`}>{text}</text>
        <g
            transform={transform}
            stroke="none"
        >
            {paths.map((path, idx) => (
                <path key={idx} d={path} />
            ))}
        </g>
    </svg>
);

export default SVG;