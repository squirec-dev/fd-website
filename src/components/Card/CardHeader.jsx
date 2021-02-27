const CardHeader = ({
    header,
    backgroundClass = 'default',
}) => (
    <div className={`fd-c-card__header fd-c-card__background-${backgroundClass}`}>
        <h3>{header}</h3>
    </div>
);

export default CardHeader;
