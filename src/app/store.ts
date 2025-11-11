'use client'
import {configureStore} from '@reduxjs/toolkit';
import {darkModeSlice} from "@/features/darkMode/darkModeSlice";
import {sidePanelSlice} from "@/features/sidePanel/sidePanelSlice";



/**
 * A Redux store configured with reducers for managing application state.
 *
 * The store utilizes two primary reducers:
 * 1. `darkMode`: Manages the state related to the application's dark mode settings.
 * 2. `sidePanel`: Handles the state pertaining to the visibility and behavior of the side panel.
 *
 * This store is created using `configureStore` from Redux Toolkit, which provides
 * a pre-configured store with good default settings and support for common use cases.
 */
export const store = configureStore({
    reducer:{
        darkMode: darkModeSlice.reducer,
        sidePanel: sidePanelSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;