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
var cp = global.web3.currentProvider;
var isToshi = !!cp.isToshi;
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
    host: "127.0.0.1",
    port: "7545"
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
      lineNumber: 143
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "GenomeCDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default.a, {
    variant: "display1",
    gutterBottom: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "GenomeCDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: "/static/genomeCDP.png",
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-206240353" + " " + "App-intro",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Generate loans against your genomic data"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Start"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, "Open CDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "primary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Draw Dai"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Wipe Dai"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default.a, {
    variant: "contained",
    color: "secondary",
    size: "small",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Close CDP"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default.a, {
    component: "nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "CDP ID: 028",
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Collateral: 1 GCPD",
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
    primary: "Debt: 100",
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
    divider: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Ratio: 400%",
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
    primary: "State: safe",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default.a, {
    light: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default.a, {
    button: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default.a, {
    primary: "Last Updated: 1 hour ago",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-206240353",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "206240353",
    css: "main.jsx-206240353{background-color:##F8F7F5;text-align:center;}div.jsx-206240353{background-color:##F8F7F5;text-align:center;}body.jsx-206240353{background-color:#000;text-align:center;}b.jsx-206240353{font-weight:normal;}.button.jsx-206240353{margin-left:8px;padding-right:8px;}ButtonBase.jsx-206240353{margin-left:8px;}Button.jsx-206240353{margin-left:8px;}h1.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;color:#000;text-align:center;}h2.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-206240353{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-206240353{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-206240353{box-sizing:inherit;}.action.jsx-206240353{padding-left:8px;}card.jsx-206240353:{minWidth:275,;}.jsx-206240353,bullet.jsx-206240353:{display:'inline-block', margin:'0 2px', transform:'scale(0.8)',;}.jsx-206240353,title.jsx-206240353:{marginBottom:16, fontSize:14,;}.jsx-206240353,pos.jsx-206240353:{marginBottom:12,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTlksQUFJNkIsQUFLSSxBQUtSLEFBS0QsQUFJSCxBQUtBLEFBSUEsQUFJc0gsQUFTQSxBQVdBLEFBVUEsQUFTN0csQUFPaEIsQUFVUSxBQUlGLEFBSUgsQUFJVSxBQUdYLEFBRUksV0ExQlAsR0FpQkssRUE1RUssQUFLcEIsQUFJQSxDQWdFRixBQVlvQixFQXpGbEIsQUF5RUYsRUFqQm1CLEFBUU4sQ0FyRU8sSUFWQSxBQUtBLElBaUdKLEVBOUJVLEFBUUgsRUE1RHJCLE1BVEEsSUFWRixBQUtNLE1BbUVvQixHQVFMLFdBa0JNLElBekJ2QixJQVFpQixtQkFDRixpQkFDbkIsd0JBcERvQixBQVNBLEFBV0EsQUFVRixZQUNELEVBOUJHLEFBU0MsQUFXQSxTQVdBLEtBOUJDLENBU0csQUFXRCxTQVdBLE1BOUJQLEdBb0JNLENBWEMsT0FSQSxDQThCcEIsUUFWYSxFQVhNLE9BUm5CLEVBb0JvQixRQVhQLFVBWWIsQ0FYb0Isa0JBQ3BCIiwiZmlsZSI6IkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5pbXBvcnQgSXBmc0FwaSBmcm9tICdpcGZzLWFwaSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IE1ha2VyIGZyb20gJ0BtYWtlcmRhby9kYWknXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IFN0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3RCdXR0b24nXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcclxuLy9pbXBvcnQgeyBEcml6emxlLCBnZW5lcmF0ZVN0b3JlIH0gZnJvbSAnZHJpenpsZSdcclxuLy9pbXBvcnQgeyBkcml6emxlQ29ubmVjdCB9IGZyb20gJ2RyaXp6bGUtcmVhY3QnXHJcbi8vaW1wb3J0IHsgZHJpenpsZUNvbm5lY3QgfSBmcm9tICdkcml6emxlLXJlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IENyZWF0ZU1ha2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlTWFrZXInO1xyXG5pbXBvcnQgT3BlbkNkcCBmcm9tICcuLi9jb21wb25lbnRzL09wZW5DZHAnO1xyXG5pbXBvcnQgTG9ja0dub21lIGZyb20gJy4uL2NvbXBvbmVudHMvTG9ja0dub21lJztcclxuaW1wb3J0IERyYXdEYWkgZnJvbSAnLi4vY29tcG9uZW50cy9EcmF3RGFpJztcclxuaW1wb3J0IFdpcGVEZWJ0IGZyb20gJy4uL2NvbXBvbmVudHMvV2lwZURlYnQnO1xyXG5pbXBvcnQgU2h1dENkcCBmcm9tICcuLi9jb21wb25lbnRzL1NodXRDZHAnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydEJ1dHRvbi5qcyc7XHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xyXG5cclxuY29uc3QgeyBjdXJyZW50UHJvdmlkZXI6IGNwIH0gPSBnbG9iYWwud2ViM1xyXG5jb25zdCBpc1Rvc2hpID0gISFjcC5pc1Rvc2hpXHJcblxyXG5cclxuXHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PlxyXG4gIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXHJcbik7XHJcblxyXG5cclxuLy8gSW1wb3J0IGNvbnRyYWN0c1xyXG5pbXBvcnQgR2Vub21lVG9rZW4gZnJvbSAnLi4vYnVpbGQvY29udHJhY3RzL0dlbm9tZVRva2VuLmpzb24nXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGNvbnRyYWN0czogW1xyXG4gICAgR2Vub21lVG9rZW5cclxuICBdXHJcbn1cclxuXHJcbi8vZ2xvYmFsLmRyaXp6bGVTdG9yZSA9IGdlbmVyYXRlU3RvcmUodGhpcy5wcm9wcy5vcHRpb25zKVxyXG4vL2dsb2JhbC5kcml6emxlID0gbmV3IERyaXp6bGUodGhpcy5wcm9wcy5vcHRpb25zLCBkcml6emxlU3RvcmUpXHJcblxyXG5cclxuLy8gTUFLRVIgQ09OU1RBTlRTXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRlZCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnU1RBUlRFRCdcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgbWFrZXJDcmVhdGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdNQUtFUl9DUkVBVEVEJ1xyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBjZHBPcGVuZWQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0NEUF9PUEVORUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGdub21lTG9ja2VkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdHTk9NRV9MT0NLRUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGRhaURyYXduID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdEQUlfRFJBV04nXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGRhaVdpcGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdEQUlfV0lQRUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGNkcFNodXQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0NEUF9TSFVUJ1xyXG4gIH0pO1xyXG4gIFxyXG5cclxuZ2xvYmFsLmNvbmZpZyA9IHtcclxuICAgIHJwYzoge1xyXG4gICAgICBob3N0OiBcIjEyNy4wLjAuMVwiLFxyXG4gICAgICBwb3J0OiBcIjc1NDVcIlxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnbG9iYWwud2ViMyA9IG5ldyBXZWIzKCk7XHJcbiAgd2ViMy5zZXRQcm92aWRlcihuZXcgd2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKGBodHRwczovLyR7Z2xvYmFsLmNvbmZpZy5ycGMuaG9zdH06JHtnbG9iYWwuY29uZmlnLnJwYy5wb3J0fWApKTtcclxuICAgICAgICAgIGlmICghd2ViMy5pc0Nvbm5lY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkV0aGVyZXVtIC0gbm8gY29uZWN0aW9uIHRvIFJQQyBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIEV0aGVyZXVtIG9uIExvY2FsIE1hY2hpbmUgdXNpbmcgR2FuYWNoZVwiKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAvLyBJUEZTIENvbmZpZyBHbG9iYWxzXHJcbiAgZ2xvYmFsLmlwZnMgPSBpcGZzO1xyXG4gIGdsb2JhbC5pcGZzSG9zdCA9ICdsb2NhbGhvc3QnLFxyXG4gIGdsb2JhbC5pcGZzQVBJUG9ydCA9ICc1MDAxJyxcclxuICBnbG9iYWwuaXBmc1dlYlBvcnQgPSAnODA4MCcsXHJcbiAgZ2xvYmFsLmlwZnNEYXRhSG9zdCA9IFwiaHR0cDovL1wiICsgaXBmc0hvc3QgKyAnOicgKyBpcGZzV2ViUG9ydCArIFwiL2lwZnNcIjtcclxuICBcclxuICBcclxuICB2YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICAgIGlwZnMuc3dhcm0ucGVlcnMoZnVuY3Rpb24oZXJyLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gSVBGU1wiKTtcclxuICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbmdsb2JhbC5tYWtlcktvdmFuID0gTWFrZXIuY3JlYXRlKCdrb3ZhbicsIHtcclxuICAgICAgICAgcHJpdmF0ZUtleTogJzB4MThmYmFiYmY5MzQ4MGE1ZTQ0OTVjZmE2ZGZlY2EwYjY0ZTgwMzFkZTQ4MDEzODFhMDJhZjZjMDgyOGJkNzFiZicsXHJcbiAgICAgICAgcHJvdmlkZXI6IHtcclxuICAgICAgICAgICAgaW5mdXJhQXBpS2V5OiAnRm9nZ2tFejFTUDFEemRoa1hVcjgnXHJcbiAgICAgIH1cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PGRpdj5cclxuXHQ8SGVhZD5cclxuICAgICAgPHRpdGxlPkdlbm9tZUNEUDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgIDwvSGVhZD5cclxuXHQ8SGVhZGVyIC8+XHJcbiAgICA8YnIvPlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXkxXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgIEdlbm9tZUNEUFxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZ2Vub21lQ0RQLnBuZ1wiLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGJyIC8+PGgxIGNsYXNzTmFtZT1cIkFwcC1pbnRyb1wiPkdlbmVyYXRlIGxvYW5zIGFnYWluc3QgeW91ciBnZW5vbWljIGRhdGE8L2gxPlxyXG5cclxuICAgICAgICAgIDxici8+XHJcbiAgICBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgIFN0YXJ0XHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICBPcGVuIENEUFxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgRHJhdyBEYWlcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgV2lwZSBEYWlcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgQ2xvc2UgQ0RQXHJcbiAgICA8L0J1dHRvbj5cclxuXHJcbjxici8+XHJcbjxici8+XHJcblxyXG48UGFwZXI+XHJcbjxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG48TGlzdEl0ZW0gYnV0dG9uPlxyXG4gIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNEUCBJRDogMDI4XCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbj5cclxuICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDb2xsYXRlcmFsOiAxIEdDUERcIiAvPlxyXG48L0xpc3RJdGVtPlxyXG48RGl2aWRlciBsaWdodCAvPlxyXG48TGlzdEl0ZW0gYnV0dG9uIGRpdmlkZXI+XHJcbiAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGVidDogMTAwXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbiBkaXZpZGVyPlxyXG4gIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJhdGlvOiA0MDAlXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbj5cclxuICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdGF0ZTogc2FmZVwiIC8+XHJcbjwvTGlzdEl0ZW0+XHJcbjxEaXZpZGVyIGxpZ2h0IC8+XHJcbjxMaXN0SXRlbSBidXR0b24+XHJcbiAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTGFzdCBVcGRhdGVkOiAxIGhvdXIgYWdvXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPC9MaXN0PlxyXG48L1BhcGVyPlxyXG5cclxuPGJyLz5cclxuPGJyLz5cclxuPGJyLz5cclxuXHJcblxyXG5cclxuXHJcbjxzdHlsZSBqc3g+e2BcclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMjRjhGN0Y1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICBkaXYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjI0Y4RjdGNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBCdXR0b25CYXNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBCdXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29ubmVjdGVkIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbmNhcmQ6IHtcclxuICBtaW5XaWR0aDogMjc1LFxyXG59LFxyXG5idWxsZXQ6IHtcclxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICBtYXJnaW46ICcwIDJweCcsXHJcbiAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbn0sXHJcbnRpdGxlOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAxNixcclxuICBmb250U2l6ZTogMTQsXHJcbn0sXHJcbnBvczoge1xyXG4gIG1hcmdpbkJvdHRvbTogMTIsXHJcbn0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgKSJdfQ== */\n/*@ sourceURL=C:\\genomeCDP\\pages\\index.js */",
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
//# sourceMappingURL=index.js.d1c21ad82929cc5005c7.hot-update.js.map