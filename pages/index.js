import React from 'react'
import Head from 'next/head'
import Web3 from 'web3'
import IpfsApi from 'ipfs-api'
import Header from '../components/header'
import Maker from '@makerdao/dai'
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import StButton from '../components/StButton'
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActions from '@material-ui/core/CardActions'
import App from '../components/App';
//import { Drizzle, generateStore } from 'drizzle'
//import { drizzleConnect } from 'drizzle-react'
//import { drizzleConnect } from 'drizzle-react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import CreateMaker from '../components/CreateMaker';
import OpenCdp from '../components/OpenCdp';
import LockGnome from '../components/LockGnome';
import DrawDai from '../components/DrawDai';
import WipeDebt from '../components/WipeDebt';
import ShutCdp from '../components/ShutCdp';
import Loading from '../components/Loading';
import StartButton from '../components/StartButton.js';


const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

const { currentProvider: cp } = global.web3
const isToshi = !!cp.isToshi



store.subscribe(() =>
  console.log(store.getState())
);


// Import contracts
import GenomeToken from '../build/contracts/GenomeToken.json'

const options = {
  contracts: [
    GenomeToken
  ]
}

//global.drizzleStore = generateStore(this.props.options)
//global.drizzle = new Drizzle(this.props.options, drizzleStore)


// MAKER CONSTANTS

export const started = () => ({
    type: 'STARTED'
  });
  
  export const makerCreated = () => ({
    type: 'MAKER_CREATED'
  });
  
  export const cdpOpened = () => ({
    type: 'CDP_OPENED'
  });
  
  export const gnomeLocked = () => ({
    type: 'GNOME_LOCKED'
  });
  
  export const daiDrawn = () => ({
    type: 'DAI_DRAWN'
  });
  
  export const daiWiped = () => ({
    type: 'DAI_WIPED'
  });
  
  export const cdpShut = () => ({
    type: 'CDP_SHUT'
  });
  

global.config = {
    rpc: {
      host: "127.0.0.1",
      port: "7545"
    }
  }
  
  global.web3 = new Web3();
  web3.setProvider(new web3.providers.HttpProvider(`https://${global.config.rpc.host}:${global.config.rpc.port}`));
          if (!web3.isConnected()) {
              console.error("Ethereum - no conection to RPC server");
          } else {
              console.log("Connected to Ethereum on Local Machine using Ganache");
          }
  
  // IPFS Config Globals
  global.ipfs = ipfs;
  global.ipfsHost = 'localhost',
  global.ipfsAPIPort = '5001',
  global.ipfsWebPort = '8080',
  global.ipfsDataHost = "http://" + ipfsHost + ':' + ipfsWebPort + "/ipfs";
  
  
  var ipfs = IpfsApi(ipfsHost, ipfsAPIPort)
        ipfs.swarm.peers(function(err, response) {
           if (err) {
            console.log("not connected to IPFS on AWS");
           } else {
           console.log("Connected to IPFS");
             //console.log(response);
          }
        });


//global.makerKovan = Maker.create('kovan', {
 //        privateKey: '0x18fbabbf93480a5e4495cfa6dfeca0b64e8031de4801381a02af6c0828bd71bf',
   //     provider: {
    //        infuraApiKey: 'FoggkEz1SP1DzdhkXUr8'
     // }
//});




export default () => (
	<div>
	<Head>
      <title>GenomeCDP</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
	<Header />
    <br/>
    <Typography variant="display1" gutterBottom>
        GenomeCDP
      </Typography>

      <img src="/static/genomeCDP.png"/>
          
          <br /><h1 className="App-intro">Generate loans against your genomic data</h1>

          <br/>
    
      <Button variant="contained" color="primary" size="small">
      Start
    </Button>
    <Button variant="contained" color="primary" size="small">
      Open CDP
    </Button>
    <Button variant="contained" color="primary" size="small">
      Draw Dai
    </Button>
    <Button variant="contained" color="secondary" size="small">
      Wipe Dai
    </Button>
    <Button variant="contained" color="secondary" size="small">
      Close CDP
    </Button>

<br/>
<br/>

<Paper>
<List component="nav">
<ListItem button>
  <ListItemText primary="CDP ID: 028" />
</ListItem>
<Divider light />
<ListItem button>
  <ListItemText primary="Collateral: 1 GCPD" />
</ListItem>
<Divider light />
<ListItem button divider>
  <ListItemText primary="Debt: 100" />
</ListItem>
<Divider light />
<ListItem button divider>
  <ListItemText primary="Ratio: 400%" />
</ListItem>
<Divider light />
<ListItem button>
  <ListItemText primary="State: safe" />
</ListItem>
<Divider light />
<ListItem button>
  <ListItemText primary="Last Updated: 1 hour ago" />
</ListItem>
</List>
</Paper>

<br/>
<br/>
<br/>




<style jsx>{`

main {
  background-color: ##F8F7F5;
  text-align: center;
}

  div {
      background-color: ##F8F7F5;
  text-align: center;
      }

  body {
  background-color: #000;
  text-align: center;
  }

  b {
    font-weight: normal;
  }

  .button {
    margin-left: 8px;
    padding-right: 8px;
  }

  ButtonBase {
    margin-left: 8px;
  }

  Button {
    margin-left: 8px;
  }

  h1 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 2em;
      font-weight: 200;
      color: #000;
      text-align: center;
    }

      h2 {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 24px;
      font-weight: normal;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    p {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      margin: 10px 0;
      font-size: 18px;
      margin-right: 30px;
      padding-left: 5px;
      color: #000;
      text-align: center;
    }

    img {
      font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
      height: 80px;
      width: 80px;
      font-size: 12px;
      text-align: center;
    }

    ul {

        display: inline-block;
        color: #999;
        position: absolute;
        margin-left: -15px;
    }

    .connected {
  content: '';
  width: 8px;
  height: 8px;
  display: inline-block;
  border-radius: 100%;
  background: #50e3c2;
  margin-left: 10px;
}

.after {
  box-sizing: inherit;
}

.action {
  padding-left: 8px;
}

card: {
  minWidth: 275,
},
bullet: {
  display: 'inline-block',
  margin: '0 2px',
  transform: 'scale(0.8)',
},
title: {
  marginBottom: 16,
  fontSize: 14,
},
pos: {
  marginBottom: 12,
},
};




`}</style>
  </div>



  )