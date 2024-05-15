import { Card, Grid, Typography, Box, Avatar, Stack } from "@mui/material";

export default function ReviewerBlock() {
  return (
    <Card
      sx={{
        maxWidth: 500,
        minHeight: 450,
        ml: 20,
        border: 1,
        borderColor: "primary.main",
        borderWidth: 2,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          pt: 2,
          ml: 1,
        }}
      >
        <Grid container spacing={2} sx={{ borderBottom: 1 }}>
          <Grid
            item
            xs={7}
            sx={{ borderRight: 1, backgroundColor: "primary.main" }}
          >
            <Typography variant="h5" component="p">
              Last Date Modified
            </Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="h5" component="p">
              April 2, 2024
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Grid container spacing={20}>
          <Grid item xs={3}>
            <Avatar
              alt="Reviewer"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 125, height: 125, ml: 3, mt: 2 }}
            />
          </Grid>
          <Grid item xs={9}>
            <Stack spacing={2} sx={{ mt: 5, ml: 3 }}>
              <Typography variant="body1" sx={{ textDecoration: "underline" }}>
                Content Reviewed By:
              </Typography>
              <Typography variant="h6" component="p" sx={{ ml: 3, mt: 2 }}>
                {" "}
                Name of Reviewer
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="body1" sx={{ mt: 3, mx: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          justo nec mauris tincidunt, at lacinia nunc tincidunt. Nullam Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo
          nec mauris tincidunt, at lacinia nunc tincidunt. Nullam Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed euismod justo nec
          mauris tincidunt, at lacinia nunc tincidunt. Nullam
        </Typography>
      </Box>
    </Card>
  );
}
