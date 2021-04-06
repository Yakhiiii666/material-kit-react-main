/*eslint-disable*/
import React, { useState } from "react";
 import { makeStyles } from '@material-ui/core/styles';
 import Modal from '@material-ui/core/Modal';
 import VanRuns from '../../VanRun/VanRunListView';
 import Toolbar from './Toolbar';
 import SplitTool from './SplitFunction';



const Counter = () => {
  // State: a counter value
  const [counter, setCounter] = useState(0)

  // Action: code that causes an update to the state when something happens
  const increment = () => {
    setCounter(lastcount => lastcount + 1)
  }

  // View: the UI definition
  return (
    <div>
      Value: {counter} <button onClick={increment}>Increment</button>
    </div>
  )
}

 
 const useStyles = makeStyles((theme) => ({
   paper: {
     position: 'absolute',
     width: 1200,
     backgroundColor: theme.palette.background.paper,
     border: '2px solid #000',
     boxShadow: theme.shadows[5],
     padding: theme.spacing(2, 4, 3),
   },
 }));
 
 export default function SimpleModal() {
   const classes = useStyles();
   return (
     <div>
       <Toolbar /> 
      <div>
       <Counter /> 
      </div>
      {/* <div>
      <SplitTool />
   </div> */}
    </div>
   );
 }

 

// import React, { useState } from "react";
// import ReactDOM from "react-dom";
// import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
// import Toolbar from './Toolbar';
// import Page from 'src/components/Page';
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   TextField,
//   InputAdornment,
//   SvgIcon,
//   makeStyles,
//  Container,
//  Typography
// } from '@material-ui/core';
// import Modal from '@material-ui/core/Modal';

// // const useState = () =>{
  
// //     modalIsOpen: false,
// //     secondModalIsOpen: false
  
// // }


// const useStyles = makeStyles((theme) => ({
//   root: {},
//   importButton: {
//     marginRight: theme.spacing(1)
//   },
//   exportButton: {
//     marginRight: theme.spacing(1)
//   },
//    greenButton: {

//     backgroundColor: "#6dd13b", // you can add your specific CSS here.

//   },
//   VanRunText: {

  
//    textAlign :"center"
//  }

// }));

// const openModal = () => {
//   this.setState({ modalIsOpen: true });
// };

// const closeModal = () => {
//   this.setState({ modalIsOpen: false });
// };

// const openSecondModal = () => {
//   this.setState({ secondModalIsOpen: true });
// };

// const closeSecondModal = () => {
//   this.setState({ secondModalIsOpen: false });
// };





// const grid = 8;
// const QuoteApp = () => {
//   // const [modalIsOpen,secondModalIsOpen] = useState(false);
//   const [state, setState] = useState(openModal,closeModal,openSecondModal,closeSecondModal,{modalIsOpen:false,secondModalIsOpen:false});
//   const classes = useStyles();


//   return (
 
//       <Page
     
//         title="Drivers"
//       >
//          <div>
//         <Box
//         display="flex"
//         justifyContent="center"
//       >
//           <Typography variant="h1" component="h2">
//           Split VanRun  
// </Typography>

// <Typography variant="h1" component="h2"> 
//         5402(needs to change this )
// </Typography>
    
//       </Box>
//         <Box mt={3}>
//         <Card>
//           <CardContent>
//             <Box maxWidth={500}>

          

//              <button onClick={() => {
//             setState([...state, openSecondModal]);
//           }}>Open Test Modal</button>



//         <Modal
//         isOpen={() => {
//             setState([...state, modalIsOpen]);
//           }} 
//           onRequestClose={() => {
//             setState([...state, closeModal]);
//           }}
//           >
//         <button onClick={() => {
//             setState([...state, closeModal]);
//           }}>TestModal</button>

//       </Modal>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
  
//       <Box mt={3}>
//         <Card>
//           <CardContent>
//             <Box maxWidth={500}>
//       <Button className={classes.greenButton} variant="contained"   onClick={() => {
//           setState([...state, []]);
//         }}>Select VanRun</Button>
//         <Button
//           color="primary"
//           variant="contained"
//           onClick={() => {
//             setState([...state, getItems(1)]);
//           }}
//         >
//           Add VanRun
//         </Button>
//             </Box>
//           </CardContent>
//         </Card>
//       </Box>
//  </div>
 
//     </Page>
//   );
// }

// // const rootElement = document.getElementById("root");
// // ReactDOM.render(<QuoteApp />, rootElement);

// export default QuoteApp;
