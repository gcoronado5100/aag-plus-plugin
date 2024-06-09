/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/aag-page-banner/main.css":
/*!*********************************************!*\
  !*** ./src/blocks/aag-page-banner/main.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/blocks/aag-page-banner/Airplane-1.png":
/*!***************************************************!*\
  !*** ./src/blocks/aag-page-banner/Airplane-1.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Airplane-1.63cb2b5c.png";

/***/ }),

/***/ "./src/blocks/aag-page-banner/Airplane-2.png":
/*!***************************************************!*\
  !*** ./src/blocks/aag-page-banner/Airplane-2.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Airplane-2.5cf7a792.png";

/***/ }),

/***/ "./src/blocks/aag-page-banner/Airplane-3.png":
/*!***************************************************!*\
  !*** ./src/blocks/aag-page-banner/Airplane-3.png ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/Airplane-3.efc20c1c.png";

/***/ }),

/***/ "./src/blocks/aag-page-banner/graph.png":
/*!**********************************************!*\
  !*** ./src/blocks/aag-page-banner/graph.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/graph.ae5187f5.png";

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./src/blocks/aag-page-banner/block.json":
/*!***********************************************!*\
  !*** ./src/blocks/aag-page-banner/block.json ***!
  \***********************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"aag-plus/page-banner","title":"Page Banner","category":"widgets","icon":"airplane","description":"Page Banner for AAG Plus","keywords":["banner","page banner","hero","hero banner","aag plus","aag-plus"],"version":"1","textdomain":"aag-plus","editorScript":"file:./index.js","attributes":{"title":{"type":"string","default":"Page Banner"},"subtitle":{"type":"string","default":"Subtitle"},"showSubtitle":{"type":"boolean","default":true},"isCentered":{"type":"boolean","default":false},"showIcon":{"type":"boolean","default":false},"icon":{"type":"string","default":"1"}},"style":"file:./index.css"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************************************!*\
  !*** ./src/blocks/aag-page-banner/index.js ***!
  \*********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/blocks/aag-page-banner/block.json");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main.css */ "./src/blocks/aag-page-banner/main.css");
/* harmony import */ var _Airplane_1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Airplane-1.png */ "./src/blocks/aag-page-banner/Airplane-1.png");
/* harmony import */ var _Airplane_2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Airplane-2.png */ "./src/blocks/aag-page-banner/Airplane-2.png");
/* harmony import */ var _Airplane_3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Airplane-3.png */ "./src/blocks/aag-page-banner/Airplane-3.png");
/* harmony import */ var _graph_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graph.png */ "./src/blocks/aag-page-banner/graph.png");












(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  icon: _block_json__WEBPACK_IMPORTED_MODULE_5__.icon,
  edit({
    attributes,
    setAttributes
  }) {
    const {
      title,
      subtitle,
      showSubtitle,
      isCentered,
      showIcon,
      icon
    } = attributes;
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InspectorControls, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.PanelBody, {
      title: "Page Banner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Title",
      value: title,
      onChange: title => setAttributes({
        title
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Hide Subtitle",
      checked: showSubtitle,
      onChange: showSubtitle => setAttributes({
        showSubtitle
      })
    }), !showSubtitle && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.TextControl, {
      label: "Subtitle",
      value: subtitle,
      onChange: subtitle => setAttributes({
        subtitle
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Centered",
      checked: isCentered,
      onChange: isCentered => setAttributes({
        isCentered
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.ToggleControl, {
      label: "Show Airplane Icon",
      checked: showIcon,
      onChange: showIcon => setAttributes({
        showIcon
      })
    }), showIcon && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__.SelectControl, {
      label: "Icon",
      value: icon,
      options: [{
        label: "None",
        value: ""
      }, {
        label: "Icon 1",
        value: "1"
      }, {
        label: "Icon 2",
        value: "2"
      }, {
        label: "Icon 3",
        value: "3"
      }],
      onChange: icon => setAttributes({
        icon
      })
    })))), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aag-page-banner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _graph_png__WEBPACK_IMPORTED_MODULE_10__,
      alt: "Turbine Graph",
      className: "aag-turbine-icon"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _graph_png__WEBPACK_IMPORTED_MODULE_10__,
      alt: "Turbine Graph",
      className: "aag-turbine-right"
    }), showIcon && icon == 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _Airplane_1_png__WEBPACK_IMPORTED_MODULE_7__,
      alt: "Airplane 1",
      className: "airplane"
    }), showIcon && icon == 2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _Airplane_2_png__WEBPACK_IMPORTED_MODULE_8__,
      alt: "Airplane 2",
      className: "airplane"
    }), showIcon && icon == 3 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _Airplane_3_png__WEBPACK_IMPORTED_MODULE_9__,
      alt: "Airplane 3",
      className: "airplane"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "banner-overlay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `container banner__container ${isCentered ? "centered__banner" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title), !showSubtitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, subtitle) : ""))));
  },
  save({
    attributes: {
      title,
      subtitle,
      showSubtitle,
      isCentered,
      showIcon,
      icon
    }
  }) {
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "aag-page-banner"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _graph_png__WEBPACK_IMPORTED_MODULE_10__,
      alt: "Turbine Graph",
      className: "aag-turbine-icon"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _graph_png__WEBPACK_IMPORTED_MODULE_10__,
      alt: "Turbine Graph",
      className: "aag-turbine-right"
    }), showIcon && icon == 1 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _Airplane_1_png__WEBPACK_IMPORTED_MODULE_7__,
      alt: "Airplane 1",
      className: "airplane"
    }), showIcon && icon == 2 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _Airplane_2_png__WEBPACK_IMPORTED_MODULE_8__,
      alt: "Airplane 2",
      className: "airplane"
    }), showIcon && icon == 3 && (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
      src: _Airplane_3_png__WEBPACK_IMPORTED_MODULE_9__,
      alt: "Airplane 3",
      className: "airplane"
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "banner-overlay"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: `container banner__container ${isCentered ? "centered__banner" : ""}`
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", null, title), !showSubtitle ? (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h4", null, subtitle) : "")));
  }
});
})();

/******/ })()
;
//# sourceMappingURL=index.js.map