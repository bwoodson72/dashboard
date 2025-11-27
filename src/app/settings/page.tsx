'use client'
import React from "react";
import{Box, Container, FormControl, FormControlLabel, FormGroup, Typography} from "@mui/material";

import {Switch} from '@mui/material'
import { useDispatch } from "react-redux";
import { toggleEnabled } from "@/features/animationSettings/animationSlice";
import { RootState } from "@/app/store";
import { useSelector } from "react-redux";
import { toggleEmailNotifications, togglePushNotifications } from "@/features/notificationSettings/notificationSettingSlice";


const label = { inputProps: { 'aria-label': 'Enable Animation' } };

export default function Page(){

const dispatch = useDispatch();
const isAnimationEnabled = useSelector((state:RootState)=>state.animationSettings.enabled);
const checked = isAnimationEnabled ? true : false;
const isEmailNotificationEnabled = useSelector((state:RootState)=>state.notificationSettings.emailNotifications);


const isPushNotificationEnabled = useSelector((state:RootState)=>state.notificationSettings.pushNotifications);

    return (
        <Container maxWidth='xl' sx={{mt:10, display:'flex', flexDirection:'column', gap:2, justifyContent:'center', alignItems:'center'}}>
            <Typography>Settings</Typography>
<Box sx={{mt:4, display:'flex', flexDirection:'column', gap:4}}>
    
    <Box sx={{display:'flex', alignItems:'center', gap:2}}>
        <FormControl>
        <FormGroup>
         <FormControlLabel control={<Switch aria-label="Enable Animation" defaultChecked checked={isAnimationEnabled} size='medium'  onChange = {()=>dispatch(toggleEnabled())} />} label="Enable Animations" />  

           <FormControlLabel control={<Switch aria-label='Enable Email Notifications' defaultChecked checked={isEmailNotificationEnabled} size='medium'  onChange = {()=>dispatch(toggleEmailNotifications())} />} label="Enable Email Notifications" />   
              <FormControlLabel control={<Switch aria-label='Enable Push Notifications' defaultChecked checked={isPushNotificationEnabled} size='medium'  onChange = {()=>dispatch(togglePushNotifications())} />} label="Enable Push Notifications" />
         
      
            </FormGroup>
        </FormControl>
    </Box>
</Box>            
        
        </Container>
    )
}