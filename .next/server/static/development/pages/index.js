module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: started, makerCreated, cdpOpened, gcdpLocked, daiDrawn, daiWiped, cdpShut, startAsync */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "started", function() { return started; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makerCreated", function() { return makerCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdpOpened", function() { return cdpOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gcdpLocked", function() { return gcdpLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daiDrawn", function() { return daiDrawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daiWiped", function() { return daiWiped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdpShut", function() { return cdpShut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startAsync", function() { return startAsync; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _makerdao_dai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @makerdao/dai */ "@makerdao/dai");
/* harmony import */ var _makerdao_dai__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_makerdao_dai__WEBPACK_IMPORTED_MODULE_1__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


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
var gcdpLocked = function gcdpLocked() {
  return {
    type: 'GCDP_LOCKED'
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

var drawDaiAsync = function drawDaiAsync(maker, cdp) {
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch) {
        var defaultAccount, dai, txn, balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                defaultAccount = maker.service('token').get('web3').defaultAccount();
                dai = maker.service('token').getToken('DAI');
                _context.next = 4;
                return cdp.drawDai(0.1);

              case 4:
                txn = _context.sent;
                _context.next = 7;
                return dai.balanceOf(defaultAccount);

              case 7:
                balance = _context.sent;
                console.log('Transaction from drawing Dai:', txn);
                console.log('Dai balance after drawing:', balance.toString());
                dispatch(daiDrawn());

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};

var wipeDebtAsync = function wipeDebtAsync(maker, cdp) {
  return (
    /*#__PURE__*/
    function () {
      var _ref2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var defaultAccount, dai, txn, balance;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                defaultAccount = maker.service('token').get('web3').defaultAccount();
                dai = maker.service('token').getToken('DAI');
                _context2.next = 4;
                return cdp.wipeDai(0.1);

              case 4:
                txn = _context2.sent;
                _context2.next = 7;
                return dai.balanceOf(defaultAccount);

              case 7:
                balance = _context2.sent;
                console.log('Transaction from wiping Dai:', txn);
                console.log('Dai balance after wiping:', balance.toString());
                dispatch(daiWiped());

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()
  );
};

var shutCdpAsync = function shutCdpAsync(cdp) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var txn;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return cdp.shut();

              case 2:
                txn = _context3.sent;
                console.log('Transaction from shutting the CDP:', txn);
                dispatch(cdpShut());

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};

var startAsync = function startAsync() {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        var maker, cdp, lockEthTx;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch(started());
                maker = _makerdao_dai__WEBPACK_IMPORTED_MODULE_1___default.a.create(process.env.REACT_APP_NETWORK, {
                  privateKey: process.env.REACT_APP_PRIVATE_KEY,
                  overrideMetamask: true
                });
                console.log('maker:', maker);
                dispatch(makerCreated());
                _context4.next = 6;
                return maker.openCdp();

              case 6:
                cdp = _context4.sent;
                console.log('cdp:', cdp);
                dispatch(cdpOpened());
                _context4.next = 11;
                return cdp.lockEth(0.01);

              case 11:
                lockEthTx = _context4.sent;
                console.log('transaction to lock eth:', lockEthTx);
                dispatch(ethLocked());
                _context4.next = 16;
                return dispatch(drawDaiAsync(maker, cdp));

              case 16:
                _context4.next = 18;
                return dispatch(wipeDebtAsync(maker, cdp));

              case 18:
                _context4.next = 20;
                return dispatch(shutCdpAsync(cdp));

              case 20:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};

/***/ }),

/***/ "./build/contracts/GenomeToken.json":
/*!******************************************!*\
  !*** ./build/contracts/GenomeToken.json ***!
  \******************************************/
/*! exports provided: contractName, abi, bytecode, deployedBytecode, sourceMap, deployedSourceMap, source, sourcePath, ast, legacyAST, compiler, networks, schemaVersion, updatedAt, default */
/***/ (function(module) {

module.exports = {"contractName":"GenomeToken","abi":[{"constant":true,"inputs":[{"name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"InterfaceId_ERC165","outputs":[{"name":"","type":"bytes4"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"exists","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_tokenId","type":"uint256"},{"name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"genomes","outputs":[{"name":"owner","type":"uint256"},{"name":"genes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"}],"name":"OwnershipRenounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"previousOwner","type":"address"},{"indexed":true,"name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_approved","type":"address"},{"indexed":true,"name":"_tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_operator","type":"address"},{"indexed":false,"name":"_approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":true,"inputs":[{"name":"_genomeId","type":"uint256"}],"name":"getGenome","outputs":[{"name":"owner","type":"uint256"},{"name":"genomeId","type":"uint256"},{"name":"genes","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}],"bytecode":"0x","deployedBytecode":"0x","sourceMap":"","deployedSourceMap":"","source":"pragma solidity ^0.4.24;\r\n\r\nimport \"openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol\";\r\nimport \"openzeppelin-solidity/contracts/ownership/Ownable.sol\";\r\n\r\ncontract GenomeToken is ERC721Token, Ownable {\r\n    string public constant name = \"GenomeToken\";\r\n    string public constant symbol = \"GCDP\";\r\n\r\n    struct Genome {\r\n        \r\n        uint256 owner;\r\n        uint256 genes;\r\n\r\n    }\r\n\r\n    Genome[] public genomes;\r\n\r\n    function getGenome(uint256 _genomeId) external view returns (uint256 owner, uint256 genomeId, uint256 genes) {\r\n        Genome storage _gene = genomes[_genomeId];\r\n\r\n        owner = uint256(_gene.owner);\r\n        genes = uint256(_gene.genes);\r\n\r\n    }\r\n\r\n        function createGenome(uint256 _owner, uint256 _genes) internal returns (uint){\r\n        Genome memory _genome = Genome({ owner: _owner, genes: _genes});\r\n        uint256 _genomeId = genomes.push(_genome) - 1;\r\n\r\n        createGenome(_owner, _genomeId);\r\n    }\r\n\r\n}","sourcePath":"C:\\genomeCDP\\contracts\\Genome.sol","ast":{"absolutePath":"/C/genomeCDP/contracts/Genome.sol","exportedSymbols":{"GenomeToken":[85]},"id":86,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".24"],"nodeType":"PragmaDirective","src":"0:24:0"},{"absolutePath":"openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol","file":"openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol","id":2,"nodeType":"ImportDirective","scope":86,"sourceUnit":1462,"src":"28:70:0","symbolAliases":[],"unitAlias":""},{"absolutePath":"openzeppelin-solidity/contracts/ownership/Ownable.sol","file":"openzeppelin-solidity/contracts/ownership/Ownable.sol","id":3,"nodeType":"ImportDirective","scope":86,"sourceUnit":346,"src":"100:63:0","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":4,"name":"ERC721Token","nodeType":"UserDefinedTypeName","referencedDeclaration":1461,"src":"191:11:0","typeDescriptions":{"typeIdentifier":"t_contract$_ERC721Token_$1461","typeString":"contract ERC721Token"}},"id":5,"nodeType":"InheritanceSpecifier","src":"191:11:0"},{"arguments":null,"baseName":{"contractScope":null,"id":6,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":345,"src":"204:7:0","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$345","typeString":"contract Ownable"}},"id":7,"nodeType":"InheritanceSpecifier","src":"204:7:0"}],"contractDependencies":[114,165,345,372,392,399,521,1069,1461],"contractKind":"contract","documentation":null,"fullyImplemented":false,"id":85,"linearizedBaseContracts":[85,345,1461,399,392,372,1069,521,165,114],"name":"GenomeToken","nodeType":"ContractDefinition","nodes":[{"constant":true,"id":10,"name":"name","nodeType":"VariableDeclaration","scope":85,"src":"219:43:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory","typeString":"string"},"typeName":{"id":8,"name":"string","nodeType":"ElementaryTypeName","src":"219:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"47656e6f6d65546f6b656e","id":9,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"249:13:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_d23a62019dd506f6c9ef5a72d3d178e49501a5053f8b8945b1db99dad2bf7657","typeString":"literal_string \"GenomeToken\""},"value":"GenomeToken"},"visibility":"public"},{"constant":true,"id":13,"name":"symbol","nodeType":"VariableDeclaration","scope":85,"src":"269:38:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory","typeString":"string"},"typeName":{"id":11,"name":"string","nodeType":"ElementaryTypeName","src":"269:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"47434450","id":12,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"301:6:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_4c91d91eb26f9aa4ad410d537772d220c0778dca52f16b6541091adc28ce3785","typeString":"literal_string \"GCDP\""},"value":"GCDP"},"visibility":"public"},{"canonicalName":"GenomeToken.Genome","id":18,"members":[{"constant":false,"id":15,"name":"owner","nodeType":"VariableDeclaration","scope":18,"src":"351:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":14,"name":"uint256","nodeType":"ElementaryTypeName","src":"351:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":17,"name":"genes","nodeType":"VariableDeclaration","scope":18,"src":"375:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":16,"name":"uint256","nodeType":"ElementaryTypeName","src":"375:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Genome","nodeType":"StructDefinition","scope":85,"src":"316:82:0","visibility":"public"},{"constant":false,"id":21,"name":"genomes","nodeType":"VariableDeclaration","scope":85,"src":"406:23:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage","typeString":"struct GenomeToken.Genome[]"},"typeName":{"baseType":{"contractScope":null,"id":19,"name":"Genome","nodeType":"UserDefinedTypeName","referencedDeclaration":18,"src":"406:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"}},"id":20,"length":null,"nodeType":"ArrayTypeName","src":"406:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage_ptr","typeString":"struct GenomeToken.Genome[]"}},"value":null,"visibility":"public"},{"body":{"id":52,"nodeType":"Block","src":"547:142:0","statements":[{"assignments":[33],"declarations":[{"constant":false,"id":33,"name":"_gene","nodeType":"VariableDeclaration","scope":53,"src":"558:20:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"},"typeName":{"contractScope":null,"id":32,"name":"Genome","nodeType":"UserDefinedTypeName","referencedDeclaration":18,"src":"558:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"}},"value":null,"visibility":"internal"}],"id":37,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"genomes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"581:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage","typeString":"struct GenomeToken.Genome storage ref[] storage ref"}},"id":36,"indexExpression":{"argumentTypes":null,"id":35,"name":"_genomeId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"589:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"581:18:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage","typeString":"struct GenomeToken.Genome storage ref"}},"nodeType":"VariableDeclarationStatement","src":"558:41:0"},{"expression":{"argumentTypes":null,"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":38,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"612:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":40,"name":"_gene","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":33,"src":"628:5:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome storage pointer"}},"id":41,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owner","nodeType":"MemberAccess","referencedDeclaration":15,"src":"628:11:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":39,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"620:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":42,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"620:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"612:28:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":44,"nodeType":"ExpressionStatement","src":"612:28:0"},{"expression":{"argumentTypes":null,"id":50,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"genes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":30,"src":"651:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":47,"name":"_gene","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":33,"src":"667:5:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome storage pointer"}},"id":48,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"genes","nodeType":"MemberAccess","referencedDeclaration":17,"src":"667:11:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":46,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"659:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":49,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"659:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"651:28:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":51,"nodeType":"ExpressionStatement","src":"651:28:0"}]},"documentation":null,"id":53,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getGenome","nodeType":"FunctionDefinition","parameters":{"id":24,"nodeType":"ParameterList","parameters":[{"constant":false,"id":23,"name":"_genomeId","nodeType":"VariableDeclaration","scope":53,"src":"457:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":22,"name":"uint256","nodeType":"ElementaryTypeName","src":"457:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"456:19:0"},"payable":false,"returnParameters":{"id":31,"nodeType":"ParameterList","parameters":[{"constant":false,"id":26,"name":"owner","nodeType":"VariableDeclaration","scope":53,"src":"499:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":25,"name":"uint256","nodeType":"ElementaryTypeName","src":"499:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":28,"name":"genomeId","nodeType":"VariableDeclaration","scope":53,"src":"514:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":27,"name":"uint256","nodeType":"ElementaryTypeName","src":"514:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":30,"name":"genes","nodeType":"VariableDeclaration","scope":53,"src":"532:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":29,"name":"uint256","nodeType":"ElementaryTypeName","src":"532:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"498:48:0"},"scope":85,"src":"438:251:0","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":{"id":83,"nodeType":"Block","src":"778:182:0","statements":[{"assignments":[63],"declarations":[{"constant":false,"id":63,"name":"_genome","nodeType":"VariableDeclaration","scope":84,"src":"789:21:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_memory_ptr","typeString":"struct GenomeToken.Genome"},"typeName":{"contractScope":null,"id":62,"name":"Genome","nodeType":"UserDefinedTypeName","referencedDeclaration":18,"src":"789:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"}},"value":null,"visibility":"internal"}],"id":68,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":65,"name":"_owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"829:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":66,"name":"_genes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"844:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":null,"id":64,"name":"Genome","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"813:6:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Genome_$18_storage_ptr_$","typeString":"type(struct GenomeToken.Genome storage pointer)"}},"id":67,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["owner","genes"],"nodeType":"FunctionCall","src":"813:39:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_memory","typeString":"struct GenomeToken.Genome memory"}},"nodeType":"VariableDeclarationStatement","src":"789:63:0"},{"assignments":[70],"declarations":[{"constant":false,"id":70,"name":"_genomeId","nodeType":"VariableDeclaration","scope":84,"src":"863:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":69,"name":"uint256","nodeType":"ElementaryTypeName","src":"863:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":77,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":73,"name":"_genome","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":63,"src":"896:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_memory_ptr","typeString":"struct GenomeToken.Genome memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Genome_$18_memory_ptr","typeString":"struct GenomeToken.Genome memory"}],"expression":{"argumentTypes":null,"id":71,"name":"genomes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"883:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage","typeString":"struct GenomeToken.Genome storage ref[] storage ref"}},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"883:12:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Genome_$18_storage_$returns$_t_uint256_$","typeString":"function (struct GenomeToken.Genome storage ref) returns (uint256)"}},"id":74,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"883:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":75,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"907:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"883:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"863:45:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":79,"name":"_owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"934:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":80,"name":"_genomeId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"942:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":78,"name":"createGenome","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":84,"src":"921:12:0","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) returns (uint256)"}},"id":81,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"921:31:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":82,"nodeType":"ExpressionStatement","src":"921:31:0"}]},"documentation":null,"id":84,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createGenome","nodeType":"FunctionDefinition","parameters":{"id":58,"nodeType":"ParameterList","parameters":[{"constant":false,"id":55,"name":"_owner","nodeType":"VariableDeclaration","scope":84,"src":"723:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":54,"name":"uint256","nodeType":"ElementaryTypeName","src":"723:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":57,"name":"_genes","nodeType":"VariableDeclaration","scope":84,"src":"739:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":56,"name":"uint256","nodeType":"ElementaryTypeName","src":"739:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"722:32:0"},"payable":false,"returnParameters":{"id":61,"nodeType":"ParameterList","parameters":[{"constant":false,"id":60,"name":"","nodeType":"VariableDeclaration","scope":84,"src":"773:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":59,"name":"uint","nodeType":"ElementaryTypeName","src":"773:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"772:6:0"},"scope":85,"src":"701:259:0","stateMutability":"nonpayable","superFunction":null,"visibility":"internal"}],"scope":86,"src":"167:798:0"}],"src":"0:965:0"},"legacyAST":{"absolutePath":"/C/genomeCDP/contracts/Genome.sol","exportedSymbols":{"GenomeToken":[85]},"id":86,"nodeType":"SourceUnit","nodes":[{"id":1,"literals":["solidity","^","0.4",".24"],"nodeType":"PragmaDirective","src":"0:24:0"},{"absolutePath":"openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol","file":"openzeppelin-solidity/contracts/token/ERC721/ERC721Token.sol","id":2,"nodeType":"ImportDirective","scope":86,"sourceUnit":1462,"src":"28:70:0","symbolAliases":[],"unitAlias":""},{"absolutePath":"openzeppelin-solidity/contracts/ownership/Ownable.sol","file":"openzeppelin-solidity/contracts/ownership/Ownable.sol","id":3,"nodeType":"ImportDirective","scope":86,"sourceUnit":346,"src":"100:63:0","symbolAliases":[],"unitAlias":""},{"baseContracts":[{"arguments":null,"baseName":{"contractScope":null,"id":4,"name":"ERC721Token","nodeType":"UserDefinedTypeName","referencedDeclaration":1461,"src":"191:11:0","typeDescriptions":{"typeIdentifier":"t_contract$_ERC721Token_$1461","typeString":"contract ERC721Token"}},"id":5,"nodeType":"InheritanceSpecifier","src":"191:11:0"},{"arguments":null,"baseName":{"contractScope":null,"id":6,"name":"Ownable","nodeType":"UserDefinedTypeName","referencedDeclaration":345,"src":"204:7:0","typeDescriptions":{"typeIdentifier":"t_contract$_Ownable_$345","typeString":"contract Ownable"}},"id":7,"nodeType":"InheritanceSpecifier","src":"204:7:0"}],"contractDependencies":[114,165,345,372,392,399,521,1069,1461],"contractKind":"contract","documentation":null,"fullyImplemented":false,"id":85,"linearizedBaseContracts":[85,345,1461,399,392,372,1069,521,165,114],"name":"GenomeToken","nodeType":"ContractDefinition","nodes":[{"constant":true,"id":10,"name":"name","nodeType":"VariableDeclaration","scope":85,"src":"219:43:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory","typeString":"string"},"typeName":{"id":8,"name":"string","nodeType":"ElementaryTypeName","src":"219:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"47656e6f6d65546f6b656e","id":9,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"249:13:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_d23a62019dd506f6c9ef5a72d3d178e49501a5053f8b8945b1db99dad2bf7657","typeString":"literal_string \"GenomeToken\""},"value":"GenomeToken"},"visibility":"public"},{"constant":true,"id":13,"name":"symbol","nodeType":"VariableDeclaration","scope":85,"src":"269:38:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_string_memory","typeString":"string"},"typeName":{"id":11,"name":"string","nodeType":"ElementaryTypeName","src":"269:6:0","typeDescriptions":{"typeIdentifier":"t_string_storage_ptr","typeString":"string"}},"value":{"argumentTypes":null,"hexValue":"47434450","id":12,"isConstant":false,"isLValue":false,"isPure":true,"kind":"string","lValueRequested":false,"nodeType":"Literal","src":"301:6:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_stringliteral_4c91d91eb26f9aa4ad410d537772d220c0778dca52f16b6541091adc28ce3785","typeString":"literal_string \"GCDP\""},"value":"GCDP"},"visibility":"public"},{"canonicalName":"GenomeToken.Genome","id":18,"members":[{"constant":false,"id":15,"name":"owner","nodeType":"VariableDeclaration","scope":18,"src":"351:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":14,"name":"uint256","nodeType":"ElementaryTypeName","src":"351:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":17,"name":"genes","nodeType":"VariableDeclaration","scope":18,"src":"375:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":16,"name":"uint256","nodeType":"ElementaryTypeName","src":"375:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"name":"Genome","nodeType":"StructDefinition","scope":85,"src":"316:82:0","visibility":"public"},{"constant":false,"id":21,"name":"genomes","nodeType":"VariableDeclaration","scope":85,"src":"406:23:0","stateVariable":true,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage","typeString":"struct GenomeToken.Genome[]"},"typeName":{"baseType":{"contractScope":null,"id":19,"name":"Genome","nodeType":"UserDefinedTypeName","referencedDeclaration":18,"src":"406:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"}},"id":20,"length":null,"nodeType":"ArrayTypeName","src":"406:8:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage_ptr","typeString":"struct GenomeToken.Genome[]"}},"value":null,"visibility":"public"},{"body":{"id":52,"nodeType":"Block","src":"547:142:0","statements":[{"assignments":[33],"declarations":[{"constant":false,"id":33,"name":"_gene","nodeType":"VariableDeclaration","scope":53,"src":"558:20:0","stateVariable":false,"storageLocation":"storage","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"},"typeName":{"contractScope":null,"id":32,"name":"Genome","nodeType":"UserDefinedTypeName","referencedDeclaration":18,"src":"558:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"}},"value":null,"visibility":"internal"}],"id":37,"initialValue":{"argumentTypes":null,"baseExpression":{"argumentTypes":null,"id":34,"name":"genomes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"581:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage","typeString":"struct GenomeToken.Genome storage ref[] storage ref"}},"id":36,"indexExpression":{"argumentTypes":null,"id":35,"name":"_genomeId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":23,"src":"589:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"nodeType":"IndexAccess","src":"581:18:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage","typeString":"struct GenomeToken.Genome storage ref"}},"nodeType":"VariableDeclarationStatement","src":"558:41:0"},{"expression":{"argumentTypes":null,"id":43,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":38,"name":"owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":26,"src":"612:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":40,"name":"_gene","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":33,"src":"628:5:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome storage pointer"}},"id":41,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"owner","nodeType":"MemberAccess","referencedDeclaration":15,"src":"628:11:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":39,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"620:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":42,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"620:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"612:28:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":44,"nodeType":"ExpressionStatement","src":"612:28:0"},{"expression":{"argumentTypes":null,"id":50,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftHandSide":{"argumentTypes":null,"id":45,"name":"genes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":30,"src":"651:5:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"Assignment","operator":"=","rightHandSide":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"expression":{"argumentTypes":null,"id":47,"name":"_gene","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":33,"src":"667:5:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome storage pointer"}},"id":48,"isConstant":false,"isLValue":true,"isPure":false,"lValueRequested":false,"memberName":"genes","nodeType":"MemberAccess","referencedDeclaration":17,"src":"667:11:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":46,"isConstant":false,"isLValue":false,"isPure":true,"lValueRequested":false,"nodeType":"ElementaryTypeNameExpression","src":"659:7:0","typeDescriptions":{"typeIdentifier":"t_type$_t_uint256_$","typeString":"type(uint256)"},"typeName":"uint256"},"id":49,"isConstant":false,"isLValue":false,"isPure":false,"kind":"typeConversion","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"659:20:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"src":"651:28:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":51,"nodeType":"ExpressionStatement","src":"651:28:0"}]},"documentation":null,"id":53,"implemented":true,"isConstructor":false,"isDeclaredConst":true,"modifiers":[],"name":"getGenome","nodeType":"FunctionDefinition","parameters":{"id":24,"nodeType":"ParameterList","parameters":[{"constant":false,"id":23,"name":"_genomeId","nodeType":"VariableDeclaration","scope":53,"src":"457:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":22,"name":"uint256","nodeType":"ElementaryTypeName","src":"457:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"456:19:0"},"payable":false,"returnParameters":{"id":31,"nodeType":"ParameterList","parameters":[{"constant":false,"id":26,"name":"owner","nodeType":"VariableDeclaration","scope":53,"src":"499:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":25,"name":"uint256","nodeType":"ElementaryTypeName","src":"499:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":28,"name":"genomeId","nodeType":"VariableDeclaration","scope":53,"src":"514:16:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":27,"name":"uint256","nodeType":"ElementaryTypeName","src":"514:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":30,"name":"genes","nodeType":"VariableDeclaration","scope":53,"src":"532:13:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":29,"name":"uint256","nodeType":"ElementaryTypeName","src":"532:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"498:48:0"},"scope":85,"src":"438:251:0","stateMutability":"view","superFunction":null,"visibility":"external"},{"body":{"id":83,"nodeType":"Block","src":"778:182:0","statements":[{"assignments":[63],"declarations":[{"constant":false,"id":63,"name":"_genome","nodeType":"VariableDeclaration","scope":84,"src":"789:21:0","stateVariable":false,"storageLocation":"memory","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_memory_ptr","typeString":"struct GenomeToken.Genome"},"typeName":{"contractScope":null,"id":62,"name":"Genome","nodeType":"UserDefinedTypeName","referencedDeclaration":18,"src":"789:6:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_storage_ptr","typeString":"struct GenomeToken.Genome"}},"value":null,"visibility":"internal"}],"id":68,"initialValue":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":65,"name":"_owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"829:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":66,"name":"_genes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":57,"src":"844:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":null,"id":64,"name":"Genome","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":18,"src":"813:6:0","typeDescriptions":{"typeIdentifier":"t_type$_t_struct$_Genome_$18_storage_ptr_$","typeString":"type(struct GenomeToken.Genome storage pointer)"}},"id":67,"isConstant":false,"isLValue":false,"isPure":false,"kind":"structConstructorCall","lValueRequested":false,"names":["owner","genes"],"nodeType":"FunctionCall","src":"813:39:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_memory","typeString":"struct GenomeToken.Genome memory"}},"nodeType":"VariableDeclarationStatement","src":"789:63:0"},{"assignments":[70],"declarations":[{"constant":false,"id":70,"name":"_genomeId","nodeType":"VariableDeclaration","scope":84,"src":"863:17:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":69,"name":"uint256","nodeType":"ElementaryTypeName","src":"863:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"id":77,"initialValue":{"argumentTypes":null,"commonType":{"typeIdentifier":"t_uint256","typeString":"uint256"},"id":76,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"leftExpression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":73,"name":"_genome","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":63,"src":"896:7:0","typeDescriptions":{"typeIdentifier":"t_struct$_Genome_$18_memory_ptr","typeString":"struct GenomeToken.Genome memory"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_struct$_Genome_$18_memory_ptr","typeString":"struct GenomeToken.Genome memory"}],"expression":{"argumentTypes":null,"id":71,"name":"genomes","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":21,"src":"883:7:0","typeDescriptions":{"typeIdentifier":"t_array$_t_struct$_Genome_$18_storage_$dyn_storage","typeString":"struct GenomeToken.Genome storage ref[] storage ref"}},"id":72,"isConstant":false,"isLValue":false,"isPure":false,"lValueRequested":false,"memberName":"push","nodeType":"MemberAccess","referencedDeclaration":null,"src":"883:12:0","typeDescriptions":{"typeIdentifier":"t_function_arraypush_nonpayable$_t_struct$_Genome_$18_storage_$returns$_t_uint256_$","typeString":"function (struct GenomeToken.Genome storage ref) returns (uint256)"}},"id":74,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"883:21:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"BinaryOperation","operator":"-","rightExpression":{"argumentTypes":null,"hexValue":"31","id":75,"isConstant":false,"isLValue":false,"isPure":true,"kind":"number","lValueRequested":false,"nodeType":"Literal","src":"907:1:0","subdenomination":null,"typeDescriptions":{"typeIdentifier":"t_rational_1_by_1","typeString":"int_const 1"},"value":"1"},"src":"883:25:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"nodeType":"VariableDeclarationStatement","src":"863:45:0"},{"expression":{"argumentTypes":null,"arguments":[{"argumentTypes":null,"id":79,"name":"_owner","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":55,"src":"934:6:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},{"argumentTypes":null,"id":80,"name":"_genomeId","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":70,"src":"942:9:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}}],"expression":{"argumentTypes":[{"typeIdentifier":"t_uint256","typeString":"uint256"},{"typeIdentifier":"t_uint256","typeString":"uint256"}],"id":78,"name":"createGenome","nodeType":"Identifier","overloadedDeclarations":[],"referencedDeclaration":84,"src":"921:12:0","typeDescriptions":{"typeIdentifier":"t_function_internal_nonpayable$_t_uint256_$_t_uint256_$returns$_t_uint256_$","typeString":"function (uint256,uint256) returns (uint256)"}},"id":81,"isConstant":false,"isLValue":false,"isPure":false,"kind":"functionCall","lValueRequested":false,"names":[],"nodeType":"FunctionCall","src":"921:31:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"id":82,"nodeType":"ExpressionStatement","src":"921:31:0"}]},"documentation":null,"id":84,"implemented":true,"isConstructor":false,"isDeclaredConst":false,"modifiers":[],"name":"createGenome","nodeType":"FunctionDefinition","parameters":{"id":58,"nodeType":"ParameterList","parameters":[{"constant":false,"id":55,"name":"_owner","nodeType":"VariableDeclaration","scope":84,"src":"723:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":54,"name":"uint256","nodeType":"ElementaryTypeName","src":"723:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"},{"constant":false,"id":57,"name":"_genes","nodeType":"VariableDeclaration","scope":84,"src":"739:14:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":56,"name":"uint256","nodeType":"ElementaryTypeName","src":"739:7:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"722:32:0"},"payable":false,"returnParameters":{"id":61,"nodeType":"ParameterList","parameters":[{"constant":false,"id":60,"name":"","nodeType":"VariableDeclaration","scope":84,"src":"773:4:0","stateVariable":false,"storageLocation":"default","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"},"typeName":{"id":59,"name":"uint","nodeType":"ElementaryTypeName","src":"773:4:0","typeDescriptions":{"typeIdentifier":"t_uint256","typeString":"uint256"}},"value":null,"visibility":"internal"}],"src":"772:6:0"},"scope":85,"src":"701:259:0","stateMutability":"nonpayable","superFunction":null,"visibility":"internal"}],"scope":86,"src":"167:798:0"}],"src":"0:965:0"},"compiler":{"name":"solc","version":"0.4.24+commit.e67f0147.Emscripten.clang"},"networks":{},"schemaVersion":"2.0.1","updatedAt":"2018-10-07T08:57:44.954Z"};

/***/ }),

/***/ "./components/App.js":
/*!***************************!*\
  !*** ./components/App.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StartButton_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StartButton.js */ "./components/StartButton.js");
/* harmony import */ var _CreateMaker_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateMaker.js */ "./components/CreateMaker.js");
/* harmony import */ var _OpenCdp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OpenCdp.js */ "./components/OpenCdp.js");
/* harmony import */ var _LockGnome_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LockGnome.js */ "./components/LockGnome.js");
/* harmony import */ var _DrawDai_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./DrawDai.js */ "./components/DrawDai.js");
/* harmony import */ var _WipeDebt_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WipeDebt.js */ "./components/WipeDebt.js");
/* harmony import */ var _ShutCdp_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ShutCdp.js */ "./components/ShutCdp.js");
var _jsxFileName = "C:\\genomeCDP\\components\\App.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StartButton_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateMaker_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OpenCdp_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LockGnome_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DrawDai_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_WipeDebt_js__WEBPACK_IMPORTED_MODULE_6__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ShutCdp_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./components/CreateMaker.js":
/*!***********************************!*\
  !*** ./components/CreateMaker.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\genomeCDP\\components\\CreateMaker.js";



var mapStateToProps = function mapStateToProps(state) {
  return {
    created: state.maker_created
  };
};

var CreateMaker = function CreateMaker(_ref) {
  var created = _ref.created;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, created ? 'Maker Created' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(CreateMaker));

/***/ }),

/***/ "./components/DrawDai.js":
/*!*******************************!*\
  !*** ./components/DrawDai.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\genomeCDP\\components\\DrawDai.js";



var mapStateToProps = function mapStateToProps(state) {
  return {
    drawn: state.dai_drawn
  };
};

var DrawDai = function DrawDai(_ref) {
  var drawn = _ref.drawn;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, drawn ? 'Dai Drawn' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(DrawDai));

/***/ }),

/***/ "./components/Loading.js":
/*!*******************************!*\
  !*** ./components/Loading.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\genomeCDP\\components\\Loading.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Loading =
/*#__PURE__*/
function (_Component) {
  _inherits(Loading, _Component);

  function Loading(props, context) {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).call(this, props));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      if (this.props.web3.status === 'failed') {
        return (// Display a web3 warning.
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          }, "\u26A0\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }, "This browser has no connection to the Ethereum network. Please use the Chrome/FireFox extension MetaMask, or dedicated Ethereum browsers Mist or Parity."))
        );
      }

      if (this.props.drizzleStatus.initialized) {
        // Load the dapp.
        return react__WEBPACK_IMPORTED_MODULE_0__["Children"].only(this.props.children);
      }

      return (// Display a loading indicator.
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, "\u2699\uFE0F"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }, "Loading dapp..."))
      );
    }
  }]);

  return Loading;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Loading);

/***/ }),

/***/ "./components/LockGnome.js":
/*!*********************************!*\
  !*** ./components/LockGnome.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\genomeCDP\\components\\LockGnome.js";



var mapStateToProps = function mapStateToProps(state) {
  return {
    locked: state.gnome_locked
  };
};

var LockGnome = function LockGnome(_ref) {
  var locked = _ref.locked;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, locked ? 'Gnome Locked' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(LockGnome));

/***/ }),

/***/ "./components/OpenCdp.js":
/*!*******************************!*\
  !*** ./components/OpenCdp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\genomeCDP\\components\\OpenCdp.js";



var mapStateToProps = function mapStateToProps(state) {
  return {
    opened: state.cdp_opened
  };
};

var OpenCdp = function OpenCdp(_ref) {
  var opened = _ref.opened;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, opened ? 'CDP Opened' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(OpenCdp));

/***/ }),

/***/ "./components/ShutCdp.js":
/*!*******************************!*\
  !*** ./components/ShutCdp.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\genomeCDP\\components\\ShutCdp.js";



var mapStateToProps = function mapStateToProps(state) {
  return {
    shut: state.cdp_shut
  };
};

var ShutCdp = function ShutCdp(_ref) {
  var shut = _ref.shut;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, shut ? 'CDP Shut' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ShutCdp));

/***/ }),

/***/ "./components/StButton.js":
/*!********************************!*\
  !*** ./components/StButton.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\genomeCDP\\components\\StButton.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





 // We can inject some CSS into the DOM.

var styles = {
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  }
};

function ClassNames(props) {
  var classes = props.classes,
      children = props.children,
      className = props.className,
      other = _objectWithoutProperties(props, ["classes", "children", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, _extends({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(classes.root, className)
  }, other, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), children || 'class names');
}

ClassNames.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["withStyles"])(styles)(ClassNames));

/***/ }),

/***/ "./components/StartButton.js":
/*!***********************************!*\
  !*** ./components/StartButton.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
var _jsxFileName = "C:\\genomeCDP\\components\\StartButton.js";




var mapStateToProps = function mapStateToProps(state) {
  return {
    started: state.started
  };
};

function mapDispatchToProps(dispatch) {
  return {
    start: function start() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["startAsync"])());
    }
  };
}

var StartButton = function StartButton(_ref) {
  var started = _ref.started,
      start = _ref.start;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: start,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, started ? 'Restart' : 'Start');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(StartButton));

/***/ }),

/***/ "./components/WipeDebt.js":
/*!********************************!*\
  !*** ./components/WipeDebt.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\genomeCDP\\components\\WipeDebt.js";



var mapStateToProps = function mapStateToProps(state) {
  return {
    wiped: state.dai_wiped
  };
};

var WipeDebt = function WipeDebt(_ref) {
  var wiped = _ref.wiped;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, wiped ? 'Debt Wiped' : '');
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(WipeDebt));

/***/ }),

/***/ "./components/header.js":
/*!******************************!*\
  !*** ./components/header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\genomeCDP\\components\\header.js";



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/assets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Assets")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/wellness",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Wellness")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/cdps",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "CDPs")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    prefetch: true,
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-2029816463",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Dashboard")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2029816463",
    css: "a.jsx-2029816463{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:11px;margin-right:30px;padding-left:5px;color:#999;text-transform:uppercase;-webkit-text-decoration:none;text-decoration:none;}.connected.jsx-2029816463{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnZW5vbWVDRFBcXGNvbXBvbmVudHNcXGhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQ1ksQUFHcUksQUFVekgsV0FDRCxVQUNDLFdBQ1UscUJBQ0YsbUJBQ0EsbUJBQ0YsaUJBQ0EsaUJBQ2pCLE9BakJjLGNBQ0MsZUFDRyxrQkFDRCxpQkFDTixXQUNjLHlCQUNKLGtEQUFDIiwiZmlsZSI6IkM6XFxnZW5vbWVDRFBcXGNvbXBvbmVudHNcXGhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxyXG4gICAgPGRpdj5cclxuXHJcblxyXG4gICAgPGhlYWQ+XHJcblxyXG4gICAgICAgIDwvaGVhZD5cclxuICA8YnIvPlxyXG5cclxuICAgICAgXHJcbiAgICA8TGluayBocmVmPScvJz5cclxuICAgICAgPGE+SG9tZTwvYT5cclxuICAgIDwvTGluaz5cclxuXHJcbiAgICA8TGluayBwcmVmZXRjaCBocmVmPScvYXNzZXRzJz5cclxuICAgICAgPGE+QXNzZXRzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG5cclxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy93ZWxsbmVzcyc+XHJcbiAgICAgIDxhPldlbGxuZXNzPC9hPlxyXG4gICAgPC9MaW5rPlxyXG5cclxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9jZHBzJz5cclxuICAgICAgPGE+Q0RQczwvYT5cclxuICAgIDwvTGluaz5cclxuICAgIDxMaW5rIHByZWZldGNoIGhyZWY9Jy9kYXNoYm9hcmQnPlxyXG4gICAgICA8YT5EYXNoYm9hcmQ8L2E+XHJcbiAgICA8L0xpbms+XHJcblxyXG5cclxuXHJcbjxzdHlsZSBqc3g+e2BcclxuYSB7XHJcbmZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxubWFyZ2luOiAxMHB4IDA7XHJcbmZvbnQtc2l6ZTogMTFweDtcclxubWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG5wYWRkaW5nLWxlZnQ6IDVweDtcclxuY29sb3I6ICM5OTk7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbnRleHQtZGVjb3JhdGlvbjogbm9uZVxyXG59XHJcblxyXG4uY29ubmVjdGVkIHtcclxuY29udGVudDogJyc7XHJcbndpZHRoOiA4cHg7XHJcbmhlaWdodDogOHB4O1xyXG5kaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbmJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbmJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbm1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5tYXJnaW4tcmlnaHQ6IDhweDtcclxufVxyXG5cclxuYH08L3N0eWxlPlxyXG48L2Rpdj5cclxuXHJcbilcclxuIl19 */\n/*@ sourceURL=C:\\genomeCDP\\components\\header.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: started, makerCreated, cdpOpened, gnomeLocked, daiDrawn, daiWiped, cdpShut, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "started", function() { return started; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makerCreated", function() { return makerCreated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdpOpened", function() { return cdpOpened; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gnomeLocked", function() { return gnomeLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daiDrawn", function() { return daiDrawn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "daiWiped", function() { return daiWiped; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cdpShut", function() { return cdpShut; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "web3");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ipfs-api */ "ipfs-api");
/* harmony import */ var ipfs_api__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ipfs_api__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _makerdao_dai__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @makerdao/dai */ "@makerdao/dai");
/* harmony import */ var _makerdao_dai__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_makerdao_dai__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/List */ "@material-ui/core/List");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/ListItem */ "@material-ui/core/ListItem");
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "@material-ui/core/ListItemText");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_StButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/StButton */ "./components/StButton.js");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Divider */ "@material-ui/core/Divider");
/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Card */ "@material-ui/core/Card");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/CardActions */ "@material-ui/core/CardActions");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/App */ "./components/App.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./reducers */ "./pages/reducers/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/CardContent */ "@material-ui/core/CardContent");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! classnames */ "classnames");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
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





















var store = Object(redux__WEBPACK_IMPORTED_MODULE_18__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_21__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_18__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_19___default.a));
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
}); //global.makerKovan = Maker.create('kovan', {
//        privateKey: '0x18fbabbf93480a5e4495cfa6dfeca0b64e8031de4801381a02af6c0828bd71bf',
//     provider: {
//        infuraApiKey: 'FoggkEz1SP1DzdhkXUr8'
// }
//});

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
    css: "main.jsx-206240353{background-color:##F8F7F5;text-align:center;}div.jsx-206240353{background-color:##F8F7F5;text-align:center;}body.jsx-206240353{background-color:#000;text-align:center;}b.jsx-206240353{font-weight:normal;}.button.jsx-206240353{margin-left:8px;padding-right:8px;}ButtonBase.jsx-206240353{margin-left:8px;}Button.jsx-206240353{margin-left:8px;}h1.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:2em;font-weight:200;color:#000;text-align:center;}h2.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:24px;font-weight:normal;margin-right:30px;padding-left:5px;color:#000;text-align:center;}p.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;margin:10px 0;font-size:18px;margin-right:30px;padding-left:5px;color:#000;text-align:center;}img.jsx-206240353{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;height:80px;width:80px;font-size:12px;text-align:center;}ul.jsx-206240353{display:inline-block;color:#999;position:absolute;margin-left:-15px;}.connected.jsx-206240353{content:'';width:8px;height:8px;display:inline-block;border-radius:100%;background:#50e3c2;margin-left:10px;}.after.jsx-206240353{box-sizing:inherit;}.action.jsx-206240353{padding-left:8px;}card.jsx-206240353:{minWidth:275,;}.jsx-206240353,bullet.jsx-206240353:{display:'inline-block', margin:'0 2px', transform:'scale(0.8)',;}.jsx-206240353,title.jsx-206240353:{marginBottom:16, fontSize:14,;}.jsx-206240353,pos.jsx-206240353:{marginBottom:12,;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTlksQUFJNkIsQUFLSSxBQUtSLEFBS0QsQUFJSCxBQUtBLEFBSUEsQUFJc0gsQUFTQSxBQVdBLEFBVUEsQUFTN0csQUFPaEIsQUFVUSxBQUlGLEFBSUgsQUFJVSxBQUdYLEFBRUksV0ExQlAsR0FpQkssRUE1RUssQUFLcEIsQUFJQSxDQWdFRixBQVlvQixFQXpGbEIsQUF5RUYsRUFqQm1CLEFBUU4sQ0FyRU8sSUFWQSxBQUtBLElBaUdKLEVBOUJVLEFBUUgsRUE1RHJCLE1BVEEsSUFWRixBQUtNLE1BbUVvQixHQVFMLFdBa0JNLElBekJ2QixJQVFpQixtQkFDRixpQkFDbkIsd0JBcERvQixBQVNBLEFBV0EsQUFVRixZQUNELEVBOUJHLEFBU0MsQUFXQSxTQVdBLEtBOUJDLENBU0csQUFXRCxTQVdBLE1BOUJQLEdBb0JNLENBWEMsT0FSQSxDQThCcEIsUUFWYSxFQVhNLE9BUm5CLEVBb0JvQixRQVhQLFVBWWIsQ0FYb0Isa0JBQ3BCIiwiZmlsZSI6IkM6XFxnZW5vbWVDRFBcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJ1xyXG5pbXBvcnQgSXBmc0FwaSBmcm9tICdpcGZzLWFwaSdcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcclxuaW1wb3J0IE1ha2VyIGZyb20gJ0BtYWtlcmRhby9kYWknXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcclxuaW1wb3J0IFN0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvU3RCdXR0b24nXHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbXBvbmVudHMvQXBwJztcclxuLy9pbXBvcnQgeyBEcml6emxlLCBnZW5lcmF0ZVN0b3JlIH0gZnJvbSAnZHJpenpsZSdcclxuLy9pbXBvcnQgeyBkcml6emxlQ29ubmVjdCB9IGZyb20gJ2RyaXp6bGUtcmVhY3QnXHJcbi8vaW1wb3J0IHsgZHJpenpsZUNvbm5lY3QgfSBmcm9tICdkcml6emxlLXJlYWN0J1xyXG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcclxuaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCc7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xyXG5pbXBvcnQgY2xhc3NOYW1lcyBmcm9tICdjbGFzc25hbWVzJztcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJztcclxuaW1wb3J0IENyZWF0ZU1ha2VyIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlTWFrZXInO1xyXG5pbXBvcnQgT3BlbkNkcCBmcm9tICcuLi9jb21wb25lbnRzL09wZW5DZHAnO1xyXG5pbXBvcnQgTG9ja0dub21lIGZyb20gJy4uL2NvbXBvbmVudHMvTG9ja0dub21lJztcclxuaW1wb3J0IERyYXdEYWkgZnJvbSAnLi4vY29tcG9uZW50cy9EcmF3RGFpJztcclxuaW1wb3J0IFdpcGVEZWJ0IGZyb20gJy4uL2NvbXBvbmVudHMvV2lwZURlYnQnO1xyXG5pbXBvcnQgU2h1dENkcCBmcm9tICcuLi9jb21wb25lbnRzL1NodXRDZHAnO1xyXG5pbXBvcnQgTG9hZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0xvYWRpbmcnO1xyXG5pbXBvcnQgU3RhcnRCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9TdGFydEJ1dHRvbi5qcyc7XHJcblxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyb290UmVkdWNlciwgYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpO1xyXG5cclxuY29uc3QgeyBjdXJyZW50UHJvdmlkZXI6IGNwIH0gPSBnbG9iYWwud2ViM1xyXG5jb25zdCBpc1Rvc2hpID0gISFjcC5pc1Rvc2hpXHJcblxyXG5cclxuXHJcbnN0b3JlLnN1YnNjcmliZSgoKSA9PlxyXG4gIGNvbnNvbGUubG9nKHN0b3JlLmdldFN0YXRlKCkpXHJcbik7XHJcblxyXG5cclxuLy8gSW1wb3J0IGNvbnRyYWN0c1xyXG5pbXBvcnQgR2Vub21lVG9rZW4gZnJvbSAnLi4vYnVpbGQvY29udHJhY3RzL0dlbm9tZVRva2VuLmpzb24nXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIGNvbnRyYWN0czogW1xyXG4gICAgR2Vub21lVG9rZW5cclxuICBdXHJcbn1cclxuXHJcbi8vZ2xvYmFsLmRyaXp6bGVTdG9yZSA9IGdlbmVyYXRlU3RvcmUodGhpcy5wcm9wcy5vcHRpb25zKVxyXG4vL2dsb2JhbC5kcml6emxlID0gbmV3IERyaXp6bGUodGhpcy5wcm9wcy5vcHRpb25zLCBkcml6emxlU3RvcmUpXHJcblxyXG5cclxuLy8gTUFLRVIgQ09OU1RBTlRTXHJcblxyXG5leHBvcnQgY29uc3Qgc3RhcnRlZCA9ICgpID0+ICh7XHJcbiAgICB0eXBlOiAnU1RBUlRFRCdcclxuICB9KTtcclxuICBcclxuICBleHBvcnQgY29uc3QgbWFrZXJDcmVhdGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdNQUtFUl9DUkVBVEVEJ1xyXG4gIH0pO1xyXG4gIFxyXG4gIGV4cG9ydCBjb25zdCBjZHBPcGVuZWQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0NEUF9PUEVORUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGdub21lTG9ja2VkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdHTk9NRV9MT0NLRUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGRhaURyYXduID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdEQUlfRFJBV04nXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGRhaVdpcGVkID0gKCkgPT4gKHtcclxuICAgIHR5cGU6ICdEQUlfV0lQRUQnXHJcbiAgfSk7XHJcbiAgXHJcbiAgZXhwb3J0IGNvbnN0IGNkcFNodXQgPSAoKSA9PiAoe1xyXG4gICAgdHlwZTogJ0NEUF9TSFVUJ1xyXG4gIH0pO1xyXG4gIFxyXG5cclxuZ2xvYmFsLmNvbmZpZyA9IHtcclxuICAgIHJwYzoge1xyXG4gICAgICBob3N0OiBcIjEyNy4wLjAuMVwiLFxyXG4gICAgICBwb3J0OiBcIjc1NDVcIlxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBnbG9iYWwud2ViMyA9IG5ldyBXZWIzKCk7XHJcbiAgd2ViMy5zZXRQcm92aWRlcihuZXcgd2ViMy5wcm92aWRlcnMuSHR0cFByb3ZpZGVyKGBodHRwczovLyR7Z2xvYmFsLmNvbmZpZy5ycGMuaG9zdH06JHtnbG9iYWwuY29uZmlnLnJwYy5wb3J0fWApKTtcclxuICAgICAgICAgIGlmICghd2ViMy5pc0Nvbm5lY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkV0aGVyZXVtIC0gbm8gY29uZWN0aW9uIHRvIFJQQyBzZXJ2ZXJcIik7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29ubmVjdGVkIHRvIEV0aGVyZXVtIG9uIExvY2FsIE1hY2hpbmUgdXNpbmcgR2FuYWNoZVwiKTtcclxuICAgICAgICAgIH1cclxuICBcclxuICAvLyBJUEZTIENvbmZpZyBHbG9iYWxzXHJcbiAgZ2xvYmFsLmlwZnMgPSBpcGZzO1xyXG4gIGdsb2JhbC5pcGZzSG9zdCA9ICdsb2NhbGhvc3QnLFxyXG4gIGdsb2JhbC5pcGZzQVBJUG9ydCA9ICc1MDAxJyxcclxuICBnbG9iYWwuaXBmc1dlYlBvcnQgPSAnODA4MCcsXHJcbiAgZ2xvYmFsLmlwZnNEYXRhSG9zdCA9IFwiaHR0cDovL1wiICsgaXBmc0hvc3QgKyAnOicgKyBpcGZzV2ViUG9ydCArIFwiL2lwZnNcIjtcclxuICBcclxuICBcclxuICB2YXIgaXBmcyA9IElwZnNBcGkoaXBmc0hvc3QsIGlwZnNBUElQb3J0KVxyXG4gICAgICAgIGlwZnMuc3dhcm0ucGVlcnMoZnVuY3Rpb24oZXJyLCByZXNwb25zZSkge1xyXG4gICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJub3QgY29ubmVjdGVkIHRvIElQRlMgb24gQVdTXCIpO1xyXG4gICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gSVBGU1wiKTtcclxuICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbi8vZ2xvYmFsLm1ha2VyS292YW4gPSBNYWtlci5jcmVhdGUoJ2tvdmFuJywge1xyXG4gLy8gICAgICAgIHByaXZhdGVLZXk6ICcweDE4ZmJhYmJmOTM0ODBhNWU0NDk1Y2ZhNmRmZWNhMGI2NGU4MDMxZGU0ODAxMzgxYTAyYWY2YzA4MjhiZDcxYmYnLFxyXG4gICAvLyAgICAgcHJvdmlkZXI6IHtcclxuICAgIC8vICAgICAgICBpbmZ1cmFBcGlLZXk6ICdGb2dna0V6MVNQMUR6ZGhrWFVyOCdcclxuICAgICAvLyB9XHJcbi8vfSk7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiAoXHJcblx0PGRpdj5cclxuXHQ8SGVhZD5cclxuICAgICAgPHRpdGxlPkdlbm9tZUNEUDwvdGl0bGU+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgIDwvSGVhZD5cclxuXHQ8SGVhZGVyIC8+XHJcbiAgICA8YnIvPlxyXG4gICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImRpc3BsYXkxXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgIEdlbm9tZUNEUFxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcblxyXG4gICAgICA8aW1nIHNyYz1cIi9zdGF0aWMvZ2Vub21lQ0RQLnBuZ1wiLz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGJyIC8+PGgxIGNsYXNzTmFtZT1cIkFwcC1pbnRyb1wiPkdlbmVyYXRlIGxvYW5zIGFnYWluc3QgeW91ciBnZW5vbWljIGRhdGE8L2gxPlxyXG5cclxuICAgICAgICAgIDxici8+XHJcbiAgICBcclxuICAgICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJwcmltYXJ5XCIgc2l6ZT1cInNtYWxsXCI+XHJcbiAgICAgIFN0YXJ0XHJcbiAgICA8L0J1dHRvbj5cclxuICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiPlxyXG4gICAgICBPcGVuIENEUFxyXG4gICAgPC9CdXR0b24+XHJcbiAgICA8QnV0dG9uIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgRHJhdyBEYWlcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgV2lwZSBEYWlcclxuICAgIDwvQnV0dG9uPlxyXG4gICAgPEJ1dHRvbiB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIiBzaXplPVwic21hbGxcIj5cclxuICAgICAgQ2xvc2UgQ0RQXHJcbiAgICA8L0J1dHRvbj5cclxuXHJcbjxici8+XHJcbjxici8+XHJcblxyXG48UGFwZXI+XHJcbjxMaXN0IGNvbXBvbmVudD1cIm5hdlwiPlxyXG48TGlzdEl0ZW0gYnV0dG9uPlxyXG4gIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkNEUCBJRDogMDI4XCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbj5cclxuICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJDb2xsYXRlcmFsOiAxIEdDUERcIiAvPlxyXG48L0xpc3RJdGVtPlxyXG48RGl2aWRlciBsaWdodCAvPlxyXG48TGlzdEl0ZW0gYnV0dG9uIGRpdmlkZXI+XHJcbiAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiRGVidDogMTAwXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbiBkaXZpZGVyPlxyXG4gIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlJhdGlvOiA0MDAlXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPERpdmlkZXIgbGlnaHQgLz5cclxuPExpc3RJdGVtIGJ1dHRvbj5cclxuICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJTdGF0ZTogc2FmZVwiIC8+XHJcbjwvTGlzdEl0ZW0+XHJcbjxEaXZpZGVyIGxpZ2h0IC8+XHJcbjxMaXN0SXRlbSBidXR0b24+XHJcbiAgPExpc3RJdGVtVGV4dCBwcmltYXJ5PVwiTGFzdCBVcGRhdGVkOiAxIGhvdXIgYWdvXCIgLz5cclxuPC9MaXN0SXRlbT5cclxuPC9MaXN0PlxyXG48L1BhcGVyPlxyXG5cclxuPGJyLz5cclxuPGJyLz5cclxuPGJyLz5cclxuXHJcblxyXG5cclxuXHJcbjxzdHlsZSBqc3g+e2BcclxuXHJcbm1haW4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMjRjhGN0Y1O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuICBkaXYge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjI0Y4RjdGNTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBiIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBCdXR0b25CYXNlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICBCdXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgICBoMiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LFNlZ29lIFVJLFJvYm90byxPeHlnZW4sVWJ1bnR1LENhbnRhcmVsbCxGaXJhIFNhbnMsRHJvaWQgU2FucyxIZWx2ZXRpY2EgTmV1ZSxzYW5zLXNlcmlmO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCxTZWdvZSBVSSxSb2JvdG8sT3h5Z2VuLFVidW50dSxDYW50YXJlbGwsRmlyYSBTYW5zLERyb2lkIFNhbnMsSGVsdmV0aWNhIE5ldWUsc2Fucy1zZXJpZjtcclxuICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICB3aWR0aDogODBweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgdWwge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29ubmVjdGVkIHtcclxuICBjb250ZW50OiAnJztcclxuICB3aWR0aDogOHB4O1xyXG4gIGhlaWdodDogOHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICM1MGUzYzI7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5hZnRlciB7XHJcbiAgYm94LXNpemluZzogaW5oZXJpdDtcclxufVxyXG5cclxuLmFjdGlvbiB7XHJcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbn1cclxuXHJcbmNhcmQ6IHtcclxuICBtaW5XaWR0aDogMjc1LFxyXG59LFxyXG5idWxsZXQ6IHtcclxuICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICBtYXJnaW46ICcwIDJweCcsXHJcbiAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbn0sXHJcbnRpdGxlOiB7XHJcbiAgbWFyZ2luQm90dG9tOiAxNixcclxuICBmb250U2l6ZTogMTQsXHJcbn0sXHJcbnBvczoge1xyXG4gIG1hcmdpbkJvdHRvbTogMTIsXHJcbn0sXHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5gfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgKSJdfQ== */\n/*@ sourceURL=C:\\genomeCDP\\pages\\index.js */",
    __self: this
  }));
});

/***/ }),

/***/ "./pages/reducers/index.js":
/*!*********************************!*\
  !*** ./pages/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
var initialState = {
  started: false
};
function App() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'STARTED':
      return {
        started: true
      };

    case 'MAKER_CREATED':
      return Object.assign({}, state, {
        maker_created: true
      });

    case 'CDP_OPENED':
      return Object.assign({}, state, {
        cdp_opened: true
      });

    case 'GCDP_LOCKED':
      return Object.assign({}, state, {
        eth_locked: true
      });

    case 'DAI_DRAWN':
      return Object.assign({}, state, {
        dai_drawn: true
      });

    case 'DAI_WIPED':
      return Object.assign({}, state, {
        dai_wiped: true
      });

    case 'CDP_SHUT':
      return Object.assign({}, state, {
        cdp_shut: true
      });

    default:
      return state;
  }
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@makerdao/dai":
/*!********************************!*\
  !*** external "@makerdao/dai" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@makerdao/dai");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),

/***/ "ipfs-api":
/*!***************************!*\
  !*** external "ipfs-api" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ipfs-api");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map