// console.log('yup, i\'m working');

import React from 'react';
import ReactDOM from 'react-dom';
class MessageComponent extends React.Component {
    render() {
        return (
            <div>{this.props.message}</div>
        );
    }
}

// Render an instance of MessageComponent into document.getElementById
ReactDOM.render(
    <MessageComponent message="Hello!" />,
    document.getElementById('root')
);