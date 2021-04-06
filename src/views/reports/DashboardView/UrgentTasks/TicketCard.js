/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  },
  background: {
    default: "white"
  }
}));


const TicketCard = ({ className, Ticket, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      // className={clsx(classes.root, className)}
      // {...rest}
    >
      <CardContent>
        
        <Box
        bgcolor = ""
          display="flex"
          justifyContent="center"
          mb={3}
          // bgcolor = "red"
        >
          {/* <Avatar
            alt="VanRun"
            // src = {PriorityHighIcon}
            variant="square"
            image = {PriorityHighIcon}
          /> */}
         <Avatar className={classes.avatar }>
              <PriorityHighIcon />
            </Avatar>
        </Box>
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          {/* {Ticket.ticket_Name} */}
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="body1"
        >
          {/* {Ticket.ticket_Owner} */}
        </Typography>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
            
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            {/* <Avatar className={classes.avatar }>
            {VanRun.source}
            </Avatar> */}
            <Typography
              color="textSecondary"
              display="inline"
              variant="body2"
            >
              {/* {VanRun.totalDownloads} */}
              {' '}
              
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

TicketCard.propTypes = {
  className: PropTypes.string,
  Ticket: PropTypes.object.isRequired
};

export default TicketCard;
