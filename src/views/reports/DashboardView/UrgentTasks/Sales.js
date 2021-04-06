/*eslint-disable*/
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
import TicketCard from './TicketCard';
import  axios from 'axios';
import * as signalR from '@microsoft/signalr';


var tickets = [] ;
var PageNumber = 1;
var ticketNumbers = 0;
class TicketDashboard  extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [tickets]
    };

  }
  
  componentDidMount() {

    const connection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:44346/Hubs/ticket_Hub")
    .configureLogging(signalR.LogLevel.Information)
    .build();

async function start() {
    try {
        await connection.start();
        console.log("SignalR Connected.");
    } catch (err) {
        console.log(err);
        setTimeout(start, 5000);
    }

   
};

connection.onclose(start);
start();

connection.on("ticket_Added_For_Depot", function (item) {
  tickets.push(item)
  ticketNumbers += 1 
  console.log(ticketNumbers)
  console.log( Math.floor(ticketNumbers  / 6))

       this.setState({
              isLoaded: true,
              items :tickets,
              PageNumber : Math.floor(ticketNumbers  / 6)
            });

  console.log("its here workingggggggggggggggggggggggggggggggggggggggggggggggggg");
  console.log(item);
 
  }.bind(this));

  }
  render() {
    const { error, isLoaded, items ,PageNumber
    } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
          <Page
    title="VanRuns"
  >
    <Container maxWidth={false}>
      <Toolbar />
    </Container>
  </Page>
);
      
    } else {
      return (
            <Page
    >
      <Container maxWidth={false}>
        <Toolbar />
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >

{items.map(item => (
         
              <Grid  Pagination {...items}
                item
                key={item}
                lg={4}
                md={6}
                xs={12}
              >
                <TicketCard
                  Ticket={item}
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
            count={PageNumber}
            size="small"
            rowsPerPageOptions = {6}
            
          />
        </Box>
      </Container>
    </Page>
  );
};
    
    }
  }



export default TicketDashboard ;

// BytesReceived: "58"
// BytesSent: "486"
// ConnectionTime: "4"
// ExecutionTime: "1"
// IduRows: "1"
// NetworkServerTime: "1"
// SelectRows: "0"


  // var url = "https://localhost:44346/api/Ticket";
      // var param = {
      //   "ticket_Name": "ReactTest",
      //   "created_By_User":"React"
      //   };
      // var config = {
      //   headers: {
      //     'Content-Type':'application/json; charset=utf-8;' 
      //     ,'Accept':'*/*'
      //     ,'Access-Control-Allow-Origin': 'AllowAllHeaders'
      //   }
      // };
        // axios.post(url,param ,config)

        // .then(
        //   (result) => {
        //     console.log(result)
        //     this.setState({
        //       isLoaded: true,
        //       items: result.data
            
        //     });
        //   },
        //   // Note: it's important to handle errors here
        //   // instead of a catch() block so that we don't swallow
        //   // exceptions from actual bugs in components.
        //   (error) => {
        //     this.setState({
        //       isLoaded: true,
        //       error
        //     });
        //   }
        // )
      

// import data from './data';

// var resdata = null;
// postData("https://localhost:44346/api/Ticket",
// {
//   "ticket_Name": "ReactTest",
//   "created_By_User":"React"
//   });
//   // .then(data => {
//   //   // let json = data.json()
//   //   console.log(JSON.stringify(data)); // JSON data parsed by `data.json()` call
//   // });

// // Example POST method implementation:
// async function postData() {
//   var dataTosend = JSON.stringify(data);
//     //  console.log(dataTosend);
//   // axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
//   // axios.defaults.headers["Access-Control-Allow-Origin"] = "AllowAllHeaders";
//   // application/json

//   var url = "https://localhost:44346/api/Ticket";
//   var param = {
//     "ticket_Name": "ReactTest",
//     "created_By_User":"React"
//     };
//   var config = {
//     headers: {
//       'Content-Type':'application/json; charset=utf-8;' 
//       ,'Accept':'*/*'
//       ,'Access-Control-Allow-Origin': 'AllowAllHeaders'
//     }
//   };
//     axios.post(url,param ,config)
//   .then(res => {
//     resdata = res;
//     console.log(res);
//  });
  
// }


// const useStyles = makeStyles((theme) => ({
//   root: {
//     // backgroundColor: theme.palette.background.dark,
//     minHeight: '100%',
//     paddingBottom: theme.spacing(3),
//     paddingTop: theme.spacing(3)
//   },
//   VanRunCard: {
//     height: '100%'
//   }
// }));

// const VanRunList = () => {
  
//   const classes = useStyles();
//   const VanRuns = useState(resdata);

//   return (
//     <Page
//       className={classes.root}
//       title="VanRuns"
//     >
//       <Container maxWidth={false}>

// <h1>{VanRuns}</h1>
//         {/* <Toolbar />
//         <Box mt={3}>
//           <Grid
//             container
//             spacing={3}
//           >
//             {VanRuns.map((VanRun) => (
//               <Grid
//                 item
//                 key={VanRun.id}
//                 lg={4}
//                 md={6}
//                 xs={12}
//               >
//                 <VanRunCard
//                   className={classes.VanRunCard}
//                   VanRun={VanRun}
//                 />
//               </Grid>
//             ))}
//           </Grid>
//         </Box>
//         <Box
//           mt={3}
//           display="flex"
//           justifyContent="center"
//         >
//           <Pagination
//             color="primary"
//             count={3}
//             size="small"
//           />
//         </Box> */}
//       </Container>
//     </Page>
//   );
// };