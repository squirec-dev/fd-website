interface CardActionsProps {
    actions: CardButtonProps[];
}

interface CardButtonProps {
    As: 'button' | 'link';
}

const CardButton = ({
    As = 'button',
    ...rest
}: CardButtonProps): React.ReactElement => (
    <As {...rest} />
);

const CardActions = ({
    actions,
}: CardActionsProps): React.ReactElement => (
    <div className="fd-c-card__actions">
        {actions.map((action, idx) => (
            <CardButton key={idx} {...action} />
        ))}
    </div>
);

export default CardActions;
