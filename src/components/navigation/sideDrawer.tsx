'use client'
import React, {useCallback} from "react";
import {Drawer, Box, Container, Toolbar, ClickAwayListener} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidePanel } from "@/features/sidePanel/sidePanelSlice";
import { RootState } from "@/app/store";
import {NavLink} from "./navlink";
import {LoginButton} from "./loginButton";

type NavigationItem = {
    href: string;
    label: string;
};

const DEFAULT_FONT_SIZE = '1.2rem';

/**
 * Main navigation items for the side drawer.
 */
const MAIN_NAV_ITEMS: NavigationItem[] = [
    { href: '/', label: 'Home' },
    { href: '/customers', label: 'Customers' },
    { href: '/products', label: 'Products' },
    { href: '/orders', label: 'Orders' },
    { href: '/sales', label: 'Sales' },
    { href: '/messages', label: 'Messages' },
    { href: '/customers/details', label: 'Customer Detail' },
];

/**
 * Secondary navigation items (settings, help, etc.)
 */
const SECONDARY_NAV_ITEMS: NavigationItem[] = [
    { href: '/settings', label: 'Settings' },
    { href: '/help', label: 'Help' },
];

const drawerContainerStyles = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    px: 0,
};

const navBoxStyles = {
    mt: 1,
    ml: 2,
    px: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
    alignItems: 'flex-start',
};

/**
 * Side drawer component that slides in from the left on mobile/tablet screens.
 * Contains main navigation links and secondary navigation items.
 *
 * The drawer opens/closes based on Redux state and can be dismissed by clicking away.
 */
export function SideDrawer(): React.JSX.Element {
    const sidePanelOpen = useSelector((state: RootState) => state.sidePanel.isOpen);
    const dispatch = useDispatch();

    const handleClickAway = useCallback(() => {
        if (sidePanelOpen) {
            dispatch(toggleSidePanel());
        }
    }, [sidePanelOpen, dispatch]);

    return (
        <Drawer anchor="left" open={sidePanelOpen}>
            <Toolbar />
            <ClickAwayListener onClickAway={handleClickAway}>
                <Container maxWidth="sm" sx={drawerContainerStyles}>
                    {/* Main navigation */}
                    <Box sx={navBoxStyles}>
                        {MAIN_NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.href}
                                variant="text"
                                size={DEFAULT_FONT_SIZE}
                                href={item.href}
                                label={item.label}
                            />
                        ))}
                    </Box>

                    {/* Secondary navigation */}
                    <Box sx={navBoxStyles}>
                        <LoginButton />
                        {SECONDARY_NAV_ITEMS.map((item) => (
                            <NavLink
                                key={item.href}
                                variant="text"
                                size={DEFAULT_FONT_SIZE}
                                href={item.href}
                                label={item.label}
                            />
                        ))}
                    </Box>
                </Container>
            </ClickAwayListener>
        </Drawer>
    );
}