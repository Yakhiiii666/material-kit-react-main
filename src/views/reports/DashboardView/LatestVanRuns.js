/*eslint-disable*/
import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles
} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const data = [
  {
    id: uuid(),
    name: '1101',
    imageUrl: '/static/images/VanRuns/OakTyresVan.JPG',
    updatedAt: moment().add(2, 'minute')
  },
  {
    id: uuid(),
    name: '1011',
    imageUrl: '/static/images/VanRuns/OakTyresVan.JPG',
    updatedAt: moment().add(30, 'minute')
  },
  {
    id: uuid(),
    name: '1542',
    imageUrl: '/static/images/VanRuns/OakTyresVan.JPG',
    updatedAt: moment().add(38, 'minute')
  },
  {
    id: uuid(),
    name: '1641',
    imageUrl: '/static/images/VanRuns/OakTyresVan.JPG',
    updatedAt: moment().add(55, 'minute')
  },
  {
    id: uuid(),
    name: '1761',
    imageUrl: '/static/images/VanRuns/OakTyresVan.JPG',
    updatedAt: moment().add(2, 'hours')
  }
];

const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));

const LatestVanRuns= ({ className, ...rest }) => {
  const classes = useStyles();
  const [VanRuns] = useState(data);

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        subtitle={`${VanRuns.length} in total`}
        title="Van Run Completion Time"
      />
      <Divider />
      <List>
        {VanRuns.map((VanRun, i) => (
          <ListItem
            divider={i < VanRuns.length - 1}
            key={VanRun.id}
          >
            <ListItemAvatar>
              <img
                alt="VanRun"
                className={classes.image}
                src={VanRun.imageUrl}
              />
            </ListItemAvatar>
            <ListItemText
              primary={VanRun.name}
              secondary={`completion ${VanRun.updatedAt.fromNow()}`}
            />
            <IconButton
              edge="end"
              size="small"
            >
              <MoreVertIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <Divider />
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

LatestVanRuns.propTypes = {
  className: PropTypes.string
};

export default LatestVanRuns;
