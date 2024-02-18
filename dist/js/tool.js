/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionMenu.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionMenu.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _composables_useCloseOnEscape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../composables/useCloseOnEscape */ "./resources/js/composables/useCloseOnEscape.js");
/* harmony import */ var _composables_useClickAway__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../composables/useClickAway */ "./resources/js/composables/useClickAway.js");



/**
 * @typedef {import('../types').DropdownItem} DropdownItem
 * /
/**
 * @type {{
 *   name: string;
 *   options: DropdownItem[]
 * }}
 */

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'ActionMenu',
  props: {
    name: {
      type: String,
      required: Boolean
    },
    options: {
      type: Array,
      required: true
    }
  },
  emits: ['action'],
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose,
      __emit = _ref.emit;
    __expose();
    var props = __props;
    var emits = __emit;
    var dropdown = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var toggler = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
    var open = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    (0,_composables_useCloseOnEscape__WEBPACK_IMPORTED_MODULE_1__.useCloseOnEscape)(function () {
      return open.value = false;
    });
    (0,_composables_useClickAway__WEBPACK_IMPORTED_MODULE_2__.useClickAway)(dropdown, function () {
      return open.value = false;
    }, toggler);
    var toggle = function toggle() {
      open.value = !open.value;
    };

    /**
     * @param {DropdownItem} option
     *
     */
    var action = function action(option) {
      emits('action', option);
    };
    var __returned__ = {
      props: props,
      emits: emits,
      dropdown: dropdown,
      toggler: toggler,
      open: open,
      toggle: toggle,
      action: action,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get useCloseOnEscape() {
        return _composables_useCloseOnEscape__WEBPACK_IMPORTED_MODULE_1__.useCloseOnEscape;
      },
      get useClickAway() {
        return _composables_useClickAway__WEBPACK_IMPORTED_MODULE_2__.useClickAway;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filters.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filters.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionMenu_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionMenu.vue */ "./resources/js/components/ActionMenu.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/keys */ "./resources/js/config/keys.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Filters',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();

    /**
     * @typedef {import('../types').DropdownItem} DropdownItem
     */
    var logLevels = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)(_config_keys__WEBPACK_IMPORTED_MODULE_2__.LOG_LEVEL_INJECT_KEY);
    var search = (0,vue__WEBPACK_IMPORTED_MODULE_1__.inject)(_config_keys__WEBPACK_IMPORTED_MODULE_2__.SEARCH_INJECT_KEY);

    /**
     * @param {DropdownItem} option
     */
    var logLevelAction = function logLevelAction(option) {
      logLevels.updateLogLevel(function (options) {
        var fullOption = options.value.find(function (item) {
          return item.id === option.id;
        });
        if (fullOption) {
          fullOption.active = !fullOption.active;
        }
      });
    };
    var updateKeyWord = function updateKeyWord(value) {
      search.updateSearch(value);
    };
    var __returned__ = {
      logLevels: logLevels,
      search: search,
      logLevelAction: logLevelAction,
      updateKeyWord: updateKeyWord,
      ActionMenu: _ActionMenu_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
      inject: vue__WEBPACK_IMPORTED_MODULE_1__.inject,
      get LOG_LEVEL_INJECT_KEY() {
        return _config_keys__WEBPACK_IMPORTED_MODULE_2__.LOG_LEVEL_INJECT_KEY;
      },
      get SEARCH_INJECT_KEY() {
        return _config_keys__WEBPACK_IMPORTED_MODULE_2__.SEARCH_INJECT_KEY;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _composables_useDarkMode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../composables/useDarkMode */ "./resources/js/composables/useDarkMode.js");
/* harmony import */ var _components_Filters_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Filters.vue */ "./resources/js/components/Filters.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Tool',
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var dark = (0,_composables_useDarkMode__WEBPACK_IMPORTED_MODULE_0__.useDarkMode)();
    var __returned__ = {
      dark: dark,
      get useDarkMode() {
        return _composables_useDarkMode__WEBPACK_IMPORTED_MODULE_0__.useDarkMode;
      },
      Filters: _components_Filters_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionMenu.vue?vue&type=template&id=6cc046e0":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionMenu.vue?vue&type=template&id=6cc046e0 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "relative"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor",
  "aria-hidden": "true",
  "class": "w-5 h-5"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "fill-rule": "evenodd",
  d: "M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z",
  "clip-rule": "evenodd"
})], -1 /* HOISTED */);
var _hoisted_3 = ["onClick"];
var _hoisted_4 = ["aria-checked", "aria-hidden"];
var _hoisted_5 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "m4.5 12.75 6 6 9-13.5"
}, null, -1 /* HOISTED */);
var _hoisted_6 = [_hoisted_5];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
    "class": "flex gap-x-2 items-center px-2 py-1.5 rounded-lg dark:hover:bg-gray-950 hover:bg-gray-700 hover:bg-opacity-5",
    "has-popup": "true",
    onClick: $setup.toggle,
    role: "button",
    type: "button",
    ref: "toggler"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.props.name), 1 /* TEXT */), _hoisted_2], 512 /* NEED_PATCH */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dark:border-gray-700 border border-gray-200 absolute top-full overflow-hidden dark:shadow-none shadow-lg right-0 mt-1 rounded-lg", {
      hidden: !$setup.open
    }]),
    ref: "dropdown"
  }, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.props.options, function (option) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      key: option.id,
      "class": "dark:hover:bg-gray-950 hover:bg-gray-700 hover:bg-opacity-5 bg-white dark:bg-gray-900",
      role: "none"
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
      "class": "flex gap-x-2 items-center px-3 py-1.5 justify-between w-full",
      style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({
        color: option.color
      }),
      role: "button",
      type: "button",
      onClick: function onClick($event) {
        return $setup.action(option);
      }
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(option.value), 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      "stroke-width": "1.5",
      "aria-checked": option.active ? 'true' : 'false',
      stroke: "green",
      "aria-hidden": !option.active,
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["w-6 h-6", {
        'opacity-0': !option.active
      }])
    }, [].concat(_hoisted_6), 10 /* CLASS, PROPS */, _hoisted_4))], 12 /* STYLE, PROPS */, _hoisted_3)]);
  }), 128 /* KEYED_FRAGMENT */))], 2 /* CLASS */)]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filters.vue?vue&type=template&id=b9055040":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filters.vue?vue&type=template&id=b9055040 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "w-full flex justify-between items-center"
};
var _hoisted_2 = {
  "class": "w-1/3"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_index_search_input = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("index-search-input");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_index_search_input, {
    keyword: $setup.search.search.value,
    "onUpdate:keyword": $setup.updateKeyWord
  }, null, 8 /* PROPS */, ["keyword"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["ActionMenu"], {
    name: "Levels",
    options: $setup.logLevels.logLevels.value,
    onAction: $setup.logLevelAction
  }, null, 8 /* PROPS */, ["options"])]);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var _hoisted_1 = {
  "class": "logify-scoped"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
      dark: $setup.dark
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Filters"])], 2 /* CLASS */)]);
}

/***/ }),

/***/ "./resources/js/composables/useClickAway.js":
/*!**************************************************!*\
  !*** ./resources/js/composables/useClickAway.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useClickAway: () => (/* binding */ useClickAway)
/* harmony export */ });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./resources/js/composables/useEventListener.js");


/**
 * close on click away
 * @param {Element} trigger
 * @param {() => void} callback
 * @param {Element} [exclude]
 *
 * @example
 * const trigger = ref(null);
 * const exclude = ref(null);
 * const show = ref(false);
 *
 * useClickAway(trigger, () => show.value = false, exclude);
 * @returns {void}
 */
function useClickAway(trigger, callback, exclude) {
  var handler = function handler(event) {
    if (exclude && exclude.value.contains(event.target)) return;
    if (!trigger.value.contains(event.target)) {
      callback();
    }
  };
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_0__.useEventListener)(document.body, 'mousedown', handler);
}

/***/ }),

/***/ "./resources/js/composables/useCloseOnEscape.js":
/*!******************************************************!*\
  !*** ./resources/js/composables/useCloseOnEscape.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useCloseOnEscape: () => (/* binding */ useCloseOnEscape)
/* harmony export */ });
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useEventListener */ "./resources/js/composables/useEventListener.js");


/**
 * Closes the modal when the escape key is pressed.
 * @param {() => void} callback
 */
function useCloseOnEscape(callback) {
  (0,_useEventListener__WEBPACK_IMPORTED_MODULE_0__.useEventListener)(document, 'keydown', function (event) {
    if (event.key === 'Escape') {
      callback();
    }
  });
}

/***/ }),

/***/ "./resources/js/composables/useDarkMode.js":
/*!*************************************************!*\
  !*** ./resources/js/composables/useDarkMode.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useDarkMode: () => (/* binding */ useDarkMode)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

function useDarkMode() {
  var observer = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(null);
  var dark = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    dark.value = document.documentElement.classList.contains('dark');
    observer.value = new MutationObserver(function (records) {
      records.forEach(function (record) {
        dark.value = record.target.classList.contains('dark');
      });
    });
    observer.value.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
      childList: false,
      characterData: false
    });
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onBeforeUnmount)(function () {
    observer.value.disconnect();
    observer.value = null;
  });
  return dark;
}

/***/ }),

/***/ "./resources/js/composables/useEventListener.js":
/*!******************************************************!*\
  !*** ./resources/js/composables/useEventListener.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useEventListener: () => (/* binding */ useEventListener)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


/**
 * @param {HTMLElement} element
 * @param {keyof HTMLElementEventMap} event
 * @param {(event: Event) => void} callback
 */
function useEventListener(element, event, callback) {
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onMounted)(function () {
    return element.addEventListener(event, callback);
  });
  (0,vue__WEBPACK_IMPORTED_MODULE_0__.onUnmounted)(function () {
    return element.removeEventListener(event, callback);
  });
}

/***/ }),

/***/ "./resources/js/config/constants.js":
/*!******************************************!*\
  !*** ./resources/js/config/constants.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOG_LEVELS: () => (/* binding */ LOG_LEVELS)
/* harmony export */ });
// @ts-check

/**
 * @type {import('../types').DropdownItem[]}
 */
var LOG_LEVELS = [{
  value: 'emergency',
  color: 'red',
  id: 1
}, {
  value: 'alert',
  color: 'red',
  id: 2
}, {
  value: 'critical',
  color: 'red',
  id: 3
}, {
  value: 'error',
  color: 'red',
  id: 4
}, {
  value: 'warning',
  color: 'yellow',
  id: 5
}, {
  value: 'notice',
  color: 'blue',
  id: 6
}, {
  value: 'info',
  color: 'blue',
  id: 7
}, {
  value: 'debug',
  color: 'blue',
  id: 8
}];

/***/ }),

/***/ "./resources/js/config/keys.js":
/*!*************************************!*\
  !*** ./resources/js/config/keys.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOG_LEVEL_INJECT_KEY: () => (/* binding */ LOG_LEVEL_INJECT_KEY),
/* harmony export */   SEARCH_INJECT_KEY: () => (/* binding */ SEARCH_INJECT_KEY)
/* harmony export */ });
var SEARCH_INJECT_KEY = Symbol('search');
var LOG_LEVEL_INJECT_KEY = Symbol('log-level');

/***/ }),

/***/ "./resources/js/tool.js":
/*!******************************!*\
  !*** ./resources/js/tool.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/constants */ "./resources/js/config/constants.js");
/* harmony import */ var _config_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/keys */ "./resources/js/config/keys.js");
/* harmony import */ var _pages_Tool__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Tool */ "./resources/js/pages/Tool.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_3__);




/**
 * @typedef {import('./types').DropdownItem} DropdownItem
 */

Nova.booting(function (app, store) {
  Nova.inertia('NovaLogify', _pages_Tool__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var search = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)('');
  var logLevels = (0,vue__WEBPACK_IMPORTED_MODULE_3__.ref)(_config_constants__WEBPACK_IMPORTED_MODULE_0__.LOG_LEVELS);
  var updateSearch = function updateSearch(value) {
    search.value = value;
  };

  /**
   *
   * @param {(val: DropdownItem[]) =>void} callback
   */
  var updateLogLevel = function updateLogLevel(callback) {
    callback(logLevels);
  };
  app.provide(_config_keys__WEBPACK_IMPORTED_MODULE_1__.SEARCH_INJECT_KEY, {
    search: (0,vue__WEBPACK_IMPORTED_MODULE_3__.readonly)(search),
    updateSearch: updateSearch
  });
  app.provide(_config_keys__WEBPACK_IMPORTED_MODULE_1__.LOG_LEVEL_INJECT_KEY, {
    logLevels: (0,vue__WEBPACK_IMPORTED_MODULE_3__.readonly)(logLevels),
    updateLogLevel: updateLogLevel
  });
});

/***/ }),

/***/ "./resources/css/tool.css":
/*!********************************!*\
  !*** ./resources/css/tool.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./resources/js/components/ActionMenu.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ActionMenu.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ActionMenu_vue_vue_type_template_id_6cc046e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionMenu.vue?vue&type=template&id=6cc046e0 */ "./resources/js/components/ActionMenu.vue?vue&type=template&id=6cc046e0");
/* harmony import */ var _ActionMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ActionMenu.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/ActionMenu.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_giga_projets_so_many_logify_nova_components_NovaLogify_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_giga_projets_so_many_logify_nova_components_NovaLogify_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_ActionMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_ActionMenu_vue_vue_type_template_id_6cc046e0__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/ActionMenu.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/Filters.vue":
/*!*********************************************!*\
  !*** ./resources/js/components/Filters.vue ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Filters_vue_vue_type_template_id_b9055040__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filters.vue?vue&type=template&id=b9055040 */ "./resources/js/components/Filters.vue?vue&type=template&id=b9055040");
/* harmony import */ var _Filters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Filters.vue?vue&type=script&setup=true&lang=js */ "./resources/js/components/Filters.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_giga_projets_so_many_logify_nova_components_NovaLogify_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_giga_projets_so_many_logify_nova_components_NovaLogify_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Filters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Filters_vue_vue_type_template_id_b9055040__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/components/Filters.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/pages/Tool.vue":
/*!*************************************!*\
  !*** ./resources/js/pages/Tool.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tool.vue?vue&type=template&id=ef10eebe */ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");
/* harmony import */ var _Tool_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tool.vue?vue&type=script&setup=true&lang=js */ "./resources/js/pages/Tool.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_giga_projets_so_many_logify_nova_components_NovaLogify_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_giga_projets_so_many_logify_nova_components_NovaLogify_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Tool_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/pages/Tool.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/components/ActionMenu.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/ActionMenu.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionMenu_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActionMenu.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionMenu.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/Filters.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Filters.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filters.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filters.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/components/ActionMenu.vue?vue&type=template&id=6cc046e0":
/*!******************************************************************************!*\
  !*** ./resources/js/components/ActionMenu.vue?vue&type=template&id=6cc046e0 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionMenu_vue_vue_type_template_id_6cc046e0__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_ActionMenu_vue_vue_type_template_id_6cc046e0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./ActionMenu.vue?vue&type=template&id=6cc046e0 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/ActionMenu.vue?vue&type=template&id=6cc046e0");


/***/ }),

/***/ "./resources/js/components/Filters.vue?vue&type=template&id=b9055040":
/*!***************************************************************************!*\
  !*** ./resources/js/components/Filters.vue?vue&type=template&id=b9055040 ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_template_id_b9055040__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Filters_vue_vue_type_template_id_b9055040__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Filters.vue?vue&type=template&id=b9055040 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/components/Filters.vue?vue&type=template&id=b9055040");


/***/ }),

/***/ "./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe":
/*!*******************************************************************!*\
  !*** ./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Tool_vue_vue_type_template_id_ef10eebe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Tool.vue?vue&type=template&id=ef10eebe */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/pages/Tool.vue?vue&type=template&id=ef10eebe");


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

module.exports = Vue;

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/tool": 0,
/******/ 			"css/tool": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkso_many_nova_logify"] = self["webpackChunkso_many_nova_logify"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/js/tool.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/tool"], () => (__webpack_require__("./resources/css/tool.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;