import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import { Box, Container,Grid, Typography, Button } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { DashboardLayout } from '../components/dashboard-layout';
import { TinnyWidget } from '../components/dashboard/tinny-widget';
import { ListTable } from '../components/crud/list-table';

const encuestasList = [
    {
      id: uuid(),
      nombre: 'Jardines',
      descripcion: 'Se compraran mas insumos para los jardines...',
      cantidad: 'S/. 200.00',
      edificio: 'A',
      categoria: 'Agua'
    },
];
const Cuentas = () => (
  <>
    <Head>
      <title>
      Cuentas
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
                <TinnyWidget name="Nuevas cuentas" value="1" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Cuentas editadas" value="0" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Total a pagar" value="S/. 200.00" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Marcados" value="1" background="#3930bb" color="#FFFFFF" />
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
                Cuentas
            </Typography>
            <Box sx={{ m: 1 }}>
                <Button
                color="primary"
                variant="contained"
                >
                Nueva cuenta
                </Button>
            </Box>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <ListTable header={["nombre", "descripcion", "cantidad", "edificio", "categoria"]} listData={encuestasList} />
        </Box>
      </Container>
    </Box>
  </>
);
Cuentas.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Cuentas;
