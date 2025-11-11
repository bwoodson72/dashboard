'use client'
import React from 'react';
import {Box, IconButton} from '@mui/material';
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import {useDispatch} from "react-redux";
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";
import {Container} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';
import CancelIcon from '@mui/icons-material/Cancel';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from "@mui/material/Tooltip";
import NavLink from "@/components/navigation/navlink";


export function IconSideBar():React.JSX.Element {

    const dispatch = useDispatch();

    return (
        <>

        <AppBar

            sx={{
                position:"fixed",
                left:0,
                top:70,
                width:60,
                height:'100vh',
                bgcolor:'background.paper',
                zIndex: (theme) => theme.zIndex.drawer + 1}}
            onMouseEnter={() => dispatch(toggleSidePanel())}



        >
            <Toolbar
                sx={{width:60,
                    height:'calc(100vh - 70px)',
                    display:'flex',
                    flexDirection:'column',
                    justifyContent:'flex-start',
                    alignItems:'center',
                }}   >
                <Box sx={{mt:1}}  >

                    <Tooltip title="Main View" placement='right-start' arrow >
                        <Box>
                            <NavLink href="/" icon={<HomeIcon />}  />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Customer info and orders"  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/customers" icon={<PeopleIcon />} />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Products and Inventory"  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/products" icon={<InventoryIcon />} />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Orders to be fulfilled"  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/orders" icon={<ShoppingCartIcon />} />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Sales and reports"  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/sales" icon={<AttachMoneyIcon />} />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Messages and notifications"  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/messages" icon={<EmailIcon />} />
                        </Box>
                    </Tooltip>
                </Box>
                <Box>
                    <Tooltip title="Account settings"  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/settings" icon={<SettingsIcon />} />
                        </Box>
                    </Tooltip>
                    <Tooltip title='Documentation and faqs'  placement='right-start' arrow>
                        <Box>
                            <NavLink href="/help" icon={<HelpIcon />} />
                        </Box>
                    </Tooltip>
                </Box>


            </Toolbar>
        </AppBar>

        </>
    )
}