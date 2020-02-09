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
            >
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#work">Work</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default PushMenu;
