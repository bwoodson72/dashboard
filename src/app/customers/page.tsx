'use client'

import { mockCustomers} from '@/app/customers/mockCustomers';
import React from "react";
import {
    Box, Container,
    Tab, Tabs,
    Typography
} from "@mui/material";
import {SearchBar} from '@/shared/ui/search/searchBar';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {useState} from "react";
import Link from "next/link";
import {AnimatePresence, motion} from 'motion/react';
import { EnterRight } from '@/components/animations/enterRight';




type CustomerRow = {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phone?: string;
    address?: string;
}

interface TabPanelProps {
    children?: React.ReactNode;
    label?: string;
    index?: number;

}
type TabValuesType = 'customer-search' | 'customer-detail' | 'order-history' | 'order-detail';
/**
 * Renders the main Page component, displaying a list of customers within a table layout.
 * The component includes a search bar, column headers, and placeholder areas for interactive content.
 *
 * @return {React.JSX.Element} The rendered JSX content for the page, including the customers table and associated UI elements.
 *
 *
 */


function AnimatedTabPanel({  children}: TabPanelProps): React.JSX.Element {



    return (
        <AnimatePresence mode='wait'>

                <motion.div

                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}

                    exit={{ opacity: 0}}
                    transition={{ duration: 0.25 }}


                >
                    {children}
            </motion.div>

        </AnimatePresence>
    );
}



export default function Page(): React.JSX.Element {
    //tab is used to control the active tab
    const [tab, setTab] = useState<TabValuesType>('customer-search');

    //customerData is used to store the customer data fetched from the API
    const [customerData, setCustomerData]: [CustomerRow[], React.Dispatch<React.SetStateAction<CustomerRow[]>>] = useState<CustomerRow[]>([]);

    //isLoading is used to indicate whether the data is currently being fetched
    const [isLoading, setIsLoading]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState<boolean>(false);

    //error is used to store any errors that occur during the fetch process
    const [error, setError]: [string | null, React.Dispatch<React.SetStateAction<string | null>>] = useState<string | null>(null);

    //selectedCustomer is used to store the selected customer data
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerRow|null>(null);

    //hightlight color state for selected datagrid row
    const [selectedCustomerHighlight, setSelectedCustomerHighlight] = useState(null);

    //rows is used to store the customer data in a format that can be displayed in the DataGrid

    const rows: GridRowsProp = customerData.map((customer) => ({
        id: customer.id,
        lastName: customer.lastName,
        firstName: customer.firstName,
        email: customer.email
    }));


//columns is used to define the columns in the DataGrid

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', flex:.5 },
        { field: 'lastName', headerName: 'Last Name', flex:1 },
        { field: 'firstName', headerName: 'First Name', flex:1 },
        { field: 'email', headerName: 'E-Mail', flex:2 },
    ];






    return (

        <Container maxWidth='xl' sx={{mt: 10, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Typography>Customers</Typography>


            {/*Tabs for switching between customer search, detail, and order history views*/}
            <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)} >
                <Tab  label="Customer Search" value='customer-search'/>
                <Tab  label="Customer Detail" value='customer-detail'/>

                <Tab  label="Order History" value="order-history"/>
                <Tab  label="Products" value="order-detail"/>
            </Tabs>


            {/*Customer Search View*/}

        <Box sx={{height:800, width:1000}}>
            {tab === 'customer-search' &&

                <EnterRight>
                <Box sx={{display:'flex', flexDirection:'column', gap:1, mt:2,  alignItems:'center', justifyContent:'center'}}>
                    
                    <SearchBar setIsLoading={setIsLoading} setError={setError} setCustomerData={setCustomerData}/>
                    <DataGrid rows={rows}
                              columns={columns}
                              sx={{width:'100%', height:700, mt:2}}
                              onRowClick={(params) => {setSelectedCustomer(params.row); setTab('customer-detail')}}
                    />
                  
                </Box>
                </EnterRight>




            }


            {/*Customer Detail View*/}

            {tab === 'customer-detail' &&
                <EnterRight>

                <Box key='customer-detail-key' sx={{display:'flex', flexDirection:'column', gap:1, mt:2, width:'75%'}}>
                    <AnimatedTabPanel label='Customer Detail'>
                    <Typography sx={{fontSize:16}}>Name: {selectedCustomer?.firstName} {selectedCustomer?.lastName}</Typography>
                    <Typography sx={{fontSize:16}}>E-mail: {selectedCustomer?.email}</Typography>
                    <Typography sx={{fontSize:16}}>Phone: {selectedCustomer?.phone}</Typography>
                    <Typography sx={{fontSize:16}}>Address: {selectedCustomer?.address}</Typography>
                    </AnimatedTabPanel>
                </Box>
                    </EnterRight>





            }

            {/*Order History View*/}
            {tab === 'order-history' && <AnimatedTabPanel label='Order History'/>}

            {/*Order Detail View*/}
            {tab === 'order-detail' && <AnimatedTabPanel label='Order Detail'/>}
        </Box>

        </Container>
    )
}



