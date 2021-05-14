import React, {
    ReactElement,
    useState,
} from 'react';

interface LinkProps {
    href: string;
    text: string;
    onClick: (e: any) => void;
}

interface MenuProps {
    dispatch: (path: string) => void;
}

const Link = ({
    href,
    text,
    ...rest
}: LinkProps): ReactElement => (
    <a
        href={href}
        className="c-menu__link"
        data-testid="c-menu__link"
        {...rest}
    >
        {text}
    </a>
);


const Menu = ({
    dispatch,
}: MenuProps): ReactElement => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e: any): void => {
        e.preventDefault();
        const newPage = e.target.pathname || '/';
        setToggle(false);
        dispatch(newPage);
    }
    
    return (
        <>
            <button
                className={`u-elevation--top u-m+ u-p+ c-menu__icon ${toggle && "c-menu__icon--closed"}`} 
                data-testid="c-menu__control"
                onClick={(): void => setToggle(!toggle)}
                aria-label={`Menu ${toggle ? "open" : "closed"}`}
            >
                <span className="c-menu__icon-bar c-menu__icon-bar-top"></span>
                <span className="c-menu__icon-bar c-menu__icon-bar-middle"></span>
                <span className="c-menu__icon-bar c-menu__icon-bar-bottom"></span>
            </button>

            <nav
                className={`c-menu__panel ${toggle ? "c-menu__panel--open" : "c-menu__panel--closed"}`}
                data-testid="c-menu__panel"
                tabIndex={toggle ? 0 : -1}
                aria-hidden={!toggle}
            >
                <div>
                    <div className="c-menu__logo" data-testid="c-menu__logo" aria-hidden={true} />
                    <ul className="c-menu__link-wrapper">
                        <li>
                            <Link href='/' text='Home' onClick={(e: any): void => handleClick(e)}  />
                        </li>
                        <li>
                            <Link href='/about' text='About' onClick={(e: any): void => handleClick(e)} />
                        </li>
                        <li>
                            <Link href='/work' text='Work' onClick={(e: any): void => handleClick(e)} />
                        </li>
                        <li>
                            <Link href='/contact' text='Contact' onClick={(e: any): void => handleClick(e)} />
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Menu;
