const Header = ({
    children,
}: {
    children?: React.ReactNode,
}): React.ReactElement => (
    <header className='c-header'>    
        <div className='u-container u-p+'>
            { children }
        </div>
    </header>
);

export default Header;
