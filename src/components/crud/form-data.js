import NextLink from 'next/link';
import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const FormData = (props) => {
  const [values, setValues] = useState(props.dataState);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
              
                {props.dataItems.map((item) => (
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <TextField
                            fullWidth
                            label={item}
                            name={item}
                            onChange={handleChange}
                            required
                            value={values[item]}
                            variant="outlined"
                        />
                    </Grid>
                ))}
          </Grid>
        </CardContent>
        <Divider />

        <Grid
              container
              spacing={3}
            >
              <Grid
                item
                xs={12}
                md={6}
              >
                <NextLink
                href={props.linkPrev}
                passHref
                >
                    <Button
                    color="primary"
                    variant="contained"
                    >
                    Regresar
                    </Button>
                </NextLink>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
              >
                <Button
                    color="primary"
                    variant="contained"
                >
                    Guardar
                </Button>
              </Grid>
            </Grid>

      </Card>
    </form>
  );
};
