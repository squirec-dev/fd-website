import React from 'react';
import {
    mount,
} from 'enzyme';
import App from '../../src/components/App';


describe('App', () => {
    let renderedComponent;

    const render = props => mount(React.createElement(App, props));
    // const render = () => {
    //     const props = {
    //         message: 'Hello World!',
    //     };
    //     renderedComponent = mount(React.createElement(App, props));
    //     return renderedComponent;
    // };

    describe('content', () => {
        it('renders a message', () => {
            const testComponent = render({
                message: 'Hello World!',
            });
            expect(testComponent.find('[data-test="fd-app__message"]').text()).toBe('Hello World!');
        });
    });
});
