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
/*!********************************!*\
  !*** ./homework/jsx/main2.jsx ***!
  \********************************/
/***/ function(module, exports) {

	class Person {
	    constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
	        this.firstName = firstName;
	        this.lastName = lastName;
	        this.age = age;
	        this.gender = gender;
	    }
	
	    fullName() {
	        return this.firstName + " " + this.lastName;
	    }
	
	    sayHi() {
	        alert("Hello, my  name is " + this.fullName());
	    }
	}
	
	class User extends Person {
	    constructor(firstName, lastName, age, gender, signUpDate = 0) {
	        super(firstName, lastName, age, gender);
	        this.signUpDate = signUpDate;
	        this.id = User.prototype.count++;
	    }
	}
	
	User.prototype.count = 0;
	
	var arr = [];
	
	for (var i = 0; i < 10; i++) {
	    arr.push(new User());
	}
	
	console.log(arr[0].id);
	console.log(arr[9].id);

/***/ }
/******/ ]);
//# sourceMappingURL=bundle2.js.map