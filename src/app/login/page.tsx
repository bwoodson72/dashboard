'use client'
import React from "react";
import {Container, Typography, Box, TextField, Divider} from "@mui/material";
import {IconButton} from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';


export default function Page(){

    return (
        <Container maxWidth='xl' sx={{mt:2 , display:'flex', flexDirection:'column', alignItems:'center'}}>
            <Typography variant='h1' sx={{
                fontFamily:'Roboto',
                fontWeight:'bold',
                fontSize:'2rem'
            }} >
                Login
            </Typography>
            <Box component='form'
                 sx={{
                     mt:2,
                     width:{"xs":'90vw', "md":'50vw', "lg":'30vw'},
                     display:'flex',
                     justifyContent:'center',
                     flexDirection:'column',
                     gap:2
            }}>
                <Typography  variant='body1'>Email</Typography>
                <TextField/>
                <Typography variant='body1'>Password</Typography>
                <TextField/>


                {/*Alternate login*/}
                <Divider/>
                <Typography variant='body1'>Or Login With</Typography>
                <Box sx={{display:'flex', justifyContent:'space-around', mt:2}}>
                    <IconButton  onClick={() => signIn('google')}  aria-label="google-icon">
                        <GoogleIcon sx={{fontSize:36}}/>
                    </IconButton>
                    <IconButton onClick={() => signIn('github')}  aria-label="github-icon">
                        <GitHubIcon sx={{fontSize:36}}/>

                    </IconButton>
                    <IconButton onClick={() => signIn('apple')}  aria-label="apple-icon">
                        <AppleIcon sx={{fontSize:36}}/>
                    </IconButton>
                    <IconButton onClick={() => signIn('facebook')}  aria-label="facebook-icon">
                        <FacebookIcon sx={{fontSize:36}}/>
                    </IconButton>

                </Box>
            </Box>


        </Container>
    )
}