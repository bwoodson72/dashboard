'use client'
import React, {useState, useCallback, useMemo} from "react";
import {
    Box, 
    Container,
    Tab, 
    Tabs,
    Typography,
    Alert,
    CircularProgress,
} from "@mui/material";
import {SearchBar} from '@/shared/ui/search/searchBar';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import {AnimatePresence, motion} from 'motion/react';
import { EnterRight } from '@/components/animations/enterRight';
import {OrderHistory} from '@/components/customerView/orderHistory/orderHistory';
import {OrderDetails} from '@/components/customerView/orderDetails/orderDetails';

type CustomerRow = {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phone?: string;
    address?: string;
}

type TabValuesType = 'customer-search' | 'customer-detail' | 'order-history' | 'order-detail';

interface AnimatedTabPanelProps {
    children: React.ReactNode;
}

const DATA_GRID_HEIGHT = 700;
const DATA_GRID_WIDTH = 1000;
const CONTAINER_HEIGHT = 800;

const ANIMATION_DURATION = 0.25;

/**
 * Animated wrapper component for tab panel content with fade transition.
 */
function AnimatedTabPanel({children}: AnimatedTabPanelProps): React.JSX.Element {
    return (
        <AnimatePresence mode="wait">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: ANIMATION_DURATION }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}



/**
 * Customers page component with search, detail view, and order history.
 * 
 * Features:
 * - Customer search with DataGrid display
 * - Customer detail view
 * - Order history and order details tabs
 * - Row highlighting for selected customer
 * - Loading and error states
 */
export default function Page(): React.JSX.Element {
    const [tab, setTab] = useState<TabValuesType>('customer-search');
    const [customerData, setCustomerData] = useState<CustomerRow[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [selectedCustomer, setSelectedCustomer] = useState<CustomerRow | null>(null);

    // Memoized callback to prevent infinite re-renders
    const handleSetCustomerData = useCallback((data: unknown[]) => {
        setCustomerData(data as CustomerRow[]);
    }, []);

    // Memoized DataGrid rows
    const rows: GridRowsProp = useMemo(() => 
        customerData.map((customer) => ({
            id: customer.id,
            lastName: customer.lastName,
            firstName: customer.firstName,
            email: customer.email
        })), 
        [customerData]
    );

    // DataGrid columns configuration
    const columns: GridColDef[] = useMemo(() => [
        { field: 'id', headerName: 'ID', flex: 0.5 },
        { field: 'lastName', headerName: 'Last Name', flex: 1 },
        { field: 'firstName', headerName: 'First Name', flex: 1 },
        { field: 'email', headerName: 'E-Mail', flex: 2 },
    ], []);

    // DataGrid styling for selected row
    const dataGridSx = useMemo(() => ({
        width: '100%',
        height: DATA_GRID_HEIGHT,
        mt: 2,
        '& .MuiDataGrid-row.selected-row': {
            backgroundColor: (theme: { palette: { mode: string } }) => 
                theme.palette.mode === 'dark' 
                    ? 'rgba(144, 202, 249, 0.16)' 
                    : 'rgba(25, 118, 210, 0.12)',
            '&:hover': {
                backgroundColor: (theme: { palette: { mode: string } }) => 
                    theme.palette.mode === 'dark' 
                        ? 'rgba(144, 202, 249, 0.24)' 
                        : 'rgba(25, 118, 210, 0.20)',
            },
        },
    }), []);

    const handleRowClick = useCallback((params: { row: CustomerRow }) => {
        setSelectedCustomer(params.row);
        setTab('customer-detail');
    }, []);

    const handleTabChange = useCallback((_e: unknown, newValue: TabValuesType) => {
        setTab(newValue);
    }, []);






    return (

        <Container maxWidth='xl' sx={{mt: 10, display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h4">Customers</Typography>


            {/* Navigation Tabs */}
            <Tabs value={tab} onChange={handleTabChange}>
                <Tab label="Customer Search" value="customer-search" />
                <Tab label="Customer Detail" value="customer-detail" />
                <Tab label="Order History" value="order-history" />
                <Tab label="Order Details" value="order-detail" />
            </Tabs>

            {/* Error Display */}
            {error && (
                <Alert severity="error" onClose={() => setError(null)} sx={{ width: '100%', maxWidth: DATA_GRID_WIDTH }}>
                    {error}
                </Alert>
            )}


            {/*Customer Search View*/}

            <Box sx={{ height: CONTAINER_HEIGHT, width: DATA_GRID_WIDTH }}>
            {tab === 'customer-search' &&

                <EnterRight>
                <Box sx={{display:'flex', flexDirection:'column', gap:1, mt:2,  alignItems:'center', justifyContent:'center'}}>
                    
                    <SearchBar 
                        setIsLoading={setIsLoading} 
                        setError={setError} 
                        setCustomerData={handleSetCustomerData}
                    />
                            {isLoading && (
                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                                    <CircularProgress />
                                </Box>
                            )}

                            {!isLoading && (
                                <DataGrid 
                                    rows={rows}
                                    columns={columns}
                                    sx={dataGridSx}
                                    getRowClassName={(params) => 
                                        selectedCustomer?.id === params.id ? 'selected-row' : ''
                                    }
                                    onRowClick={handleRowClick}
                                    loading={isLoading}
                                />
                            )}
                  
                </Box>
                </EnterRight>




            }


            {/*Customer Detail View*/}

            {tab === 'customer-detail' &&
                <EnterRight>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            mt: 2,
                            width: '75%'
                        }}>
                            <AnimatedTabPanel>
                                {selectedCustomer ? (
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                        <Typography variant="h6">Customer Information</Typography>
                                        <Typography>Name: {selectedCustomer.firstName} {selectedCustomer.lastName}</Typography>
                                        <Typography>E-mail: {selectedCustomer.email}</Typography>
                                        <Typography>Phone: {selectedCustomer.phone || 'N/A'}</Typography>
                                        <Typography>Address: {selectedCustomer.address || 'N/A'}</Typography>
                                    </Box>
                                ) : (
                                    <Alert severity="info">
                                        No customer selected. Please select a customer from the search results.
                                    </Alert>
                                )}
                            </AnimatedTabPanel>
                        </Box>
                    </EnterRight>





            }

                {/* Order History View */}
                {tab === 'order-history' && (
                    <EnterRight>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                            <AnimatedTabPanel>
                                <OrderHistory />
                            </AnimatedTabPanel>
                        </Box>
                    </EnterRight>
                )}

                {/* Order Details View */}
                {tab === 'order-detail' && (
                    <EnterRight>
                        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
                            <AnimatedTabPanel>
                                <OrderDetails />
                            </AnimatedTabPanel>
                        </Box>
                    </EnterRight>
                )}
        </Box>

        </Container>
    )
}



