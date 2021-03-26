import {
    Dispatch,
    ReactElement,
    SetStateAction,
    useState,
} from "react";

const TabPanel = ({
    content,
    initial = 0,
}:{
    content: Record<string, () => ReactElement>,
    initial?: number,
}): ReactElement => {
    const [active, setActive]: [string, Dispatch<SetStateAction<string>>] = useState(Object.keys(content)[initial]);

    const Tabs = (): ReactElement => (
        <nav className={ 'c-tab-panel__nav' }>
            <ul>
                {Object.keys(content).map((tab, idx) => (
                    <li
                        key={ idx }
                        className={`
                            ${'c-tab-panel__tab'}
                            ${(tab === active) ? 'c-tab-panel__tab--active' : ''}
                        `}
                    >
                        <button
                            className={ 'c-tab-panel__button' }
                            onClick={ (): void => setActive(tab) }>
                            { tab }
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );

    const ActivePanel = (): ReactElement => {
        const Component = content[active];
        return (
            <div className={ tabPanelCSS['c-tab-panel__panel'] }>
                <Component />
            </div>
        );
    }

    return (
		<div className={ tabPanelCSS['c-tab-panel'] }>
            <Tabs />
            <ActivePanel />
        </div>
    );
}

export default TabPanel;