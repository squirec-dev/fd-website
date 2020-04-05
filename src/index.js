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
            <header>
                <PushMenu />
            </header>
            <main>
                <div className="container">
                    <HomePage />
                    <AboutPage />
                    <WorkPage />
                    <ContactPage />
                </div>
            </main>
            <footer>
                <div className="container"></div>
            </footer>
        </React.Fragment>
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);