'use client';

import React from 'react';
import { createTheme, ThemeProvider, ThemeOptions, Theme } from '@mui/material/styles';
import {RootState} from "@/app/store";
import {useSelector} from "react-redux";


const darkTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
    primary: { main: '#9799af', dark: '#191a20', light: '#e0e7ff' },
    secondary: { main: '#a9a9c8', dark: '#40404e', light: '#9999a3' },
    background: { default: '#020204', paper: '#021472' },
  },
    components: {
        MuiLink: {
            styleOverrides: {
                root: { textDecoration: 'none', color: 'inherit' },
            },
            defaultProps: { underline: 'none' },
        },
    }
};

const lightTheme: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#1948d2',
            light: '#726dd6',
        },
        secondary: {
            main: '#2749b0',
            dark: '#091027',
        },
        background: {
            paper: '#afafb9',
            default: '#e8e8e8',
        },
    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: { textDecoration: 'none' },
            },
            defaultProps: { underline: 'none' },
        },
    }
};

export const darkMode: Theme = createTheme(darkTheme);
export const lightMode: Theme = createTheme(lightTheme);

export function ClientTheme({
  children,

}: {
  children: React.ReactNode;

}): React.JSX.Element {
    const isDarkMode = useSelector((state:RootState)=>state.darkMode.isDarkMode) ;


  return <ThemeProvider theme={isDarkMode?darkMode:lightMode}>{children}</ThemeProvider>;
}