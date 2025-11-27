'use client'
import Link from 'next/link';
import {Typography, Box, Button} from '@mui/material';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";
import {IconButton} from "@mui/material";
import {RootState} from "@/app/store";
import {selectIsDarkMode} from "@/features/darkMode/darkModeSlice";


type CommonProps = {
    href: string;
     size?:string;
     icon?:React.ReactNode;
     label?:string;
     variant?:'contained'|'icon'|'text';
     hovered?:boolean;
     color?:string;

};
type IconVariant =
    CommonProps&
{
    variant:'icon';
    icon:React.ReactNode;
    label?:string;
}
type ContainedVariant = CommonProps&{
    variant:'contained';
    label:string;
    icon?:React.ReactNode;

}
type TextVariant = CommonProps&{
    variant:'text';
    label:string;
}

type NavLinkProps = IconVariant | ContainedVariant|TextVariant;






/**
 * Renders a navigation link component with different variants and optional icon and label.
 *
 * @param {Object} props - The properties for the NavLink component.
 * @param {string} props.href - The URL to navigate to when the link is clicked.
 * @param {string} props.label - The text to display for the navigation link.
 * @param {React.ReactNode} [props.icon] - The optional icon to display with the navigation link.
 * @param {string} props.variant - The variant of the component, can be 'contained', 'icon', or default.
 * @param {string} [props.size='1.2rem'] - The font size for the label in the default variant.
 * @returns {React.JSX.Element} - The rendered navigation link component.
 */
export  function NavLink(props:NavLinkProps ):React.JSX.Element {

//determine if we are in dark mode
    const isDarkMode = useSelector(selectIsDarkMode);
//determine the color of the text based on the dark mode setting
    const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-300';

    const {href, size, label, icon, hovered, color=textColor} = props;
const dispatch = useDispatch();
const sidePanelOpen = useSelector((state:RootState) => state.sidePanel.isOpen);
   let component;

    switch (props.variant) {
     case 'contained':

         component = <Button
             variant="contained"
             component={Link}
             href={href}
             onClick={()=>sidePanelOpen && dispatch(toggleSidePanel())}
         >
             {label}
         </Button>
         break;

    case 'icon':

        component =
            (
             <Box component={Link} href={href} sx={{display:'flex', justifyContent: hovered?'flex-start':'center', alignItems:'center', gap:1, textDecoration:'none'}}>
            <IconButton
                onClick={()=>sidePanelOpen && dispatch(toggleSidePanel())}

                >
                {icon}
                 {
                     hovered &&
                     <Typography variant='h6' sx={{
                      ml:2,
                     fontSize: size,
                     fontWeight:'bold',
                 }}>{label}</Typography>}
            </IconButton>
             </Box>

            )
        break;
    case 'text':
            component =
                (
                <Box
                    onClick={()=>sidePanelOpen && dispatch(toggleSidePanel())}
                    component={Link}
                     href={href}
                     sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:1, textDecoration:'none'}}>
                    <Button variant="text" sx={{color:'#ffffff'}}>
                        <Typography  sx={{ textAlign:'center', textDecoration:'none', fontSize:size, fontWeight:'bold'}}  >{icon && icon } {label}</Typography>
                    </Button>
                </Box>
                )
            break;
    default:
        component =  (
            <Box
                onClick={()=>sidePanelOpen && dispatch(toggleSidePanel())}
                component={Link}
                href={href}
                sx={{display:'flex', justifyContent:'center', alignItems:'center', gap:1, textDecoration:'none'}}>
                <Button variant="contained" sx={{color:'#ffffff'}}>{label}
                <Typography  sx={{ textAlign:'center', textDecoration:'none', fontSize:size, fontWeight:'bold'}}  >{icon && icon } {label}</Typography>
                </Button>

            </Box>
        )
        break;
    }



    return  component;







}