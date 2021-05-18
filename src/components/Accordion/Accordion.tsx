import {
    Dispatch,
    ReactElement,
    ReactNode,
    SetStateAction,
    useState,
} from "react";
import { concatClassNames } from "../../utilities/classnames";

interface AccordionProps {
    children: ReactNode,
    id: string,
    title: string,
}

const Accordion = ({
    children,
    id,
    title,
}: AccordionProps): ReactElement => {
    const [isOpen, setIsOpen]: [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    const handleClick = (evt: any): void => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <div className="u-mb+ u-elevation--mid c-accordion__wrapper">
            <button
                aria-controls={`accordionContent${id}`}
                aria-expanded={isOpen}
                className={concatClassNames([
                    "u-p+ c-accordion__header",
                    `${isOpen ? "c-accordion__header--expanded" : ""}`,
                ])}
                id={`accordionHeader${id}`}
                onClick={(evt): void => handleClick(evt)}
                type="button"
            >
                {title}
            </button>
            <div
                aria-labelledby={`accordionHeader${id}`}
                className={concatClassNames([
                    "c-accordion__content",
                    `${isOpen ? "c-accordion__content--expanded" : ""}`,
                ])}
                aria-hidden={isOpen === false}
                id={`accordionContent${id}`}
                role="region"
            >
                <div className="u-p+">
                    {children}
                </div>
            </div>
        </div>
    )
};

export default Accordion;
