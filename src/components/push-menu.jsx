import React, {
    useState,
} from 'react';

const PushMenu = () => {
    const [toggle, setToggle] = useState(false);
    
    return (
        <div className="fd-menu">
            <button
                className="fd-menu__control"
                data-test="fd-menu__control"
                onClick={() => setToggle(!toggle)}
                aria-label={`Menu ${toggle ? "open" : "closed"}`}
            >
                <span className="fd-menu__icon" aria-hidden="true">|||</span>
            </button>
            <nav
                className={`fd-menu__panel ${toggle ? "fd-menu__panel--open" : "fd-menu__panel--closed"}`}
                data-test="fd-menu__panel"
                tabIndex={toggle ? "0" : "-1"}
                aria-hidden={!toggle}
            >
                <ul className="fd-menu__link-wrapper">
                    <li>
                        <a href="#homePage" className="fd-menu__link" data-test="fd-menu__link">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#aboutPage" className="fd-menu__link" data-test="fd-menu__link">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#workPage" className="fd-menu__link" data-test="fd-menu__link">
                            Work
                        </a>
                    </li>
                    <li>
                        <a href="#contactPage" className="fd-menu__link" data-test="fd-menu__link">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PushMenu;
