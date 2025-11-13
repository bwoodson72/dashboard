'use client'

import React from "react";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {Box, Button, Typography} from "@mui/material";
import Link from 'next/link';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


/**
 * Represents the properties for summarizing customer information.
 *
 * This interface provides the necessary structure to encapsulate
 * customer-related details such as name, contact information, and unique identifiers.
 */
export interface CustomerInfoSummaryProps {

    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    customerId: number|string;

}




/**
 * A React component that displays a summary of customer information within an Accordion UI element.
 *
 * @param {Object} props The properties object.
 * @param {string} props.firstName The first name of the customer to display.
 * @param {string} props.lastName The last name of the customer to display.
 * @param {string} props.email The email address of the customer to display.
 * @param {string} props.phone The phone number of the customer to display.
 * @param {string} props.address The address of the customer to display.
 * @param {string} props.customerId The unique identifier for the customer.
 * @return {React.JSX.Element} A JSX element representing the customer information summary.
 */
export function CustomerInfoSummary({
                                        firstName,
                                        lastName,
                                        email,
                                        phone,
                                        address,
                                        customerId
                                    }: CustomerInfoSummaryProps): React.JSX.Element {
    return (<Accordion sx={{width: {xs: '100%'}}}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    justifyContent: {xs: 'flex-start', md: 'space-between'},
                    gap: {xs: 1, md: 4},
                    width: '100%'
                }}>
                    <Typography>Name: {`${firstName} ${lastName}`}</Typography>
                    <Typography>Email: {email}</Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                <Box sx={{
                    display: 'flex',
                    flexDirection: {xs: 'column', md: 'row'},
                    gap: {xs: 1, md: 4},
                    justifyContent: {xs: 'flex-start', md: 'space-between'},
                    width: '100%',
                    mb: 1
                }}>
                    <Typography>
                        Address: {address}
                    </Typography>
                    <Typography>Phone: {phone}</Typography>

                </Box>
             <Button component={Link} href={`/customers/details/${customerId}`} variant="contained">View Info</Button>
            </AccordionDetails>
        </Accordion>

    )
}

export default CustomerInfoSummary