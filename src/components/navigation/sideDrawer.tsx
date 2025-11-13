'use client'



import React from "react";
import { Drawer, Box, Container, Tooltip } from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidePanel } from "@/features/sidePanel/sidePanelSlice";
import { RootState } from "@/app/store";
import NavLink from "./navlink";

// This component renders a left drawer aligned under a 70px top bar,
// positioned adjacent to the icon rail (assumed 61px wide).
export function SideDrawer(): React.JSX.Element {
  const sidePanelOpen = useSelector((state: RootState) => state.sidePanel.isOpen);
  const dispatch = useDispatch();

  const TOP_BAR_HEIGHT = 70;
  const ICON_RAIL_WIDTH = 61;


  return (
    <Drawer
      anchor="left"
      open={sidePanelOpen}
      // Use slots/slotProps in MUI v7 instead of PaperProps
      slotProps={{
        paper: {
          sx: {
            position: 'fixed',
            top: TOP_BAR_HEIGHT,
            left: ICON_RAIL_WIDTH,
            width: 250,
            height: `calc(100dvh - ${TOP_BAR_HEIGHT}px)`,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            bgcolor: 'background.paper',
          },
        },
      }}
      // Keep the Drawer mounted to avoid layout shift when toggling
      keepMounted
      ModalProps={{ keepMounted: true }}
    >
      <ClickAwayListener onClickAway={() =>sidePanelOpen&& dispatch(toggleSidePanel())}>
        <Container
          maxWidth="sm"
          sx={{
            // Fill the drawer paper
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            px: 0,
          }}
        >
          {/* Main navigation */}
          <Box sx={{ mt: 1, px: 1 }}>
            <Tooltip title="Main View" placement="right-start" arrow>

                <NavLink href="/" label="Home" />

            </Tooltip>
            <Tooltip title="Customer info and orders" placement="right-start" arrow>

                <NavLink href="/customers" label="Customers" />

            </Tooltip>
            <Tooltip title="Products and Inventory" placement="right-start" arrow>

                <NavLink href="/products" label="Products" />

            </Tooltip>
            <Tooltip title="Orders to be fulfilled" placement="right-start" arrow>

                <NavLink href="/orders" label="Orders" />

            </Tooltip>
            <Tooltip title="Sales and reports" placement="right-start" arrow>

                <NavLink href="/sales" label="Sales" />

            </Tooltip>
            <Tooltip title="Messages and notifications" placement="right-start" arrow>

                <NavLink href="/messages" label="Messages" />

            </Tooltip>
              <NavLink href="/customers/details" label="Customer Detail" />
          </Box>

          {/* Secondary navigation */}
          <Box sx={{ px: 1, pb: 1 }}>
            <Tooltip title="Account settings" placement="right-start" arrow>

                <NavLink href="/settings" label="Settings" />

            </Tooltip>
            <Tooltip title="Documentation and faqs" placement="right-start" arrow>

                <NavLink href="/help" label="Help" />

            </Tooltip>
          </Box>
        </Container>
      </ClickAwayListener>
    </Drawer>
  );
}