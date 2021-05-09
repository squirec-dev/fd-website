import SVG from '../../../components/SVGImage';
import {
    Codepen,
    Github,
    Hashnode,
    Jsfiddle,
} from '../../../objects/brands';

const Other = (): React.ReactElement => (
    <>
        <h3>Other work</h3>
        <div className="u-grid__row u-pbxl">
            <div className="u-grid__col6">
                <a
                    className="u-elevation--mid todo-bubble"
                    href="https://squirec-dev.hashnode.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SVG {...Hashnode} />
                </a>
            </div>
            <div className="u-grid__col6">
                <a
                    className="u-elevation--mid todo-bubble"
                    href="https://github.com/squirec-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SVG {...Github} />
                </a>
            </div>
        </div>
        <div className="u-grid__row u-pbxl">
            <div className="u-grid__col6">
                <a
                    className="u-elevation--mid todo-bubble"
                    href="https://codepen.io/SquireC_dev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SVG {...Codepen} />
                </a>
            </div>
            <div className="u-grid__col6">
                <a
                    className="u-elevation--mid todo-bubble"
                    href="https://jsfiddle.net/user/SquireC_dev/fiddles/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <SVG {...Jsfiddle} />
                </a>
            </div>
        </div>
    </>
);

export default Other;
