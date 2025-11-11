import Link from 'next/link';
import {Typography, Box} from '@mui/material';
import React from 'react';
import {useDispatch} from 'react-redux';
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";


/**
 * NavLink renders a sidebar navigation entry composed of an icon and a text label.
 *
 * Props:
 * - href: Destination route for the link.
 * - label: Text label displayed to the user.
 * - icon: Leading icon element; typically from MUI icons.
 *
 * Accessibility:
 * - Ensure the icon is decorative or has appropriate aria-label if it conveys meaning on its own.
 */
export default function NavLink({href, label, icon}: { href: string, label?: string, icon?: React.JSX.Element }) {

const dispatch = useDispatch();
    return (
       
        <Box sx={{display:'flex', justifyContent:'flex-start', alignItems:'center', mb:2}}>
            {icon}
        <Link onClick={()=>dispatch(toggleSidePanel())} href={href} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography sx={{fontSize:24, }}>{label}</Typography>
        </Link>
        </Box>
    )
}