webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: started, makerCreated, cdpOpened, gnomeLocked, daiDrawn, daiWiped, cdpShut, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "started", function() { return started; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makerCreated", function() { return makerCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdpOpened", function() { return cdpOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gnomeLocked", function() { return gnomeLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daiDrawn", function() { return daiDrawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daiWiped", function() { return daiWiped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdpShut", function() { return cdpShut; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ipfs-api */ "../node_modules/ipfs-api/src/index.js");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ipfs_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _makerdao_dai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @makerdao/dai */ "./node_modules/@makerdao/dai/src/index.js");
/* harmony import */ var _makerdao_dai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_makerdao_dai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_StButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/StButton */ "./components/StButton.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/Card/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/CardActions/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducers */ "./pages/reducers/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/MenuItem/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _components_CreateMaker__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../components/CreateMaker */ "./components/CreateMaker.js");
/* harmony import */ var _components_OpenCdp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/OpenCdp */ "./components/OpenCdp.js");
/* harmony import */ var _components_LockGnome__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../components/LockGnome */ "./components/LockGnome.js");
/* harmony import */ var _components_DrawDai__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../components/DrawDai */ "./components/DrawDai.js");
/* harmony import */ var _components_WipeDebt__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../components/WipeDebt */ "./components/WipeDebt.js");
/* harmony import */ var _components_ShutCdp__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../components/ShutCdp */ "./components/ShutCdp.js");
/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../components/Loading */ "./components/Loading.js");
/* harmony import */ var _components_StartButton_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../components/StartButton.js */ "./components/StartButton.js");
/* harmony import */ var _build_contracts_GenomeToken_json__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../build/contracts/GenomeToken.json */ "./build/contracts/GenomeToken.json");
var _build_contracts_GenomeToken_json__WEBPACK_IMPORTED_MODULE_37___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../build/contracts/GenomeToken.json */ "./build/contracts/GenomeToken.json", 1);
var _jsxFileName = "C:\\genomeCDP\\pages\\index.js";
















 //import { Drizzle, generateStore } from 'drizzle'
//import { drizzleConnect } from 'drizzle-react'
//import { drizzleConnect } from 'drizzle-react'





















var store = Object(redux__WEBPACK_IMPORTED_MODULE_18__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_21__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_18__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_19__["default"]));
store.subscribe(function () {
  return console.log(store.getState());
}); // Import contracts


var options = {
  contracts: [_build_contracts_GenomeToken_json__WEBPACK_IMPORTED_MODULE_37__] //global.drizzleStore = generateStore(this.props.options)
  //global.drizzle = new Drizzle(this.props.options, drizzleStore)
  // MAKER CONSTANTS

};
var started = function started() {
  return {
    type: 'STARTED'
  };
};
var makerCreated = function makerCreated() {
  return {
    type: 'MAKER_CREATED'
  };
};
var cdpOpened = function cdpOpened() {
  return {
    type: 'CDP_OPENED'
  };
};
var gnomeLocked = function gnomeLocked() {
  return {
    type: 'GNOME_LOCKED'
  };
};
var daiDrawn = function daiDrawn() {
  return {
    type: 'DAI_DRAWN'
  };
};
var daiWiped = function daiWiped() {
  return {
    type: 'DAI_WIPED'
  };
};
var cdpShut = function cdpShut() {
  return {
    type: 'CDP_SHUT'
  };
};
global.config = {
  rpc: {
    host: "https://kovan.infura.io/FoggkEz1SP1DzdhkXUr8",
    port: "8545"
  }
};
global.web3 = new web3__WEBPACK_IMPORTED_MODULE_3___default.a();
web3.setProvider(new web3.providers.HttpProvider("https://".concat(global.config.rpc.host, ":").concat(global.config.rpc.port)));

if (!web3.isConnected()) {
  console.error("Ethereum - no conection to RPC server");
} else {
  console.log("Connected to Ethereum on Local Machine using Ganache");
} // IPFS Config Globals


global.ipfs = ipfs;
global.ipfsHost = 'localhost', global.ipfsAPIPort = '5001', global.ipfsWebPort = '8080', global.ipfsDataHost = "http://" + ipfsHost + ':' + ipfsWebPort + "/ipfs";
var ipfs = ipfs_api__WEBPACK_IMPORTED_MODULE_4___default()(ipfsHost, ipfsAPIPort);
ipfs.swarm.peers(function (err, response) {
  if (err) {
    console.log("not connected to IPFS on AWS");
  } else {
    console.log("Connected to IPFS"); //console.log(response);
  }
});
global.makerKovan = _makerdao_dai__WEBPACK_IMPORTED_MODULE_6___default.a.create('kovan', {
  privateKey: '0x18fbabbf93480a5e4495cfa6dfeca0b64e8031de4801381a02af6c0828bd71bf',
  provider: {
    infuraApiKey: 'FoggkEz1SP1DzdhkXUr8'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "GenomeCDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
    variant: "display1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "GenomeCDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/genomeCDP.png",
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-206240353" + " " + "App-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "Generate loans against your genomic data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Open CDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Draw Dai"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "Wipe Dai"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Close CDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "CDP ID: 098213",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Collateral: 1 GCPD",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    divider: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Debt: 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    divider: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Ratio: 400%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "State: safe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Last Updated: 1 hour ago",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "206240353",
    css: "main.jsx-206240353{background-color:##F8F7F5;text-align:center;}div.jsx-206240353{background-color:##F8F7F5;text-align:center;}body.jsx-206240353{background-color:#000;text-align:center;}b.jsx-206240353{font-weight:normal;}.button.jsx-206240353{margin-left:8px;padding-right:8px;}ButtonBase.jsx-206240353{margin-left:8px;}Button.jsx-206240353{margin-left:8px;}h1.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;color:#000;text-align:center;}h2.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-206240353{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-206240353{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-206240353{box-sizing:inherit;}.action.jsx-206240353{padding-left:8px;}card.jsx-206240353:{minWidth:275,;}.jsx-206240353,bullet.jsx-206240353:{display:'inline-block', margin:'0 2px', transform:'scale(0.8)',;}.jsx-206240353,title.jsx-206240353:{marginBottom:16, fontSize:14,;}.jsx-206240353,pos.jsx-206240353:{marginBottom:12,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpTlksQUFJNkIsQUFLSSxBQUtSLEFBS0QsQUFJSCxBQUtBLEFBSUEsQUFJc0gsQUFTQSxBQVdBLEFBVUEsQUFTN0csQUFPaEIsQUFVUSxBQUlGLEFBSUgsQUFJVSxBQUdYLEFBRUksV0ExQlAsR0FpQkssRUE1RUssQUFLcEIsQUFJQSxDQWdFRixBQVlvQixFQXpGbEIsQUF5RUYsRUFqQm1CLEFBUU4sQ0FyRU8sSUFWQSxBQUtBLElBaUdKLEVBOUJVLEFBUUgsRUE1RHJCLE1BVEEsSUFWRixBQUtNLE1BbUVvQixHQVFMLFdBa0JNLElBekJ2QixJQVFpQixtQkFDRixpQkFDbkIsd0JBcERvQixBQVNBLEFBV0EsQUFVRixZQUNELEVBOUJHLEFBU0MsQUFXQSxTQVdBLEtBOUJDLENBU0csQUFXRCxTQVdBLE1BOUJQLEdBb0JNLENBWEMsT0FSQSxDQThCcEIsUUFWYSxFQVhNLE9BUm5CLEVBb0JvQixRQVhQLFVBWWIsQ0FYb0Isa0JBQ3BCIiwiZmlsZSI6IkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5pbXBvcnQgSXBmc0FwaSBmcm9tICdpcGZzLWFwaSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IE1ha2VyIGZyb20gJ0BtYWtlcmRhby9kYWknXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IFN0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3RCdXR0b24nXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcclxuLy9pbXBvcnQgeyBEcml6emxlLCBnZW5lcmF0ZVN0b3JlIH0gZnJvbSAnZHJpenpsZSdcclxuLy9pbXBvcnQgeyBkcml6emxlQ29ubmVjdCB9IGZyb20gJ2RyaXp6bGUtcmVhY3QnXHJcbi8vaW1wb3J0IHsgZHJpenpsZUNvbm5lY3QgfSBmcm9tICdkcml6emxlLXJlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IENyZWF0ZU1ha2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlTWFrZXInO1xyXG5pbXBvcnQgT3BlbkNkcCBmcm9tICcuLi9jb21wb25lbnRzL09wZW5DZHAnO1xyXG5pbXBvcnQgTG9ja0dub21lIGZyb20gJy4uL2NvbXBvbmVudHMvTG9ja0dub21lJztcclxuaW1wb3J0IERyYXdEYWkgZnJvbSAnLi4vY29tcG9uZW50cy9EcmF3RGFpJztcclxuaW1wb3J0IFdpcGVEZWJ0IGZyb20gJy4uL2NvbXBvbmVudHMvV2lwZURlYnQnO1xyXG5pbXBvcnQgU2h1dENkcCBmcm9tICcuLi9jb21wb25lbnRzL1NodXRDZHAnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydEJ1dHRvbi5qcyc7XHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xyXG5cclxuXHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PlxyXG4gIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXHJcbik7XHJcblxyXG5cclxuLy8gSW1wb3J0IGNvbnRyYWN0c1xyXG5pbXBvcnQgR2Vub21lVG9rZW4gZnJvbSAnLi4vYnVpbGQvY29udHJhY3RzL0dlbm9tZVRva2VuLmpzb24nXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGNvbnRyYWN0czogW1xyXG4gICAgR2Vub21lVG9rZW5cclxuICBdXHJcbn1cclxuXHJcbi8vZ2xvYmFsLmRyaXp6bGVTdG9yZSA9IGdlbmVyYXRlU3RvcmUodGhpcy5wcm9wcy5vcHRpb25zKVxyXG4vL2dsb2JhbC5kcml6emxlID0gbmV3IERyaXp6bGUodGhpcy5wcm9wcy5vcHRpb25zLCBkcml6emxlU3RvcmUpXHJcblxyXG5cclxuLy8gTUFLRVIgQ09OU1RBTlRTXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRlZCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnU1RBUlRFRCdcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgbWFrZXJDcmVhdGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdNQUtFUl9DUkVBVEVEJ1xyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBjZHBPcGVuZWQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0NEUF9PUEVORUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGdub21lTG9ja2VkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdHTk9NRV9MT0NLRUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGRhaURyYXduID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdEQUlfRFJBV04nXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGRhaVdpcGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdEQUlfV0lQRUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGNkcFNodXQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0NEUF9TSFVUJ1xyXG4gIH0pO1xyXG4gIFxyXG5cclxuZ2xvYmFsLmNvbmZpZyA9IHtcclxuICAgIHJwYzoge1xyXG4gICAgICBob3N0OiBcImh0dHBzOi8va292YW4uaW5mdXJhLmlvL0ZvZ2drRXoxU1AxRHpkaGtYVXI4XCIsXHJcbiAgICAgIHBvcnQ6IFwiODU0NVwiXHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGdsb2JhbC53ZWIzID0gbmV3IFdlYjMoKTtcclxuICB3ZWIzLnNldFByb3ZpZGVyKG5ldyB3ZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIoYGh0dHBzOi8vJHtnbG9iYWwuY29uZmlnLnJwYy5ob3N0fToke2dsb2JhbC5jb25maWcucnBjLnBvcnR9YCkpO1xyXG4gICAgICAgICAgaWYgKCF3ZWIzLmlzQ29ubmVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXRoZXJldW0gLSBubyBjb25lY3Rpb24gdG8gUlBDIHNlcnZlclwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gRXRoZXJldW0gb24gTG9jYWwgTWFjaGluZSB1c2luZyBHYW5hY2hlXCIpO1xyXG4gICAgICAgICAgfVxyXG4gIFxyXG4gIC8vIElQRlMgQ29uZmlnIEdsb2JhbHNcclxuICBnbG9iYWwuaXBmcyA9IGlwZnM7XHJcbiAgZ2xvYmFsLmlwZnNIb3N0ID0gJ2xvY2FsaG9zdCcsXHJcbiAgZ2xvYmFsLmlwZnNBUElQb3J0ID0gJzUwMDEnLFxyXG4gIGdsb2JhbC5pcGZzV2ViUG9ydCA9ICc4MDgwJyxcclxuICBnbG9iYWwuaXBmc0RhdGFIb3N0ID0gXCJodHRwOi8vXCIgKyBpcGZzSG9zdCArICc6JyArIGlwZnNXZWJQb3J0ICsgXCIvaXBmc1wiO1xyXG4gIFxyXG4gIFxyXG4gIHZhciBpcGZzID0gSXBmc0FwaShpcGZzSG9zdCwgaXBmc0FQSVBvcnQpXHJcbiAgICAgICAgaXBmcy5zd2FybS5wZWVycyhmdW5jdGlvbihlcnIsIHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5vdCBjb25uZWN0ZWQgdG8gSVBGUyBvbiBBV1NcIik7XHJcbiAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBJUEZTXCIpO1xyXG4gICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuZ2xvYmFsLm1ha2VyS292YW4gPSBNYWtlci5jcmVhdGUoJ2tvdmFuJywge1xyXG4gICAgICAgICBwcml2YXRlS2V5OiAnMHgxOGZiYWJiZjkzNDgwYTVlNDQ5NWNmYTZkZmVjYTBiNjRlODAzMWRlNDgwMTM4MWEwMmFmNmMwODI4YmQ3MWJmJyxcclxuICAgICAgICBwcm92aWRlcjoge1xyXG4gICAgICAgICAgICBpbmZ1cmFBcGlLZXk6ICdGb2dna0V6MVNQMUR6ZGhrWFVyOCdcclxuICAgICAgfVxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0ICgpID0+IChcclxuXHQ8ZGl2PlxyXG5cdDxIZWFkPlxyXG4gICAgICA8dGl0bGU+R2Vub21lQ0RQPC90aXRsZT5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgPC9IZWFkPlxyXG5cdDxIZWFkZXIgLz5cclxuICAgIDxici8+XHJcbiAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiZGlzcGxheTFcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgR2Vub21lQ0RQXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuXHJcbiAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9nZW5vbWVDRFAucG5nXCIvPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8YnIgLz48aDEgY2xhc3NOYW1lPVwiQXBwLWludHJvXCI+R2VuZXJhdGUgbG9hbnMgYWdhaW5zdCB5b3VyIGdlbm9taWMgZGF0YTwvaDE+XHJcblxyXG4gICAgICAgICAgPGJyLz5cclxuICAgIFxyXG4gICAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgU3RhcnRcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgIE9wZW4gQ0RQXHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICBEcmF3IERhaVxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICBXaXBlIERhaVxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICBDbG9zZSBDRFBcclxuICAgIDwvQnV0dG9uPlxyXG5cclxuPGJyLz5cclxuPGJyLz5cclxuXHJcbjxQYXBlcj5cclxuPExpc3QgY29tcG9uZW50PVwibmF2XCI+XHJcbjxMaXN0SXRlbSBidXR0b24+XHJcbiAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiQ0RQIElEOiAwOTgyMTNcIiAvPlxyXG48L0xpc3RJdGVtPlxyXG48RGl2aWRlciBsaWdodCAvPlxyXG48TGlzdEl0ZW0gYnV0dG9uPlxyXG4gIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNvbGxhdGVyYWw6IDEgR0NQRFwiIC8+XHJcbjwvTGlzdEl0ZW0+XHJcbjxEaXZpZGVyIGxpZ2h0IC8+XHJcbjxMaXN0SXRlbSBidXR0b24gZGl2aWRlcj5cclxuICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJEZWJ0OiAxMDBcIiAvPlxyXG48L0xpc3RJdGVtPlxyXG48RGl2aWRlciBsaWdodCAvPlxyXG48TGlzdEl0ZW0gYnV0dG9uIGRpdmlkZXI+XHJcbiAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiUmF0aW86IDQwMCVcIiAvPlxyXG48L0xpc3RJdGVtPlxyXG48RGl2aWRlciBsaWdodCAvPlxyXG48TGlzdEl0ZW0gYnV0dG9uPlxyXG4gIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlN0YXRlOiBzYWZlXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbj5cclxuICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJMYXN0IFVwZGF0ZWQ6IDEgaG91ciBhZ29cIiAvPlxyXG48L0xpc3RJdGVtPlxyXG48L0xpc3Q+XHJcbjwvUGFwZXI+XHJcblxyXG48YnIvPlxyXG48YnIvPlxyXG48YnIvPlxyXG5cclxuXHJcblxyXG5cclxuPHN0eWxlIGpzeD57YFxyXG5cclxubWFpbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIyNGOEY3RjU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4gIGRpdiB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMjRjhGN0Y1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgfVxyXG5cclxuICBib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIGIge1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9XHJcblxyXG4gIEJ1dHRvbkJhc2Uge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIEJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAgIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsU2Vnb2UgVUksUm9ib3RvLE94eWdlbixVYnVudHUsQ2FudGFyZWxsLEZpcmEgU2FucyxEcm9pZCBTYW5zLEhlbHZldGljYSBOZXVlLHNhbnMtc2VyaWY7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb25uZWN0ZWQge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIHdpZHRoOiA4cHg7XHJcbiAgaGVpZ2h0OiA4cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogIzUwZTNjMjtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxufVxyXG5cclxuLmFmdGVyIHtcclxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYWN0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG5cclxuY2FyZDoge1xyXG4gIG1pbldpZHRoOiAyNzUsXHJcbn0sXHJcbmJ1bGxldDoge1xyXG4gIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gIG1hcmdpbjogJzAgMnB4JyxcclxuICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxufSxcclxudGl0bGU6IHtcclxuICBtYXJnaW5Cb3R0b206IDE2LFxyXG4gIGZvbnRTaXplOiAxNCxcclxufSxcclxucG9zOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAxMixcclxufSxcclxufTtcclxuXHJcblxyXG5cclxuXHJcbmB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICApIl19 */\n/*@ sourceURL=C:\\genomeCDP\\pages\\index.js */",
    __self: this
  }));
});
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.ff640fd1a17e716cec33.hot-update.js.map