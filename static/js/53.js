(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./src/api/wyf/alarm/index.js":
/*!************************************!*\
  !*** ./src/api/wyf/alarm/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _interopRequireDefault = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/interopRequireDefault.js */ \"./node_modules/@babel/runtime/helpers/interopRequireDefault.js\").default;\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createAlarm = createAlarm;\nexports.deleteAlarm = deleteAlarm;\nexports.exportAlarmExcel = exportAlarmExcel;\nexports.getAlarm = getAlarm;\nexports.getAlarmPage = getAlarmPage;\nexports.updateAlarm = updateAlarm;\nvar _request = _interopRequireDefault(__webpack_require__(/*! @/utils/request */ \"./src/utils/request.js\"));\n// 创建报警信息\nfunction createAlarm(data) {\n  return (0, _request.default)({\n    url: '/wyf/alarm/create',\n    method: 'post',\n    data: data\n  });\n}\n\n// 更新报警信息\nfunction updateAlarm(data) {\n  return (0, _request.default)({\n    url: '/wyf/alarm/update',\n    method: 'put',\n    data: data\n  });\n}\n\n// 删除报警信息\nfunction deleteAlarm(id) {\n  return (0, _request.default)({\n    url: '/wyf/alarm/delete?id=' + id,\n    method: 'delete'\n  });\n}\n\n// 获得报警信息\nfunction getAlarm(id) {\n  return (0, _request.default)({\n    url: '/wyf/alarm/get?id=' + id,\n    method: 'get'\n  });\n}\n\n// 获得报警信息分页\nfunction getAlarmPage(params) {\n  return (0, _request.default)({\n    url: '/wyf/alarm/page',\n    method: 'get',\n    params: params\n  });\n}\n// 导出报警信息 Excel\nfunction exportAlarmExcel(params) {\n  return (0, _request.default)({\n    url: '/wyf/alarm/export-excel',\n    method: 'get',\n    params: params,\n    responseType: 'blob'\n  });\n}\n\n//# sourceURL=webpack:///./src/api/wyf/alarm/index.js?");

/***/ })

}]);