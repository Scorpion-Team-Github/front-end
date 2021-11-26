import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CardValue } from '../components/dashboard/card-value';
import { LatestOrders } from '../components/dashboard/latest-orders';
import { LatestProducts } from '../components/dashboard/latest-products';
import { Sales } from '../components/dashboard/sales';
import { TasksProgress } from '../components/dashboard/tasks-progress';
import { Widget } from '../components/dashboard/widget';
import { TotalProfit } from '../components/dashboard/total-profit';
import { TrafficByDevice } from '../components/dashboard/traffic-by-device';
import { DashboardLayout } from '../components/dashboard-layout';

const Dashboard = () => (
  <>
    <Head>
      <title>
        Dashboard | Inicio
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
            <CardValue name="Deuda total sin pagar" value="S/.1000" background="#3930bb" color="#FFFFFF" />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Widget name="Comunidad" background="#3930bb" color="#FFFFFF"/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Widget name="Proveedores" background="#3930bb" color="#FFFFFF"/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Widget name="Reglas de convivencia" background="#3930bb" color="#FFFFFF"/>
          </Grid>
          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <CardValue name="Usuarios registrados en el condominio" value="2" background="#3930bb" color="#FFFFFF"/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Widget name="Reservaciones" background="#3930bb" color="#FFFFFF"/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Widget name="Incidencias" background="#3930bb" color="#FFFFFF"/>
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          >
            <Widget name="Soporte" background="#3930bb" color="#FFFFFF"/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

Dashboard.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Dashboard;
