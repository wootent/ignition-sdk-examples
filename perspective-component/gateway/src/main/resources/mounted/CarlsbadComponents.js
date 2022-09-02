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
const React = __webpack_require__(/*! react */ "react");
const perspective_client_1 = __webpack_require__(/*! @inductiveautomation/perspective-client */ "@inductiveautomation/perspective-client");
// The 'key' or 'id' for this component type.  Component must be registered with this EXACT key in the Java side as well
// as on the client side.  In the client, this is done in the index file where we import and register through the
// ComponentRegistry provided by the perspective-client API.
exports.COMPONENT_TYPE = "carlsbad.display.pump";
class Pump extends perspective_client_1.Component {
    render() {
        // destructure props for readablity
        const { props: { propsControl, propsId, propsName, control, id, mode, name, status }, emit } = this.props;
        return (
        // Pump component
        React.createElement("div", Object.assign({ className: 'pump-component' }, emit()),
            propsId ? React.createElement("label", { className: 'pump-label' }, id) : null,
            propsName ? React.createElement("label", { className: 'pump-label' }, name) : null,
            React.createElement("svg", { viewBox: '0 0 100 100' },
                React.createElement("path", { d: "M 25.193551,52.516126 37.410469,31.26914 49.627384,10.02215 61.919355,31.225805 74.21133,52.429459 49.702441,52.472791 Z", transform: "matrix(1.4486251,0,0,1.1097662,-24.604497,33.135839)", className: status }),
                React.createElement("path", { d: "M 47.548574,8.1610437 A 37.258064,35.129032 0 0 0 10.290383,43.290165 37.258064,35.129032 0 0 0 47.548574,78.419287 37.258064,35.129032 0 0 0 84.806248,43.290165 37.258064,35.129032 0 0 0 82.105121,30.161251 h 8.378816 V 8.8710779 H 54.997215 A 37.258064,35.129032 0 0 0 47.548574,8.1610437 Z", className: status })),
            propsControl ? React.createElement("label", { className: 'pump-label' }, control) : null,
            control === "Remote" ? React.createElement("label", { className: 'pump-label' }, mode) : null,
            React.createElement("label", { className: 'pump-label' }, status)));
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
            width: 100,
            height: 150
        });
    }
    // effectively mapping the state of the tree to component props.
    getPropsReducer(tree) {
        return {
            propsControl: tree.readBoolean("propsControl"),
            propsId: tree.readBoolean("propsId"),
            propsName: tree.readBoolean("propsName"),
            control: tree.readString("control", ""),
            id: tree.readString("id", ""),
            mode: tree.readString("mode", ""),
            name: tree.readString("name", ""),
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