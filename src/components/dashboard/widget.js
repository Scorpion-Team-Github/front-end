import { Card, CardContent, Grid, Typography } from '@mui/material';

export const Widget = (props) => (
  <Card 
    sx={{ height: '100%', backgroundColor: `${props.background}` }}
    {...props}>
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
            sx={{ color: `${props.color}`, fontSize:16 }}
          >
            {props.name}
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);
