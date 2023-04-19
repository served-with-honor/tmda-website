import { useState } from 'react'
import {
  Alert,
  Button,
  Box,
  Grid,
  TextField,
} from '@mui/material';

export default function ContactForm() {
  const formName = 'Contact Form Home';

  const [values, setValues] = useState({
    firstName: { value: '', error: null },
    lastName: { value: '', error: null },
    email: { value: '', error: null },
    phone: { value: '', error: null },
  });
  const [submission, setSubmission] = useState();

  const fieldTests = {
    firstName: [{ pattern: /.+/, text: 'First name is required' },],
    email: [{ pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, text: 'A valid email is required' },],
  }

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    const error = fieldTests[name] ? validateField(value, fieldTests[name])[0] : null;
    setValues(prev => ({
      ...prev,
      ...({ [name]: { value, error } })
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmission(undefined);
    
    const errors = Object.fromEntries(Object.keys(fieldTests).map(key => [key, { error: validateField(values[key].value, fieldTests[key])[0] }]))
    const hasErrors = Object.entries(errors).some(item => item.error);
    
    setValues(prev => ({ ...prev, ...errors }));
    const form = e.target.closest('form');  
    if (!hasErrors) submitForm(form);
  }

  const submitForm = async (form) => {
    try {
      const formData = new FormData(form);
      console.log(formData);
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });
      setSubmission(true)
    } catch (error) {
      console.error(error);
      setSubmission(false);
    }
  }

  const validateField = (input, rules) => {
    return rules.filter(({ pattern }) => !(pattern.test(input))).map(({ text }) => text);
  }

  return submission ? (
    <Alert severity="success">Success!</Alert>
  ) : (
      <form onSubmit={handleSubmit} method='POST' name={formName} action='/' data-netlify-recaptcha='true'>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="First Name"
            name="firstName"
            id="outlined-basic"
            value={values.firstName.value}
            error={!!(values.firstName.error)}
            helperText={values.firstName.error}
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            error={!!(values.lastName.error)}
            fullWidth
            variant="outlined"
            label="Last Name"
            name="lastName"
            id="outlined-basic"
            value={values.lastName.value}
            helperText={values.lastName.error}
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            error={!!(values.phone.error)}
            fullWidth
            variant="outlined"
            label="Phone Number"
            name="phone"
            id="outlined-basic"
            value={values.phone.value}
            helperText={values.phone.error}
            onChange={handleFieldChange}
          />
        </Grid>
        <Grid item sm={6}>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Email"
            name="email"
            id="outlined-basic"
            value={values.email.value}
            error={!!(values.email.error)}
            helperText={values.email.error}
            onChange={handleFieldChange}
          />
        </Grid>
      </Grid>

      <Box align={'center'} marginTop={3}>
          <input type='hidden' name='form-name' value={formName} />
        <Button sx={{ minWidth: '20rem' }} variant={'contained'} onClick={handleSubmit}>
          Submit
        </Button>
          {submission === false && <Alert severity="error" sx={{ marginTop: 3 }}>Oh no, something went wrong!</Alert>}
      </Box>
    </form>
  )
}