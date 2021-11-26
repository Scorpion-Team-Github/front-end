import { Card, CardContent, Grid, Typography } from '@mui/material';

export const CardValue = (props) => (
  <Card
    sx={{ height: '100%', backgroundColor: `${props.background}` }}
    {...props}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
            sx={{ color: `${props.color}` }}
          >
            {props.name}
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
            sx={{ color: `${props.color}` }}
          >
            $24k
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
