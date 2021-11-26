import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import { Box, Container,Grid, Typography, Button } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import { TinnyWidget } from '../components/dashboard/tinny-widget';
import { FormData } from '../components/crud/form-data';

const dataItems = [
    {
      nombre: 'Jardines',
      descripcion: 'Se compraran mas insumos para los jardines...',
    },
];
const NuevaCuenta = () => (
  <>
    <Head>
      <title>
      Nueva cuenta
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
                Nueva cuenta
            </Typography>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          
          <FormData dataState={{
                nombre: 'Enero',
                descripcion: 'Ninguna',
                cantidad: '800',
                edificio: 'A',
                categoria: 'Agua',
            }} dataItems={['nombre', 'descripcion', 'cantidad', 'edificio', 'categoria']} linkPrev="cuentas"/>

        </Box>
      </Container>
    </Box>
  </>
);
NuevaCuenta.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default NuevaCuenta;
