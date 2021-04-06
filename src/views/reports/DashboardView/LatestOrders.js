import React, { useState } from 'react';
import clsx from 'clsx';
import moment from 'moment';
import { v4 as uuid } from 'uuid';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    ref: '1049',
    amount: 30.5,
    Driver: {
      name: 'Andrew Goldsmith'
    },
    createdAt: 1555016400000,
    status: 'Waiting'
  },
  {
    id: uuid(),
    ref: '1048',
    amount: 25.1,
    Driver: {
      name: 'Ashley Turner'
    },
    createdAt: 1555016400000,
    status: 'Complete'
  },
  {
    id: uuid(),
    ref: '1047',
    amount: 10.99,
    Driver: {
      name: 'Anthony Gray'
    },
    createdAt: 1554930000000,
    status: 'Complete'
  },
  {
    id: uuid(),
    ref: '1046',
    amount: 96.43,
    Driver: {
      name: 'Andrew Harker'
    },
    createdAt: 1554757200000,
    status: 'Loading'
  },
  {
    id: uuid(),
    ref: '1045',
    amount: 32.54,
    Driver: {
      name: 'Aaron Atkinson'
    },
    createdAt: 1554670800000,
    status: 'Loading'
  },
  {
    id: uuid(),
    ref: '1044',
    amount: 16.76,
    Driver: {
      name: 'Anthony Trueman'
    },
    createdAt: 1554670800000,
    status: 'Loading'
  }
];

const useStyles = makeStyles(() => ({
  root: {},
  actions: {
    justifyContent: 'flex-end'
  }
}));

const LatestOrders = ({ className, ...rest }) => {
  const classes = useStyles();
  const [orders] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Loading Van Runs" />
      <Divider />
      <PerfectScrollbar>
        <Box minWidth={800}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Van Run
                </TableCell>
                <TableCell>
                  Driver
                </TableCell>
                <TableCell sortDirection="desc">
                  <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                      Date
                    </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell>
                  Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order) => (
                <TableRow
                  hover
                  key={order.id}
                >
                  <TableCell>
                    {order.ref}
                  </TableCell>
                  <TableCell>
                    {order.Driver.name}
                  </TableCell>
                  <TableCell>
                    {moment(order.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    <Chip
                      color="primary"
                      label={order.status}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LatestOrders.propTypes = {
  className: PropTypes.string
};

export default LatestOrders;
