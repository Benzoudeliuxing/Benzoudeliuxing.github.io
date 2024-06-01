(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[52],{

/***/ "./src/api/mall/product/property.js":
/*!******************************************!*\
  !*** ./src/api/mall/product/property.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\").default;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createProperty = createProperty;\nexports.createPropertyValue = createPropertyValue;\nexports.deleteProperty = deleteProperty;\nexports.deletePropertyValue = deletePropertyValue;\nexports.exportPropertyExcel = void 0;\nexports.getProperty = getProperty;\nexports.getPropertyList = getPropertyList;\nexports.getPropertyListAndValue = getPropertyListAndValue;\nexports.getPropertyPage = getPropertyPage;\nexports.getPropertyValue = getPropertyValue;\nexports.getPropertyValuePage = getPropertyValuePage;\nexports.updateProperty = updateProperty;\nexports.updatePropertyValue = updatePropertyValue;\nvar _createClass2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass.js */ \"./node_modules/@babel/runtime/helpers/createClass.js\"));\nvar _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck.js */ \"./node_modules/@babel/runtime/helpers/classCallCheck.js\"));\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\"));\n// ------------------------ 属性项 -------------------\n\n// 创建属性项\nfunction createProperty(data) {\n  return (0, _request.default)({\n    url: '/product/property/create',\n    method: 'post',\n    data: data\n  });\n}\n\n// 更新属性项\nfunction updateProperty(data) {\n  return (0, _request.default)({\n    url: '/product/property/update',\n    method: 'put',\n    data: data\n  });\n}\n\n// 删除属性项\nfunction deleteProperty(id) {\n  return (0, _request.default)({\n    url: '/product/property/delete?id=' + id,\n    method: 'delete'\n  });\n}\n\n// 获得属性项\nfunction getProperty(id) {\n  return (0, _request.default)({\n    url: '/product/property/get?id=' + id,\n    method: 'get'\n  });\n}\n\n// 获得属性项分页\nfunction getPropertyPage(query) {\n  return (0, _request.default)({\n    url: '/product/property/page',\n    method: 'get',\n    params: query\n  });\n}\n\n// 获得属性项列表\nfunction getPropertyList(query) {\n  return (0, _request.default)({\n    url: '/product/property/list',\n    method: 'get',\n    params: query\n  });\n}\n\n// 获得属性项列表\nfunction getPropertyListAndValue(query) {\n  return (0, _request.default)({\n    url: '/product/property/get-value-list',\n    method: 'get',\n    params: query\n  });\n}\n\n// ------------------------ 属性值 -------------------\n\n// 获得属性值分页\nfunction getPropertyValuePage(query) {\n  return (0, _request.default)({\n    url: '/product/property/value/page',\n    method: 'get',\n    params: query\n  });\n}\n\n// 获得属性值\nfunction getPropertyValue(id) {\n  return (0, _request.default)({\n    url: '/product/property/value/get?id=' + id,\n    method: 'get'\n  });\n}\n\n// 创建属性值\nfunction createPropertyValue(data) {\n  return (0, _request.default)({\n    url: '/product/property/value/create',\n    method: 'post',\n    data: data\n  });\n}\n\n// 更新属性值\nfunction updatePropertyValue(data) {\n  return (0, _request.default)({\n    url: '/product/property/value/update',\n    method: 'put',\n    data: data\n  });\n}\n\n// 删除属性值\nfunction deletePropertyValue(id) {\n  return (0, _request.default)({\n    url: '/product/property/value/delete?id=' + id,\n    method: 'delete'\n  });\n}\nvar exportPropertyExcel = /*#__PURE__*/(0, _createClass2.default)(function exportPropertyExcel() {\n  (0, _classCallCheck2.default)(this, exportPropertyExcel);\n});\nexports.exportPropertyExcel = exportPropertyExcel;\n\n//# sourceURL=webpack:///./src/api/mall/product/property.js?");

/***/ })

}]);