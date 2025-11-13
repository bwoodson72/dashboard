'use client'
import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'



/**
 * The `dashApi` variable represents an API service created using `createApi` from Redux Toolkit Query.
 * It serves as a centralized configuration for API communication and state management.
 *
 * Key features include:
 * - `reducerPath`: Specifies the unique key for storing this API's reducer within the Redux store.
 * - `baseQuery`: Defines the base configuration for making HTTP requests, including the base URL.
 * - `endpoints`: Contains definitions for API operations. Each endpoint is capable of handling specific interactions with the server and managing the respective state.
 *
 * Endpoints:
 * - `getCustomerSummary`: A query endpoint designed to fetch customer summary information based on a provided customer name.
 */
export const dashApi = createApi(
    {
        reducerPath: 'dashApi',
        baseQuery: fetchBaseQuery({baseUrl: '/api/'}),
        endpoints: (build) => ({
            getCustomerSummary: build.query({
                query:(name)=>`customers/${name}`
            })
        }),


    })




export const { useGetCustomerSummaryQuery } = dashApi;