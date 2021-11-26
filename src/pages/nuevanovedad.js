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
const NuevaNovedad = () => (
  <>
    <Head>
      <title>
      Nueva novedad
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
                Nueva novedad
            </Typography>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          
          <FormData dataState={{
                titulo: '',
                descripcion: '',
            }} dataItems={['titulo', 'descripcion']} linkPrev="novedads"/>

        </Box>
      </Container>
    </Box>
  </>
);
NuevaNovedad.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default NuevaNovedad;
