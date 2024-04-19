import { useState, useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
import { useInView } from 'framer-motion';
import { useFormSubmit } from '../hooks'
import Cookies from 'js-cookie';
import Dialog from '@mui/material/Dialog';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert'
import CircularProgress from '@mui/material/CircularProgress'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import Link from '../src/Link';
import { visuallyHidden } from '@mui/utils'

export default function NewsletterDialog({ delay, closeDelay = 2000, openCondition, onPopupOpen, scrollRef }) {
  const cookieExpireClose = 30;
  const cookieExpireSignup = 365;
  const endpoint = '/api/newsletter';
  const cookieName = 'newsletterSignedUp';
  const showDialog = Cookies.get(cookieName) === undefined;
  const [open, setOpen] = useState(false);
  const { handleSubmit, control, reset, formState: { errors } } = useForm();
  const { submit, isLoading, hasSubmited, error } = useFormSubmit();
  const onSubmit = async (data) => await submit(endpoint, data);

  const inView = scrollRef ? useInView(scrollRef, { once: true }) : null;
  
  useEffect(() => {
    if (!scrollRef || hasSubmited || !showDialog) return;

    if (inView) setOpen(true);
  }, [scrollRef, inView]);

  useEffect(() => {
    if (openCondition === undefined) return;
    
    setOpen(openCondition);
  }, [openCondition]);

  useEffect(() => {
    if (!showDialog || openCondition !== undefined || scrollRef) return;

    if (!delay) {
      setOpen(true);
      return;
    }

    const timer = setTimeout(() => {
      setOpen(true);
      clearTimeout(timer);
    }, delay);
  }, [])
  
  useEffect(() => {
    if (!hasSubmited) return;
    
    const timer = setTimeout(() => {
      setOpen(false);
      clearTimeout(timer);
      Cookies.set(cookieName, true, { expires: cookieExpireSignup });
    }, closeDelay);
  }, [hasSubmited]);
  
  const handleClose = () => {
    setOpen(false);
    reset();
    
    if (onPopupOpen) onPopupOpen(false);
    Cookies.set(cookieName, false, { expires: cookieExpireClose });
  }
  
  return (
    <Dialog onClose={handleClose} open={open}
      PaperProps={{ sx: { borderRadius: 5 } }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{ position: 'absolute', right: 8, top: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <Box sx={{ backgroundColor: 'primary.100', p: 5, textAlign: 'center' }}>
        <Typography variant='h2' gutterBottom color='primary.700'>Stay Connected</Typography>
        <Typography variant='body1' gutterBottom>Updates at your fingertips! Subscribe to our email list and stay connected to our growing veteran community</Typography>
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
                  // name="Newsletter Signup"
                  
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  target="_self"
                  noValidate=""
                > 
                  <Stack direction="row" spacing={1}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Controller
                        name="email"
                        control={control}
                        rules={{ required: 'Email is required', pattern: { value: /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'A valid email is required' } }}
                        render={({ field }) => (
                          <TextField
                            fullWidth
                            label='Email'
                            type='email'
                            name="EMAIL"
                            id="EMAIL"
                            autoFocus
                            helperText={errors?.email?.message?.toString()}
                            error={!!(errors?.email)}
                            sx={{ 
                              '.MuiInputBase-input': { py: '11px' },
                              '.MuiInputLabel-root': { top: '-5px' },
                              '.MuiInputLabel-root.Mui-focused, .MuiInputLabel-shrink': { top: 0 },
                            }}
                            InputProps={{
                              endAdornment: field.value ? (
                                <IconButton onClick={() => reset({ email: '' })}><CloseIcon /></IconButton> 
                              ) : null
                            }}
                            {...field}
                          />
                        )}
                      />
                    </Box>
                    <Button variant='contained' type="submit" name="subscribe" onClick={handleSubmit(onSubmit)} disabled={Object.values(errors).length > 0} sx={{ px: 2 }}>
                      <SendIcon sx={{display: {xs: 'inline-block', sm: 'none'}}}/>
                      <Box component='span' sx={theme => ({ [theme.breakpoints.down('sm')]: visuallyHidden, })}>Subscribe</Box>
                    </Button>
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