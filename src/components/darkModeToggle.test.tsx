import {test, expect} from 'vitest';
import {render, screen} from '@testing-library/react';
import {DarkModeToggle} from './darkModeToggle';

test('renders DarkModeToggle component', () => {
  render(<DarkModeToggle/>);
});
