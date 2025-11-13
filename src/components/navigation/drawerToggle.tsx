'use client';
import React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import {useSelector, useDispatch} from 'react-redux';
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";
import {RootState} from "@/app/store";

/**
 * Props for the `DrawerToggle` component.
 *
 * - isOpen: Whether the navigation drawer is currently open. Used to derive tooltip text.
 * - toggleDrawerAction: Callback invoked when the button is clicked to toggle the drawer state.
 * - children: Icon or visual content to render inside the button (e.g., `MenuIcon`, `CancelIcon`).
 */
type DrawerToggleProps = {
//   isOpen: boolean;
//   toggleDrawerAction: () => void; // renamed to satisfy Next rule
  children: React.ReactNode;
};

/**
 * DrawerToggle renders an `IconButton` that opens/closes the navigation drawer.
 *
 * Accessibility:
 * - Applies an `aria-label` to the underlying button for screen readers.
 * - Displays a descriptive tooltip that changes based on `isOpen`.
 *
 * Usage:
 * ```tsx
 * <DrawerToggle isOpen={drawerOpen} toggleDrawerAction={toggleDrawer}>
 *   <MenuIcon />
 * </DrawerToggle>
 * ```
 */
// export function DrawerToggle({ isOpen, toggleDrawerAction, children }: DrawerToggleProps): React.JSX.Element {
//   return (
//     <Tooltip title={isOpen ? 'Close menu' : 'Open menu'}>
//       <IconButton onClick={toggleDrawerAction} aria-label="toggle drawer" edge="start" >
//         {children}
//       </IconButton>
//     </Tooltip>
//   );
// }

export function DrawerToggle({ children}: DrawerToggleProps): React.JSX.Element {
    const dispatch = useDispatch();
    const isOpen = useSelector((state:RootState) => state.sidePanel.isOpen);
    return (
        <Tooltip title={isOpen ? 'Close menu' : 'Open menu'}>
            <IconButton sx={{color:'secondary.light'}} onClick={()=>dispatch(toggleSidePanel())} aria-label="toggle drawer" edge="start" >
                {children}
            </IconButton>
        </Tooltip>
    )
}