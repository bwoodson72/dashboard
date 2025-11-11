import React from 'react';
import {TableContainer, Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material';

/**
 * ProductsTable displays a simple placeholder table of products using MUI components.
 *
 * Notes:
 * - Replace hard-coded rows with data from props or a data layer.
 * - For large datasets, consider virtualization and memoization of rows.
 */
export default function ProductsTable():React.JSX.Element {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Quantity</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Product 1</TableCell>
                        <TableCell>100</TableCell>
                        <TableCell>10</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Product 2</TableCell>
                        <TableCell>200</TableCell>
                        <TableCell>20</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}