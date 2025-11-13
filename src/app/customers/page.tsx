'use client'


import React from "react";
import {Box, Container, Stack, Typography} from "@mui/material";
import {Skeleton} from "@mui/material";
import {SearchBar} from '@/shared/ui/search/searchBar';
import {CustomerInfoSummary, CustomerInfoSummaryProps} from "@/components/customerView/customerInfoSummary/customerInfoSummary";




const mockCustomers: CustomerInfoSummaryProps[] = [
    {
        firstName: "Jon",
        lastName: "Smith",
        email: "jon.smith@example.com",
        phone: "(555) 010-1001",
        address: "101 Elm St, Springfield, IL 62701",
        customerId: 1001,
    },
    {
        firstName: "Jon",
        lastName: "Smyth",
        email: "jon.smyth@example.com",
        phone: "(555) 010-1002",
        address: "102 Elm St, Springfield, IL 62701",
        customerId: 1002,
    },
    {
        firstName: "John",
        lastName: "Smith",
        email: "john.smith@example.com",
        phone: "(555) 010-1003",
        address: "103 Elm St, Springfield, IL 62701",
        customerId: 1003,
    },
    {
        firstName: "Jon",
        lastName: "Smithers",
        email: "jon.smithers@example.com",
        phone: "(555) 010-1004",
        address: "104 Elm St, Springfield, IL 62701",
        customerId: 1004,
    },
    {
        firstName: "Jonathan",
        lastName: "Smith",
        email: "jonathan.smith@example.com",
        phone: "(555) 010-1005",
        address: "105 Elm St, Springfield, IL 62701",
        customerId: 1005,
    },
    {
        firstName: "Jon",
        lastName: "Smitt",
        email: "jon.smitt@example.com",
        phone: "(555) 010-1006",
        address: "106 Elm St, Springfield, IL 62701",
        customerId: 1006,
    },
    {
        firstName: "Jon",
        lastName: "S. Smith",
        email: "jon.s.smith@example.com",
        phone: "(555) 010-1007",
        address: "107 Elm St, Springfield, IL 62701",
        customerId: 1007,
    },
    {
        firstName: "Jonn",
        lastName: "Smith",
        email: "jonn.smith@example.com",
        phone: "(555) 010-1008",
        address: "108 Elm St, Springfield, IL 62701",
        customerId: 1008,
    },
    {
        firstName: "Jon",
        lastName: "Smith-Jones",
        email: "jon.smithjones@example.com",
        phone: "(555) 010-1009",
        address: "109 Elm St, Springfield, IL 62701",
        customerId: "1009A",
    },
    {
        firstName: "J.",
        lastName: "Smith",
        email: "j.smith@example.com",
        phone: "(555) 010-1010",
        address: "110 Elm St, Springfield, IL 62701",
        customerId: "1010B",
    },
];
/**
 * Renders the main Page component, displaying a list of customers within a table layout.
 * The component includes a search bar, column headers, and placeholder areas for interactive content.
 *
 * @return {React.JSX.Element} The rendered JSX content for the page, including the customers table and associated UI elements.
 */
export default function Page(): React.JSX.Element {


    return (

        <Container maxWidth='xl'>
            {/*{error ?<Typography>Error: {error.message}</Typography>:*/}
            {/*    <Typography>{data}</Typography>*/}
            {/*}*/}
            {/*{isLoading && <Typography>Loading...</Typography>}*/}
            <Box sx={{
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                alignItems:'center',
                width:'100%',
            }}>
            <Typography>Customers</Typography>

            <SearchBar/>


            <Typography>Customer Details</Typography>
            <Stack sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                gap: 2
            }}>

                {mockCustomers.length === 0? <Skeleton variant="rectangular" width='100%' height={400} />:
                    mockCustomers.map((customer) => (
                    <CustomerInfoSummary
                        key={customer.email}
                        firstName={customer.firstName}
                        lastName={customer.lastName}
                        email={customer.email}
                        phone={customer.phone}
                        address={customer.address}
                        customerId={customer.customerId}
                    />
                ))}




            </Stack>

            </Box>
        </Container>
    )
}