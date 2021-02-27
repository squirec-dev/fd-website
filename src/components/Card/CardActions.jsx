const CardButton = ({
    As = 'button', // | link
    rest,
}) => (
    <As {...rest}></As>
);

const CardActions = ({
    actions,
}) => (
    <div className="fd-c-card__actions">
        {actions.map((action, idx) => (
            <CardButton key={idx} {...action} />
        ))}
    </div>
);

export default CardActions;
