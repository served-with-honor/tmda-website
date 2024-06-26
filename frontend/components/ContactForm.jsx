import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useFormSubmit } from "../hooks";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Link from "next/link";

export default function ContactForm() {
  const formName = "Contact Form Home";
  const endpoint = "/api/form";
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
  });

  const agree = watch("agree", false);

  const {
    submit,
    isLoading,
    hasSubmited,
    error: submissionError,
  } = useFormSubmit();
  const onSubmit = async (data) => await submit(endpoint, data);

  useEffect(() => {
    if (submissionError) {
      console.error(submissionError);
    }
  }, [submissionError]);

  return hasSubmited ? (
    <Alert severity="success">Success!</Alert>
  ) : isLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    <form
      method="POST"
      action={endpoint}
      onSubmit={handleSubmit(onSubmit)}
      name={formName}
    >
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <Controller
            name="firstName"
            control={control}
            rules={{ required: "First name is required" }}
            render={({ field }) => (
              <TextField
                label="First Name"
                fullWidth
                required
                error={!!errors?.firstName?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="lastName"
            control={control}
            rules={{ required: "Last name is required" }}
            render={({ field }) => (
              <TextField
                label="Last Name"
                fullWidth
                required
                error={!!errors?.lastName?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="phone"
            control={control}
            rules={{ required: "Phone number is required" }}
            render={({ field }) => (
              <TextField
                label="Phone"
                fullWidth
                required
                error={!!errors?.phone?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item sm={6}>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "A valid email is required",
              },
            }}
            render={({ field }) => (
              <TextField
                label="Email"
                fullWidth
                helperText={errors?.email?.message}
                error={!!errors?.email}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth error={!!errors?.type}>
            <InputLabel id="contact-form-field-type">Request Type</InputLabel>
            <Controller
              name="type"
              control={control}
              rules={{ required: "Type is required" }}
              render={({ field }) => (
                <Select
                  defaultValue=""
                  labelId="contact-form-field-type"
                  label="Request Type"
                  fullWidth
                  error={!!errors?.type}
                  {...field}
                >
                  <MenuItem value="Learn More">Learn More</MenuItem>
                  <MenuItem value="Billing">Billing</MenuItem>
                  <MenuItem value="General Inquiry">General Inquiry</MenuItem>
                  <MenuItem value="Customer Service">Customer Service</MenuItem>
                </Select>
              )}
            />
            <FormHelperText>{errors?.type?.message}</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <TextField
                multiline
                minRows={3}
                label="Message"
                fullWidth
                helperText={errors?.message?.message}
                error={!!errors?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="agreeTermsAndConditions"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label={
                  <Typography component="span">
                    I agree to the{" "}
                    <Link href="/terms-and-conditions" target="_blank">
                      terms and condition
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy-policy" target="_blank">
                      privacy policy
                    </Link>
                    .
                  </Typography>
                }
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name="agree"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <FormControlLabel
                control={<Checkbox {...field} />}
                label="By checking this box and by providing a telephone number and submitting this form you are consenting to be contacted by SMS text message. Message & data rates may apply. You can reply STOP to opt-out of further messaging."
              />
            )}
          />
        </Grid>
      </Grid>

      <Box align={"center"} marginTop={3}>
        <input type="hidden" name="form-name" value={formName} />
        <Button
          type="submit"
          sx={{ minWidth: "20rem" }}
          variant={"contained"}
          onClick={handleSubmit(onSubmit)}
          disabled={Object.values(errors).length > 0 || !agree}
        >
          Submit
        </Button>
        {submissionError ? (
          <Alert severity="error" sx={{ marginTop: 3 }}>
            Oh no, something went wrong!
          </Alert>
        ) : null}
      </Box>
    </form>
  );
}
