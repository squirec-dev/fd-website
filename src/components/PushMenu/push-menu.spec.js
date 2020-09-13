import React from 'react';
import { render, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PushMenu from './index';

describe('PushMenu:', () => {
    const renderComponent = customProps =>
        render(
            <PushMenu {...customProps} />
        );
    
    afterEach(() => {
        cleanup();
    });

    describe('Defaults', () => {
        it('Displays a button control', () => {
            const { queryAllByTestId } = renderComponent();
            expect(queryAllByTestId('fd-c-menu__control').length).toBe(1);
        });
        it('Doesn\'t display menu', () => {
            const { getByTestId } = renderComponent();
            expect(getByTestId('fd-c-menu__panel')
                .getAttribute('class')
            ).toContain('fd-c-menu__panel--closed');
        });
    });

    describe('Controls', () => {
        it('Displays menu on odd click', () => {
            const { queryAllByTestId, getByTestId } = renderComponent();
            const button = getByTestId('fd-c-menu__control');
            userEvent.click(button);
            expect(queryAllByTestId('fd-c-menu__panel').length).toBe(1);
            expect(getByTestId('fd-c-menu__panel')
                .getAttribute('class')
            ).toContain('fd-c-menu__panel--open');
        });
        it('Doesn\'t display menu on even click', () => {
            const { getByTestId } = renderComponent();
            const button = getByTestId('fd-c-menu__control');
            userEvent.click(button);
            expect(getByTestId('fd-c-menu__panel')
                .getAttribute('class')
            ).toContain('fd-c-menu__panel--open');
            userEvent.click(button);
            expect(getByTestId('fd-c-menu__panel')
                .getAttribute('class')
            ).toContain('fd-c-menu__panel--closed');
        });
    });

    describe('Content', () => {
        it('Displays logo', () => {
            const { queryAllByTestId } = renderComponent();
            expect(queryAllByTestId('fd-c-menu__logo').length).toBe(1);
        });

        it('Displays page links', () => {
            const { queryAllByTestId } = renderComponent();
            expect(queryAllByTestId('fd-c-menu__link').length).toBe(4);
        });

        it('Closes menu on link click', () => {
            const { getByTestId, getByText } = renderComponent();
            const button = getByTestId('fd-c-menu__control');
            userEvent.click(button);
            userEvent.click(getByText('Contact'));
            expect(getByTestId('fd-c-menu__panel')
                .getAttribute('class')
            ).toContain('fd-c-menu__panel--closed');
        });
    });
});
