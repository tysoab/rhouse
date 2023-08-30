// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/js/model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.state = exports.setUserPassword = exports.newUser = void 0;
var state = {
  users: [],
  properties: []
};
exports.state = state;
state.properties = [{
  id: '1rhouse',
  name: 'A room self / mini Flat',
  price: 120000,
  location: 'Ikoyi Lagos',
  images: ['https://img.freepik.com/free-photo/complex-aerial-view-city_23-2148975282.jpg?w=740&t=st=1692954180~exp=1692954780~hmac=2863600bf4cf1aaf71e57749a78b78b3efa78ad18ef08fee7331777d22e78ba9'],
  postImgStat: {
    toilet: 1,
    bed: 1,
    bath: 0
  },
  propertyType: 'Rent',
  type: 'house',
  fullDesc: "\n      1 bedroom Flat / Apartment for rent Ekoro Road Abule Egba Lagos renting for \u20A6350,000/year. See property details on PropertyPro.ng or browse all our range of properties in Abule Egba Lagos1 bedroom Flat / Apartment for rent in Abule Egba Lagos Rent 1 bedroom Flat / Apartment for rent mini flat in Abule Egba Lagos is a Flat / Apartment. \u2713 Real-time photos. Contact now for quick details on mini flat\n\n      A very spacious room and palour self contain (mini flat) wit a big lobby and bacony at ekoro Rd abule egba 350k per anum , f/g all round tiles wit prepaid meter . Just 2 houses to tared road any tribe.\n      ",
  date: 'Added May 29 2023',
  locationOnMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63433.011300058926!2d3.35951138586153!3d6.450079837159434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf4c4c84b52bb%3A0x5faec50ebdf1a1ea!2sIkoyi!5e0!3m2!1sen!2sng!4v1686417867029!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}, {
  id: '2rhouse',
  name: 'A room self / mini Flat',
  price: 180000,
  location: 'Abule Egba',
  images: ['https://img.freepik.com/premium-photo/interior-blank-photo-frame-living-room-with-white-sofa-3d-rendering_46483-504.jpg?w=900'],
  postImgStat: {
    toilet: 1,
    bed: 1,
    bath: 1
  },
  propertyType: 'Rent',
  type: 'house',
  fullDesc: "\n      1 bedroom Flat / Apartment for rent Ekoro Road Abule Egba Lagos renting for \u20A6350,000/year. See property details on PropertyPro.ng or browse all our range of properties in Abule Egba Lagos1 bedroom Flat / Apartment for rent in Abule Egba Lagos Rent 1 bedroom Flat / Apartment for rent mini flat in Abule Egba Lagos is a Flat / Apartment. \u2713 Real-time photos. Contact now for quick details on mini flat\n\n      A very spacious room and palour self contain (mini flat) wit a big lobby and bacony at ekoro Rd abule egba 350k per anum , f/g all round tiles wit prepaid meter . Just 2 houses to tared road any tribe.\n      ",
  date: 'Added May 29 2023',
  locationOnMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.684731497287!2d3.1902391014137503!3d6.558170787735576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b852558dc1b21%3A0x3a11e83c596fe3a8!2sEgan-Igando%2C%20Ikotun%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686199107012!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}, {
  id: '3rhouse',
  name: '2 Bed room Flat',
  price: 350000,
  location: 'Ikeja lagos',
  images: ['https://img.freepik.com/premium-vector/modern-living-rom-interior-empty-no-people-house-room-with-furniture-horizontal-vector-illustration_48369-39158.jpg?w=996'],
  postImgStat: {
    toilet: 2,
    bed: 2,
    bath: 1
  },
  propertyType: 'Rent',
  type: 'house',
  fullDesc: "\n      1 bedroom Flat / Apartment for rent Ekoro Road Abule Egba Lagos renting for \u20A6350,000/year. See property details on PropertyPro.ng or browse all our range of properties in Abule Egba Lagos1 bedroom Flat / Apartment for rent in Abule Egba Lagos Rent 1 bedroom Flat / Apartment for rent mini flat in Abule Egba Lagos is a Flat / Apartment. \u2713 Real-time photos. Contact now for quick details on mini flat\n\n      A very spacious room and palour self contain (mini flat) wit a big lobby and bacony at ekoro Rd abule egba 350k per anum , f/g all round tiles wit prepaid meter . Just 2 houses to tared road any tribe.\n      ",
  date: 'Added May 29 2023',
  locationOnMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.684731497287!2d3.1902391014137503!3d6.558170787735576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b852558dc1b21%3A0x3a11e83c596fe3a8!2sEgan-Igando%2C%20Ikotun%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686199107012!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}, {
  id: '4rhouse',
  name: 'Bongalo',
  price: 3500000,
  location: 'Ikoyi Island',
  images: ['https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf-near-bookshelf_105762-2224.jpg?w=740&t=st=1692954455~exp=1692955055~hmac=a7a4fbb2f1547b7bd8258343b40f7d731a810e73d714612879dffc13c74ae284'],
  postImgStat: 0,
  propertyType: 'Buy',
  type: 'land',
  fullDesc: "\n      1 bedroom Flat / Apartment for rent Ekoro Road Abule Egba Lagos renting for \u20A6350,000/year. See property details on PropertyPro.ng or browse all our range of properties in Abule Egba Lagos1 bedroom Flat / Apartment for rent in Abule Egba Lagos Rent 1 bedroom Flat / Apartment for rent mini flat in Abule Egba Lagos is a Flat / Apartment. \u2713 Real-time photos. Contact now for quick details on mini flat\n\n      A very spacious room and palour self contain (mini flat) wit a big lobby and bacony at ekoro Rd abule egba 350k per anum , f/g all round tiles wit prepaid meter . Just 2 houses to tared road any tribe.\n      ",
  date: 'Added May 29 2023',
  locationOnMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.684731497287!2d3.1902391014137503!3d6.558170787735576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b852558dc1b21%3A0x3a11e83c596fe3a8!2sEgan-Igando%2C%20Ikotun%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686199107012!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}, {
  id: '5rhouse',
  name: 'Fertile land',
  price: 20000000,
  location: 'ilaro Island',
  images: ['https://von.gov.ng/wp-content/uploads/2022/04/Land-Conversion-in-Telangana.jpg'],
  postImgStat: 0,
  propertyType: 'Buy',
  type: 'land',
  fullDesc: "\n    1 bedroom Flat / Apartment for rent Ekoro Road Abule Egba Lagos renting for \u20A6350,000/year. See property details on PropertyPro.ng or browse all our range of properties in Abule Egba Lagos1 bedroom Flat / Apartment for rent in Abule Egba Lagos Rent 1 bedroom Flat / Apartment for rent mini flat in Abule Egba Lagos is a Flat / Apartment. \u2713 Real-time photos. Contact now for quick details on mini flat\n\n    A very spacious room and palour self contain (mini flat) wit a big lobby and bacony at ekoro Rd abule egba 350k per anum , f/g all round tiles wit prepaid meter . Just 2 houses to tared road any tribe.\n    ",
  date: 'Added Aug 29 2023',
  locationOnMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.684731497287!2d3.1902391014137503!3d6.558170787735576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b852558dc1b21%3A0x3a11e83c596fe3a8!2sEgan-Igando%2C%20Ikotun%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686199107012!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}, {
  id: '6rhouse',
  name: 'Stadium',
  price: 25000000,
  location: 'Abeokuta',
  images: ['https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt64cdbb5903346915/60dc52c95775160f9f24d15f/6267aa539d22f2db295bd559f43edbd25232ab0a.jpg?auto=webp&format=pjpg&width=3840&quality=60'],
  postImgStat: 0,
  propertyType: 'Buy',
  type: 'land',
  fullDesc: "\n  1 bedroom Flat / Apartment for rent Ekoro Road Abule Egba Lagos renting for \u20A6350,000/year. See property details on PropertyPro.ng or browse all our range of properties in Abule Egba Lagos1 bedroom Flat / Apartment for rent in Abule Egba Lagos Rent 1 bedroom Flat / Apartment for rent mini flat in Abule Egba Lagos is a Flat / Apartment. \u2713 Real-time photos. Contact now for quick details on mini flat\n\n  A very spacious room and palour self contain (mini flat) wit a big lobby and bacony at ekoro Rd abule egba 350k per anum , f/g all round tiles wit prepaid meter . Just 2 houses to tared road any tribe.\n  ",
  date: 'Added Aug 29 2023',
  locationOnMap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31709.684731497287!2d3.1902391014137503!3d6.558170787735576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b852558dc1b21%3A0x3a11e83c596fe3a8!2sEgan-Igando%2C%20Ikotun%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1686199107012!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'
}];
var pushtoStorage = function pushtoStorage() {
  localStorage.setItem('users', JSON.stringify(state.users));
};
var newUser = function newUser(data) {
  state.users.push({
    username: data.username,
    email: data.email,
    password: data.password
  });
  pushtoStorage();
};
exports.newUser = newUser;
var getNsetUserData = function getNsetUserData() {
  var storage = JSON.parse(localStorage.getItem('users'));
  if (storage) state.users = storage;
};
getNsetUserData();
var clearStorage = function clearStorage() {
  localStorage.clear('users');
};
// clearStorage();

var setUserPassword = function setUserPassword(data) {
  if (!data) return;
  var currAccount = state.users.findIndex(function (user) {
    return user.email === data.email;
  });
  var status = state.users[currAccount].password = data.password;
  if (status) pushtoStorage();
};
exports.setUserPassword = setUserPassword;
},{}],"src/js/View/view.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var View = /*#__PURE__*/function () {
  function View() {
    _classCallCheck(this, View);
    _defineProperty(this, "_data", void 0);
    _defineProperty(this, "_currentAcount", void 0);
    _defineProperty(this, "_errorMessage", document.querySelector('.error-msg-container'));
    _defineProperty(this, "container", document.querySelector('.signup-login-container'));
    _defineProperty(this, "_btnLogout", document.querySelector('.user-toggle'));
    _defineProperty(this, "_intervalId", void 0);
  }
  _createClass(View, [{
    key: "render",
    value: function render(data) {
      if (!data) return;
      this._data = data;
      var markup = this._generateMarkup();
      if (!markup) return;
      this.clear();
      this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }
  }, {
    key: "clear",
    value: function clear() {
      this._parentElement.innerHTML = '';
    }
  }, {
    key: "_hideForm",
    value: function _hideForm() {
      this.container.querySelectorAll('.form-container').forEach(function (elementt) {
        return elementt.classList.add('hidden');
      });
    }
  }, {
    key: "_showForm",
    value: function _showForm(elem) {
      this.container.querySelector(elem).classList.remove('hidden');
    }
  }, {
    key: "_errorMessageTimeout",
    value: function _errorMessageTimeout() {
      var _this = this;
      clearTimeout(this._intervalId);
      this._intervalId = setTimeout(function () {
        _this._errorMessage.classList.add('hidden');
      }, 2000);
    }
  }, {
    key: "handlerErrorMessage",
    value: function handlerErrorMessage(content) {
      this._errorMessage.textContent = content;
      this._errorMessage.classList.remove('hidden');
      this._errorMessageTimeout();
    }
  }, {
    key: "_clearField",
    value: function _clearField() {
      document.querySelectorAll('input').forEach(function (input) {
        return input.value = '';
      });
    }
  }, {
    key: "_logoutSession",
    value: function _logoutSession() {
      this._btnLogout.addEventListener('click', function (e) {
        var btn = e.target.classList.contains('btn-logout');
        if (!btn) return;
        localStorage.removeItem('login-session');
        window.location.href = 'index.html';
      });
    }
  }]);
  return View;
}();
exports.default = View;
},{}],"src/js/View/signupView.js":[function(require,module,exports) {
"use strict";

var model = _interopRequireWildcard(require("../model.js"));
var _view = _interopRequireDefault(require("./view.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var SignupView = /*#__PURE__*/function (_View) {
  _inherits(SignupView, _View);
  var _super = _createSuper(SignupView);
  function SignupView() {
    var _this;
    _classCallCheck(this, SignupView);
    _this = _super.call(this);
    _defineProperty(_assertThisInitialized(_this), "_parentElement", document.querySelector('.signup-form'));
    _defineProperty(_assertThisInitialized(_this), "_checkMatch", document.querySelector('.confirm-password-el'));
    _defineProperty(_assertThisInitialized(_this), "password", document.querySelector('.password-el-signup'));
    _defineProperty(_assertThisInitialized(_this), "_CreateAccuntLink", document.querySelector('.login-link'));
    _this._handlerCheckMatch();
    _this._CreateAccuntLink.addEventListener('click', _this.handlerCreateAccount.bind(_assertThisInitialized(_this)));
    _this.addHandlerRegister();
    return _this;
  }
  _createClass(SignupView, [{
    key: "addHandlerRegister",
    value: function addHandlerRegister() {
      var _this2 = this;
      this._parentElement.addEventListener('submit', function (e) {
        e.preventDefault();
        var formDatas = Object.fromEntries(_toConsumableArray(new FormData(_this2._parentElement)));
        if (!formDatas.username || !formDatas.email || !formDatas.password || !formDatas.cPassword) {
          _this2.handlerErrorMessage('All Fields is Required!');
        }
        if (formDatas.username && formDatas.email && formDatas.password && formDatas.cPassword) {
          if (formDatas.password === formDatas.cPassword) {
            _this2._data = formDatas;
            _this2._clearField();
            model.newUser(_this2._data);
            _this2._parentElement.closest('.signup').innerHTML = "\n          <p class=\"success-msg\">Registration SuccessFul, verification link has been sent to your email...</p>\n          ";
          }
        }
      });
    }
  }, {
    key: "_handlerCheckMatch",
    value: function _handlerCheckMatch() {
      var _this3 = this;
      this._checkMatch.addEventListener('keyup', function (e) {
        if (e.key === 'Tab') return;
        if (_this3._checkMatch.value !== _this3.password.value) {
          _this3._passwordStatus('Not matched!', '#ff0000');
        }
        if (_this3._checkMatch.value === _this3.password.value) {
          _this3._passwordStatus('Matched!', '#00ff00');
        }
      });
    }
  }, {
    key: "_passwordStatus",
    value: function _passwordStatus(text, color) {
      document.querySelector('.check-matched').textContent = '';
      document.querySelector('.check-matched').textContent = text;
      document.querySelector('.check-matched').style.color = color;
    }
  }, {
    key: "handlerCreateAccount",
    value: function handlerCreateAccount(e) {
      e.preventDefault();
      this._hideForm();
      this._showForm('.login');
    }
  }]);
  return SignupView;
}(_view.default);
var signup = new SignupView();
},{"../model.js":"src/js/model.js","./view.js":"src/js/View/view.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49829" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/js/View/signupView.js"], null)
//# sourceMappingURL=/signupView.97ba80fe.js.map