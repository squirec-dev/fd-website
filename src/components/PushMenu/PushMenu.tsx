import React, {
    useState,
} from 'react';

const PushMenu = (): React.ReactElement => {
    const [toggle, setToggle] = useState(false);
    
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
                        <div className="fd-c-menu__icon-hamburger"></div>
                    </div>
                </button>
                <nav
                    className={`fd-c-menu__panel ${toggle ? "fd-c-menu__panel--open" : "fd-c-menu__panel--closed"}`}
                    data-testid="fd-c-menu__panel"
                    tabIndex={toggle ? 0 : -1}
                    aria-hidden={!toggle}
                >
                    <div className="fd-u-mh-auto">
                        <div className="fd-c-menu__logo" data-testid="fd-c-menu__logo" aria-hidden={true}></div>
                        <ul className="fd-c-menu__link-wrapper">
                            <li>
                                <a
                                    href="#homePage"
                                    onClick={() => setToggle(false)}
                                    className="fd-c-menu__link"
                                    data-testid="fd-c-menu__link"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#aboutPage"
                                    onClick={() => setToggle(false)}
                                    className="fd-c-menu__link"
                                    data-testid="fd-c-menu__link"
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#workPage"
                                    onClick={() => setToggle(false)}
                                    className="fd-c-menu__link"
                                    data-testid="fd-c-menu__link"
                                >
                                    Work
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contactPage"
                                    onClick={() => setToggle(false)}
                                    className="fd-c-menu__link"
                                    data-testid="fd-c-menu__link"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default PushMenu;
