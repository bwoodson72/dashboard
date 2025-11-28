'use client'
import React, {useState, useEffect} from "react";
import { Button, Box, TextField } from "@mui/material";
import { z } from "zod";
import {Form, Field} from 'react-final-form';
import {useGetCustomerSummaryQuery} from "@/features/api/apiSlice";

type SearchBarProps = {
    setIsLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
    setCustomerData: (data: unknown[]) => void;
};

const VALIDATION_SCHEMA = z.object({ 
    search: z.string().min(1, "Search query is required") 
});

/**
 * Search bar component for searching customers.
 * 
 * Uses React Final Form for form management and RTK Query for data fetching.
 * Automatically syncs loading, error, and data states with parent component.
 * 
 * @param props - Component props
 * @param props.setIsLoading - Callback to update loading state in parent
 * @param props.setError - Callback to update error state in parent
 * @param props.setCustomerData - Callback to update customer data in parent
 */
export function SearchBar({setIsLoading, setError, setCustomerData}: SearchBarProps): React.JSX.Element {
    const [searchQuery, setSearchQuery] = useState<string | undefined>(undefined);
    
    // Only run query when searchQuery is defined and not empty
    const {data, error, isLoading} = useGetCustomerSummaryQuery(
        searchQuery || '', 
        { skip: !searchQuery || searchQuery.trim().length === 0 }
    );

    // Sync query state with parent component
    useEffect(() => {
        setIsLoading(isLoading);
    }, [isLoading, setIsLoading]);

    useEffect(() => {
        if (error) {
            const errorMessage = 'data' in error && error.data 
                ? String(error.data) 
                : 'An error occurred while searching';
            setError(errorMessage);
        } else {
            setError(null);
        }
    }, [error, setError]);

    useEffect(() => {
        // Clear customer data when search query is empty or query is skipped
        const shouldSkip = !searchQuery || searchQuery.trim().length === 0;
        if (shouldSkip) {
            setCustomerData([]);
            return;
        }
        
        // Update customer data when query results are available
        if (data) {
            setCustomerData(Array.isArray(data) ? data : []);
        } else if (data === undefined && !isLoading) {
            // Clear data when query completes but returns undefined
            setCustomerData([]);
        }
    }, [data, searchQuery, isLoading, setCustomerData]);

    const validate = (values: { search?: string }) => {
        const parsed = VALIDATION_SCHEMA.safeParse(values);
        if (parsed.success) return {};
        return { search: parsed.error.issues[0]?.message ?? "Invalid input" };
    };

    const onSubmit = (values: { search?: string }) => {
        const trimmedQuery = values.search?.trim();
        if (trimmedQuery) {
            setSearchQuery(trimmedQuery);
        }
    };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit}  sx={{ display: "flex", gap: 1, mb:2 }}>
          <Field<string> name="search">
            {({ input, meta }) => (
              <TextField
                {...input}
                id="search-box"
                label="Search Customers"
                variant="outlined"
                sx={{width:{xs:"100%",md:"50vw"}}}
                error={meta.touched && !!meta.error}
                helperText={meta.touched ? meta.error : undefined}
              />
            )}
          </Field>
          <Button type="submit" variant="contained">Search</Button>
        </Box>
      )}
    />
  );
}
