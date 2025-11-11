'use client'
import React from "react";
import{Container, Typography, Stack} from "@mui/material";


export function customerSearchResults():React.JSX.Element{
    return (
        <Container maxWidth='xl'>
            <Typography>Customer Search Results</Typography>
            <Stack>
                <Typography>This is the customer search results page</Typography>

            </Stack>
        </Container>
    )
}