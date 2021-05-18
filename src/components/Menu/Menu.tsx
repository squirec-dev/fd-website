import React, {
    MutableRefObject,
    ReactElement,
    RefObject,
    useRef,
    useState,
} from 'react';

enum KEYCODE {
    Tab = 9,
};

interface MenuProps {
    dispatch: (path: string) => void;
}

const Menu = ({
    dispatch,
}: MenuProps): ReactElement => {
    const [toggle, setToggle] = useState(false);
    const firstFocus = useRef() as MutableRefObject<HTMLButtonElement>;
    const lastFocus = useRef() as MutableRefObject<HTMLAnchorElement>;

    const handleClick = (e: any): void => {
        e.preventDefault();
        const newPage = e.target.getAttribute("href") || '/';
        setToggle(false);
        dispatch(newPage);
    }

    const trapFocus = (e: any): void => {
        const isTab = (e.key === 'Tab' || e.keyCode === KEYCODE.Tab);
        const isBackTab = e.shiftKey;
        const element = e.target.getAttribute("data-trap");
        
        if (!isTab || !element) { 
            return; 
        }
    
        if (isBackTab && element === "first") {
            e.preventDefault();
            lastFocus.current.focus();
            return;
        }

        if (!isBackTab && element === "last") {
            e.preventDefault();
            firstFocus.current.focus();
            return;
        }
    }
    
    return (
        <>
            <button
                className={`u-elevation--top u-m+ u-p+ c-menu__icon ${toggle && "c-menu__icon--closed"}`} 
                data-testid="c-menu__control"
                onClick={(): void => setToggle(!toggle)}
                data-trap="first"
                onKeyDown={(e: any): void => trapFocus(e)}
                aria-label={`Menu ${toggle ? "open" : "closed"}`}
                ref={firstFocus}
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
                           <a
                                href='/'
                                className="c-menu__link"
                                data-testid="c-menu__link"
                                onClick={(e: any): void => handleClick(e)}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='/about'
                                className="c-menu__link"
                                data-testid="c-menu__link"
                                onClick={(e: any): void => handleClick(e)}
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href='/work'
                                className="c-menu__link"
                                data-testid="c-menu__link"
                                onClick={(e: any): void => handleClick(e)}
                            >
                                Work
                            </a>
                        </li>
                        <li>
                            <a
                                href='/contact'
                                className="c-menu__link"
                                data-testid="c-menu__link"
                                onClick={(e: any): void => handleClick(e)} 
                                data-trap="last"
                                onKeyDown={(e: any): void => trapFocus(e)}
                                ref={lastFocus}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Menu;
