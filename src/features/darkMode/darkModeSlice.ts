'use client'

import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";

 interface DarkModeState {
    isDarkMode: boolean;
}

const initialState: DarkModeState = {isDarkMode: true};

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