'use client'
import React, {useState} from 'react';
import {Box, AppBar, Toolbar, Tooltip} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleIcon from '@mui/icons-material/People';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EmailIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import {NavLink} from "@/components/navigation/navlink";

const BAR_WIDTH = 60;
const HOVERED_WIDTH = 195;
const ICON_PROPS = { fontSize: 30, textAlign: 'center' };

type NavigationItem = {
    href: string;
    label: string;
    icon: React.ReactNode;
    tooltip: string;
    section: 'top' | 'bottom';
};

/**
 * Navigation items configuration for the icon sidebar.
 * Items are organized into top (main navigation) and bottom (settings/help) sections.
 */
const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        href: '/',
        label: 'Home',
        icon: <HomeIcon sx={ICON_PROPS} />,
        tooltip: 'Main View',
        section: 'top',
    },
    {
        href: '/customers',
        label: 'Customers',
        icon: <PeopleIcon sx={ICON_PROPS} />,
        tooltip: 'Customer info and orders',
        section: 'top',
    },
    {
        href: '/products',
        label: 'Products',
        icon: <InventoryIcon sx={ICON_PROPS} />,
        tooltip: 'Products and Inventory',
        section: 'top',
    },
    {
        href: '/orders',
        label: 'Orders',
        icon: <ShoppingCartIcon sx={ICON_PROPS} />,
        tooltip: 'Orders to be fulfilled',
        section: 'top',
    },
    {
        href: '/sales',
        label: 'Sales',
        icon: <AttachMoneyIcon sx={ICON_PROPS} />,
        tooltip: 'Sales and reports',
        section: 'top',
    },
    {
        href: '/messages',
        label: 'Messages',
        icon: <EmailIcon sx={ICON_PROPS} />,
        tooltip: 'Messages and notifications',
        section: 'top',
    },
    {
        href: '/settings',
        label: 'Settings',
        icon: <SettingsIcon sx={ICON_PROPS} />,
        tooltip: 'Account settings',
        section: 'bottom',
    },
    {
        href: '/help',
        label: 'Help',
        icon: <HelpIcon sx={ICON_PROPS} />,
        tooltip: 'Documentation and faqs',
        section: 'bottom',
    },
];

export function IconSideBar(): React.JSX.Element {
    const [hovered, setHovered] = useState(false);
    const [width, setWidth] = useState(BAR_WIDTH);

    const topItems = NAVIGATION_ITEMS.filter(item => item.section === 'top');
    const bottomItems = NAVIGATION_ITEMS.filter(item => item.section === 'bottom');

    const handleMouseEnter = () => {
        setHovered(true);
        setWidth(HOVERED_WIDTH);
    };

    const handleMouseLeave = () => {
        setHovered(false);
        setWidth(BAR_WIDTH);
    };

    const renderNavItem = (item: NavigationItem) => (
        <Tooltip key={item.href} title={item.tooltip} placement="right-start" arrow>
            <Box>
                <NavLink
                    hovered={hovered}
                    variant="icon"
                    href={item.href}
                    icon={item.icon}
                    label={item.label}
                />
            </Box>
        </Tooltip>
    );

    return (
        <AppBar
            sx={{
                position: 'fixed',
                left: 0,
                top: 64,
                width: width,
                display: { xs: 'none', md: 'flex' },
                height: '100vh',
                bgcolor: 'background.paper',
                color: 'default',
                overflowX: 'hidden',
            }}
        >
            <Toolbar
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{
                    width: width,
                    height: 'calc(100vh - 70px)',
                    display: { xs: 'none', md: 'flex' },
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Box sx={{ mt: 1 }}>
                    {topItems.map(renderNavItem)}
                </Box>
                <Box sx={{ width: width, mb: 2 }}>
                    {bottomItems.map(renderNavItem)}
                </Box>
            </Toolbar>
        </AppBar>
    );
}