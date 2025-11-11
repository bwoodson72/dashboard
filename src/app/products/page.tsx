/**
 * Products page lists products and related information.
 *
 * Notes:
 * - Renders a placeholder `ProductsTable`. Replace with data-driven components and
 *   consider server components or data-fetching hooks as needed.
 */
import React from "react";
import{Container, Typography} from "@mui/material";
import ProductsTable from "../../components/productsTable/productsTable";

export default function Page():React.JSX.Element{
    return (
        <Container maxWidth='xl'>
            <Typography>Products</Typography>
            <ProductsTable/>
        </Container>
    )
}