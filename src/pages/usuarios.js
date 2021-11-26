import NextLink from 'next/link';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import { Box, Container,Grid, Typography, Button } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { TinnyWidget } from '../components/dashboard/tinny-widget';
import { ListTable } from '../components/crud/list-table';

const usuariosList = [
    {
      id: uuid(),
      email: 'correo@email.com',
      nombre: 'Raul',
      apellido: 'Ramirez',
      telefono: '987676787',
      foto: 'S/N'
    },
];
const Usuarios = () => (
  <>
    <Head>
      <title>
        Usuarios
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <Grid
            container
            spacing={3}
            >
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Nuevos usuarios" value="1" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Usuarios editados" value="0" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Usuarios fijados" value="1" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Usuarios eliminados" value="0" background="#3930bb" color="#FFFFFF" />
            </Grid>
        </Grid>

        <Box
        sx={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
        }}
        >
            <Typography
                sx={{ m: 1 }}
                variant="h4"
            >
                Usuarios
            </Typography>
            <Box sx={{ m: 1 }}>
              <NextLink
                  href="nuevousuario"
                  passHref
                >
                <Button
                color="primary"
                variant="contained"
                >
                Nuevo usuario
                </Button>
              </NextLink>
            </Box>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <ListTable header={["email", "nombre", "apellido", "telefono", "foto"]} listData={usuariosList} />
        </Box>
      </Container>
    </Box>
  </>
);
Usuarios.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Usuarios;
