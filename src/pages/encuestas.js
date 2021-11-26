import NextLink from 'next/link';
import Head from 'next/head';
import { v4 as uuid } from 'uuid';
import { Box, Container,Grid, Typography, Button } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { TinnyWidget } from '../components/dashboard/tinny-widget';
import { ListTable } from '../components/crud/list-table';

const encuestasList = [
    {
      id: uuid(),
      titulo: 'Jardines',
      descripcion: 'Se compraran mas insumos para los jardines...'
    },
];
const Encuestas = () => (
  <>
    <Head>
      <title>
        Encuestas
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
                <TinnyWidget name="Nuevas encuestas" value="1" background="#3930bb" color="#FFFFFF" />
            </Grid>
            <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
            >
                <TinnyWidget name="Encuestas editadas" value="0" background="#3930bb" color="#FFFFFF" />
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
                Encuestas
            </Typography>
            <Box sx={{ m: 1 }}>
              <NextLink
                  href="nuevaencuesta"
                  passHref
                >
                  <Button
                  color="primary"
                  variant="contained"
                  >
                  Nueva encuesta
                  </Button>
                </NextLink>
            </Box>
        </Box>
        
        <Box sx={{ mt: 3 }}>
          <ListTable header={["titulo", "descripcion"]} listData={encuestasList} />
        </Box>
      </Container>
    </Box>
  </>
);
Encuestas.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Encuestas;
