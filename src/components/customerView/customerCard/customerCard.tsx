'use client'
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {Customer} from "@/types/types";
import {Typography} from "@mui/material";

export function CustomerCard(){

    return (
        <div>
            <Card sx={{ minWidth: 300,maxWidth:500, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb:1 }}>
                <CardContent>
                    <Typography>Sandor Clegan</Typography>
                    <Typography>123 Main St</Typography>
                    <Typography>San Francisco, CA 94105</Typography>
                    <Typography>555-555-5555</Typography>
                </CardContent>

            </Card>
        </div>
    )
}