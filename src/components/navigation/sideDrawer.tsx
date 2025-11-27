'use client'



import React from "react";
import {Drawer, Box, Container, Toolbar} from "@mui/material";
import { ClickAwayListener } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidePanel } from "@/features/sidePanel/sidePanelSlice";
import { RootState } from "@/app/store";
import {NavLink} from "./navlink";
import {LoginButton} from "./loginButton";

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

    >
        <Toolbar/>
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
          <Box sx={{ mt: 1,ml:2, px: 1, display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>


                <NavLink variant='text' size='1.2rem' href="/" label="Home" />



                <NavLink size='1.2rem' variant='text' href="/customers" label="Customers" />


                <NavLink size='1.2rem' variant='text' href="/products" label="Products" />



                <NavLink size='1.2rem' variant='text' href="/orders" label="Orders" />



                <NavLink size='1.2rem' variant='text' href="/sales" label="Sales" />



                <NavLink size='1.2rem' variant='text' href="/messages" label="Messages" />


              <NavLink size='1.2rem' variant='text' href="/customers/details" label="Customer Detail" />
          </Box>

          {/* Secondary navigation */}
          <Box  sx={{ mt: 1,ml:2, px: 1, display: 'flex', flexDirection: 'column', gap: 1, alignItems: 'flex-start' }}>

            <LoginButton/>
                <NavLink size='1.2rem'variant='text' href="/settings" label="Settings" />


                <NavLink size='1.2rem' variant={'text'} href="/help" label="Help" />


          </Box>
        </Container>
      </ClickAwayListener>
    </Drawer>
  );
}