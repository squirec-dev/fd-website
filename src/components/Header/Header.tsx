interface HeaderProps {
    children?: React.ReactNode,
}

const Header = ({
    children,
}: HeaderProps): React.ReactElement => (
    <header className='c-header'> 
        { children }
    </header>
);

export default Header;
