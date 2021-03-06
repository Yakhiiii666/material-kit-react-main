import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'src/components/Page';
import Toolbar from './Toolbar';
import VanRunCard from './VanRunCard';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  VanRunCard: {
    height: '100%'
  }
}));

const VanRunList = () => {
  const classes = useStyles();
  const [VanRuns] = useState(data);

  return (
    <Page
      className={classes.root}
      title="VanRuns"
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            {VanRuns.map((VanRun) => (
              <Grid
                item
                key={VanRun.id}
                lg={4}
                md={6}
                xs={12}
              >
                <VanRunCard
                  className={classes.VanRunCard}
                  VanRun={VanRun}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

export default VanRunList;
