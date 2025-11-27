'use client'

import { createSlice } from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";


type CustomerSearchResultsState = {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    address: string;
    customerId: number;

}| undefined;

const initialState: CustomerSearchResultsState = undefined;
export const customerSearchResultsSlice = createSlice({
    name: 'customerSearchResults',
    initialState,
    reducers: {
        setCustomerSearchResults: (state, action: PayloadAction<CustomerSearchResultsState>) => {
            return action.payload;
        }
    }
});