const Header = ({
    children,
}: {
    children?: React.ReactNode,
}): React.ReactElement => (
    <header className='c-header'>
        { children }
    </header>
);

export default Header;
