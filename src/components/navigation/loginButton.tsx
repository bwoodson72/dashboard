'use client'
import React from "react";
import Link from "next/link";

import {Button} from "@mui/material";

export  function LoginButton(){
    const isAuthenticated = false;
    const BUTTON_STYLE = {color:'#ffffff', textDecoration:'none', fontSize:'1.2rem', fontWeight:'bold'}
     return (
        <>
             {isAuthenticated ? <Button   variant='text' sx={BUTTON_STYLE}>Log Out</Button> :
                 <Button component={Link} href='/login' variant='text' sx={BUTTON_STYLE}>Log In</Button>}

        </>
     )
}

