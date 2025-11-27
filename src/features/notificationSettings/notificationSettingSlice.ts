import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NotificationSettingsState {
    emailNotifications: boolean;
    pushNotifications: boolean;
}

const initialState: NotificationSettingsState = {
    emailNotifications: true,
    pushNotifications: true,
};

export const notificationSettingSlice = createSlice({
    name: 'notificationSettings',
    initialState,
    reducers: {
        toggleEmailNotifications(state) {
            state.emailNotifications = !state.emailNotifications;
        },
        togglePushNotifications(state) {
            state.pushNotifications = !state.pushNotifications;
        },
        setEmailNotifications(state, action: PayloadAction<boolean>) {
            state.emailNotifications = action.payload;
        },
        setPushNotifications(state, action: PayloadAction<boolean>) {
            state.pushNotifications = action.payload;
        },
    },
});

export const {
    toggleEmailNotifications,
    togglePushNotifications,
    setEmailNotifications,
    setPushNotifications,
} = notificationSettingSlice.actions;

export default notificationSettingSlice.reducer;