'use client'
import Link from 'next/link';
import {Typography, Box, Button, IconButton} from '@mui/material';
import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleSidePanel} from "@/features/sidePanel/sidePanelSlice";
import {RootState} from "@/app/store";

type CommonProps = {
    href: string;
    size?: string;
    icon?: React.ReactNode;
    hovered?: boolean;
};

type IconVariant = CommonProps & {
    variant: 'icon';
    icon: React.ReactNode;
    label?: string;
};

type ContainedVariant = CommonProps & {
    variant: 'contained';
    label: string;
    icon?: React.ReactNode;
};

type TextVariant = CommonProps & {
    variant: 'text';
    label: string;
    icon?: React.ReactNode;
};

type NavLinkProps = IconVariant | ContainedVariant | TextVariant;






const DEFAULT_FONT_SIZE = '1.2rem';

const linkBoxStyles = {
    display: 'flex',
    alignItems: 'center',
    gap: 1,
    textDecoration: 'none',
};

/**
 * Navigation link component with multiple variants for different use cases.
 *
 * @param props - Component props
 * @param props.href - The URL to navigate to
 * @param props.variant - Visual variant: 'icon', 'contained', or 'text'
 * @param props.label - Text label (required for 'contained' and 'text' variants)
 * @param props.icon - Optional icon element
 * @param props.hovered - For 'icon' variant: whether to show expanded label
 * @param props.size - Font size for label text (default: '1.2rem')
 * @returns Rendered navigation link component
 */
export function NavLink(props: NavLinkProps): React.JSX.Element {
    const dispatch = useDispatch();
    const sidePanelOpen = useSelector((state: RootState) => state.sidePanel.isOpen);
    const { href, size = DEFAULT_FONT_SIZE, icon, hovered } = props;

    const handleClick = useCallback(() => {
        if (sidePanelOpen) {
            dispatch(toggleSidePanel());
        }
    }, [sidePanelOpen, dispatch]);

    // Render based on variant
    switch (props.variant) {
        case 'contained':
            return (
                <Button
                    variant="contained"
                    component={Link}
                    href={href}
                    onClick={handleClick}
                >
                    {props.label}
                </Button>
            );

        case 'icon':
            return (
                <Box
                    component={Link}
                    href={href}
                    sx={{
                        ...linkBoxStyles,
                        justifyContent: hovered ? 'flex-start' : 'center',
                    }}
                >
                    <IconButton onClick={handleClick}>
                        {icon}
                        {hovered && props.label && (
                            <Typography
                                variant="h6"
                                sx={{
                                    ml: 2,
                                    fontSize: size,
                                    fontWeight: 'bold',
                                }}
                            >
                                {props.label}
                            </Typography>
                        )}
                    </IconButton>
                </Box>
            );

        case 'text':
            return (
                <Box
                    component={Link}
                    href={href}
                    onClick={handleClick}
                    sx={{
                        ...linkBoxStyles,
                        justifyContent: 'center',
                    }}
                >
                    <Button variant="text">
                        <Typography
                            sx={{
                                textAlign: 'center',
                                textDecoration: 'none',
                                fontSize: size,
                                fontWeight: 'bold',
                                display: 'flex',
                                alignItems: 'center',
                                gap: 1,
                            }}
                        >
                            {icon && icon}
                            {props.label}
                        </Typography>
                    </Button>
                </Box>
            );

        default:
            // Fallback to contained variant for unknown variants
            const fallbackLabel = (props as { label?: string }).label || 'Link';
            return (
                <Button
                    variant="contained"
                    component={Link}
                    href={href}
                    onClick={handleClick}
                >
                    {fallbackLabel}
                </Button>
            );
    }
}
