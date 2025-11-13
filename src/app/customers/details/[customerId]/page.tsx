'use client'
import React from "react";
import{Container, Typography} from "@mui/material";
import {Tabs, Tab} from "@mui/material";
import {Box} from "@mui/material";
import {useState} from "react";

interface TabPanelProps {
    children?: React.ReactNode;
    label?: string;

}

function TabPanel({children, label}: TabPanelProps): React.JSX.Element {



    return (
       <Box sx={{
           p: 3,
       width: '100%',
       height: '100%',
       bgcolor:'background.paper' }}>
           <Typography sx={{fontSize:24}}>{label}</Typography>
           {children}
       </Box>
    );
}



export default function Page():React.JSX.Element{
    const [value, setValue] = useState(0);
    return (
        <Container maxWidth='xl'>
            <Box sx={{
                width: '100%',
            display: 'flex',
            flexDirection: 'column',
            bgColor: 'background.paper'
            }}>
            <Typography sx={{fontSize:48}} >Customer Detail</Typography>
            <Tabs >
                <Tab onClick={()=>setValue(0)} label="Customer Info" value="customer-info"/>

                <Tab onClick={()=>setValue(1)} label="Order History" value="order-history"/>
                <Tab onClick={()=>setValue(2)} label="Products" value="products"/>
            </Tabs>

            {value === 0 && <TabPanel label='Customer Info'/>}
            {value === 1 && <TabPanel label='Order History'/>}
            {value === 2 && <TabPanel label='Products'/>}
            </Box>

        </Container>
    )
}
