/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0;\n  font-size: 2rem;\n  color: #fff;\n  background-color: #123456;\n  width: 100%;\n}\n\n/* NAVIGATION */\nheader {\n  display: flex;\n  justify-content: space-between;\n}\n.h-left {\n  display: flex;\n  padding: 10px;\n}\n.h-right {\n  display: flex;\n  padding: 10px;\n}\n.h-right nav {\n  margin: 0 20px;\n  padding: 2px 10px;\n  border-radius: 10px;\n  cursor: pointer;\n}\n.h-right nav:hover {\n  box-shadow: inset 0 -7px 1px white;\n}\n.h-right nav:active {\n  box-shadow: 0 7px 1px white;\n}\n.navActive {\n  box-shadow: inset 0 -3px 1px white;\n}\n\n/* TITLE */\n.big-picture {\n  text-align: center;\n  height: 400px;\n  overflow: hidden;\n}\n.big-picture img {\n  max-width: 100%;\n  height: auto;\n}\nh1,\n.title {\n  position: absolute;\n  left: 20%;\n}\nh1 {\n  top: 170px;\n}\n.title {\n  top: 250px;\n}\n\n/* CONTENT */\n.center {\n  max-width: 800px;\n  margin: 20px auto 0 auto;\n}\n/* MAIN */\n.main {\n  letter-spacing: 2px;\n  text-align: justify;\n}\n\n/* MENU */\n/* \n<menu>\n    <box>\n        <h2>\n        <p>\n    <box>\n    <box>\n        <h2>\n        <p>\n    <box>\n<menu>\n*/\n.menu {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 30px;\n}\n.menu .box {\n  width: 300px;\n}\n.menu h2 {\n  margin: 0;\n}\n.menu img {\n  width: 300px;\n}\n.menu p {\n  font-size: 1rem;\n}\n\n/* CONTACT */\n/* \n<h3>Contact<h3>\n  <p>tel.<p>\n  <p>email<p>\n  <p>adress: <p>\n*/\n.contact {\n  line-height: 1.5;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-restaurant/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-restaurant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/domContact.js":
/*!***************************!*\
  !*** ./src/domContact.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateContact: () => (/* binding */ GenerateContact)\n/* harmony export */ });\nfunction GenerateContact() {\n  const selectors = {\n    contentDiv: document.querySelector(\"#content\"),\n    navContact: document.querySelector(\"#contact\"),\n  };\n\n  const elements = {\n    div: document.createElement(\"div\"),\n    h: document.createElement(\"h3\"),\n    p1: document.createElement(\"p\"),\n    p2: document.createElement(\"p\"),\n    p3: document.createElement(\"p\"),\n  };\n\n  const addClasses = () => {\n    elements.div.classList.add(\"center\", \"main\");\n    selectors.navContact.classList.add(\"navActive\");\n  };\n\n  const addText = (contact, telephone, email, adress) => {\n    elements.h.textContent = contact;\n    elements.p1.textContent = telephone;\n    elements.p2.textContent = email;\n    elements.p3.textContent = adress;\n  };\n\n  const createMain = () => {\n    selectors.contentDiv.appendChild(elements.div);\n    elements.div.appendChild(elements.h);\n    elements.div.appendChild(elements.p1);\n    elements.div.appendChild(elements.p2);\n    elements.div.appendChild(elements.p3);\n  };\n\n  addClasses();\n  createMain();\n\n  return { addText };\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/domContact.js?");

/***/ }),

/***/ "./src/domMain.js":
/*!************************!*\
  !*** ./src/domMain.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateMain: () => (/* binding */ GenerateMain)\n/* harmony export */ });\nfunction GenerateMain() {\n  const selectors = {\n    contentDiv: document.querySelector(\"#content\"),\n    navMain: document.querySelector(\"#main\"),\n  };\n\n  const elements = {\n    div: document.createElement(\"div\"),\n    h1: document.createElement(\"h3\"),\n    h2: document.createElement(\"h3\"),\n    h3: document.createElement(\"h3\"),\n    p1: document.createElement(\"p\"),\n    p2: document.createElement(\"p\"),\n    p3: document.createElement(\"p\"),\n    pintro: document.createElement(\"p\"),\n  };\n\n  const addClasses = () => {\n    elements.div.classList.add(\"center\", \"main\");\n    selectors.navMain.classList.add(\"navActive\");\n  };\n\n  const addText = (\n    pintroText,\n    h1Text,\n    p1Text,\n    h2Text,\n    p2Text,\n    h3Text,\n    p3Text\n  ) => {\n    elements.pintro.textContent = pintroText;\n    elements.h1.textContent = h1Text;\n    elements.p1.textContent = p1Text;\n    elements.h2.textContent = h2Text;\n    elements.p2.textContent = p2Text;\n    elements.h3.textContent = h3Text;\n    elements.p3.textContent = p3Text;\n  };\n\n  const createMain = () => {\n    selectors.contentDiv.appendChild(elements.div);\n    elements.div.appendChild(elements.pintro);\n    elements.div.appendChild(elements.h1);\n    elements.div.appendChild(elements.p1);\n    elements.div.appendChild(elements.h2);\n    elements.div.appendChild(elements.p2);\n    elements.div.appendChild(elements.h3);\n    elements.div.appendChild(elements.p3);\n  };\n\n  addClasses();\n  createMain();\n\n  return { addText };\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/domMain.js?");

/***/ }),

/***/ "./src/domMenu.js":
/*!************************!*\
  !*** ./src/domMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateMenuItem: () => (/* binding */ GenerateMenuItem),\n/* harmony export */   generateMenu: () => (/* binding */ generateMenu)\n/* harmony export */ });\nfunction generateMenu() {\n  const selectors = {\n    contentDiv: document.querySelector(\"#content\"),\n    navMenu: document.querySelector(\"#menu\"),\n  };\n\n  const elements = {\n    div: document.createElement(\"div\"),\n  };\n\n  const addClasses = () => {\n    elements.div.classList.add(\"center\", \"menu\");\n    selectors.navMenu.classList.add(\"navActive\");\n  };\n\n  const createMenu = () => {\n    selectors.contentDiv.appendChild(elements.div);\n  };\n\n  addClasses();\n  createMenu();\n}\n\nfunction GenerateMenuItem() {\n  const selectors = {\n    menu: document.querySelector(\".menu\"),\n  };\n\n  const addClasses = (div) => {\n    div.classList.add(\"box\");\n  };\n\n  const addText = (div, title, description, imgSrc) => {\n    const elements = {\n      h: document.createElement(\"h2\"),\n      p: document.createElement(\"p\"),\n      img: document.createElement(\"img\")\n    };\n    elements.h.textContent = title;\n    elements.p.textContent = description;\n    elements.img.src = imgSrc;\n    div.appendChild(elements.h);\n    div.appendChild(elements.img);\n    div.appendChild(elements.p);\n  };\n\n  const createItem = (title, description, imgSrc) => {\n    const div = document.createElement(\"div\");\n    addClasses(div);\n    addText(div, title, description, imgSrc);\n    selectors.menu.appendChild(div);\n  };\n\n  return { createItem };\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/domMenu.js?");

/***/ }),

/***/ "./src/domTitle.js":
/*!*************************!*\
  !*** ./src/domTitle.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenerateTitle: () => (/* binding */ GenerateTitle),\n/* harmony export */   clearContent: () => (/* binding */ clearContent)\n/* harmony export */ });\nfunction GenerateTitle() {\n  const contentDiv = document.querySelector(\"#content\");\n\n  const elements = {\n    h1: document.createElement(\"h1\"),\n    div: document.createElement(\"div\"),\n    img: document.createElement(\"img\"),\n    p: document.createElement(\"p\"),\n  };\n\n  const addClasses = () => {\n    elements.div.classList.add(\"big-picture\");\n    elements.p.classList.add(\"title\");\n  };\n\n  const addPicture = () => {\n    elements.img.src = \"src/big-picture.jpg\";\n  };\n\n  const addText = (h1Text, pText) => {\n    elements.h1.textContent = h1Text;\n    elements.p.textContent = pText;\n  };\n\n  const createTitle = () => {\n    contentDiv.appendChild(elements.div);\n    elements.div.appendChild(elements.img);\n    contentDiv.appendChild(elements.h1);\n    contentDiv.appendChild(elements.p);\n  };\n\n  addClasses();\n  addPicture();\n  createTitle();\n\n  return { addText };\n}\n\nfunction clearContent() {\n  document.querySelector(\".center\").remove();\n  document\n    .querySelectorAll(\".navActive\")\n    .forEach((element) => element.classList.remove(\"navActive\"));\n}\n\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/domTitle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _domTitle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domTitle.js */ \"./src/domTitle.js\");\n/* harmony import */ var _domMain_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domMain.js */ \"./src/domMain.js\");\n/* harmony import */ var _domMenu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domMenu.js */ \"./src/domMenu.js\");\n/* harmony import */ var _domContact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domContact.js */ \"./src/domContact.js\");\n\n\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const titleText = (0,_domTitle_js__WEBPACK_IMPORTED_MODULE_1__.GenerateTitle)();\n  titleText.addText(\"Welcome to Odin Restaurant\", \"A Feast Fit for Vikings\");\n  const mainText = (0,_domMain_js__WEBPACK_IMPORTED_MODULE_2__.GenerateMain)();\n  mainText.addText(\n    \"As you step into Odin Restaurant, you're transported back to the age of mighty warriors and epic feasts. Named after the revered Norse god of wisdom, war, and poetry, Odin Restaurant is a culinary haven for those seeking an authentic taste of Viking culture.\",\n    \"Ambiance:\",\n    \"The ambiance is reminiscent of a Viking great hall, with rough-hewn wooden beams adorning the ceiling and flickering torches casting a warm glow across the room. A massive stone fireplace crackles at one end, filling the air with the comforting scent of burning wood. The walls are adorned with shields, swords, and intricate tapestries depicting Norse legends, adding to the atmosphere of ancient mystique.\",\n    \"Décor:\",\n    \"Rustic wooden tables and benches are arranged throughout the restaurant, inviting guests to gather around and partake in the hearty fare. Each table is adorned with wrought iron candle holders and animal fur throws, adding to the rugged charm of the surroundings. The centerpiece of the restaurant is a grand long table, where guests can indulge in communal dining experiences reminiscent of Viking banquets.\",\n    \"Cuisine:\",\n    \"At Odin Restaurant, the menu showcases the bold flavors and hearty ingredients favored by the Vikings. Dishes are crafted using traditional cooking methods and locally sourced ingredients, ensuring an authentic dining experience. Expect to find succulent roast meats, smoked fish, hearty stews, and freshly baked bread, all served in generous portions fit for a warrior.\"\n  );\n});\n\nconst elements = {\n  main: document.querySelector(\"#main\"),\n  menu: document.querySelector(\"#menu\"),\n  contact: document.querySelector(\"#contact\"),\n};\n\nfunction clickBehaviours() {\n  let preventRepeat = {\n    main: 1,\n    menu: 1,\n    contact: 1,\n  };\n  elements.main.addEventListener(\"click\", () => {\n    if (preventRepeat.main === 1) {\n      (0,_domTitle_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\n      const mainText = (0,_domMain_js__WEBPACK_IMPORTED_MODULE_2__.GenerateMain)();\n      mainText.addText(\n        \"As you step into Odin Restaurant, you're transported back to the age of mighty warriors and epic feasts. Named after the revered Norse god of wisdom, war, and poetry, Odin Restaurant is a culinary haven for those seeking an authentic taste of Viking culture.\",\n        \"Ambiance:\",\n        \"The ambiance is reminiscent of a Viking great hall, with rough-hewn wooden beams adorning the ceiling and flickering torches casting a warm glow across the room. A massive stone fireplace crackles at one end, filling the air with the comforting scent of burning wood. The walls are adorned with shields, swords, and intricate tapestries depicting Norse legends, adding to the atmosphere of ancient mystique.\",\n        \"Décor:\",\n        \"Rustic wooden tables and benches are arranged throughout the restaurant, inviting guests to gather around and partake in the hearty fare. Each table is adorned with wrought iron candle holders and animal fur throws, adding to the rugged charm of the surroundings. The centerpiece of the restaurant is a grand long table, where guests can indulge in communal dining experiences reminiscent of Viking banquets.\",\n        \"Cuisine:\",\n        \"At Odin Restaurant, the menu showcases the bold flavors and hearty ingredients favored by the Vikings. Dishes are crafted using traditional cooking methods and locally sourced ingredients, ensuring an authentic dining experience. Expect to find succulent roast meats, smoked fish, hearty stews, and freshly baked bread, all served in generous portions fit for a warrior.\"\n      );\n      preventRepeat.main = 0;\n      preventRepeat.menu = 1;\n      preventRepeat.contact = 1;\n    }\n  });\n\n  elements.menu.addEventListener(\"click\", () => {\n    if (preventRepeat.menu === 1) {\n      (0,_domTitle_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\n      (0,_domMenu_js__WEBPACK_IMPORTED_MODULE_3__.generateMenu)();\n      const menuItem = (0,_domMenu_js__WEBPACK_IMPORTED_MODULE_3__.GenerateMenuItem)();\n      menuItem.createItem(\n        \"Valkyrie's Feast\",\n        \"A grand platter featuring a selection of roasted meats, including tender lamb, juicy pork, and savory venison, served alongside roasted root vegetables and honey-glazed mead ham.\",\n        \"src/dish1.jpg\"\n      );\n      menuItem.createItem(\n        \"Thor's Thunderous Stew\",\n        \"A hearty stew bursting with chunks of beef, root vegetables, and barley, simmered in a rich broth flavored with herbs and spices.\",\n        \"src/dish2.jpg\"\n      );\n      menuItem.createItem(\n        \"Loki's Lox Platter\",\n        \"Smoked salmon served with pickled herring, crisp rye bread, and creamy horseradish sauce, perfect for indulging in the bounty of the sea.\",\n        \"src/dish3.jpg\"\n      );\n      menuItem.createItem(\n        \"Freyja's Harvest Salad\",\n        \"A refreshing salad featuring crisp greens, seasonal vegetables, toasted nuts, and tangy vinaigrette, paying homage to the fertility goddess Freyja.\",\n        \"src/dish4.jpg\"\n      );\n      preventRepeat.menu = 0;\n      preventRepeat.main = 1;\n      preventRepeat.contact = 1;\n    }\n  });\n\n  elements.contact.addEventListener(\"click\", () => {\n    if (preventRepeat.contact === 1) {\n      (0,_domTitle_js__WEBPACK_IMPORTED_MODULE_1__.clearContent)();\n      const contactText = (0,_domContact_js__WEBPACK_IMPORTED_MODULE_4__.GenerateContact)();\n      contactText.addText(\n        \"Contact\",\n        \"tel. 444 444 444\",\n        \"email: odin@odin.odin\",\n        \"adress: Odin 44, 44-444 Project\"\n      );\n      preventRepeat.contact = 0;\n      preventRepeat.menu = 1;\n      preventRepeat.main = 1;\n    }\n  });\n}\n\nclickBehaviours();\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;