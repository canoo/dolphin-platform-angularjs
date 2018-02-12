(function(){function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}return e})()({1:[function(_dereq_,module,exports){
(function (global){
"use strict";

var _typeof4 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if ((typeof exports === "undefined" ? "undefined" : _typeof4(exports)) === "object" && typeof module !== "undefined") {
        module.exports = f();
    } else if (typeof define === "function" && define.amd) {
        define([], f);
    } else {
        var g;if (typeof window !== "undefined") {
            g = window;
        } else if (typeof global !== "undefined") {
            g = global;
        } else if (typeof self !== "undefined") {
            g = self;
        } else {
            g = this;
        }g.dolphin = f();
    }
})(function () {
    var define, module, exports;return function e(t, n, r) {
        function s(o, u) {
            if (!n[o]) {
                if (!t[o]) {
                    var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                    var n = t[o][1][e];return s(n ? n : e);
                }, l, l.exports, e, t, n, r);
            }return n[o].exports;
        }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
            s(r[o]);
        }return s;
    }({ 1: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('../modules/es6.object.to-string');
            _dereq_('../modules/es6.string.iterator');
            _dereq_('../modules/web.dom.iterable');
            _dereq_('../modules/es6.map');
            _dereq_('../modules/es7.map.to-json');
            module.exports = _dereq_('../modules/_core').Map;
        }, { "../modules/_core": 18, "../modules/es6.map": 72, "../modules/es6.object.to-string": 73, "../modules/es6.string.iterator": 76, "../modules/es7.map.to-json": 77, "../modules/web.dom.iterable": 79 }], 2: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('../modules/es6.object.to-string');
            _dereq_('../modules/es6.string.iterator');
            _dereq_('../modules/web.dom.iterable');
            _dereq_('../modules/es6.promise');
            module.exports = _dereq_('../modules/_core').Promise;
        }, { "../modules/_core": 18, "../modules/es6.object.to-string": 73, "../modules/es6.promise": 74, "../modules/es6.string.iterator": 76, "../modules/web.dom.iterable": 79 }], 3: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('../modules/es6.object.to-string');
            _dereq_('../modules/es6.string.iterator');
            _dereq_('../modules/web.dom.iterable');
            _dereq_('../modules/es6.set');
            _dereq_('../modules/es7.set.to-json');
            module.exports = _dereq_('../modules/_core').Set;
        }, { "../modules/_core": 18, "../modules/es6.object.to-string": 73, "../modules/es6.set": 75, "../modules/es6.string.iterator": 76, "../modules/es7.set.to-json": 78, "../modules/web.dom.iterable": 79 }], 4: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = function (it) {
                if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                return it;
            };
        }, {}], 5: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function () {/* empty */};
        }, {}], 6: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = function (it, Constructor, name, forbiddenField) {
                if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
                    throw TypeError(name + ': incorrect invocation!');
                }return it;
            };
        }, {}], 7: [function (_dereq_, module, exports) {
            'use strict';

            var isObject = _dereq_('./_is-object');
            module.exports = function (it) {
                if (!isObject(it)) throw TypeError(it + ' is not an object!');
                return it;
            };
        }, { "./_is-object": 36 }], 8: [function (_dereq_, module, exports) {
            'use strict';

            var forOf = _dereq_('./_for-of');

            module.exports = function (iter, ITERATOR) {
                var result = [];
                forOf(iter, false, result.push, result, ITERATOR);
                return result;
            };
        }, { "./_for-of": 26 }], 9: [function (_dereq_, module, exports) {
            'use strict';

            // false -> Array#indexOf
            // true  -> Array#includes

            var toIObject = _dereq_('./_to-iobject'),
                toLength = _dereq_('./_to-length'),
                toIndex = _dereq_('./_to-index');
            module.exports = function (IS_INCLUDES) {
                return function ($this, el, fromIndex) {
                    var O = toIObject($this),
                        length = toLength(O.length),
                        index = toIndex(fromIndex, length),
                        value;
                    // Array#includes uses SameValueZero equality algorithm
                    if (IS_INCLUDES && el != el) while (length > index) {
                        value = O[index++];
                        if (value != value) return true;
                        // Array#toIndex ignores holes, Array#includes - not
                    } else for (; length > index; index++) {
                        if (IS_INCLUDES || index in O) {
                            if (O[index] === el) return IS_INCLUDES || index || 0;
                        }
                    }return !IS_INCLUDES && -1;
                };
            };
        }, { "./_to-index": 62, "./_to-iobject": 64, "./_to-length": 65 }], 10: [function (_dereq_, module, exports) {
            'use strict';

            // 0 -> Array#forEach
            // 1 -> Array#map
            // 2 -> Array#filter
            // 3 -> Array#some
            // 4 -> Array#every
            // 5 -> Array#find
            // 6 -> Array#findIndex

            var ctx = _dereq_('./_ctx'),
                IObject = _dereq_('./_iobject'),
                toObject = _dereq_('./_to-object'),
                toLength = _dereq_('./_to-length'),
                asc = _dereq_('./_array-species-create');
            module.exports = function (TYPE, $create) {
                var IS_MAP = TYPE == 1,
                    IS_FILTER = TYPE == 2,
                    IS_SOME = TYPE == 3,
                    IS_EVERY = TYPE == 4,
                    IS_FIND_INDEX = TYPE == 6,
                    NO_HOLES = TYPE == 5 || IS_FIND_INDEX,
                    create = $create || asc;
                return function ($this, callbackfn, that) {
                    var O = toObject($this),
                        self = IObject(O),
                        f = ctx(callbackfn, that, 3),
                        length = toLength(self.length),
                        index = 0,
                        result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined,
                        val,
                        res;
                    for (; length > index; index++) {
                        if (NO_HOLES || index in self) {
                            val = self[index];
                            res = f(val, index, O);
                            if (TYPE) {
                                if (IS_MAP) result[index] = res; // map
                                else if (res) switch (TYPE) {
                                        case 3:
                                            return true; // some
                                        case 5:
                                            return val; // find
                                        case 6:
                                            return index; // findIndex
                                        case 2:
                                            result.push(val); // filter
                                    } else if (IS_EVERY) return false; // every
                            }
                        }
                    }return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
                };
            };
        }, { "./_array-species-create": 12, "./_ctx": 19, "./_iobject": 33, "./_to-length": 65, "./_to-object": 66 }], 11: [function (_dereq_, module, exports) {
            'use strict';

            var isObject = _dereq_('./_is-object'),
                isArray = _dereq_('./_is-array'),
                SPECIES = _dereq_('./_wks')('species');

            module.exports = function (original) {
                var C;
                if (isArray(original)) {
                    C = original.constructor;
                    // cross-realm fallback
                    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
                    if (isObject(C)) {
                        C = C[SPECIES];
                        if (C === null) C = undefined;
                    }
                }return C === undefined ? Array : C;
            };
        }, { "./_is-array": 35, "./_is-object": 36, "./_wks": 69 }], 12: [function (_dereq_, module, exports) {
            'use strict';

            // 9.4.2.3 ArraySpeciesCreate(originalArray, length)

            var speciesConstructor = _dereq_('./_array-species-constructor');

            module.exports = function (original, length) {
                return new (speciesConstructor(original))(length);
            };
        }, { "./_array-species-constructor": 11 }], 13: [function (_dereq_, module, exports) {
            'use strict';

            // getting tag from 19.1.3.6 Object.prototype.toString()

            var cof = _dereq_('./_cof'),
                TAG = _dereq_('./_wks')('toStringTag')
            // ES3 wrong here


            ,
                ARG = cof(function () {
                return arguments;
            }()) == 'Arguments';

            // fallback for IE11 Script Access Denied error
            var tryGet = function tryGet(it, key) {
                try {
                    return it[key];
                } catch (e) {/* empty */}
            };

            module.exports = function (it) {
                var O, T, B;
                return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                : ARG ? cof(O)
                // ES3 arguments fallback
                : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
            };
        }, { "./_cof": 14, "./_wks": 69 }], 14: [function (_dereq_, module, exports) {
            "use strict";

            var toString = {}.toString;

            module.exports = function (it) {
                return toString.call(it).slice(8, -1);
            };
        }, {}], 15: [function (_dereq_, module, exports) {
            'use strict';

            var dP = _dereq_('./_object-dp').f,
                create = _dereq_('./_object-create'),
                redefineAll = _dereq_('./_redefine-all'),
                ctx = _dereq_('./_ctx'),
                anInstance = _dereq_('./_an-instance'),
                defined = _dereq_('./_defined'),
                forOf = _dereq_('./_for-of'),
                $iterDefine = _dereq_('./_iter-define'),
                step = _dereq_('./_iter-step'),
                setSpecies = _dereq_('./_set-species'),
                DESCRIPTORS = _dereq_('./_descriptors'),
                fastKey = _dereq_('./_meta').fastKey,
                SIZE = DESCRIPTORS ? '_s' : 'size';

            var getEntry = function getEntry(that, key) {
                // fast case
                var index = fastKey(key),
                    entry;
                if (index !== 'F') return that._i[index];
                // frozen object case
                for (entry = that._f; entry; entry = entry.n) {
                    if (entry.k == key) return entry;
                }
            };

            module.exports = {
                getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
                    var C = wrapper(function (that, iterable) {
                        anInstance(that, C, NAME, '_i');
                        that._i = create(null); // index
                        that._f = undefined; // first entry
                        that._l = undefined; // last entry
                        that[SIZE] = 0; // size
                        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
                    });
                    redefineAll(C.prototype, {
                        // 23.1.3.1 Map.prototype.clear()
                        // 23.2.3.2 Set.prototype.clear()
                        clear: function clear() {
                            for (var that = this, data = that._i, entry = that._f; entry; entry = entry.n) {
                                entry.r = true;
                                if (entry.p) entry.p = entry.p.n = undefined;
                                delete data[entry.i];
                            }
                            that._f = that._l = undefined;
                            that[SIZE] = 0;
                        },
                        // 23.1.3.3 Map.prototype.delete(key)
                        // 23.2.3.4 Set.prototype.delete(value)
                        'delete': function _delete(key) {
                            var that = this,
                                entry = getEntry(that, key);
                            if (entry) {
                                var next = entry.n,
                                    prev = entry.p;
                                delete that._i[entry.i];
                                entry.r = true;
                                if (prev) prev.n = next;
                                if (next) next.p = prev;
                                if (that._f == entry) that._f = next;
                                if (that._l == entry) that._l = prev;
                                that[SIZE]--;
                            }return !!entry;
                        },
                        // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                        // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                        forEach: function forEach(callbackfn /*, that = undefined */) {
                            anInstance(this, C, 'forEach');
                            var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3),
                                entry;
                            while (entry = entry ? entry.n : this._f) {
                                f(entry.v, entry.k, this);
                                // revert to the last existing entry
                                while (entry && entry.r) {
                                    entry = entry.p;
                                }
                            }
                        },
                        // 23.1.3.7 Map.prototype.has(key)
                        // 23.2.3.7 Set.prototype.has(value)
                        has: function has(key) {
                            return !!getEntry(this, key);
                        }
                    });
                    if (DESCRIPTORS) dP(C.prototype, 'size', {
                        get: function get() {
                            return defined(this[SIZE]);
                        }
                    });
                    return C;
                },
                def: function def(that, key, value) {
                    var entry = getEntry(that, key),
                        prev,
                        index;
                    // change existing entry
                    if (entry) {
                        entry.v = value;
                        // create new entry
                    } else {
                        that._l = entry = {
                            i: index = fastKey(key, true), // <- index
                            k: key, // <- key
                            v: value, // <- value
                            p: prev = that._l, // <- previous entry
                            n: undefined, // <- next entry
                            r: false // <- removed
                        };
                        if (!that._f) that._f = entry;
                        if (prev) prev.n = entry;
                        that[SIZE]++;
                        // add to index
                        if (index !== 'F') that._i[index] = entry;
                    }return that;
                },
                getEntry: getEntry,
                setStrong: function setStrong(C, NAME, IS_MAP) {
                    // add .keys, .values, .entries, [@@iterator]
                    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                    $iterDefine(C, NAME, function (iterated, kind) {
                        this._t = iterated; // target
                        this._k = kind; // kind
                        this._l = undefined; // previous
                    }, function () {
                        var that = this,
                            kind = that._k,
                            entry = that._l;
                        // revert to the last existing entry
                        while (entry && entry.r) {
                            entry = entry.p;
                        } // get next entry
                        if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                            // or finish the iteration
                            that._t = undefined;
                            return step(1);
                        }
                        // return step by kind
                        if (kind == 'keys') return step(0, entry.k);
                        if (kind == 'values') return step(0, entry.v);
                        return step(0, [entry.k, entry.v]);
                    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

                    // add [@@species], 23.1.2.2, 23.2.2.2
                    setSpecies(NAME);
                }
            };
        }, { "./_an-instance": 6, "./_ctx": 19, "./_defined": 20, "./_descriptors": 21, "./_for-of": 26, "./_iter-define": 39, "./_iter-step": 41, "./_meta": 44, "./_object-create": 46, "./_object-dp": 47, "./_redefine-all": 53, "./_set-species": 55 }], 16: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON

            var classof = _dereq_('./_classof'),
                from = _dereq_('./_array-from-iterable');
            module.exports = function (NAME) {
                return function toJSON() {
                    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
                    return from(this);
                };
            };
        }, { "./_array-from-iterable": 8, "./_classof": 13 }], 17: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                $export = _dereq_('./_export'),
                meta = _dereq_('./_meta'),
                fails = _dereq_('./_fails'),
                hide = _dereq_('./_hide'),
                redefineAll = _dereq_('./_redefine-all'),
                forOf = _dereq_('./_for-of'),
                anInstance = _dereq_('./_an-instance'),
                isObject = _dereq_('./_is-object'),
                setToStringTag = _dereq_('./_set-to-string-tag'),
                dP = _dereq_('./_object-dp').f,
                each = _dereq_('./_array-methods')(0),
                DESCRIPTORS = _dereq_('./_descriptors');

            module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
                var Base = global[NAME],
                    C = Base,
                    ADDER = IS_MAP ? 'set' : 'add',
                    proto = C && C.prototype,
                    O = {};
                if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
                    new C().entries().next();
                }))) {
                    // create collection constructor
                    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                    redefineAll(C.prototype, methods);
                    meta.NEED = true;
                } else {
                    C = wrapper(function (target, iterable) {
                        anInstance(target, C, NAME, '_c');
                        target._c = new Base();
                        if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
                    });
                    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
                        var IS_ADDER = KEY == 'add' || KEY == 'set';
                        if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
                            anInstance(this, C, KEY);
                            if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
                            var result = this._c[KEY](a === 0 ? 0 : a, b);
                            return IS_ADDER ? this : result;
                        });
                    });
                    if ('size' in proto) dP(C.prototype, 'size', {
                        get: function get() {
                            return this._c.size;
                        }
                    });
                }

                setToStringTag(C, NAME);

                O[NAME] = C;
                $export($export.G + $export.W + $export.F, O);

                if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

                return C;
            };
        }, { "./_an-instance": 6, "./_array-methods": 10, "./_descriptors": 21, "./_export": 24, "./_fails": 25, "./_for-of": 26, "./_global": 27, "./_hide": 29, "./_is-object": 36, "./_meta": 44, "./_object-dp": 47, "./_redefine-all": 53, "./_set-to-string-tag": 56 }], 18: [function (_dereq_, module, exports) {
            'use strict';

            var core = module.exports = { version: '2.4.0' };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
        }, {}], 19: [function (_dereq_, module, exports) {
            'use strict';

            // optional / simple context binding

            var aFunction = _dereq_('./_a-function');
            module.exports = function (fn, that, length) {
                aFunction(fn);
                if (that === undefined) return fn;
                switch (length) {
                    case 1:
                        return function (a) {
                            return fn.call(that, a);
                        };
                    case 2:
                        return function (a, b) {
                            return fn.call(that, a, b);
                        };
                    case 3:
                        return function (a, b, c) {
                            return fn.call(that, a, b, c);
                        };
                }
                return function () /* ...args */{
                    return fn.apply(that, arguments);
                };
            };
        }, { "./_a-function": 4 }], 20: [function (_dereq_, module, exports) {
            "use strict";

            // 7.2.1 RequireObjectCoercible(argument)

            module.exports = function (it) {
                if (it == undefined) throw TypeError("Can't call method on  " + it);
                return it;
            };
        }, {}], 21: [function (_dereq_, module, exports) {
            'use strict';

            // Thank's IE8 for his funny defineProperty

            module.exports = !_dereq_('./_fails')(function () {
                return Object.defineProperty({}, 'a', { get: function get() {
                        return 7;
                    } }).a != 7;
            });
        }, { "./_fails": 25 }], 22: [function (_dereq_, module, exports) {
            'use strict';

            var isObject = _dereq_('./_is-object'),
                document = _dereq_('./_global').document
            // in old IE typeof document.createElement is 'object'


            ,
                is = isObject(document) && isObject(document.createElement);
            module.exports = function (it) {
                return is ? document.createElement(it) : {};
            };
        }, { "./_global": 27, "./_is-object": 36 }], 23: [function (_dereq_, module, exports) {
            'use strict';

            // IE 8- don't enum bug keys

            module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
        }, {}], 24: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                core = _dereq_('./_core'),
                ctx = _dereq_('./_ctx'),
                hide = _dereq_('./_hide'),
                PROTOTYPE = 'prototype';

            var $export = function $export(type, name, source) {
                var IS_FORCED = type & $export.F,
                    IS_GLOBAL = type & $export.G,
                    IS_STATIC = type & $export.S,
                    IS_PROTO = type & $export.P,
                    IS_BIND = type & $export.B,
                    IS_WRAP = type & $export.W,
                    exports = IS_GLOBAL ? core : core[name] || (core[name] = {}),
                    expProto = exports[PROTOTYPE],
                    target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE],
                    key,
                    own,
                    out;
                if (IS_GLOBAL) source = name;
                for (key in source) {
                    // contains in native
                    own = !IS_FORCED && target && target[key] !== undefined;
                    if (own && key in exports) continue;
                    // export native or passed
                    out = own ? target[key] : source[key];
                    // prevent global pollution for namespaces
                    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                    // bind timers to global for call from export context
                    : IS_BIND && own ? ctx(out, global)
                    // wrap global constructors for prevent change them in library
                    : IS_WRAP && target[key] == out ? function (C) {
                        var F = function F(a, b, c) {
                            if (this instanceof C) {
                                switch (arguments.length) {
                                    case 0:
                                        return new C();
                                    case 1:
                                        return new C(a);
                                    case 2:
                                        return new C(a, b);
                                }return new C(a, b, c);
                            }return C.apply(this, arguments);
                        };
                        F[PROTOTYPE] = C[PROTOTYPE];
                        return F;
                        // make static versions for prototype methods
                    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
                    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                    if (IS_PROTO) {
                        (exports.virtual || (exports.virtual = {}))[key] = out;
                        // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                        if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
                    }
                }
            };
            // type bitmap
            $export.F = 1; // forced
            $export.G = 2; // global
            $export.S = 4; // static
            $export.P = 8; // proto
            $export.B = 16; // bind
            $export.W = 32; // wrap
            $export.U = 64; // safe
            $export.R = 128; // real proto method for `library` 
            module.exports = $export;
        }, { "./_core": 18, "./_ctx": 19, "./_global": 27, "./_hide": 29 }], 25: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function (exec) {
                try {
                    return !!exec();
                } catch (e) {
                    return true;
                }
            };
        }, {}], 26: [function (_dereq_, module, exports) {
            'use strict';

            var ctx = _dereq_('./_ctx'),
                call = _dereq_('./_iter-call'),
                isArrayIter = _dereq_('./_is-array-iter'),
                anObject = _dereq_('./_an-object'),
                toLength = _dereq_('./_to-length'),
                getIterFn = _dereq_('./core.get-iterator-method'),
                BREAK = {},
                RETURN = {};
            var _exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function () {
                    return iterable;
                } : getIterFn(iterable),
                    f = ctx(fn, that, entries ? 2 : 1),
                    index = 0,
                    length,
                    step,
                    iterator,
                    result;
                if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
                // fast case for arrays with default iterator
                if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
                    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                    if (result === BREAK || result === RETURN) return result;
                } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                    result = call(iterator, f, step.value, entries);
                    if (result === BREAK || result === RETURN) return result;
                }
            };
            _exports.BREAK = BREAK;
            _exports.RETURN = RETURN;
        }, { "./_an-object": 7, "./_ctx": 19, "./_is-array-iter": 34, "./_iter-call": 37, "./_to-length": 65, "./core.get-iterator-method": 70 }], 27: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028

            var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
        }, {}], 28: [function (_dereq_, module, exports) {
            "use strict";

            var hasOwnProperty = {}.hasOwnProperty;
            module.exports = function (it, key) {
                return hasOwnProperty.call(it, key);
            };
        }, {}], 29: [function (_dereq_, module, exports) {
            'use strict';

            var dP = _dereq_('./_object-dp'),
                createDesc = _dereq_('./_property-desc');
            module.exports = _dereq_('./_descriptors') ? function (object, key, value) {
                return dP.f(object, key, createDesc(1, value));
            } : function (object, key, value) {
                object[key] = value;
                return object;
            };
        }, { "./_descriptors": 21, "./_object-dp": 47, "./_property-desc": 52 }], 30: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = _dereq_('./_global').document && document.documentElement;
        }, { "./_global": 27 }], 31: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = !_dereq_('./_descriptors') && !_dereq_('./_fails')(function () {
                return Object.defineProperty(_dereq_('./_dom-create')('div'), 'a', { get: function get() {
                        return 7;
                    } }).a != 7;
            });
        }, { "./_descriptors": 21, "./_dom-create": 22, "./_fails": 25 }], 32: [function (_dereq_, module, exports) {
            "use strict";

            // fast apply, http://jsperf.lnkit.com/fast-apply/5

            module.exports = function (fn, args, that) {
                var un = that === undefined;
                switch (args.length) {
                    case 0:
                        return un ? fn() : fn.call(that);
                    case 1:
                        return un ? fn(args[0]) : fn.call(that, args[0]);
                    case 2:
                        return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
                    case 3:
                        return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
                    case 4:
                        return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
                }return fn.apply(that, args);
            };
        }, {}], 33: [function (_dereq_, module, exports) {
            'use strict';

            // fallback for non-array-like ES3 and non-enumerable old V8 strings

            var cof = _dereq_('./_cof');
            module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                return cof(it) == 'String' ? it.split('') : Object(it);
            };
        }, { "./_cof": 14 }], 34: [function (_dereq_, module, exports) {
            'use strict';

            // check on default Array iterator

            var Iterators = _dereq_('./_iterators'),
                ITERATOR = _dereq_('./_wks')('iterator'),
                ArrayProto = Array.prototype;

            module.exports = function (it) {
                return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
            };
        }, { "./_iterators": 42, "./_wks": 69 }], 35: [function (_dereq_, module, exports) {
            'use strict';

            // 7.2.2 IsArray(argument)

            var cof = _dereq_('./_cof');
            module.exports = Array.isArray || function isArray(arg) {
                return cof(arg) == 'Array';
            };
        }, { "./_cof": 14 }], 36: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            };

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            module.exports = function (it) {
                return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
            };
        }, {}], 37: [function (_dereq_, module, exports) {
            'use strict';

            // call something on iterator step with safe closing on error

            var anObject = _dereq_('./_an-object');
            module.exports = function (iterator, fn, value, entries) {
                try {
                    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
                    // 7.4.6 IteratorClose(iterator, completion)
                } catch (e) {
                    var ret = iterator['return'];
                    if (ret !== undefined) anObject(ret.call(iterator));
                    throw e;
                }
            };
        }, { "./_an-object": 7 }], 38: [function (_dereq_, module, exports) {
            'use strict';

            var create = _dereq_('./_object-create'),
                descriptor = _dereq_('./_property-desc'),
                setToStringTag = _dereq_('./_set-to-string-tag'),
                IteratorPrototype = {};

            // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
            _dereq_('./_hide')(IteratorPrototype, _dereq_('./_wks')('iterator'), function () {
                return this;
            });

            module.exports = function (Constructor, NAME, next) {
                Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
                setToStringTag(Constructor, NAME + ' Iterator');
            };
        }, { "./_hide": 29, "./_object-create": 46, "./_property-desc": 52, "./_set-to-string-tag": 56, "./_wks": 69 }], 39: [function (_dereq_, module, exports) {
            'use strict';

            var LIBRARY = _dereq_('./_library'),
                $export = _dereq_('./_export'),
                redefine = _dereq_('./_redefine'),
                hide = _dereq_('./_hide'),
                has = _dereq_('./_has'),
                Iterators = _dereq_('./_iterators'),
                $iterCreate = _dereq_('./_iter-create'),
                setToStringTag = _dereq_('./_set-to-string-tag'),
                getPrototypeOf = _dereq_('./_object-gpo'),
                ITERATOR = _dereq_('./_wks')('iterator'),
                BUGGY = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`


            ,
                FF_ITERATOR = '@@iterator',
                KEYS = 'keys',
                VALUES = 'values';

            var returnThis = function returnThis() {
                return this;
            };

            module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                $iterCreate(Constructor, NAME, next);
                var getMethod = function getMethod(kind) {
                    if (!BUGGY && kind in proto) return proto[kind];
                    switch (kind) {
                        case KEYS:
                            return function keys() {
                                return new Constructor(this, kind);
                            };
                        case VALUES:
                            return function values() {
                                return new Constructor(this, kind);
                            };
                    }return function entries() {
                        return new Constructor(this, kind);
                    };
                };
                var TAG = NAME + ' Iterator',
                    DEF_VALUES = DEFAULT == VALUES,
                    VALUES_BUG = false,
                    proto = Base.prototype,
                    $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT],
                    $default = $native || getMethod(DEFAULT),
                    $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined,
                    $anyNative = NAME == 'Array' ? proto.entries || $native : $native,
                    methods,
                    key,
                    IteratorPrototype;
                // Fix native
                if ($anyNative) {
                    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
                    if (IteratorPrototype !== Object.prototype) {
                        // Set @@toStringTag to native iterators
                        setToStringTag(IteratorPrototype, TAG, true);
                        // fix for some old engines
                        if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
                    }
                }
                // fix Array#{values, @@iterator}.name in V8 / FF
                if (DEF_VALUES && $native && $native.name !== VALUES) {
                    VALUES_BUG = true;
                    $default = function values() {
                        return $native.call(this);
                    };
                }
                // Define iterator
                if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                    hide(proto, ITERATOR, $default);
                }
                // Plug for library
                Iterators[NAME] = $default;
                Iterators[TAG] = returnThis;
                if (DEFAULT) {
                    methods = {
                        values: DEF_VALUES ? $default : getMethod(VALUES),
                        keys: IS_SET ? $default : getMethod(KEYS),
                        entries: $entries
                    };
                    if (FORCED) for (key in methods) {
                        if (!(key in proto)) redefine(proto, key, methods[key]);
                    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
                }
                return methods;
            };
        }, { "./_export": 24, "./_has": 28, "./_hide": 29, "./_iter-create": 38, "./_iterators": 42, "./_library": 43, "./_object-gpo": 49, "./_redefine": 54, "./_set-to-string-tag": 56, "./_wks": 69 }], 40: [function (_dereq_, module, exports) {
            'use strict';

            var ITERATOR = _dereq_('./_wks')('iterator'),
                SAFE_CLOSING = false;

            try {
                var riter = [7][ITERATOR]();
                riter['return'] = function () {
                    SAFE_CLOSING = true;
                };
                Array.from(riter, function () {
                    throw 2;
                });
            } catch (e) {/* empty */}

            module.exports = function (exec, skipClosing) {
                if (!skipClosing && !SAFE_CLOSING) return false;
                var safe = false;
                try {
                    var arr = [7],
                        iter = arr[ITERATOR]();
                    iter.next = function () {
                        return { done: safe = true };
                    };
                    arr[ITERATOR] = function () {
                        return iter;
                    };
                    exec(arr);
                } catch (e) {/* empty */}
                return safe;
            };
        }, { "./_wks": 69 }], 41: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function (done, value) {
                return { value: value, done: !!done };
            };
        }, {}], 42: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = {};
        }, {}], 43: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = true;
        }, {}], 44: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            };

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var META = _dereq_('./_uid')('meta'),
                isObject = _dereq_('./_is-object'),
                has = _dereq_('./_has'),
                setDesc = _dereq_('./_object-dp').f,
                id = 0;
            var isExtensible = Object.isExtensible || function () {
                return true;
            };
            var FREEZE = !_dereq_('./_fails')(function () {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function setMeta(it) {
                setDesc(it, META, { value: {
                        i: 'O' + ++id, // object ID
                        w: {} // weak collections IDs
                    } });
            };
            var fastKey = function fastKey(it, create) {
                // return primitive with prefix
                if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return 'F';
                    // not necessary to add metadata
                    if (!create) return 'E';
                    // add missing metadata
                    setMeta(it);
                    // return object ID
                }return it[META].i;
            };
            var getWeak = function getWeak(it, create) {
                if (!has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                    if (!create) return false;
                    // add missing metadata
                    setMeta(it);
                    // return hash weak collections IDs
                }return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function onFreeze(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
                return it;
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            };
        }, { "./_fails": 25, "./_has": 28, "./_is-object": 36, "./_object-dp": 47, "./_uid": 68 }], 45: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                macrotask = _dereq_('./_task').set,
                Observer = global.MutationObserver || global.WebKitMutationObserver,
                process = global.process,
                Promise = global.Promise,
                isNode = _dereq_('./_cof')(process) == 'process';

            module.exports = function () {
                var head, last, notify;

                var flush = function flush() {
                    var parent, fn;
                    if (isNode && (parent = process.domain)) parent.exit();
                    while (head) {
                        fn = head.fn;
                        head = head.next;
                        try {
                            fn();
                        } catch (e) {
                            if (head) notify();else last = undefined;
                            throw e;
                        }
                    }last = undefined;
                    if (parent) parent.enter();
                };

                // Node.js
                if (isNode) {
                    notify = function notify() {
                        process.nextTick(flush);
                    };
                    // browsers with MutationObserver
                } else if (Observer) {
                    var toggle = true,
                        node = document.createTextNode('');
                    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
                    notify = function notify() {
                        node.data = toggle = !toggle;
                    };
                    // environments with maybe non-completely correct, but existent Promise
                } else if (Promise && Promise.resolve) {
                    var promise = Promise.resolve();
                    notify = function notify() {
                        promise.then(flush);
                    };
                    // for other environments - macrotask based on:
                    // - setImmediate
                    // - MessageChannel
                    // - window.postMessag
                    // - onreadystatechange
                    // - setTimeout
                } else {
                    notify = function notify() {
                        // strange IE + webpack dev server bug - use .call(global)
                        macrotask.call(global, flush);
                    };
                }

                return function (fn) {
                    var task = { fn: fn, next: undefined };
                    if (last) last.next = task;
                    if (!head) {
                        head = task;
                        notify();
                    }last = task;
                };
            };
        }, { "./_cof": 14, "./_global": 27, "./_task": 61 }], 46: [function (_dereq_, module, exports) {
            'use strict';

            // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])

            var anObject = _dereq_('./_an-object'),
                dPs = _dereq_('./_object-dps'),
                enumBugKeys = _dereq_('./_enum-bug-keys'),
                IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
                Empty = function Empty() {/* empty */},
                PROTOTYPE = 'prototype';

            // Create object with fake `null` prototype: use iframe Object with cleared prototype
            var _createDict = function createDict() {
                // Thrash, waste and sodomy: IE GC bug
                var iframe = _dereq_('./_dom-create')('iframe'),
                    i = enumBugKeys.length,
                    lt = '<',
                    gt = '>',
                    iframeDocument;
                iframe.style.display = 'none';
                _dereq_('./_html').appendChild(iframe);
                iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                // createDict = iframe.contentWindow.Object;
                // html.removeChild(iframe);
                iframeDocument = iframe.contentWindow.document;
                iframeDocument.open();
                iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                iframeDocument.close();
                _createDict = iframeDocument.F;
                while (i--) {
                    delete _createDict[PROTOTYPE][enumBugKeys[i]];
                }return _createDict();
            };

            module.exports = Object.create || function create(O, Properties) {
                var result;
                if (O !== null) {
                    Empty[PROTOTYPE] = anObject(O);
                    result = new Empty();
                    Empty[PROTOTYPE] = null;
                    // add "__proto__" for Object.getPrototypeOf polyfill
                    result[IE_PROTO] = O;
                } else result = _createDict();
                return Properties === undefined ? result : dPs(result, Properties);
            };
        }, { "./_an-object": 7, "./_dom-create": 22, "./_enum-bug-keys": 23, "./_html": 30, "./_object-dps": 48, "./_shared-key": 57 }], 47: [function (_dereq_, module, exports) {
            'use strict';

            var anObject = _dereq_('./_an-object'),
                IE8_DOM_DEFINE = _dereq_('./_ie8-dom-define'),
                toPrimitive = _dereq_('./_to-primitive'),
                dP = Object.defineProperty;

            exports.f = _dereq_('./_descriptors') ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                anObject(O);
                P = toPrimitive(P, true);
                anObject(Attributes);
                if (IE8_DOM_DEFINE) try {
                    return dP(O, P, Attributes);
                } catch (e) {/* empty */}
                if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                if ('value' in Attributes) O[P] = Attributes.value;
                return O;
            };
        }, { "./_an-object": 7, "./_descriptors": 21, "./_ie8-dom-define": 31, "./_to-primitive": 67 }], 48: [function (_dereq_, module, exports) {
            'use strict';

            var dP = _dereq_('./_object-dp'),
                anObject = _dereq_('./_an-object'),
                getKeys = _dereq_('./_object-keys');

            module.exports = _dereq_('./_descriptors') ? Object.defineProperties : function defineProperties(O, Properties) {
                anObject(O);
                var keys = getKeys(Properties),
                    length = keys.length,
                    i = 0,
                    P;
                while (length > i) {
                    dP.f(O, P = keys[i++], Properties[P]);
                }return O;
            };
        }, { "./_an-object": 7, "./_descriptors": 21, "./_object-dp": 47, "./_object-keys": 51 }], 49: [function (_dereq_, module, exports) {
            'use strict';

            // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)

            var has = _dereq_('./_has'),
                toObject = _dereq_('./_to-object'),
                IE_PROTO = _dereq_('./_shared-key')('IE_PROTO'),
                ObjectProto = Object.prototype;

            module.exports = Object.getPrototypeOf || function (O) {
                O = toObject(O);
                if (has(O, IE_PROTO)) return O[IE_PROTO];
                if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                    return O.constructor.prototype;
                }return O instanceof Object ? ObjectProto : null;
            };
        }, { "./_has": 28, "./_shared-key": 57, "./_to-object": 66 }], 50: [function (_dereq_, module, exports) {
            'use strict';

            var has = _dereq_('./_has'),
                toIObject = _dereq_('./_to-iobject'),
                arrayIndexOf = _dereq_('./_array-includes')(false),
                IE_PROTO = _dereq_('./_shared-key')('IE_PROTO');

            module.exports = function (object, names) {
                var O = toIObject(object),
                    i = 0,
                    result = [],
                    key;
                for (key in O) {
                    if (key != IE_PROTO) has(O, key) && result.push(key);
                } // Don't enum bug & hidden keys
                while (names.length > i) {
                    if (has(O, key = names[i++])) {
                        ~arrayIndexOf(result, key) || result.push(key);
                    }
                }return result;
            };
        }, { "./_array-includes": 9, "./_has": 28, "./_shared-key": 57, "./_to-iobject": 64 }], 51: [function (_dereq_, module, exports) {
            'use strict';

            // 19.1.2.14 / 15.2.3.14 Object.keys(O)

            var $keys = _dereq_('./_object-keys-internal'),
                enumBugKeys = _dereq_('./_enum-bug-keys');

            module.exports = Object.keys || function keys(O) {
                return $keys(O, enumBugKeys);
            };
        }, { "./_enum-bug-keys": 23, "./_object-keys-internal": 50 }], 52: [function (_dereq_, module, exports) {
            "use strict";

            module.exports = function (bitmap, value) {
                return {
                    enumerable: !(bitmap & 1),
                    configurable: !(bitmap & 2),
                    writable: !(bitmap & 4),
                    value: value
                };
            };
        }, {}], 53: [function (_dereq_, module, exports) {
            'use strict';

            var hide = _dereq_('./_hide');
            module.exports = function (target, src, safe) {
                for (var key in src) {
                    if (safe && target[key]) target[key] = src[key];else hide(target, key, src[key]);
                }return target;
            };
        }, { "./_hide": 29 }], 54: [function (_dereq_, module, exports) {
            'use strict';

            module.exports = _dereq_('./_hide');
        }, { "./_hide": 29 }], 55: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                core = _dereq_('./_core'),
                dP = _dereq_('./_object-dp'),
                DESCRIPTORS = _dereq_('./_descriptors'),
                SPECIES = _dereq_('./_wks')('species');

            module.exports = function (KEY) {
                var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
                if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
                    configurable: true,
                    get: function get() {
                        return this;
                    }
                });
            };
        }, { "./_core": 18, "./_descriptors": 21, "./_global": 27, "./_object-dp": 47, "./_wks": 69 }], 56: [function (_dereq_, module, exports) {
            'use strict';

            var def = _dereq_('./_object-dp').f,
                has = _dereq_('./_has'),
                TAG = _dereq_('./_wks')('toStringTag');

            module.exports = function (it, tag, stat) {
                if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
            };
        }, { "./_has": 28, "./_object-dp": 47, "./_wks": 69 }], 57: [function (_dereq_, module, exports) {
            'use strict';

            var shared = _dereq_('./_shared')('keys'),
                uid = _dereq_('./_uid');
            module.exports = function (key) {
                return shared[key] || (shared[key] = uid(key));
            };
        }, { "./_shared": 58, "./_uid": 68 }], 58: [function (_dereq_, module, exports) {
            'use strict';

            var global = _dereq_('./_global'),
                SHARED = '__core-js_shared__',
                store = global[SHARED] || (global[SHARED] = {});
            module.exports = function (key) {
                return store[key] || (store[key] = {});
            };
        }, { "./_global": 27 }], 59: [function (_dereq_, module, exports) {
            'use strict';

            // 7.3.20 SpeciesConstructor(O, defaultConstructor)

            var anObject = _dereq_('./_an-object'),
                aFunction = _dereq_('./_a-function'),
                SPECIES = _dereq_('./_wks')('species');
            module.exports = function (O, D) {
                var C = anObject(O).constructor,
                    S;
                return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
            };
        }, { "./_a-function": 4, "./_an-object": 7, "./_wks": 69 }], 60: [function (_dereq_, module, exports) {
            'use strict';

            var toInteger = _dereq_('./_to-integer'),
                defined = _dereq_('./_defined');
            // true  -> String#at
            // false -> String#codePointAt
            module.exports = function (TO_STRING) {
                return function (that, pos) {
                    var s = String(defined(that)),
                        i = toInteger(pos),
                        l = s.length,
                        a,
                        b;
                    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                    a = s.charCodeAt(i);
                    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                };
            };
        }, { "./_defined": 20, "./_to-integer": 63 }], 61: [function (_dereq_, module, exports) {
            'use strict';

            var ctx = _dereq_('./_ctx'),
                invoke = _dereq_('./_invoke'),
                html = _dereq_('./_html'),
                cel = _dereq_('./_dom-create'),
                global = _dereq_('./_global'),
                process = global.process,
                setTask = global.setImmediate,
                clearTask = global.clearImmediate,
                MessageChannel = global.MessageChannel,
                counter = 0,
                queue = {},
                ONREADYSTATECHANGE = 'onreadystatechange',
                defer,
                channel,
                port;
            var run = function run() {
                var id = +this;
                if (queue.hasOwnProperty(id)) {
                    var fn = queue[id];
                    delete queue[id];
                    fn();
                }
            };
            var listener = function listener(event) {
                run.call(event.data);
            };
            // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
            if (!setTask || !clearTask) {
                setTask = function setImmediate(fn) {
                    var args = [],
                        i = 1;
                    while (arguments.length > i) {
                        args.push(arguments[i++]);
                    }queue[++counter] = function () {
                        invoke(typeof fn == 'function' ? fn : Function(fn), args);
                    };
                    defer(counter);
                    return counter;
                };
                clearTask = function clearImmediate(id) {
                    delete queue[id];
                };
                // Node.js 0.8-
                if (_dereq_('./_cof')(process) == 'process') {
                    defer = function defer(id) {
                        process.nextTick(ctx(run, id, 1));
                    };
                    // Browsers with MessageChannel, includes WebWorkers
                } else if (MessageChannel) {
                    channel = new MessageChannel();
                    port = channel.port2;
                    channel.port1.onmessage = listener;
                    defer = ctx(port.postMessage, port, 1);
                    // Browsers with postMessage, skip WebWorkers
                    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
                } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
                    defer = function defer(id) {
                        global.postMessage(id + '', '*');
                    };
                    global.addEventListener('message', listener, false);
                    // IE8-
                } else if (ONREADYSTATECHANGE in cel('script')) {
                    defer = function defer(id) {
                        html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
                            html.removeChild(this);
                            run.call(id);
                        };
                    };
                    // Rest old browsers
                } else {
                    defer = function defer(id) {
                        setTimeout(ctx(run, id, 1), 0);
                    };
                }
            }
            module.exports = {
                set: setTask,
                clear: clearTask
            };
        }, { "./_cof": 14, "./_ctx": 19, "./_dom-create": 22, "./_global": 27, "./_html": 30, "./_invoke": 32 }], 62: [function (_dereq_, module, exports) {
            'use strict';

            var toInteger = _dereq_('./_to-integer'),
                max = Math.max,
                min = Math.min;
            module.exports = function (index, length) {
                index = toInteger(index);
                return index < 0 ? max(index + length, 0) : min(index, length);
            };
        }, { "./_to-integer": 63 }], 63: [function (_dereq_, module, exports) {
            "use strict";

            // 7.1.4 ToInteger

            var ceil = Math.ceil,
                floor = Math.floor;
            module.exports = function (it) {
                return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
            };
        }, {}], 64: [function (_dereq_, module, exports) {
            'use strict';

            // to indexed object, toObject with fallback for non-array-like ES3 strings

            var IObject = _dereq_('./_iobject'),
                defined = _dereq_('./_defined');
            module.exports = function (it) {
                return IObject(defined(it));
            };
        }, { "./_defined": 20, "./_iobject": 33 }], 65: [function (_dereq_, module, exports) {
            'use strict';

            // 7.1.15 ToLength

            var toInteger = _dereq_('./_to-integer'),
                min = Math.min;
            module.exports = function (it) {
                return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
            };
        }, { "./_to-integer": 63 }], 66: [function (_dereq_, module, exports) {
            'use strict';

            // 7.1.13 ToObject(argument)

            var defined = _dereq_('./_defined');
            module.exports = function (it) {
                return Object(defined(it));
            };
        }, { "./_defined": 20 }], 67: [function (_dereq_, module, exports) {
            'use strict';

            // 7.1.1 ToPrimitive(input [, PreferredType])

            var isObject = _dereq_('./_is-object');
            // instead of the ES6 spec version, we didn't implement @@toPrimitive case
            // and the second argument - flag - preferred type is a string
            module.exports = function (it, S) {
                if (!isObject(it)) return it;
                var fn, val;
                if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
                if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
                throw TypeError("Can't convert object to primitive value");
            };
        }, { "./_is-object": 36 }], 68: [function (_dereq_, module, exports) {
            'use strict';

            var id = 0,
                px = Math.random();
            module.exports = function (key) {
                return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
            };
        }, {}], 69: [function (_dereq_, module, exports) {
            'use strict';

            var store = _dereq_('./_shared')('wks'),
                uid = _dereq_('./_uid'),
                _Symbol = _dereq_('./_global').Symbol,
                USE_SYMBOL = typeof _Symbol == 'function';

            var $exports = module.exports = function (name) {
                return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
            };

            $exports.store = store;
        }, { "./_global": 27, "./_shared": 58, "./_uid": 68 }], 70: [function (_dereq_, module, exports) {
            'use strict';

            var classof = _dereq_('./_classof'),
                ITERATOR = _dereq_('./_wks')('iterator'),
                Iterators = _dereq_('./_iterators');
            module.exports = _dereq_('./_core').getIteratorMethod = function (it) {
                if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
            };
        }, { "./_classof": 13, "./_core": 18, "./_iterators": 42, "./_wks": 69 }], 71: [function (_dereq_, module, exports) {
            'use strict';

            var addToUnscopables = _dereq_('./_add-to-unscopables'),
                step = _dereq_('./_iter-step'),
                Iterators = _dereq_('./_iterators'),
                toIObject = _dereq_('./_to-iobject');

            // 22.1.3.4 Array.prototype.entries()
            // 22.1.3.13 Array.prototype.keys()
            // 22.1.3.29 Array.prototype.values()
            // 22.1.3.30 Array.prototype[@@iterator]()
            module.exports = _dereq_('./_iter-define')(Array, 'Array', function (iterated, kind) {
                this._t = toIObject(iterated); // target
                this._i = 0; // next index
                this._k = kind; // kind
                // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
            }, function () {
                var O = this._t,
                    kind = this._k,
                    index = this._i++;
                if (!O || index >= O.length) {
                    this._t = undefined;
                    return step(1);
                }
                if (kind == 'keys') return step(0, index);
                if (kind == 'values') return step(0, O[index]);
                return step(0, [index, O[index]]);
            }, 'values');

            // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
            Iterators.Arguments = Iterators.Array;

            addToUnscopables('keys');
            addToUnscopables('values');
            addToUnscopables('entries');
        }, { "./_add-to-unscopables": 5, "./_iter-define": 39, "./_iter-step": 41, "./_iterators": 42, "./_to-iobject": 64 }], 72: [function (_dereq_, module, exports) {
            'use strict';

            var strong = _dereq_('./_collection-strong');

            // 23.1 Map Objects
            module.exports = _dereq_('./_collection')('Map', function (get) {
                return function Map() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                // 23.1.3.6 Map.prototype.get(key)
                get: function get(key) {
                    var entry = strong.getEntry(this, key);
                    return entry && entry.v;
                },
                // 23.1.3.9 Map.prototype.set(key, value)
                set: function set(key, value) {
                    return strong.def(this, key === 0 ? 0 : key, value);
                }
            }, strong, true);
        }, { "./_collection": 17, "./_collection-strong": 15 }], 73: [function (_dereq_, module, exports) {
            "use strict";
        }, {}], 74: [function (_dereq_, module, exports) {
            'use strict';

            var LIBRARY = _dereq_('./_library'),
                global = _dereq_('./_global'),
                ctx = _dereq_('./_ctx'),
                classof = _dereq_('./_classof'),
                $export = _dereq_('./_export'),
                isObject = _dereq_('./_is-object'),
                aFunction = _dereq_('./_a-function'),
                anInstance = _dereq_('./_an-instance'),
                forOf = _dereq_('./_for-of'),
                speciesConstructor = _dereq_('./_species-constructor'),
                task = _dereq_('./_task').set,
                microtask = _dereq_('./_microtask')(),
                PROMISE = 'Promise',
                TypeError = global.TypeError,
                process = global.process,
                $Promise = global[PROMISE],
                process = global.process,
                isNode = classof(process) == 'process',
                empty = function empty() {/* empty */},
                Internal,
                GenericPromiseCapability,
                Wrapper;

            var USE_NATIVE = !!function () {
                try {
                    // correct subclassing with @@species support
                    var promise = $Promise.resolve(1),
                        FakePromise = (promise.constructor = {})[_dereq_('./_wks')('species')] = function (exec) {
                        exec(empty, empty);
                    };
                    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
                    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
                } catch (e) {/* empty */}
            }();

            // helpers
            var sameConstructor = function sameConstructor(a, b) {
                // with library wrapper special case
                return a === b || a === $Promise && b === Wrapper;
            };
            var isThenable = function isThenable(it) {
                var then;
                return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
            };
            var newPromiseCapability = function newPromiseCapability(C) {
                return sameConstructor($Promise, C) ? new PromiseCapability(C) : new GenericPromiseCapability(C);
            };
            var PromiseCapability = GenericPromiseCapability = function GenericPromiseCapability(C) {
                var resolve, reject;
                this.promise = new C(function ($$resolve, $$reject) {
                    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
                    resolve = $$resolve;
                    reject = $$reject;
                });
                this.resolve = aFunction(resolve);
                this.reject = aFunction(reject);
            };
            var perform = function perform(exec) {
                try {
                    exec();
                } catch (e) {
                    return { error: e };
                }
            };
            var notify = function notify(promise, isReject) {
                if (promise._n) return;
                promise._n = true;
                var chain = promise._c;
                microtask(function () {
                    var value = promise._v,
                        ok = promise._s == 1,
                        i = 0;
                    var run = function run(reaction) {
                        var handler = ok ? reaction.ok : reaction.fail,
                            resolve = reaction.resolve,
                            reject = reaction.reject,
                            domain = reaction.domain,
                            result,
                            then;
                        try {
                            if (handler) {
                                if (!ok) {
                                    if (promise._h == 2) onHandleUnhandled(promise);
                                    promise._h = 1;
                                }
                                if (handler === true) result = value;else {
                                    if (domain) domain.enter();
                                    result = handler(value);
                                    if (domain) domain.exit();
                                }
                                if (result === reaction.promise) {
                                    reject(TypeError('Promise-chain cycle'));
                                } else if (then = isThenable(result)) {
                                    then.call(result, resolve, reject);
                                } else resolve(result);
                            } else reject(value);
                        } catch (e) {
                            reject(e);
                        }
                    };
                    while (chain.length > i) {
                        run(chain[i++]);
                    } // variable length - can't use forEach
                    promise._c = [];
                    promise._n = false;
                    if (isReject && !promise._h) onUnhandled(promise);
                });
            };
            var onUnhandled = function onUnhandled(promise) {
                task.call(global, function () {
                    var value = promise._v,
                        abrupt,
                        handler,
                        console;
                    if (isUnhandled(promise)) {
                        abrupt = perform(function () {
                            if (isNode) {
                                process.emit('unhandledRejection', value, promise);
                            } else if (handler = global.onunhandledrejection) {
                                handler({ promise: promise, reason: value });
                            } else if ((console = global.console) && console.error) {
                                console.error('Unhandled promise rejection', value);
                            }
                        });
                        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
                        promise._h = isNode || isUnhandled(promise) ? 2 : 1;
                    }promise._a = undefined;
                    if (abrupt) throw abrupt.error;
                });
            };
            var isUnhandled = function isUnhandled(promise) {
                if (promise._h == 1) return false;
                var chain = promise._a || promise._c,
                    i = 0,
                    reaction;
                while (chain.length > i) {
                    reaction = chain[i++];
                    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
                }return true;
            };
            var onHandleUnhandled = function onHandleUnhandled(promise) {
                task.call(global, function () {
                    var handler;
                    if (isNode) {
                        process.emit('rejectionHandled', promise);
                    } else if (handler = global.onrejectionhandled) {
                        handler({ promise: promise, reason: promise._v });
                    }
                });
            };
            var $reject = function $reject(value) {
                var promise = this;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise; // unwrap
                promise._v = value;
                promise._s = 2;
                if (!promise._a) promise._a = promise._c.slice();
                notify(promise, true);
            };
            var $resolve = function $resolve(value) {
                var promise = this,
                    then;
                if (promise._d) return;
                promise._d = true;
                promise = promise._w || promise; // unwrap
                try {
                    if (promise === value) throw TypeError("Promise can't be resolved itself");
                    if (then = isThenable(value)) {
                        microtask(function () {
                            var wrapper = { _w: promise, _d: false }; // wrap
                            try {
                                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
                            } catch (e) {
                                $reject.call(wrapper, e);
                            }
                        });
                    } else {
                        promise._v = value;
                        promise._s = 1;
                        notify(promise, false);
                    }
                } catch (e) {
                    $reject.call({ _w: promise, _d: false }, e); // wrap
                }
            };

            // constructor polyfill
            if (!USE_NATIVE) {
                // 25.4.3.1 Promise(executor)
                $Promise = function Promise(executor) {
                    anInstance(this, $Promise, PROMISE, '_h');
                    aFunction(executor);
                    Internal.call(this);
                    try {
                        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
                    } catch (err) {
                        $reject.call(this, err);
                    }
                };
                Internal = function Promise(executor) {
                    this._c = []; // <- awaiting reactions
                    this._a = undefined; // <- checked in isUnhandled reactions
                    this._s = 0; // <- state
                    this._d = false; // <- done
                    this._v = undefined; // <- value
                    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
                    this._n = false; // <- notify
                };
                Internal.prototype = _dereq_('./_redefine-all')($Promise.prototype, {
                    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
                    then: function then(onFulfilled, onRejected) {
                        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
                        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
                        reaction.fail = typeof onRejected == 'function' && onRejected;
                        reaction.domain = isNode ? process.domain : undefined;
                        this._c.push(reaction);
                        if (this._a) this._a.push(reaction);
                        if (this._s) notify(this, false);
                        return reaction.promise;
                    },
                    // 25.4.5.1 Promise.prototype.catch(onRejected)
                    'catch': function _catch(onRejected) {
                        return this.then(undefined, onRejected);
                    }
                });
                PromiseCapability = function PromiseCapability() {
                    var promise = new Internal();
                    this.promise = promise;
                    this.resolve = ctx($resolve, promise, 1);
                    this.reject = ctx($reject, promise, 1);
                };
            }

            $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
            _dereq_('./_set-to-string-tag')($Promise, PROMISE);
            _dereq_('./_set-species')(PROMISE);
            Wrapper = _dereq_('./_core')[PROMISE];

            // statics
            $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
                // 25.4.4.5 Promise.reject(r)
                reject: function reject(r) {
                    var capability = newPromiseCapability(this),
                        $$reject = capability.reject;
                    $$reject(r);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
                // 25.4.4.6 Promise.resolve(x)
                resolve: function resolve(x) {
                    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
                    if (x instanceof $Promise && sameConstructor(x.constructor, this)) return x;
                    var capability = newPromiseCapability(this),
                        $$resolve = capability.resolve;
                    $$resolve(x);
                    return capability.promise;
                }
            });
            $export($export.S + $export.F * !(USE_NATIVE && _dereq_('./_iter-detect')(function (iter) {
                $Promise.all(iter)['catch'](empty);
            })), PROMISE, {
                // 25.4.4.1 Promise.all(iterable)
                all: function all(iterable) {
                    var C = this,
                        capability = newPromiseCapability(C),
                        resolve = capability.resolve,
                        reject = capability.reject;
                    var abrupt = perform(function () {
                        var values = [],
                            index = 0,
                            remaining = 1;
                        forOf(iterable, false, function (promise) {
                            var $index = index++,
                                alreadyCalled = false;
                            values.push(undefined);
                            remaining++;
                            C.resolve(promise).then(function (value) {
                                if (alreadyCalled) return;
                                alreadyCalled = true;
                                values[$index] = value;
                                --remaining || resolve(values);
                            }, reject);
                        });
                        --remaining || resolve(values);
                    });
                    if (abrupt) reject(abrupt.error);
                    return capability.promise;
                },
                // 25.4.4.4 Promise.race(iterable)
                race: function race(iterable) {
                    var C = this,
                        capability = newPromiseCapability(C),
                        reject = capability.reject;
                    var abrupt = perform(function () {
                        forOf(iterable, false, function (promise) {
                            C.resolve(promise).then(capability.resolve, reject);
                        });
                    });
                    if (abrupt) reject(abrupt.error);
                    return capability.promise;
                }
            });
        }, { "./_a-function": 4, "./_an-instance": 6, "./_classof": 13, "./_core": 18, "./_ctx": 19, "./_export": 24, "./_for-of": 26, "./_global": 27, "./_is-object": 36, "./_iter-detect": 40, "./_library": 43, "./_microtask": 45, "./_redefine-all": 53, "./_set-species": 55, "./_set-to-string-tag": 56, "./_species-constructor": 59, "./_task": 61, "./_wks": 69 }], 75: [function (_dereq_, module, exports) {
            'use strict';

            var strong = _dereq_('./_collection-strong');

            // 23.2 Set Objects
            module.exports = _dereq_('./_collection')('Set', function (get) {
                return function Set() {
                    return get(this, arguments.length > 0 ? arguments[0] : undefined);
                };
            }, {
                // 23.2.3.1 Set.prototype.add(value)
                add: function add(value) {
                    return strong.def(this, value = value === 0 ? 0 : value, value);
                }
            }, strong);
        }, { "./_collection": 17, "./_collection-strong": 15 }], 76: [function (_dereq_, module, exports) {
            'use strict';

            var $at = _dereq_('./_string-at')(true);

            // 21.1.3.27 String.prototype[@@iterator]()
            _dereq_('./_iter-define')(String, 'String', function (iterated) {
                this._t = String(iterated); // target
                this._i = 0; // next index
                // 21.1.5.2.1 %StringIteratorPrototype%.next()
            }, function () {
                var O = this._t,
                    index = this._i,
                    point;
                if (index >= O.length) return { value: undefined, done: true };
                point = $at(O, index);
                this._i += point.length;
                return { value: point, done: false };
            });
        }, { "./_iter-define": 39, "./_string-at": 60 }], 77: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON

            var $export = _dereq_('./_export');

            $export($export.P + $export.R, 'Map', { toJSON: _dereq_('./_collection-to-json')('Map') });
        }, { "./_collection-to-json": 16, "./_export": 24 }], 78: [function (_dereq_, module, exports) {
            'use strict';

            // https://github.com/DavidBruant/Map-Set.prototype.toJSON

            var $export = _dereq_('./_export');

            $export($export.P + $export.R, 'Set', { toJSON: _dereq_('./_collection-to-json')('Set') });
        }, { "./_collection-to-json": 16, "./_export": 24 }], 79: [function (_dereq_, module, exports) {
            'use strict';

            _dereq_('./es6.array.iterator');
            var global = _dereq_('./_global'),
                hide = _dereq_('./_hide'),
                Iterators = _dereq_('./_iterators'),
                TO_STRING_TAG = _dereq_('./_wks')('toStringTag');

            for (var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++) {
                var NAME = collections[i],
                    Collection = global[NAME],
                    proto = Collection && Collection.prototype;
                if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
                Iterators[NAME] = Iterators.Array;
            }
        }, { "./_global": 27, "./_hide": 29, "./_iterators": 42, "./_wks": 69, "./es6.array.iterator": 71 }], 80: [function (_dereq_, module, exports) {

            /**
             * Expose `Emitter`.
             */

            module.exports = Emitter;

            /**
             * Initialize a new `Emitter`.
             *
             * @api public
             */

            function Emitter(obj) {
                if (obj) return mixin(obj);
            };

            /**
             * Mixin the emitter properties.
             *
             * @param {Object} obj
             * @return {Object}
             * @api private
             */

            function mixin(obj) {
                for (var key in Emitter.prototype) {
                    obj[key] = Emitter.prototype[key];
                }
                return obj;
            }

            /**
             * Listen on the given `event` with `fn`.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.on = Emitter.prototype.addEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};
                (this._callbacks[event] = this._callbacks[event] || []).push(fn);
                return this;
            };

            /**
             * Adds an `event` listener that will be invoked a single
             * time then automatically removed.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.once = function (event, fn) {
                var self = this;
                this._callbacks = this._callbacks || {};

                function on() {
                    self.off(event, on);
                    fn.apply(this, arguments);
                }

                on.fn = fn;
                this.on(event, on);
                return this;
            };

            /**
             * Remove the given callback for `event` or all
             * registered callbacks.
             *
             * @param {String} event
             * @param {Function} fn
             * @return {Emitter}
             * @api public
             */

            Emitter.prototype.off = Emitter.prototype.removeListener = Emitter.prototype.removeAllListeners = Emitter.prototype.removeEventListener = function (event, fn) {
                this._callbacks = this._callbacks || {};

                // all
                if (0 == arguments.length) {
                    this._callbacks = {};
                    return this;
                }

                // specific event
                var callbacks = this._callbacks[event];
                if (!callbacks) return this;

                // remove all handlers
                if (1 == arguments.length) {
                    delete this._callbacks[event];
                    return this;
                }

                // remove specific handler
                var cb;
                for (var i = 0; i < callbacks.length; i++) {
                    cb = callbacks[i];
                    if (cb === fn || cb.fn === fn) {
                        callbacks.splice(i, 1);
                        break;
                    }
                }
                return this;
            };

            /**
             * Emit `event` with the given args.
             *
             * @param {String} event
             * @param {Mixed} ...
             * @return {Emitter}
             */

            Emitter.prototype.emit = function (event) {
                this._callbacks = this._callbacks || {};
                var args = [].slice.call(arguments, 1),
                    callbacks = this._callbacks[event];

                if (callbacks) {
                    callbacks = callbacks.slice(0);
                    for (var i = 0, len = callbacks.length; i < len; ++i) {
                        callbacks[i].apply(this, args);
                    }
                }

                return this;
            };

            /**
             * Return array of callbacks for `event`.
             *
             * @param {String} event
             * @return {Array}
             * @api public
             */

            Emitter.prototype.listeners = function (event) {
                this._callbacks = this._callbacks || {};
                return this._callbacks[event] || [];
            };

            /**
             * Check if this emitter has `event` handlers.
             *
             * @param {String} event
             * @return {Boolean}
             * @api public
             */

            Emitter.prototype.hasListeners = function (event) {
                return !!this.listeners(event).length;
            };
        }, {}], 81: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Attribute = function Attribute() {
                _classCallCheck(this, Attribute);
            };

            exports.default = Attribute;

            Attribute.QUALIFIER_PROPERTY = "qualifier";
            Attribute.VALUE = "value";
        }, {}], 82: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _map = _dereq_('../bower_components/core.js/library/fn/map');

            var _map2 = _interopRequireDefault(_map);

            var _utils = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var BeanManager = function () {
                function BeanManager(classRepository) {
                    _classCallCheck(this, BeanManager);

                    (0, _utils.checkMethod)('BeanManager(classRepository)');
                    (0, _utils.checkParam)(classRepository, 'classRepository');

                    this.classRepository = classRepository;
                    this.addedHandlers = new _map2.default();
                    this.removedHandlers = new _map2.default();
                    this.updatedHandlers = new _map2.default();
                    this.arrayUpdatedHandlers = new _map2.default();
                    this.allAddedHandlers = [];
                    this.allRemovedHandlers = [];
                    this.allUpdatedHandlers = [];
                    this.allArrayUpdatedHandlers = [];

                    var self = this;
                    this.classRepository.onBeanAdded(function (type, bean) {
                        var handlerList = self.addedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanAdded-handler for type', type, e);
                                }
                            });
                        }
                        self.allAddedHandlers.forEach(function (handler) {
                            try {
                                handler(bean);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onBeanAdded-handler', e);
                            }
                        });
                    });
                    this.classRepository.onBeanRemoved(function (type, bean) {
                        var handlerList = self.removedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanRemoved-handler for type', type, e);
                                }
                            });
                        }
                        self.allRemovedHandlers.forEach(function (handler) {
                            try {
                                handler(bean);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onBeanRemoved-handler', e);
                            }
                        });
                    });
                    this.classRepository.onBeanUpdate(function (type, bean, propertyName, newValue, oldValue) {
                        var handlerList = self.updatedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean, propertyName, newValue, oldValue);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanUpdate-handler for type', type, e);
                                }
                            });
                        }
                        self.allUpdatedHandlers.forEach(function (handler) {
                            try {
                                handler(bean, propertyName, newValue, oldValue);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onBeanUpdate-handler', e);
                            }
                        });
                    });
                    this.classRepository.onArrayUpdate(function (type, bean, propertyName, index, count, newElements) {
                        var handlerList = self.arrayUpdatedHandlers.get(type);
                        if ((0, _utils.exists)(handlerList)) {
                            handlerList.forEach(function (handler) {
                                try {
                                    handler(bean, propertyName, index, count, newElements);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onArrayUpdate-handler for type', type, e);
                                }
                            });
                        }
                        self.allArrayUpdatedHandlers.forEach(function (handler) {
                            try {
                                handler(bean, propertyName, index, count, newElements);
                            } catch (e) {
                                console.warn('An exception occurred while calling a general onArrayUpdate-handler', e);
                            }
                        });
                    });
                }

                _createClass(BeanManager, [{
                    key: 'notifyBeanChange',
                    value: function notifyBeanChange(bean, propertyName, newValue) {
                        (0, _utils.checkMethod)('BeanManager.notifyBeanChange(bean, propertyName, newValue)');
                        (0, _utils.checkParam)(bean, 'bean');
                        (0, _utils.checkParam)(propertyName, 'propertyName');

                        return this.classRepository.notifyBeanChange(bean, propertyName, newValue);
                    }
                }, {
                    key: 'notifyArrayChange',
                    value: function notifyArrayChange(bean, propertyName, index, count, removedElements) {
                        (0, _utils.checkMethod)('BeanManager.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        (0, _utils.checkParam)(bean, 'bean');
                        (0, _utils.checkParam)(propertyName, 'propertyName');
                        (0, _utils.checkParam)(index, 'index');
                        (0, _utils.checkParam)(count, 'count');
                        (0, _utils.checkParam)(removedElements, 'removedElements');

                        this.classRepository.notifyArrayChange(bean, propertyName, index, count, removedElements);
                    }
                }, {
                    key: 'isManaged',
                    value: function isManaged(bean) {
                        (0, _utils.checkMethod)('BeanManager.isManaged(bean)');
                        (0, _utils.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.isManaged() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'create',
                    value: function create(type) {
                        (0, _utils.checkMethod)('BeanManager.create(type)');
                        (0, _utils.checkParam)(type, 'type');

                        // TODO: Implement dolphin.create() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'add',
                    value: function add(type, bean) {
                        (0, _utils.checkMethod)('BeanManager.add(type, bean)');
                        (0, _utils.checkParam)(type, 'type');
                        (0, _utils.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.add() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'addAll',
                    value: function addAll(type, collection) {
                        (0, _utils.checkMethod)('BeanManager.addAll(type, collection)');
                        (0, _utils.checkParam)(type, 'type');
                        (0, _utils.checkParam)(collection, 'collection');

                        // TODO: Implement dolphin.addAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'remove',
                    value: function remove(bean) {
                        (0, _utils.checkMethod)('BeanManager.remove(bean)');
                        (0, _utils.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.remove() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeAll',
                    value: function removeAll(collection) {
                        (0, _utils.checkMethod)('BeanManager.removeAll(collection)');
                        (0, _utils.checkParam)(collection, 'collection');

                        // TODO: Implement dolphin.removeAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeIf',
                    value: function removeIf(predicate) {
                        (0, _utils.checkMethod)('BeanManager.removeIf(predicate)');
                        (0, _utils.checkParam)(predicate, 'predicate');

                        // TODO: Implement dolphin.removeIf() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'onAdded',
                    value: function onAdded(type, eventHandler) {
                        var self = this;
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils.checkMethod)('BeanManager.onAdded(eventHandler)');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            self.allAddedHandlers = self.allAddedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allAddedHandlers = self.allAddedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils.checkMethod)('BeanManager.onAdded(type, eventHandler)');
                            (0, _utils.checkParam)(type, 'type');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.addedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.addedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.addedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
                                        self.addedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }, {
                    key: 'onRemoved',
                    value: function onRemoved(type, eventHandler) {
                        var self = this;
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils.checkMethod)('BeanManager.onRemoved(eventHandler)');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            self.allRemovedHandlers = self.allRemovedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allRemovedHandlers = self.allRemovedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils.checkMethod)('BeanManager.onRemoved(type, eventHandler)');
                            (0, _utils.checkParam)(type, 'type');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.removedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.removedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.removedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
                                        self.removedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }, {
                    key: 'onBeanUpdate',
                    value: function onBeanUpdate(type, eventHandler) {
                        var self = this;
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils.checkMethod)('BeanManager.onBeanUpdate(eventHandler)');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            self.allUpdatedHandlers = self.allUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allUpdatedHandlers = self.allUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils.checkMethod)('BeanManager.onBeanUpdate(type, eventHandler)');
                            (0, _utils.checkParam)(type, 'type');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.updatedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.updatedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.updatedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
                                        self.updatedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }, {
                    key: 'onArrayUpdate',
                    value: function onArrayUpdate(type, eventHandler) {
                        var self = this;
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils.checkMethod)('BeanManager.onArrayUpdate(eventHandler)');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils.checkMethod)('BeanManager.onArrayUpdate(type, eventHandler)');
                            (0, _utils.checkParam)(type, 'type');
                            (0, _utils.checkParam)(eventHandler, 'eventHandler');

                            var handlerList = self.arrayUpdatedHandlers.get(type);
                            if (!(0, _utils.exists)(handlerList)) {
                                handlerList = [];
                            }
                            self.arrayUpdatedHandlers.set(type, handlerList.concat(eventHandler));
                            return {
                                unsubscribe: function unsubscribe() {
                                    var handlerList = self.arrayUpdatedHandlers.get(type);
                                    if ((0, _utils.exists)(handlerList)) {
                                        self.arrayUpdatedHandlers.set(type, handlerList.filter(function (value) {
                                            return value !== eventHandler;
                                        }));
                                    }
                                }
                            };
                        }
                    }
                }]);

                return BeanManager;
            }();

            exports.default = BeanManager;
        }, { "../bower_components/core.js/library/fn/map": 1, "./utils": 121 }], 83: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            };

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _map = _dereq_('../bower_components/core.js/library/fn/map');

            var _map2 = _interopRequireDefault(_map);

            var _constants = _dereq_('./constants');

            var consts = _interopRequireWildcard(_constants);

            var _utils = _dereq_('./utils');

            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }newObj.default = obj;return newObj;
                }
            }

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var blocked = null;

            var ClassRepository = function () {
                function ClassRepository(dolphin) {
                    _classCallCheck(this, ClassRepository);

                    (0, _utils.checkMethod)('ClassRepository(dolphin)');
                    (0, _utils.checkParam)(dolphin, 'dolphin');

                    this.dolphin = dolphin;
                    this.classes = new _map2.default();
                    this.beanFromDolphin = new _map2.default();
                    this.beanToDolphin = new _map2.default();
                    this.classInfos = new _map2.default();
                    this.beanAddedHandlers = [];
                    this.beanRemovedHandlers = [];
                    this.propertyUpdateHandlers = [];
                    this.arrayUpdateHandlers = [];
                }

                _createClass(ClassRepository, [{
                    key: 'fixType',
                    value: function fixType(type, value) {
                        switch (type) {
                            case consts.BYTE:
                            case consts.SHORT:
                            case consts.INT:
                            case consts.LONG:
                                return parseInt(value);
                            case consts.FLOAT:
                            case consts.DOUBLE:
                                return parseFloat(value);
                            case consts.BOOLEAN:
                                return 'true' === String(value).toLowerCase();
                            case consts.STRING:
                            case consts.ENUM:
                                return String(value);
                            default:
                                return value;
                        }
                    }
                }, {
                    key: 'fromDolphin',
                    value: function fromDolphin(classRepository, type, value) {
                        if (!(0, _utils.exists)(value)) {
                            return null;
                        }
                        switch (type) {
                            case consts.DOLPHIN_BEAN:
                                return classRepository.beanFromDolphin.get(String(value));
                            case consts.DATE:
                                return new Date(String(value));
                            case consts.CALENDAR:
                                return new Date(String(value));
                            case consts.LOCAL_DATE_FIELD_TYPE:
                                return new Date(String(value));
                            case consts.LOCAL_DATE_TIME_FIELD_TYPE:
                                return new Date(String(value));
                            case consts.ZONED_DATE_TIME_FIELD_TYPE:
                                return new Date(String(value));
                            default:
                                return this.fixType(type, value);
                        }
                    }
                }, {
                    key: 'toDolphin',
                    value: function toDolphin(classRepository, type, value) {
                        if (!(0, _utils.exists)(value)) {
                            return null;
                        }
                        switch (type) {
                            case consts.DOLPHIN_BEAN:
                                return classRepository.beanToDolphin.get(value);
                            case consts.DATE:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.CALENDAR:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.LOCAL_DATE_FIELD_TYPE:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.LOCAL_DATE_TIME_FIELD_TYPE:
                                return value instanceof Date ? value.toISOString() : value;
                            case consts.ZONED_DATE_TIME_FIELD_TYPE:
                                return value instanceof Date ? value.toISOString() : value;
                            default:
                                return this.fixType(type, value);
                        }
                    }
                }, {
                    key: 'sendListSplice',
                    value: function sendListSplice(classRepository, modelId, propertyName, from, to, newElements) {
                        var dolphin = classRepository.dolphin;
                        var model = dolphin.findPresentationModelById(modelId);
                        var self = this;
                        if ((0, _utils.exists)(model)) {
                            var classInfo = classRepository.classes.get(model.presentationModelType);
                            var type = classInfo[propertyName];
                            if ((0, _utils.exists)(type)) {

                                var attributes = [dolphin.attribute('@@@ SOURCE_SYSTEM @@@', null, 'client'), dolphin.attribute('source', null, modelId), dolphin.attribute('attribute', null, propertyName), dolphin.attribute('from', null, from), dolphin.attribute('to', null, to), dolphin.attribute('count', null, newElements.length)];
                                newElements.forEach(function (element, index) {
                                    attributes.push(dolphin.attribute(index.toString(), null, self.toDolphin(classRepository, type, element)));
                                });
                                dolphin.presentationModel.apply(dolphin, [null, '@DP:LS@'].concat(attributes));
                            }
                        }
                    }
                }, {
                    key: 'validateList',
                    value: function validateList(classRepository, type, bean, propertyName) {
                        var list = bean[propertyName];
                        if (!(0, _utils.exists)(list)) {
                            classRepository.propertyUpdateHandlers.forEach(function (handler) {
                                try {
                                    handler(type, bean, propertyName, [], undefined);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanUpdate-handler', e);
                                }
                            });
                        }
                    }
                }, {
                    key: 'block',
                    value: function block(bean, propertyName) {
                        if ((0, _utils.exists)(blocked)) {
                            throw new Error('Trying to create a block while another block exists');
                        }
                        blocked = {
                            bean: bean,
                            propertyName: propertyName
                        };
                    }
                }, {
                    key: 'isBlocked',
                    value: function isBlocked(bean, propertyName) {
                        return (0, _utils.exists)(blocked) && blocked.bean === bean && blocked.propertyName === propertyName;
                    }
                }, {
                    key: 'unblock',
                    value: function unblock() {
                        blocked = null;
                    }
                }, {
                    key: 'notifyBeanChange',
                    value: function notifyBeanChange(bean, propertyName, newValue) {
                        (0, _utils.checkMethod)('ClassRepository.notifyBeanChange(bean, propertyName, newValue)');
                        (0, _utils.checkParam)(bean, 'bean');
                        (0, _utils.checkParam)(propertyName, 'propertyName');

                        var modelId = this.beanToDolphin.get(bean);
                        if ((0, _utils.exists)(modelId)) {
                            var model = this.dolphin.findPresentationModelById(modelId);
                            if ((0, _utils.exists)(model)) {
                                var classInfo = this.classes.get(model.presentationModelType);
                                var type = classInfo[propertyName];
                                var attribute = model.findAttributeByPropertyName(propertyName);
                                if ((0, _utils.exists)(type) && (0, _utils.exists)(attribute)) {
                                    var oldValue = attribute.getValue();
                                    attribute.setValue(this.toDolphin(this, type, newValue));
                                    return this.fromDolphin(this, type, oldValue);
                                }
                            }
                        }
                    }
                }, {
                    key: 'notifyArrayChange',
                    value: function notifyArrayChange(bean, propertyName, index, count, removedElements) {
                        (0, _utils.checkMethod)('ClassRepository.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        (0, _utils.checkParam)(bean, 'bean');
                        (0, _utils.checkParam)(propertyName, 'propertyName');
                        (0, _utils.checkParam)(index, 'index');
                        (0, _utils.checkParam)(count, 'count');
                        (0, _utils.checkParam)(removedElements, 'removedElements');

                        if (this.isBlocked(bean, propertyName)) {
                            return;
                        }
                        var modelId = this.beanToDolphin.get(bean);
                        var array = bean[propertyName];
                        if ((0, _utils.exists)(modelId) && (0, _utils.exists)(array)) {
                            var removedElementsCount = Array.isArray(removedElements) ? removedElements.length : 0;
                            this.sendListSplice(this, modelId, propertyName, index, index + removedElementsCount, array.slice(index, index + count));
                        }
                    }
                }, {
                    key: 'onBeanAdded',
                    value: function onBeanAdded(handler) {
                        (0, _utils.checkMethod)('ClassRepository.onBeanAdded(handler)');
                        (0, _utils.checkParam)(handler, 'handler');
                        this.beanAddedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanRemoved',
                    value: function onBeanRemoved(handler) {
                        (0, _utils.checkMethod)('ClassRepository.onBeanRemoved(handler)');
                        (0, _utils.checkParam)(handler, 'handler');
                        this.beanRemovedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanUpdate',
                    value: function onBeanUpdate(handler) {
                        (0, _utils.checkMethod)('ClassRepository.onBeanUpdate(handler)');
                        (0, _utils.checkParam)(handler, 'handler');
                        this.propertyUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'onArrayUpdate',
                    value: function onArrayUpdate(handler) {
                        (0, _utils.checkMethod)('ClassRepository.onArrayUpdate(handler)');
                        (0, _utils.checkParam)(handler, 'handler');
                        this.arrayUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'registerClass',
                    value: function registerClass(model) {
                        (0, _utils.checkMethod)('ClassRepository.registerClass(model)');
                        (0, _utils.checkParam)(model, 'model');

                        if (this.classes.has(model.id)) {
                            return;
                        }

                        var classInfo = {};
                        model.attributes.filter(function (attribute) {
                            return attribute.propertyName.search(/^@/) < 0;
                        }).forEach(function (attribute) {
                            classInfo[attribute.propertyName] = attribute.value;
                        });
                        this.classes.set(model.id, classInfo);
                    }
                }, {
                    key: 'unregisterClass',
                    value: function unregisterClass(model) {
                        (0, _utils.checkMethod)('ClassRepository.unregisterClass(model)');
                        (0, _utils.checkParam)(model, 'model');
                        this.classes['delete'](model.id);
                    }
                }, {
                    key: 'load',
                    value: function load(model) {
                        (0, _utils.checkMethod)('ClassRepository.load(model)');
                        (0, _utils.checkParam)(model, 'model');

                        var self = this;
                        var classInfo = this.classes.get(model.presentationModelType);
                        var bean = {};
                        model.attributes.filter(function (attribute) {
                            return attribute.propertyName.search(/^@/) < 0;
                        }).forEach(function (attribute) {
                            bean[attribute.propertyName] = null;
                            attribute.onValueChange(function (event) {
                                if (event.oldValue !== event.newValue) {
                                    var oldValue = self.fromDolphin(self, classInfo[attribute.propertyName], event.oldValue);
                                    var newValue = self.fromDolphin(self, classInfo[attribute.propertyName], event.newValue);
                                    self.propertyUpdateHandlers.forEach(function (handler) {
                                        try {
                                            handler(model.presentationModelType, bean, attribute.propertyName, newValue, oldValue);
                                        } catch (e) {
                                            console.warn('An exception occurred while calling an onBeanUpdate-handler', e);
                                        }
                                    });
                                }
                            });
                        });
                        this.beanFromDolphin.set(model.id, bean);
                        this.beanToDolphin.set(bean, model.id);
                        this.classInfos.set(model.id, classInfo);
                        this.beanAddedHandlers.forEach(function (handler) {
                            try {
                                handler(model.presentationModelType, bean);
                            } catch (e) {
                                console.warn('An exception occurred while calling an onBeanAdded-handler', e);
                            }
                        });
                        return bean;
                    }
                }, {
                    key: 'unload',
                    value: function unload(model) {
                        (0, _utils.checkMethod)('ClassRepository.unload(model)');
                        (0, _utils.checkParam)(model, 'model');

                        var bean = this.beanFromDolphin.get(model.id);
                        this.beanFromDolphin['delete'](model.id);
                        this.beanToDolphin['delete'](bean);
                        this.classInfos['delete'](model.id);
                        if ((0, _utils.exists)(bean)) {
                            this.beanRemovedHandlers.forEach(function (handler) {
                                try {
                                    handler(model.presentationModelType, bean);
                                } catch (e) {
                                    console.warn('An exception occurred while calling an onBeanRemoved-handler', e);
                                }
                            });
                        }
                        return bean;
                    }
                }, {
                    key: 'spliceListEntry',
                    value: function spliceListEntry(model) {
                        (0, _utils.checkMethod)('ClassRepository.spliceListEntry(model)');
                        (0, _utils.checkParam)(model, 'model');

                        var source = model.findAttributeByPropertyName('source');
                        var attribute = model.findAttributeByPropertyName('attribute');
                        var from = model.findAttributeByPropertyName('from');
                        var to = model.findAttributeByPropertyName('to');
                        var count = model.findAttributeByPropertyName('count');

                        if ((0, _utils.exists)(source) && (0, _utils.exists)(attribute) && (0, _utils.exists)(from) && (0, _utils.exists)(to) && (0, _utils.exists)(count)) {
                            var classInfo = this.classInfos.get(source.value);
                            var bean = this.beanFromDolphin.get(source.value);
                            if ((0, _utils.exists)(bean) && (0, _utils.exists)(classInfo)) {
                                var type = model.presentationModelType;
                                //var entry = fromDolphin(this, classInfo[attribute.value], element.value);
                                this.validateList(this, type, bean, attribute.value);
                                var newElements = [],
                                    element = null;
                                for (var i = 0; i < count.value; i++) {
                                    element = model.findAttributeByPropertyName(i.toString());
                                    if (!(0, _utils.exists)(element)) {
                                        throw new Error("Invalid list modification update received");
                                    }
                                    newElements.push(this.fromDolphin(this, classInfo[attribute.value], element.value));
                                }
                                try {
                                    this.block(bean, attribute.value);
                                    this.arrayUpdateHandlers.forEach(function (handler) {
                                        try {
                                            handler(type, bean, attribute.value, from.value, to.value - from.value, newElements);
                                        } catch (e) {
                                            console.warn('An exception occurred while calling an onArrayUpdate-handler', e);
                                        }
                                    });
                                } finally {
                                    this.unblock();
                                }
                            } else {
                                throw new Error("Invalid list modification update received. Source bean unknown.");
                            }
                        } else {
                            throw new Error("Invalid list modification update received");
                        }
                    }
                }, {
                    key: 'mapParamToDolphin',
                    value: function mapParamToDolphin(param) {
                        if (!(0, _utils.exists)(param)) {
                            return param;
                        }
                        var type = typeof param === 'undefined' ? 'undefined' : _typeof(param);
                        if (type === 'object') {
                            if (param instanceof Date) {
                                return param.toISOString();
                            } else {
                                var value = this.beanToDolphin.get(param);
                                if ((0, _utils.exists)(value)) {
                                    return value;
                                }
                                throw new TypeError("Only managed Dolphin Beans can be used");
                            }
                        }
                        if (type === 'string' || type === 'number' || type === 'boolean') {
                            return param;
                        }
                        throw new TypeError("Only managed Dolphin Beans and primitive types can be used");
                    }
                }, {
                    key: 'mapDolphinToBean',
                    value: function mapDolphinToBean(value) {
                        return this.fromDolphin(this, consts.DOLPHIN_BEAN, value);
                    }
                }]);

                return ClassRepository;
            }();

            exports.default = ClassRepository;
        }, { "../bower_components/core.js/library/fn/map": 1, "./constants": 110, "./utils": 121 }], 84: [function (_dereq_, module, exports) {
            "use strict";

            var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            };

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _eventBus = _dereq_("./eventBus");

            var _eventBus2 = _interopRequireDefault(_eventBus);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientAttribute = function () {
                function ClientAttribute(propertyName, qualifier, value) {
                    _classCallCheck(this, ClientAttribute);

                    this.propertyName = propertyName;
                    this.id = "" + ClientAttribute.clientAttributeInstanceCount++ + "C";
                    this.valueChangeBus = new _eventBus2.default();
                    this.qualifierChangeBus = new _eventBus2.default();
                    this.setValue(value);
                    this.setQualifier(qualifier);
                }

                _createClass(ClientAttribute, [{
                    key: "copy",
                    value: function copy() {
                        var result = new ClientAttribute(this.propertyName, this.getQualifier(), this.getValue());
                        return result;
                    }
                }, {
                    key: "setPresentationModel",
                    value: function setPresentationModel(presentationModel) {
                        if (this.presentationModel) {
                            throw new Error("You can not set a presentation model for an attribute that is already bound.");
                        }
                        this.presentationModel = presentationModel;
                    }
                }, {
                    key: "getPresentationModel",
                    value: function getPresentationModel() {
                        return this.presentationModel;
                    }
                }, {
                    key: "getValue",
                    value: function getValue() {
                        return this.value;
                    }
                }, {
                    key: "setValueFromServer",
                    value: function setValueFromServer(newValue) {
                        var verifiedValue = ClientAttribute.checkValue(newValue);
                        if (this.value == verifiedValue) return;
                        var oldValue = this.value;
                        this.value = verifiedValue;
                        this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue, 'sendToServer': false });
                    }
                }, {
                    key: "setValue",
                    value: function setValue(newValue) {
                        var verifiedValue = ClientAttribute.checkValue(newValue);
                        if (this.value == verifiedValue) return;
                        var oldValue = this.value;
                        this.value = verifiedValue;
                        this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue, 'sendToServer': true });
                    }
                }, {
                    key: "setQualifier",
                    value: function setQualifier(newQualifier) {
                        if (this.qualifier == newQualifier) return;
                        var oldQualifier = this.qualifier;
                        this.qualifier = newQualifier;
                        this.qualifierChangeBus.trigger({ 'oldValue': oldQualifier, 'newValue': newQualifier });
                        this.valueChangeBus.trigger({ "oldValue": this.value, "newValue": this.value, 'sendToServer': false });
                    }
                }, {
                    key: "getQualifier",
                    value: function getQualifier() {
                        return this.qualifier;
                    }
                }, {
                    key: "onValueChange",
                    value: function onValueChange(eventHandler) {
                        this.valueChangeBus.onEvent(eventHandler);
                        eventHandler({ "oldValue": this.value, "newValue": this.value, 'sendToServer': false });
                    }
                }, {
                    key: "onQualifierChange",
                    value: function onQualifierChange(eventHandler) {
                        this.qualifierChangeBus.onEvent(eventHandler);
                    }
                }, {
                    key: "syncWith",
                    value: function syncWith(sourceAttribute) {
                        if (sourceAttribute) {
                            this.setQualifier(sourceAttribute.getQualifier()); // sequence is important
                            this.setValue(sourceAttribute.value);
                        }
                    }
                }], [{
                    key: "checkValue",
                    value: function checkValue(value) {
                        if (value == null || value == undefined) {
                            return null;
                        }
                        var result = value;
                        if (result instanceof String || result instanceof Boolean || result instanceof Number) {
                            result = value.valueOf();
                        }
                        if (result instanceof ClientAttribute) {
                            console.log("An Attribute may not itself contain an attribute as a value. Assuming you forgot to call value.");
                            result = this.checkValue(value.value);
                        }
                        var ok = false;
                        if (this.SUPPORTED_VALUE_TYPES.indexOf(typeof result === "undefined" ? "undefined" : _typeof(result)) > -1 || result instanceof Date) {
                            ok = true;
                        }
                        if (!ok) {
                            throw new Error("Attribute values of this type are not allowed: " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
                        }
                        return result;
                    }
                }]);

                return ClientAttribute;
            }();

            exports.default = ClientAttribute;

            ClientAttribute.SUPPORTED_VALUE_TYPES = ["string", "number", "boolean"];
            ClientAttribute.clientAttributeInstanceCount = 0;
        }, { "./eventBus": 115 }], 85: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandBatcher = _dereq_('./commandBatcher');

            var _commandBatcher2 = _interopRequireDefault(_commandBatcher);

            var _codec = _dereq_('./commands/codec');

            var _codec2 = _interopRequireDefault(_codec);

            var _clientPresentationModel = _dereq_('./clientPresentationModel');

            var _clientPresentationModel2 = _interopRequireDefault(_clientPresentationModel);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientConnector = function () {
                function ClientConnector(transmitter, clientDolphin) {
                    var slackMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
                    var maxBatchSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 50;

                    _classCallCheck(this, ClientConnector);

                    this.commandQueue = [];
                    this.currentlySending = false;
                    this.pushEnabled = false;
                    this.waiting = false;
                    this.transmitter = transmitter;
                    this.clientDolphin = clientDolphin;
                    this.slackMS = slackMS;
                    this.codec = new _codec2.default();
                    this.commandBatcher = new _commandBatcher2.default(true, maxBatchSize);
                }

                _createClass(ClientConnector, [{
                    key: 'setCommandBatcher',
                    value: function setCommandBatcher(newBatcher) {
                        this.commandBatcher = newBatcher;
                    }
                }, {
                    key: 'setPushEnabled',
                    value: function setPushEnabled(enabled) {
                        this.pushEnabled = enabled;
                    }
                }, {
                    key: 'setPushListener',
                    value: function setPushListener(newListener) {
                        this.pushListener = newListener;
                    }
                }, {
                    key: 'setReleaseCommand',
                    value: function setReleaseCommand(newCommand) {
                        this.releaseCommand = newCommand;
                    }
                }, {
                    key: 'send',
                    value: function send(command, onFinished) {
                        this.commandQueue.push({ command: command, handler: onFinished });
                        if (this.currentlySending) {
                            this.release(); // there is not point in releasing if we do not send atm
                            return;
                        }
                        this.doSendNext();
                    }
                }, {
                    key: 'doSendNext',
                    value: function doSendNext() {
                        var _this = this;

                        if (this.commandQueue.length < 1) {
                            if (this.pushEnabled) {
                                this.enqueuePushCommand();
                            } else {
                                this.currentlySending = false;
                                return;
                            }
                        }
                        this.currentlySending = true;
                        var cmdsAndHandlers = this.commandBatcher.batch(this.commandQueue);

                        if (cmdsAndHandlers.length > 0) {
                            var callback = cmdsAndHandlers[cmdsAndHandlers.length - 1].handler;
                            var commands = cmdsAndHandlers.map(function (cah) {
                                return cah.command;
                            });
                            this.transmitter.transmit(commands, function (response) {
                                var touchedPMs = [];
                                response.forEach(function (command) {
                                    var touched = _this.handle(command);
                                    if (touched) touchedPMs.push(touched);
                                });
                                if (callback) {
                                    callback.onFinished(touchedPMs); // todo: make them unique?
                                }
                                setTimeout(function () {
                                    return _this.doSendNext();
                                }, _this.slackMS);
                            });
                        } else {
                            setTimeout(function () {
                                return _this.doSendNext();
                            }, this.slackMS);
                        }
                    }
                }, {
                    key: 'handle',
                    value: function handle(command) {
                        if (command.id == "DeletePresentationModel") {
                            return this.handleDeletePresentationModelCommand(command);
                        } else if (command.id == "CreatePresentationModel") {
                            return this.handleCreatePresentationModelCommand(command);
                        } else if (command.id == "ValueChanged") {
                            return this.handleValueChangedCommand(command);
                        } else if (command.id == "AttributeMetadataChanged") {
                            return this.handleAttributeMetadataChangedCommand(command);
                        } else {
                            console.log("Cannot handle, unknown command " + command);
                        }
                        return null;
                    }
                }, {
                    key: 'handleDeletePresentationModelCommand',
                    value: function handleDeletePresentationModelCommand(serverCommand) {
                        var model = this.clientDolphin.findPresentationModelById(serverCommand.pmId);
                        if (!model) return null;
                        this.clientDolphin.getClientModelStore().deletePresentationModel(model, true);
                        return model;
                    }
                }, {
                    key: 'handleCreatePresentationModelCommand',
                    value: function handleCreatePresentationModelCommand(serverCommand) {
                        var _this2 = this;

                        if (this.clientDolphin.getClientModelStore().containsPresentationModel(serverCommand.pmId)) {
                            throw new Error("There already is a presentation model with id " + serverCommand.pmId + "  known to the client.");
                        }
                        var attributes = [];
                        serverCommand.attributes.forEach(function (attr) {
                            var clientAttribute = _this2.clientDolphin.attribute(attr.propertyName, attr.qualifier, attr.value);
                            if (attr.id && attr.id.match(".*S$")) {
                                clientAttribute.id = attr.id;
                            }
                            attributes.push(clientAttribute);
                        });
                        var clientPm = new _clientPresentationModel2.default(serverCommand.pmId, serverCommand.pmType);
                        clientPm.addAttributes(attributes);
                        if (serverCommand.clientSideOnly) {
                            clientPm.clientSideOnly = true;
                        }
                        this.clientDolphin.getClientModelStore().add(clientPm, false);
                        this.clientDolphin.updatePresentationModelQualifier(clientPm);
                        return clientPm;
                    }
                }, {
                    key: 'handleValueChangedCommand',
                    value: function handleValueChangedCommand(serverCommand) {
                        var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                        if (!clientAttribute) {
                            console.log("attribute with id " + serverCommand.attributeId + " not found, cannot update to new value " + serverCommand.newValue);
                            return null;
                        }
                        if (clientAttribute.getValue() == serverCommand.newValue) {
                            //console.log("nothing to do. new value == old value");
                            return null;
                        }
                        clientAttribute.setValueFromServer(serverCommand.newValue);
                        return null;
                    }
                }, {
                    key: 'handleAttributeMetadataChangedCommand',
                    value: function handleAttributeMetadataChangedCommand(serverCommand) {
                        var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                        if (!clientAttribute) return null;
                        clientAttribute[serverCommand.metadataName] = serverCommand.value;
                        return null;
                    }
                }, {
                    key: 'listen',
                    value: function listen() {
                        if (!this.pushEnabled) return;
                        if (this.waiting) return;
                        // todo: how to issue a warning if no pushListener is set?
                        if (!this.currentlySending) {
                            this.doSendNext();
                        }
                    }
                }, {
                    key: 'enqueuePushCommand',
                    value: function enqueuePushCommand() {
                        var me = this;
                        this.waiting = true;
                        this.commandQueue.push({
                            command: this.pushListener,
                            handler: {
                                onFinished: function onFinished() {
                                    me.waiting = false;
                                },
                                onFinishedData: null
                            }
                        });
                    }
                }, {
                    key: 'release',
                    value: function release() {
                        if (!this.waiting) return;
                        this.waiting = false;
                        // todo: how to issue a warning if no releaseCommand is set?
                        this.transmitter.signal(this.releaseCommand);
                    }
                }]);

                return ClientConnector;
            }();

            exports.default = ClientConnector;
        }, { "./clientPresentationModel": 89, "./commandBatcher": 91, "./commands/codec": 92 }], 86: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }(); /* Copyright 2015 Canoo Engineering AG.
                  *
                  * Licensed under the Apache License, Version 2.0 (the "License");
                  * you may not use this file except in compliance with the License.
                  * You may obtain a copy of the License at
                  *
                  *     http://www.apache.org/licenses/LICENSE-2.0
                  *
                  * Unless required by applicable law or agreed to in writing, software
                  * distributed under the License is distributed on an "AS IS" BASIS,
                  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                  * See the License for the specific language governing permissions and
                  * limitations under the License.
                  */

            var _openDolphin = _dereq_('./openDolphin.js');

            var _utils = _dereq_('./utils');

            var _connector = _dereq_('./connector');

            var _connector2 = _interopRequireDefault(_connector);

            var _beanmanager = _dereq_('./beanmanager');

            var _beanmanager2 = _interopRequireDefault(_beanmanager);

            var _classrepo = _dereq_('./classrepo');

            var _classrepo2 = _interopRequireDefault(_classrepo);

            var _controllermanager = _dereq_('./controllermanager');

            var _controllermanager2 = _interopRequireDefault(_controllermanager);

            var _clientcontext = _dereq_('./clientcontext');

            var _clientcontext2 = _interopRequireDefault(_clientcontext);

            var _platformHttpTransmitter = _dereq_('./platformHttpTransmitter');

            var _platformHttpTransmitter2 = _interopRequireDefault(_platformHttpTransmitter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientContextFactory = function () {
                function ClientContextFactory() {
                    _classCallCheck(this, ClientContextFactory);
                }

                _createClass(ClientContextFactory, [{
                    key: 'create',
                    value: function create(url, config) {
                        (0, _utils.checkMethod)('connect(url, config)');
                        (0, _utils.checkParam)(url, 'url');
                        console.log('Creating client context ' + url + '    ' + JSON.stringify(config));

                        var builder = (0, _openDolphin.makeDolphin)().url(url).reset(false).slackMS(4).supportCORS(true).maxBatchSize(Number.MAX_SAFE_INTEGER);
                        if ((0, _utils.exists)(config)) {
                            if ((0, _utils.exists)(config.errorHandler)) {
                                builder.errorHandler(config.errorHandler);
                            }
                            if ((0, _utils.exists)(config.headersInfo) && Object.keys(config.headersInfo).length > 0) {
                                builder.headersInfo(config.headersInfo);
                            }
                        }

                        var dolphin = builder.build();

                        var transmitter = new _platformHttpTransmitter2.default(url, config);
                        transmitter.on('error', function (error) {
                            clientContext.emit('error', error);
                        });
                        dolphin.clientConnector.transmitter = transmitter;

                        var classRepository = new _classrepo2.default(dolphin);
                        var beanManager = new _beanmanager2.default(classRepository);
                        var connector = new _connector2.default(url, dolphin, classRepository, config);
                        var controllerManager = new _controllermanager2.default(dolphin, classRepository, connector);

                        var clientContext = new _clientcontext2.default(dolphin, beanManager, controllerManager, connector);
                        return clientContext;
                    }
                }]);

                return ClientContextFactory;
            }();

            exports.default = ClientContextFactory;

            exports.ClientContextFactory = ClientContextFactory;
        }, { "./beanmanager": 82, "./classrepo": 83, "./clientcontext": 90, "./connector": 109, "./controllermanager": 111, "./openDolphin.js": 118, "./platformHttpTransmitter": 119, "./utils": 121 }], 87: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _clientAttribute = _dereq_('./clientAttribute');

            var _clientAttribute2 = _interopRequireDefault(_clientAttribute);

            var _clientPresentationModel = _dereq_('./clientPresentationModel');

            var _clientPresentationModel2 = _interopRequireDefault(_clientPresentationModel);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientDolphin = function () {
                function ClientDolphin() {
                    _classCallCheck(this, ClientDolphin);
                }

                _createClass(ClientDolphin, [{
                    key: 'setClientConnector',
                    value: function setClientConnector(clientConnector) {
                        this.clientConnector = clientConnector;
                    }
                }, {
                    key: 'getClientConnector',
                    value: function getClientConnector() {
                        return this.clientConnector;
                    }
                }, {
                    key: 'send',
                    value: function send(command, onFinished) {
                        this.clientConnector.send(command, onFinished);
                    }
                }, {
                    key: 'attribute',
                    value: function attribute(propertyName, qualifier, value) {
                        return new _clientAttribute2.default(propertyName, qualifier, value);
                    }
                }, {
                    key: 'presentationModel',
                    value: function presentationModel(id, type) {
                        var model = new _clientPresentationModel2.default(id, type);

                        for (var _len = arguments.length, attributes = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
                            attributes[_key - 2] = arguments[_key];
                        }

                        if (attributes && attributes.length > 0) {
                            attributes.forEach(function (attribute) {
                                model.addAttribute(attribute);
                            });
                        }
                        this.getClientModelStore().add(model, true);
                        return model;
                    }
                }, {
                    key: 'setClientModelStore',
                    value: function setClientModelStore(clientModelStore) {
                        this.clientModelStore = clientModelStore;
                    }
                }, {
                    key: 'getClientModelStore',
                    value: function getClientModelStore() {
                        return this.clientModelStore;
                    }
                }, {
                    key: 'listPresentationModelIds',
                    value: function listPresentationModelIds() {
                        return this.getClientModelStore().listPresentationModelIds();
                    }
                }, {
                    key: 'listPresentationModels',
                    value: function listPresentationModels() {
                        return this.getClientModelStore().listPresentationModels();
                    }
                }, {
                    key: 'findAllPresentationModelByType',
                    value: function findAllPresentationModelByType(presentationModelType) {
                        return this.getClientModelStore().findAllPresentationModelByType(presentationModelType);
                    }
                }, {
                    key: 'getAt',
                    value: function getAt(id) {
                        return this.findPresentationModelById(id);
                    }
                }, {
                    key: 'findPresentationModelById',
                    value: function findPresentationModelById(id) {
                        return this.getClientModelStore().findPresentationModelById(id);
                    }
                }, {
                    key: 'deletePresentationModel',
                    value: function deletePresentationModel(modelToDelete) {
                        this.getClientModelStore().deletePresentationModel(modelToDelete, true);
                    }
                }, {
                    key: 'updatePresentationModelQualifier',
                    value: function updatePresentationModelQualifier(presentationModel) {
                        var _this = this;

                        presentationModel.getAttributes().forEach(function (sourceAttribute) {
                            _this.updateAttributeQualifier(sourceAttribute);
                        });
                    }
                }, {
                    key: 'updateAttributeQualifier',
                    value: function updateAttributeQualifier(sourceAttribute) {
                        if (!sourceAttribute.getQualifier()) return;
                        var attributes = this.getClientModelStore().findAllAttributesByQualifier(sourceAttribute.getQualifier());
                        attributes.forEach(function (targetAttribute) {
                            targetAttribute.setValue(sourceAttribute.getValue()); // should always have the same value
                        });
                    }
                }, {
                    key: 'startPushListening',
                    value: function startPushListening(pushCommand, releaseCommand) {
                        var _this2 = this;

                        this.clientConnector.setPushListener(pushCommand);
                        this.clientConnector.setReleaseCommand(releaseCommand);
                        this.clientConnector.setPushEnabled(true);

                        setTimeout(function () {
                            _this2.clientConnector.listen();
                        }, 0);
                    }
                }, {
                    key: 'stopPushListening',
                    value: function stopPushListening() {
                        this.clientConnector.setPushEnabled(false);
                    }
                }]);

                return ClientDolphin;
            }();

            exports.default = ClientDolphin;
        }, { "./clientAttribute": 84, "./clientPresentationModel": 89 }], 88: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _attribute = _dereq_('./attribute');

            var _attribute2 = _interopRequireDefault(_attribute);

            var _eventBus = _dereq_('./eventBus');

            var _eventBus2 = _interopRequireDefault(_eventBus);

            var _commandFactory = _dereq_('./commands/commandFactory');

            var _commandFactory2 = _interopRequireDefault(_commandFactory);

            var _constants = _dereq_('./constants');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientModelStore = function () {
                function ClientModelStore(clientDolphin) {
                    _classCallCheck(this, ClientModelStore);

                    this.clientDolphin = clientDolphin;
                    this.presentationModels = new Map();
                    this.presentationModelsPerType = new Map();
                    this.attributesPerId = new Map();
                    this.attributesPerQualifier = new Map();
                    this.modelStoreChangeBus = new _eventBus2.default();
                }

                _createClass(ClientModelStore, [{
                    key: 'getClientDolphin',
                    value: function getClientDolphin() {
                        return this.clientDolphin;
                    }
                }, {
                    key: 'registerAttribute',
                    value: function registerAttribute(attribute) {
                        var _this = this;

                        this.addAttributeById(attribute);
                        if (attribute.getQualifier()) {
                            this.addAttributeByQualifier(attribute);
                        }
                        // whenever an attribute changes its value, the server needs to be notified
                        // and all other attributes with the same qualifier are given the same value
                        attribute.onValueChange(function (evt) {
                            if (evt.newValue != evt.oldValue && evt.sendToServer == true) {
                                var command = _commandFactory2.default.createValueChangedCommand(attribute.id, evt.newValue);
                                _this.clientDolphin.getClientConnector().send(command, null);
                            }

                            if (attribute.getQualifier()) {
                                var attrs = _this.findAttributesByFilter(function (attr) {
                                    return attr !== attribute && attr.getQualifier() == attribute.getQualifier();
                                });
                                attrs.forEach(function (attr) {
                                    attr.setValue(attribute.getValue());
                                });
                            }
                        });
                        attribute.onQualifierChange(function (evt) {
                            _this.clientDolphin.getClientConnector().send(_commandFactory2.default.createChangeAttributeMetadataCommand(attribute.id, _attribute2.default.QUALIFIER_PROPERTY, evt.newValue), null);
                        });
                    }
                }, {
                    key: 'add',
                    value: function add(model) {
                        var _this2 = this;

                        var sendToServer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

                        if (!model) {
                            return false;
                        }
                        if (this.presentationModels.has(model.id)) {
                            console.log("There already is a PM with id " + model.id);
                        }
                        var added = false;
                        if (!this.presentationModels.has(model.id)) {
                            this.presentationModels.set(model.id, model);
                            this.addPresentationModelByType(model);

                            if (sendToServer) {
                                var connector = this.clientDolphin.getClientConnector();
                                connector.send(_commandFactory2.default.createCreatePresentationModelCommand(model), null);
                            }

                            model.getAttributes().forEach(function (attribute) {
                                _this2.registerAttribute(attribute);
                            });
                            this.modelStoreChangeBus.trigger({ 'eventType': _constants.ADDED_TYPE, 'clientPresentationModel': model });
                            added = true;
                        }
                        return added;
                    }
                }, {
                    key: 'remove',
                    value: function remove(model) {
                        var _this3 = this;

                        if (!model) {
                            return false;
                        }
                        var removed = false;
                        if (this.presentationModels.has(model.id)) {
                            this.removePresentationModelByType(model);
                            this.presentationModels.delete(model.id);
                            model.getAttributes().forEach(function (attribute) {
                                _this3.removeAttributeById(attribute);
                                if (attribute.getQualifier()) {
                                    _this3.removeAttributeByQualifier(attribute);
                                }
                            });
                            this.modelStoreChangeBus.trigger({ 'eventType': _constants.REMOVED_TYPE, 'clientPresentationModel': model });
                            removed = true;
                        }
                        return removed;
                    }
                }, {
                    key: 'findAttributesByFilter',
                    value: function findAttributesByFilter(filter) {
                        var matches = [];
                        this.presentationModels.forEach(function (model) {
                            model.getAttributes().forEach(function (attr) {
                                if (filter(attr)) {
                                    matches.push(attr);
                                }
                            });
                        });
                        return matches;
                    }
                }, {
                    key: 'addPresentationModelByType',
                    value: function addPresentationModelByType(model) {
                        if (!model) {
                            return;
                        }
                        var type = model.presentationModelType;
                        if (!type) {
                            return;
                        }
                        var presentationModels = this.presentationModelsPerType.get(type);
                        if (!presentationModels) {
                            presentationModels = [];
                            this.presentationModelsPerType.set(type, presentationModels);
                        }
                        if (!(presentationModels.indexOf(model) > -1)) {
                            presentationModels.push(model);
                        }
                    }
                }, {
                    key: 'removePresentationModelByType',
                    value: function removePresentationModelByType(model) {
                        if (!model || !model.presentationModelType) {
                            return;
                        }
                        var presentationModels = this.presentationModelsPerType.get(model.presentationModelType);
                        if (!presentationModels) {
                            return;
                        }
                        if (presentationModels.length > -1) {
                            presentationModels.splice(presentationModels.indexOf(model), 1);
                        }
                        if (presentationModels.length === 0) {
                            this.presentationModelsPerType.delete(model.presentationModelType);
                        }
                    }
                }, {
                    key: 'listPresentationModelIds',
                    value: function listPresentationModelIds() {
                        var result = [];
                        var iter = this.presentationModels.keys();
                        var next = iter.next();
                        while (!next.done) {
                            result.push(next.value);
                            next = iter.next();
                        }
                        return result;
                    }
                }, {
                    key: 'listPresentationModels',
                    value: function listPresentationModels() {
                        var result = [];
                        var iter = this.presentationModels.values();
                        var next = iter.next();
                        while (!next.done) {
                            result.push(next.value);
                            next = iter.next();
                        }
                        return result;
                    }
                }, {
                    key: 'findPresentationModelById',
                    value: function findPresentationModelById(id) {
                        return this.presentationModels.get(id);
                    }
                }, {
                    key: 'findAllPresentationModelByType',
                    value: function findAllPresentationModelByType(type) {
                        if (!type || !this.presentationModelsPerType.has(type)) {
                            return [];
                        }
                        return this.presentationModelsPerType.get(type).slice(0); // slice is used to clone the array
                    }
                }, {
                    key: 'deletePresentationModel',
                    value: function deletePresentationModel(model, notify) {
                        if (!model) {
                            return;
                        }
                        if (this.containsPresentationModel(model.id)) {
                            this.remove(model);
                            if (!notify || model.clientSideOnly) {
                                return;
                            }
                            this.clientDolphin.getClientConnector().send(_commandFactory2.default.createPresentationModelDeletedCommand(model.id), null);
                        }
                    }
                }, {
                    key: 'containsPresentationModel',
                    value: function containsPresentationModel(id) {
                        return this.presentationModels.has(id);
                    }
                }, {
                    key: 'addAttributeById',
                    value: function addAttributeById(attribute) {
                        if (!attribute || this.attributesPerId.has(attribute.id)) {
                            return;
                        }
                        this.attributesPerId.set(attribute.id, attribute);
                    }
                }, {
                    key: 'removeAttributeById',
                    value: function removeAttributeById(attribute) {
                        if (!attribute || !this.attributesPerId.has(attribute.id)) {
                            return;
                        }
                        this.attributesPerId.delete(attribute.id);
                    }
                }, {
                    key: 'findAttributeById',
                    value: function findAttributeById(id) {
                        return this.attributesPerId.get(id);
                    }
                }, {
                    key: 'addAttributeByQualifier',
                    value: function addAttributeByQualifier(attribute) {
                        if (!attribute || !attribute.getQualifier()) {
                            return;
                        }
                        var attributes = this.attributesPerQualifier.get(attribute.getQualifier());
                        if (!attributes) {
                            attributes = [];
                            this.attributesPerQualifier.set(attribute.getQualifier(), attributes);
                        }
                        if (!(attributes.indexOf(attribute) > -1)) {
                            attributes.push(attribute);
                        }
                    }
                }, {
                    key: 'removeAttributeByQualifier',
                    value: function removeAttributeByQualifier(attribute) {
                        if (!attribute || !attribute.getQualifier()) {
                            return;
                        }
                        var attributes = this.attributesPerQualifier.get(attribute.getQualifier());
                        if (!attributes) {
                            return;
                        }
                        if (attributes.length > -1) {
                            attributes.splice(attributes.indexOf(attribute), 1);
                        }
                        if (attributes.length === 0) {
                            this.attributesPerQualifier.delete(attribute.getQualifier());
                        }
                    }
                }, {
                    key: 'findAllAttributesByQualifier',
                    value: function findAllAttributesByQualifier(qualifier) {
                        if (!qualifier || !this.attributesPerQualifier.has(qualifier)) {
                            return [];
                        }
                        return this.attributesPerQualifier.get(qualifier).slice(0); // slice is used to clone the array
                    }
                }, {
                    key: 'onModelStoreChange',
                    value: function onModelStoreChange(eventHandler) {
                        this.modelStoreChangeBus.onEvent(eventHandler);
                    }
                }, {
                    key: 'onModelStoreChangeForType',
                    value: function onModelStoreChangeForType(presentationModelType, eventHandler) {
                        this.modelStoreChangeBus.onEvent(function (pmStoreEvent) {
                            if (pmStoreEvent.clientPresentationModel.presentationModelType == presentationModelType) {
                                eventHandler(pmStoreEvent);
                            }
                        });
                    }
                }]);

                return ClientModelStore;
            }();

            exports.default = ClientModelStore;
        }, { "./attribute": 81, "./commands/commandFactory": 95, "./constants": 110, "./eventBus": 115 }], 89: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _eventBus = _dereq_('./eventBus');

            var _eventBus2 = _interopRequireDefault(_eventBus);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var presentationModelInstanceCount = 0; // todo dk: consider making this static in class

            var ClientPresentationModel = function () {
                function ClientPresentationModel(id, presentationModelType) {
                    _classCallCheck(this, ClientPresentationModel);

                    this.id = id;
                    this.presentationModelType = presentationModelType;
                    this.attributes = [];
                    this.clientSideOnly = false;
                    this.dirty = false;
                    if (typeof id !== 'undefined' && id != null) {
                        this.id = id;
                    } else {
                        this.id = (presentationModelInstanceCount++).toString();
                    }
                    this.invalidBus = new _eventBus2.default();
                    this.dirtyValueChangeBus = new _eventBus2.default();
                }
                // todo dk: align with Java version: move to ClientDolphin and auto-add to model store
                /** a copy constructor for anything but IDs. Per default, copies are client side only, no automatic update applies. */

                _createClass(ClientPresentationModel, [{
                    key: 'copy',
                    value: function copy() {
                        var result = new ClientPresentationModel(null, this.presentationModelType);
                        result.clientSideOnly = true;
                        this.getAttributes().forEach(function (attribute) {
                            var attributeCopy = attribute.copy();
                            result.addAttribute(attributeCopy);
                        });
                        return result;
                    }
                    //add array of attributes

                }, {
                    key: 'addAttributes',
                    value: function addAttributes(attributes) {
                        var _this = this;

                        if (!attributes || attributes.length < 1) return;
                        attributes.forEach(function (attr) {
                            _this.addAttribute(attr);
                        });
                    }
                }, {
                    key: 'addAttribute',
                    value: function addAttribute(attribute) {
                        var _this2 = this;

                        if (!attribute || this.attributes.indexOf(attribute) > -1) {
                            return;
                        }
                        if (this.findAttributeByPropertyName(attribute.propertyName)) {
                            throw new Error("There already is an attribute with property name: " + attribute.propertyName + " in presentation model with id: " + this.id);
                        }
                        if (attribute.getQualifier() && this.findAttributeByQualifier(attribute.getQualifier())) {
                            throw new Error("There already is an attribute with qualifier: " + attribute.getQualifier() + " in presentation model with id: " + this.id);
                        }
                        attribute.setPresentationModel(this);
                        this.attributes.push(attribute);
                        attribute.onValueChange(function () {
                            _this2.invalidBus.trigger({ source: _this2 });
                        });
                    }
                }, {
                    key: 'onInvalidated',
                    value: function onInvalidated(handleInvalidate) {
                        this.invalidBus.onEvent(handleInvalidate);
                    }
                    /** returns a copy of the internal state */

                }, {
                    key: 'getAttributes',
                    value: function getAttributes() {
                        return this.attributes.slice(0);
                    }
                }, {
                    key: 'getAt',
                    value: function getAt(propertyName) {
                        return this.findAttributeByPropertyName(propertyName);
                    }
                }, {
                    key: 'findAllAttributesByPropertyName',
                    value: function findAllAttributesByPropertyName(propertyName) {
                        var result = [];
                        if (!propertyName) return null;
                        this.attributes.forEach(function (attribute) {
                            if (attribute.propertyName == propertyName) {
                                result.push(attribute);
                            }
                        });
                        return result;
                    }
                }, {
                    key: 'findAttributeByPropertyName',
                    value: function findAttributeByPropertyName(propertyName) {
                        if (!propertyName) return null;
                        for (var i = 0; i < this.attributes.length; i++) {
                            if (this.attributes[i].propertyName == propertyName) {
                                return this.attributes[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'findAttributeByQualifier',
                    value: function findAttributeByQualifier(qualifier) {
                        if (!qualifier) return null;
                        for (var i = 0; i < this.attributes.length; i++) {
                            if (this.attributes[i].getQualifier() == qualifier) {
                                return this.attributes[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'findAttributeById',
                    value: function findAttributeById(id) {
                        if (!id) return null;
                        for (var i = 0; i < this.attributes.length; i++) {
                            if (this.attributes[i].id == id) {
                                return this.attributes[i];
                            }
                        }
                        return null;
                    }
                }, {
                    key: 'syncWith',
                    value: function syncWith(sourcePresentationModel) {
                        this.attributes.forEach(function (targetAttribute) {
                            var sourceAttribute = sourcePresentationModel.getAt(targetAttribute.propertyName);
                            if (sourceAttribute) {
                                targetAttribute.syncWith(sourceAttribute);
                            }
                        });
                    }
                }]);

                return ClientPresentationModel;
            }();

            exports.default = ClientPresentationModel;
        }, { "./eventBus": 115 }], 90: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _commandFactory = _dereq_('./commands/commandFactory');

            var _commandFactory2 = _interopRequireDefault(_commandFactory);

            var _utils = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ClientContext = function () {
                function ClientContext(dolphin, beanManager, controllerManager, connector) {
                    _classCallCheck(this, ClientContext);

                    (0, _utils.checkMethod)('ClientContext(dolphin, beanManager, controllerManager, connector)');
                    (0, _utils.checkParam)(dolphin, 'dolphin');
                    (0, _utils.checkParam)(beanManager, 'beanManager');
                    (0, _utils.checkParam)(controllerManager, 'controllerManager');
                    (0, _utils.checkParam)(connector, 'connector');

                    this.dolphin = dolphin;
                    this.beanManager = beanManager;
                    this._controllerManager = controllerManager;
                    this._connector = connector;
                    this.connectionPromise = null;
                    this.isConnected = false;
                }

                _createClass(ClientContext, [{
                    key: 'connect',
                    value: function connect() {
                        var self = this;
                        this.connectionPromise = new _promise2.default(function (resolve) {
                            self._connector.connect();
                            self._connector.invoke(_commandFactory2.default.createCreateContextCommand()).then(function () {
                                self.isConnected = true;
                                resolve();
                            });
                        });
                        return this.connectionPromise;
                    }
                }, {
                    key: 'onConnect',
                    value: function onConnect() {
                        if ((0, _utils.exists)(this.connectionPromise)) {
                            if (!this.isConnected) {
                                return this.connectionPromise;
                            } else {
                                return new _promise2.default(function (resolve) {
                                    resolve();
                                });
                            }
                        } else {
                            return this.connect();
                        }
                    }
                }, {
                    key: 'createController',
                    value: function createController(name) {
                        (0, _utils.checkMethod)('ClientContext.createController(name)');
                        (0, _utils.checkParam)(name, 'name');

                        return this._controllerManager.createController(name);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        var self = this;
                        this.dolphin.stopPushListening();
                        return new _promise2.default(function (resolve) {
                            self._controllerManager.destroy().then(function () {
                                self._connector.invoke(_commandFactory2.default.createDestroyContextCommand());
                                self.dolphin = null;
                                self.beanManager = null;
                                self._controllerManager = null;
                                self._connector = null;
                                resolve();
                            });
                        });
                    }
                }]);

                return ClientContext;
            }();

            exports.default = ClientContext;

            (0, _emitterComponent2.default)(ClientContext.prototype);
        }, { "../bower_components/core.js/library/fn/promise": 2, "./commands/commandFactory": 95, "./utils": 121, "emitter-component": 80 }], 91: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('./commands/commandConstants');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var BlindCommandBatcher = function () {
                function BlindCommandBatcher() {
                    var folding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
                    var maxBatchSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 50;

                    _classCallCheck(this, BlindCommandBatcher);

                    this.folding = folding;
                    this.maxBatchSize = maxBatchSize;
                }

                _createClass(BlindCommandBatcher, [{
                    key: 'batch',
                    value: function batch(queue) {
                        var batch = [];
                        var batchLength = 0;
                        while (queue[batchLength] && batchLength <= this.maxBatchSize) {
                            var element = queue[batchLength];
                            batchLength++;
                            if (this.folding) {
                                if (element.command.id == _commandConstants.VALUE_CHANGED_COMMAND_ID && batch.length > 0 && batch[batch.length - 1].command.id == _commandConstants.VALUE_CHANGED_COMMAND_ID && element.command.attributeId == batch[batch.length - 1].command.attributeId) {
                                    //merge ValueChange for same value
                                    batch[batch.length - 1].command.newValue = element.command.newValue;
                                } else if (element.command.id == _commandConstants.PRESENTATION_MODEL_DELETED_COMMAND_ID) {
                                    //We do not need it...
                                } else {
                                    batch.push(element);
                                }
                            } else {
                                batch.push(element);
                            }
                            if (element.handler) {
                                break;
                            }
                        }
                        queue.splice(0, batchLength);
                        return batch;
                    }
                }]);

                return BlindCommandBatcher;
            }();

            exports.default = BlindCommandBatcher;
        }, { "./commands/commandConstants": 94 }], 92: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof3 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof3(obj);
            };

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _utils = _dereq_('../utils');

            var _constants = _dereq_('../constants');

            var _commandConstants = _dereq_('./commandConstants');

            var _valueChangedCommand = _dereq_('./impl/valueChangedCommand');

            var _valueChangedCommand2 = _interopRequireDefault(_valueChangedCommand);

            var _attributeMetadataChangedCommand = _dereq_('./impl/attributeMetadataChangedCommand');

            var _attributeMetadataChangedCommand2 = _interopRequireDefault(_attributeMetadataChangedCommand);

            var _callActionCommand = _dereq_('./impl/callActionCommand');

            var _callActionCommand2 = _interopRequireDefault(_callActionCommand);

            var _changeAttributeMetadataCommand = _dereq_('./impl/changeAttributeMetadataCommand');

            var _changeAttributeMetadataCommand2 = _interopRequireDefault(_changeAttributeMetadataCommand);

            var _createContextCommand = _dereq_('./impl/createContextCommand');

            var _createContextCommand2 = _interopRequireDefault(_createContextCommand);

            var _createControllerCommand = _dereq_('./impl/createControllerCommand');

            var _createControllerCommand2 = _interopRequireDefault(_createControllerCommand);

            var _createPresentationModelCommand = _dereq_('./impl/createPresentationModelCommand');

            var _createPresentationModelCommand2 = _interopRequireDefault(_createPresentationModelCommand);

            var _deletePresentationModelCommand = _dereq_('./impl/deletePresentationModelCommand');

            var _deletePresentationModelCommand2 = _interopRequireDefault(_deletePresentationModelCommand);

            var _destroyContextCommand = _dereq_('./impl/destroyContextCommand');

            var _destroyContextCommand2 = _interopRequireDefault(_destroyContextCommand);

            var _destroyControllerCommand = _dereq_('./impl/destroyControllerCommand');

            var _destroyControllerCommand2 = _interopRequireDefault(_destroyControllerCommand);

            var _interruptLongPollCommand = _dereq_('./impl/interruptLongPollCommand');

            var _interruptLongPollCommand2 = _interopRequireDefault(_interruptLongPollCommand);

            var _presentationModelDeletedCommand = _dereq_('./impl/presentationModelDeletedCommand');

            var _presentationModelDeletedCommand2 = _interopRequireDefault(_presentationModelDeletedCommand);

            var _startLongPollCommand = _dereq_('./impl/startLongPollCommand');

            var _startLongPollCommand2 = _interopRequireDefault(_startLongPollCommand);

            var _codecError = _dereq_('./codecError');

            var _codecError2 = _interopRequireDefault(_codecError);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var Codec = function () {
                function Codec() {
                    _classCallCheck(this, Codec);
                }

                _createClass(Codec, null, [{
                    key: '_encodeAttributeMetadataChangedCommand',
                    value: function _encodeAttributeMetadataChangedCommand(command) {
                        (0, _utils.checkMethod)("Codec.encodeAttributeMetadataChangedCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.attributeId, "command.attributeId");
                        (0, _utils.checkParam)(command.metadataName, "command.metadataName");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.ATTRIBUTE_METADATA_CHANGED_COMMAND_ID;
                        jsonCommand[_commandConstants.ATTRIBUTE_ID] = command.attributeId;
                        jsonCommand[_commandConstants.NAME] = command.metadataName;
                        jsonCommand[_commandConstants.VALUE] = command.value;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeAttributeMetadataChangedCommand',
                    value: function _decodeAttributeMetadataChangedCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec.decodeAttributeMetadataChangedCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.ATTRIBUTE_ID], "jsonCommand[ATTRIBUTE_ID]");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.NAME], "jsonCommand[NAME]");

                        var command = new _attributeMetadataChangedCommand2.default();
                        command.attributeId = jsonCommand[_commandConstants.ATTRIBUTE_ID];
                        command.metadataName = jsonCommand[_commandConstants.NAME];
                        command.value = jsonCommand[_commandConstants.VALUE];
                        return command;
                    }
                }, {
                    key: '_encodeCallActionCommand',
                    value: function _encodeCallActionCommand(command) {
                        (0, _utils.checkMethod)("Codec.encodeCallActionCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.controllerid, "command.controllerid");
                        (0, _utils.checkParam)(command.actionName, "command.actionName");
                        (0, _utils.checkParam)(command.params, "command.params");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.CALL_ACTION_COMMAND_ID;
                        jsonCommand[_commandConstants.CONTROLLER_ID] = command.controllerid;
                        jsonCommand[_commandConstants.NAME] = command.actionName;
                        jsonCommand[_commandConstants.PARAMS] = command.params.map(function (param) {
                            var result = {};
                            result[_commandConstants.NAME] = param.name;
                            if ((0, _utils.exists)(param.value)) {
                                result[_commandConstants.VALUE] = param.value;
                            }
                            return result;
                        });
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCallActionCommand',
                    value: function _decodeCallActionCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec.decodeCallActionCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.CONTROLLER_ID], "jsonCommand[CONTROLLER_ID]");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.NAME], "jsonCommand[NAME]");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.PARAMS], "jsonCommand[PARAMS]");

                        var command = new _callActionCommand2.default();
                        command.controllerid = jsonCommand[_commandConstants.CONTROLLER_ID];
                        command.actionName = jsonCommand[_commandConstants.NAME];
                        //TODO: Für die Params sollten wir eine Klasse bereitstellen
                        command.params = jsonCommand[_commandConstants.PARAMS].map(function (param) {
                            return {
                                'name': param[_commandConstants.NAME],
                                'value': (0, _utils.exists)(param[_commandConstants.VALUE]) ? param[_commandConstants.VALUE] : null
                            };
                        });
                        return command;
                    }
                }, {
                    key: '_encodeChangeAttributeMetadataCommand',
                    value: function _encodeChangeAttributeMetadataCommand(command) {
                        (0, _utils.checkMethod)("Codec.encodeChangeAttributeMetadataCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.attributeId, "command.attributeId");
                        (0, _utils.checkParam)(command.metadataName, "command.metadataName");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.CHANGE_ATTRIBUTE_METADATA_COMMAND_ID;
                        jsonCommand[_commandConstants.ATTRIBUTE_ID] = command.attributeId;
                        jsonCommand[_commandConstants.NAME] = command.metadataName;
                        jsonCommand[_commandConstants.VALUE] = command.value;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeChangeAttributeMetadataCommand',
                    value: function _decodeChangeAttributeMetadataCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec.decodeChangeAttributeMetadataCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.ATTRIBUTE_ID], "jsonCommand[ATTRIBUTE_ID]");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.NAME], "jsonCommand[NAME]");

                        var command = new _changeAttributeMetadataCommand2.default();
                        command.attributeId = jsonCommand[_commandConstants.ATTRIBUTE_ID];
                        command.metadataName = jsonCommand[_commandConstants.NAME];
                        command.value = jsonCommand[_commandConstants.VALUE];
                        return command;
                    }
                }, {
                    key: '_encodeCreateContextCommand',
                    value: function _encodeCreateContextCommand(command) {
                        (0, _utils.checkMethod)("Codec.encodeCreateContextCommand");
                        (0, _utils.checkParam)(command, "command");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.CREATE_CONTEXT_COMMAND_ID;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCreateContextCommand',
                    value: function _decodeCreateContextCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec.decodeCreateContextCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");

                        var command = new _createContextCommand2.default();
                        return command;
                    }
                }, {
                    key: '_encodeCreateControllerCommand',
                    value: function _encodeCreateControllerCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodeCreateControllerCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.controllerName, "command.controllerName");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.CREATE_CONTROLLER_COMMAND_ID;
                        jsonCommand[_commandConstants.NAME] = command.controllerName;
                        jsonCommand[_commandConstants.CONTROLLER_ID] = command.parentControllerId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCreateControllerCommand',
                    value: function _decodeCreateControllerCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodeCreateControllerCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.NAME], "jsonCommand[NAME]");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.CONTROLLER_ID], "jsonCommand[CONTROLLER_ID]");

                        var command = new _createControllerCommand2.default();
                        command.controllerName = jsonCommand[_commandConstants.NAME];
                        command.parentControllerId = jsonCommand[_commandConstants.CONTROLLER_ID];
                        return command;
                    }
                }, {
                    key: '_encodeCreatePresentationModelCommand',
                    value: function _encodeCreatePresentationModelCommand(command) {
                        (0, _utils.checkMethod)("Codec.encodeCreatePresentationModelCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.pmId, "command.pmId");
                        (0, _utils.checkParam)(command.pmType, "command.pmType");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.CREATE_PRESENTATION_MODEL_COMMAND_ID;
                        jsonCommand[_commandConstants.PM_ID] = command.pmId;
                        jsonCommand[_commandConstants.PM_TYPE] = command.pmType;
                        jsonCommand[_commandConstants.PM_ATTRIBUTES] = command.attributes.map(function (attribute) {
                            var result = {};
                            result[_commandConstants.NAME] = attribute.propertyName;
                            result[_commandConstants.ATTRIBUTE_ID] = attribute.id;
                            if ((0, _utils.exists)(attribute.value)) {
                                result[_commandConstants.VALUE] = attribute.value;
                            }
                            return result;
                        });
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeCreatePresentationModelCommand',
                    value: function _decodeCreatePresentationModelCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec.decodeCreatePresentationModelCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.PM_ID], "jsonCommand[PM_ID]");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.PM_TYPE], "jsonCommand[PM_TYPE]");

                        var command = new _createPresentationModelCommand2.default();
                        command.pmId = jsonCommand[_commandConstants.PM_ID];
                        command.pmType = jsonCommand[_commandConstants.PM_TYPE];

                        //TODO: Für die Attribute sollten wir eine Klasse bereitstellen
                        command.attributes = jsonCommand[_commandConstants.PM_ATTRIBUTES].map(function (attribute) {
                            return {
                                'propertyName': attribute[_commandConstants.NAME],
                                'id': attribute[_commandConstants.ATTRIBUTE_ID],
                                'value': (0, _utils.exists)(attribute[_commandConstants.VALUE]) ? attribute[_commandConstants.VALUE] : null
                            };
                        });
                        return command;
                    }
                }, {
                    key: '_encodeDeletePresentationModelCommand',
                    value: function _encodeDeletePresentationModelCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodeDeletePresentationModelCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.pmId, "command.pmId");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.DELETE_PRESENTATION_MODEL_COMMAND_ID;
                        jsonCommand[_commandConstants.PM_ID] = command.pmId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeDeletePresentationModelCommand',
                    value: function _decodeDeletePresentationModelCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodeDeletePresentationModelCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.PM_ID], "jsonCommand[PM_ID]");

                        var command = new _deletePresentationModelCommand2.default();
                        command.pmId = jsonCommand[_commandConstants.PM_ID];
                        return command;
                    }
                }, {
                    key: '_encodeDestroyContextCommand',
                    value: function _encodeDestroyContextCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodeDestroyContextCommand");
                        (0, _utils.checkParam)(command, "command");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.DESTROY_CONTEXT_COMMAND_ID;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeDestroyContextCommand',
                    value: function _decodeDestroyContextCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodeDestroyContextCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");

                        var command = new _destroyContextCommand2.default();
                        return command;
                    }
                }, {
                    key: '_encodeDestroyControllerCommand',
                    value: function _encodeDestroyControllerCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodeDestroyControllerCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.controllerId, "command.controllerId");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.DESTROY_CONTROLLER_COMMAND_ID;
                        jsonCommand[_commandConstants.CONTROLLER_ID] = command.controllerId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeDestroyControllerCommand',
                    value: function _decodeDestroyControllerCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodeDestroyControllerCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.CONTROLLER_ID], "jsonCommand[CONTROLLER_ID]");

                        var command = new _destroyControllerCommand2.default();
                        command.controllerId = jsonCommand[_commandConstants.CONTROLLER_ID];
                        return command;
                    }
                }, {
                    key: '_encodeInterruptLongPollCommand',
                    value: function _encodeInterruptLongPollCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodeInterruptLongPollCommand");
                        (0, _utils.checkParam)(command, "command");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.INTERRUPT_LONG_POLL_COMMAND_ID;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeInterruptLongPollCommand',
                    value: function _decodeInterruptLongPollCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodeInterruptLongPollCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");

                        var command = new _interruptLongPollCommand2.default();
                        return command;
                    }
                }, {
                    key: '_encodePresentationModelDeletedCommand',
                    value: function _encodePresentationModelDeletedCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodePresentationModelDeletedCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.pmId, "command.pmId");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.PRESENTATION_MODEL_DELETED_COMMAND_ID;
                        jsonCommand[_commandConstants.PM_ID] = command.pmId;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodePresentationModelDeletedCommand',
                    value: function _decodePresentationModelDeletedCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodePresentationModelDeletedCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.PM_ID], "jsonCommand[PM_ID]");

                        var command = new _presentationModelDeletedCommand2.default();
                        command.pmId = jsonCommand[_commandConstants.PM_ID];
                        return command;
                    }
                }, {
                    key: '_encodeStartLongPollCommand',
                    value: function _encodeStartLongPollCommand(command) {
                        (0, _utils.checkMethod)("Codec._encodeStartLongPollCommand");
                        (0, _utils.checkParam)(command, "command");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.START_LONG_POLL_COMMAND_ID;
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeStartLongPollCommand',
                    value: function _decodeStartLongPollCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec._decodeStartLongPollCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");

                        var command = new _startLongPollCommand2.default();
                        return command;
                    }
                }, {
                    key: '_encodeValueChangedCommand',
                    value: function _encodeValueChangedCommand(command) {
                        (0, _utils.checkMethod)("Codec.encodeValueChangedCommand");
                        (0, _utils.checkParam)(command, "command");
                        (0, _utils.checkParam)(command.attributeId, "command.attributeId");

                        var jsonCommand = {};
                        jsonCommand[_commandConstants.ID] = _commandConstants.VALUE_CHANGED_COMMAND_ID;
                        jsonCommand[_commandConstants.ATTRIBUTE_ID] = command.attributeId;
                        if ((0, _utils.exists)(command.newValue)) {
                            jsonCommand[_commandConstants.VALUE] = command.newValue;
                        }
                        return jsonCommand;
                    }
                }, {
                    key: '_decodeValueChangedCommand',
                    value: function _decodeValueChangedCommand(jsonCommand) {
                        (0, _utils.checkMethod)("Codec.decodeValueChangedCommand");
                        (0, _utils.checkParam)(jsonCommand, "jsonCommand");
                        (0, _utils.checkParam)(jsonCommand[_commandConstants.ATTRIBUTE_ID], "jsonCommand[ATTRIBUTE_ID]");

                        var command = new _valueChangedCommand2.default();
                        command.attributeId = jsonCommand[_commandConstants.ATTRIBUTE_ID];
                        if ((0, _utils.exists)(jsonCommand[_commandConstants.VALUE])) {
                            command.newValue = jsonCommand[_commandConstants.VALUE];
                        } else {
                            command.newValue = null;
                        }
                        return command;
                    }
                }, {
                    key: 'encode',
                    value: function encode(commands) {
                        (0, _utils.checkMethod)("Codec.encode");
                        (0, _utils.checkParam)(commands, "commands");

                        var self = this;
                        return JSON.stringify(commands.map(function (command) {
                            if (command.id === _commandConstants.ATTRIBUTE_METADATA_CHANGED_COMMAND_ID) {
                                return self._encodeAttributeMetadataChangedCommand(command);
                            } else if (command.id === _commandConstants.CALL_ACTION_COMMAND_ID) {
                                return self._encodeCallActionCommand(command);
                            } else if (command.id === _commandConstants.CHANGE_ATTRIBUTE_METADATA_COMMAND_ID) {
                                return self._encodeChangeAttributeMetadataCommand(command);
                            } else if (command.id === _commandConstants.CREATE_CONTEXT_COMMAND_ID) {
                                return self._encodeCreateContextCommand(command);
                            } else if (command.id === _commandConstants.CREATE_CONTROLLER_COMMAND_ID) {
                                return self._encodeCreateControllerCommand(command);
                            } else if (command.id === _commandConstants.CREATE_PRESENTATION_MODEL_COMMAND_ID) {
                                return self._encodeCreatePresentationModelCommand(command);
                            } else if (command.id === _commandConstants.DELETE_PRESENTATION_MODEL_COMMAND_ID) {
                                return self._encodeDeletePresentationModelCommand(command);
                            } else if (command.id === _commandConstants.DESTROY_CONTEXT_COMMAND_ID) {
                                return self._encodeDestroyContextCommand(command);
                            } else if (command.id === _commandConstants.DESTROY_CONTROLLER_COMMAND_ID) {
                                return self._encodeDestroyControllerCommand(command);
                            } else if (command.id === _commandConstants.INTERRUPT_LONG_POLL_COMMAND_ID) {
                                return self._encodeInterruptLongPollCommand(command);
                            } else if (command.id === _commandConstants.PRESENTATION_MODEL_DELETED_COMMAND_ID) {
                                return self._encodePresentationModelDeletedCommand(command);
                            } else if (command.id === _commandConstants.START_LONG_POLL_COMMAND_ID) {
                                return self._encodeStartLongPollCommand(command);
                            } else if (command.id === _commandConstants.VALUE_CHANGED_COMMAND_ID) {
                                return self._encodeValueChangedCommand(command);
                            } else {
                                throw new _codecError2.default('Command of type ' + command.id + ' can not be handled');
                            }
                        }));
                    }
                }, {
                    key: 'decode',
                    value: function decode(transmitted) {
                        (0, _utils.checkMethod)("Codec.decode");
                        (0, _utils.checkParam)(transmitted, "transmitted");

                        if ((typeof transmitted === 'undefined' ? 'undefined' : _typeof(transmitted)) === _constants.JS_STRING_TYPE) {
                            var self = this;
                            return JSON.parse(transmitted).map(function (command) {
                                if (command.id === _commandConstants.ATTRIBUTE_METADATA_CHANGED_COMMAND_ID) {
                                    return self._decodeAttributeMetadataChangedCommand(command);
                                } else if (command.id === _commandConstants.CALL_ACTION_COMMAND_ID) {
                                    return self._decodeCallActionCommand(command);
                                } else if (command.id === _commandConstants.CHANGE_ATTRIBUTE_METADATA_COMMAND_ID) {
                                    return self._decodeChangeAttributeMetadataCommand(command);
                                } else if (command.id === _commandConstants.CREATE_CONTEXT_COMMAND_ID) {
                                    return self._decodeCreateContextCommand(command);
                                } else if (command.id === _commandConstants.CREATE_CONTROLLER_COMMAND_ID) {
                                    return self._decodeCreateControllerCommand(command);
                                } else if (command.id === _commandConstants.CREATE_PRESENTATION_MODEL_COMMAND_ID) {
                                    return self._decodeCreatePresentationModelCommand(command);
                                } else if (command.id === _commandConstants.DELETE_PRESENTATION_MODEL_COMMAND_ID) {
                                    return self._decodeDeletePresentationModelCommand(command);
                                } else if (command.id === _commandConstants.DESTROY_CONTEXT_COMMAND_ID) {
                                    return self._decodeDestroyContextCommand(command);
                                } else if (command.id === _commandConstants.DESTROY_CONTROLLER_COMMAND_ID) {
                                    return self._decodeDestroyControllerCommand(command);
                                } else if (command.id === _commandConstants.INTERRUPT_LONG_POLL_COMMAND_ID) {
                                    return self._decodeInterruptLongPollCommand(command);
                                } else if (command.id === _commandConstants.PRESENTATION_MODEL_DELETED_COMMAND_ID) {
                                    return self._decodePresentationModelDeletedCommand(command);
                                } else if (command.id === _commandConstants.START_LONG_POLL_COMMAND_ID) {
                                    return self._decodeStartLongPollCommand(command);
                                } else if (command.id === _commandConstants.VALUE_CHANGED_COMMAND_ID) {
                                    return self._decodeValueChangedCommand(command);
                                } else {
                                    throw new _codecError2.default('Command of type ' + command.id + ' can not be handled');
                                }
                            });
                        } else {
                            throw new _codecError2.default('Can not decode data that is not of type string');
                        }
                    }
                }]);

                return Codec;
            }();

            exports.default = Codec;
        }, { "../constants": 110, "../utils": 121, "./codecError": 93, "./commandConstants": 94, "./impl/attributeMetadataChangedCommand": 96, "./impl/callActionCommand": 97, "./impl/changeAttributeMetadataCommand": 98, "./impl/createContextCommand": 99, "./impl/createControllerCommand": 100, "./impl/createPresentationModelCommand": 101, "./impl/deletePresentationModelCommand": 102, "./impl/destroyContextCommand": 103, "./impl/destroyControllerCommand": 104, "./impl/interruptLongPollCommand": 105, "./impl/presentationModelDeletedCommand": 106, "./impl/startLongPollCommand": 107, "./impl/valueChangedCommand": 108 }], 93: [function (_dereq_, module, exports) {
            "use strict";

            var _typeof2 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var CodecError = function (_Error) {
                _inherits(CodecError, _Error);

                function CodecError(message) {
                    _classCallCheck(this, CodecError);

                    return _possibleConstructorReturn(this, (CodecError.__proto__ || Object.getPrototypeOf(CodecError)).call(this, message));
                }

                return CodecError;
            }(Error);

            exports.default = CodecError;
        }, {}], 94: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var ATTRIBUTE_METADATA_CHANGED_COMMAND_ID = exports.ATTRIBUTE_METADATA_CHANGED_COMMAND_ID = 'AttributeMetadataChanged';
            var CALL_ACTION_COMMAND_ID = exports.CALL_ACTION_COMMAND_ID = 'CallAction';
            var CHANGE_ATTRIBUTE_METADATA_COMMAND_ID = exports.CHANGE_ATTRIBUTE_METADATA_COMMAND_ID = 'ChangeAttributeMetadata';
            var CREATE_CONTEXT_COMMAND_ID = exports.CREATE_CONTEXT_COMMAND_ID = 'CreateContext';
            var CREATE_CONTROLLER_COMMAND_ID = exports.CREATE_CONTROLLER_COMMAND_ID = 'CreateController';
            var CREATE_PRESENTATION_MODEL_COMMAND_ID = exports.CREATE_PRESENTATION_MODEL_COMMAND_ID = 'CreatePresentationModel';
            var DELETE_PRESENTATION_MODEL_COMMAND_ID = exports.DELETE_PRESENTATION_MODEL_COMMAND_ID = 'DeletePresentationModel';
            var DESTROY_CONTEXT_COMMAND_ID = exports.DESTROY_CONTEXT_COMMAND_ID = 'DestroyContext';
            var DESTROY_CONTROLLER_COMMAND_ID = exports.DESTROY_CONTROLLER_COMMAND_ID = 'DestroyController';
            var INTERRUPT_LONG_POLL_COMMAND_ID = exports.INTERRUPT_LONG_POLL_COMMAND_ID = 'InterruptLongPoll';
            var PRESENTATION_MODEL_DELETED_COMMAND_ID = exports.PRESENTATION_MODEL_DELETED_COMMAND_ID = 'PresentationModelDeleted';
            var START_LONG_POLL_COMMAND_ID = exports.START_LONG_POLL_COMMAND_ID = 'StartLongPoll';
            var VALUE_CHANGED_COMMAND_ID = exports.VALUE_CHANGED_COMMAND_ID = 'ValueChanged';

            var ID = exports.ID = "id";
            var ATTRIBUTE_ID = exports.ATTRIBUTE_ID = "a_id";
            var PM_ID = exports.PM_ID = "p_id";
            var CONTROLLER_ID = exports.CONTROLLER_ID = "c_id";
            var PM_TYPE = exports.PM_TYPE = "t";
            var NAME = exports.NAME = "n";
            var VALUE = exports.VALUE = "v";
            var PARAMS = exports.PARAMS = "p";
            var PM_ATTRIBUTES = exports.PM_ATTRIBUTES = "a";
        }, {}], 95: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _createContextCommand = _dereq_('./impl/createContextCommand');

            var _createContextCommand2 = _interopRequireDefault(_createContextCommand);

            var _createControllerCommand = _dereq_('./impl/createControllerCommand');

            var _createControllerCommand2 = _interopRequireDefault(_createControllerCommand);

            var _callActionCommand = _dereq_('./impl/callActionCommand');

            var _callActionCommand2 = _interopRequireDefault(_callActionCommand);

            var _destroyControllerCommand = _dereq_('./impl/destroyControllerCommand');

            var _destroyControllerCommand2 = _interopRequireDefault(_destroyControllerCommand);

            var _destroyContextCommand = _dereq_('./impl/destroyContextCommand');

            var _destroyContextCommand2 = _interopRequireDefault(_destroyContextCommand);

            var _startLongPollCommand = _dereq_('./impl/startLongPollCommand');

            var _startLongPollCommand2 = _interopRequireDefault(_startLongPollCommand);

            var _interruptLongPollCommand = _dereq_('./impl/interruptLongPollCommand');

            var _interruptLongPollCommand2 = _interopRequireDefault(_interruptLongPollCommand);

            var _createPresentationModelCommand = _dereq_('./impl/createPresentationModelCommand');

            var _createPresentationModelCommand2 = _interopRequireDefault(_createPresentationModelCommand);

            var _deletePresentationModelCommand = _dereq_('./impl/deletePresentationModelCommand');

            var _deletePresentationModelCommand2 = _interopRequireDefault(_deletePresentationModelCommand);

            var _presentationModelDeletedCommand = _dereq_('./impl/presentationModelDeletedCommand');

            var _presentationModelDeletedCommand2 = _interopRequireDefault(_presentationModelDeletedCommand);

            var _valueChangedCommand = _dereq_('./impl/valueChangedCommand');

            var _valueChangedCommand2 = _interopRequireDefault(_valueChangedCommand);

            var _changeAttributeMetadataCommand = _dereq_('./impl/changeAttributeMetadataCommand');

            var _changeAttributeMetadataCommand2 = _interopRequireDefault(_changeAttributeMetadataCommand);

            var _attributeMetadataChangedCommand = _dereq_('./impl/attributeMetadataChangedCommand');

            var _attributeMetadataChangedCommand2 = _interopRequireDefault(_attributeMetadataChangedCommand);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CommandFactory = function () {
                function CommandFactory() {
                    _classCallCheck(this, CommandFactory);
                }

                _createClass(CommandFactory, null, [{
                    key: 'createCreateContextCommand',
                    value: function createCreateContextCommand() {
                        return new _createContextCommand2.default();
                    }
                }, {
                    key: 'createCreateControllerCommand',
                    value: function createCreateControllerCommand(controllerName, parentControllerId) {
                        var command = new _createControllerCommand2.default();
                        command.init(controllerName, parentControllerId);
                        return command;
                    }
                }, {
                    key: 'createCallActionCommand',
                    value: function createCallActionCommand(controllerid, actionName, params) {
                        var command = new _callActionCommand2.default();
                        command.init(controllerid, actionName, params);
                        return command;
                    }
                }, {
                    key: 'createDestroyControllerCommand',
                    value: function createDestroyControllerCommand(controllerId) {
                        var command = new _destroyControllerCommand2.default();
                        command.init(controllerId);
                        return command;
                    }
                }, {
                    key: 'createDestroyContextCommand',
                    value: function createDestroyContextCommand() {
                        return new _destroyContextCommand2.default();
                    }
                }, {
                    key: 'createStartLongPollCommand',
                    value: function createStartLongPollCommand() {
                        return new _startLongPollCommand2.default();
                    }
                }, {
                    key: 'createInterruptLongPollCommand',
                    value: function createInterruptLongPollCommand() {
                        return new _interruptLongPollCommand2.default();
                    }
                }, {
                    key: 'createCreatePresentationModelCommand',
                    value: function createCreatePresentationModelCommand(presentationModel) {
                        var command = new _createPresentationModelCommand2.default();
                        command.init(presentationModel);
                        return command;
                    }
                }, {
                    key: 'createDeletePresentationModelCommand',
                    value: function createDeletePresentationModelCommand(pmId) {
                        var command = new _deletePresentationModelCommand2.default();
                        command.init(pmId);
                        return command;
                    }
                }, {
                    key: 'createPresentationModelDeletedCommand',
                    value: function createPresentationModelDeletedCommand(pmId) {
                        var command = new _presentationModelDeletedCommand2.default();
                        command.init(pmId);
                        return command;
                    }
                }, {
                    key: 'createValueChangedCommand',
                    value: function createValueChangedCommand(attributeId, newValue) {
                        var command = new _valueChangedCommand2.default();
                        command.init(attributeId, newValue);
                        return command;
                    }
                }, {
                    key: 'createChangeAttributeMetadataCommand',
                    value: function createChangeAttributeMetadataCommand(attributeId, metadataName, value) {
                        var command = new _changeAttributeMetadataCommand2.default();
                        command.init(attributeId, metadataName, value);
                        return command;
                    }
                }, {
                    key: 'createAttributeMetadataChangedCommand',
                    value: function createAttributeMetadataChangedCommand(attributeId, metadataName, value) {
                        var command = new _attributeMetadataChangedCommand2.default();
                        command.init(attributeId, metadataName, value);
                        return command;
                    }
                }]);

                return CommandFactory;
            }();

            exports.default = CommandFactory;
        }, { "./impl/attributeMetadataChangedCommand": 96, "./impl/callActionCommand": 97, "./impl/changeAttributeMetadataCommand": 98, "./impl/createContextCommand": 99, "./impl/createControllerCommand": 100, "./impl/createPresentationModelCommand": 101, "./impl/deletePresentationModelCommand": 102, "./impl/destroyContextCommand": 103, "./impl/destroyControllerCommand": 104, "./impl/interruptLongPollCommand": 105, "./impl/presentationModelDeletedCommand": 106, "./impl/startLongPollCommand": 107, "./impl/valueChangedCommand": 108 }], 96: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var AttributeMetadataChangedCommand = function () {
                function AttributeMetadataChangedCommand() {
                    _classCallCheck(this, AttributeMetadataChangedCommand);

                    this.id = _commandConstants.ATTRIBUTE_METADATA_CHANGED_COMMAND_ID;
                }

                _createClass(AttributeMetadataChangedCommand, [{
                    key: 'init',
                    value: function init(attributeId, metadataName, value) {
                        (0, _utils.checkMethod)('AttributeMetadataChangedCommand.init()');
                        (0, _utils.checkParam)(attributeId, 'attributeId');
                        (0, _utils.checkParam)(metadataName, 'metadataName');

                        this.attributeId = attributeId;
                        this.metadataName = metadataName;
                        this.value = value;
                    }
                }]);

                return AttributeMetadataChangedCommand;
            }();

            exports.default = AttributeMetadataChangedCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 97: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CallActionCommand = function () {
                function CallActionCommand() {
                    _classCallCheck(this, CallActionCommand);

                    this.id = _commandConstants.CALL_ACTION_COMMAND_ID;
                }

                _createClass(CallActionCommand, [{
                    key: 'init',
                    value: function init(controllerid, actionName, params) {
                        (0, _utils.checkMethod)('CreateControllerCommand.init()');
                        (0, _utils.checkParam)(controllerid, 'controllerid');
                        (0, _utils.checkParam)(actionName, 'actionName');

                        this.controllerid = controllerid;
                        this.actionName = actionName;
                        this.params = params;
                    }
                }]);

                return CallActionCommand;
            }();

            exports.default = CallActionCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 98: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ChangeAttributeMetadataCommand = function () {
                function ChangeAttributeMetadataCommand() {
                    _classCallCheck(this, ChangeAttributeMetadataCommand);

                    this.id = _commandConstants.CHANGE_ATTRIBUTE_METADATA_COMMAND_ID;
                }

                _createClass(ChangeAttributeMetadataCommand, [{
                    key: 'init',
                    value: function init(attributeId, metadataName, value) {
                        (0, _utils.checkMethod)('ChangeAttributeMetadataCommand.init()');
                        (0, _utils.checkParam)(attributeId, 'attributeId');
                        (0, _utils.checkParam)(metadataName, 'metadataName');

                        this.attributeId = attributeId;
                        this.metadataName = metadataName;
                        this.value = value;
                    }
                }]);

                return ChangeAttributeMetadataCommand;
            }();

            exports.default = ChangeAttributeMetadataCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 99: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _commandConstants = _dereq_('../commandConstants');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CreateContextCommand = function CreateContextCommand() {
                _classCallCheck(this, CreateContextCommand);

                this.id = _commandConstants.CREATE_CONTEXT_COMMAND_ID;
            };

            exports.default = CreateContextCommand;
        }, { "../commandConstants": 94 }], 100: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CreateControllerCommand = function () {
                function CreateControllerCommand() {
                    _classCallCheck(this, CreateControllerCommand);

                    this.id = _commandConstants.CREATE_CONTROLLER_COMMAND_ID;
                }

                _createClass(CreateControllerCommand, [{
                    key: 'init',
                    value: function init(controllerName, parentControllerId) {
                        (0, _utils.checkMethod)('CreateControllerCommand.init()');
                        (0, _utils.checkParam)(controllerName, 'controllerName');

                        this.controllerName = controllerName;
                        this.parentControllerId = parentControllerId;
                    }
                }]);

                return CreateControllerCommand;
            }();

            exports.default = CreateControllerCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 101: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CreatePresentationModelCommand = function () {
                function CreatePresentationModelCommand() {
                    _classCallCheck(this, CreatePresentationModelCommand);

                    this.id = _commandConstants.CREATE_PRESENTATION_MODEL_COMMAND_ID;
                }

                _createClass(CreatePresentationModelCommand, [{
                    key: 'init',
                    value: function init(presentationModel) {
                        (0, _utils.checkMethod)('CreatePresentationModelCommand.init()');
                        (0, _utils.checkParam)(presentationModel, 'presentationModel');

                        this.attributes = [];
                        this.clientSideOnly = false;
                        this.pmId = presentationModel.id;
                        this.pmType = presentationModel.presentationModelType;
                        var command = this;
                        presentationModel.getAttributes().forEach(function (attr) {
                            command.attributes.push({
                                propertyName: attr.propertyName,
                                id: attr.id,
                                value: attr.getValue()
                            });
                        });
                    }
                }]);

                return CreatePresentationModelCommand;
            }();

            exports.default = CreatePresentationModelCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 102: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DeletePresentationModelCommand = function () {
                function DeletePresentationModelCommand() {
                    _classCallCheck(this, DeletePresentationModelCommand);

                    this.id = _commandConstants.DELETE_PRESENTATION_MODEL_COMMAND_ID;
                }

                _createClass(DeletePresentationModelCommand, [{
                    key: 'init',
                    value: function init(pmId) {
                        (0, _utils.checkMethod)('DeletePresentationModelCommand.init()');
                        (0, _utils.checkParam)(pmId, 'pmId');

                        this.pmId = pmId;
                    }
                }]);

                return DeletePresentationModelCommand;
            }();

            exports.default = DeletePresentationModelCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 103: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _commandConstants = _dereq_('../commandConstants');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DestroyContextCommand = function DestroyContextCommand() {
                _classCallCheck(this, DestroyContextCommand);

                this.id = _commandConstants.DESTROY_CONTEXT_COMMAND_ID;
            };

            exports.default = DestroyContextCommand;
        }, { "../commandConstants": 94 }], 104: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DestroyControllerCommand = function () {
                function DestroyControllerCommand() {
                    _classCallCheck(this, DestroyControllerCommand);

                    this.id = _commandConstants.DESTROY_CONTROLLER_COMMAND_ID;
                }

                _createClass(DestroyControllerCommand, [{
                    key: 'init',
                    value: function init(controllerId) {
                        (0, _utils.checkMethod)('DestroyControllerCommand.init()');
                        (0, _utils.checkParam)(controllerId, 'controllerId');

                        this.controllerId = controllerId;
                    }
                }]);

                return DestroyControllerCommand;
            }();

            exports.default = DestroyControllerCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 105: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _commandConstants = _dereq_('../commandConstants');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var InterruptLongPollCommand = function InterruptLongPollCommand() {
                _classCallCheck(this, InterruptLongPollCommand);

                this.id = _commandConstants.INTERRUPT_LONG_POLL_COMMAND_ID;
            };

            exports.default = InterruptLongPollCommand;
        }, { "../commandConstants": 94 }], 106: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var PresentationModelDeletedCommand = function () {
                function PresentationModelDeletedCommand() {
                    _classCallCheck(this, PresentationModelDeletedCommand);

                    this.id = _commandConstants.PRESENTATION_MODEL_DELETED_COMMAND_ID;
                }

                _createClass(PresentationModelDeletedCommand, [{
                    key: 'init',
                    value: function init(pmId) {
                        (0, _utils.checkMethod)('PresentationModelDeletedCommand.init()');
                        (0, _utils.checkParam)(pmId, 'pmId');

                        this.pmId = pmId;
                    }
                }]);

                return PresentationModelDeletedCommand;
            }();

            exports.default = PresentationModelDeletedCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 107: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _commandConstants = _dereq_('../commandConstants');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var StartLongPollCommand = function StartLongPollCommand() {
                _classCallCheck(this, StartLongPollCommand);

                this.id = _commandConstants.START_LONG_POLL_COMMAND_ID;
            };

            exports.default = StartLongPollCommand;
        }, { "../commandConstants": 94 }], 108: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _commandConstants = _dereq_('../commandConstants');

            var _utils = _dereq_('../../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ValueChangedCommand = function () {
                function ValueChangedCommand() {
                    _classCallCheck(this, ValueChangedCommand);

                    this.id = _commandConstants.VALUE_CHANGED_COMMAND_ID;
                }

                _createClass(ValueChangedCommand, [{
                    key: 'init',
                    value: function init(attributeId, newValue) {
                        (0, _utils.checkMethod)('ValueChangedCommand.init()');
                        (0, _utils.checkParam)(attributeId, 'attributeId');

                        this.attributeId = attributeId;
                        this.newValue = newValue;
                    }
                }]);

                return ValueChangedCommand;
            }();

            exports.default = ValueChangedCommand;
        }, { "../../utils": 121, "../commandConstants": 94 }], 109: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _utils = _dereq_('./utils');

            var _commandFactory = _dereq_('./commands/commandFactory');

            var _commandFactory2 = _interopRequireDefault(_commandFactory);

            var _constants = _dereq_('./constants');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DOLPHIN_BEAN = '@@@ DOLPHIN_BEAN @@@';
            var ACTION_CALL_BEAN = '@@@ CONTROLLER_ACTION_CALL_BEAN @@@';
            var HIGHLANDER_BEAN = '@@@ HIGHLANDER_BEAN @@@';
            var DOLPHIN_LIST_SPLICE = '@DP:LS@';
            var SOURCE_SYSTEM = '@@@ SOURCE_SYSTEM @@@';
            var SOURCE_SYSTEM_CLIENT = 'client';
            var SOURCE_SYSTEM_SERVER = 'server';

            var Connector = function () {
                function Connector(url, dolphin, classRepository, config) {
                    _classCallCheck(this, Connector);

                    (0, _utils.checkMethod)('Connector(url, dolphin, classRepository, config)');
                    (0, _utils.checkParam)(url, 'url');
                    (0, _utils.checkParam)(dolphin, 'dolphin');
                    (0, _utils.checkParam)(classRepository, 'classRepository');

                    var self = this;
                    this.dolphin = dolphin;
                    this.config = config;
                    this.classRepository = classRepository;
                    this.highlanderPMResolver = function () {};
                    this.highlanderPMPromise = new _promise2.default(function (resolve) {
                        self.highlanderPMResolver = resolve;
                    });

                    dolphin.getClientModelStore().onModelStoreChange(function (event) {
                        var model = event.clientPresentationModel;
                        var sourceSystem = model.findAttributeByPropertyName(SOURCE_SYSTEM);
                        if ((0, _utils.exists)(sourceSystem) && sourceSystem.value === SOURCE_SYSTEM_SERVER) {
                            if (event.eventType === _constants.ADDED_TYPE) {
                                self.onModelAdded(model);
                            } else if (event.eventType === _constants.REMOVED_TYPE) {
                                self.onModelRemoved(model);
                            }
                        }
                    });
                }

                _createClass(Connector, [{
                    key: 'connect',
                    value: function connect() {
                        var that = this;
                        that.dolphin.startPushListening(_commandFactory2.default.createStartLongPollCommand(), _commandFactory2.default.createInterruptLongPollCommand());
                    }
                }, {
                    key: 'onModelAdded',
                    value: function onModelAdded(model) {
                        (0, _utils.checkMethod)('Connector.onModelAdded(model)');
                        (0, _utils.checkParam)(model, 'model');

                        var type = model.presentationModelType;
                        switch (type) {
                            case ACTION_CALL_BEAN:
                                // ignore
                                break;
                            case DOLPHIN_BEAN:
                                this.classRepository.registerClass(model);
                                break;
                            case HIGHLANDER_BEAN:
                                this.highlanderPMResolver(model);
                                break;
                            case DOLPHIN_LIST_SPLICE:
                                this.classRepository.spliceListEntry(model);
                                this.dolphin.deletePresentationModel(model);
                                break;
                            default:
                                this.classRepository.load(model);
                                break;
                        }
                    }
                }, {
                    key: 'onModelRemoved',
                    value: function onModelRemoved(model) {
                        (0, _utils.checkMethod)('Connector.onModelRemoved(model)');
                        (0, _utils.checkParam)(model, 'model');
                        var type = model.presentationModelType;
                        switch (type) {
                            case DOLPHIN_BEAN:
                                this.classRepository.unregisterClass(model);
                                break;
                            case DOLPHIN_LIST_SPLICE:
                                // do nothing
                                break;
                            default:
                                this.classRepository.unload(model);
                                break;
                        }
                    }
                }, {
                    key: 'invoke',
                    value: function invoke(command) {
                        (0, _utils.checkMethod)('Connector.invoke(command)');
                        (0, _utils.checkParam)(command, 'command');

                        var dolphin = this.dolphin;
                        return new _promise2.default(function (resolve) {
                            dolphin.send(command, {
                                onFinished: function onFinished() {
                                    resolve();
                                }
                            });
                        });
                    }
                }, {
                    key: 'getHighlanderPM',
                    value: function getHighlanderPM() {
                        return this.highlanderPMPromise;
                    }
                }]);

                return Connector;
            }();

            exports.default = Connector;

            exports.SOURCE_SYSTEM = SOURCE_SYSTEM;
            exports.SOURCE_SYSTEM_CLIENT = SOURCE_SYSTEM_CLIENT;
            exports.SOURCE_SYSTEM_SERVER = SOURCE_SYSTEM_SERVER;
            exports.ACTION_CALL_BEAN = ACTION_CALL_BEAN;
        }, { "../bower_components/core.js/library/fn/promise": 2, "./commands/commandFactory": 95, "./constants": 110, "./utils": 121 }], 110: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var JS_STRING_TYPE = exports.JS_STRING_TYPE = 'string';

            var DOLPHIN_BEAN = exports.DOLPHIN_BEAN = 0;
            var BYTE = exports.BYTE = 1;
            var SHORT = exports.SHORT = 2;
            var INT = exports.INT = 3;
            var LONG = exports.LONG = 4;
            var FLOAT = exports.FLOAT = 5;
            var DOUBLE = exports.DOUBLE = 6;
            var BOOLEAN = exports.BOOLEAN = 7;
            var STRING = exports.STRING = 8;
            var DATE = exports.DATE = 9;
            var ENUM = exports.ENUM = 10;
            var CALENDAR = exports.CALENDAR = 11;
            var LOCAL_DATE_FIELD_TYPE = exports.LOCAL_DATE_FIELD_TYPE = 55;
            var LOCAL_DATE_TIME_FIELD_TYPE = exports.LOCAL_DATE_TIME_FIELD_TYPE = 52;
            var ZONED_DATE_TIME_FIELD_TYPE = exports.ZONED_DATE_TIME_FIELD_TYPE = 54;

            var ADDED_TYPE = exports.ADDED_TYPE = "ADDED";
            var REMOVED_TYPE = exports.REMOVED_TYPE = "REMOVED";
        }, {}], 111: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _set = _dereq_('../bower_components/core.js/library/fn/set');

            var _set2 = _interopRequireDefault(_set);

            var _utils = _dereq_('./utils');

            var _controllerproxy = _dereq_('./controllerproxy.js');

            var _controllerproxy2 = _interopRequireDefault(_controllerproxy);

            var _commandFactory = _dereq_('./commands/commandFactory.js');

            var _commandFactory2 = _interopRequireDefault(_commandFactory);

            var _connector = _dereq_('./connector.js');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CONTROLLER_ID = 'controllerId';
            var MODEL = 'model';
            var ERROR_CODE = 'errorCode';

            var ControllerManager = function () {
                function ControllerManager(dolphin, classRepository, connector) {
                    _classCallCheck(this, ControllerManager);

                    (0, _utils.checkMethod)('ControllerManager(dolphin, classRepository, connector)');
                    (0, _utils.checkParam)(dolphin, 'dolphin');
                    (0, _utils.checkParam)(classRepository, 'classRepository');
                    (0, _utils.checkParam)(connector, 'connector');

                    this.dolphin = dolphin;
                    this.classRepository = classRepository;
                    this.connector = connector;
                    this.controllers = new _set2.default();
                }

                _createClass(ControllerManager, [{
                    key: 'createController',
                    value: function createController(name) {
                        return this._createController(name, null);
                    }
                }, {
                    key: '_createController',
                    value: function _createController(name, parentControllerId) {
                        (0, _utils.checkMethod)('ControllerManager.createController(name)');
                        (0, _utils.checkParam)(name, 'name');

                        var self = this;
                        var controllerId = void 0,
                            modelId = void 0,
                            model = void 0,
                            controller = void 0;
                        return new _promise2.default(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.connector.invoke(_commandFactory2.default.createCreateControllerCommand(name, parentControllerId)).then(function () {
                                    controllerId = highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).getValue();
                                    modelId = highlanderPM.findAttributeByPropertyName(MODEL).getValue();
                                    model = self.classRepository.mapDolphinToBean(modelId);
                                    controller = new _controllerproxy2.default(controllerId, model, self);
                                    self.controllers.add(controller);
                                    resolve(controller);
                                });
                            });
                        });
                    }
                }, {
                    key: 'invokeAction',
                    value: function invokeAction(controllerId, actionName, params) {
                        (0, _utils.checkMethod)('ControllerManager.invokeAction(controllerId, actionName, params)');
                        (0, _utils.checkParam)(controllerId, 'controllerId');
                        (0, _utils.checkParam)(actionName, 'actionName');

                        var self = this;
                        return new _promise2.default(function (resolve, reject) {

                            var attributes = [self.dolphin.attribute(_connector.SOURCE_SYSTEM, null, _connector.SOURCE_SYSTEM_CLIENT), self.dolphin.attribute(ERROR_CODE)];

                            var pm = self.dolphin.presentationModel.apply(self.dolphin, [null, _connector.ACTION_CALL_BEAN].concat(attributes));

                            var actionParams = [];
                            if ((0, _utils.exists)(params)) {
                                for (var param in params) {
                                    if (params.hasOwnProperty(param)) {
                                        var value = self.classRepository.mapParamToDolphin(params[param]);
                                        actionParams.push({ name: param, value: value });
                                    }
                                }
                            }

                            self.connector.invoke(_commandFactory2.default.createCallActionCommand(controllerId, actionName, actionParams)).then(function () {
                                var isError = pm.findAttributeByPropertyName(ERROR_CODE).getValue();
                                if (isError) {
                                    reject(new Error("Server side ControllerAction " + actionName + " caused an error. Please see server log for details."));
                                } else {
                                    resolve();
                                }
                                self.dolphin.deletePresentationModel(pm);
                            });
                        });
                    }
                }, {
                    key: 'destroyController',
                    value: function destroyController(controller) {
                        (0, _utils.checkMethod)('ControllerManager.destroyController(controller)');
                        (0, _utils.checkParam)(controller, 'controller');

                        var self = this;
                        return new _promise2.default(function (resolve) {
                            self.connector.getHighlanderPM().then(function (highlanderPM) {
                                self.controllers.delete(controller);
                                highlanderPM.findAttributeByPropertyName(CONTROLLER_ID).setValue(controller.controllerId);
                                self.connector.invoke(_commandFactory2.default.createDestroyControllerCommand(controller.getId())).then(resolve);
                            });
                        });
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var controllersCopy = this.controllers;
                        var promises = [];
                        this.controllers = new _set2.default();
                        controllersCopy.forEach(function (controller) {
                            try {
                                promises.push(controller.destroy());
                            } catch (e) {
                                // ignore
                            }
                        });
                        return _promise2.default.all(promises);
                    }
                }]);

                return ControllerManager;
            }();

            exports.default = ControllerManager;
        }, { "../bower_components/core.js/library/fn/promise": 2, "../bower_components/core.js/library/fn/set": 3, "./commands/commandFactory.js": 95, "./connector.js": 109, "./controllerproxy.js": 112, "./utils": 121 }], 112: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _set = _dereq_('../bower_components/core.js/library/fn/set');

            var _set2 = _interopRequireDefault(_set);

            var _utils = _dereq_('./utils');

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var ControllerProxy = function () {
                function ControllerProxy(controllerId, model, manager) {
                    _classCallCheck(this, ControllerProxy);

                    (0, _utils.checkMethod)('ControllerProxy(controllerId, model, manager)');
                    (0, _utils.checkParam)(controllerId, 'controllerId');
                    (0, _utils.checkParam)(model, 'model');
                    (0, _utils.checkParam)(manager, 'manager');

                    this.controllerId = controllerId;
                    this.model = model;
                    this.manager = manager;
                    this.destroyed = false;
                    this.onDestroyedHandlers = new _set2.default();
                }

                _createClass(ControllerProxy, [{
                    key: 'getModel',
                    value: function getModel() {
                        return this.model;
                    }
                }, {
                    key: 'getId',
                    value: function getId() {
                        return this.controllerId;
                    }
                }, {
                    key: 'invoke',
                    value: function invoke(name, params) {
                        (0, _utils.checkMethod)('ControllerProxy.invoke(name, params)');
                        (0, _utils.checkParam)(name, 'name');

                        if (this.destroyed) {
                            throw new Error('The controller was already destroyed');
                        }
                        return this.manager.invokeAction(this.controllerId, name, params);
                    }
                }, {
                    key: 'createController',
                    value: function createController(name) {
                        return this.manager._createController(name, this.getId());
                    }
                }, {
                    key: 'destroy',
                    value: function destroy() {
                        var _this = this;

                        if (this.destroyed) {
                            throw new Error('The controller was already destroyed');
                        }
                        this.destroyed = true;
                        this.onDestroyedHandlers.forEach(function (handler) {
                            try {
                                handler(_this);
                            } catch (e) {
                                console.warn('An exception occurred while calling an onDestroyed-handler', e);
                            }
                        }, this);
                        return this.manager.destroyController(this);
                    }
                }, {
                    key: 'onDestroyed',
                    value: function onDestroyed(handler) {
                        (0, _utils.checkMethod)('ControllerProxy.onDestroyed(handler)');
                        (0, _utils.checkParam)(handler, 'handler');

                        var self = this;
                        this.onDestroyedHandlers.add(handler);
                        return {
                            unsubscribe: function unsubscribe() {
                                self.onDestroyedHandlers.delete(handler);
                            }
                        };
                    }
                }]);

                return ControllerProxy;
            }();

            exports.default = ControllerProxy;
        }, { "../bower_components/core.js/library/fn/set": 3, "./utils": 121 }], 113: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _clientConnector = _dereq_('./clientConnector');

            var _clientConnector2 = _interopRequireDefault(_clientConnector);

            var _clientDolphin = _dereq_('./clientDolphin');

            var _clientDolphin2 = _interopRequireDefault(_clientDolphin);

            var _clientModelStore = _dereq_('./clientModelStore');

            var _clientModelStore2 = _interopRequireDefault(_clientModelStore);

            var _httpTransmitter = _dereq_('./httpTransmitter');

            var _httpTransmitter2 = _interopRequireDefault(_httpTransmitter);

            var _noTransmitter = _dereq_('./noTransmitter');

            var _noTransmitter2 = _interopRequireDefault(_noTransmitter);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DolphinBuilder = function () {
                function DolphinBuilder() {
                    _classCallCheck(this, DolphinBuilder);

                    this.reset_ = false;
                    this.slackMS_ = 300;
                    this.maxBatchSize_ = 50;
                    this.supportCORS_ = false;
                }

                _createClass(DolphinBuilder, [{
                    key: 'url',
                    value: function url(_url) {
                        this.url_ = _url;
                        return this;
                    }
                }, {
                    key: 'reset',
                    value: function reset(_reset) {
                        this.reset_ = _reset;
                        return this;
                    }
                }, {
                    key: 'slackMS',
                    value: function slackMS(_slackMS) {
                        this.slackMS_ = _slackMS;
                        return this;
                    }
                }, {
                    key: 'maxBatchSize',
                    value: function maxBatchSize(_maxBatchSize) {
                        this.maxBatchSize_ = _maxBatchSize;
                        return this;
                    }
                }, {
                    key: 'supportCORS',
                    value: function supportCORS(_supportCORS) {
                        this.supportCORS_ = _supportCORS;
                        return this;
                    }
                }, {
                    key: 'errorHandler',
                    value: function errorHandler(_errorHandler) {
                        this.errorHandler_ = _errorHandler;
                        return this;
                    }
                }, {
                    key: 'headersInfo',
                    value: function headersInfo(_headersInfo) {
                        this.headersInfo_ = _headersInfo;
                        return this;
                    }
                }, {
                    key: 'build',
                    value: function build() {
                        console.log("OpenDolphin js found");
                        var clientDolphin = new _clientDolphin2.default();
                        var transmitter;
                        if (this.url_ != null && this.url_.length > 0) {
                            transmitter = new _httpTransmitter2.default(this.url_, this.reset_, "UTF-8", this.errorHandler_, this.supportCORS_, this.headersInfo_);
                        } else {
                            transmitter = new _noTransmitter2.default();
                        }
                        clientDolphin.setClientConnector(new _clientConnector2.default(transmitter, clientDolphin, this.slackMS_, this.maxBatchSize_));
                        clientDolphin.setClientModelStore(new _clientModelStore2.default(clientDolphin));
                        console.log("ClientDolphin initialized");
                        return clientDolphin;
                    }
                }]);

                return DolphinBuilder;
            }();

            exports.default = DolphinBuilder;
        }, { "./clientConnector": 85, "./clientDolphin": 87, "./clientModelStore": 88, "./httpTransmitter": 116, "./noTransmitter": 117 }], 114: [function (_dereq_, module, exports) {
            'use strict';

            var _typeof2 = typeof Symbol === "function" && _typeof4(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof4(obj);
            };

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
                }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
            }

            var DolphinRemotingError = exports.DolphinRemotingError = function (_Error) {
                _inherits(DolphinRemotingError, _Error);

                function DolphinRemotingError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Remoting Error';
                    var detail = arguments[1];

                    _classCallCheck(this, DolphinRemotingError);

                    var _this = _possibleConstructorReturn(this, (DolphinRemotingError.__proto__ || Object.getPrototypeOf(DolphinRemotingError)).call(this, message));

                    _this.detail = detail || undefined;
                    return _this;
                }

                return DolphinRemotingError;
            }(Error);

            var DolphinSessionError = exports.DolphinSessionError = function (_Error2) {
                _inherits(DolphinSessionError, _Error2);

                function DolphinSessionError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Session Error';

                    _classCallCheck(this, DolphinSessionError);

                    return _possibleConstructorReturn(this, (DolphinSessionError.__proto__ || Object.getPrototypeOf(DolphinSessionError)).call(this, message));
                }

                return DolphinSessionError;
            }(Error);

            var HttpResponseError = exports.HttpResponseError = function (_Error3) {
                _inherits(HttpResponseError, _Error3);

                function HttpResponseError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Response Error';

                    _classCallCheck(this, HttpResponseError);

                    return _possibleConstructorReturn(this, (HttpResponseError.__proto__ || Object.getPrototypeOf(HttpResponseError)).call(this, message));
                }

                return HttpResponseError;
            }(Error);

            var HttpNetworkError = exports.HttpNetworkError = function (_Error4) {
                _inherits(HttpNetworkError, _Error4);

                function HttpNetworkError() {
                    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Http Network Error';

                    _classCallCheck(this, HttpNetworkError);

                    return _possibleConstructorReturn(this, (HttpNetworkError.__proto__ || Object.getPrototypeOf(HttpNetworkError)).call(this, message));
                }

                return HttpNetworkError;
            }(Error);
        }, {}], 115: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var EventBus = function () {
                function EventBus() {
                    _classCallCheck(this, EventBus);

                    this.eventHandlers = [];
                }

                _createClass(EventBus, [{
                    key: "onEvent",
                    value: function onEvent(eventHandler) {
                        this.eventHandlers.push(eventHandler);
                    }
                }, {
                    key: "trigger",
                    value: function trigger(event) {
                        this.eventHandlers.forEach(function (handle) {
                            return handle(event);
                        });
                    }
                }]);

                return EventBus;
            }();

            exports.default = EventBus;
        }, {}], 116: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _codec = _dereq_("./commands/codec");

            var _codec2 = _interopRequireDefault(_codec);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var HttpTransmitter = function () {
                function HttpTransmitter(url) {
                    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
                    var charset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "UTF-8";
                    var errorHandler = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                    var supportCORS = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
                    var headersInfo = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : null;

                    _classCallCheck(this, HttpTransmitter);

                    this.url = url;
                    this.charset = charset;
                    this.HttpCodes = {
                        finished: 4,
                        success: 200
                    };
                    this.errorHandler = errorHandler;
                    this.supportCORS = supportCORS;
                    this.headersInfo = headersInfo;
                    this.http = new XMLHttpRequest();
                    this.sig = new XMLHttpRequest();
                    if (this.supportCORS) {
                        if ("withCredentials" in this.http) {
                            this.http.withCredentials = true; // NOTE: doing this for non CORS requests has no impact
                            this.sig.withCredentials = true;
                        }
                    }
                    this.codec = new _codec2.default();
                    if (reset) {
                        console.log('HttpTransmitter.invalidate() is deprecated. Use ClientDolphin.reset(OnSuccessHandler) instead');
                        this.invalidate();
                    }
                }

                _createClass(HttpTransmitter, [{
                    key: "transmit",
                    value: function transmit(commands, onDone) {
                        var _this = this;

                        this.http.onerror = function () {
                            _this.handleError('onerror', "");
                            onDone([]);
                        };
                        this.http.onreadystatechange = function () {
                            if (_this.http.readyState == _this.HttpCodes.finished) {
                                if (_this.http.status == _this.HttpCodes.success) {
                                    var responseText = _this.http.responseText;
                                    if (responseText.trim().length > 0) {
                                        try {
                                            var responseCommands = _this.codec.decode(responseText);
                                            onDone(responseCommands);
                                        } catch (err) {
                                            console.log("Error occurred parsing responseText: ", err);
                                            console.log("Incorrect responseText: ", responseText);
                                            _this.handleError('application', "HttpTransmitter: Incorrect responseText: " + responseText);
                                            onDone([]);
                                        }
                                    } else {
                                        _this.handleError('application', "HttpTransmitter: empty responseText");
                                        onDone([]);
                                    }
                                } else {
                                    _this.handleError('application', "HttpTransmitter: HTTP Status != 200");
                                    onDone([]);
                                }
                            }
                        };
                        this.http.open('POST', this.url, true);
                        this.setHeaders(this.http);
                        if ("overrideMimeType" in this.http) {
                            this.http.overrideMimeType("application/json; charset=" + this.charset); // todo make injectable
                        }
                        this.http.send(this.codec.encode(commands));
                    }
                }, {
                    key: "setHeaders",
                    value: function setHeaders(httpReq) {
                        if (this.headersInfo) {
                            for (var i in this.headersInfo) {
                                if (this.headersInfo.hasOwnProperty(i)) {
                                    httpReq.setRequestHeader(i, this.headersInfo[i]);
                                }
                            }
                        }
                    }
                }, {
                    key: "handleError",
                    value: function handleError(kind, message) {
                        var errorEvent = { kind: kind, url: this.url, httpStatus: this.http.status, message: message };
                        if (this.errorHandler) {
                            this.errorHandler(errorEvent);
                        } else {
                            console.log("Error occurred: ", errorEvent);
                        }
                    }
                }, {
                    key: "signal",
                    value: function signal(command) {
                        this.sig.open('POST', this.url, true);
                        this.setHeaders(this.sig);
                        this.sig.send(this.codec.encode([command]));
                    }
                }, {
                    key: "invalidate",
                    value: function invalidate() {
                        this.http.open('POST', this.url + 'invalidate?', false);
                        this.http.send();
                    }
                }]);

                return HttpTransmitter;
            }();

            exports.default = HttpTransmitter;
        }, { "./commands/codec": 92 }], 117: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var NoTransmitter = function () {
                function NoTransmitter() {
                    _classCallCheck(this, NoTransmitter);
                }

                _createClass(NoTransmitter, [{
                    key: "transmit",
                    value: function transmit(commands, onDone) {
                        // do nothing special
                        onDone([]);
                    }
                }, {
                    key: "signal",
                    value: function signal() {
                        // do nothing
                    }
                }, {
                    key: "reset",
                    value: function reset() {
                        // do nothing
                    }
                }]);

                return NoTransmitter;
            }();

            exports.default = NoTransmitter;
        }, {}], 118: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.dolphin = dolphin;
            exports.makeDolphin = makeDolphin;

            var _dolphinBuilder = _dereq_('./dolphinBuilder');

            var _dolphinBuilder2 = _interopRequireDefault(_dolphinBuilder);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function dolphin(url, reset) {
                var slackMS = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

                return makeDolphin().url(url).reset(reset).slackMS(slackMS).build();
            }

            function makeDolphin() {
                return new _dolphinBuilder2.default();
            }
        }, { "./dolphinBuilder": 113 }], 119: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _utils = _dereq_('./utils');

            var _errors = _dereq_('./errors');

            var _codec = _dereq_('./commands/codec');

            var _codec2 = _interopRequireDefault(_codec);

            var _remotingErrorHandler = _dereq_('./remotingErrorHandler');

            var _remotingErrorHandler2 = _interopRequireDefault(_remotingErrorHandler);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var FINISHED = 4;
            var SUCCESS = 200;
            var REQUEST_TIMEOUT = 408;

            var DOLPHIN_PLATFORM_PREFIX = 'dolphin_platform_intern_';
            var CLIENT_ID_HTTP_HEADER_NAME = DOLPHIN_PLATFORM_PREFIX + 'dolphinClientId';

            var PlatformHttpTransmitter = function () {
                function PlatformHttpTransmitter(url, config) {
                    _classCallCheck(this, PlatformHttpTransmitter);

                    this.url = url;
                    this.config = config;
                    this.headersInfo = (0, _utils.exists)(config) ? config.headersInfo : null;
                    var connectionConfig = (0, _utils.exists)(config) ? config.connection : null;
                    this.maxRetry = (0, _utils.exists)(connectionConfig) && (0, _utils.exists)(connectionConfig.maxRetry) ? connectionConfig.maxRetry : 3;
                    this.timeout = (0, _utils.exists)(connectionConfig) && (0, _utils.exists)(connectionConfig.timeout) ? connectionConfig.timeout : 5000;
                    this.failed_attempt = 0;
                }

                _createClass(PlatformHttpTransmitter, [{
                    key: '_handleError',
                    value: function _handleError(reject, error) {
                        var connectionConfig = (0, _utils.exists)(this.config) ? this.config.connection : null;
                        var errorHandlers = (0, _utils.exists)(connectionConfig) && (0, _utils.exists)(connectionConfig.errorHandlers) ? connectionConfig.errorHandlers : [new _remotingErrorHandler2.default()];
                        errorHandlers.forEach(function (handler) {
                            handler.onError(error);
                        });
                        reject(error);
                    }
                }, {
                    key: '_send',
                    value: function _send(commands) {
                        var _this = this;

                        return new Promise(function (resolve, reject) {
                            var http = new XMLHttpRequest();
                            http.withCredentials = true;
                            http.onerror = function (errorContent) {
                                _this._handleError(reject, new _errors.HttpNetworkError('PlatformHttpTransmitter: Network error', errorContent));
                            };

                            http.onreadystatechange = function () {
                                if (http.readyState === FINISHED) {
                                    switch (http.status) {

                                        case SUCCESS:
                                            {
                                                _this.failed_attempt = 0;
                                                var currentClientId = http.getResponseHeader(CLIENT_ID_HTTP_HEADER_NAME);
                                                if ((0, _utils.exists)(currentClientId)) {
                                                    if ((0, _utils.exists)(_this.clientId) && _this.clientId !== currentClientId) {
                                                        _this._handleError(reject, new _errors.DolphinSessionError('PlatformHttpTransmitter: ClientId of the response did not match'));
                                                    }
                                                    _this.clientId = currentClientId;
                                                } else {
                                                    _this._handleError(reject, new _errors.DolphinSessionError('PlatformHttpTransmitter: Server did not send a clientId'));
                                                }
                                                resolve(http.responseText);
                                                break;
                                            }

                                        case REQUEST_TIMEOUT:
                                            _this._handleError(reject, new _errors.DolphinSessionError('PlatformHttpTransmitter: Session Timeout'));
                                            break;

                                        default:
                                            if (_this.failed_attempt <= _this.maxRetry) {
                                                _this.failed_attempt = _this.failed_attempt + 1;
                                            }
                                            _this._handleError(reject, new _errors.HttpResponseError('PlatformHttpTransmitter: HTTP Status != 200 (' + http.status + ')'));
                                            break;
                                    }
                                }
                            };

                            http.open('POST', _this.url);
                            if ((0, _utils.exists)(_this.clientId)) {
                                http.setRequestHeader(CLIENT_ID_HTTP_HEADER_NAME, _this.clientId);
                            }

                            if ((0, _utils.exists)(_this.headersInfo)) {
                                for (var i in _this.headersInfo) {
                                    if (_this.headersInfo.hasOwnProperty(i)) {
                                        http.setRequestHeader(i, _this.headersInfo[i]);
                                    }
                                }
                            }
                            if (_this.failed_attempt > _this.maxRetry) {
                                setTimeout(function () {
                                    http.send(_codec2.default.encode(commands));
                                }, _this.timeout);
                            } else {
                                http.send(_codec2.default.encode(commands));
                            }
                        });
                    }
                }, {
                    key: 'transmit',
                    value: function transmit(commands, onDone) {
                        var _this2 = this;

                        this._send(commands).then(function (responseText) {
                            if (responseText.trim().length > 0) {
                                try {
                                    var responseCommands = _codec2.default.decode(responseText);
                                    onDone(responseCommands);
                                } catch (err) {
                                    _this2.emit('error', new _errors.DolphinRemotingError('PlatformHttpTransmitter: Parse error: (Incorrect response = ' + responseText + ')'));
                                    onDone([]);
                                }
                            } else {
                                _this2.emit('error', new _errors.DolphinRemotingError('PlatformHttpTransmitter: Empty response'));
                                onDone([]);
                            }
                        }).catch(function (error) {
                            _this2.emit('error', error);
                            onDone([]);
                        });
                    }
                }, {
                    key: 'signal',
                    value: function signal(command) {
                        var _this3 = this;

                        this._send([command]).catch(function (error) {
                            return _this3.emit('error', error);
                        });
                    }
                }]);

                return PlatformHttpTransmitter;
            }();

            exports.default = PlatformHttpTransmitter;

            (0, _emitterComponent2.default)(PlatformHttpTransmitter.prototype);
        }, { "./commands/codec": 92, "./errors": 114, "./remotingErrorHandler": 120, "./utils": 121, "emitter-component": 80 }], 120: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var RemotingErrorHandler = function () {
                function RemotingErrorHandler() {
                    _classCallCheck(this, RemotingErrorHandler);
                }

                _createClass(RemotingErrorHandler, [{
                    key: "onError",
                    value: function onError(error) {
                        window.console.error(error);
                    }
                }]);

                return RemotingErrorHandler;
            }();

            exports.default = RemotingErrorHandler;
        }, {}], 121: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.exists = exists;
            exports.checkMethod = checkMethod;
            exports.checkParam = checkParam;
            var _checkMethodName;

            function exists(object) {
                return typeof object !== 'undefined' && object !== null;
            }

            function checkMethod(name) {
                _checkMethodName = name;
            }

            function checkParam(param, parameterName) {
                if (!exists(param)) {
                    throw new Error('The parameter ' + parameterName + ' is mandatory in ' + _checkMethodName);
                }
            }
        }, {}] }, {}, [86])(86);
});

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],2:[function(_dereq_,module,exports){
/* Copyright 2015 Canoo Engineering AG.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

var dolphinClient = _dereq_('../bower_components/dolphin-platform-js/dist/dolphin-platform.js');
angular.module('DolphinPlatform', []);

angular.module('DolphinPlatform').provider('$dolphinConfig', [function () {

    var $cfg = {};
    this.configure = function (cfg) {
        $cfg = cfg;
    };

    this.$get = function () {
        return $cfg;
    };
}]);

angular.module('DolphinPlatform').factory('clientContextFactory', function () {
    return new dolphinClient.ClientContextFactory();
});

angular.module('DolphinPlatform').factory('vanillaClientContext', ['clientContextFactory', '$dolphinConfig', function (clientContextFactory, $dolphinConfig) {
    return clientContextFactory.create($dolphinConfig.DOLPHIN_URL, $dolphinConfig);
}]);

angular.module('DolphinPlatform').factory('dolphinBinding', ['$rootScope', '$timeout', 'vanillaClientContext', '$log', function ($rootScope, $timeout, vanillaClientContext, $log) {

    $rootScope.waitingForGlobalDolphinApply = false;

    $rootScope.applyInAngular = function () {
        if (!$rootScope.waitingForGlobalDolphinApply) {
            $rootScope.waitingForGlobalDolphinApply = true;
            $timeout(function () {
                $rootScope.waitingForGlobalDolphinApply = false;
                $log.debug('Angular apply is called by Dolphin Platform');
                $rootScope.$apply();
            }, 100);
        }
    };

    var dolphinBinding = {

        injectArray: function injectArray(baseArray, startIndex, insertArray) {
            baseArray.splice.apply(baseArray, [startIndex, 0].concat(insertArray));
        },
        exists: function exists(object) {
            return typeof object !== 'undefined' && object !== null;
        },
        deepEqual: function deepEqual(array1, array2) {
            if (array1 === array2 || !this.exists(array1) && !this.exists(array2)) {
                return true;
            }
            if (this.exists(array1) !== this.exists(array2)) {
                return false;
            }
            var n = array1.length;
            if (array2.length !== n) {
                return false;
            }
            for (var i = 0; i < n; i++) {
                if (array1[i] !== array2[i]) {
                    return false;
                }
            }
            return true;
        },
        init: function init(beanManager) {
            beanManager.onAdded(dolphinBinding.onBeanAddedHandler);
            beanManager.onRemoved(dolphinBinding.onBeanRemovedHandler);
            beanManager.onBeanUpdate(dolphinBinding.onBeanUpdateHandler);
            beanManager.onArrayUpdate(dolphinBinding.onArrayUpdateHandler);

            $log.debug('Dolphin Platform binding listeners for Angular registered');
        },
        watchAttribute: function watchAttribute(bean, attribute) {
            $log.debug('Added Angular listener for property ' + attribute + ' of bean ' + JSON.stringify(bean));
            $rootScope.$watch(function () {
                return bean[attribute];
            }, function (newValue, oldValue) {
                $log.debug('Value ' + attribute + ' of bean ' + JSON.stringify(bean) + ' changed from ' + oldValue + ' to ' + newValue);
                vanillaClientContext.beanManager.classRepository.notifyBeanChange(bean, attribute, newValue);
            });
        },
        onBeanAddedHandler: function onBeanAddedHandler(bean) {
            $log.debug('Bean ' + JSON.stringify(bean) + ' added');

            for (var attr in bean) {
                dolphinBinding.watchAttribute(bean, attr);
            }

            $rootScope.applyInAngular();
        },
        onBeanRemovedHandler: function onBeanRemovedHandler(bean) {
            $log.debug('Bean ' + JSON.stringify(bean) + ' removed');
            $rootScope.applyInAngular();
        },
        onBeanUpdateHandler: function onBeanUpdateHandler(bean, propertyName, newValue, oldValue) {
            var newProperty = true;
            for (var attr in bean) {
                if (attr === propertyName) {
                    newProperty = false;
                }
            }

            if (newProperty) {
                $log.debug('Value ' + propertyName + ' was added to bean ' + JSON.stringify(bean));
                dolphinBinding.watchAttribute(bean, propertyName);
            }

            if (oldValue === newValue) {
                $log.debug('Received bean update for property ' + propertyName + ' without any change');
                return;
            }

            $log.debug('Bean update for property ' + propertyName + ' with new value "' + newValue + '"');

            bean[propertyName] = newValue;
            $rootScope.applyInAngular();
        },
        onArrayUpdateHandler: function onArrayUpdateHandler(bean, propertyName, index, count, newElements) {
            var array = bean[propertyName];
            var oldElements = array.slice(index, index + count);
            if (dolphinBinding.deepEqual(newElements, oldElements)) {
                return;
            }

            $log.debug('Array update for property ' + propertyName + ' starting at index ' + index + ' with ' + JSON.stringify(newElements));

            if (typeof newElements === 'undefined' || newElements && newElements.length === 0) {
                array.splice(index, count);
                $rootScope.applyInAngular();
            } else {
                dolphinBinding.injectArray(array, index, newElements);

                for (bean in newElements) {
                    for (var attr in bean) {
                        dolphinBinding.watchAttribute(bean, attr);
                    }
                }

                $rootScope.applyInAngular();
            }
        }
    };

    $log.debug('Dolphin Platform binding created');

    return dolphinBinding;
}]);

angular.module('DolphinPlatform').factory('clientContext', ['vanillaClientContext', 'dolphinBinding', '$window', '$log', function (vanillaClientContext, dolphinBinding, $window, $log) {
    var clientContext = {
        createController: function createController(scope, controllerName) {
            return vanillaClientContext.createController(controllerName).then(function (controllerProxy) {
                $log.debug('Creating Dolphin Platform controller ' + controllerName);
                scope.$on('$destroy', function () {
                    $log.debug('Destroying Dolphin Platform controller ' + controllerName);
                    controllerProxy.destroy();
                });
                scope.model = controllerProxy.model;
                return controllerProxy;
            });
        },
        disconnect: function disconnect() {
            vanillaClientContext.disconnect().then(function () {
                $log.debug('Dolphin Platform context disconnected');
            });
        },
        connect: function connect() {
            vanillaClientContext.connect().then(function () {
                $log.debug('Dolphin Platform context connected');
            });
        },
        onConnect: function onConnect() {
            return vanillaClientContext.onConnect().then(function () {
                $log.debug('Dolphin Platform context connected');
            });
        }
    };

    dolphinBinding.init(vanillaClientContext.beanManager);
    $window.onbeforeunload = clientContext.disconnect;

    $log.debug('Dolphin Platform context created');

    return clientContext;
}]);

},{"../bower_components/dolphin-platform-js/dist/dolphin-platform.js":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vbWFwLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3NldC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L25vZGVfbW9kdWxlcy9lbWl0dGVyLWNvbXBvbmVudC9pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9hdHRyaWJ1dGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvYmVhbm1hbmFnZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY2xhc3NyZXBvLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsaWVudEF0dHJpYnV0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jbGllbnRDb25uZWN0b3IuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY2xpZW50Q29udGV4dEZhY3RvcnkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY2xpZW50RG9scGhpbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jbGllbnRNb2RlbFN0b3JlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsaWVudFByZXNlbnRhdGlvbk1vZGVsLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsaWVudGNvbnRleHQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZEJhdGNoZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvY29kZWMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvY29kZWNFcnJvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9jb21tYW5kQ29uc3RhbnRzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2NvbW1hbmRGYWN0b3J5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2ltcGwvYXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL2NhbGxBY3Rpb25Db21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2ltcGwvY2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2ltcGwvY3JlYXRlQ29udGV4dENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvaW1wbC9jcmVhdGVDb250cm9sbGVyQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL2NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL2RlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL2Rlc3Ryb3lDb250ZXh0Q29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL2Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL2ludGVycnVwdExvbmdQb2xsQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL3ByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29tbWFuZHMvaW1wbC9zdGFydExvbmdQb2xsQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb21tYW5kcy9pbXBsL3ZhbHVlQ2hhbmdlZENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29ubmVjdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnN0YW50cy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb250cm9sbGVybWFuYWdlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb250cm9sbGVycHJveHkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvZG9scGhpbkJ1aWxkZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvZXJyb3JzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2V2ZW50QnVzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2h0dHBUcmFuc21pdHRlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9ub1RyYW5zbWl0dGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL29wZW5Eb2xwaGluLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL3BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL3JlbW90aW5nRXJyb3JIYW5kbGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL3V0aWxzLmpzIiwic3JjL2RvbHBoaW4tcGxhdGZvcm0tYW5ndWxhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixtQkFBQSxBQUFPLFVBQVUsUUFBQSxBQUFRLG9CQUF6QixBQUE2Qzs7OztBQ0w3QyxvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1IsbUJBQUEsQUFBTyxVQUFVLFFBQUEsQUFBUSxvQkFBekIsQUFBNkM7Ozs7QUNKN0Msb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixtQkFBQSxBQUFPLFVBQVUsUUFBQSxBQUFRLG9CQUF6QixBQUE2Qzs7OztBQ0w3QyxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7b0JBQUcsT0FBQSxBQUFPLE1BQVYsQUFBZ0IsWUFBVyxNQUFNLFVBQVUsS0FBaEIsQUFBTSxBQUFlLEFBQ2hEO3VCQUZGLEFBRUUsQUFBTyxBQUNSOzs7OztBQ0hELG1CQUFBLEFBQU8sVUFBVSxZQUFVLENBQTNCLEFBQTZCLEFBQWE7Ozs7QUNBMUMsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsYUFBYixBQUEwQixNQUExQixBQUFnQyxnQkFBZSxBQUM5RDtvQkFBRyxFQUFFLGNBQUYsQUFBZ0IsZ0JBQWlCLG1CQUFBLEFBQW1CLGFBQWEsa0JBQXBF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O0FBQ3BCLGlDQUFxQixVQUFyQixHQUFrQyxJQUFsQyxDQUF1QyxZQUFZO0FBQy9DLHFCQUFLLEtBQUwsQ0FBVyx1Q0FBWDtBQUNILGFBRkQ7QUFHSCxTQWhCZTtBQWlCaEIsaUJBQVMsbUJBQVk7QUFDakIsaUNBQXFCLE9BQXJCLEdBQStCLElBQS9CLENBQW9DLFlBQVk7QUFDNUMscUJBQUssS0FBTCxDQUFXLG9DQUFYO0FBQ0gsYUFGRDtBQUdILFNBckJlO0FBc0JoQixtQkFBVyxxQkFBWTtBQUNuQixtQkFBTyxxQkFBcUIsU0FBckIsR0FBaUMsSUFBakMsQ0FBc0MsWUFBWTtBQUNyRCxxQkFBSyxLQUFMLENBQVcsb0NBQVg7QUFDSCxhQUZNLENBQVA7QUFHSDtBQTFCZSxLQUFwQjs7QUE2QkEsbUJBQWUsSUFBZixDQUFvQixxQkFBcUIsV0FBekM7QUFDQSxZQUFRLGNBQVIsR0FBeUIsY0FBYyxVQUF2Qzs7QUFFQSxTQUFLLEtBQUwsQ0FBVyxrQ0FBWDs7QUFFQSxXQUFPLGFBQVA7QUFDSCxDQXBDMEQsQ0FBM0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfXJldHVybiBlfSkoKSIsIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLk1hcDsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTsiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuU2V0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSl7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59OyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59OyIsInZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXIsIElURVJBVE9SKXtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICBmb3JPZihpdGVyLCBmYWxzZSwgcmVzdWx0LnB1c2gsIHJlc3VsdCwgSVRFUkFUT1IpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuL190by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTsiLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vX2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUsICRjcmVhdGUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYXG4gICAgLCBjcmVhdGUgICAgICAgID0gJGNyZWF0ZSB8fCBhc2M7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBjcmVhdGUoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBjcmVhdGUoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vX2lzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDO1xufTsiLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICByZXR1cm4gbmV3IChzcGVjaWVzQ29uc3RydWN0b3Iob3JpZ2luYWwpKShsZW5ndGgpO1xufTsiLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59OyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGNyZWF0ZSAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpXG4gICwgcmVkZWZpbmVBbGwgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBhbkluc3RhbmNlICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBkZWZpbmVkICAgICA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKVxuICAsIGZvck9mICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgc2V0U3BlY2llcyAgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpXG4gICwgZmFzdEtleSAgICAgPSByZXF1aXJlKCcuL19tZXRhJykuZmFzdEtleVxuICAsIFNJWkUgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnO1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIGFuSW5zdGFuY2UodGhhdCwgQywgTkFNRSwgJ19pJyk7XG4gICAgICB0aGF0Ll9pID0gY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsICdmb3JFYWNoJyk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59OyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgZnJvbSAgICA9IHJlcXVpcmUoJy4vX2FycmF5LWZyb20taXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICByZXR1cm4gZnJvbSh0aGlzKTtcbiAgfTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgbWV0YSAgICAgICAgICAgPSByZXF1aXJlKCcuL19tZXRhJylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ZhaWxzJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgYW5JbnN0YW5jZSAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGRQICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGVhY2ggICAgICAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktbWV0aG9kcycpKDApXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICBpZighREVTQ1JJUFRPUlMgfHwgdHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgICBtZXRhLk5FRUQgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUsICdfYycpO1xuICAgICAgdGFyZ2V0Ll9jID0gbmV3IEJhc2U7XG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGFyZ2V0W0FEREVSXSwgdGFyZ2V0KTtcbiAgICB9KTtcbiAgICBlYWNoKCdhZGQsY2xlYXIsZGVsZXRlLGZvckVhY2gsZ2V0LGhhcyxzZXQsa2V5cyx2YWx1ZXMsZW50cmllcyx0b0pTT04nLnNwbGl0KCcsJyksZnVuY3Rpb24oS0VZKXtcbiAgICAgIHZhciBJU19BRERFUiA9IEtFWSA9PSAnYWRkJyB8fCBLRVkgPT0gJ3NldCc7XG4gICAgICBpZihLRVkgaW4gcHJvdG8gJiYgIShJU19XRUFLICYmIEtFWSA9PSAnY2xlYXInKSloaWRlKEMucHJvdG90eXBlLCBLRVksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgICBhbkluc3RhbmNlKHRoaXMsIEMsIEtFWSk7XG4gICAgICAgIGlmKCFJU19BRERFUiAmJiBJU19XRUFLICYmICFpc09iamVjdChhKSlyZXR1cm4gS0VZID09ICdnZXQnID8gdW5kZWZpbmVkIDogZmFsc2U7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLl9jW0tFWV0oYSA9PT0gMCA/IDAgOiBhLCBiKTtcbiAgICAgICAgcmV0dXJuIElTX0FEREVSID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKCdzaXplJyBpbiBwcm90bylkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jLnNpemU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYsIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07IiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMi40LjAnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07IiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59OyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTsiLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTsiLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuL19jb3JlJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCBJU19XUkFQICAgPSB0eXBlICYgJGV4cG9ydC5XXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBrZXksIG93biwgb3V0O1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgaWYob3duICYmIGtleSBpbiBleHBvcnRzKWNvbnRpbnVlO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gb3duID8gdGFyZ2V0W2tleV0gOiBzb3VyY2Vba2V5XTtcbiAgICAvLyBwcmV2ZW50IGdsb2JhbCBwb2xsdXRpb24gZm9yIG5hbWVzcGFjZXNcbiAgICBleHBvcnRzW2tleV0gPSBJU19HTE9CQUwgJiYgdHlwZW9mIHRhcmdldFtrZXldICE9ICdmdW5jdGlvbicgPyBzb3VyY2Vba2V5XVxuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgOiBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbClcbiAgICAvLyB3cmFwIGdsb2JhbCBjb25zdHJ1Y3RvcnMgZm9yIHByZXZlbnQgY2hhbmdlIHRoZW0gaW4gbGlicmFyeVxuICAgIDogSVNfV1JBUCAmJiB0YXJnZXRba2V5XSA9PSBvdXQgPyAoZnVuY3Rpb24oQyl7XG4gICAgICB2YXIgRiA9IGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgICBpZih0aGlzIGluc3RhbmNlb2YgQyl7XG4gICAgICAgICAgc3dpdGNoKGFyZ3VtZW50cy5sZW5ndGgpe1xuICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IEM7XG4gICAgICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgQyhhKTtcbiAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBDKGEsIGIpO1xuICAgICAgICAgIH0gcmV0dXJuIG5ldyBDKGEsIGIsIGMpO1xuICAgICAgICB9IHJldHVybiBDLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9O1xuICAgICAgRltQUk9UT1RZUEVdID0gQ1tQUk9UT1RZUEVdO1xuICAgICAgcmV0dXJuIEY7XG4gICAgLy8gbWFrZSBzdGF0aWMgdmVyc2lvbnMgZm9yIHByb3RvdHlwZSBtZXRob2RzXG4gICAgfSkob3V0KSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5tZXRob2RzLiVOQU1FJVxuICAgIGlmKElTX1BST1RPKXtcbiAgICAgIChleHBvcnRzLnZpcnR1YWwgfHwgKGV4cG9ydHMudmlydHVhbCA9IHt9KSlba2V5XSA9IG91dDtcbiAgICAgIC8vIGV4cG9ydCBwcm90byBtZXRob2RzIHRvIGNvcmUuJUNPTlNUUlVDVE9SJS5wcm90b3R5cGUuJU5BTUUlXG4gICAgICBpZih0eXBlICYgJGV4cG9ydC5SICYmIGV4cFByb3RvICYmICFleHBQcm90b1trZXldKWhpZGUoZXhwUHJvdG8sIGtleSwgb3V0KTtcbiAgICB9XG4gIH1cbn07XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgIFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59OyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJylcbiAgLCBCUkVBSyAgICAgICA9IHt9XG4gICwgUkVUVVJOICAgICAgPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKXtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTilyZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyAgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWYiLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTsiLCJ2YXIgZFAgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7IiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTsiLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07IiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07IiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTsiLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIGlzQXJyYXkoYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTsiLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTsiLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuL19saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuL19oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsICRlbnRyaWVzICAgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkXG4gICAgLCAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZVxuICAgICwgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkYW55TmF0aXZlKXtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSkpO1xuICAgIGlmKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlKXtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZighTElCUkFSWSAmJiAhaGFzKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07IiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyByZXR1cm4ge2RvbmU6IHNhZmUgPSB0cnVlfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59OyIsIm1vZHVsZS5leHBvcnRzID0ge307IiwibW9kdWxlLmV4cG9ydHMgPSB0cnVlOyIsInZhciBNRVRBICAgICA9IHJlcXVpcmUoJy4vX3VpZCcpKCdtZXRhJylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHNldERlc2MgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGlkICAgICAgID0gMDtcbnZhciBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGZ1bmN0aW9uKCl7XG4gIHJldHVybiB0cnVlO1xufTtcbnZhciBGUkVFWkUgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uKGl0KXtcbiAgc2V0RGVzYyhpdCwgTUVUQSwge3ZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfX0pO1xufTtcbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQV0uaTtcbn07XG52YXIgZ2V0V2VhayA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICBpZighaGFzKGl0LCBNRVRBKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmKCFjcmVhdGUpcmV0dXJuIGZhbHNlO1xuICAgIC8vIGFkZCBtaXNzaW5nIG1ldGFkYXRhXG4gICAgc2V0TWV0YShpdCk7XG4gIC8vIHJldHVybiBoYXNoIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gcmV0dXJuIGl0W01FVEFdLnc7XG59O1xuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbihpdCl7XG4gIGlmKEZSRUVaRSAmJiBtZXRhLk5FRUQgJiYgaXNFeHRlbnNpYmxlKGl0KSAmJiAhaGFzKGl0LCBNRVRBKSlzZXRNZXRhKGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciBtZXRhID0gbW9kdWxlLmV4cG9ydHMgPSB7XG4gIEtFWTogICAgICBNRVRBLFxuICBORUVEOiAgICAgZmFsc2UsXG4gIGZhc3RLZXk6ICBmYXN0S2V5LFxuICBnZXRXZWFrOiAgZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59OyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUoaGVhZCl7XG4gICAgICBmbiAgID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgaWYoaGVhZClub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZihpc05vZGUpe1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgfSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZVxuICAgICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbihmbil7XG4gICAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWR9O1xuICAgIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZighaGVhZCl7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59OyIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBkUHMgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBFbXB0eSAgICAgICA9IGZ1bmN0aW9uKCl7IC8qIGVtcHR5ICovIH1cbiAgLCBQUk9UT1RZUEUgICA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBlbnVtQnVnS2V5cy5sZW5ndGhcbiAgICAsIGx0ICAgICA9ICc8J1xuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpe1xuICB2YXIgcmVzdWx0O1xuICBpZihPICE9PSBudWxsKXtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5O1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpXG4gICwgdG9QcmltaXRpdmUgICAgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKVxuICAsIGRQICAgICAgICAgICAgID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyl7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKU9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07IiwidmFyIGRQICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgZ2V0S2V5cyAgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcyl7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyAgID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGkgPSAwXG4gICAgLCBQO1xuICB3aGlsZShsZW5ndGggPiBpKWRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTsiLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJylcbiAgLCBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uKE8pe1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59OyIsInZhciBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvSU9iamVjdCAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKVxuICAsIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgSUVfUFJPVE8gICAgID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgbmFtZXMpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTsiLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJylcbiAgLCBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pe1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07IiwidmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjLCBzYWZlKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXtcbiAgICBpZihzYWZlICYmIHRhcmdldFtrZXldKXRhcmdldFtrZXldID0gc3JjW2tleV07XG4gICAgZWxzZSBoaWRlKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIH0gcmV0dXJuIHRhcmdldDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19oaWRlJyk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGRQICAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSB0eXBlb2YgY29yZVtLRVldID09ICdmdW5jdGlvbicgPyBjb3JlW0tFWV0gOiBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSlkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07IiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmZcbiAgLCBoYXMgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59OyIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59OyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07IiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTsiLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2h0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07IiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTsiLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07IiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTsiLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07IiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07IiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07IiwidmFyIHN0b3JlICAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgICAgID0gcmVxdWlyZSgnLi9fdWlkJylcbiAgLCBTeW1ib2wgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sXG4gICwgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7IiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpOyIsIlwidXNlIHN0cmljdFwiO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJaUlzSW1acGJHVWlPaUpsY3pZdWIySnFaV04wTG5SdkxYTjBjbWx1Wnk1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJYWDA9IiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjbGFzc29mICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuL19leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpXG4gICwgYW5JbnN0YW5jZSAgICAgICAgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGZvck9mICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2Zvci1vZicpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgdGFzayAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIG1pY3JvdGFzayAgICAgICAgICA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKClcbiAgLCBQUk9NSVNFICAgICAgICAgICAgPSAnUHJvbWlzZSdcbiAgLCBUeXBlRXJyb3IgICAgICAgICAgPSBnbG9iYWwuVHlwZUVycm9yXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCAkUHJvbWlzZSAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgICAgICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgZW1wdHkgICAgICAgICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIEludGVybmFsLCBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbigpe1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlICAgICA9ICRQcm9taXNlLnJlc29sdmUoMSlcbiAgICAgICwgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uKGV4ZWMpeyBleGVjKGVtcHR5LCBlbXB0eSk7IH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gd2l0aCBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIHJldHVybiBhID09PSBiIHx8IGEgPT09ICRQcm9taXNlICYmIGIgPT09IFdyYXBwZXI7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHJldHVybiBzYW1lQ29uc3RydWN0b3IoJFByb21pc2UsIEMpXG4gICAgPyBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICA6IG5ldyBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gR2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpO1xufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHByb21pc2UsIGlzUmVqZWN0KXtcbiAgaWYocHJvbWlzZS5fbilyZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIG9rICAgID0gcHJvbWlzZS5fcyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIGRvbWFpbiAgPSByZWFjdGlvbi5kb21haW5cbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spe1xuICAgICAgICAgICAgaWYocHJvbWlzZS5faCA9PSAyKW9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKGhhbmRsZXIgPT09IHRydWUpcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdCAmJiAhcHJvbWlzZS5faClvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdlxuICAgICAgLCBhYnJ1cHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmKGFicnVwdCl0aHJvdyBhYnJ1cHQuZXJyb3I7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICBpZihwcm9taXNlLl9oID09IDEpcmV0dXJuIGZhbHNlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9hIHx8IHByb21pc2UuX2NcbiAgICAsIGkgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uKCl7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYoaXNOb2RlKXtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCl7XG4gICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3Z9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmKHByb21pc2UuX2QpcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmKCFwcm9taXNlLl9hKXByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihwcm9taXNlID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge193OiBwcm9taXNlLCBfZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtfdzogcHJvbWlzZSwgX2Q6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gICAgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rICAgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCAgID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fYSl0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYodGhpcy5fcylub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvbWlzZSAgPSBuZXcgSW50ZXJuYWw7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ICA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6ICRQcm9taXNlfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiAkUHJvbWlzZSAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IHRoaXNcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdmFsdWVzICAgID0gW11cbiAgICAgICAgLCBpbmRleCAgICAgPSAwXG4gICAgICAgICwgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIHZhciAkaW5kZXggICAgICAgID0gaW5kZXgrK1xuICAgICAgICAgICwgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7IiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbicpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTsiLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pOyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKX0pOyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIEl0ZXJhdG9ycyAgICAgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKVxuICAsIFRPX1NUUklOR19UQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxuZm9yKHZhciBjb2xsZWN0aW9ucyA9IFsnTm9kZUxpc3QnLCAnRE9NVG9rZW5MaXN0JywgJ01lZGlhTGlzdCcsICdTdHlsZVNoZWV0TGlzdCcsICdDU1NSdWxlTGlzdCddLCBpID0gMDsgaSA8IDU7IGkrKyl7XG4gIHZhciBOQU1FICAgICAgID0gY29sbGVjdGlvbnNbaV1cbiAgICAsIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV1cbiAgICAsIHByb3RvICAgICAgPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICBpZihwcm90byAmJiAhcHJvdG9bVE9fU1RSSU5HX1RBR10paGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gIEl0ZXJhdG9yc1tOQU1FXSA9IEl0ZXJhdG9ycy5BcnJheTtcbn0iLCJcbi8qKlxuICogRXhwb3NlIGBFbWl0dGVyYC5cbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVtaXR0ZXI7XG5cbi8qKlxuICogSW5pdGlhbGl6ZSBhIG5ldyBgRW1pdHRlcmAuXG4gKlxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5mdW5jdGlvbiBFbWl0dGVyKG9iaikge1xuICBpZiAob2JqKSByZXR1cm4gbWl4aW4ob2JqKTtcbn07XG5cbi8qKlxuICogTWl4aW4gdGhlIGVtaXR0ZXIgcHJvcGVydGllcy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBtaXhpbihvYmopIHtcbiAgZm9yICh2YXIga2V5IGluIEVtaXR0ZXIucHJvdG90eXBlKSB7XG4gICAgb2JqW2tleV0gPSBFbWl0dGVyLnByb3RvdHlwZVtrZXldO1xuICB9XG4gIHJldHVybiBvYmo7XG59XG5cbi8qKlxuICogTGlzdGVuIG9uIHRoZSBnaXZlbiBgZXZlbnRgIHdpdGggYGZuYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vbiA9XG5FbWl0dGVyLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICAodGhpcy5fY2FsbGJhY2tzW2V2ZW50XSA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF0gfHwgW10pXG4gICAgLnB1c2goZm4pO1xuICByZXR1cm4gdGhpcztcbn07XG5cbi8qKlxuICogQWRkcyBhbiBgZXZlbnRgIGxpc3RlbmVyIHRoYXQgd2lsbCBiZSBpbnZva2VkIGEgc2luZ2xlXG4gKiB0aW1lIHRoZW4gYXV0b21hdGljYWxseSByZW1vdmVkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uY2UgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcblxuICBmdW5jdGlvbiBvbigpIHtcbiAgICBzZWxmLm9mZihldmVudCwgb24pO1xuICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBvbi5mbiA9IGZuO1xuICB0aGlzLm9uKGV2ZW50LCBvbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdpdmVuIGNhbGxiYWNrIGZvciBgZXZlbnRgIG9yIGFsbFxuICogcmVnaXN0ZXJlZCBjYWxsYmFja3MuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub2ZmID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG5FbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQsIGZuKXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIC8vIGFsbFxuICBpZiAoMCA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgdGhpcy5fY2FsbGJhY2tzID0ge307XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyBzcGVjaWZpYyBldmVudFxuICB2YXIgY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XTtcbiAgaWYgKCFjYWxsYmFja3MpIHJldHVybiB0aGlzO1xuXG4gIC8vIHJlbW92ZSBhbGwgaGFuZGxlcnNcbiAgaWYgKDEgPT0gYXJndW1lbnRzLmxlbmd0aCkge1xuICAgIGRlbGV0ZSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gcmVtb3ZlIHNwZWNpZmljIGhhbmRsZXJcbiAgdmFyIGNiO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbGxiYWNrcy5sZW5ndGg7IGkrKykge1xuICAgIGNiID0gY2FsbGJhY2tzW2ldO1xuICAgIGlmIChjYiA9PT0gZm4gfHwgY2IuZm4gPT09IGZuKSB7XG4gICAgICBjYWxsYmFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBFbWl0IGBldmVudGAgd2l0aCB0aGUgZ2l2ZW4gYXJncy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7TWl4ZWR9IC4uLlxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpXG4gICAgLCBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuXG4gIGlmIChjYWxsYmFja3MpIHtcbiAgICBjYWxsYmFja3MgPSBjYWxsYmFja3Muc2xpY2UoMCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGNhbGxiYWNrcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgY2FsbGJhY2tzW2ldLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBSZXR1cm4gYXJyYXkgb2YgY2FsbGJhY2tzIGZvciBgZXZlbnRgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuICByZXR1cm4gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXTtcbn07XG5cbi8qKlxuICogQ2hlY2sgaWYgdGhpcyBlbWl0dGVyIGhhcyBgZXZlbnRgIGhhbmRsZXJzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUuaGFzTGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICByZXR1cm4gISEgdGhpcy5saXN0ZW5lcnMoZXZlbnQpLmxlbmd0aDtcbn07XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF0dHJpYnV0ZSB7XG59XG5cbkF0dHJpYnV0ZS5RVUFMSUZJRVJfUFJPUEVSVFkgPSBcInF1YWxpZmllclwiO1xuQXR0cmlidXRlLlZBTFVFID0gXCJ2YWx1ZVwiO1xuIiwiaW1wb3J0ICBNYXAgZnJvbSAnLi4vYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vbWFwJztcbmltcG9ydCB7ZXhpc3RzLCBjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYW5NYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3RvcihjbGFzc1JlcG9zaXRvcnkpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyKGNsYXNzUmVwb3NpdG9yeSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcblxuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5hZGRlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLnJlbW92ZWRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51cGRhdGVkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYXJyYXlVcGRhdGVkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYWxsQWRkZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFJlbW92ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbFVwZGF0ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzID0gW107XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5BZGRlZCgodHlwZSwgYmVhbikgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5BZGRlZC1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsQWRkZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQmVhbkFkZGVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQmVhblJlbW92ZWQoKHR5cGUsIGJlYW4pID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5SZW1vdmVkLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGEgZ2VuZXJhbCBvbkJlYW5SZW1vdmVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQmVhblVwZGF0ZSgodHlwZSwgYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYudXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm9uQXJyYXlVcGRhdGUoKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cykgPT4ge1xuICAgICAgICAgICAgbGV0IGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkFycmF5VXBkYXRlLWhhbmRsZXIgZm9yIHR5cGUnLCB0eXBlLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgbmV3RWxlbWVudHMpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25BcnJheVVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG5cblxuICAgIG5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NSZXBvc2l0b3J5Lm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSk7XG4gICAgfVxuXG5cbiAgICBub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5ub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaW5kZXgsICdpbmRleCcpO1xuICAgICAgICBjaGVja1BhcmFtKGNvdW50LCAnY291bnQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShyZW1vdmVkRWxlbWVudHMsICdyZW1vdmVkRWxlbWVudHMnKTtcblxuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKTtcbiAgICB9XG5cblxuICAgIGlzTWFuYWdlZChiZWFuKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5pc01hbmFnZWQoYmVhbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmlzTWFuYWdlZCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgY3JlYXRlKHR5cGUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLmNyZWF0ZSh0eXBlKScpO1xuICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4uY3JlYXRlKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICBhZGQodHlwZSwgYmVhbikge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIuYWRkKHR5cGUsIGJlYW4pJyk7XG4gICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmFkZCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgYWRkQWxsKHR5cGUsIGNvbGxlY3Rpb24pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLmFkZEFsbCh0eXBlLCBjb2xsZWN0aW9uKScpO1xuICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29sbGVjdGlvbiwgJ2NvbGxlY3Rpb24nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5hZGRBbGwoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZShiZWFuKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5yZW1vdmUoYmVhbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLnJlbW92ZSgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlQWxsKGNvbGxlY3Rpb24pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLnJlbW92ZUFsbChjb2xsZWN0aW9uKScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbGxlY3Rpb24sICdjb2xsZWN0aW9uJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4ucmVtb3ZlQWxsKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICByZW1vdmVJZihwcmVkaWNhdGUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLnJlbW92ZUlmKHByZWRpY2F0ZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShwcmVkaWNhdGUsICdwcmVkaWNhdGUnKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5yZW1vdmVJZigpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgb25BZGRlZCh0eXBlLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIWV4aXN0cyhldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQWRkZWQoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxBZGRlZEhhbmRsZXJzID0gc2VsZi5hbGxBZGRlZEhhbmRsZXJzLmNvbmNhdChldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEFkZGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFkZGVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25BZGRlZCh0eXBlLCBldmVudEhhbmRsZXIpJyk7XG4gICAgICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG4gICAgICAgICAgICBjaGVja1BhcmFtKGV2ZW50SGFuZGxlciwgJ2V2ZW50SGFuZGxlcicpO1xuXG4gICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLmFkZGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWRkZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLmFkZGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hZGRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvblJlbW92ZWQodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vblJlbW92ZWQoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMgPSBzZWxmLmFsbFJlbW92ZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMgPSBzZWxmLmFsbFJlbW92ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vblJlbW92ZWQodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5yZW1vdmVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYucmVtb3ZlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5jb25jYXQoZXZlbnRIYW5kbGVyKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucmVtb3ZlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG5cbiAgICBvbkJlYW5VcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkJlYW5VcGRhdGUoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbFVwZGF0ZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbFVwZGF0ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkJlYW5VcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi51cGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYudXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5jb25jYXQoZXZlbnRIYW5kbGVyKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYudXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25BcnJheVVwZGF0ZSh0eXBlLCBldmVudEhhbmRsZXIpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoIWV4aXN0cyhldmVudEhhbmRsZXIpKSB7XG4gICAgICAgICAgICBldmVudEhhbmRsZXIgPSB0eXBlO1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQXJyYXlVcGRhdGUoZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycyA9IHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQXJyYXlVcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoIWV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdCA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgIE1hcCBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9tYXAnO1xuaW1wb3J0ICogYXMgY29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7ZXhpc3RzLCBjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbnZhciBibG9ja2VkID0gbnVsbDtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NSZXBvc2l0b3J5IHtcblxuICAgIGNvbnN0cnVjdG9yKGRvbHBoaW4pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeShkb2xwaGluKScpO1xuICAgICAgICBjaGVja1BhcmFtKGRvbHBoaW4sICdkb2xwaGluJyk7XG5cbiAgICAgICAgdGhpcy5kb2xwaGluID0gZG9scGhpbjtcbiAgICAgICAgdGhpcy5jbGFzc2VzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5iZWFuVG9Eb2xwaGluID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmNsYXNzSW5mb3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzID0gW107XG4gICAgICAgIHRoaXMucHJvcGVydHlVcGRhdGVIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBmaXhUeXBlKHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQllURTpcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLlNIT1JUOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuSU5UOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9ORzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuRkxPQVQ6XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5ET1VCTEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQk9PTEVBTjpcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3RydWUnID09PSBTdHJpbmcodmFsdWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5TVFJJTkc6XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5FTlVNOlxuICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcodmFsdWUpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmcm9tRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghZXhpc3RzKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5ET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUmVwb3NpdG9yeS5iZWFuRnJvbURvbHBoaW4uZ2V0KFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5DQUxFTkRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5MT0NBTF9EQVRFX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuWk9ORURfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maXhUeXBlKHR5cGUsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIHZhbHVlKSB7XG4gICAgICAgIGlmICghZXhpc3RzKHZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5ET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsYXNzUmVwb3NpdG9yeS5iZWFuVG9Eb2xwaGluLmdldCh2YWx1ZSk7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5EQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5DQUxFTkRBUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5MT0NBTF9EQVRFX1RJTUVfRklFTERfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuWk9ORURfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZml4VHlwZSh0eXBlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZW5kTGlzdFNwbGljZShjbGFzc1JlcG9zaXRvcnksIG1vZGVsSWQsIHByb3BlcnR5TmFtZSwgZnJvbSwgdG8sIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgIGxldCBkb2xwaGluID0gY2xhc3NSZXBvc2l0b3J5LmRvbHBoaW47XG4gICAgICAgIGxldCBtb2RlbCA9IGRvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChtb2RlbElkKTtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAoZXhpc3RzKG1vZGVsKSkge1xuICAgICAgICAgICAgbGV0IGNsYXNzSW5mbyA9IGNsYXNzUmVwb3NpdG9yeS5jbGFzc2VzLmdldChtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBjbGFzc0luZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIGlmIChleGlzdHModHlwZSkpIHtcblxuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGVzID0gW1xuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnQEBAIFNPVVJDRV9TWVNURU0gQEBAJywgbnVsbCwgJ2NsaWVudCcpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnc291cmNlJywgbnVsbCwgbW9kZWxJZCksXG4gICAgICAgICAgICAgICAgICAgIGRvbHBoaW4uYXR0cmlidXRlKCdhdHRyaWJ1dGUnLCBudWxsLCBwcm9wZXJ0eU5hbWUpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnZnJvbScsIG51bGwsIGZyb20pLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgndG8nLCBudWxsLCB0byksXG4gICAgICAgICAgICAgICAgICAgIGRvbHBoaW4uYXR0cmlidXRlKCdjb3VudCcsIG51bGwsIG5ld0VsZW1lbnRzLmxlbmd0aClcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIG5ld0VsZW1lbnRzLmZvckVhY2goZnVuY3Rpb24gKGVsZW1lbnQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChkb2xwaGluLmF0dHJpYnV0ZShpbmRleC50b1N0cmluZygpLCBudWxsLCBzZWxmLnRvRG9scGhpbihjbGFzc1JlcG9zaXRvcnksIHR5cGUsIGVsZW1lbnQpKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZG9scGhpbi5wcmVzZW50YXRpb25Nb2RlbC5hcHBseShkb2xwaGluLCBbbnVsbCwgJ0BEUDpMU0AnXS5jb25jYXQoYXR0cmlidXRlcykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFsaWRhdGVMaXN0KGNsYXNzUmVwb3NpdG9yeSwgdHlwZSwgYmVhbiwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIGxldCBsaXN0ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoIWV4aXN0cyhsaXN0KSkge1xuICAgICAgICAgICAgY2xhc3NSZXBvc2l0b3J5LnByb3BlcnR5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIodHlwZSwgYmVhbiwgcHJvcGVydHlOYW1lLCBbXSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJsb2NrKGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBpZiAoZXhpc3RzKGJsb2NrZWQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBjcmVhdGUgYSBibG9jayB3aGlsZSBhbm90aGVyIGJsb2NrIGV4aXN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGJsb2NrZWQgPSB7XG4gICAgICAgICAgICBiZWFuOiBiZWFuLFxuICAgICAgICAgICAgcHJvcGVydHlOYW1lOiBwcm9wZXJ0eU5hbWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBpc0Jsb2NrZWQoYmVhbiwgcHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHJldHVybiBleGlzdHMoYmxvY2tlZCkgJiYgYmxvY2tlZC5iZWFuID09PSBiZWFuICYmIGJsb2NrZWQucHJvcGVydHlOYW1lID09PSBwcm9wZXJ0eU5hbWU7XG4gICAgfVxuXG4gICAgdW5ibG9jaygpIHtcbiAgICAgICAgYmxvY2tlZCA9IG51bGw7XG4gICAgfVxuXG4gICAgbm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkubm90aWZ5QmVhbkNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG5cbiAgICAgICAgbGV0IG1vZGVsSWQgPSB0aGlzLmJlYW5Ub0RvbHBoaW4uZ2V0KGJlYW4pO1xuICAgICAgICBpZiAoZXhpc3RzKG1vZGVsSWQpKSB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSB0aGlzLmRvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChtb2RlbElkKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMobW9kZWwpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzSW5mbyA9IHRoaXMuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgICAgICAgICBsZXQgdHlwZSA9IGNsYXNzSW5mb1twcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgICAgIGxldCBhdHRyaWJ1dGUgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKHR5cGUpICYmIGV4aXN0cyhhdHRyaWJ1dGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IGF0dHJpYnV0ZS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUuc2V0VmFsdWUodGhpcy50b0RvbHBoaW4odGhpcywgdHlwZSwgbmV3VmFsdWUpKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZnJvbURvbHBoaW4odGhpcywgdHlwZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeUFycmF5Q2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCByZW1vdmVkRWxlbWVudHMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5ub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKScpO1xuICAgICAgICBjaGVja1BhcmFtKGJlYW4sICdiZWFuJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJvcGVydHlOYW1lLCAncHJvcGVydHlOYW1lJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaW5kZXgsICdpbmRleCcpO1xuICAgICAgICBjaGVja1BhcmFtKGNvdW50LCAnY291bnQnKTtcbiAgICAgICAgY2hlY2tQYXJhbShyZW1vdmVkRWxlbWVudHMsICdyZW1vdmVkRWxlbWVudHMnKTtcblxuICAgICAgICBpZiAodGhpcy5pc0Jsb2NrZWQoYmVhbiwgcHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb2RlbElkID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChiZWFuKTtcbiAgICAgICAgbGV0IGFycmF5ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICBpZiAoZXhpc3RzKG1vZGVsSWQpICYmIGV4aXN0cyhhcnJheSkpIHtcbiAgICAgICAgICAgIGxldCByZW1vdmVkRWxlbWVudHNDb3VudCA9IEFycmF5LmlzQXJyYXkocmVtb3ZlZEVsZW1lbnRzKSA/IHJlbW92ZWRFbGVtZW50cy5sZW5ndGggOiAwO1xuICAgICAgICAgICAgdGhpcy5zZW5kTGlzdFNwbGljZSh0aGlzLCBtb2RlbElkLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBpbmRleCArIHJlbW92ZWRFbGVtZW50c0NvdW50LCBhcnJheS5zbGljZShpbmRleCwgaW5kZXggKyBjb3VudCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25CZWFuQWRkZWQoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhbkFkZGVkKGhhbmRsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5iZWFuQWRkZWRIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uQmVhblJlbW92ZWQoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhblJlbW92ZWQoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLmJlYW5SZW1vdmVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkJlYW5VcGRhdGUoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQmVhblVwZGF0ZShoYW5kbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGhhbmRsZXIsICdoYW5kbGVyJyk7XG4gICAgICAgIHRoaXMucHJvcGVydHlVcGRhdGVIYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIG9uQXJyYXlVcGRhdGUoaGFuZGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm9uQXJyYXlVcGRhdGUoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNsYXNzKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkucmVnaXN0ZXJDbGFzcyhtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuY2xhc3Nlcy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2xhc3NJbmZvID0ge307XG4gICAgICAgIG1vZGVsLmF0dHJpYnV0ZXMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyaWJ1dGUucHJvcGVydHlOYW1lLnNlYXJjaCgvXkAvKSA8IDA7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc2VzLnNldChtb2RlbC5pZCwgY2xhc3NJbmZvKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQ2xhc3MobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS51bnJlZ2lzdGVyQ2xhc3MobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuICAgICAgICB0aGlzLmNsYXNzZXNbJ2RlbGV0ZSddKG1vZGVsLmlkKTtcbiAgICB9XG5cbiAgICBsb2FkKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkubG9hZChtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgY2xhc3NJbmZvID0gdGhpcy5jbGFzc2VzLmdldChtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgICAgICB2YXIgYmVhbiA9IHt9O1xuICAgICAgICBtb2RlbC5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUuc2VhcmNoKC9eQC8pIDwgMCk7XG4gICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgYmVhblthdHRyaWJ1dGUucHJvcGVydHlOYW1lXSA9IG51bGw7XG4gICAgICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZShmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQub2xkVmFsdWUgIT09IGV2ZW50Lm5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBvbGRWYWx1ZSA9IHNlbGYuZnJvbURvbHBoaW4oc2VsZiwgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdLCBldmVudC5vbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdWYWx1ZSA9IHNlbGYuZnJvbURvbHBoaW4oc2VsZiwgY2xhc3NJbmZvW2F0dHJpYnV0ZS5wcm9wZXJ0eU5hbWVdLCBldmVudC5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucHJvcGVydHlVcGRhdGVIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlLCBiZWFuLCBhdHRyaWJ1dGUucHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuVXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpbi5zZXQobW9kZWwuaWQsIGJlYW4pO1xuICAgICAgICB0aGlzLmJlYW5Ub0RvbHBoaW4uc2V0KGJlYW4sIG1vZGVsLmlkKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zLnNldChtb2RlbC5pZCwgY2xhc3NJbmZvKTtcbiAgICAgICAgdGhpcy5iZWFuQWRkZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlLCBiZWFuKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhbkFkZGVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBiZWFuO1xuICAgIH1cblxuICAgIHVubG9hZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LnVubG9hZChtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgbGV0IGJlYW4gPSB0aGlzLmJlYW5Gcm9tRG9scGhpbi5nZXQobW9kZWwuaWQpO1xuICAgICAgICB0aGlzLmJlYW5Gcm9tRG9scGhpblsnZGVsZXRlJ10obW9kZWwuaWQpO1xuICAgICAgICB0aGlzLmJlYW5Ub0RvbHBoaW5bJ2RlbGV0ZSddKGJlYW4pO1xuICAgICAgICB0aGlzLmNsYXNzSW5mb3NbJ2RlbGV0ZSddKG1vZGVsLmlkKTtcbiAgICAgICAgaWYgKGV4aXN0cyhiZWFuKSkge1xuICAgICAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblJlbW92ZWQtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiZWFuO1xuICAgIH1cblxuICAgIHNwbGljZUxpc3RFbnRyeShtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LnNwbGljZUxpc3RFbnRyeShtb2RlbCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShtb2RlbCwgJ21vZGVsJyk7XG5cbiAgICAgICAgbGV0IHNvdXJjZSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnc291cmNlJyk7XG4gICAgICAgIGxldCBhdHRyaWJ1dGUgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2F0dHJpYnV0ZScpO1xuICAgICAgICBsZXQgZnJvbSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnZnJvbScpO1xuICAgICAgICBsZXQgdG8gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ3RvJyk7XG4gICAgICAgIGxldCBjb3VudCA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSgnY291bnQnKTtcblxuICAgICAgICBpZiAoZXhpc3RzKHNvdXJjZSkgJiYgZXhpc3RzKGF0dHJpYnV0ZSkgJiYgZXhpc3RzKGZyb20pICYmIGV4aXN0cyh0bykgJiYgZXhpc3RzKGNvdW50KSkge1xuICAgICAgICAgICAgdmFyIGNsYXNzSW5mbyA9IHRoaXMuY2xhc3NJbmZvcy5nZXQoc291cmNlLnZhbHVlKTtcbiAgICAgICAgICAgIHZhciBiZWFuID0gdGhpcy5iZWFuRnJvbURvbHBoaW4uZ2V0KHNvdXJjZS52YWx1ZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGJlYW4pICYmIGV4aXN0cyhjbGFzc0luZm8pKSB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgICAgICAgICAgLy92YXIgZW50cnkgPSBmcm9tRG9scGhpbih0aGlzLCBjbGFzc0luZm9bYXR0cmlidXRlLnZhbHVlXSwgZWxlbWVudC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUxpc3QodGhpcywgdHlwZSwgYmVhbiwgYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgICAgICAgICB2YXIgbmV3RWxlbWVudHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb3VudC52YWx1ZTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoaS50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFleGlzdHMoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnRzLnB1c2godGhpcy5mcm9tRG9scGhpbih0aGlzLCBjbGFzc0luZm9bYXR0cmlidXRlLnZhbHVlXSwgZWxlbWVudC52YWx1ZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJsb2NrKGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXJyYXlVcGRhdGVIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIodHlwZSwgYmVhbiwgYXR0cmlidXRlLnZhbHVlLCBmcm9tLnZhbHVlLCB0by52YWx1ZSAtIGZyb20udmFsdWUsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQXJyYXlVcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuYmxvY2soKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkLiBTb3VyY2UgYmVhbiB1bmtub3duLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgbGlzdCBtb2RpZmljYXRpb24gdXBkYXRlIHJlY2VpdmVkXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFwUGFyYW1Ub0RvbHBoaW4ocGFyYW0pIHtcbiAgICAgICAgaWYgKCFleGlzdHMocGFyYW0pKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHR5cGUgPSB0eXBlb2YgcGFyYW07XG4gICAgICAgIGlmICh0eXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJhbS50b0lTT1N0cmluZygpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLmJlYW5Ub0RvbHBoaW4uZ2V0KHBhcmFtKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1hbmFnZWQgRG9scGhpbiBCZWFucyBjYW4gYmUgdXNlZFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZSA9PT0gJ251bWJlcicgfHwgdHlwZSA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9ubHkgbWFuYWdlZCBEb2xwaGluIEJlYW5zIGFuZCBwcmltaXRpdmUgdHlwZXMgY2FuIGJlIHVzZWRcIik7XG4gICAgfVxuXG4gICAgbWFwRG9scGhpblRvQmVhbih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5mcm9tRG9scGhpbih0aGlzLCBjb25zdHMuRE9MUEhJTl9CRUFOLCB2YWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnRCdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRBdHRyaWJ1dGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnR5TmFtZSwgcXVhbGlmaWVyLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcbiAgICAgICAgdGhpcy5pZCA9IFwiXCIgKyAoQ2xpZW50QXR0cmlidXRlLmNsaWVudEF0dHJpYnV0ZUluc3RhbmNlQ291bnQrKykgKyBcIkNcIjtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZUJ1cyA9IG5ldyBFdmVudEJ1cygpO1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cyA9IG5ldyBFdmVudEJ1cygpO1xuICAgICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRRdWFsaWZpZXIocXVhbGlmaWVyKTtcbiAgICB9XG5cbiAgICBjb3B5KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENsaWVudEF0dHJpYnV0ZSh0aGlzLnByb3BlcnR5TmFtZSwgdGhpcy5nZXRRdWFsaWZpZXIoKSwgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBzZXRQcmVzZW50YXRpb25Nb2RlbChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBpZiAodGhpcy5wcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiWW91IGNhbiBub3Qgc2V0IGEgcHJlc2VudGF0aW9uIG1vZGVsIGZvciBhbiBhdHRyaWJ1dGUgdGhhdCBpcyBhbHJlYWR5IGJvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsID0gcHJlc2VudGF0aW9uTW9kZWw7XG4gICAgfVxuXG4gICAgZ2V0UHJlc2VudGF0aW9uTW9kZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVsO1xuICAgIH1cblxuICAgIGdldFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9XG5cbiAgICBzZXRWYWx1ZUZyb21TZXJ2ZXIobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVkVmFsdWUgPSBDbGllbnRBdHRyaWJ1dGUuY2hlY2tWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09IHZlcmlmaWVkVmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2ZXJpZmllZFZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnb2xkVmFsdWUnOiBvbGRWYWx1ZSwgJ25ld1ZhbHVlJzogdmVyaWZpZWRWYWx1ZSwgJ3NlbmRUb1NlcnZlcic6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciB2ZXJpZmllZFZhbHVlID0gQ2xpZW50QXR0cmlidXRlLmNoZWNrVmFsdWUobmV3VmFsdWUpO1xuICAgICAgICBpZiAodGhpcy52YWx1ZSA9PSB2ZXJpZmllZFZhbHVlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmVyaWZpZWRWYWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZUJ1cy50cmlnZ2VyKHsgJ29sZFZhbHVlJzogb2xkVmFsdWUsICduZXdWYWx1ZSc6IHZlcmlmaWVkVmFsdWUsICdzZW5kVG9TZXJ2ZXInOiB0cnVlIH0pO1xuICAgIH1cblxuICAgIHNldFF1YWxpZmllcihuZXdRdWFsaWZpZXIpIHtcbiAgICAgICAgaWYgKHRoaXMucXVhbGlmaWVyID09IG5ld1F1YWxpZmllcilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIG9sZFF1YWxpZmllciA9IHRoaXMucXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnF1YWxpZmllciA9IG5ld1F1YWxpZmllcjtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXJDaGFuZ2VCdXMudHJpZ2dlcih7ICdvbGRWYWx1ZSc6IG9sZFF1YWxpZmllciwgJ25ld1ZhbHVlJzogbmV3UXVhbGlmaWVyIH0pO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLnRyaWdnZXIoeyBcIm9sZFZhbHVlXCI6IHRoaXMudmFsdWUsIFwibmV3VmFsdWVcIjogdGhpcy52YWx1ZSwgJ3NlbmRUb1NlcnZlcic6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIGdldFF1YWxpZmllcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbGlmaWVyO1xuICAgIH1cblxuICAgIG9uVmFsdWVDaGFuZ2UoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VCdXMub25FdmVudChldmVudEhhbmRsZXIpO1xuICAgICAgICBldmVudEhhbmRsZXIoeyBcIm9sZFZhbHVlXCI6IHRoaXMudmFsdWUsIFwibmV3VmFsdWVcIjogdGhpcy52YWx1ZSwgJ3NlbmRUb1NlcnZlcic6IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIG9uUXVhbGlmaWVyQ2hhbmdlKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgc3luY1dpdGgoc291cmNlQXR0cmlidXRlKSB7XG4gICAgICAgIGlmIChzb3VyY2VBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0UXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7IC8vIHNlcXVlbmNlIGlzIGltcG9ydGFudFxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShzb3VyY2VBdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGNoZWNrVmFsdWUodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBTdHJpbmcgfHwgcmVzdWx0IGluc3RhbmNlb2YgQm9vbGVhbiB8fCByZXN1bHQgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2xpZW50QXR0cmlidXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIEF0dHJpYnV0ZSBtYXkgbm90IGl0c2VsZiBjb250YWluIGFuIGF0dHJpYnV0ZSBhcyBhIHZhbHVlLiBBc3N1bWluZyB5b3UgZm9yZ290IHRvIGNhbGwgdmFsdWUuXCIpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jaGVja1ZhbHVlKHZhbHVlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2sgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuU1VQUE9SVEVEX1ZBTFVFX1RZUEVTLmluZGV4T2YodHlwZW9mIHJlc3VsdCkgPiAtMSB8fCByZXN1bHQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlIHZhbHVlcyBvZiB0aGlzIHR5cGUgYXJlIG5vdCBhbGxvd2VkOiBcIiArIHR5cGVvZiB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbn1cblxuQ2xpZW50QXR0cmlidXRlLlNVUFBPUlRFRF9WQUxVRV9UWVBFUyA9IFtcInN0cmluZ1wiLCBcIm51bWJlclwiLCBcImJvb2xlYW5cIl07XG5DbGllbnRBdHRyaWJ1dGUuY2xpZW50QXR0cmlidXRlSW5zdGFuY2VDb3VudCA9IDA7XG4iLCJpbXBvcnQgQmxpbmRDb21tYW5kQmF0Y2hlciBmcm9tICcuL2NvbW1hbmRCYXRjaGVyJztcbmltcG9ydCBDb2RlYyBmcm9tICcuL2NvbW1hbmRzL2NvZGVjJztcbmltcG9ydCBDbGllbnRQcmVzZW50YXRpb25Nb2RlbCBmcm9tICcuL2NsaWVudFByZXNlbnRhdGlvbk1vZGVsJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRDb25uZWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IodHJhbnNtaXR0ZXIsIGNsaWVudERvbHBoaW4sIHNsYWNrTVMgPSAwLCBtYXhCYXRjaFNpemUgPSA1MCkge1xuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLmN1cnJlbnRseVNlbmRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wdXNoRW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50cmFuc21pdHRlciA9IHRyYW5zbWl0dGVyO1xuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4gPSBjbGllbnREb2xwaGluO1xuICAgICAgICB0aGlzLnNsYWNrTVMgPSBzbGFja01TO1xuICAgICAgICB0aGlzLmNvZGVjID0gbmV3IENvZGVjKCk7XG4gICAgICAgIHRoaXMuY29tbWFuZEJhdGNoZXIgPSBuZXcgQmxpbmRDb21tYW5kQmF0Y2hlcih0cnVlLCBtYXhCYXRjaFNpemUpO1xuICAgIH1cblxuICAgIHNldENvbW1hbmRCYXRjaGVyKG5ld0JhdGNoZXIpIHtcbiAgICAgICAgdGhpcy5jb21tYW5kQmF0Y2hlciA9IG5ld0JhdGNoZXI7XG4gICAgfVxuXG4gICAgc2V0UHVzaEVuYWJsZWQoZW5hYmxlZCkge1xuICAgICAgICB0aGlzLnB1c2hFbmFibGVkID0gZW5hYmxlZDtcbiAgICB9XG5cbiAgICBzZXRQdXNoTGlzdGVuZXIobmV3TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoTGlzdGVuZXIgPSBuZXdMaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBzZXRSZWxlYXNlQ29tbWFuZChuZXdDb21tYW5kKSB7XG4gICAgICAgIHRoaXMucmVsZWFzZUNvbW1hbmQgPSBuZXdDb21tYW5kO1xuICAgIH1cblxuICAgIHNlbmQoY29tbWFuZCwgb25GaW5pc2hlZCkge1xuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZS5wdXNoKHsgY29tbWFuZDogY29tbWFuZCwgaGFuZGxlcjogb25GaW5pc2hlZCB9KTtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudGx5U2VuZGluZykge1xuICAgICAgICAgICAgdGhpcy5yZWxlYXNlKCk7IC8vIHRoZXJlIGlzIG5vdCBwb2ludCBpbiByZWxlYXNpbmcgaWYgd2UgZG8gbm90IHNlbmQgYXRtXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kb1NlbmROZXh0KCk7XG4gICAgfVxuXG4gICAgZG9TZW5kTmV4dCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY29tbWFuZFF1ZXVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1c2hFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnF1ZXVlUHVzaENvbW1hbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudGx5U2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRseVNlbmRpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgY21kc0FuZEhhbmRsZXJzID0gdGhpcy5jb21tYW5kQmF0Y2hlci5iYXRjaCh0aGlzLmNvbW1hbmRRdWV1ZSk7XG5cbiAgICAgICAgaWYoY21kc0FuZEhhbmRsZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGNtZHNBbmRIYW5kbGVyc1tjbWRzQW5kSGFuZGxlcnMubGVuZ3RoIC0gMV0uaGFuZGxlcjtcbiAgICAgICAgICAgIHZhciBjb21tYW5kcyA9IGNtZHNBbmRIYW5kbGVycy5tYXAoY2FoID0+IHsgcmV0dXJuIGNhaC5jb21tYW5kOyB9KTtcbiAgICAgICAgICAgIHRoaXMudHJhbnNtaXR0ZXIudHJhbnNtaXQoY29tbWFuZHMsIChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB0b3VjaGVkUE1zID0gW107XG4gICAgICAgICAgICAgICAgcmVzcG9uc2UuZm9yRWFjaCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG91Y2hlZCA9IHRoaXMuaGFuZGxlKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG91Y2hlZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdWNoZWRQTXMucHVzaCh0b3VjaGVkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sub25GaW5pc2hlZCh0b3VjaGVkUE1zKTsgLy8gdG9kbzogbWFrZSB0aGVtIHVuaXF1ZT9cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRvU2VuZE5leHQoKSwgdGhpcy5zbGFja01TKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmRvU2VuZE5leHQoKSwgdGhpcy5zbGFja01TKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZShjb21tYW5kKSB7XG4gICAgICAgIGlmIChjb21tYW5kLmlkID09IFwiRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuaWQgPT0gXCJDcmVhdGVQcmVzZW50YXRpb25Nb2RlbFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoY29tbWFuZC5pZCA9PSBcIlZhbHVlQ2hhbmdlZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuaWQgPT0gXCJBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ2Fubm90IGhhbmRsZSwgdW5rbm93biBjb21tYW5kIFwiICsgY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFuZGxlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKHNlcnZlckNvbW1hbmQpIHtcbiAgICAgICAgdmFyIG1vZGVsID0gdGhpcy5jbGllbnREb2xwaGluLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQoc2VydmVyQ29tbWFuZC5wbUlkKTtcbiAgICAgICAgaWYgKCFtb2RlbClcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cblxuICAgIGhhbmRsZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIGlmICh0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwoc2VydmVyQ29tbWFuZC5wbUlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYWxyZWFkeSBpcyBhIHByZXNlbnRhdGlvbiBtb2RlbCB3aXRoIGlkIFwiICsgc2VydmVyQ29tbWFuZC5wbUlkICsgXCIgIGtub3duIHRvIHRoZSBjbGllbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHNlcnZlckNvbW1hbmQuYXR0cmlidXRlcy5mb3JFYWNoKChhdHRyKSA9PiB7XG4gICAgICAgICAgICB2YXIgY2xpZW50QXR0cmlidXRlID0gdGhpcy5jbGllbnREb2xwaGluLmF0dHJpYnV0ZShhdHRyLnByb3BlcnR5TmFtZSwgYXR0ci5xdWFsaWZpZXIsIGF0dHIudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGF0dHIuaWQgJiYgYXR0ci5pZC5tYXRjaChcIi4qUyRcIikpIHtcbiAgICAgICAgICAgICAgICBjbGllbnRBdHRyaWJ1dGUuaWQgPSBhdHRyLmlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0cmlidXRlcy5wdXNoKGNsaWVudEF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgY2xpZW50UG0gPSBuZXcgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwoc2VydmVyQ29tbWFuZC5wbUlkLCBzZXJ2ZXJDb21tYW5kLnBtVHlwZSk7XG4gICAgICAgIGNsaWVudFBtLmFkZEF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XG4gICAgICAgIGlmIChzZXJ2ZXJDb21tYW5kLmNsaWVudFNpZGVPbmx5KSB7XG4gICAgICAgICAgICBjbGllbnRQbS5jbGllbnRTaWRlT25seSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5hZGQoY2xpZW50UG0sIGZhbHNlKTtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLnVwZGF0ZVByZXNlbnRhdGlvbk1vZGVsUXVhbGlmaWVyKGNsaWVudFBtKTtcbiAgICAgICAgcmV0dXJuIGNsaWVudFBtO1xuICAgIH1cblxuICAgIGhhbmRsZVZhbHVlQ2hhbmdlZENvbW1hbmQoc2VydmVyQ29tbWFuZCkge1xuICAgICAgICB2YXIgY2xpZW50QXR0cmlidXRlID0gdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQXR0cmlidXRlQnlJZChzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZUlkKTtcbiAgICAgICAgaWYgKCFjbGllbnRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlIHdpdGggaWQgXCIgKyBzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZUlkICsgXCIgbm90IGZvdW5kLCBjYW5ub3QgdXBkYXRlIHRvIG5ldyB2YWx1ZSBcIiArIHNlcnZlckNvbW1hbmQubmV3VmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNsaWVudEF0dHJpYnV0ZS5nZXRWYWx1ZSgpID09IHNlcnZlckNvbW1hbmQubmV3VmFsdWUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJub3RoaW5nIHRvIGRvLiBuZXcgdmFsdWUgPT0gb2xkIHZhbHVlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50QXR0cmlidXRlLnNldFZhbHVlRnJvbVNlcnZlcihzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaGFuZGxlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIHZhciBjbGllbnRBdHRyaWJ1dGUgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBdHRyaWJ1dGVCeUlkKHNlcnZlckNvbW1hbmQuYXR0cmlidXRlSWQpO1xuICAgICAgICBpZiAoIWNsaWVudEF0dHJpYnV0ZSlcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBjbGllbnRBdHRyaWJ1dGVbc2VydmVyQ29tbWFuZC5tZXRhZGF0YU5hbWVdID0gc2VydmVyQ29tbWFuZC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGlzdGVuKCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLndhaXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IGhvdyB0byBpc3N1ZSBhIHdhcm5pbmcgaWYgbm8gcHVzaExpc3RlbmVyIGlzIHNldD9cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5xdWV1ZVB1c2hDb21tYW5kKCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvbW1hbmRRdWV1ZS5wdXNoKHtcbiAgICAgICAgICAgIGNvbW1hbmQ6IHRoaXMucHVzaExpc3RlbmVyLFxuICAgICAgICAgICAgaGFuZGxlcjoge1xuICAgICAgICAgICAgICAgIG9uRmluaXNoZWQ6IGZ1bmN0aW9uICgpIHsgbWUud2FpdGluZyA9IGZhbHNlOyB9LFxuICAgICAgICAgICAgICAgIG9uRmluaXNoZWREYXRhOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbGVhc2UoKSB7XG4gICAgICAgIGlmICghdGhpcy53YWl0aW5nKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB0aGlzLndhaXRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdG9kbzogaG93IHRvIGlzc3VlIGEgd2FybmluZyBpZiBubyByZWxlYXNlQ29tbWFuZCBpcyBzZXQ/XG4gICAgICAgIHRoaXMudHJhbnNtaXR0ZXIuc2lnbmFsKHRoaXMucmVsZWFzZUNvbW1hbmQpO1xuICAgIH1cbn0iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuaW1wb3J0IHttYWtlRG9scGhpbn0gZnJvbSAnLi9vcGVuRG9scGhpbi5qcyc7XG5pbXBvcnQge2V4aXN0cywgY2hlY2tNZXRob2QsIGNoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IENvbm5lY3RvciBmcm9tICcuL2Nvbm5lY3Rvcic7XG5pbXBvcnQgQmVhbk1hbmFnZXIgZnJvbSAnLi9iZWFubWFuYWdlcic7XG5pbXBvcnQgQ2xhc3NSZXBvc2l0b3J5IGZyb20gJy4vY2xhc3NyZXBvJztcbmltcG9ydCBDb250cm9sbGVyTWFuYWdlciBmcm9tICcuL2NvbnRyb2xsZXJtYW5hZ2VyJztcbmltcG9ydCBDbGllbnRDb250ZXh0IGZyb20gJy4vY2xpZW50Y29udGV4dCc7XG5pbXBvcnQgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIgZnJvbSAnLi9wbGF0Zm9ybUh0dHBUcmFuc21pdHRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRleHRGYWN0b3J5IHtcblxuICAgIGNyZWF0ZSh1cmwsIGNvbmZpZyl7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdjb25uZWN0KHVybCwgY29uZmlnKScpO1xuICAgICAgICBjaGVja1BhcmFtKHVybCwgJ3VybCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgY2xpZW50IGNvbnRleHQgJysgdXJsICsnICAgICcrIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuXG4gICAgICAgIGxldCBidWlsZGVyID0gbWFrZURvbHBoaW4oKS51cmwodXJsKS5yZXNldChmYWxzZSkuc2xhY2tNUyg0KS5zdXBwb3J0Q09SUyh0cnVlKS5tYXhCYXRjaFNpemUoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuICAgICAgICBpZiAoZXhpc3RzKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGlmIChleGlzdHMoY29uZmlnLmVycm9ySGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmVycm9ySGFuZGxlcihjb25maWcuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleGlzdHMoY29uZmlnLmhlYWRlcnNJbmZvKSAmJiBPYmplY3Qua2V5cyhjb25maWcuaGVhZGVyc0luZm8pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmhlYWRlcnNJbmZvKGNvbmZpZy5oZWFkZXJzSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZG9scGhpbiA9IGJ1aWxkZXIuYnVpbGQoKTtcblxuICAgICAgICB2YXIgdHJhbnNtaXR0ZXIgPSBuZXcgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIodXJsLCBjb25maWcpO1xuICAgICAgICB0cmFuc21pdHRlci5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNsaWVudENvbnRleHQuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2xwaGluLmNsaWVudENvbm5lY3Rvci50cmFuc21pdHRlciA9IHRyYW5zbWl0dGVyO1xuXG4gICAgICAgIHZhciBjbGFzc1JlcG9zaXRvcnkgPSBuZXcgQ2xhc3NSZXBvc2l0b3J5KGRvbHBoaW4pO1xuICAgICAgICB2YXIgYmVhbk1hbmFnZXIgPSBuZXcgQmVhbk1hbmFnZXIoY2xhc3NSZXBvc2l0b3J5KTtcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IodXJsLCBkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbmZpZyk7XG4gICAgICAgIHZhciBjb250cm9sbGVyTWFuYWdlciA9IG5ldyBDb250cm9sbGVyTWFuYWdlcihkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3Rvcik7XG5cbiAgICAgICAgdmFyIGNsaWVudENvbnRleHQgPSBuZXcgQ2xpZW50Q29udGV4dChkb2xwaGluLCBiZWFuTWFuYWdlciwgY29udHJvbGxlck1hbmFnZXIsIGNvbm5lY3Rvcik7XG4gICAgICAgIHJldHVybiBjbGllbnRDb250ZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0cy5DbGllbnRDb250ZXh0RmFjdG9yeSA9IENsaWVudENvbnRleHRGYWN0b3J5OyIsImltcG9ydCBDbGllbnRBdHRyaWJ1dGUgZnJvbSAnLi9jbGllbnRBdHRyaWJ1dGUnXG5pbXBvcnQgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwgZnJvbSAnLi9jbGllbnRQcmVzZW50YXRpb25Nb2RlbCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50RG9scGhpbiB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICB9XG5cbiAgICBzZXRDbGllbnRDb25uZWN0b3IoY2xpZW50Q29ubmVjdG9yKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yID0gY2xpZW50Q29ubmVjdG9yO1xuICAgIH1cblxuICAgIGdldENsaWVudENvbm5lY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Q29ubmVjdG9yO1xuICAgIH1cblxuICAgIHNlbmQoY29tbWFuZCwgb25GaW5pc2hlZCkge1xuICAgICAgICB0aGlzLmNsaWVudENvbm5lY3Rvci5zZW5kKGNvbW1hbmQsIG9uRmluaXNoZWQpO1xuICAgIH1cblxuICAgIGF0dHJpYnV0ZShwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdHRyaWJ1dGUocHJvcGVydHlOYW1lLCBxdWFsaWZpZXIsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBwcmVzZW50YXRpb25Nb2RlbChpZCwgdHlwZSwgLi4uYXR0cmlidXRlcykge1xuICAgICAgICB2YXIgbW9kZWwgPSBuZXcgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwoaWQsIHR5cGUpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgbW9kZWwuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5hZGQobW9kZWwsIHRydWUpO1xuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuXG4gICAgc2V0Q2xpZW50TW9kZWxTdG9yZShjbGllbnRNb2RlbFN0b3JlKSB7XG4gICAgICAgIHRoaXMuY2xpZW50TW9kZWxTdG9yZSA9IGNsaWVudE1vZGVsU3RvcmU7XG4gICAgfVxuXG4gICAgZ2V0Q2xpZW50TW9kZWxTdG9yZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50TW9kZWxTdG9yZTtcbiAgICB9XG5cbiAgICBsaXN0UHJlc2VudGF0aW9uTW9kZWxJZHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5saXN0UHJlc2VudGF0aW9uTW9kZWxJZHMoKTtcbiAgICB9XG5cbiAgICBsaXN0UHJlc2VudGF0aW9uTW9kZWxzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkubGlzdFByZXNlbnRhdGlvbk1vZGVscygpO1xuICAgIH1cblxuICAgIGZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShwcmVzZW50YXRpb25Nb2RlbFR5cGUpO1xuICAgIH1cblxuICAgIGdldEF0KGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIGZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQoaWQpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsVG9EZWxldGUpIHtcbiAgICAgICAgdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWxUb0RlbGV0ZSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlUHJlc2VudGF0aW9uTW9kZWxRdWFsaWZpZXIocHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgcHJlc2VudGF0aW9uTW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goc291cmNlQXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXR0cmlidXRlUXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHVwZGF0ZUF0dHJpYnV0ZVF1YWxpZmllcihzb3VyY2VBdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFzb3VyY2VBdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZEFsbEF0dHJpYnV0ZXNCeVF1YWxpZmllcihzb3VyY2VBdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpO1xuICAgICAgICBhdHRyaWJ1dGVzLmZvckVhY2godGFyZ2V0QXR0cmlidXRlID0+IHtcbiAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5zZXRWYWx1ZShzb3VyY2VBdHRyaWJ1dGUuZ2V0VmFsdWUoKSk7IC8vIHNob3VsZCBhbHdheXMgaGF2ZSB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdGFydFB1c2hMaXN0ZW5pbmcocHVzaENvbW1hbmQsIHJlbGVhc2VDb21tYW5kKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFB1c2hMaXN0ZW5lcihwdXNoQ29tbWFuZCk7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFJlbGVhc2VDb21tYW5kKHJlbGVhc2VDb21tYW5kKTtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaEVuYWJsZWQodHJ1ZSk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudENvbm5lY3Rvci5saXN0ZW4oKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgc3RvcFB1c2hMaXN0ZW5pbmcoKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFB1c2hFbmFibGVkKGZhbHNlKTtcbiAgICB9XG59IiwiaW1wb3J0IEF0dHJpYnV0ZSBmcm9tICcuL2F0dHJpYnV0ZSdcbmltcG9ydCBFdmVudEJ1cyBmcm9tICcuL2V2ZW50QnVzJ1xuaW1wb3J0IENvbW1hbmRGYWN0b3J5IGZyb20gJy4vY29tbWFuZHMvY29tbWFuZEZhY3RvcnknO1xuaW1wb3J0IHtBRERFRF9UWVBFLCBSRU1PVkVEX1RZUEV9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRNb2RlbFN0b3JlIHtcblxuICAgIGNvbnN0cnVjdG9yKGNsaWVudERvbHBoaW4pIHtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluID0gY2xpZW50RG9scGhpbjtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVySWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzID0gbmV3IEV2ZW50QnVzKCk7XG4gICAgfVxuXG4gICAgZ2V0Q2xpZW50RG9scGhpbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50RG9scGhpbjtcbiAgICB9XG5cbiAgICByZWdpc3RlckF0dHJpYnV0ZShhdHRyaWJ1dGUpIHtcbiAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGVuZXZlciBhbiBhdHRyaWJ1dGUgY2hhbmdlcyBpdHMgdmFsdWUsIHRoZSBzZXJ2ZXIgbmVlZHMgdG8gYmUgbm90aWZpZWRcbiAgICAgICAgLy8gYW5kIGFsbCBvdGhlciBhdHRyaWJ1dGVzIHdpdGggdGhlIHNhbWUgcXVhbGlmaWVyIGFyZSBnaXZlbiB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICBpZihldnQubmV3VmFsdWUgIT0gZXZ0Lm9sZFZhbHVlICYmIGV2dC5zZW5kVG9TZXJ2ZXIgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbW1hbmQgPSBDb21tYW5kRmFjdG9yeS5jcmVhdGVWYWx1ZUNoYW5nZWRDb21tYW5kKGF0dHJpYnV0ZS5pZCwgZXZ0Lm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZChjb21tYW5kLCBudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSkge1xuICAgICAgICAgICAgICAgIHZhciBhdHRycyA9IHRoaXMuZmluZEF0dHJpYnV0ZXNCeUZpbHRlcigoYXR0cikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXR0ciAhPT0gYXR0cmlidXRlICYmIGF0dHIuZ2V0UXVhbGlmaWVyKCkgPT0gYXR0cmlidXRlLmdldFF1YWxpZmllcigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGF0dHJzLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ci5zZXRWYWx1ZShhdHRyaWJ1dGUuZ2V0VmFsdWUoKSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgICAgIGF0dHJpYnV0ZS5vblF1YWxpZmllckNoYW5nZSgoZXZ0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCkuc2VuZChDb21tYW5kRmFjdG9yeS5jcmVhdGVDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQoYXR0cmlidXRlLmlkLCBBdHRyaWJ1dGUuUVVBTElGSUVSX1BST1BFUlRZLCBldnQubmV3VmFsdWUpLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYWRkKG1vZGVsLCBzZW5kVG9TZXJ2ZXIgPSB0cnVlKSB7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuaGFzKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJUaGVyZSBhbHJlYWR5IGlzIGEgUE0gd2l0aCBpZCBcIiArIG1vZGVsLmlkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYWRkZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5zZXQobW9kZWwuaWQsIG1vZGVsKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUobW9kZWwpO1xuXG4gICAgICAgICAgICBpZihzZW5kVG9TZXJ2ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdG9yID0gdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudENvbm5lY3RvcigpO1xuICAgICAgICAgICAgICAgIGNvbm5lY3Rvci5zZW5kKENvbW1hbmRGYWN0b3J5LmNyZWF0ZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChtb2RlbCksIG51bGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb2RlbC5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnZXZlbnRUeXBlJzogQURERURfVFlQRSwgJ2NsaWVudFByZXNlbnRhdGlvbk1vZGVsJzogbW9kZWwgfSk7XG4gICAgICAgICAgICBhZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZGVkO1xuICAgIH1cblxuICAgIHJlbW92ZShtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHJlbW92ZWQgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmhhcyhtb2RlbC5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuZGVsZXRlKG1vZGVsLmlkKTtcbiAgICAgICAgICAgIG1vZGVsLmdldEF0dHJpYnV0ZXMoKS5mb3JFYWNoKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZUJ5SWQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy50cmlnZ2VyKHsgJ2V2ZW50VHlwZSc6IFJFTU9WRURfVFlQRSwgJ2NsaWVudFByZXNlbnRhdGlvbk1vZGVsJzogbW9kZWwgfSk7XG4gICAgICAgICAgICByZW1vdmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVtb3ZlZDtcbiAgICB9XG5cbiAgICBmaW5kQXR0cmlidXRlc0J5RmlsdGVyKGZpbHRlcikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5mb3JFYWNoKChtb2RlbCkgPT4ge1xuICAgICAgICAgICAgbW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goKGF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH1cblxuICAgIGFkZFByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKSB7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdHlwZSA9IG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgaWYgKCF0eXBlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXNlbnRhdGlvbk1vZGVscyA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5nZXQodHlwZSk7XG4gICAgICAgIGlmICghcHJlc2VudGF0aW9uTW9kZWxzKSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Nb2RlbHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5zZXQodHlwZSwgcHJlc2VudGF0aW9uTW9kZWxzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShwcmVzZW50YXRpb25Nb2RlbHMuaW5kZXhPZihtb2RlbCkgPiAtMSkpIHtcbiAgICAgICAgICAgIHByZXNlbnRhdGlvbk1vZGVscy5wdXNoKG1vZGVsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZVByZXNlbnRhdGlvbk1vZGVsQnlUeXBlKG1vZGVsKSB7XG4gICAgICAgIGlmICghbW9kZWwgfHwgIShtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHByZXNlbnRhdGlvbk1vZGVscyA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgaWYgKCFwcmVzZW50YXRpb25Nb2RlbHMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlc2VudGF0aW9uTW9kZWxzLmxlbmd0aCA+IC0xKSB7XG4gICAgICAgICAgICBwcmVzZW50YXRpb25Nb2RlbHMuc3BsaWNlKHByZXNlbnRhdGlvbk1vZGVscy5pbmRleE9mKG1vZGVsKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlbnRhdGlvbk1vZGVscy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZS5kZWxldGUobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpc3RQcmVzZW50YXRpb25Nb2RlbElkcygpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgaXRlciA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmtleXMoKTtcbiAgICAgICAgdmFyIG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKCFuZXh0LmRvbmUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5leHQudmFsdWUpO1xuICAgICAgICAgICAgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGlzdFByZXNlbnRhdGlvbk1vZGVscygpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgaXRlciA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLnZhbHVlcygpO1xuICAgICAgICB2YXIgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB3aGlsZSAoIW5leHQuZG9uZSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV4dC52YWx1ZSk7XG4gICAgICAgICAgICBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBmaW5kUHJlc2VudGF0aW9uTW9kZWxCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5nZXQoaWQpO1xuICAgIH1cblxuICAgIGZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZSh0eXBlKSB7XG4gICAgICAgIGlmICghdHlwZSB8fCAhdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KHR5cGUpLnNsaWNlKDApOyAvLyBzbGljZSBpcyB1c2VkIHRvIGNsb25lIHRoZSBhcnJheVxuICAgIH1cblxuICAgIGRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsLCBub3RpZnkpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZShtb2RlbCk7XG4gICAgICAgICAgICBpZiAoIW5vdGlmeSB8fCBtb2RlbC5jbGllbnRTaWRlT25seSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRDb25uZWN0b3IoKS5zZW5kKENvbW1hbmRGYWN0b3J5LmNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQobW9kZWwuaWQpLCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwoaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmhhcyhpZCk7XG4gICAgfVxuXG4gICAgYWRkQXR0cmlidXRlQnlJZChhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgdGhpcy5hdHRyaWJ1dGVzUGVySWQuaGFzKGF0dHJpYnV0ZS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5zZXQoYXR0cmlidXRlLmlkLCBhdHRyaWJ1dGUpO1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHJpYnV0ZUJ5SWQoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICF0aGlzLmF0dHJpYnV0ZXNQZXJJZC5oYXMoYXR0cmlidXRlLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1BlcklkLmRlbGV0ZShhdHRyaWJ1dGUuaWQpO1xuICAgIH1cblxuICAgIGZpbmRBdHRyaWJ1dGVCeUlkKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5nZXQoaWQpO1xuICAgIH1cblxuICAgIGFkZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuZ2V0KGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLnNldChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCksIGF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID4gLTEpKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZUF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuZ2V0KGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRyaWJ1dGVzLmxlbmd0aCA+IC0xKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnNwbGljZShhdHRyaWJ1dGVzLmluZGV4T2YoYXR0cmlidXRlKSwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuZGVsZXRlKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaW5kQWxsQXR0cmlidXRlc0J5UXVhbGlmaWVyKHF1YWxpZmllcikge1xuICAgICAgICBpZiAoIXF1YWxpZmllciB8fCAhdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLmhhcyhxdWFsaWZpZXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5nZXQocXVhbGlmaWVyKS5zbGljZSgwKTsgLy8gc2xpY2UgaXMgdXNlZCB0byBjbG9uZSB0aGUgYXJyYXlcbiAgICB9XG5cbiAgICBvbk1vZGVsU3RvcmVDaGFuZ2UoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25Nb2RlbFN0b3JlQ2hhbmdlRm9yVHlwZShwcmVzZW50YXRpb25Nb2RlbFR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMub25FdmVudChwbVN0b3JlRXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHBtU3RvcmVFdmVudC5jbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUgPT0gcHJlc2VudGF0aW9uTW9kZWxUeXBlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnRIYW5kbGVyKHBtU3RvcmVFdmVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IEV2ZW50QnVzIGZyb20gJy4vZXZlbnRCdXMnXG5cbnZhciBwcmVzZW50YXRpb25Nb2RlbEluc3RhbmNlQ291bnQgPSAwOyAvLyB0b2RvIGRrOiBjb25zaWRlciBtYWtpbmcgdGhpcyBzdGF0aWMgaW4gY2xhc3NcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwge1xuICAgIGNvbnN0cnVjdG9yKGlkLCBwcmVzZW50YXRpb25Nb2RlbFR5cGUpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsVHlwZSA9IHByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHRoaXMuY2xpZW50U2lkZU9ubHkgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kaXJ0eSA9IGZhbHNlO1xuICAgICAgICBpZiAodHlwZW9mIGlkICE9PSAndW5kZWZpbmVkJyAmJiBpZCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlkID0gKHByZXNlbnRhdGlvbk1vZGVsSW5zdGFuY2VDb3VudCsrKS50b1N0cmluZygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW52YWxpZEJ1cyA9IG5ldyBFdmVudEJ1cygpO1xuICAgICAgICB0aGlzLmRpcnR5VmFsdWVDaGFuZ2VCdXMgPSBuZXcgRXZlbnRCdXMoKTtcbiAgICB9XG4gICAgLy8gdG9kbyBkazogYWxpZ24gd2l0aCBKYXZhIHZlcnNpb246IG1vdmUgdG8gQ2xpZW50RG9scGhpbiBhbmQgYXV0by1hZGQgdG8gbW9kZWwgc3RvcmVcbiAgICAvKiogYSBjb3B5IGNvbnN0cnVjdG9yIGZvciBhbnl0aGluZyBidXQgSURzLiBQZXIgZGVmYXVsdCwgY29waWVzIGFyZSBjbGllbnQgc2lkZSBvbmx5LCBubyBhdXRvbWF0aWMgdXBkYXRlIGFwcGxpZXMuICovXG4gICAgY29weSgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDbGllbnRQcmVzZW50YXRpb25Nb2RlbChudWxsLCB0aGlzLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIHJlc3VsdC5jbGllbnRTaWRlT25seSA9IHRydWU7XG4gICAgICAgIHRoaXMuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZUNvcHkgPSBhdHRyaWJ1dGUuY29weSgpO1xuICAgICAgICAgICAgcmVzdWx0LmFkZEF0dHJpYnV0ZShhdHRyaWJ1dGVDb3B5KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIC8vYWRkIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICBhZGRBdHRyaWJ1dGVzKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzIHx8IGF0dHJpYnV0ZXMubGVuZ3RoIDwgMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGUoYXR0cik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhZGRBdHRyaWJ1dGUoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID4gLTEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIGF0dHJpYnV0ZSB3aXRoIHByb3BlcnR5IG5hbWU6IFwiICsgYXR0cmlidXRlLnByb3BlcnR5TmFtZVxuICAgICAgICAgICAgICAgICsgXCIgaW4gcHJlc2VudGF0aW9uIG1vZGVsIHdpdGggaWQ6IFwiICsgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSAmJiB0aGlzLmZpbmRBdHRyaWJ1dGVCeVF1YWxpZmllcihhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIGF0dHJpYnV0ZSB3aXRoIHF1YWxpZmllcjogXCIgKyBhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKClcbiAgICAgICAgICAgICAgICArIFwiIGluIHByZXNlbnRhdGlvbiBtb2RlbCB3aXRoIGlkOiBcIiArIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZS5zZXRQcmVzZW50YXRpb25Nb2RlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgYXR0cmlidXRlLm9uVmFsdWVDaGFuZ2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkQnVzLnRyaWdnZXIoeyBzb3VyY2U6IHRoaXMgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkludmFsaWRhdGVkKGhhbmRsZUludmFsaWRhdGUpIHtcbiAgICAgICAgdGhpcy5pbnZhbGlkQnVzLm9uRXZlbnQoaGFuZGxlSW52YWxpZGF0ZSk7XG4gICAgfVxuICAgIC8qKiByZXR1cm5zIGEgY29weSBvZiB0aGUgaW50ZXJuYWwgc3RhdGUgKi9cbiAgICBnZXRBdHRyaWJ1dGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNsaWNlKDApO1xuICAgIH1cbiAgICBnZXRBdChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgfVxuICAgIGZpbmRBbGxBdHRyaWJ1dGVzQnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKGF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUgPT0gcHJvcGVydHlOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5hdHRyaWJ1dGVzW2ldLnByb3BlcnR5TmFtZSA9PSBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgZmluZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyKHF1YWxpZmllcikge1xuICAgICAgICBpZiAoIXF1YWxpZmllcilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuYXR0cmlidXRlc1tpXS5nZXRRdWFsaWZpZXIoKSA9PSBxdWFsaWZpZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBmaW5kQXR0cmlidXRlQnlJZChpZCkge1xuICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgc3luY1dpdGgoc291cmNlUHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLmZvckVhY2goKHRhcmdldEF0dHJpYnV0ZSkgPT4ge1xuICAgICAgICAgICAgdmFyIHNvdXJjZUF0dHJpYnV0ZSA9IHNvdXJjZVByZXNlbnRhdGlvbk1vZGVsLmdldEF0KHRhcmdldEF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgaWYgKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIHRhcmdldEF0dHJpYnV0ZS5zeW5jV2l0aChzb3VyY2VBdHRyaWJ1dGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRW1pdHRlciBmcm9tICdlbWl0dGVyLWNvbXBvbmVudCc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9wcm9taXNlJztcbmltcG9ydCBDb21tYW5kRmFjdG9yeSBmcm9tICcuL2NvbW1hbmRzL2NvbW1hbmRGYWN0b3J5JztcbmltcG9ydCB7ZXhpc3RzLCBjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRleHR7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2xwaGluLCBiZWFuTWFuYWdlciwgY29udHJvbGxlck1hbmFnZXIsIGNvbm5lY3Rvcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGllbnRDb250ZXh0KGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKScpO1xuICAgICAgICBjaGVja1BhcmFtKGRvbHBoaW4sICdkb2xwaGluJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbk1hbmFnZXIsICdiZWFuTWFuYWdlcicpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbnRyb2xsZXJNYW5hZ2VyLCAnY29udHJvbGxlck1hbmFnZXInKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb25uZWN0b3IsICdjb25uZWN0b3InKTtcblxuICAgICAgICB0aGlzLmRvbHBoaW4gPSBkb2xwaGluO1xuICAgICAgICB0aGlzLmJlYW5NYW5hZ2VyID0gYmVhbk1hbmFnZXI7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJNYW5hZ2VyID0gY29udHJvbGxlck1hbmFnZXI7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RvciA9IGNvbm5lY3RvcjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25uZWN0KCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9jb25uZWN0b3IuY29ubmVjdCgpO1xuICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yLmludm9rZShDb21tYW5kRmFjdG9yeS5jcmVhdGVDcmVhdGVDb250ZXh0Q29tbWFuZCgpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlO1xuICAgIH1cblxuICAgIG9uQ29ubmVjdCgpe1xuICAgICAgICBpZihleGlzdHModGhpcy5jb25uZWN0aW9uUHJvbWlzZSkpe1xuICAgICAgICAgICAgaWYoIXRoaXMuaXNDb25uZWN0ZWQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sbGVyKG5hbWUpe1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xpZW50Q29udGV4dC5jcmVhdGVDb250cm9sbGVyKG5hbWUpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obmFtZSwgJ25hbWUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlck1hbmFnZXIuY3JlYXRlQ29udHJvbGxlcihuYW1lKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kb2xwaGluLnN0b3BQdXNoTGlzdGVuaW5nKCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fY29udHJvbGxlck1hbmFnZXIuZGVzdHJveSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3Rvci5pbnZva2UoQ29tbWFuZEZhY3RvcnkuY3JlYXRlRGVzdHJveUNvbnRleHRDb21tYW5kKCkpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9scGhpbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5iZWFuTWFuYWdlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5fY29udHJvbGxlck1hbmFnZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuRW1pdHRlcihDbGllbnRDb250ZXh0LnByb3RvdHlwZSk7IiwiaW1wb3J0IHtWQUxVRV9DSEFOR0VEX0NPTU1BTkRfSUQsIFBSRVNFTlRBVElPTl9NT0RFTF9ERUxFVEVEX0NPTU1BTkRfSUR9IGZyb20gJy4vY29tbWFuZHMvY29tbWFuZENvbnN0YW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsaW5kQ29tbWFuZEJhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKGZvbGRpbmcgPSB0cnVlLCBtYXhCYXRjaFNpemUgPSA1MCkge1xuICAgICAgICB0aGlzLmZvbGRpbmcgPSBmb2xkaW5nO1xuICAgICAgICB0aGlzLm1heEJhdGNoU2l6ZSA9IG1heEJhdGNoU2l6ZTtcbiAgICB9XG4gICAgYmF0Y2gocXVldWUpIHtcbiAgICAgICAgbGV0IGJhdGNoID0gW107XG4gICAgICAgIGxldCBiYXRjaExlbmd0aCA9IDA7XG4gICAgICAgIHdoaWxlKHF1ZXVlW2JhdGNoTGVuZ3RoXSAmJiBiYXRjaExlbmd0aCA8PSB0aGlzLm1heEJhdGNoU2l6ZSkge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHF1ZXVlW2JhdGNoTGVuZ3RoXTtcbiAgICAgICAgICAgIGJhdGNoTGVuZ3RoKys7XG4gICAgICAgICAgICBpZih0aGlzLmZvbGRpbmcpIHtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNvbW1hbmQuaWQgPT0gVkFMVUVfQ0hBTkdFRF9DT01NQU5EX0lEICYmXG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2hbYmF0Y2gubGVuZ3RoIC0gMV0uY29tbWFuZC5pZCA9PSBWQUxVRV9DSEFOR0VEX0NPTU1BTkRfSUQgJiZcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb21tYW5kLmF0dHJpYnV0ZUlkID09IGJhdGNoW2JhdGNoLmxlbmd0aCAtIDFdLmNvbW1hbmQuYXR0cmlidXRlSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tZXJnZSBWYWx1ZUNoYW5nZSBmb3Igc2FtZSB2YWx1ZVxuICAgICAgICAgICAgICAgICAgICBiYXRjaFtiYXRjaC5sZW5ndGggLSAxXS5jb21tYW5kLm5ld1ZhbHVlID0gZWxlbWVudC5jb21tYW5kLm5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihlbGVtZW50LmNvbW1hbmQuaWQgPT0gUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgICAgICAvL1dlIGRvIG5vdCBuZWVkIGl0Li4uXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2gucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJhdGNoLnB1c2goZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihlbGVtZW50LmhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZS5zcGxpY2UoMCwgYmF0Y2hMZW5ndGgpO1xuICAgICAgICByZXR1cm4gYmF0Y2g7XG4gICAgfVxufSIsImltcG9ydCB7ZXhpc3RzLCBjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtKU19TVFJJTkdfVFlQRX0gZnJvbSAnLi4vY29uc3RhbnRzJztcbmltcG9ydCB7XG4gICAgQ1JFQVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lELFxuICAgIFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCxcbiAgICBBVFRSSUJVVEVfTUVUQURBVEFfQ0hBTkdFRF9DT01NQU5EX0lELFxuICAgIENBTExfQUNUSU9OX0NPTU1BTkRfSUQsXG4gICAgQ0hBTkdFX0FUVFJJQlVURV9NRVRBREFUQV9DT01NQU5EX0lELFxuICAgIENSRUFURV9DT05URVhUX0NPTU1BTkRfSUQsXG4gICAgQ1JFQVRFX0NPTlRST0xMRVJfQ09NTUFORF9JRCxcbiAgICBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQsXG4gICAgREVTVFJPWV9DT05URVhUX0NPTU1BTkRfSUQsXG4gICAgREVTVFJPWV9DT05UUk9MTEVSX0NPTU1BTkRfSUQsXG4gICAgSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX0lELFxuICAgIFBSRVNFTlRBVElPTl9NT0RFTF9ERUxFVEVEX0NPTU1BTkRfSUQsXG4gICAgU1RBUlRfTE9OR19QT0xMX0NPTU1BTkRfSURcbn0gZnJvbSAnLi9jb21tYW5kQ29uc3RhbnRzJztcbmltcG9ydCB7SUQsIFBNX0lELCBQTV9UWVBFLCBQTV9BVFRSSUJVVEVTLCBOQU1FLCBBVFRSSUJVVEVfSUQsIFZBTFVFLCBDT05UUk9MTEVSX0lELCBQQVJBTVN9IGZyb20gJy4vY29tbWFuZENvbnN0YW50cyc7XG5pbXBvcnQgVmFsdWVDaGFuZ2VkQ29tbWFuZCBmcm9tICcuL2ltcGwvdmFsdWVDaGFuZ2VkQ29tbWFuZCc7XG5pbXBvcnQgQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZCBmcm9tICcuL2ltcGwvYXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZCc7XG5pbXBvcnQgQ2FsbEFjdGlvbkNvbW1hbmQgZnJvbSAnLi9pbXBsL2NhbGxBY3Rpb25Db21tYW5kJztcbmltcG9ydCBDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQgZnJvbSAnLi9pbXBsL2NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZCc7XG5pbXBvcnQgQ3JlYXRlQ29udGV4dENvbW1hbmQgZnJvbSAnLi9pbXBsL2NyZWF0ZUNvbnRleHRDb21tYW5kJztcbmltcG9ydCBDcmVhdGVDb250cm9sbGVyQ29tbWFuZCBmcm9tICcuL2ltcGwvY3JlYXRlQ29udHJvbGxlckNvbW1hbmQnO1xuaW1wb3J0IENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCBmcm9tICcuL2ltcGwvY3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kJztcbmltcG9ydCBEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQgZnJvbSAnLi9pbXBsL2RlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCc7XG5pbXBvcnQgRGVzdHJveUNvbnRleHRDb21tYW5kIGZyb20gJy4vaW1wbC9kZXN0cm95Q29udGV4dENvbW1hbmQnO1xuaW1wb3J0IERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZCBmcm9tICcuL2ltcGwvZGVzdHJveUNvbnRyb2xsZXJDb21tYW5kJztcbmltcG9ydCBJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQgZnJvbSAnLi9pbXBsL2ludGVycnVwdExvbmdQb2xsQ29tbWFuZCc7XG5pbXBvcnQgUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZCBmcm9tICcuL2ltcGwvcHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZCc7XG5pbXBvcnQgU3RhcnRMb25nUG9sbENvbW1hbmQgZnJvbSAnLi9pbXBsL3N0YXJ0TG9uZ1BvbGxDb21tYW5kJztcbmltcG9ydCBDb2RlY0Vycm9yIGZyb20gJy4vY29kZWNFcnJvcic7XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWMge1xuXG4gICAgc3RhdGljIF9lbmNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5lbmNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLmF0dHJpYnV0ZUlkLCBcImNvbW1hbmQuYXR0cmlidXRlSWRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZC5tZXRhZGF0YU5hbWUsIFwiY29tbWFuZC5tZXRhZGF0YU5hbWVcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW0lEXSA9IEFUVFJJQlVURV9NRVRBREFUQV9DSEFOR0VEX0NPTU1BTkRfSUQ7XG4gICAgICAgIGpzb25Db21tYW5kW0FUVFJJQlVURV9JRF0gPSBjb21tYW5kLmF0dHJpYnV0ZUlkO1xuICAgICAgICBqc29uQ29tbWFuZFtOQU1FXSA9IGNvbW1hbmQubWV0YWRhdGFOYW1lO1xuICAgICAgICBqc29uQ29tbWFuZFtWQUxVRV0gPSBjb21tYW5kLnZhbHVlO1xuICAgICAgICByZXR1cm4ganNvbkNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9kZWNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuZGVjb2RlQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZFtBVFRSSUJVVEVfSURdLCBcImpzb25Db21tYW5kW0FUVFJJQlVURV9JRF1cIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbTkFNRV0sIFwianNvbkNvbW1hbmRbTkFNRV1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZCgpO1xuICAgICAgICBjb21tYW5kLmF0dHJpYnV0ZUlkID0ganNvbkNvbW1hbmRbQVRUUklCVVRFX0lEXTtcbiAgICAgICAgY29tbWFuZC5tZXRhZGF0YU5hbWUgPSBqc29uQ29tbWFuZFtOQU1FXTtcbiAgICAgICAgY29tbWFuZC52YWx1ZSA9IGpzb25Db21tYW5kW1ZBTFVFXTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9lbmNvZGVDYWxsQWN0aW9uQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuZW5jb2RlQ2FsbEFjdGlvbkNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQuY29udHJvbGxlcmlkLCBcImNvbW1hbmQuY29udHJvbGxlcmlkXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQuYWN0aW9uTmFtZSwgXCJjb21tYW5kLmFjdGlvbk5hbWVcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZC5wYXJhbXMsIFwiY29tbWFuZC5wYXJhbXNcIik7XG5cblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbSURdID0gQ0FMTF9BQ1RJT05fQ09NTUFORF9JRDtcbiAgICAgICAganNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF0gPSBjb21tYW5kLmNvbnRyb2xsZXJpZDtcbiAgICAgICAganNvbkNvbW1hbmRbTkFNRV0gPSBjb21tYW5kLmFjdGlvbk5hbWU7XG4gICAgICAgIGpzb25Db21tYW5kW1BBUkFNU10gPSBjb21tYW5kLnBhcmFtcy5tYXAoKHBhcmFtKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0ge307XG4gICAgICAgICAgICByZXN1bHRbTkFNRV0gPSBwYXJhbS5uYW1lO1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhwYXJhbS52YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbVkFMVUVdID0gcGFyYW0udmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQ2FsbEFjdGlvbkNvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5kZWNvZGVDYWxsQWN0aW9uQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZFtDT05UUk9MTEVSX0lEXSwgXCJqc29uQ29tbWFuZFtDT05UUk9MTEVSX0lEXVwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZFtOQU1FXSwgXCJqc29uQ29tbWFuZFtOQU1FXVwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZFtQQVJBTVNdLCBcImpzb25Db21tYW5kW1BBUkFNU11cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQ2FsbEFjdGlvbkNvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5jb250cm9sbGVyaWQgPSBqc29uQ29tbWFuZFtDT05UUk9MTEVSX0lEXTtcbiAgICAgICAgY29tbWFuZC5hY3Rpb25OYW1lID0ganNvbkNvbW1hbmRbTkFNRV07XG4gICAgICAgIC8vVE9ETzogRsO8ciBkaWUgUGFyYW1zIHNvbGx0ZW4gd2lyIGVpbmUgS2xhc3NlIGJlcmVpdHN0ZWxsZW5cbiAgICAgICAgY29tbWFuZC5wYXJhbXMgPSBqc29uQ29tbWFuZFtQQVJBTVNdLm1hcCgocGFyYW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ25hbWUnOiBwYXJhbVtOQU1FXSxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBleGlzdHMocGFyYW1bVkFMVUVdKSA/IHBhcmFtW1ZBTFVFXSA6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuZW5jb2RlQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLmF0dHJpYnV0ZUlkLCBcImNvbW1hbmQuYXR0cmlidXRlSWRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZC5tZXRhZGF0YU5hbWUsIFwiY29tbWFuZC5tZXRhZGF0YU5hbWVcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW0lEXSA9IENIQU5HRV9BVFRSSUJVVEVfTUVUQURBVEFfQ09NTUFORF9JRDtcbiAgICAgICAganNvbkNvbW1hbmRbQVRUUklCVVRFX0lEXSA9IGNvbW1hbmQuYXR0cmlidXRlSWQ7XG4gICAgICAgIGpzb25Db21tYW5kW05BTUVdID0gY29tbWFuZC5tZXRhZGF0YU5hbWU7XG4gICAgICAgIGpzb25Db21tYW5kW1ZBTFVFXSA9IGNvbW1hbmQudmFsdWU7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLmRlY29kZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZFtBVFRSSUJVVEVfSURdLCBcImpzb25Db21tYW5kW0FUVFJJQlVURV9JRF1cIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbTkFNRV0sIFwianNvbkNvbW1hbmRbTkFNRV1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kKCk7XG4gICAgICAgIGNvbW1hbmQuYXR0cmlidXRlSWQgPSBqc29uQ29tbWFuZFtBVFRSSUJVVEVfSURdO1xuICAgICAgICBjb21tYW5kLm1ldGFkYXRhTmFtZSA9IGpzb25Db21tYW5kW05BTUVdO1xuICAgICAgICBjb21tYW5kLnZhbHVlID0ganNvbkNvbW1hbmRbVkFMVUVdO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5lbmNvZGVDcmVhdGVDb250ZXh0Q29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLCBcImNvbW1hbmRcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW0lEXSA9IENSRUFURV9DT05URVhUX0NPTU1BTkRfSUQ7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuZGVjb2RlQ3JlYXRlQ29udGV4dENvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQ3JlYXRlQ29udGV4dENvbW1hbmQoKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9lbmNvZGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuX2VuY29kZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLmNvbnRyb2xsZXJOYW1lLCBcImNvbW1hbmQuY29udHJvbGxlck5hbWVcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW0lEXSA9IENSRUFURV9DT05UUk9MTEVSX0NPTU1BTkRfSUQ7XG4gICAgICAgIGpzb25Db21tYW5kW05BTUVdID0gY29tbWFuZC5jb250cm9sbGVyTmFtZTtcbiAgICAgICAganNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF0gPSBjb21tYW5kLnBhcmVudENvbnRyb2xsZXJJZDtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZGVjb2RlQ3JlYXRlQ29udHJvbGxlckNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbTkFNRV0sIFwianNvbkNvbW1hbmRbTkFNRV1cIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF0sIFwianNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5jb250cm9sbGVyTmFtZSA9IGpzb25Db21tYW5kW05BTUVdO1xuICAgICAgICBjb21tYW5kLnBhcmVudENvbnRyb2xsZXJJZCA9IGpzb25Db21tYW5kW0NPTlRST0xMRVJfSURdO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuZW5jb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLnBtSWQsIFwiY29tbWFuZC5wbUlkXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQucG1UeXBlLCBcImNvbW1hbmQucG1UeXBlXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtJRF0gPSBDUkVBVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQ7XG4gICAgICAgIGpzb25Db21tYW5kW1BNX0lEXSA9IGNvbW1hbmQucG1JZDtcbiAgICAgICAganNvbkNvbW1hbmRbUE1fVFlQRV0gPSBjb21tYW5kLnBtVHlwZTtcbiAgICAgICAganNvbkNvbW1hbmRbUE1fQVRUUklCVVRFU10gPSBjb21tYW5kLmF0dHJpYnV0ZXMubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSB7fTtcbiAgICAgICAgICAgIHJlc3VsdFtOQU1FXSA9IGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWU7XG4gICAgICAgICAgICByZXN1bHRbQVRUUklCVVRFX0lEXSA9IGF0dHJpYnV0ZS5pZDtcbiAgICAgICAgICAgIGlmIChleGlzdHMoYXR0cmlidXRlLnZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdFtWQUxVRV0gPSBhdHRyaWJ1dGUudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGpzb25Db21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuZGVjb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGpzb25Db21tYW5kLCBcImpzb25Db21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGpzb25Db21tYW5kW1BNX0lEXSwgXCJqc29uQ29tbWFuZFtQTV9JRF1cIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbUE1fVFlQRV0sIFwianNvbkNvbW1hbmRbUE1fVFlQRV1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKCk7XG4gICAgICAgIGNvbW1hbmQucG1JZCA9IGpzb25Db21tYW5kW1BNX0lEXTtcbiAgICAgICAgY29tbWFuZC5wbVR5cGUgPSBqc29uQ29tbWFuZFtQTV9UWVBFXTtcblxuICAgICAgICAvL1RPRE86IEbDvHIgZGllIEF0dHJpYnV0ZSBzb2xsdGVuIHdpciBlaW5lIEtsYXNzZSBiZXJlaXRzdGVsbGVuXG4gICAgICAgIGNvbW1hbmQuYXR0cmlidXRlcyA9IGpzb25Db21tYW5kW1BNX0FUVFJJQlVURVNdLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdwcm9wZXJ0eU5hbWUnOiBhdHRyaWJ1dGVbTkFNRV0sXG4gICAgICAgICAgICAgICAgJ2lkJzogYXR0cmlidXRlW0FUVFJJQlVURV9JRF0sXG4gICAgICAgICAgICAgICAgJ3ZhbHVlJzogZXhpc3RzKGF0dHJpYnV0ZVtWQUxVRV0pID8gYXR0cmlidXRlW1ZBTFVFXSA6IG51bGxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKFwiQ29kZWMuX2VuY29kZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLCBcImNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZC5wbUlkLCBcImNvbW1hbmQucG1JZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbSURdID0gREVMRVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEO1xuICAgICAgICBqc29uQ29tbWFuZFtQTV9JRF0gPSBjb21tYW5kLnBtSWQ7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLl9kZWNvZGVEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbUE1fSURdLCBcImpzb25Db21tYW5kW1BNX0lEXVwiKTtcblxuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IERlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCgpO1xuICAgICAgICBjb21tYW5kLnBtSWQgPSBqc29uQ29tbWFuZFtQTV9JRF07XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlRGVzdHJveUNvbnRleHRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZW5jb2RlRGVzdHJveUNvbnRleHRDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbSURdID0gREVTVFJPWV9DT05URVhUX0NPTU1BTkRfSUQ7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZURlc3Ryb3lDb250ZXh0Q29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLl9kZWNvZGVEZXN0cm95Q29udGV4dENvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgRGVzdHJveUNvbnRleHRDb21tYW5kKCk7XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZW5jb2RlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLmNvbnRyb2xsZXJJZCwgXCJjb21tYW5kLmNvbnRyb2xsZXJJZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbSURdID0gREVTVFJPWV9DT05UUk9MTEVSX0NPTU1BTkRfSUQ7XG4gICAgICAgIGpzb25Db21tYW5kW0NPTlRST0xMRVJfSURdID0gY29tbWFuZC5jb250cm9sbGVySWQ7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLl9kZWNvZGVEZXN0cm95Q29udHJvbGxlckNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF0sIFwianNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF1cIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKCk7XG4gICAgICAgIGNvbW1hbmQuY29udHJvbGxlcklkID0ganNvbkNvbW1hbmRbQ09OVFJPTExFUl9JRF07XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZW5jb2RlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZW5jb2RlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcblxuICAgICAgICBsZXQganNvbkNvbW1hbmQgPSB7fTtcbiAgICAgICAganNvbkNvbW1hbmRbSURdID0gSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX0lEO1xuICAgICAgICByZXR1cm4ganNvbkNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9kZWNvZGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZGVjb2RlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGpzb25Db21tYW5kLCBcImpzb25Db21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IEludGVycnVwdExvbmdQb2xsQ29tbWFuZCgpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLl9lbmNvZGVQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLnBtSWQsIFwiY29tbWFuZC5wbUlkXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtJRF0gPSBQUkVTRU5UQVRJT05fTU9ERUxfREVMRVRFRF9DT01NQU5EX0lEO1xuICAgICAgICBqc29uQ29tbWFuZFtQTV9JRF0gPSBjb21tYW5kLnBtSWQ7XG4gICAgICAgIHJldHVybiBqc29uQ29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2RlY29kZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZGVjb2RlUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZCwgXCJqc29uQ29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShqc29uQ29tbWFuZFtQTV9JRF0sIFwianNvbkNvbW1hbmRbUE1fSURdXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IFByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5wbUlkID0ganNvbkNvbW1hbmRbUE1fSURdO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgX2VuY29kZVN0YXJ0TG9uZ1BvbGxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZW5jb2RlU3RhcnRMb25nUG9sbENvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZCwgXCJjb21tYW5kXCIpO1xuXG4gICAgICAgIGxldCBqc29uQ29tbWFuZCA9IHt9O1xuICAgICAgICBqc29uQ29tbWFuZFtJRF0gPSBTVEFSVF9MT05HX1BPTExfQ09NTUFORF9JRDtcbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlU3RhcnRMb25nUG9sbENvbW1hbmQoanNvbkNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5fZGVjb2RlU3RhcnRMb25nUG9sbENvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG5cbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgU3RhcnRMb25nUG9sbENvbW1hbmQoKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIF9lbmNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5lbmNvZGVWYWx1ZUNoYW5nZWRDb21tYW5kXCIpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsIFwiY29tbWFuZFwiKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb21tYW5kLmF0dHJpYnV0ZUlkLCBcImNvbW1hbmQuYXR0cmlidXRlSWRcIik7XG5cbiAgICAgICAgbGV0IGpzb25Db21tYW5kID0ge307XG4gICAgICAgIGpzb25Db21tYW5kW0lEXSA9IFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRDtcbiAgICAgICAganNvbkNvbW1hbmRbQVRUUklCVVRFX0lEXSA9IGNvbW1hbmQuYXR0cmlidXRlSWQ7XG4gICAgICAgIGlmIChleGlzdHMoY29tbWFuZC5uZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgIGpzb25Db21tYW5kW1ZBTFVFXSA9IGNvbW1hbmQubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGpzb25Db21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBfZGVjb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChqc29uQ29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLmRlY29kZVZhbHVlQ2hhbmdlZENvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmQsIFwianNvbkNvbW1hbmRcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oanNvbkNvbW1hbmRbQVRUUklCVVRFX0lEXSwgXCJqc29uQ29tbWFuZFtBVFRSSUJVVEVfSURdXCIpO1xuXG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IFZhbHVlQ2hhbmdlZENvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5hdHRyaWJ1dGVJZCA9IGpzb25Db21tYW5kW0FUVFJJQlVURV9JRF07XG4gICAgICAgIGlmIChleGlzdHMoanNvbkNvbW1hbmRbVkFMVUVdKSkge1xuICAgICAgICAgICAgY29tbWFuZC5uZXdWYWx1ZSA9IGpzb25Db21tYW5kW1ZBTFVFXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbW1hbmQubmV3VmFsdWUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBlbmNvZGUoY29tbWFuZHMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoXCJDb2RlYy5lbmNvZGVcIik7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZHMsIFwiY29tbWFuZHNcIik7XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29tbWFuZHMubWFwKChjb21tYW5kKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tbWFuZC5pZCA9PT0gQVRUUklCVVRFX01FVEFEQVRBX0NIQU5HRURfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDQUxMX0FDVElPTl9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZUNhbGxBY3Rpb25Db21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDSEFOR0VfQVRUUklCVVRFX01FVEFEQVRBX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDUkVBVEVfQ09OVEVYVF9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDUkVBVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZW5jb2RlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVEZXN0cm95Q29udGV4dENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IERFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZUludGVycnVwdExvbmdQb2xsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBTVEFSVF9MT05HX1BPTExfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9lbmNvZGVTdGFydExvbmdQb2xsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gVkFMVUVfQ0hBTkdFRF9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2VuY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBDb2RlY0Vycm9yKCdDb21tYW5kIG9mIHR5cGUgJyArIGNvbW1hbmQuaWQgKyAnIGNhbiBub3QgYmUgaGFuZGxlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlY29kZSh0cmFuc21pdHRlZCkge1xuICAgICAgICBjaGVja01ldGhvZChcIkNvZGVjLmRlY29kZVwiKTtcbiAgICAgICAgY2hlY2tQYXJhbSh0cmFuc21pdHRlZCwgXCJ0cmFuc21pdHRlZFwiKTtcblxuICAgICAgICBpZiAodHlwZW9mIHRyYW5zbWl0dGVkID09PSBKU19TVFJJTkdfVFlQRSkge1xuICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UodHJhbnNtaXR0ZWQpLm1hcChmdW5jdGlvbiAoY29tbWFuZCkge1xuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kLmlkID09PSBBVFRSSUJVVEVfTUVUQURBVEFfQ0hBTkdFRF9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kZWNvZGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gQ0FMTF9BQ1RJT05fQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlQ2FsbEFjdGlvbkNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDSEFOR0VfQVRUUklCVVRFX01FVEFEQVRBX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IENSRUFURV9DT05URVhUX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZUNyZWF0ZUNvbnRleHRDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gQ1JFQVRFX0NPTlRST0xMRVJfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBDUkVBVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IERFTEVURV9QUkVTRU5UQVRJT05fTU9ERUxfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gREVTVFJPWV9DT05URVhUX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZURlc3Ryb3lDb250ZXh0Q29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IERFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLl9kZWNvZGVEZXN0cm95Q29udHJvbGxlckNvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBJTlRFUlJVUFRfTE9OR19QT0xMX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZUludGVycnVwdExvbmdQb2xsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09IFBSRVNFTlRBVElPTl9NT0RFTF9ERUxFVEVEX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZVByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBTVEFSVF9MT05HX1BPTExfQ09NTUFORF9JRCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5fZGVjb2RlU3RhcnRMb25nUG9sbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjb21tYW5kLmlkID09PSBWQUxVRV9DSEFOR0VEX0NPTU1BTkRfSUQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuX2RlY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IENvZGVjRXJyb3IoJ0NvbW1hbmQgb2YgdHlwZSAnICsgY29tbWFuZC5pZCArICcgY2FuIG5vdCBiZSBoYW5kbGVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29kZWNFcnJvcignQ2FuIG5vdCBkZWNvZGUgZGF0YSB0aGF0IGlzIG5vdCBvZiB0eXBlIHN0cmluZycpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvZGVjRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59IiwiZXhwb3J0IGNvbnN0IEFUVFJJQlVURV9NRVRBREFUQV9DSEFOR0VEX0NPTU1BTkRfSUQgPSAnQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkJztcbmV4cG9ydCBjb25zdCBDQUxMX0FDVElPTl9DT01NQU5EX0lEID0gJ0NhbGxBY3Rpb24nO1xuZXhwb3J0IGNvbnN0IENIQU5HRV9BVFRSSUJVVEVfTUVUQURBVEFfQ09NTUFORF9JRCA9ICdDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YSc7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9JRCA9ICdDcmVhdGVDb250ZXh0JztcbmV4cG9ydCBjb25zdCBDUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX0lEID0gJ0NyZWF0ZUNvbnRyb2xsZXInO1xuZXhwb3J0IGNvbnN0IENSRUFURV9QUkVTRU5UQVRJT05fTU9ERUxfQ09NTUFORF9JRCA9ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCc7XG5leHBvcnQgY29uc3QgREVMRVRFX1BSRVNFTlRBVElPTl9NT0RFTF9DT01NQU5EX0lEID0gJ0RlbGV0ZVByZXNlbnRhdGlvbk1vZGVsJztcbmV4cG9ydCBjb25zdCBERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9JRCA9ICdEZXN0cm95Q29udGV4dCc7XG5leHBvcnQgY29uc3QgREVTVFJPWV9DT05UUk9MTEVSX0NPTU1BTkRfSUQgPSAnRGVzdHJveUNvbnRyb2xsZXInO1xuZXhwb3J0IGNvbnN0IElOVEVSUlVQVF9MT05HX1BPTExfQ09NTUFORF9JRCA9ICdJbnRlcnJ1cHRMb25nUG9sbCc7XG5leHBvcnQgY29uc3QgUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRCA9ICdQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWQnO1xuZXhwb3J0IGNvbnN0IFNUQVJUX0xPTkdfUE9MTF9DT01NQU5EX0lEID0gJ1N0YXJ0TG9uZ1BvbGwnO1xuZXhwb3J0IGNvbnN0IFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRCA9ICdWYWx1ZUNoYW5nZWQnO1xuXG5leHBvcnQgY29uc3QgSUQgPSBcImlkXCI7XG5leHBvcnQgY29uc3QgQVRUUklCVVRFX0lEID0gXCJhX2lkXCI7XG5leHBvcnQgY29uc3QgUE1fSUQgPSBcInBfaWRcIjtcbmV4cG9ydCBjb25zdCBDT05UUk9MTEVSX0lEID0gXCJjX2lkXCI7XG5leHBvcnQgY29uc3QgUE1fVFlQRSA9IFwidFwiO1xuZXhwb3J0IGNvbnN0IE5BTUUgPSBcIm5cIjtcbmV4cG9ydCBjb25zdCBWQUxVRSA9IFwidlwiO1xuZXhwb3J0IGNvbnN0IFBBUkFNUyA9IFwicFwiO1xuZXhwb3J0IGNvbnN0IFBNX0FUVFJJQlVURVMgPSBcImFcIjsiLCJpbXBvcnQgQ3JlYXRlQ29udGV4dENvbW1hbmQgZnJvbSAnLi9pbXBsL2NyZWF0ZUNvbnRleHRDb21tYW5kJztcbmltcG9ydCBDcmVhdGVDb250cm9sbGVyQ29tbWFuZCBmcm9tICcuL2ltcGwvY3JlYXRlQ29udHJvbGxlckNvbW1hbmQnO1xuaW1wb3J0IENhbGxBY3Rpb25Db21tYW5kIGZyb20gJy4vaW1wbC9jYWxsQWN0aW9uQ29tbWFuZCc7XG5pbXBvcnQgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kIGZyb20gJy4vaW1wbC9kZXN0cm95Q29udHJvbGxlckNvbW1hbmQnO1xuaW1wb3J0IERlc3Ryb3lDb250ZXh0Q29tbWFuZCBmcm9tICcuL2ltcGwvZGVzdHJveUNvbnRleHRDb21tYW5kJztcbmltcG9ydCBTdGFydExvbmdQb2xsQ29tbWFuZCBmcm9tICcuL2ltcGwvc3RhcnRMb25nUG9sbENvbW1hbmQnO1xuaW1wb3J0IEludGVycnVwdExvbmdQb2xsQ29tbWFuZCBmcm9tICcuL2ltcGwvaW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kJztcbmltcG9ydCBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQgZnJvbSAnLi9pbXBsL2NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCc7XG5pbXBvcnQgRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kIGZyb20gJy4vaW1wbC9kZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQnO1xuaW1wb3J0IFByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQgZnJvbSAnLi9pbXBsL3ByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQnO1xuaW1wb3J0IFZhbHVlQ2hhbmdlZENvbW1hbmQgZnJvbSAnLi9pbXBsL3ZhbHVlQ2hhbmdlZENvbW1hbmQnO1xuaW1wb3J0IENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZCBmcm9tICcuL2ltcGwvY2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kJztcbmltcG9ydCBBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kIGZyb20gJy4vaW1wbC9hdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tbWFuZEZhY3Rvcnkge1xuXG4gICAgc3RhdGljIGNyZWF0ZUNyZWF0ZUNvbnRleHRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IENyZWF0ZUNvbnRleHRDb21tYW5kKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXJOYW1lLCBwYXJlbnRDb250cm9sbGVySWQpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBDcmVhdGVDb250cm9sbGVyQ29tbWFuZCgpO1xuICAgICAgICBjb21tYW5kLmluaXQoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCk7XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDYWxsQWN0aW9uQ29tbWFuZChjb250cm9sbGVyaWQsIGFjdGlvbk5hbWUsIHBhcmFtcykge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gbmV3IENhbGxBY3Rpb25Db21tYW5kKCk7XG4gICAgICAgIGNvbW1hbmQuaW5pdChjb250cm9sbGVyaWQsIGFjdGlvbk5hbWUsIHBhcmFtcyk7XG4gICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVEZXN0cm95Q29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlcklkKSB7XG4gICAgICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKCk7XG4gICAgICAgIGNvbW1hbmQuaW5pdChjb250cm9sbGVySWQpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRGVzdHJveUNvbnRleHRDb21tYW5kKCkge1xuICAgICAgICByZXR1cm4gbmV3IERlc3Ryb3lDb250ZXh0Q29tbWFuZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBTdGFydExvbmdQb2xsQ29tbWFuZCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBjb25zdCBjb21tYW5kID0gbmV3IENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCgpO1xuICAgICAgICBjb21tYW5kLmluaXQocHJlc2VudGF0aW9uTW9kZWwpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlRGVsZXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKHBtSWQpIHtcbiAgICAgICAgY29uc3QgY29tbWFuZCA9IG5ldyBEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5pbml0KHBtSWQpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUHJlc2VudGF0aW9uTW9kZWxEZWxldGVkQ29tbWFuZChwbUlkKSB7XG4gICAgICAgIGxldCBjb21tYW5kID0gbmV3IFByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5pbml0KHBtSWQpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVmFsdWVDaGFuZ2VkQ29tbWFuZChhdHRyaWJ1dGVJZCwgbmV3VmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgVmFsdWVDaGFuZ2VkQ29tbWFuZCgpO1xuICAgICAgICBjb21tYW5kLmluaXQoYXR0cmlidXRlSWQsIG5ld1ZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUNoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZChhdHRyaWJ1dGVJZCwgbWV0YWRhdGFOYW1lLCB2YWx1ZSkge1xuICAgICAgICBsZXQgY29tbWFuZCA9IG5ldyBDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQoKTtcbiAgICAgICAgY29tbWFuZC5pbml0KGF0dHJpYnV0ZUlkLCBtZXRhZGF0YU5hbWUsIHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQoYXR0cmlidXRlSWQsIG1ldGFkYXRhTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgbGV0IGNvbW1hbmQgPSBuZXcgQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZCgpO1xuICAgICAgICBjb21tYW5kLmluaXQoYXR0cmlidXRlSWQsIG1ldGFkYXRhTmFtZSwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gY29tbWFuZDtcbiAgICB9XG59IiwiaW1wb3J0IHtBVFRSSUJVVEVfTUVUQURBVEFfQ0hBTkdFRF9DT01NQU5EX0lEfSBmcm9tICcuLi9jb21tYW5kQ29uc3RhbnRzJztcbmltcG9ydCB7Y2hlY2tNZXRob2QsIGNoZWNrUGFyYW19IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IEFUVFJJQlVURV9NRVRBREFUQV9DSEFOR0VEX0NPTU1BTkRfSUQ7XG4gICAgfVxuXG4gICAgaW5pdChhdHRyaWJ1dGVJZCwgbWV0YWRhdGFOYW1lLCB2YWx1ZSkge1xuICAgICAgICBjaGVja01ldGhvZCgnQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShhdHRyaWJ1dGVJZCwgJ2F0dHJpYnV0ZUlkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obWV0YWRhdGFOYW1lLCAnbWV0YWRhdGFOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTmFtZSA9IG1ldGFkYXRhTmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQge0NBTExfQUNUSU9OX0NPTU1BTkRfSUR9IGZyb20gJy4uL2NvbW1hbmRDb25zdGFudHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYWxsQWN0aW9uQ29tbWFuZCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBDQUxMX0FDVElPTl9DT01NQU5EX0lEO1xuICAgIH1cblxuICAgIGluaXQoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmluaXQoKScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbnRyb2xsZXJpZCwgJ2NvbnRyb2xsZXJpZCcpO1xuICAgICAgICBjaGVja1BhcmFtKGFjdGlvbk5hbWUsICdhY3Rpb25OYW1lJyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVyaWQgPSBjb250cm9sbGVyaWQ7XG4gICAgICAgIHRoaXMuYWN0aW9uTmFtZSA9IGFjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMucGFyYW1zID0gcGFyYW1zO1xuICAgIH1cblxufSIsImltcG9ydCB7Q0hBTkdFX0FUVFJJQlVURV9NRVRBREFUQV9DT01NQU5EX0lEfSBmcm9tICcuLi9jb21tYW5kQ29uc3RhbnRzJztcbmltcG9ydCB7Y2hlY2tNZXRob2QsIGNoZWNrUGFyYW19IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gQ0hBTkdFX0FUVFJJQlVURV9NRVRBREFUQV9DT01NQU5EX0lEO1xuICAgIH1cblxuICAgIGluaXQoYXR0cmlidXRlSWQsIG1ldGFkYXRhTmFtZSwgdmFsdWUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShhdHRyaWJ1dGVJZCwgJ2F0dHJpYnV0ZUlkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obWV0YWRhdGFOYW1lLCAnbWV0YWRhdGFOYW1lJyk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTmFtZSA9IG1ldGFkYXRhTmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQge0NSRUFURV9DT05URVhUX0NPTU1BTkRfSUR9IGZyb20gJy4uL2NvbW1hbmRDb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVDb250ZXh0Q29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IENSRUFURV9DT05URVhUX0NPTU1BTkRfSUQ7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX0lEfSBmcm9tICcuLi9jb21tYW5kQ29uc3RhbnRzJztcbmltcG9ydCB7Y2hlY2tNZXRob2QsIGNoZWNrUGFyYW19IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBDUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX0lEO1xuICAgIH1cblxuICAgIGluaXQoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQuaW5pdCgpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlck5hbWUsICdjb250cm9sbGVyTmFtZScpO1xuXG4gICAgICAgIHRoaXMuY29udHJvbGxlck5hbWUgPSBjb250cm9sbGVyTmFtZTtcbiAgICAgICAgdGhpcy5wYXJlbnRDb250cm9sbGVySWQgPSBwYXJlbnRDb250cm9sbGVySWQ7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtDUkVBVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUR9IGZyb20gJy4uL2NvbW1hbmRDb25zdGFudHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBDUkVBVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQ7XG4gICAgfVxuXG4gICAgaW5pdChwcmVzZW50YXRpb25Nb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kLmluaXQoKScpO1xuICAgICAgICBjaGVja1BhcmFtKHByZXNlbnRhdGlvbk1vZGVsLCAncHJlc2VudGF0aW9uTW9kZWwnKTtcblxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgdGhpcy5jbGllbnRTaWRlT25seSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBtSWQgPSBwcmVzZW50YXRpb25Nb2RlbC5pZDtcbiAgICAgICAgdGhpcy5wbVR5cGUgPSBwcmVzZW50YXRpb25Nb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHZhciBjb21tYW5kID0gdGhpcztcbiAgICAgICAgcHJlc2VudGF0aW9uTW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGNvbW1hbmQuYXR0cmlidXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IGF0dHIucHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgIGlkOiBhdHRyLmlkLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyLmdldFZhbHVlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0IHtERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUR9IGZyb20gJy4uL2NvbW1hbmRDb25zdGFudHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBERUxFVEVfUFJFU0VOVEFUSU9OX01PREVMX0NPTU1BTkRfSUQ7XG4gICAgfVxuXG4gICAgaW5pdChwbUlkKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQuaW5pdCgpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocG1JZCwgJ3BtSWQnKTtcblxuICAgICAgICB0aGlzLnBtSWQgPSBwbUlkO1xuICAgIH1cbn1cbiIsImltcG9ydCB7REVTVFJPWV9DT05URVhUX0NPTU1BTkRfSUR9IGZyb20gJy4uL2NvbW1hbmRDb25zdGFudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXN0cm95Q29udGV4dENvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9JRDtcbiAgICB9XG5cbn0iLCJpbXBvcnQge0RFU1RST1lfQ09OVFJPTExFUl9DT01NQU5EX0lEfSBmcm9tICcuLi9jb21tYW5kQ29uc3RhbnRzJztcbmltcG9ydCB7Y2hlY2tNZXRob2QsIGNoZWNrUGFyYW19IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gREVTVFJPWV9DT05UUk9MTEVSX0NPTU1BTkRfSUQ7XG4gICAgfVxuXG4gICAgaW5pdChjb250cm9sbGVySWQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVySWQsICdjb250cm9sbGVySWQnKTtcblxuICAgICAgICB0aGlzLmNvbnRyb2xsZXJJZCA9IGNvbnRyb2xsZXJJZDtcbiAgICB9XG5cbn0iLCJpbXBvcnQge0lOVEVSUlVQVF9MT05HX1BPTExfQ09NTUFORF9JRH0gZnJvbSAnLi4vY29tbWFuZENvbnN0YW50cydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX0lEO1xuICAgIH1cbn0iLCJpbXBvcnQge1BSRVNFTlRBVElPTl9NT0RFTF9ERUxFVEVEX0NPTU1BTkRfSUR9IGZyb20gJy4uL2NvbW1hbmRDb25zdGFudHMnO1xuaW1wb3J0IHtjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcmVzZW50YXRpb25Nb2RlbERlbGV0ZWRDb21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmlkID0gUFJFU0VOVEFUSU9OX01PREVMX0RFTEVURURfQ09NTUFORF9JRDtcbiAgICB9XG5cbiAgICBpbml0KHBtSWQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ1ByZXNlbnRhdGlvbk1vZGVsRGVsZXRlZENvbW1hbmQuaW5pdCgpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocG1JZCwgJ3BtSWQnKTtcblxuICAgICAgICB0aGlzLnBtSWQgPSBwbUlkO1xuICAgIH1cbn0iLCJpbXBvcnQge1NUQVJUX0xPTkdfUE9MTF9DT01NQU5EX0lEfSBmcm9tICcuLi9jb21tYW5kQ29uc3RhbnRzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGFydExvbmdQb2xsQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IFNUQVJUX0xPTkdfUE9MTF9DT01NQU5EX0lEO1xuICAgIH1cbn1cbiIsImltcG9ydCB7VkFMVUVfQ0hBTkdFRF9DT01NQU5EX0lEfSBmcm9tICcuLi9jb21tYW5kQ29uc3RhbnRzJztcbmltcG9ydCB7Y2hlY2tNZXRob2QsIGNoZWNrUGFyYW19IGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsdWVDaGFuZ2VkQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5pZCA9IFZBTFVFX0NIQU5HRURfQ09NTUFORF9JRDtcbiAgICB9XG5cbiAgICBpbml0KGF0dHJpYnV0ZUlkLCBuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja01ldGhvZCgnVmFsdWVDaGFuZ2VkQ29tbWFuZC5pbml0KCknKTtcbiAgICAgICAgY2hlY2tQYXJhbShhdHRyaWJ1dGVJZCwgJ2F0dHJpYnV0ZUlkJyk7XG5cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgfVxufSIsImltcG9ydCBQcm9taXNlIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3Byb21pc2UnO1xuaW1wb3J0IHtleGlzdHMsIGNoZWNrTWV0aG9kLCBjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBDb21tYW5kRmFjdG9yeSBmcm9tICcuL2NvbW1hbmRzL2NvbW1hbmRGYWN0b3J5JztcbmltcG9ydCB7QURERURfVFlQRSwgUkVNT1ZFRF9UWVBFfSBmcm9tICcuL2NvbnN0YW50cyc7XG5cblxuY29uc3QgRE9MUEhJTl9CRUFOID0gJ0BAQCBET0xQSElOX0JFQU4gQEBAJztcbmNvbnN0IEFDVElPTl9DQUxMX0JFQU4gPSAnQEBAIENPTlRST0xMRVJfQUNUSU9OX0NBTExfQkVBTiBAQEAnO1xuY29uc3QgSElHSExBTkRFUl9CRUFOID0gJ0BAQCBISUdITEFOREVSX0JFQU4gQEBAJztcbmNvbnN0IERPTFBISU5fTElTVF9TUExJQ0UgPSAnQERQOkxTQCc7XG5jb25zdCBTT1VSQ0VfU1lTVEVNID0gJ0BAQCBTT1VSQ0VfU1lTVEVNIEBAQCc7XG5jb25zdCBTT1VSQ0VfU1lTVEVNX0NMSUVOVCA9ICdjbGllbnQnO1xuY29uc3QgU09VUkNFX1NZU1RFTV9TRVJWRVIgPSAnc2VydmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29ubmVjdG9ye1xuXG4gICAgY29uc3RydWN0b3IodXJsLCBkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbmZpZykge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yKHVybCwgZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25maWcpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0odXJsLCAndXJsJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oZG9scGhpbiwgJ2RvbHBoaW4nKTtcbiAgICAgICAgY2hlY2tQYXJhbShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5oaWdobGFuZGVyUE1SZXNvbHZlciA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgIHRoaXMuaGlnaGxhbmRlclBNUHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICAgICAgICAgIHNlbGYuaGlnaGxhbmRlclBNUmVzb2x2ZXIgPSByZXNvbHZlO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5vbk1vZGVsU3RvcmVDaGFuZ2UoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBsZXQgbW9kZWwgPSBldmVudC5jbGllbnRQcmVzZW50YXRpb25Nb2RlbDtcbiAgICAgICAgICAgIGxldCBzb3VyY2VTeXN0ZW0gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoU09VUkNFX1NZU1RFTSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKHNvdXJjZVN5c3RlbSkgJiYgc291cmNlU3lzdGVtLnZhbHVlID09PSBTT1VSQ0VfU1lTVEVNX1NFUlZFUikge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5ldmVudFR5cGUgPT09IEFEREVEX1RZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbk1vZGVsQWRkZWQobW9kZWwpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuZXZlbnRUeXBlID09PSBSRU1PVkVEX1RZUEUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbk1vZGVsUmVtb3ZlZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgdGhhdC5kb2xwaGluLnN0YXJ0UHVzaExpc3RlbmluZyhDb21tYW5kRmFjdG9yeS5jcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCgpLCBDb21tYW5kRmFjdG9yeS5jcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQoKSk7XG4gICAgfVxuXG4gICAgb25Nb2RlbEFkZGVkKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb25uZWN0b3Iub25Nb2RlbEFkZGVkKG1vZGVsKScpO1xuICAgICAgICBjaGVja1BhcmFtKG1vZGVsLCAnbW9kZWwnKTtcblxuICAgICAgICB2YXIgdHlwZSA9IG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFDVElPTl9DQUxMX0JFQU46XG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERPTFBISU5fQkVBTjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5yZWdpc3RlckNsYXNzKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgSElHSExBTkRFUl9CRUFOOlxuICAgICAgICAgICAgICAgIHRoaXMuaGlnaGxhbmRlclBNUmVzb2x2ZXIobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0xJU1RfU1BMSUNFOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnNwbGljZUxpc3RFbnRyeShtb2RlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5kb2xwaGluLmRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkubG9hZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbk1vZGVsUmVtb3ZlZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yLm9uTW9kZWxSZW1vdmVkKG1vZGVsKScpO1xuICAgICAgICBjaGVja1BhcmFtKG1vZGVsLCAnbW9kZWwnKTtcbiAgICAgICAgbGV0IHR5cGUgPSBtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0JFQU46XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkudW5yZWdpc3RlckNsYXNzKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9MSVNUX1NQTElDRTpcbiAgICAgICAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnVubG9hZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbnZva2UoY29tbWFuZCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29ubmVjdG9yLmludm9rZShjb21tYW5kKScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbW1hbmQsICdjb21tYW5kJyk7XG5cbiAgICAgICAgdmFyIGRvbHBoaW4gPSB0aGlzLmRvbHBoaW47XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgZG9scGhpbi5zZW5kKGNvbW1hbmQsIHtcbiAgICAgICAgICAgICAgICBvbkZpbmlzaGVkOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0SGlnaGxhbmRlclBNKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oaWdobGFuZGVyUE1Qcm9taXNlO1xuICAgIH1cbn1cblxuZXhwb3J0cy5TT1VSQ0VfU1lTVEVNID0gU09VUkNFX1NZU1RFTTtcbmV4cG9ydHMuU09VUkNFX1NZU1RFTV9DTElFTlQgPSBTT1VSQ0VfU1lTVEVNX0NMSUVOVDtcbmV4cG9ydHMuU09VUkNFX1NZU1RFTV9TRVJWRVIgPSBTT1VSQ0VfU1lTVEVNX1NFUlZFUjtcbmV4cG9ydHMuQUNUSU9OX0NBTExfQkVBTiA9IEFDVElPTl9DQUxMX0JFQU47XG4iLCJleHBvcnQgY29uc3QgSlNfU1RSSU5HX1RZUEUgPSAnc3RyaW5nJztcblxuZXhwb3J0IGNvbnN0IERPTFBISU5fQkVBTiA9IDA7XG5leHBvcnQgY29uc3QgQllURSA9IDE7XG5leHBvcnQgY29uc3QgU0hPUlQgPSAyO1xuZXhwb3J0IGNvbnN0IElOVCA9IDM7XG5leHBvcnQgY29uc3QgTE9ORyA9IDQ7XG5leHBvcnQgY29uc3QgRkxPQVQgPSA1O1xuZXhwb3J0IGNvbnN0IERPVUJMRSA9IDY7XG5leHBvcnQgY29uc3QgQk9PTEVBTiA9IDc7XG5leHBvcnQgY29uc3QgU1RSSU5HID0gODtcbmV4cG9ydCBjb25zdCBEQVRFID0gOTtcbmV4cG9ydCBjb25zdCBFTlVNID0gMTA7XG5leHBvcnQgY29uc3QgQ0FMRU5EQVIgPSAxMTtcbmV4cG9ydCBjb25zdCBMT0NBTF9EQVRFX0ZJRUxEX1RZUEUgPSA1NTtcbmV4cG9ydCBjb25zdCBMT0NBTF9EQVRFX1RJTUVfRklFTERfVFlQRSA9IDUyO1xuZXhwb3J0IGNvbnN0IFpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFID0gNTQ7XG5cblxuZXhwb3J0IGNvbnN0IEFEREVEX1RZUEUgPSBcIkFEREVEXCI7XG5leHBvcnQgY29uc3QgUkVNT1ZFRF9UWVBFID0gXCJSRU1PVkVEXCI7XG4iLCJpbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9wcm9taXNlJztcbmltcG9ydCBTZXQgZnJvbScuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9zZXQnO1xuaW1wb3J0IHtleGlzdHMsIGNoZWNrTWV0aG9kLCBjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcblxuaW1wb3J0IENvbnRyb2xsZXJQcm94eSBmcm9tICcuL2NvbnRyb2xsZXJwcm94eS5qcyc7XG5cbmltcG9ydCBDb21tYW5kRmFjdG9yeSBmcm9tICcuL2NvbW1hbmRzL2NvbW1hbmRGYWN0b3J5LmpzJztcblxuXG5pbXBvcnQgeyBTT1VSQ0VfU1lTVEVNIH0gZnJvbSAnLi9jb25uZWN0b3IuanMnO1xuaW1wb3J0IHsgU09VUkNFX1NZU1RFTV9DTElFTlQgfSBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5pbXBvcnQgeyBBQ1RJT05fQ0FMTF9CRUFOIH0gZnJvbSAnLi9jb25uZWN0b3IuanMnO1xuXG5jb25zdCBDT05UUk9MTEVSX0lEID0gJ2NvbnRyb2xsZXJJZCc7XG5jb25zdCBNT0RFTCA9ICdtb2RlbCc7XG5jb25zdCBFUlJPUl9DT0RFID0gJ2Vycm9yQ29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJNYW5hZ2Vye1xuXG4gICAgY29uc3RydWN0b3IoZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25uZWN0b3Ipe1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlck1hbmFnZXIoZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25uZWN0b3IpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oZG9scGhpbiwgJ2RvbHBoaW4nKTtcbiAgICAgICAgY2hlY2tQYXJhbShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb25uZWN0b3IsICdjb25uZWN0b3InKTtcblxuICAgICAgICB0aGlzLmRvbHBoaW4gPSBkb2xwaGluO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBjb25uZWN0b3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVDb250cm9sbGVyKG5hbWUsIG51bGwpXG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlci5jcmVhdGVDb250cm9sbGVyKG5hbWUpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obmFtZSwgJ25hbWUnKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBjb250cm9sbGVySWQsIG1vZGVsSWQsIG1vZGVsLCBjb250cm9sbGVyO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmdldEhpZ2hsYW5kZXJQTSgpLnRoZW4oKGhpZ2hsYW5kZXJQTSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmludm9rZShDb21tYW5kRmFjdG9yeS5jcmVhdGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChuYW1lLCBwYXJlbnRDb250cm9sbGVySWQpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcklkID0gaGlnaGxhbmRlclBNLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShDT05UUk9MTEVSX0lEKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbElkID0gaGlnaGxhbmRlclBNLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShNT0RFTCkuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwgPSBzZWxmLmNsYXNzUmVwb3NpdG9yeS5tYXBEb2xwaGluVG9CZWFuKG1vZGVsSWQpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXJQcm94eShjb250cm9sbGVySWQsIG1vZGVsLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9sbGVycy5hZGQoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52b2tlQWN0aW9uKGNvbnRyb2xsZXJJZCwgYWN0aW9uTmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlci5pbnZva2VBY3Rpb24oY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBwYXJhbXMpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYWN0aW9uTmFtZSwgJ2FjdGlvbk5hbWUnKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PntcblxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBbXG4gICAgICAgICAgICAgICAgc2VsZi5kb2xwaGluLmF0dHJpYnV0ZShTT1VSQ0VfU1lTVEVNLCBudWxsLCBTT1VSQ0VfU1lTVEVNX0NMSUVOVCksXG4gICAgICAgICAgICAgICAgc2VsZi5kb2xwaGluLmF0dHJpYnV0ZShFUlJPUl9DT0RFKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHBtID0gc2VsZi5kb2xwaGluLnByZXNlbnRhdGlvbk1vZGVsLmFwcGx5KHNlbGYuZG9scGhpbiwgW251bGwsIEFDVElPTl9DQUxMX0JFQU5dLmNvbmNhdChhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgICAgIGxldCBhY3Rpb25QYXJhbXMgPSBbXTtcbiAgICAgICAgICAgIGlmKGV4aXN0cyhwYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzZWxmLmNsYXNzUmVwb3NpdG9yeS5tYXBQYXJhbVRvRG9scGhpbihwYXJhbXNbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblBhcmFtcy5wdXNoKHtuYW1lOiBwYXJhbSwgdmFsdWU6IHZhbHVlfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmludm9rZShDb21tYW5kRmFjdG9yeS5jcmVhdGVDYWxsQWN0aW9uQ29tbWFuZChjb250cm9sbGVySWQsIGFjdGlvbk5hbWUsIGFjdGlvblBhcmFtcykpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpc0Vycm9yID0gcG0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKEVSUk9SX0NPREUpLmdldFZhbHVlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGlzRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcihcIlNlcnZlciBzaWRlIENvbnRyb2xsZXJBY3Rpb24gXCIgKyBhY3Rpb25OYW1lICsgXCIgY2F1c2VkIGFuIGVycm9yLiBQbGVhc2Ugc2VlIHNlcnZlciBsb2cgZm9yIGRldGFpbHMuXCIpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNlbGYuZG9scGhpbi5kZWxldGVQcmVzZW50YXRpb25Nb2RlbChwbSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveUNvbnRyb2xsZXIoY29udHJvbGxlcikge1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlck1hbmFnZXIuZGVzdHJveUNvbnRyb2xsZXIoY29udHJvbGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb250cm9sbGVyLCAnY29udHJvbGxlcicpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLmNvbm5lY3Rvci5nZXRIaWdobGFuZGVyUE0oKS50aGVuKChoaWdobGFuZGVyUE0pID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbnRyb2xsZXJzLmRlbGV0ZShjb250cm9sbGVyKTtcbiAgICAgICAgICAgICAgICBoaWdobGFuZGVyUE0uZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKENPTlRST0xMRVJfSUQpLnNldFZhbHVlKGNvbnRyb2xsZXIuY29udHJvbGxlcklkKTtcbiAgICAgICAgICAgICAgICBzZWxmLmNvbm5lY3Rvci5pbnZva2UoQ29tbWFuZEZhY3RvcnkuY3JlYXRlRGVzdHJveUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXIuZ2V0SWQoKSkpLnRoZW4ocmVzb2x2ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xsZXJzQ29weSA9IHRoaXMuY29udHJvbGxlcnM7XG4gICAgICAgIGxldCBwcm9taXNlcyA9IFtdO1xuICAgICAgICB0aGlzLmNvbnRyb2xsZXJzID0gbmV3IFNldCgpO1xuICAgICAgICBjb250cm9sbGVyc0NvcHkuZm9yRWFjaCgoY29udHJvbGxlcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGNvbnRyb2xsZXIuZGVzdHJveSgpKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFNldCBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9zZXQnO1xuaW1wb3J0IHtjaGVja01ldGhvZCwgY2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJQcm94eXtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJJZCwgbW9kZWwsIG1hbmFnZXIpe1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlclByb3h5KGNvbnRyb2xsZXJJZCwgbW9kZWwsIG1hbmFnZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuICAgICAgICBjaGVja1BhcmFtKG1hbmFnZXIsICdtYW5hZ2VyJyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVySWQgPSBjb250cm9sbGVySWQ7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIGdldE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgICB9XG5cbiAgICBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcklkO1xuICAgIH1cblxuICAgIGludm9rZShuYW1lLCBwYXJhbXMpe1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlclByb3h5Lmludm9rZShuYW1lLCBwYXJhbXMpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obmFtZSwgJ25hbWUnKTtcblxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2xsZXIgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5pbnZva2VBY3Rpb24odGhpcy5jb250cm9sbGVySWQsIG5hbWUsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgdGhpcy5nZXRJZCgpKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbGxlciB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25EZXN0cm95ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIodGhpcyk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uRGVzdHJveWVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuZGVzdHJveUNvbnRyb2xsZXIodGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95ZWQoaGFuZGxlcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyUHJveHkub25EZXN0cm95ZWQoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzLmFkZChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkRlc3Ryb3llZEhhbmRsZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ2xpZW50Q29ubmVjdG9yIGZyb20gJy4vY2xpZW50Q29ubmVjdG9yJ1xuaW1wb3J0IENsaWVudERvbHBoaW4gZnJvbSAnLi9jbGllbnREb2xwaGluJ1xuaW1wb3J0IENsaWVudE1vZGVsU3RvcmUgZnJvbSAnLi9jbGllbnRNb2RlbFN0b3JlJ1xuaW1wb3J0IEh0dHBUcmFuc21pdHRlciBmcm9tICcuL2h0dHBUcmFuc21pdHRlcidcbmltcG9ydCBOb1RyYW5zbWl0dGVyIGZyb20gJy4vbm9UcmFuc21pdHRlcidcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEb2xwaGluQnVpbGRlciB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZXNldF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbGFja01TXyA9IDMwMDtcbiAgICAgICAgdGhpcy5tYXhCYXRjaFNpemVfID0gNTA7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlNfID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdXJsKHVybCkge1xuICAgICAgICB0aGlzLnVybF8gPSB1cmw7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJlc2V0KHJlc2V0KSB7XG4gICAgICAgIHRoaXMucmVzZXRfID0gcmVzZXQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHNsYWNrTVMoc2xhY2tNUykge1xuICAgICAgICB0aGlzLnNsYWNrTVNfID0gc2xhY2tNUztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgbWF4QmF0Y2hTaXplKG1heEJhdGNoU2l6ZSkge1xuICAgICAgICB0aGlzLm1heEJhdGNoU2l6ZV8gPSBtYXhCYXRjaFNpemU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHN1cHBvcnRDT1JTKHN1cHBvcnRDT1JTKSB7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlNfID0gc3VwcG9ydENPUlM7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIGVycm9ySGFuZGxlcihlcnJvckhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXJfID0gZXJyb3JIYW5kbGVyO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBoZWFkZXJzSW5mbyhoZWFkZXJzSW5mbykge1xuICAgICAgICB0aGlzLmhlYWRlcnNJbmZvXyA9IGhlYWRlcnNJbmZvO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICBidWlsZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJPcGVuRG9scGhpbiBqcyBmb3VuZFwiKTtcbiAgICAgICAgdmFyIGNsaWVudERvbHBoaW4gPSBuZXcgQ2xpZW50RG9scGhpbigpO1xuICAgICAgICB2YXIgdHJhbnNtaXR0ZXI7XG4gICAgICAgIGlmICh0aGlzLnVybF8gIT0gbnVsbCAmJiB0aGlzLnVybF8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdHJhbnNtaXR0ZXIgPSBuZXcgSHR0cFRyYW5zbWl0dGVyKHRoaXMudXJsXywgdGhpcy5yZXNldF8sIFwiVVRGLThcIiwgdGhpcy5lcnJvckhhbmRsZXJfLCB0aGlzLnN1cHBvcnRDT1JTXywgdGhpcy5oZWFkZXJzSW5mb18pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdHJhbnNtaXR0ZXIgPSBuZXcgTm9UcmFuc21pdHRlcigpO1xuICAgICAgICB9XG4gICAgICAgIGNsaWVudERvbHBoaW4uc2V0Q2xpZW50Q29ubmVjdG9yKG5ldyBDbGllbnRDb25uZWN0b3IodHJhbnNtaXR0ZXIsIGNsaWVudERvbHBoaW4sIHRoaXMuc2xhY2tNU18sIHRoaXMubWF4QmF0Y2hTaXplXykpO1xuICAgICAgICBjbGllbnREb2xwaGluLnNldENsaWVudE1vZGVsU3RvcmUobmV3IENsaWVudE1vZGVsU3RvcmUoY2xpZW50RG9scGhpbikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWVudERvbHBoaW4gaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIHJldHVybiBjbGllbnREb2xwaGluO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRG9scGhpblJlbW90aW5nRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnUmVtb3RpbmcgRXJyb3InLCBkZXRhaWwpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmRldGFpbCA9IGRldGFpbCB8fCB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvbHBoaW5TZXNzaW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnU2Vzc2lvbiBFcnJvcicpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHR0cFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnSHR0cCBSZXNwb25zZSBFcnJvcicpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHR0cE5ldHdvcmtFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gJ0h0dHAgTmV0d29yayBFcnJvcicpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50QnVzIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbkV2ZW50KGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH1cblxuICAgIHRyaWdnZXIoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLmZvckVhY2goaGFuZGxlID0+IGhhbmRsZShldmVudCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgQ29kZWMgZnJvbSAnLi9jb21tYW5kcy9jb2RlYydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSHR0cFRyYW5zbWl0dGVyIHtcblxuICAgIGNvbnN0cnVjdG9yKHVybCwgcmVzZXQgPSB0cnVlLCBjaGFyc2V0ID0gXCJVVEYtOFwiLCBlcnJvckhhbmRsZXIgPSBudWxsLCBzdXBwb3J0Q09SUyA9IGZhbHNlLCBoZWFkZXJzSW5mbyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY2hhcnNldCA9IGNoYXJzZXQ7XG4gICAgICAgIHRoaXMuSHR0cENvZGVzID0ge1xuICAgICAgICAgICAgZmluaXNoZWQ6IDQsXG4gICAgICAgICAgICBzdWNjZXNzOiAyMDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlMgPSBzdXBwb3J0Q09SUztcbiAgICAgICAgdGhpcy5oZWFkZXJzSW5mbyA9IGhlYWRlcnNJbmZvO1xuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdGhpcy5zaWcgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydENPUlMpIHtcbiAgICAgICAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHRoaXMuaHR0cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyAvLyBOT1RFOiBkb2luZyB0aGlzIGZvciBub24gQ09SUyByZXF1ZXN0cyBoYXMgbm8gaW1wYWN0XG4gICAgICAgICAgICAgICAgdGhpcy5zaWcud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvZGVjID0gbmV3IENvZGVjKCk7XG4gICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0h0dHBUcmFuc21pdHRlci5pbnZhbGlkYXRlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIENsaWVudERvbHBoaW4ucmVzZXQoT25TdWNjZXNzSGFuZGxlcikgaW5zdGVhZCcpO1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuaHR0cC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignb25lcnJvcicsIFwiXCIpO1xuICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmh0dHAucmVhZHlTdGF0ZSA9PSB0aGlzLkh0dHBDb2Rlcy5maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmh0dHAuc3RhdHVzID09IHRoaXMuSHR0cENvZGVzLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlVGV4dCA9IHRoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlQ29tbWFuZHMgPSB0aGlzLmNvZGVjLmRlY29kZShyZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShyZXNwb25zZUNvbW1hbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIG9jY3VycmVkIHBhcnNpbmcgcmVzcG9uc2VUZXh0OiBcIiwgZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkluY29ycmVjdCByZXNwb25zZVRleHQ6IFwiLCByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoJ2FwcGxpY2F0aW9uJywgXCJIdHRwVHJhbnNtaXR0ZXI6IEluY29ycmVjdCByZXNwb25zZVRleHQ6IFwiICsgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogZW1wdHkgcmVzcG9uc2VUZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogSFRUUCBTdGF0dXMgIT0gMjAwXCIpO1xuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5odHRwLm9wZW4oJ1BPU1QnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyh0aGlzLmh0dHApO1xuICAgICAgICBpZiAoXCJvdmVycmlkZU1pbWVUeXBlXCIgaW4gdGhpcy5odHRwKSB7XG4gICAgICAgICAgICB0aGlzLmh0dHAub3ZlcnJpZGVNaW1lVHlwZShcImFwcGxpY2F0aW9uL2pzb247IGNoYXJzZXQ9XCIgKyB0aGlzLmNoYXJzZXQpOyAvLyB0b2RvIG1ha2UgaW5qZWN0YWJsZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaHR0cC5zZW5kKHRoaXMuY29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgfVxuXG4gICAgc2V0SGVhZGVycyhodHRwUmVxKSB7XG4gICAgICAgIGlmICh0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpIGluIHRoaXMuaGVhZGVyc0luZm8pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJzSW5mby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBodHRwUmVxLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5oZWFkZXJzSW5mb1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3Ioa2luZCwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZXJyb3JFdmVudCA9IHsga2luZDoga2luZCwgdXJsOiB0aGlzLnVybCwgaHR0cFN0YXR1czogdGhpcy5odHRwLnN0YXR1cywgbWVzc2FnZTogbWVzc2FnZSB9O1xuICAgICAgICBpZiAodGhpcy5lcnJvckhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyKGVycm9yRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvY2N1cnJlZDogXCIsIGVycm9yRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2lnbmFsKGNvbW1hbmQpIHtcbiAgICAgICAgdGhpcy5zaWcub3BlbignUE9TVCcsIHRoaXMudXJsLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzKHRoaXMuc2lnKTtcbiAgICAgICAgdGhpcy5zaWcuc2VuZCh0aGlzLmNvZGVjLmVuY29kZShbY29tbWFuZF0pKTtcbiAgICB9XG5cbiAgICBpbnZhbGlkYXRlKCkge1xuICAgICAgICB0aGlzLmh0dHAub3BlbignUE9TVCcsIHRoaXMudXJsICsgJ2ludmFsaWRhdGU/JywgZmFsc2UpO1xuICAgICAgICB0aGlzLmh0dHAuc2VuZCgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOb1RyYW5zbWl0dGVyIHtcblxuICAgIHRyYW5zbWl0KGNvbW1hbmRzLCBvbkRvbmUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBzcGVjaWFsXG4gICAgICAgIG9uRG9uZShbXSk7XG4gICAgfVxuXG4gICAgc2lnbmFsKCkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfVxuXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICB9XG59IiwiaW1wb3J0IERvbHBoaW5CdWlsZGVyIGZyb20gJy4vZG9scGhpbkJ1aWxkZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBkb2xwaGluKHVybCwgcmVzZXQsIHNsYWNrTVMgPSAzMDApIHtcbiAgICByZXR1cm4gbWFrZURvbHBoaW4oKS51cmwodXJsKS5yZXNldChyZXNldCkuc2xhY2tNUyhzbGFja01TKS5idWlsZCgpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWFrZURvbHBoaW4oKSB7XG4gICAgcmV0dXJuIG5ldyBEb2xwaGluQnVpbGRlcigpO1xufSIsImltcG9ydCBFbWl0dGVyIGZyb20gJ2VtaXR0ZXItY29tcG9uZW50JztcblxuXG5pbXBvcnQgeyBleGlzdHMgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IERvbHBoaW5SZW1vdGluZ0Vycm9yLCBIdHRwTmV0d29ya0Vycm9yLCBEb2xwaGluU2Vzc2lvbkVycm9yLCBIdHRwUmVzcG9uc2VFcnJvciB9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCBDb2RlYyBmcm9tICcuL2NvbW1hbmRzL2NvZGVjJztcbmltcG9ydCBSZW1vdGluZ0Vycm9ySGFuZGxlciBmcm9tICcuL3JlbW90aW5nRXJyb3JIYW5kbGVyJztcblxuXG5jb25zdCBGSU5JU0hFRCA9IDQ7XG5jb25zdCBTVUNDRVNTID0gMjAwO1xuY29uc3QgUkVRVUVTVF9USU1FT1VUID0gNDA4O1xuXG5jb25zdCBET0xQSElOX1BMQVRGT1JNX1BSRUZJWCA9ICdkb2xwaGluX3BsYXRmb3JtX2ludGVybl8nO1xuY29uc3QgQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUgPSBET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdkb2xwaGluQ2xpZW50SWQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF0Zm9ybUh0dHBUcmFuc21pdHRlciB7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGNvbmZpZykge1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuaGVhZGVyc0luZm8gPSBleGlzdHMoY29uZmlnKSA/IGNvbmZpZy5oZWFkZXJzSW5mbyA6IG51bGw7XG4gICAgICAgIGxldCBjb25uZWN0aW9uQ29uZmlnID0gZXhpc3RzKGNvbmZpZykgPyBjb25maWcuY29ubmVjdGlvbiA6IG51bGw7XG4gICAgICAgIHRoaXMubWF4UmV0cnkgPSBleGlzdHMoY29ubmVjdGlvbkNvbmZpZykgJiYgZXhpc3RzKGNvbm5lY3Rpb25Db25maWcubWF4UmV0cnkpP2Nvbm5lY3Rpb25Db25maWcubWF4UmV0cnk6IDM7XG4gICAgICAgIHRoaXMudGltZW91dCA9IGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnKSAmJiBleGlzdHMoY29ubmVjdGlvbkNvbmZpZy50aW1lb3V0KT9jb25uZWN0aW9uQ29uZmlnLnRpbWVvdXQ6IDUwMDA7XG4gICAgICAgIHRoaXMuZmFpbGVkX2F0dGVtcHQgPSAwO1xuICAgIH1cblxuICAgIF9oYW5kbGVFcnJvcihyZWplY3QsIGVycm9yKSB7XG4gICAgICAgIGxldCBjb25uZWN0aW9uQ29uZmlnID0gZXhpc3RzKHRoaXMuY29uZmlnKSA/IHRoaXMuY29uZmlnLmNvbm5lY3Rpb24gOiBudWxsO1xuICAgICAgICBsZXQgZXJyb3JIYW5kbGVycyA9IGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnKSAmJiBleGlzdHMoY29ubmVjdGlvbkNvbmZpZy5lcnJvckhhbmRsZXJzKT9jb25uZWN0aW9uQ29uZmlnLmVycm9ySGFuZGxlcnM6IFtuZXcgUmVtb3RpbmdFcnJvckhhbmRsZXIoKV07XG4gICAgICAgIGVycm9ySGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICAgICAgICBoYW5kbGVyLm9uRXJyb3IoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICB9XG5cbiAgICBfc2VuZChjb21tYW5kcykge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaHR0cCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgaHR0cC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgICAgICAgaHR0cC5vbmVycm9yID0gKGVycm9yQ29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IEh0dHBOZXR3b3JrRXJyb3IoJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBOZXR3b3JrIGVycm9yJywgZXJyb3JDb250ZW50KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGh0dHAub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChodHRwLnJlYWR5U3RhdGUgPT09IEZJTklTSEVEKXtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChodHRwLnN0YXR1cykge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFNVQ0NFU1M6XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWRfYXR0ZW1wdCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VycmVudENsaWVudElkID0gaHR0cC5nZXRSZXNwb25zZUhlYWRlcihDTElFTlRfSURfSFRUUF9IRUFERVJfTkFNRSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhjdXJyZW50Q2xpZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHModGhpcy5jbGllbnRJZCkgJiYgdGhpcy5jbGllbnRJZCAhPT0gY3VycmVudENsaWVudElkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBEb2xwaGluU2Vzc2lvbkVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogQ2xpZW50SWQgb2YgdGhlIHJlc3BvbnNlIGRpZCBub3QgbWF0Y2gnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGllbnRJZCA9IGN1cnJlbnRDbGllbnRJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBEb2xwaGluU2Vzc2lvbkVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogU2VydmVyIGRpZCBub3Qgc2VuZCBhIGNsaWVudElkJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGh0dHAucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBSRVFVRVNUX1RJTUVPVVQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgRG9scGhpblNlc3Npb25FcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFNlc3Npb24gVGltZW91dCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZhaWxlZF9hdHRlbXB0IDw9IHRoaXMubWF4UmV0cnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZhaWxlZF9hdHRlbXB0ID0gdGhpcy5mYWlsZWRfYXR0ZW1wdCArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IEh0dHBSZXNwb25zZUVycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogSFRUUCBTdGF0dXMgIT0gMjAwICgnICsgaHR0cC5zdGF0dXMgKyAnKScpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGh0dHAub3BlbignUE9TVCcsIHRoaXMudXJsKTtcbiAgICAgICAgICAgIGlmIChleGlzdHModGhpcy5jbGllbnRJZCkpIHtcbiAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUsIHRoaXMuY2xpZW50SWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZXhpc3RzKHRoaXMuaGVhZGVyc0luZm8pKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSBpbiB0aGlzLmhlYWRlcnNJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcnNJbmZvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLnNldFJlcXVlc3RIZWFkZXIoaSwgdGhpcy5oZWFkZXJzSW5mb1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mYWlsZWRfYXR0ZW1wdCA+IHRoaXMubWF4UmV0cnkpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmQoQ29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGh0dHAuc2VuZChDb2RlYy5lbmNvZGUoY29tbWFuZHMpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0cmFuc21pdChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoY29tbWFuZHMpXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZVRleHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlQ29tbWFuZHMgPSBDb2RlYy5kZWNvZGUocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShyZXNwb25zZUNvbW1hbmRzKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgbmV3IERvbHBoaW5SZW1vdGluZ0Vycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogUGFyc2UgZXJyb3I6IChJbmNvcnJlY3QgcmVzcG9uc2UgPSAnICsgcmVzcG9uc2VUZXh0ICsgJyknKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBEb2xwaGluUmVtb3RpbmdFcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IEVtcHR5IHJlc3BvbnNlJykpO1xuICAgICAgICAgICAgICAgICAgICBvbkRvbmUoW10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNpZ25hbChjb21tYW5kKSB7XG4gICAgICAgIHRoaXMuX3NlbmQoW2NvbW1hbmRdKVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZW1pdCgnZXJyb3InLCBlcnJvcikpO1xuICAgIH1cbn1cblxuRW1pdHRlcihQbGF0Zm9ybUh0dHBUcmFuc21pdHRlci5wcm90b3R5cGUpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3RpbmdFcnJvckhhbmRsZXIge1xuXG4gICAgb25FcnJvcihlcnJvcikge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuXG59IiwidmFyIF9jaGVja01ldGhvZE5hbWU7XG5cbmV4cG9ydCBmdW5jdGlvbiBleGlzdHMob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgIT09ICd1bmRlZmluZWQnICYmIG9iamVjdCAhPT0gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrTWV0aG9kKG5hbWUpIHtcbiAgICBfY2hlY2tNZXRob2ROYW1lID0gbmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrUGFyYW0ocGFyYW0sIHBhcmFtZXRlck5hbWUpIHtcbiAgICBpZighZXhpc3RzKHBhcmFtKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYXJhbWV0ZXIgJyArIHBhcmFtZXRlck5hbWUgKyAnIGlzIG1hbmRhdG9yeSBpbiAnICsgX2NoZWNrTWV0aG9kTmFtZSk7XG4gICAgfVxufSIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuJ3VzZSBzdHJpY3QnO1xudmFyIGRvbHBoaW5DbGllbnQgPSByZXF1aXJlKCcuLi9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9kb2xwaGluLXBsYXRmb3JtLmpzJyk7XG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJywgW10pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykucHJvdmlkZXIoJyRkb2xwaGluQ29uZmlnJywgW2Z1bmN0aW9uICgpIHtcblxuICAgIHZhciAkY2ZnID0ge307XG4gICAgdGhpcy5jb25maWd1cmUgPSBmdW5jdGlvbiAoY2ZnKSB7XG4gICAgICAgICRjZmcgPSBjZmc7XG4gICAgfTtcblxuICAgIHRoaXMuJGdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuICRjZmc7XG4gICAgfTtcblxufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnY2xpZW50Q29udGV4dEZhY3RvcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIG5ldyBkb2xwaGluQ2xpZW50LkNsaWVudENvbnRleHRGYWN0b3J5KCk7XG59KTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ3ZhbmlsbGFDbGllbnRDb250ZXh0JywgWydjbGllbnRDb250ZXh0RmFjdG9yeScsICckZG9scGhpbkNvbmZpZycsIGZ1bmN0aW9uIChjbGllbnRDb250ZXh0RmFjdG9yeSwgJGRvbHBoaW5Db25maWcpIHtcbiAgICByZXR1cm4gY2xpZW50Q29udGV4dEZhY3RvcnkuY3JlYXRlKCRkb2xwaGluQ29uZmlnLkRPTFBISU5fVVJMLCAkZG9scGhpbkNvbmZpZyk7XG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCdkb2xwaGluQmluZGluZycsIFsnJHJvb3RTY29wZScsICckdGltZW91dCcsICd2YW5pbGxhQ2xpZW50Q29udGV4dCcsICckbG9nJywgZnVuY3Rpb24gKCRyb290U2NvcGUsICR0aW1lb3V0LCB2YW5pbGxhQ2xpZW50Q29udGV4dCwgJGxvZykge1xuXG4gICAgJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5ID0gZmFsc2U7XG5cbiAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSkge1xuICAgICAgICAgICAgJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5ID0gdHJ1ZTtcbiAgICAgICAgICAgICR0aW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdBbmd1bGFyIGFwcGx5IGlzIGNhbGxlZCBieSBEb2xwaGluIFBsYXRmb3JtJyk7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRvbHBoaW5CaW5kaW5nID0ge1xuXG4gICAgICAgIGluamVjdEFycmF5OiBmdW5jdGlvbiAoYmFzZUFycmF5LCBzdGFydEluZGV4LCBpbnNlcnRBcnJheSkge1xuICAgICAgICAgICAgYmFzZUFycmF5LnNwbGljZS5hcHBseShiYXNlQXJyYXksIFtzdGFydEluZGV4LCAwXS5jb25jYXQoaW5zZXJ0QXJyYXkpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhpc3RzOiBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIG9iamVjdCAhPT0gJ3VuZGVmaW5lZCcgJiYgb2JqZWN0ICE9PSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBkZWVwRXF1YWw6IGZ1bmN0aW9uIChhcnJheTEsIGFycmF5Mikge1xuICAgICAgICAgICAgaWYgKGFycmF5MSA9PT0gYXJyYXkyIHx8ICghdGhpcy5leGlzdHMoYXJyYXkxKSAmJiAhdGhpcy5leGlzdHMoYXJyYXkyKSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmV4aXN0cyhhcnJheTEpICE9PSB0aGlzLmV4aXN0cyhhcnJheTIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSBhcnJheTEubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGFycmF5Mi5sZW5ndGggIT09IG4pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChhcnJheTFbaV0gIT09IGFycmF5MltpXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChiZWFuTWFuYWdlcikge1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25BZGRlZChkb2xwaGluQmluZGluZy5vbkJlYW5BZGRlZEhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25SZW1vdmVkKGRvbHBoaW5CaW5kaW5nLm9uQmVhblJlbW92ZWRIYW5kbGVyKTtcbiAgICAgICAgICAgIGJlYW5NYW5hZ2VyLm9uQmVhblVwZGF0ZShkb2xwaGluQmluZGluZy5vbkJlYW5VcGRhdGVIYW5kbGVyKTtcbiAgICAgICAgICAgIGJlYW5NYW5hZ2VyLm9uQXJyYXlVcGRhdGUoZG9scGhpbkJpbmRpbmcub25BcnJheVVwZGF0ZUhhbmRsZXIpO1xuXG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGJpbmRpbmcgbGlzdGVuZXJzIGZvciBBbmd1bGFyIHJlZ2lzdGVyZWQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgd2F0Y2hBdHRyaWJ1dGU6IGZ1bmN0aW9uIChiZWFuLCBhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0FkZGVkIEFuZ3VsYXIgbGlzdGVuZXIgZm9yIHByb3BlcnR5ICcgKyBhdHRyaWJ1dGUgKyAnIG9mIGJlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuJHdhdGNoKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJlYW5bYXR0cmlidXRlXTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnVmFsdWUgJyArIGF0dHJpYnV0ZSArICcgb2YgYmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikgKyAnIGNoYW5nZWQgZnJvbSAnICsgb2xkVmFsdWUgKyAnIHRvICcgKyBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbmlsbGFDbGllbnRDb250ZXh0LmJlYW5NYW5hZ2VyLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIGF0dHJpYnV0ZSwgbmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVhbkFkZGVkSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4pIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0JlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pICsgJyBhZGRlZCcpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy53YXRjaEF0dHJpYnV0ZShiZWFuLCBhdHRyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJlYW5SZW1vdmVkSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4pIHtcbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0JlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pICsgJyByZW1vdmVkJyk7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVhblVwZGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIChiZWFuLCBwcm9wZXJ0eU5hbWUsIG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgdmFyIG5ld1Byb3BlcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4gYmVhbikge1xuICAgICAgICAgICAgICAgIGlmIChhdHRyID09PSBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3UHJvcGVydHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChuZXdQcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1ZhbHVlICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdhcyBhZGRlZCB0byBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSk7XG4gICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcud2F0Y2hBdHRyaWJ1dGUoYmVhbiwgcHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG9sZFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ1JlY2VpdmVkIGJlYW4gdXBkYXRlIGZvciBwcm9wZXJ0eSAnICsgcHJvcGVydHlOYW1lICsgJyB3aXRob3V0IGFueSBjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0JlYW4gdXBkYXRlIGZvciBwcm9wZXJ0eSAnICsgcHJvcGVydHlOYW1lICsgJyB3aXRoIG5ldyB2YWx1ZSBcIicgKyBuZXdWYWx1ZSArICdcIicpO1xuXG4gICAgICAgICAgICBiZWFuW3Byb3BlcnR5TmFtZV0gPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25BcnJheVVwZGF0ZUhhbmRsZXI6IGZ1bmN0aW9uIChiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgbmV3RWxlbWVudHMpIHtcbiAgICAgICAgICAgIHZhciBhcnJheSA9IGJlYW5bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgIHZhciBvbGRFbGVtZW50cyA9IGFycmF5LnNsaWNlKGluZGV4LCBpbmRleCArIGNvdW50KTtcbiAgICAgICAgICAgIGlmIChkb2xwaGluQmluZGluZy5kZWVwRXF1YWwobmV3RWxlbWVudHMsIG9sZEVsZW1lbnRzKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQXJyYXkgdXBkYXRlIGZvciBwcm9wZXJ0eSAnICsgcHJvcGVydHlOYW1lICsgJyBzdGFydGluZyBhdCBpbmRleCAnICsgaW5kZXggKyAnIHdpdGggJyArIEpTT04uc3RyaW5naWZ5KG5ld0VsZW1lbnRzKSk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgbmV3RWxlbWVudHMgPT09ICd1bmRlZmluZWQnIHx8IChuZXdFbGVtZW50cyAmJiBuZXdFbGVtZW50cy5sZW5ndGggPT09IDApKSB7XG4gICAgICAgICAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCBjb3VudCk7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy5pbmplY3RBcnJheShhcnJheSwgaW5kZXgsIG5ld0VsZW1lbnRzKTtcblxuICAgICAgICAgICAgICAgIGZvciAoYmVhbiBpbiBuZXdFbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBhdHRyIGluIGJlYW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIGF0dHIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gYmluZGluZyBjcmVhdGVkJyk7XG5cbiAgICByZXR1cm4gZG9scGhpbkJpbmRpbmc7XG5cbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ2NsaWVudENvbnRleHQnLCBbJ3ZhbmlsbGFDbGllbnRDb250ZXh0JywgJ2RvbHBoaW5CaW5kaW5nJywgJyR3aW5kb3cnLCAnJGxvZycsIGZ1bmN0aW9uICh2YW5pbGxhQ2xpZW50Q29udGV4dCwgZG9scGhpbkJpbmRpbmcsICR3aW5kb3csICRsb2cpIHtcbiAgICB2YXIgY2xpZW50Q29udGV4dCA9IHtcbiAgICAgICAgY3JlYXRlQ29udHJvbGxlcjogZnVuY3Rpb24gKHNjb3BlLCBjb250cm9sbGVyTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbmlsbGFDbGllbnRDb250ZXh0LmNyZWF0ZUNvbnRyb2xsZXIoY29udHJvbGxlck5hbWUpLnRoZW4oZnVuY3Rpb24gKGNvbnRyb2xsZXJQcm94eSkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0NyZWF0aW5nIERvbHBoaW4gUGxhdGZvcm0gY29udHJvbGxlciAnICsgY29udHJvbGxlck5hbWUpO1xuICAgICAgICAgICAgICAgIHNjb3BlLiRvbignJGRlc3Ryb3knLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0Rlc3Ryb3lpbmcgRG9scGhpbiBQbGF0Zm9ybSBjb250cm9sbGVyICcgKyBjb250cm9sbGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXJQcm94eS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2NvcGUubW9kZWwgPSBjb250cm9sbGVyUHJveHkubW9kZWw7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRyb2xsZXJQcm94eTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkaXNjb25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YW5pbGxhQ2xpZW50Q29udGV4dC5kaXNjb25uZWN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGRpc2Nvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbmlsbGFDbGllbnRDb250ZXh0LmNvbm5lY3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Db25uZWN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFuaWxsYUNsaWVudENvbnRleHQub25Db25uZWN0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGNvbm5lY3RlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9scGhpbkJpbmRpbmcuaW5pdCh2YW5pbGxhQ2xpZW50Q29udGV4dC5iZWFuTWFuYWdlcik7XG4gICAgJHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IGNsaWVudENvbnRleHQuZGlzY29ubmVjdDtcblxuICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjcmVhdGVkJyk7XG5cbiAgICByZXR1cm4gY2xpZW50Q29udGV4dDtcbn1dKTtcbiJdfQ==
