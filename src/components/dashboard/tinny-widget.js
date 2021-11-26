import { Card, CardContent, Grid, Typography } from '@mui/material';

export const TinnyWidget = (props) => (
  <Card
    sx={{ height: '100%', backgroundColor: `${props.background}` }}
    {...props}
  >
    <CardContent>
        <Grid
            container
            spacing={3}
        >
        <Grid item>
          <Typography
            color={props.color}
            variant="h6"
          >
            {props.value}
          </Typography>
          <Typography
            color={props.color}
            gutterBottom
            variant="overline"
          >
            {props.name}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
