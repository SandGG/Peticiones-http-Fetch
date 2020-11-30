(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var search = document.querySelector('#search');
var res = document.querySelector('#res');

var isResponseOk = function isResponseOk(response) {
  if (!response.ok) {
    throw new Error(response.status);
  }

  return response.json();
};

search.addEventListener('click', function () {
  fetch('/static/users.json').then(function (response) {
    return isResponseOk(response);
  }).then(function (data) {
    return searchUser(data);
  })["catch"](function (err) {
    return res.innerHTML = "ERROR: ".concat(err.message);
  });
});

function searchUser(dataParse) {
  var nameUser = document.querySelector('#nameUser').value;
  var passUser = document.querySelector('#passUser').value;

  var _iterator = _createForOfIteratorHelper(dataParse),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var item = _step.value;

      if (nameUser == item.user && passUser == item.pass) {
        writeData(item);
        return;
      } else {
        res.innerHTML = '<p> Data not found </p>';
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

function writeData(datos) {
  cleanInputs();
  var text = "<table class=\"table\">\n                    <tr class=\"table__tr\">\n                        <td class=\"table__td\">ID</td>\n                        <td class=\"table__td\">User</td>\n                        <td class=\"table__td\">Password</td>\n                        <td class=\"table__td\">Name</td>\n                        <td class=\"table__td\">Description</td>\n                    </tr>\n                    <tr class=\"table__tr\">\n                        <td class=\"table__td\">".concat(datos.id, "</td>\n                        <td class=\"table__td\">").concat(datos.user, "</td>\n                        <td class=\"table__td\">").concat(datos.pass, "</td>\n                        <td class=\"table__td\">").concat(datos.name, "</td>\n                        <td class=\"table__td\">").concat(datos.descrip, "</td>\n                    </tr>\n                </table>");
  res.innerHTML = text;
}

function cleanInputs() {
  var input = document.getElementsByClassName('form__input');

  for (var i = 0; i < input.length; i++) {
    input[i].value = '';
  }
}

},{}]},{},[1]);
