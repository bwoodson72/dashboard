import {describe, it, expect, afterEach} from 'vitest';
import {cleanup, render, screen} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from '@/app/store';
import { DarkModeToggle } from './darkModeToggle';
import {toggleDarkMode} from "@/features/darkMode/darkModeSlice";
import '@testing-library/jest-dom';

afterEach(() => {cleanup()})
describe('DarkModeToggle', () => {
    it('renders a dark mode icon when mode is dark', () => {

        render(<Provider store={store}><DarkModeToggle /></Provider>)

        const icon = screen.getByTestId('dark-mode-icon');
        expect(icon).toBeTruthy();
    });
        it('renders a light mode icon when mode is light', () => {

store.dispatch(toggleDarkMode());
            render(
                <Provider store={store}>
                    <DarkModeToggle />
                </Provider>
            )

            const icon = screen.getByTestId('light-mode-icon');
            expect(icon).toBeInTheDocument();
        })
});