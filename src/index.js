import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import WorkPage from "./pages/work";
import ContactPage from "./pages/contact";
import PushMenu from "./components/push-menu";

const App = () => {
    return (
        <React.Fragment>
            <PushMenu />
            <main>
                <HomePage />
                <AboutPage />
                <WorkPage />
                <ContactPage />
            </main>
        </React.Fragment>
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);