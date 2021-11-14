'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var Portal = require('@reach/portal');
var React = require('react');
var fastEquals = require('fast-equals');
var reactVirtual = require('react-virtual');
var matchSorter = require('match-sorter');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var Portal__default = /*#__PURE__*/_interopDefaultLegacy(Portal);
var React__namespace = /*#__PURE__*/_interopNamespace(React);

exports.VisualState = void 0;

(function (VisualState) {
  VisualState["animatingIn"] = "animating-in";
  VisualState["showing"] = "showing";
  VisualState["animatingOut"] = "animating-out";
  VisualState["hidden"] = "hidden";
})(exports.VisualState || (exports.VisualState = {}));

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

var ActionImpl = function () {
  function ActionImpl(action) {
    var _this$parent;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, ActionImpl);

    _defineProperty(this, "children", []);

    this.id = action.id;
    this.name = action.name;
    this.shortcut = action.shortcut;
    this.keywords = action.keywords;
    this.perform = action.perform;
    this.section = action.section;
    this.icon = action.icon;
    this.subtitle = action.subtitle;
    this.parent = options.parent;

    if (options.parent) {
      options.parent.addChild(this);
    }

    if ((_this$parent = this.parent) !== null && _this$parent !== void 0 && _this$parent.section && !this.section) {
      this.section = this.parent.section;
    }
  }

  _createClass(ActionImpl, [{
    key: "addChild",
    value: function addChild(action) {
      if (!this.children.find(function (child) {
        return child === action;
      })) {
        if (!action.section && this.section) {
          action.section = this.section;
        }

        this.children.push(action);
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(action) {
      var index = this.children.findIndex(function (a) {
        return a === action;
      });
      if (index === -1) return;
      this.children = [].concat(_toConsumableArray(this.children.slice(0, index)), _toConsumableArray(this.children.slice(index + 1)));
    }
  }], [{
    key: "fromJSON",
    value: function fromJSON(action) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return new ActionImpl(action, options);
    }
  }]);

  return ActionImpl;
}();

var ActionInterface = function () {
  function ActionInterface() {
    var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    _classCallCheck(this, ActionInterface);

    _defineProperty(this, "actions", {});

    this.actions = this.add(actions);
  }

  _createClass(ActionInterface, [{
    key: "add",
    value: function add(actions) {
      var _this = this;

      var actionsByKey = actions.reduce(function (acc, curr) {
        acc[curr.id] = curr;
        return acc;
      }, {});
      actions.forEach(function (action) {
        if (_this.actions[action.id]) return;
        var orderedActions = [action];
        var parent = action.parent;

        while (parent) {
          var _actionsByKey$parent;

          if (!_this.actions[parent]) {
            orderedActions.push(actionsByKey[parent]);
          }

          parent = (_actionsByKey$parent = actionsByKey[parent]) === null || _actionsByKey$parent === void 0 ? void 0 : _actionsByKey$parent.parent;
        }

        while (orderedActions.length) {
          var _action = orderedActions.pop();

          if (!_action) return;

          var _parent = _action.parent ? _this.actions[_action.parent] : undefined;

          _this.actions[_action.id] = ActionImpl.fromJSON(_action, {
            parent: _parent
          });

          if (_parent) {
            _parent.addChild(_this.actions[_action.id]);
          }
        }
      });
      return _objectSpread2({}, this.actions);
    }
  }, {
    key: "remove",
    value: function remove(actions) {
      var _this2 = this;

      actions.forEach(function (action) {
        var actionImpl = _this2.actions[action.id];
        if (!actionImpl) return;
        var children = actionImpl.children;

        while (children.length) {
          var child = children.pop();
          delete _this2.actions[child.id];

          if (child.children) {
            children.push.apply(children, _toConsumableArray(child.children));
          }
        }

        if (actionImpl.parent) {
          actionImpl.parent.removeChild(actionImpl);
        }

        delete _this2.actions[actionImpl.id];
      });
      return _objectSpread2({}, this.actions);
    }
  }]);

  return ActionInterface;
}();

function useStore(props) {
  if (!props.actions) {
    throw new Error("You must define a list of `actions` when calling KBarProvider");
  }

  var actionsInterface = React__namespace.useMemo(function () {
    return new ActionInterface(props.actions);
  }, []);

  var _React$useState = React__namespace.useState({
    searchQuery: "",
    currentRootActionId: null,
    visualState: exports.VisualState.hidden,
    actions: _objectSpread2({}, actionsInterface.actions),
    activeIndex: 0
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var currState = React__namespace.useRef(state);
  currState.current = state;
  var getState = React__namespace.useCallback(function () {
    return currState.current;
  }, []);
  var publisher = React__namespace.useMemo(function () {
    return new Publisher(getState);
  }, [getState]);
  React__namespace.useEffect(function () {
    currState.current = state;
    publisher.notify();
  }, [state, publisher]);
  var optionsRef = React__namespace.useRef(_objectSpread2({
    animations: {
      enterMs: 200,
      exitMs: 100
    }
  }, props.options));
  var registerActions = React__namespace.useCallback(function (actions) {
    setState(function (state) {
      return _objectSpread2(_objectSpread2({}, state), {}, {
        actions: actionsInterface.add(actions)
      });
    });
    return function unregister() {
      setState(function (state) {
        return _objectSpread2(_objectSpread2({}, state), {}, {
          actions: actionsInterface.remove(actions)
        });
      });
    };
  }, [actionsInterface]);
  return React__namespace.useMemo(function () {
    return {
      getState: getState,
      query: {
        setCurrentRootAction: function setCurrentRootAction(actionId) {
          setState(function (state) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              currentRootActionId: actionId
            });
          });
        },
        setVisualState: function setVisualState(cb) {
          setState(function (state) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              visualState: typeof cb === "function" ? cb(state.visualState) : cb
            });
          });
        },
        setSearch: function setSearch(searchQuery) {
          return setState(function (state) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              searchQuery: searchQuery
            });
          });
        },
        toggle: function toggle() {
          var visualState = [exports.VisualState.animatingOut, exports.VisualState.hidden].includes(state.visualState) ? exports.VisualState.animatingIn : exports.VisualState.animatingOut;
          setState(function (state) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              visualState: visualState
            });
          });
          return visualState;
        },
        registerActions: registerActions,
        setActiveIndex: function setActiveIndex(cb) {
          return setState(function (state) {
            return _objectSpread2(_objectSpread2({}, state), {}, {
              activeIndex: typeof cb === "number" ? cb : cb(state.activeIndex)
            });
          });
        }
      },
      options: optionsRef.current,
      subscribe: function subscribe(collector, cb) {
        return publisher.subscribe(collector, cb);
      }
    };
  }, [getState, publisher, registerActions]);
}

var Publisher = function () {
  function Publisher(getState) {
    _classCallCheck(this, Publisher);

    _defineProperty(this, "subscribers", []);

    this.getState = getState;
  }

  _createClass(Publisher, [{
    key: "subscribe",
    value: function subscribe(collector, onChange) {
      var _this = this;

      var subscriber = new Subscriber(function () {
        return collector(_this.getState());
      }, onChange);
      this.subscribers.push(subscriber);
      return this.unsubscribe.bind(this, subscriber);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(subscriber) {
      if (this.subscribers.length) {
        var index = this.subscribers.indexOf(subscriber);

        if (index > -1) {
          return this.subscribers.splice(index, 1);
        }
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      this.subscribers.forEach(function (subscriber) {
        return subscriber.collect();
      });
    }
  }]);

  return Publisher;
}();

var Subscriber = function () {
  function Subscriber(collector, onChange) {
    _classCallCheck(this, Subscriber);

    this.collector = collector;
    this.onChange = onChange;
  }

  _createClass(Subscriber, [{
    key: "collect",
    value: function collect() {
      try {
        var recollect = this.collector();

        if (!fastEquals.deepEqual(recollect, this.collected)) {
          this.collected = recollect;

          if (this.onChange) {
            this.onChange(this.collected);
          }
        }
      } catch (error) {
        console.warn(error);
      }
    }
  }]);

  return Subscriber;
}();

function useOuterClick(dom, cb) {
  var cbRef = React__namespace.useRef(cb);
  cbRef.current = cb;
  React__namespace.useEffect(function () {
    function handleMouseDown(event) {
      var _dom$current;

      if ((_dom$current = dom.current) !== null && _dom$current !== void 0 && _dom$current.contains(event.target)) {
        return;
      }

      cbRef.current();
    }

    window.addEventListener("mousedown", handleMouseDown);
    return function () {
      return window.removeEventListener("mousedown", handleMouseDown);
    };
  }, [dom]);
}
function usePointerMovedSinceMount() {
  var _React$useState = React__namespace.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      moved = _React$useState2[0],
      setMoved = _React$useState2[1];

  React__namespace.useEffect(function () {
    function handler() {
      setMoved(true);
    }

    if (!moved) {
      window.addEventListener("pointermove", handler);
      return function () {
        return window.removeEventListener("pointermove", handler);
      };
    }
  }, [moved]);
  return moved;
}
function randomId() {
  return Math.random().toString(36).substring(2, 9);
}
function createAction(params) {
  return _objectSpread2({
    id: randomId()
  }, params);
}
function getScrollbarWidth() {
  var outer = document.createElement("div");
  outer.style.visibility = "hidden";
  outer.style.overflow = "scroll";
  document.body.appendChild(outer);
  var inner = document.createElement("div");
  outer.appendChild(inner);
  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}
function useThrottledValue(value) {
  var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

  var _React$useState3 = React__namespace.useState(value),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      throttledValue = _React$useState4[0],
      setThrottledValue = _React$useState4[1];

  var lastRan = React__namespace.useRef(Date.now());
  React__namespace.useEffect(function () {
    var timeout = setTimeout(function () {
      setThrottledValue(value);
      lastRan.current = Date.now();
    }, lastRan.current - (Date.now() - ms));
    return function () {
      clearTimeout(timeout);
    };
  }, [ms, value]);
  return throttledValue;
}

function InternalEvents() {
  useToggleHandler();
  useDocumentLock();
  useShortcuts();
  useFocusHandler();
  return null;
}

function useToggleHandler() {
  var _options$animations3, _options$animations4;

  var _useKBar = useKBar(function (state) {
    return {
      visualState: state.visualState,
      showing: state.visualState !== exports.VisualState.hidden
    };
  }),
      query = _useKBar.query,
      options = _useKBar.options,
      visualState = _useKBar.visualState,
      showing = _useKBar.showing;

  React__namespace.useEffect(function () {
    function handleKeyDown(event) {
      if ((event.metaKey || event.ctrlKey) && event.key === "k" && event.defaultPrevented === false) {
        event.preventDefault();
        query.toggle();

        if (showing) {
          var _options$callbacks, _options$callbacks$on;

          (_options$callbacks = options.callbacks) === null || _options$callbacks === void 0 ? void 0 : (_options$callbacks$on = _options$callbacks.onClose) === null || _options$callbacks$on === void 0 ? void 0 : _options$callbacks$on.call(_options$callbacks);
        } else {
          var _options$callbacks2, _options$callbacks2$o;

          (_options$callbacks2 = options.callbacks) === null || _options$callbacks2 === void 0 ? void 0 : (_options$callbacks2$o = _options$callbacks2.onOpen) === null || _options$callbacks2$o === void 0 ? void 0 : _options$callbacks2$o.call(_options$callbacks2);
        }
      }

      if (event.key === "Escape") {
        if (showing) {
          var _options$callbacks3, _options$callbacks3$o;

          event.stopPropagation();
          (_options$callbacks3 = options.callbacks) === null || _options$callbacks3 === void 0 ? void 0 : (_options$callbacks3$o = _options$callbacks3.onClose) === null || _options$callbacks3$o === void 0 ? void 0 : _options$callbacks3$o.call(_options$callbacks3);
        }

        query.setVisualState(function (vs) {
          if (vs === exports.VisualState.hidden || vs === exports.VisualState.animatingOut) {
            return vs;
          }

          return exports.VisualState.animatingOut;
        });
      }
    }

    window.addEventListener("keydown", handleKeyDown, true);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [options.callbacks, query, showing]);
  var timeoutRef = React__namespace.useRef();
  var runAnimateTimer = React__namespace.useCallback(function (vs) {
    var ms = 0;

    if (vs === exports.VisualState.animatingIn) {
      var _options$animations;

      ms = ((_options$animations = options.animations) === null || _options$animations === void 0 ? void 0 : _options$animations.enterMs) || 0;
    }

    if (vs === exports.VisualState.animatingOut) {
      var _options$animations2;

      ms = ((_options$animations2 = options.animations) === null || _options$animations2 === void 0 ? void 0 : _options$animations2.exitMs) || 0;
    }

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(function () {
      var backToRoot = false;
      query.setVisualState(function () {
        var finalVs = vs === exports.VisualState.animatingIn ? exports.VisualState.showing : exports.VisualState.hidden;

        if (finalVs === exports.VisualState.hidden) {
          backToRoot = true;
        }

        return finalVs;
      });

      if (backToRoot) {
        query.setCurrentRootAction(null);
      }
    }, ms);
  }, [(_options$animations3 = options.animations) === null || _options$animations3 === void 0 ? void 0 : _options$animations3.enterMs, (_options$animations4 = options.animations) === null || _options$animations4 === void 0 ? void 0 : _options$animations4.exitMs, query]);
  React__namespace.useEffect(function () {
    switch (visualState) {
      case exports.VisualState.animatingIn:
      case exports.VisualState.animatingOut:
        runAnimateTimer(visualState);
        break;
    }
  }, [runAnimateTimer, visualState]);
}

function useDocumentLock() {
  var _useKBar2 = useKBar(function (state) {
    return {
      visualState: state.visualState
    };
  }),
      visualState = _useKBar2.visualState,
      options = _useKBar2.options;

  React__namespace.useEffect(function () {
    if (visualState === exports.VisualState.animatingIn) {
      document.body.style.pointerEvents = "none";
      document.body.style.overflow = "hidden";

      if (!options.disableScrollbarManagement) {
        var scrollbarWidth = getScrollbarWidth();
        var mr = getComputedStyle(document.body)["margin-right"];

        if (mr) {
          scrollbarWidth += Number(mr.replace(/\D/g, ""));
        }

        document.body.style.marginRight = scrollbarWidth + "px";
      }
    } else if (visualState === exports.VisualState.hidden) {
      document.body.style.removeProperty("pointer-events");
      document.body.style.removeProperty("overflow");

      if (!options.disableScrollbarManagement) {
        document.body.style.removeProperty("margin-right");
      }
    }
  }, [options.disableScrollbarManagement, visualState]);
}

function useShortcuts() {
  var _useKBar3 = useKBar(function (state) {
    return {
      actions: state.actions
    };
  }),
      actions = _useKBar3.actions,
      query = _useKBar3.query;

  React__namespace.useEffect(function () {
    var actionsList = Object.keys(actions).map(function (key) {
      return actions[key];
    });
    var inputs = ["input", "select", "button", "textarea"];
    var buffer = [];
    var lastKeyStrokeTime = Date.now();

    function handleKeyDown(event) {
      var _event$key, _activeElement$attrib, _activeElement$attrib2;

      var key = (_event$key = event.key) === null || _event$key === void 0 ? void 0 : _event$key.toLowerCase();
      var activeElement = document.activeElement;
      var ignoreStrokes = activeElement && (inputs.indexOf(activeElement.tagName.toLowerCase()) !== -1 || ((_activeElement$attrib = activeElement.attributes.getNamedItem("role")) === null || _activeElement$attrib === void 0 ? void 0 : _activeElement$attrib.value) === "textbox" || ((_activeElement$attrib2 = activeElement.attributes.getNamedItem("contenteditable")) === null || _activeElement$attrib2 === void 0 ? void 0 : _activeElement$attrib2.value) === "true");

      if (ignoreStrokes || event.metaKey || key === "shift") {
        return;
      }

      var currentTime = Date.now();

      if (currentTime - lastKeyStrokeTime > 400) {
        buffer = [];
      }

      buffer.push(key);
      lastKeyStrokeTime = currentTime;
      var bufferString = buffer.join("");

      var _iterator = _createForOfIteratorHelper(actionsList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var action = _step.value;

          if (!action.shortcut) {
            continue;
          }

          if (action.shortcut.join("") === bufferString) {
            var _action$children;

            event.preventDefault();

            if ((_action$children = action.children) !== null && _action$children !== void 0 && _action$children.length) {
              query.setCurrentRootAction(action.id);
              query.toggle();
            } else {
              var _action$perform;

              (_action$perform = action.perform) === null || _action$perform === void 0 ? void 0 : _action$perform.call(action);
            }

            buffer = [];
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return function () {
      return window.removeEventListener("keydown", handleKeyDown);
    };
  }, [actions, query]);
}

function useFocusHandler() {
  var _useKBar4 = useKBar(function (state) {
    return {
      isShowing: state.visualState === exports.VisualState.showing || state.visualState === exports.VisualState.animatingIn
    };
  }),
      isShowing = _useKBar4.isShowing;

  var activeElementRef = React__namespace.useRef(null);
  React__namespace.useEffect(function () {
    if (isShowing) {
      activeElementRef.current = document.activeElement;
      return;
    }

    var currentActiveElement = document.activeElement;

    if ((currentActiveElement === null || currentActiveElement === void 0 ? void 0 : currentActiveElement.tagName.toLowerCase()) === "input") {
      currentActiveElement.blur();
    }

    var activeElement = activeElementRef.current;

    if (activeElement) {
      activeElement.focus();
    }
  }, [isShowing]);
}

var KBarContext = React__namespace.createContext({});
var KBarProvider = function KBarProvider(props) {
  var contextValue = useStore(props);
  return React__namespace.createElement(KBarContext.Provider, {
    value: contextValue
  }, React__namespace.createElement(InternalEvents, null), props.children);
};

function useKBar(collector) {
  var _React$useContext = React__namespace.useContext(KBarContext),
      query = _React$useContext.query,
      getState = _React$useContext.getState,
      subscribe = _React$useContext.subscribe,
      options = _React$useContext.options;

  var collected = React__namespace.useRef(collector === null || collector === void 0 ? void 0 : collector(getState()));
  var collectorRef = React__namespace.useRef(collector);
  var onCollect = React__namespace.useCallback(function (collected) {
    return _objectSpread2(_objectSpread2({}, collected), {}, {
      query: query,
      options: options
    });
  }, [query, options]);

  var _React$useState = React__namespace.useState(onCollect(collected.current)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      render = _React$useState2[0],
      setRender = _React$useState2[1];

  React__namespace.useEffect(function () {
    var unsubscribe;

    if (collectorRef.current) {
      unsubscribe = subscribe(function (current) {
        return collectorRef.current(current);
      }, function (collected) {
        return setRender(onCollect(collected));
      });
    }

    return function () {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, [onCollect, subscribe]);
  return render;
}

function KBarPortal(props) {
  var _useKBar = useKBar(function (state) {
    return {
      showing: state.visualState !== exports.VisualState.hidden
    };
  }),
      showing = _useKBar.showing;

  if (!showing) {
    return null;
  }

  return React__namespace.createElement(Portal__default["default"], null, props.children);
}

var defaultStyle = {
  position: "fixed",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "100%",
  inset: "0px",
  padding: "14vh 16px 16px"
};
function KBarPositioner(props) {
  return React__namespace.createElement("div", _extends({
    style: defaultStyle
  }, props), props.children);
}

var KBAR_LISTBOX = "kbar-listbox";
var getListboxItemId = function getListboxItemId(id) {
  return "kbar-listbox-item-".concat(id);
};
function KBarSearch(props) {
  var _useKBar = useKBar(function (state) {
    return {
      search: state.searchQuery,
      currentRootActionId: state.currentRootActionId,
      actions: state.actions,
      activeIndex: state.activeIndex,
      showing: state.visualState === exports.VisualState.showing
    };
  }),
      query = _useKBar.query,
      search = _useKBar.search,
      actions = _useKBar.actions,
      currentRootActionId = _useKBar.currentRootActionId,
      activeIndex = _useKBar.activeIndex,
      showing = _useKBar.showing,
      options = _useKBar.options;

  var ownRef = React__namespace.useRef(null);
  React__namespace.useEffect(function () {
    query.setSearch("");
    ownRef.current.focus();
    return function () {
      return query.setSearch("");
    };
  }, [currentRootActionId, query]);
  var placeholder = React__namespace.useMemo(function () {
    return currentRootActionId ? actions[currentRootActionId].name : "Type a command or search…";
  }, [actions, currentRootActionId]);
  return React__namespace.createElement("input", _extends({
    ref: ownRef,
    autoFocus: true,
    autoComplete: "off",
    role: "combobox",
    spellCheck: "false",
    "aria-expanded": showing,
    "aria-controls": KBAR_LISTBOX,
    "aria-activedescendant": getListboxItemId(activeIndex),
    value: search,
    placeholder: placeholder,
    onChange: function onChange(event) {
      var _props$onChange, _options$callbacks, _options$callbacks$on;

      (_props$onChange = props.onChange) === null || _props$onChange === void 0 ? void 0 : _props$onChange.call(props, event);
      query.setSearch(event.target.value);
      options === null || options === void 0 ? void 0 : (_options$callbacks = options.callbacks) === null || _options$callbacks === void 0 ? void 0 : (_options$callbacks$on = _options$callbacks.onQueryChange) === null || _options$callbacks$on === void 0 ? void 0 : _options$callbacks$on.call(_options$callbacks, event.target.value);
    },
    onKeyDown: function onKeyDown(event) {
      if (currentRootActionId && !search && event.key === "Backspace") {
        var parent = actions[currentRootActionId].parent;
        query.setCurrentRootAction(parent === null || parent === void 0 ? void 0 : parent.id);
      }
    }
  }, props));
}

var START_INDEX = 0;

var KBarResults = function KBarResults(props) {
  var activeRef = React__namespace.useRef(null);
  var parentRef = React__namespace.useRef(null);
  var itemsRef = React__namespace.useRef(props.items);
  itemsRef.current = props.items;
  var rowVirtualizer = reactVirtual.useVirtual({
    size: itemsRef.current.length,
    parentRef: parentRef
  });

  var _useKBar = useKBar(function (state) {
    return {
      search: state.searchQuery,
      currentRootActionId: state.currentRootActionId,
      activeIndex: state.activeIndex
    };
  }),
      query = _useKBar.query,
      search = _useKBar.search,
      currentRootActionId = _useKBar.currentRootActionId,
      activeIndex = _useKBar.activeIndex,
      options = _useKBar.options;

  React__namespace.useEffect(function () {
    var handler = function handler(event) {
      if (event.key === "ArrowUp" || event.ctrlKey && event.key === "p") {
        event.preventDefault();
        query.setActiveIndex(function (index) {
          var nextIndex = index > START_INDEX ? index - 1 : index;

          if (typeof itemsRef.current[nextIndex] === "string") {
            if (nextIndex === 0) return index;
            nextIndex -= 1;
          }

          return nextIndex;
        });
      } else if (event.key === "ArrowDown" || event.ctrlKey && event.key === "n") {
        event.preventDefault();
        query.setActiveIndex(function (index) {
          var nextIndex = index < itemsRef.current.length - 1 ? index + 1 : index;

          if (typeof itemsRef.current[nextIndex] === "string") {
            if (nextIndex === itemsRef.current.length - 1) return index;
            nextIndex += 1;
          }

          return nextIndex;
        });
      } else if (event.key === "Enter") {
        var _activeRef$current;

        event.preventDefault();
        (_activeRef$current = activeRef.current) === null || _activeRef$current === void 0 ? void 0 : _activeRef$current.click();
      }
    };

    window.addEventListener("keydown", handler);
    return function () {
      return window.removeEventListener("keydown", handler);
    };
  }, [query]);
  var scrollToIndex = rowVirtualizer.scrollToIndex;
  React__namespace.useEffect(function () {
    scrollToIndex(activeIndex, {
      align: activeIndex <= 1 ? "end" : "auto"
    });
  }, [activeIndex, scrollToIndex]);
  React__namespace.useEffect(function () {
    query.setActiveIndex(typeof props.items[START_INDEX] === "string" ? START_INDEX + 1 : START_INDEX);
  }, [search, currentRootActionId, props.items, query]);
  var execute = React__namespace.useCallback(function (item) {
    var _options$callbacks, _options$callbacks$on;

    if (typeof item === "string") return;

    if (item.perform) {
      item.perform();
      query.toggle();
    } else {
      query.setSearch("");
      query.setCurrentRootAction(item.id);
    }

    (_options$callbacks = options.callbacks) === null || _options$callbacks === void 0 ? void 0 : (_options$callbacks$on = _options$callbacks.onSelectAction) === null || _options$callbacks$on === void 0 ? void 0 : _options$callbacks$on.call(_options$callbacks, item);
  }, [query, options]);
  var pointerMoved = usePointerMovedSinceMount();
  return React__namespace.createElement("div", {
    ref: parentRef,
    style: {
      maxHeight: props.maxHeight || 400,
      overflow: "auto"
    }
  }, React__namespace.createElement("div", {
    role: "listbox",
    id: KBAR_LISTBOX,
    style: {
      height: "".concat(rowVirtualizer.totalSize, "px"),
      width: "100%",
      position: "relative"
    }
  }, rowVirtualizer.virtualItems.map(function (virtualRow) {
    var item = itemsRef.current[virtualRow.index];
    var handlers = typeof item !== "string" && {
      onPointerMove: function onPointerMove() {
        return pointerMoved && activeIndex !== virtualRow.index && query.setActiveIndex(virtualRow.index);
      },
      onPointerDown: function onPointerDown() {
        return query.setActiveIndex(virtualRow.index);
      },
      onClick: function onClick() {
        return execute(item);
      }
    };
    var active = virtualRow.index === activeIndex;
    return React__namespace.createElement("div", _extends({
      ref: active ? activeRef : null,
      id: getListboxItemId(virtualRow.index),
      role: "option",
      "aria-selected": active,
      key: virtualRow.index,
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        transform: "translateY(".concat(virtualRow.start, "px)")
      }
    }, handlers), React__namespace.cloneElement(props.onRender({
      item: item,
      active: active
    }), {
      ref: virtualRow.measureRef
    }));
  })));
};

function useRegisterActions(actions) {
  var dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useKBar = useKBar(),
      query = _useKBar.query;

  var actionsCache = React__namespace.useMemo(function () {
    return actions;
  }, dependencies);
  React__namespace.useEffect(function () {
    if (!actionsCache.length) {
      return;
    }

    var unregister = query.registerActions(actionsCache);
    return function () {
      unregister();
    };
  }, [query, actionsCache]);
}

var NO_GROUP$1 = "none";
function useMatches() {
  var _useKBar = useKBar(function (state) {
    return {
      actions: state.actions,
      search: state.searchQuery,
      rootActionId: state.currentRootActionId
    };
  }),
      actions = _useKBar.actions,
      search = _useKBar.search,
      rootActionId = _useKBar.rootActionId;

  var filtered = React__namespace.useMemo(function () {
    return Object.keys(actions).reduce(function (acc, actionId) {
      var _action$parent;

      var action = actions[actionId];

      if (!action.parent && !rootActionId) {
        acc[actionId] = action;
      }

      if (((_action$parent = action.parent) === null || _action$parent === void 0 ? void 0 : _action$parent.id) === rootActionId) {
        acc[actionId] = action;
      }

      return acc;
    }, {});
  }, [actions, rootActionId]);
  var matches = useInternalMatches$1(filtered, search);
  var groups = React__namespace.useMemo(function () {
    var groupMap = matches.reduce(function (acc, action) {
      var section = action.section || NO_GROUP$1;

      if (!acc[section]) {
        acc[section] = [];
      }

      acc[section].push(action);
      return acc;
    }, {});
    var groups = [];
    Object.keys(groupMap).forEach(function (name) {
      var actions = groupMap[name];
      groups.push({
        name: name,
        actions: actions
      });
    });
    return groups;
  }, [matches]);
  return groups;
}

function useInternalMatches$1(actions, search) {
  var throttled = useThrottled(search, 100);
  var list = React__namespace.useMemo(function () {
    return Object.keys(actions).map(function (key) {
      return actions[key];
    });
  }, [actions]);
  return React__namespace.useMemo(function () {
    return search.trim() === "" ? list : matchSorter.matchSorter(list, throttled, {
      keys: ["name", "keywords", "subtitle"]
    });
  }, [throttled, list]);
}

function useThrottled(value, ms) {
  var _React$useState = React__namespace.useState(value),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      throttled = _React$useState2[0],
      setThrottled = _React$useState2[1];

  var lastRan = React__namespace.useRef(Date.now());
  React__namespace.useEffect(function () {
    var timeout = setTimeout(function () {
      setThrottled(value);
      lastRan.current = Date.now();
    }, lastRan.current - (Date.now() - ms));
    return function () {
      return clearTimeout(timeout);
    };
  }, [ms, value]);
  return throttled;
}

var NO_GROUP = "none";
function useDeepMatches() {
  var _useKBar = useKBar(function (state) {
    return {
      search: state.searchQuery,
      actions: state.actions,
      rootActionId: state.currentRootActionId
    };
  }),
      search = _useKBar.search,
      actions = _useKBar.actions,
      rootActionId = _useKBar.rootActionId;

  var rootResults = React__namespace.useMemo(function () {
    return Object.keys(actions).reduce(function (acc, actionId) {
      var action = actions[actionId];

      if (!action.parent && !rootActionId) {
        acc.push(action);
      }

      if (action.parent && action.parent.id === rootActionId) {
        acc.push(action);
      }

      return acc;
    }, []);
  }, [actions, rootActionId]);
  var getDeepResults = React__namespace.useCallback(function (actions) {
    return function collectChildren(actions) {
      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _toConsumableArray(actions);

      for (var i = 0; i < actions.length; i++) {
        if (actions[i].children.length > 0) {
          all.push.apply(all, _toConsumableArray(actions[i].children));
          collectChildren(actions[i].children, all);
        }
      }

      return all;
    }(actions);
  }, []);
  var emptySearch = !search;
  var filtered = React__namespace.useMemo(function () {
    if (emptySearch) return rootResults;
    return getDeepResults(rootResults);
  }, [getDeepResults, rootResults, emptySearch]);
  var matches = useInternalMatches(filtered, search);
  var results = React__namespace.useMemo(function () {
    var groupMap = {};

    for (var i = 0; i < matches.length; i++) {
      var action = matches[i];
      var section = action.section || NO_GROUP;

      if (!groupMap[section]) {
        groupMap[section] = [];
      }

      groupMap[section].push(action);
    }

    var results = [];
    Object.keys(groupMap).forEach(function (name) {
      if (name !== NO_GROUP) results.push(name);
      var actions = groupMap[name];

      for (var _i = 0; _i < actions.length; _i++) {
        results.push(actions[_i]);
      }
    });
    return results;
  }, [matches]);
  var memoRootActionId = React__namespace.useMemo(function () {
    return rootActionId;
  }, [results]);
  return React__namespace.useMemo(function () {
    return {
      results: results,
      rootActionId: memoRootActionId
    };
  }, [memoRootActionId, results]);
}

function useInternalMatches(filtered, search) {
  var value = React__namespace.useMemo(function () {
    return {
      filtered: filtered,
      search: search
    };
  }, [filtered, search]);

  var _useThrottledValue = useThrottledValue(value),
      throttledFiltered = _useThrottledValue.filtered,
      throttledSearch = _useThrottledValue.search;

  return React__namespace.useMemo(function () {
    return throttledSearch.trim() === "" ? throttledFiltered : matchSorter.matchSorter(throttledFiltered, throttledSearch, {
      keys: ["name", "keywords", "subtitle"]
    });
  }, [throttledFiltered, throttledSearch]);
}

var appearanceAnimationKeyframes = [{
  opacity: 0,
  transform: "scale(.99)"
}, {
  opacity: 1,
  transform: "scale(1.01)"
}, {
  opacity: 1,
  transform: "scale(1)"
}];
var bumpAnimationKeyframes = [{
  transform: "scale(1)"
}, {
  transform: "scale(.98)"
}, {
  transform: "scale(1)"
}];
var KBarAnimator = function KBarAnimator(_ref) {
  var _options$animations, _options$animations2;

  var children = _ref.children,
      style = _ref.style,
      className = _ref.className;

  var _useKBar = useKBar(function (state) {
    return {
      visualState: state.visualState,
      currentRootActionId: state.currentRootActionId
    };
  }),
      visualState = _useKBar.visualState,
      currentRootActionId = _useKBar.currentRootActionId,
      query = _useKBar.query,
      options = _useKBar.options;

  var outerRef = React__namespace.useRef(null);
  var innerRef = React__namespace.useRef(null);
  var enterMs = (options === null || options === void 0 ? void 0 : (_options$animations = options.animations) === null || _options$animations === void 0 ? void 0 : _options$animations.enterMs) || 0;
  var exitMs = (options === null || options === void 0 ? void 0 : (_options$animations2 = options.animations) === null || _options$animations2 === void 0 ? void 0 : _options$animations2.exitMs) || 0;
  React__namespace.useEffect(function () {
    if (visualState === exports.VisualState.showing) {
      return;
    }

    var duration = visualState === exports.VisualState.animatingIn ? enterMs : exitMs;
    var element = outerRef.current;
    element === null || element === void 0 ? void 0 : element.animate(appearanceAnimationKeyframes, {
      duration: duration,
      easing: visualState === exports.VisualState.animatingOut ? "ease-in" : "ease-out",
      direction: visualState === exports.VisualState.animatingOut ? "reverse" : "normal",
      fill: "forwards"
    });
  }, [options, visualState, enterMs, exitMs]);
  var previousHeight = React__namespace.useRef();
  React__namespace.useEffect(function () {
    if (visualState === exports.VisualState.showing) {
      var outer = outerRef.current;
      var inner = innerRef.current;

      if (!outer || !inner) {
        return;
      }

      var ro = new ResizeObserver(function (entries) {
        var _iterator = _createForOfIteratorHelper(entries),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var entry = _step.value;
            var cr = entry.contentRect;

            if (!previousHeight.current) {
              previousHeight.current = cr.height;
            }

            outer.animate([{
              height: "".concat(previousHeight.current, "px")
            }, {
              height: "".concat(cr.height, "px")
            }], {
              duration: enterMs / 2,
              easing: "ease-out",
              fill: "forwards"
            });
            previousHeight.current = cr.height;
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
      ro.observe(inner);
      return function () {
        ro.unobserve(inner);
      };
    }
  }, [visualState, options, enterMs, exitMs]);
  var firstRender = React__namespace.useRef(true);
  React__namespace.useEffect(function () {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    var element = outerRef.current;

    if (element) {
      element.animate(bumpAnimationKeyframes, {
        duration: enterMs,
        easing: "ease-out"
      });
    }
  }, [currentRootActionId, enterMs]);
  useOuterClick(outerRef, function () {
    var _options$callbacks, _options$callbacks$on;

    query.setVisualState(exports.VisualState.animatingOut);
    (_options$callbacks = options.callbacks) === null || _options$callbacks === void 0 ? void 0 : (_options$callbacks$on = _options$callbacks.onClose) === null || _options$callbacks$on === void 0 ? void 0 : _options$callbacks$on.call(_options$callbacks);
  });
  return React__namespace.createElement("div", {
    ref: outerRef,
    style: _objectSpread2(_objectSpread2(_objectSpread2({}, appearanceAnimationKeyframes[0]), style), {}, {
      pointerEvents: "auto"
    }),
    className: className
  }, React__namespace.createElement("div", {
    ref: innerRef
  }, children));
};

exports.KBAR_LISTBOX = KBAR_LISTBOX;
exports.KBarAnimator = KBarAnimator;
exports.KBarContext = KBarContext;
exports.KBarPortal = KBarPortal;
exports.KBarPositioner = KBarPositioner;
exports.KBarProvider = KBarProvider;
exports.KBarResults = KBarResults;
exports.KBarSearch = KBarSearch;
exports.createAction = createAction;
exports.getListboxItemId = getListboxItemId;
exports.useDeepMatches = useDeepMatches;
exports.useKBar = useKBar;
exports.useMatches = useMatches;
exports.useRegisterActions = useRegisterActions;
