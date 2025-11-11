'use client'
import React from "react";
import {IconButton, useTheme} from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/store";
import {toggleDarkMode} from "@/features/darkMode/darkModeSlice";


/**
 * A functional React component that toggles the application's dark mode setting.
 * It uses the Redux state to determine the current mode and updates the state when toggled.
 *
 * @return {React.JSX.Element} A button that shows an icon representing the current mode (dark or light) and toggles the mode on click.
 */
export function DarkModeToggle():React.JSX.Element{
    const isDarkMode = useSelector((state:RootState)=>state.darkMode.isDarkMode);
    const dispatch = useDispatch();
    return (
        <IconButton aria-label="toggle dark mode">
            {isDarkMode? <DarkModeIcon onClick={()=>dispatch(toggleDarkMode())}/> : <LightModeIcon onClick={()=>dispatch(toggleDarkMode())}/>}
        </IconButton>
    )
}