'use client'
import React from "react";
import{Typography, TableRow, TableCell} from "@mui/material";
import {useRouter} from "next/navigation";

type CustomerSearchCardProps = {
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
    customerId:string|number
}

//This component is meant to be used in the customer search results page
//to display customer data. It returns a table row with customer data.

//Props:
//firstName:string
//lastName:string
//email:string
//phone:string
//customerId:string|number

export function CustomerSearchRow({firstName,lastName, email, phone, customerId}:CustomerSearchCardProps):React.JSX.Element{
    const router = useRouter();
    return (

                <TableRow onClick={()=>router.push('/customers/'+customerId)} sx={{cursor:'pointer'}}>

                    <TableCell><Typography>{lastName}</Typography></TableCell>
                        <TableCell><Typography>{firstName}</Typography></TableCell>
                        <TableCell><Typography>{email}</Typography></TableCell>
                        <TableCell><Typography>{phone}</Typography></TableCell>
                        <TableCell><Typography>{customerId}</Typography></TableCell>

                </TableRow>



    )
}