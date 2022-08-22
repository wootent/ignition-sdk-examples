(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("PerspectiveClient"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define("CarlsbadComponents", ["PerspectiveClient", "React"], factory);
	else if(typeof exports === 'object')
		exports["CarlsbadComponents"] = factory(require("PerspectiveClient"), require("React"));
	else
		root["CarlsbadComponents"] = factory(root["PerspectiveClient"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./typescript/carlsbad-client-components.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./typescript/carlsbad-client-components.ts":
/*!**************************************************!*\
  !*** ./typescript/carlsbad-client-components.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
const Image_1 = __webpack_require__(/*! ./components/Image */ "./typescript/components/Image.tsx");
exports.Image = Image_1.Image;
const Pump_1 = __webpack_require__(/*! ./components/Pump */ "./typescript/components/Pump.tsx");
exports.Pump = Pump_1.Pump;
__webpack_require__(/*! ../scss/main */ "./scss/main.scss");
// as new components are implemented, import them, and add their meta to this array
const components = [
    new Image_1.ImageMeta(),
    new Pump_1.PumpMeta()
];
// iterate through our components, registering each one with the registry.  Don't forget to register on the Java side too!
components.forEach((c) => perspective_client_1.ComponentRegistry.register(c));


/***/ }),

/***/ "./typescript/components/Image.tsx":
/*!*****************************************!*\
  !*** ./typescript/components/Image.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Example of a component which displays an image, given a URL.
 */
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
// The 'key' or 'id' for this component type.  Component must be registered with this EXACT key in the Java side as well
// as on the client side.  In the client, this is done in the index file where we import and register through the
// ComponentRegistry provided by the perspective-client API.
exports.COMPONENT_TYPE = "carlsbad.display.image";
class Image extends perspective_client_1.Component {
    render() {
        // The props we're interested in.
        const { props: { url }, emit } = this.props;
        // Read the 'url' property provided by the perspective gateway via the component 'props'.
        // Note that the topmost piece of dom requires the application of an element reference, events, style and
        // className as shown below otherwise the layout won't work, or any events configured will fail. See render
        // of MessengerComponent in Messenger.tsx for more details.
        return (React.createElement("img", Object.assign({}, emit(), { src: url, alt: `image-src-${url}` })));
    }
}
exports.Image = Image;
// This is the actual thing that gets registered with the component registry.
class ImageMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    // the class or React Type that this component provides
    getViewComponent() {
        return Image;
    }
    getDefaultSize() {
        return ({
            width: 360,
            height: 360
        });
    }
    // Invoked when an update to the PropertyTree has occurred,
    // effectively mapping the state of the tree to component props.
    getPropsReducer(tree) {
        return {
            url: tree.readString("url", "")
        };
    }
}
exports.ImageMeta = ImageMeta;


/***/ }),

/***/ "./typescript/components/Pump.tsx":
/*!****************************************!*\
  !*** ./typescript/components/Pump.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Example of a component which displays an image, given a URL.
 */
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
// The 'key' or 'id' for this component type.  Component must be registered with this EXACT key in the Java side as well
// as on the client side.  In the client, this is done in the index file where we import and register through the
// ComponentRegistry provided by the perspective-client API.
exports.COMPONENT_TYPE = "carlsbad.display.pump";
class Pump extends perspective_client_1.Component {
    render() {
        // destructure props for readablity
        const { props: { name, id, mode, status } } = this.props;
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement("h1", null, name)),
            React.createElement("svg", null,
                React.createElement("path", { d: "m 126.24325,149.22974 -23.63284,0.14442 -23.632829,0.14442 11.691342,-20.53884 11.691347,-20.53885 11.94149,20.39442 z", transform: "matrix(0.8503915,0,0,0.57506715,-52.330568,-30.131824)", className: "pump-centrifugal" }),
                React.createElement("path", { d: "m 35.209458,14.594802 a 18.790539,16.966217 0 0 0 -18.790588,16.96589 18.790539,16.966217 0 0 0 18.790588,16.9664 18.790539,16.966217 0 0 0 18.79058,-16.9664 18.790539,16.966217 0 0 0 -0.18603,-2.37143 h 4.56457 v -13.86479 h -17.71984 a 18.790539,16.966217 0 0 0 -5.44928,-0.72967 z", className: "pump-centrifugal" })),
            React.createElement("div", null,
                React.createElement("h1", null, id)),
            React.createElement("h2", null, mode),
            React.createElement("h2", null, status)));
    }
}
exports.Pump = Pump;
// This is the actual thing that gets registered with the component registry.
class PumpMeta {
    getComponentType() {
        return exports.COMPONENT_TYPE;
    }
    // the class or React Type that this component provides
    getViewComponent() {
        return Pump;
    }
    getDefaultSize() {
        return ({
            width: 360,
            height: 360
        });
    }
    // effectively mapping the state of the tree to component props.
    getPropsReducer(tree) {
        return {
            name: tree.readString("name", ""),
            id: tree.readString("id", ""),
            mode: tree.readString("mode", ""),
            status: tree.readString("status", "")
        };
    }
}
exports.PumpMeta = PumpMeta;


/***/ }),

/***/ "@inductiveautomation/perspective-client":
/*!************************************!*\
  !*** external "PerspectiveClient" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__inductiveautomation_perspective_client__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
//# sourceMappingURL=CarlsbadComponents.js.map