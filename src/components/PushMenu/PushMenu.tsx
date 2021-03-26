import React, {
    useState,
} from 'react';

const Link = ({
    href,
    text,
    ...rest
}): React.ReactElement => (
    <a
        href={href}
        className="fd-c-menu__link"
        data-testid="fd-c-menu__link"
        {...rest}
    >
        {text}
    </a>
);

const PushMenu = ({
    dispatch,
}:{
    dispatch: (path: string) => void;
}): React.ReactElement => {
    const [toggle, setToggle] = useState(false);

    const handleClick = (e):void => {
        e.preventDefault();
        const newPage = e.target.pathname || '/';
        setToggle(false);
        dispatch(newPage);
    }
    
    return (
        <div className="fd-c-menu">
			<div className="container">
                <button
                    className={`fd-c-menu__control ${toggle && "fd-c-menu__control--open"}`}
                    data-testid="fd-c-menu__control"
                    onClick={() => setToggle(!toggle)}
                    aria-label={`Menu ${toggle ? "open" : "closed"}`}
                >
                    <div className="fd-c-menu__icon">
                        <div className="fd-c-menu__icon-hamburger" />
                    </div>
                </button>
                <nav
                    className={`fd-c-menu__panel ${toggle ? "fd-c-menu__panel--open" : "fd-c-menu__panel--closed"}`}
                    data-testid="fd-c-menu__panel"
                    tabIndex={toggle ? 0 : -1}
                    aria-hidden={!toggle}
                >
                    <div className="fd-u-mh-auto">
                        <div className="fd-c-menu__logo" data-testid="fd-c-menu__logo" aria-hidden={true} />
                        <ul className="fd-c-menu__link-wrapper">
                            <li>
                                <Link href='/' text='Home' onClick={handleClick}  />
                            </li>
                            <li>
                                <Link href='/about' text='About' onClick={handleClick}  />
                            </li>
                            <li>
                                <Link href='/work' text='Work' onClick={handleClick}  />
                            </li>
                            <li>
                                <Link href='/contact' text='Contact' onClick={handleClick}  />
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default PushMenu;
