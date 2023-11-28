module.exports =
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/MainRouter.js":
/*!******************************!*\
  !*** ./client/MainRouter.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/Home */ \"./client/core/Home.js\");\n/* harmony import */ var _user_Users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/Users */ \"./client/user/Users.js\");\n/* harmony import */ var _user_Signup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/Signup */ \"./client/user/Signup.js\");\n/* harmony import */ var _auth_Signin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/Signin */ \"./client/auth/Signin.js\");\n/* harmony import */ var _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user/EditProfile */ \"./client/user/EditProfile.js\");\n/* harmony import */ var _user_Profile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user/Profile */ \"./client/user/Profile.js\");\n/* harmony import */ var _auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/PrivateRoute */ \"./client/auth/PrivateRoute.js\");\n/* harmony import */ var _core_Menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/Menu */ \"./client/core/Menu.js\");\n/* harmony import */ var _core_CreateBook__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/CreateBook */ \"./client/core/CreateBook.js\");\n/* harmony import */ var _core_EditBook__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/EditBook */ \"./client/core/EditBook.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst MainRouter = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_Menu__WEBPACK_IMPORTED_MODULE_9__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Switch\"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    exact: true,\n    path: \"/\",\n    component: _core_Home__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/books/create\",\n    component: _core_CreateBook__WEBPACK_IMPORTED_MODULE_10__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/edit/:id\",\n    component: _core_EditBook__WEBPACK_IMPORTED_MODULE_11__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/users\",\n    component: _user_Users__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signup\",\n    component: _user_Signup__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/signin\",\n    component: _auth_Signin__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_auth_PrivateRoute__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n    path: \"/user/edit/:userId\",\n    component: _user_EditProfile__WEBPACK_IMPORTED_MODULE_6__[\"default\"]\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], {\n    path: \"/user/:userId\",\n    component: _user_Profile__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n  })));\n};\n\nconst _default = MainRouter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(MainRouter, \"MainRouter\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\MainRouter.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\MainRouter.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/MainRouter.js?");

/***/ }),

/***/ "./client/assets/images/logo.jpg":
/*!***************************************!*\
  !*** ./client/assets/images/logo.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"49d46bfef31c4d79ae113d75e3acd037.jpg\");\n\n//# sourceURL=webpack:///./client/assets/images/logo.jpg?");

/***/ }),

/***/ "./client/auth/PrivateRoute.js":
/*!*************************************!*\
  !*** ./client/auth/PrivateRoute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth-helper */ \"./client/auth/auth-helper.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst PrivateRoute = ({\n  component: Component,\n  ...rest\n}) => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Route\"], _extends({}, rest, {\n  render: props => _auth_helper__WEBPACK_IMPORTED_MODULE_2__[\"default\"].isAuthenticated() ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, props) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Redirect\"], {\n    to: {\n      pathname: '/signin',\n      state: {\n        from: props.location\n      }\n    }\n  })\n}));\n\nconst _default = PrivateRoute;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(PrivateRoute, \"PrivateRoute\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\PrivateRoute.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\PrivateRoute.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/PrivateRoute.js?");

/***/ }),

/***/ "./client/auth/Signin.js":
/*!*******************************!*\
  !*** ./client/auth/Signin.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Signin; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-auth */ \"./client/auth/api-auth.js\");\n/* harmony import */ var _core_footer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../core/footer */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction Signin(props) {\n  const classes = useStyles();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    email: '',\n    password: '',\n    error: '',\n    redirectToReferrer: false\n  });\n\n  const clickSubmit = () => {\n    const user = {\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_auth__WEBPACK_IMPORTED_MODULE_11__[\"signin\"])(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].authenticate(data, () => {\n          setValues({ ...values,\n            error: '',\n            redirectToReferrer: true\n          });\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const {\n    from\n  } = props.location.state || {\n    from: {\n      pathname: '/'\n    }\n  };\n  const {\n    redirectToReferrer\n  } = values;\n\n  if (redirectToReferrer) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_10__[\"Redirect\"], {\n      to: from\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    style: {\n      padding: '20px',\n      border: '1px solid #343a40'\n    },\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign In\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_footer__WEBPACK_IMPORTED_MODULE_12__[\"default\"], null));\n}\n\n__signature__(Signin, \"useStyles{classes}\\nuseState{[values, setValues]({\\n      email: '',\\n      password: '',\\n      error: '',\\n      redirectToReferrer: false\\n  })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\Signin.js\");\n  reactHotLoader.register(Signin, \"Signin\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\Signin.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/Signin.js?");

/***/ }),

/***/ "./client/auth/api-auth.js":
/*!*********************************!*\
  !*** ./client/auth/api-auth.js ***!
  \*********************************/
/*! exports provided: signin, signout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signin\", function() { return signin; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"signout\", function() { return signout; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst signin = async user => {\n  try {\n    let response = await fetch('/api/auth/signin/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      credentials: 'include',\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst signout = async () => {\n  try {\n    let response = await fetch('/api/auth/signout/', {\n      method: 'GET'\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\api-auth.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\api-auth.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/api-auth.js?");

/***/ }),

/***/ "./client/auth/auth-helper.js":
/*!************************************!*\
  !*** ./client/auth/auth-helper.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _api_auth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-auth.js */ \"./client/auth/api-auth.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst auth = {\n  isAuthenticated() {\n    if (typeof window == \"undefined\") return false;\n    if (sessionStorage.getItem('jwt')) return JSON.parse(sessionStorage.getItem('jwt'));else return false;\n  },\n\n  authenticate(jwt, cb) {\n    if (typeof window !== \"undefined\") sessionStorage.setItem('jwt', JSON.stringify(jwt));\n    cb();\n  },\n\n  clearJWT(cb) {\n    if (typeof window !== \"undefined\") sessionStorage.removeItem('jwt');\n    cb();\n    Object(_api_auth_js__WEBPACK_IMPORTED_MODULE_0__[\"signout\"])().then(data => {\n      document.cookie = \"t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\";\n    });\n  }\n\n};\nconst _default = auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(auth, \"auth\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\auth-helper.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\auth\\\\auth-helper.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/auth/auth-helper.js?");

/***/ }),

/***/ "./client/core/CreateBook.js":
/*!***********************************!*\
  !*** ./client/core/CreateBook.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst CreateBook = () => {\n  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    author: '',\n    price: '',\n    category: '',\n    description: ''\n  });\n  const [isCreated, setIsCreated] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n\n  const handleChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    setFormData(prevData => ({ ...prevData,\n      [name]: value\n    }));\n  };\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n    const emptyFields = Object.keys(formData).filter(key => formData[key] === '');\n\n    if (emptyFields.length > 0) {\n      setError('Unable to create. Fill in all fields.');\n      return;\n    }\n\n    try {\n      const response = await fetch('/api/books', {\n        method: 'POST',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      });\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! Status: ${response.status}`);\n      }\n\n      setIsCreated(true);\n      setError('');\n    } catch (error) {\n      console.error('Error creating book:', error.message);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    maxWidth: \"sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    style: {\n      margin: '20px',\n      padding: '20px',\n      border: '1px solid #343a40'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"h5\",\n    component: \"div\",\n    align: \"center\"\n  }, \"Add New Book\"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body1\",\n    color: \"error\",\n    align: \"center\"\n  }, error), isCreated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body1\",\n    color: \"textSecondary\",\n    align: \"center\"\n  }, \"Book created successfully!\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Title\",\n    type: \"text\",\n    name: \"title\",\n    value: formData.title,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Author\",\n    type: \"text\",\n    name: \"author\",\n    value: formData.author,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Price\",\n    type: \"number\",\n    name: \"price\",\n    value: formData.price,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Category\",\n    type: \"text\",\n    name: \"category\",\n    value: formData.category,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Description\",\n    name: \"description\",\n    value: formData.description,\n    onChange: handleChange,\n    fullWidth: true,\n    multiline: true,\n    rows: 4,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    type: \"submit\",\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    style: {\n      marginTop: '20px'\n    }\n  }, \"Create Book\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\",\n    style: {\n      marginTop: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    to: \"/\",\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      marginTop: '20px',\n      backgroundColor: '#2c3e50'\n    }\n  }, \"Back to Home\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null));\n};\n\n__signature__(CreateBook, \"useState{[formData, setFormData]({\\r\\n    title: '',\\r\\n    author: '',\\r\\n    price: '',\\r\\n    category: '',\\r\\n    description: '',\\r\\n  })}\\nuseState{[isCreated, setIsCreated](false)}\\nuseState{[error, setError]('')}\");\n\nconst _default = CreateBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CreateBook, \"CreateBook\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\CreateBook.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\CreateBook.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/CreateBook.js?");

/***/ }),

/***/ "./client/core/EditBook.js":
/*!*********************************!*\
  !*** ./client/core/EditBook.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ \"@material-ui/core/Container\");\n/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./footer */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\nconst EditBook = () => {\n  const {\n    id\n  } = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useParams\"])();\n  const history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"])();\n  const [formData, setFormData] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    title: '',\n    author: '',\n    price: '',\n    category: '',\n    description: ''\n  });\n  const [isUpdated, setIsUpdated] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [error, setError] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])('');\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (id) {\n      const fetchBookData = async () => {\n        try {\n          const response = await fetch(`/api/books/${id}`);\n\n          if (!response.ok) {\n            throw new Error(`HTTP error! Status: ${response.status}`);\n          }\n\n          const bookData = await response.json();\n          setFormData(bookData);\n        } catch (error) {\n          console.error('Error fetching book data:', error.message);\n          setError('Error fetching book data');\n        }\n      };\n\n      fetchBookData();\n    }\n  }, [id]);\n\n  const handleChange = e => {\n    const {\n      name,\n      value\n    } = e.target;\n    setFormData(prevData => ({ ...prevData,\n      [name]: value\n    }));\n  };\n\n  const handleSubmit = async e => {\n    e.preventDefault();\n\n    try {\n      const response = await fetch(`/api/books/${id}`, {\n        method: 'PUT',\n        headers: {\n          'Content-Type': 'application/json'\n        },\n        body: JSON.stringify(formData)\n      });\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! Status: ${response.status}`);\n      }\n\n      setIsUpdated(true);\n    } catch (error) {\n      console.error('Error editing book:', error.message);\n      setError('Error editing book');\n    }\n  };\n\n  if (!id) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"Book ID is undefined\");\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    maxWidth: \"sm\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    style: {\n      margin: '20px',\n      padding: '20px',\n      border: '1px solid #343a40'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"h5\",\n    component: \"div\",\n    align: \"center\"\n  }, \"Editing the Book\"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body1\",\n    color: \"error\",\n    align: \"center\"\n  }, error), isUpdated ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body1\",\n    color: \"textSecondary\",\n    align: \"center\",\n    style: {\n      marginTop: '20px',\n      color: 'darkblue'\n    }\n  }, \"Book updated successfully!\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Title\",\n    type: \"text\",\n    name: \"title\",\n    value: formData.title,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Author\",\n    type: \"text\",\n    name: \"author\",\n    value: formData.author,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Price\",\n    type: \"number\",\n    name: \"price\",\n    value: formData.price,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Category\",\n    type: \"text\",\n    name: \"category\",\n    value: formData.category,\n    onChange: handleChange,\n    fullWidth: true,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    label: \"Description\",\n    name: \"description\",\n    value: formData.description,\n    onChange: handleChange,\n    fullWidth: true,\n    multiline: true,\n    rows: 4,\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    type: \"submit\",\n    variant: \"contained\",\n    color: \"primary\",\n    fullWidth: true,\n    style: {\n      marginTop: '20px'\n    }\n  }, \"Update book\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    variant: \"body2\",\n    color: \"textSecondary\",\n    align: \"center\",\n    style: {\n      marginTop: '10px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    component: react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"],\n    to: \"/\",\n    variant: \"contained\",\n    color: \"primary\",\n    style: {\n      marginTop: '20px',\n      backgroundColor: '#2c3e50'\n    }\n  }, \"Back to Home\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], null));\n};\n\n__signature__(EditBook, \"useParams{{ id }}\\nuseHistory{history}\\nuseState{[formData, setFormData]({\\r\\n    title: '',\\r\\n    author: '',\\r\\n    price: '',\\r\\n    category: '',\\r\\n    description: '',\\r\\n  })}\\nuseState{[isUpdated, setIsUpdated](false)}\\nuseState{[error, setError]('')}\\nuseEffect{}\", () => [react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useParams\"], react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"useHistory\"]]);\n\nconst _default = EditBook;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(EditBook, \"EditBook\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\EditBook.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\EditBook.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/EditBook.js?");

/***/ }),

/***/ "./client/core/Home.js":
/*!*****************************!*\
  !*** ./client/core/Home.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Add */ \"@material-ui/icons/Add\");\n/* harmony import */ var _material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Book */ \"@material-ui/icons/Book\");\n/* harmony import */ var _material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./footer */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Home = () => {\n  const [books, setBooks] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const fetchBooks = async () => {\n      try {\n        const response = await fetch('/api/books');\n\n        if (!response.ok) {\n          throw new Error(`HTTP error! Status: ${response.status}`);\n        }\n\n        const data = await response.json();\n        setBooks(data.data);\n      } catch (error) {\n        console.error('Error fetching books:', error.message);\n      }\n    };\n\n    fetchBooks();\n  }, []);\n\n  const handleDelete = async id => {\n    try {\n      const response = await fetch(`/api/books/${id}`, {\n        method: 'DELETE'\n      });\n\n      if (!response.ok) {\n        throw new Error(`HTTP error! Status: ${response.status}`);\n      }\n\n      setBooks(prevBooks => prevBooks.filter(book => book._id !== id));\n    } catch (error) {\n      console.error('Error deleting book:', error.message);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n    align: \"center\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"u\", null, \"Book List\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: \"/books/create\",\n    style: {\n      marginLeft: '20px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"contained\",\n    color: \"primary\",\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Add__WEBPACK_IMPORTED_MODULE_8___default.a, null)\n  }, \"Add New Book\")), books.map(book => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    key: book._id,\n    style: {\n      margin: '20px',\n      padding: '20px',\n      border: '1px solid #343a40'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Book__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    style: {\n      fontSize: 40,\n      marginBottom: 10\n    }\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    style: {\n      color: 'orange',\n      fontWeight: 'bold'\n    },\n    variant: \"h6\",\n    component: \"div\"\n  }, book.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"text.secondary\"\n  }, \"Author: \", book.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"text.secondary\"\n  }, \"Price: $\", book.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"text.secondary\"\n  }, \"Category: \", book.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    color: \"text.secondary\"\n  }, \"Description: \", book.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__[\"Link\"], {\n    to: `/edit/${book._id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"contained\",\n    color: \"primary\",\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_7___default.a, null),\n    style: {\n      margin: '10px'\n    }\n  }, \"Edit\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    variant: \"contained\",\n    color: \"secondary\",\n    startIcon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_6___default.a, null),\n    onClick: () => handleDelete(book._id)\n  }, \"Delete\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_footer__WEBPACK_IMPORTED_MODULE_10__[\"default\"], null));\n};\n\n__signature__(Home, \"useState{[books, setBooks]([])}\\nuseEffect{}\");\n\nconst _default = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Home, \"Home\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\Home.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\Home.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Home.js?");

/***/ }),

/***/ "./client/core/Menu.js":
/*!*****************************!*\
  !*** ./client/core/Menu.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/AppBar */ \"@material-ui/core/AppBar\");\n/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Toolbar */ \"@material-ui/core/Toolbar\");\n/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Home */ \"@material-ui/icons/Home\");\n/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _assets_images_logo_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/logo.jpg */ \"./client/assets/images/logo.jpg\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\nconst isActive = (history, path) => {\n  if (history.location.pathname === path) return {\n    color: '#FFB6C1'\n  };else return {\n    color: '#ffffff'\n  };\n};\n\nconst Menu = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"withRouter\"])(({\n  history\n}) => {\n  const appBarStyle = {\n    backgroundColor: '#2c3e50',\n    '&:hover': {\n      backgroundColor: '#FF0000'\n    }\n  };\n  const buttonStyle = {\n    margin: '0 20px'\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    position: \"static\",\n    style: appBarStyle\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    variant: \"h6\",\n    color: \"inherit\",\n    style: {\n      marginRight: '20px',\n      backgroundColor: '#ffffff',\n      // Set white background\n      color: '#000000',\n      padding: '10px',\n      borderRadius: '5px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _assets_images_logo_jpg__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    alt: \"Logo\",\n    style: {\n      width: '30px',\n      marginRight: '10px'\n    } // Set the width as needed\n\n  }), \"Group3\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    \"aria-label\": \"Home\",\n    style: { ...buttonStyle,\n      ...isActive(history, '/')\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_5___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/users\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: { ...buttonStyle,\n      ...isActive(history, '/users')\n    }\n  }, \"Users\")), !_auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/signup\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: { ...buttonStyle,\n      ...isActive(history, '/signup')\n    }\n  }, \"Sign up\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: { ...buttonStyle,\n      ...isActive(history, '/signin')\n    }\n  }, \"Sign In\"))), _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated() && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__[\"Link\"], {\n    to: `/user/${_auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user._id}`\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: { ...buttonStyle,\n      ...isActive(history, `/user/${_auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isAuthenticated().user._id}`)\n    }\n  }, \"My Profile\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    color: \"inherit\",\n    onClick: () => {\n      _auth_auth_helper__WEBPACK_IMPORTED_MODULE_7__[\"default\"].clearJWT(() => history.push('/'));\n    }\n  }, \"Sign out\"))));\n});\nconst _default = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(isActive, \"isActive\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(Menu, \"Menu\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\Menu.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\Menu.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/Menu.js?");

/***/ }),

/***/ "./client/core/footer.js":
/*!*******************************!*\
  !*** ./client/core/footer.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst Footer = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", {\n    style: {\n      backgroundColor: '#2c3e50',\n      color: '#fff',\n      padding: '10px',\n      textAlign: 'center',\n      marginTop: '20px'\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    variant: \"body2\"\n  }, \"\\xA9 2023 Fall: Group-3 MERN BOOK STORE PROJECT\"));\n};\n\nconst _default = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(Footer, \"Footer\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\footer.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\core\\\\footer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/core/footer.js?");

/***/ }),

/***/ "./client/theme.js":
/*!*************************!*\
  !*** ./client/theme.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/colors */ \"@material-ui/core/colors\");\n/* harmony import */ var _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__[\"createMuiTheme\"])({\n  typography: {\n    useNextVariants: true\n  },\n  palette: {\n    primary: {\n      light: '#5c67a3',\n      main: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"green\"][500],\n      dark: '#2e355b',\n      contrastText: '#fff'\n    },\n    secondary: {\n      light: '#87CEEB',\n      main: '#FFB6C1',\n      dark: '#002f6c',\n      contrastText: '#000'\n    },\n    openTitle: '#3f4771',\n    protectedTitle: _material_ui_core_colors__WEBPACK_IMPORTED_MODULE_1__[\"pink\"]['400'],\n    type: 'light'\n  }\n});\nconst _default = theme;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(theme, \"theme\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\theme.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\theme.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/theme.js?");

/***/ }),

/***/ "./client/user/DeleteUser.js":
/*!***********************************!*\
  !*** ./client/user/DeleteUser.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DeleteUser; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Delete */ \"@material-ui/icons/Delete\");\n/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_12__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction DeleteUser(props) {\n  const [open, setOpen] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const [redirect, setRedirect] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].isAuthenticated();\n\n  const clickButton = () => {\n    setOpen(true);\n  };\n\n  const deleteAccount = () => {\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_11__[\"remove\"])({\n      userId: props.userId\n    }, {\n      t: jwt.token\n    }).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        _auth_auth_helper__WEBPACK_IMPORTED_MODULE_10__[\"default\"].clearJWT(() => console.log('deleted'));\n        setRedirect(true);\n      }\n    });\n  };\n\n  const handleRequestClose = () => {\n    setOpen(false);\n  };\n\n  if (redirect) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[\"Redirect\"], {\n      to: \"/\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    \"aria-label\": \"Delete\",\n    onClick: clickButton,\n    color: \"black\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_4___default.a, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    open: open,\n    onClose: handleRequestClose\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_9___default.a, null, \"Delete Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_7___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_8___default.a, null, \"Confirm to delete your account.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClick: handleRequestClose,\n    color: \"primary\"\n  }, \"Cancel\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    onClick: deleteAccount,\n    color: \"secondary\",\n    autoFocus: \"autoFocus\"\n  }, \"Confirm\"))));\n}\n\n__signature__(DeleteUser, \"useState{[open, setOpen](false)}\\nuseState{[redirect, setRedirect](false)}\");\n\nDeleteUser.propTypes = {\n  userId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(DeleteUser, \"DeleteUser\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\DeleteUser.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/DeleteUser.js?");

/***/ }),

/***/ "./client/user/EditProfile.js":
/*!************************************!*\
  !*** ./client/user/EditProfile.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return EditProfile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_11__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  title: {\n    margin: theme.spacing(2),\n    color: theme.palette.protectedTitle\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction EditProfile({\n  match\n}) {\n  const classes = useStyles();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    password: '',\n    email: '',\n    open: false,\n    error: '',\n    redirectToProfile: false\n  });\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_9__[\"default\"].isAuthenticated();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_10__[\"read\"])({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          name: data.name,\n          email: data.email\n        });\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_10__[\"update\"])({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, user).then(data => {\n      if (data && data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          userId: data._id,\n          redirectToProfile: true\n        });\n      }\n    });\n  };\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  if (values.redirectToProfile) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[\"Redirect\"], {\n      to: '/user/' + values.userId\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    style: {\n      padding: '20px',\n      border: '1px solid #343a40'\n    },\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    style: {\n      color: '#2c3e50'\n    },\n    variant: \"h5\",\n    className: classes.title\n  }, \"Edit Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\")));\n}\n\n__signature__(EditProfile, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    name: '',\\n    password: '',\\n    email: '',\\n    open: false,\\n    error: '',\\n    redirectToProfile: false\\n  })}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\EditProfile.js\");\n  reactHotLoader.register(EditProfile, \"EditProfile\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\EditProfile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/EditProfile.js?");

/***/ }),

/***/ "./client/user/Profile.js":
/*!********************************!*\
  !*** ./client/user/Profile.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Profile; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Edit */ \"@material-ui/icons/Edit\");\n/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Divider */ \"@material-ui/core/Divider\");\n/* harmony import */ var _material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _DeleteUser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeleteUser */ \"./client/user/DeleteUser.js\");\n/* harmony import */ var _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./../auth/auth-helper */ \"./client/auth/auth-helper.js\");\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _core_footer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../core/footer */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: { ...theme.mixins.gutters({\n      maxWidth: 400,\n      margin: 'auto',\n      padding: theme.spacing(3),\n      marginTop: theme.spacing(5),\n      zoom: 1.2 // Double the size\n\n    })\n  },\n  title: {\n    marginTop: theme.spacing(3),\n    color: theme.palette.protectedTitle\n  }\n}));\nfunction Profile({\n  match\n}) {\n  const classes = useStyles();\n  const [user, setUser] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({});\n  const [redirectToSignin, setRedirectToSignin] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false);\n  const jwt = _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated();\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_16__[\"read\"])({\n      userId: match.params.userId\n    }, {\n      t: jwt.token\n    }, signal).then(data => {\n      if (data && data.error) {\n        setRedirectToSignin(true);\n      } else {\n        setUser(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, [match.params.userId]);\n\n  if (redirectToSignin) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__[\"Redirect\"], {\n      to: \"/signin\"\n    });\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    style: {\n      color: '#2c3e50',\n      fontWeight: 'bold'\n    },\n    variant: \"h6\",\n    className: classes.title\n  }, \"User Profile\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    dense: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    primary: user.name,\n    secondary: user.email\n  }), \" \", _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated().user && _auth_auth_helper__WEBPACK_IMPORTED_MODULE_15__[\"default\"].isAuthenticated().user._id == user._id && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__[\"Link\"], {\n    to: \"/user/edit/\" + user._id\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, {\n    \"aria-label\": \"Edit\",\n    color: \"primary\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_DeleteUser__WEBPACK_IMPORTED_MODULE_14__[\"default\"], {\n    userId: user._id\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Divider__WEBPACK_IMPORTED_MODULE_13___default.a, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    primary: \"Joined: \" + new Date(user.created).toDateString()\n  }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_footer__WEBPACK_IMPORTED_MODULE_18__[\"default\"], null));\n}\n\n__signature__(Profile, \"useStyles{classes}\\nuseState{[user, setUser]({})}\\nuseState{[redirectToSignin, setRedirectToSignin](false)}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\Profile.js\");\n  reactHotLoader.register(Profile, \"Profile\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\Profile.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Profile.js?");

/***/ }),

/***/ "./client/user/Signup.js":
/*!*******************************!*\
  !*** ./client/user/Signup.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Signup; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/Card */ \"@material-ui/core/Card\");\n/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CardActions */ \"@material-ui/core/CardActions\");\n/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CardContent */ \"@material-ui/core/CardContent\");\n/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ \"@material-ui/core/Button\");\n/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ \"@material-ui/core/TextField\");\n/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Icon */ \"@material-ui/core/Icon\");\n/* harmony import */ var _material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Dialog */ \"@material-ui/core/Dialog\");\n/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/DialogActions */ \"@material-ui/core/DialogActions\");\n/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogContent */ \"@material-ui/core/DialogContent\");\n/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ \"@material-ui/core/DialogContentText\");\n/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ \"@material-ui/core/DialogTitle\");\n/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _core_footer_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../core/footer.js */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__[\"makeStyles\"])(theme => ({\n  card: {\n    maxWidth: 600,\n    margin: 'auto',\n    textAlign: 'center',\n    marginTop: theme.spacing(5),\n    paddingBottom: theme.spacing(2)\n  },\n  error: {\n    verticalAlign: 'middle'\n  },\n  title: {\n    marginTop: theme.spacing(2),\n    color: theme.palette.openTitle\n  },\n  textField: {\n    marginLeft: theme.spacing(1),\n    marginRight: theme.spacing(1),\n    width: 300\n  },\n  submit: {\n    margin: 'auto',\n    marginBottom: theme.spacing(2)\n  }\n}));\nfunction Signup() {\n  const classes = useStyles();\n  const [values, setValues] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])({\n    name: '',\n    password: '',\n    email: '',\n    open: false,\n    error: ''\n  });\n\n  const handleChange = name => event => {\n    setValues({ ...values,\n      [name]: event.target.value\n    });\n  };\n\n  const clickSubmit = () => {\n    const user = {\n      name: values.name || undefined,\n      email: values.email || undefined,\n      password: values.password || undefined\n    };\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_9__[\"create\"])(user).then(data => {\n      if (data.error) {\n        setValues({ ...values,\n          error: data.error\n        });\n      } else {\n        setValues({ ...values,\n          error: '',\n          open: true\n        });\n      }\n    });\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    style: {\n      padding: '20px',\n      border: '1px solid #343a40'\n    },\n    className: classes.card\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_3___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"Sign Up\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"name\",\n    label: \"Name\",\n    className: classes.textField,\n    value: values.name,\n    onChange: handleChange('name'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"email\",\n    type: \"email\",\n    label: \"Email\",\n    className: classes.textField,\n    value: values.email,\n    onChange: handleChange('email'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    id: \"password\",\n    type: \"password\",\n    label: \"Password\",\n    className: classes.textField,\n    value: values.password,\n    onChange: handleChange('password'),\n    margin: \"normal\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), \" \", values.error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6___default.a, {\n    component: \"p\",\n    color: \"error\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Icon__WEBPACK_IMPORTED_MODULE_7___default.a, {\n    color: \"error\",\n    className: classes.error\n  }, \"error\"), values.error)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_2___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    variant: \"contained\",\n    onClick: clickSubmit,\n    className: classes.submit\n  }, \"Submit\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    open: values.open,\n    disableBackdropClick: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_14___default.a, null, \"New Account\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_12___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_13___default.a, null, \"New account successfully created.\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_11___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_15__[\"Link\"], {\n    to: \"/signin\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default.a, {\n    color: \"primary\",\n    autoFocus: \"autoFocus\",\n    variant: \"contained\"\n  }, \"Sign In\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_footer_js__WEBPACK_IMPORTED_MODULE_16__[\"default\"], null));\n}\n\n__signature__(Signup, \"useStyles{classes}\\nuseState{[values, setValues]({\\n    name: '',\\n    password: '',\\n    email: '',\\n    open: false,\\n    error: ''\\n  })}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\Signup.js\");\n  reactHotLoader.register(Signup, \"Signup\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\Signup.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Signup.js?");

/***/ }),

/***/ "./client/user/Users.js":
/*!******************************!*\
  !*** ./client/user/Users.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Users; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ \"@material-ui/core/styles\");\n/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Paper */ \"@material-ui/core/Paper\");\n/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/List */ \"@material-ui/core/List\");\n/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/ListItem */ \"@material-ui/core/ListItem\");\n/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/ListItemAvatar */ \"@material-ui/core/ListItemAvatar\");\n/* harmony import */ var _material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ListItemSecondaryAction */ \"@material-ui/core/ListItemSecondaryAction\");\n/* harmony import */ var _material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ListItemText */ \"@material-ui/core/ListItemText\");\n/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Avatar */ \"@material-ui/core/Avatar\");\n/* harmony import */ var _material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/IconButton */ \"@material-ui/core/IconButton\");\n/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ \"@material-ui/core/Typography\");\n/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/ArrowForward */ \"@material-ui/icons/ArrowForward\");\n/* harmony import */ var _material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Person */ \"@material-ui/icons/Person\");\n/* harmony import */ var _material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _api_user_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./api-user.js */ \"./client/user/api-user.js\");\n/* harmony import */ var _core_footer_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../core/footer.js */ \"./client/core/footer.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[\"makeStyles\"])(theme => ({\n  root: theme.mixins.gutters({\n    padding: theme.spacing(1),\n    margin: theme.spacing(5)\n  }),\n  title: {\n    margin: `${theme.spacing(4)}px 0 ${theme.spacing(2)}px`,\n    color: theme.palette.openTitle\n  }\n}));\nfunction Users() {\n  const classes = useStyles();\n  const [users, setUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    const abortController = new AbortController();\n    const signal = abortController.signal;\n    Object(_api_user_js__WEBPACK_IMPORTED_MODULE_14__[\"list\"])(signal).then(data => {\n      if (data && data.error) {\n        console.log(data.error);\n      } else {\n        setUsers(data);\n      }\n    });\n    return function cleanup() {\n      abortController.abort();\n    };\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    className: classes.root,\n    elevation: 4\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10___default.a, {\n    variant: \"h6\",\n    className: classes.title\n  }, \"All Users\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    dense: true\n  }, users.map((item, i) => {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_13__[\"Link\"], {\n      to: \"/user/\" + item._id,\n      key: i\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      button: true\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemAvatar__WEBPACK_IMPORTED_MODULE_5___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Avatar__WEBPACK_IMPORTED_MODULE_8___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_Person__WEBPACK_IMPORTED_MODULE_12___default.a, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      primary: item.name\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ListItemSecondaryAction__WEBPACK_IMPORTED_MODULE_6___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_9___default.a, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_icons_ArrowForward__WEBPACK_IMPORTED_MODULE_11___default.a, null)))));\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_core_footer_js__WEBPACK_IMPORTED_MODULE_15__[\"default\"], null));\n}\n\n__signature__(Users, \"useStyles{classes}\\nuseState{[users, setUsers]([])}\\nuseEffect{}\", () => [useStyles]);\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(useStyles, \"useStyles\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\Users.js\");\n  reactHotLoader.register(Users, \"Users\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\Users.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/Users.js?");

/***/ }),

/***/ "./client/user/api-user.js":
/*!*********************************!*\
  !*** ./client/user/api-user.js ***!
  \*********************************/
/*! exports provided: create, list, read, update, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"create\", function() { return create; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"list\", function() { return list; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"read\", function() { return read; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst create = async user => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'POST',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst list = async signal => {\n  try {\n    let response = await fetch('/api/users/', {\n      method: 'GET',\n      signal: signal\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst read = async (params, credentials, signal) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'GET',\n      signal: signal,\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst update = async (params, credentials, user) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'PUT',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      },\n      body: JSON.stringify(user)\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\nconst remove = async (params, credentials) => {\n  try {\n    let response = await fetch('/api/users/' + params.userId, {\n      method: 'DELETE',\n      headers: {\n        'Accept': 'application/json',\n        'Content-Type': 'application/json',\n        'Authorization': 'Bearer ' + credentials.t\n      }\n    });\n    return await response.json();\n  } catch (err) {\n    console.log(err);\n  }\n};\n\n\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\api-user.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\client\\\\user\\\\api-user.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./client/user/api-user.js?");

/***/ }),

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"GROUP_3_KEY\",\n  mongoUri: process.env.MONGODB_URI || \"mongodb+srv://group3:group3@groupproject.h1wonux.mongodb.net/?retryWrites=true&w=majority\"\n};\nconst _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\config\\\\config.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\config\\\\config.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controller/auth.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/auth.controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user.model.js */ \"./server/model/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config.js */ \"./config/config.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\nconst signin = async (req, res) => {\n  try {\n    let user = await _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      \"email\": req.body.email\n    });\n\n    if (!user) {\n      return res.status(401).json({\n        error: \"User not found\"\n      });\n    }\n\n    if (!user.authenticate(req.body.password)) {\n      return res.status(401).send({\n        error: \"Email and password don't match.\"\n      });\n    }\n\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n      _id: user._id\n    }, _config_config_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n    res.cookie('t', token, {\n      expire: new Date() + 9999\n    });\n    return res.json({\n      token,\n      user: {\n        _id: user._id,\n        name: user.name,\n        email: user.email\n      }\n    });\n  } catch (err) {\n    return res.status(401).json({\n      error: \"Could not sign in\"\n    });\n  }\n};\n\nconst signup = async (req, res) => {\n  try {\n    const user = new _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n    await user.save();\n    res.status(200).json({\n      message: 'Registration successful! Please sign in.'\n    });\n  } catch (err) {\n    res.status(400).json({\n      error: 'Registration failed. Please try again.'\n    });\n  }\n};\n\nconst signout = (req, res) => {\n  res.clearCookie(\"t\");\n  return res.status(200).json({\n    message: \"signed out\"\n  });\n};\n\nconst requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  algorithms: [\"HS256\"],\n  userProperty: 'auth'\n});\n\nconst hasAuthorization = (req, res, next) => {\n  const authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status(403).json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nconst _default = {\n  signin,\n  signout,\n  signup,\n  requireSignin,\n  hasAuthorization\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(signin, \"signin\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(signup, \"signup\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(signout, \"signout\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(requireSignin, \"requireSignin\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\auth.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\auth.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controller/auth.controller.js?");

/***/ }),

/***/ "./server/controller/book.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/book.controller.js ***!
  \**********************************************/
/*! exports provided: createBook, getAllBooks, getBookById, updateBook, deleteBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBook\", function() { return createBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getAllBooks\", function() { return getAllBooks; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBookById\", function() { return getBookById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateBook\", function() { return updateBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteBook\", function() { return deleteBook; });\n/* harmony import */ var _model_book_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/book.model.js */ \"./server/model/book.model.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\nconst createBook = async (request, response) => {\n  try {\n    console.log(\"Request Body:\", request.body);\n    const newBook = {\n      title: request.body.title,\n      author: request.body.author,\n      price: request.body.price,\n      category: request.body.category,\n      description: request.body.description\n    };\n    console.log(\"New Book:\", newBook);\n    const book = await _model_book_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create(newBook);\n    console.log(\"Book added successfully\");\n    return response.status(201).send(book);\n  } catch (error) {\n    console.log(\"Error:\", error.message);\n\n    if (error.name === 'ValidationError') {\n      const errors = Object.values(error.errors).map(err => err.message);\n      return response.status(400).json({\n        message: \"Validation Error\",\n        errors\n      });\n    } else {\n      console.log(error.message);\n      response.status(500).send({\n        message: error.message\n      });\n    }\n  }\n};\nconst getAllBooks = async (request, response) => {\n  try {\n    const books = await _model_book_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({});\n    return response.status(200).json({\n      count: books.length,\n      data: books\n    });\n  } catch (error) {\n    console.log(error.message);\n    response.status(500).send({\n      message: error.message\n    });\n  }\n};\nconst getBookById = async (request, response) => {\n  try {\n    const {\n      id\n    } = request.params;\n    const book = await _model_book_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    return response.status(200).json(book);\n  } catch (error) {\n    console.log(error.message);\n    response.status(500).send({\n      message: error.message\n    });\n  }\n};\nconst updateBook = async (request, response) => {\n  try {\n    const {\n      id\n    } = request.params;\n    const updatedBook = await _model_book_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(id, request.body, {\n      new: true,\n      runValidators: true\n    });\n    console.log(\"Books updated succesfully\");\n    console.log(\"Updated Book:\", updatedBook);\n\n    if (!updatedBook) {\n      return response.status(404).json({\n        message: \"Book not found\"\n      });\n    }\n\n    return response.status(200).json(updatedBook);\n  } catch (error) {\n    if (error.name === 'ValidationError') {\n      const errors = Object.values(error.errors).map(err => err.message);\n      return response.status(400).json({\n        message: \"Validation Error\",\n        errors\n      });\n    } else {\n      console.log(error.message);\n      response.status(500).send({\n        message: error.message\n      });\n    }\n  }\n};\nconst deleteBook = async (request, response) => {\n  try {\n    const {\n      id\n    } = request.params;\n    const deletedBook = await _model_book_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(id);\n    console.log(\"Books removed succesfully\");\n    console.log(\"Deleted Book:\", deletedBook);\n\n    if (!deletedBook) {\n      return response.status(404).json({\n        message: \"Book not found\"\n      });\n    }\n\n    return response.status(200).json(deletedBook);\n  } catch (error) {\n    console.log(error.message);\n    response.status(500).send({\n      message: error.message\n    });\n  }\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(createBook, \"createBook\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\book.controller.js\");\n  reactHotLoader.register(getAllBooks, \"getAllBooks\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\book.controller.js\");\n  reactHotLoader.register(getBookById, \"getBookById\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\book.controller.js\");\n  reactHotLoader.register(updateBook, \"updateBook\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\book.controller.js\");\n  reactHotLoader.register(deleteBook, \"deleteBook\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\book.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controller/book.controller.js?");

/***/ }),

/***/ "./server/controller/error.controller.js":
/*!***********************************************!*\
  !*** ./server/controller/error.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nfunction handleError(req, res, err) {\n  console.error(err);\n  res.status(500).json({\n    error: 'Internal Server Error'\n  }); // You can customize the response as needed\n}\n\nfunction getErrorMessage(errMsg) {\n  console.error(errMsg);\n  return errMsg.message || 'Internal Server Error'; // Return the error message or a default message\n}\n\nconst _default = {\n  handleError: handleError,\n  getErrorMessage: getErrorMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(handleError, \"handleError\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\error.controller.js\");\n  reactHotLoader.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\error.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\error.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controller/error.controller.js?");

/***/ }),

/***/ "./server/controller/user.controller.js":
/*!**********************************************!*\
  !*** ./server/controller/user.controller.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../model/user.model.js */ \"./server/model/user.model.js\");\n/* harmony import */ var lodash_extend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend.js */ \"lodash/extend.js\");\n/* harmony import */ var lodash_extend_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _error_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error.controller.js */ \"./server/controller/error.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\nconst create = async (req, res) => {\n  const user = new _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n\n  try {\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    res.status(200).json({\n      _id: user._id,\n      name: user.name,\n      email: user.email\n    });\n    console.log(\"User created:\", user);\n  } catch (err) {\n    res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst list = async (req, res) => {\n  try {\n    let users = await _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\n    res.json(users);\n  } catch (err) {\n    return res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!user) return res.status(400).json({\n      error: 'User not found'\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: 'Could not retrieve user'\n    });\n  }\n};\n\nconst read = (req, res) => {\n  req.profile.hashed_password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nconst update = async (req, res) => {\n  try {\n    let user = req.profile;\n    user = lodash_extend_js__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n    user.updated = Date.now();\n    await user.save();\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    console.log(\"user updated\");\n    res.json({\n      _id: user._id,\n      name: user.name,\n      email: user.email,\n      updated: user.updated\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst remove = async (req, res) => {\n  try {\n    let user = req.profile;\n    await _model_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].deleteOne({\n      _id: user._id\n    });\n    user.hashed_password = undefined;\n    user.salt = undefined;\n    console.log(\"delete succesful\");\n    res.json({\n      _id: user._id,\n      name: user.name,\n      email: user.email,\n      deleted: true\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _error_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n\nconst _default = {\n  create,\n  userByID,\n  read,\n  list,\n  remove,\n  update\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(create, \"create\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(list, \"list\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(userByID, \"userByID\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(read, \"read\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(update, \"update\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(remove, \"remove\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\controller\\\\user.controller.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controller/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\nconst compile = app => {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    const compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    const middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nconst _default = {\n  compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\devBundle.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\devBundle.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _route_book_routes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./route/book.routes.js */ \"./server/route/book.routes.js\");\n/* harmony import */ var _route_user_route_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./route/user.route.js */ \"./server/route/user.route.js\");\n/* harmony import */ var _route_auth_route_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./route/auth.route.js */ \"./server/route/auth.route.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _client_MainRouter__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../client/MainRouter */ \"./client/MainRouter.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/styles */ \"@material-ui/styles\");\n/* harmony import */ var _material_ui_styles__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_styles__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _client_theme__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./../client/theme */ \"./client/theme.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n //comment out before building for production\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_17__[\"default\"].compile(app);\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path__WEBPACK_IMPORTED_MODULE_1___default.a.join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/', _route_book_routes_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _route_user_route_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', _route_auth_route_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.get('*', (req, res) => {\n  const sheets = new _material_ui_styles__WEBPACK_IMPORTED_MODULE_15__[\"ServerStyleSheets\"]();\n  const context = {};\n  const markup = react_dom_server__WEBPACK_IMPORTED_MODULE_12___default.a.renderToString(sheets.collect( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_14__[\"StaticRouter\"], {\n    location: req.url,\n    context: context\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_material_ui_styles__WEBPACK_IMPORTED_MODULE_15__[\"ThemeProvider\"], {\n    theme: _client_theme__WEBPACK_IMPORTED_MODULE_16__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_client_MainRouter__WEBPACK_IMPORTED_MODULE_13__[\"default\"], null)))));\n\n  if (context.url) {\n    return res.redirect(303, context.url);\n  }\n\n  const css = sheets.toString();\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n    markup: markup,\n    css: css\n  }));\n}); // Catch unauthorised errors\n\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\nconst _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\express.js\");\n  reactHotLoader.register(app, \"app\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\express.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\express.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/model/book.model.js":
/*!************************************!*\
  !*** ./server/model/book.model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n// Example book.model.js\n\nconst bookSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  title: {\n    type: String,\n    required: [true, \"Please enter the book title\"],\n    trim: true\n  },\n  author: {\n    type: String,\n    required: [true, \"Please enter the book author\"],\n    trim: true\n  },\n  price: {\n    type: Number,\n    required: [true, \"Please enter the price\"]\n  },\n  category: {\n    type: String,\n    required: [true, \"Please enter the book category\"]\n  },\n  description: {\n    type: String,\n    required: [true, \"Please enter the book description\"]\n  },\n  createdAt: {\n    type: Date,\n    default: Date.now\n  }\n});\nconst Book = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('Book', bookSchema);\nconst _default = Book;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(bookSchema, \"bookSchema\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\model\\\\book.model.js\");\n  reactHotLoader.register(Book, \"Book\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\model\\\\book.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\model\\\\book.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/model/book.model.js?");

/***/ }),

/***/ "./server/model/user.model.js":
/*!************************************!*\
  !*** ./server/model/user.model.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  created: {\n    type: Date,\n    default: Date.now\n  },\n  updated: {\n    type: Date,\n    default: Date.now\n  },\n  hashed_password: {\n    type: String,\n    required: 'Password is required'\n  },\n  salt: String\n});\nUserSchema.virtual('password').set(function (password) {\n  this._password = password;\n  this.salt = this.makeSalt();\n  this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n  return this._password;\n});\nUserSchema.path('hashed_password').validate(function (v) {\n  if (this._password && this._password.length < 6) {\n    this.invalidate('password', 'Password must be at least 6 characters.');\n  }\n\n  if (this.isNew && !this._password) {\n    this.invalidate('password', 'Password is required');\n  }\n}, null);\nUserSchema.methods = {\n  authenticate: function (plainText) {\n    const result = this.encryptPassword(plainText) === this.hashed_password;\n\n    if (!result && this.hashed_password.length === 40) {\n      const isUpdated = this.updatePasswordUsingBcrypt(plainText);\n      return isUpdated;\n    }\n\n    return result;\n  },\n  encryptPassword: function (password) {\n    if (!password) return '';\n\n    try {\n      return crypto__WEBPACK_IMPORTED_MODULE_1___default.a.createHmac('sha1', this.salt).update(password).digest('hex');\n    } catch (err) {\n      console.error('Error in encryptPassword:', err);\n      return '';\n    }\n  },\n  makeSalt: function () {\n    return Math.round(new Date().valueOf() * Math.random()) + '';\n  },\n  updatePasswordUsingBcrypt: async function (plainText) {\n    try {\n      const saltRounds = 10;\n      const newSalt = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.genSalt(saltRounds);\n      const newHashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default.a.hash(plainText, newSalt);\n      this.hashed_password = newHashedPassword;\n      this.salt = newSalt;\n      await this.save();\n      return true;\n    } catch (err) {\n      console.error(err);\n      return false;\n    }\n  }\n}; //UserSchema.methods.removeUser = async function () {\n// return await this.deleteOne();\n//};\n\nconst _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\model\\\\user.model.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\model\\\\user.model.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/model/user.model.js?");

/***/ }),

/***/ "./server/route/auth.route.js":
/*!************************************!*\
  !*** ./server/route/auth.route.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/auth.controller.js */ \"./server/controller/auth.controller.js\");\n/* harmony import */ var _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/user.controller.js */ \"./server/controller/user.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/api/auth/signin').post(_controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/api/auth/signout').get(_controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nrouter.route('/api/auth/signup').post(_controller_user_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\route\\\\auth.route.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\route\\\\auth.route.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/route/auth.route.js?");

/***/ }),

/***/ "./server/route/book.routes.js":
/*!*************************************!*\
  !*** ./server/route/book.routes.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_book_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/book.controller.js */ \"./server/controller/book.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.post(\"/api/books\", _controller_book_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"createBook\"]);\nrouter.get(\"/api/books\", _controller_book_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"getAllBooks\"]);\nrouter.get(\"/api/books/:id\", _controller_book_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"getBookById\"]);\nrouter.put(\"/api/books/:id\", _controller_book_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"updateBook\"]);\nrouter.delete(\"/api/books/:id\", _controller_book_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"deleteBook\"]);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\route\\\\book.routes.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\route\\\\book.routes.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/route/book.routes.js?");

/***/ }),

/***/ "./server/route/user.route.js":
/*!************************************!*\
  !*** ./server/route/user.route.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/user.controller.js */ \"./server/controller/user.controller.js\");\n/* harmony import */ var _controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controller/auth.controller.js */ \"./server/controller/auth.controller.js\");\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router(); // User Routes\n\nrouter.route('/api/users').post(_controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create).get(_controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\nrouter.route('/api/users/:userId').get(_controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read).put(_controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update).delete(_controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controller_auth_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param('userId', _controller_user_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nconst _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(router, \"router\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\route\\\\user.route.js\");\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\server\\\\route\\\\user.route.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./server/route/user.route.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\n\n\n // Connection URL\n\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default.a.connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('\\n\\n\\nServer started on port %s', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port + '\\n' + 'http://localhost:3000/' + '\\n\\n\\n');\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst _default = ({\n  markup,\n  css\n}) => {\n  return `<!doctype html>\n      <html lang=\"en\">\n        <head>\n          <meta charset=\"utf-8\">\n          <meta\n            name=\"viewport\"\n            content=\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\"\n          >\n          <title>MERN Skeleton</title>\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Roboto:100,300,400\">\n          <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/icon?family=Material+Icons\">\n          <style>\n              a{\n                text-decoration: none;\n                color: #061d95\n              }\n          </style>\n        </head>\n        <body style=\"margin:0\">\n          <div id=\"root\">${markup}</div>\n          <style id=\"jss-server-side\">${css}</style>\n          <script type=\"text/javascript\" src=\"/dist/bundle.js\"></script>\n        </body>\n      </html>`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(_default, \"default\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\template.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: ['webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  resolve: {\n    alias: {\n      'react-dom': '@hot-loader/react-dom'\n    }\n  }\n};\nmodule.exports = config;\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\webpack.config.client.js\");\n  reactHotLoader.register(config, \"config\", \"C:\\\\Users\\\\gcsum\\\\OneDrive\\\\Desktop\\\\good\\\\mern-skeleton\\\\webpack.config.client.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\gcsum\\OneDrive\\Desktop\\good\\mern-skeleton\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/AppBar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/AppBar%22?");

/***/ }),

/***/ "@material-ui/core/Avatar":
/*!*******************************************!*\
  !*** external "@material-ui/core/Avatar" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Avatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Avatar%22?");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Button\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Button%22?");

/***/ }),

/***/ "@material-ui/core/Card":
/*!*****************************************!*\
  !*** external "@material-ui/core/Card" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Card\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Card%22?");

/***/ }),

/***/ "@material-ui/core/CardActions":
/*!************************************************!*\
  !*** external "@material-ui/core/CardActions" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardActions%22?");

/***/ }),

/***/ "@material-ui/core/CardContent":
/*!************************************************!*\
  !*** external "@material-ui/core/CardContent" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/CardContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/CardContent%22?");

/***/ }),

/***/ "@material-ui/core/Container":
/*!**********************************************!*\
  !*** external "@material-ui/core/Container" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Container\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Container%22?");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Dialog\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Dialog%22?");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogActions\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogActions%22?");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContent\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContent%22?");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogContentText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogContentText%22?");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/DialogTitle\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/DialogTitle%22?");

/***/ }),

/***/ "@material-ui/core/Divider":
/*!********************************************!*\
  !*** external "@material-ui/core/Divider" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Divider\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Divider%22?");

/***/ }),

/***/ "@material-ui/core/Icon":
/*!*****************************************!*\
  !*** external "@material-ui/core/Icon" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Icon\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Icon%22?");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/IconButton\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/IconButton%22?");

/***/ }),

/***/ "@material-ui/core/List":
/*!*****************************************!*\
  !*** external "@material-ui/core/List" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/List\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/List%22?");

/***/ }),

/***/ "@material-ui/core/ListItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/ListItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItem\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItem%22?");

/***/ }),

/***/ "@material-ui/core/ListItemAvatar":
/*!***************************************************!*\
  !*** external "@material-ui/core/ListItemAvatar" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemAvatar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemAvatar%22?");

/***/ }),

/***/ "@material-ui/core/ListItemSecondaryAction":
/*!************************************************************!*\
  !*** external "@material-ui/core/ListItemSecondaryAction" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemSecondaryAction\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemSecondaryAction%22?");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/*!*************************************************!*\
  !*** external "@material-ui/core/ListItemText" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/ListItemText\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/ListItemText%22?");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Paper\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Paper%22?");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/TextField\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/TextField%22?");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Toolbar\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Toolbar%22?");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/Typography\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/Typography%22?");

/***/ }),

/***/ "@material-ui/core/colors":
/*!*******************************************!*\
  !*** external "@material-ui/core/colors" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/colors\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/colors%22?");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/core/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/core/styles%22?");

/***/ }),

/***/ "@material-ui/icons/Add":
/*!*****************************************!*\
  !*** external "@material-ui/icons/Add" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Add\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Add%22?");

/***/ }),

/***/ "@material-ui/icons/ArrowForward":
/*!**************************************************!*\
  !*** external "@material-ui/icons/ArrowForward" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/ArrowForward\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/ArrowForward%22?");

/***/ }),

/***/ "@material-ui/icons/Book":
/*!******************************************!*\
  !*** external "@material-ui/icons/Book" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Book\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Book%22?");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Delete\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Delete%22?");

/***/ }),

/***/ "@material-ui/icons/Edit":
/*!******************************************!*\
  !*** external "@material-ui/icons/Edit" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Edit\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Edit%22?");

/***/ }),

/***/ "@material-ui/icons/Home":
/*!******************************************!*\
  !*** external "@material-ui/icons/Home" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Home\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Home%22?");

/***/ }),

/***/ "@material-ui/icons/Person":
/*!********************************************!*\
  !*** external "@material-ui/icons/Person" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/icons/Person\");\n\n//# sourceURL=webpack:///external_%22@material-ui/icons/Person%22?");

/***/ }),

/***/ "@material-ui/styles":
/*!**************************************!*\
  !*** external "@material-ui/styles" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@material-ui/styles\");\n\n//# sourceURL=webpack:///external_%22@material-ui/styles%22?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash/extend.js":
/*!***********************************!*\
  !*** external "lodash/extend.js" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash/extend.js\");\n\n//# sourceURL=webpack:///external_%22lodash/extend.js%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });