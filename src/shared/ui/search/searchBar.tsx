'use client'
import React from "react";
import { Button, Box, TextField } from "@mui/material";
import { z } from "zod";

import axios from "axios";

export function SearchBar() {



   return (
       <Box onSubmit={
           ()=>{
               console.log("submitted")
           }
       } action='/api/customers/search' component="form" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mb: 2 }}>

           <TextField
                id="search-box"
                label="Search"
                variant="outlined"
                sx={{ mr: 1 }}
                name='search'
                type='text'


            />
            <Button type='submit' variant="contained">Search</Button>
       </Box>
   )

}
