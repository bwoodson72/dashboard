'use client'
import React from 'react';
import {Box, Button, IconButton, Typography} from '@mui/material';
import {AppBar} from "@mui/material";
import {Toolbar} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Tooltip from "@mui/material/Tooltip";
import {NavLink} from "@/components/navigation/navlink";
import {useState} from "react";
import {AnimatePresence, motion}  from "motion/react";



const BAR_WIDTH = 60;
const HOVERED_WIDTH = 195;
const ICON_PROPS = { fontSize:30, textAlign:'center'
}


export function IconSideBar():React.JSX.Element {

const [hovered, setHovered] = useState(false);
const [width, setWidth] = useState(BAR_WIDTH);

    return (
        <>

        <AppBar

            sx={{
                position:"fixed",
                left:0,
                top:64,
                width:width,
                display: {xs:'none',md:'flex'},
                height:'100vh',
                bgcolor:'background.paper',
                color:'default'
             }}



        >

            <Toolbar
                onMouseEnter={()=> {
                    setHovered(true);
                    setWidth(HOVERED_WIDTH);
                }
            }

                onMouseLeave={()=> {
                    setHovered(false);
                    setWidth(BAR_WIDTH);
                }

            }
                sx={{width:width,
                    height:'calc(100vh - 70px)',
                    display: {xs:'none',md:'flex'},
                    flexDirection:'column',
                    justifyContent:'space-between',
                    alignItems:'center',
                }}   >
                <Box sx={{mt:1}}  >

                    <Tooltip title="Main View" placement='right-start' arrow >
                        <Box>
                            <NavLink hovered={hovered} variant='icon' href="/" icon={<HomeIcon sx={ICON_PROPS} />}  label='Home'/>
                        </Box>
                    </Tooltip>
                    <Tooltip title="Customer info and orders"  placement='right-start' arrow>
                        <Box>

                            <NavLink hovered={hovered}
                                     variant='icon'
                                     href="/customers"
                                     icon={<PeopleIcon
                                         sx={ICON_PROPS}/>}
                            label='Customers'/>

                        </Box>
                    </Tooltip>
                    <Tooltip title="Products and Inventory"  placement='right-start' arrow>
                        <Box>
                        <NavLink hovered={hovered} variant='icon' href="/products" icon={<InventoryIcon sx={ICON_PROPS} />} label='Products'    />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Orders to be fulfilled"  placement='right-start' arrow>
                        <Box>
                            <NavLink hovered={hovered} variant='icon' href="/orders" icon={<ShoppingCartIcon sx={ICON_PROPS}  />}label='Orders' />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Sales and reports"  placement='right-start' arrow>
                        <Box>
                            <NavLink hovered={hovered} variant='icon' href="/sales" icon={<AttachMoneyIcon sx={ICON_PROPS} />}label='Sales' />
                        </Box>
                    </Tooltip>
                    <Tooltip title="Messages and notifications"  placement='right-start' arrow>
                        <Box>
                            <NavLink hovered={hovered} variant='icon' href="/messages" icon={<EmailIcon sx={ICON_PROPS}/>} label='Messages' />
                        </Box>
                    </Tooltip>
                </Box>
                <Box sx={{width:width, mb:2}}>
                    <Tooltip title="Account settings"  placement='right-start' arrow>
                        <Box>
                            <NavLink hovered={hovered} variant='icon' href="/settings" icon={<SettingsIcon sx={ICON_PROPS}/>} label='Settings' />
                        </Box>
                    </Tooltip>
                    <Tooltip title='Documentation and faqs'  placement='right-start' arrow>
                        <Box>
                            <NavLink hovered={hovered} variant='icon' href="/help" icon={<HelpIcon sx={ICON_PROPS}/>} label='Help' />
                        </Box>
                    </Tooltip>
                </Box>


            </Toolbar>

        </AppBar>

        </>
    )
}