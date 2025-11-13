'use client'
import React from "react";
import { Button, Box, TextField } from "@mui/material";
import { z } from "zod";
import {Form, Field} from 'react-final-form';





export function SearchBar() {
  const schema = z.object({ search: z.string().min(1, "Required") });

  function validate(values: { search?: string }) {
    const parsed = schema.safeParse(values);
    if (parsed.success) return {};
    // return at least one error to block submit
    return { search: parsed.error.issues[0]?.message ?? "Invalid" };
  }

  // This stub will log when the form is valid and submitted
  const onSubmit = (values: { search?: string }) => {
    console.log("submitted", values);
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", gap: 1, mb:2 }}>
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
