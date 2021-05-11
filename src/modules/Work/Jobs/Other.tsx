import {
    Codepen,
    Github,
    Hashnode,
    Jsfiddle,
} from '../../../objects/brands';

import BubbleLink from '../../../components/BubbleLink';

const Other = (): React.ReactElement => (
    <>
        <h3>Other work</h3>
        <div className="u-pbxl u-grid__row u-grid__row-wrap">
            <div className="u-grid__col u-p+">
                <BubbleLink
                    href="https://squirec-dev.hashnode.dev/"
                    iconAttr={{
                        id: "WorkHN",
                        ...Hashnode
                    }}
                    text="Hashnode"
                />
            </div>
            <div className="u-grid__col u-p+">
                <BubbleLink
                    href="https://github.com/squirec-dev"
                    iconAttr={{
                        id: "WorkGH",
                        ...Github
                    }}
                    text="Github"
                />
            </div>
            <div className="u-grid__col u-p+">
                <BubbleLink
                    href="https://codepen.io/SquireC_dev"
                    iconAttr={{
                        id: "WorkCP",
                        ...Codepen
                    }}
                    text="Codepen"
                />
            </div>
            <div className="u-grid__col u-p+">
                <BubbleLink
                    href="https://jsfiddle.net/user/SquireC_dev/fiddles/"
                    iconAttr={{
                        id: "WorkJF",
                        ...Jsfiddle
                    }}
                    text="Jsfiddle"
                />
            </div>
        </div>
    </>
);

export default Other;
