import { useState, useEffect } from 'react'
import { useForm, Controller } from "react-hook-form";
import { useFormSubmit } from '../../hooks'
import {
  Alert,
  Button,
  Box,
  CircularProgress,
  Grid,
  TextField,
} from '@mui/material';

export default function ContactForm() {
  const formName = 'Contact Form Home';
  const { handleSubmit, control, formState: { errors } } = useForm();
  const { submit, isLoading, hasSubmited, error } = useFormSubmit();
  const onSubmit = async (data) => await submit('/', data);

  return hasSubmited ? (
    <Alert severity="success">Success!</Alert>
  ) : isLoading ? (
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </Box>
  ) : (
      <form
        method="POST"
        action="/"
        onSubmit={handleSubmit(onSubmit)}
        name={formName}
        data-netlify="true"
      >
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'First name is required' }}
            render={({ field }) => <TextField label='First Name' fullWidth required error={!!(errors?.firstName?.message)} {...field} /> }
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="lastName"
            control={control}
            render={({ field }) => <TextField label='Last Name' fullWidth {...field} /> }
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => <TextField label='Phone' fullWidth {...field} /> }
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="email"
            control={control}
            rules={{ required: 'Email is required', pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'A valid email is required' } }}
            render={({ field }) => <TextField label='Email' fullWidth helperText={errors?.email?.message} error={!!(errors?.email)} {...field} /> }
          />
        </Grid>
        <Grid item sm>
          <Controller
            name="message"
            control={control}
            rules={{ required: 'Message is required' }}
            render={({ field }) => <TextField multiline minRows={3} label='Message' fullWidth helperText={errors?.message?.message} error={!!(errors?.message)} {...field} /> }
          />
        </Grid>
      </Grid>

      <Box align={'center'} marginTop={3}>
        <input type="hidden" name="form-name" value={formName} />
        <Button
          type="submit"
          sx={{ minWidth: '20rem' }}
          variant={'contained'}
          onClick={handleSubmit}
          disabled={Object.values(errors).length > 0}
        >
          Submit
        </Button>
          {error ? <Alert severity="error" sx={{ marginTop: 3 }}>Oh no, something went wrong!</Alert> : null}
      </Box>
    </form>
  )
}