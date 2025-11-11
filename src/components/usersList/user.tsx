'use client'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from "react";

/**
 * User renders a simple card with a user's name and email address.
 *
 * Props:
 * - name: User's display name.
 * - email: User's email address.
 */
export default function User({name, email}:{name:string, email:string}):React.JSX.Element {

    return (
        <div>
            <Card sx={{ minWidth: 275,maxWidth:300, display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mb:1 }}>
                <CardContent sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', gap:.5 }}>
                 <Typography>{name}</Typography>
                 <Typography>{email}</Typography>
                </CardContent>

            </Card>
        </div>
    )
}