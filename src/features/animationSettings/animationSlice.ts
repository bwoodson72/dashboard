/**
 * Animation Settings Slice
 * 
 * Manages the global animation settings state for the application.
 * 
 * @module animationSettingsSlice
 * 
 * @example
 * // Dispatch actions
 * dispatch(toggleEnabled());
 * dispatch(setEnabled(false));
 * 
 * @example
 * // Select state
 * const isAnimationEnabled = useSelector(selectAnimationsEnabled);
 */

/**
 * State interface for animation settings.
 * 
 * @interface AnimationSettingsState
 * @property {boolean} enabled - Whether animations are enabled globally
 */

/**
 * Toggles the animation enabled state.
 * 
 * @function toggleEnabled
 * @returns {void}
 * 
 * @example
 * dispatch(toggleEnabled()); // Flips enabled between true and false
 */

/**
 * Sets the animation enabled state to a specific value.
 * 
 * @function setEnabled
 * @param {boolean} enabled - The desired animation enabled state
 * @returns {void}
 * 
 * @example
 * dispatch(setEnabled(true)); // Enable animations
 * dispatch(setEnabled(false)); // Disable animations
 */

/**
 * Selector to retrieve the animation enabled state from the Redux store.
 * 
 * @function selectAnimationsEnabled
 * @param {RootState} state - The root Redux state
 * @returns {boolean} Whether animations are enabled
 * 
 * @example
 * const isEnabled = useSelector(selectAnimationsEnabled);
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/app/store';




export interface AnimationSettingsState {
    enabled: boolean;
}

const initialState: AnimationSettingsState = {
    enabled: true,
};

export const animationSettingsSlice = createSlice({
    name: 'animationSettings',
    initialState,
    reducers: {
        toggleEnabled(state) {
            state.enabled = !state.enabled;
        },
        setEnabled(state, action: PayloadAction<boolean>) {
            state.enabled = action.payload;
        },
    },
});

export const { toggleEnabled, setEnabled } = animationSettingsSlice.actions;

export const selectAnimationsEnabled = (state: RootState) =>
    state.animationSettings.enabled;

export default animationSettingsSlice.reducer;