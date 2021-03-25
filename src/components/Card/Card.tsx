interface CardProps {
    children?: React.ReactNode;
}

const Card = ({
    children,
}): React.ReactElement => (
    <div className="fd-c-card">
        {children}
    </div>
);

export default Card;
