import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  makeStyles
} from '@material-ui/core';
import getInitials from '../../../../Tool/AccountView/DriverListView/node_modules/src/utils/getInitials';

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, Drivers, ...rest }) => {
  const classes = useStyles();
  const [selectedDriverIds, setSelectedDriverIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedDriverIds;

    if (event.target.checked) {
      newSelectedDriverIds = Drivers.map((Driver) => Driver.id);
    } else {
      newSelectedDriverIds = [];
    }

    setSelectedDriverIds(newSelectedDriverIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedDriverIds.indexOf(id);
    let newSelectedDriverIds = [];

    if (selectedIndex === -1) {
      newSelectedDriverIds = newSelectedDriverIds.concat(selectedDriverIds, id);
    } else if (selectedIndex === 0) {
      newSelectedDriverIds = newSelectedDriverIds.concat(selectedDriverIds.slice(1));
    } else if (selectedIndex === selectedDriverIds.length - 1) {
      newSelectedDriverIds = newSelectedDriverIds.concat(selectedDriverIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedDriverIds = newSelectedDriverIds.concat(
        selectedDriverIds.slice(0, selectedIndex),
        selectedDriverIds.slice(selectedIndex + 1)
      );
    }

    setSelectedDriverIds(newSelectedDriverIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedDriverIds.length === Drivers.length}
                    color="primary"
                    indeterminate={
                      selectedDriverIds.length > 0
                      && selectedDriverIds.length < Drivers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Name
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Location
                </TableCell>
                <TableCell>
                  Phone
                </TableCell>
                <TableCell>
                  Registration date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Drivers.slice(0, limit).map((Driver) => (
                <TableRow
                  hover
                  key={Driver.id}
                  selected={selectedDriverIds.indexOf(Driver.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedDriverIds.indexOf(Driver.id) !== -1}
                      onChange={(event) => handleSelectOne(event, Driver.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      alignItems="center"
                      display="flex"
                    >
                      <Avatar
                        className={classes.avatar}
                        src={Driver.avatarUrl}
                      >
                        {getInitials(Driver.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {Driver.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {Driver.email}
                  </TableCell>
                  <TableCell>
                    {`${Driver.address.city}, ${Driver.address.state}, ${Driver.address.country}`}
                  </TableCell>
                  <TableCell>
                    {Driver.phone}
                  </TableCell>
                  <TableCell>
                    {moment(Driver.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={Drivers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  Drivers: PropTypes.array.isRequired
};

export default Results;
