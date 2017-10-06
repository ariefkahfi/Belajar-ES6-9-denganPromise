/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Exporter = __webpack_require__(1);

var domain = _interopRequireWildcard(_Exporter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//Cara 1 untuk async operation menggunakan Promise
// let janji = new Promise((resolve,reject)=> {
//     if (true) {
//         resolve('Success')
//     }
//
//     reject('Error')
// }).then((success)=>{
//     console.log(success)
// }).catch((error)=>{
//     console.log(error)
// })

//Cara 2 untuk async operation menggunakan Promise
// let janji = new Promise((res,rej)=>{
//     if(false){
//         res('Resolved value')
//     }
//     rej('Rejected value')
// }).then((success)=>{
//     console.log(success)
// },(error)=>{
//     console.log(error)
// })

var callbackSuccess = function callbackSuccess(data) {
    console.log('Response ok : ' + data);
};

var callbackError = function callbackError(data) {
    console.log('Response error ' + data);
};

var asyncHello = function asyncHello(succesCallback, errorCallback) {
    new Promise(function (res, rej) {
        if (true) {
            res(JSON.stringify({
                nama: "arief",
                alamat: "Muara Enim",
                jurusan: "tekkom"
            }));
        }
        rej(JSON.stringify({
            code: 500,
            message: "Error internal server"
        }));
    }).then(function (success) {
        succesCallback(success);
    }, function (error) {
        errorCallback(error);
    });
};

// cara 1 asyncHello dengan argumen function eksplisit
// asyncHello(callbackSuccess,callbackError)

//cara 2 asyncHello dengan argumen function implisit
asyncHello(function (data) {
    console.log('Http Ok :' + data);
}, function (data) {
    console.log('Http 500 Error internal server : ' + data);
});

var hello = function hello() {
    return "hello World";
};

console.log(hello() + ' , ' + domain.Person.nama);

var kucing = new domain.Pet('Kucing', 2500000);

console.log(kucing.getTipe() + ' dengan harga : ' + kucing.getHarga());

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Person = __webpack_require__(2);

Object.keys(_Person).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Person[key];
    }
  });
});

var _Pet = __webpack_require__(3);

Object.keys(_Pet).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Pet[key];
    }
  });
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var Person = {
    nama: "arief"
};

exports.Person = Person;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Pet = function () {
    function Pet(tipe, harga) {
        _classCallCheck(this, Pet);

        this.tipe = tipe;
        this.harga = harga;
    }

    _createClass(Pet, [{
        key: "setTipe",
        value: function setTipe(tipe) {
            this.tipe = tipe;
        }
    }, {
        key: "setHarga",
        value: function setHarga(harga) {
            this.harga = harga;
        }
    }, {
        key: "getTipe",
        value: function getTipe() {
            return this.tipe;
        }
    }, {
        key: "getHarga",
        value: function getHarga() {
            return this.harga;
        }
    }]);

    return Pet;
}();

exports.Pet = Pet;

/***/ })
/******/ ]);