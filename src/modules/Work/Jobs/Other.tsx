import {
    Codepen,
    Github,
    Hashnode,
    Jsfiddle,
} from "../../../objects/Brands";

import BubbleLink from "../../../components/BubbleLink";

const Other = (): React.ReactElement => (
    <>
        <h3>Other work</h3>
        <div className="c-bubble-link__wrapper">
            <BubbleLink
                href="https://squirec-dev.hashnode.dev/"
                iconAttr={{
                    id: "WorkHN",
                    ...Hashnode
                }}
                text="Hashnode"
            />
            <BubbleLink
                href="https://github.com/squirec-dev"
                iconAttr={{
                    id: "WorkGH",
                    ...Github
                }}
                text="Github"
            />
            <BubbleLink
                href="https://codepen.io/SquireC_dev"
                iconAttr={{
                    id: "WorkCP",
                    ...Codepen
                }}
                text="Codepen"
            />
            <BubbleLink
                href="https://jsfiddle.net/user/SquireC_dev/fiddles/"
                iconAttr={{
                    id: "WorkJF",
                    ...Jsfiddle
                }}
                text="Jsfiddle"
            />
        </div>
    </>
);

export default Other;
