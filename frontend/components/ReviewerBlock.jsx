import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function ReviewerBlock({ name, imageUrl, bio }) {
  return (
    <Card
      sx={{
        backgroundColor: "secondary.main",
        color: "secondary.contrastText",
      }}
    >
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          <Grid item>
            <Avatar
              alt={name}
              src={imageUrl}
              sx={{
                width: 64,
                height: 64,
                borderColor: "secondary.contrast.text",
                border: "solid",
                borderWidth: 2,
              }}
            />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ borderBottom: 1 }}>
              Reviewed By:
            </Typography>
            <Typography variant="h6" component="p">
              {name}
            </Typography>
          </Grid>
        </Grid>
        <Box>
          {bio ? (
            <Typography variant="body1" sx={{ mt: 3 }}>
              {bio}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Card>
  );
}
