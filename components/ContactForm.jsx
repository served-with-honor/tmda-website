import { useForm, Controller } from "react-hook-form";
import { useFormSubmit } from '../hooks'
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from '@mui/material/FormHelperText';
import Select from '@mui/material/Select';

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
        <Grid item xs={12}>
          <FormControl fullWidth error={!!(errors?.type)} >
            <InputLabel id="stuff">Request Type</InputLabel>
            <Controller
              name="type"
              control={control}
              rules={{ required: 'Type is required' }}
              render={({ field }) =>
                <Select labelId="stuff" label='Request Type' fullWidth error={!!(errors?.type)} {...field}>
                  <MenuItem value="Customer Service">Customer Service</MenuItem>
                  <MenuItem value="Billing">Billing</MenuItem>
                  <MenuItem value="Pricing">Pricing</MenuItem>
                  <MenuItem value="General inquiry">General inquiry</MenuItem>
                </Select>
              }
            />
            <FormHelperText>{errors?.type?.message}</FormHelperText>
          </FormControl>  
        </Grid>
        <Grid item xs={12}>
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
          onClick={handleSubmit(onSubmit)}
          disabled={Object.values(errors).length > 0}
        >
          Submit
        </Button>
          {error ? <Alert severity="error" sx={{ marginTop: 3 }}>Oh no, something went wrong!</Alert> : null}
      </Box>
    </form>
  )
}