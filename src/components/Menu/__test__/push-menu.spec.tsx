import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Menu from '../index';

interface PropTypes {
    customProps?: Record<string, any>
}

describe('Menu:', () => {
    const renderComponent = () =>
        render(
            <Menu dispatch={(): void => {}} />
        );
    
    afterEach(() => {
        cleanup();
    });

    describe('Defaults', () => {
        it('Displays a button control', () => {
            const { queryAllByTestId } = renderComponent();
            expect(queryAllByTestId('c-menu__control').length).toBe(1);
        });
        it('Doesn\'t display menu', () => {
            const { getByTestId } = renderComponent();
            expect(getByTestId('c-menu__panel')
                .getAttribute('class')
            ).toContain('c-menu__panel--closed');
        });
    });

    describe('Controls', () => {
        it('Displays menu on odd click', () => {
            const { queryAllByTestId, getByTestId } = renderComponent();
            const button = getByTestId('c-menu__control');
            userEvent.click(button);
            expect(queryAllByTestId('c-menu__panel').length).toBe(1);
            expect(getByTestId('c-menu__panel')
                .getAttribute('class')
            ).toContain('c-menu__panel--open');
        });
        it('Doesn\'t display menu on even click', () => {
            const { getByTestId } = renderComponent();
            const button = getByTestId('c-menu__control');
            userEvent.click(button);
            expect(getByTestId('c-menu__panel')
                .getAttribute('class')
            ).toContain('c-menu__panel--open');
            userEvent.click(button);
            expect(getByTestId('c-menu__panel')
                .getAttribute('class')
            ).toContain('c-menu__panel--closed');
        });
    });

    describe('Content', () => {
        it('Displays logo', () => {
            const { queryAllByTestId } = renderComponent();
            expect(queryAllByTestId('c-menu__logo').length).toBe(1);
        });

        it('Displays page links', () => {
            const { queryAllByTestId } = renderComponent();
            expect(queryAllByTestId('c-menu__link').length).toBe(4);
        });

        it('Closes menu on link click', () => {
            const { getByTestId, getByText } = renderComponent();
            const button = getByTestId('c-menu__control');
            userEvent.click(button);
            userEvent.click(getByText('Contact'));
            expect(getByTestId('c-menu__panel')
                .getAttribute('class')
            ).toContain('c-menu__panel--closed');
        });
    });
});
