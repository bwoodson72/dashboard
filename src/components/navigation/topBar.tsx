'use client'

import {AppBar, Box, Toolbar, Typography} from "@mui/material";
import React from "react";
import  {DrawerToggle} from "./drawerToggle";
import {SideDrawer} from "./sideDrawer";
import MenuIcon from '@mui/icons-material/Menu';
import {DarkModeToggle} from "@/components/darkModeToggle";
import {NavLink} from "@/components/navigation/navlink";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/app/store";
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";
import { Badge} from "@mui/material";
import {IconButton} from "@mui/material";
import NotificationsIcon from '@mui/icons-material/Notifications';
import EmailIcon from '@mui/icons-material/Email';
import {LoginButton} from "@/components/navigation/loginButton";


/**
 * A functional component that renders the top bar of an application, including an app bar, a toolbar, and a sidebar.
 * The top bar includes a menu toggle, a title, and a dark mode toggle.
 *
 * @return {React.JSX.Element} The rendered TopBar component.
 */
export function TopBar():React.JSX.Element{


    return (
        <>

        <AppBar position="fixed" sx={{width: {xs:'100vw'}, height:64 , zIndex: (theme) => theme.zIndex.drawer + 1}}>
            <Toolbar sx={{display:'flex', justifyContent:'space-between', alignItems:'center', width:'100vw', overflow:'hidden'}}  >
                {/*//side drawer toggle*/}
                <DrawerToggle >
                    <MenuIcon/>
                </DrawerToggle>

                {/*//logo*/}
                <Typography variant="h6"  sx={{ flexGrow: 1 }}>
                    Ecommerce
                </Typography>

                {/*//Notifications and email*/}

                <Box sx={{mr:4, display:'flex', gap:2}}>
                 <Badge badgeContent={4} color='secondary' >
               <IconButton>
               <NotificationsIcon sx={{color:'#ffffff'}}/>
               </IconButton>
                </Badge>

                 <Badge badgeContent={2} color='secondary' >
                <IconButton>
                 <EmailIcon sx={{color:'#ffffff'}}/>
                </IconButton>
                 </Badge>
                </Box>

                {/*//dark mode toggle and login*/}
                <Box sx={{ml:2}}>
                    <DarkModeToggle/>

                </Box>
                <Box sx={{ml:2, display:{xs:'none', md:'block'}}}>
                    <LoginButton/>
                </Box>
                <SideDrawer/>
            </Toolbar>

        </AppBar>




        </>
    )
}