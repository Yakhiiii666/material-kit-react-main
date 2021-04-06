/*eslint-disable*/
import React from 'react';
import {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  makeStyles,
  Typography
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import VanRuns from '../../VanRun/VanRunListView';
import Modal from '@material-ui/core/Modal';

const rand = () =>  {
    return Math.round(Math.random() * 20) - 10;
  }
  
  const  getModalStyle = () => {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

const useStyles = makeStyles((theme) => ({
  root: {},
  importButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
   greenButton: {

    backgroundColor: "#6dd13b", // you can add your specific CSS here.

  },  redButton: {

    backgroundColor: "#f53d53", // you can add your specific CSS here.

  },
  VanRunText: {

  
   textAlign :"center"
  

 },  paper: {
    position: 'absolute',
    width: 1200,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }

}));
  export default function Toolbar({ className, ...rest }) {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const body =  (
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Select Van Run </h2>
          <p id="simple-modal-description">
          </p>
          <VanRuns />
          <Button className={classes.redButton} variant="contained" onClick={handleClose}>Cancel</Button>
        </div>
    );
    
  return (
    <div
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Box
        display="flex"
        justifyContent="center"
      >
          <Typography variant="h1" component="h2">
          Split VanRun  
</Typography>

<Typography variant="h1" component="h2"> 
        5402(needs to change this )
</Typography>
    
      </Box>
      <Box mt={3}>
        <Card>
          <CardContent>
            <Box maxWidth={500}>
      <Button className={classes.greenButton} variant="contained" onClick={handleOpen}>Select VanRun</Button>

      <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
       >
         {body}
       </Modal>
        <Button
          color="primary"
          variant="contained"
          onClick={handleOpen}
        >
          Add VanRun
        </Button>

        <Modal
         open={open}
         onClose={handleClose}
         aria-labelledby="simple-modal-title"
         aria-describedby="simple-modal-description"
       >
         {body}
       </Modal>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}


