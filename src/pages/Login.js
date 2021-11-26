import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Facebook as FacebookIcon } from '../icons/facebook';
import { Google as GoogleIcon } from '../icons/google';
import apiAuth from 'src/api/apiAuth';
import { useState } from 'react';

const Login = () => {

  const [errorService, setErrorService] = useState(false)
  const [message, setMessage] = useState('')


  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      user: 'admin',
      password: 'password'
    },
    validationSchema: Yup.object({
      user: Yup
        .string()
        .max(255)
        .required('Campo requerido'),
      password: Yup
        .string()
        .max(255)
        .required('Campo requerido')
    }),
    onSubmit: async (values) => {
      const { user, password } = values
      const res = await apiAuth.login({ user, password })
      if (res.status_code !== 200) {
        setErrorService(true)
        setMessage('Usuario y/o constraseña incorrecta')
      } else {
        router.push('/');
      }
    }
  });

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Iniciar Sesión
              </Typography>
            </Box>
            {errorService &&
              <Box sx={{ my: 2 }}>
                <Typography
                  color="error"
                  variant="h6"
                >
                  {message}
                </Typography>
              </Box>
            }
            <TextField
              error={Boolean(formik.touched.user && formik.errors.user)}
              fullWidth
              helperText={formik.touched.user && formik.errors.user}
              label="Usuario"
              margin="normal"
              name="user"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="text"
              value={formik.values.user}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Ingresar
              </Button>
            </Box>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Login;
