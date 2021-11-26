import NextLink from 'next/link';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import { Box, Container,Grid, Typography, Button } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { TinnyWidget } from '../components/dashboard/tinny-widget';
import { ListTable } from '../components/crud/list-table';

const novedadesList = [
    {
      id: uuid(),
      titulo: 'Alquilo',
      descripcion: 'Se alquila auto para mas informes contactase al...'
    },
];
const Novedades = () => (
  <>
    <Head>
      <title>
        Novedades
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
                <TinnyWidget name="Nuevas novedades" value="1" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Novedades editadas" value="0" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Sin leer" value="0" background="#3930bb" color="#FFFFFF" />
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
                Novedades
            </Typography>
            <Box sx={{ m: 1 }}>
              <NextLink
                  href="nuevanovedad"
                  passHref
                >
                <Button
                color="primary"
                variant="contained"
                >
                Nueva novedad
                </Button>
              </NextLink>
            </Box>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <ListTable header={["titulo", "descripcion"]} listData={novedadesList} />
        </Box>
      </Container>
    </Box>
  </>
);
Novedades.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Novedades;
