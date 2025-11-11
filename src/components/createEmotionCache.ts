'use client';

import createCache from '@emotion/cache';

/**
 * Creates a client-side Emotion cache with `prepend: true` so that MUI styles are
 * injected first and can be safely overridden by your custom styles.
 *
 * In SSR scenarios, provide a compatible cache instance from the server and pass
 * it to `ThemeRegistry` so styles match between server and client.
 */
export default function createEmotionCache() {
    return createCache({ key: 'css', prepend: true });
}