interface CardBodyProps {
    children?: React.ReactNode;
}

const CardBody = ({
    children,
}: CardBodyProps): React.ReactElement => (
    <div className="fd-c-card__body">
        {children}
    </div>
);

export default CardBody;
