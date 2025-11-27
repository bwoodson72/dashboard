'use client'
import React from "react";
import { Button, Box, TextField } from "@mui/material";
import { z } from "zod";
import {Form, Field} from 'react-final-form';
import {useGetCustomerSummaryQuery} from "@/features/api/apiSlice";
import {useState} from "react";


export function SearchBar({setIsLoading, setError, setCustomerData}) {

    // Define the validation schema for the form
    const schema = z.object({ search: z.string().min(1, "Required") });

  // State to hold the search query
  const [searchQuery, setSearchQuery] = useState<string|undefined>("");
  // Query hook to fetch customer data based on the search query
    const {data, error,isLoading} = useGetCustomerSummaryQuery(searchQuery);

  //validate function to check if the form is valid
  function validate(values: { search?: string }) {
    const parsed = schema.safeParse(values);
    if (parsed.success) return {};
    // return at least one error to block submit
    return { search: parsed.error.issues[0]?.message ?? "Invalid" };
  }

  // This stub will log when the form is valid and submitted
  const onSubmit = (values: { search?: string }) => {
    console.log("submitted", values);
    setSearchQuery(values.search);
    setIsLoading(isLoading);
    if(error){setError(error.message)}
    if(data){setCustomerData(data)}
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
