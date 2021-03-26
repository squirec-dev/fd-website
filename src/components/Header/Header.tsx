interface HeaderProps {
    children?: React.ReactNode,
}

const Header = ({
    children,
}: HeaderProps): React.ReactElement => (
    <header className='c-header'>    
        <div className='u-container u-p+'>
            { children }
        </div>
    </header>
);

export default Header;
