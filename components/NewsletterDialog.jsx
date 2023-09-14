import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useFormSubmit } from '../hooks'
import Cookies from 'js-cookie';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Link from '../src/Link';

export default function NewsletterDialog({ delay = 1000, expires = 7, closeDelay = 3000, openCondition, }) {
  const endpoint = '/api/newsletter';
  const cookieName = 'newsletterSignedUp';
  const showDialog = Cookies.get(cookieName) === undefined;
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, formState: { errors } } = useForm();
  const { submit, isLoading, hasSubmited, error } = useFormSubmit();
  const onSubmit = async (data) => await submit(endpoint, data);

  useEffect(() => {
    if (openCondition !== undefined) {
      setOpen(openCondition);
      return;
    }

    if (showDialog) {
      if (!delay) {
        setOpen(true);
        return;
      }

      const timer = setTimeout(() => {
        setOpen(true);
        clearTimeout(timer);
      }, delay);
    }
  }, [openCondition]);
  
  useEffect(() => {
    if (hasSubmited) {
      const timer = setTimeout(() => {
        setOpen(false);
        clearTimeout(timer);
        // Cookies.set(cookieName, true);
      }, closeDelay);
    }
  }, [hasSubmited]);
  
  const handleClose = () => {
    setOpen(false);
    // Cookies.set(cookieName, false, { expires });
  }
  
  return (
    <Dialog onClose={handleClose} open={open}>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
        	position: 'absolute',
        	right: 8,
        	top: 8,
        	color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ p: 5, textAlign: 'center' }}>
        <Typography variant='h2' gutterBottom>Stay Connected</Typography>
        <Typography variant='body1' sx={{ mb: 3 }}>Updates at your fingertips! Subscribe to our email list and stay connected to our growing veteran community</Typography>
        <Box sx={{ mb: 3 }}>
          { hasSubmited ? (
            <Alert severity="success">Success!</Alert>
          ) : isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <CircularProgress />
            </Box>
            ) : (
                <form
                  method="POST"
                  action={endpoint}
                  onSubmit={handleSubmit(onSubmit)}
                  name="Newsletter Signup"
                >
                  <Stack direction="row" spacing={1}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Email is required', pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'A valid email is required' } }}
                        render={({ field }) => <TextField fullWidth label='Email' autoFocus helperText={errors?.email?.message?.toString()} error={!!(errors?.email)} {...field} /> }
                      />
                    </Box>
                    <Box>
                      <Button variant='contained' type="submit" onClick={handleSubmit(onSubmit)} disabled={Object.values(errors).length > 0}>Subscribe</Button>
                    </Box>
                  </Stack>
                {error ? <Alert severity="error" sx={{ marginTop: 3 }}>{error}</Alert> : null}
              </form>
          )}
        </Box>
        <Typography variant='body2'><Link href={'/privacy-policy'}>Privacy Policy</Link></Typography>
      </Box>
    </Dialog>
  );
}