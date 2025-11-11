'use client'
import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Order, Component} from "@/types/types";

export  function OrderHistory():React.JSX.Element {


    return (
        <TableContainer sx={{minWidth:300, maxWidth:500}} component={Paper}>
        <Table>
            <TableHead>
            <TableRow>
                <TableCell sx={{width:'fit-content'}}  align="left">Order Number</TableCell>
                <TableCell sx={{width:'fit-content'}}  align="left">Order Date</TableCell>


            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell  align="left">2234523456</TableCell>
                    <TableCell  align="left">10/23/2025</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell  align="left">2234523456</TableCell>
                    <TableCell  align="left">10/23/2025</TableCell>

                </TableRow>
                <TableRow>
                    <TableCell  align="left">2234523456</TableCell>
                    <TableCell  align="left">10/23/2025</TableCell>

                </TableRow>

            </TableBody>


        </Table>
        </TableContainer>
    )
}