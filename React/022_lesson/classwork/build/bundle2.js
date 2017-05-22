/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*********************************!*\
  !*** ./classwork/jsx/main2.jsx ***!
  \*********************************/
/***/ function(module, exports) {

	let promise = new Promise((resolve, reject) => {
	    xhr = new XMLHttpRequest();
	    xhr.open('GET', 'image.jpg', true);
	    xhr.responseType = 'blob';
	    xhr.onload = function () {
	        if (xhr.status == 200) {
	            resolve(this.response);
	        } else {
	            var error = new Error(this.statusText);
	            error.code = this.status;
	            reject(error);
	        }
	    };
	    xhr.onerror = function () {
	        reject(new Error("Network error"));
	    };
	    xhr.send();
	});
	
	promise.then(result => {
	    var urlCreator = window.URL || window.webkitURL;
	    var img = document.createElement('img');
	    img.src = urlCreator.createObjectURL(result);
	    document.body.appendChild(img);
	}, error => {
	    alert("Rejected: " + error);
	});

/***/ }
/******/ ]);
//# sourceMappingURL=bundle2.js.map