'use client'
import {configureStore} from '@reduxjs/toolkit';
import {darkModeSlice} from "@/features/darkMode/darkModeSlice";
import {sidePanelSlice} from "@/features/sidePanel/sidePanelSlice";
import { dashApi} from "@/features/api/apiSlice";
import { setupListeners } from '@reduxjs/toolkit/query';
import { animationSettingsSlice } from '@/features/animationSettings/animationSlice';
import { notificationSettingSlice } from '@/features/notificationSettings/notificationSettingSlice';



/**
 * Configured Redux store instance for the application.
 *
 * This store integrates multiple reducers and middleware required for state management:
 * - `darkMode`: Manages the state related to the application's dark mode functionality.
 * - `sidePanel`: Handles the state of the side panel component.
 * - Dynamic reducer added from `apiSlice.reducerPath`: Manages API-related state.
 *
 * Custom middleware is concatenated to enhance functionality:
 * - Default middleware is extended with `dashApi.middleware` for handling additional API interactions.
 *
 * The store is a central part of the application state management and ensures that all state updates
 * and middleware actions are properly configured and executed.
 */
export const store = configureStore({
    reducer:{
        darkMode: darkModeSlice.reducer,
        sidePanel: sidePanelSlice.reducer,
        [dashApi.reducerPath]:dashApi.reducer,
        animationSettings: animationSettingsSlice.reducer,
        notificationSettings: notificationSettingSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(dashApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);