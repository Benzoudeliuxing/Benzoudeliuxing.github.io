(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[51],{

/***/ "./src/utils/dateUtils.js":
/*!********************************!*\
  !*** ./src/utils/dateUtils.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.addTime = addTime;\nexports.beginOfDay = beginOfDay;\nexports.betweenDay = betweenDay;\nexports.convertDate = convertDate;\nexports.endOfDay = endOfDay;\nexports.formatDate = formatDate;\nexports.getDate = getDate;\n__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.test.js */ \"./node_modules/core-js/modules/es.regexp.test.js\");\n__webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ \"./node_modules/core-js/modules/es.regexp.constructor.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.dot-all.js */ \"./node_modules/core-js/modules/es.regexp.dot-all.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.sticky.js */ \"./node_modules/core-js/modules/es.regexp.sticky.js\");\n__webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ \"./node_modules/core-js/modules/es.regexp.to-string.js\");\n/**\n * 将毫秒，转换成时间字符串。例如说，xx 分钟\n *\n * @param ms 毫秒\n * @returns {string} 字符串\n */\nfunction getDate(ms) {\n  var day = Math.floor(ms / (24 * 60 * 60 * 1000));\n  var hour = Math.floor(ms / (60 * 60 * 1000) - day * 24);\n  var minute = Math.floor(ms / (60 * 1000) - day * 24 * 60 - hour * 60);\n  var second = Math.floor(ms / 1000 - day * 24 * 60 * 60 - hour * 60 * 60 - minute * 60);\n  if (day > 0) {\n    return day + \"天\" + hour + \"小时\" + minute + \"分钟\";\n  }\n  if (hour > 0) {\n    return hour + \"小时\" + minute + \"分钟\";\n  }\n  if (minute > 0) {\n    return minute + \"分钟\";\n  }\n  if (second > 0) {\n    return second + \"秒\";\n  } else {\n    return 0 + \"秒\";\n  }\n}\nfunction beginOfDay(date) {\n  return new Date(date.getFullYear(), date.getMonth(), date.getDate());\n}\nfunction endOfDay(date) {\n  return new Date(date.getFullYear(), date.getMonth(), date.getDate(), 23, 59, 59, 999);\n}\nfunction betweenDay(date1, date2) {\n  date1 = convertDate(date1);\n  date2 = convertDate(date2);\n  // 计算差值\n  return Math.floor((date2.getTime() - date1.getTime()) / (24 * 3600 * 1000));\n}\nfunction formatDate(date, fmt) {\n  date = convertDate(date);\n  var o = {\n    \"M+\": date.getMonth() + 1,\n    //月份\n    \"d+\": date.getDate(),\n    //日\n    \"H+\": date.getHours(),\n    //小时\n    \"m+\": date.getMinutes(),\n    //分\n    \"s+\": date.getSeconds(),\n    //秒\n    \"q+\": Math.floor((date.getMonth() + 3) / 3),\n    //季度\n    \"S\": date.getMilliseconds() //毫秒\n  };\n\n  if (/(y+)/.test(fmt)) {\n    // 年份\n    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + \"\").substr(4 - RegExp.$1.length));\n  }\n  for (var k in o) {\n    if (new RegExp(\"(\" + k + \")\").test(fmt)) {\n      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? o[k] : (\"00\" + o[k]).substr((\"\" + o[k]).length));\n    }\n  }\n  return fmt;\n}\nfunction addTime(date, time) {\n  date = convertDate(date);\n  return new Date(date.getTime() + time);\n}\nfunction convertDate(date) {\n  if (typeof date === 'string') {\n    return new Date(date);\n  }\n  return date;\n}\n\n//# sourceURL=webpack:///./src/utils/dateUtils.js?");

/***/ })

}]);