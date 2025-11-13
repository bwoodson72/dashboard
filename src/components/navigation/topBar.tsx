'use client'

import {AppBar, Toolbar, Typography} from "@mui/material";
import React from "react";
import  {DrawerToggle} from "./drawerToggle";
import {SideDrawer} from "./sideDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import {DarkModeToggle} from "@/components/darkModeToggle";



/**
 * A functional component that renders the top bar of an application, including an app bar, a toolbar, and a sidebar.
 * The top bar includes a menu toggle, a title, and a dark mode toggle.
 *
 * @return {React.JSX.Element} The rendered TopBar component.
 */
export function TopBar():React.JSX.Element{

    return (
        <>

        <AppBar position="static" sx={{width: {xs:'100vw'}}}>
            <Toolbar  >
                <DrawerToggle>
                    <MenuIcon/>
                </DrawerToggle>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Ecommerce
                </Typography>
                <DarkModeToggle/>
            </Toolbar>
        </AppBar>




        </>
    )
}