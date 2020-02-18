import React from 'react';
import {
    mount,
} from 'enzyme';
import PushMenu from '../../src/components/push-menu';


describe('Push Menu', () => {
    const render = () => mount(<PushMenu />);

    describe('Defaults', () => {
        it('Displays a button control', () => {
            const component = render();
            expect(component
                .find('[data-test="fd-menu__control"]')
                .exists()
            ).toBeTruthy();
        });
        it('Doesn\'t display menu', () => {
            const component = render();
            expect(component
                .find('[data-test="fd-menu__panel"]')
                .props()
                .className
            ).toContain('fd-menu__panel--closed');
            expect(component
                .find('[data-test="fd-menu__panel"]')
                .prop('aria-hidden')
            ).toBe(true);
        });
    });

    describe('Controls', () => {
        it('Displays menu on odd click', () => {
            const component = render();
            component
                .find('[data-test="fd-menu__control"]')
                .simulate('click');
            expect(component
                .find('[data-test="fd-menu__panel"]')
                .props()
                .className
            ).toContain('fd-menu__panel--open');
            expect(component
                .find('[data-test="fd-menu__panel"]')
                .prop('aria-hidden')
            ).toBe(false);
        });
        it('Doesn\'t display menu on even click', () => {
            const component = render();
            component
                .find('[data-test="fd-menu__control"]')
                .simulate('click')
                .simulate('click');
            expect(component
                .find('[data-test="fd-menu__panel"]')
                .props()
                .className
            ).toContain('fd-menu__panel--closed');
            expect(component
                .find('[data-test="fd-menu__panel"]')
                .prop('aria-hidden')
            ).toBe(true);
        });
    });

    describe('Content', () => {
        it('Displays page links', () => {
            const component = render();
            component
                .find('[data-test="fd-menu__control"]')
                .simulate('click');
            expect(component
                .find('[data-test="fd-menu__link"]')
                .length
            ).toBe(4);
        });
    });
});
