import React, {
    useState,
} from 'react';

const PushMenu = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="fd-menu">
            <button
                className={`fd-menu__control ${toggle && "fd-menu__control--open"}`}
                data-test="fd-menu__control"
                onClick={() => setToggle(!toggle)}
                aria-label={`Menu ${toggle ? "open" : "closed"}`}
            >
                <div className="fd-menu__icon">
                    <div className="fd-menu__icon-hamburger"></div>
                </div>
            </button>
            <nav
                className={`fd-menu__panel ${toggle ? "fd-menu__panel--open" : "fd-menu__panel--closed"}`}
                data-test="fd-menu__panel"
                tabIndex={toggle ? "0" : "-1"}
                aria-hidden={!toggle}
            >
                <div className="fd-u-mh-auto">
                    <div className="fd-menu__logo" data-test="fd-menu__logo" aria-hidden={true}></div>
                    <ul className="fd-menu__link-wrapper">
                        <li>
                            <a
                                href="#homePage"
                                onClick={() => setToggle(!toggle)}
                                className="fd-menu__link"
                                data-test="fd-menu__link"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#aboutPage"
                                onClick={() => setToggle(!toggle)}
                                className="fd-menu__link"
                                data-test="fd-menu__link"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#workPage"
                                onClick={() => setToggle(!toggle)}
                                className="fd-menu__link"
                                data-test="fd-menu__link"
                            >
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contactPage"
                                onClick={() => setToggle(!toggle)}
                                className="fd-menu__link"
                                data-test="fd-menu__link"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default PushMenu;
