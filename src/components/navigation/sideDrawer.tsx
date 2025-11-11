'use client'

import {Drawer, Box, Typography, Container} from "@mui/material";
import React from "react";
import NavLink from "./navlink";

import {ClickAwayListener} from "@mui/material";

import Tooltip from '@mui/material/Tooltip';

import {useSelector, useDispatch} from "react-redux";
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";
import {RootState} from "@/app/store";



/**
 * Represents the sidebar component of the application, providing navigation links and toggling functionality.
 *
 * @return {React.JSX.Element} The rendered sidebar component with navigation links and actions.
 */
export function SideDrawer():React.JSX.Element {


const sidePanelOpen = useSelector((state:RootState) => state.sidePanel.isOpen);
const dispatch = useDispatch();

    return (

        <Drawer anchor="left" open={sidePanelOpen}
                sx={{
                    position:'fixed',
                    top:70,
                    left:61,
                    width:250,
                    display:'flex',
                    flexDirection:'column',
                    height:'calc(100vh - 70px)',
                    justifyContent:'space-between',
                    bgcolor:'background.paper'
                }}
        >
            <ClickAwayListener onClickAway={()=>dispatch(toggleSidePanel())}>
            <Container maxWidth='sm' sx={{
                position:'fixed',
                top:70,
                left:61,
                width:250,
                display:'flex',
                flexDirection:'column',
                height:'calc(100vh - 70px)',
                justifyContent:'space-between',
                bgcolor:'background.paper'
            }}>
                {/*drawer toggle button*/}
                {/*<Box sx={{*/}
                {/*    width:'100%' ,*/}
                {/*    display:'flex',*/}
                {/*    justifyContent:'flex-end',*/}
                {/*    alignItems:'center',*/}
                {/*    mb:2,*/}
                {/*    position:"absolute",*/}
                {/*    top:0,*/}
                {/*    right:0*/}
                {/*}}>*/}
                {/*<DrawerToggle >*/}
                {/*    <CancelIcon/>*/}
                {/*    </DrawerToggle>*/}
                {/*</Box>*/}
                {/*main navigation links*/}
                <Box sx={{mt:1}}  >

                    <Tooltip title="Main View" placement='right-start' arrow >
                       <Box>
                     <NavLink href="/" label="Home" />
                       </Box>
                    </Tooltip>
                    <Tooltip title="Customer info and orders"  placement='right-start' arrow>
                     <Box>
                 <NavLink href="/customers" label="Customers" />
                     </Box>
                    </Tooltip>
                    <Tooltip title="Products and Inventory"  placement='right-start' arrow>
                        <Box>
                <NavLink href="/products" label="Products" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Orders to be fulfilled"  placement='right-start' arrow>
                        <Box>
                <NavLink href="/orders" label="Orders" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Sales and reports"  placement='right-start' arrow>
                        <Box>
                <NavLink href="/sales" label="Sales" />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Messages and notifications"  placement='right-start' arrow>
                        <Box>
                <NavLink href="/messages" label="Messages" />
                        </Box>
                    </Tooltip>
            </Box>

                {/*secondary navigation links*/}
                <Box>
                    <Tooltip title="Account settings"  placement='right-start' arrow>
                        <Box>
                    <NavLink href="/settings" label="Settings" />
                        </Box>
                    </Tooltip>
                    <Tooltip title='Documentation and faqs'  placement='right-start' arrow>
                        <Box>
                    <NavLink href="/help" label="Help" />
                        </Box>
                    </Tooltip>
                </Box>
        </Container>
            </ClickAwayListener>
        </Drawer>

    )
}