'use client'

import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";


 /**
  * Represents the state of a user interface in regard to dark mode.
  *
  * This interface defines a structure to indicate whether dark mode is enabled
  * or not in a given application or component.
  *
  * Property:
  * - isDarkMode: A boolean indicating the current dark mode state.
  */
 interface DarkModeState {
    isDarkMode: boolean;
}

const initialState: DarkModeState = {isDarkMode: true};


/**
 * A Redux slice managing the state of the dark mode feature in the application.
 * Provides a toggle mechanism to switch between dark mode and light mode.
 *
 * The slice includes:
 * - `name`: The name of the slice (`darkMode`).
 * - `initialState`: The initial state of the dark mode feature.
 * - `reducers`: Contains the reducer for toggling the dark mode state.
 */
export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.isDarkMode = !state.isDarkMode;
        },
    },
});


export const {toggleDarkMode} = darkModeSlice.actions;
export const selectIsDarkMode = (state: DarkModeState) => state.isDarkMode;
export default darkModeSlice.reducer;