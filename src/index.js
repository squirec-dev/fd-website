import React from 'react';
import ReactDOM from 'react-dom';
import PushMenu from "./components/push-menu";


const App = () => (
    <React.Fragment>
        <PushMenu />
        <main>
            <h1>Hello World</h1>
        </main>
    </React.Fragment>
);

ReactDOM.render(
    React.createElement(App),
    document.getElementById('root')
);