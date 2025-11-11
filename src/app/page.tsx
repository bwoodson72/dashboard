/**
 * Home page renders the default landing view of the dashboard.
 *
 * Content:
 * - Currently displays a demo `UsersList`. Replace with real dashboard widgets or
 *   fetch data as needed using the Next.js App Router patterns.
 */

import React from "react";
import{Container, Typography} from "@mui/material";





export default function Page():React.JSX.Element{

    return(
        <Container maxWidth='xl'>

            <Typography>Home</Typography>
        </Container>
    )
}