'use client'
import { createSlice } from "@reduxjs/toolkit";


interface SidePanelState  {
    isOpen: boolean;
}
const initialState: SidePanelState = {
    isOpen: false,
}

export const sidePanelSlice = createSlice({
    name: 'sidePanel',
    initialState,
    reducers: {
        toggleSidePanel: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
})

export const {toggleSidePanel} = sidePanelSlice.actions;
export const selectIsOpen = (state: SidePanelState) => state.isOpen;
export default sidePanelSlice.reducer;