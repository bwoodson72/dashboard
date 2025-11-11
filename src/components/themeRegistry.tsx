'use client';

import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import createEmotionCache from './createEmotionCache';

const clientSideEmotionCache = createEmotionCache();
const theme = createTheme();

/**
 * ThemeRegistry sets up Emotion and Material UI providers for consistent theming and style insertion order.
 *
 * Props:
 * - children: React nodes to render within the theming context.
 * - emotionCache: Optional Emotion cache to use (e.g., an SSR-provided cache). Falls back to a client-side cache.
 *
 * Behavior:
 * - Wraps the app with `CacheProvider` for Emotion and `ThemeProvider` for MUI.
 * - Applies `CssBaseline` to normalize styles across browsers.
 */
export default function ThemeRegistry({
                                          children,
                                          emotionCache,
                                      }: {
    children: React.ReactNode;
    emotionCache?: ReturnType<typeof createEmotionCache>;
}) {
    const cache = emotionCache ?? clientSideEmotionCache;
    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}