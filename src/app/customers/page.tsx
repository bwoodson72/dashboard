'use client'



import React, {useState} from "react";
import{Container, TextField, Typography, Box} from "@mui/material";
import {TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Button} from "@mui/material";
import {CustomerSearchRow} from "@/components/customerSearchResults/customerSearchRow";
import Paper from "@mui/material/Paper";
import {SearchBar} from '@/shared/ui/search/searchBar'




/**
 * Renders the main Page component, displaying a list of customers within a table layout.
 * The component includes a search bar, column headers, and placeholder areas for interactive content.
 *
 * @return {React.JSX.Element} The rendered JSX content for the page, including the customers table and associated UI elements.
 */
export default function Page():React.JSX.Element {
    const [searchQuery, setSearchQuery] = useState('');


    return (

        <Container maxWidth='xl'>
            {/*{error ?<Typography>Error: {error.message}</Typography>:*/}
            {/*    <Typography>{data}</Typography>*/}
            {/*}*/}
            {/*{isLoading && <Typography>Loading...</Typography>}*/}

            <Typography>Customers</Typography>

                <SearchBar  />
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                           <TableRow>
                               <TableCell>Last Name</TableCell>
                               <TableCell>First Name</TableCell>

                               <TableCell>Phone</TableCell>
                               <TableCell>Email</TableCell>
                               <TableCell>Customer ID</TableCell>
                           </TableRow>

                        </TableHead>
                    {/*    <TableBody>*/}



                    {/*{Array.isArray(data) && data.map((customer) => (*/}
                    {/*<CustomerSearchRow*/}
                    {/*    key={customer.id ?? customer.customerId}*/}
                    {/*    firstName={customer.firstName}*/}
                    {/*    lastName = {customer.lastName}*/}
                    {/*    phone={customer.phone}*/}
                    {/*    email={customer.email}*/}
                    {/*    customerId={customer.customerId ?? String(customer.id)}*/}
                    {/*    />*/}

                    {/*))}*/}
                    {/*    </TableBody>*/}
                    </Table>
                </TableContainer>







        </Container>
    )
}