# Components

This folder contains reusable UI components used across the project.

## Purpose
- Centralize presentational and small container components.
- Promote reuse, consistency, and easy testing.

## Recommended folder layout
- One folder per component:
    - ComponentName/
        - ComponentName.jsx (or .tsx)
        - index.js (re-exports default)
        - ComponentName.module.css / .scss (or styled file)
        - ComponentName.test.jsx
        - README.md (optional, small usage notes)
- Or for very small components, a single file is acceptable.

Example:
```
components/
    Button/
        Button.jsx
        index.js
        Button.module.css
        Button.test.jsx
    index.js        // barrel file exporting components
```

## Naming & conventions
- Component files and folders: PascalCase (e.g., Button, UserCard).
- Component file exports default the component.
- Prefer functional components and hooks.
- Keep components small and focused (single responsibility).
- Prefer composition over prop-based feature flags.
- Use prop-types or TypeScript for props typing (follow project convention).

## Styling
- Co-locate styles with the component (CSS Modules, SCSS, or styled-components).
- Avoid global styles; keep scope local where possible.

## Tests & Storybook
- Add unit tests alongside components (Jest + React Testing Library preferred).
- Add stories for visual review if Storybook is used.

## Accessibility
- Ensure semantic HTML and keyboard accessibility.
- Add aria-* attributes where appropriate, and test with a11y tools.

## Exports
- Keep a barrel file (components/index.js) that re-exports components for simpler imports:
```js
export { default as Button } from './Button';
export { default as UserCard } from './UserCard';
```

## How to add a new component
1. Create folder with PascalCase name.
2. Add implementation, styles, tests, and stories.
3. Export from the components/index.js barrel file.
4. Run lint, tests, and Storybook (if applicable).

## Documentation
- Document complex components with usage examples and prop explanations in the component README or Storybook.

## Linting & Formatting
- Follow project ESLint and Prettier rules. Run linter before opening PR.

## Component template: ComponentName

Use this template as a starting point for new components. Replace `ComponentName` with the actual name.

### files
- ComponentName.jsx
- index.js
- ComponentName.module.css
- ComponentName.test.jsx
- README.md
- ComponentName.stories.jsx (optional)

### ComponentName.jsx
```jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ComponentName.module.css';

const ComponentName = ({ title, onClick, className, ...rest }) => {
    return (
        <div
            className={[styles.root, className].filter(Boolean).join(' ')}
            role="region"
            aria-label={title}
            {...rest}
        >
            <button type="button" className={styles.button} onClick={onClick}>
                {title}
            </button>
        </div>
    );
};

ComponentName.propTypes = {
    title: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string,
};

ComponentName.defaultProps = {
    title: 'ComponentName',
    onClick: undefined,
    className: undefined,
};

export default ComponentName;
```

### index.js
```js
export { default } from './ComponentName';
```

### ComponentName.module.css
```css
.root {
    display: inline-block;
}

.button {
    padding: 8px 12px;
    border: none;
    background-color: #0366d6;
    color: white;
    border-radius: 4px;
    cursor: pointer;
}

.button:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}
```

### ComponentName.test.jsx
```jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentName from './ComponentName';

test('renders with title and handles click', () => {
    const handleClick = jest.fn();
    render(<ComponentName title="Click me" onClick={handleClick} />);

    const btn = screen.getByRole('button', { name: /click me/i });
    expect(btn).toBeInTheDocument();

    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalledTimes(1);
});
```

### ComponentName.stories.jsx (optional)
```jsx
import React from 'react';
import ComponentName from './ComponentName';

export default {
    title: 'Components/ComponentName',
    component: ComponentName,
};

export const Default = () => <ComponentName title="Primary" />;
export const WithAction = () => <ComponentName title="Action" onClick={() => alert('clicked')} />;
```

### README.md (component usage)
```md
# ComponentName

Short description of the component.

## Usage
```jsx
import React from 'react';
import ComponentName from './ComponentName';

export default function Example() {
    return <ComponentName title="Save" onClick={() => console.log('save')} />;
}
```

## Props
- title: string — Label shown in the component.
- onClick: function — Click handler for the button.
- className: string — Optional className to extend styles.
```