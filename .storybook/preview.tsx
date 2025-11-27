import type { Preview } from '@storybook/nextjs-vite'

import { CssBaseline } from '@mui/material';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import {store} from "@/app/store";
import {ReduxProvider} from "@/components/reduxProvider";
/* TODO: update import for your custom Material UI themes */
import { darkMode, lightMode } from '@/theme/theme';

import {ClientTheme} from "@/theme/theme";

const preview: Preview = {

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },

    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

  },

  decorators: [withThemeFromJSXProvider({
    GlobalStyles: CssBaseline,
    Provider: ClientTheme,
    themes: {
      // Provide your custom themes here
      light: lightMode,
      dark: darkMode,
    },
    defaultTheme: 'dark',
  }),

      (Story) => (
          <ReduxProvider store={store}>
              <ClientTheme>
                  <Story />
              </ClientTheme>
              </ReduxProvider>
      ),
  ],
};

export default preview;