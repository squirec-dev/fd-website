import React, {
    lazy,
} from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./pages/home";
import PushMenu from "./components/push-menu";

const App = () => {
    // const AboutPage = lazy(() => import("./pages/about"));
    // const WorkPage = lazy(() => import("./pages/work"));
    // const ContactPage = lazy(() => import("./pages/contact"));
    return (
        <React.Fragment>
            <PushMenu />
            <main>
                <HomePage />
                {/* <AboutPage />
                <WorkPage />
                <ContactPage /> */}
            </main>
        </React.Fragment>
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);