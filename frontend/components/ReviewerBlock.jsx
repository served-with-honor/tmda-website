import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";

export default function ReviewerBlock({ date, name, imageUrl, bio }) {
  return (
    <Card
      sx={{
        border: 1,
        borderColor: "primary.main",
        borderWidth: 2,
      }}
    >
      <Box
        sx={{
          ".MuiGrid-item": {
            p: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          },
        }}
      >
        <Grid container sx={{ borderBottom: 1, borderColor: "primary.main" }}>
          <Grid
            item
            xs={7}
            sx={{
              backgroundColor: "primary.main",
            }}
          >
            <Typography variant="subtitle2">Last Date Modified</Typography>
          </Grid>
          <Grid item xs={5}>
            <Typography variant="subtitle2">{date}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={3} sx={{ alignItems: "center" }}>
          <Grid item>
            <Avatar alt={name} src={imageUrl} sx={{ width: 64, height: 64 }} />
          </Grid>
          <Grid item>
            <Typography variant="body1" sx={{ borderBottom: 1 }}>
              Content Reviewed By:
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
