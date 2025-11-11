'use client'
import React from "react";
import {useState} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


/**
 * Provides a QueryClient context for React Query and wraps the application
 * with necessary providers including ReactQueryDevtools.
 *
 * @param {Object} props - The properties passed to the QueryProvider component.
 * @param {React.ReactNode} props.children - The children components to be wrapped within the QueryClientProvider.
 * @return {JSX.Element} The QueryClientProvider wrapped around the children,
 * including the ReactQueryDevtools.
 */
export function QueryProvider({children}:{ children: React.ReactNode}    ){
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )


}