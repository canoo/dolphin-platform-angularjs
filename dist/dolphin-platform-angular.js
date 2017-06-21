(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
(function (global){
"use strict";

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function (f) {
    if ((typeof exports === "undefined" ? "undefined" : _typeof2(exports)) === "object" && typeof module !== "undefined") {
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
                TAG = _dereq_('./_wks')('toStringTag'
            // ES3 wrong here
            ),
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
                : ARG ? cof(O
                // ES3 arguments fallback
                ) : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
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
                    : IS_BIND && own ? ctx(out, global
                    // wrap global constructors for prevent change them in library
                    ) : IS_WRAP && target[key] == out ? function (C) {
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

            var Attribute = function () {
                function Attribute() {}
                Attribute.QUALIFIER_PROPERTY = "qualifier";
                Attribute.VALUE = "value";
                return Attribute;
            }();
            exports.__esModule = true;
            exports["default"] = Attribute;
        }, {}], 82: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var ChangeAttributeMetadataCommand = function (_super) {
                __extends(ChangeAttributeMetadataCommand, _super);
                function ChangeAttributeMetadataCommand(attributeId, metadataName, value) {
                    _super.call(this);
                    this.attributeId = attributeId;
                    this.metadataName = metadataName;
                    this.value = value;
                    this.id = 'ChangeAttributeMetadata';
                    this.className = "org.opendolphin.core.comm.ChangeAttributeMetadataCommand";
                }
                return ChangeAttributeMetadataCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = ChangeAttributeMetadataCommand;
        }, { "./Command": 89 }], 83: [function (_dereq_, module, exports) {
            "use strict";

            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
            };

            var EventBus_1 = _dereq_('./EventBus');
            var ClientAttribute = function () {
                function ClientAttribute(propertyName, qualifier, value) {
                    this.propertyName = propertyName;
                    this.id = "" + ClientAttribute.clientAttributeInstanceCount++ + "C";
                    this.valueChangeBus = new EventBus_1["default"]();
                    this.qualifierChangeBus = new EventBus_1["default"]();
                    this.setValue(value);
                    this.setQualifier(qualifier);
                }
                /** a copy constructor with new id and no presentation model */
                ClientAttribute.prototype.copy = function () {
                    var result = new ClientAttribute(this.propertyName, this.getQualifier(), this.getValue());
                    return result;
                };
                ClientAttribute.prototype.setPresentationModel = function (presentationModel) {
                    if (this.presentationModel) {
                        alert("You can not set a presentation model for an attribute that is already bound.");
                    }
                    this.presentationModel = presentationModel;
                };
                ClientAttribute.prototype.getPresentationModel = function () {
                    return this.presentationModel;
                };
                ClientAttribute.prototype.getValue = function () {
                    return this.value;
                };
                ClientAttribute.prototype.setValue = function (newValue) {
                    var verifiedValue = ClientAttribute.checkValue(newValue);
                    if (this.value == verifiedValue) return;
                    var oldValue = this.value;
                    this.value = verifiedValue;
                    this.valueChangeBus.trigger({ 'oldValue': oldValue, 'newValue': verifiedValue });
                };
                ClientAttribute.prototype.setQualifier = function (newQualifier) {
                    if (this.qualifier == newQualifier) return;
                    var oldQualifier = this.qualifier;
                    this.qualifier = newQualifier;
                    this.qualifierChangeBus.trigger({ 'oldValue': oldQualifier, 'newValue': newQualifier });
                };
                ClientAttribute.prototype.getQualifier = function () {
                    return this.qualifier;
                };
                ClientAttribute.checkValue = function (value) {
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
                };
                ClientAttribute.prototype.onValueChange = function (eventHandler) {
                    this.valueChangeBus.onEvent(eventHandler);
                    eventHandler({ "oldValue": this.value, "newValue": this.value });
                };
                ClientAttribute.prototype.onQualifierChange = function (eventHandler) {
                    this.qualifierChangeBus.onEvent(eventHandler);
                };
                ClientAttribute.prototype.syncWith = function (sourceAttribute) {
                    if (sourceAttribute) {
                        this.setQualifier(sourceAttribute.getQualifier()); // sequence is important
                        this.setValue(sourceAttribute.value);
                    }
                };
                ClientAttribute.SUPPORTED_VALUE_TYPES = ["string", "number", "boolean"];
                ClientAttribute.clientAttributeInstanceCount = 0;
                return ClientAttribute;
            }();
            exports.ClientAttribute = ClientAttribute;
        }, { "./EventBus": 97 }], 84: [function (_dereq_, module, exports) {
            "use strict";

            var ClientPresentationModel_1 = _dereq_("./ClientPresentationModel");
            var Codec_1 = _dereq_("./Codec");
            var CommandBatcher_1 = _dereq_("./CommandBatcher");
            var ClientConnector = function () {
                function ClientConnector(transmitter, clientDolphin, slackMS, maxBatchSize) {
                    if (slackMS === void 0) {
                        slackMS = 0;
                    }
                    if (maxBatchSize === void 0) {
                        maxBatchSize = 50;
                    }
                    this.commandQueue = [];
                    this.currentlySending = false;
                    this.pushEnabled = false;
                    this.waiting = false;
                    this.transmitter = transmitter;
                    this.clientDolphin = clientDolphin;
                    this.slackMS = slackMS;
                    this.codec = new Codec_1["default"]();
                    this.commandBatcher = new CommandBatcher_1.BlindCommandBatcher(true, maxBatchSize);
                }
                ClientConnector.prototype.setCommandBatcher = function (newBatcher) {
                    this.commandBatcher = newBatcher;
                };
                ClientConnector.prototype.setPushEnabled = function (enabled) {
                    this.pushEnabled = enabled;
                };
                ClientConnector.prototype.setPushListener = function (newListener) {
                    this.pushListener = newListener;
                };
                ClientConnector.prototype.setReleaseCommand = function (newCommand) {
                    this.releaseCommand = newCommand;
                };
                ClientConnector.prototype.send = function (command, onFinished) {
                    this.commandQueue.push({ command: command, handler: onFinished });
                    if (this.currentlySending) {
                        this.release(); // there is not point in releasing if we do not send atm
                        return;
                    }
                    this.doSendNext();
                };
                ClientConnector.prototype.doSendNext = function () {
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
                    var callback = cmdsAndHandlers[cmdsAndHandlers.length - 1].handler;
                    var commands = cmdsAndHandlers.map(function (cah) {
                        return cah.command;
                    });
                    this.transmitter.transmit(commands, function (response) {
                        //console.log("server response: [" + response.map(it => it.id).join(", ") + "] ");
                        var touchedPMs = [];
                        response.forEach(function (command) {
                            var touched = _this.handle(command);
                            if (touched) touchedPMs.push(touched);
                        });
                        if (callback) {
                            callback.onFinished(touchedPMs); // todo: make them unique?
                        }
                        // recursive call: fetch the next in line but allow a bit of slack such that
                        // document events can fire, rendering is done and commands can batch up
                        setTimeout(function () {
                            return _this.doSendNext();
                        }, _this.slackMS);
                    });
                };
                ClientConnector.prototype.handle = function (command) {
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
                };
                ClientConnector.prototype.handleDeletePresentationModelCommand = function (serverCommand) {
                    var model = this.clientDolphin.findPresentationModelById(serverCommand.pmId);
                    if (!model) return null;
                    this.clientDolphin.getClientModelStore().deletePresentationModel(model, true);
                    return model;
                };
                ClientConnector.prototype.handleCreatePresentationModelCommand = function (serverCommand) {
                    var _this = this;
                    if (this.clientDolphin.getClientModelStore().containsPresentationModel(serverCommand.pmId)) {
                        throw new Error("There already is a presentation model with id " + serverCommand.pmId + "  known to the client.");
                    }
                    var attributes = [];
                    serverCommand.attributes.forEach(function (attr) {
                        var clientAttribute = _this.clientDolphin.attribute(attr.propertyName, attr.qualifier, attr.value);
                        if (attr.id && attr.id.match(".*S$")) {
                            clientAttribute.id = attr.id;
                        }
                        attributes.push(clientAttribute);
                    });
                    var clientPm = new ClientPresentationModel_1.ClientPresentationModel(serverCommand.pmId, serverCommand.pmType);
                    clientPm.addAttributes(attributes);
                    if (serverCommand.clientSideOnly) {
                        clientPm.clientSideOnly = true;
                    }
                    this.clientDolphin.getClientModelStore().add(clientPm);
                    this.clientDolphin.updatePresentationModelQualifier(clientPm);
                    return clientPm;
                };
                ClientConnector.prototype.handleValueChangedCommand = function (serverCommand) {
                    var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                    if (!clientAttribute) {
                        console.log("attribute with id " + serverCommand.attributeId + " not found, cannot update old value " + serverCommand.oldValue + " to new value " + serverCommand.newValue);
                        return null;
                    }
                    if (clientAttribute.getValue() == serverCommand.newValue) {
                        //console.log("nothing to do. new value == old value");
                        return null;
                    }
                    // Below was the code that would enforce that value changes only appear when the proper oldValue is given.
                    // While that seemed appropriate at first, there are actually valid command sequences where the oldValue is not properly set.
                    // We leave the commented code in the codebase to allow for logging/debugging such cases.
                    //            if(clientAttribute.getValue() != serverCommand.oldValue) {
                    //                console.log("attribute with id "+serverCommand.attributeId+" and value " + clientAttribute.getValue() +
                    //                            " was set to value " + serverCommand.newValue + " even though the change was based on an outdated old value of " + serverCommand.oldValue);
                    //            }
                    clientAttribute.setValue(serverCommand.newValue);
                    return null;
                };
                ClientConnector.prototype.handleAttributeMetadataChangedCommand = function (serverCommand) {
                    var clientAttribute = this.clientDolphin.getClientModelStore().findAttributeById(serverCommand.attributeId);
                    if (!clientAttribute) return null;
                    clientAttribute[serverCommand.metadataName] = serverCommand.value;
                    return null;
                };
                ///////////// push support ///////////////
                ClientConnector.prototype.listen = function () {
                    if (!this.pushEnabled) return;
                    if (this.waiting) return;
                    // todo: how to issue a warning if no pushListener is set?
                    if (!this.currentlySending) {
                        this.doSendNext();
                    }
                };
                ClientConnector.prototype.enqueuePushCommand = function () {
                    var me = this;
                    this.waiting = true;
                    this.commandQueue.push({
                        command: this.pushListener,
                        handler: {
                            onFinished: function onFinished(models) {
                                me.waiting = false;
                            },
                            onFinishedData: null
                        }
                    });
                };
                ClientConnector.prototype.release = function () {
                    if (!this.waiting) return;
                    this.waiting = false;
                    // todo: how to issue a warning if no releaseCommand is set?
                    this.transmitter.signal(this.releaseCommand);
                };
                return ClientConnector;
            }();
            exports.ClientConnector = ClientConnector;
        }, { "./ClientPresentationModel": 87, "./Codec": 88, "./CommandBatcher": 90 }], 85: [function (_dereq_, module, exports) {
            "use strict";

            var ClientAttribute_1 = _dereq_("./ClientAttribute");
            var ClientPresentationModel_1 = _dereq_("./ClientPresentationModel");
            var ClientDolphin = function () {
                function ClientDolphin() {}
                ClientDolphin.prototype.setClientConnector = function (clientConnector) {
                    this.clientConnector = clientConnector;
                };
                ClientDolphin.prototype.getClientConnector = function () {
                    return this.clientConnector;
                };
                ClientDolphin.prototype.send = function (command, onFinished) {
                    this.clientConnector.send(command, onFinished);
                };
                // factory method for attributes
                ClientDolphin.prototype.attribute = function (propertyName, qualifier, value) {
                    return new ClientAttribute_1.ClientAttribute(propertyName, qualifier, value);
                };
                // factory method for presentation models
                ClientDolphin.prototype.presentationModel = function (id, type) {
                    var attributes = [];
                    for (var _i = 2; _i < arguments.length; _i++) {
                        attributes[_i - 2] = arguments[_i];
                    }
                    var model = new ClientPresentationModel_1.ClientPresentationModel(id, type);
                    if (attributes && attributes.length > 0) {
                        attributes.forEach(function (attribute) {
                            model.addAttribute(attribute);
                        });
                    }
                    this.getClientModelStore().add(model);
                    return model;
                };
                ClientDolphin.prototype.setClientModelStore = function (clientModelStore) {
                    this.clientModelStore = clientModelStore;
                };
                ClientDolphin.prototype.getClientModelStore = function () {
                    return this.clientModelStore;
                };
                ClientDolphin.prototype.listPresentationModelIds = function () {
                    return this.getClientModelStore().listPresentationModelIds();
                };
                ClientDolphin.prototype.listPresentationModels = function () {
                    return this.getClientModelStore().listPresentationModels();
                };
                ClientDolphin.prototype.findAllPresentationModelByType = function (presentationModelType) {
                    return this.getClientModelStore().findAllPresentationModelByType(presentationModelType);
                };
                ClientDolphin.prototype.getAt = function (id) {
                    return this.findPresentationModelById(id);
                };
                ClientDolphin.prototype.findPresentationModelById = function (id) {
                    return this.getClientModelStore().findPresentationModelById(id);
                };
                ClientDolphin.prototype.deletePresentationModel = function (modelToDelete) {
                    this.getClientModelStore().deletePresentationModel(modelToDelete, true);
                };
                ClientDolphin.prototype.updatePresentationModelQualifier = function (presentationModel) {
                    var _this = this;
                    presentationModel.getAttributes().forEach(function (sourceAttribute) {
                        _this.updateAttributeQualifier(sourceAttribute);
                    });
                };
                ClientDolphin.prototype.updateAttributeQualifier = function (sourceAttribute) {
                    if (!sourceAttribute.getQualifier()) return;
                    var attributes = this.getClientModelStore().findAllAttributesByQualifier(sourceAttribute.getQualifier());
                    attributes.forEach(function (targetAttribute) {
                        targetAttribute.setValue(sourceAttribute.getValue()); // should always have the same value
                    });
                };
                ////// push support ///////
                ClientDolphin.prototype.startPushListening = function (pushCommand, releaseCommand) {
                    this.clientConnector.setPushListener(pushCommand);
                    this.clientConnector.setReleaseCommand(releaseCommand);
                    this.clientConnector.setPushEnabled(true);
                    this.clientConnector.listen();
                };
                ClientDolphin.prototype.stopPushListening = function () {
                    this.clientConnector.setPushEnabled(false);
                };
                return ClientDolphin;
            }();
            exports.__esModule = true;
            exports["default"] = ClientDolphin;
        }, { "./ClientAttribute": 83, "./ClientPresentationModel": 87 }], 86: [function (_dereq_, module, exports) {
            /// <reference path="./core-js.d.ts" />
            "use strict";

            var Attribute_1 = _dereq_("./Attribute");
            var ChangeAttributeMetadataCommand_1 = _dereq_("./ChangeAttributeMetadataCommand");
            var CreatePresentationModelCommand_1 = _dereq_("./CreatePresentationModelCommand");
            var DeletedPresentationModelNotification_1 = _dereq_("./DeletedPresentationModelNotification");
            var EventBus_1 = _dereq_("./EventBus");
            var ValueChangedCommand_1 = _dereq_("./ValueChangedCommand");
            (function (Type) {
                Type[Type["ADDED"] = 'ADDED'] = "ADDED";
                Type[Type["REMOVED"] = 'REMOVED'] = "REMOVED";
            })(exports.Type || (exports.Type = {}));
            var Type = exports.Type;
            var ClientModelStore = function () {
                function ClientModelStore(clientDolphin) {
                    this.clientDolphin = clientDolphin;
                    this.presentationModels = new Map();
                    this.presentationModelsPerType = new Map();
                    this.attributesPerId = new Map();
                    this.attributesPerQualifier = new Map();
                    this.modelStoreChangeBus = new EventBus_1["default"]();
                }
                ClientModelStore.prototype.getClientDolphin = function () {
                    return this.clientDolphin;
                };
                ClientModelStore.prototype.registerModel = function (model) {
                    var _this = this;
                    if (model.clientSideOnly) {
                        return;
                    }
                    var connector = this.clientDolphin.getClientConnector();
                    var createPMCommand = new CreatePresentationModelCommand_1["default"](model);
                    connector.send(createPMCommand, null);
                    model.getAttributes().forEach(function (attribute) {
                        _this.registerAttribute(attribute);
                    });
                };
                ClientModelStore.prototype.registerAttribute = function (attribute) {
                    var _this = this;
                    this.addAttributeById(attribute);
                    if (attribute.getQualifier()) {
                        this.addAttributeByQualifier(attribute);
                    }
                    // whenever an attribute changes its value, the server needs to be notified
                    // and all other attributes with the same qualifier are given the same value
                    attribute.onValueChange(function (evt) {
                        var valueChangeCommand = new ValueChangedCommand_1["default"](attribute.id, evt.oldValue, evt.newValue);
                        _this.clientDolphin.getClientConnector().send(valueChangeCommand, null);
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
                        var changeAttrMetadataCmd = new ChangeAttributeMetadataCommand_1["default"](attribute.id, Attribute_1["default"].QUALIFIER_PROPERTY, evt.newValue);
                        _this.clientDolphin.getClientConnector().send(changeAttrMetadataCmd, null);
                    });
                };
                ClientModelStore.prototype.add = function (model) {
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
                        this.registerModel(model);
                        this.modelStoreChangeBus.trigger({ 'eventType': Type.ADDED, 'clientPresentationModel': model });
                        added = true;
                    }
                    return added;
                };
                ClientModelStore.prototype.remove = function (model) {
                    var _this = this;
                    if (!model) {
                        return false;
                    }
                    var removed = false;
                    if (this.presentationModels.has(model.id)) {
                        this.removePresentationModelByType(model);
                        this.presentationModels.delete(model.id);
                        model.getAttributes().forEach(function (attribute) {
                            _this.removeAttributeById(attribute);
                            if (attribute.getQualifier()) {
                                _this.removeAttributeByQualifier(attribute);
                            }
                        });
                        this.modelStoreChangeBus.trigger({ 'eventType': Type.REMOVED, 'clientPresentationModel': model });
                        removed = true;
                    }
                    return removed;
                };
                ClientModelStore.prototype.findAttributesByFilter = function (filter) {
                    var matches = [];
                    this.presentationModels.forEach(function (model) {
                        model.getAttributes().forEach(function (attr) {
                            if (filter(attr)) {
                                matches.push(attr);
                            }
                        });
                    });
                    return matches;
                };
                ClientModelStore.prototype.addPresentationModelByType = function (model) {
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
                };
                ClientModelStore.prototype.removePresentationModelByType = function (model) {
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
                };
                ClientModelStore.prototype.listPresentationModelIds = function () {
                    var result = [];
                    var iter = this.presentationModels.keys();
                    var next = iter.next();
                    while (!next.done) {
                        result.push(next.value);
                        next = iter.next();
                    }
                    return result;
                };
                ClientModelStore.prototype.listPresentationModels = function () {
                    var result = [];
                    var iter = this.presentationModels.values();
                    var next = iter.next();
                    while (!next.done) {
                        result.push(next.value);
                        next = iter.next();
                    }
                    return result;
                };
                ClientModelStore.prototype.findPresentationModelById = function (id) {
                    return this.presentationModels.get(id);
                };
                ClientModelStore.prototype.findAllPresentationModelByType = function (type) {
                    if (!type || !this.presentationModelsPerType.has(type)) {
                        return [];
                    }
                    return this.presentationModelsPerType.get(type).slice(0); // slice is used to clone the array
                };
                ClientModelStore.prototype.deletePresentationModel = function (model, notify) {
                    if (!model) {
                        return;
                    }
                    if (this.containsPresentationModel(model.id)) {
                        this.remove(model);
                        if (!notify || model.clientSideOnly) {
                            return;
                        }
                        this.clientDolphin.getClientConnector().send(new DeletedPresentationModelNotification_1["default"](model.id), null);
                    }
                };
                ClientModelStore.prototype.containsPresentationModel = function (id) {
                    return this.presentationModels.has(id);
                };
                ClientModelStore.prototype.addAttributeById = function (attribute) {
                    if (!attribute || this.attributesPerId.has(attribute.id)) {
                        return;
                    }
                    this.attributesPerId.set(attribute.id, attribute);
                };
                ClientModelStore.prototype.removeAttributeById = function (attribute) {
                    if (!attribute || !this.attributesPerId.has(attribute.id)) {
                        return;
                    }
                    this.attributesPerId.delete(attribute.id);
                };
                ClientModelStore.prototype.findAttributeById = function (id) {
                    return this.attributesPerId.get(id);
                };
                ClientModelStore.prototype.addAttributeByQualifier = function (attribute) {
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
                };
                ClientModelStore.prototype.removeAttributeByQualifier = function (attribute) {
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
                };
                ClientModelStore.prototype.findAllAttributesByQualifier = function (qualifier) {
                    if (!qualifier || !this.attributesPerQualifier.has(qualifier)) {
                        return [];
                    }
                    return this.attributesPerQualifier.get(qualifier).slice(0); // slice is used to clone the array
                };
                ClientModelStore.prototype.onModelStoreChange = function (eventHandler) {
                    this.modelStoreChangeBus.onEvent(eventHandler);
                };
                ClientModelStore.prototype.onModelStoreChangeForType = function (presentationModelType, eventHandler) {
                    this.modelStoreChangeBus.onEvent(function (pmStoreEvent) {
                        if (pmStoreEvent.clientPresentationModel.presentationModelType == presentationModelType) {
                            eventHandler(pmStoreEvent);
                        }
                    });
                };
                return ClientModelStore;
            }();
            exports.ClientModelStore = ClientModelStore;
        }, { "./Attribute": 81, "./ChangeAttributeMetadataCommand": 82, "./CreatePresentationModelCommand": 93, "./DeletedPresentationModelNotification": 94, "./EventBus": 97, "./ValueChangedCommand": 104 }], 87: [function (_dereq_, module, exports) {
            "use strict";

            var EventBus_1 = _dereq_('./EventBus');
            var presentationModelInstanceCount = 0; // todo dk: consider making this static in class
            var ClientPresentationModel = function () {
                function ClientPresentationModel(id, presentationModelType) {
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
                    this.invalidBus = new EventBus_1["default"]();
                    this.dirtyValueChangeBus = new EventBus_1["default"]();
                }
                // todo dk: align with Java version: move to ClientDolphin and auto-add to model store
                /** a copy constructor for anything but IDs. Per default, copies are client side only, no automatic update applies. */
                ClientPresentationModel.prototype.copy = function () {
                    var result = new ClientPresentationModel(null, this.presentationModelType);
                    result.clientSideOnly = true;
                    this.getAttributes().forEach(function (attribute) {
                        var attributeCopy = attribute.copy();
                        result.addAttribute(attributeCopy);
                    });
                    return result;
                };
                //add array of attributes
                ClientPresentationModel.prototype.addAttributes = function (attributes) {
                    var _this = this;
                    if (!attributes || attributes.length < 1) return;
                    attributes.forEach(function (attr) {
                        _this.addAttribute(attr);
                    });
                };
                ClientPresentationModel.prototype.addAttribute = function (attribute) {
                    var _this = this;
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
                    attribute.onValueChange(function (evt) {
                        _this.invalidBus.trigger({ source: _this });
                    });
                };
                ClientPresentationModel.prototype.onInvalidated = function (handleInvalidate) {
                    this.invalidBus.onEvent(handleInvalidate);
                };
                /** returns a copy of the internal state */
                ClientPresentationModel.prototype.getAttributes = function () {
                    return this.attributes.slice(0);
                };
                ClientPresentationModel.prototype.getAt = function (propertyName) {
                    return this.findAttributeByPropertyName(propertyName);
                };
                ClientPresentationModel.prototype.findAllAttributesByPropertyName = function (propertyName) {
                    var result = [];
                    if (!propertyName) return null;
                    this.attributes.forEach(function (attribute) {
                        if (attribute.propertyName == propertyName) {
                            result.push(attribute);
                        }
                    });
                    return result;
                };
                ClientPresentationModel.prototype.findAttributeByPropertyName = function (propertyName) {
                    if (!propertyName) return null;
                    for (var i = 0; i < this.attributes.length; i++) {
                        if (this.attributes[i].propertyName == propertyName) {
                            return this.attributes[i];
                        }
                    }
                    return null;
                };
                ClientPresentationModel.prototype.findAttributeByQualifier = function (qualifier) {
                    if (!qualifier) return null;
                    for (var i = 0; i < this.attributes.length; i++) {
                        if (this.attributes[i].getQualifier() == qualifier) {
                            return this.attributes[i];
                        }
                    }
                    ;
                    return null;
                };
                ClientPresentationModel.prototype.findAttributeById = function (id) {
                    if (!id) return null;
                    for (var i = 0; i < this.attributes.length; i++) {
                        if (this.attributes[i].id == id) {
                            return this.attributes[i];
                        }
                    }
                    ;
                    return null;
                };
                ClientPresentationModel.prototype.syncWith = function (sourcePresentationModel) {
                    this.attributes.forEach(function (targetAttribute) {
                        var sourceAttribute = sourcePresentationModel.getAt(targetAttribute.propertyName);
                        if (sourceAttribute) {
                            targetAttribute.syncWith(sourceAttribute);
                        }
                    });
                };
                return ClientPresentationModel;
            }();
            exports.ClientPresentationModel = ClientPresentationModel;
        }, { "./EventBus": 97 }], 88: [function (_dereq_, module, exports) {
            "use strict";

            var Codec = function () {
                function Codec() {}
                Codec.prototype.encode = function (commands) {
                    return JSON.stringify(commands); // todo dk: look for possible API support for character encoding
                };
                Codec.prototype.decode = function (transmitted) {
                    if (typeof transmitted == 'string') {
                        return JSON.parse(transmitted);
                    } else {
                        return transmitted;
                    }
                };
                return Codec;
            }();
            exports.__esModule = true;
            exports["default"] = Codec;
        }, {}], 89: [function (_dereq_, module, exports) {
            "use strict";

            var Command = function () {
                function Command() {
                    this.id = "dolphin-core-command";
                }
                return Command;
            }();
            exports.__esModule = true;
            exports["default"] = Command;
        }, {}], 90: [function (_dereq_, module, exports) {
            "use strict";

            var ValueChangedCommand_1 = _dereq_('./ValueChangedCommand');
            /** A Batcher that does no batching but merely takes the first element of the queue as the single item in the batch */
            var NoCommandBatcher = function () {
                function NoCommandBatcher() {}
                NoCommandBatcher.prototype.batch = function (queue) {
                    return [queue.shift()];
                };
                return NoCommandBatcher;
            }();
            exports.NoCommandBatcher = NoCommandBatcher;
            /** A batcher that batches the blinds (commands with no callback) and optionally also folds value changes */
            var BlindCommandBatcher = function () {
                /** folding: whether we should try folding ValueChangedCommands */
                function BlindCommandBatcher(folding, maxBatchSize) {
                    if (folding === void 0) {
                        folding = true;
                    }
                    if (maxBatchSize === void 0) {
                        maxBatchSize = 50;
                    }
                    this.folding = folding;
                    this.maxBatchSize = maxBatchSize;
                }
                BlindCommandBatcher.prototype.batch = function (queue) {
                    var batch = [];
                    var n = Math.min(queue.length, this.maxBatchSize);
                    for (var counter = 0; counter < n; counter++) {
                        var candidate = queue.shift();
                        if (this.folding && candidate.command instanceof ValueChangedCommand_1["default"] && !candidate.handler) {
                            var found = null;
                            var canCmd = candidate.command;
                            for (var i = 0; i < batch.length && found == null; i++) {
                                if (batch[i].command instanceof ValueChangedCommand_1["default"]) {
                                    var batchCmd = batch[i].command;
                                    if (canCmd.attributeId == batchCmd.attributeId && batchCmd.newValue == canCmd.oldValue) {
                                        found = batchCmd;
                                    }
                                }
                            }
                            if (found) {
                                found.newValue = canCmd.newValue; // change existing value, do not batch
                            } else {
                                batch.push(candidate); // we cannot merge, so batch the candidate
                            }
                        } else {
                            batch.push(candidate);
                        }
                        if (candidate.handler || candidate.command['className'] == "org.opendolphin.core.comm.EmptyNotification" // or unknown client side effect
                        ) {
                                break; // leave the loop
                            }
                    }
                    return batch;
                };
                return BlindCommandBatcher;
            }();
            exports.BlindCommandBatcher = BlindCommandBatcher;
        }, { "./ValueChangedCommand": 104 }], 91: [function (_dereq_, module, exports) {
            "use strict";

            var CommandConstants = function () {
                function CommandConstants() {}
                CommandConstants.DOLPHIN_PLATFORM_PREFIX = 'dolphin_platform_intern_';
                CommandConstants.CREATE_CONTEXT_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'initClientContext';
                CommandConstants.DESTROY_CONTEXT_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'disconnectClientContext';
                CommandConstants.CREATE_CONTROLLER_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'registerController';
                CommandConstants.DESTROY_CONTROLLER_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'destroyController';
                CommandConstants.CALL_CONTROLLER_ACTION_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'callControllerAction';
                CommandConstants.START_LONG_POLL_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'longPoll';
                CommandConstants.INTERRUPT_LONG_POLL_COMMAND_NAME = CommandConstants.DOLPHIN_PLATFORM_PREFIX + 'release';
                return CommandConstants;
            }();
            exports.__esModule = true;
            exports["default"] = CommandConstants;
        }, {}], 92: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var CreateContextCommand = function (_super) {
                __extends(CreateContextCommand, _super);
                function CreateContextCommand() {
                    _super.call(this);
                    this.id = CommandConstants_1["default"].CREATE_CONTEXT_COMMAND_NAME;
                    this.className = "com.canoo.dolphin.impl.commands.CreateContextCommand";
                }
                return CreateContextCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = CreateContextCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 93: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CreatePresentationModelCommand = function (_super) {
                __extends(CreatePresentationModelCommand, _super);
                function CreatePresentationModelCommand(presentationModel) {
                    _super.call(this);
                    this.attributes = [];
                    this.clientSideOnly = false;
                    this.id = "CreatePresentationModel";
                    this.className = "org.opendolphin.core.comm.CreatePresentationModelCommand";
                    this.pmId = presentationModel.id;
                    this.pmType = presentationModel.presentationModelType;
                    var attrs = this.attributes;
                    presentationModel.getAttributes().forEach(function (attr) {
                        attrs.push({
                            propertyName: attr.propertyName,
                            id: attr.id,
                            qualifier: attr.getQualifier(),
                            value: attr.getValue()
                        });
                    });
                }
                return CreatePresentationModelCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = CreatePresentationModelCommand;
        }, { "./Command": 89 }], 94: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var DeletedPresentationModelNotification = function (_super) {
                __extends(DeletedPresentationModelNotification, _super);
                function DeletedPresentationModelNotification(pmId) {
                    _super.call(this);
                    this.pmId = pmId;
                    this.id = 'DeletedPresentationModel';
                    this.className = "org.opendolphin.core.comm.DeletedPresentationModelNotification";
                }
                return DeletedPresentationModelNotification;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = DeletedPresentationModelNotification;
        }, { "./Command": 89 }], 95: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var DestroyContextCommand = function (_super) {
                __extends(DestroyContextCommand, _super);
                function DestroyContextCommand() {
                    _super.call(this);
                    this.id = CommandConstants_1["default"].DESTROY_CONTEXT_COMMAND_NAME;
                    this.className = "com.canoo.dolphin.impl.commands.DestroyContextCommand";
                }
                return DestroyContextCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = DestroyContextCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 96: [function (_dereq_, module, exports) {
            "use strict";

            var ClientConnector_1 = _dereq_("./ClientConnector");
            var ClientDolphin_1 = _dereq_("./ClientDolphin");
            var ClientModelStore_1 = _dereq_("./ClientModelStore");
            var HttpTransmitter_1 = _dereq_("./HttpTransmitter");
            var NoTransmitter_1 = _dereq_("./NoTransmitter");
            var DolphinBuilder = function () {
                function DolphinBuilder() {
                    this.reset_ = false;
                    this.slackMS_ = 300;
                    this.maxBatchSize_ = 50;
                    this.supportCORS_ = false;
                }
                DolphinBuilder.prototype.url = function (url) {
                    this.url_ = url;
                    return this;
                };
                DolphinBuilder.prototype.reset = function (reset) {
                    this.reset_ = reset;
                    return this;
                };
                DolphinBuilder.prototype.slackMS = function (slackMS) {
                    this.slackMS_ = slackMS;
                    return this;
                };
                DolphinBuilder.prototype.maxBatchSize = function (maxBatchSize) {
                    this.maxBatchSize_ = maxBatchSize;
                    return this;
                };
                DolphinBuilder.prototype.supportCORS = function (supportCORS) {
                    this.supportCORS_ = supportCORS;
                    return this;
                };
                DolphinBuilder.prototype.errorHandler = function (errorHandler) {
                    this.errorHandler_ = errorHandler;
                    return this;
                };
                DolphinBuilder.prototype.headersInfo = function (headersInfo) {
                    this.headersInfo_ = headersInfo;
                    return this;
                };
                DolphinBuilder.prototype.build = function () {
                    console.log("OpenDolphin js found");
                    var clientDolphin = new ClientDolphin_1["default"]();
                    var transmitter;
                    if (this.url_ != null && this.url_.length > 0) {
                        transmitter = new HttpTransmitter_1["default"](this.url_, this.reset_, "UTF-8", this.errorHandler_, this.supportCORS_, this.headersInfo_);
                    } else {
                        transmitter = new NoTransmitter_1["default"]();
                    }
                    clientDolphin.setClientConnector(new ClientConnector_1.ClientConnector(transmitter, clientDolphin, this.slackMS_, this.maxBatchSize_));
                    clientDolphin.setClientModelStore(new ClientModelStore_1.ClientModelStore(clientDolphin));
                    console.log("ClientDolphin initialized");
                    return clientDolphin;
                };
                return DolphinBuilder;
            }();
            exports.__esModule = true;
            exports["default"] = DolphinBuilder;
        }, { "./ClientConnector": 84, "./ClientDolphin": 85, "./ClientModelStore": 86, "./HttpTransmitter": 98, "./NoTransmitter": 100 }], 97: [function (_dereq_, module, exports) {
            "use strict";

            var EventBus = function () {
                function EventBus() {
                    this.eventHandlers = [];
                }
                EventBus.prototype.onEvent = function (eventHandler) {
                    this.eventHandlers.push(eventHandler);
                };
                EventBus.prototype.trigger = function (event) {
                    this.eventHandlers.forEach(function (handle) {
                        return handle(event);
                    });
                };
                return EventBus;
            }();
            exports.__esModule = true;
            exports["default"] = EventBus;
        }, {}], 98: [function (_dereq_, module, exports) {
            "use strict";

            var Codec_1 = _dereq_("./Codec");
            var HttpTransmitter = function () {
                function HttpTransmitter(url, reset, charset, errorHandler, supportCORS, headersInfo) {
                    if (reset === void 0) {
                        reset = true;
                    }
                    if (charset === void 0) {
                        charset = "UTF-8";
                    }
                    if (errorHandler === void 0) {
                        errorHandler = null;
                    }
                    if (supportCORS === void 0) {
                        supportCORS = false;
                    }
                    if (headersInfo === void 0) {
                        headersInfo = null;
                    }
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
                    this.codec = new Codec_1["default"]();
                    if (reset) {
                        console.log('HttpTransmitter.invalidate() is deprecated. Use ClientDolphin.reset(OnSuccessHandler) instead');
                        this.invalidate();
                    }
                }
                HttpTransmitter.prototype.transmit = function (commands, onDone) {
                    var _this = this;
                    this.http.onerror = function (evt) {
                        _this.handleError('onerror', "");
                        onDone([]);
                    };
                    this.http.onreadystatechange = function (evt) {
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
                };
                HttpTransmitter.prototype.setHeaders = function (httpReq) {
                    if (this.headersInfo) {
                        for (var i in this.headersInfo) {
                            if (this.headersInfo.hasOwnProperty(i)) {
                                httpReq.setRequestHeader(i, this.headersInfo[i]);
                            }
                        }
                    }
                };
                HttpTransmitter.prototype.handleError = function (kind, message) {
                    var errorEvent = { kind: kind, url: this.url, httpStatus: this.http.status, message: message };
                    if (this.errorHandler) {
                        this.errorHandler(errorEvent);
                    } else {
                        console.log("Error occurred: ", errorEvent);
                    }
                };
                HttpTransmitter.prototype.signal = function (command) {
                    this.sig.open('POST', this.url, true);
                    this.setHeaders(this.sig);
                    this.sig.send(this.codec.encode([command]));
                };
                // Deprecated ! Use 'reset(OnSuccessHandler) instead
                HttpTransmitter.prototype.invalidate = function () {
                    this.http.open('POST', this.url + 'invalidate?', false);
                    this.http.send();
                };
                return HttpTransmitter;
            }();
            exports.__esModule = true;
            exports["default"] = HttpTransmitter;
        }, { "./Codec": 88 }], 99: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var SignalCommand_1 = _dereq_("./SignalCommand");
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var InterruptLongPollCommand = function (_super) {
                __extends(InterruptLongPollCommand, _super);
                function InterruptLongPollCommand() {
                    _super.call(this, CommandConstants_1["default"].INTERRUPT_LONG_POLL_COMMAND_NAME);
                    this.className = "com.canoo.dolphin.impl.commands.InterruptLongPollCommand";
                }
                return InterruptLongPollCommand;
            }(SignalCommand_1["default"]);
            exports.__esModule = true;
            exports["default"] = InterruptLongPollCommand;
        }, { "./CommandConstants": 91, "./SignalCommand": 102 }], 100: [function (_dereq_, module, exports) {
            "use strict";
            /**
             * A transmitter that is not transmitting at all.
             * It may serve as a stand-in when no real transmitter is needed.
             */

            var NoTransmitter = function () {
                function NoTransmitter() {}
                NoTransmitter.prototype.transmit = function (commands, onDone) {
                    // do nothing special
                    onDone([]);
                };
                NoTransmitter.prototype.signal = function (command) {
                    // do nothing
                };
                NoTransmitter.prototype.reset = function (successHandler) {
                    // do nothing
                };
                return NoTransmitter;
            }();
            exports.__esModule = true;
            exports["default"] = NoTransmitter;
        }, {}], 101: [function (_dereq_, module, exports) {
            "use strict";

            var DolphinBuilder_1 = _dereq_("./DolphinBuilder");
            var CreateContextCommand_1 = _dereq_("./CreateContextCommand");
            var DestroyContextCommand_1 = _dereq_("./DestroyContextCommand");
            var InterruptLongPollCommand_1 = _dereq_("./InterruptLongPollCommand");
            var StartLongPollCommand_1 = _dereq_("./StartLongPollCommand");
            /**
             * JS-friendly facade to avoid too many dependencies in plain JS code.
             * The name of this file is also used for the initial lookup of the
             * one javascript file that contains all the dolphin code.
             * Changing the name requires the build support and all users
             * to be updated as well.
             * Dierk Koenig
             */
            // factory method for the initialized dolphin
            // Deprecated ! Use 'makeDolphin() instead
            function dolphin(url, reset, slackMS) {
                if (slackMS === void 0) {
                    slackMS = 300;
                }
                return makeDolphin().url(url).reset(reset).slackMS(slackMS).build();
            }
            exports.dolphin = dolphin;
            // factory method to build an initialized dolphin
            function makeDolphin() {
                return new DolphinBuilder_1["default"]();
            }
            exports.makeDolphin = makeDolphin;
            //Factory methods to have a better integration of ts sources in JS & es6
            function createCreateContextCommand() {
                return new CreateContextCommand_1["default"]();
            }
            exports.createCreateContextCommand = createCreateContextCommand;
            function createDestroyContextCommand() {
                return new DestroyContextCommand_1["default"]();
            }
            exports.createDestroyContextCommand = createDestroyContextCommand;
            function createInterruptLongPollCommand() {
                return new InterruptLongPollCommand_1["default"]();
            }
            exports.createInterruptLongPollCommand = createInterruptLongPollCommand;
            function createStartLongPollCommand() {
                return new StartLongPollCommand_1["default"]();
            }
            exports.createStartLongPollCommand = createStartLongPollCommand;
        }, { "./CreateContextCommand": 92, "./DestroyContextCommand": 95, "./DolphinBuilder": 96, "./InterruptLongPollCommand": 99, "./StartLongPollCommand": 103 }], 102: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var SignalCommand = function (_super) {
                __extends(SignalCommand, _super);
                function SignalCommand(name) {
                    _super.call(this);
                    this.id = name;
                    this.className = "org.opendolphin.core.comm.SignalCommand";
                }
                return SignalCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = SignalCommand;
        }, { "./Command": 89 }], 103: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var CommandConstants_1 = _dereq_("./CommandConstants");
            var StartLongPollCommand = function (_super) {
                __extends(StartLongPollCommand, _super);
                function StartLongPollCommand() {
                    _super.call(this);
                    this.id = CommandConstants_1["default"].START_LONG_POLL_COMMAND_NAME;
                    this.className = "com.canoo.dolphin.impl.commands.StartLongPollCommand";
                }
                return StartLongPollCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = StartLongPollCommand;
        }, { "./Command": 89, "./CommandConstants": 91 }], 104: [function (_dereq_, module, exports) {
            "use strict";

            var __extends = undefined && undefined.__extends || function (d, b) {
                for (var p in b) {
                    if (b.hasOwnProperty(p)) d[p] = b[p];
                }function __() {
                    this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            };
            var Command_1 = _dereq_('./Command');
            var ValueChangedCommand = function (_super) {
                __extends(ValueChangedCommand, _super);
                function ValueChangedCommand(attributeId, oldValue, newValue) {
                    _super.call(this);
                    this.attributeId = attributeId;
                    this.oldValue = oldValue;
                    this.newValue = newValue;
                    this.id = "ValueChanged";
                    this.className = "org.opendolphin.core.comm.ValueChangedCommand";
                }
                return ValueChangedCommand;
            }(Command_1["default"]);
            exports.__esModule = true;
            exports["default"] = ValueChangedCommand;
        }, { "./Command": 89 }], 105: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
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

            var _map = _dereq_('../bower_components/core.js/library/fn/map');

            var _map2 = _interopRequireDefault(_map);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

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

                    (0, _utils2.checkMethod)('BeanManager(classRepository)');
                    (0, _utils2.checkParam)(classRepository, 'classRepository');

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
                        (0, _utils2.checkMethod)('BeanManager.notifyBeanChange(bean, propertyName, newValue)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');

                        return this.classRepository.notifyBeanChange(bean, propertyName, newValue);
                    }
                }, {
                    key: 'notifyArrayChange',
                    value: function notifyArrayChange(bean, propertyName, index, count, removedElements) {
                        (0, _utils2.checkMethod)('BeanManager.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');
                        (0, _utils2.checkParam)(index, 'index');
                        (0, _utils2.checkParam)(count, 'count');
                        (0, _utils2.checkParam)(removedElements, 'removedElements');

                        this.classRepository.notifyArrayChange(bean, propertyName, index, count, removedElements);
                    }
                }, {
                    key: 'isManaged',
                    value: function isManaged(bean) {
                        (0, _utils2.checkMethod)('BeanManager.isManaged(bean)');
                        (0, _utils2.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.isManaged() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'create',
                    value: function create(type) {
                        (0, _utils2.checkMethod)('BeanManager.create(type)');
                        (0, _utils2.checkParam)(type, 'type');

                        // TODO: Implement dolphin.create() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'add',
                    value: function add(type, bean) {
                        (0, _utils2.checkMethod)('BeanManager.add(type, bean)');
                        (0, _utils2.checkParam)(type, 'type');
                        (0, _utils2.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.add() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'addAll',
                    value: function addAll(type, collection) {
                        (0, _utils2.checkMethod)('BeanManager.addAll(type, collection)');
                        (0, _utils2.checkParam)(type, 'type');
                        (0, _utils2.checkParam)(collection, 'collection');

                        // TODO: Implement dolphin.addAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'remove',
                    value: function remove(bean) {
                        (0, _utils2.checkMethod)('BeanManager.remove(bean)');
                        (0, _utils2.checkParam)(bean, 'bean');

                        // TODO: Implement dolphin.remove() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeAll',
                    value: function removeAll(collection) {
                        (0, _utils2.checkMethod)('BeanManager.removeAll(collection)');
                        (0, _utils2.checkParam)(collection, 'collection');

                        // TODO: Implement dolphin.removeAll() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'removeIf',
                    value: function removeIf(predicate) {
                        (0, _utils2.checkMethod)('BeanManager.removeIf(predicate)');
                        (0, _utils2.checkParam)(predicate, 'predicate');

                        // TODO: Implement dolphin.removeIf() [DP-7]
                        throw new Error("Not implemented yet");
                    }
                }, {
                    key: 'onAdded',
                    value: function onAdded(type, eventHandler) {
                        var self = this;
                        if (!(0, _utils.exists)(eventHandler)) {
                            eventHandler = type;
                            (0, _utils2.checkMethod)('BeanManager.onAdded(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allAddedHandlers = self.allAddedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allAddedHandlers = self.allAddedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onAdded(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

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
                            (0, _utils2.checkMethod)('BeanManager.onRemoved(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allRemovedHandlers = self.allRemovedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allRemovedHandlers = self.allRemovedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onRemoved(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

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
                            (0, _utils2.checkMethod)('BeanManager.onBeanUpdate(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allUpdatedHandlers = self.allUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allUpdatedHandlers = self.allUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onBeanUpdate(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

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
                            (0, _utils2.checkMethod)('BeanManager.onArrayUpdate(eventHandler)');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

                            self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.concat(eventHandler);
                            return {
                                unsubscribe: function unsubscribe() {
                                    self.allArrayUpdatedHandlers = self.allArrayUpdatedHandlers.filter(function (value) {
                                        return value !== eventHandler;
                                    });
                                }
                            };
                        } else {
                            (0, _utils2.checkMethod)('BeanManager.onArrayUpdate(type, eventHandler)');
                            (0, _utils2.checkParam)(type, 'type');
                            (0, _utils2.checkParam)(eventHandler, 'eventHandler');

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
        }, { "../bower_components/core.js/library/fn/map": 1, "./utils": 121, "./utils.js": 121 }], 106: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            "use strict";

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

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

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

                    (0, _utils2.checkMethod)('ClassRepository(dolphin)');
                    (0, _utils2.checkParam)(dolphin, 'dolphin');

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
                        (0, _utils2.checkMethod)('ClassRepository.notifyBeanChange(bean, propertyName, newValue)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');

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
                        (0, _utils2.checkMethod)('ClassRepository.notifyArrayChange(bean, propertyName, index, count, removedElements)');
                        (0, _utils2.checkParam)(bean, 'bean');
                        (0, _utils2.checkParam)(propertyName, 'propertyName');
                        (0, _utils2.checkParam)(index, 'index');
                        (0, _utils2.checkParam)(count, 'count');
                        (0, _utils2.checkParam)(removedElements, 'removedElements');

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
                        (0, _utils2.checkMethod)('ClassRepository.onBeanAdded(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.beanAddedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanRemoved',
                    value: function onBeanRemoved(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onBeanRemoved(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.beanRemovedHandlers.push(handler);
                    }
                }, {
                    key: 'onBeanUpdate',
                    value: function onBeanUpdate(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onBeanUpdate(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.propertyUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'onArrayUpdate',
                    value: function onArrayUpdate(handler) {
                        (0, _utils2.checkMethod)('ClassRepository.onArrayUpdate(handler)');
                        (0, _utils2.checkParam)(handler, 'handler');
                        this.arrayUpdateHandlers.push(handler);
                    }
                }, {
                    key: 'registerClass',
                    value: function registerClass(model) {
                        (0, _utils2.checkMethod)('ClassRepository.registerClass(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                        (0, _utils2.checkMethod)('ClassRepository.unregisterClass(model)');
                        (0, _utils2.checkParam)(model, 'model');
                        this.classes['delete'](model.id);
                    }
                }, {
                    key: 'load',
                    value: function load(model) {
                        (0, _utils2.checkMethod)('ClassRepository.load(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                        (0, _utils2.checkMethod)('ClassRepository.unload(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                        (0, _utils2.checkMethod)('ClassRepository.spliceListEntry(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
        }, { "../bower_components/core.js/library/fn/map": 1, "./constants": 115, "./utils": 121, "./utils.js": 121 }], 107: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
            /* global exports */
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

            var _OpenDolphin = _dereq_('../opendolphin/build/OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _utils = _dereq_('./utils');

            var _connector = _dereq_('./connector.js');

            var _connector2 = _interopRequireDefault(_connector);

            var _beanmanager = _dereq_('./beanmanager.js');

            var _beanmanager2 = _interopRequireDefault(_beanmanager);

            var _classrepo = _dereq_('./classrepo.js');

            var _classrepo2 = _interopRequireDefault(_classrepo);

            var _controllermanager = _dereq_('./controllermanager.js');

            var _controllermanager2 = _interopRequireDefault(_controllermanager);

            var _clientcontext = _dereq_('./clientcontext.js');

            var _clientcontext2 = _interopRequireDefault(_clientcontext);

            var _platformHttpTransmitter = _dereq_('./platformHttpTransmitter.js');

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

                        var builder = _OpenDolphin2.default.makeDolphin().url(url).reset(false).slackMS(4).supportCORS(true).maxBatchSize(Number.MAX_SAFE_INTEGER);
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
        }, { "../opendolphin/build/OpenDolphin.js": 101, "./beanmanager.js": 105, "./classrepo.js": 106, "./clientcontext.js": 108, "./connector.js": 114, "./controllermanager.js": 116, "./platformHttpTransmitter.js": 119, "./utils": 121 }], 108: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
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

            var _OpenDolphin = _dereq_('../opendolphin/build/OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

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

                    (0, _utils2.checkMethod)('ClientContext(dolphin, beanManager, controllerManager, connector)');
                    (0, _utils2.checkParam)(dolphin, 'dolphin');
                    (0, _utils2.checkParam)(beanManager, 'beanManager');
                    (0, _utils2.checkParam)(controllerManager, 'controllerManager');
                    (0, _utils2.checkParam)(connector, 'connector');

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
                            self._connector.invoke(_OpenDolphin2.default.createCreateContextCommand()).then(function () {
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
                        (0, _utils2.checkMethod)('ClientContext.createController(name)');
                        (0, _utils2.checkParam)(name, 'name');

                        return this._controllerManager.createController(name);
                    }
                }, {
                    key: 'disconnect',
                    value: function disconnect() {
                        var self = this;
                        this.dolphin.stopPushListening();
                        return new _promise2.default(function (resolve) {
                            self._controllerManager.destroy().then(function () {
                                self._connector.invoke(_OpenDolphin2.default.createDestroyContextCommand());
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
        }, { "../bower_components/core.js/library/fn/promise": 2, "../opendolphin/build/OpenDolphin.js": 101, "./utils": 121, "./utils.js": 121, "emitter-component": 80 }], 109: [function (_dereq_, module, exports) {
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
            }(); /* Copyright 2016 Canoo Engineering AG.
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

            /*jslint browserify: true */

            var _utils = _dereq_('./utils.js');

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
                    key: 'encodeCreatePresentationModelCommand',
                    value: function encodeCreatePresentationModelCommand(command) {
                        return {
                            'p': command.pmId,
                            't': command.pmType,
                            'a': command.attributes.map(function (attribute) {
                                var result = {
                                    'n': attribute.propertyName,
                                    'i': attribute.id
                                };
                                if ((0, _utils.exists)(attribute.value)) {
                                    result.v = attribute.value;
                                }
                                return result;
                            }),
                            'id': 'CreatePresentationModel'
                        };
                    }
                }, {
                    key: 'decodeCreatePresentationModelCommand',
                    value: function decodeCreatePresentationModelCommand(command) {
                        return {
                            'id': 'CreatePresentationModel',
                            'className': "org.opendolphin.core.comm.CreatePresentationModelCommand",
                            'clientSideOnly': false,
                            'pmId': command.p,
                            'pmType': command.t,
                            'attributes': command.a.map(function (attribute) {
                                return {
                                    'propertyName': attribute.n,
                                    'id': attribute.i,
                                    'value': (0, _utils.exists)(attribute.v) ? attribute.v : null,
                                    'qualifier': null
                                };
                            })
                        };
                    }
                }, {
                    key: 'encodeValueChangedCommand',
                    value: function encodeValueChangedCommand(command) {
                        var result = {
                            'a': command.attributeId
                        };
                        if ((0, _utils.exists)(command.oldValue)) {
                            result.o = command.oldValue;
                        }
                        if ((0, _utils.exists)(command.newValue)) {
                            result.n = command.newValue;
                        }
                        result.id = 'ValueChanged';
                        return result;
                    }
                }, {
                    key: 'decodeValueChangedCommand',
                    value: function decodeValueChangedCommand(command) {
                        return {
                            'id': 'ValueChanged',
                            'className': "org.opendolphin.core.comm.ValueChangedCommand",
                            'attributeId': command.a,
                            'oldValue': (0, _utils.exists)(command.o) ? command.o : null,
                            'newValue': (0, _utils.exists)(command.n) ? command.n : null
                        };
                    }
                }, {
                    key: 'encode',
                    value: function encode(commands) {
                        var self = this;
                        return JSON.stringify(commands.map(function (command) {
                            if (command.id === 'CreatePresentationModel') {
                                return self.encodeCreatePresentationModelCommand(command);
                            } else if (command.id === 'ValueChanged') {
                                return self.encodeValueChangedCommand(command);
                            }
                            return command;
                        }));
                    }
                }, {
                    key: 'decode',
                    value: function decode(transmitted) {
                        var self = this;
                        if (typeof transmitted === 'string') {
                            return JSON.parse(transmitted).map(function (command) {
                                if (command.id === 'CreatePresentationModel') {
                                    return self.decodeCreatePresentationModelCommand(command);
                                } else if (command.id === 'ValueChanged') {
                                    return self.decodeValueChangedCommand(command);
                                }
                                return command;
                            });
                        } else {
                            return transmitted;
                        }
                    }
                }]);

                return Codec;
            }();

            exports.default = Codec;
        }, { "./utils.js": 121 }], 110: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CommandFactory = undefined;

            var _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
                };
            }();

            var _destroyControllerCommand = _dereq_('./commands/destroyControllerCommand.js');

            var _destroyControllerCommand2 = _interopRequireDefault(_destroyControllerCommand);

            var _createControllerCommand = _dereq_('./commands/createControllerCommand.js');

            var _createControllerCommand2 = _interopRequireDefault(_createControllerCommand);

            var _callActionCommand = _dereq_('./commands/callActionCommand.js');

            var _callActionCommand2 = _interopRequireDefault(_callActionCommand);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CommandFactory = exports.CommandFactory = function () {
                function CommandFactory() {
                    _classCallCheck(this, CommandFactory);
                }

                _createClass(CommandFactory, null, [{
                    key: 'createDestroyControllerCommand',
                    value: function createDestroyControllerCommand(controllerId) {
                        return new _destroyControllerCommand2.default(controllerId);
                    }
                }, {
                    key: 'createCreateControllerCommand',
                    value: function createCreateControllerCommand(controllerName, parentControllerId) {
                        return new _createControllerCommand2.default(controllerName, parentControllerId);
                    }
                }, {
                    key: 'createCallActionCommand',
                    value: function createCallActionCommand(controllerid, actionName, params) {
                        return new _callActionCommand2.default(controllerid, actionName, params);
                    }
                }]);

                return CommandFactory;
            }();
        }, { "./commands/callActionCommand.js": 111, "./commands/createControllerCommand.js": 112, "./commands/destroyControllerCommand.js": 113 }], 111: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _utils = _dereq_('../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CallActionCommand = function CallActionCommand(controllerid, actionName, params) {
                _classCallCheck(this, CallActionCommand);

                (0, _utils.checkMethod)('CreateControllerCommand.invoke(controllerid, actionName, params)');
                (0, _utils.checkParam)(controllerid, 'controllerid');
                (0, _utils.checkParam)(actionName, 'actionName');

                this.id = 'CallAction';
                this.c = controllerid;
                this.n = actionName;
                this.p = params;
            };

            exports.default = CallActionCommand;
        }, { "../utils": 121 }], 112: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _utils = _dereq_('../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var CreateControllerCommand = function CreateControllerCommand(controllerName, parentControllerId) {
                _classCallCheck(this, CreateControllerCommand);

                (0, _utils.checkMethod)('CreateControllerCommand.invoke(controllerName, parentControllerId)');
                (0, _utils.checkParam)(controllerName, 'controllerName');

                this.id = 'CreateController';
                this.n = controllerName;
                this.p = parentControllerId;
            };

            exports.default = CreateControllerCommand;
        }, { "../utils": 121 }], 113: [function (_dereq_, module, exports) {
            'use strict';

            Object.defineProperty(exports, "__esModule", {
                value: true
            });

            var _utils = _dereq_('../utils');

            function _classCallCheck(instance, Constructor) {
                if (!(instance instanceof Constructor)) {
                    throw new TypeError("Cannot call a class as a function");
                }
            }

            var DestroyControllerCommand = function DestroyControllerCommand(controllerId) {
                _classCallCheck(this, DestroyControllerCommand);

                (0, _utils.checkMethod)('DestroyControllerCommand(controllerId)');
                (0, _utils.checkParam)(controllerId, 'controllerId');

                this.id = 'DestroyController';
                this.c = controllerId;
            };

            exports.default = DestroyControllerCommand;
        }, { "../utils": 121 }], 114: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
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

            var _OpenDolphin = _dereq_('../opendolphin/build/OpenDolphin.js');

            var _OpenDolphin2 = _interopRequireDefault(_OpenDolphin);

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _ClientModelStore = _dereq_('../opendolphin/build/ClientModelStore');

            var _ClientModelStore2 = _interopRequireDefault(_ClientModelStore);

            var _utils = _dereq_('./utils.js');

            var _utils2 = _dereq_('./utils');

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

                    (0, _utils2.checkMethod)('Connector(url, dolphin, classRepository, config)');
                    (0, _utils2.checkParam)(url, 'url');
                    (0, _utils2.checkParam)(dolphin, 'dolphin');
                    (0, _utils2.checkParam)(classRepository, 'classRepository');

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
                            if (event.eventType === _ClientModelStore2.default.Type.ADDED) {
                                self.onModelAdded(model);
                            } else if (event.eventType === _ClientModelStore2.default.Type.REMOVED) {
                                self.onModelRemoved(model);
                            }
                        }
                    });
                }

                _createClass(Connector, [{
                    key: 'connect',
                    value: function connect() {
                        var that = this;
                        setTimeout(function () {
                            that.dolphin.startPushListening(_OpenDolphin2.default.createStartLongPollCommand(), _OpenDolphin2.default.createInterruptLongPollCommand());
                        }, 0);
                    }
                }, {
                    key: 'onModelAdded',
                    value: function onModelAdded(model) {
                        (0, _utils2.checkMethod)('Connector.onModelAdded(model)');
                        (0, _utils2.checkParam)(model, 'model');

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
                        (0, _utils2.checkMethod)('Connector.onModelRemoved(model)');
                        (0, _utils2.checkParam)(model, 'model');
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
                        (0, _utils2.checkMethod)('Connector.invoke(command)');
                        (0, _utils2.checkParam)(command, 'command');

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
        }, { "../bower_components/core.js/library/fn/promise": 2, "../opendolphin/build/ClientModelStore": 86, "../opendolphin/build/OpenDolphin.js": 101, "./utils": 121, "./utils.js": 121 }], 115: [function (_dereq_, module, exports) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
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
        }, {}], 116: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
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

            var _promise = _dereq_('../bower_components/core.js/library/fn/promise');

            var _promise2 = _interopRequireDefault(_promise);

            var _set = _dereq_('../bower_components/core.js/library/fn/set');

            var _set2 = _interopRequireDefault(_set);

            var _utils = _dereq_('./utils');

            var _controllerproxy = _dereq_('./controllerproxy.js');

            var _controllerproxy2 = _interopRequireDefault(_controllerproxy);

            var _commandFactory = _dereq_('./commandFactory.js');

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
                                self.connector.invoke(_commandFactory.CommandFactory.createCreateControllerCommand(name, parentControllerId)).then(function () {
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
                                        actionParams.push({ n: param, v: value });
                                    }
                                }
                            }

                            self.connector.invoke(_commandFactory.CommandFactory.createCallActionCommand(controllerId, actionName, actionParams)).then(function () {
                                var isError = pm.findAttributeByPropertyName(ERROR_CODE).getValue();
                                if (isError) {
                                    reject(new Error("ControllerAction caused an error"));
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
                                self.connector.invoke(_commandFactory.CommandFactory.createDestroyControllerCommand(controller.getId())).then(resolve);
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
        }, { "../bower_components/core.js/library/fn/promise": 2, "../bower_components/core.js/library/fn/set": 3, "./commandFactory.js": 110, "./connector.js": 114, "./controllerproxy.js": 117, "./utils": 121 }], 117: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            /* global console */
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
        }, { "../bower_components/core.js/library/fn/set": 3, "./utils": 121 }], 118: [function (_dereq_, module, exports) {
            'use strict';

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
                }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
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
        }, {}], 119: [function (_dereq_, module, exports) {
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
            }(); /* Copyright 2016 Canoo Engineering AG.
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

            var _emitterComponent = _dereq_('emitter-component');

            var _emitterComponent2 = _interopRequireDefault(_emitterComponent);

            var _utils = _dereq_('./utils');

            var _errors = _dereq_('./errors.js');

            var _codec = _dereq_('./codec.js');

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
        }, { "./codec.js": 109, "./errors.js": 118, "./remotingErrorHandler": 120, "./utils": 121, "emitter-component": 80 }], 120: [function (_dereq_, module, exports) {
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

            /*jslint browserify: true */
            "use strict";

            var checkMethodName;

            var exists = function exists(object) {
                return typeof object !== 'undefined' && object !== null;
            };

            module.exports.exists = exists;

            module.exports.checkMethod = function (name) {
                checkMethodName = name;
            };

            module.exports.checkParam = function (param, parameterName) {
                if (!exists(param)) {
                    throw new Error('The parameter ' + parameterName + ' is mandatory in ' + checkMethodName);
                }
            };
        }, {}] }, {}, [107])(107);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vbWFwLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vcHJvbWlzZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3NldC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2EtZnVuY3Rpb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FuLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LWZyb20taXRlcmFibGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1pbmNsdWRlcy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2FycmF5LW1ldGhvZHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jbGFzc29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29mLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLXRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19jb2xsZWN0aW9uLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fY29yZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2N0eC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RlZmluZWQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2RvbS1jcmVhdGUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19lbnVtLWJ1Zy1rZXlzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZXhwb3J0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fZmFpbHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19mb3Itb2YuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19nbG9iYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oYXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19oaWRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faHRtbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2llOC1kb20tZGVmaW5lLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW52b2tlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLWFycmF5LWl0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pcy1hcnJheS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2lzLW9iamVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY2FsbC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItY3JlYXRlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19pdGVyLWRldGVjdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXItc3RlcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX2xpYnJhcnkuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19tZXRhLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fbWljcm90YXNrLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWNyZWF0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3QtZ3BvLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fb2JqZWN0LWtleXMtaW50ZXJuYWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Byb3BlcnR5LWRlc2MuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS1hbGwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19yZWRlZmluZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3NldC1zcGVjaWVzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2V0LXRvLXN0cmluZy10YWcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc2hhcmVkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3N0cmluZy1hdC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3Rhc2suanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL190by1pb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tbGVuZ3RoLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdG8tcHJpbWl0aXZlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fdWlkLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9fd2tzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm1hcC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNi5wcm9taXNlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc2V0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L25vZGVfbW9kdWxlcy9lbWl0dGVyLWNvbXBvbmVudC9pbmRleC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0F0dHJpYnV0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NsaWVudEF0dHJpYnV0ZS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NsaWVudENvbm5lY3Rvci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NsaWVudERvbHBoaW4uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9DbGllbnRNb2RlbFN0b3JlLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9Db2RlYy5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9Db21tYW5kQmF0Y2hlci5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NvbW1hbmRDb25zdGFudHMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9DcmVhdGVDb250ZXh0Q29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0NyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0RlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbi5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0Rlc3Ryb3lDb250ZXh0Q29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L29wZW5kb2xwaGluL2J1aWxkL0RvbHBoaW5CdWlsZGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvRXZlbnRCdXMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9IdHRwVHJhbnNtaXR0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9JbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9Ob1RyYW5zbWl0dGVyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvT3BlbkRvbHBoaW4uanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9TaWduYWxDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvb3BlbmRvbHBoaW4vYnVpbGQvU3RhcnRMb25nUG9sbENvbW1hbmQuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9vcGVuZG9scGhpbi9idWlsZC9WYWx1ZUNoYW5nZWRDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2JlYW5tYW5hZ2VyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NsYXNzcmVwby5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jbGllbnRDb250ZXh0RmFjdG9yeS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jbGllbnRjb250ZXh0LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvZGVjLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRGYWN0b3J5LmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2NhbGxBY3Rpb25Db21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2NyZWF0ZUNvbnRyb2xsZXJDb21tYW5kLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbW1hbmRzL2Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZC5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9jb25uZWN0b3IuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvY29uc3RhbnRzLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnRyb2xsZXJtYW5hZ2VyLmpzIiwiYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3QvYm93ZXJfY29tcG9uZW50cy9kb2xwaGluLXBsYXRmb3JtLWpzL2Rpc3Qvc3JjL2NvbnRyb2xsZXJwcm94eS5qcyIsImJvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L3NyYy9lcnJvcnMuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvcGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvcmVtb3RpbmdFcnJvckhhbmRsZXIuanMiLCJib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9ib3dlcl9jb21wb25lbnRzL2RvbHBoaW4tcGxhdGZvcm0tanMvZGlzdC9zcmMvdXRpbHMuanMiLCJzcmMvZG9scGhpbi1wbGF0Zm9ybS1hbmd1bGFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG1CQUFBLEFBQU8sVUFBVSxRQUFBLEFBQVEsb0JBQXpCLEFBQTZDOzs7O0FDTDdDLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixtQkFBQSxBQUFPLFVBQVUsUUFBQSxBQUFRLG9CQUF6QixBQUE2Qzs7OztBQ0o3QyxvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG9CQUFBLEFBQVE7QUFDUixvQkFBQSxBQUFRO0FBQ1Isb0JBQUEsQUFBUTtBQUNSLG1CQUFBLEFBQU8sVUFBVSxRQUFBLEFBQVEsb0JBQXpCLEFBQTZDOzs7O0FDTDdDLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjtvQkFBRyxPQUFBLEFBQU8sTUFBVixBQUFnQixZQUFXLE1BQU0sVUFBVSxLQUFoQixBQUFNLEFBQWUsQUFDaEQ7dUJBQUEsQUFBTyxBQUNSO0FBSEQ7Ozs7QUNBQSxtQkFBQSxBQUFPLFVBQVUsWUFBVSxDQUFFLEFBQWEsV0FBMUM7Ozs7QUNBQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQVQsQUFBYSxhQUFiLEFBQTBCLE1BQTFCLEFBQWdDLGdCQUFlLEFBQzlEO29CQUFHLEVBQUUsY0FBRixBQUFnQixnQkFBaUIsbUJBQUEsQUFBbUIsYUFBYSxrQkFBcEUsQUFBc0YsSUFBSSxBQUN4RjswQkFBTSxVQUFVLE9BQWhCLEFBQU0sQUFBaUIsQUFDeEI7QUFBQyx3QkFBQSxBQUFPLEFBQ1Y7QUFKRDs7OztBQ0FBLGdCQUFJLFdBQVcsUUFBZixBQUFlLEFBQVE7QUFDdkIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO29CQUFHLENBQUMsU0FBSixBQUFJLEFBQVMsS0FBSSxNQUFNLFVBQVUsS0FBaEIsQUFBTSxBQUFlLEFBQ3RDO3VCQUFBLEFBQU8sQUFDUjtBQUhEOzs7O0FDREEsZ0JBQUksUUFBUSxRQUFaLEFBQVksQUFBUTs7QUFFcEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxNQUFULEFBQWUsVUFBUyxBQUN2QztvQkFBSSxTQUFKLEFBQWEsQUFDYjtzQkFBQSxBQUFNLE1BQU4sQUFBWSxPQUFPLE9BQW5CLEFBQTBCLE1BQTFCLEFBQWdDLFFBQWhDLEFBQXdDLEFBQ3hDO3VCQUFBLEFBQU8sQUFDUjtBQUpEOzs7O0FDRkE7QUFDQTs7QUFDQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFdBQVksUUFEaEIsQUFDZ0IsQUFBUTtnQkFDcEIsVUFBWSxRQUZoQixBQUVnQixBQUFRO0FBQ3hCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsYUFBWSxBQUNwQzt1QkFBTyxVQUFBLEFBQVMsT0FBVCxBQUFnQixJQUFoQixBQUFvQixXQUFVLEFBQ25DO3dCQUFJLElBQVMsVUFBYixBQUFhLEFBQVU7d0JBQ25CLFNBQVMsU0FBUyxFQUR0QixBQUNhLEFBQVc7d0JBQ3BCLFFBQVMsUUFBQSxBQUFRLFdBRnJCLEFBRWEsQUFBbUI7d0JBRmhDLEFBR0ksQUFDSjtBQUNBO3dCQUFHLGVBQWUsTUFBbEIsQUFBd0IsSUFBRyxPQUFNLFNBQU4sQUFBZSxPQUFNLEFBQzlDO2dDQUFRLEVBQVIsQUFBUSxBQUFFLEFBQ1Y7NEJBQUcsU0FBSCxBQUFZLE9BQU0sT0FBQSxBQUFPLEFBQzNCO0FBQ0M7QUFKRCwyQkFJTyxPQUFLLFNBQUwsQUFBYyxPQUFkLEFBQXFCLFNBQVE7NEJBQUcsZUFBZSxTQUFsQixBQUEyQixHQUFFLEFBQy9EO2dDQUFHLEVBQUEsQUFBRSxXQUFMLEFBQWdCLElBQUcsT0FBTyxlQUFBLEFBQWUsU0FBdEIsQUFBK0IsQUFDbkQ7QUFGTTtBQUVMLDRCQUFPLENBQUEsQUFBQyxlQUFlLENBQXZCLEFBQXdCLEFBQzNCO0FBYkQsQUFjRDtBQWZEOzs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsZ0JBQUksTUFBVyxRQUFmLEFBQWUsQUFBUTtnQkFDbkIsVUFBVyxRQURmLEFBQ2UsQUFBUTtnQkFDbkIsV0FBVyxRQUZmLEFBRWUsQUFBUTtnQkFDbkIsV0FBVyxRQUhmLEFBR2UsQUFBUTtnQkFDbkIsTUFBVyxRQUpmLEFBSWUsQUFBUTtBQUN2QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQVQsQUFBZSxTQUFRLEFBQ3RDO29CQUFJLFNBQWdCLFFBQXBCLEFBQTRCO29CQUN4QixZQUFnQixRQURwQixBQUM0QjtvQkFDeEIsVUFBZ0IsUUFGcEIsQUFFNEI7b0JBQ3hCLFdBQWdCLFFBSHBCLEFBRzRCO29CQUN4QixnQkFBZ0IsUUFKcEIsQUFJNEI7b0JBQ3hCLFdBQWdCLFFBQUEsQUFBUSxLQUw1QixBQUtpQztvQkFDN0IsU0FBZ0IsV0FOcEIsQUFNK0IsQUFDL0I7dUJBQU8sVUFBQSxBQUFTLE9BQVQsQUFBZ0IsWUFBaEIsQUFBNEIsTUFBSyxBQUN0Qzt3QkFBSSxJQUFTLFNBQWIsQUFBYSxBQUFTO3dCQUNsQixPQUFTLFFBRGIsQUFDYSxBQUFRO3dCQUNqQixJQUFTLElBQUEsQUFBSSxZQUFKLEFBQWdCLE1BRjdCLEFBRWEsQUFBc0I7d0JBQy9CLFNBQVMsU0FBUyxLQUh0QixBQUdhLEFBQWM7d0JBQ3ZCLFFBSkosQUFJYTt3QkFDVCxTQUFTLFNBQVMsT0FBQSxBQUFPLE9BQWhCLEFBQVMsQUFBYyxVQUFVLFlBQVksT0FBQSxBQUFPLE9BQW5CLEFBQVksQUFBYyxLQUx4RSxBQUs2RTt3QkFMN0UsQUFNSTt3QkFOSixBQU1TLEFBQ1Q7MkJBQUssU0FBTCxBQUFjLE9BQWQsQUFBcUIsU0FBUTs0QkFBRyxZQUFZLFNBQWYsQUFBd0IsTUFBSyxBQUN4RDtrQ0FBTSxLQUFOLEFBQU0sQUFBSyxBQUNYO2tDQUFNLEVBQUEsQUFBRSxLQUFGLEFBQU8sT0FBYixBQUFNLEFBQWMsQUFDcEI7Z0NBQUEsQUFBRyxNQUFLLEFBQ047b0NBQUEsQUFBRyxRQUFPLE9BQUEsQUFBTyxTQUFqQixBQUFVLEFBQWdCLEtBQTFCLEFBQTBDO3FDQUNyQyxJQUFBLEFBQUcsYUFBSSxBQUFPLEFBQ2pCOzZDQUFBLEFBQUssQUFBRzttREFERSxBQUNGLEFBQU8sTUFBeUIsQUFDeEM7NkNBQUEsQUFBSyxBQUFHO21EQUZFLEFBRUYsQUFBTyxLQUF5QixBQUN4Qzs2Q0FBQSxBQUFLLEFBQUc7bURBSEUsQUFHRixBQUFPLE9BQXlCLEFBQ3hDOzZDQUFBLEFBQUssQUFBRzttREFBQSxBQUFPLEtBSkwsQUFJRixBQUFZLE1BSmpCLEFBQU8sQUFJOEI7QUFKOUIsMkNBS0wsSUFBQSxBQUFHLFVBQVMsT0FQYixBQU9hLEFBQU8sT0FBZ0IsQUFDM0M7QUFDRjtBQVpEO0FBYUEsNEJBQU8sZ0JBQWdCLENBQWhCLEFBQWlCLElBQUksV0FBQSxBQUFXLFdBQVgsQUFBc0IsV0FBbEQsQUFBNkQsQUFDOUQ7QUF0QkQsQUF1QkQ7QUEvQkQ7Ozs7QUNaQSxnQkFBSSxXQUFXLFFBQWYsQUFBZSxBQUFRO2dCQUNuQixVQUFXLFFBRGYsQUFDZSxBQUFRO2dCQUNuQixVQUFXLFFBQUEsQUFBUSxVQUZ2QixBQUVlLEFBQWtCOztBQUVqQyxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFVBQVMsQUFDakM7b0JBQUEsQUFBSSxBQUNKO29CQUFHLFFBQUgsQUFBRyxBQUFRLFdBQVUsQUFDbkI7d0JBQUksU0FBSixBQUFhLEFBQ2I7QUFDQTt3QkFBRyxPQUFBLEFBQU8sS0FBUCxBQUFZLGVBQWUsTUFBQSxBQUFNLFNBQVMsUUFBUSxFQUFyRCxBQUFHLEFBQTBDLEFBQVUsYUFBWSxJQUFBLEFBQUksQUFDdkU7d0JBQUcsU0FBSCxBQUFHLEFBQVMsSUFBRyxBQUNiOzRCQUFJLEVBQUosQUFBSSxBQUFFLEFBQ047NEJBQUcsTUFBSCxBQUFTLE1BQUssSUFBQSxBQUFJLEFBQ25CO0FBQ0Y7QUFBQyx3QkFBTyxNQUFBLEFBQU0sWUFBTixBQUFrQixRQUF6QixBQUFpQyxBQUNwQztBQVhEOzs7O0FDSkE7O0FBQ0EsZ0JBQUkscUJBQXFCLFFBQXpCLEFBQXlCLEFBQVE7O0FBRWpDLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsVUFBVCxBQUFtQixRQUFPLEFBQ3pDO3VCQUFPLEtBQUssbUJBQUwsQUFBSyxBQUFtQixXQUEvQixBQUFPLEFBQW1DLEFBQzNDO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxNQUFNLFFBQVYsQUFBVSxBQUFRO2dCQUNkLGNBQU0sQUFBUSxVQUFVO0FBRDVCLEFBQ1UsQUFDUjtBQURRO2dCQUVOLHNCQUFvQixBQUFFO3VCQUFBLEFBQU8sQUFBWTtBQUFuQyxBQUFJLGFBQUEsRUFBSixLQUhWLEFBR29EOztBQUVwRDtBQUNBLGdCQUFJLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBUyxJQUFULEFBQWEsS0FBSSxBQUM1QjtvQkFBSSxBQUNGOzJCQUFPLEdBQVAsQUFBTyxBQUFHLEFBQ1g7QUFGRCxrQkFFRSxPQUFBLEFBQU0sR0FBRSxDQUFFLEFBQWEsV0FDMUI7QUFKRDs7QUFNQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7b0JBQUEsQUFBSSxHQUFKLEFBQU8sR0FBUCxBQUFVLEFBQ1Y7dUJBQU8sT0FBQSxBQUFPLFlBQVAsQUFBbUIscUJBQWMsQUFBTyxPQUFPLEFBQ3BEO0FBRHNDO0FBQUEsMEJBRTVCLElBQUksT0FBTyxJQUFJLE9BQVgsQUFBVyxBQUFPLEtBQTlCLEFBQVksQUFBdUIsU0FBbkMsQUFBNEMsV0FBVyxBQUN6RDtBQURFO0FBQUEsNEJBRVUsQUFDWjtBQURFLEFBQU07QUFBQSxpQkFBTixHQUVBLENBQUMsSUFBSSxJQUFMLEFBQUssQUFBSSxPQUFULEFBQWdCLFlBQVksT0FBTyxFQUFQLEFBQVMsVUFBckMsQUFBK0MsYUFBL0MsQUFBNEQsY0FOaEUsQUFNOEUsQUFDL0U7QUFURDs7OztBQ2JBLGdCQUFJLFdBQVcsR0FBZixBQUFrQjs7QUFFbEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO3VCQUFPLFNBQUEsQUFBUyxLQUFULEFBQWMsSUFBZCxBQUFrQixNQUFsQixBQUF3QixHQUFHLENBQWxDLEFBQU8sQUFBNEIsQUFDcEM7QUFGRDs7QUNGQTs7QUFDQSxnQkFBSSxLQUFjLFFBQUEsQUFBUSxnQkFBMUIsQUFBMEM7Z0JBQ3RDLFNBQWMsUUFEbEIsQUFDa0IsQUFBUTtnQkFDdEIsY0FBYyxRQUZsQixBQUVrQixBQUFRO2dCQUN0QixNQUFjLFFBSGxCLEFBR2tCLEFBQVE7Z0JBQ3RCLGFBQWMsUUFKbEIsQUFJa0IsQUFBUTtnQkFDdEIsVUFBYyxRQUxsQixBQUtrQixBQUFRO2dCQUN0QixRQUFjLFFBTmxCLEFBTWtCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFQbEIsQUFPa0IsQUFBUTtnQkFDdEIsT0FBYyxRQVJsQixBQVFrQixBQUFRO2dCQUN0QixhQUFjLFFBVGxCLEFBU2tCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFWbEIsQUFVa0IsQUFBUTtnQkFDdEIsVUFBYyxRQUFBLEFBQVEsV0FYMUIsQUFXcUM7Z0JBQ2pDLE9BQWMsY0FBQSxBQUFjLE9BWmhDLEFBWXVDOztBQUV2QyxnQkFBSSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQVMsTUFBVCxBQUFlLEtBQUksQUFDaEM7QUFDQTtvQkFBSSxRQUFRLFFBQVosQUFBWSxBQUFRO29CQUFwQixBQUEwQixBQUMxQjtvQkFBRyxVQUFILEFBQWEsS0FBSSxPQUFPLEtBQUEsQUFBSyxHQUFaLEFBQU8sQUFBUSxBQUNoQztBQUNBO3FCQUFJLFFBQVEsS0FBWixBQUFpQixJQUFqQixBQUFxQixPQUFPLFFBQVEsTUFBcEMsQUFBMEMsR0FBRSxBQUMxQzt3QkFBRyxNQUFBLEFBQU0sS0FBVCxBQUFjLEtBQUksT0FBQSxBQUFPLEFBQzFCO0FBQ0Y7QUFSRDs7QUFVQSxtQkFBQSxBQUFPO2dDQUNXLHdCQUFBLEFBQVMsU0FBVCxBQUFrQixNQUFsQixBQUF3QixRQUF4QixBQUFnQyxPQUFNLEFBQ3BEO3dCQUFJLFlBQVksVUFBQSxBQUFTLE1BQVQsQUFBZTttQ0FDN0IsQUFBVyxNQUFYLEFBQWlCLEdBQWpCLEFBQW9CLE1BQXBCLEFBQTBCLEFBQzFCOzZCQUFBLEFBQUssS0FBSyxPQUY0QixBQUV0QyxBQUFVLEFBQU8sT0FBTyxBQUN4Qjs2QkFBQSxBQUFLLEtBSGlDLEFBR3RDLEFBQVUsV0FBYyxBQUN4Qjs2QkFBQSxBQUFLLEtBSmlDLEFBSXRDLEFBQVUsV0FBYyxBQUN4Qjs2QkFBQSxBQUFLLFFBTGlDLEFBS3RDLEFBQWEsRUFMeUIsQUFDdEMsQ0FJd0IsQUFDeEI7NEJBQUcsWUFBSCxBQUFlLFdBQVUsTUFBQSxBQUFNLFVBQU4sQUFBZ0IsUUFBUSxLQUF4QixBQUF3QixBQUFLLFFBQTdCLEFBQXFDLEFBQy9EO0FBUEQsQUFBUSxBQVFSLHFCQVJRO2dDQVFJLEVBQVosQUFBYztBQUVaO0FBQ0E7K0JBQU8sU0FBQSxBQUFTLFFBQU8sQUFDckI7aUNBQUksSUFBSSxPQUFKLEFBQVcsTUFBTSxPQUFPLEtBQXhCLEFBQTZCLElBQUksUUFBUSxLQUE3QyxBQUFrRCxJQUFsRCxBQUFzRCxPQUFPLFFBQVEsTUFBckUsQUFBMkUsR0FBRSxBQUMzRTtzQ0FBQSxBQUFNLElBQU4sQUFBVSxBQUNWO29DQUFHLE1BQUgsQUFBUyxHQUFFLE1BQUEsQUFBTSxJQUFJLE1BQUEsQUFBTSxFQUFOLEFBQVEsSUFBbEIsQUFBc0IsQUFDakM7dUNBQU8sS0FBSyxNQUFaLEFBQU8sQUFBVyxBQUNuQjtBQUNEO2lDQUFBLEFBQUssS0FBSyxLQUFBLEFBQUssS0FBZixBQUFvQixBQUNwQjtpQ0FBQSxBQUFLLFFBQUwsQUFBYSxBQUNkO0FBWHNCLEFBWXZCO0FBQ0E7QUFDQTtrQ0FBVSxpQkFBQSxBQUFTLEtBQUksQUFDckI7Z0NBQUksT0FBSixBQUFZO2dDQUNSLFFBQVEsU0FBQSxBQUFTLE1BRHJCLEFBQ1ksQUFBZSxBQUMzQjtnQ0FBQSxBQUFHLE9BQU0sQUFDUDtvQ0FBSSxPQUFPLE1BQVgsQUFBaUI7b0NBQ2IsT0FBTyxNQURYLEFBQ2lCLEFBQ2pCO3VDQUFPLEtBQUEsQUFBSyxHQUFHLE1BQWYsQUFBTyxBQUFjLEFBQ3JCO3NDQUFBLEFBQU0sSUFBTixBQUFVLEFBQ1Y7b0NBQUEsQUFBRyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsQUFDakI7b0NBQUEsQUFBRyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsQUFDakI7b0NBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxPQUFNLEtBQUEsQUFBSyxLQUFMLEFBQVUsQUFDOUI7b0NBQUcsS0FBQSxBQUFLLE1BQVIsQUFBYyxPQUFNLEtBQUEsQUFBSyxLQUFMLEFBQVUsQUFDOUI7cUNBQUEsQUFBSyxBQUNOO0FBQUMsb0NBQU8sQ0FBQyxDQUFSLEFBQVMsQUFDWjtBQTVCc0IsQUE2QnZCO0FBQ0E7QUFDQTtpQ0FBUyxTQUFBLEFBQVMsUUFBVCxBQUFpQixXQUFqQixBQUE0Qix5QkFBd0IsQUFDM0Q7dUNBQUEsQUFBVyxNQUFYLEFBQWlCLEdBQWpCLEFBQW9CLEFBQ3BCO2dDQUFJLElBQUksSUFBQSxBQUFJLFlBQVksVUFBQSxBQUFVLFNBQVYsQUFBbUIsSUFBSSxVQUF2QixBQUF1QixBQUFVLEtBQWpELEFBQXNELFdBQTlELEFBQVEsQUFBaUU7Z0NBQXpFLEFBQ0ksQUFDSjttQ0FBTSxRQUFRLFFBQVEsTUFBUixBQUFjLElBQUksS0FBaEMsQUFBcUMsSUFBRyxBQUN0QztrQ0FBRSxNQUFGLEFBQVEsR0FBRyxNQUFYLEFBQWlCLEdBQWpCLEFBQW9CLEFBQ3BCO0FBQ0E7dUNBQU0sU0FBUyxNQUFmLEFBQXFCLEdBQUU7NENBQVEsTUFBL0IsQUFBdUIsQUFBYztBQUN0QztBQUNGO0FBeENzQixBQXlDdkI7QUFDQTtBQUNBOzZCQUFLLFNBQUEsQUFBUyxJQUFULEFBQWEsS0FBSSxBQUNwQjttQ0FBTyxDQUFDLENBQUMsU0FBQSxBQUFTLE1BQWxCLEFBQVMsQUFBZSxBQUN6QjtBQTdDSCxBQUF5QixBQStDekI7QUEvQ3lCLEFBQ3ZCO3dCQThDRixBQUFHLGdCQUFlLEVBQUgsQUFBSyxXQUFMLEFBQWdCOzZCQUN4QixlQUFVLEFBQ2I7bUNBQU8sUUFBUSxLQUFmLEFBQU8sQUFBUSxBQUFLLEFBQ3JCO0FBSFksQUFBd0IsQUFLdkM7QUFMdUMsQUFDckMscUJBRGE7MkJBS2YsQUFBTyxBQUNSO0FBL0RjLEFBZ0VmO3FCQUFLLGFBQUEsQUFBUyxNQUFULEFBQWUsS0FBZixBQUFvQixPQUFNLEFBQzdCO3dCQUFJLFFBQVEsU0FBQSxBQUFTLE1BQXJCLEFBQVksQUFBZTt3QkFBM0IsQUFDSTt3QkFESixBQUNVLEFBQ1Y7QUFDQTt3QkFBQSxBQUFHLE9BQU0sQUFDUDs4QkFBQSxBQUFNLElBQU4sQUFBVSxBQUNaO0FBQ0M7QUFIRCwyQkFHTyxBQUNMOzZCQUFBLEFBQUssS0FBSzsrQkFDTCxRQUFRLFFBQUEsQUFBUSxLQURILEFBQ0wsQUFBYSxPQUFPLEFBQy9COytCQUZnQixBQUViLEtBQTRCLEFBQy9COytCQUhnQixBQUdiLE9BQTRCLEFBQy9COytCQUFHLE9BQU8sS0FKTSxBQUlELElBQWdCLEFBQy9COytCQUxnQixBQUtiLFdBQTRCLEFBQy9COytCQU5nQixBQU1iLE1BTkwsQUFBa0IsQUFNZSxBQUVqQztBQVJrQixBQUNoQjs0QkFPQyxDQUFDLEtBQUosQUFBUyxJQUFHLEtBQUEsQUFBSyxLQUFMLEFBQVUsQUFDdEI7NEJBQUEsQUFBRyxNQUFLLEtBQUEsQUFBSyxJQUFMLEFBQVMsQUFDakI7NkJBQUEsQUFBSyxBQUNMO0FBQ0E7NEJBQUcsVUFBSCxBQUFhLEtBQUksS0FBQSxBQUFLLEdBQUwsQUFBUSxTQUFSLEFBQWlCLEFBQ25DO0FBQUMsNEJBQUEsQUFBTyxBQUNWO0FBdEZjLEFBdUZmOzBCQXZGZSxBQXVGTCxBQUNWOzJCQUFXLG1CQUFBLEFBQVMsR0FBVCxBQUFZLE1BQVosQUFBa0IsUUFBTyxBQUNsQztBQUNBO0FBQ0E7Z0NBQUEsQUFBWSxHQUFaLEFBQWUsTUFBTSxVQUFBLEFBQVMsVUFBVCxBQUFtQjs2QkFDdEMsQUFBSyxLQURzQyxBQUMzQyxBQUFVLFVBQVcsQUFDckI7NkJBQUEsQUFBSyxLQUZzQyxBQUUzQyxBQUFVLEtBRmlDLEFBQzNDLENBQ3FCLEFBQ3JCOzZCQUFBLEFBQUssS0FIc0MsQUFHM0MsQUFBVSxXQUFXLEFBQ3RCO0FBSkQsdUJBSUc7NEJBQ0csT0FBSixBQUFZOzRCQUNSLE9BQVEsS0FEWixBQUNpQjs0QkFDYixRQUFRLEtBRlosQUFFaUIsQUFDakI7QUFDQTsrQkFBTSxTQUFTLE1BQWYsQUFBcUIsR0FBRTtvQ0FBUSxNQUEvQixBQUF1QixBQUFjO0FBTDFCLHlCQUFBLEFBQ1gsQ0FLQSxBQUNBOzRCQUFHLENBQUMsS0FBRCxBQUFNLE1BQU0sRUFBRSxLQUFBLEFBQUssS0FBSyxRQUFRLFFBQVEsTUFBUixBQUFjLElBQUksS0FBQSxBQUFLLEdBQTFELEFBQWUsQUFBOEMsS0FBSSxBQUMvRDtBQUNBO2lDQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7bUNBQU8sS0FBUCxBQUFPLEFBQUssQUFDYjtBQUNEO0FBQ0E7NEJBQUcsUUFBSCxBQUFXLFFBQVMsT0FBTyxLQUFBLEFBQUssR0FBRyxNQUFmLEFBQU8sQUFBYyxBQUN6Qzs0QkFBRyxRQUFILEFBQVcsVUFBUyxPQUFPLEtBQUEsQUFBSyxHQUFHLE1BQWYsQUFBTyxBQUFjLEFBQ3pDOytCQUFPLEtBQUEsQUFBSyxHQUFHLENBQUMsTUFBRCxBQUFPLEdBQUcsTUFBekIsQUFBTyxBQUFRLEFBQWdCLEFBQ2hDO0FBcEJELHVCQW9CRyxTQUFBLEFBQVMsWUFwQlosQUFvQndCLFVBQVcsQ0FwQm5DLEFBb0JvQyxRQXBCcEMsQUFvQjRDLEFBRTVDOztBQUNBOytCQUFBLEFBQVcsQUFDWjtBQW5ISCxBQUFpQjtBQUFBLEFBQ2Y7Ozs7QUMxQkY7O0FBQ0EsZ0JBQUksVUFBVSxRQUFkLEFBQWMsQUFBUTtnQkFDbEIsT0FBVSxRQURkLEFBQ2MsQUFBUTtBQUN0QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQUssQUFDN0I7dUJBQU8sU0FBQSxBQUFTLFNBQVEsQUFDdEI7d0JBQUcsUUFBQSxBQUFRLFNBQVgsQUFBb0IsTUFBSyxNQUFNLFVBQVUsT0FBaEIsQUFBTSxBQUFpQixBQUNoRDsyQkFBTyxLQUFQLEFBQU8sQUFBSyxBQUNiO0FBSEQsQUFJRDtBQUxEOztBQ0hBOztBQUNBLGdCQUFJLFNBQWlCLFFBQXJCLEFBQXFCLEFBQVE7Z0JBQ3pCLFVBQWlCLFFBRHJCLEFBQ3FCLEFBQVE7Z0JBQ3pCLE9BQWlCLFFBRnJCLEFBRXFCLEFBQVE7Z0JBQ3pCLFFBQWlCLFFBSHJCLEFBR3FCLEFBQVE7Z0JBQ3pCLE9BQWlCLFFBSnJCLEFBSXFCLEFBQVE7Z0JBQ3pCLGNBQWlCLFFBTHJCLEFBS3FCLEFBQVE7Z0JBQ3pCLFFBQWlCLFFBTnJCLEFBTXFCLEFBQVE7Z0JBQ3pCLGFBQWlCLFFBUHJCLEFBT3FCLEFBQVE7Z0JBQ3pCLFdBQWlCLFFBUnJCLEFBUXFCLEFBQVE7Z0JBQ3pCLGlCQUFpQixRQVRyQixBQVNxQixBQUFRO2dCQUN6QixLQUFpQixRQUFBLEFBQVEsZ0JBVjdCLEFBVTZDO2dCQUN6QyxPQUFpQixRQUFBLEFBQVEsb0JBWDdCLEFBV3FCLEFBQTRCO2dCQUM3QyxjQUFpQixRQVpyQixBQVlxQixBQUFROztBQUU3QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQVQsQUFBZSxTQUFmLEFBQXdCLFNBQXhCLEFBQWlDLFFBQWpDLEFBQXlDLFFBQXpDLEFBQWlELFNBQVEsQUFDeEU7b0JBQUksT0FBUSxPQUFaLEFBQVksQUFBTztvQkFDZixJQURKLEFBQ1k7b0JBQ1IsUUFBUSxTQUFBLEFBQVMsUUFGckIsQUFFNkI7b0JBQ3pCLFFBQVEsS0FBSyxFQUhqQixBQUdtQjtvQkFDZixJQUpKLEFBSVksQUFDWjtvQkFBRyxDQUFBLEFBQUMsZUFBZSxPQUFBLEFBQU8sS0FBdkIsQUFBNEIsZ0JBQWdCLFdBQVcsTUFBQSxBQUFNLFdBQVcsT0FBTyxZQUFVLEFBQzFGO3dCQUFBLEFBQUksSUFBSixBQUFRLFVBQVIsQUFBa0IsQUFDbkI7QUFGRCxBQUE2QyxBQUErQixpQkFBQSxDQUEvQixHQUV6QyxBQUNGO0FBQ0E7d0JBQUksT0FBQSxBQUFPLGVBQVAsQUFBc0IsU0FBdEIsQUFBK0IsTUFBL0IsQUFBcUMsUUFBekMsQUFBSSxBQUE2QyxBQUNqRDtnQ0FBWSxFQUFaLEFBQWMsV0FBZCxBQUF5QixBQUN6Qjt5QkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNiO0FBUEQsdUJBT08sQUFDTDtnQ0FBWSxVQUFBLEFBQVMsUUFBVCxBQUFpQixVQUFTLEFBQ3BDO21DQUFBLEFBQVcsUUFBWCxBQUFtQixHQUFuQixBQUFzQixNQUF0QixBQUE0QixBQUM1QjsrQkFBQSxBQUFPLEtBQUssSUFBWixBQUFZLEFBQUksQUFDaEI7NEJBQUcsWUFBSCxBQUFlLFdBQVUsTUFBQSxBQUFNLFVBQU4sQUFBZ0IsUUFBUSxPQUF4QixBQUF3QixBQUFPLFFBQS9CLEFBQXVDLEFBQ2pFO0FBSkQsQUFBSSxBQUtKLHFCQUxJO3lCQUtDLGtFQUFBLEFBQWtFLE1BQXZFLEFBQUssQUFBd0UsTUFBSyxVQUFBLEFBQVMsS0FBSSxBQUM3Rjs0QkFBSSxXQUFXLE9BQUEsQUFBTyxTQUFTLE9BQS9CLEFBQXNDLEFBQ3RDOzRCQUFHLE9BQUEsQUFBTyxTQUFTLEVBQUUsV0FBVyxPQUFoQyxBQUFtQixBQUFvQixlQUFjLEVBQUwsQUFBTyxXQUFQLEFBQWtCLEtBQUssVUFBQSxBQUFTLEdBQVQsQUFBWSxHQUFFLEFBQ25GO3VDQUFBLEFBQVcsTUFBWCxBQUFpQixHQUFqQixBQUFvQixBQUNwQjtnQ0FBRyxDQUFBLEFBQUMsWUFBRCxBQUFhLFdBQVcsQ0FBQyxTQUE1QixBQUE0QixBQUFTLElBQUcsT0FBTyxPQUFBLEFBQU8sUUFBUCxBQUFlLFlBQXRCLEFBQWtDLEFBQzFFO2dDQUFJLFNBQVMsS0FBQSxBQUFLLEdBQUwsQUFBUSxLQUFLLE1BQUEsQUFBTSxJQUFOLEFBQVUsSUFBdkIsQUFBMkIsR0FBeEMsQUFBYSxBQUE4QixBQUMzQzttQ0FBTyxXQUFBLEFBQVcsT0FBbEIsQUFBeUIsQUFDMUI7QUFMK0MsQUFNakQseUJBTmlEO0FBRmxELEFBU0E7d0JBQUcsVUFBSCxBQUFhLFVBQVMsRUFBSCxBQUFLLFdBQUwsQUFBZ0I7NkJBQzVCLGVBQVUsQUFDYjttQ0FBTyxLQUFBLEFBQUssR0FBWixBQUFlLEFBQ2hCO0FBSGdCLEFBQXdCLEFBSzVDO0FBTDRDLEFBQ3pDLHFCQURpQjtBQU9yQjs7K0JBQUEsQUFBZSxHQUFmLEFBQWtCLEFBRWxCOztrQkFBQSxBQUFFLFFBQUYsQUFBVSxBQUNWO3dCQUFRLFFBQUEsQUFBUSxJQUFJLFFBQVosQUFBb0IsSUFBSSxRQUFoQyxBQUF3QyxHQUF4QyxBQUEyQyxBQUUzQzs7b0JBQUcsQ0FBSCxBQUFJLFNBQVEsT0FBQSxBQUFPLFVBQVAsQUFBaUIsR0FBakIsQUFBb0IsTUFBcEIsQUFBMEIsQUFFdEM7O3VCQUFBLEFBQU8sQUFDUjtBQTNDRDs7OztBQ2ZBLGdCQUFJLE9BQU8sT0FBQSxBQUFPLFVBQVUsRUFBQyxTQUE3QixBQUE0QixBQUFVO0FBQ3RDLGdCQUFHLE9BQUEsQUFBTyxPQUFWLEFBQWlCLFVBQVMsTSxBQUFBLEFBQU0sTUFBTTs7OztBQ0R0Qzs7QUFDQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsTUFBYixBQUFtQixRQUFPLEFBQ3pDOzBCQUFBLEFBQVUsQUFDVjtvQkFBRyxTQUFILEFBQVksV0FBVSxPQUFBLEFBQU8sQUFDN0I7d0JBQUEsQUFBTyxBQUNMO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxVQUFBLEFBQVMsR0FBRSxBQUN4QjttQ0FBTyxHQUFBLEFBQUcsS0FBSCxBQUFRLE1BQWYsQUFBTyxBQUFjLEFBQ3RCO0FBRk8sQUFHUjt5QkFBQSxBQUFLLEFBQUc7K0JBQU8sVUFBQSxBQUFTLEdBQVQsQUFBWSxHQUFFLEFBQzNCO21DQUFPLEdBQUEsQUFBRyxLQUFILEFBQVEsTUFBUixBQUFjLEdBQXJCLEFBQU8sQUFBaUIsQUFDekI7QUFGTyxBQUdSO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxVQUFBLEFBQVMsR0FBVCxBQUFZLEdBQVosQUFBZSxHQUFFLEFBQzlCO21DQUFPLEdBQUEsQUFBRyxLQUFILEFBQVEsTUFBUixBQUFjLEdBQWQsQUFBaUIsR0FBeEIsQUFBTyxBQUFvQixBQUM1QjtBQVRILEFBT1UsQUFJVjs7dUJBQU8sWUFBUyxhQUFjLEFBQzVCOzJCQUFPLEdBQUEsQUFBRyxNQUFILEFBQVMsTUFBaEIsQUFBTyxBQUFlLEFBQ3ZCO0FBRkQsQUFHRDtBQWpCRDs7OztBQ0ZBOztBQUNBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjtvQkFBRyxNQUFILEFBQVMsV0FBVSxNQUFNLFVBQVUsMkJBQWhCLEFBQU0sQUFBcUMsQUFDOUQ7dUJBQUEsQUFBTyxBQUNSO0FBSEQ7Ozs7QUNEQTs7QUFDQSxtQkFBQSxBQUFPLFVBQVUsU0FBQyxBQUFRLFlBQVksWUFBVSxBQUM5Qzt1QkFBTyxPQUFBLEFBQU8sZUFBUCxBQUFzQixJQUF0QixBQUEwQixPQUFNLEtBQUssZUFBVSxBQUFFOytCQUFBLEFBQU8sQUFBSTtBQUE1RCxBQUErQixxQkFBQSxJQUEvQixBQUErRCxLQUF0RSxBQUEyRSxBQUM1RTtBQUZELEFBQWtCLGFBQUE7Ozs7QUNEbEIsZ0JBQUksV0FBVyxRQUFmLEFBQWUsQUFBUTtnQkFDbkIsV0FBVyxRQUFBLEFBQVEsYUFBYTtBQURwQyxBQUVFOzs7Z0JBQ0UsS0FBSyxTQUFBLEFBQVMsYUFBYSxTQUFTLFNBSHhDLEFBRytCLEFBQWtCO0FBQ2pELG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjt1QkFBTyxLQUFLLFNBQUEsQUFBUyxjQUFkLEFBQUssQUFBdUIsTUFBbkMsQUFBeUMsQUFDMUM7QUFGRDs7OztBQ0pBOztBQUNBLG1CQUFBLEFBQU8sVUFBVSxBQUNmLGdHQURlLEFBRWYsTUFGRixBQUFpQixBQUVUOzs7O0FDSFIsZ0JBQUksU0FBWSxRQUFoQixBQUFnQixBQUFRO2dCQUNwQixPQUFZLFFBRGhCLEFBQ2dCLEFBQVE7Z0JBQ3BCLE1BQVksUUFGaEIsQUFFZ0IsQUFBUTtnQkFDcEIsT0FBWSxRQUhoQixBQUdnQixBQUFRO2dCQUNwQixZQUpKLEFBSWdCOztBQUVoQixnQkFBSSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQVMsTUFBVCxBQUFlLE1BQWYsQUFBcUIsUUFBTyxBQUN4QztvQkFBSSxZQUFZLE9BQU8sUUFBdkIsQUFBK0I7b0JBQzNCLFlBQVksT0FBTyxRQUR2QixBQUMrQjtvQkFDM0IsWUFBWSxPQUFPLFFBRnZCLEFBRStCO29CQUMzQixXQUFZLE9BQU8sUUFIdkIsQUFHK0I7b0JBQzNCLFVBQVksT0FBTyxRQUp2QixBQUkrQjtvQkFDM0IsVUFBWSxPQUFPLFFBTHZCLEFBSytCO29CQUMzQixVQUFZLFlBQUEsQUFBWSxPQUFPLEtBQUEsQUFBSyxVQUFVLEtBQUEsQUFBSyxRQU52RCxBQU1tQyxBQUE0QjtvQkFDM0QsV0FBWSxRQVBoQixBQU9nQixBQUFRO29CQUNwQixTQUFZLFlBQUEsQUFBWSxTQUFTLFlBQVksT0FBWixBQUFZLEFBQU8sUUFBUSxDQUFDLE9BQUEsQUFBTyxTQUFSLEFBQWlCLElBUmpGLEFBUWdFLEFBQXFCO29CQVJyRixBQVNJO29CQVRKLEFBU1M7b0JBVFQsQUFTYyxBQUNkO29CQUFBLEFBQUcsV0FBVSxTQUFBLEFBQVMsQUFDdEI7cUJBQUEsQUFBSSxPQUFKLEFBQVcsUUFBTyxBQUNoQjtBQUNBOzBCQUFNLENBQUEsQUFBQyxhQUFELEFBQWMsVUFBVSxPQUFBLEFBQU8sU0FBckMsQUFBOEMsQUFDOUM7d0JBQUcsT0FBTyxPQUFWLEFBQWlCLFNBQVEsQUFDekI7QUFDQTswQkFBTSxNQUFNLE9BQU4sQUFBTSxBQUFPLE9BQU8sT0FBMUIsQUFBMEIsQUFBTyxBQUNqQztBQUNBOzRCQUFBLEFBQVEsb0JBQW9CLE9BQU8sT0FBUCxBQUFPLEFBQU8sUUFBM0IsQUFBbUMsYUFBYSxPQUFBLEFBQU8sQUFDdEU7QUFEZTtBQUFBLGlDQUViLEFBQVcsVUFBTSxBQUFJLEtBQUssQUFDNUI7QUFERSxBQUFpQjtBQUFBLHFCQUFqQixHQUVBLFdBQVcsT0FBQSxBQUFPLFFBQWxCLEFBQTBCLGdCQUFPLEFBQVMsR0FBRSxBQUM1Qzs0QkFBSSxJQUFJLFNBQUosQUFBSSxFQUFBLEFBQVMsR0FBVCxBQUFZLEdBQVosQUFBZSxHQUFFLEFBQ3ZCO2dDQUFHLGdCQUFILEFBQW1CLEdBQUUsQUFDbkI7d0NBQU8sVUFBUCxBQUFpQixBQUNmO3lDQUFBLEFBQUssQUFBRzsrQ0FBTyxJQUFQLEFBQU8sQUFBSSxBQUNuQjt5Q0FBQSxBQUFLLEFBQUc7K0NBQU8sSUFBQSxBQUFJLEVBQVgsQUFBTyxBQUFNLEFBQ3JCO3lDQUFBLEFBQUssQUFBRzsrQ0FBTyxJQUFBLEFBQUksRUFBSixBQUFNLEdBSHZCLEFBR1UsQUFBTyxBQUFTO2lDQUN4QixPQUFPLElBQUEsQUFBSSxFQUFKLEFBQU0sR0FBTixBQUFTLEdBQWhCLEFBQU8sQUFBWSxBQUN0QjtBQUFDLG9DQUFPLEVBQUEsQUFBRSxNQUFGLEFBQVEsTUFBZixBQUFPLEFBQWMsQUFDeEI7QUFSRCxBQVNBOzBCQUFBLEFBQUUsYUFBYSxFQUFmLEFBQWUsQUFBRSxBQUNqQjsrQkFBQSxBQUFPLEFBQ1Q7QUFDQztBQWJpQyxxQkFBQyxDQUFqQyxBQUFnQyxBQWEvQixPQUFPLFlBQVksT0FBQSxBQUFPLE9BQW5CLEFBQTBCLGFBQWEsSUFBSSxTQUFKLEFBQWEsTUFBcEQsQUFBdUMsQUFBbUIsT0FqQnBFLEFBaUIyRSxBQUMzRTtBQUNBO3dCQUFBLEFBQUcsVUFBUyxBQUNWO3lCQUFDLFFBQUEsQUFBUSxZQUFZLFFBQUEsQUFBUSxVQUE3QixBQUFDLEFBQXNDLEtBQXZDLEFBQTRDLE9BQTVDLEFBQW1ELEFBQ25EO0FBQ0E7NEJBQUcsT0FBTyxRQUFQLEFBQWUsS0FBZixBQUFvQixZQUFZLENBQUMsU0FBcEMsQUFBb0MsQUFBUyxNQUFLLEtBQUEsQUFBSyxVQUFMLEFBQWUsS0FBZixBQUFvQixBQUN2RTtBQUNGO0FBQ0Y7QUE1Q0Q7QUE2Q0E7QUFDQSxvQkFBQSxBQUFRLEksQUFBUixBQUFZLEdBQUs7QUFDakIsb0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxHQUFLO0FBQ2pCLG9CQUFBLEFBQVEsSSxBQUFSLEFBQVksR0FBSztBQUNqQixvQkFBQSxBQUFRLEksQUFBUixBQUFZLEdBQUs7QUFDakIsb0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxJQUFLO0FBQ2pCLG9CQUFBLEFBQVEsSSxBQUFSLEFBQVksSUFBSztBQUNqQixvQkFBQSxBQUFRLEksQUFBUixBQUFZLElBQUs7QUFDakIsb0JBQUEsQUFBUSxJLEFBQVIsQUFBWSxLQUFLO0FBQ2pCLG1CQUFBLEFBQU8sVUFBUCxBQUFpQjs7OztBQzVEakIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxNQUFLLEFBQzdCO29CQUFJLEFBQ0Y7MkJBQU8sQ0FBQyxDQUFSLEFBQVMsQUFDVjtBQUZELGtCQUVFLE9BQUEsQUFBTSxHQUFFLEFBQ1I7MkJBQUEsQUFBTyxBQUNSO0FBQ0Y7QUFORDs7OztBQ0FBLGdCQUFJLE1BQWMsUUFBbEIsQUFBa0IsQUFBUTtnQkFDdEIsT0FBYyxRQURsQixBQUNrQixBQUFRO2dCQUN0QixjQUFjLFFBRmxCLEFBRWtCLEFBQVE7Z0JBQ3RCLFdBQWMsUUFIbEIsQUFHa0IsQUFBUTtnQkFDdEIsV0FBYyxRQUpsQixBQUlrQixBQUFRO2dCQUN0QixZQUFjLFFBTGxCLEFBS2tCLEFBQVE7Z0JBQ3RCLFFBTkosQUFNa0I7Z0JBQ2QsU0FQSixBQU9rQjtBQUNsQixnQkFBSSxXQUFVLE9BQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxVQUFULEFBQW1CLFNBQW5CLEFBQTRCLElBQTVCLEFBQWdDLE1BQWhDLEFBQXNDLFVBQVMsQUFDNUU7b0JBQUksb0JBQW9CLFlBQVUsQUFBRTsyQkFBQSxBQUFPLEFBQVc7QUFBekMsaUJBQUEsR0FBNEMsVUFBekQsQUFBeUQsQUFBVTtvQkFDL0QsSUFBUyxJQUFBLEFBQUksSUFBSixBQUFRLE1BQU0sVUFBQSxBQUFVLElBRHJDLEFBQ2EsQUFBNEI7b0JBQ3JDLFFBRkosQUFFYTtvQkFGYixBQUdJO29CQUhKLEFBR1k7b0JBSFosQUFHa0I7b0JBSGxCLEFBRzRCLEFBQzVCO29CQUFHLE9BQUEsQUFBTyxVQUFWLEFBQW9CLFlBQVcsTUFBTSxVQUFVLFdBQWhCLEFBQU0sQUFBcUIsQUFDMUQ7QUFDQTtvQkFBRyxZQUFILEFBQUcsQUFBWSxTQUFRLEtBQUksU0FBUyxTQUFTLFNBQXRCLEFBQWEsQUFBa0IsU0FBUyxTQUF4QyxBQUFpRCxPQUFqRCxBQUF3RCxTQUFRLEFBQ3JGOzZCQUFTLFVBQVUsRUFBRSxTQUFTLE9BQU8sU0FBaEIsQUFBZ0IsQUFBUyxRQUEzQixBQUFFLEFBQWlDLElBQUksS0FBakQsQUFBVSxBQUF1QyxBQUFLLE1BQU0sRUFBRSxTQUF2RSxBQUFxRSxBQUFFLEFBQVMsQUFDaEY7d0JBQUcsV0FBQSxBQUFXLFNBQVMsV0FBdkIsQUFBa0MsUUFBTyxPQUFBLEFBQU8sQUFDakQ7QUFIRCx1QkFHTyxLQUFJLFdBQVcsT0FBQSxBQUFPLEtBQXRCLEFBQWUsQUFBWSxXQUFXLENBQUMsQ0FBQyxPQUFPLFNBQVIsQUFBUSxBQUFTLFFBQXhELEFBQWdFLE9BQU8sQUFDNUU7NkJBQVMsS0FBQSxBQUFLLFVBQUwsQUFBZSxHQUFHLEtBQWxCLEFBQXVCLE9BQWhDLEFBQVMsQUFBOEIsQUFDdkM7d0JBQUcsV0FBQSxBQUFXLFNBQVMsV0FBdkIsQUFBa0MsUUFBTyxPQUFBLEFBQU8sQUFDakQ7QUFDRjtBQWREO0FBZUEscUJBQUEsQUFBUSxRQUFSLEFBQWlCO0FBQ2pCLHFCQUFBLEFBQVEsU0FBUixBQUFpQjs7OztBQ3hCakI7O0FBQ0EsZ0JBQUksU0FBUyxPQUFBLEFBQU8sVUFBVSxPQUFBLEFBQU8sVUFBUCxBQUFpQixlQUFlLE9BQUEsQUFBTyxRQUF2QyxBQUErQyxPQUEvQyxBQUMxQixTQUFTLE9BQUEsQUFBTyxRQUFQLEFBQWUsZUFBZSxLQUFBLEFBQUssUUFBbkMsQUFBMkMsT0FBM0MsQUFBa0QsT0FBTyxTQUR0RSxBQUNzRSxBQUFTO0FBQy9FLGdCQUFHLE9BQUEsQUFBTyxPQUFWLEFBQWlCLFVBQVMsTSxBQUFBLEFBQU0sUUFBUTs7OztBQ0h4QyxnQkFBSSxpQkFBaUIsR0FBckIsQUFBd0I7QUFDeEIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsS0FBSSxBQUNoQzt1QkFBTyxlQUFBLEFBQWUsS0FBZixBQUFvQixJQUEzQixBQUFPLEFBQXdCLEFBQ2hDO0FBRkQ7Ozs7QUNEQSxnQkFBSSxLQUFhLFFBQWpCLEFBQWlCLEFBQVE7Z0JBQ3JCLGFBQWEsUUFEakIsQUFDaUIsQUFBUTtBQUN6QixtQkFBQSxBQUFPLGtCQUFVLEFBQVEsb0JBQW9CLFVBQUEsQUFBUyxRQUFULEFBQWlCLEtBQWpCLEFBQXNCLE9BQU0sQUFDdkU7dUJBQU8sR0FBQSxBQUFHLEVBQUgsQUFBSyxRQUFMLEFBQWEsS0FBSyxXQUFBLEFBQVcsR0FBcEMsQUFBTyxBQUFrQixBQUFjLEFBQ3hDO0FBRmdCLGFBQUEsR0FFYixVQUFBLEFBQVMsUUFBVCxBQUFpQixLQUFqQixBQUFzQixPQUFNLEFBQzlCO3VCQUFBLEFBQU8sT0FBUCxBQUFjLEFBQ2Q7dUJBQUEsQUFBTyxBQUNSO0FBTEQ7Ozs7QUNGQSxtQkFBQSxBQUFPLFVBQVUsUUFBQSxBQUFRLGFBQVIsQUFBcUIsWUFBWSxTQUFsRCxBQUEyRDs7OztBQ0EzRCxtQkFBQSxBQUFPLFVBQVUsQ0FBQyxRQUFELEFBQUMsQUFBUSxxQkFBcUIsU0FBQyxBQUFRLFlBQVksWUFBVSxBQUM1RTt1QkFBTyxPQUFBLEFBQU8sZUFBZSxRQUFBLEFBQVEsaUJBQTlCLEFBQXNCLEFBQXlCLFFBQS9DLEFBQXVELE9BQU0sS0FBSyxlQUFVLEFBQUU7K0JBQUEsQUFBTyxBQUFJO0FBQXpGLEFBQTRELHFCQUFBLElBQTVELEFBQTRGLEtBQW5HLEFBQXdHLEFBQ3pHO0FBRkQsQUFBZ0QsYUFBQTs7OztBQ0FoRDs7QUFDQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQVQsQUFBYSxNQUFiLEFBQW1CLE1BQUssQUFDdkM7b0JBQUksS0FBSyxTQUFULEFBQWtCLEFBQ2xCO3dCQUFPLEtBQVAsQUFBWSxBQUNWO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxLQUFBLEFBQUssT0FDQSxHQUFBLEFBQUcsS0FEZixBQUNZLEFBQVEsQUFDNUI7eUJBQUEsQUFBSyxBQUFHOytCQUFPLEtBQUssR0FBRyxLQUFSLEFBQUssQUFBRyxBQUFLLE1BQ1IsR0FBQSxBQUFHLEtBQUgsQUFBUSxNQUFNLEtBRDFCLEFBQ1ksQUFBYyxBQUFLLEFBQ3ZDO3lCQUFBLEFBQUssQUFBRzsrQkFBTyxLQUFLLEdBQUcsS0FBSCxBQUFHLEFBQUssSUFBSSxLQUFqQixBQUFLLEFBQVksQUFBSyxNQUNqQixHQUFBLEFBQUcsS0FBSCxBQUFRLE1BQU0sS0FBZCxBQUFjLEFBQUssSUFBSSxLQURuQyxBQUNZLEFBQXVCLEFBQUssQUFDaEQ7eUJBQUEsQUFBSyxBQUFHOytCQUFPLEtBQUssR0FBRyxLQUFILEFBQUcsQUFBSyxJQUFJLEtBQVosQUFBWSxBQUFLLElBQUksS0FBMUIsQUFBSyxBQUFxQixBQUFLLE1BQzFCLEdBQUEsQUFBRyxLQUFILEFBQVEsTUFBTSxLQUFkLEFBQWMsQUFBSyxJQUFJLEtBQXZCLEFBQXVCLEFBQUssSUFBSSxLQUQ1QyxBQUNZLEFBQWdDLEFBQUssQUFDekQ7eUJBQUEsQUFBSyxBQUFHOytCQUFPLEtBQUssR0FBRyxLQUFILEFBQUcsQUFBSyxJQUFJLEtBQVosQUFBWSxBQUFLLElBQUksS0FBckIsQUFBcUIsQUFBSyxJQUFJLEtBQW5DLEFBQUssQUFBOEIsQUFBSyxNQUNuQyxHQUFBLEFBQUcsS0FBSCxBQUFRLE1BQU0sS0FBZCxBQUFjLEFBQUssSUFBSSxLQUF2QixBQUF1QixBQUFLLElBQUksS0FBaEMsQUFBZ0MsQUFBSyxJQUFJLEtBVi9ELEFBU1UsQUFDWSxBQUF5QyxBQUFLO2lCQUNsRSxPQUFvQixHQUFBLEFBQUcsTUFBSCxBQUFTLE1BQTdCLEFBQW9CLEFBQWUsQUFDdEM7QUFkRDs7OztBQ0RBOztBQUNBLGdCQUFJLE1BQU0sUUFBVixBQUFVLEFBQVE7QUFDbEIsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxLQUFQLEFBQVkscUJBQVosQUFBaUMsS0FBakMsQUFBc0MsU0FBUyxVQUFBLEFBQVMsSUFBRyxBQUMxRTt1QkFBTyxJQUFBLEFBQUksT0FBSixBQUFXLFdBQVcsR0FBQSxBQUFHLE1BQXpCLEFBQXNCLEFBQVMsTUFBTSxPQUE1QyxBQUE0QyxBQUFPLEFBQ3BEO0FBRkQ7Ozs7QUNGQTs7QUFDQSxnQkFBSSxZQUFhLFFBQWpCLEFBQWlCLEFBQVE7Z0JBQ3JCLFdBQWEsUUFBQSxBQUFRLFVBRHpCLEFBQ2lCLEFBQWtCO2dCQUMvQixhQUFhLE1BRmpCLEFBRXVCOztBQUV2QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7dUJBQU8sT0FBQSxBQUFPLGNBQWMsVUFBQSxBQUFVLFVBQVYsQUFBb0IsTUFBTSxXQUFBLEFBQVcsY0FBakUsQUFBTyxBQUF3RSxBQUNoRjtBQUZEOzs7O0FDTEE7O0FBQ0EsZ0JBQUksTUFBTSxRQUFWLEFBQVUsQUFBUTtBQUNsQixtQkFBQSxBQUFPLFVBQVUsTUFBQSxBQUFNLFdBQVcsU0FBQSxBQUFTLFFBQVQsQUFBaUIsS0FBSSxBQUNyRDt1QkFBTyxJQUFBLEFBQUksUUFBWCxBQUFtQixBQUNwQjtBQUZEOzs7Ozs7Ozs7O0FDRkEsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO3VCQUFPLFFBQUEsQUFBTywyQ0FBUCxBQUFPLFNBQVAsQUFBYyxXQUFXLE9BQXpCLEFBQWdDLE9BQU8sT0FBQSxBQUFPLE9BQXJELEFBQTRELEFBQzdEO0FBRkQ7Ozs7QUNBQTs7QUFDQSxnQkFBSSxXQUFXLFFBQWYsQUFBZSxBQUFRO0FBQ3ZCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsVUFBVCxBQUFtQixJQUFuQixBQUF1QixPQUF2QixBQUE4QixTQUFRLEFBQ3JEO29CQUFJLEFBQ0Y7MkJBQU8sVUFBVSxHQUFHLFNBQUEsQUFBUyxPQUFaLEFBQUcsQUFBZ0IsSUFBSSxNQUFqQyxBQUFVLEFBQXVCLEFBQU0sTUFBTSxHQUFwRCxBQUFvRCxBQUFHLEFBQ3pEO0FBQ0M7QUFIRCxrQkFHRSxPQUFBLEFBQU0sR0FBRSxBQUNSO3dCQUFJLE1BQU0sU0FBVixBQUFVLEFBQVMsQUFDbkI7d0JBQUcsUUFBSCxBQUFXLFdBQVUsU0FBUyxJQUFBLEFBQUksS0FBYixBQUFTLEFBQVMsQUFDdkM7MEJBQUEsQUFBTSxBQUNQO0FBQ0Y7QUFURDs7QUNGQTs7QUFDQSxnQkFBSSxTQUFpQixRQUFyQixBQUFxQixBQUFRO2dCQUN6QixhQUFpQixRQURyQixBQUNxQixBQUFRO2dCQUN6QixpQkFBaUIsUUFGckIsQUFFcUIsQUFBUTtnQkFDekIsb0JBSEosQUFHd0I7O0FBRXhCO0FBQ0Esb0JBQUEsQUFBUSxXQUFSLEFBQW1CLG1CQUFtQixRQUFBLEFBQVEsVUFBOUMsQUFBc0MsQUFBa0IsYUFBYSxZQUFVLEFBQUU7dUJBQUEsQUFBTyxBQUFPO0FBQS9GOztBQUVBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsYUFBVCxBQUFzQixNQUF0QixBQUE0QixNQUFLLEFBQ2hEOzRCQUFBLEFBQVksWUFBWSxPQUFBLEFBQU8sbUJBQW1CLEVBQUMsTUFBTSxXQUFBLEFBQVcsR0FBcEUsQUFBd0IsQUFBMEIsQUFBTyxBQUFjLEFBQ3ZFOytCQUFBLEFBQWUsYUFBYSxPQUE1QixBQUFtQyxBQUNwQztBQUhEOztBQ1RBOztBQUNBLGdCQUFJLFVBQWlCLFFBQXJCLEFBQXFCLEFBQVE7Z0JBQ3pCLFVBQWlCLFFBRHJCLEFBQ3FCLEFBQVE7Z0JBQ3pCLFdBQWlCLFFBRnJCLEFBRXFCLEFBQVE7Z0JBQ3pCLE9BQWlCLFFBSHJCLEFBR3FCLEFBQVE7Z0JBQ3pCLE1BQWlCLFFBSnJCLEFBSXFCLEFBQVE7Z0JBQ3pCLFlBQWlCLFFBTHJCLEFBS3FCLEFBQVE7Z0JBQ3pCLGNBQWlCLFFBTnJCLEFBTXFCLEFBQVE7Z0JBQ3pCLGlCQUFpQixRQVByQixBQU9xQixBQUFRO2dCQUN6QixpQkFBaUIsUUFSckIsQUFRcUIsQUFBUTtnQkFDekIsV0FBaUIsUUFBQSxBQUFRLFVBVDdCLEFBU3FCLEFBQWtCO2dCQUNuQyxRQUFpQixFQUFFLEdBQUEsQUFBRyxRQUFRLFVBQVUsR0FWNUMsQUFVcUIsQUFBdUIsQUFBRyxRQVYvQyxBQVV1RDs7O2dCQUNuRCxjQVhKLEFBV3FCO2dCQUNqQixPQVpKLEFBWXFCO2dCQUNqQixTQWJKLEFBYXFCOztBQUVyQixnQkFBSSxhQUFhLFNBQWIsQUFBYSxhQUFVLEFBQUU7dUJBQUEsQUFBTyxBQUFPO0FBQTNDOztBQUVBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsTUFBVCxBQUFlLE1BQWYsQUFBcUIsYUFBckIsQUFBa0MsTUFBbEMsQUFBd0MsU0FBeEMsQUFBaUQsUUFBakQsQUFBeUQsUUFBTyxBQUMvRTs0QkFBQSxBQUFZLGFBQVosQUFBeUIsTUFBekIsQUFBK0IsQUFDL0I7b0JBQUksWUFBWSxTQUFaLEFBQVksVUFBQSxBQUFTLE1BQUssQUFDNUI7d0JBQUcsQ0FBQSxBQUFDLFNBQVMsUUFBYixBQUFxQixPQUFNLE9BQU8sTUFBUCxBQUFPLEFBQU0sQUFDeEM7NEJBQUEsQUFBTyxBQUNMOzZCQUFBLEFBQUssQUFBTTttQ0FBTyxTQUFBLEFBQVMsT0FBTSxBQUFFO3VDQUFPLElBQUEsQUFBSSxZQUFKLEFBQWdCLE1BQXZCLEFBQU8sQUFBc0IsQUFBUTtBQUE3RCxBQUNYOzZCQUFBLEFBQUssQUFBUTttQ0FBTyxTQUFBLEFBQVMsU0FBUSxBQUFFO3VDQUFPLElBQUEsQUFBSSxZQUFKLEFBQWdCLE1BQXZCLEFBQU8sQUFBc0IsQUFBUTtBQUY5RSxBQUVlO3FCQUNiLE9BQU8sU0FBQSxBQUFTLFVBQVMsQUFBRTsrQkFBTyxJQUFBLEFBQUksWUFBSixBQUFnQixNQUF2QixBQUFPLEFBQXNCLEFBQVE7QUFBaEUsQUFDSDtBQU5ELEFBT0E7b0JBQUksTUFBYSxPQUFqQixBQUF3QjtvQkFDcEIsYUFBYSxXQURqQixBQUM0QjtvQkFDeEIsYUFGSixBQUVpQjtvQkFDYixRQUFhLEtBSGpCLEFBR3NCO29CQUNsQixVQUFhLE1BQUEsQUFBTSxhQUFhLE1BQW5CLEFBQW1CLEFBQU0sZ0JBQWdCLFdBQVcsTUFKckUsQUFJcUUsQUFBTTtvQkFDdkUsV0FBYSxXQUFXLFVBTDVCLEFBSzRCLEFBQVU7b0JBQ2xDLFdBQWEsVUFBVSxDQUFBLEFBQUMsYUFBRCxBQUFjLFdBQVcsVUFBbkMsQUFBbUMsQUFBVSxhQU45RCxBQU0yRTtvQkFDdkUsYUFBYSxRQUFBLEFBQVEsVUFBVSxNQUFBLEFBQU0sV0FBeEIsQUFBbUMsVUFQcEQsQUFPOEQ7b0JBUDlELEFBUUk7b0JBUkosQUFRYTtvQkFSYixBQVFrQixBQUNsQjtBQUNBO29CQUFBLEFBQUcsWUFBVyxBQUNaO3dDQUFvQixlQUFlLFdBQUEsQUFBVyxLQUFLLElBQW5ELEFBQW9CLEFBQWUsQUFBZ0IsQUFBSSxBQUN2RDt3QkFBRyxzQkFBc0IsT0FBekIsQUFBZ0MsV0FBVSxBQUN4QztBQUNBO3VDQUFBLEFBQWUsbUJBQWYsQUFBa0MsS0FBbEMsQUFBdUMsQUFDdkM7QUFDQTs0QkFBRyxDQUFBLEFBQUMsV0FBVyxDQUFDLElBQUEsQUFBSSxtQkFBcEIsQUFBZ0IsQUFBdUIsV0FBVSxLQUFBLEFBQUssbUJBQUwsQUFBd0IsVUFBeEIsQUFBa0MsQUFDcEY7QUFDRjtBQUNEO0FBQ0E7b0JBQUcsY0FBQSxBQUFjLFdBQVcsUUFBQSxBQUFRLFNBQXBDLEFBQTZDLFFBQU8sQUFDbEQ7aUNBQUEsQUFBYSxBQUNiOytCQUFXLFNBQUEsQUFBUyxTQUFRLEFBQUU7K0JBQU8sUUFBQSxBQUFRLEtBQWYsQUFBTyxBQUFhLEFBQVE7QUFBMUQsQUFDRDtBQUNEO0FBQ0E7b0JBQUcsQ0FBQyxDQUFBLEFBQUMsV0FBRixBQUFhLFlBQVksU0FBQSxBQUFTLGNBQWMsQ0FBQyxNQUFwRCxBQUFHLEFBQWlELEFBQU0sWUFBVyxBQUNuRTt5QkFBQSxBQUFLLE9BQUwsQUFBWSxVQUFaLEFBQXNCLEFBQ3ZCO0FBQ0Q7QUFDQTswQkFBQSxBQUFVLFFBQVYsQUFBa0IsQUFDbEI7MEJBQUEsQUFBVSxPQUFWLEFBQWtCLEFBQ2xCO29CQUFBLEFBQUcsU0FBUSxBQUNUOztnQ0FDVyxhQUFBLEFBQWEsV0FBVyxVQUR6QixBQUN5QixBQUFVLEFBQzNDOzhCQUFTLFNBQUEsQUFBYSxXQUFXLFVBRnpCLEFBRXlCLEFBQVUsQUFDM0M7aUNBSEYsQUFBVSxBQUdDLEFBRVg7QUFMVSxBQUNSO3dCQUlGLEFBQUcsUUFBTyxLQUFBLEFBQUksT0FBSixBQUFXLFNBQVEsQUFDM0I7NEJBQUcsRUFBRSxPQUFMLEFBQUcsQUFBUyxRQUFPLFNBQUEsQUFBUyxPQUFULEFBQWdCLEtBQUssUUFBckIsQUFBcUIsQUFBUSxBQUNqRDtBQUZELDJCQUVPLFFBQVEsUUFBQSxBQUFRLElBQUksUUFBQSxBQUFRLEtBQUssU0FBakMsQUFBb0IsQUFBc0IsYUFBMUMsQUFBdUQsTUFBdkQsQUFBNkQsQUFDckU7QUFDRDt1QkFBQSxBQUFPLEFBQ1I7QUFuREQ7Ozs7QUNsQkEsZ0JBQUksV0FBZSxRQUFBLEFBQVEsVUFBM0IsQUFBbUIsQUFBa0I7Z0JBQ2pDLGVBREosQUFDbUI7O0FBRW5CLGdCQUFJLEFBQ0Y7b0JBQUksUUFBUSxDQUFBLEFBQUMsR0FBYixBQUFZLEFBQUksQUFDaEI7c0JBQUEsQUFBTSxZQUFZLFlBQVUsQUFBRTttQ0FBQSxBQUFlLEFBQU87QUFBcEQsQUFDQTtzQkFBQSxBQUFNLEtBQU4sQUFBVyxPQUFPLFlBQVUsQUFBRTswQkFBQSxBQUFNLEFBQUk7QUFBeEMsQUFDRDtBQUpELGNBSUUsT0FBQSxBQUFNLEdBQUUsQ0FBRSxBQUFhOztBQUV6QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQVQsQUFBZSxhQUFZLEFBQzFDO29CQUFHLENBQUEsQUFBQyxlQUFlLENBQW5CLEFBQW9CLGNBQWEsT0FBQSxBQUFPLEFBQ3hDO29CQUFJLE9BQUosQUFBVyxBQUNYO29CQUFJLEFBQ0Y7d0JBQUksTUFBTyxDQUFYLEFBQVcsQUFBQzt3QkFDUixPQUFPLElBRFgsQUFDVyxBQUFJLEFBQ2Y7eUJBQUEsQUFBSyxPQUFPLFlBQVUsQUFBRTsrQkFBTyxFQUFDLE1BQU0sT0FBZCxBQUFPLEFBQWMsQUFBUTtBQUFyRCxBQUNBO3dCQUFBLEFBQUksWUFBWSxZQUFVLEFBQUU7K0JBQUEsQUFBTyxBQUFPO0FBQTFDLEFBQ0E7eUJBQUEsQUFBSyxBQUNOO0FBTkQsa0JBTUUsT0FBQSxBQUFNLEdBQUUsQ0FBRSxBQUFhLFdBQ3pCO3VCQUFBLEFBQU8sQUFDUjtBQVhEOzs7O0FDVEEsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxNQUFULEFBQWUsT0FBTSxBQUNwQzt1QkFBTyxFQUFDLE9BQUQsQUFBUSxPQUFPLE1BQU0sQ0FBQyxDQUE3QixBQUFPLEFBQXVCLEFBQy9CO0FBRkQ7Ozs7QUNBQSxtQkFBQSxBQUFPLFVBQVAsQUFBaUI7Ozs7QUNBakIsbUJBQUEsQUFBTyxVQUFQLEFBQWlCOzs7Ozs7Ozs7O0FDQWpCLGdCQUFJLE9BQVcsUUFBQSxBQUFRLFVBQXZCLEFBQWUsQUFBa0I7Z0JBQzdCLFdBQVcsUUFEZixBQUNlLEFBQVE7Z0JBQ25CLE1BQVcsUUFGZixBQUVlLEFBQVE7Z0JBQ25CLFVBQVcsUUFBQSxBQUFRLGdCQUh2QixBQUd1QztnQkFDbkMsS0FKSixBQUllO0FBQ2YsZ0JBQUksZUFBZSxPQUFBLEFBQU8sZ0JBQWdCLFlBQVUsQUFDbEQ7dUJBQUEsQUFBTyxBQUNSO0FBRkQ7QUFHQSxnQkFBSSxTQUFTLFNBQUMsQUFBUSxZQUFZLFlBQVUsQUFDMUM7dUJBQU8sYUFBYSxPQUFBLEFBQU8sa0JBQTNCLEFBQU8sQUFBYSxBQUF5QixBQUM5QztBQUZELEFBQWMsYUFBQTtBQUdkLGdCQUFJLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBUyxJQUFHLEFBQ3hCO3dCQUFBLEFBQVEsSUFBUixBQUFZLFFBQU87MkJBQ2QsTUFBTSxFQURlLEFBQ2IsSUFBSSxBQUNmOzJCQUZ3QixBQUVyQixHQUZMLEFBQWtCLEFBQVEsQUFFVCxBQUVsQjtBQUoyQixBQUN4QixxQkFEZ0I7QUFEcEI7QUFNQSxnQkFBSSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQVMsSUFBVCxBQUFhLFFBQU8sQUFDaEM7QUFDQTtvQkFBRyxDQUFDLFNBQUosQUFBSSxBQUFTLEtBQUksT0FBTyxRQUFBLEFBQU8sMkNBQVAsQUFBTyxRQUFQLEFBQWEsV0FBYixBQUF3QixLQUFLLENBQUMsT0FBQSxBQUFPLE1BQVAsQUFBYSxXQUFiLEFBQXdCLE1BQXpCLEFBQStCLE9BQW5FLEFBQTBFLEFBQzNGO29CQUFHLENBQUMsSUFBQSxBQUFJLElBQVIsQUFBSSxBQUFRLE9BQU0sQUFDaEI7QUFDQTt3QkFBRyxDQUFDLGFBQUosQUFBSSxBQUFhLEtBQUksT0FBQSxBQUFPLEFBQzVCO0FBQ0E7d0JBQUcsQ0FBSCxBQUFJLFFBQU8sT0FBQSxBQUFPLEFBQ2xCO0FBQ0E7NEJBQUEsQUFBUSxBQUNWO0FBQ0M7QUFBQyx3QkFBTyxHQUFBLEFBQUcsTUFBVixBQUFnQixBQUNuQjtBQVpEO0FBYUEsZ0JBQUksVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFTLElBQVQsQUFBYSxRQUFPLEFBQ2hDO29CQUFHLENBQUMsSUFBQSxBQUFJLElBQVIsQUFBSSxBQUFRLE9BQU0sQUFDaEI7QUFDQTt3QkFBRyxDQUFDLGFBQUosQUFBSSxBQUFhLEtBQUksT0FBQSxBQUFPLEFBQzVCO0FBQ0E7d0JBQUcsQ0FBSCxBQUFJLFFBQU8sT0FBQSxBQUFPLEFBQ2xCO0FBQ0E7NEJBQUEsQUFBUSxBQUNWO0FBQ0M7QUFBQyx3QkFBTyxHQUFBLEFBQUcsTUFBVixBQUFnQixBQUNuQjtBQVZEO0FBV0E7QUFDQSxnQkFBSSxXQUFXLFNBQVgsQUFBVyxTQUFBLEFBQVMsSUFBRyxBQUN6QjtvQkFBRyxVQUFVLEtBQVYsQUFBZSxRQUFRLGFBQXZCLEFBQXVCLEFBQWEsT0FBTyxDQUFDLElBQUEsQUFBSSxJQUFuRCxBQUErQyxBQUFRLE9BQU0sUUFBQSxBQUFRLEFBQ3JFO3VCQUFBLEFBQU8sQUFDUjtBQUhEO0FBSUEsZ0JBQUksT0FBTyxPQUFBLEFBQU87cUJBQVUsQUFDaEIsQUFDVjtzQkFGMEIsQUFFaEIsQUFDVjt5QkFIMEIsQUFHaEIsQUFDVjt5QkFKMEIsQUFJaEIsQUFDVjswQkFMRixBQUE0QixBQUtoQjtBQUxnQixBQUMxQjs7OztBQy9DRixnQkFBSSxTQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFlBQVksUUFBQSxBQUFRLFdBRHhCLEFBQ21DO2dCQUMvQixXQUFZLE9BQUEsQUFBTyxvQkFBb0IsT0FGM0MsQUFFa0Q7Z0JBQzlDLFVBQVksT0FIaEIsQUFHdUI7Z0JBQ25CLFVBQVksT0FKaEIsQUFJdUI7Z0JBQ25CLFNBQVksUUFBQSxBQUFRLFVBQVIsQUFBa0IsWUFMbEMsQUFLOEM7O0FBRTlDLG1CQUFBLEFBQU8sVUFBVSxZQUFVLEFBQ3pCO29CQUFBLEFBQUksTUFBSixBQUFVLE1BQVYsQUFBZ0IsQUFFaEI7O29CQUFJLFFBQVEsU0FBUixBQUFRLFFBQVUsQUFDcEI7d0JBQUEsQUFBSSxRQUFKLEFBQVksQUFDWjt3QkFBRyxXQUFXLFNBQVMsUUFBdkIsQUFBRyxBQUE0QixTQUFRLE9BQUEsQUFBTyxBQUM5QzsyQkFBQSxBQUFNLE1BQUssQUFDVDs2QkFBTyxLQUFQLEFBQVksQUFDWjsrQkFBTyxLQUFQLEFBQVksQUFDWjs0QkFBSSxBQUNGO0FBQ0Q7QUFGRCwwQkFFRSxPQUFBLEFBQU0sR0FBRSxBQUNSO2dDQUFBLEFBQUcsTUFBSCxBQUFRLGNBQ0gsT0FBQSxBQUFPLEFBQ1o7a0NBQUEsQUFBTSxBQUNQO0FBQ0Y7QUFBQyw0QkFBQSxBQUFPLEFBQ1Q7d0JBQUEsQUFBRyxRQUFPLE9BQUEsQUFBTyxBQUNsQjtBQWZELEFBaUJBOztBQUNBO29CQUFBLEFBQUcsUUFBTyxBQUNSOzZCQUFTLGtCQUFVLEFBQ2pCO2dDQUFBLEFBQVEsU0FBUixBQUFpQixBQUNsQjtBQUZELEFBR0Y7QUFDQztBQUxELDJCQUtPLEFBQUcsVUFBUyxBQUNqQjt3QkFBSSxTQUFKLEFBQWE7d0JBQ1QsT0FBUyxTQUFBLEFBQVMsZUFEdEIsQUFDYSxBQUF3QixBQUNyQzt3QkFBQSxBQUFJLFNBQUosQUFBYSxPQUFiLEFBQW9CLFFBQXBCLEFBQTRCLE1BQU0sRUFBQyxlQUhsQixBQUdqQixBQUFrQyxBQUFnQixTQUFRLEFBQzFEOzZCQUFTLGtCQUFVLEFBQ2pCOzZCQUFBLEFBQUssT0FBTyxTQUFTLENBQXJCLEFBQXNCLEFBQ3ZCO0FBRkQsQUFHRjtBQUNDO0FBUk0saUJBQUEsVUFRRyxXQUFXLFFBQWQsQUFBc0IsU0FBUSxBQUNuQzt3QkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRLEFBQ3RCOzZCQUFTLGtCQUFVLEFBQ2pCO2dDQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2Q7QUFGRCxBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNDO0FBWE0saUJBQUEsTUFXQSxBQUNMOzZCQUFTLGtCQUFVLEFBQ2pCO0FBQ0E7a0NBQUEsQUFBVSxLQUFWLEFBQWUsUUFBZixBQUF1QixBQUN4QjtBQUhELEFBSUQ7QUFFRDs7dUJBQU8sVUFBQSxBQUFTLElBQUcsQUFDakI7d0JBQUksT0FBTyxFQUFDLElBQUQsQUFBSyxJQUFJLE1BQXBCLEFBQVcsQUFBZSxBQUMxQjt3QkFBQSxBQUFHLE1BQUssS0FBQSxBQUFLLE9BQUwsQUFBWSxBQUNwQjt3QkFBRyxDQUFILEFBQUksTUFBSyxBQUNQOytCQUFBLEFBQU8sQUFDUDtBQUNEO0FBQUMsNEJBQUEsQUFBTyxBQUNWO0FBUEQsQUFRRDtBQTVERDs7OztBQ1BBOztBQUNBLGdCQUFJLFdBQWMsUUFBbEIsQUFBa0IsQUFBUTtnQkFDdEIsTUFBYyxRQURsQixBQUNrQixBQUFRO2dCQUN0QixjQUFjLFFBRmxCLEFBRWtCLEFBQVE7Z0JBQ3RCLFdBQWMsUUFBQSxBQUFRLGlCQUgxQixBQUdrQixBQUF5QjtnQkFDdkMsUUFBYyxTQUFkLEFBQWMsUUFBVSxDQUFFLEFBQWEsV0FKM0M7Z0JBS0ksWUFMSixBQUtrQjs7QUFFbEI7QUFDQSxnQkFBSSxjQUFhO0FBRWY7b0JBQUksU0FBUyxRQUFBLEFBQVEsaUJBQXJCLEFBQWEsQUFBeUI7b0JBQ2xDLElBQVMsWUFEYixBQUN5QjtvQkFDckIsS0FGSixBQUVhO29CQUNULEtBSEosQUFHYTtvQkFIYixBQUlJLEFBQ0o7dUJBQUEsQUFBTyxNQUFQLEFBQWEsVUFBYixBQUF1QixBQUN2Qjt3QkFBQSxBQUFRLFdBQVIsQUFBbUIsWUFBbkIsQUFBK0IsQUFDL0I7dUJBQUEsQUFBTyxNQVRrQixBQVN6QixBQUFhLGNBVFksQUFDekIsQ0FRNEIsQUFDNUI7QUFDQTtBQUNBO2lDQUFpQixPQUFBLEFBQU8sY0FBeEIsQUFBc0MsQUFDdEM7K0JBQUEsQUFBZSxBQUNmOytCQUFBLEFBQWUsTUFBTSxLQUFBLEFBQUssV0FBTCxBQUFnQixLQUFoQixBQUFxQixzQkFBckIsQUFBMkMsS0FBM0MsQUFBZ0QsWUFBckUsQUFBaUYsQUFDakY7K0JBQUEsQUFBZSxBQUNmOzhCQUFhLGVBQWIsQUFBNEIsQUFDNUI7dUJBQUEsQUFBTSxLQUFJOzJCQUFPLFlBQUEsQUFBVyxXQUFXLFlBQXZDLEFBQVUsQUFBTyxBQUFzQixBQUFZO0FBQ25ELHdCQUFBLEFBQU8sQUFDUjtBQW5CRDs7QUFxQkEsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxVQUFVLFNBQUEsQUFBUyxPQUFULEFBQWdCLEdBQWhCLEFBQW1CLFlBQVcsQUFDOUQ7b0JBQUEsQUFBSSxBQUNKO29CQUFHLE1BQUgsQUFBUyxNQUFLLEFBQ1o7MEJBQUEsQUFBTSxhQUFhLFNBQW5CLEFBQW1CLEFBQVMsQUFDNUI7NkJBQVMsSUFBVCxBQUFTLEFBQUksQUFDYjswQkFBQSxBQUFNLGFBQU4sQUFBbUIsQUFDbkI7QUFDQTsyQkFBQSxBQUFPLFlBQVAsQUFBbUIsQUFDcEI7QUFORCx1QkFNTyxTQUFBLEFBQVMsQUFDaEI7dUJBQU8sZUFBQSxBQUFlLFlBQWYsQUFBMkIsU0FBUyxJQUFBLEFBQUksUUFBL0MsQUFBMkMsQUFBWSxBQUN4RDtBQVZEOzs7O0FDOUJBLGdCQUFJLFdBQWlCLFFBQXJCLEFBQXFCLEFBQVE7Z0JBQ3pCLGlCQUFpQixRQURyQixBQUNxQixBQUFRO2dCQUN6QixjQUFpQixRQUZyQixBQUVxQixBQUFRO2dCQUN6QixLQUFpQixPQUhyQixBQUc0Qjs7QUFFNUIsb0JBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxvQkFBb0IsT0FBNUIsQUFBbUMsaUJBQWlCLFNBQUEsQUFBUyxlQUFULEFBQXdCLEdBQXhCLEFBQTJCLEdBQTNCLEFBQThCLFlBQVcsQUFDdkc7eUJBQUEsQUFBUyxBQUNUO29CQUFJLFlBQUEsQUFBWSxHQUFoQixBQUFJLEFBQWUsQUFDbkI7eUJBQUEsQUFBUyxBQUNUO29CQUFBLEFBQUcsb0JBQW1CLEFBQ3BCOzJCQUFPLEdBQUEsQUFBRyxHQUFILEFBQU0sR0FBYixBQUFPLEFBQVMsQUFDakI7QUFGaUIsaUJBQUEsQ0FFaEIsT0FBQSxBQUFNLEdBQUUsQ0FBRSxBQUFhLFdBQ3pCO29CQUFHLFNBQUEsQUFBUyxjQUFjLFNBQTFCLEFBQW1DLFlBQVcsTUFBTSxVQUFOLEFBQU0sQUFBVSxBQUM5RDtvQkFBRyxXQUFILEFBQWMsWUFBVyxFQUFBLEFBQUUsS0FBSyxXQUFQLEFBQWtCLEFBQzNDO3VCQUFBLEFBQU8sQUFDUjtBQVZEOzs7O0FDTEEsZ0JBQUksS0FBVyxRQUFmLEFBQWUsQUFBUTtnQkFDbkIsV0FBVyxRQURmLEFBQ2UsQUFBUTtnQkFDbkIsVUFBVyxRQUZmLEFBRWUsQUFBUTs7QUFFdkIsbUJBQUEsQUFBTyxVQUFVLFFBQUEsQUFBUSxvQkFBb0IsT0FBNUIsQUFBbUMsbUJBQW1CLFNBQUEsQUFBUyxpQkFBVCxBQUEwQixHQUExQixBQUE2QixZQUFXLEFBQzdHO3lCQUFBLEFBQVMsQUFDVDtvQkFBSSxPQUFTLFFBQWIsQUFBYSxBQUFRO29CQUNqQixTQUFTLEtBRGIsQUFDa0I7b0JBQ2QsSUFGSixBQUVRO29CQUZSLEFBR0ksQUFDSjt1QkFBTSxTQUFOLEFBQWUsR0FBRTt1QkFBQSxBQUFHLEVBQUgsQUFBSyxHQUFHLElBQUksS0FBWixBQUFZLEFBQUssTUFBTSxXQUF4QyxBQUFpQixBQUF1QixBQUFXO0FBQ25ELHdCQUFBLEFBQU8sQUFDUjtBQVJEOzs7O0FDSkE7O0FBQ0EsZ0JBQUksTUFBYyxRQUFsQixBQUFrQixBQUFRO2dCQUN0QixXQUFjLFFBRGxCLEFBQ2tCLEFBQVE7Z0JBQ3RCLFdBQWMsUUFBQSxBQUFRLGlCQUYxQixBQUVrQixBQUF5QjtnQkFDdkMsY0FBYyxPQUhsQixBQUd5Qjs7QUFFekIsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxrQkFBa0IsVUFBQSxBQUFTLEdBQUUsQUFDbkQ7b0JBQUksU0FBSixBQUFJLEFBQVMsQUFDYjtvQkFBRyxJQUFBLEFBQUksR0FBUCxBQUFHLEFBQU8sV0FBVSxPQUFPLEVBQVAsQUFBTyxBQUFFLEFBQzdCO29CQUFHLE9BQU8sRUFBUCxBQUFTLGVBQVQsQUFBd0IsY0FBYyxhQUFhLEVBQXRELEFBQXdELGFBQVksQUFDbEU7MkJBQU8sRUFBQSxBQUFFLFlBQVQsQUFBcUIsQUFDdEI7QUFBQyx3QkFBTyxhQUFBLEFBQWEsU0FBYixBQUFzQixjQUE3QixBQUEyQyxBQUM5QztBQU5EOzs7O0FDTkEsZ0JBQUksTUFBZSxRQUFuQixBQUFtQixBQUFRO2dCQUN2QixZQUFlLFFBRG5CLEFBQ21CLEFBQVE7Z0JBQ3ZCLGVBQWUsUUFBQSxBQUFRLHFCQUYzQixBQUVtQixBQUE2QjtnQkFDNUMsV0FBZSxRQUFBLEFBQVEsaUJBSDNCLEFBR21CLEFBQXlCOztBQUU1QyxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFFBQVQsQUFBaUI7b0JBQzVCLElBQVMsVUFBYixBQUFhLEFBQVU7b0JBQ25CLElBREosQUFDYTtvQkFDVCxTQUZKLEFBRWE7b0JBRmIsQUFHSSxBQUNKO3FCQUFBLEFBQUksT0FBSixBQUFXLEdBQUU7d0JBQUcsT0FBSCxBQUFVLFVBQVMsSUFBQSxBQUFJLEdBQUosQUFBTyxRQUFRLE9BQUEsQUFBTyxLQUF0RCxBQUFnQyxBQUFlLEFBQVk7QUFMckIsaUJBQUEsQUFDdEMsQ0FLQSxBQUNBO3VCQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEdBQUU7d0JBQUcsSUFBQSxBQUFJLEdBQUcsTUFBTSxNQUFoQixBQUFHLEFBQWEsQUFBTSxPQUFNLEFBQ2pEO3lCQUFDLGFBQUEsQUFBYSxRQUFkLEFBQUMsQUFBcUIsUUFBUSxPQUFBLEFBQU8sS0FBckMsQUFBOEIsQUFBWSxBQUMzQztBQUZEO0FBR0Esd0JBQUEsQUFBTyxBQUNSO0FBWEQ7Ozs7QUNMQTs7QUFDQSxnQkFBSSxRQUFjLFFBQWxCLEFBQWtCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFEbEIsQUFDa0IsQUFBUTs7QUFFMUIsbUJBQUEsQUFBTyxVQUFVLE9BQUEsQUFBTyxRQUFRLFNBQUEsQUFBUyxLQUFULEFBQWMsR0FBRSxBQUM5Qzt1QkFBTyxNQUFBLEFBQU0sR0FBYixBQUFPLEFBQVMsQUFDakI7QUFGRDs7OztBQ0pBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsUUFBVCxBQUFpQixPQUFNLEFBQ3RDOztnQ0FDZ0IsRUFBRSxTQURYLEFBQ1MsQUFBVyxBQUN6QjtrQ0FBYyxFQUFFLFNBRlgsQUFFUyxBQUFXLEFBQ3pCOzhCQUFjLEVBQUUsU0FIWCxBQUdTLEFBQVcsQUFDekI7MkJBSkYsQUFBTyxBQUlTLEFBRWpCO0FBTlEsQUFDTDtBQUZKOzs7O0FDQUEsZ0JBQUksT0FBTyxRQUFYLEFBQVcsQUFBUTtBQUNuQixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFFBQVQsQUFBaUIsS0FBakIsQUFBc0IsTUFBSyxBQUMxQztxQkFBSSxJQUFKLEFBQVEsT0FBUixBQUFlLEtBQUksQUFDakI7d0JBQUcsUUFBUSxPQUFYLEFBQVcsQUFBTyxNQUFLLE9BQUEsQUFBTyxPQUFPLElBQXJDLEFBQXVCLEFBQWMsQUFBSSxVQUNwQyxLQUFBLEFBQUssUUFBTCxBQUFhLEtBQUssSUFBbEIsQUFBa0IsQUFBSSxBQUM1QjtBQUFDLHdCQUFBLEFBQU8sQUFDVjtBQUxEOzs7O0FDREEsbUJBQUEsQUFBTyxVQUFVLFFBQWpCLEFBQWlCLEFBQVE7O0FDQXpCOztBQUNBLGdCQUFJLFNBQWMsUUFBbEIsQUFBa0IsQUFBUTtnQkFDdEIsT0FBYyxRQURsQixBQUNrQixBQUFRO2dCQUN0QixLQUFjLFFBRmxCLEFBRWtCLEFBQVE7Z0JBQ3RCLGNBQWMsUUFIbEIsQUFHa0IsQUFBUTtnQkFDdEIsVUFBYyxRQUFBLEFBQVEsVUFKMUIsQUFJa0IsQUFBa0I7O0FBRXBDLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsS0FBSSxBQUM1QjtvQkFBSSxJQUFJLE9BQU8sS0FBUCxBQUFPLEFBQUssUUFBWixBQUFvQixhQUFhLEtBQWpDLEFBQWlDLEFBQUssT0FBTyxPQUFyRCxBQUFxRCxBQUFPLEFBQzVEO29CQUFHLGVBQUEsQUFBZSxLQUFLLENBQUMsRUFBeEIsQUFBd0IsQUFBRSxhQUFTLEFBQUcsRUFBSCxBQUFLLEdBQUwsQUFBUTtrQ0FBUyxBQUNwQyxBQUNkO3lCQUFLLGVBQVUsQUFBRTsrQkFBQSxBQUFPLEFBQU87QUFGRSxBQUFpQixBQUlyRDtBQUpxRCxBQUNsRCxpQkFEaUM7QUFGckM7Ozs7QUNQQSxnQkFBSSxNQUFNLFFBQUEsQUFBUSxnQkFBbEIsQUFBa0M7Z0JBQzlCLE1BQU0sUUFEVixBQUNVLEFBQVE7Z0JBQ2QsTUFBTSxRQUFBLEFBQVEsVUFGbEIsQUFFVSxBQUFrQjs7QUFFNUIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFULEFBQWEsS0FBYixBQUFrQixNQUFLLEFBQ3RDO29CQUFHLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBQSxBQUFPLEtBQUssR0FBckIsQUFBd0IsV0FBbEMsQUFBVSxBQUFtQyxNQUFLLElBQUEsQUFBSSxJQUFKLEFBQVEsS0FBSyxFQUFDLGNBQUQsQUFBZSxNQUFNLE9BQWxDLEFBQWEsQUFBNEIsQUFDNUY7QUFGRDs7OztBQ0pBLGdCQUFJLFNBQVMsUUFBQSxBQUFRLGFBQXJCLEFBQWEsQUFBcUI7Z0JBQzlCLE1BQVMsUUFEYixBQUNhLEFBQVE7QUFDckIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxLQUFJLEFBQzVCO3VCQUFPLE9BQUEsQUFBTyxTQUFTLE9BQUEsQUFBTyxPQUFPLElBQXJDLEFBQU8sQUFBOEIsQUFBSSxBQUMxQztBQUZEOzs7O0FDRkEsZ0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUTtnQkFDakIsU0FESixBQUNhO2dCQUNULFFBQVMsT0FBQSxBQUFPLFlBQVksT0FBQSxBQUFPLFVBRnZDLEFBRWEsQUFBb0M7QUFDakQsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxLQUFJLEFBQzVCO3VCQUFPLE1BQUEsQUFBTSxTQUFTLE1BQUEsQUFBTSxPQUE1QixBQUFPLEFBQTRCLEFBQ3BDO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxXQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFlBQVksUUFEaEIsQUFDZ0IsQUFBUTtnQkFDcEIsVUFBWSxRQUFBLEFBQVEsVUFGeEIsQUFFZ0IsQUFBa0I7QUFDbEMsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxHQUFULEFBQVksR0FBRSxBQUM3QjtvQkFBSSxJQUFJLFNBQUEsQUFBUyxHQUFqQixBQUFvQjtvQkFBcEIsQUFBaUMsQUFDakM7dUJBQU8sTUFBQSxBQUFNLGFBQWEsQ0FBQyxJQUFJLFNBQUEsQUFBUyxHQUFkLEFBQUssQUFBWSxhQUFwQyxBQUFpRCxZQUFqRCxBQUE2RCxJQUFJLFVBQXhFLEFBQXdFLEFBQVUsQUFDbkY7QUFIRDs7OztBQ0pBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtnQkFDcEIsVUFBWSxRQURoQixBQUNnQixBQUFRO0FBQ3hCO0FBQ0E7QUFDQSxtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLFdBQVUsQUFDbEM7dUJBQU8sVUFBQSxBQUFTLE1BQVQsQUFBZSxLQUFJLEFBQ3hCO3dCQUFJLElBQUksT0FBTyxRQUFmLEFBQVEsQUFBTyxBQUFRO3dCQUNuQixJQUFJLFVBRFIsQUFDUSxBQUFVO3dCQUNkLElBQUksRUFGUixBQUVVO3dCQUZWLEFBR0k7d0JBSEosQUFHTyxBQUNQO3dCQUFHLElBQUEsQUFBSSxLQUFLLEtBQVosQUFBaUIsR0FBRSxPQUFPLFlBQUEsQUFBWSxLQUFuQixBQUF3QixBQUMzQzt3QkFBSSxFQUFBLEFBQUUsV0FBTixBQUFJLEFBQWEsQUFDakI7MkJBQU8sSUFBQSxBQUFJLFVBQVUsSUFBZCxBQUFrQixVQUFVLElBQUEsQUFBSSxNQUFoQyxBQUFzQyxLQUFLLENBQUMsSUFBSSxFQUFBLEFBQUUsV0FBVyxJQUFsQixBQUFLLEFBQWlCLE1BQWpFLEFBQXVFLFVBQVUsSUFBakYsQUFBcUYsU0FDeEYsWUFBWSxFQUFBLEFBQUUsT0FBZCxBQUFZLEFBQVMsS0FEbEIsQUFDdUIsSUFDMUIsWUFBWSxFQUFBLEFBQUUsTUFBRixBQUFRLEdBQUcsSUFBdkIsQUFBWSxBQUFlLEtBQUssQ0FBQyxJQUFBLEFBQUksVUFBTCxBQUFlLE9BQU8sSUFBdEIsQUFBMEIsVUFGOUQsQUFFd0UsQUFDekU7QUFWRCxBQVdEO0FBWkQ7Ozs7QUNKQSxnQkFBSSxNQUFxQixRQUF6QixBQUF5QixBQUFRO2dCQUM3QixTQUFxQixRQUR6QixBQUN5QixBQUFRO2dCQUM3QixPQUFxQixRQUZ6QixBQUV5QixBQUFRO2dCQUM3QixNQUFxQixRQUh6QixBQUd5QixBQUFRO2dCQUM3QixTQUFxQixRQUp6QixBQUl5QixBQUFRO2dCQUM3QixVQUFxQixPQUx6QixBQUtnQztnQkFDNUIsVUFBcUIsT0FOekIsQUFNZ0M7Z0JBQzVCLFlBQXFCLE9BUHpCLEFBT2dDO2dCQUM1QixpQkFBcUIsT0FSekIsQUFRZ0M7Z0JBQzVCLFVBVEosQUFTeUI7Z0JBQ3JCLFFBVkosQUFVeUI7Z0JBQ3JCLHFCQVhKLEFBV3lCO2dCQVh6QixBQVlJO2dCQVpKLEFBWVc7Z0JBWlgsQUFZb0I7QUFDcEIsZ0JBQUksTUFBTSxTQUFOLEFBQU0sTUFBVSxBQUNsQjtvQkFBSSxLQUFLLENBQVQsQUFBVSxBQUNWO29CQUFHLE1BQUEsQUFBTSxlQUFULEFBQUcsQUFBcUIsS0FBSSxBQUMxQjt3QkFBSSxLQUFLLE1BQVQsQUFBUyxBQUFNLEFBQ2Y7MkJBQU8sTUFBUCxBQUFPLEFBQU0sQUFDYjtBQUNEO0FBQ0Y7QUFQRDtBQVFBLGdCQUFJLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBUyxPQUFNLEFBQzVCO29CQUFBLEFBQUksS0FBSyxNQUFULEFBQWUsQUFDaEI7QUFGRDtBQUdBO0FBQ0EsZ0JBQUcsQ0FBQSxBQUFDLFdBQVcsQ0FBZixBQUFnQixXQUFVLEFBQ3hCOzBCQUFVLFNBQUEsQUFBUyxhQUFULEFBQXNCLElBQUcsQUFDakM7d0JBQUksT0FBSixBQUFXO3dCQUFJLElBQWYsQUFBbUIsQUFDbkI7MkJBQU0sVUFBQSxBQUFVLFNBQWhCLEFBQXlCLEdBQUU7NkJBQUEsQUFBSyxLQUFLLFVBQXJDLEFBQTJCLEFBQVUsQUFBVTtBQUMvQywyQkFBTSxFQUFOLEFBQVEsV0FBVyxZQUFVLEFBQzNCOytCQUFPLE9BQUEsQUFBTyxNQUFQLEFBQWEsYUFBYixBQUEwQixLQUFLLFNBQXRDLEFBQXNDLEFBQVMsS0FBL0MsQUFBb0QsQUFDckQ7QUFGRCxBQUdBOzBCQUFBLEFBQU0sQUFDTjsyQkFBQSxBQUFPLEFBQ1I7QUFSRCxBQVNBOzRCQUFZLFNBQUEsQUFBUyxlQUFULEFBQXdCLElBQUcsQUFDckM7MkJBQU8sTUFBUCxBQUFPLEFBQU0sQUFDZDtBQUZELEFBR0E7QUFDQTtvQkFBRyxRQUFBLEFBQVEsVUFBUixBQUFrQixZQUFyQixBQUFpQyxXQUFVLEFBQ3pDOzRCQUFRLGVBQUEsQUFBUyxJQUFHLEFBQ2xCO2dDQUFBLEFBQVEsU0FBUyxJQUFBLEFBQUksS0FBSixBQUFTLElBQTFCLEFBQWlCLEFBQWEsQUFDL0I7QUFGRCxBQUdGO0FBQ0M7QUFMRCwyQkFLTyxBQUFHLGdCQUFlLEFBQ3ZCOzhCQUFVLElBQVYsQUFBVSxBQUFJLEFBQ2Q7MkJBQVUsUUFBVixBQUFrQixBQUNsQjs0QkFBQSxBQUFRLE1BQVIsQUFBYyxZQUFkLEFBQTBCLEFBQzFCOzRCQUFRLElBQUksS0FBSixBQUFTLGFBQVQsQUFBc0IsTUFBOUIsQUFBUSxBQUE0QixBQUN0QztBQUNBO0FBQ0M7QUFQTSxpQkFBQSxVQU9HLE9BQUEsQUFBTyxvQkFBb0IsT0FBQSxBQUFPLGVBQWxDLEFBQWlELGNBQWMsQ0FBQyxPQUFuRSxBQUEwRSxlQUFjLEFBQzdGOzRCQUFRLGVBQUEsQUFBUyxJQUFHLEFBQ2xCOytCQUFBLEFBQU8sWUFBWSxLQUFuQixBQUF3QixJQUF4QixBQUE0QixBQUM3QjtBQUZELEFBR0E7MkJBQUEsQUFBTyxpQkFBUCxBQUF3QixXQUF4QixBQUFtQyxVQUFuQyxBQUE2QyxBQUMvQztBQUNDO0FBTk0saUJBQUEsVUFNRyxzQkFBc0IsSUFBekIsQUFBeUIsQUFBSSxXQUFVLEFBQzVDOzRCQUFRLGVBQUEsQUFBUyxJQUFHLEFBQ2xCOzZCQUFBLEFBQUssWUFBWSxJQUFqQixBQUFpQixBQUFJLFdBQXJCLEFBQWdDLHNCQUFzQixZQUFVLEFBQzlEO2lDQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjtnQ0FBQSxBQUFJLEtBQUosQUFBUyxBQUNWO0FBSEQsQUFJRDtBQUxELEFBTUY7QUFDQztBQVJNLGlCQUFBLE1BUUEsQUFDTDs0QkFBUSxlQUFBLEFBQVMsSUFBRyxBQUNsQjttQ0FBVyxJQUFBLEFBQUksS0FBSixBQUFTLElBQXBCLEFBQVcsQUFBYSxJQUF4QixBQUE0QixBQUM3QjtBQUZELEFBR0Q7QUFDRjs7QUFDRCxtQkFBQSxBQUFPO3FCQUFVLEFBQ1IsQUFDUDt1QkFGRixBQUFpQixBQUVSO0FBRlEsQUFDZjs7OztBQ3hFRixnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLE1BQVksS0FEaEIsQUFDcUI7Z0JBQ2pCLE1BQVksS0FGaEIsQUFFcUI7QUFDckIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxPQUFULEFBQWdCLFFBQU8sQUFDdEM7d0JBQVEsVUFBUixBQUFRLEFBQVUsQUFDbEI7dUJBQU8sUUFBQSxBQUFRLElBQUksSUFBSSxRQUFKLEFBQVksUUFBeEIsQUFBWSxBQUFvQixLQUFLLElBQUEsQUFBSSxPQUFoRCxBQUE0QyxBQUFXLEFBQ3hEO0FBSEQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxPQUFRLEtBQVosQUFBaUI7Z0JBQ2IsUUFBUSxLQURaLEFBQ2lCO0FBQ2pCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjt1QkFBTyxNQUFNLEtBQUssQ0FBWCxBQUFZLE1BQVosQUFBa0IsSUFBSSxDQUFDLEtBQUEsQUFBSyxJQUFMLEFBQVMsUUFBVixBQUFrQixNQUEvQyxBQUE2QixBQUF3QixBQUN0RDtBQUZEOzs7O0FDSEE7O0FBQ0EsZ0JBQUksVUFBVSxRQUFkLEFBQWMsQUFBUTtnQkFDbEIsVUFBVSxRQURkLEFBQ2MsQUFBUTtBQUN0QixtQkFBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLElBQUcsQUFDM0I7dUJBQU8sUUFBUSxRQUFmLEFBQU8sQUFBUSxBQUFRLEFBQ3hCO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLE1BQVksS0FEaEIsQUFDcUI7QUFDckIsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxJQUFHLEFBQzNCO3VCQUFPLEtBQUEsQUFBSyxJQUFJLElBQUksVUFBSixBQUFJLEFBQVUsS0FBdkIsQUFBUyxBQUFtQixvQkFEUixBQUMzQixBQUF1RCxHQUFHLEFBQzNEO0FBRkQ7Ozs7QUNIQTs7QUFDQSxnQkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRO0FBQ3RCLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBRyxBQUMzQjt1QkFBTyxPQUFPLFFBQWQsQUFBTyxBQUFPLEFBQVEsQUFDdkI7QUFGRDs7OztBQ0ZBOztBQUNBLGdCQUFJLFdBQVcsUUFBZixBQUFlLEFBQVE7QUFDdkI7QUFDQTtBQUNBLG1CQUFBLEFBQU8sVUFBVSxVQUFBLEFBQVMsSUFBVCxBQUFhLEdBQUUsQUFDOUI7b0JBQUcsQ0FBQyxTQUFKLEFBQUksQUFBUyxLQUFJLE9BQUEsQUFBTyxBQUN4QjtvQkFBQSxBQUFJLElBQUosQUFBUSxBQUNSO29CQUFHLEtBQUssUUFBUSxLQUFLLEdBQWIsQUFBZ0IsYUFBckIsQUFBa0MsY0FBYyxDQUFDLFNBQVMsTUFBTSxHQUFBLEFBQUcsS0FBdEUsQUFBb0QsQUFBZSxBQUFRLE1BQUssT0FBQSxBQUFPLEFBQ3ZGO29CQUFHLFFBQVEsS0FBSyxHQUFiLEFBQWdCLFlBQWhCLEFBQTRCLGNBQWMsQ0FBQyxTQUFTLE1BQU0sR0FBQSxBQUFHLEtBQWhFLEFBQThDLEFBQWUsQUFBUSxNQUFLLE9BQUEsQUFBTyxBQUNqRjtvQkFBRyxDQUFBLEFBQUMsS0FBSyxRQUFRLEtBQUssR0FBYixBQUFnQixhQUF0QixBQUFtQyxjQUFjLENBQUMsU0FBUyxNQUFNLEdBQUEsQUFBRyxLQUF2RSxBQUFxRCxBQUFlLEFBQVEsTUFBSyxPQUFBLEFBQU8sQUFDeEY7c0JBQU0sVUFBTixBQUFNLEFBQVUsQUFDakI7QUFQRDs7OztBQ0pBLGdCQUFJLEtBQUosQUFBUztnQkFDTCxLQUFLLEtBRFQsQUFDUyxBQUFLO0FBQ2QsbUJBQUEsQUFBTyxVQUFVLFVBQUEsQUFBUyxLQUFJLEFBQzVCO3VCQUFPLFVBQUEsQUFBVSxPQUFPLFFBQUEsQUFBUSxZQUFSLEFBQW9CLEtBQXJDLEFBQTBDLEtBQTFDLEFBQStDLE1BQU0sQ0FBQyxFQUFBLEFBQUUsS0FBSCxBQUFRLElBQVIsQUFBWSxTQUF4RSxBQUFPLEFBQXFELEFBQXFCLEFBQ2xGO0FBRkQ7Ozs7QUNGQSxnQkFBSSxRQUFhLFFBQUEsQUFBUSxhQUF6QixBQUFpQixBQUFxQjtnQkFDbEMsTUFBYSxRQURqQixBQUNpQixBQUFRO2dCQUNyQixVQUFhLFFBQUEsQUFBUSxhQUZ6QixBQUVzQztnQkFDbEMsYUFBYSxPQUFBLEFBQU8sV0FIeEIsQUFHa0M7O0FBRWxDLGdCQUFJLFdBQVcsT0FBQSxBQUFPLFVBQVUsVUFBQSxBQUFTLE1BQUssQUFDNUM7dUJBQU8sTUFBQSxBQUFNLFVBQVUsTUFBQSxBQUFNLFFBQzNCLGNBQWMsUUFBZCxBQUFjLEFBQU8sU0FBUyxDQUFDLGFBQUEsQUFBYSxVQUFkLEFBQXVCLEtBQUssWUFENUQsQUFBTyxBQUN5QixBQUF3QyxBQUN6RTtBQUhEOztBQUtBLHFCQUFBLEFBQVMsUUFBVCxBQUFpQjs7OztBQ1ZqQixnQkFBSSxVQUFZLFFBQWhCLEFBQWdCLEFBQVE7Z0JBQ3BCLFdBQVksUUFBQSxBQUFRLFVBRHhCLEFBQ2dCLEFBQWtCO2dCQUM5QixZQUFZLFFBRmhCLEFBRWdCLEFBQVE7QUFDeEIsbUJBQUEsQUFBTyxVQUFVLFFBQUEsQUFBUSxXQUFSLEFBQW1CLG9CQUFvQixVQUFBLEFBQVMsSUFBRyxBQUNsRTtvQkFBRyxNQUFILEFBQVMsV0FBVSxPQUFPLEdBQUEsQUFBRyxhQUN4QixHQURxQixBQUNyQixBQUFHLGlCQUNILFVBQVUsUUFGSSxBQUVkLEFBQVUsQUFBUSxBQUN4QjtBQUpEOztBQ0hBOztBQUNBLGdCQUFJLG1CQUFtQixRQUF2QixBQUF1QixBQUFRO2dCQUMzQixPQUFtQixRQUR2QixBQUN1QixBQUFRO2dCQUMzQixZQUFtQixRQUZ2QixBQUV1QixBQUFRO2dCQUMzQixZQUFtQixRQUh2QixBQUd1QixBQUFROztBQUUvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFBLEFBQU8sa0JBQVUsQUFBUSxrQkFBUixBQUEwQixPQUExQixBQUFpQyxTQUFTLFVBQUEsQUFBUyxVQUFULEFBQW1CO3FCQUM1RSxBQUFLLEtBQUssVUFEdUUsQUFDakYsQUFBVSxBQUFVLFdBQVcsQUFDL0I7cUJBQUEsQUFBSyxLQUY0RSxBQUVqRixBQUFVLEVBRnVFLEFBQ2pGLENBQytCLEFBQy9CO3FCQUFBLEFBQUssS0FINEUsQUFHakYsQUFBVSxNQUFxQixBQUNqQztBQUNDO0FBTGdCLGFBQUEsRUFLZCxZQUFVLEFBQ1g7b0JBQUksSUFBUSxLQUFaLEFBQWlCO29CQUNiLE9BQVEsS0FEWixBQUNpQjtvQkFDYixRQUFRLEtBRlosQUFFWSxBQUFLLEFBQ2pCO29CQUFHLENBQUEsQUFBQyxLQUFLLFNBQVMsRUFBbEIsQUFBb0IsUUFBTyxBQUN6Qjt5QkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNWOzJCQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2I7QUFDRDtvQkFBRyxRQUFILEFBQVcsUUFBUyxPQUFPLEtBQUEsQUFBSyxHQUFaLEFBQU8sQUFBUSxBQUNuQztvQkFBRyxRQUFILEFBQVcsVUFBUyxPQUFPLEtBQUEsQUFBSyxHQUFHLEVBQWYsQUFBTyxBQUFRLEFBQUUsQUFDckM7dUJBQU8sS0FBQSxBQUFLLEdBQUcsQ0FBQSxBQUFDLE9BQU8sRUFBdkIsQUFBTyxBQUFRLEFBQVEsQUFBRSxBQUMxQjtBQWhCZ0IsZUFBakIsQUFBaUIsQUFnQmQ7O0FBRUg7QUFDQSxzQkFBQSxBQUFVLFlBQVksVUFBdEIsQUFBZ0M7O0FBRWhDLDZCQUFBLEFBQWlCO0FBQ2pCLDZCQUFBLEFBQWlCO0FBQ2pCLDZCQUFBLEFBQWlCOztBQ2pDakI7O0FBQ0EsZ0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUTs7QUFFckI7QUFDQSxtQkFBQSxBQUFPLGtCQUFVLEFBQVEsaUJBQVIsQUFBeUIsT0FBTyxVQUFBLEFBQVMsS0FBSSxBQUM1RDt1QkFBTyxTQUFBLEFBQVMsTUFBSyxBQUFFOzJCQUFPLElBQUEsQUFBSSxNQUFNLFVBQUEsQUFBVSxTQUFWLEFBQW1CLElBQUksVUFBdkIsQUFBdUIsQUFBVSxLQUFsRCxBQUFPLEFBQWdELEFBQWE7QUFBM0YsQUFDRDtBQUZnQixhQUFBO0FBSWY7cUJBQUssU0FBQSxBQUFTLElBQVQsQUFBYSxLQUFJLEFBQ3BCO3dCQUFJLFFBQVEsT0FBQSxBQUFPLFNBQVAsQUFBZ0IsTUFBNUIsQUFBWSxBQUFzQixBQUNsQzsyQkFBTyxTQUFTLE1BQWhCLEFBQXNCLEFBQ3ZCO0FBTEEsQUFNRDtBQUNBO3FCQUFLLFNBQUEsQUFBUyxJQUFULEFBQWEsS0FBYixBQUFrQixPQUFNLEFBQzNCOzJCQUFPLE9BQUEsQUFBTyxJQUFQLEFBQVcsTUFBTSxRQUFBLEFBQVEsSUFBUixBQUFZLElBQTdCLEFBQWlDLEtBQXhDLEFBQU8sQUFBc0MsQUFDOUM7QUFYYyxBQUVkO0FBQUEsQUFDRCxlQUhlLEFBWWQsUUFaSCxBQUFpQixBQVlOOztBQ2hCWCxBQUNBOztBQ0RBOztBQUNBLGdCQUFJLFVBQXFCLFFBQXpCLEFBQXlCLEFBQVE7Z0JBQzdCLFNBQXFCLFFBRHpCLEFBQ3lCLEFBQVE7Z0JBQzdCLE1BQXFCLFFBRnpCLEFBRXlCLEFBQVE7Z0JBQzdCLFVBQXFCLFFBSHpCLEFBR3lCLEFBQVE7Z0JBQzdCLFVBQXFCLFFBSnpCLEFBSXlCLEFBQVE7Z0JBQzdCLFdBQXFCLFFBTHpCLEFBS3lCLEFBQVE7Z0JBQzdCLFlBQXFCLFFBTnpCLEFBTXlCLEFBQVE7Z0JBQzdCLGFBQXFCLFFBUHpCLEFBT3lCLEFBQVE7Z0JBQzdCLFFBQXFCLFFBUnpCLEFBUXlCLEFBQVE7Z0JBQzdCLHFCQUFxQixRQVR6QixBQVN5QixBQUFRO2dCQUM3QixPQUFxQixRQUFBLEFBQVEsV0FWakMsQUFVNEM7Z0JBQ3hDLFlBQXFCLFFBWHpCLEFBV3lCLEFBQVE7Z0JBQzdCLFVBWkosQUFZeUI7Z0JBQ3JCLFlBQXFCLE9BYnpCLEFBYWdDO2dCQUM1QixVQUFxQixPQWR6QixBQWNnQztnQkFDNUIsV0FBcUIsT0FmekIsQUFleUIsQUFBTztnQkFDNUIsVUFBcUIsT0FoQnpCLEFBZ0JnQztnQkFDNUIsU0FBcUIsUUFBQSxBQUFRLFlBakJqQyxBQWlCNkM7Z0JBQ3pDLFFBQXFCLFNBQXJCLEFBQXFCLFFBQVUsQ0FBRSxBQUFhLFdBbEJsRDtnQkFBQSxBQW1CSTtnQkFuQkosQUFtQmM7Z0JBbkJkLEFBbUJ3Qzs7QUFFeEMsZ0JBQUksYUFBYSxDQUFDLGFBQVcsQUFDM0I7b0JBQUksQUFDRjtBQUNBO3dCQUFJLFVBQWMsU0FBQSxBQUFTLFFBQTNCLEFBQWtCLEFBQWlCO3dCQUMvQixjQUFjLENBQUMsUUFBQSxBQUFRLGNBQVQsQUFBdUIsSUFBSSxRQUFBLEFBQVEsVUFBbkMsQUFBMkIsQUFBa0IsY0FBYyxVQUFBLEFBQVMsTUFBSyxBQUFFOzZCQUFBLEFBQUssT0FBTCxBQUFZLEFBQVM7QUFEbEgsQUFFQTtBQUNBOzJCQUFPLENBQUMsVUFBVSxPQUFBLEFBQU8seUJBQWxCLEFBQTJDLGVBQWUsUUFBQSxBQUFRLEtBQVIsQUFBYSxrQkFBOUUsQUFBZ0csQUFDakc7QUFORCxrQkFNRSxPQUFBLEFBQU0sR0FBRSxDQUFFLEFBQWEsV0FDMUI7QUFSRCxBQUFtQixhQUFBOztBQVVuQjtBQUNBLGdCQUFJLGtCQUFrQixTQUFsQixBQUFrQixnQkFBQSxBQUFTLEdBQVQsQUFBWSxHQUFFLEFBQ2xDO0FBQ0E7dUJBQU8sTUFBQSxBQUFNLEtBQUssTUFBQSxBQUFNLFlBQVksTUFBcEMsQUFBMEMsQUFDM0M7QUFIRDtBQUlBLGdCQUFJLGFBQWEsU0FBYixBQUFhLFdBQUEsQUFBUyxJQUFHLEFBQzNCO29CQUFBLEFBQUksQUFDSjt1QkFBTyxTQUFBLEFBQVMsT0FBTyxRQUFRLE9BQU8sR0FBZixBQUFrQixTQUFsQyxBQUEyQyxhQUEzQyxBQUF3RCxPQUEvRCxBQUFzRSxBQUN2RTtBQUhEO0FBSUEsZ0JBQUksdUJBQXVCLFNBQXZCLEFBQXVCLHFCQUFBLEFBQVMsR0FBRSxBQUNwQzt1QkFBTyxnQkFBQSxBQUFnQixVQUFoQixBQUEwQixLQUM3QixJQUFBLEFBQUksa0JBREQsQUFDSCxBQUFzQixLQUN0QixJQUFBLEFBQUkseUJBRlIsQUFFSSxBQUE2QixBQUNsQztBQUpEO0FBS0EsZ0JBQUksb0JBQW9CLDJCQUEyQixrQ0FBQSxBQUFTLEdBQUUsQUFDNUQ7b0JBQUEsQUFBSSxTQUFKLEFBQWEsQUFDYjtxQkFBQSxBQUFLLGNBQVUsQUFBSSxFQUFFLFVBQUEsQUFBUyxXQUFULEFBQW9CLFVBQVMsQUFDaEQ7d0JBQUcsWUFBQSxBQUFZLGFBQWEsV0FBNUIsQUFBdUMsV0FBVSxNQUFNLFVBQU4sQUFBTSxBQUFVLEFBQ2pFOzhCQUFBLEFBQVUsQUFDVjs2QkFBQSxBQUFVLEFBQ1g7QUFKRCxBQUFlLEFBS2YsaUJBTGU7cUJBS2YsQUFBSyxVQUFVLFVBQWYsQUFBZSxBQUFVLEFBQ3pCO3FCQUFBLEFBQUssU0FBVSxVQUFmLEFBQWUsQUFBVSxBQUMxQjtBQVREO0FBVUEsZ0JBQUksVUFBVSxTQUFWLEFBQVUsUUFBQSxBQUFTLE1BQUssQUFDMUI7b0JBQUksQUFDRjtBQUNEO0FBRkQsa0JBRUUsT0FBQSxBQUFNLEdBQUUsQUFDUjsyQkFBTyxFQUFDLE9BQVIsQUFBTyxBQUFRLEFBQ2hCO0FBQ0Y7QUFORDtBQU9BLGdCQUFJLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBUyxTQUFULEFBQWtCLFVBQVMsQUFDdEM7b0JBQUcsUUFBSCxBQUFXLElBQUcsQUFDZDt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO29CQUFJLFFBQVEsUUFBWixBQUFvQixBQUNwQjswQkFBVTt3QkFDSixRQUFRLFFBQVosQUFBb0I7d0JBQ2hCLEtBQVEsUUFBQSxBQUFRLE1BRHBCLEFBQzBCO3dCQUN0QixJQUZKLEFBRVksQUFDWjt3QkFBSSxNQUFNLFNBQU4sQUFBTSxJQUFBLEFBQVMsVUFBUyxBQUMxQjs0QkFBSSxVQUFVLEtBQUssU0FBTCxBQUFjLEtBQUssU0FBakMsQUFBMEM7NEJBQ3RDLFVBQVUsU0FEZCxBQUN1Qjs0QkFDbkIsU0FBVSxTQUZkLEFBRXVCOzRCQUNuQixTQUFVLFNBSGQsQUFHdUI7NEJBSHZCLEFBSUk7NEJBSkosQUFJWSxBQUNaOzRCQUFJLEFBQ0Y7Z0NBQUEsQUFBRyxTQUFRLEFBQ1Q7b0NBQUcsQ0FBSCxBQUFJLElBQUcsQUFDTDt3Q0FBRyxRQUFBLEFBQVEsTUFBWCxBQUFpQixHQUFFLGtCQUFBLEFBQWtCLEFBQ3JDOzRDQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2Q7QUFDRDtvQ0FBRyxZQUFILEFBQWUsTUFBSyxTQUFwQixBQUFvQixBQUFTLFdBQ3hCLEFBQ0g7d0NBQUEsQUFBRyxRQUFPLE9BQUEsQUFBTyxBQUNqQjs2Q0FBUyxRQUFULEFBQVMsQUFBUSxBQUNqQjt3Q0FBQSxBQUFHLFFBQU8sT0FBQSxBQUFPLEFBQ2xCO0FBQ0Q7b0NBQUcsV0FBVyxTQUFkLEFBQXVCLFNBQVEsQUFDN0I7MkNBQU8sVUFBUCxBQUFPLEFBQVUsQUFDbEI7QUFGRCwyQ0FFVSxPQUFPLFdBQVYsQUFBVSxBQUFXLFNBQVEsQUFDbEM7eUNBQUEsQUFBSyxLQUFMLEFBQVUsUUFBVixBQUFrQixTQUFsQixBQUEyQixBQUM1QjtBQUZNLGlDQUFBLE1BRUEsUUFBQSxBQUFRLEFBQ2hCO0FBaEJELG1DQWdCTyxPQUFBLEFBQU8sQUFDZjtBQWxCRCwwQkFrQkUsT0FBQSxBQUFNLEdBQUUsQUFDUjttQ0FBQSxBQUFPLEFBQ1I7QUFDRjtBQTNCRCxBQTRCQTsyQkFBTSxNQUFBLEFBQU0sU0FBWixBQUFxQixHQUFFOzRCQUFJLE1BQTNCLEFBQXVCLEFBQUksQUFBTTtBQWhDZixxQkFBQSxBQUNsQixDQStCd0MsQUFDeEM7NEJBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjs0QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO3dCQUFHLFlBQVksQ0FBQyxRQUFoQixBQUF3QixJQUFHLFlBQUEsQUFBWSxBQUN4QztBQXBDRCxBQXFDRDtBQXpDRDtBQTBDQSxnQkFBSSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQVMsU0FBUSxBQUNqQztxQkFBQSxBQUFLLEtBQUwsQUFBVSxRQUFRLFlBQVUsQUFDMUI7d0JBQUksUUFBUSxRQUFaLEFBQW9CO3dCQUFwQixBQUNJO3dCQURKLEFBQ1k7d0JBRFosQUFDcUIsQUFDckI7d0JBQUcsWUFBSCxBQUFHLEFBQVksVUFBUyxBQUN0Qjt5Q0FBaUIsWUFBVSxBQUN6QjtnQ0FBQSxBQUFHLFFBQU8sQUFDUjt3Q0FBQSxBQUFRLEtBQVIsQUFBYSxzQkFBYixBQUFtQyxPQUFuQyxBQUEwQyxBQUMzQztBQUZELHVDQUVVLFVBQVUsT0FBYixBQUFvQixzQkFBcUIsQUFDOUM7d0NBQVEsRUFBQyxTQUFELEFBQVUsU0FBUyxRQUEzQixBQUFRLEFBQTJCLEFBQ3BDO0FBRk0sNkJBQUEsTUFFQSxJQUFHLENBQUMsVUFBVSxPQUFYLEFBQWtCLFlBQVksUUFBakMsQUFBeUMsT0FBTSxBQUNwRDt3Q0FBQSxBQUFRLE1BQVIsQUFBYywrQkFBZCxBQUE2QyxBQUM5QztBQUNGO0FBUkQsQUFBUyxBQVNULHlCQVRTO0FBVVQ7Z0NBQUEsQUFBUSxLQUFLLFVBQVUsWUFBVixBQUFVLEFBQVksV0FBdEIsQUFBaUMsSUFBOUMsQUFBa0QsQUFDbkQ7QUFBQyw2QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNmO3dCQUFBLEFBQUcsUUFBTyxNQUFNLE9BQU4sQUFBYSxBQUN4QjtBQWpCRCxBQWtCRDtBQW5CRDtBQW9CQSxnQkFBSSxjQUFjLFNBQWQsQUFBYyxZQUFBLEFBQVMsU0FBUSxBQUNqQztvQkFBRyxRQUFBLEFBQVEsTUFBWCxBQUFpQixHQUFFLE9BQUEsQUFBTyxBQUMxQjtvQkFBSSxRQUFRLFFBQUEsQUFBUSxNQUFNLFFBQTFCLEFBQWtDO29CQUM5QixJQURKLEFBQ1k7b0JBRFosQUFFSSxBQUNKO3VCQUFNLE1BQUEsQUFBTSxTQUFaLEFBQXFCLEdBQUUsQUFDckI7K0JBQVcsTUFBWCxBQUFXLEFBQU0sQUFDakI7d0JBQUcsU0FBQSxBQUFTLFFBQVEsQ0FBQyxZQUFZLFNBQWpDLEFBQXFCLEFBQXFCLFVBQVMsT0FBQSxBQUFPLEFBQzNEO0FBQUMsd0JBQUEsQUFBTyxBQUNWO0FBVEQ7QUFVQSxnQkFBSSxvQkFBb0IsU0FBcEIsQUFBb0Isa0JBQUEsQUFBUyxTQUFRLEFBQ3ZDO3FCQUFBLEFBQUssS0FBTCxBQUFVLFFBQVEsWUFBVSxBQUMxQjt3QkFBQSxBQUFJLEFBQ0o7d0JBQUEsQUFBRyxRQUFPLEFBQ1I7Z0NBQUEsQUFBUSxLQUFSLEFBQWEsb0JBQWIsQUFBaUMsQUFDbEM7QUFGRCwyQkFFTyxJQUFHLFVBQVUsT0FBYixBQUFvQixvQkFBbUIsQUFDNUM7Z0NBQVEsRUFBQyxTQUFELEFBQVUsU0FBUyxRQUFRLFFBQW5DLEFBQVEsQUFBbUMsQUFDNUM7QUFDRjtBQVBELEFBUUQ7QUFURDtBQVVBLGdCQUFJLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBUztvQkFDakIsVUFBSixBQUFjLEFBQ2Q7b0JBQUcsUUFBSCxBQUFXLElBQUcsQUFDZDt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiOzBCQUFVLFFBQUEsQUFBUSxNQUpTLEFBSTNCLEFBQXdCLFFBSkcsQUFDM0IsQ0FHaUMsQUFDakM7d0JBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjt3QkFBQSxBQUFRLEtBQVIsQUFBYSxBQUNiO29CQUFHLENBQUMsUUFBSixBQUFZLElBQUcsUUFBQSxBQUFRLEtBQUssUUFBQSxBQUFRLEdBQXJCLEFBQWEsQUFBVyxBQUN2Qzt1QkFBQSxBQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFURDtBQVVBLGdCQUFJLFdBQVcsU0FBWCxBQUFXLFNBQUEsQUFBUztvQkFDbEIsVUFBSixBQUFjO29CQUFkLEFBQ0ksQUFDSjtvQkFBRyxRQUFILEFBQVcsSUFBRyxBQUNkO3dCQUFBLEFBQVEsS0FBUixBQUFhLEFBQ2I7MEJBQVUsUUFBQSxBQUFRLE1BTFUsQUFLNUIsQUFBd0IsUUFMSSxBQUM1QixDQUlpQyxBQUNqQztvQkFBSSxBQUNGO3dCQUFHLFlBQUgsQUFBZSxPQUFNLE1BQU0sVUFBTixBQUFNLEFBQVUsQUFDckM7d0JBQUcsT0FBTyxXQUFWLEFBQVUsQUFBVyxRQUFPLEFBQzFCO2tDQUFVLFlBQVUsQUFDbEI7Z0NBQUksVUFBVSxFQUFDLElBQUQsQUFBSyxTQUFTLElBRFYsQUFDbEIsQUFBYyxBQUFrQixTQUFRLEFBQ3hDO2dDQUFJLEFBQ0Y7cUNBQUEsQUFBSyxLQUFMLEFBQVUsT0FBTyxJQUFBLEFBQUksVUFBSixBQUFjLFNBQS9CLEFBQWlCLEFBQXVCLElBQUksSUFBQSxBQUFJLFNBQUosQUFBYSxTQUF6RCxBQUE0QyxBQUFzQixBQUNuRTtBQUZELDhCQUVFLE9BQUEsQUFBTSxHQUFFLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsU0FBYixBQUFzQixBQUN2QjtBQUNGO0FBUEQsQUFRRDtBQVRELDJCQVNPLEFBQ0w7Z0NBQUEsQUFBUSxLQUFSLEFBQWEsQUFDYjtnQ0FBQSxBQUFRLEtBQVIsQUFBYSxBQUNiOytCQUFBLEFBQU8sU0FBUCxBQUFnQixBQUNqQjtBQUNGO0FBaEJELGtCQWdCRSxPQUFBLEFBQU0sR0FBRSxBQUNSOzRCQUFBLEFBQVEsS0FBSyxFQUFDLElBQUQsQUFBSyxTQUFTLElBQTNCLEFBQWEsQUFBa0IsU0FEdkIsQUFDUixBQUF1QyxJQUFJLEFBQzVDO0FBQ0Y7QUF6QkQ7O0FBMkJBO0FBQ0EsZ0JBQUcsQ0FBSCxBQUFJLFlBQVcsQUFDYjtBQUNBOzJCQUFXLFNBQUEsQUFBUyxRQUFULEFBQWlCLFVBQVMsQUFDbkM7K0JBQUEsQUFBVyxNQUFYLEFBQWlCLFVBQWpCLEFBQTJCLFNBQTNCLEFBQW9DLEFBQ3BDOzhCQUFBLEFBQVUsQUFDVjs2QkFBQSxBQUFTLEtBQVQsQUFBYyxBQUNkO3dCQUFJLEFBQ0Y7aUNBQVMsSUFBQSxBQUFJLFVBQUosQUFBYyxNQUF2QixBQUFTLEFBQW9CLElBQUksSUFBQSxBQUFJLFNBQUosQUFBYSxNQUE5QyxBQUFpQyxBQUFtQixBQUNyRDtBQUZELHNCQUVFLE9BQUEsQUFBTSxLQUFJLEFBQ1Y7Z0NBQUEsQUFBUSxLQUFSLEFBQWEsTUFBYixBQUFtQixBQUNwQjtBQUNGO0FBVEQsQUFVQTsyQkFBVyxTQUFBLEFBQVMsUUFBVCxBQUFpQjt5QkFDMUIsQUFBSyxLQUQ4QixBQUNuQyxBQUFVLElBQWdCLEFBQzFCO3lCQUFBLEFBQUssS0FGOEIsQUFFbkMsQUFBVSxXQUFnQixBQUMxQjt5QkFBQSxBQUFLLEtBSDhCLEFBR25DLEFBQVUsRUFIeUIsQUFDbkMsQ0FFMEIsQUFDMUI7eUJBQUEsQUFBSyxLQUo4QixBQUluQyxBQUFVLE9BQWdCLEFBQzFCO3lCQUFBLEFBQUssS0FMOEIsQUFLbkMsQUFBVSxXQUFnQixBQUMxQjt5QkFBQSxBQUFLLEtBTjhCLEFBTW5DLEFBQVUsR0FBZ0IsQUFDMUI7eUJBQUEsQUFBSyxLQVA4QixBQU9uQyxBQUFVLE9BQWdCLEFBQzNCO0FBUkQsQUFTQTt5QkFBQSxBQUFTLG9CQUFZLEFBQVEsbUJBQW1CLFNBQTNCLEFBQW9DO0FBRXZEOzBCQUFNLFNBQUEsQUFBUyxLQUFULEFBQWMsYUFBZCxBQUEyQixZQUFXLEFBQzFDOzRCQUFJLFdBQWMscUJBQXFCLG1CQUFBLEFBQW1CLE1BQTFELEFBQWtCLEFBQXFCLEFBQXlCLEFBQ2hFO2lDQUFBLEFBQVMsS0FBUyxPQUFBLEFBQU8sZUFBUCxBQUFzQixhQUF0QixBQUFtQyxjQUFyRCxBQUFtRSxBQUNuRTtpQ0FBQSxBQUFTLE9BQVMsT0FBQSxBQUFPLGNBQVAsQUFBcUIsY0FBdkMsQUFBcUQsQUFDckQ7aUNBQUEsQUFBUyxTQUFTLFNBQVMsUUFBVCxBQUFpQixTQUFuQyxBQUE0QyxBQUM1Qzs2QkFBQSxBQUFLLEdBQUwsQUFBUSxLQUFSLEFBQWEsQUFDYjs0QkFBRyxLQUFILEFBQVEsSUFBRyxLQUFBLEFBQUssR0FBTCxBQUFRLEtBQVIsQUFBYSxBQUN4Qjs0QkFBRyxLQUFILEFBQVEsSUFBRyxPQUFBLEFBQU8sTUFBUCxBQUFhLEFBQ3hCOytCQUFPLFNBQVAsQUFBZ0IsQUFDakI7QUFYaUUsQUFZbEU7QUFDQTs2QkFBUyxnQkFBQSxBQUFTLFlBQVcsQUFDM0I7K0JBQU8sS0FBQSxBQUFLLEtBQUwsQUFBVSxXQUFqQixBQUFPLEFBQXFCLEFBQzdCO0FBZkgsQUFBcUIsQUFBK0MsQUFpQnBFO0FBakJvRSxBQUNsRSxpQkFEbUI7b0NBaUJELDZCQUFVLEFBQzVCO3dCQUFJLFVBQVcsSUFBZixBQUFlLEFBQUksQUFDbkI7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLFVBQVUsSUFBQSxBQUFJLFVBQUosQUFBYyxTQUE3QixBQUFlLEFBQXVCLEFBQ3RDO3lCQUFBLEFBQUssU0FBVSxJQUFBLEFBQUksU0FBSixBQUFhLFNBQTVCLEFBQWUsQUFBc0IsQUFDdEM7QUFMRCxBQU1EOzs7QUFFRCxvQkFBUSxRQUFBLEFBQVEsSUFBSSxRQUFaLEFBQW9CLElBQUksUUFBQSxBQUFRLElBQUksQ0FBNUMsQUFBNkMsWUFBWSxFQUFDLFNBQTFELEFBQXlELEFBQVU7QUFDbkUsb0JBQUEsQUFBUSx3QkFBUixBQUFnQyxVQUFoQyxBQUEwQztBQUMxQyxvQkFBQSxBQUFRLGtCQUFSLEFBQTBCO0FBQzFCLHNCQUFVLFFBQUEsQUFBUSxXQUFsQixBQUFVLEFBQW1COztBQUU3QjtBQUNBLG9CQUFRLFFBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxJQUFJLENBQWhDLEFBQWlDLFlBQWpDLEFBQTZDO0FBRTNDO3dCQUFRLFNBQUEsQUFBUyxPQUFULEFBQWdCLEdBQUUsQUFDeEI7d0JBQUksYUFBYSxxQkFBakIsQUFBaUIsQUFBcUI7d0JBQ2xDLFdBQWEsV0FEakIsQUFDNEIsQUFDNUI7NkJBQUEsQUFBUyxBQUNUOzJCQUFPLFdBQVAsQUFBa0IsQUFDbkI7QUFQSCxBQUFzRDtBQUFBLEFBQ3BEO0FBUUYsb0JBQVEsUUFBQSxBQUFRLElBQUksUUFBQSxBQUFRLEtBQUssV0FBVyxDQUE1QyxBQUFvQixBQUF5QixhQUE3QyxBQUEwRDtBQUV4RDt5QkFBUyxTQUFBLEFBQVMsUUFBVCxBQUFpQixHQUFFLEFBQzFCO0FBQ0E7d0JBQUcsYUFBQSxBQUFhLFlBQVksZ0JBQWdCLEVBQWhCLEFBQWtCLGFBQTlDLEFBQTRCLEFBQStCLE9BQU0sT0FBQSxBQUFPLEFBQ3hFO3dCQUFJLGFBQWEscUJBQWpCLEFBQWlCLEFBQXFCO3dCQUNsQyxZQUFhLFdBRGpCLEFBQzRCLEFBQzVCOzhCQUFBLEFBQVUsQUFDVjsyQkFBTyxXQUFQLEFBQWtCLEFBQ25CO0FBVEgsQUFBbUU7QUFBQSxBQUNqRTtBQVVGLG9CQUFRLFFBQUEsQUFBUSxJQUFJLFFBQUEsQUFBUSxNQUFNLHNCQUFjLEFBQVEsa0JBQWtCLFVBQUEsQUFBUyxNQUFLLEFBQ3RGO3lCQUFBLEFBQVMsSUFBVCxBQUFhLE1BQWIsQUFBbUIsU0FBbkIsQUFBNEIsQUFDN0I7QUFGRCxBQUFnQyxBQUFnQixhQUFBLENBQWhCLEdBQWhDLEFBRUs7QUFFSDtxQkFBSyxTQUFBLEFBQVMsSUFBVCxBQUFhLFVBQVMsQUFDekI7d0JBQUksSUFBSixBQUFpQjt3QkFDYixhQUFhLHFCQURqQixBQUNpQixBQUFxQjt3QkFDbEMsVUFBYSxXQUZqQixBQUU0Qjt3QkFDeEIsU0FBYSxXQUhqQixBQUc0QixBQUM1Qjt3QkFBSSxpQkFBaUIsWUFBVSxBQUM3Qjs0QkFBSSxTQUFKLEFBQWdCOzRCQUNaLFFBREosQUFDZ0I7NEJBQ1osWUFGSixBQUVnQixBQUNoQjs4QkFBQSxBQUFNLFVBQU4sQUFBZ0IsT0FBTyxVQUFBLEFBQVMsU0FBUSxBQUN0QztnQ0FBSSxTQUFKLEFBQW9CO2dDQUNoQixnQkFESixBQUNvQixBQUNwQjttQ0FBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO0FBQ0E7OEJBQUEsQUFBRSxRQUFGLEFBQVUsU0FBVixBQUFtQixLQUFLLFVBQUEsQUFBUyxPQUFNLEFBQ3JDO29DQUFBLEFBQUcsZUFBYyxBQUNqQjtnREFBQSxBQUFpQixBQUNqQjt1Q0FBQSxBQUFPLFVBQVAsQUFBaUIsQUFDakI7a0NBQUEsQUFBRSxhQUFhLFFBQWYsQUFBZSxBQUFRLEFBQ3hCO0FBTEQsK0JBQUEsQUFLRyxBQUNKO0FBWEQsQUFZQTswQkFBQSxBQUFFLGFBQWEsUUFBZixBQUFlLEFBQVEsQUFDeEI7QUFqQkQsQUFBYSxBQWtCYixxQkFsQmE7d0JBa0JiLEFBQUcsUUFBTyxPQUFPLE9BQVAsQUFBYyxBQUN4QjsyQkFBTyxXQUFQLEFBQWtCLEFBQ25CO0FBM0JXLEFBNEJaO0FBQ0E7c0JBQU0sU0FBQSxBQUFTLEtBQVQsQUFBYyxVQUFTLEFBQzNCO3dCQUFJLElBQUosQUFBaUI7d0JBQ2IsYUFBYSxxQkFEakIsQUFDaUIsQUFBcUI7d0JBQ2xDLFNBQWEsV0FGakIsQUFFNEIsQUFDNUI7d0JBQUksaUJBQWlCLFlBQVUsQUFDN0I7OEJBQUEsQUFBTSxVQUFOLEFBQWdCLE9BQU8sVUFBQSxBQUFTLFNBQVEsQUFDdEM7OEJBQUEsQUFBRSxRQUFGLEFBQVUsU0FBVixBQUFtQixLQUFLLFdBQXhCLEFBQW1DLFNBQW5DLEFBQTRDLEFBQzdDO0FBRkQsQUFHRDtBQUpELEFBQWEsQUFLYixxQkFMYTt3QkFLYixBQUFHLFFBQU8sT0FBTyxPQUFQLEFBQWMsQUFDeEI7MkJBQU8sV0FBUCxBQUFrQixBQUNuQjtBQTFDSCxBQUVjO0FBQUEsQUFDWjs7QUNsUUY7O0FBQ0EsZ0JBQUksU0FBUyxRQUFiLEFBQWEsQUFBUTs7QUFFckI7QUFDQSxtQkFBQSxBQUFPLGtCQUFVLEFBQVEsaUJBQVIsQUFBeUIsT0FBTyxVQUFBLEFBQVMsS0FBSSxBQUM1RDt1QkFBTyxTQUFBLEFBQVMsTUFBSyxBQUFFOzJCQUFPLElBQUEsQUFBSSxNQUFNLFVBQUEsQUFBVSxTQUFWLEFBQW1CLElBQUksVUFBdkIsQUFBdUIsQUFBVSxLQUFsRCxBQUFPLEFBQWdELEFBQWE7QUFBM0YsQUFDRDtBQUZnQixhQUFBO0FBSWY7cUJBQUssU0FBQSxBQUFTLElBQVQsQUFBYSxPQUFNLEFBQ3RCOzJCQUFPLE9BQUEsQUFBTyxJQUFQLEFBQVcsTUFBTSxRQUFRLFVBQUEsQUFBVSxJQUFWLEFBQWMsSUFBdkMsQUFBMkMsT0FBbEQsQUFBTyxBQUFrRCxBQUMxRDtBQU5jLEFBRWQ7QUFBQSxBQUNELGVBSEYsQUFBaUIsQUFPZDs7QUNYSDs7QUFDQSxnQkFBSSxNQUFPLFFBQUEsQUFBUSxnQkFBbkIsQUFBVyxBQUF3Qjs7QUFFbkM7QUFDQSxvQkFBQSxBQUFRLGtCQUFSLEFBQTBCLFFBQTFCLEFBQWtDLFVBQVUsVUFBQSxBQUFTO3FCQUNuRCxBQUFLLEtBQUssT0FEa0QsQUFDNUQsQUFBVSxBQUFPLFdBQVcsQUFDNUI7cUJBQUEsQUFBSyxLQUZ1RCxBQUU1RCxBQUFVLEVBRmtELEFBQzVELENBQzRCLEFBQzlCO0FBQ0M7QUFKRCxlQUlHLFlBQVUsQUFDWDtvQkFBSSxJQUFRLEtBQVosQUFBaUI7b0JBQ2IsUUFBUSxLQURaLEFBQ2lCO29CQURqQixBQUVJLEFBQ0o7b0JBQUcsU0FBUyxFQUFaLEFBQWMsUUFBTyxPQUFPLEVBQUMsT0FBRCxBQUFRLFdBQVcsTUFBMUIsQUFBTyxBQUF5QixBQUNyRDt3QkFBUSxJQUFBLEFBQUksR0FBWixBQUFRLEFBQU8sQUFDZjtxQkFBQSxBQUFLLE1BQU0sTUFBWCxBQUFpQixBQUNqQjt1QkFBTyxFQUFDLE9BQUQsQUFBUSxPQUFPLE1BQXRCLEFBQU8sQUFBcUIsQUFDN0I7QUFaRDs7OztBQ0pBOztBQUNBLGdCQUFJLFVBQVcsUUFBZixBQUFlLEFBQVE7O0FBRXZCLG9CQUFRLFFBQUEsQUFBUSxJQUFJLFFBQXBCLEFBQTRCLEdBQTVCLEFBQStCLE9BQU8sRUFBQyxRQUFRLFFBQUEsQUFBUSx5QkFBdkQsQUFBc0MsQUFBUyxBQUFpQzs7OztBQ0hoRjs7QUFDQSxnQkFBSSxVQUFXLFFBQWYsQUFBZSxBQUFROztBQUV2QixvQkFBUSxRQUFBLEFBQVEsSUFBSSxRQUFwQixBQUE0QixHQUE1QixBQUErQixPQUFPLEVBQUMsUUFBUSxRQUFBLEFBQVEseUJBQXZELEFBQXNDLEFBQVMsQUFBaUM7Ozs7QUNIaEYsb0JBQUEsQUFBUTtBQUNSLGdCQUFJLFNBQWdCLFFBQXBCLEFBQW9CLEFBQVE7Z0JBQ3hCLE9BQWdCLFFBRHBCLEFBQ29CLEFBQVE7Z0JBQ3hCLFlBQWdCLFFBRnBCLEFBRW9CLEFBQVE7Z0JBQ3hCLGdCQUFnQixRQUFBLEFBQVEsVUFINUIsQUFHb0IsQUFBa0I7O0FBRXRDLGlCQUFJLElBQUksY0FBYyxDQUFBLEFBQUMsWUFBRCxBQUFhLGdCQUFiLEFBQTZCLGFBQTdCLEFBQTBDLGtCQUE1RCxBQUFrQixBQUE0RCxnQkFBZ0IsSUFBbEcsQUFBc0csR0FBRyxJQUF6RyxBQUE2RyxHQUE3RyxBQUFnSCxLQUFJLEFBQ2xIO29CQUFJLE9BQWEsWUFBakIsQUFBaUIsQUFBWTtvQkFDekIsYUFBYSxPQURqQixBQUNpQixBQUFPO29CQUNwQixRQUFhLGNBQWMsV0FGL0IsQUFFMEMsQUFDMUM7b0JBQUcsU0FBUyxDQUFDLE1BQWIsQUFBYSxBQUFNLGdCQUFlLEtBQUEsQUFBSyxPQUFMLEFBQVksZUFBWixBQUEyQixBQUM3RDswQkFBQSxBQUFVLFFBQVEsVUFBbEIsQUFBNEIsQUFDN0I7O3VKQ1pEOztBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7O0FBQ0EsNkJBQ0E7O0FBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7QUFDQSxrQ0FDQTtzQ0FDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7O0FBQ0EsZ0NBQ0E7bURBQ0E7aURBQ0E7QUFDQTt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQTs7Ozs7Ozs7O0FBQ0EsbUNBQ0EsMERBQ0E7cURBQ0E7b0VBQ0EsU0FDQTt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7Ozs7O0FBQ0EsMERBQ0E7MkJBQ0E7cURBQ0EsQUFDQTs7OEJBQ0E7b0NBQ0E7bUNBQ0E7QUFDQSxBQUNBOzt3QkFDQTsrQkFDQTt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7Ozs7O0FBQ0Esb0NBQ0EsbUNBQ0EsdUNBQ0EsNkRBQ0E7cURBQ0EsQUFDQTs7QUFDQTsyQ0FDQTtzQ0FDQTsyQkFDQTtBQUNBLEFBQ0E7O0FBQ0E7Z0RBQ0E7dUNBQ0EsQUFDQTs7QUFDQTsyQ0FDQTsyQ0FDQTsyQkFDQTtBQUNBLEFBQ0E7O0FBQ0E7b0JBQ0E7MkRBQ0E7bUNBQ0E7bURBQ0E7NENBQ0E7QUFDQTtBQUNBO0FBQ0E7dUJBQ0E7QUFDQTs7QUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7OztBQUNBLHNEQUNBO3FEQUNBO29EQUNBO2dEQUNBLEFBQ0E7OytCQUNBO2dEQUNBOzBFQUNBO2lEQUNBO0FBQ0E7QUFDQSxBQUNBOzt1QkFDQTtBQUNBOztBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0E7Ozs7Ozs7O0FBQ0EsMkRBQ0E7cURBQ0E7aURBQ0E7QUFDQTs7QUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFDQSxBQUNBOzs7Ozs7OztBQUNBLDhEQUNBOytDQUNBO0FBQ0E7O0FDcEtBOztBQUNBLGdCQUFJLHdCQUF5QixBQUN6Qjt5QkFBQSxBQUFTLFlBQVksQUFDcEIsQ0FDRDswQkFBQSxBQUFVLHFCQUFWLEFBQStCLEFBQy9COzBCQUFBLEFBQVUsUUFBVixBQUFrQixBQUNsQjt1QkFBQSxBQUFPLEFBQ1Y7QUFORCxBQUFpQixhQUFBO0FBT2pCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDWEE7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSwyQ0FBa0MsQUFBVSxRQUFRLEFBQ3BEOzBCQUFBLEFBQVUsZ0NBQVYsQUFBMEMsQUFDMUM7eUJBQUEsQUFBUywrQkFBVCxBQUF3QyxhQUF4QyxBQUFxRCxjQUFyRCxBQUFtRSxPQUFPLEFBQ3RFOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3lCQUFBLEFBQUssZUFBTCxBQUFvQixBQUNwQjt5QkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBWHFDLGFBQUEsQ0FXcEMsVUFYRixBQUFzQyxBQVdwQyxBQUFVO0FBQ1osb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUN0QkE7Ozs7Ozs7O0FBQ0EsZ0JBQUksYUFBYSxRQUFqQixBQUFpQixBQUFRO0FBQ3pCLGdCQUFJLDhCQUErQixBQUMvQjt5QkFBQSxBQUFTLGdCQUFULEFBQXlCLGNBQXpCLEFBQXVDLFdBQXZDLEFBQWtELE9BQU8sQUFDckQ7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCO3lCQUFBLEFBQUssS0FBSyxLQUFNLGdCQUFOLEFBQU0sQUFBZ0IsaUNBQWhDLEFBQWtFLEFBQ2xFO3lCQUFBLEFBQUssaUJBQWlCLElBQUksV0FBMUIsQUFBc0IsQUFBSSxBQUFXLEFBQ3JDO3lCQUFBLEFBQUsscUJBQXFCLElBQUksV0FBOUIsQUFBMEIsQUFBSSxBQUFXLEFBQ3pDO3lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCO0FBQ0Q7QUFDQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixPQUFPLFlBQVksQUFDekM7d0JBQUksU0FBUyxJQUFBLEFBQUksZ0JBQWdCLEtBQXBCLEFBQXlCLGNBQWMsS0FBdkMsQUFBdUMsQUFBSyxnQkFBZ0IsS0FBekUsQUFBYSxBQUE0RCxBQUFLLEFBQzlFOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsdUJBQXVCLFVBQUEsQUFBVSxtQkFBbUIsQUFDMUU7d0JBQUksS0FBSixBQUFTLG1CQUFtQixBQUN4Qjs4QkFBQSxBQUFNLEFBQ1Q7QUFDRDt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQzVCO0FBTEQsQUFNQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQix1QkFBdUIsWUFBWSxBQUN6RDsyQkFBTyxLQUFQLEFBQVksQUFDZjtBQUZELEFBR0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsV0FBVyxZQUFZLEFBQzdDOzJCQUFPLEtBQVAsQUFBWSxBQUNmO0FBRkQsQUFHQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixXQUFXLFVBQUEsQUFBVSxVQUFVLEFBQ3JEO3dCQUFJLGdCQUFnQixnQkFBQSxBQUFnQixXQUFwQyxBQUFvQixBQUEyQixBQUMvQzt3QkFBSSxLQUFBLEFBQUssU0FBVCxBQUFrQixlQUNkLEFBQ0o7d0JBQUksV0FBVyxLQUFmLEFBQW9CLEFBQ3BCO3lCQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLFFBQVEsRUFBRSxZQUFGLEFBQWMsVUFBVSxZQUFwRCxBQUE0QixBQUFvQyxBQUNuRTtBQVBELEFBUUE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsZUFBZSxVQUFBLEFBQVUsY0FBYyxBQUM3RDt3QkFBSSxLQUFBLEFBQUssYUFBVCxBQUFzQixjQUNsQixBQUNKO3dCQUFJLGVBQWUsS0FBbkIsQUFBd0IsQUFDeEI7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ2pCO3lCQUFBLEFBQUssbUJBQUwsQUFBd0IsUUFBUSxFQUFFLFlBQUYsQUFBYyxjQUFjLFlBQTVELEFBQWdDLEFBQXdDLEFBQzNFO0FBTkQsQUFPQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixlQUFlLFlBQVksQUFDakQ7MkJBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLGFBQWEsVUFBQSxBQUFVLE9BQU8sQUFDMUM7d0JBQUksU0FBQSxBQUFTLFFBQVEsU0FBckIsQUFBOEIsV0FBVyxBQUNyQzsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDt3QkFBSSxTQUFKLEFBQWEsQUFDYjt3QkFBSSxrQkFBQSxBQUFrQixVQUFVLGtCQUE1QixBQUE4QyxXQUFXLGtCQUE3RCxBQUErRSxRQUFRLEFBQ25GO2lDQUFTLE1BQVQsQUFBUyxBQUFNLEFBQ2xCO0FBQ0Q7d0JBQUksa0JBQUosQUFBc0IsaUJBQWlCLEFBQ25DO2dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7aUNBQVMsS0FBQSxBQUFLLFdBQVcsTUFBekIsQUFBUyxBQUFzQixBQUNsQztBQUNEO3dCQUFJLEtBQUosQUFBUyxBQUNUO3dCQUFJLEtBQUEsQUFBSyxzQkFBTCxBQUEyQixlQUEzQixBQUEwQywrQ0FBMUMsQUFBMEMsV0FBVSxDQUFwRCxBQUFxRCxLQUFLLGtCQUE5RCxBQUFnRixNQUFNLEFBQ2xGOzZCQUFBLEFBQUssQUFDUjtBQUNEO3dCQUFJLENBQUosQUFBSyxJQUFJLEFBQ0w7OEJBQU0sSUFBQSxBQUFJLE1BQU0sNERBQUEsQUFBMkQsOENBQTNFLEFBQU0sQUFBVSxBQUEyRCxBQUM5RTtBQUNEOzJCQUFBLEFBQU8sQUFDVjtBQXBCRCxBQXFCQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixnQkFBZ0IsVUFBQSxBQUFVLGNBQWMsQUFDOUQ7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLFFBQXBCLEFBQTRCLEFBQzVCO2lDQUFhLEVBQUUsWUFBWSxLQUFkLEFBQW1CLE9BQU8sWUFBWSxLQUFuRCxBQUFhLEFBQTJDLEFBQzNEO0FBSEQsQUFJQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixvQkFBb0IsVUFBQSxBQUFVLGNBQWMsQUFDbEU7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixRQUF4QixBQUFnQyxBQUNuQztBQUZELEFBR0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsV0FBVyxVQUFBLEFBQVUsaUJBQWlCLEFBQzVEO3dCQUFBLEFBQUksaUJBQWlCLEFBQ2pCOzZCQUFBLEFBQUssYUFBYSxnQkFERCxBQUNqQixBQUFrQixBQUFnQixpQkFBaUIsQUFDbkQ7NkJBQUEsQUFBSyxTQUFTLGdCQUFkLEFBQThCLEFBQ2pDO0FBQ0o7QUFMRCxBQU1BO2dDQUFBLEFBQWdCLHdCQUF3QixDQUFBLEFBQUMsVUFBRCxBQUFXLFVBQW5ELEFBQXdDLEFBQXFCLEFBQzdEO2dDQUFBLEFBQWdCLCtCQUFoQixBQUErQyxBQUMvQzt1QkFBQSxBQUFPLEFBQ1Y7QUFqRkQsQUFBdUIsYUFBQTtBQWtGdkIsb0JBQUEsQUFBUSxrQkFBUixBQUEwQixBQUUxQjs7QUN0RkE7O0FBQ0EsZ0JBQUksNEJBQTRCLFFBQWhDLEFBQWdDLEFBQVE7QUFDeEMsZ0JBQUksVUFBVSxRQUFkLEFBQWMsQUFBUTtBQUN0QixnQkFBSSxtQkFBbUIsUUFBdkIsQUFBdUIsQUFBUTtBQUMvQixnQkFBSSw4QkFBK0IsQUFDL0I7eUJBQUEsQUFBUyxnQkFBVCxBQUF5QixhQUF6QixBQUFzQyxlQUF0QyxBQUFxRCxTQUFyRCxBQUE4RCxjQUFjLEFBQ3hFO3dCQUFJLFlBQVksS0FBaEIsQUFBcUIsR0FBRyxBQUFFO2tDQUFBLEFBQVUsQUFBSTtBQUN4Qzt3QkFBSSxpQkFBaUIsS0FBckIsQUFBMEIsR0FBRyxBQUFFO3VDQUFBLEFBQWUsQUFBSztBQUNuRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixBQUN4Qjt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUNyQjt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssUUFBUSxJQUFJLFFBQWpCLEFBQWEsQUFBSSxBQUFRLEFBQ3pCO3lCQUFBLEFBQUssaUJBQWlCLElBQUksaUJBQUosQUFBcUIsb0JBQXJCLEFBQXlDLE1BQS9ELEFBQXNCLEFBQStDLEFBQ3hFO0FBQ0Q7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsb0JBQW9CLFVBQUEsQUFBVSxZQUFZLEFBQ2hFO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDekI7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLGlCQUFpQixVQUFBLEFBQVUsU0FBUyxBQUMxRDt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFDdEI7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLGtCQUFrQixVQUFBLEFBQVUsYUFBYSxBQUMvRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDdkI7QUFGRCxBQUdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLG9CQUFvQixVQUFBLEFBQVUsWUFBWSxBQUNoRTt5QkFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3pCO0FBRkQsQUFHQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixPQUFPLFVBQUEsQUFBVSxTQUFWLEFBQW1CLFlBQVksQUFDNUQ7eUJBQUEsQUFBSyxhQUFMLEFBQWtCLEtBQUssRUFBRSxTQUFGLEFBQVcsU0FBUyxTQUEzQyxBQUF1QixBQUE2QixBQUNwRDt3QkFBSSxLQUFKLEFBQVM7NkJBQWtCLEFBQ3ZCLEFBQUssVUFEa0IsQUFDdkIsQ0FBZ0IsQUFDaEI7QUFDSDtBQUNEO3lCQUFBLEFBQUssQUFDUjtBQVBELEFBUUE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsYUFBYSxZQUFZLEFBQy9DO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLEtBQUEsQUFBSyxhQUFMLEFBQWtCLFNBQXRCLEFBQStCLEdBQUcsQUFDOUI7NEJBQUksS0FBSixBQUFTLGFBQWEsQUFDbEI7aUNBQUEsQUFBSyxBQUNSO0FBRkQsK0JBR0ssQUFDRDtpQ0FBQSxBQUFLLG1CQUFMLEFBQXdCLEFBQ3hCO0FBQ0g7QUFDSjtBQUNEO3lCQUFBLEFBQUssbUJBQUwsQUFBd0IsQUFDeEI7d0JBQUksa0JBQWtCLEtBQUEsQUFBSyxlQUFMLEFBQW9CLE1BQU0sS0FBaEQsQUFBc0IsQUFBK0IsQUFDckQ7d0JBQUksV0FBVyxnQkFBZ0IsZ0JBQUEsQUFBZ0IsU0FBaEMsQUFBeUMsR0FBeEQsQUFBMkQsQUFDM0Q7d0JBQUksMkJBQVcsQUFBZ0IsSUFBSSxVQUFBLEFBQVUsS0FBSyxBQUFFOytCQUFPLElBQVAsQUFBVyxBQUFVO0FBQXpFLEFBQWUsQUFDZixxQkFEZTt5QkFDZixBQUFLLFlBQUwsQUFBaUIsU0FBakIsQUFBMEIsVUFBVSxVQUFBLEFBQVUsVUFBVSxBQUNwRDtBQUNBOzRCQUFJLGFBQUosQUFBaUIsQUFDakI7aUNBQUEsQUFBUyxRQUFRLFVBQUEsQUFBVSxTQUFTLEFBQ2hDO2dDQUFJLFVBQVUsTUFBQSxBQUFNLE9BQXBCLEFBQWMsQUFBYSxBQUMzQjtnQ0FBQSxBQUFJLFNBQ0EsV0FBQSxBQUFXLEtBQVgsQUFBZ0IsQUFDdkI7QUFKRCxBQUtBOzRCQUFBLEFBQUksVUFBVSxBQUNWO3FDQUFBLEFBQVMsV0FEQyxBQUNWLEFBQW9CLGFBQWEsQUFDcEM7QUFDRDtBQUNBO0FBQ0E7bUNBQVcsWUFBWSxBQUFFO21DQUFPLE1BQVAsQUFBTyxBQUFNLEFBQWU7QUFBckQsMkJBQXVELE1BQXZELEFBQTZELEFBQ2hFO0FBZEQsQUFlSDtBQTlCRCxBQStCQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixTQUFTLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO3dCQUFJLFFBQUEsQUFBUSxNQUFaLEFBQWtCLDJCQUEyQixBQUN6QzsrQkFBTyxLQUFBLEFBQUsscUNBQVosQUFBTyxBQUEwQyxBQUNwRDtBQUZELCtCQUdTLFFBQUEsQUFBUSxNQUFaLEFBQWtCLDJCQUEyQixBQUM5QzsrQkFBTyxLQUFBLEFBQUsscUNBQVosQUFBTyxBQUEwQyxBQUNwRDtBQUZJLHFCQUFBLFVBR0ksUUFBQSxBQUFRLE1BQVosQUFBa0IsZ0JBQWdCLEFBQ25DOytCQUFPLEtBQUEsQUFBSywwQkFBWixBQUFPLEFBQStCLEFBQ3pDO0FBRkkscUJBQUEsVUFHSSxRQUFBLEFBQVEsTUFBWixBQUFrQiw0QkFBNEIsQUFDL0M7K0JBQU8sS0FBQSxBQUFLLHNDQUFaLEFBQU8sQUFBMkMsQUFDckQ7QUFGSSxxQkFBQSxNQUdBLEFBQ0Q7Z0NBQUEsQUFBUSxJQUFJLG9DQUFaLEFBQWdELEFBQ25EO0FBQ0Q7MkJBQUEsQUFBTyxBQUNWO0FBakJELEFBa0JBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLHVDQUF1QyxVQUFBLEFBQVUsZUFBZSxBQUN0Rjt3QkFBSSxRQUFRLEtBQUEsQUFBSyxjQUFMLEFBQW1CLDBCQUEwQixjQUF6RCxBQUFZLEFBQTJELEFBQ3ZFO3dCQUFJLENBQUosQUFBSyxPQUNELE9BQUEsQUFBTyxBQUNYO3lCQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsd0JBQXpDLEFBQWlFLE9BQWpFLEFBQXdFLEFBQ3hFOzJCQUFBLEFBQU8sQUFDVjtBQU5ELEFBT0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsdUNBQXVDLFVBQUEsQUFBVSxlQUFlLEFBQ3RGO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLEtBQUEsQUFBSyxjQUFMLEFBQW1CLHNCQUFuQixBQUF5QywwQkFBMEIsY0FBdkUsQUFBSSxBQUFpRixPQUFPLEFBQ3hGOzhCQUFNLElBQUEsQUFBSSxNQUFNLG1EQUFtRCxjQUFuRCxBQUFpRSxPQUFqRixBQUFNLEFBQWtGLEFBQzNGO0FBQ0Q7d0JBQUksYUFBSixBQUFpQixBQUNqQjtrQ0FBQSxBQUFjLFdBQWQsQUFBeUIsUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUM3Qzs0QkFBSSxrQkFBa0IsTUFBQSxBQUFNLGNBQU4sQUFBb0IsVUFBVSxLQUE5QixBQUFtQyxjQUFjLEtBQWpELEFBQXNELFdBQVcsS0FBdkYsQUFBc0IsQUFBc0UsQUFDNUY7NEJBQUksS0FBQSxBQUFLLE1BQU0sS0FBQSxBQUFLLEdBQUwsQUFBUSxNQUF2QixBQUFlLEFBQWMsU0FBUyxBQUNsQzs0Q0FBQSxBQUFnQixLQUFLLEtBQXJCLEFBQTBCLEFBQzdCO0FBQ0Q7bUNBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ25CO0FBTkQsQUFPQTt3QkFBSSxXQUFXLElBQUksMEJBQUosQUFBOEIsd0JBQXdCLGNBQXRELEFBQW9FLE1BQU0sY0FBekYsQUFBZSxBQUF3RixBQUN2Rzs2QkFBQSxBQUFTLGNBQVQsQUFBdUIsQUFDdkI7d0JBQUksY0FBSixBQUFrQixnQkFBZ0IsQUFDOUI7aUNBQUEsQUFBUyxpQkFBVCxBQUEwQixBQUM3QjtBQUNEO3lCQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsSUFBekMsQUFBNkMsQUFDN0M7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLGlDQUFuQixBQUFvRCxBQUNwRDsyQkFBQSxBQUFPLEFBQ1Y7QUFyQkQsQUFzQkE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsNEJBQTRCLFVBQUEsQUFBVSxlQUFlLEFBQzNFO3dCQUFJLGtCQUFrQixLQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsa0JBQWtCLGNBQWpGLEFBQXNCLEFBQXlFLEFBQy9GO3dCQUFJLENBQUosQUFBSyxpQkFBaUIsQUFDbEI7Z0NBQUEsQUFBUSxJQUFJLHVCQUF1QixjQUF2QixBQUFxQyxjQUFyQyxBQUFtRCx5Q0FBeUMsY0FBNUYsQUFBMEcsV0FBMUcsQUFBcUgsbUJBQW1CLGNBQXBKLEFBQWtLLEFBQ2xLOytCQUFBLEFBQU8sQUFDVjtBQUNEO3dCQUFJLGdCQUFBLEFBQWdCLGNBQWMsY0FBbEMsQUFBZ0QsVUFBVSxBQUN0RDtBQUNBOytCQUFBLEFBQU8sQUFDVjtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7b0NBQUEsQUFBZ0IsU0FBUyxjQUF6QixBQUF1QyxBQUN2QzsyQkFBQSxBQUFPLEFBQ1Y7QUFuQkQsQUFvQkE7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsd0NBQXdDLFVBQUEsQUFBVSxlQUFlLEFBQ3ZGO3dCQUFJLGtCQUFrQixLQUFBLEFBQUssY0FBTCxBQUFtQixzQkFBbkIsQUFBeUMsa0JBQWtCLGNBQWpGLEFBQXNCLEFBQXlFLEFBQy9GO3dCQUFJLENBQUosQUFBSyxpQkFDRCxPQUFBLEFBQU8sQUFDWDtvQ0FBZ0IsY0FBaEIsQUFBOEIsZ0JBQWdCLGNBQTlDLEFBQTRELEFBQzVEOzJCQUFBLEFBQU8sQUFDVjtBQU5ELEFBT0E7QUFDQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixTQUFTLFlBQVksQUFDM0M7d0JBQUksQ0FBQyxLQUFMLEFBQVUsYUFDTixBQUNKO3dCQUFJLEtBQUosQUFBUyxTQUNMLEFBQ0o7QUFDQTt3QkFBSSxDQUFDLEtBQUwsQUFBVSxrQkFBa0IsQUFDeEI7NkJBQUEsQUFBSyxBQUNSO0FBQ0o7QUFURCxBQVVBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLHFCQUFxQixZQUFZLEFBQ3ZEO3dCQUFJLEtBQUosQUFBUyxBQUNUO3lCQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7eUJBQUEsQUFBSyxhQUFMLEFBQWtCO2lDQUNMLEtBRFUsQUFDTCxBQUNkOzt3Q0FDZ0Isb0JBQUEsQUFBVSxRQUFRLEFBQUU7bUNBQUEsQUFBRyxVQUFILEFBQWEsQUFBUTtBQURoRCxBQUVMOzRDQUpSLEFBQXVCLEFBRVYsQUFFVyxBQUczQjtBQUxnQixBQUNMO0FBSGUsQUFDbkI7QUFKUixBQVdBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLFVBQVUsWUFBWSxBQUM1Qzt3QkFBSSxDQUFDLEtBQUwsQUFBVSxTQUNOLEFBQ0o7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjtBQUNBO3lCQUFBLEFBQUssWUFBTCxBQUFpQixPQUFPLEtBQXhCLEFBQTZCLEFBQ2hDO0FBTkQsQUFPQTt1QkFBQSxBQUFPLEFBQ1Y7QUF6S0QsQUFBdUIsYUFBQTtBQTBLdkIsb0JBQUEsQUFBUSxrQkFBUixBQUEwQixBQUUxQjs7QUNoTEE7O0FBQ0EsZ0JBQUksb0JBQW9CLFFBQXhCLEFBQXdCLEFBQVE7QUFDaEMsZ0JBQUksNEJBQTRCLFFBQWhDLEFBQWdDLEFBQVE7QUFDeEMsZ0JBQUksNEJBQTZCLEFBQzdCO3lCQUFBLEFBQVMsZ0JBQWdCLEFBQ3hCLENBQ0Q7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLHFCQUFxQixVQUFBLEFBQVUsaUJBQWlCLEFBQ3BFO3lCQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDMUI7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixxQkFBcUIsWUFBWSxBQUNyRDsyQkFBTyxLQUFQLEFBQVksQUFDZjtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLE9BQU8sVUFBQSxBQUFVLFNBQVYsQUFBbUIsWUFBWSxBQUMxRDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLEtBQXJCLEFBQTBCLFNBQTFCLEFBQW1DLEFBQ3RDO0FBRkQsQUFHQTtBQUNBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixZQUFZLFVBQUEsQUFBVSxjQUFWLEFBQXdCLFdBQXhCLEFBQW1DLE9BQU8sQUFDMUU7MkJBQU8sSUFBSSxrQkFBSixBQUFzQixnQkFBdEIsQUFBc0MsY0FBdEMsQUFBb0QsV0FBM0QsQUFBTyxBQUErRCxBQUN6RTtBQUZELEFBR0E7QUFDQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0Isb0JBQW9CLFVBQUEsQUFBVSxJQUFWLEFBQWMsTUFBTSxBQUM1RDt3QkFBSSxhQUFKLEFBQWlCLEFBQ2pCO3lCQUFLLElBQUksS0FBVCxBQUFjLEdBQUcsS0FBSyxVQUF0QixBQUFnQyxRQUFoQyxBQUF3QyxNQUFNLEFBQzFDO21DQUFXLEtBQVgsQUFBZ0IsS0FBSyxVQUFyQixBQUFxQixBQUFVLEFBQ2xDO0FBQ0Q7d0JBQUksUUFBUSxJQUFJLDBCQUFKLEFBQThCLHdCQUE5QixBQUFzRCxJQUFsRSxBQUFZLEFBQTBELEFBQ3RFO3dCQUFJLGNBQWMsV0FBQSxBQUFXLFNBQTdCLEFBQXNDLEdBQUcsQUFDckM7bUNBQUEsQUFBVyxRQUFRLFVBQUEsQUFBVSxXQUFXLEFBQ3BDO2tDQUFBLEFBQU0sYUFBTixBQUFtQixBQUN0QjtBQUZELEFBR0g7QUFDRDt5QkFBQSxBQUFLLHNCQUFMLEFBQTJCLElBQTNCLEFBQStCLEFBQy9COzJCQUFBLEFBQU8sQUFDVjtBQWJELEFBY0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLHNCQUFzQixVQUFBLEFBQVUsa0JBQWtCLEFBQ3RFO3lCQUFBLEFBQUssbUJBQUwsQUFBd0IsQUFDM0I7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixzQkFBc0IsWUFBWSxBQUN0RDsyQkFBTyxLQUFQLEFBQVksQUFDZjtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLDJCQUEyQixZQUFZLEFBQzNEOzJCQUFPLEtBQUEsQUFBSyxzQkFBWixBQUFPLEFBQTJCLEFBQ3JDO0FBRkQsQUFHQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IseUJBQXlCLFlBQVksQUFDekQ7MkJBQU8sS0FBQSxBQUFLLHNCQUFaLEFBQU8sQUFBMkIsQUFDckM7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixpQ0FBaUMsVUFBQSxBQUFVLHVCQUF1QixBQUN0RjsyQkFBTyxLQUFBLEFBQUssc0JBQUwsQUFBMkIsK0JBQWxDLEFBQU8sQUFBMEQsQUFDcEU7QUFGRCxBQUdBOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixRQUFRLFVBQUEsQUFBVSxJQUFJLEFBQzFDOzJCQUFPLEtBQUEsQUFBSywwQkFBWixBQUFPLEFBQStCLEFBQ3pDO0FBRkQsQUFHQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IsNEJBQTRCLFVBQUEsQUFBVSxJQUFJLEFBQzlEOzJCQUFPLEtBQUEsQUFBSyxzQkFBTCxBQUEyQiwwQkFBbEMsQUFBTyxBQUFxRCxBQUMvRDtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLDBCQUEwQixVQUFBLEFBQVUsZUFBZSxBQUN2RTt5QkFBQSxBQUFLLHNCQUFMLEFBQTJCLHdCQUEzQixBQUFtRCxlQUFuRCxBQUFrRSxBQUNyRTtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLG1DQUFtQyxVQUFBLEFBQVUsbUJBQW1CLEFBQ3BGO3dCQUFJLFFBQUosQUFBWSxBQUNaO3NDQUFBLEFBQWtCLGdCQUFsQixBQUFrQyxRQUFRLFVBQUEsQUFBVSxpQkFBaUIsQUFDakU7OEJBQUEsQUFBTSx5QkFBTixBQUErQixBQUNsQztBQUZELEFBR0g7QUFMRCxBQU1BOzhCQUFBLEFBQWMsVUFBZCxBQUF3QiwyQkFBMkIsVUFBQSxBQUFVLGlCQUFpQixBQUMxRTt3QkFBSSxDQUFDLGdCQUFMLEFBQUssQUFBZ0IsZ0JBQ2pCLEFBQ0o7d0JBQUksYUFBYSxLQUFBLEFBQUssc0JBQUwsQUFBMkIsNkJBQTZCLGdCQUF6RSxBQUFpQixBQUF3RCxBQUFnQixBQUN6RjsrQkFBQSxBQUFXLFFBQVEsVUFBQSxBQUFVLGlCQUFpQixBQUMxQzt3Q0FBQSxBQUFnQixTQUFTLGdCQURpQixBQUMxQyxBQUF5QixBQUFnQixhQUFhLEFBQ3pEO0FBRkQsQUFHSDtBQVBELEFBUUE7QUFDQTs4QkFBQSxBQUFjLFVBQWQsQUFBd0IscUJBQXFCLFVBQUEsQUFBVSxhQUFWLEFBQXVCLGdCQUFnQixBQUNoRjt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGdCQUFyQixBQUFxQyxBQUNyQzt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFyQixBQUF1QyxBQUN2Qzt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3BDO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDeEI7QUFMRCxBQU1BOzhCQUFBLEFBQWMsVUFBZCxBQUF3QixvQkFBb0IsWUFBWSxBQUNwRDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3ZDO0FBRkQsQUFHQTt1QkFBQSxBQUFPLEFBQ1Y7QUFoRkQsQUFBcUIsYUFBQTtBQWlGckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUN2RkE7QUFDQTs7QUFDQSxnQkFBSSxjQUFjLFFBQWxCLEFBQWtCLEFBQVE7QUFDMUIsZ0JBQUksbUNBQW1DLFFBQXZDLEFBQXVDLEFBQVE7QUFDL0MsZ0JBQUksbUNBQW1DLFFBQXZDLEFBQXVDLEFBQVE7QUFDL0MsZ0JBQUkseUNBQXlDLFFBQTdDLEFBQTZDLEFBQVE7QUFDckQsZ0JBQUksYUFBYSxRQUFqQixBQUFpQixBQUFRO0FBQ3pCLGdCQUFJLHdCQUF3QixRQUE1QixBQUE0QixBQUFRO0FBQ3BDLGFBQUMsVUFBQSxBQUFVLE1BQU0sQUFDYjtxQkFBSyxLQUFBLEFBQUssV0FBVixBQUFxQixXQUFyQixBQUFnQyxBQUNoQztxQkFBSyxLQUFBLEFBQUssYUFBVixBQUF1QixhQUF2QixBQUFvQyxBQUN2QztBQUhELGVBR0csUUFBQSxBQUFRLFNBQVMsUUFBQSxBQUFRLE9BSDVCLEFBR0csQUFBZ0M7QUFDbkMsZ0JBQUksT0FBTyxRQUFYLEFBQW1CO0FBQ25CLGdCQUFJLCtCQUFnQyxBQUNoQzt5QkFBQSxBQUFTLGlCQUFULEFBQTBCLGVBQWUsQUFDckM7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUNyQjt5QkFBQSxBQUFLLHFCQUFxQixJQUExQixBQUEwQixBQUFJLEFBQzlCO3lCQUFBLEFBQUssNEJBQTRCLElBQWpDLEFBQWlDLEFBQUksQUFDckM7eUJBQUEsQUFBSyxrQkFBa0IsSUFBdkIsQUFBdUIsQUFBSSxBQUMzQjt5QkFBQSxBQUFLLHlCQUF5QixJQUE5QixBQUE4QixBQUFJLEFBQ2xDO3lCQUFBLEFBQUssc0JBQXNCLElBQUksV0FBL0IsQUFBMkIsQUFBSSxBQUFXLEFBQzdDO0FBQ0Q7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsbUJBQW1CLFlBQVksQUFDdEQ7MkJBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFGRCxBQUdBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLGdCQUFnQixVQUFBLEFBQVUsT0FBTyxBQUN4RDt3QkFBSSxRQUFKLEFBQVksQUFDWjt3QkFBSSxNQUFKLEFBQVUsZ0JBQWdCLEFBQ3RCO0FBQ0g7QUFDRDt3QkFBSSxZQUFZLEtBQUEsQUFBSyxjQUFyQixBQUFnQixBQUFtQixBQUNuQzt3QkFBSSxrQkFBa0IsSUFBSSxpQ0FBSixBQUFJLEFBQWlDLFdBQTNELEFBQXNCLEFBQWdELEFBQ3RFOzhCQUFBLEFBQVUsS0FBVixBQUFlLGlCQUFmLEFBQWdDLEFBQ2hDOzBCQUFBLEFBQU0sZ0JBQU4sQUFBc0IsUUFBUSxVQUFBLEFBQVUsV0FBVyxBQUMvQzs4QkFBQSxBQUFNLGtCQUFOLEFBQXdCLEFBQzNCO0FBRkQsQUFHSDtBQVhELEFBWUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsb0JBQW9CLFVBQUEsQUFBVSxXQUFXLEFBQ2hFO3dCQUFJLFFBQUosQUFBWSxBQUNaO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7d0JBQUksVUFBSixBQUFJLEFBQVUsZ0JBQWdCLEFBQzFCOzZCQUFBLEFBQUssd0JBQUwsQUFBNkIsQUFDaEM7QUFDRDtBQUNBO0FBQ0E7OEJBQUEsQUFBVSxjQUFjLFVBQUEsQUFBVSxLQUFLLEFBQ25DOzRCQUFJLHFCQUFxQixJQUFJLHNCQUFKLEFBQUksQUFBc0IsV0FBVyxVQUFyQyxBQUErQyxJQUFJLElBQW5ELEFBQXVELFVBQVUsSUFBMUYsQUFBeUIsQUFBcUUsQUFDOUY7OEJBQUEsQUFBTSxjQUFOLEFBQW9CLHFCQUFwQixBQUF5QyxLQUF6QyxBQUE4QyxvQkFBOUMsQUFBa0UsQUFDbEU7NEJBQUksVUFBSixBQUFJLEFBQVUsZ0JBQWdCLEFBQzFCO2dDQUFJLGNBQVEsQUFBTSx1QkFBdUIsVUFBQSxBQUFVLE1BQU0sQUFDckQ7dUNBQU8sU0FBQSxBQUFTLGFBQWEsS0FBQSxBQUFLLGtCQUFrQixVQUFwRCxBQUFvRCxBQUFVLEFBQ2pFO0FBRkQsQUFBWSxBQUdaLDZCQUhZO2tDQUdaLEFBQU0sUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUMxQjtxQ0FBQSxBQUFLLFNBQVMsVUFBZCxBQUFjLEFBQVUsQUFDM0I7QUFGRCxBQUdIO0FBQ0o7QUFYRCxBQVlBOzhCQUFBLEFBQVUsa0JBQWtCLFVBQUEsQUFBVSxLQUFLLEFBQ3ZDOzRCQUFJLHdCQUF3QixJQUFJLGlDQUFKLEFBQUksQUFBaUMsV0FBVyxVQUFoRCxBQUEwRCxJQUFJLFlBQUEsQUFBWSxXQUExRSxBQUFxRixvQkFBb0IsSUFBckksQUFBNEIsQUFBNkcsQUFDekk7OEJBQUEsQUFBTSxjQUFOLEFBQW9CLHFCQUFwQixBQUF5QyxLQUF6QyxBQUE4Qyx1QkFBOUMsQUFBcUUsQUFDeEU7QUFIRCxBQUlIO0FBeEJELEFBeUJBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLE1BQU0sVUFBQSxBQUFVLE9BQU8sQUFDOUM7d0JBQUksQ0FBSixBQUFLLE9BQU8sQUFDUjsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDt3QkFBSSxLQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxNQUFoQyxBQUFJLEFBQWtDLEtBQUssQUFDdkM7Z0NBQUEsQUFBUSxJQUFJLG1DQUFtQyxNQUEvQyxBQUFxRCxBQUN4RDtBQUNEO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLENBQUMsS0FBQSxBQUFLLG1CQUFMLEFBQXdCLElBQUksTUFBakMsQUFBSyxBQUFrQyxLQUFLLEFBQ3hDOzZCQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxNQUE1QixBQUFrQyxJQUFsQyxBQUFzQyxBQUN0Qzs2QkFBQSxBQUFLLDJCQUFMLEFBQWdDLEFBQ2hDOzZCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsRUFBRSxhQUFhLEtBQWYsQUFBb0IsT0FBTywyQkFBNUQsQUFBaUMsQUFBc0QsQUFDdkY7Z0NBQUEsQUFBUSxBQUNYO0FBQ0Q7MkJBQUEsQUFBTyxBQUNWO0FBaEJELEFBaUJBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLFNBQVMsVUFBQSxBQUFVLE9BQU8sQUFDakQ7d0JBQUksUUFBSixBQUFZLEFBQ1o7d0JBQUksQ0FBSixBQUFLLE9BQU8sQUFDUjsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDt3QkFBSSxVQUFKLEFBQWMsQUFDZDt3QkFBSSxLQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBSSxNQUFoQyxBQUFJLEFBQWtDLEtBQUssQUFDdkM7NkJBQUEsQUFBSyw4QkFBTCxBQUFtQyxBQUNuQzs2QkFBQSxBQUFLLG1CQUFMLEFBQXdCLE9BQU8sTUFBL0IsQUFBcUMsQUFDckM7OEJBQUEsQUFBTSxnQkFBTixBQUFzQixRQUFRLFVBQUEsQUFBVSxXQUFXLEFBQy9DO2tDQUFBLEFBQU0sb0JBQU4sQUFBMEIsQUFDMUI7Z0NBQUksVUFBSixBQUFJLEFBQVUsZ0JBQWdCLEFBQzFCO3NDQUFBLEFBQU0sMkJBQU4sQUFBaUMsQUFDcEM7QUFDSjtBQUxELEFBTUE7NkJBQUEsQUFBSyxvQkFBTCxBQUF5QixRQUFRLEVBQUUsYUFBYSxLQUFmLEFBQW9CLFNBQVMsMkJBQTlELEFBQWlDLEFBQXdELEFBQ3pGO2tDQUFBLEFBQVUsQUFDYjtBQUNEOzJCQUFBLEFBQU8sQUFDVjtBQW5CRCxBQW9CQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQix5QkFBeUIsVUFBQSxBQUFVLFFBQVEsQUFDbEU7d0JBQUksVUFBSixBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixRQUFRLFVBQUEsQUFBVSxPQUFPLEFBQzdDOzhCQUFBLEFBQU0sZ0JBQU4sQUFBc0IsUUFBUSxVQUFBLEFBQVUsTUFBTSxBQUMxQztnQ0FBSSxPQUFKLEFBQUksQUFBTyxPQUFPLEFBQ2Q7d0NBQUEsQUFBUSxLQUFSLEFBQWEsQUFDaEI7QUFDSjtBQUpELEFBS0g7QUFORCxBQU9BOzJCQUFBLEFBQU8sQUFDVjtBQVZELEFBV0E7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsNkJBQTZCLFVBQUEsQUFBVSxPQUFPLEFBQ3JFO3dCQUFJLENBQUosQUFBSyxPQUFPLEFBQ1I7QUFDSDtBQUNEO3dCQUFJLE9BQU8sTUFBWCxBQUFpQixBQUNqQjt3QkFBSSxDQUFKLEFBQUssTUFBTSxBQUNQO0FBQ0g7QUFDRDt3QkFBSSxxQkFBcUIsS0FBQSxBQUFLLDBCQUFMLEFBQStCLElBQXhELEFBQXlCLEFBQW1DLEFBQzVEO3dCQUFJLENBQUosQUFBSyxvQkFBb0IsQUFDckI7NkNBQUEsQUFBcUIsQUFDckI7NkJBQUEsQUFBSywwQkFBTCxBQUErQixJQUEvQixBQUFtQyxNQUFuQyxBQUF5QyxBQUM1QztBQUNEO3dCQUFJLEVBQUUsbUJBQUEsQUFBbUIsUUFBbkIsQUFBMkIsU0FBUyxDQUExQyxBQUFJLEFBQXVDLElBQUksQUFDM0M7MkNBQUEsQUFBbUIsS0FBbkIsQUFBd0IsQUFDM0I7QUFDSjtBQWhCRCxBQWlCQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQixnQ0FBZ0MsVUFBQSxBQUFVLE9BQU8sQUFDeEU7d0JBQUksQ0FBQSxBQUFDLFNBQVMsQ0FBRSxNQUFoQixBQUFzQix1QkFBd0IsQUFDMUM7QUFDSDtBQUNEO3dCQUFJLHFCQUFxQixLQUFBLEFBQUssMEJBQUwsQUFBK0IsSUFBSSxNQUE1RCxBQUF5QixBQUF5QyxBQUNsRTt3QkFBSSxDQUFKLEFBQUssb0JBQW9CLEFBQ3JCO0FBQ0g7QUFDRDt3QkFBSSxtQkFBQSxBQUFtQixTQUFTLENBQWhDLEFBQWlDLEdBQUcsQUFDaEM7MkNBQUEsQUFBbUIsT0FBTyxtQkFBQSxBQUFtQixRQUE3QyxBQUEwQixBQUEyQixRQUFyRCxBQUE2RCxBQUNoRTtBQUNEO3dCQUFJLG1CQUFBLEFBQW1CLFdBQXZCLEFBQWtDLEdBQUcsQUFDakM7NkJBQUEsQUFBSywwQkFBTCxBQUErQixPQUFPLE1BQXRDLEFBQTRDLEFBQy9DO0FBQ0o7QUFkRCxBQWVBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLDJCQUEyQixZQUFZLEFBQzlEO3dCQUFJLFNBQUosQUFBYSxBQUNiO3dCQUFJLE9BQU8sS0FBQSxBQUFLLG1CQUFoQixBQUFXLEFBQXdCLEFBQ25DO3dCQUFJLE9BQU8sS0FBWCxBQUFXLEFBQUssQUFDaEI7MkJBQU8sQ0FBQyxLQUFSLEFBQWEsTUFBTSxBQUNmOytCQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLEFBQ2pCOytCQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2Y7QUFDRDsyQkFBQSxBQUFPLEFBQ1Y7QUFURCxBQVVBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLHlCQUF5QixZQUFZLEFBQzVEO3dCQUFJLFNBQUosQUFBYSxBQUNiO3dCQUFJLE9BQU8sS0FBQSxBQUFLLG1CQUFoQixBQUFXLEFBQXdCLEFBQ25DO3dCQUFJLE9BQU8sS0FBWCxBQUFXLEFBQUssQUFDaEI7MkJBQU8sQ0FBQyxLQUFSLEFBQWEsTUFBTSxBQUNmOytCQUFBLEFBQU8sS0FBSyxLQUFaLEFBQWlCLEFBQ2pCOytCQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2Y7QUFDRDsyQkFBQSxBQUFPLEFBQ1Y7QUFURCxBQVVBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLDRCQUE0QixVQUFBLEFBQVUsSUFBSSxBQUNqRTsyQkFBTyxLQUFBLEFBQUssbUJBQUwsQUFBd0IsSUFBL0IsQUFBTyxBQUE0QixBQUN0QztBQUZELEFBR0E7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsaUNBQWlDLFVBQUEsQUFBVTt3QkFDOUQsQ0FBQSxBQUFDLFFBQVEsQ0FBQyxLQUFBLEFBQUssMEJBQUwsQUFBK0IsSUFBN0MsQUFBYyxBQUFtQyxPQUFPLEFBQ3BEOytCQUFBLEFBQU8sQUFDVjtBQUNEOzJCQUFPLEtBQUEsQUFBSywwQkFBTCxBQUErQixJQUEvQixBQUFtQyxNQUFuQyxBQUF5QyxNQUp3QixBQUl4RSxBQUFPLEFBQStDLEdBSmtCLEFBQ3hFLENBRzBELEFBQzdEO0FBTEQsQUFNQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQiwwQkFBMEIsVUFBQSxBQUFVLE9BQVYsQUFBaUIsUUFBUSxBQUMxRTt3QkFBSSxDQUFKLEFBQUssT0FBTyxBQUNSO0FBQ0g7QUFDRDt3QkFBSSxLQUFBLEFBQUssMEJBQTBCLE1BQW5DLEFBQUksQUFBcUMsS0FBSyxBQUMxQzs2QkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaOzRCQUFJLENBQUEsQUFBQyxVQUFVLE1BQWYsQUFBcUIsZ0JBQWdCLEFBQ2pDO0FBQ0g7QUFDRDs2QkFBQSxBQUFLLGNBQUwsQUFBbUIscUJBQW5CLEFBQXdDLEtBQUssSUFBSSx1Q0FBSixBQUFJLEFBQXVDLFdBQVcsTUFBbkcsQUFBNkMsQUFBNEQsS0FBekcsQUFBOEcsQUFDakg7QUFDSjtBQVhELEFBWUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsNEJBQTRCLFVBQUEsQUFBVSxJQUFJLEFBQ2pFOzJCQUFPLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixJQUEvQixBQUFPLEFBQTRCLEFBQ3RDO0FBRkQsQUFHQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQixtQkFBbUIsVUFBQSxBQUFVLFdBQVcsQUFDL0Q7d0JBQUksQ0FBQSxBQUFDLGFBQWEsS0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQUksVUFBM0MsQUFBa0IsQUFBbUMsS0FBSyxBQUN0RDtBQUNIO0FBQ0Q7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFJLFVBQXpCLEFBQW1DLElBQW5DLEFBQXVDLEFBQzFDO0FBTEQsQUFNQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQixzQkFBc0IsVUFBQSxBQUFVLFdBQVcsQUFDbEU7d0JBQUksQ0FBQSxBQUFDLGFBQWEsQ0FBQyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBSSxVQUE1QyxBQUFtQixBQUFtQyxLQUFLLEFBQ3ZEO0FBQ0g7QUFDRDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLE9BQU8sVUFBNUIsQUFBc0MsQUFDekM7QUFMRCxBQU1BO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLG9CQUFvQixVQUFBLEFBQVUsSUFBSSxBQUN6RDsyQkFBTyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBNUIsQUFBTyxBQUF5QixBQUNuQztBQUZELEFBR0E7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsMEJBQTBCLFVBQUEsQUFBVSxXQUFXLEFBQ3RFO3dCQUFJLENBQUEsQUFBQyxhQUFhLENBQUMsVUFBbkIsQUFBbUIsQUFBVSxnQkFBZ0IsQUFDekM7QUFDSDtBQUNEO3dCQUFJLGFBQWEsS0FBQSxBQUFLLHVCQUFMLEFBQTRCLElBQUksVUFBakQsQUFBaUIsQUFBZ0MsQUFBVSxBQUMzRDt3QkFBSSxDQUFKLEFBQUssWUFBWSxBQUNiO3FDQUFBLEFBQWEsQUFDYjs2QkFBQSxBQUFLLHVCQUFMLEFBQTRCLElBQUksVUFBaEMsQUFBZ0MsQUFBVSxnQkFBMUMsQUFBMEQsQUFDN0Q7QUFDRDt3QkFBSSxFQUFFLFdBQUEsQUFBVyxRQUFYLEFBQW1CLGFBQWEsQ0FBdEMsQUFBSSxBQUFtQyxJQUFJLEFBQ3ZDO21DQUFBLEFBQVcsS0FBWCxBQUFnQixBQUNuQjtBQUNKO0FBWkQsQUFhQTtpQ0FBQSxBQUFpQixVQUFqQixBQUEyQiw2QkFBNkIsVUFBQSxBQUFVLFdBQVcsQUFDekU7d0JBQUksQ0FBQSxBQUFDLGFBQWEsQ0FBQyxVQUFuQixBQUFtQixBQUFVLGdCQUFnQixBQUN6QztBQUNIO0FBQ0Q7d0JBQUksYUFBYSxLQUFBLEFBQUssdUJBQUwsQUFBNEIsSUFBSSxVQUFqRCxBQUFpQixBQUFnQyxBQUFVLEFBQzNEO3dCQUFJLENBQUosQUFBSyxZQUFZLEFBQ2I7QUFDSDtBQUNEO3dCQUFJLFdBQUEsQUFBVyxTQUFTLENBQXhCLEFBQXlCLEdBQUcsQUFDeEI7bUNBQUEsQUFBVyxPQUFPLFdBQUEsQUFBVyxRQUE3QixBQUFrQixBQUFtQixZQUFyQyxBQUFpRCxBQUNwRDtBQUNEO3dCQUFJLFdBQUEsQUFBVyxXQUFmLEFBQTBCLEdBQUcsQUFDekI7NkJBQUEsQUFBSyx1QkFBTCxBQUE0QixPQUFPLFVBQW5DLEFBQW1DLEFBQVUsQUFDaEQ7QUFDSjtBQWRELEFBZUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsK0JBQStCLFVBQUEsQUFBVTt3QkFDNUQsQ0FBQSxBQUFDLGFBQWEsQ0FBQyxLQUFBLEFBQUssdUJBQUwsQUFBNEIsSUFBL0MsQUFBbUIsQUFBZ0MsWUFBWSxBQUMzRDsrQkFBQSxBQUFPLEFBQ1Y7QUFDRDsyQkFBTyxLQUFBLEFBQUssdUJBQUwsQUFBNEIsSUFBNUIsQUFBZ0MsV0FBaEMsQUFBMkMsTUFKeUIsQUFJM0UsQUFBTyxBQUFpRCxHQUptQixBQUMzRSxDQUc0RCxBQUMvRDtBQUxELEFBTUE7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIscUJBQXFCLFVBQUEsQUFBVSxjQUFjLEFBQ3BFO3lCQUFBLEFBQUssb0JBQUwsQUFBeUIsUUFBekIsQUFBaUMsQUFDcEM7QUFGRCxBQUdBO2lDQUFBLEFBQWlCLFVBQWpCLEFBQTJCLDRCQUE0QixVQUFBLEFBQVUsdUJBQVYsQUFBaUMsY0FBYyxBQUNsRzt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsVUFBQSxBQUFVLGNBQWMsQUFDckQ7NEJBQUksYUFBQSxBQUFhLHdCQUFiLEFBQXFDLHlCQUF6QyxBQUFrRSx1QkFBdUIsQUFDckY7eUNBQUEsQUFBYSxBQUNoQjtBQUNKO0FBSkQsQUFLSDtBQU5ELEFBT0E7dUJBQUEsQUFBTyxBQUNWO0FBek9ELEFBQXdCLGFBQUE7QUEwT3hCLG9CQUFBLEFBQVEsbUJBQVIsQUFBMkIsQUFFM0I7O0FDelBBOztBQUNBLGdCQUFJLGFBQWEsUUFBakIsQUFBaUIsQUFBUTtBQUN6QixnQkFBSSxpQyxBQUFKLEFBQXFDLEdBQUc7QUFDeEMsZ0JBQUksc0NBQXVDLEFBQ3ZDO3lCQUFBLEFBQVMsd0JBQVQsQUFBaUMsSUFBakMsQUFBcUMsdUJBQXVCLEFBQ3hEO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7eUJBQUEsQUFBSyx3QkFBTCxBQUE2QixBQUM3Qjt5QkFBQSxBQUFLLGFBQUwsQUFBa0IsQUFDbEI7eUJBQUEsQUFBSyxpQkFBTCxBQUFzQixBQUN0Qjt5QkFBQSxBQUFLLFFBQUwsQUFBYSxBQUNiO3dCQUFJLE9BQUEsQUFBTyxPQUFQLEFBQWMsZUFBZSxNQUFqQyxBQUF1QyxNQUFNLEFBQ3pDOzZCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2I7QUFGRCwyQkFHSyxBQUNEOzZCQUFBLEFBQUssS0FBSyxDQUFBLEFBQUMsa0NBQVgsQUFBVSxBQUFtQyxBQUNoRDtBQUNEO3lCQUFBLEFBQUssYUFBYSxJQUFJLFdBQXRCLEFBQWtCLEFBQUksQUFBVyxBQUNqQzt5QkFBQSxBQUFLLHNCQUFzQixJQUFJLFdBQS9CLEFBQTJCLEFBQUksQUFBVyxBQUM3QztBQUNEO0FBQ0E7QUFDQTt3Q0FBQSxBQUF3QixVQUF4QixBQUFrQyxPQUFPLFlBQVksQUFDakQ7d0JBQUksU0FBUyxJQUFBLEFBQUksd0JBQUosQUFBNEIsTUFBTSxLQUEvQyxBQUFhLEFBQXVDLEFBQ3BEOzJCQUFBLEFBQU8saUJBQVAsQUFBd0IsQUFDeEI7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixRQUFRLFVBQUEsQUFBVSxXQUFXLEFBQzlDOzRCQUFJLGdCQUFnQixVQUFwQixBQUFvQixBQUFVLEFBQzlCOytCQUFBLEFBQU8sYUFBUCxBQUFvQixBQUN2QjtBQUhELEFBSUE7MkJBQUEsQUFBTyxBQUNWO0FBUkQsQUFTQTtBQUNBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLGdCQUFnQixVQUFBLEFBQVUsWUFBWSxBQUNwRTt3QkFBSSxRQUFKLEFBQVksQUFDWjt3QkFBSSxDQUFBLEFBQUMsY0FBYyxXQUFBLEFBQVcsU0FBOUIsQUFBdUMsR0FDbkMsQUFDSjsrQkFBQSxBQUFXLFFBQVEsVUFBQSxBQUFVLE1BQU0sQUFDL0I7OEJBQUEsQUFBTSxhQUFOLEFBQW1CLEFBQ3RCO0FBRkQsQUFHSDtBQVBELEFBUUE7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsZUFBZSxVQUFBLEFBQVUsV0FBVyxBQUNsRTt3QkFBSSxRQUFKLEFBQVksQUFDWjt3QkFBSSxDQUFBLEFBQUMsYUFBYyxLQUFBLEFBQUssV0FBTCxBQUFnQixRQUFoQixBQUF3QixhQUFhLENBQXhELEFBQXlELEdBQUksQUFDekQ7QUFDSDtBQUNEO3dCQUFJLEtBQUEsQUFBSyw0QkFBNEIsVUFBckMsQUFBSSxBQUEyQyxlQUFlLEFBQzFEOzhCQUFNLElBQUEsQUFBSSxNQUFNLHVEQUF1RCxVQUF2RCxBQUFpRSxlQUFqRSxBQUNWLHFDQUFxQyxLQUQzQyxBQUFNLEFBQzBDLEFBQ25EO0FBQ0Q7d0JBQUksVUFBQSxBQUFVLGtCQUFrQixLQUFBLEFBQUsseUJBQXlCLFVBQTlELEFBQWdDLEFBQThCLEFBQVUsaUJBQWlCLEFBQ3JGOzhCQUFNLElBQUEsQUFBSSxNQUFNLG1EQUFtRCxVQUFuRCxBQUFtRCxBQUFVLGlCQUE3RCxBQUNWLHFDQUFxQyxLQUQzQyxBQUFNLEFBQzBDLEFBQ25EO0FBQ0Q7OEJBQUEsQUFBVSxxQkFBVixBQUErQixBQUMvQjt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsS0FBaEIsQUFBcUIsQUFDckI7OEJBQUEsQUFBVSxjQUFjLFVBQUEsQUFBVSxLQUFLLEFBQ25DOzhCQUFBLEFBQU0sV0FBTixBQUFpQixRQUFRLEVBQUUsUUFBM0IsQUFBeUIsQUFBVSxBQUN0QztBQUZELEFBR0g7QUFsQkQsQUFtQkE7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsZ0JBQWdCLFVBQUEsQUFBVSxrQkFBa0IsQUFDMUU7eUJBQUEsQUFBSyxXQUFMLEFBQWdCLFFBQWhCLEFBQXdCLEFBQzNCO0FBRkQsQUFHQTtBQUNBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLGdCQUFnQixZQUFZLEFBQzFEOzJCQUFPLEtBQUEsQUFBSyxXQUFMLEFBQWdCLE1BQXZCLEFBQU8sQUFBc0IsQUFDaEM7QUFGRCxBQUdBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLFFBQVEsVUFBQSxBQUFVLGNBQWMsQUFDOUQ7MkJBQU8sS0FBQSxBQUFLLDRCQUFaLEFBQU8sQUFBaUMsQUFDM0M7QUFGRCxBQUdBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLGtDQUFrQyxVQUFBLEFBQVUsY0FBYyxBQUN4Rjt3QkFBSSxTQUFKLEFBQWEsQUFDYjt3QkFBSSxDQUFKLEFBQUssY0FDRCxPQUFBLEFBQU8sQUFDWDt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsUUFBUSxVQUFBLEFBQVUsV0FBVyxBQUN6Qzs0QkFBSSxVQUFBLEFBQVUsZ0JBQWQsQUFBOEIsY0FBYyxBQUN4QzttQ0FBQSxBQUFPLEtBQVAsQUFBWSxBQUNmO0FBQ0o7QUFKRCxBQUtBOzJCQUFBLEFBQU8sQUFDVjtBQVZELEFBV0E7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsOEJBQThCLFVBQUEsQUFBVSxjQUFjLEFBQ3BGO3dCQUFJLENBQUosQUFBSyxjQUNELE9BQUEsQUFBTyxBQUNYO3lCQUFLLElBQUksSUFBVCxBQUFhLEdBQUcsSUFBSSxLQUFBLEFBQUssV0FBekIsQUFBb0MsUUFBcEMsQUFBNEMsS0FBSyxBQUM3Qzs0QkFBSyxLQUFBLEFBQUssV0FBTCxBQUFnQixHQUFoQixBQUFtQixnQkFBeEIsQUFBd0MsY0FBZSxBQUNuRDttQ0FBTyxLQUFBLEFBQUssV0FBWixBQUFPLEFBQWdCLEFBQzFCO0FBQ0o7QUFDRDsyQkFBQSxBQUFPLEFBQ1Y7QUFURCxBQVVBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLDJCQUEyQixVQUFBLEFBQVUsV0FBVyxBQUM5RTt3QkFBSSxDQUFKLEFBQUssV0FDRCxPQUFBLEFBQU8sQUFDWDt5QkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBQSxBQUFLLFdBQXpCLEFBQW9DLFFBQXBDLEFBQTRDLEtBQUssQUFDN0M7NEJBQUksS0FBQSxBQUFLLFdBQUwsQUFBZ0IsR0FBaEIsQUFBbUIsa0JBQXZCLEFBQXlDLFdBQVcsQUFDaEQ7bUNBQU8sS0FBQSxBQUFLLFdBQVosQUFBTyxBQUFnQixBQUMxQjtBQUNKO0FBQ0Q7QUFDQTsyQkFBQSxBQUFPLEFBQ1Y7QUFWRCxBQVdBO3dDQUFBLEFBQXdCLFVBQXhCLEFBQWtDLG9CQUFvQixVQUFBLEFBQVUsSUFBSSxBQUNoRTt3QkFBSSxDQUFKLEFBQUssSUFDRCxPQUFBLEFBQU8sQUFDWDt5QkFBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksS0FBQSxBQUFLLFdBQXpCLEFBQW9DLFFBQXBDLEFBQTRDLEtBQUssQUFDN0M7NEJBQUksS0FBQSxBQUFLLFdBQUwsQUFBZ0IsR0FBaEIsQUFBbUIsTUFBdkIsQUFBNkIsSUFBSSxBQUM3QjttQ0FBTyxLQUFBLEFBQUssV0FBWixBQUFPLEFBQWdCLEFBQzFCO0FBQ0o7QUFDRDtBQUNBOzJCQUFBLEFBQU8sQUFDVjtBQVZELEFBV0E7d0NBQUEsQUFBd0IsVUFBeEIsQUFBa0MsV0FBVyxVQUFBLEFBQVUseUJBQXlCLEFBQzVFO3lCQUFBLEFBQUssV0FBTCxBQUFnQixRQUFRLFVBQUEsQUFBVSxpQkFBaUIsQUFDL0M7NEJBQUksa0JBQWtCLHdCQUFBLEFBQXdCLE1BQU0sZ0JBQXBELEFBQXNCLEFBQThDLEFBQ3BFOzRCQUFBLEFBQUksaUJBQWlCLEFBQ2pCOzRDQUFBLEFBQWdCLFNBQWhCLEFBQXlCLEFBQzVCO0FBQ0o7QUFMRCxBQU1IO0FBUEQsQUFRQTt1QkFBQSxBQUFPLEFBQ1Y7QUFySEQsQUFBK0IsYUFBQTtBQXNIL0Isb0JBQUEsQUFBUSwwQkFBUixBQUFrQyxBQUVsQzs7QUMzSEE7O0FBQ0EsZ0JBQUksb0JBQXFCLEFBQ3JCO3lCQUFBLEFBQVMsUUFBUSxBQUNoQixDQUNEO3NCQUFBLEFBQU0sVUFBTixBQUFnQixTQUFTLFVBQUEsQUFBVTsyQkFDeEIsS0FBQSxBQUFLLFVBRDZCLEFBQ3pDLEFBQU8sQUFBZSxVQURtQixBQUN6QyxDQUFpQyxBQUNwQztBQUZELEFBR0E7c0JBQUEsQUFBTSxVQUFOLEFBQWdCLFNBQVMsVUFBQSxBQUFVLGFBQWEsQUFDNUM7d0JBQUksT0FBQSxBQUFPLGVBQVgsQUFBMEIsVUFBVSxBQUNoQzsrQkFBTyxLQUFBLEFBQUssTUFBWixBQUFPLEFBQVcsQUFDckI7QUFGRCwyQkFHSyxBQUNEOytCQUFBLEFBQU8sQUFDVjtBQUNKO0FBUEQsQUFRQTt1QkFBQSxBQUFPLEFBQ1Y7QUFmRCxBQUFhLGFBQUE7QUFnQmIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUNwQkE7O0FBQ0EsZ0JBQUksc0JBQXVCLEFBQ3ZCO3lCQUFBLEFBQVMsVUFBVSxBQUNmO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ2I7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFMRCxBQUFlLGFBQUE7QUFNZixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ1ZBOztBQUNBLGdCQUFJLHdCQUF3QixRQUE1QixBQUE0QixBQUFRO0FBQ3BDO0FBQ0EsZ0JBQUksK0JBQWdDLEFBQ2hDO3lCQUFBLEFBQVMsbUJBQW1CLEFBQzNCLENBQ0Q7aUNBQUEsQUFBaUIsVUFBakIsQUFBMkIsUUFBUSxVQUFBLEFBQVUsT0FBTyxBQUNoRDsyQkFBTyxDQUFDLE1BQVIsQUFBTyxBQUFDLEFBQU0sQUFDakI7QUFGRCxBQUdBO3VCQUFBLEFBQU8sQUFDVjtBQVBELEFBQXdCLGFBQUE7QUFReEIsb0JBQUEsQUFBUSxtQkFBUixBQUEyQjtBQUMzQjtBQUNBLGdCQUFJLGtDQUFtQyxBQUNuQztBQUNBO3lCQUFBLEFBQVMsb0JBQVQsQUFBNkIsU0FBN0IsQUFBc0MsY0FBYyxBQUNoRDt3QkFBSSxZQUFZLEtBQWhCLEFBQXFCLEdBQUcsQUFBRTtrQ0FBQSxBQUFVLEFBQU87QUFDM0M7d0JBQUksaUJBQWlCLEtBQXJCLEFBQTBCLEdBQUcsQUFBRTt1Q0FBQSxBQUFlLEFBQUs7QUFDbkQ7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDdkI7QUFDRDtvQ0FBQSxBQUFvQixVQUFwQixBQUE4QixRQUFRLFVBQUEsQUFBVSxPQUFPLEFBQ25EO3dCQUFJLFFBQUosQUFBWSxBQUNaO3dCQUFJLElBQUksS0FBQSxBQUFLLElBQUksTUFBVCxBQUFlLFFBQVEsS0FBL0IsQUFBUSxBQUE0QixBQUNwQzt5QkFBSyxJQUFJLFVBQVQsQUFBbUIsR0FBRyxVQUF0QixBQUFnQyxHQUFoQyxBQUFtQyxXQUFXLEFBQzFDOzRCQUFJLFlBQVksTUFBaEIsQUFBZ0IsQUFBTSxBQUN0Qjs0QkFBSSxLQUFBLEFBQUssV0FBVyxVQUFBLEFBQVUsbUJBQW1CLHNCQUE3QyxBQUE2QyxBQUFzQixjQUFlLENBQUMsVUFBdkYsQUFBaUcsU0FBVSxBQUN2RztnQ0FBSSxRQUFKLEFBQVksQUFDWjtnQ0FBSSxTQUFTLFVBQWIsQUFBdUIsQUFDdkI7aUNBQUssSUFBSSxJQUFULEFBQWEsR0FBRyxJQUFJLE1BQUosQUFBVSxVQUFVLFNBQXBDLEFBQTZDLE1BQTdDLEFBQW1ELEtBQUssQUFDcEQ7b0NBQUksTUFBQSxBQUFNLEdBQU4sQUFBUyxtQkFBbUIsc0JBQWhDLEFBQWdDLEFBQXNCLFlBQVksQUFDOUQ7d0NBQUksV0FBVyxNQUFBLEFBQU0sR0FBckIsQUFBd0IsQUFDeEI7d0NBQUksT0FBQSxBQUFPLGVBQWUsU0FBdEIsQUFBK0IsZUFBZSxTQUFBLEFBQVMsWUFBWSxPQUF2RSxBQUE4RSxVQUFVLEFBQ3BGO2dEQUFBLEFBQVEsQUFDWDtBQUNKO0FBQ0o7QUFDRDtnQ0FBQSxBQUFJLE9BQU8sQUFDUDtzQ0FBQSxBQUFNLFdBQVcsT0FEVixBQUNQLEFBQXdCLFVBQVUsQUFDckM7QUFGRCxtQ0FHSyxBQUNEO3NDQUFBLEFBQU0sS0FETCxBQUNELEFBQVcsWUFBWSxBQUMxQjtBQUNKO0FBakJELCtCQWtCSyxBQUNEO2tDQUFBLEFBQU0sS0FBTixBQUFXLEFBQ2Q7QUFDRDs0QkFBSSxVQUFBLEFBQVUsV0FDVCxVQUFBLEFBQVUsUUFBVixBQUFrQixnQkFEdkIsQUFDdUMsOENBRHZDLEFBQ3NGOzBCQUNwRixBQUNFO0FBREYsdUNBQ1MsQUFDVjtBQUNKO0FBQ0Q7MkJBQUEsQUFBTyxBQUNWO0FBakNELEFBa0NBO3VCQUFBLEFBQU8sQUFDVjtBQTNDRCxBQUEyQixhQUFBO0FBNEMzQixvQkFBQSxBQUFRLHNCQUFSLEFBQThCLEFBRTlCOztBQzNEQTs7QUFDQSxnQkFBSSwrQkFBZ0MsQUFDaEM7eUJBQUEsQUFBUyxtQkFBbUIsQUFDM0IsQ0FDRDtpQ0FBQSxBQUFpQiwwQkFBakIsQUFBMkMsQUFDM0M7aUNBQUEsQUFBaUIsOEJBQThCLGlCQUFBLEFBQWlCLDBCQUFoRSxBQUEwRixBQUMxRjtpQ0FBQSxBQUFpQiwrQkFBK0IsaUJBQUEsQUFBaUIsMEJBQWpFLEFBQTJGLEFBQzNGO2lDQUFBLEFBQWlCLGlDQUFpQyxpQkFBQSxBQUFpQiwwQkFBbkUsQUFBNkYsQUFDN0Y7aUNBQUEsQUFBaUIsa0NBQWtDLGlCQUFBLEFBQWlCLDBCQUFwRSxBQUE4RixBQUM5RjtpQ0FBQSxBQUFpQixzQ0FBc0MsaUJBQUEsQUFBaUIsMEJBQXhFLEFBQWtHLEFBQ2xHO2lDQUFBLEFBQWlCLCtCQUErQixpQkFBQSxBQUFpQiwwQkFBakUsQUFBMkYsQUFDM0Y7aUNBQUEsQUFBaUIsbUNBQW1DLGlCQUFBLEFBQWlCLDBCQUFyRSxBQUErRixBQUMvRjt1QkFBQSxBQUFPLEFBQ1Y7QUFaRCxBQUF3QixhQUFBO0FBYXhCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDakJBOztBQUNBLGdCQUFJLFlBQWEsYUFBUSxVQUFULEFBQWMsYUFBYyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDeEQ7cUJBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO3dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFDbkQsMEJBQUEsQUFBUyxLQUFLLEFBQUU7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQUk7QUFDdkM7a0JBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLE9BQUEsQUFBTyxPQUFwQixBQUFhLEFBQWMsTUFBTSxHQUFBLEFBQUcsWUFBWSxFQUFmLEFBQWlCLFdBQVcsSUFBM0UsQUFBYyxBQUE2RCxBQUFJLEFBQ2xGO0FBSkQ7QUFLQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsZ0JBQUkscUJBQXFCLFFBQXpCLEFBQXlCLEFBQVE7QUFDakMsZ0JBQUksaUNBQXdCLEFBQVUsUUFBUSxBQUMxQzswQkFBQSxBQUFVLHNCQUFWLEFBQWdDLEFBQ2hDO3lCQUFBLEFBQVMsdUJBQXVCLEFBQzVCOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxLQUFLLG1CQUFBLEFBQW1CLFdBQTdCLEFBQXdDLEFBQ3hDO3lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNwQjtBQUNEO3VCQUFBLEFBQU8sQUFDVjtBQVIyQixhQUFBLENBUTFCLFVBUkYsQUFBNEIsQUFRMUIsQUFBVTtBQUNaLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDcEJBOztBQUNBLGdCQUFJLFlBQWEsYUFBUSxVQUFULEFBQWMsYUFBYyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDeEQ7cUJBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO3dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFDbkQsMEJBQUEsQUFBUyxLQUFLLEFBQUU7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQUk7QUFDdkM7a0JBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLE9BQUEsQUFBTyxPQUFwQixBQUFhLEFBQWMsTUFBTSxHQUFBLEFBQUcsWUFBWSxFQUFmLEFBQWlCLFdBQVcsSUFBM0UsQUFBYyxBQUE2RCxBQUFJLEFBQ2xGO0FBSkQ7QUFLQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsZ0JBQUksMkNBQWtDLEFBQVUsUUFBUSxBQUNwRDswQkFBQSxBQUFVLGdDQUFWLEFBQTBDLEFBQzFDO3lCQUFBLEFBQVMsK0JBQVQsQUFBd0MsbUJBQW1CLEFBQ3ZEOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO3lCQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDakI7eUJBQUEsQUFBSyxPQUFPLGtCQUFaLEFBQThCLEFBQzlCO3lCQUFBLEFBQUssU0FBUyxrQkFBZCxBQUFnQyxBQUNoQzt3QkFBSSxRQUFRLEtBQVosQUFBaUIsQUFDakI7c0NBQUEsQUFBa0IsZ0JBQWxCLEFBQWtDLFFBQVEsVUFBQSxBQUFVLE1BQU0sQUFDdEQ7OEJBQUEsQUFBTTswQ0FDWSxLQURQLEFBQ1ksQUFDbkI7Z0NBQUksS0FGRyxBQUVFLEFBQ1Q7dUNBQVcsS0FISixBQUdJLEFBQUssQUFDaEI7bUNBQU8sS0FKWCxBQUFXLEFBSUEsQUFBSyxBQUVuQjtBQU5jLEFBQ1A7QUFGUixBQVFIO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBckJxQyxhQUFBLENBcUJwQyxVQXJCRixBQUFzQyxBQXFCcEMsQUFBVTtBQUNaLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDaENBOztBQUNBLGdCQUFJLFlBQWEsYUFBUSxVQUFULEFBQWMsYUFBYyxVQUFBLEFBQVUsR0FBVixBQUFhLEdBQUcsQUFDeEQ7cUJBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxHQUFHO3dCQUFJLEVBQUEsQUFBRSxlQUFOLEFBQUksQUFBaUIsSUFBSSxFQUFBLEFBQUUsS0FBSyxFQUFqRCxBQUEwQyxBQUFPLEFBQUU7QUFDbkQsMEJBQUEsQUFBUyxLQUFLLEFBQUU7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQUk7QUFDdkM7a0JBQUEsQUFBRSxZQUFZLE1BQUEsQUFBTSxPQUFPLE9BQUEsQUFBTyxPQUFwQixBQUFhLEFBQWMsTUFBTSxHQUFBLEFBQUcsWUFBWSxFQUFmLEFBQWlCLFdBQVcsSUFBM0UsQUFBYyxBQUE2RCxBQUFJLEFBQ2xGO0FBSkQ7QUFLQSxnQkFBSSxZQUFZLFFBQWhCLEFBQWdCLEFBQVE7QUFDeEIsZ0JBQUksaURBQXdDLEFBQVUsUUFBUSxBQUMxRDswQkFBQSxBQUFVLHNDQUFWLEFBQWdELEFBQ2hEO3lCQUFBLEFBQVMscUNBQVQsQUFBOEMsTUFBTSxBQUNoRDsyQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO3lCQUFBLEFBQUssT0FBTCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDcEI7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFUMkMsYUFBQSxDQVMxQyxVQVRGLEFBQTRDLEFBUzFDLEFBQVU7QUFDWixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ3BCQTs7QUFDQSxnQkFBSSxZQUFhLGFBQVEsVUFBVCxBQUFjLGFBQWMsVUFBQSxBQUFVLEdBQVYsQUFBYSxHQUFHLEFBQ3hEO3FCQUFLLElBQUwsQUFBUyxLQUFULEFBQWMsR0FBRzt3QkFBSSxFQUFBLEFBQUUsZUFBTixBQUFJLEFBQWlCLElBQUksRUFBQSxBQUFFLEtBQUssRUFBakQsQUFBMEMsQUFBTyxBQUFFO0FBQ25ELDBCQUFBLEFBQVMsS0FBSyxBQUFFO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUFJO0FBQ3ZDO2tCQUFBLEFBQUUsWUFBWSxNQUFBLEFBQU0sT0FBTyxPQUFBLEFBQU8sT0FBcEIsQUFBYSxBQUFjLE1BQU0sR0FBQSxBQUFHLFlBQVksRUFBZixBQUFpQixXQUFXLElBQTNFLEFBQWMsQUFBNkQsQUFBSSxBQUNsRjtBQUpEO0FBS0EsZ0JBQUksWUFBWSxRQUFoQixBQUFnQixBQUFRO0FBQ3hCLGdCQUFJLHFCQUFxQixRQUF6QixBQUF5QixBQUFRO0FBQ2pDLGdCQUFJLGtDQUF5QixBQUFVLFFBQVEsQUFDM0M7MEJBQUEsQUFBVSx1QkFBVixBQUFpQyxBQUNqQzt5QkFBQSxBQUFTLHdCQUF3QixBQUM3QjsyQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO3lCQUFBLEFBQUssS0FBSyxtQkFBQSxBQUFtQixXQUE3QixBQUF3QyxBQUN4Qzt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDcEI7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFSNEIsYUFBQSxDQVEzQixVQVJGLEFBQTZCLEFBUTNCLEFBQVU7QUFDWixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ3BCQTs7QUFDQSxnQkFBSSxvQkFBb0IsUUFBeEIsQUFBd0IsQUFBUTtBQUNoQyxnQkFBSSxrQkFBa0IsUUFBdEIsQUFBc0IsQUFBUTtBQUM5QixnQkFBSSxxQkFBcUIsUUFBekIsQUFBeUIsQUFBUTtBQUNqQyxnQkFBSSxvQkFBb0IsUUFBeEIsQUFBd0IsQUFBUTtBQUNoQyxnQkFBSSxrQkFBa0IsUUFBdEIsQUFBc0IsQUFBUTtBQUM5QixnQkFBSSw2QkFBOEIsQUFDOUI7eUJBQUEsQUFBUyxpQkFBaUIsQUFDdEI7eUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixBQUNyQjt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDdkI7QUFDRDsrQkFBQSxBQUFlLFVBQWYsQUFBeUIsTUFBTSxVQUFBLEFBQVUsS0FBSyxBQUMxQzt5QkFBQSxBQUFLLE9BQUwsQUFBWSxBQUNaOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7K0JBQUEsQUFBZSxVQUFmLEFBQXlCLFFBQVEsVUFBQSxBQUFVLE9BQU8sQUFDOUM7eUJBQUEsQUFBSyxTQUFMLEFBQWMsQUFDZDsyQkFBQSxBQUFPLEFBQ1Y7QUFIRCxBQUlBOytCQUFBLEFBQWUsVUFBZixBQUF5QixVQUFVLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO3lCQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjsyQkFBQSxBQUFPLEFBQ1Y7QUFIRCxBQUlBOytCQUFBLEFBQWUsVUFBZixBQUF5QixlQUFlLFVBQUEsQUFBVSxjQUFjLEFBQzVEO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsQUFDckI7MkJBQUEsQUFBTyxBQUNWO0FBSEQsQUFJQTsrQkFBQSxBQUFlLFVBQWYsQUFBeUIsY0FBYyxVQUFBLEFBQVUsYUFBYSxBQUMxRDt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7MkJBQUEsQUFBTyxBQUNWO0FBSEQsQUFJQTsrQkFBQSxBQUFlLFVBQWYsQUFBeUIsZUFBZSxVQUFBLEFBQVUsY0FBYyxBQUM1RDt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3JCOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7K0JBQUEsQUFBZSxVQUFmLEFBQXlCLGNBQWMsVUFBQSxBQUFVLGFBQWEsQUFDMUQ7eUJBQUEsQUFBSyxlQUFMLEFBQW9CLEFBQ3BCOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7K0JBQUEsQUFBZSxVQUFmLEFBQXlCLFFBQVEsWUFBWSxBQUN6Qzs0QkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaO3dCQUFJLGdCQUFnQixJQUFJLGdCQUF4QixBQUFvQixBQUFJLEFBQWdCLEFBQ3hDO3dCQUFBLEFBQUksQUFDSjt3QkFBSSxLQUFBLEFBQUssUUFBTCxBQUFhLFFBQVEsS0FBQSxBQUFLLEtBQUwsQUFBVSxTQUFuQyxBQUE0QyxHQUFHLEFBQzNDO3NDQUFjLElBQUksa0JBQUosQUFBSSxBQUFrQixXQUFXLEtBQWpDLEFBQXNDLE1BQU0sS0FBNUMsQUFBaUQsUUFBakQsQUFBeUQsU0FBUyxLQUFsRSxBQUF1RSxlQUFlLEtBQXRGLEFBQTJGLGNBQWMsS0FBdkgsQUFBYyxBQUE4RyxBQUMvSDtBQUZELDJCQUdLLEFBQ0Q7c0NBQWMsSUFBSSxnQkFBbEIsQUFBYyxBQUFJLEFBQWdCLEFBQ3JDO0FBQ0Q7a0NBQUEsQUFBYyxtQkFBbUIsSUFBSSxrQkFBSixBQUFzQixnQkFBdEIsQUFBc0MsYUFBdEMsQUFBbUQsZUFBZSxLQUFsRSxBQUF1RSxVQUFVLEtBQWxILEFBQWlDLEFBQXNGLEFBQ3ZIO2tDQUFBLEFBQWMsb0JBQW9CLElBQUksbUJBQUosQUFBdUIsaUJBQXpELEFBQWtDLEFBQXdDLEFBQzFFOzRCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7MkJBQUEsQUFBTyxBQUNWO0FBZEQsQUFlQTt1QkFBQSxBQUFPLEFBQ1Y7QUFuREQsQUFBc0IsYUFBQTtBQW9EdEIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUM3REE7O0FBQ0EsZ0JBQUksdUJBQXdCLEFBQ3hCO3lCQUFBLEFBQVMsV0FBVyxBQUNoQjt5QkFBQSxBQUFLLGdCQUFMLEFBQXFCLEFBQ3hCO0FBQ0Q7eUJBQUEsQUFBUyxVQUFULEFBQW1CLFVBQVUsVUFBQSxBQUFVLGNBQWMsQUFDakQ7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEtBQW5CLEFBQXdCLEFBQzNCO0FBRkQsQUFHQTt5QkFBQSxBQUFTLFVBQVQsQUFBbUIsVUFBVSxVQUFBLEFBQVUsT0FBTyxBQUMxQzt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsUUFBUSxVQUFBLEFBQVUsUUFBUSxBQUFFOytCQUFPLE9BQVAsQUFBTyxBQUFPLEFBQVM7QUFBdEUsQUFDSDtBQUZELEFBR0E7dUJBQUEsQUFBTyxBQUNWO0FBWEQsQUFBZ0IsYUFBQTtBQVloQixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ2hCQTs7QUFDQSxnQkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRO0FBQ3RCLGdCQUFJLDhCQUErQixBQUMvQjt5QkFBQSxBQUFTLGdCQUFULEFBQXlCLEtBQXpCLEFBQThCLE9BQTlCLEFBQXFDLFNBQXJDLEFBQThDLGNBQTlDLEFBQTRELGFBQTVELEFBQXlFLGFBQWEsQUFDbEY7d0JBQUksVUFBVSxLQUFkLEFBQW1CLEdBQUcsQUFBRTtnQ0FBQSxBQUFRLEFBQU87QUFDdkM7d0JBQUksWUFBWSxLQUFoQixBQUFxQixHQUFHLEFBQUU7a0NBQUEsQUFBVSxBQUFVO0FBQzlDO3dCQUFJLGlCQUFpQixLQUFyQixBQUEwQixHQUFHLEFBQUU7dUNBQUEsQUFBZSxBQUFPO0FBQ3JEO3dCQUFJLGdCQUFnQixLQUFwQixBQUF5QixHQUFHLEFBQUU7c0NBQUEsQUFBYyxBQUFRO0FBQ3BEO3dCQUFJLGdCQUFnQixLQUFwQixBQUF5QixHQUFHLEFBQUU7c0NBQUEsQUFBYyxBQUFPO0FBQ25EO3lCQUFBLEFBQUssTUFBTCxBQUFXLEFBQ1g7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLO2tDQUFZLEFBQ0gsQUFDVjtpQ0FGSixBQUFpQixBQUVKLEFBRWI7QUFKaUIsQUFDYjt5QkFHSixBQUFLLGVBQUwsQUFBb0IsQUFDcEI7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjt5QkFBQSxBQUFLLE9BQU8sSUFBWixBQUFZLEFBQUksQUFDaEI7eUJBQUEsQUFBSyxNQUFNLElBQVgsQUFBVyxBQUFJLEFBQ2Y7d0JBQUksS0FBSixBQUFTLGFBQWEsQUFDbEI7NEJBQUkscUJBQXFCLEtBQXpCLEFBQThCLE1BQU0sQUFDaEM7aUNBQUEsQUFBSyxLQUFMLEFBQVUsa0JBRHNCLEFBQ2hDLEFBQTRCLE1BQU0sQUFDbEM7aUNBQUEsQUFBSyxJQUFMLEFBQVMsa0JBQVQsQUFBMkIsQUFDOUI7QUFDSjtBQUNEO3lCQUFBLEFBQUssUUFBUSxJQUFJLFFBQWpCLEFBQWEsQUFBSSxBQUFRLEFBQ3pCO3dCQUFBLEFBQUksT0FBTyxBQUNQO2dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7NkJBQUEsQUFBSyxBQUNSO0FBQ0o7QUFDRDtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixXQUFXLFVBQUEsQUFBVSxVQUFWLEFBQW9CLFFBQVEsQUFDN0Q7d0JBQUksUUFBSixBQUFZLEFBQ1o7eUJBQUEsQUFBSyxLQUFMLEFBQVUsVUFBVSxVQUFBLEFBQVUsS0FBSyxBQUMvQjs4QkFBQSxBQUFNLFlBQU4sQUFBa0IsV0FBbEIsQUFBNkIsQUFDN0I7K0JBQUEsQUFBTyxBQUNWO0FBSEQsQUFJQTt5QkFBQSxBQUFLLEtBQUwsQUFBVSxxQkFBcUIsVUFBQSxBQUFVLEtBQUssQUFDMUM7NEJBQUksTUFBQSxBQUFNLEtBQU4sQUFBVyxjQUFjLE1BQUEsQUFBTSxVQUFuQyxBQUE2QyxVQUFVLEFBQ25EO2dDQUFJLE1BQUEsQUFBTSxLQUFOLEFBQVcsVUFBVSxNQUFBLEFBQU0sVUFBL0IsQUFBeUMsU0FBUyxBQUM5QztvQ0FBSSxlQUFlLE1BQUEsQUFBTSxLQUF6QixBQUE4QixBQUM5QjtvQ0FBSSxhQUFBLEFBQWEsT0FBYixBQUFvQixTQUF4QixBQUFpQyxHQUFHLEFBQ2hDO3dDQUFJLEFBQ0E7NENBQUksbUJBQW1CLE1BQUEsQUFBTSxNQUFOLEFBQVksT0FBbkMsQUFBdUIsQUFBbUIsQUFDMUM7K0NBQUEsQUFBTyxBQUNWO0FBSEQsc0NBSUEsT0FBQSxBQUFPLEtBQUssQUFDUjtnREFBQSxBQUFRLElBQVIsQUFBWSx5Q0FBWixBQUFxRCxBQUNyRDtnREFBQSxBQUFRLElBQVIsQUFBWSw0QkFBWixBQUF3QyxBQUN4Qzs4Q0FBQSxBQUFNLFlBQU4sQUFBa0IsZUFBZSw4Q0FBakMsQUFBK0UsQUFDL0U7K0NBQUEsQUFBTyxBQUNWO0FBQ0o7QUFYRCx1Q0FZSyxBQUNEOzBDQUFBLEFBQU0sWUFBTixBQUFrQixlQUFsQixBQUFpQyxBQUNqQzsyQ0FBQSxBQUFPLEFBQ1Y7QUFDSjtBQWxCRCxtQ0FtQkssQUFDRDtzQ0FBQSxBQUFNLFlBQU4sQUFBa0IsZUFBbEIsQUFBaUMsQUFDakM7dUNBQUEsQUFBTyxBQUNWO0FBQ0o7QUFDSjtBQTFCRCxBQTJCQTt5QkFBQSxBQUFLLEtBQUwsQUFBVSxLQUFWLEFBQWUsUUFBUSxLQUF2QixBQUE0QixLQUE1QixBQUFpQyxBQUNqQzt5QkFBQSxBQUFLLFdBQVcsS0FBaEIsQUFBcUIsQUFDckI7d0JBQUksc0JBQXNCLEtBQTFCLEFBQStCLE1BQU0sQUFDakM7NkJBQUEsQUFBSyxLQUFMLEFBQVUsaUJBQWlCLCtCQUErQixLQUR6QixBQUNqQyxBQUErRCxVQUFVLEFBQzVFO0FBQ0Q7eUJBQUEsQUFBSyxLQUFMLEFBQVUsS0FBSyxLQUFBLEFBQUssTUFBTCxBQUFXLE9BQTFCLEFBQWUsQUFBa0IsQUFDcEM7QUF2Q0QsQUF3Q0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsYUFBYSxVQUFBLEFBQVUsU0FBUyxBQUN0RDt3QkFBSSxLQUFKLEFBQVMsYUFBYSxBQUNsQjs2QkFBSyxJQUFMLEFBQVMsS0FBSyxLQUFkLEFBQW1CLGFBQWEsQUFDNUI7Z0NBQUksS0FBQSxBQUFLLFlBQUwsQUFBaUIsZUFBckIsQUFBSSxBQUFnQyxJQUFJLEFBQ3BDO3dDQUFBLEFBQVEsaUJBQVIsQUFBeUIsR0FBRyxLQUFBLEFBQUssWUFBakMsQUFBNEIsQUFBaUIsQUFDaEQ7QUFDSjtBQUNKO0FBQ0o7QUFSRCxBQVNBO2dDQUFBLEFBQWdCLFVBQWhCLEFBQTBCLGNBQWMsVUFBQSxBQUFVLE1BQVYsQUFBZ0IsU0FBUyxBQUM3RDt3QkFBSSxhQUFhLEVBQUUsTUFBRixBQUFRLE1BQU0sS0FBSyxLQUFuQixBQUF3QixLQUFLLFlBQVksS0FBQSxBQUFLLEtBQTlDLEFBQW1ELFFBQVEsU0FBNUUsQUFBaUIsQUFBb0UsQUFDckY7d0JBQUksS0FBSixBQUFTLGNBQWMsQUFDbkI7NkJBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCO0FBRkQsMkJBR0ssQUFDRDtnQ0FBQSxBQUFRLElBQVIsQUFBWSxvQkFBWixBQUFnQyxBQUNuQztBQUNKO0FBUkQsQUFTQTtnQ0FBQSxBQUFnQixVQUFoQixBQUEwQixTQUFTLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO3lCQUFBLEFBQUssSUFBTCxBQUFTLEtBQVQsQUFBYyxRQUFRLEtBQXRCLEFBQTJCLEtBQTNCLEFBQWdDLEFBQ2hDO3lCQUFBLEFBQUssV0FBVyxLQUFoQixBQUFxQixBQUNyQjt5QkFBQSxBQUFLLElBQUwsQUFBUyxLQUFLLEtBQUEsQUFBSyxNQUFMLEFBQVcsT0FBTyxDQUFoQyxBQUFjLEFBQWtCLEFBQUMsQUFDcEM7QUFKRCxBQUtBO0FBQ0E7Z0NBQUEsQUFBZ0IsVUFBaEIsQUFBMEIsYUFBYSxZQUFZLEFBQy9DO3lCQUFBLEFBQUssS0FBTCxBQUFVLEtBQVYsQUFBZSxRQUFRLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxlQUFsQyxBQUFpRCxBQUNqRDt5QkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNiO0FBSEQsQUFJQTt1QkFBQSxBQUFPLEFBQ1Y7QUFuR0QsQUFBdUIsYUFBQTtBQW9HdkIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUN6R0E7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLGtCQUFrQixRQUF0QixBQUFzQixBQUFRO0FBQzlCLGdCQUFJLHFCQUFxQixRQUF6QixBQUF5QixBQUFRO0FBQ2pDLGdCQUFJLHFDQUE0QixBQUFVLFFBQVEsQUFDOUM7MEJBQUEsQUFBVSwwQkFBVixBQUFvQyxBQUNwQzt5QkFBQSxBQUFTLDJCQUEyQixBQUNoQzsyQkFBQSxBQUFPLEtBQVAsQUFBWSxNQUFNLG1CQUFBLEFBQW1CLFdBQXJDLEFBQWdELEFBQ2hEO3lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNwQjtBQUNEO3VCQUFBLEFBQU8sQUFDVjtBQVArQixhQUFBLENBTzlCLGdCQVBGLEFBQWdDLEFBTzlCLEFBQWdCO0FBQ2xCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDbkJBO0FBQ0E7Ozs7O0FBSUEsZ0JBQUksNEJBQTZCLEFBQzdCO3lCQUFBLEFBQVMsZ0JBQWdCLEFBQ3hCLENBQ0Q7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLFdBQVcsVUFBQSxBQUFVLFVBQVYsQUFBb0IsUUFBUSxBQUMzRDtBQUNBOzJCQUFBLEFBQU8sQUFDVjtBQUhELEFBSUE7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLFNBQVMsVUFBQSxBQUFVLFNBQVMsQUFDaEQ7QUFDSDtBQUZELEFBR0E7OEJBQUEsQUFBYyxVQUFkLEFBQXdCLFFBQVEsVUFBQSxBQUFVLGdCQUFnQixBQUN0RDtBQUNIO0FBRkQsQUFHQTt1QkFBQSxBQUFPLEFBQ1Y7QUFkRCxBQUFxQixhQUFBO0FBZXJCLG9CQUFBLEFBQVEsYUFBUixBQUFxQjtBQUNyQixvQkFBQSxBQUFRLGFBQVIsQUFBcUIsQUFFckI7O0FDdkJBOztBQUNBLGdCQUFJLG1CQUFtQixRQUF2QixBQUF1QixBQUFRO0FBQy9CLGdCQUFJLHlCQUF5QixRQUE3QixBQUE2QixBQUFRO0FBQ3JDLGdCQUFJLDBCQUEwQixRQUE5QixBQUE4QixBQUFRO0FBQ3RDLGdCQUFJLDZCQUE2QixRQUFqQyxBQUFpQyxBQUFRO0FBQ3pDLGdCQUFJLHlCQUF5QixRQUE3QixBQUE2QixBQUFRO0FBQ3JDOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQSxxQkFBQSxBQUFTLFFBQVQsQUFBaUIsS0FBakIsQUFBc0IsT0FBdEIsQUFBNkIsU0FBUyxBQUNsQztvQkFBSSxZQUFZLEtBQWhCLEFBQXFCLEdBQUcsQUFBRTs4QkFBQSxBQUFVLEFBQU07QUFDMUM7dUJBQU8sY0FBQSxBQUFjLElBQWQsQUFBa0IsS0FBbEIsQUFBdUIsTUFBdkIsQUFBNkIsT0FBN0IsQUFBb0MsUUFBcEMsQUFBNEMsU0FBbkQsQUFBTyxBQUFxRCxBQUMvRDs7QUFDRCxvQkFBQSxBQUFRLFVBQVIsQUFBa0I7QUFDbEI7QUFDQSxxQkFBQSxBQUFTLGNBQWMsQUFDbkI7dUJBQU8sSUFBSSxpQkFBWCxBQUFPLEFBQUksQUFBaUIsQUFDL0I7O0FBQ0Qsb0JBQUEsQUFBUSxjQUFSLEFBQXNCO0FBQ3RCO0FBQ0EscUJBQUEsQUFBUyw2QkFBNkIsQUFDbEM7dUJBQU8sSUFBSSx1QkFBWCxBQUFPLEFBQUksQUFBdUIsQUFDckM7O0FBQ0Qsb0JBQUEsQUFBUSw2QkFBUixBQUFxQztBQUNyQyxxQkFBQSxBQUFTLDhCQUE4QixBQUNuQzt1QkFBTyxJQUFJLHdCQUFYLEFBQU8sQUFBSSxBQUF3QixBQUN0Qzs7QUFDRCxvQkFBQSxBQUFRLDhCQUFSLEFBQXNDO0FBQ3RDLHFCQUFBLEFBQVMsaUNBQWlDLEFBQ3RDO3VCQUFPLElBQUksMkJBQVgsQUFBTyxBQUFJLEFBQTJCLEFBQ3pDOztBQUNELG9CQUFBLEFBQVEsaUNBQVIsQUFBeUM7QUFDekMscUJBQUEsQUFBUyw2QkFBNkIsQUFDbEM7dUJBQU8sSUFBSSx1QkFBWCxBQUFPLEFBQUksQUFBdUIsQUFDckM7O0FBQ0Qsb0JBQUEsQUFBUSw2QkFBUixBQUFxQyxBQUVyQzs7QUM1Q0E7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSwwQkFBaUIsQUFBVSxRQUFRLEFBQ25DOzBCQUFBLEFBQVUsZUFBVixBQUF5QixBQUN6Qjt5QkFBQSxBQUFTLGNBQVQsQUFBdUIsTUFBTSxBQUN6QjsyQkFBQSxBQUFPLEtBQVAsQUFBWSxBQUNaO3lCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBUm9CLGFBQUEsQ0FRbkIsVUFSRixBQUFxQixBQVFuQixBQUFVO0FBQ1osb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUNuQkE7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSxxQkFBcUIsUUFBekIsQUFBeUIsQUFBUTtBQUNqQyxnQkFBSSxpQ0FBd0IsQUFBVSxRQUFRLEFBQzFDOzBCQUFBLEFBQVUsc0JBQVYsQUFBZ0MsQUFDaEM7eUJBQUEsQUFBUyx1QkFBdUIsQUFDNUI7MkJBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjt5QkFBQSxBQUFLLEtBQUssbUJBQUEsQUFBbUIsV0FBN0IsQUFBd0MsQUFDeEM7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ3BCO0FBQ0Q7dUJBQUEsQUFBTyxBQUNWO0FBUjJCLGFBQUEsQ0FRMUIsVUFSRixBQUE0QixBQVExQixBQUFVO0FBQ1osb0JBQUEsQUFBUSxhQUFSLEFBQXFCO0FBQ3JCLG9CQUFBLEFBQVEsYUFBUixBQUFxQixBQUVyQjs7QUNwQkE7O0FBQ0EsZ0JBQUksWUFBYSxhQUFRLFVBQVQsQUFBYyxhQUFjLFVBQUEsQUFBVSxHQUFWLEFBQWEsR0FBRyxBQUN4RDtxQkFBSyxJQUFMLEFBQVMsS0FBVCxBQUFjLEdBQUc7d0JBQUksRUFBQSxBQUFFLGVBQU4sQUFBSSxBQUFpQixJQUFJLEVBQUEsQUFBRSxLQUFLLEVBQWpELEFBQTBDLEFBQU8sQUFBRTtBQUNuRCwwQkFBQSxBQUFTLEtBQUssQUFBRTt5QkFBQSxBQUFLLGNBQUwsQUFBbUIsQUFBSTtBQUN2QztrQkFBQSxBQUFFLFlBQVksTUFBQSxBQUFNLE9BQU8sT0FBQSxBQUFPLE9BQXBCLEFBQWEsQUFBYyxNQUFNLEdBQUEsQUFBRyxZQUFZLEVBQWYsQUFBaUIsV0FBVyxJQUEzRSxBQUFjLEFBQTZELEFBQUksQUFDbEY7QUFKRDtBQUtBLGdCQUFJLFlBQVksUUFBaEIsQUFBZ0IsQUFBUTtBQUN4QixnQkFBSSxnQ0FBdUIsQUFBVSxRQUFRLEFBQ3pDOzBCQUFBLEFBQVUscUJBQVYsQUFBK0IsQUFDL0I7eUJBQUEsQUFBUyxvQkFBVCxBQUE2QixhQUE3QixBQUEwQyxVQUExQyxBQUFvRCxVQUFVLEFBQzFEOzJCQUFBLEFBQU8sS0FBUCxBQUFZLEFBQ1o7eUJBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3lCQUFBLEFBQUssV0FBTCxBQUFnQixBQUNoQjt5QkFBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjt5QkFBQSxBQUFLLFlBQUwsQUFBaUIsQUFDcEI7QUFDRDt1QkFBQSxBQUFPLEFBQ1Y7QUFYMEIsYUFBQSxDQVd6QixVQVhGLEFBQTJCLEFBV3pCLEFBQVU7QUFDWixvQkFBQSxBQUFRLGFBQVIsQUFBcUI7QUFDckIsb0JBQUEsQUFBUSxhQUFSLEFBQXFCLEFBRXJCOztBQ3RCQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7O2dCLEFBR3FCLDBCQUNqQjtxQ0FBQSxBQUFZLGlCQUFpQjswQ0FDekI7OzZDQUFBLEFBQVksQUFDWjs0Q0FBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzt5QkFBQSxBQUFLLGtCQUFMLEFBQXVCLEFBQ3ZCO3lCQUFBLEFBQUssZ0JBQWdCLFVBQXJCLEFBQ0E7eUJBQUEsQUFBSyxrQkFBa0IsVUFBdkIsQUFDQTt5QkFBQSxBQUFLLGtCQUFrQixVQUF2QixBQUNBO3lCQUFBLEFBQUssdUJBQXVCLFVBQTVCLEFBQ0E7eUJBQUEsQUFBSyxtQkFBTCxBQUF3QixBQUN4Qjt5QkFBQSxBQUFLLHFCQUFMLEFBQTBCLEFBQzFCO3lCQUFBLEFBQUsscUJBQUwsQUFBMEIsQUFDMUI7eUJBQUEsQUFBSywwQkFBTCxBQUErQixBQUUvQjs7d0JBQUksT0FBSixBQUFXLEFBQ1g7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixZQUFZLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUyxBQUM3Qzs0QkFBSSxjQUFjLEtBQUEsQUFBSyxjQUFMLEFBQW1CLElBQXJDLEFBQWtCLEFBQXVCLEFBQ3pDOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxjQUFjLEFBQ3JCO3dDQUFBLEFBQVksUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUM3QjtvQ0FBSSxBQUNBOzRDQUFBLEFBQVEsQUFDWDtBQUZELGtDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7NENBQUEsQUFBUSxLQUFSLEFBQWEsdUVBQWIsQUFBb0YsTUFBcEYsQUFBMEYsQUFDN0Y7QUFDSjtBQU5ELEFBT0g7QUFDRDs2QkFBQSxBQUFLLGlCQUFMLEFBQXNCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDdkM7Z0NBQUksQUFDQTt3Q0FBQSxBQUFRLEFBQ1g7QUFGRCw4QkFFRSxPQUFBLEFBQU8sR0FBRyxBQUNSO3dDQUFBLEFBQVEsS0FBUixBQUFhLHFFQUFiLEFBQWtGLEFBQ3JGO0FBQ0o7QUFORCxBQU9IO0FBbEJELEFBbUJBO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsY0FBYyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVMsQUFDL0M7NEJBQUksY0FBYyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBdkMsQUFBa0IsQUFBeUIsQUFDM0M7NEJBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7d0NBQUEsQUFBWSxRQUFRLFVBQUEsQUFBQyxTQUFZLEFBQzdCO29DQUFJLEFBQ0E7NENBQUEsQUFBUSxBQUNYO0FBRkQsa0NBRUUsT0FBQSxBQUFPLEdBQUcsQUFDUjs0Q0FBQSxBQUFRLEtBQVIsQUFBYSx5RUFBYixBQUFzRixNQUF0RixBQUE0RixBQUMvRjtBQUNKO0FBTkQsQUFPSDtBQUNEOzZCQUFBLEFBQUssbUJBQUwsQUFBd0IsUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUN6QztnQ0FBSSxBQUNBO3dDQUFBLEFBQVEsQUFDWDtBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsdUVBQWIsQUFBb0YsQUFDdkY7QUFDSjtBQU5ELEFBT0g7QUFsQkQsQUFtQkE7eUJBQUEsQUFBSyxnQkFBTCxBQUFxQixhQUFhLFVBQUEsQUFBQyxNQUFELEFBQU8sTUFBUCxBQUFhLGNBQWIsQUFBMkIsVUFBM0IsQUFBcUMsVUFBYSxBQUNoRjs0QkFBSSxjQUFjLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUF2QyxBQUFrQixBQUF5QixBQUMzQzs0QkFBSSxtQkFBSixBQUFJLEFBQU8sY0FBYyxBQUNyQjt3Q0FBQSxBQUFZLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDN0I7b0NBQUksQUFDQTs0Q0FBQSxBQUFRLE1BQVIsQUFBYyxjQUFkLEFBQTRCLFVBQTVCLEFBQXNDLEFBQ3pDO0FBRkQsa0NBRUUsT0FBQSxBQUFPLEdBQUcsQUFDUjs0Q0FBQSxBQUFRLEtBQVIsQUFBYSx3RUFBYixBQUFxRixNQUFyRixBQUEyRixBQUM5RjtBQUNKO0FBTkQsQUFPSDtBQUNEOzZCQUFBLEFBQUssbUJBQUwsQUFBd0IsUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUN6QztnQ0FBSSxBQUNBO3dDQUFBLEFBQVEsTUFBUixBQUFjLGNBQWQsQUFBNEIsVUFBNUIsQUFBc0MsQUFDekM7QUFGRCw4QkFFRSxPQUFBLEFBQU8sR0FBRyxBQUNSO3dDQUFBLEFBQVEsS0FBUixBQUFhLHNFQUFiLEFBQW1GLEFBQ3RGO0FBQ0o7QUFORCxBQU9IO0FBbEJELEFBbUJBO3lCQUFBLEFBQUssZ0JBQUwsQUFBcUIsY0FBYyxVQUFBLEFBQUMsTUFBRCxBQUFPLE1BQVAsQUFBYSxjQUFiLEFBQTJCLE9BQTNCLEFBQWtDLE9BQWxDLEFBQXlDLGFBQWdCLEFBQ3hGOzRCQUFJLGNBQWMsS0FBQSxBQUFLLHFCQUFMLEFBQTBCLElBQTVDLEFBQWtCLEFBQThCLEFBQ2hEOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxjQUFjLEFBQ3JCO3dDQUFBLEFBQVksUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUM3QjtvQ0FBSSxBQUNBOzRDQUFBLEFBQVEsTUFBUixBQUFjLGNBQWQsQUFBNEIsT0FBNUIsQUFBbUMsT0FBbkMsQUFBMEMsQUFDN0M7QUFGRCxrQ0FFRSxPQUFBLEFBQU8sR0FBRyxBQUNSOzRDQUFBLEFBQVEsS0FBUixBQUFhLHlFQUFiLEFBQXNGLE1BQXRGLEFBQTRGLEFBQy9GO0FBQ0o7QUFORCxBQU9IO0FBQ0Q7NkJBQUEsQUFBSyx3QkFBTCxBQUE2QixRQUFRLFVBQUEsQUFBQyxTQUFZLEFBQzlDO2dDQUFJLEFBQ0E7d0NBQUEsQUFBUSxNQUFSLEFBQWMsY0FBZCxBQUE0QixPQUE1QixBQUFtQyxPQUFuQyxBQUEwQyxBQUM3QztBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsdUVBQWIsQUFBb0YsQUFDdkY7QUFDSjtBQU5ELEFBT0g7QUFsQkQsQUFxQkg7Ozs7O3FELEFBR2dCLE0sQUFBTSxjLEFBQWMsVUFBVSxBQUMzQztpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO2dEQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7K0JBQU8sS0FBQSxBQUFLLGdCQUFMLEFBQXFCLGlCQUFyQixBQUFzQyxNQUF0QyxBQUE0QyxjQUFuRCxBQUFPLEFBQTBELEFBQ3BFOzs7O3NELEFBR2lCLE0sQUFBTSxjLEFBQWMsTyxBQUFPLE8sQUFBTyxpQkFBaUIsQUFDakU7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLGNBQVgsQUFBeUIsQUFDekI7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBQ2xCO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUNsQjtnREFBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzs2QkFBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFyQixBQUF1QyxNQUF2QyxBQUE2QyxjQUE3QyxBQUEyRCxPQUEzRCxBQUFrRSxPQUFsRSxBQUF5RSxBQUM1RTs7Ozs4QyxBQUdTLE1BQU0sQUFDWjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBRWpCOztBQUNBOzhCQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjs7OzsyQyxBQUdNLE1BQU0sQUFDVDtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBRWpCOztBQUNBOzhCQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjs7Ozt3QyxBQUdHLE0sQUFBTSxNQUFNLEFBQ1o7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFFakI7O0FBQ0E7OEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ25COzs7OzJDLEFBR00sTSxBQUFNLFlBQVksQUFDckI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLFlBQVgsQUFBdUIsQUFFdkI7O0FBQ0E7OEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ25COzs7OzJDLEFBR00sTUFBTSxBQUNUO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFFakI7O0FBQ0E7OEJBQU0sSUFBQSxBQUFJLE1BQVYsQUFBTSxBQUFVLEFBQ25COzs7OzhDLEFBR1MsWUFBWSxBQUNsQjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxZQUFYLEFBQXVCLEFBRXZCOztBQUNBOzhCQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjs7Ozs2QyxBQUdRLFdBQVcsQUFDaEI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsV0FBWCxBQUFzQixBQUV0Qjs7QUFDQTs4QkFBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFDbkI7Ozs7NEMsQUFHTyxNLEFBQU0sY0FBYyxBQUN4Qjs0QkFBSSxPQUFKLEFBQVcsQUFDWDs0QkFBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxlQUFlLEFBQ3ZCOzJDQUFBLEFBQWUsQUFDZjtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxjQUFYLEFBQXlCLEFBRXpCOztpQ0FBQSxBQUFLLG1CQUFtQixLQUFBLEFBQUssaUJBQUwsQUFBc0IsT0FBOUMsQUFBd0IsQUFBNkIsQUFDckQ7OzZDQUNpQix1QkFBWSxBQUNyQjt5Q0FBQSxBQUFLLHdCQUFtQixBQUFLLGlCQUFMLEFBQXNCLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDNUQ7K0NBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQXdCLEFBRzNCLHFDQUgyQjtBQUZoQyxBQUFPLEFBT1Y7QUFQVSxBQUNIO0FBUFIsK0JBYU8sQUFDSDtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7Z0NBQUksY0FBYyxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFyQyxBQUFrQixBQUF1QixBQUN6QztnQ0FBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxjQUFjLEFBQ3RCOzhDQUFBLEFBQWMsQUFDakI7QUFDRDtpQ0FBQSxBQUFLLGNBQUwsQUFBbUIsSUFBbkIsQUFBdUIsTUFBTSxZQUFBLEFBQVksT0FBekMsQUFBNkIsQUFBbUIsQUFDaEQ7OzZDQUNpQix1QkFBTSxBQUNmO3dDQUFJLGNBQWMsS0FBQSxBQUFLLGNBQUwsQUFBbUIsSUFBckMsQUFBa0IsQUFBdUIsQUFDekM7d0NBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7NkNBQUEsQUFBSyxjQUFMLEFBQW1CLElBQW5CLEFBQXVCLGtCQUFNLEFBQVksT0FBTyxVQUFBLEFBQVUsT0FBTyxBQUM3RDttREFBTyxVQUFQLEFBQWlCLEFBQ3BCO0FBRkQsQUFBNkIsQUFHaEMseUNBSGdDO0FBSXBDO0FBUkwsQUFBTyxBQVVWO0FBVlUsQUFDSDtBQVVYOzs7OzhDLEFBR1MsTSxBQUFNLGNBQWMsQUFDMUI7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sZUFBZSxBQUN2QjsyQ0FBQSxBQUFlLEFBQ2Y7cURBQUEsQUFBWSxBQUNaO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7aUNBQUEsQUFBSyxxQkFBcUIsS0FBQSxBQUFLLG1CQUFMLEFBQXdCLE9BQWxELEFBQTBCLEFBQStCLEFBQ3pEOzs2Q0FDaUIsdUJBQU0sQUFDZjt5Q0FBQSxBQUFLLDBCQUFxQixBQUFLLG1CQUFMLEFBQXdCLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDaEU7K0NBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQTBCLEFBRzdCLHFDQUg2QjtBQUZsQyxBQUFPLEFBT1Y7QUFQVSxBQUNIO0FBUFIsK0JBYU8sQUFDSDtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7Z0NBQUksY0FBYyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBdkMsQUFBa0IsQUFBeUIsQUFDM0M7Z0NBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sY0FBYyxBQUN0Qjs4Q0FBQSxBQUFjLEFBQ2pCO0FBQ0Q7aUNBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFyQixBQUF5QixNQUFNLFlBQUEsQUFBWSxPQUEzQyxBQUErQixBQUFtQixBQUNsRDs7NkNBQ2lCLHVCQUFNLEFBQ2Y7d0NBQUksY0FBYyxLQUFBLEFBQUssZ0JBQUwsQUFBcUIsSUFBdkMsQUFBa0IsQUFBeUIsQUFDM0M7d0NBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7NkNBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFyQixBQUF5QixrQkFBTSxBQUFZLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDekQ7bURBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQStCLEFBR2xDLHlDQUhrQztBQUl0QztBQVJMLEFBQU8sQUFVVjtBQVZVLEFBQ0g7QUFVWDs7OztpRCxBQUdZLE0sQUFBTSxjQUFjLEFBQzdCOzRCQUFJLE9BQUosQUFBVyxBQUNYOzRCQUFJLENBQUMsbUJBQUwsQUFBSyxBQUFPLGVBQWUsQUFDdkI7MkNBQUEsQUFBZSxBQUNmO3FEQUFBLEFBQVksQUFDWjtvREFBQSxBQUFXLGNBQVgsQUFBeUIsQUFFekI7O2lDQUFBLEFBQUsscUJBQXFCLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixPQUFsRCxBQUEwQixBQUErQixBQUN6RDs7NkNBQ2lCLHVCQUFZLEFBQ3JCO3lDQUFBLEFBQUssMEJBQXFCLEFBQUssbUJBQUwsQUFBd0IsT0FBTyxVQUFBLEFBQUMsT0FBVSxBQUNoRTsrQ0FBTyxVQUFQLEFBQWlCLEFBQ3BCO0FBRkQsQUFBMEIsQUFHN0IscUNBSDZCO0FBRmxDLEFBQU8sQUFPVjtBQVBVLEFBQ0g7QUFQUiwrQkFhTyxBQUNIO3FEQUFBLEFBQVksQUFDWjtvREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFDakI7b0RBQUEsQUFBVyxjQUFYLEFBQXlCLEFBRXpCOztnQ0FBSSxjQUFjLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUF2QyxBQUFrQixBQUF5QixBQUMzQztnQ0FBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxjQUFjLEFBQ3RCOzhDQUFBLEFBQWMsQUFDakI7QUFDRDtpQ0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQXJCLEFBQXlCLE1BQU0sWUFBQSxBQUFZLE9BQTNDLEFBQStCLEFBQW1CLEFBQ2xEOzs2Q0FDaUIsdUJBQU0sQUFDZjt3Q0FBSSxjQUFjLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUF2QyxBQUFrQixBQUF5QixBQUMzQzt3Q0FBSSxtQkFBSixBQUFJLEFBQU8sY0FBYyxBQUNyQjs2Q0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQXJCLEFBQXlCLGtCQUFNLEFBQVksT0FBTyxVQUFBLEFBQUMsT0FBVSxBQUN6RDttREFBTyxVQUFQLEFBQWlCLEFBQ3BCO0FBRkQsQUFBK0IsQUFHbEMseUNBSGtDO0FBSXRDO0FBUkwsQUFBTyxBQVVWO0FBVlUsQUFDSDtBQVVYOzs7O2tELEFBRWEsTSxBQUFNLGNBQWMsQUFDOUI7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sZUFBZSxBQUN2QjsyQ0FBQSxBQUFlLEFBQ2Y7cURBQUEsQUFBWSxBQUNaO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7aUNBQUEsQUFBSywwQkFBMEIsS0FBQSxBQUFLLHdCQUFMLEFBQTZCLE9BQTVELEFBQStCLEFBQW9DLEFBQ25FOzs2Q0FDaUIsdUJBQU0sQUFDZjt5Q0FBQSxBQUFLLCtCQUEwQixBQUFLLHdCQUFMLEFBQTZCLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDMUU7K0NBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQStCLEFBR2xDLHFDQUhrQztBQUZ2QyxBQUFPLEFBT1Y7QUFQVSxBQUNIO0FBUFIsK0JBYU8sQUFDSDtxREFBQSxBQUFZLEFBQ1o7b0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO29EQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7Z0NBQUksY0FBYyxLQUFBLEFBQUsscUJBQUwsQUFBMEIsSUFBNUMsQUFBa0IsQUFBOEIsQUFDaEQ7Z0NBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sY0FBYyxBQUN0Qjs4Q0FBQSxBQUFjLEFBQ2pCO0FBQ0Q7aUNBQUEsQUFBSyxxQkFBTCxBQUEwQixJQUExQixBQUE4QixNQUFNLFlBQUEsQUFBWSxPQUFoRCxBQUFvQyxBQUFtQixBQUN2RDs7NkNBQ2lCLHVCQUFNLEFBQ2Y7d0NBQUksY0FBYyxLQUFBLEFBQUsscUJBQUwsQUFBMEIsSUFBNUMsQUFBa0IsQUFBOEIsQUFDaEQ7d0NBQUksbUJBQUosQUFBSSxBQUFPLGNBQWMsQUFDckI7NkNBQUEsQUFBSyxxQkFBTCxBQUEwQixJQUExQixBQUE4QixrQkFBTSxBQUFZLE9BQU8sVUFBQSxBQUFDLE9BQVUsQUFDOUQ7bURBQU8sVUFBUCxBQUFpQixBQUNwQjtBQUZELEFBQW9DLEFBR3ZDLHlDQUh1QztBQUkzQztBQVJMLEFBQU8sQUFVVjtBQVZVLEFBQ0g7QUFVWDs7Ozs7Ozs4QixBQS9VZ0I7O0FDeEJyQjs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7O2dCLEFBQVk7O0FBRVo7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLGdCQUFJLFVBQUosQUFBYzs7Z0IsQUFFTyw4QkFFakI7eUNBQUEsQUFBWSxTQUFTOzBDQUNqQjs7NkNBQUEsQUFBWSxBQUNaOzRDQUFBLEFBQVcsU0FBWCxBQUFvQixBQUVwQjs7eUJBQUEsQUFBSyxVQUFMLEFBQWUsQUFDZjt5QkFBQSxBQUFLLFVBQVUsVUFBZixBQUNBO3lCQUFBLEFBQUssa0JBQWtCLFVBQXZCLEFBQ0E7eUJBQUEsQUFBSyxnQkFBZ0IsVUFBckIsQUFDQTt5QkFBQSxBQUFLLGFBQWEsVUFBbEIsQUFDQTt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO3lCQUFBLEFBQUssc0JBQUwsQUFBMkIsQUFDM0I7eUJBQUEsQUFBSyx5QkFBTCxBQUE4QixBQUM5Qjt5QkFBQSxBQUFLLHNCQUFMLEFBQTJCLEFBQzlCOzs7Ozs0QyxBQUVPLE0sQUFBTSxPQUFPLEFBQ2pCO2dDQUFBLEFBQVEsQUFDSjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxTQUFQLEFBQU8sQUFBUyxBQUNwQjtpQ0FBSyxPQUFMLEFBQVksQUFDWjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxXQUFQLEFBQU8sQUFBVyxBQUN0QjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxXQUFXLE9BQUEsQUFBTyxPQUF6QixBQUFrQixBQUFjLEFBQ3BDO2lDQUFLLE9BQUwsQUFBWSxBQUNaO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLE9BQVAsQUFBTyxBQUFPLEFBQ2xCO0FBQ0k7dUNBZlIsQUFlUSxBQUFPLEFBRWxCOzs7OztnRCxBQUVXLGlCLEFBQWlCLE0sQUFBTSxPQUFPLEFBQ3RDOzRCQUFJLENBQUMsbUJBQUwsQUFBSyxBQUFPLFFBQVEsQUFDaEI7bUNBQUEsQUFBTyxBQUNWO0FBQ0Q7Z0NBQUEsQUFBUSxBQUNKO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLGdCQUFBLEFBQWdCLGdCQUFoQixBQUFnQyxJQUFJLE9BQTNDLEFBQU8sQUFBb0MsQUFBTyxBQUN0RDtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxJQUFBLEFBQUksS0FBSyxPQUFoQixBQUFPLEFBQVMsQUFBTyxBQUMzQjtBQUNJO3VDQUFPLEtBQUEsQUFBSyxRQUFMLEFBQWEsTUFkNUIsQUFjUSxBQUFPLEFBQW1CLEFBRXJDOzs7Ozs4QyxBQUVTLGlCLEFBQWlCLE0sQUFBTSxPQUFPLEFBQ3BDOzRCQUFJLENBQUMsbUJBQUwsQUFBSyxBQUFPLFFBQVEsQUFDaEI7bUNBQUEsQUFBTyxBQUNWO0FBQ0Q7Z0NBQUEsQUFBUSxBQUNKO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLGdCQUFBLEFBQWdCLGNBQWhCLEFBQThCLElBQXJDLEFBQU8sQUFBa0MsQUFDN0M7aUNBQUssT0FBTCxBQUFZLEFBQ1I7dUNBQU8saUJBQUEsQUFBaUIsT0FBTyxNQUF4QixBQUF3QixBQUFNLGdCQUFyQyxBQUFxRCxBQUN6RDtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxpQkFBQSxBQUFpQixPQUFPLE1BQXhCLEFBQXdCLEFBQU0sZ0JBQXJDLEFBQXFELEFBQ3pEO2lDQUFLLE9BQUwsQUFBWSxBQUNSO3VDQUFPLGlCQUFBLEFBQWlCLE9BQU8sTUFBeEIsQUFBd0IsQUFBTSxnQkFBckMsQUFBcUQsQUFDekQ7aUNBQUssT0FBTCxBQUFZLEFBQ1I7dUNBQU8saUJBQUEsQUFBaUIsT0FBTyxNQUF4QixBQUF3QixBQUFNLGdCQUFyQyxBQUFxRCxBQUN6RDtpQ0FBSyxPQUFMLEFBQVksQUFDUjt1Q0FBTyxpQkFBQSxBQUFpQixPQUFPLE1BQXhCLEFBQXdCLEFBQU0sZ0JBQXJDLEFBQXFELEFBQ3pEO0FBQ0k7dUNBQU8sS0FBQSxBQUFLLFFBQUwsQUFBYSxNQWQ1QixBQWNRLEFBQU8sQUFBbUIsQUFFckM7Ozs7O21ELEFBRWMsaUIsQUFBaUIsUyxBQUFTLGMsQUFBYyxNLEFBQU0sSSxBQUFJLGFBQWEsQUFDMUU7NEJBQUksVUFBVSxnQkFBZCxBQUE4QixBQUM5Qjs0QkFBSSxRQUFRLFFBQUEsQUFBUSwwQkFBcEIsQUFBWSxBQUFrQyxBQUM5Qzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs0QkFBSSxtQkFBSixBQUFJLEFBQU8sUUFBUSxBQUNmO2dDQUFJLFlBQVksZ0JBQUEsQUFBZ0IsUUFBaEIsQUFBd0IsSUFBSSxNQUE1QyxBQUFnQixBQUFrQyxBQUNsRDtnQ0FBSSxPQUFPLFVBQVgsQUFBVyxBQUFVLEFBQ3JCO2dDQUFJLG1CQUFKLEFBQUksQUFBTyxPQUFPLEFBRWQ7O29DQUFJLGFBQWEsQ0FDYixRQUFBLEFBQVEsVUFBUixBQUFrQix5QkFBbEIsQUFBMkMsTUFEOUIsQUFDYixBQUFpRCxXQUNqRCxRQUFBLEFBQVEsVUFBUixBQUFrQixVQUFsQixBQUE0QixNQUZmLEFBRWIsQUFBa0MsVUFDbEMsUUFBQSxBQUFRLFVBQVIsQUFBa0IsYUFBbEIsQUFBK0IsTUFIbEIsQUFHYixBQUFxQyxlQUNyQyxRQUFBLEFBQVEsVUFBUixBQUFrQixRQUFsQixBQUEwQixNQUpiLEFBSWIsQUFBZ0MsT0FDaEMsUUFBQSxBQUFRLFVBQVIsQUFBa0IsTUFBbEIsQUFBd0IsTUFMWCxBQUtiLEFBQThCLEtBQzlCLFFBQUEsQUFBUSxVQUFSLEFBQWtCLFNBQWxCLEFBQTJCLE1BQU0sWUFOckMsQUFBaUIsQUFNYixBQUE2QyxBQUVqRDs0Q0FBQSxBQUFZLFFBQVEsVUFBQSxBQUFVLFNBQVYsQUFBbUIsT0FBTyxBQUMxQzsrQ0FBQSxBQUFXLEtBQUssUUFBQSxBQUFRLFVBQVUsTUFBbEIsQUFBa0IsQUFBTSxZQUF4QixBQUFvQyxNQUFNLEtBQUEsQUFBSyxVQUFMLEFBQWUsaUJBQWYsQUFBZ0MsTUFBMUYsQUFBZ0IsQUFBMEMsQUFBc0MsQUFDbkc7QUFGRCxBQUdBO3dDQUFBLEFBQVEsa0JBQVIsQUFBMEIsTUFBMUIsQUFBZ0MsU0FBUyxDQUFBLEFBQUMsTUFBRCxBQUFPLFdBQVAsQUFBa0IsT0FBM0QsQUFBeUMsQUFBeUIsQUFDckU7QUFDSjtBQUNKOzs7O2lELEFBRVksaUIsQUFBaUIsTSxBQUFNLE0sQUFBTSxjQUFjLEFBQ3BEOzRCQUFJLE9BQU8sS0FBWCxBQUFXLEFBQUssQUFDaEI7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sT0FBTyxBQUNmOzRDQUFBLEFBQWdCLHVCQUFoQixBQUF1QyxRQUFRLFVBQUEsQUFBVSxTQUFTLEFBQzlEO29DQUFJLEFBQ0E7NENBQUEsQUFBUSxNQUFSLEFBQWMsTUFBZCxBQUFvQixjQUFwQixBQUFrQyxJQUFsQyxBQUFzQyxBQUN6QztBQUZELGtDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7NENBQUEsQUFBUSxLQUFSLEFBQWEsK0RBQWIsQUFBNEUsQUFDL0U7QUFDSjtBQU5ELEFBT0g7QUFDSjs7OzswQyxBQUVLLE0sQUFBTSxjQUFjLEFBQ3RCOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxVQUFVLEFBQ2pCO2tDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNEOztrQ0FBVSxBQUNBLEFBQ047MENBRkosQUFBVSxBQUVRLEFBRXJCO0FBSmEsQUFDTjs7Ozs4QyxBQUtFLE0sQUFBTSxjQUFjLEFBQzFCOytCQUFPLG1CQUFBLEFBQU8sWUFBWSxRQUFBLEFBQVEsU0FBM0IsQUFBb0MsUUFBUSxRQUFBLEFBQVEsaUJBQTNELEFBQTRFLEFBQy9FOzs7OzhDQUVTLEFBQ047a0NBQUEsQUFBVSxBQUNiOzs7O3FELEFBRWdCLE0sQUFBTSxjLEFBQWMsVUFBVSxBQUMzQztpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxNQUFYLEFBQWlCLEFBQ2pCO2dEQUFBLEFBQVcsY0FBWCxBQUF5QixBQUV6Qjs7NEJBQUksVUFBVSxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFqQyxBQUFjLEFBQXVCLEFBQ3JDOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxVQUFVLEFBQ2pCO2dDQUFJLFFBQVEsS0FBQSxBQUFLLFFBQUwsQUFBYSwwQkFBekIsQUFBWSxBQUF1QyxBQUNuRDtnQ0FBSSxtQkFBSixBQUFJLEFBQU8sUUFBUSxBQUNmO29DQUFJLFlBQVksS0FBQSxBQUFLLFFBQUwsQUFBYSxJQUFJLE1BQWpDLEFBQWdCLEFBQXVCLEFBQ3ZDO29DQUFJLE9BQU8sVUFBWCxBQUFXLEFBQVUsQUFDckI7b0NBQUksWUFBWSxNQUFBLEFBQU0sNEJBQXRCLEFBQWdCLEFBQWtDLEFBQ2xEO29DQUFJLG1CQUFBLEFBQU8sU0FBUyxtQkFBcEIsQUFBb0IsQUFBTyxZQUFZLEFBQ25DO3dDQUFJLFdBQVcsVUFBZixBQUFlLEFBQVUsQUFDekI7OENBQUEsQUFBVSxTQUFTLEtBQUEsQUFBSyxVQUFMLEFBQWUsTUFBZixBQUFxQixNQUF4QyxBQUFtQixBQUEyQixBQUM5QzsyQ0FBTyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFqQixBQUF1QixNQUE5QixBQUFPLEFBQTZCLEFBQ3ZDO0FBQ0o7QUFDSjtBQUNKOzs7O3NELEFBRWlCLE0sQUFBTSxjLEFBQWMsTyxBQUFPLE8sQUFBTyxpQkFBaUIsQUFDakU7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsTUFBWCxBQUFpQixBQUNqQjtnREFBQSxBQUFXLGNBQVgsQUFBeUIsQUFDekI7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBQ2xCO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUNsQjtnREFBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzs0QkFBSSxLQUFBLEFBQUssVUFBTCxBQUFlLE1BQW5CLEFBQUksQUFBcUIsZUFBZSxBQUNwQztBQUNIO0FBQ0Q7NEJBQUksVUFBVSxLQUFBLEFBQUssY0FBTCxBQUFtQixJQUFqQyxBQUFjLEFBQXVCLEFBQ3JDOzRCQUFJLFFBQVEsS0FBWixBQUFZLEFBQUssQUFDakI7NEJBQUksbUJBQUEsQUFBTyxZQUFZLG1CQUF2QixBQUF1QixBQUFPLFFBQVEsQUFDbEM7Z0NBQUksdUJBQXVCLE1BQUEsQUFBTSxRQUFOLEFBQWMsbUJBQW1CLGdCQUFqQyxBQUFpRCxTQUE1RSxBQUFxRixBQUNyRjtpQ0FBQSxBQUFLLGVBQUwsQUFBb0IsTUFBcEIsQUFBMEIsU0FBMUIsQUFBbUMsY0FBbkMsQUFBaUQsT0FBTyxRQUF4RCxBQUFnRSxzQkFBc0IsTUFBQSxBQUFNLE1BQU4sQUFBWSxPQUFPLFFBQXpHLEFBQXNGLEFBQTJCLEFBQ3BIO0FBQ0o7Ozs7Z0QsQUFFVyxTQUFTLEFBQ2pCO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7NkJBQUEsQUFBSyxrQkFBTCxBQUF1QixLQUF2QixBQUE0QixBQUMvQjs7OztrRCxBQUVhLFNBQVMsQUFDbkI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsU0FBWCxBQUFvQixBQUNwQjs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEtBQXpCLEFBQThCLEFBQ2pDOzs7O2lELEFBRVksU0FBUyxBQUNsQjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxTQUFYLEFBQW9CLEFBQ3BCOzZCQUFBLEFBQUssdUJBQUwsQUFBNEIsS0FBNUIsQUFBaUMsQUFDcEM7Ozs7a0QsQUFFYSxTQUFTLEFBQ25CO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7NkJBQUEsQUFBSyxvQkFBTCxBQUF5QixLQUF6QixBQUE4QixBQUNqQzs7OztrRCxBQUVhLE9BQU8sQUFDakI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUVsQjs7NEJBQUksS0FBQSxBQUFLLFFBQUwsQUFBYSxJQUFJLE1BQXJCLEFBQUksQUFBdUIsS0FBSyxBQUM1QjtBQUNIO0FBRUQ7OzRCQUFJLFlBQUosQUFBZ0IsQUFDaEI7OEJBQUEsQUFBTSxXQUFOLEFBQWlCLE9BQU8sVUFBQSxBQUFVLFdBQVcsQUFDekM7bUNBQU8sVUFBQSxBQUFVLGFBQVYsQUFBdUIsT0FBdkIsQUFBOEIsUUFBckMsQUFBNkMsQUFDaEQ7QUFGRCwyQkFBQSxBQUVHLFFBQVEsVUFBQSxBQUFVLFdBQVcsQUFDNUI7c0NBQVUsVUFBVixBQUFvQixnQkFBZ0IsVUFBcEMsQUFBOEMsQUFDakQ7QUFKRCxBQUtBOzZCQUFBLEFBQUssUUFBTCxBQUFhLElBQUksTUFBakIsQUFBdUIsSUFBdkIsQUFBMkIsQUFDOUI7Ozs7b0QsQUFFZSxPQUFPLEFBQ25CO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7NkJBQUEsQUFBSyxRQUFMLEFBQWEsVUFBVSxNQUF2QixBQUE2QixBQUNoQzs7Ozt5QyxBQUVJLE9BQU8sQUFDUjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBRWxCOzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs0QkFBSSxZQUFZLEtBQUEsQUFBSyxRQUFMLEFBQWEsSUFBSSxNQUFqQyxBQUFnQixBQUF1QixBQUN2Qzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs4QkFBQSxBQUFNLFdBQU4sQUFBaUIsT0FBTyxVQUFBLEFBQVUsV0FBVyxBQUN6QzttQ0FBUSxVQUFBLEFBQVUsYUFBVixBQUF1QixPQUF2QixBQUE4QixRQUF0QyxBQUE4QyxBQUNqRDtBQUZELDJCQUFBLEFBRUcsUUFBUSxVQUFBLEFBQVUsV0FBVyxBQUM1QjtpQ0FBSyxVQUFMLEFBQWUsZ0JBQWYsQUFBK0IsQUFDL0I7c0NBQUEsQUFBVSxjQUFjLFVBQUEsQUFBVSxPQUFPLEFBQ3JDO29DQUFJLE1BQUEsQUFBTSxhQUFhLE1BQXZCLEFBQTZCLFVBQVUsQUFDbkM7d0NBQUksV0FBVyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFNLFVBQVUsVUFBakMsQUFBdUIsQUFBb0IsZUFBZSxNQUF6RSxBQUFlLEFBQWdFLEFBQy9FO3dDQUFJLFdBQVcsS0FBQSxBQUFLLFlBQUwsQUFBaUIsTUFBTSxVQUFVLFVBQWpDLEFBQXVCLEFBQW9CLGVBQWUsTUFBekUsQUFBZSxBQUFnRSxBQUMvRTt5Q0FBQSxBQUFLLHVCQUFMLEFBQTRCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDN0M7NENBQUksQUFDQTtvREFBUSxNQUFSLEFBQWMsdUJBQWQsQUFBcUMsTUFBTSxVQUEzQyxBQUFxRCxjQUFyRCxBQUFtRSxVQUFuRSxBQUE2RSxBQUNoRjtBQUZELDBDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7b0RBQUEsQUFBUSxLQUFSLEFBQWEsK0RBQWIsQUFBNEUsQUFDL0U7QUFDSjtBQU5ELEFBT0g7QUFDSjtBQVpELEFBYUg7QUFqQkQsQUFrQkE7NkJBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFJLE1BQXpCLEFBQStCLElBQS9CLEFBQW1DLEFBQ25DOzZCQUFBLEFBQUssY0FBTCxBQUFtQixJQUFuQixBQUF1QixNQUFNLE1BQTdCLEFBQW1DLEFBQ25DOzZCQUFBLEFBQUssV0FBTCxBQUFnQixJQUFJLE1BQXBCLEFBQTBCLElBQTFCLEFBQThCLEFBQzlCOzZCQUFBLEFBQUssa0JBQUwsQUFBdUIsUUFBUSxVQUFBLEFBQUMsU0FBWSxBQUN4QztnQ0FBSSxBQUNBO3dDQUFRLE1BQVIsQUFBYyx1QkFBZCxBQUFxQyxBQUN4QztBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7d0NBQUEsQUFBUSxLQUFSLEFBQWEsOERBQWIsQUFBMkUsQUFDOUU7QUFDSjtBQU5ELEFBT0E7K0JBQUEsQUFBTyxBQUNWOzs7OzJDLEFBRU0sT0FBTyxBQUNWO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE9BQVgsQUFBa0IsQUFFbEI7OzRCQUFJLE9BQU8sS0FBQSxBQUFLLGdCQUFMLEFBQXFCLElBQUksTUFBcEMsQUFBVyxBQUErQixBQUMxQzs2QkFBQSxBQUFLLGdCQUFMLEFBQXFCLFVBQVUsTUFBL0IsQUFBcUMsQUFDckM7NkJBQUEsQUFBSyxjQUFMLEFBQW1CLFVBQW5CLEFBQTZCLEFBQzdCOzZCQUFBLEFBQUssV0FBTCxBQUFnQixVQUFVLE1BQTFCLEFBQWdDLEFBQ2hDOzRCQUFJLG1CQUFKLEFBQUksQUFBTyxPQUFPLEFBQ2Q7aUNBQUEsQUFBSyxvQkFBTCxBQUF5QixRQUFRLFVBQUEsQUFBQyxTQUFZLEFBQzFDO29DQUFJLEFBQ0E7NENBQVEsTUFBUixBQUFjLHVCQUFkLEFBQXFDLEFBQ3hDO0FBRkQsa0NBRUUsT0FBQSxBQUFPLEdBQUcsQUFDUjs0Q0FBQSxBQUFRLEtBQVIsQUFBYSxnRUFBYixBQUE2RSxBQUNoRjtBQUNKO0FBTkQsQUFPSDtBQUNEOytCQUFBLEFBQU8sQUFDVjs7OztvRCxBQUVlLE9BQU8sQUFDbkI7aURBQUEsQUFBWSxBQUNaO2dEQUFBLEFBQVcsT0FBWCxBQUFrQixBQUVsQjs7NEJBQUksU0FBUyxNQUFBLEFBQU0sNEJBQW5CLEFBQWEsQUFBa0MsQUFDL0M7NEJBQUksWUFBWSxNQUFBLEFBQU0sNEJBQXRCLEFBQWdCLEFBQWtDLEFBQ2xEOzRCQUFJLE9BQU8sTUFBQSxBQUFNLDRCQUFqQixBQUFXLEFBQWtDLEFBQzdDOzRCQUFJLEtBQUssTUFBQSxBQUFNLDRCQUFmLEFBQVMsQUFBa0MsQUFDM0M7NEJBQUksUUFBUSxNQUFBLEFBQU0sNEJBQWxCLEFBQVksQUFBa0MsQUFFOUM7OzRCQUFJLG1CQUFBLEFBQU8sV0FBVyxtQkFBbEIsQUFBa0IsQUFBTyxjQUFjLG1CQUF2QyxBQUF1QyxBQUFPLFNBQVMsbUJBQXZELEFBQXVELEFBQU8sT0FBTyxtQkFBekUsQUFBeUUsQUFBTyxRQUFRLEFBQ3BGO2dDQUFJLFlBQVksS0FBQSxBQUFLLFdBQUwsQUFBZ0IsSUFBSSxPQUFwQyxBQUFnQixBQUEyQixBQUMzQztnQ0FBSSxPQUFPLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixJQUFJLE9BQXBDLEFBQVcsQUFBZ0MsQUFDM0M7Z0NBQUksbUJBQUEsQUFBTyxTQUFTLG1CQUFwQixBQUFvQixBQUFPLFlBQVksQUFDbkM7b0NBQUksT0FBTyxNQUFYLEFBQWlCLEFBQ2pCO0FBQ0E7cUNBQUEsQUFBSyxhQUFMLEFBQWtCLE1BQWxCLEFBQXdCLE1BQXhCLEFBQThCLE1BQU0sVUFBcEMsQUFBOEMsQUFDOUM7b0NBQUksY0FBSixBQUFrQjtvQ0FDZCxVQURKLEFBQ2MsQUFDZDtxQ0FBSyxJQUFJLElBQVQsQUFBYSxHQUFHLElBQUksTUFBcEIsQUFBMEIsT0FBMUIsQUFBaUMsS0FBSyxBQUNsQzs4Q0FBVSxNQUFBLEFBQU0sNEJBQTRCLEVBQTVDLEFBQVUsQUFBa0MsQUFBRSxBQUM5Qzt3Q0FBSSxDQUFDLG1CQUFMLEFBQUssQUFBTyxVQUFVLEFBQ2xCOzhDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNEO2dEQUFBLEFBQVksS0FBSyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFNLFVBQVUsVUFBakMsQUFBdUIsQUFBb0IsUUFBUSxRQUFwRSxBQUFpQixBQUEyRCxBQUMvRTtBQUNEO29DQUFJLEFBQ0E7eUNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxVQUFqQixBQUEyQixBQUMzQjt5Q0FBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDMUM7NENBQUksQUFDQTtvREFBQSxBQUFRLE1BQVIsQUFBYyxNQUFNLFVBQXBCLEFBQThCLE9BQU8sS0FBckMsQUFBMEMsT0FBTyxHQUFBLEFBQUcsUUFBUSxLQUE1RCxBQUFpRSxPQUFqRSxBQUF3RSxBQUMzRTtBQUZELDBDQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7b0RBQUEsQUFBUSxLQUFSLEFBQWEsZ0VBQWIsQUFBNkUsQUFDaEY7QUFDSjtBQU5ELEFBT0g7QUFURCwwQ0FTVSxBQUNOO3lDQUFBLEFBQUssQUFDUjtBQUNKO0FBekJELG1DQXlCTyxBQUNIO3NDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNKO0FBL0JELCtCQStCTyxBQUNIO2tDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNKOzs7O3NELEFBRWlCLE9BQU8sQUFDckI7NEJBQUksQ0FBQyxtQkFBTCxBQUFLLEFBQU8sUUFBUSxBQUNoQjttQ0FBQSxBQUFPLEFBQ1Y7QUFDRDs0QkFBSSxjQUFBLEFBQWMsOENBQWxCLEFBQUksQUFBYyxBQUNsQjs0QkFBSSxTQUFKLEFBQWEsVUFBVSxBQUNuQjtnQ0FBSSxpQkFBSixBQUFxQixNQUFNLEFBQ3ZCO3VDQUFPLE1BQVAsQUFBTyxBQUFNLEFBQ2hCO0FBRkQsbUNBRU8sQUFDSDtvQ0FBSSxRQUFRLEtBQUEsQUFBSyxjQUFMLEFBQW1CLElBQS9CLEFBQVksQUFBdUIsQUFDbkM7b0NBQUksbUJBQUosQUFBSSxBQUFPLFFBQVEsQUFDZjsyQ0FBQSxBQUFPLEFBQ1Y7QUFDRDtzQ0FBTSxJQUFBLEFBQUksVUFBVixBQUFNLEFBQWMsQUFDdkI7QUFDSjtBQUNEOzRCQUFJLFNBQUEsQUFBUyxZQUFZLFNBQXJCLEFBQThCLFlBQVksU0FBOUMsQUFBdUQsV0FBVyxBQUM5RDttQ0FBQSxBQUFPLEFBQ1Y7QUFDRDs4QkFBTSxJQUFBLEFBQUksVUFBVixBQUFNLEFBQWMsQUFDdkI7Ozs7cUQsQUFFZ0IsT0FBTyxBQUNwQjsrQkFBTyxLQUFBLEFBQUssWUFBTCxBQUFpQixNQUFNLE9BQXZCLEFBQThCLGNBQXJDLEFBQU8sQUFBNEMsQUFDdEQ7Ozs7Ozs7OEIsQUFoV2dCOztBQzNCckI7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O2dCLEFBRXFCOzs7Ozs7OzJDLEFBRVYsSyxBQUFLLFFBQU8sQUFDZjtnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ2hCO2dDQUFBLEFBQVEsSUFBSSw2QkFBQSxBQUE0QixNQUE1QixBQUFpQyxTQUFRLEtBQUEsQUFBSyxVQUExRCxBQUFxRCxBQUFlLEFBRXBFOzs0QkFBSSxVQUFVLHNCQUFBLEFBQVksY0FBWixBQUEwQixJQUExQixBQUE4QixLQUE5QixBQUFtQyxNQUFuQyxBQUF5QyxPQUF6QyxBQUFnRCxRQUFoRCxBQUF3RCxHQUF4RCxBQUEyRCxZQUEzRCxBQUF1RSxNQUF2RSxBQUE2RSxhQUFhLE9BQXhHLEFBQWMsQUFBaUcsQUFDL0c7NEJBQUksbUJBQUosQUFBSSxBQUFPLFNBQVMsQUFDaEI7Z0NBQUksbUJBQU8sT0FBWCxBQUFJLEFBQWMsZUFBZSxBQUM3Qjt3Q0FBQSxBQUFRLGFBQWEsT0FBckIsQUFBNEIsQUFDL0I7QUFDRDtnQ0FBSSxtQkFBTyxPQUFQLEFBQWMsZ0JBQWdCLE9BQUEsQUFBTyxLQUFLLE9BQVosQUFBbUIsYUFBbkIsQUFBZ0MsU0FBbEUsQUFBMkUsR0FBRyxBQUMxRTt3Q0FBQSxBQUFRLFlBQVksT0FBcEIsQUFBMkIsQUFDOUI7QUFDSjtBQUVEOzs0QkFBSSxVQUFVLFFBQWQsQUFBYyxBQUFRLEFBRXRCOzs0QkFBSSxjQUFjLHNDQUFBLEFBQTRCLEtBQTlDLEFBQWtCLEFBQWlDLEFBQ25EO29DQUFBLEFBQVksR0FBWixBQUFlLFNBQVMsVUFBQSxBQUFVLE9BQU8sQUFDckM7MENBQUEsQUFBYyxLQUFkLEFBQW1CLFNBQW5CLEFBQTRCLEFBQy9CO0FBRkQsQUFHQTtnQ0FBQSxBQUFRLGdCQUFSLEFBQXdCLGNBQXhCLEFBQXNDLEFBRXRDOzs0QkFBSSxrQkFBa0Isd0JBQXRCLEFBQXNCLEFBQW9CLEFBQzFDOzRCQUFJLGNBQWMsMEJBQWxCLEFBQWtCLEFBQWdCLEFBQ2xDOzRCQUFJLFlBQVksd0JBQUEsQUFBYyxLQUFkLEFBQW1CLFNBQW5CLEFBQTRCLGlCQUE1QyxBQUFnQixBQUE2QyxBQUM3RDs0QkFBSSxvQkFBb0IsZ0NBQUEsQUFBc0IsU0FBdEIsQUFBK0IsaUJBQXZELEFBQXdCLEFBQWdELEFBRXhFOzs0QkFBSSxnQkFBZ0IsNEJBQUEsQUFBa0IsU0FBbEIsQUFBMkIsYUFBM0IsQUFBd0MsbUJBQTVELEFBQW9CLEFBQTJELEFBQy9FOytCQUFBLEFBQU8sQUFDVjs7Ozs7Ozs4QixBQWhDZ0I7O0FBbUNyQixvQkFBQSxBQUFRLHVCQUFSLEFBQStCOztBQ2pFL0I7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Z0IsQUFHcUIsNEJBRWpCO3VDQUFBLEFBQVksU0FBWixBQUFxQixhQUFyQixBQUFrQyxtQkFBbEMsQUFBcUQsV0FBVTswQ0FDM0Q7OzZDQUFBLEFBQVksQUFDWjs0Q0FBQSxBQUFXLFNBQVgsQUFBb0IsQUFDcEI7NENBQUEsQUFBVyxhQUFYLEFBQXdCLEFBQ3hCOzRDQUFBLEFBQVcsbUJBQVgsQUFBOEIsQUFDOUI7NENBQUEsQUFBVyxXQUFYLEFBQXNCLEFBRXRCOzt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUNuQjt5QkFBQSxBQUFLLHFCQUFMLEFBQTBCLEFBQzFCO3lCQUFBLEFBQUssYUFBTCxBQUFrQixBQUNsQjt5QkFBQSxBQUFLLG9CQUFMLEFBQXlCLEFBQ3pCO3lCQUFBLEFBQUssY0FBTCxBQUFtQixBQUN0Qjs7Ozs7OENBRVEsQUFDTDs0QkFBSSxPQUFKLEFBQVcsQUFDWDs2QkFBQSxBQUFLLDBDQUFnQyxVQUFBLEFBQUMsU0FBWSxBQUM5QztpQ0FBQSxBQUFLLFdBQUwsQUFBZ0IsQUFDaEI7aUNBQUEsQUFBSyxXQUFMLEFBQWdCLE9BQU8sc0JBQXZCLEFBQXVCLEFBQVksOEJBQW5DLEFBQWlFLEtBQUssWUFBTSxBQUN4RTtxQ0FBQSxBQUFLLGNBQUwsQUFBbUIsQUFDbkI7QUFDSDtBQUhELEFBSUg7QUFORCxBQUF5QixBQU96Qix5QkFQeUI7K0JBT2xCLEtBQVAsQUFBWSxBQUNmOzs7O2dEQUVVLEFBQ1A7NEJBQUcsbUJBQU8sS0FBVixBQUFHLEFBQVksb0JBQW1CLEFBQzlCO2dDQUFHLENBQUMsS0FBSixBQUFTLGFBQVksQUFDakI7dUNBQU8sS0FBUCxBQUFZLEFBQ2Y7QUFGRCxtQ0FFSyxBQUNEOzZEQUFtQixVQUFBLEFBQUMsU0FBWSxBQUM1QjtBQUNIO0FBRkQsQUFBTyxBQUdWLGlDQUhVO0FBSWQ7QUFSRCwrQkFRSyxBQUNEO21DQUFPLEtBQVAsQUFBTyxBQUFLLEFBQ2Y7QUFDSjs7OztxRCxBQUVnQixNQUFLLEFBQ2xCO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE1BQVgsQUFBaUIsQUFFakI7OytCQUFPLEtBQUEsQUFBSyxtQkFBTCxBQUF3QixpQkFBL0IsQUFBTyxBQUF5QyxBQUNuRDs7OztpREFFVyxBQUNSOzRCQUFJLE9BQUosQUFBVyxBQUNYOzZCQUFBLEFBQUssUUFBTCxBQUFhLEFBQ2I7cURBQW1CLFVBQUEsQUFBQyxTQUFZLEFBQzVCO2lDQUFBLEFBQUssbUJBQUwsQUFBd0IsVUFBeEIsQUFBa0MsS0FBSyxZQUFNLEFBQ3pDO3FDQUFBLEFBQUssV0FBTCxBQUFnQixPQUFPLHNCQUF2QixBQUF1QixBQUFZLEFBQ25DO3FDQUFBLEFBQUssVUFBTCxBQUFlLEFBQ2Y7cUNBQUEsQUFBSyxjQUFMLEFBQW1CLEFBQ25CO3FDQUFBLEFBQUsscUJBQUwsQUFBMEIsQUFDMUI7cUNBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ2xCO0FBQ0g7QUFQRCxBQVFIO0FBVEQsQUFBTyxBQVVWLHlCQVZVOzs7Ozs7OzhCLEFBckRNOztBQWtFckIsNENBQVEsY0FBUixBQUFzQjs7Ozs7Ozs7Ozs7Ozs7OztpQkM1RnRCOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7QUFHQTs7Ozs7Ozs7Z0IsQUFFcUI7Ozs7Ozs7eUUsQUFFMkIsU0FBUyxBQUNqRDs7aUNBQ1MsUUFERixBQUNVLEFBQ2I7aUNBQUssUUFGRixBQUVVLEFBQ2I7eUNBQUssQUFBUSxXQUFSLEFBQW1CLElBQUksVUFBQSxBQUFDLFdBQWMsQUFDdkM7b0NBQUk7eUNBQ0ssVUFESSxBQUNNLEFBQ2Y7eUNBQUssVUFGVCxBQUFhLEFBRU0sQUFFbkI7QUFKYSxBQUNUO29DQUdBLG1CQUFPLFVBQVgsQUFBSSxBQUFpQixRQUFRLEFBQ3pCOzJDQUFBLEFBQU8sSUFBSSxVQUFYLEFBQXFCLEFBQ3hCO0FBQ0Q7dUNBQUEsQUFBTyxBQUNWO0FBWkUsQUFHRSxBQVVMLDZCQVZLO2tDQUhULEFBQU8sQUFhRyxBQUViO0FBZlUsQUFDSDs7Ozt5RSxBQWdCb0MsU0FBUyxBQUNqRDs7a0NBQU8sQUFDRyxBQUNOO3lDQUZHLEFBRVUsQUFDYjs4Q0FIRyxBQUdlLEFBQ2xCO29DQUFRLFFBSkwsQUFJYSxBQUNoQjtzQ0FBVSxRQUxQLEFBS2UsQUFDbEI7a0RBQWMsQUFBUSxFQUFSLEFBQVUsSUFBSSxVQUFBLEFBQUMsV0FBYyxBQUN2Qzs7b0RBQ29CLFVBRGIsQUFDdUIsQUFDMUI7MENBQU0sVUFGSCxBQUVhLEFBQ2hCOzZDQUFTLG1CQUFPLFVBQVAsQUFBaUIsS0FBSSxVQUFyQixBQUErQixJQUhyQyxBQUd5QyxBQUM1QztpREFKSixBQUFPLEFBSVUsQUFFcEI7QUFOVSxBQUNIO0FBUlosQUFBTyxBQU1XLEFBU3JCLDZCQVRxQjtBQU5YLEFBQ0g7Ozs7OEQsQUFnQnlCLFNBQVMsQUFDdEM7NEJBQUk7aUNBQ0ssUUFEVCxBQUFhLEFBQ0ksQUFFakI7QUFIYSxBQUNUOzRCQUVBLG1CQUFPLFFBQVgsQUFBSSxBQUFlLFdBQVcsQUFDMUI7bUNBQUEsQUFBTyxJQUFJLFFBQVgsQUFBbUIsQUFDdEI7QUFDRDs0QkFBSSxtQkFBTyxRQUFYLEFBQUksQUFBZSxXQUFXLEFBQzFCO21DQUFBLEFBQU8sSUFBSSxRQUFYLEFBQW1CLEFBQ3RCO0FBQ0Q7K0JBQUEsQUFBTyxLQUFQLEFBQVksQUFDWjsrQkFBQSxBQUFPLEFBQ1Y7Ozs7OEQsQUFFZ0MsU0FBUyxBQUN0Qzs7a0NBQU8sQUFDRyxBQUNOO3lDQUZHLEFBRVUsQUFDYjsyQ0FBZSxRQUhaLEFBR29CLEFBQ3ZCO3dDQUFZLG1CQUFPLFFBQVAsQUFBZSxLQUFJLFFBQW5CLEFBQTJCLElBSnBDLEFBSXdDLEFBQzNDO3dDQUFZLG1CQUFPLFFBQVAsQUFBZSxLQUFJLFFBQW5CLEFBQTJCLElBTDNDLEFBQU8sQUFLd0MsQUFFbEQ7QUFQVSxBQUNIOzs7OzJDLEFBUU0sVUFBVSxBQUNwQjs0QkFBSSxPQUFKLEFBQVcsQUFDWDtvQ0FBTyxBQUFLLG1CQUFVLEFBQVMsSUFBSSxVQUFBLEFBQUMsU0FBWSxBQUM1QztnQ0FBSSxRQUFBLEFBQVEsT0FBWixBQUFtQiwyQkFBMkIsQUFDMUM7dUNBQU8sS0FBQSxBQUFLLHFDQUFaLEFBQU8sQUFBMEMsQUFDcEQ7QUFGRCxtQ0FFTyxJQUFJLFFBQUEsQUFBUSxPQUFaLEFBQW1CLGdCQUFnQixBQUN0Qzt1Q0FBTyxLQUFBLEFBQUssMEJBQVosQUFBTyxBQUErQixBQUN6QztBQUNEO21DQUFBLEFBQU8sQUFDVjtBQVBELEFBQU8sQUFBZSxBQVF6Qix5QkFSeUIsQ0FBZjs7OzsyQyxBQVVHLGFBQWEsQUFDdkI7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksT0FBQSxBQUFPLGdCQUFYLEFBQTJCLFVBQVUsQUFDakM7d0NBQU8sQUFBSyxNQUFMLEFBQVcsYUFBWCxBQUF3QixJQUFJLFVBQUEsQUFBVSxTQUFTLEFBQ2xEO29DQUFJLFFBQUEsQUFBUSxPQUFaLEFBQW1CLDJCQUEyQixBQUMxQzsyQ0FBTyxLQUFBLEFBQUsscUNBQVosQUFBTyxBQUEwQyxBQUNwRDtBQUZELHVDQUVPLElBQUksUUFBQSxBQUFRLE9BQVosQUFBbUIsZ0JBQWdCLEFBQ3RDOzJDQUFPLEtBQUEsQUFBSywwQkFBWixBQUFPLEFBQStCLEFBQ3pDO0FBQ0Q7dUNBQUEsQUFBTyxBQUNWO0FBUEQsQUFBTyxBQVFWLDZCQVJVO0FBRFgsK0JBU08sQUFDSDttQ0FBQSxBQUFPLEFBQ1Y7QUFDSjs7Ozs7Ozs4QixBQXhGZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Z0IsQUFFYSx5QixBQUFBOzs7Ozs7O21FLEFBRTZCLGNBQWMsQUFDaEQ7K0JBQU8sdUNBQVAsQUFBTyxBQUE2QixBQUN2Qzs7OztrRSxBQUVvQyxnQixBQUFnQixvQkFBb0IsQUFDckU7K0JBQU8sc0NBQUEsQUFBNEIsZ0JBQW5DLEFBQU8sQUFBNEMsQUFDdEQ7Ozs7NEQsQUFFOEIsYyxBQUFjLFksQUFBWSxRQUFRLEFBQzdEOytCQUFPLGdDQUFBLEFBQXNCLGNBQXRCLEFBQW9DLFlBQTNDLEFBQU8sQUFBZ0QsQUFDMUQ7Ozs7Ozs7Ozs7Ozs7QUNoQkw7Ozs7Ozs7O2dCLEFBR3FCLG9CQUVqQiwyQkFBQSxBQUFZLGNBQVosQUFBMEIsWUFBMUIsQUFBc0MsUUFBUTtzQ0FDMUM7O3dDQUFBLEFBQVksQUFDWjt1Q0FBQSxBQUFXLGNBQVgsQUFBeUIsQUFDekI7dUNBQUEsQUFBVyxZQUFYLEFBQXVCLEFBRXZCOztxQkFBQSxBQUFLLEtBQUwsQUFBVSxBQUNWO3FCQUFBLEFBQUssSUFBTCxBQUFTLEFBQ1Q7cUJBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtxQkFBQSxBQUFLLElBQUwsQUFBUyxBQUNaO0E7OzhCLEFBWGdCOzs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Z0IsQUFHcUIsMEJBRWpCLGlDQUFBLEFBQVksZ0JBQVosQUFBNEIsb0JBQW9CO3NDQUM1Qzs7d0NBQUEsQUFBWSxBQUNaO3VDQUFBLEFBQVcsZ0JBQVgsQUFBMkIsQUFFM0I7O3FCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7cUJBQUEsQUFBSyxJQUFMLEFBQVMsQUFDVDtxQkFBQSxBQUFLLElBQUwsQUFBUyxBQUNaO0E7OzhCLEFBVGdCOzs7Ozs7OztBQ0hyQjs7Ozs7Ozs7Z0IsQUFHcUIsMkJBRWpCLGtDQUFBLEFBQVksY0FBYztzQ0FDdEI7O3dDQUFBLEFBQVksQUFDWjt1Q0FBQSxBQUFXLGNBQVgsQUFBeUIsQUFFekI7O3FCQUFBLEFBQUssS0FBTCxBQUFVLEFBQ1Y7cUJBQUEsQUFBSyxJQUFMLEFBQVMsQUFDWjtBOzs4QixBQVJnQjs7QUNIckI7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQSxnQkFBTSxlQUFOLEFBQXFCO0FBQ3JCLGdCQUFNLG1CQUFOLEFBQXlCO0FBQ3pCLGdCQUFNLGtCQUFOLEFBQXdCO0FBQ3hCLGdCQUFNLHNCQUFOLEFBQTRCO0FBQzVCLGdCQUFNLGdCQUFOLEFBQXNCO0FBQ3RCLGdCQUFNLHVCQUFOLEFBQTZCO0FBQzdCLGdCQUFNLHVCQUFOLEFBQTZCOztnQixBQUVSLHdCQUVqQjttQ0FBQSxBQUFZLEtBQVosQUFBaUIsU0FBakIsQUFBMEIsaUJBQTFCLEFBQTJDLFFBQVE7MENBQy9DOzs2Q0FBQSxBQUFZLEFBQ1o7NENBQUEsQUFBVyxLQUFYLEFBQWdCLEFBQ2hCOzRDQUFBLEFBQVcsU0FBWCxBQUFvQixBQUNwQjs0Q0FBQSxBQUFXLGlCQUFYLEFBQTRCLEFBRTVCOzt3QkFBSSxPQUFKLEFBQVcsQUFDWDt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxrQkFBTCxBQUF1QixBQUN2Qjt5QkFBQSxBQUFLLHVCQUF1QixZQUFXLEFBQUUsQ0FBekMsQUFDQTt5QkFBQSxBQUFLLDRDQUFrQyxVQUFBLEFBQVMsU0FBUyxBQUNyRDs2QkFBQSxBQUFLLHVCQUFMLEFBQTRCLEFBQy9CO0FBRkQsQUFBMkIsQUFJM0IscUJBSjJCOzs0QkFJM0IsQUFBUSxzQkFBUixBQUE4QixtQkFBbUIsVUFBQSxBQUFDLE9BQVUsQUFDeEQ7NEJBQUksUUFBUSxNQUFaLEFBQWtCLEFBQ2xCOzRCQUFJLGVBQWUsTUFBQSxBQUFNLDRCQUF6QixBQUFtQixBQUFrQyxBQUNyRDs0QkFBSSxtQkFBQSxBQUFPLGlCQUFpQixhQUFBLEFBQWEsVUFBekMsQUFBbUQsc0JBQXNCLEFBQ3JFO2dDQUFJLE1BQUEsQUFBTSxjQUFjLDJCQUFBLEFBQWlCLEtBQXpDLEFBQThDLE9BQU8sQUFDakQ7cUNBQUEsQUFBSyxhQUFMLEFBQWtCLEFBQ3JCO0FBRkQsbUNBRU8sSUFBSSxNQUFBLEFBQU0sY0FBYywyQkFBQSxBQUFpQixLQUF6QyxBQUE4QyxTQUFTLEFBQzFEO3FDQUFBLEFBQUssZUFBTCxBQUFvQixBQUN2QjtBQUNKO0FBQ0o7QUFWRCxBQVdIOzs7Ozs4Q0FDUyxBQUNOOzRCQUFJLE9BQUosQUFBVyxBQUNYO21DQUFXLFlBQU0sQUFDYjtpQ0FBQSxBQUFLLFFBQUwsQUFBYSxtQkFBbUIsc0JBQWhDLEFBQWdDLEFBQVksOEJBQThCLHNCQUExRSxBQUEwRSxBQUFZLEFBQ3pGO0FBRkQsMkJBQUEsQUFFRyxBQUNOOzs7O2lELEFBRVksT0FBTyxBQUNoQjtpREFBQSxBQUFZLEFBQ1o7Z0RBQUEsQUFBVyxPQUFYLEFBQWtCLEFBRWxCOzs0QkFBSSxPQUFPLE1BQVgsQUFBaUIsQUFDakI7Z0NBQUEsQUFBUSxBQUNKO2lDQUFBLEFBQUssQUFDRDtBQUNBO0FBQ0o7aUNBQUEsQUFBSyxBQUNEO3FDQUFBLEFBQUssZ0JBQUwsQUFBcUIsY0FBckIsQUFBbUMsQUFDbkM7QUFDSjtpQ0FBQSxBQUFLLEFBQ0Q7cUNBQUEsQUFBSyxxQkFBTCxBQUEwQixBQUMxQjtBQUNKO2lDQUFBLEFBQUssQUFDRDtxQ0FBQSxBQUFLLGdCQUFMLEFBQXFCLGdCQUFyQixBQUFxQyxBQUNyQztxQ0FBQSxBQUFLLFFBQUwsQUFBYSx3QkFBYixBQUFxQyxBQUNyQztBQUNKO0FBQ0k7cUNBQUEsQUFBSyxnQkFBTCxBQUFxQixLQUFyQixBQUEwQixBQUMxQjtBQWhCUixBQWtCSDs7Ozs7bUQsQUFFYyxPQUFPLEFBQ2xCO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7NEJBQUksT0FBTyxNQUFYLEFBQWlCLEFBQ2pCO2dDQUFBLEFBQVEsQUFDSjtpQ0FBQSxBQUFLLEFBQ0Q7cUNBQUEsQUFBSyxnQkFBTCxBQUFxQixnQkFBckIsQUFBcUMsQUFDckM7QUFDSjtpQ0FBQSxBQUFLLEFBQ0Q7QUFDQTtBQUNKO0FBQ0k7cUNBQUEsQUFBSyxnQkFBTCxBQUFxQixPQUFyQixBQUE0QixBQUM1QjtBQVRSLEFBV0g7Ozs7OzJDLEFBRU0sU0FBUyxBQUNaO2lEQUFBLEFBQVksQUFDWjtnREFBQSxBQUFXLFNBQVgsQUFBb0IsQUFFcEI7OzRCQUFJLFVBQVUsS0FBZCxBQUFtQixBQUNuQjtxREFBbUIsVUFBQSxBQUFDLFNBQVksQUFDNUI7b0NBQUEsQUFBUSxLQUFSLEFBQWE7NENBQ0csc0JBQU0sQUFDZDtBQUNIO0FBSEwsQUFBc0IsQUFLekI7QUFMeUIsQUFDbEI7QUFGUixBQUFPLEFBT1YseUJBUFU7Ozs7c0RBU08sQUFDZDsrQkFBTyxLQUFQLEFBQVksQUFDZjs7Ozs7Ozs4QixBQTlGZ0I7O0FBaUdyQixvQkFBQSxBQUFRLGdCQUFSLEFBQXdCO0FBQ3hCLG9CQUFBLEFBQVEsdUJBQVIsQUFBK0I7QUFDL0Isb0JBQUEsQUFBUSx1QkFBUixBQUErQjtBQUMvQixvQkFBQSxBQUFRLG1CQUFSLEFBQTJCOzs7Ozs7O0FDdklwQixnQkFBTSxzQ0FBTixBQUFxQjtBQUNyQixnQkFBTSxzQkFBTixBQUFhO0FBQ2IsZ0JBQU0sd0JBQU4sQUFBYztBQUNkLGdCQUFNLG9CQUFOLEFBQVk7QUFDWixnQkFBTSxzQkFBTixBQUFhO0FBQ2IsZ0JBQU0sd0JBQU4sQUFBYztBQUNkLGdCQUFNLDBCQUFOLEFBQWU7QUFDZixnQkFBTSw0QkFBTixBQUFnQjtBQUNoQixnQkFBTSwwQkFBTixBQUFlO0FBQ2YsZ0JBQU0sc0JBQU4sQUFBYTtBQUNiLGdCQUFNLHNCQUFOLEFBQWE7QUFDYixnQkFBTSw4QkFBTixBQUFpQjtBQUNqQixnQkFBTSx3REFBTixBQUE4QjtBQUM5QixnQkFBTSxrRUFBTixBQUFtQztBQUNuQyxnQkFBTSxrRUFBTixBQUFtQzs7QUNkMUM7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFJQTs7OztBQUVBOztBQUdBOzs7Ozs7Ozs7Ozs7QUFJQSxnQkFBTSxnQkFBTixBQUFzQjtBQUN0QixnQkFBTSxRQUFOLEFBQWM7QUFDZCxnQkFBTSxhQUFOLEFBQW1COztnQixBQUVFLGdDQUVqQjsyQ0FBQSxBQUFZLFNBQVosQUFBcUIsaUJBQXJCLEFBQXNDLFdBQVU7MENBQzVDOzs0Q0FBQSxBQUFZLEFBQ1o7MkNBQUEsQUFBVyxTQUFYLEFBQW9CLEFBQ3BCOzJDQUFBLEFBQVcsaUJBQVgsQUFBNEIsQUFDNUI7MkNBQUEsQUFBVyxXQUFYLEFBQXNCLEFBRXRCOzt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDdkI7eUJBQUEsQUFBSyxZQUFMLEFBQWlCLEFBQ2pCO3lCQUFBLEFBQUssY0FBYyxVQUFuQixBQUNIOzs7OztxRCxBQUVnQixNQUFNLEFBQ25COytCQUFPLEtBQUEsQUFBSyxrQkFBTCxBQUF1QixNQUE5QixBQUFPLEFBQTZCLEFBQ3ZDOzs7O3NELEFBRWlCLE0sQUFBTSxvQkFBb0IsQUFDeEM7Z0RBQUEsQUFBWSxBQUNaOytDQUFBLEFBQVcsTUFBWCxBQUFpQixBQUVqQjs7NEJBQUksT0FBSixBQUFXLEFBQ1g7NEJBQUksb0JBQUo7NEJBQWtCLGVBQWxCOzRCQUEyQixhQUEzQjs0QkFBa0Msa0JBQWxDLEFBQ0E7cURBQW1CLFVBQUEsQUFBQyxTQUFZLEFBQzVCO2lDQUFBLEFBQUssVUFBTCxBQUFlLGtCQUFmLEFBQWlDLEtBQUssVUFBQSxBQUFDLGNBQWlCLEFBQ3BEO3FDQUFBLEFBQUssVUFBTCxBQUFlLE9BQU8sK0JBQUEsQUFBZSw4QkFBZixBQUE2QyxNQUFuRSxBQUFzQixBQUFtRCxxQkFBekUsQUFBOEYsS0FBSyxZQUFNLEFBQ3JHO21EQUFlLGFBQUEsQUFBYSw0QkFBYixBQUF5QyxlQUF4RCxBQUFlLEFBQXdELEFBQ3ZFOzhDQUFVLGFBQUEsQUFBYSw0QkFBYixBQUF5QyxPQUFuRCxBQUFVLEFBQWdELEFBQzFEOzRDQUFRLEtBQUEsQUFBSyxnQkFBTCxBQUFxQixpQkFBN0IsQUFBUSxBQUFzQyxBQUM5QztpREFBYSw4QkFBQSxBQUFvQixjQUFwQixBQUFrQyxPQUEvQyxBQUFhLEFBQXlDLEFBQ3REO3lDQUFBLEFBQUssWUFBTCxBQUFpQixJQUFqQixBQUFxQixBQUNyQjs0Q0FBQSxBQUFRLEFBQ1g7QUFQRCxBQVFIO0FBVEQsQUFVSDtBQVhELEFBQU8sQUFZVix5QkFaVTs7OztpRCxBQWNFLGMsQUFBYyxZLEFBQVksUUFBUSxBQUMzQztnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxjQUFYLEFBQXlCLEFBQ3pCOytDQUFBLEFBQVcsWUFBWCxBQUF1QixBQUV2Qjs7NEJBQUksT0FBSixBQUFXLEFBQ1g7cURBQW1CLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVSxBQUVuQzs7Z0NBQUksYUFBYSxDQUNiLEtBQUEsQUFBSyxRQUFMLEFBQWEsb0NBQWIsQUFBc0MsaUJBRHpCLHVCQUViLEtBQUEsQUFBSyxRQUFMLEFBQWEsVUFGakIsQUFBaUIsQUFFYixBQUF1QixBQUczQjs7Z0NBQUksS0FBSyxLQUFBLEFBQUssUUFBTCxBQUFhLGtCQUFiLEFBQStCLE1BQU0sS0FBckMsQUFBMEMsU0FBUyxDQUFBLEFBQUMsbUNBQUQsQUFBeUIsT0FBckYsQUFBUyxBQUFtRCxBQUFnQyxBQUU1Rjs7Z0NBQUksZUFBSixBQUFtQixBQUNuQjtnQ0FBRyxtQkFBSCxBQUFHLEFBQU8sU0FBUyxBQUNmO3FDQUFLLElBQUwsQUFBUyxTQUFULEFBQWtCLFFBQVEsQUFDdEI7d0NBQUksT0FBQSxBQUFPLGVBQVgsQUFBSSxBQUFzQixRQUFRLEFBQzlCOzRDQUFJLFFBQVEsS0FBQSxBQUFLLGdCQUFMLEFBQXFCLGtCQUFrQixPQUFuRCxBQUFZLEFBQXVDLEFBQU8sQUFDMUQ7cURBQUEsQUFBYSxLQUFLLEVBQUMsR0FBRCxBQUFJLE9BQU8sR0FBN0IsQUFBa0IsQUFBYyxBQUNuQztBQUNKO0FBQ0o7QUFFRDs7aUNBQUEsQUFBSyxVQUFMLEFBQWUsT0FBTywrQkFBQSxBQUFlLHdCQUFmLEFBQXVDLGNBQXZDLEFBQXFELFlBQTNFLEFBQXNCLEFBQWlFLGVBQXZGLEFBQXNHLEtBQUssWUFBTSxBQUM3RztvQ0FBSSxVQUFVLEdBQUEsQUFBRyw0QkFBSCxBQUErQixZQUE3QyxBQUFjLEFBQTJDLEFBQ3pEO29DQUFBLEFBQUksU0FBUyxBQUNUOzJDQUFPLElBQUEsQUFBSSxNQUFYLEFBQU8sQUFBVSxBQUNwQjtBQUZELHVDQUVPLEFBQ0g7QUFDSDtBQUNEO3FDQUFBLEFBQUssUUFBTCxBQUFhLHdCQUFiLEFBQXFDLEFBQ3hDO0FBUkQsQUFTSDtBQTVCRCxBQUFPLEFBNkJWLHlCQTdCVTs7OztzRCxBQStCTyxZQUFZLEFBQzFCO2dEQUFBLEFBQVksQUFDWjsrQ0FBQSxBQUFXLFlBQVgsQUFBdUIsQUFFdkI7OzRCQUFJLE9BQUosQUFBVyxBQUNYO3FEQUFtQixVQUFBLEFBQUMsU0FBWSxBQUM1QjtpQ0FBQSxBQUFLLFVBQUwsQUFBZSxrQkFBZixBQUFpQyxLQUFLLFVBQUEsQUFBQyxjQUFpQixBQUNwRDtxQ0FBQSxBQUFLLFlBQUwsQUFBaUIsT0FBakIsQUFBd0IsQUFDeEI7NkNBQUEsQUFBYSw0QkFBYixBQUF5QyxlQUF6QyxBQUF3RCxTQUFTLFdBQWpFLEFBQTRFLEFBQzVFO3FDQUFBLEFBQUssVUFBTCxBQUFlLE9BQU8sK0JBQUEsQUFBZSwrQkFBK0IsV0FBcEUsQUFBc0IsQUFBOEMsQUFBVyxVQUEvRSxBQUF5RixLQUF6RixBQUE4RixBQUNqRztBQUpELEFBS0g7QUFORCxBQUFPLEFBT1YseUJBUFU7Ozs7OENBU0QsQUFDTjs0QkFBSSxrQkFBa0IsS0FBdEIsQUFBMkIsQUFDM0I7NEJBQUksV0FBSixBQUFlLEFBQ2Y7NkJBQUEsQUFBSyxjQUFjLFVBQW5CLEFBQ0E7d0NBQUEsQUFBZ0IsUUFBUSxVQUFBLEFBQUMsWUFBZSxBQUNwQztnQ0FBSSxBQUNBO3lDQUFBLEFBQVMsS0FBSyxXQUFkLEFBQWMsQUFBVyxBQUM1QjtBQUZELDhCQUVFLE9BQUEsQUFBTyxHQUFHLEFBQ1I7QUFDSDtBQUNKO0FBTkQsQUFPQTsrQkFBTyxrQkFBQSxBQUFRLElBQWYsQUFBTyxBQUFZLEFBQ3RCOzs7Ozs7OzhCLEFBckdnQjs7QUN0Q3JCOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7Z0IsQUFHcUIsOEJBRWpCO3lDQUFBLEFBQVksY0FBWixBQUEwQixPQUExQixBQUFpQyxTQUFROzBDQUNyQzs7NENBQUEsQUFBWSxBQUNaOzJDQUFBLEFBQVcsY0FBWCxBQUF5QixBQUN6QjsyQ0FBQSxBQUFXLE9BQVgsQUFBa0IsQUFDbEI7MkNBQUEsQUFBVyxTQUFYLEFBQW9CLEFBRXBCOzt5QkFBQSxBQUFLLGVBQUwsQUFBb0IsQUFDcEI7eUJBQUEsQUFBSyxRQUFMLEFBQWEsQUFDYjt5QkFBQSxBQUFLLFVBQUwsQUFBZSxBQUNmO3lCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjt5QkFBQSxBQUFLLHNCQUFzQixVQUEzQixBQUNIOzs7OzsrQ0FFVSxBQUNQOytCQUFPLEtBQVAsQUFBWSxBQUNmOzs7OzRDQUVPLEFBQ0o7K0JBQU8sS0FBUCxBQUFZLEFBQ2Y7Ozs7MkMsQUFFTSxNLEFBQU0sUUFBTyxBQUNoQjtnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxNQUFYLEFBQWlCLEFBRWpCOzs0QkFBSSxLQUFKLEFBQVMsV0FBVyxBQUNoQjtrQ0FBTSxJQUFBLEFBQUksTUFBVixBQUFNLEFBQVUsQUFDbkI7QUFDRDsrQkFBTyxLQUFBLEFBQUssUUFBTCxBQUFhLGFBQWEsS0FBMUIsQUFBK0IsY0FBL0IsQUFBNkMsTUFBcEQsQUFBTyxBQUFtRCxBQUM3RDs7OztxRCxBQUVnQixNQUFNLEFBQ25COytCQUFPLEtBQUEsQUFBSyxRQUFMLEFBQWEsa0JBQWIsQUFBK0IsTUFBTSxLQUE1QyxBQUFPLEFBQXFDLEFBQUssQUFDcEQ7Ozs7OENBRVE7b0NBQ0w7OzRCQUFJLEtBQUosQUFBUyxXQUFXLEFBQ2hCO2tDQUFNLElBQUEsQUFBSSxNQUFWLEFBQU0sQUFBVSxBQUNuQjtBQUNEOzZCQUFBLEFBQUssWUFBTCxBQUFpQixBQUNqQjs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLFFBQVEsVUFBQSxBQUFDLFNBQVksQUFDMUM7Z0NBQUksQUFDQTt3Q0FDSDtBQUZELDhCQUVFLE9BQUEsQUFBTSxHQUFHLEFBQ1A7d0NBQUEsQUFBUSxLQUFSLEFBQWEsOERBQWIsQUFBMkUsQUFDOUU7QUFDSjtBQU5ELDJCQUFBLEFBTUcsQUFDSDsrQkFBTyxLQUFBLEFBQUssUUFBTCxBQUFhLGtCQUFwQixBQUFPLEFBQStCLEFBQ3pDOzs7O2dELEFBRVcsU0FBUSxBQUNoQjtnREFBQSxBQUFZLEFBQ1o7K0NBQUEsQUFBVyxTQUFYLEFBQW9CLEFBRXBCOzs0QkFBSSxPQUFKLEFBQVcsQUFDWDs2QkFBQSxBQUFLLG9CQUFMLEFBQXlCLElBQXpCLEFBQTZCLEFBQzdCOzt5Q0FDaUIsdUJBQU0sQUFDZjtxQ0FBQSxBQUFLLG9CQUFMLEFBQXlCLE9BQXpCLEFBQWdDLEFBQ25DO0FBSEwsQUFBTyxBQUtWO0FBTFUsQUFDSDs7Ozs7Ozs4QixBQTNEUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0IsQUN2QlIsK0IsQUFBQTtnREFDWDs7Z0RBQWdEO3dCQUFwQyxBQUFvQyw4RUFBMUIsQUFBMEI7d0JBQVIsQUFBUSxtQkFBQTs7MENBQUE7OzRKQUFBLEFBQ3hDLEFBQ047OzBCQUFBLEFBQUssU0FBUyxVQUZnQyxBQUU5QyxBQUF3QjsyQkFDekI7Ozs7YyxBQUp1Qzs7Z0IsQUFPN0IsOEIsQUFBQTsrQ0FDWDs7K0NBQXVDO3dCQUEzQixBQUEyQiw4RUFBakIsQUFBaUI7OzBDQUFBOztxSkFBQSxBQUMvQixBQUNQOzs7O2MsQUFIc0M7O2dCLEFBTTVCLDRCLEFBQUE7NkNBQ1g7OzZDQUE2Qzt3QkFBakMsQUFBaUMsOEVBQXZCLEFBQXVCOzswQ0FBQTs7aUpBQUEsQUFDckMsQUFDUDs7OztjLEFBSG9DOztnQixBQU0xQiwyQixBQUFBOzRDQUNUOzs0Q0FBNEM7d0JBQWhDLEFBQWdDLDhFQUF0QixBQUFzQjs7MENBQUE7OytJQUFBLEFBQ2xDLEFBQ1Q7Ozs7YyxBQUhpQzs7Ozs7Ozs7Ozs7Ozs7OztpQkNuQnRDOzs7Ozs7Ozs7Ozs7Ozs7QUFlQTs7OztBQUdBOztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBR0EsZ0JBQU0sV0FBTixBQUFpQjtBQUNqQixnQkFBTSxVQUFOLEFBQWdCO0FBQ2hCLGdCQUFNLGtCQUFOLEFBQXdCOztBQUV4QixnQkFBTSwwQkFBTixBQUFnQztBQUNoQyxnQkFBTSw2QkFBNkIsMEJBQW5DLEFBQTZEOztnQixBQUV4QyxzQ0FFakI7aURBQUEsQUFBWSxLQUFaLEFBQWlCLFFBQVE7MENBQ3JCOzt5QkFBQSxBQUFLLE1BQUwsQUFBVyxBQUNYO3lCQUFBLEFBQUssU0FBTCxBQUFjLEFBQ2Q7eUJBQUEsQUFBSyxjQUFjLG1CQUFBLEFBQU8sVUFBVSxPQUFqQixBQUF3QixjQUEzQyxBQUF5RCxBQUN6RDt3QkFBSSxtQkFBbUIsbUJBQUEsQUFBTyxVQUFVLE9BQWpCLEFBQXdCLGFBQS9DLEFBQTRELEFBQzVEO3lCQUFBLEFBQUssV0FBVyxtQkFBQSxBQUFPLHFCQUFxQixtQkFBTyxpQkFBbkMsQUFBNEIsQUFBd0IsWUFBVSxpQkFBOUQsQUFBK0UsV0FBL0YsQUFBeUcsQUFDekc7eUJBQUEsQUFBSyxVQUFVLG1CQUFBLEFBQU8scUJBQXFCLG1CQUFPLGlCQUFuQyxBQUE0QixBQUF3QixXQUFTLGlCQUE3RCxBQUE4RSxVQUE3RixBQUFzRyxBQUN0Rzt5QkFBQSxBQUFLLGlCQUFMLEFBQXNCLEFBQ3pCOzs7OztpRCxBQUVZLFEsQUFBUSxPQUFPLEFBQ3hCOzRCQUFJLG1CQUFtQixtQkFBTyxLQUFQLEFBQVksVUFBVSxLQUFBLEFBQUssT0FBM0IsQUFBa0MsYUFBekQsQUFBc0UsQUFDdEU7NEJBQUksZ0JBQWdCLG1CQUFBLEFBQU8scUJBQXFCLG1CQUFPLGlCQUFuQyxBQUE0QixBQUF3QixpQkFBZSxpQkFBbkUsQUFBb0YsZ0JBQWUsQ0FBQywyQkFBeEgsQUFBdUgsQUFDdkg7c0NBQUEsQUFBYyxRQUFRLFVBQUEsQUFBUyxTQUFTLEFBQ3BDO29DQUFBLEFBQVEsUUFBUixBQUFnQixBQUNuQjtBQUZELEFBR0E7K0JBQUEsQUFBTyxBQUNWOzs7OzBDLEFBRUssVUFBVTtvQ0FDWjs7bUNBQU8sQUFBSSxRQUFRLFVBQUEsQUFBQyxTQUFELEFBQVUsUUFBVyxBQUNwQztnQ0FBTSxPQUFPLElBQWIsQUFBYSxBQUFJLEFBQ2pCO2lDQUFBLEFBQUssa0JBQUwsQUFBdUIsQUFDdkI7aUNBQUEsQUFBSyxVQUFVLFVBQUEsQUFBQyxjQUFpQixBQUM3QjtzQ0FBQSxBQUFLLGFBQUwsQUFBa0IsUUFBUSw2QkFBQSxBQUFxQiwwQ0FBL0MsQUFBMEIsQUFBK0QsQUFDNUY7QUFGRCxBQUlBOztpQ0FBQSxBQUFLLHFCQUFxQixZQUFNLEFBQzVCO29DQUFJLEtBQUEsQUFBSyxlQUFULEFBQXdCLFVBQVMsQUFDN0I7NENBQVEsS0FBUixBQUFhLEFBRVQ7OzZDQUFBLEFBQUssQUFDTDtBQUNJO3NEQUFBLEFBQUssaUJBQUwsQUFBc0IsQUFDdEI7b0RBQU0sa0JBQWtCLEtBQUEsQUFBSyxrQkFBN0IsQUFBd0IsQUFBdUIsQUFDL0M7b0RBQUksbUJBQUosQUFBSSxBQUFPLGtCQUFrQixBQUN6Qjt3REFBSSxtQkFBTyxNQUFQLEFBQVksYUFBYSxNQUFBLEFBQUssYUFBbEMsQUFBK0MsaUJBQWlCLEFBQzVEOzhEQUFBLEFBQUssYUFBTCxBQUFrQixRQUFRLGdDQUExQixBQUEwQixBQUF3QixBQUNyRDtBQUNEOzBEQUFBLEFBQUssV0FBTCxBQUFnQixBQUNuQjtBQUxELHVEQUtPLEFBQ0g7MERBQUEsQUFBSyxhQUFMLEFBQWtCLFFBQVEsZ0NBQTFCLEFBQTBCLEFBQXdCLEFBQ3JEO0FBQ0Q7d0RBQVEsS0FBUixBQUFhLEFBQ2I7QUFDSDtBQUVEOzs2Q0FBQSxBQUFLLEFBQ0Q7a0RBQUEsQUFBSyxhQUFMLEFBQWtCLFFBQVEsZ0NBQTFCLEFBQTBCLEFBQXdCLEFBQ2xEO0FBRUo7O0FBQ0k7Z0RBQUcsTUFBQSxBQUFLLGtCQUFrQixNQUExQixBQUErQixVQUFTLEFBQ3BDO3NEQUFBLEFBQUssaUJBQWlCLE1BQUEsQUFBSyxpQkFBM0IsQUFBNEMsQUFDL0M7QUFDRDtrREFBQSxBQUFLLGFBQUwsQUFBa0IsUUFBUSw4QkFBc0Isa0RBQWtELEtBQWxELEFBQXVELFNBQXZHLEFBQTBCLEFBQXNGLEFBQ2hIO0FBM0JSLEFBNkJIOztBQUNKO0FBaENELEFBa0NBOztpQ0FBQSxBQUFLLEtBQUwsQUFBVSxRQUFRLE1BQWxCLEFBQXVCLEFBQ3ZCO2dDQUFJLG1CQUFPLE1BQVgsQUFBSSxBQUFZLFdBQVcsQUFDdkI7cUNBQUEsQUFBSyxpQkFBTCxBQUFzQiw0QkFBNEIsTUFBbEQsQUFBdUQsQUFDMUQ7QUFFRDs7Z0NBQUksbUJBQU8sTUFBWCxBQUFJLEFBQVksY0FBYyxBQUMxQjtxQ0FBSyxJQUFMLEFBQVMsS0FBSyxNQUFkLEFBQW1CLGFBQWEsQUFDNUI7d0NBQUksTUFBQSxBQUFLLFlBQUwsQUFBaUIsZUFBckIsQUFBSSxBQUFnQyxJQUFJLEFBQ3BDOzZDQUFBLEFBQUssaUJBQUwsQUFBc0IsR0FBRyxNQUFBLEFBQUssWUFBOUIsQUFBeUIsQUFBaUIsQUFDN0M7QUFDSjtBQUNKO0FBQ0Q7Z0NBQUksTUFBQSxBQUFLLGlCQUFpQixNQUExQixBQUErQixVQUFVLEFBQ3JDOzJDQUFXLFlBQVcsQUFDbEI7eUNBQUEsQUFBSyxLQUFLLGdCQUFBLEFBQU0sT0FBaEIsQUFBVSxBQUFhLEFBQzFCO0FBRkQsbUNBRUcsTUFGSCxBQUVRLEFBQ1g7QUFKRCxtQ0FJSyxBQUNEO3FDQUFBLEFBQUssS0FBSyxnQkFBQSxBQUFNLE9BQWhCLEFBQVUsQUFBYSxBQUMxQjtBQUVKO0FBN0RELEFBQU8sQUE4RFYseUJBOURVOzs7OzZDLEFBZ0VGLFUsQUFBVSxRQUFRO3FDQUN2Qjs7NkJBQUEsQUFBSyxNQUFMLEFBQVcsVUFBWCxBQUNLLEtBQUssd0JBQWdCLEFBQ2xCO2dDQUFJLGFBQUEsQUFBYSxPQUFiLEFBQW9CLFNBQXhCLEFBQWlDLEdBQUcsQUFDaEM7b0NBQUksQUFDQTt3Q0FBTSxtQkFBbUIsZ0JBQUEsQUFBTSxPQUEvQixBQUF5QixBQUFhLEFBQ3RDOzJDQUFBLEFBQU8sQUFDVjtBQUhELGtDQUdFLE9BQUEsQUFBTyxLQUFLLEFBQ1Y7MkNBQUEsQUFBSyxLQUFMLEFBQVUsU0FBUyxpQ0FBeUIsaUVBQUEsQUFBaUUsZUFBN0csQUFBbUIsQUFBeUcsQUFDNUg7MkNBQUEsQUFBTyxBQUNWO0FBQ0o7QUFSRCxtQ0FRTyxBQUNIO3VDQUFBLEFBQUssS0FBTCxBQUFVLFNBQVMsaUNBQW5CLEFBQW1CLEFBQXlCLEFBQzVDO3VDQUFBLEFBQU8sQUFDVjtBQUNKO0FBZEwsMkJBQUEsQUFlSyxNQUFNLGlCQUFTLEFBQ1o7bUNBQUEsQUFBSyxLQUFMLEFBQVUsU0FBVixBQUFtQixBQUNuQjttQ0FBQSxBQUFPLEFBQ1Y7QUFsQkwsQUFtQkg7Ozs7MkMsQUFFTSxTQUFTO3FDQUNaOzs2QkFBQSxBQUFLLE1BQU0sQ0FBWCxBQUFXLEFBQUMsVUFBWixBQUNLLE1BQU0saUJBQUE7bUNBQVMsT0FBQSxBQUFLLEtBQUwsQUFBVSxTQUFuQixBQUFTLEFBQW1CO0FBRHZDLEFBRUg7Ozs7Ozs7OEIsQUEvR2dCOztBQWtIckIsNENBQVEsd0JBQVIsQUFBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQixBQ2hKWDs7Ozs7Ozs0QyxBQUVULE9BQU8sQUFDWDsrQkFBQSxBQUFPLFFBQVAsQUFBZSxNQUFmLEFBQXFCLEFBQ3hCOzs7Ozs7OzhCLEFBSmdCOztBQ0RyQjs7Ozs7Ozs7Ozs7Ozs7O0FBZUE7QUFDQTs7QUFFQSxnQkFBQSxBQUFJOztBQUVKLGdCQUFJLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBUyxRQUFRLEFBQzFCO3VCQUFPLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsV0FBeEMsQUFBbUQsQUFDdEQ7QUFGRDs7QUFJQSxtQkFBQSxBQUFPLFFBQVAsQUFBZSxTQUFmLEFBQXdCOztBQUV4QixtQkFBQSxBQUFPLFFBQVAsQUFBZSxjQUFjLFVBQUEsQUFBUyxNQUFNLEFBQ3hDO2tDQUFBLEFBQWtCLEFBQ3JCO0FBRkQ7O0FBSUEsbUJBQUEsQUFBTyxRQUFQLEFBQWUsYUFBYSxVQUFBLEFBQVMsT0FBVCxBQUFnQixlQUFlLEFBQ3ZEO29CQUFJLENBQUMsT0FBTCxBQUFLLEFBQU8sUUFBUSxBQUNoQjswQkFBTSxJQUFBLEFBQUksTUFBTSxtQkFBQSxBQUFtQixnQkFBbkIsQUFBbUMsc0JBQW5ELEFBQU0sQUFBbUUsQUFDNUU7QUFDSjtBQUpEOzs7Ozs7O0FDOUJBOzs7Ozs7Ozs7Ozs7OztBQWNBOztBQUNBLElBQUksZ0JBQWdCLFFBQVEsa0VBQVIsQ0FBcEI7QUFDQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxFQUFsQzs7QUFFQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxRQUFsQyxDQUEyQyxnQkFBM0MsRUFBNkQsQ0FBQyxZQUFZOztBQUV0RSxRQUFJLE9BQU8sRUFBWDtBQUNBLFNBQUssU0FBTCxHQUFpQixVQUFVLEdBQVYsRUFBZTtBQUM1QixlQUFPLEdBQVA7QUFDSCxLQUZEOztBQUlBLFNBQUssSUFBTCxHQUFZLFlBQVk7QUFDcEIsZUFBTyxJQUFQO0FBQ0gsS0FGRDtBQUlILENBWDRELENBQTdEOztBQWFBLFFBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLE9BQWxDLENBQTBDLHNCQUExQyxFQUFrRSxZQUFZO0FBQzFFLFdBQU8sSUFBSSxjQUFjLG9CQUFsQixFQUFQO0FBQ0gsQ0FGRDs7QUFJQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxPQUFsQyxDQUEwQyxzQkFBMUMsRUFBa0UsQ0FBQyxzQkFBRCxFQUF5QixnQkFBekIsRUFBMkMsVUFBVSxvQkFBVixFQUFnQyxjQUFoQyxFQUFnRDtBQUN6SixXQUFPLHFCQUFxQixNQUFyQixDQUE0QixlQUFlLFdBQTNDLEVBQXdELGNBQXhELENBQVA7QUFDSCxDQUZpRSxDQUFsRTs7QUFJQSxRQUFRLE1BQVIsQ0FBZSxpQkFBZixFQUFrQyxPQUFsQyxDQUEwQyxnQkFBMUMsRUFBNEQsQ0FBQyxZQUFELEVBQWUsVUFBZixFQUEyQixzQkFBM0IsRUFBbUQsTUFBbkQsRUFBMkQsVUFBVSxVQUFWLEVBQXNCLFFBQXRCLEVBQWdDLG9CQUFoQyxFQUFzRCxJQUF0RCxFQUE0RDs7QUFFL0ssZUFBVyw0QkFBWCxHQUEwQyxLQUExQzs7QUFFQSxlQUFXLGNBQVgsR0FBNEIsWUFBWTtBQUNwQyxZQUFJLENBQUMsV0FBVyw0QkFBaEIsRUFBOEM7QUFDMUMsdUJBQVcsNEJBQVgsR0FBMEMsSUFBMUM7QUFDQSxxQkFBUyxZQUFZO0FBQ2pCLDJCQUFXLDRCQUFYLEdBQTBDLEtBQTFDO0FBQ0EscUJBQUssS0FBTCxDQUFXLDZDQUFYO0FBQ0EsMkJBQVcsTUFBWDtBQUNILGFBSkQsRUFJRyxHQUpIO0FBS0g7QUFDSixLQVREOztBQVdBLFFBQUksaUJBQWlCOztBQUVqQixxQkFBYSxxQkFBVSxTQUFWLEVBQXFCLFVBQXJCLEVBQWlDLFdBQWpDLEVBQThDO0FBQ3ZELHNCQUFVLE1BQVYsQ0FBaUIsS0FBakIsQ0FBdUIsU0FBdkIsRUFBa0MsQ0FBQyxVQUFELEVBQWEsQ0FBYixFQUFnQixNQUFoQixDQUF1QixXQUF2QixDQUFsQztBQUNILFNBSmdCO0FBS2pCLGdCQUFRLGdCQUFVLE1BQVYsRUFBa0I7QUFDdEIsbUJBQU8sT0FBTyxNQUFQLEtBQWtCLFdBQWxCLElBQWlDLFdBQVcsSUFBbkQ7QUFDSCxTQVBnQjtBQVFqQixtQkFBVyxtQkFBVSxNQUFWLEVBQWtCLE1BQWxCLEVBQTBCO0FBQ2pDLGdCQUFJLFdBQVcsTUFBWCxJQUFzQixDQUFDLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBRCxJQUF3QixDQUFDLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBbkQsRUFBeUU7QUFDckUsdUJBQU8sSUFBUDtBQUNIO0FBQ0QsZ0JBQUksS0FBSyxNQUFMLENBQVksTUFBWixNQUF3QixLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQTVCLEVBQWlEO0FBQzdDLHVCQUFPLEtBQVA7QUFDSDtBQUNELGdCQUFJLElBQUksT0FBTyxNQUFmO0FBQ0EsZ0JBQUksT0FBTyxNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3JCLHVCQUFPLEtBQVA7QUFDSDtBQUNELGlCQUFLLElBQUksSUFBSSxDQUFiLEVBQWdCLElBQUksQ0FBcEIsRUFBdUIsR0FBdkIsRUFBNEI7QUFDeEIsb0JBQUksT0FBTyxDQUFQLE1BQWMsT0FBTyxDQUFQLENBQWxCLEVBQTZCO0FBQ3pCLDJCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sSUFBUDtBQUNILFNBekJnQjtBQTBCakIsY0FBTSxjQUFVLFdBQVYsRUFBdUI7QUFDekIsd0JBQVksT0FBWixDQUFvQixlQUFlLGtCQUFuQztBQUNBLHdCQUFZLFNBQVosQ0FBc0IsZUFBZSxvQkFBckM7QUFDQSx3QkFBWSxZQUFaLENBQXlCLGVBQWUsbUJBQXhDO0FBQ0Esd0JBQVksYUFBWixDQUEwQixlQUFlLG9CQUF6Qzs7QUFFQSxpQkFBSyxLQUFMLENBQVcsMkRBQVg7QUFDSCxTQWpDZ0I7QUFrQ2pCLHdCQUFnQix3QkFBVSxJQUFWLEVBQWdCLFNBQWhCLEVBQTJCO0FBQ3ZDLGlCQUFLLEtBQUwsQ0FBVyx5Q0FBeUMsU0FBekMsR0FBcUQsV0FBckQsR0FBbUUsS0FBSyxTQUFMLENBQWUsSUFBZixDQUE5RTtBQUNBLHVCQUFXLE1BQVgsQ0FDSSxZQUFZO0FBQ1IsdUJBQU8sS0FBSyxTQUFMLENBQVA7QUFDSCxhQUhMLEVBSUksVUFBVSxRQUFWLEVBQW9CLFFBQXBCLEVBQThCO0FBQzFCLHFCQUFLLEtBQUwsQ0FBVyxXQUFXLFNBQVgsR0FBdUIsV0FBdkIsR0FBcUMsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFyQyxHQUE0RCxnQkFBNUQsR0FBK0UsUUFBL0UsR0FBMEYsTUFBMUYsR0FBbUcsUUFBOUc7QUFDQSxxQ0FBcUIsV0FBckIsQ0FBaUMsZUFBakMsQ0FBaUQsZ0JBQWpELENBQWtFLElBQWxFLEVBQXdFLFNBQXhFLEVBQW1GLFFBQW5GO0FBQ0gsYUFQTDtBQVNILFNBN0NnQjtBQThDakIsNEJBQW9CLDRCQUFVLElBQVYsRUFBZ0I7QUFDaEMsaUJBQUssS0FBTCxDQUFXLFVBQVUsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFWLEdBQWlDLFFBQTVDOztBQUVBLGlCQUFLLElBQUksSUFBVCxJQUFpQixJQUFqQixFQUF1QjtBQUNuQiwrQkFBZSxjQUFmLENBQThCLElBQTlCLEVBQW9DLElBQXBDO0FBQ0g7O0FBRUQsdUJBQVcsY0FBWDtBQUNILFNBdERnQjtBQXVEakIsOEJBQXNCLDhCQUFVLElBQVYsRUFBZ0I7QUFDbEMsaUJBQUssS0FBTCxDQUFXLFVBQVUsS0FBSyxTQUFMLENBQWUsSUFBZixDQUFWLEdBQWlDLFVBQTVDO0FBQ0EsdUJBQVcsY0FBWDtBQUNILFNBMURnQjtBQTJEakIsNkJBQXFCLDZCQUFVLElBQVYsRUFBZ0IsWUFBaEIsRUFBOEIsUUFBOUIsRUFBd0MsUUFBeEMsRUFBa0Q7QUFDbkUsZ0JBQUksY0FBYyxJQUFsQjtBQUNBLGlCQUFLLElBQUksSUFBVCxJQUFpQixJQUFqQixFQUF1QjtBQUNuQixvQkFBSSxTQUFTLFlBQWIsRUFBMkI7QUFDdkIsa0NBQWMsS0FBZDtBQUNIO0FBQ0o7O0FBRUQsZ0JBQUksV0FBSixFQUFpQjtBQUNiLHFCQUFLLEtBQUwsQ0FBVyxXQUFXLFlBQVgsR0FBMEIscUJBQTFCLEdBQWtELEtBQUssU0FBTCxDQUFlLElBQWYsQ0FBN0Q7QUFDQSwrQkFBZSxjQUFmLENBQThCLElBQTlCLEVBQW9DLFlBQXBDO0FBQ0g7O0FBRUQsZ0JBQUksYUFBYSxRQUFqQixFQUEyQjtBQUN2QixxQkFBSyxLQUFMLENBQVcsdUNBQXVDLFlBQXZDLEdBQXNELHFCQUFqRTtBQUNBO0FBQ0g7O0FBRUQsaUJBQUssS0FBTCxDQUFXLDhCQUE4QixZQUE5QixHQUE2QyxtQkFBN0MsR0FBbUUsUUFBbkUsR0FBOEUsR0FBekY7O0FBRUEsaUJBQUssWUFBTCxJQUFxQixRQUFyQjtBQUNBLHVCQUFXLGNBQVg7QUFDSCxTQWpGZ0I7QUFrRmpCLDhCQUFzQiw4QkFBVSxJQUFWLEVBQWdCLFlBQWhCLEVBQThCLEtBQTlCLEVBQXFDLEtBQXJDLEVBQTRDLFdBQTVDLEVBQXlEO0FBQzNFLGdCQUFJLFFBQVEsS0FBSyxZQUFMLENBQVo7QUFDQSxnQkFBSSxjQUFjLE1BQU0sS0FBTixDQUFZLEtBQVosRUFBbUIsUUFBUSxLQUEzQixDQUFsQjtBQUNBLGdCQUFJLGVBQWUsU0FBZixDQUF5QixXQUF6QixFQUFzQyxXQUF0QyxDQUFKLEVBQXdEO0FBQ3BEO0FBQ0g7O0FBRUQsaUJBQUssS0FBTCxDQUFXLCtCQUErQixZQUEvQixHQUE4QyxxQkFBOUMsR0FBc0UsS0FBdEUsR0FBOEUsUUFBOUUsR0FBeUYsS0FBSyxTQUFMLENBQWUsV0FBZixDQUFwRzs7QUFFQSxnQkFBSSxPQUFPLFdBQVAsS0FBdUIsV0FBdkIsSUFBdUMsZUFBZSxZQUFZLE1BQVosS0FBdUIsQ0FBakYsRUFBcUY7QUFDakYsc0JBQU0sTUFBTixDQUFhLEtBQWIsRUFBb0IsS0FBcEI7QUFDQSwyQkFBVyxjQUFYO0FBQ0gsYUFIRCxNQUdPO0FBQ0gsK0JBQWUsV0FBZixDQUEyQixLQUEzQixFQUFrQyxLQUFsQyxFQUF5QyxXQUF6Qzs7QUFFQSxxQkFBSyxJQUFMLElBQWEsV0FBYixFQUEwQjtBQUN0Qix5QkFBSyxJQUFJLElBQVQsSUFBaUIsSUFBakIsRUFBdUI7QUFDbkIsdUNBQWUsY0FBZixDQUE4QixJQUE5QixFQUFvQyxJQUFwQztBQUNIO0FBQ0o7O0FBRUQsMkJBQVcsY0FBWDtBQUNIO0FBQ0o7QUF6R2dCLEtBQXJCOztBQTRHQSxTQUFLLEtBQUwsQ0FBVyxrQ0FBWDs7QUFFQSxXQUFPLGNBQVA7QUFFSCxDQS9IMkQsQ0FBNUQ7O0FBaUlBLFFBQVEsTUFBUixDQUFlLGlCQUFmLEVBQWtDLE9BQWxDLENBQTBDLGVBQTFDLEVBQTJELENBQUMsc0JBQUQsRUFBeUIsZ0JBQXpCLEVBQTJDLFNBQTNDLEVBQXNELE1BQXRELEVBQThELFVBQVUsb0JBQVYsRUFBZ0MsY0FBaEMsRUFBZ0QsT0FBaEQsRUFBeUQsSUFBekQsRUFBK0Q7QUFDcEwsUUFBSSxnQkFBZ0I7QUFDaEIsMEJBQWtCLDBCQUFVLEtBQVYsRUFBaUIsY0FBakIsRUFBaUM7QUFDL0MsbUJBQU8scUJBQXFCLGdCQUFyQixDQUFzQyxjQUF0QyxFQUFzRCxJQUF0RCxDQUEyRCxVQUFVLGVBQVYsRUFBMkI7QUFDekYscUJBQUssS0FBTCxDQUFXLDBDQUEwQyxjQUFyRDtBQUNBLHNCQUFNLEdBQU4sQ0FBVSxVQUFWLEVBQXNCLFlBQVk7QUFDOUIseUJBQUssS0FBTCxDQUFXLDRDQUE0QyxjQUF2RDtBQUNBLG9DQUFnQixPQUFoQjtBQUNILGlCQUhEO0FBSUEsc0JBQU0sS0FBTixHQUFjLGdCQUFnQixLQUE5QjtBQUNBLHVCQUFPLGVBQVA7QUFDSCxhQVJNLENBQVA7QUFTSCxTQVhlO0FBWWhCLG9CQUFZLHNCQUFZO0FBQ3BCLGlDQUFxQixVQUFyQixHQUFrQyxJQUFsQyxDQUF1QyxZQUFZO0FBQy9DLHFCQUFLLEtBQUwsQ0FBVyx1Q0FBWDtBQUNILGFBRkQ7QUFHSCxTQWhCZTtBQWlCaEIsaUJBQVMsbUJBQVk7QUFDakIsaUNBQXFCLE9BQXJCLEdBQStCLElBQS9CLENBQW9DLFlBQVk7QUFDNUMscUJBQUssS0FBTCxDQUFXLG9DQUFYO0FBQ0gsYUFGRDtBQUdILFNBckJlO0FBc0JoQixtQkFBVyxxQkFBWTtBQUNuQixtQkFBTyxxQkFBcUIsU0FBckIsR0FBaUMsSUFBakMsQ0FBc0MsWUFBWTtBQUNyRCxxQkFBSyxLQUFMLENBQVcsb0NBQVg7QUFDSCxhQUZNLENBQVA7QUFHSDtBQTFCZSxLQUFwQjs7QUE2QkEsbUJBQWUsSUFBZixDQUFvQixxQkFBcUIsV0FBekM7QUFDQSxZQUFRLGNBQVIsR0FBeUIsY0FBYyxVQUF2Qzs7QUFFQSxTQUFLLEtBQUwsQ0FBVyxrQ0FBWDs7QUFFQSxXQUFPLGFBQVA7QUFDSCxDQXBDMEQsQ0FBM0QiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuTWFwOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlOyIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5TZXQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKXtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07IiwidmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlciwgSVRFUkFUT1Ipe1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGZvck9mKGl0ZXIsIGZhbHNlLCByZXN1bHQucHVzaCwgcmVzdWx0LCBJVEVSQVRPUik7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vX3RvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59OyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuL19pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi9fYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSwgJGNyZWF0ZSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVhcbiAgICAsIGNyZWF0ZSAgICAgICAgPSAkY3JlYXRlIHx8IGFzYztcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGNyZWF0ZSgkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGNyZWF0ZSgkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTsiLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi9faXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59OyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19hcnJheS1zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59OyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07IiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgY3JlYXRlICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJylcbiAgLCByZWRlZmluZUFsbCA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGFuSW5zdGFuY2UgID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKVxuICAsIGRlZmluZWQgICAgID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgPSByZXF1aXJlKCcuL19mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJylcbiAgLCBzZXRTcGVjaWVzICA9IHJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJylcbiAgLCBmYXN0S2V5ICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKS5mYXN0S2V5XG4gICwgU0laRSAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSc7XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX2kgPSBjcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgJ2ZvckVhY2gnKTtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJylcbiAgLCBmcm9tICAgID0gcmVxdWlyZSgnLi9fYXJyYXktZnJvbS1pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHJldHVybiBmcm9tKHRoaXMpO1xuICB9O1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCBtZXRhICAgICAgICAgICA9IHJlcXVpcmUoJy4vX21ldGEnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi9fZmFpbHMnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBhbkluc3RhbmNlICAgICA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZFAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgZWFjaCAgICAgICAgICAgPSByZXF1aXJlKCcuL19hcnJheS1tZXRob2RzJykoMClcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIGlmKCFERVNDUklQVE9SUyB8fCB0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICAgIG1ldGEuTkVFRCA9IHRydWU7XG4gIH0gZWxzZSB7XG4gICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICBhbkluc3RhbmNlKHRhcmdldCwgQywgTkFNRSwgJ19jJyk7XG4gICAgICB0YXJnZXQuX2MgPSBuZXcgQmFzZTtcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0YXJnZXRbQURERVJdLCB0YXJnZXQpO1xuICAgIH0pO1xuICAgIGVhY2goJ2FkZCxjbGVhcixkZWxldGUsZm9yRWFjaCxnZXQsaGFzLHNldCxrZXlzLHZhbHVlcyxlbnRyaWVzLHRvSlNPTicuc3BsaXQoJywnKSxmdW5jdGlvbihLRVkpe1xuICAgICAgdmFyIElTX0FEREVSID0gS0VZID09ICdhZGQnIHx8IEtFWSA9PSAnc2V0JztcbiAgICAgIGlmKEtFWSBpbiBwcm90byAmJiAhKElTX1dFQUsgJiYgS0VZID09ICdjbGVhcicpKWhpZGUoQy5wcm90b3R5cGUsIEtFWSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAgIGFuSW5zdGFuY2UodGhpcywgQywgS0VZKTtcbiAgICAgICAgaWYoIUlTX0FEREVSICYmIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpKXJldHVybiBLRVkgPT0gJ2dldCcgPyB1bmRlZmluZWQgOiBmYWxzZTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2NbS0VZXShhID09PSAwID8gMCA6IGEsIGIpO1xuICAgICAgICByZXR1cm4gSVNfQURERVIgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoJ3NpemUnIGluIHByb3RvKWRQKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Muc2l6ZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTsiLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcyLjQuMCd9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTsiLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07IiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7IiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59OyIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpOyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vX2NvcmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vX2N0eCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIElTX1dSQVAgICA9IHR5cGUgJiAkZXhwb3J0LldcbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV1cbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGtleSwgb3duLCBvdXQ7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICBpZihvd24gJiYga2V5IGluIGV4cG9ydHMpY29udGludWU7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSBvd24gPyB0YXJnZXRba2V5XSA6IHNvdXJjZVtrZXldO1xuICAgIC8vIHByZXZlbnQgZ2xvYmFsIHBvbGx1dGlvbiBmb3IgbmFtZXNwYWNlc1xuICAgIGV4cG9ydHNba2V5XSA9IElTX0dMT0JBTCAmJiB0eXBlb2YgdGFyZ2V0W2tleV0gIT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZVtrZXldXG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICA6IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKVxuICAgIC8vIHdyYXAgZ2xvYmFsIGNvbnN0cnVjdG9ycyBmb3IgcHJldmVudCBjaGFuZ2UgdGhlbSBpbiBsaWJyYXJ5XG4gICAgOiBJU19XUkFQICYmIHRhcmdldFtrZXldID09IG91dCA/IChmdW5jdGlvbihDKXtcbiAgICAgIHZhciBGID0gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICAgIGlmKHRoaXMgaW5zdGFuY2VvZiBDKXtcbiAgICAgICAgICBzd2l0Y2goYXJndW1lbnRzLmxlbmd0aCl7XG4gICAgICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgQztcbiAgICAgICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDKGEpO1xuICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEMoYSwgYik7XG4gICAgICAgICAgfSByZXR1cm4gbmV3IEMoYSwgYiwgYyk7XG4gICAgICAgIH0gcmV0dXJuIEMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgICBGW1BST1RPVFlQRV0gPSBDW1BST1RPVFlQRV07XG4gICAgICByZXR1cm4gRjtcbiAgICAvLyBtYWtlIHN0YXRpYyB2ZXJzaW9ucyBmb3IgcHJvdG90eXBlIG1ldGhvZHNcbiAgICB9KShvdXQpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLm1ldGhvZHMuJU5BTUUlXG4gICAgaWYoSVNfUFJPVE8pe1xuICAgICAgKGV4cG9ydHMudmlydHVhbCB8fCAoZXhwb3J0cy52aXJ0dWFsID0ge30pKVtrZXldID0gb3V0O1xuICAgICAgLy8gZXhwb3J0IHByb3RvIG1ldGhvZHMgdG8gY29yZS4lQ09OU1RSVUNUT1IlLnByb3RvdHlwZS4lTkFNRSVcbiAgICAgIGlmKHR5cGUgJiAkZXhwb3J0LlIgJiYgZXhwUHJvdG8gJiYgIWV4cFByb3RvW2tleV0paGlkZShleHBQcm90bywga2V5LCBvdXQpO1xuICAgIH1cbiAgfVxufTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWAgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07IiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi9fY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuL190by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKVxuICAsIEJSRUFLICAgICAgID0ge31cbiAgLCBSRVRVUk4gICAgICA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1Ipe1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbigpeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZihyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKXJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLICA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59OyIsInZhciBkUCAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDsiLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pOyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTsiLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTsiLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59OyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59OyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgICAgICAgICA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi9fZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJylcbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgJGVudHJpZXMgICA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWRcbiAgICAsICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlXG4gICAgLCBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRhbnlOYXRpdmUpe1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKSk7XG4gICAgaWYoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUpe1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmKCFMSUJSQVJZICYmICFoYXMoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTsiLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHJldHVybiB7ZG9uZTogc2FmZSA9IHRydWV9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07IiwibW9kdWxlLmV4cG9ydHMgPSB7fTsiLCJtb2R1bGUuZXhwb3J0cyA9IHRydWU7IiwidmFyIE1FVEEgICAgID0gcmVxdWlyZSgnLi9fdWlkJykoJ21ldGEnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgc2V0RGVzYyAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mXG4gICwgaWQgICAgICAgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHRydWU7XG59O1xudmFyIEZSRUVaRSA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBpc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbnZhciBzZXRNZXRhID0gZnVuY3Rpb24oaXQpe1xuICBzZXREZXNjKGl0LCBNRVRBLCB7dmFsdWU6IHtcbiAgICBpOiAnTycgKyArK2lkLCAvLyBvYmplY3QgSURcbiAgICB3OiB7fSAgICAgICAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9fSk7XG59O1xudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgbWV0YWRhdGFcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIGlmKCFoYXMoaXQsIE1FVEEpKXtcbiAgICAvLyBjYW4ndCBzZXQgbWV0YWRhdGEgdG8gdW5jYXVnaHQgZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIGhhc2ggd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQV0udztcbn07XG4vLyBhZGQgbWV0YWRhdGEgb24gZnJlZXplLWZhbWlseSBtZXRob2RzIGNhbGxpbmdcbnZhciBvbkZyZWV6ZSA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoRlJFRVpFICYmIG1ldGEuTkVFRCAmJiBpc0V4dGVuc2libGUoaXQpICYmICFoYXMoaXQsIE1FVEEpKXNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiAgICAgIE1FVEEsXG4gIE5FRUQ6ICAgICBmYWxzZSxcbiAgZmFzdEtleTogIGZhc3RLZXksXG4gIGdldFdlYWs6ICBnZXRXZWFrLFxuICBvbkZyZWV6ZTogb25GcmVlemVcbn07IiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZShoZWFkKXtcbiAgICAgIGZuICAgPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICBpZihoZWFkKW5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmKGlzTm9kZSl7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxuICB9IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICAgIHZhciB0b2dnbGUgPSB0cnVlXG4gICAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZH07XG4gICAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmKCFoZWFkKXtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07IiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGRQcyAgICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpXG4gICwgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIEVtcHR5ICAgICAgID0gZnVuY3Rpb24oKXsgLyogZW1wdHkgKi8gfVxuICAsIFBST1RPVFlQRSAgID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGVudW1CdWdLZXlzLmxlbmd0aFxuICAgICwgbHQgICAgID0gJzwnXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcyl7XG4gIHZhciByZXN1bHQ7XG4gIGlmKE8gIT09IG51bGwpe1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJylcbiAgLCB0b1ByaW1pdGl2ZSAgICA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpXG4gICwgZFAgICAgICAgICAgICAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTsiLCJ2YXIgZFAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0JylcbiAgLCBnZXRLZXlzICA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKXtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzICAgPSBnZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaSA9IDBcbiAgICAsIFA7XG4gIHdoaWxlKGxlbmd0aCA+IGkpZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59OyIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzICAgICAgICAgPSByZXF1aXJlKCcuL19oYXMnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKVxuICAsIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24oTyl7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07IiwidmFyIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgdG9JT2JqZWN0ICAgID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpXG4gICwgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBJRV9QUk9UTyAgICAgPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBuYW1lcyl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59OyIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzICAgICAgID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKVxuICAsIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTyl7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59OyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTsiLCJ2YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMsIHNhZmUpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpe1xuICAgIGlmKHNhZmUgJiYgdGFyZ2V0W2tleV0pdGFyZ2V0W2tleV0gPSBzcmNba2V5XTtcbiAgICBlbHNlIGhpZGUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgfSByZXR1cm4gdGFyZ2V0O1xufTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2hpZGUnKTsiLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKVxuICAsIGNvcmUgICAgICAgID0gcmVxdWlyZSgnLi9fY29yZScpXG4gICwgZFAgICAgICAgICAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IHR5cGVvZiBjb3JlW0tFWV0gPT0gJ2Z1bmN0aW9uJyA/IGNvcmVbS0VZXSA6IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKWRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTsiLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZlxuICAsIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07IiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07IiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTsiLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59OyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59OyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2ludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9faHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTsiLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59OyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTsiLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59OyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59OyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTsiLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTsiLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTsiLCJ2YXIgc3RvcmUgICAgICA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICAgICAgPSByZXF1aXJlKCcuL191aWQnKVxuICAsIFN5bWJvbCAgICAgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2xcbiAgLCBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTsiLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTsiLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpOyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJYU3dpYm1GdFpYTWlPbHRkTENKdFlYQndhVzVuY3lJNklpSXNJbVpwYkdVaU9pSmxjell1YjJKcVpXTjBMblJ2TFhOMGNtbHVaeTVxY3lJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYlhYMD0iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fbGlicmFyeScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL19jdHgnKVxuICAsIGNsYXNzb2YgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKVxuICAsICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICAgPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJylcbiAgLCBhbkluc3RhbmNlICAgICAgICAgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpXG4gICwgZm9yT2YgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi9fZm9yLW9mJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCB0YXNrICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuL190YXNrJykuc2V0XG4gICwgbWljcm90YXNrICAgICAgICAgID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKVxuICAsIFBST01JU0UgICAgICAgICAgICA9ICdQcm9taXNlJ1xuICAsIFR5cGVFcnJvciAgICAgICAgICA9IGdsb2JhbC5UeXBlRXJyb3JcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsICRQcm9taXNlICAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICAgICAgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBlbXB0eSAgICAgICAgICAgICAgPSBmdW5jdGlvbigpeyAvKiBlbXB0eSAqLyB9XG4gICwgSW50ZXJuYWwsIEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uKCl7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgICAgID0gJFByb21pc2UucmVzb2x2ZSgxKVxuICAgICAgLCBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24oZXhlYyl7IGV4ZWMoZW1wdHksIGVtcHR5KTsgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyB3aXRoIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgcmV0dXJuIGEgPT09IGIgfHwgYSA9PT0gJFByb21pc2UgJiYgYiA9PT0gV3JhcHBlcjtcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgcmV0dXJuIHNhbWVDb25zdHJ1Y3RvcigkUHJvbWlzZSwgQylcbiAgICA/IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgIDogbmV3IEdlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocHJvbWlzZSwgaXNSZWplY3Qpe1xuICBpZihwcm9taXNlLl9uKXJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3ZcbiAgICAgICwgb2sgICAgPSBwcm9taXNlLl9zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgZG9tYWluICA9IHJlYWN0aW9uLmRvbWFpblxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvayl7XG4gICAgICAgICAgICBpZihwcm9taXNlLl9oID09IDIpb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYoaGFuZGxlciA9PT0gdHJ1ZSlyZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKW9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92XG4gICAgICAsIGFicnVwdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYoYWJydXB0KXRocm93IGFicnVwdC5lcnJvcjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIGlmKHByb21pc2UuX2ggPT0gMSlyZXR1cm4gZmFsc2U7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2EgfHwgcHJvbWlzZS5fY1xuICAgICwgaSAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24oKXtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZihpc05vZGUpe1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKXtcbiAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdn0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYocHJvbWlzZS5fZClyZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYoIXByb21pc2UuX2EpcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHByb21pc2UgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihwcm9taXNlLl9kKXJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHByb21pc2UgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7X3c6IHByb21pc2UsIF9kOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe193OiBwcm9taXNlLCBfZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiAgICA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgICAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsICAgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9hKXRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZih0aGlzLl9zKW5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbigpe1xuICAgIHZhciBwcm9taXNlICA9IG5ldyBJbnRlcm5hbDtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogJFByb21pc2V9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mICRQcm9taXNlICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gdGhpc1xuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIHZhciB2YWx1ZXMgICAgPSBbXVxuICAgICAgICAsIGluZGV4ICAgICA9IDBcbiAgICAgICAgLCByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgdmFyICRpbmRleCAgICAgICAgPSBpbmRleCsrXG4gICAgICAgICAgLCBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCAgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSB0aGlzXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTsiLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpOyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7IiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi9fY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpfSk7IiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICAgID0gcmVxdWlyZSgnLi9fZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICAgID0gcmVxdWlyZSgnLi9faGlkZScpXG4gICwgSXRlcmF0b3JzICAgICA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpXG4gICwgVE9fU1RSSU5HX1RBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5mb3IodmFyIGNvbGxlY3Rpb25zID0gWydOb2RlTGlzdCcsICdET01Ub2tlbkxpc3QnLCAnTWVkaWFMaXN0JywgJ1N0eWxlU2hlZXRMaXN0JywgJ0NTU1J1bGVMaXN0J10sIGkgPSAwOyBpIDwgNTsgaSsrKXtcbiAgdmFyIE5BTUUgICAgICAgPSBjb2xsZWN0aW9uc1tpXVxuICAgICwgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXVxuICAgICwgcHJvdG8gICAgICA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIGlmKHByb3RvICYmICFwcm90b1tUT19TVFJJTkdfVEFHXSloaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgSXRlcmF0b3JzW05BTUVdID0gSXRlcmF0b3JzLkFycmF5O1xufSIsIlxuLyoqXG4gKiBFeHBvc2UgYEVtaXR0ZXJgLlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gRW1pdHRlcjtcblxuLyoqXG4gKiBJbml0aWFsaXplIGEgbmV3IGBFbWl0dGVyYC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIEVtaXR0ZXIob2JqKSB7XG4gIGlmIChvYmopIHJldHVybiBtaXhpbihvYmopO1xufTtcblxuLyoqXG4gKiBNaXhpbiB0aGUgZW1pdHRlciBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIG1peGluKG9iaikge1xuICBmb3IgKHZhciBrZXkgaW4gRW1pdHRlci5wcm90b3R5cGUpIHtcbiAgICBvYmpba2V5XSA9IEVtaXR0ZXIucHJvdG90eXBlW2tleV07XG4gIH1cbiAgcmV0dXJuIG9iajtcbn1cblxuLyoqXG4gKiBMaXN0ZW4gb24gdGhlIGdpdmVuIGBldmVudGAgd2l0aCBgZm5gLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEByZXR1cm4ge0VtaXR0ZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLm9uID1cbkVtaXR0ZXIucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gICh0aGlzLl9jYWxsYmFja3NbZXZlbnRdID0gdGhpcy5fY2FsbGJhY2tzW2V2ZW50XSB8fCBbXSlcbiAgICAucHVzaChmbik7XG4gIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBBZGRzIGFuIGBldmVudGAgbGlzdGVuZXIgdGhhdCB3aWxsIGJlIGludm9rZWQgYSBzaW5nbGVcbiAqIHRpbWUgdGhlbiBhdXRvbWF0aWNhbGx5IHJlbW92ZWQuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RW1pdHRlcn1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uKGV2ZW50LCBmbil7XG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fY2FsbGJhY2tzID0gdGhpcy5fY2FsbGJhY2tzIHx8IHt9O1xuXG4gIGZ1bmN0aW9uIG9uKCkge1xuICAgIHNlbGYub2ZmKGV2ZW50LCBvbik7XG4gICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIG9uLmZuID0gZm47XG4gIHRoaXMub24oZXZlbnQsIG9uKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ2l2ZW4gY2FsbGJhY2sgZm9yIGBldmVudGAgb3IgYWxsXG4gKiByZWdpc3RlcmVkIGNhbGxiYWNrcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZXZlbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5vZmYgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuRW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbkVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCwgZm4pe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG5cbiAgLy8gYWxsXG4gIGlmICgwID09IGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICB0aGlzLl9jYWxsYmFja3MgPSB7fTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIC8vIHNwZWNpZmljIGV2ZW50XG4gIHZhciBjYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3NbZXZlbnRdO1xuICBpZiAoIWNhbGxiYWNrcykgcmV0dXJuIHRoaXM7XG5cbiAgLy8gcmVtb3ZlIGFsbCBoYW5kbGVyc1xuICBpZiAoMSA9PSBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgZGVsZXRlIHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyByZW1vdmUgc3BlY2lmaWMgaGFuZGxlclxuICB2YXIgY2I7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2IgPSBjYWxsYmFja3NbaV07XG4gICAgaWYgKGNiID09PSBmbiB8fCBjYi5mbiA9PT0gZm4pIHtcbiAgICAgIGNhbGxiYWNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEVtaXQgYGV2ZW50YCB3aXRoIHRoZSBnaXZlbiBhcmdzLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBldmVudFxuICogQHBhcmFtIHtNaXhlZH0gLi4uXG4gKiBAcmV0dXJuIHtFbWl0dGVyfVxuICovXG5cbkVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbihldmVudCl7XG4gIHRoaXMuX2NhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrcyB8fCB7fTtcbiAgdmFyIGFyZ3MgPSBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSlcbiAgICAsIGNhbGxiYWNrcyA9IHRoaXMuX2NhbGxiYWNrc1tldmVudF07XG5cbiAgaWYgKGNhbGxiYWNrcykge1xuICAgIGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5zbGljZSgwKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY2FsbGJhY2tzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICBjYWxsYmFja3NbaV0uYXBwbHkodGhpcywgYXJncyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFJldHVybiBhcnJheSBvZiBjYWxsYmFja3MgZm9yIGBldmVudGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBhcGkgcHVibGljXG4gKi9cblxuRW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJzID0gZnVuY3Rpb24oZXZlbnQpe1xuICB0aGlzLl9jYWxsYmFja3MgPSB0aGlzLl9jYWxsYmFja3MgfHwge307XG4gIHJldHVybiB0aGlzLl9jYWxsYmFja3NbZXZlbnRdIHx8IFtdO1xufTtcblxuLyoqXG4gKiBDaGVjayBpZiB0aGlzIGVtaXR0ZXIgaGFzIGBldmVudGAgaGFuZGxlcnMuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGV2ZW50XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGFwaSBwdWJsaWNcbiAqL1xuXG5FbWl0dGVyLnByb3RvdHlwZS5oYXNMaXN0ZW5lcnMgPSBmdW5jdGlvbihldmVudCl7XG4gIHJldHVybiAhISB0aGlzLmxpc3RlbmVycyhldmVudCkubGVuZ3RoO1xufTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIEF0dHJpYnV0ZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXR0cmlidXRlKCkge1xuICAgIH1cbiAgICBBdHRyaWJ1dGUuUVVBTElGSUVSX1BST1BFUlRZID0gXCJxdWFsaWZpZXJcIjtcbiAgICBBdHRyaWJ1dGUuVkFMVUUgPSBcInZhbHVlXCI7XG4gICAgcmV0dXJuIEF0dHJpYnV0ZTtcbn0oKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBBdHRyaWJ1dGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUF0dHJpYnV0ZS5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZChhdHRyaWJ1dGVJZCwgbWV0YWRhdGFOYW1lLCB2YWx1ZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm1ldGFkYXRhTmFtZSA9IG1ldGFkYXRhTmFtZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmlkID0gJ0NoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhJztcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kXCI7XG4gICAgfVxuICAgIHJldHVybiBDaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmQ7XG59KENvbW1hbmRfMVtcImRlZmF1bHRcIl0pKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRXZlbnRCdXNfMSA9IHJlcXVpcmUoJy4vRXZlbnRCdXMnKTtcbnZhciBDbGllbnRBdHRyaWJ1dGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsaWVudEF0dHJpYnV0ZShwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XG4gICAgICAgIHRoaXMuaWQgPSBcIlwiICsgKENsaWVudEF0dHJpYnV0ZS5jbGllbnRBdHRyaWJ1dGVJbnN0YW5jZUNvdW50KyspICsgXCJDXCI7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VCdXMgPSBuZXcgRXZlbnRCdXNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXJDaGFuZ2VCdXMgPSBuZXcgRXZlbnRCdXNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0UXVhbGlmaWVyKHF1YWxpZmllcik7XG4gICAgfVxuICAgIC8qKiBhIGNvcHkgY29uc3RydWN0b3Igd2l0aCBuZXcgaWQgYW5kIG5vIHByZXNlbnRhdGlvbiBtb2RlbCAqL1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUuY29weSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDbGllbnRBdHRyaWJ1dGUodGhpcy5wcm9wZXJ0eU5hbWUsIHRoaXMuZ2V0UXVhbGlmaWVyKCksIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUucHJvdG90eXBlLnNldFByZXNlbnRhdGlvbk1vZGVsID0gZnVuY3Rpb24gKHByZXNlbnRhdGlvbk1vZGVsKSB7XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVsKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBjYW4gbm90IHNldCBhIHByZXNlbnRhdGlvbiBtb2RlbCBmb3IgYW4gYXR0cmlidXRlIHRoYXQgaXMgYWxyZWFkeSBib3VuZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbCA9IHByZXNlbnRhdGlvbk1vZGVsO1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5nZXRQcmVzZW50YXRpb25Nb2RlbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJlc2VudGF0aW9uTW9kZWw7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUucHJvdG90eXBlLmdldFZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUuc2V0VmFsdWUgPSBmdW5jdGlvbiAobmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIHZlcmlmaWVkVmFsdWUgPSBDbGllbnRBdHRyaWJ1dGUuY2hlY2tWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLnZhbHVlID09IHZlcmlmaWVkVmFsdWUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2ZXJpZmllZFZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnb2xkVmFsdWUnOiBvbGRWYWx1ZSwgJ25ld1ZhbHVlJzogdmVyaWZpZWRWYWx1ZSB9KTtcbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUuc2V0UXVhbGlmaWVyID0gZnVuY3Rpb24gKG5ld1F1YWxpZmllcikge1xuICAgICAgICBpZiAodGhpcy5xdWFsaWZpZXIgPT0gbmV3UXVhbGlmaWVyKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB2YXIgb2xkUXVhbGlmaWVyID0gdGhpcy5xdWFsaWZpZXI7XG4gICAgICAgIHRoaXMucXVhbGlmaWVyID0gbmV3UXVhbGlmaWVyO1xuICAgICAgICB0aGlzLnF1YWxpZmllckNoYW5nZUJ1cy50cmlnZ2VyKHsgJ29sZFZhbHVlJzogb2xkUXVhbGlmaWVyLCAnbmV3VmFsdWUnOiBuZXdRdWFsaWZpZXIgfSk7XG4gICAgfTtcbiAgICBDbGllbnRBdHRyaWJ1dGUucHJvdG90eXBlLmdldFF1YWxpZmllciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVhbGlmaWVyO1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLmNoZWNrVmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBTdHJpbmcgfHwgcmVzdWx0IGluc3RhbmNlb2YgQm9vbGVhbiB8fCByZXN1bHQgaW5zdGFuY2VvZiBOdW1iZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlLnZhbHVlT2YoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQ2xpZW50QXR0cmlidXRlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFuIEF0dHJpYnV0ZSBtYXkgbm90IGl0c2VsZiBjb250YWluIGFuIGF0dHJpYnV0ZSBhcyBhIHZhbHVlLiBBc3N1bWluZyB5b3UgZm9yZ290IHRvIGNhbGwgdmFsdWUuXCIpO1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5jaGVja1ZhbHVlKHZhbHVlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb2sgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuU1VQUE9SVEVEX1ZBTFVFX1RZUEVTLmluZGV4T2YodHlwZW9mIHJlc3VsdCkgPiAtMSB8fCByZXN1bHQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgICAgICBvayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXR0cmlidXRlIHZhbHVlcyBvZiB0aGlzIHR5cGUgYXJlIG5vdCBhbGxvd2VkOiBcIiArIHR5cGVvZiB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5wcm90b3R5cGUub25WYWx1ZUNoYW5nZSA9IGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgICAgIGV2ZW50SGFuZGxlcih7IFwib2xkVmFsdWVcIjogdGhpcy52YWx1ZSwgXCJuZXdWYWx1ZVwiOiB0aGlzLnZhbHVlIH0pO1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5vblF1YWxpZmllckNoYW5nZSA9IGZ1bmN0aW9uIChldmVudEhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5xdWFsaWZpZXJDaGFuZ2VCdXMub25FdmVudChldmVudEhhbmRsZXIpO1xuICAgIH07XG4gICAgQ2xpZW50QXR0cmlidXRlLnByb3RvdHlwZS5zeW5jV2l0aCA9IGZ1bmN0aW9uIChzb3VyY2VBdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgdGhpcy5zZXRRdWFsaWZpZXIoc291cmNlQXR0cmlidXRlLmdldFF1YWxpZmllcigpKTsgLy8gc2VxdWVuY2UgaXMgaW1wb3J0YW50XG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHNvdXJjZUF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsaWVudEF0dHJpYnV0ZS5TVVBQT1JURURfVkFMVUVfVFlQRVMgPSBbXCJzdHJpbmdcIiwgXCJudW1iZXJcIiwgXCJib29sZWFuXCJdO1xuICAgIENsaWVudEF0dHJpYnV0ZS5jbGllbnRBdHRyaWJ1dGVJbnN0YW5jZUNvdW50ID0gMDtcbiAgICByZXR1cm4gQ2xpZW50QXR0cmlidXRlO1xufSgpKTtcbmV4cG9ydHMuQ2xpZW50QXR0cmlidXRlID0gQ2xpZW50QXR0cmlidXRlO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGllbnRBdHRyaWJ1dGUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBDbGllbnRQcmVzZW50YXRpb25Nb2RlbF8xID0gcmVxdWlyZShcIi4vQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxcIik7XG52YXIgQ29kZWNfMSA9IHJlcXVpcmUoXCIuL0NvZGVjXCIpO1xudmFyIENvbW1hbmRCYXRjaGVyXzEgPSByZXF1aXJlKFwiLi9Db21tYW5kQmF0Y2hlclwiKTtcbnZhciBDbGllbnRDb25uZWN0b3IgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENsaWVudENvbm5lY3Rvcih0cmFuc21pdHRlciwgY2xpZW50RG9scGhpbiwgc2xhY2tNUywgbWF4QmF0Y2hTaXplKSB7XG4gICAgICAgIGlmIChzbGFja01TID09PSB2b2lkIDApIHsgc2xhY2tNUyA9IDA7IH1cbiAgICAgICAgaWYgKG1heEJhdGNoU2l6ZSA9PT0gdm9pZCAwKSB7IG1heEJhdGNoU2l6ZSA9IDUwOyB9XG4gICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlID0gW107XG4gICAgICAgIHRoaXMuY3VycmVudGx5U2VuZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnB1c2hFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRyYW5zbWl0dGVyID0gdHJhbnNtaXR0ZXI7XG4gICAgICAgIHRoaXMuY2xpZW50RG9scGhpbiA9IGNsaWVudERvbHBoaW47XG4gICAgICAgIHRoaXMuc2xhY2tNUyA9IHNsYWNrTVM7XG4gICAgICAgIHRoaXMuY29kZWMgPSBuZXcgQ29kZWNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgdGhpcy5jb21tYW5kQmF0Y2hlciA9IG5ldyBDb21tYW5kQmF0Y2hlcl8xLkJsaW5kQ29tbWFuZEJhdGNoZXIodHJ1ZSwgbWF4QmF0Y2hTaXplKTtcbiAgICB9XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5zZXRDb21tYW5kQmF0Y2hlciA9IGZ1bmN0aW9uIChuZXdCYXRjaGVyKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZEJhdGNoZXIgPSBuZXdCYXRjaGVyO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5zZXRQdXNoRW5hYmxlZCA9IGZ1bmN0aW9uIChlbmFibGVkKSB7XG4gICAgICAgIHRoaXMucHVzaEVuYWJsZWQgPSBlbmFibGVkO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5zZXRQdXNoTGlzdGVuZXIgPSBmdW5jdGlvbiAobmV3TGlzdGVuZXIpIHtcbiAgICAgICAgdGhpcy5wdXNoTGlzdGVuZXIgPSBuZXdMaXN0ZW5lcjtcbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUuc2V0UmVsZWFzZUNvbW1hbmQgPSBmdW5jdGlvbiAobmV3Q29tbWFuZCkge1xuICAgICAgICB0aGlzLnJlbGVhc2VDb21tYW5kID0gbmV3Q29tbWFuZDtcbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjb21tYW5kLCBvbkZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMuY29tbWFuZFF1ZXVlLnB1c2goeyBjb21tYW5kOiBjb21tYW5kLCBoYW5kbGVyOiBvbkZpbmlzaGVkIH0pO1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50bHlTZW5kaW5nKSB7XG4gICAgICAgICAgICB0aGlzLnJlbGVhc2UoKTsgLy8gdGhlcmUgaXMgbm90IHBvaW50IGluIHJlbGVhc2luZyBpZiB3ZSBkbyBub3Qgc2VuZCBhdG1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRvU2VuZE5leHQoKTtcbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUuZG9TZW5kTmV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgaWYgKHRoaXMuY29tbWFuZFF1ZXVlLmxlbmd0aCA8IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnB1c2hFbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbnF1ZXVlUHVzaENvbW1hbmQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudGx5U2VuZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRseVNlbmRpbmcgPSB0cnVlO1xuICAgICAgICB2YXIgY21kc0FuZEhhbmRsZXJzID0gdGhpcy5jb21tYW5kQmF0Y2hlci5iYXRjaCh0aGlzLmNvbW1hbmRRdWV1ZSk7XG4gICAgICAgIHZhciBjYWxsYmFjayA9IGNtZHNBbmRIYW5kbGVyc1tjbWRzQW5kSGFuZGxlcnMubGVuZ3RoIC0gMV0uaGFuZGxlcjtcbiAgICAgICAgdmFyIGNvbW1hbmRzID0gY21kc0FuZEhhbmRsZXJzLm1hcChmdW5jdGlvbiAoY2FoKSB7IHJldHVybiBjYWguY29tbWFuZDsgfSk7XG4gICAgICAgIHRoaXMudHJhbnNtaXR0ZXIudHJhbnNtaXQoY29tbWFuZHMsIGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInNlcnZlciByZXNwb25zZTogW1wiICsgcmVzcG9uc2UubWFwKGl0ID0+IGl0LmlkKS5qb2luKFwiLCBcIikgKyBcIl0gXCIpO1xuICAgICAgICAgICAgdmFyIHRvdWNoZWRQTXMgPSBbXTtcbiAgICAgICAgICAgIHJlc3BvbnNlLmZvckVhY2goZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG91Y2hlZCA9IF90aGlzLmhhbmRsZShjb21tYW5kKTtcbiAgICAgICAgICAgICAgICBpZiAodG91Y2hlZClcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZFBNcy5wdXNoKHRvdWNoZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjay5vbkZpbmlzaGVkKHRvdWNoZWRQTXMpOyAvLyB0b2RvOiBtYWtlIHRoZW0gdW5pcXVlP1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gcmVjdXJzaXZlIGNhbGw6IGZldGNoIHRoZSBuZXh0IGluIGxpbmUgYnV0IGFsbG93IGEgYml0IG9mIHNsYWNrIHN1Y2ggdGhhdFxuICAgICAgICAgICAgLy8gZG9jdW1lbnQgZXZlbnRzIGNhbiBmaXJlLCByZW5kZXJpbmcgaXMgZG9uZSBhbmQgY29tbWFuZHMgY2FuIGJhdGNoIHVwXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRvU2VuZE5leHQoKTsgfSwgX3RoaXMuc2xhY2tNUyk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5oYW5kbGUgPSBmdW5jdGlvbiAoY29tbWFuZCkge1xuICAgICAgICBpZiAoY29tbWFuZC5pZCA9PSBcIkRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZURlbGV0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21tYW5kLmlkID09IFwiQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGNvbW1hbmQuaWQgPT0gXCJWYWx1ZUNoYW5nZWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjb21tYW5kLmlkID09IFwiQXR0cmlidXRlTWV0YWRhdGFDaGFuZ2VkXCIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZUF0dHJpYnV0ZU1ldGFkYXRhQ2hhbmdlZENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNhbm5vdCBoYW5kbGUsIHVua25vd24gY29tbWFuZCBcIiArIGNvbW1hbmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5oYW5kbGVEZWxldGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQgPSBmdW5jdGlvbiAoc2VydmVyQ29tbWFuZCkge1xuICAgICAgICB2YXIgbW9kZWwgPSB0aGlzLmNsaWVudERvbHBoaW4uZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChzZXJ2ZXJDb21tYW5kLnBtSWQpO1xuICAgICAgICBpZiAoIW1vZGVsKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWwsIHRydWUpO1xuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLmhhbmRsZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCA9IGZ1bmN0aW9uIChzZXJ2ZXJDb21tYW5kKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICh0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmNvbnRhaW5zUHJlc2VudGF0aW9uTW9kZWwoc2VydmVyQ29tbWFuZC5wbUlkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlcmUgYWxyZWFkeSBpcyBhIHByZXNlbnRhdGlvbiBtb2RlbCB3aXRoIGlkIFwiICsgc2VydmVyQ29tbWFuZC5wbUlkICsgXCIgIGtub3duIHRvIHRoZSBjbGllbnQuXCIpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHNlcnZlckNvbW1hbmQuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICB2YXIgY2xpZW50QXR0cmlidXRlID0gX3RoaXMuY2xpZW50RG9scGhpbi5hdHRyaWJ1dGUoYXR0ci5wcm9wZXJ0eU5hbWUsIGF0dHIucXVhbGlmaWVyLCBhdHRyLnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChhdHRyLmlkICYmIGF0dHIuaWQubWF0Y2goXCIuKlMkXCIpKSB7XG4gICAgICAgICAgICAgICAgY2xpZW50QXR0cmlidXRlLmlkID0gYXR0ci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF0dHJpYnV0ZXMucHVzaChjbGllbnRBdHRyaWJ1dGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNsaWVudFBtID0gbmV3IENsaWVudFByZXNlbnRhdGlvbk1vZGVsXzEuQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwoc2VydmVyQ29tbWFuZC5wbUlkLCBzZXJ2ZXJDb21tYW5kLnBtVHlwZSk7XG4gICAgICAgIGNsaWVudFBtLmFkZEF0dHJpYnV0ZXMoYXR0cmlidXRlcyk7XG4gICAgICAgIGlmIChzZXJ2ZXJDb21tYW5kLmNsaWVudFNpZGVPbmx5KSB7XG4gICAgICAgICAgICBjbGllbnRQbS5jbGllbnRTaWRlT25seSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5hZGQoY2xpZW50UG0pO1xuICAgICAgICB0aGlzLmNsaWVudERvbHBoaW4udXBkYXRlUHJlc2VudGF0aW9uTW9kZWxRdWFsaWZpZXIoY2xpZW50UG0pO1xuICAgICAgICByZXR1cm4gY2xpZW50UG07XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLmhhbmRsZVZhbHVlQ2hhbmdlZENvbW1hbmQgPSBmdW5jdGlvbiAoc2VydmVyQ29tbWFuZCkge1xuICAgICAgICB2YXIgY2xpZW50QXR0cmlidXRlID0gdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQXR0cmlidXRlQnlJZChzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZUlkKTtcbiAgICAgICAgaWYgKCFjbGllbnRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlIHdpdGggaWQgXCIgKyBzZXJ2ZXJDb21tYW5kLmF0dHJpYnV0ZUlkICsgXCIgbm90IGZvdW5kLCBjYW5ub3QgdXBkYXRlIG9sZCB2YWx1ZSBcIiArIHNlcnZlckNvbW1hbmQub2xkVmFsdWUgKyBcIiB0byBuZXcgdmFsdWUgXCIgKyBzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjbGllbnRBdHRyaWJ1dGUuZ2V0VmFsdWUoKSA9PSBzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibm90aGluZyB0byBkby4gbmV3IHZhbHVlID09IG9sZCB2YWx1ZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJlbG93IHdhcyB0aGUgY29kZSB0aGF0IHdvdWxkIGVuZm9yY2UgdGhhdCB2YWx1ZSBjaGFuZ2VzIG9ubHkgYXBwZWFyIHdoZW4gdGhlIHByb3BlciBvbGRWYWx1ZSBpcyBnaXZlbi5cbiAgICAgICAgLy8gV2hpbGUgdGhhdCBzZWVtZWQgYXBwcm9wcmlhdGUgYXQgZmlyc3QsIHRoZXJlIGFyZSBhY3R1YWxseSB2YWxpZCBjb21tYW5kIHNlcXVlbmNlcyB3aGVyZSB0aGUgb2xkVmFsdWUgaXMgbm90IHByb3Blcmx5IHNldC5cbiAgICAgICAgLy8gV2UgbGVhdmUgdGhlIGNvbW1lbnRlZCBjb2RlIGluIHRoZSBjb2RlYmFzZSB0byBhbGxvdyBmb3IgbG9nZ2luZy9kZWJ1Z2dpbmcgc3VjaCBjYXNlcy5cbiAgICAgICAgLy8gICAgICAgICAgICBpZihjbGllbnRBdHRyaWJ1dGUuZ2V0VmFsdWUoKSAhPSBzZXJ2ZXJDb21tYW5kLm9sZFZhbHVlKSB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXR0cmlidXRlIHdpdGggaWQgXCIrc2VydmVyQ29tbWFuZC5hdHRyaWJ1dGVJZCtcIiBhbmQgdmFsdWUgXCIgKyBjbGllbnRBdHRyaWJ1dGUuZ2V0VmFsdWUoKSArXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHdhcyBzZXQgdG8gdmFsdWUgXCIgKyBzZXJ2ZXJDb21tYW5kLm5ld1ZhbHVlICsgXCIgZXZlbiB0aG91Z2ggdGhlIGNoYW5nZSB3YXMgYmFzZWQgb24gYW4gb3V0ZGF0ZWQgb2xkIHZhbHVlIG9mIFwiICsgc2VydmVyQ29tbWFuZC5vbGRWYWx1ZSk7XG4gICAgICAgIC8vICAgICAgICAgICAgfVxuICAgICAgICBjbGllbnRBdHRyaWJ1dGUuc2V0VmFsdWUoc2VydmVyQ29tbWFuZC5uZXdWYWx1ZSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQ2xpZW50Q29ubmVjdG9yLnByb3RvdHlwZS5oYW5kbGVBdHRyaWJ1dGVNZXRhZGF0YUNoYW5nZWRDb21tYW5kID0gZnVuY3Rpb24gKHNlcnZlckNvbW1hbmQpIHtcbiAgICAgICAgdmFyIGNsaWVudEF0dHJpYnV0ZSA9IHRoaXMuY2xpZW50RG9scGhpbi5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZEF0dHJpYnV0ZUJ5SWQoc2VydmVyQ29tbWFuZC5hdHRyaWJ1dGVJZCk7XG4gICAgICAgIGlmICghY2xpZW50QXR0cmlidXRlKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGNsaWVudEF0dHJpYnV0ZVtzZXJ2ZXJDb21tYW5kLm1ldGFkYXRhTmFtZV0gPSBzZXJ2ZXJDb21tYW5kLnZhbHVlO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIC8vLy8vLy8vLy8vLy8gcHVzaCBzdXBwb3J0IC8vLy8vLy8vLy8vLy8vL1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUubGlzdGVuID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIXRoaXMucHVzaEVuYWJsZWQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLndhaXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIC8vIHRvZG86IGhvdyB0byBpc3N1ZSBhIHdhcm5pbmcgaWYgbm8gcHVzaExpc3RlbmVyIGlzIHNldD9cbiAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRseVNlbmRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuZG9TZW5kTmV4dCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDbGllbnRDb25uZWN0b3IucHJvdG90eXBlLmVucXVldWVQdXNoQ29tbWFuZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy53YWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb21tYW5kUXVldWUucHVzaCh7XG4gICAgICAgICAgICBjb21tYW5kOiB0aGlzLnB1c2hMaXN0ZW5lcixcbiAgICAgICAgICAgIGhhbmRsZXI6IHtcbiAgICAgICAgICAgICAgICBvbkZpbmlzaGVkOiBmdW5jdGlvbiAobW9kZWxzKSB7IG1lLndhaXRpbmcgPSBmYWxzZTsgfSxcbiAgICAgICAgICAgICAgICBvbkZpbmlzaGVkRGF0YTogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudENvbm5lY3Rvci5wcm90b3R5cGUucmVsZWFzZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLndhaXRpbmcpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMud2FpdGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0b2RvOiBob3cgdG8gaXNzdWUgYSB3YXJuaW5nIGlmIG5vIHJlbGVhc2VDb21tYW5kIGlzIHNldD9cbiAgICAgICAgdGhpcy50cmFuc21pdHRlci5zaWduYWwodGhpcy5yZWxlYXNlQ29tbWFuZCk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2xpZW50Q29ubmVjdG9yO1xufSgpKTtcbmV4cG9ydHMuQ2xpZW50Q29ubmVjdG9yID0gQ2xpZW50Q29ubmVjdG9yO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGllbnRDb25uZWN0b3IuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBDbGllbnRBdHRyaWJ1dGVfMSA9IHJlcXVpcmUoXCIuL0NsaWVudEF0dHJpYnV0ZVwiKTtcbnZhciBDbGllbnRQcmVzZW50YXRpb25Nb2RlbF8xID0gcmVxdWlyZShcIi4vQ2xpZW50UHJlc2VudGF0aW9uTW9kZWxcIik7XG52YXIgQ2xpZW50RG9scGhpbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ2xpZW50RG9scGhpbigpIHtcbiAgICB9XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuc2V0Q2xpZW50Q29ubmVjdG9yID0gZnVuY3Rpb24gKGNsaWVudENvbm5lY3Rvcikge1xuICAgICAgICB0aGlzLmNsaWVudENvbm5lY3RvciA9IGNsaWVudENvbm5lY3RvcjtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmdldENsaWVudENvbm5lY3RvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpZW50Q29ubmVjdG9yO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuc2VuZCA9IGZ1bmN0aW9uIChjb21tYW5kLCBvbkZpbmlzaGVkKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNlbmQoY29tbWFuZCwgb25GaW5pc2hlZCk7XG4gICAgfTtcbiAgICAvLyBmYWN0b3J5IG1ldGhvZCBmb3IgYXR0cmlidXRlc1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUsIHF1YWxpZmllciwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDbGllbnRBdHRyaWJ1dGVfMS5DbGllbnRBdHRyaWJ1dGUocHJvcGVydHlOYW1lLCBxdWFsaWZpZXIsIHZhbHVlKTtcbiAgICB9O1xuICAgIC8vIGZhY3RvcnkgbWV0aG9kIGZvciBwcmVzZW50YXRpb24gbW9kZWxzXG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUucHJlc2VudGF0aW9uTW9kZWwgPSBmdW5jdGlvbiAoaWQsIHR5cGUpIHtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAyOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXNbX2kgLSAyXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1vZGVsID0gbmV3IENsaWVudFByZXNlbnRhdGlvbk1vZGVsXzEuQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwoaWQsIHR5cGUpO1xuICAgICAgICBpZiAoYXR0cmlidXRlcyAmJiBhdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICAgICAgbW9kZWwuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5hZGQobW9kZWwpO1xuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5zZXRDbGllbnRNb2RlbFN0b3JlID0gZnVuY3Rpb24gKGNsaWVudE1vZGVsU3RvcmUpIHtcbiAgICAgICAgdGhpcy5jbGllbnRNb2RlbFN0b3JlID0gY2xpZW50TW9kZWxTdG9yZTtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmdldENsaWVudE1vZGVsU3RvcmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudE1vZGVsU3RvcmU7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5saXN0UHJlc2VudGF0aW9uTW9kZWxJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5saXN0UHJlc2VudGF0aW9uTW9kZWxJZHMoKTtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmxpc3RQcmVzZW50YXRpb25Nb2RlbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5saXN0UHJlc2VudGF0aW9uTW9kZWxzKCk7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5maW5kQWxsUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUgPSBmdW5jdGlvbiAocHJlc2VudGF0aW9uTW9kZWxUeXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQWxsUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUocHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICB9O1xuICAgIENsaWVudERvbHBoaW4ucHJvdG90eXBlLmdldEF0ID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQoaWQpO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRDbGllbnRNb2RlbFN0b3JlKCkuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZChpZCk7XG4gICAgfTtcbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5kZWxldGVQcmVzZW50YXRpb25Nb2RlbCA9IGZ1bmN0aW9uIChtb2RlbFRvRGVsZXRlKSB7XG4gICAgICAgIHRoaXMuZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLmRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKG1vZGVsVG9EZWxldGUsIHRydWUpO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUudXBkYXRlUHJlc2VudGF0aW9uTW9kZWxRdWFsaWZpZXIgPSBmdW5jdGlvbiAocHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgcHJlc2VudGF0aW9uTW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goZnVuY3Rpb24gKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgX3RoaXMudXBkYXRlQXR0cmlidXRlUXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUudXBkYXRlQXR0cmlidXRlUXVhbGlmaWVyID0gZnVuY3Rpb24gKHNvdXJjZUF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIXNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmdldENsaWVudE1vZGVsU3RvcmUoKS5maW5kQWxsQXR0cmlidXRlc0J5UXVhbGlmaWVyKHNvdXJjZUF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAodGFyZ2V0QXR0cmlidXRlKSB7XG4gICAgICAgICAgICB0YXJnZXRBdHRyaWJ1dGUuc2V0VmFsdWUoc291cmNlQXR0cmlidXRlLmdldFZhbHVlKCkpOyAvLyBzaG91bGQgYWx3YXlzIGhhdmUgdGhlIHNhbWUgdmFsdWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLy8vLy8gcHVzaCBzdXBwb3J0IC8vLy8vLy9cbiAgICBDbGllbnREb2xwaGluLnByb3RvdHlwZS5zdGFydFB1c2hMaXN0ZW5pbmcgPSBmdW5jdGlvbiAocHVzaENvbW1hbmQsIHJlbGVhc2VDb21tYW5kKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFB1c2hMaXN0ZW5lcihwdXNoQ29tbWFuZCk7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFJlbGVhc2VDb21tYW5kKHJlbGVhc2VDb21tYW5kKTtcbiAgICAgICAgdGhpcy5jbGllbnRDb25uZWN0b3Iuc2V0UHVzaEVuYWJsZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLmxpc3RlbigpO1xuICAgIH07XG4gICAgQ2xpZW50RG9scGhpbi5wcm90b3R5cGUuc3RvcFB1c2hMaXN0ZW5pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY2xpZW50Q29ubmVjdG9yLnNldFB1c2hFbmFibGVkKGZhbHNlKTtcbiAgICB9O1xuICAgIHJldHVybiBDbGllbnREb2xwaGluO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENsaWVudERvbHBoaW47XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudERvbHBoaW4uanMubWFwXG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9jb3JlLWpzLmQudHNcIiAvPlxuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQXR0cmlidXRlXzEgPSByZXF1aXJlKFwiLi9BdHRyaWJ1dGVcIik7XG52YXIgQ2hhbmdlQXR0cmlidXRlTWV0YWRhdGFDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9DaGFuZ2VBdHRyaWJ1dGVNZXRhZGF0YUNvbW1hbmRcIik7XG52YXIgQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9DcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRcIik7XG52YXIgRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uXzEgPSByZXF1aXJlKFwiLi9EZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb25cIik7XG52YXIgRXZlbnRCdXNfMSA9IHJlcXVpcmUoXCIuL0V2ZW50QnVzXCIpO1xudmFyIFZhbHVlQ2hhbmdlZENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL1ZhbHVlQ2hhbmdlZENvbW1hbmRcIik7XG4oZnVuY3Rpb24gKFR5cGUpIHtcbiAgICBUeXBlW1R5cGVbXCJBRERFRFwiXSA9ICdBRERFRCddID0gXCJBRERFRFwiO1xuICAgIFR5cGVbVHlwZVtcIlJFTU9WRURcIl0gPSAnUkVNT1ZFRCddID0gXCJSRU1PVkVEXCI7XG59KShleHBvcnRzLlR5cGUgfHwgKGV4cG9ydHMuVHlwZSA9IHt9KSk7XG52YXIgVHlwZSA9IGV4cG9ydHMuVHlwZTtcbnZhciBDbGllbnRNb2RlbFN0b3JlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGllbnRNb2RlbFN0b3JlKGNsaWVudERvbHBoaW4pIHtcbiAgICAgICAgdGhpcy5jbGllbnREb2xwaGluID0gY2xpZW50RG9scGhpbjtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzUGVyVHlwZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVySWQgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzID0gbmV3IEV2ZW50QnVzXzFbXCJkZWZhdWx0XCJdKCk7XG4gICAgfVxuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmdldENsaWVudERvbHBoaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNsaWVudERvbHBoaW47XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5yZWdpc3Rlck1vZGVsID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmIChtb2RlbC5jbGllbnRTaWRlT25seSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjb25uZWN0b3IgPSB0aGlzLmNsaWVudERvbHBoaW4uZ2V0Q2xpZW50Q29ubmVjdG9yKCk7XG4gICAgICAgIHZhciBjcmVhdGVQTUNvbW1hbmQgPSBuZXcgQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kXzFbXCJkZWZhdWx0XCJdKG1vZGVsKTtcbiAgICAgICAgY29ubmVjdG9yLnNlbmQoY3JlYXRlUE1Db21tYW5kLCBudWxsKTtcbiAgICAgICAgbW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJBdHRyaWJ1dGUoYXR0cmlidXRlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5yZWdpc3RlckF0dHJpYnV0ZSA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdGhpcy5hZGRBdHRyaWJ1dGVCeUlkKGF0dHJpYnV0ZSk7XG4gICAgICAgIGlmIChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkQXR0cmlidXRlQnlRdWFsaWZpZXIoYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB3aGVuZXZlciBhbiBhdHRyaWJ1dGUgY2hhbmdlcyBpdHMgdmFsdWUsIHRoZSBzZXJ2ZXIgbmVlZHMgdG8gYmUgbm90aWZpZWRcbiAgICAgICAgLy8gYW5kIGFsbCBvdGhlciBhdHRyaWJ1dGVzIHdpdGggdGhlIHNhbWUgcXVhbGlmaWVyIGFyZSBnaXZlbiB0aGUgc2FtZSB2YWx1ZVxuICAgICAgICBhdHRyaWJ1dGUub25WYWx1ZUNoYW5nZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVDaGFuZ2VDb21tYW5kID0gbmV3IFZhbHVlQ2hhbmdlZENvbW1hbmRfMVtcImRlZmF1bHRcIl0oYXR0cmlidXRlLmlkLCBldnQub2xkVmFsdWUsIGV2dC5uZXdWYWx1ZSk7XG4gICAgICAgICAgICBfdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudENvbm5lY3RvcigpLnNlbmQodmFsdWVDaGFuZ2VDb21tYW5kLCBudWxsKTtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXR0cnMgPSBfdGhpcy5maW5kQXR0cmlidXRlc0J5RmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhdHRyICE9PSBhdHRyaWJ1dGUgJiYgYXR0ci5nZXRRdWFsaWZpZXIoKSA9PSBhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgICAgICBhdHRyLnNldFZhbHVlKGF0dHJpYnV0ZS5nZXRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGF0dHJpYnV0ZS5vblF1YWxpZmllckNoYW5nZShmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICB2YXIgY2hhbmdlQXR0ck1ldGFkYXRhQ21kID0gbmV3IENoYW5nZUF0dHJpYnV0ZU1ldGFkYXRhQ29tbWFuZF8xW1wiZGVmYXVsdFwiXShhdHRyaWJ1dGUuaWQsIEF0dHJpYnV0ZV8xW1wiZGVmYXVsdFwiXS5RVUFMSUZJRVJfUFJPUEVSVFksIGV2dC5uZXdWYWx1ZSk7XG4gICAgICAgICAgICBfdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudENvbm5lY3RvcigpLnNlbmQoY2hhbmdlQXR0ck1ldGFkYXRhQ21kLCBudWxsKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMobW9kZWwuaWQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZXJlIGFscmVhZHkgaXMgYSBQTSB3aXRoIGlkIFwiICsgbW9kZWwuaWQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBhZGRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmhhcyhtb2RlbC5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLnNldChtb2RlbC5pZCwgbW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5hZGRQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTW9kZWwobW9kZWwpO1xuICAgICAgICAgICAgdGhpcy5tb2RlbFN0b3JlQ2hhbmdlQnVzLnRyaWdnZXIoeyAnZXZlbnRUeXBlJzogVHlwZS5BRERFRCwgJ2NsaWVudFByZXNlbnRhdGlvbk1vZGVsJzogbW9kZWwgfSk7XG4gICAgICAgICAgICBhZGRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFkZGVkO1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKG1vZGVsKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVtb3ZlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuaGFzKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZShtb2RlbCk7XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5kZWxldGUobW9kZWwuaWQpO1xuICAgICAgICAgICAgbW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUF0dHJpYnV0ZUJ5SWQoYXR0cmlidXRlKTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnJlbW92ZUF0dHJpYnV0ZUJ5UXVhbGlmaWVyKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLm1vZGVsU3RvcmVDaGFuZ2VCdXMudHJpZ2dlcih7ICdldmVudFR5cGUnOiBUeXBlLlJFTU9WRUQsICdjbGllbnRQcmVzZW50YXRpb25Nb2RlbCc6IG1vZGVsIH0pO1xuICAgICAgICAgICAgcmVtb3ZlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlbW92ZWQ7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5maW5kQXR0cmlidXRlc0J5RmlsdGVyID0gZnVuY3Rpb24gKGZpbHRlcikge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IFtdO1xuICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5mb3JFYWNoKGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICAgICAgbW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsdGVyKGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChhdHRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBtYXRjaGVzO1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuYWRkUHJlc2VudGF0aW9uTW9kZWxCeVR5cGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciB0eXBlID0gbW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlO1xuICAgICAgICBpZiAoIXR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcHJlc2VudGF0aW9uTW9kZWxzID0gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlLmdldCh0eXBlKTtcbiAgICAgICAgaWYgKCFwcmVzZW50YXRpb25Nb2RlbHMpIHtcbiAgICAgICAgICAgIHByZXNlbnRhdGlvbk1vZGVscyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlLnNldCh0eXBlLCBwcmVzZW50YXRpb25Nb2RlbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKHByZXNlbnRhdGlvbk1vZGVscy5pbmRleE9mKG1vZGVsKSA+IC0xKSkge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uTW9kZWxzLnB1c2gobW9kZWwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5yZW1vdmVQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuICAgICAgICBpZiAoIW1vZGVsIHx8ICEobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwcmVzZW50YXRpb25Nb2RlbHMgPSB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIGlmICghcHJlc2VudGF0aW9uTW9kZWxzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByZXNlbnRhdGlvbk1vZGVscy5sZW5ndGggPiAtMSkge1xuICAgICAgICAgICAgcHJlc2VudGF0aW9uTW9kZWxzLnNwbGljZShwcmVzZW50YXRpb25Nb2RlbHMuaW5kZXhPZihtb2RlbCksIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmVzZW50YXRpb25Nb2RlbHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZGVsZXRlKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmxpc3RQcmVzZW50YXRpb25Nb2RlbElkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICB2YXIgaXRlciA9IHRoaXMucHJlc2VudGF0aW9uTW9kZWxzLmtleXMoKTtcbiAgICAgICAgdmFyIG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgd2hpbGUgKCFuZXh0LmRvbmUpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5leHQudmFsdWUpO1xuICAgICAgICAgICAgbmV4dCA9IGl0ZXIubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5saXN0UHJlc2VudGF0aW9uTW9kZWxzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIHZhciBpdGVyID0gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMudmFsdWVzKCk7XG4gICAgICAgIHZhciBuZXh0ID0gaXRlci5uZXh0KCk7XG4gICAgICAgIHdoaWxlICghbmV4dC5kb25lKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChuZXh0LnZhbHVlKTtcbiAgICAgICAgICAgIG5leHQgPSBpdGVyLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuZmluZFByZXNlbnRhdGlvbk1vZGVsQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcmVzZW50YXRpb25Nb2RlbHMuZ2V0KGlkKTtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmZpbmRBbGxQcmVzZW50YXRpb25Nb2RlbEJ5VHlwZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmICghdHlwZSB8fCAhdGhpcy5wcmVzZW50YXRpb25Nb2RlbHNQZXJUeXBlLmhhcyh0eXBlKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVsc1BlclR5cGUuZ2V0KHR5cGUpLnNsaWNlKDApOyAvLyBzbGljZSBpcyB1c2VkIHRvIGNsb25lIHRoZSBhcnJheVxuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwgPSBmdW5jdGlvbiAobW9kZWwsIG5vdGlmeSkge1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY29udGFpbnNQcmVzZW50YXRpb25Nb2RlbChtb2RlbC5pZCkpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKG1vZGVsKTtcbiAgICAgICAgICAgIGlmICghbm90aWZ5IHx8IG1vZGVsLmNsaWVudFNpZGVPbmx5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbGllbnREb2xwaGluLmdldENsaWVudENvbm5lY3RvcigpLnNlbmQobmV3IERlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbl8xW1wiZGVmYXVsdFwiXShtb2RlbC5pZCksIG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5jb250YWluc1ByZXNlbnRhdGlvbk1vZGVsID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByZXNlbnRhdGlvbk1vZGVscy5oYXMoaWQpO1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuYWRkQXR0cmlidXRlQnlJZCA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgdGhpcy5hdHRyaWJ1dGVzUGVySWQuaGFzKGF0dHJpYnV0ZS5pZCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmF0dHJpYnV0ZXNQZXJJZC5zZXQoYXR0cmlidXRlLmlkLCBhdHRyaWJ1dGUpO1xuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlQnlJZCA9IGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGUgfHwgIXRoaXMuYXR0cmlidXRlc1BlcklkLmhhcyhhdHRyaWJ1dGUuaWQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVySWQuZGVsZXRlKGF0dHJpYnV0ZS5pZCk7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5maW5kQXR0cmlidXRlQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzUGVySWQuZ2V0KGlkKTtcbiAgICB9O1xuICAgIENsaWVudE1vZGVsU3RvcmUucHJvdG90eXBlLmFkZEF0dHJpYnV0ZUJ5UXVhbGlmaWVyID0gZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICBpZiAoIWF0dHJpYnV0ZSB8fCAhYXR0cmlidXRlLmdldFF1YWxpZmllcigpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGF0dHJpYnV0ZXMgPSB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuZ2V0KGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSk7XG4gICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5hdHRyaWJ1dGVzUGVyUXVhbGlmaWVyLnNldChhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCksIGF0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghKGF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID4gLTEpKSB7XG4gICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUucmVtb3ZlQXR0cmlidXRlQnlRdWFsaWZpZXIgPSBmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICFhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXR0cmlidXRlcyA9IHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5nZXQoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZXMubGVuZ3RoID4gLTEpIHtcbiAgICAgICAgICAgIGF0dHJpYnV0ZXMuc3BsaWNlKGF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpLCAxKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cmlidXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5kZWxldGUoYXR0cmlidXRlLmdldFF1YWxpZmllcigpKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQ2xpZW50TW9kZWxTdG9yZS5wcm90b3R5cGUuZmluZEFsbEF0dHJpYnV0ZXNCeVF1YWxpZmllciA9IGZ1bmN0aW9uIChxdWFsaWZpZXIpIHtcbiAgICAgICAgaWYgKCFxdWFsaWZpZXIgfHwgIXRoaXMuYXR0cmlidXRlc1BlclF1YWxpZmllci5oYXMocXVhbGlmaWVyKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXNQZXJRdWFsaWZpZXIuZ2V0KHF1YWxpZmllcikuc2xpY2UoMCk7IC8vIHNsaWNlIGlzIHVzZWQgdG8gY2xvbmUgdGhlIGFycmF5XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5vbk1vZGVsU3RvcmVDaGFuZ2UgPSBmdW5jdGlvbiAoZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy5vbkV2ZW50KGV2ZW50SGFuZGxlcik7XG4gICAgfTtcbiAgICBDbGllbnRNb2RlbFN0b3JlLnByb3RvdHlwZS5vbk1vZGVsU3RvcmVDaGFuZ2VGb3JUeXBlID0gZnVuY3Rpb24gKHByZXNlbnRhdGlvbk1vZGVsVHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIHRoaXMubW9kZWxTdG9yZUNoYW5nZUJ1cy5vbkV2ZW50KGZ1bmN0aW9uIChwbVN0b3JlRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChwbVN0b3JlRXZlbnQuY2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlID09IHByZXNlbnRhdGlvbk1vZGVsVHlwZSkge1xuICAgICAgICAgICAgICAgIGV2ZW50SGFuZGxlcihwbVN0b3JlRXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBDbGllbnRNb2RlbFN0b3JlO1xufSgpKTtcbmV4cG9ydHMuQ2xpZW50TW9kZWxTdG9yZSA9IENsaWVudE1vZGVsU3RvcmU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNsaWVudE1vZGVsU3RvcmUuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBFdmVudEJ1c18xID0gcmVxdWlyZSgnLi9FdmVudEJ1cycpO1xudmFyIHByZXNlbnRhdGlvbk1vZGVsSW5zdGFuY2VDb3VudCA9IDA7IC8vIHRvZG8gZGs6IGNvbnNpZGVyIG1ha2luZyB0aGlzIHN0YXRpYyBpbiBjbGFzc1xudmFyIENsaWVudFByZXNlbnRhdGlvbk1vZGVsID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDbGllbnRQcmVzZW50YXRpb25Nb2RlbChpZCwgcHJlc2VudGF0aW9uTW9kZWxUeXBlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcmVzZW50YXRpb25Nb2RlbFR5cGUgPSBwcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsaWVudFNpZGVPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlydHkgPSBmYWxzZTtcbiAgICAgICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3VuZGVmaW5lZCcgJiYgaWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pZCA9IChwcmVzZW50YXRpb25Nb2RlbEluc3RhbmNlQ291bnQrKykudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmludmFsaWRCdXMgPSBuZXcgRXZlbnRCdXNfMVtcImRlZmF1bHRcIl0oKTtcbiAgICAgICAgdGhpcy5kaXJ0eVZhbHVlQ2hhbmdlQnVzID0gbmV3IEV2ZW50QnVzXzFbXCJkZWZhdWx0XCJdKCk7XG4gICAgfVxuICAgIC8vIHRvZG8gZGs6IGFsaWduIHdpdGggSmF2YSB2ZXJzaW9uOiBtb3ZlIHRvIENsaWVudERvbHBoaW4gYW5kIGF1dG8tYWRkIHRvIG1vZGVsIHN0b3JlXG4gICAgLyoqIGEgY29weSBjb25zdHJ1Y3RvciBmb3IgYW55dGhpbmcgYnV0IElEcy4gUGVyIGRlZmF1bHQsIGNvcGllcyBhcmUgY2xpZW50IHNpZGUgb25seSwgbm8gYXV0b21hdGljIHVwZGF0ZSBhcHBsaWVzLiAqL1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5jb3B5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENsaWVudFByZXNlbnRhdGlvbk1vZGVsKG51bGwsIHRoaXMucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgcmVzdWx0LmNsaWVudFNpZGVPbmx5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5nZXRBdHRyaWJ1dGVzKCkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlQ29weSA9IGF0dHJpYnV0ZS5jb3B5KCk7XG4gICAgICAgICAgICByZXN1bHQuYWRkQXR0cmlidXRlKGF0dHJpYnV0ZUNvcHkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIC8vYWRkIGFycmF5IG9mIGF0dHJpYnV0ZXNcbiAgICBDbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcm90b3R5cGUuYWRkQXR0cmlidXRlcyA9IGZ1bmN0aW9uIChhdHRyaWJ1dGVzKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghYXR0cmlidXRlcyB8fCBhdHRyaWJ1dGVzLmxlbmd0aCA8IDEpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgX3RoaXMuYWRkQXR0cmlidXRlKGF0dHIpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5hZGRBdHRyaWJ1dGUgPSBmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIGlmICghYXR0cmlidXRlIHx8ICh0aGlzLmF0dHJpYnV0ZXMuaW5kZXhPZihhdHRyaWJ1dGUpID4gLTEpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKGF0dHJpYnV0ZS5wcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIGF0dHJpYnV0ZSB3aXRoIHByb3BlcnR5IG5hbWU6IFwiICsgYXR0cmlidXRlLnByb3BlcnR5TmFtZVxuICAgICAgICAgICAgICAgICsgXCIgaW4gcHJlc2VudGF0aW9uIG1vZGVsIHdpdGggaWQ6IFwiICsgdGhpcy5pZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJpYnV0ZS5nZXRRdWFsaWZpZXIoKSAmJiB0aGlzLmZpbmRBdHRyaWJ1dGVCeVF1YWxpZmllcihhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKCkpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGVyZSBhbHJlYWR5IGlzIGFuIGF0dHJpYnV0ZSB3aXRoIHF1YWxpZmllcjogXCIgKyBhdHRyaWJ1dGUuZ2V0UXVhbGlmaWVyKClcbiAgICAgICAgICAgICAgICArIFwiIGluIHByZXNlbnRhdGlvbiBtb2RlbCB3aXRoIGlkOiBcIiArIHRoaXMuaWQpO1xuICAgICAgICB9XG4gICAgICAgIGF0dHJpYnV0ZS5zZXRQcmVzZW50YXRpb25Nb2RlbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVzLnB1c2goYXR0cmlidXRlKTtcbiAgICAgICAgYXR0cmlidXRlLm9uVmFsdWVDaGFuZ2UoZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgX3RoaXMuaW52YWxpZEJ1cy50cmlnZ2VyKHsgc291cmNlOiBfdGhpcyB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBDbGllbnRQcmVzZW50YXRpb25Nb2RlbC5wcm90b3R5cGUub25JbnZhbGlkYXRlZCA9IGZ1bmN0aW9uIChoYW5kbGVJbnZhbGlkYXRlKSB7XG4gICAgICAgIHRoaXMuaW52YWxpZEJ1cy5vbkV2ZW50KGhhbmRsZUludmFsaWRhdGUpO1xuICAgIH07XG4gICAgLyoqIHJldHVybnMgYSBjb3B5IG9mIHRoZSBpbnRlcm5hbCBzdGF0ZSAqL1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5nZXRBdHRyaWJ1dGVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hdHRyaWJ1dGVzLnNsaWNlKDApO1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmdldEF0ID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUocHJvcGVydHlOYW1lKTtcbiAgICB9O1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5maW5kQWxsQXR0cmlidXRlc0J5UHJvcGVydHlOYW1lID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgICAgIGlmICghcHJvcGVydHlOYW1lKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGUucHJvcGVydHlOYW1lID09IHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGF0dHJpYnV0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZSA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKCFwcm9wZXJ0eU5hbWUpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICgodGhpcy5hdHRyaWJ1dGVzW2ldLnByb3BlcnR5TmFtZSA9PSBwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5maW5kQXR0cmlidXRlQnlRdWFsaWZpZXIgPSBmdW5jdGlvbiAocXVhbGlmaWVyKSB7XG4gICAgICAgIGlmICghcXVhbGlmaWVyKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzW2ldLmdldFF1YWxpZmllcigpID09IHF1YWxpZmllcikge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmF0dHJpYnV0ZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuICAgIENsaWVudFByZXNlbnRhdGlvbk1vZGVsLnByb3RvdHlwZS5maW5kQXR0cmlidXRlQnlJZCA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgICBpZiAoIWlkKVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hdHRyaWJ1dGVzW2ldLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICA7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG4gICAgQ2xpZW50UHJlc2VudGF0aW9uTW9kZWwucHJvdG90eXBlLnN5bmNXaXRoID0gZnVuY3Rpb24gKHNvdXJjZVByZXNlbnRhdGlvbk1vZGVsKSB7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcy5mb3JFYWNoKGZ1bmN0aW9uICh0YXJnZXRBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIHZhciBzb3VyY2VBdHRyaWJ1dGUgPSBzb3VyY2VQcmVzZW50YXRpb25Nb2RlbC5nZXRBdCh0YXJnZXRBdHRyaWJ1dGUucHJvcGVydHlOYW1lKTtcbiAgICAgICAgICAgIGlmIChzb3VyY2VBdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRBdHRyaWJ1dGUuc3luY1dpdGgoc291cmNlQXR0cmlidXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gQ2xpZW50UHJlc2VudGF0aW9uTW9kZWw7XG59KCkpO1xuZXhwb3J0cy5DbGllbnRQcmVzZW50YXRpb25Nb2RlbCA9IENsaWVudFByZXNlbnRhdGlvbk1vZGVsO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DbGllbnRQcmVzZW50YXRpb25Nb2RlbC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIENvZGVjID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBDb2RlYygpIHtcbiAgICB9XG4gICAgQ29kZWMucHJvdG90eXBlLmVuY29kZSA9IGZ1bmN0aW9uIChjb21tYW5kcykge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoY29tbWFuZHMpOyAvLyB0b2RvIGRrOiBsb29rIGZvciBwb3NzaWJsZSBBUEkgc3VwcG9ydCBmb3IgY2hhcmFjdGVyIGVuY29kaW5nXG4gICAgfTtcbiAgICBDb2RlYy5wcm90b3R5cGUuZGVjb2RlID0gZnVuY3Rpb24gKHRyYW5zbWl0dGVkKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNtaXR0ZWQgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKHRyYW5zbWl0dGVkKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc21pdHRlZDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIENvZGVjO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvZGVjO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Db2RlYy5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIENvbW1hbmQgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENvbW1hbmQoKSB7XG4gICAgICAgIHRoaXMuaWQgPSBcImRvbHBoaW4tY29yZS1jb21tYW5kXCI7XG4gICAgfVxuICAgIHJldHVybiBDb21tYW5kO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbW1hbmQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBWYWx1ZUNoYW5nZWRDb21tYW5kXzEgPSByZXF1aXJlKCcuL1ZhbHVlQ2hhbmdlZENvbW1hbmQnKTtcbi8qKiBBIEJhdGNoZXIgdGhhdCBkb2VzIG5vIGJhdGNoaW5nIGJ1dCBtZXJlbHkgdGFrZXMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIHF1ZXVlIGFzIHRoZSBzaW5nbGUgaXRlbSBpbiB0aGUgYmF0Y2ggKi9cbnZhciBOb0NvbW1hbmRCYXRjaGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb0NvbW1hbmRCYXRjaGVyKCkge1xuICAgIH1cbiAgICBOb0NvbW1hbmRCYXRjaGVyLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChxdWV1ZSkge1xuICAgICAgICByZXR1cm4gW3F1ZXVlLnNoaWZ0KCldO1xuICAgIH07XG4gICAgcmV0dXJuIE5vQ29tbWFuZEJhdGNoZXI7XG59KCkpO1xuZXhwb3J0cy5Ob0NvbW1hbmRCYXRjaGVyID0gTm9Db21tYW5kQmF0Y2hlcjtcbi8qKiBBIGJhdGNoZXIgdGhhdCBiYXRjaGVzIHRoZSBibGluZHMgKGNvbW1hbmRzIHdpdGggbm8gY2FsbGJhY2spIGFuZCBvcHRpb25hbGx5IGFsc28gZm9sZHMgdmFsdWUgY2hhbmdlcyAqL1xudmFyIEJsaW5kQ29tbWFuZEJhdGNoZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIC8qKiBmb2xkaW5nOiB3aGV0aGVyIHdlIHNob3VsZCB0cnkgZm9sZGluZyBWYWx1ZUNoYW5nZWRDb21tYW5kcyAqL1xuICAgIGZ1bmN0aW9uIEJsaW5kQ29tbWFuZEJhdGNoZXIoZm9sZGluZywgbWF4QmF0Y2hTaXplKSB7XG4gICAgICAgIGlmIChmb2xkaW5nID09PSB2b2lkIDApIHsgZm9sZGluZyA9IHRydWU7IH1cbiAgICAgICAgaWYgKG1heEJhdGNoU2l6ZSA9PT0gdm9pZCAwKSB7IG1heEJhdGNoU2l6ZSA9IDUwOyB9XG4gICAgICAgIHRoaXMuZm9sZGluZyA9IGZvbGRpbmc7XG4gICAgICAgIHRoaXMubWF4QmF0Y2hTaXplID0gbWF4QmF0Y2hTaXplO1xuICAgIH1cbiAgICBCbGluZENvbW1hbmRCYXRjaGVyLnByb3RvdHlwZS5iYXRjaCA9IGZ1bmN0aW9uIChxdWV1ZSkge1xuICAgICAgICB2YXIgYmF0Y2ggPSBbXTtcbiAgICAgICAgdmFyIG4gPSBNYXRoLm1pbihxdWV1ZS5sZW5ndGgsIHRoaXMubWF4QmF0Y2hTaXplKTtcbiAgICAgICAgZm9yICh2YXIgY291bnRlciA9IDA7IGNvdW50ZXIgPCBuOyBjb3VudGVyKyspIHtcbiAgICAgICAgICAgIHZhciBjYW5kaWRhdGUgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9sZGluZyAmJiBjYW5kaWRhdGUuY29tbWFuZCBpbnN0YW5jZW9mIFZhbHVlQ2hhbmdlZENvbW1hbmRfMVtcImRlZmF1bHRcIl0gJiYgKCFjYW5kaWRhdGUuaGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBudWxsO1xuICAgICAgICAgICAgICAgIHZhciBjYW5DbWQgPSBjYW5kaWRhdGUuY29tbWFuZDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhdGNoLmxlbmd0aCAmJiBmb3VuZCA9PSBudWxsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJhdGNoW2ldLmNvbW1hbmQgaW5zdGFuY2VvZiBWYWx1ZUNoYW5nZWRDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYmF0Y2hDbWQgPSBiYXRjaFtpXS5jb21tYW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhbkNtZC5hdHRyaWJ1dGVJZCA9PSBiYXRjaENtZC5hdHRyaWJ1dGVJZCAmJiBiYXRjaENtZC5uZXdWYWx1ZSA9PSBjYW5DbWQub2xkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IGJhdGNoQ21kO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZC5uZXdWYWx1ZSA9IGNhbkNtZC5uZXdWYWx1ZTsgLy8gY2hhbmdlIGV4aXN0aW5nIHZhbHVlLCBkbyBub3QgYmF0Y2hcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdGNoLnB1c2goY2FuZGlkYXRlKTsgLy8gd2UgY2Fubm90IG1lcmdlLCBzbyBiYXRjaCB0aGUgY2FuZGlkYXRlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmF0Y2gucHVzaChjYW5kaWRhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZS5oYW5kbGVyIHx8XG4gICAgICAgICAgICAgICAgKGNhbmRpZGF0ZS5jb21tYW5kWydjbGFzc05hbWUnXSA9PSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uRW1wdHlOb3RpZmljYXRpb25cIikgLy8gb3IgdW5rbm93biBjbGllbnQgc2lkZSBlZmZlY3RcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBsZWF2ZSB0aGUgbG9vcFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYXRjaDtcbiAgICB9O1xuICAgIHJldHVybiBCbGluZENvbW1hbmRCYXRjaGVyO1xufSgpKTtcbmV4cG9ydHMuQmxpbmRDb21tYW5kQmF0Y2hlciA9IEJsaW5kQ29tbWFuZEJhdGNoZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbW1hbmRCYXRjaGVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ29tbWFuZENvbnN0YW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQ29tbWFuZENvbnN0YW50cygpIHtcbiAgICB9XG4gICAgQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCA9ICdkb2xwaGluX3BsYXRmb3JtX2ludGVybl8nO1xuICAgIENvbW1hbmRDb25zdGFudHMuQ1JFQVRFX0NPTlRFWFRfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdpbml0Q2xpZW50Q29udGV4dCc7XG4gICAgQ29tbWFuZENvbnN0YW50cy5ERVNUUk9ZX0NPTlRFWFRfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdkaXNjb25uZWN0Q2xpZW50Q29udGV4dCc7XG4gICAgQ29tbWFuZENvbnN0YW50cy5DUkVBVEVfQ09OVFJPTExFUl9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ3JlZ2lzdGVyQ29udHJvbGxlcic7XG4gICAgQ29tbWFuZENvbnN0YW50cy5ERVNUUk9ZX0NPTlRST0xMRVJfQ09NTUFORF9OQU1FID0gQ29tbWFuZENvbnN0YW50cy5ET0xQSElOX1BMQVRGT1JNX1BSRUZJWCArICdkZXN0cm95Q29udHJvbGxlcic7XG4gICAgQ29tbWFuZENvbnN0YW50cy5DQUxMX0NPTlRST0xMRVJfQUNUSU9OX0NPTU1BTkRfTkFNRSA9IENvbW1hbmRDb25zdGFudHMuRE9MUEhJTl9QTEFURk9STV9QUkVGSVggKyAnY2FsbENvbnRyb2xsZXJBY3Rpb24nO1xuICAgIENvbW1hbmRDb25zdGFudHMuU1RBUlRfTE9OR19QT0xMX0NPTU1BTkRfTkFNRSA9IENvbW1hbmRDb25zdGFudHMuRE9MUEhJTl9QTEFURk9STV9QUkVGSVggKyAnbG9uZ1BvbGwnO1xuICAgIENvbW1hbmRDb25zdGFudHMuSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX05BTUUgPSBDb21tYW5kQ29uc3RhbnRzLkRPTFBISU5fUExBVEZPUk1fUFJFRklYICsgJ3JlbGVhc2UnO1xuICAgIHJldHVybiBDb21tYW5kQ29uc3RhbnRzO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IENvbW1hbmRDb25zdGFudHM7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbW1hbmRDb25zdGFudHMuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vQ29tbWFuZCcpO1xudmFyIENvbW1hbmRDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL0NvbW1hbmRDb25zdGFudHNcIik7XG52YXIgQ3JlYXRlQ29udGV4dENvbW1hbmQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhDcmVhdGVDb250ZXh0Q29tbWFuZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDcmVhdGVDb250ZXh0Q29tbWFuZCgpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaWQgPSBDb21tYW5kQ29uc3RhbnRzXzFbXCJkZWZhdWx0XCJdLkNSRUFURV9DT05URVhUX0NPTU1BTkRfTkFNRTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImNvbS5jYW5vby5kb2xwaGluLmltcGwuY29tbWFuZHMuQ3JlYXRlQ29udGV4dENvbW1hbmRcIjtcbiAgICB9XG4gICAgcmV0dXJuIENyZWF0ZUNvbnRleHRDb21tYW5kO1xufShDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBDcmVhdGVDb250ZXh0Q29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q3JlYXRlQ29udGV4dENvbW1hbmQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vQ29tbWFuZCcpO1xudmFyIENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQocHJlc2VudGF0aW9uTW9kZWwpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICB0aGlzLmNsaWVudFNpZGVPbmx5ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaWQgPSBcIkNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsXCI7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLkNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZFwiO1xuICAgICAgICB0aGlzLnBtSWQgPSBwcmVzZW50YXRpb25Nb2RlbC5pZDtcbiAgICAgICAgdGhpcy5wbVR5cGUgPSBwcmVzZW50YXRpb25Nb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGU7XG4gICAgICAgIHZhciBhdHRycyA9IHRoaXMuYXR0cmlidXRlcztcbiAgICAgICAgcHJlc2VudGF0aW9uTW9kZWwuZ2V0QXR0cmlidXRlcygpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHJzLnB1c2goe1xuICAgICAgICAgICAgICAgIHByb3BlcnR5TmFtZTogYXR0ci5wcm9wZXJ0eU5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IGF0dHIuaWQsXG4gICAgICAgICAgICAgICAgcXVhbGlmaWVyOiBhdHRyLmdldFF1YWxpZmllcigpLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBhdHRyLmdldFZhbHVlKClcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIENyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZDtcbn0oQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1DcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vQ29tbWFuZCcpO1xudmFyIERlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbiA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKERlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbiwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBEZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb24ocG1JZCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5wbUlkID0gcG1JZDtcbiAgICAgICAgdGhpcy5pZCA9ICdEZWxldGVkUHJlc2VudGF0aW9uTW9kZWwnO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5EZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb25cIjtcbiAgICB9XG4gICAgcmV0dXJuIERlbGV0ZWRQcmVzZW50YXRpb25Nb2RlbE5vdGlmaWNhdGlvbjtcbn0oQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRGVsZXRlZFByZXNlbnRhdGlvbk1vZGVsTm90aWZpY2F0aW9uO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1EZWxldGVkUHJlc2VudGF0aW9uTW9kZWxOb3RpZmljYXRpb24uanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vQ29tbWFuZCcpO1xudmFyIENvbW1hbmRDb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL0NvbW1hbmRDb25zdGFudHNcIik7XG52YXIgRGVzdHJveUNvbnRleHRDb21tYW5kID0gKGZ1bmN0aW9uIChfc3VwZXIpIHtcbiAgICBfX2V4dGVuZHMoRGVzdHJveUNvbnRleHRDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIERlc3Ryb3lDb250ZXh0Q29tbWFuZCgpIHtcbiAgICAgICAgX3N1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgIHRoaXMuaWQgPSBDb21tYW5kQ29uc3RhbnRzXzFbXCJkZWZhdWx0XCJdLkRFU1RST1lfQ09OVEVYVF9DT01NQU5EX05BTUU7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJjb20uY2Fub28uZG9scGhpbi5pbXBsLmNvbW1hbmRzLkRlc3Ryb3lDb250ZXh0Q29tbWFuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gRGVzdHJveUNvbnRleHRDb21tYW5kO1xufShDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBEZXN0cm95Q29udGV4dENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURlc3Ryb3lDb250ZXh0Q29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIENsaWVudENvbm5lY3Rvcl8xID0gcmVxdWlyZShcIi4vQ2xpZW50Q29ubmVjdG9yXCIpO1xudmFyIENsaWVudERvbHBoaW5fMSA9IHJlcXVpcmUoXCIuL0NsaWVudERvbHBoaW5cIik7XG52YXIgQ2xpZW50TW9kZWxTdG9yZV8xID0gcmVxdWlyZShcIi4vQ2xpZW50TW9kZWxTdG9yZVwiKTtcbnZhciBIdHRwVHJhbnNtaXR0ZXJfMSA9IHJlcXVpcmUoXCIuL0h0dHBUcmFuc21pdHRlclwiKTtcbnZhciBOb1RyYW5zbWl0dGVyXzEgPSByZXF1aXJlKFwiLi9Ob1RyYW5zbWl0dGVyXCIpO1xudmFyIERvbHBoaW5CdWlsZGVyID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBEb2xwaGluQnVpbGRlcigpIHtcbiAgICAgICAgdGhpcy5yZXNldF8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zbGFja01TXyA9IDMwMDtcbiAgICAgICAgdGhpcy5tYXhCYXRjaFNpemVfID0gNTA7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlNfID0gZmFsc2U7XG4gICAgfVxuICAgIERvbHBoaW5CdWlsZGVyLnByb3RvdHlwZS51cmwgPSBmdW5jdGlvbiAodXJsKSB7XG4gICAgICAgIHRoaXMudXJsXyA9IHVybDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb2xwaGluQnVpbGRlci5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbiAocmVzZXQpIHtcbiAgICAgICAgdGhpcy5yZXNldF8gPSByZXNldDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb2xwaGluQnVpbGRlci5wcm90b3R5cGUuc2xhY2tNUyA9IGZ1bmN0aW9uIChzbGFja01TKSB7XG4gICAgICAgIHRoaXMuc2xhY2tNU18gPSBzbGFja01TO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuICAgIERvbHBoaW5CdWlsZGVyLnByb3RvdHlwZS5tYXhCYXRjaFNpemUgPSBmdW5jdGlvbiAobWF4QmF0Y2hTaXplKSB7XG4gICAgICAgIHRoaXMubWF4QmF0Y2hTaXplXyA9IG1heEJhdGNoU2l6ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb2xwaGluQnVpbGRlci5wcm90b3R5cGUuc3VwcG9ydENPUlMgPSBmdW5jdGlvbiAoc3VwcG9ydENPUlMpIHtcbiAgICAgICAgdGhpcy5zdXBwb3J0Q09SU18gPSBzdXBwb3J0Q09SUztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBEb2xwaGluQnVpbGRlci5wcm90b3R5cGUuZXJyb3JIYW5kbGVyID0gZnVuY3Rpb24gKGVycm9ySGFuZGxlcikge1xuICAgICAgICB0aGlzLmVycm9ySGFuZGxlcl8gPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRG9scGhpbkJ1aWxkZXIucHJvdG90eXBlLmhlYWRlcnNJbmZvID0gZnVuY3Rpb24gKGhlYWRlcnNJbmZvKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyc0luZm9fID0gaGVhZGVyc0luZm87XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG4gICAgRG9scGhpbkJ1aWxkZXIucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk9wZW5Eb2xwaGluIGpzIGZvdW5kXCIpO1xuICAgICAgICB2YXIgY2xpZW50RG9scGhpbiA9IG5ldyBDbGllbnREb2xwaGluXzFbXCJkZWZhdWx0XCJdKCk7XG4gICAgICAgIHZhciB0cmFuc21pdHRlcjtcbiAgICAgICAgaWYgKHRoaXMudXJsXyAhPSBudWxsICYmIHRoaXMudXJsXy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0cmFuc21pdHRlciA9IG5ldyBIdHRwVHJhbnNtaXR0ZXJfMVtcImRlZmF1bHRcIl0odGhpcy51cmxfLCB0aGlzLnJlc2V0XywgXCJVVEYtOFwiLCB0aGlzLmVycm9ySGFuZGxlcl8sIHRoaXMuc3VwcG9ydENPUlNfLCB0aGlzLmhlYWRlcnNJbmZvXyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0cmFuc21pdHRlciA9IG5ldyBOb1RyYW5zbWl0dGVyXzFbXCJkZWZhdWx0XCJdKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2xpZW50RG9scGhpbi5zZXRDbGllbnRDb25uZWN0b3IobmV3IENsaWVudENvbm5lY3Rvcl8xLkNsaWVudENvbm5lY3Rvcih0cmFuc21pdHRlciwgY2xpZW50RG9scGhpbiwgdGhpcy5zbGFja01TXywgdGhpcy5tYXhCYXRjaFNpemVfKSk7XG4gICAgICAgIGNsaWVudERvbHBoaW4uc2V0Q2xpZW50TW9kZWxTdG9yZShuZXcgQ2xpZW50TW9kZWxTdG9yZV8xLkNsaWVudE1vZGVsU3RvcmUoY2xpZW50RG9scGhpbikpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIkNsaWVudERvbHBoaW4gaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIHJldHVybiBjbGllbnREb2xwaGluO1xuICAgIH07XG4gICAgcmV0dXJuIERvbHBoaW5CdWlsZGVyO1xufSgpKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERvbHBoaW5CdWlsZGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Eb2xwaGluQnVpbGRlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIEV2ZW50QnVzID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFdmVudEJ1cygpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0gW107XG4gICAgfVxuICAgIEV2ZW50QnVzLnByb3RvdHlwZS5vbkV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50SGFuZGxlcikge1xuICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaChldmVudEhhbmRsZXIpO1xuICAgIH07XG4gICAgRXZlbnRCdXMucHJvdG90eXBlLnRyaWdnZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZSkgeyByZXR1cm4gaGFuZGxlKGV2ZW50KTsgfSk7XG4gICAgfTtcbiAgICByZXR1cm4gRXZlbnRCdXM7XG59KCkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gRXZlbnRCdXM7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUV2ZW50QnVzLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgQ29kZWNfMSA9IHJlcXVpcmUoXCIuL0NvZGVjXCIpO1xudmFyIEh0dHBUcmFuc21pdHRlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSHR0cFRyYW5zbWl0dGVyKHVybCwgcmVzZXQsIGNoYXJzZXQsIGVycm9ySGFuZGxlciwgc3VwcG9ydENPUlMsIGhlYWRlcnNJbmZvKSB7XG4gICAgICAgIGlmIChyZXNldCA9PT0gdm9pZCAwKSB7IHJlc2V0ID0gdHJ1ZTsgfVxuICAgICAgICBpZiAoY2hhcnNldCA9PT0gdm9pZCAwKSB7IGNoYXJzZXQgPSBcIlVURi04XCI7IH1cbiAgICAgICAgaWYgKGVycm9ySGFuZGxlciA9PT0gdm9pZCAwKSB7IGVycm9ySGFuZGxlciA9IG51bGw7IH1cbiAgICAgICAgaWYgKHN1cHBvcnRDT1JTID09PSB2b2lkIDApIHsgc3VwcG9ydENPUlMgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoaGVhZGVyc0luZm8gPT09IHZvaWQgMCkgeyBoZWFkZXJzSW5mbyA9IG51bGw7IH1cbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY2hhcnNldCA9IGNoYXJzZXQ7XG4gICAgICAgIHRoaXMuSHR0cENvZGVzID0ge1xuICAgICAgICAgICAgZmluaXNoZWQ6IDQsXG4gICAgICAgICAgICBzdWNjZXNzOiAyMDBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lcnJvckhhbmRsZXIgPSBlcnJvckhhbmRsZXI7XG4gICAgICAgIHRoaXMuc3VwcG9ydENPUlMgPSBzdXBwb3J0Q09SUztcbiAgICAgICAgdGhpcy5oZWFkZXJzSW5mbyA9IGhlYWRlcnNJbmZvO1xuICAgICAgICB0aGlzLmh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgdGhpcy5zaWcgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgaWYgKHRoaXMuc3VwcG9ydENPUlMpIHtcbiAgICAgICAgICAgIGlmIChcIndpdGhDcmVkZW50aWFsc1wiIGluIHRoaXMuaHR0cCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC53aXRoQ3JlZGVudGlhbHMgPSB0cnVlOyAvLyBOT1RFOiBkb2luZyB0aGlzIGZvciBub24gQ09SUyByZXF1ZXN0cyBoYXMgbm8gaW1wYWN0XG4gICAgICAgICAgICAgICAgdGhpcy5zaWcud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvZGVjID0gbmV3IENvZGVjXzFbXCJkZWZhdWx0XCJdKCk7XG4gICAgICAgIGlmIChyZXNldCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ0h0dHBUcmFuc21pdHRlci5pbnZhbGlkYXRlKCkgaXMgZGVwcmVjYXRlZC4gVXNlIENsaWVudERvbHBoaW4ucmVzZXQoT25TdWNjZXNzSGFuZGxlcikgaW5zdGVhZCcpO1xuICAgICAgICAgICAgdGhpcy5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgSHR0cFRyYW5zbWl0dGVyLnByb3RvdHlwZS50cmFuc21pdCA9IGZ1bmN0aW9uIChjb21tYW5kcywgb25Eb25lKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHRoaXMuaHR0cC5vbmVycm9yID0gZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoJ29uZXJyb3InLCBcIlwiKTtcbiAgICAgICAgICAgIG9uRG9uZShbXSk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHR0cC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoX3RoaXMuaHR0cC5yZWFkeVN0YXRlID09IF90aGlzLkh0dHBDb2Rlcy5maW5pc2hlZCkge1xuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5odHRwLnN0YXR1cyA9PSBfdGhpcy5IdHRwQ29kZXMuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uc2VUZXh0ID0gX3RoaXMuaHR0cC5yZXNwb25zZVRleHQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZVRleHQudHJpbSgpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3BvbnNlQ29tbWFuZHMgPSBfdGhpcy5jb2RlYy5kZWNvZGUocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUocmVzcG9uc2VDb21tYW5kcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvY2N1cnJlZCBwYXJzaW5nIHJlc3BvbnNlVGV4dDogXCIsIGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJJbmNvcnJlY3QgcmVzcG9uc2VUZXh0OiBcIiwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogSW5jb3JyZWN0IHJlc3BvbnNlVGV4dDogXCIgKyByZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRG9uZShbXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5oYW5kbGVFcnJvcignYXBwbGljYXRpb24nLCBcIkh0dHBUcmFuc21pdHRlcjogZW1wdHkgcmVzcG9uc2VUZXh0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlRXJyb3IoJ2FwcGxpY2F0aW9uJywgXCJIdHRwVHJhbnNtaXR0ZXI6IEhUVFAgU3RhdHVzICE9IDIwMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaHR0cC5vcGVuKCdQT1NUJywgdGhpcy51cmwsIHRydWUpO1xuICAgICAgICB0aGlzLnNldEhlYWRlcnModGhpcy5odHRwKTtcbiAgICAgICAgaWYgKFwib3ZlcnJpZGVNaW1lVHlwZVwiIGluIHRoaXMuaHR0cCkge1xuICAgICAgICAgICAgdGhpcy5odHRwLm92ZXJyaWRlTWltZVR5cGUoXCJhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVwiICsgdGhpcy5jaGFyc2V0KTsgLy8gdG9kbyBtYWtlIGluamVjdGFibGVcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmh0dHAuc2VuZCh0aGlzLmNvZGVjLmVuY29kZShjb21tYW5kcykpO1xuICAgIH07XG4gICAgSHR0cFRyYW5zbWl0dGVyLnByb3RvdHlwZS5zZXRIZWFkZXJzID0gZnVuY3Rpb24gKGh0dHBSZXEpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVhZGVyc0luZm8pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5oZWFkZXJzSW5mbykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhlYWRlcnNJbmZvLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGh0dHBSZXEuc2V0UmVxdWVzdEhlYWRlcihpLCB0aGlzLmhlYWRlcnNJbmZvW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIEh0dHBUcmFuc21pdHRlci5wcm90b3R5cGUuaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiAoa2luZCwgbWVzc2FnZSkge1xuICAgICAgICB2YXIgZXJyb3JFdmVudCA9IHsga2luZDoga2luZCwgdXJsOiB0aGlzLnVybCwgaHR0cFN0YXR1czogdGhpcy5odHRwLnN0YXR1cywgbWVzc2FnZTogbWVzc2FnZSB9O1xuICAgICAgICBpZiAodGhpcy5lcnJvckhhbmRsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZXJyb3JIYW5kbGVyKGVycm9yRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBvY2N1cnJlZDogXCIsIGVycm9yRXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBIdHRwVHJhbnNtaXR0ZXIucHJvdG90eXBlLnNpZ25hbCA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICAgIHRoaXMuc2lnLm9wZW4oJ1BPU1QnLCB0aGlzLnVybCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0SGVhZGVycyh0aGlzLnNpZyk7XG4gICAgICAgIHRoaXMuc2lnLnNlbmQodGhpcy5jb2RlYy5lbmNvZGUoW2NvbW1hbmRdKSk7XG4gICAgfTtcbiAgICAvLyBEZXByZWNhdGVkICEgVXNlICdyZXNldChPblN1Y2Nlc3NIYW5kbGVyKSBpbnN0ZWFkXG4gICAgSHR0cFRyYW5zbWl0dGVyLnByb3RvdHlwZS5pbnZhbGlkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLmh0dHAub3BlbignUE9TVCcsIHRoaXMudXJsICsgJ2ludmFsaWRhdGU/JywgZmFsc2UpO1xuICAgICAgICB0aGlzLmh0dHAuc2VuZCgpO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBUcmFuc21pdHRlcjtcbn0oKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBIdHRwVHJhbnNtaXR0ZXI7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUh0dHBUcmFuc21pdHRlci5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgU2lnbmFsQ29tbWFuZF8xID0gcmVxdWlyZShcIi4vU2lnbmFsQ29tbWFuZFwiKTtcbnZhciBDb21tYW5kQ29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9Db21tYW5kQ29uc3RhbnRzXCIpO1xudmFyIEludGVycnVwdExvbmdQb2xsQ29tbWFuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEludGVycnVwdExvbmdQb2xsQ29tbWFuZCwgX3N1cGVyKTtcbiAgICBmdW5jdGlvbiBJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQoKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMsIENvbW1hbmRDb25zdGFudHNfMVtcImRlZmF1bHRcIl0uSU5URVJSVVBUX0xPTkdfUE9MTF9DT01NQU5EX05BTUUpO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9IFwiY29tLmNhbm9vLmRvbHBoaW4uaW1wbC5jb21tYW5kcy5JbnRlcnJ1cHRMb25nUG9sbENvbW1hbmRcIjtcbiAgICB9XG4gICAgcmV0dXJuIEludGVycnVwdExvbmdQb2xsQ29tbWFuZDtcbn0oU2lnbmFsQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1JbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qKlxuICogQSB0cmFuc21pdHRlciB0aGF0IGlzIG5vdCB0cmFuc21pdHRpbmcgYXQgYWxsLlxuICogSXQgbWF5IHNlcnZlIGFzIGEgc3RhbmQtaW4gd2hlbiBubyByZWFsIHRyYW5zbWl0dGVyIGlzIG5lZWRlZC5cbiAqL1xudmFyIE5vVHJhbnNtaXR0ZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIE5vVHJhbnNtaXR0ZXIoKSB7XG4gICAgfVxuICAgIE5vVHJhbnNtaXR0ZXIucHJvdG90eXBlLnRyYW5zbWl0ID0gZnVuY3Rpb24gKGNvbW1hbmRzLCBvbkRvbmUpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZyBzcGVjaWFsXG4gICAgICAgIG9uRG9uZShbXSk7XG4gICAgfTtcbiAgICBOb1RyYW5zbWl0dGVyLnByb3RvdHlwZS5zaWduYWwgPSBmdW5jdGlvbiAoY29tbWFuZCkge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfTtcbiAgICBOb1RyYW5zbWl0dGVyLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uIChzdWNjZXNzSGFuZGxlcikge1xuICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgfTtcbiAgICByZXR1cm4gTm9UcmFuc21pdHRlcjtcbn0oKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBOb1RyYW5zbWl0dGVyO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1Ob1RyYW5zbWl0dGVyLmpzLm1hcFxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgRG9scGhpbkJ1aWxkZXJfMSA9IHJlcXVpcmUoXCIuL0RvbHBoaW5CdWlsZGVyXCIpO1xudmFyIENyZWF0ZUNvbnRleHRDb21tYW5kXzEgPSByZXF1aXJlKFwiLi9DcmVhdGVDb250ZXh0Q29tbWFuZFwiKTtcbnZhciBEZXN0cm95Q29udGV4dENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL0Rlc3Ryb3lDb250ZXh0Q29tbWFuZFwiKTtcbnZhciBJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmRfMSA9IHJlcXVpcmUoXCIuL0ludGVycnVwdExvbmdQb2xsQ29tbWFuZFwiKTtcbnZhciBTdGFydExvbmdQb2xsQ29tbWFuZF8xID0gcmVxdWlyZShcIi4vU3RhcnRMb25nUG9sbENvbW1hbmRcIik7XG4vKipcbiAqIEpTLWZyaWVuZGx5IGZhY2FkZSB0byBhdm9pZCB0b28gbWFueSBkZXBlbmRlbmNpZXMgaW4gcGxhaW4gSlMgY29kZS5cbiAqIFRoZSBuYW1lIG9mIHRoaXMgZmlsZSBpcyBhbHNvIHVzZWQgZm9yIHRoZSBpbml0aWFsIGxvb2t1cCBvZiB0aGVcbiAqIG9uZSBqYXZhc2NyaXB0IGZpbGUgdGhhdCBjb250YWlucyBhbGwgdGhlIGRvbHBoaW4gY29kZS5cbiAqIENoYW5naW5nIHRoZSBuYW1lIHJlcXVpcmVzIHRoZSBidWlsZCBzdXBwb3J0IGFuZCBhbGwgdXNlcnNcbiAqIHRvIGJlIHVwZGF0ZWQgYXMgd2VsbC5cbiAqIERpZXJrIEtvZW5pZ1xuICovXG4vLyBmYWN0b3J5IG1ldGhvZCBmb3IgdGhlIGluaXRpYWxpemVkIGRvbHBoaW5cbi8vIERlcHJlY2F0ZWQgISBVc2UgJ21ha2VEb2xwaGluKCkgaW5zdGVhZFxuZnVuY3Rpb24gZG9scGhpbih1cmwsIHJlc2V0LCBzbGFja01TKSB7XG4gICAgaWYgKHNsYWNrTVMgPT09IHZvaWQgMCkgeyBzbGFja01TID0gMzAwOyB9XG4gICAgcmV0dXJuIG1ha2VEb2xwaGluKCkudXJsKHVybCkucmVzZXQocmVzZXQpLnNsYWNrTVMoc2xhY2tNUykuYnVpbGQoKTtcbn1cbmV4cG9ydHMuZG9scGhpbiA9IGRvbHBoaW47XG4vLyBmYWN0b3J5IG1ldGhvZCB0byBidWlsZCBhbiBpbml0aWFsaXplZCBkb2xwaGluXG5mdW5jdGlvbiBtYWtlRG9scGhpbigpIHtcbiAgICByZXR1cm4gbmV3IERvbHBoaW5CdWlsZGVyXzFbXCJkZWZhdWx0XCJdKCk7XG59XG5leHBvcnRzLm1ha2VEb2xwaGluID0gbWFrZURvbHBoaW47XG4vL0ZhY3RvcnkgbWV0aG9kcyB0byBoYXZlIGEgYmV0dGVyIGludGVncmF0aW9uIG9mIHRzIHNvdXJjZXMgaW4gSlMgJiBlczZcbmZ1bmN0aW9uIGNyZWF0ZUNyZWF0ZUNvbnRleHRDb21tYW5kKCkge1xuICAgIHJldHVybiBuZXcgQ3JlYXRlQ29udGV4dENvbW1hbmRfMVtcImRlZmF1bHRcIl0oKTtcbn1cbmV4cG9ydHMuY3JlYXRlQ3JlYXRlQ29udGV4dENvbW1hbmQgPSBjcmVhdGVDcmVhdGVDb250ZXh0Q29tbWFuZDtcbmZ1bmN0aW9uIGNyZWF0ZURlc3Ryb3lDb250ZXh0Q29tbWFuZCgpIHtcbiAgICByZXR1cm4gbmV3IERlc3Ryb3lDb250ZXh0Q29tbWFuZF8xW1wiZGVmYXVsdFwiXSgpO1xufVxuZXhwb3J0cy5jcmVhdGVEZXN0cm95Q29udGV4dENvbW1hbmQgPSBjcmVhdGVEZXN0cm95Q29udGV4dENvbW1hbmQ7XG5mdW5jdGlvbiBjcmVhdGVJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmQoKSB7XG4gICAgcmV0dXJuIG5ldyBJbnRlcnJ1cHRMb25nUG9sbENvbW1hbmRfMVtcImRlZmF1bHRcIl0oKTtcbn1cbmV4cG9ydHMuY3JlYXRlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kID0gY3JlYXRlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kO1xuZnVuY3Rpb24gY3JlYXRlU3RhcnRMb25nUG9sbENvbW1hbmQoKSB7XG4gICAgcmV0dXJuIG5ldyBTdGFydExvbmdQb2xsQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSgpO1xufVxuZXhwb3J0cy5jcmVhdGVTdGFydExvbmdQb2xsQ29tbWFuZCA9IGNyZWF0ZVN0YXJ0TG9uZ1BvbGxDb21tYW5kO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1PcGVuRG9scGhpbi5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgU2lnbmFsQ29tbWFuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFNpZ25hbENvbW1hbmQsIF9zdXBlcik7XG4gICAgZnVuY3Rpb24gU2lnbmFsQ29tbWFuZChuYW1lKSB7XG4gICAgICAgIF9zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICB0aGlzLmlkID0gbmFtZTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcIm9yZy5vcGVuZG9scGhpbi5jb3JlLmNvbW0uU2lnbmFsQ29tbWFuZFwiO1xuICAgIH1cbiAgICByZXR1cm4gU2lnbmFsQ29tbWFuZDtcbn0oQ29tbWFuZF8xW1wiZGVmYXVsdFwiXSkpO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gU2lnbmFsQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2lnbmFsQ29tbWFuZC5qcy5tYXBcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZXh0ZW5kcyA9ICh0aGlzICYmIHRoaXMuX19leHRlbmRzKSB8fCBmdW5jdGlvbiAoZCwgYikge1xuICAgIGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdO1xuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcbn07XG52YXIgQ29tbWFuZF8xID0gcmVxdWlyZSgnLi9Db21tYW5kJyk7XG52YXIgQ29tbWFuZENvbnN0YW50c18xID0gcmVxdWlyZShcIi4vQ29tbWFuZENvbnN0YW50c1wiKTtcbnZhciBTdGFydExvbmdQb2xsQ29tbWFuZCA9IChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKFN0YXJ0TG9uZ1BvbGxDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFN0YXJ0TG9uZ1BvbGxDb21tYW5kKCkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5pZCA9IENvbW1hbmRDb25zdGFudHNfMVtcImRlZmF1bHRcIl0uU1RBUlRfTE9OR19QT0xMX0NPTU1BTkRfTkFNRTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcImNvbS5jYW5vby5kb2xwaGluLmltcGwuY29tbWFuZHMuU3RhcnRMb25nUG9sbENvbW1hbmRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFN0YXJ0TG9uZ1BvbGxDb21tYW5kO1xufShDb21tYW5kXzFbXCJkZWZhdWx0XCJdKSk7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBTdGFydExvbmdQb2xsQ29tbWFuZDtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U3RhcnRMb25nUG9sbENvbW1hbmQuanMubWFwXG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2V4dGVuZHMgPSAodGhpcyAmJiB0aGlzLl9fZXh0ZW5kcykgfHwgZnVuY3Rpb24gKGQsIGIpIHtcbiAgICBmb3IgKHZhciBwIGluIGIpIGlmIChiLmhhc093blByb3BlcnR5KHApKSBkW3BdID0gYltwXTtcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cbiAgICBkLnByb3RvdHlwZSA9IGIgPT09IG51bGwgPyBPYmplY3QuY3JlYXRlKGIpIDogKF9fLnByb3RvdHlwZSA9IGIucHJvdG90eXBlLCBuZXcgX18oKSk7XG59O1xudmFyIENvbW1hbmRfMSA9IHJlcXVpcmUoJy4vQ29tbWFuZCcpO1xudmFyIFZhbHVlQ2hhbmdlZENvbW1hbmQgPSAoZnVuY3Rpb24gKF9zdXBlcikge1xuICAgIF9fZXh0ZW5kcyhWYWx1ZUNoYW5nZWRDb21tYW5kLCBfc3VwZXIpO1xuICAgIGZ1bmN0aW9uIFZhbHVlQ2hhbmdlZENvbW1hbmQoYXR0cmlidXRlSWQsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICBfc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRyaWJ1dGVJZCA9IGF0dHJpYnV0ZUlkO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5pZCA9IFwiVmFsdWVDaGFuZ2VkXCI7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLlZhbHVlQ2hhbmdlZENvbW1hbmRcIjtcbiAgICB9XG4gICAgcmV0dXJuIFZhbHVlQ2hhbmdlZENvbW1hbmQ7XG59KENvbW1hbmRfMVtcImRlZmF1bHRcIl0pKTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFZhbHVlQ2hhbmdlZENvbW1hbmQ7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVZhbHVlQ2hhbmdlZENvbW1hbmQuanMubWFwXG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgIE1hcCBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9tYXAnO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCZWFuTWFuYWdlciB7XG4gICAgY29uc3RydWN0b3IoY2xhc3NSZXBvc2l0b3J5KSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlcihjbGFzc1JlcG9zaXRvcnkpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY2xhc3NSZXBvc2l0b3J5LCAnY2xhc3NSZXBvc2l0b3J5Jyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkgPSBjbGFzc1JlcG9zaXRvcnk7XG4gICAgICAgIHRoaXMuYWRkZWRIYW5kbGVycyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVkSGFuZGxlcnMgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudXBkYXRlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFycmF5VXBkYXRlZEhhbmRsZXJzID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmFsbEFkZGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxSZW1vdmVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxVcGRhdGVkSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycyA9IFtdO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkub25CZWFuQWRkZWQoKHR5cGUsIGJlYW4pID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYuYWRkZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuQWRkZWQtaGFuZGxlciBmb3IgdHlwZScsIHR5cGUsIGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFsbEFkZGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGEgZ2VuZXJhbCBvbkJlYW5BZGRlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5SZW1vdmVkKCh0eXBlLCBiZWFuKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLnJlbW92ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbik7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25CZWFuUmVtb3ZlZC1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhIGdlbmVyYWwgb25CZWFuUmVtb3ZlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkJlYW5VcGRhdGUoKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKSA9PiB7XG4gICAgICAgICAgICBsZXQgaGFuZGxlckxpc3QgPSBzZWxmLnVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0LmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblVwZGF0ZS1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsVXBkYXRlZEhhbmRsZXJzLmZvckVhY2goKGhhbmRsZXIpID0+IHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQmVhblVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5vbkFycmF5VXBkYXRlKCh0eXBlLCBiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgbmV3RWxlbWVudHMpID0+IHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyTGlzdCA9IHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyTGlzdC5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYW4gb25BcnJheVVwZGF0ZS1oYW5kbGVyIGZvciB0eXBlJywgdHlwZSwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIG5ld0VsZW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignQW4gZXhjZXB0aW9uIG9jY3VycmVkIHdoaWxlIGNhbGxpbmcgYSBnZW5lcmFsIG9uQXJyYXlVcGRhdGUtaGFuZGxlcicsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgfVxuXG5cbiAgICBub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzUmVwb3NpdG9yeS5ub3RpZnlCZWFuQ2hhbmdlKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUpO1xuICAgIH1cblxuXG4gICAgbm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cykge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuICAgICAgICBjaGVja1BhcmFtKGluZGV4LCAnaW5kZXgnKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb3VudCwgJ2NvdW50Jyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocmVtb3ZlZEVsZW1lbnRzLCAncmVtb3ZlZEVsZW1lbnRzJyk7XG5cbiAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyk7XG4gICAgfVxuXG5cbiAgICBpc01hbmFnZWQoYmVhbikge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIuaXNNYW5hZ2VkKGJlYW4pJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5pc01hbmFnZWQoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIGNyZWF0ZSh0eXBlKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5jcmVhdGUodHlwZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLmNyZWF0ZSgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgYWRkKHR5cGUsIGJlYW4pIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLmFkZCh0eXBlLCBiZWFuKScpO1xuICAgICAgICBjaGVja1BhcmFtKHR5cGUsICd0eXBlJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5hZGQoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIGFkZEFsbCh0eXBlLCBjb2xsZWN0aW9uKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5hZGRBbGwodHlwZSwgY29sbGVjdGlvbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbGxlY3Rpb24sICdjb2xsZWN0aW9uJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4uYWRkQWxsKCkgW0RQLTddXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbXBsZW1lbnRlZCB5ZXRcIik7XG4gICAgfVxuXG5cbiAgICByZW1vdmUoYmVhbikge1xuICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIucmVtb3ZlKGJlYW4pJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbiwgJ2JlYW4nKTtcblxuICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgZG9scGhpbi5yZW1vdmUoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIHJlbW92ZUFsbChjb2xsZWN0aW9uKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5yZW1vdmVBbGwoY29sbGVjdGlvbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb2xsZWN0aW9uLCAnY29sbGVjdGlvbicpO1xuXG4gICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBkb2xwaGluLnJlbW92ZUFsbCgpIFtEUC03XVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW1wbGVtZW50ZWQgeWV0XCIpO1xuICAgIH1cblxuXG4gICAgcmVtb3ZlSWYocHJlZGljYXRlKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5yZW1vdmVJZihwcmVkaWNhdGUpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocHJlZGljYXRlLCAncHJlZGljYXRlJyk7XG5cbiAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGRvbHBoaW4ucmVtb3ZlSWYoKSBbRFAtN11cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGltcGxlbWVudGVkIHlldFwiKTtcbiAgICB9XG5cblxuICAgIG9uQWRkZWQodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkFkZGVkKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsQWRkZWRIYW5kbGVycyA9IHNlbGYuYWxsQWRkZWRIYW5kbGVycy5jb25jYXQoZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5hbGxBZGRlZEhhbmRsZXJzID0gc2VsZi5hbGxBZGRlZEhhbmRsZXJzLmZpbHRlcigodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hlY2tNZXRob2QoJ0JlYW5NYW5hZ2VyLm9uQWRkZWQodHlwZSwgZXZlbnRIYW5kbGVyKScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbSh0eXBlLCAndHlwZScpO1xuICAgICAgICAgICAgY2hlY2tQYXJhbShldmVudEhhbmRsZXIsICdldmVudEhhbmRsZXInKTtcblxuICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLmFkZGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmNvbmNhdChldmVudEhhbmRsZXIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hZGRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhoYW5kbGVyTGlzdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYWRkZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25SZW1vdmVkKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghZXhpc3RzKGV2ZW50SGFuZGxlcikpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHR5cGU7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25SZW1vdmVkKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzID0gc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsUmVtb3ZlZEhhbmRsZXJzID0gc2VsZi5hbGxSZW1vdmVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25SZW1vdmVkKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYucmVtb3ZlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnJlbW92ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLnJlbW92ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJlbW92ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgb25CZWFuVXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlcikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICghZXhpc3RzKGV2ZW50SGFuZGxlcikpIHtcbiAgICAgICAgICAgIGV2ZW50SGFuZGxlciA9IHR5cGU7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsVXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuY29uY2F0KGV2ZW50SGFuZGxlcik7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWxsVXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxVcGRhdGVkSGFuZGxlcnMuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjaGVja01ldGhvZCgnQmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYudXBkYXRlZEhhbmRsZXJzLmdldCh0eXBlKTtcbiAgICAgICAgICAgIGlmICghZXhpc3RzKGhhbmRsZXJMaXN0KSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJMaXN0ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuY29uY2F0KGV2ZW50SGFuZGxlcikpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlckxpc3QgPSBzZWxmLnVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVwZGF0ZWRIYW5kbGVycy5zZXQodHlwZSwgaGFuZGxlckxpc3QuZmlsdGVyKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAhPT0gZXZlbnRIYW5kbGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQXJyYXlVcGRhdGUodHlwZSwgZXZlbnRIYW5kbGVyKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKCFleGlzdHMoZXZlbnRIYW5kbGVyKSkge1xuICAgICAgICAgICAgZXZlbnRIYW5kbGVyID0gdHlwZTtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHNlbGYuYWxsQXJyYXlVcGRhdGVkSGFuZGxlcnMgPSBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzLmNvbmNhdChldmVudEhhbmRsZXIpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmFsbEFycmF5VXBkYXRlZEhhbmRsZXJzID0gc2VsZi5hbGxBcnJheVVwZGF0ZWRIYW5kbGVycy5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IGV2ZW50SGFuZGxlcjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoZWNrTWV0aG9kKCdCZWFuTWFuYWdlci5vbkFycmF5VXBkYXRlKHR5cGUsIGV2ZW50SGFuZGxlciknKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0odHlwZSwgJ3R5cGUnKTtcbiAgICAgICAgICAgIGNoZWNrUGFyYW0oZXZlbnRIYW5kbGVyLCAnZXZlbnRIYW5kbGVyJyk7XG5cbiAgICAgICAgICAgIHZhciBoYW5kbGVyTGlzdCA9IHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuZ2V0KHR5cGUpO1xuICAgICAgICAgICAgaWYgKCFleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlckxpc3QgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNlbGYuYXJyYXlVcGRhdGVkSGFuZGxlcnMuc2V0KHR5cGUsIGhhbmRsZXJMaXN0LmNvbmNhdChldmVudEhhbmRsZXIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhhbmRsZXJMaXN0ID0gc2VsZi5hcnJheVVwZGF0ZWRIYW5kbGVycy5nZXQodHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoaGFuZGxlckxpc3QpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFycmF5VXBkYXRlZEhhbmRsZXJzLnNldCh0eXBlLCBoYW5kbGVyTGlzdC5maWx0ZXIoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBldmVudEhhbmRsZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyogQ29weXJpZ2h0IDIwMTUgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qanNsaW50IGJyb3dzZXJpZnk6IHRydWUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgIE1hcCBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9tYXAnO1xuaW1wb3J0ICogYXMgY29uc3RzIGZyb20gJy4vY29uc3RhbnRzJztcblxuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG52YXIgYmxvY2tlZCA9IG51bGw7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsYXNzUmVwb3NpdG9yeSB7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2xwaGluKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkoZG9scGhpbiknKTtcbiAgICAgICAgY2hlY2tQYXJhbShkb2xwaGluLCAnZG9scGhpbicpO1xuXG4gICAgICAgIHRoaXMuZG9scGhpbiA9IGRvbHBoaW47XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5iZWFuRnJvbURvbHBoaW4gPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuYmVhblRvRG9scGhpbiA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmJlYW5BZGRlZEhhbmRsZXJzID0gW107XG4gICAgICAgIHRoaXMuYmVhblJlbW92ZWRIYW5kbGVycyA9IFtdO1xuICAgICAgICB0aGlzLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5hcnJheVVwZGF0ZUhhbmRsZXJzID0gW107XG4gICAgfVxuXG4gICAgZml4VHlwZSh0eXBlLCB2YWx1ZSkge1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkJZVEU6XG4gICAgICAgICAgICBjYXNlIGNvbnN0cy5TSE9SVDpcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLklOVDpcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkxPTkc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkZMT0FUOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuRE9VQkxFOlxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkJPT0xFQU46XG4gICAgICAgICAgICAgICAgcmV0dXJuICd0cnVlJyA9PT0gU3RyaW5nKHZhbHVlKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuU1RSSU5HOlxuICAgICAgICAgICAgY2FzZSBjb25zdHMuRU5VTTpcbiAgICAgICAgICAgICAgICByZXR1cm4gU3RyaW5nKHZhbHVlKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnJvbURvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWV4aXN0cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuRE9MUEhJTl9CRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc1JlcG9zaXRvcnkuYmVhbkZyb21Eb2xwaGluLmdldChTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkRBVEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQ0FMRU5EQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkxPQ0FMX0RBVEVfVElNRV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLlpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZml4VHlwZSh0eXBlLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0RvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCB2YWx1ZSkge1xuICAgICAgICBpZiAoIWV4aXN0cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuRE9MUEhJTl9CRUFOOlxuICAgICAgICAgICAgICAgIHJldHVybiBjbGFzc1JlcG9zaXRvcnkuYmVhblRvRG9scGhpbi5nZXQodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuREFURTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuQ0FMRU5EQVI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLkxPQ0FMX0RBVEVfRklFTERfVFlQRTpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBEYXRlID8gdmFsdWUudG9JU09TdHJpbmcoKSA6IHZhbHVlO1xuICAgICAgICAgICAgY2FzZSBjb25zdHMuTE9DQUxfREFURV9USU1FX0ZJRUxEX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlLnRvSVNPU3RyaW5nKCkgOiB2YWx1ZTtcbiAgICAgICAgICAgIGNhc2UgY29uc3RzLlpPTkVEX0RBVEVfVElNRV9GSUVMRF9UWVBFOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyB2YWx1ZS50b0lTT1N0cmluZygpIDogdmFsdWU7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpeFR5cGUodHlwZSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2VuZExpc3RTcGxpY2UoY2xhc3NSZXBvc2l0b3J5LCBtb2RlbElkLCBwcm9wZXJ0eU5hbWUsIGZyb20sIHRvLCBuZXdFbGVtZW50cykge1xuICAgICAgICBsZXQgZG9scGhpbiA9IGNsYXNzUmVwb3NpdG9yeS5kb2xwaGluO1xuICAgICAgICBsZXQgbW9kZWwgPSBkb2xwaGluLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQobW9kZWxJZCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGV4aXN0cyhtb2RlbCkpIHtcbiAgICAgICAgICAgIGxldCBjbGFzc0luZm8gPSBjbGFzc1JlcG9zaXRvcnkuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgICAgIGxldCB0eXBlID0gY2xhc3NJbmZvW3Byb3BlcnR5TmFtZV07XG4gICAgICAgICAgICBpZiAoZXhpc3RzKHR5cGUpKSB7XG5cbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlcyA9IFtcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ0BAQCBTT1VSQ0VfU1lTVEVNIEBAQCcsIG51bGwsICdjbGllbnQnKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ3NvdXJjZScsIG51bGwsIG1vZGVsSWQpLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnYXR0cmlidXRlJywgbnVsbCwgcHJvcGVydHlOYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ2Zyb20nLCBudWxsLCBmcm9tKSxcbiAgICAgICAgICAgICAgICAgICAgZG9scGhpbi5hdHRyaWJ1dGUoJ3RvJywgbnVsbCwgdG8pLFxuICAgICAgICAgICAgICAgICAgICBkb2xwaGluLmF0dHJpYnV0ZSgnY291bnQnLCBudWxsLCBuZXdFbGVtZW50cy5sZW5ndGgpXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBuZXdFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50LCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzLnB1c2goZG9scGhpbi5hdHRyaWJ1dGUoaW5kZXgudG9TdHJpbmcoKSwgbnVsbCwgc2VsZi50b0RvbHBoaW4oY2xhc3NSZXBvc2l0b3J5LCB0eXBlLCBlbGVtZW50KSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGRvbHBoaW4ucHJlc2VudGF0aW9uTW9kZWwuYXBwbHkoZG9scGhpbiwgW251bGwsICdARFA6TFNAJ10uY29uY2F0KGF0dHJpYnV0ZXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlTGlzdChjbGFzc1JlcG9zaXRvcnksIHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICBsZXQgbGlzdCA9IGJlYW5bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKCFleGlzdHMobGlzdCkpIHtcbiAgICAgICAgICAgIGNsYXNzUmVwb3NpdG9yeS5wcm9wZXJ0eVVwZGF0ZUhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKHR5cGUsIGJlYW4sIHByb3BlcnR5TmFtZSwgW10sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBibG9jayhiZWFuLCBwcm9wZXJ0eU5hbWUpIHtcbiAgICAgICAgaWYgKGV4aXN0cyhibG9ja2VkKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gY3JlYXRlIGEgYmxvY2sgd2hpbGUgYW5vdGhlciBibG9jayBleGlzdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBibG9ja2VkID0ge1xuICAgICAgICAgICAgYmVhbjogYmVhbixcbiAgICAgICAgICAgIHByb3BlcnR5TmFtZTogcHJvcGVydHlOYW1lXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgaXNCbG9ja2VkKGJlYW4sIHByb3BlcnR5TmFtZSkge1xuICAgICAgICByZXR1cm4gZXhpc3RzKGJsb2NrZWQpICYmIGJsb2NrZWQuYmVhbiA9PT0gYmVhbiAmJiBibG9ja2VkLnByb3BlcnR5TmFtZSA9PT0gcHJvcGVydHlOYW1lO1xuICAgIH1cblxuICAgIHVuYmxvY2soKSB7XG4gICAgICAgIGJsb2NrZWQgPSBudWxsO1xuICAgIH1cblxuICAgIG5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5Lm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBuZXdWYWx1ZSknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuXG4gICAgICAgIGxldCBtb2RlbElkID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChiZWFuKTtcbiAgICAgICAgaWYgKGV4aXN0cyhtb2RlbElkKSkge1xuICAgICAgICAgICAgbGV0IG1vZGVsID0gdGhpcy5kb2xwaGluLmZpbmRQcmVzZW50YXRpb25Nb2RlbEJ5SWQobW9kZWxJZCk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKG1vZGVsKSkge1xuICAgICAgICAgICAgICAgIGxldCBjbGFzc0luZm8gPSB0aGlzLmNsYXNzZXMuZ2V0KG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSk7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBjbGFzc0luZm9bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0cmlidXRlID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cyh0eXBlKSAmJiBleGlzdHMoYXR0cmlidXRlKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBhdHRyaWJ1dGUuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlLnNldFZhbHVlKHRoaXMudG9Eb2xwaGluKHRoaXMsIHR5cGUsIG5ld1ZhbHVlKSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZyb21Eb2xwaGluKHRoaXMsIHR5cGUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnlBcnJheUNoYW5nZShiZWFuLCBwcm9wZXJ0eU5hbWUsIGluZGV4LCBjb3VudCwgcmVtb3ZlZEVsZW1lbnRzKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkubm90aWZ5QXJyYXlDaGFuZ2UoYmVhbiwgcHJvcGVydHlOYW1lLCBpbmRleCwgY291bnQsIHJlbW92ZWRFbGVtZW50cyknKTtcbiAgICAgICAgY2hlY2tQYXJhbShiZWFuLCAnYmVhbicpO1xuICAgICAgICBjaGVja1BhcmFtKHByb3BlcnR5TmFtZSwgJ3Byb3BlcnR5TmFtZScpO1xuICAgICAgICBjaGVja1BhcmFtKGluZGV4LCAnaW5kZXgnKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb3VudCwgJ2NvdW50Jyk7XG4gICAgICAgIGNoZWNrUGFyYW0ocmVtb3ZlZEVsZW1lbnRzLCAncmVtb3ZlZEVsZW1lbnRzJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNCbG9ja2VkKGJlYW4sIHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kZWxJZCA9IHRoaXMuYmVhblRvRG9scGhpbi5nZXQoYmVhbik7XG4gICAgICAgIGxldCBhcnJheSA9IGJlYW5bcHJvcGVydHlOYW1lXTtcbiAgICAgICAgaWYgKGV4aXN0cyhtb2RlbElkKSAmJiBleGlzdHMoYXJyYXkpKSB7XG4gICAgICAgICAgICBsZXQgcmVtb3ZlZEVsZW1lbnRzQ291bnQgPSBBcnJheS5pc0FycmF5KHJlbW92ZWRFbGVtZW50cykgPyByZW1vdmVkRWxlbWVudHMubGVuZ3RoIDogMDtcbiAgICAgICAgICAgIHRoaXMuc2VuZExpc3RTcGxpY2UodGhpcywgbW9kZWxJZCwgcHJvcGVydHlOYW1lLCBpbmRleCwgaW5kZXggKyByZW1vdmVkRWxlbWVudHNDb3VudCwgYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgY291bnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQmVhbkFkZGVkKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5BZGRlZChoYW5kbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGhhbmRsZXIsICdoYW5kbGVyJyk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkJlYW5SZW1vdmVkKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5SZW1vdmVkKGhhbmRsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5iZWFuUmVtb3ZlZEhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgb25CZWFuVXBkYXRlKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkJlYW5VcGRhdGUoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuICAgICAgICB0aGlzLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICBvbkFycmF5VXBkYXRlKGhhbmRsZXIpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5vbkFycmF5VXBkYXRlKGhhbmRsZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oaGFuZGxlciwgJ2hhbmRsZXInKTtcbiAgICAgICAgdGhpcy5hcnJheVVwZGF0ZUhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDbGFzcyhtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LnJlZ2lzdGVyQ2xhc3MobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGlmICh0aGlzLmNsYXNzZXMuaGFzKG1vZGVsLmlkKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGNsYXNzSW5mbyA9IHt9O1xuICAgICAgICBtb2RlbC5hdHRyaWJ1dGVzLmZpbHRlcihmdW5jdGlvbiAoYXR0cmlidXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0cmlidXRlLnByb3BlcnR5TmFtZS5zZWFyY2goL15ALykgPCAwO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSA9IGF0dHJpYnV0ZS52YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3Nlcy5zZXQobW9kZWwuaWQsIGNsYXNzSW5mbyk7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckNsYXNzKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGFzc1JlcG9zaXRvcnkudW5yZWdpc3RlckNsYXNzKG1vZGVsKScpO1xuICAgICAgICBjaGVja1BhcmFtKG1vZGVsLCAnbW9kZWwnKTtcbiAgICAgICAgdGhpcy5jbGFzc2VzWydkZWxldGUnXShtb2RlbC5pZCk7XG4gICAgfVxuXG4gICAgbG9hZChtb2RlbCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xhc3NSZXBvc2l0b3J5LmxvYWQobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGNsYXNzSW5mbyA9IHRoaXMuY2xhc3Nlcy5nZXQobW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlKTtcbiAgICAgICAgdmFyIGJlYW4gPSB7fTtcbiAgICAgICAgbW9kZWwuYXR0cmlidXRlcy5maWx0ZXIoZnVuY3Rpb24gKGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIChhdHRyaWJ1dGUucHJvcGVydHlOYW1lLnNlYXJjaCgvXkAvKSA8IDApO1xuICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyaWJ1dGUpIHtcbiAgICAgICAgICAgIGJlYW5bYXR0cmlidXRlLnByb3BlcnR5TmFtZV0gPSBudWxsO1xuICAgICAgICAgICAgYXR0cmlidXRlLm9uVmFsdWVDaGFuZ2UoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm9sZFZhbHVlICE9PSBldmVudC5uZXdWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBzZWxmLmZyb21Eb2xwaGluKHNlbGYsIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSwgZXZlbnQub2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3VmFsdWUgPSBzZWxmLmZyb21Eb2xwaGluKHNlbGYsIGNsYXNzSW5mb1thdHRyaWJ1dGUucHJvcGVydHlOYW1lXSwgZXZlbnQubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnByb3BlcnR5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbiwgYXR0cmlidXRlLnByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uQmVhblVwZGF0ZS1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5iZWFuRnJvbURvbHBoaW4uc2V0KG1vZGVsLmlkLCBiZWFuKTtcbiAgICAgICAgdGhpcy5iZWFuVG9Eb2xwaGluLnNldChiZWFuLCBtb2RlbC5pZCk7XG4gICAgICAgIHRoaXMuY2xhc3NJbmZvcy5zZXQobW9kZWwuaWQsIGNsYXNzSW5mbyk7XG4gICAgICAgIHRoaXMuYmVhbkFkZGVkSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZSwgYmVhbik7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5BZGRlZC1oYW5kbGVyJywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYmVhbjtcbiAgICB9XG5cbiAgICB1bmxvYWQobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS51bmxvYWQobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGxldCBiZWFuID0gdGhpcy5iZWFuRnJvbURvbHBoaW4uZ2V0KG1vZGVsLmlkKTtcbiAgICAgICAgdGhpcy5iZWFuRnJvbURvbHBoaW5bJ2RlbGV0ZSddKG1vZGVsLmlkKTtcbiAgICAgICAgdGhpcy5iZWFuVG9Eb2xwaGluWydkZWxldGUnXShiZWFuKTtcbiAgICAgICAgdGhpcy5jbGFzc0luZm9zWydkZWxldGUnXShtb2RlbC5pZCk7XG4gICAgICAgIGlmIChleGlzdHMoYmVhbikpIHtcbiAgICAgICAgICAgIHRoaXMuYmVhblJlbW92ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcihtb2RlbC5wcmVzZW50YXRpb25Nb2RlbFR5cGUsIGJlYW4pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkJlYW5SZW1vdmVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmVhbjtcbiAgICB9XG5cbiAgICBzcGxpY2VMaXN0RW50cnkobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0NsYXNzUmVwb3NpdG9yeS5zcGxpY2VMaXN0RW50cnkobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIGxldCBzb3VyY2UgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ3NvdXJjZScpO1xuICAgICAgICBsZXQgYXR0cmlidXRlID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKCdhdHRyaWJ1dGUnKTtcbiAgICAgICAgbGV0IGZyb20gPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2Zyb20nKTtcbiAgICAgICAgbGV0IHRvID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKCd0bycpO1xuICAgICAgICBsZXQgY291bnQgPSBtb2RlbC5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoJ2NvdW50Jyk7XG5cbiAgICAgICAgaWYgKGV4aXN0cyhzb3VyY2UpICYmIGV4aXN0cyhhdHRyaWJ1dGUpICYmIGV4aXN0cyhmcm9tKSAmJiBleGlzdHModG8pICYmIGV4aXN0cyhjb3VudCkpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc0luZm8gPSB0aGlzLmNsYXNzSW5mb3MuZ2V0KHNvdXJjZS52YWx1ZSk7XG4gICAgICAgICAgICB2YXIgYmVhbiA9IHRoaXMuYmVhbkZyb21Eb2xwaGluLmdldChzb3VyY2UudmFsdWUpO1xuICAgICAgICAgICAgaWYgKGV4aXN0cyhiZWFuKSAmJiBleGlzdHMoY2xhc3NJbmZvKSkge1xuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gbW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlO1xuICAgICAgICAgICAgICAgIC8vdmFyIGVudHJ5ID0gZnJvbURvbHBoaW4odGhpcywgY2xhc3NJbmZvW2F0dHJpYnV0ZS52YWx1ZV0sIGVsZW1lbnQudmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVMaXN0KHRoaXMsIHR5cGUsIGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgdmFyIG5ld0VsZW1lbnRzID0gW10sXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQgPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQudmFsdWU7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gbW9kZWwuZmluZEF0dHJpYnV0ZUJ5UHJvcGVydHlOYW1lKGkudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZXhpc3RzKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpc3QgbW9kaWZpY2F0aW9uIHVwZGF0ZSByZWNlaXZlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50cy5wdXNoKHRoaXMuZnJvbURvbHBoaW4odGhpcywgY2xhc3NJbmZvW2F0dHJpYnV0ZS52YWx1ZV0sIGVsZW1lbnQudmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9jayhiZWFuLCBhdHRyaWJ1dGUudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFycmF5VXBkYXRlSGFuZGxlcnMuZm9yRWFjaCgoaGFuZGxlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyKHR5cGUsIGJlYW4sIGF0dHJpYnV0ZS52YWx1ZSwgZnJvbS52YWx1ZSwgdG8udmFsdWUgLSBmcm9tLnZhbHVlLCBuZXdFbGVtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdBbiBleGNlcHRpb24gb2NjdXJyZWQgd2hpbGUgY2FsbGluZyBhbiBvbkFycmF5VXBkYXRlLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmJsb2NrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpc3QgbW9kaWZpY2F0aW9uIHVwZGF0ZSByZWNlaXZlZC4gU291cmNlIGJlYW4gdW5rbm93bi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGxpc3QgbW9kaWZpY2F0aW9uIHVwZGF0ZSByZWNlaXZlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1hcFBhcmFtVG9Eb2xwaGluKHBhcmFtKSB7XG4gICAgICAgIGlmICghZXhpc3RzKHBhcmFtKSkge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0eXBlID0gdHlwZW9mIHBhcmFtO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW0udG9JU09TdHJpbmcoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5iZWFuVG9Eb2xwaGluLmdldChwYXJhbSk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cyh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiT25seSBtYW5hZ2VkIERvbHBoaW4gQmVhbnMgY2FuIGJlIHVzZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGUgPT09ICdudW1iZXInIHx8IHR5cGUgPT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgcmV0dXJuIHBhcmFtO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPbmx5IG1hbmFnZWQgRG9scGhpbiBCZWFucyBhbmQgcHJpbWl0aXZlIHR5cGVzIGNhbiBiZSB1c2VkXCIpO1xuICAgIH1cblxuICAgIG1hcERvbHBoaW5Ub0JlYW4odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZnJvbURvbHBoaW4odGhpcywgY29uc3RzLkRPTFBISU5fQkVBTiwgdmFsdWUpO1xuICAgIH1cbn1cbiIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuLyogZ2xvYmFsIGV4cG9ydHMgKi9cblwidXNlIHN0cmljdFwiO1xuaW1wb3J0IE9wZW5Eb2xwaGluIGZyb20gJy4uL29wZW5kb2xwaGluL2J1aWxkL09wZW5Eb2xwaGluLmpzJztcbmltcG9ydCB7ZXhpc3RzfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tNZXRob2R9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBDb25uZWN0b3IgZnJvbSAnLi9jb25uZWN0b3IuanMnO1xuaW1wb3J0IEJlYW5NYW5hZ2VyIGZyb20gJy4vYmVhbm1hbmFnZXIuanMnO1xuaW1wb3J0IENsYXNzUmVwb3NpdG9yeSBmcm9tICcuL2NsYXNzcmVwby5qcyc7XG5pbXBvcnQgQ29udHJvbGxlck1hbmFnZXIgZnJvbSAnLi9jb250cm9sbGVybWFuYWdlci5qcyc7XG5pbXBvcnQgQ2xpZW50Q29udGV4dCBmcm9tICcuL2NsaWVudGNvbnRleHQuanMnO1xuaW1wb3J0IFBsYXRmb3JtSHR0cFRyYW5zbWl0dGVyIGZyb20gJy4vcGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbGllbnRDb250ZXh0RmFjdG9yeXtcblxuICAgIGNyZWF0ZSh1cmwsIGNvbmZpZyl7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdjb25uZWN0KHVybCwgY29uZmlnKScpO1xuICAgICAgICBjaGVja1BhcmFtKHVybCwgJ3VybCcpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ3JlYXRpbmcgY2xpZW50IGNvbnRleHQgJysgdXJsICsnICAgICcrIEpTT04uc3RyaW5naWZ5KGNvbmZpZykpO1xuXG4gICAgICAgIGxldCBidWlsZGVyID0gT3BlbkRvbHBoaW4ubWFrZURvbHBoaW4oKS51cmwodXJsKS5yZXNldChmYWxzZSkuc2xhY2tNUyg0KS5zdXBwb3J0Q09SUyh0cnVlKS5tYXhCYXRjaFNpemUoTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVIpO1xuICAgICAgICBpZiAoZXhpc3RzKGNvbmZpZykpIHtcbiAgICAgICAgICAgIGlmIChleGlzdHMoY29uZmlnLmVycm9ySGFuZGxlcikpIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmVycm9ySGFuZGxlcihjb25maWcuZXJyb3JIYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChleGlzdHMoY29uZmlnLmhlYWRlcnNJbmZvKSAmJiBPYmplY3Qua2V5cyhjb25maWcuaGVhZGVyc0luZm8pLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBidWlsZGVyLmhlYWRlcnNJbmZvKGNvbmZpZy5oZWFkZXJzSW5mbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZG9scGhpbiA9IGJ1aWxkZXIuYnVpbGQoKTtcblxuICAgICAgICB2YXIgdHJhbnNtaXR0ZXIgPSBuZXcgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIodXJsLCBjb25maWcpO1xuICAgICAgICB0cmFuc21pdHRlci5vbignZXJyb3InLCBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNsaWVudENvbnRleHQuZW1pdCgnZXJyb3InLCBlcnJvcik7XG4gICAgICAgIH0pO1xuICAgICAgICBkb2xwaGluLmNsaWVudENvbm5lY3Rvci50cmFuc21pdHRlciA9IHRyYW5zbWl0dGVyO1xuXG4gICAgICAgIHZhciBjbGFzc1JlcG9zaXRvcnkgPSBuZXcgQ2xhc3NSZXBvc2l0b3J5KGRvbHBoaW4pO1xuICAgICAgICB2YXIgYmVhbk1hbmFnZXIgPSBuZXcgQmVhbk1hbmFnZXIoY2xhc3NSZXBvc2l0b3J5KTtcbiAgICAgICAgdmFyIGNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IodXJsLCBkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbmZpZyk7XG4gICAgICAgIHZhciBjb250cm9sbGVyTWFuYWdlciA9IG5ldyBDb250cm9sbGVyTWFuYWdlcihkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbm5lY3Rvcik7XG5cbiAgICAgICAgdmFyIGNsaWVudENvbnRleHQgPSBuZXcgQ2xpZW50Q29udGV4dChkb2xwaGluLCBiZWFuTWFuYWdlciwgY29udHJvbGxlck1hbmFnZXIsIGNvbm5lY3Rvcik7XG4gICAgICAgIHJldHVybiBjbGllbnRDb250ZXh0O1xuICAgIH1cbn1cblxuZXhwb3J0cy5DbGllbnRDb250ZXh0RmFjdG9yeSA9IENsaWVudENvbnRleHRGYWN0b3J5O1xuXG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT3BlbkRvbHBoaW4gZnJvbSAnLi4vb3BlbmRvbHBoaW4vYnVpbGQvT3BlbkRvbHBoaW4uanMnO1xuaW1wb3J0IEVtaXR0ZXIgZnJvbSAnZW1pdHRlci1jb21wb25lbnQnO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi4vYm93ZXJfY29tcG9uZW50cy9jb3JlLmpzL2xpYnJhcnkvZm4vcHJvbWlzZSc7XG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi91dGlscy5qcyc7XG5pbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENsaWVudENvbnRleHR7XG5cbiAgICBjb25zdHJ1Y3Rvcihkb2xwaGluLCBiZWFuTWFuYWdlciwgY29udHJvbGxlck1hbmFnZXIsIGNvbm5lY3Rvcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDbGllbnRDb250ZXh0KGRvbHBoaW4sIGJlYW5NYW5hZ2VyLCBjb250cm9sbGVyTWFuYWdlciwgY29ubmVjdG9yKScpO1xuICAgICAgICBjaGVja1BhcmFtKGRvbHBoaW4sICdkb2xwaGluJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYmVhbk1hbmFnZXIsICdiZWFuTWFuYWdlcicpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbnRyb2xsZXJNYW5hZ2VyLCAnY29udHJvbGxlck1hbmFnZXInKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb25uZWN0b3IsICdjb25uZWN0b3InKTtcblxuICAgICAgICB0aGlzLmRvbHBoaW4gPSBkb2xwaGluO1xuICAgICAgICB0aGlzLmJlYW5NYW5hZ2VyID0gYmVhbk1hbmFnZXI7XG4gICAgICAgIHRoaXMuX2NvbnRyb2xsZXJNYW5hZ2VyID0gY29udHJvbGxlck1hbmFnZXI7XG4gICAgICAgIHRoaXMuX2Nvbm5lY3RvciA9IGNvbm5lY3RvcjtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRoaXMuaXNDb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25uZWN0KCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uUHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBzZWxmLl9jb25uZWN0b3IuY29ubmVjdCgpO1xuICAgICAgICAgICAgc2VsZi5fY29ubmVjdG9yLmludm9rZShPcGVuRG9scGhpbi5jcmVhdGVDcmVhdGVDb250ZXh0Q29tbWFuZCgpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLmlzQ29ubmVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlO1xuICAgIH1cblxuICAgIG9uQ29ubmVjdCgpe1xuICAgICAgICBpZihleGlzdHModGhpcy5jb25uZWN0aW9uUHJvbWlzZSkpe1xuICAgICAgICAgICAgaWYoIXRoaXMuaXNDb25uZWN0ZWQpe1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbm5lY3Rpb25Qcm9taXNlO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sbGVyKG5hbWUpe1xuICAgICAgICBjaGVja01ldGhvZCgnQ2xpZW50Q29udGV4dC5jcmVhdGVDb250cm9sbGVyKG5hbWUpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obmFtZSwgJ25hbWUnKTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fY29udHJvbGxlck1hbmFnZXIuY3JlYXRlQ29udHJvbGxlcihuYW1lKTtcbiAgICB9XG5cbiAgICBkaXNjb25uZWN0KCl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kb2xwaGluLnN0b3BQdXNoTGlzdGVuaW5nKCk7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgc2VsZi5fY29udHJvbGxlck1hbmFnZXIuZGVzdHJveSgpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3Rvci5pbnZva2UoT3BlbkRvbHBoaW4uY3JlYXRlRGVzdHJveUNvbnRleHRDb21tYW5kKCkpO1xuICAgICAgICAgICAgICAgIHNlbGYuZG9scGhpbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5iZWFuTWFuYWdlciA9IG51bGw7XG4gICAgICAgICAgICAgICAgc2VsZi5fY29udHJvbGxlck1hbmFnZXIgPSBudWxsO1xuICAgICAgICAgICAgICAgIHNlbGYuX2Nvbm5lY3RvciA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuRW1pdHRlcihDbGllbnRDb250ZXh0LnByb3RvdHlwZSk7IiwiLyogQ29weXJpZ2h0IDIwMTYgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qanNsaW50IGJyb3dzZXJpZnk6IHRydWUgKi9cblxuXG5pbXBvcnQgeyBleGlzdHMgfSBmcm9tICcuL3V0aWxzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29kZWN7XG5cbiAgICBzdGF0aWMgZW5jb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICdwJzogY29tbWFuZC5wbUlkLFxuICAgICAgICAgICAgJ3QnOiBjb21tYW5kLnBtVHlwZSxcbiAgICAgICAgICAgICdhJzogY29tbWFuZC5hdHRyaWJ1dGVzLm1hcCgoYXR0cmlidXRlKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHtcbiAgICAgICAgICAgICAgICAgICAgJ24nOiBhdHRyaWJ1dGUucHJvcGVydHlOYW1lLFxuICAgICAgICAgICAgICAgICAgICAnaSc6IGF0dHJpYnV0ZS5pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhhdHRyaWJ1dGUudmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC52ID0gYXR0cmlidXRlLnZhbHVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAnaWQnOiAnQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWwnXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGRlY29kZUNyZWF0ZVByZXNlbnRhdGlvbk1vZGVsQ29tbWFuZChjb21tYW5kKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAnaWQnOiAnQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWwnLFxuICAgICAgICAgICAgJ2NsYXNzTmFtZSc6IFwib3JnLm9wZW5kb2xwaGluLmNvcmUuY29tbS5DcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmRcIixcbiAgICAgICAgICAgICdjbGllbnRTaWRlT25seSc6IGZhbHNlLFxuICAgICAgICAgICAgJ3BtSWQnOiBjb21tYW5kLnAsXG4gICAgICAgICAgICAncG1UeXBlJzogY29tbWFuZC50LFxuICAgICAgICAgICAgJ2F0dHJpYnV0ZXMnOiBjb21tYW5kLmEubWFwKChhdHRyaWJ1dGUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAncHJvcGVydHlOYW1lJzogYXR0cmlidXRlLm4sXG4gICAgICAgICAgICAgICAgICAgICdpZCc6IGF0dHJpYnV0ZS5pLFxuICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBleGlzdHMoYXR0cmlidXRlLnYpPyBhdHRyaWJ1dGUudiA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICdxdWFsaWZpZXInOiBudWxsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgc3RhdGljIGVuY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0ge1xuICAgICAgICAgICAgJ2EnOiBjb21tYW5kLmF0dHJpYnV0ZUlkXG4gICAgICAgIH07XG4gICAgICAgIGlmIChleGlzdHMoY29tbWFuZC5vbGRWYWx1ZSkpIHtcbiAgICAgICAgICAgIHJlc3VsdC5vID0gY29tbWFuZC5vbGRWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhpc3RzKGNvbW1hbmQubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICByZXN1bHQubiA9IGNvbW1hbmQubmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmlkID0gJ1ZhbHVlQ2hhbmdlZCc7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlY29kZVZhbHVlQ2hhbmdlZENvbW1hbmQoY29tbWFuZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgJ2lkJzogJ1ZhbHVlQ2hhbmdlZCcsXG4gICAgICAgICAgICAnY2xhc3NOYW1lJzogXCJvcmcub3BlbmRvbHBoaW4uY29yZS5jb21tLlZhbHVlQ2hhbmdlZENvbW1hbmRcIixcbiAgICAgICAgICAgICdhdHRyaWJ1dGVJZCc6IGNvbW1hbmQuYSxcbiAgICAgICAgICAgICdvbGRWYWx1ZSc6IGV4aXN0cyhjb21tYW5kLm8pPyBjb21tYW5kLm8gOiBudWxsLFxuICAgICAgICAgICAgJ25ld1ZhbHVlJzogZXhpc3RzKGNvbW1hbmQubik/IGNvbW1hbmQubiA6IG51bGxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZW5jb2RlKGNvbW1hbmRzKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGNvbW1hbmRzLm1hcCgoY29tbWFuZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQuaWQgPT09ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5lbmNvZGVDcmVhdGVQcmVzZW50YXRpb25Nb2RlbENvbW1hbmQoY29tbWFuZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbW1hbmQuaWQgPT09ICdWYWx1ZUNoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZW5jb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGRlY29kZSh0cmFuc21pdHRlZCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmICh0eXBlb2YgdHJhbnNtaXR0ZWQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZSh0cmFuc21pdHRlZCkubWFwKGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbW1hbmQuaWQgPT09ICdDcmVhdGVQcmVzZW50YXRpb25Nb2RlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZGVjb2RlQ3JlYXRlUHJlc2VudGF0aW9uTW9kZWxDb21tYW5kKGNvbW1hbmQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29tbWFuZC5pZCA9PT0gJ1ZhbHVlQ2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYuZGVjb2RlVmFsdWVDaGFuZ2VkQ29tbWFuZChjb21tYW5kKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0cmFuc21pdHRlZDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBEZXN0cm95Q29udHJvbGxlckNvbW1hbmQgZnJvbSAnLi9jb21tYW5kcy9kZXN0cm95Q29udHJvbGxlckNvbW1hbmQuanMnO1xuaW1wb3J0IENyZWF0ZUNvbnRyb2xsZXJDb21tYW5kIGZyb20gJy4vY29tbWFuZHMvY3JlYXRlQ29udHJvbGxlckNvbW1hbmQuanMnO1xuaW1wb3J0IENhbGxBY3Rpb25Db21tYW5kIGZyb20gJy4vY29tbWFuZHMvY2FsbEFjdGlvbkNvbW1hbmQuanMnO1xuXG5leHBvcnQgY2xhc3MgQ29tbWFuZEZhY3Rvcnkge1xuXG4gICAgc3RhdGljIGNyZWF0ZURlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVySWQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEZXN0cm95Q29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlcklkKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkge1xuICAgICAgICByZXR1cm4gbmV3IENyZWF0ZUNvbnRyb2xsZXJDb21tYW5kKGNvbnRyb2xsZXJOYW1lLCBwYXJlbnRDb250cm9sbGVySWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVDYWxsQWN0aW9uQ29tbWFuZChjb250cm9sbGVyaWQsIGFjdGlvbk5hbWUsIHBhcmFtcykge1xuICAgICAgICByZXR1cm4gbmV3IENhbGxBY3Rpb25Db21tYW5kKGNvbnRyb2xsZXJpZCwgYWN0aW9uTmFtZSwgcGFyYW1zKTtcbiAgICB9XG59IiwiaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbGxBY3Rpb25Db21tYW5kIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJpZCwgYWN0aW9uTmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDcmVhdGVDb250cm9sbGVyQ29tbWFuZC5pbnZva2UoY29udHJvbGxlcmlkLCBhY3Rpb25OYW1lLCBwYXJhbXMpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcmlkLCAnY29udHJvbGxlcmlkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYWN0aW9uTmFtZSwgJ2FjdGlvbk5hbWUnKTtcblxuICAgICAgICB0aGlzLmlkID0gJ0NhbGxBY3Rpb24nO1xuICAgICAgICB0aGlzLmMgPSBjb250cm9sbGVyaWQ7XG4gICAgICAgIHRoaXMubiA9IGFjdGlvbk5hbWU7XG4gICAgICAgIHRoaXMucCA9IHBhcmFtcztcbiAgICB9XG5cbn0iLCJpbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQge1xuXG4gICAgY29uc3RydWN0b3IoY29udHJvbGxlck5hbWUsIHBhcmVudENvbnRyb2xsZXJJZCkge1xuICAgICAgICBjaGVja01ldGhvZCgnQ3JlYXRlQ29udHJvbGxlckNvbW1hbmQuaW52b2tlKGNvbnRyb2xsZXJOYW1lLCBwYXJlbnRDb250cm9sbGVySWQpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlck5hbWUsICdjb250cm9sbGVyTmFtZScpO1xuXG4gICAgICAgIHRoaXMuaWQgPSAnQ3JlYXRlQ29udHJvbGxlcic7XG4gICAgICAgIHRoaXMubiA9IGNvbnRyb2xsZXJOYW1lO1xuICAgICAgICB0aGlzLnAgPSBwYXJlbnRDb250cm9sbGVySWQ7XG4gICAgfVxuXG59IiwiaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHtjaGVja1BhcmFtfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlc3Ryb3lDb250cm9sbGVyQ29tbWFuZCB7XG5cbiAgICBjb25zdHJ1Y3Rvcihjb250cm9sbGVySWQpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Rlc3Ryb3lDb250cm9sbGVyQ29tbWFuZChjb250cm9sbGVySWQpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG5cbiAgICAgICAgdGhpcy5pZCA9ICdEZXN0cm95Q29udHJvbGxlcic7XG4gICAgICAgIHRoaXMuYyA9IGNvbnRyb2xsZXJJZDtcbiAgICB9XG5cbn0iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgT3BlbkRvbHBoaW4gZnJvbSAnLi4vb3BlbmRvbHBoaW4vYnVpbGQvT3BlbkRvbHBoaW4uanMnO1xuXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuLi9ib3dlcl9jb21wb25lbnRzL2NvcmUuanMvbGlicmFyeS9mbi9wcm9taXNlJztcbmltcG9ydCBDbGllbnRNb2RlbFN0b3JlIGZyb20gJy4uL29wZW5kb2xwaGluL2J1aWxkL0NsaWVudE1vZGVsU3RvcmUnO1xuaW1wb3J0IHtleGlzdHN9IGZyb20gJy4vdXRpbHMuanMnO1xuaW1wb3J0IHtjaGVja01ldGhvZH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrUGFyYW19IGZyb20gJy4vdXRpbHMnO1xuXG5jb25zdCBET0xQSElOX0JFQU4gPSAnQEBAIERPTFBISU5fQkVBTiBAQEAnO1xuY29uc3QgQUNUSU9OX0NBTExfQkVBTiA9ICdAQEAgQ09OVFJPTExFUl9BQ1RJT05fQ0FMTF9CRUFOIEBAQCc7XG5jb25zdCBISUdITEFOREVSX0JFQU4gPSAnQEBAIEhJR0hMQU5ERVJfQkVBTiBAQEAnO1xuY29uc3QgRE9MUEhJTl9MSVNUX1NQTElDRSA9ICdARFA6TFNAJztcbmNvbnN0IFNPVVJDRV9TWVNURU0gPSAnQEBAIFNPVVJDRV9TWVNURU0gQEBAJztcbmNvbnN0IFNPVVJDRV9TWVNURU1fQ0xJRU5UID0gJ2NsaWVudCc7XG5jb25zdCBTT1VSQ0VfU1lTVEVNX1NFUlZFUiA9ICdzZXJ2ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25uZWN0b3J7XG5cbiAgICBjb25zdHJ1Y3Rvcih1cmwsIGRvbHBoaW4sIGNsYXNzUmVwb3NpdG9yeSwgY29uZmlnKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb25uZWN0b3IodXJsLCBkb2xwaGluLCBjbGFzc1JlcG9zaXRvcnksIGNvbmZpZyknKTtcbiAgICAgICAgY2hlY2tQYXJhbSh1cmwsICd1cmwnKTtcbiAgICAgICAgY2hlY2tQYXJhbShkb2xwaGluLCAnZG9scGhpbicpO1xuICAgICAgICBjaGVja1BhcmFtKGNsYXNzUmVwb3NpdG9yeSwgJ2NsYXNzUmVwb3NpdG9yeScpO1xuXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5kb2xwaGluID0gZG9scGhpbjtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5ID0gY2xhc3NSZXBvc2l0b3J5O1xuICAgICAgICB0aGlzLmhpZ2hsYW5kZXJQTVJlc29sdmVyID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgdGhpcy5oaWdobGFuZGVyUE1Qcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSkge1xuICAgICAgICAgICAgc2VsZi5oaWdobGFuZGVyUE1SZXNvbHZlciA9IHJlc29sdmU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvbHBoaW4uZ2V0Q2xpZW50TW9kZWxTdG9yZSgpLm9uTW9kZWxTdG9yZUNoYW5nZSgoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGxldCBtb2RlbCA9IGV2ZW50LmNsaWVudFByZXNlbnRhdGlvbk1vZGVsO1xuICAgICAgICAgICAgbGV0IHNvdXJjZVN5c3RlbSA9IG1vZGVsLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShTT1VSQ0VfU1lTVEVNKTtcbiAgICAgICAgICAgIGlmIChleGlzdHMoc291cmNlU3lzdGVtKSAmJiBzb3VyY2VTeXN0ZW0udmFsdWUgPT09IFNPVVJDRV9TWVNURU1fU0VSVkVSKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmV2ZW50VHlwZSA9PT0gQ2xpZW50TW9kZWxTdG9yZS5UeXBlLkFEREVEKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYub25Nb2RlbEFkZGVkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmV2ZW50VHlwZSA9PT0gQ2xpZW50TW9kZWxTdG9yZS5UeXBlLlJFTU9WRUQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5vbk1vZGVsUmVtb3ZlZChtb2RlbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoYXQuZG9scGhpbi5zdGFydFB1c2hMaXN0ZW5pbmcoT3BlbkRvbHBoaW4uY3JlYXRlU3RhcnRMb25nUG9sbENvbW1hbmQoKSwgT3BlbkRvbHBoaW4uY3JlYXRlSW50ZXJydXB0TG9uZ1BvbGxDb21tYW5kKCkpO1xuICAgICAgICB9LCAwKTtcbiAgICB9XG5cbiAgICBvbk1vZGVsQWRkZWQobW9kZWwpIHtcbiAgICAgICAgY2hlY2tNZXRob2QoJ0Nvbm5lY3Rvci5vbk1vZGVsQWRkZWQobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuXG4gICAgICAgIHZhciB0eXBlID0gbW9kZWwucHJlc2VudGF0aW9uTW9kZWxUeXBlO1xuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQUNUSU9OX0NBTExfQkVBTjpcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmVcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgRE9MUEhJTl9CRUFOOlxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NSZXBvc2l0b3J5LnJlZ2lzdGVyQ2xhc3MobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBISUdITEFOREVSX0JFQU46XG4gICAgICAgICAgICAgICAgdGhpcy5oaWdobGFuZGVyUE1SZXNvbHZlcihtb2RlbCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIERPTFBISU5fTElTVF9TUExJQ0U6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkuc3BsaWNlTGlzdEVudHJ5KG1vZGVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRvbHBoaW4uZGVsZXRlUHJlc2VudGF0aW9uTW9kZWwobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS5sb2FkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uTW9kZWxSZW1vdmVkKG1vZGVsKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb25uZWN0b3Iub25Nb2RlbFJlbW92ZWQobW9kZWwpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuICAgICAgICBsZXQgdHlwZSA9IG1vZGVsLnByZXNlbnRhdGlvbk1vZGVsVHlwZTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIERPTFBISU5fQkVBTjpcbiAgICAgICAgICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeS51bnJlZ2lzdGVyQ2xhc3MobW9kZWwpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBET0xQSElOX0xJU1RfU1BMSUNFOlxuICAgICAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc1JlcG9zaXRvcnkudW5sb2FkKG1vZGVsKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGludm9rZShjb21tYW5kKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb25uZWN0b3IuaW52b2tlKGNvbW1hbmQpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29tbWFuZCwgJ2NvbW1hbmQnKTtcblxuICAgICAgICB2YXIgZG9scGhpbiA9IHRoaXMuZG9scGhpbjtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBkb2xwaGluLnNlbmQoY29tbWFuZCwge1xuICAgICAgICAgICAgICAgIG9uRmluaXNoZWQ6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnZXRIaWdobGFuZGVyUE0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhpZ2hsYW5kZXJQTVByb21pc2U7XG4gICAgfVxufVxuXG5leHBvcnRzLlNPVVJDRV9TWVNURU0gPSBTT1VSQ0VfU1lTVEVNO1xuZXhwb3J0cy5TT1VSQ0VfU1lTVEVNX0NMSUVOVCA9IFNPVVJDRV9TWVNURU1fQ0xJRU5UO1xuZXhwb3J0cy5TT1VSQ0VfU1lTVEVNX1NFUlZFUiA9IFNPVVJDRV9TWVNURU1fU0VSVkVSO1xuZXhwb3J0cy5BQ1RJT05fQ0FMTF9CRUFOID0gQUNUSU9OX0NBTExfQkVBTjtcbiIsImV4cG9ydCBjb25zdCBET0xQSElOX0JFQU4gPSAwO1xuZXhwb3J0IGNvbnN0IEJZVEUgPSAxO1xuZXhwb3J0IGNvbnN0IFNIT1JUID0gMjtcbmV4cG9ydCBjb25zdCBJTlQgPSAzO1xuZXhwb3J0IGNvbnN0IExPTkcgPSA0O1xuZXhwb3J0IGNvbnN0IEZMT0FUID0gNTtcbmV4cG9ydCBjb25zdCBET1VCTEUgPSA2O1xuZXhwb3J0IGNvbnN0IEJPT0xFQU4gPSA3O1xuZXhwb3J0IGNvbnN0IFNUUklORyA9IDg7XG5leHBvcnQgY29uc3QgREFURSA9IDk7XG5leHBvcnQgY29uc3QgRU5VTSA9IDEwO1xuZXhwb3J0IGNvbnN0IENBTEVOREFSID0gMTE7XG5leHBvcnQgY29uc3QgTE9DQUxfREFURV9GSUVMRF9UWVBFID0gNTU7XG5leHBvcnQgY29uc3QgTE9DQUxfREFURV9USU1FX0ZJRUxEX1RZUEUgPSA1MjtcbmV4cG9ydCBjb25zdCBaT05FRF9EQVRFX1RJTUVfRklFTERfVFlQRSA9IDU0OyIsIi8qIENvcHlyaWdodCAyMDE1IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG4vKmpzbGludCBicm93c2VyaWZ5OiB0cnVlICovXG4vKiBnbG9iYWwgY29uc29sZSAqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQcm9taXNlIGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3Byb21pc2UnO1xuaW1wb3J0IFNldCBmcm9tJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3NldCc7XG5pbXBvcnQge2V4aXN0c30gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCBDb250cm9sbGVyUHJveHkgZnJvbSAnLi9jb250cm9sbGVycHJveHkuanMnO1xuXG5pbXBvcnQge0NvbW1hbmRGYWN0b3J5fSBmcm9tICcuL2NvbW1hbmRGYWN0b3J5LmpzJztcblxuXG5pbXBvcnQgeyBTT1VSQ0VfU1lTVEVNIH0gZnJvbSAnLi9jb25uZWN0b3IuanMnO1xuaW1wb3J0IHsgU09VUkNFX1NZU1RFTV9DTElFTlQgfSBmcm9tICcuL2Nvbm5lY3Rvci5qcyc7XG5pbXBvcnQgeyBBQ1RJT05fQ0FMTF9CRUFOIH0gZnJvbSAnLi9jb25uZWN0b3IuanMnO1xuXG5jb25zdCBDT05UUk9MTEVSX0lEID0gJ2NvbnRyb2xsZXJJZCc7XG5jb25zdCBNT0RFTCA9ICdtb2RlbCc7XG5jb25zdCBFUlJPUl9DT0RFID0gJ2Vycm9yQ29kZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJNYW5hZ2Vye1xuXG4gICAgY29uc3RydWN0b3IoZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25uZWN0b3Ipe1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlck1hbmFnZXIoZG9scGhpbiwgY2xhc3NSZXBvc2l0b3J5LCBjb25uZWN0b3IpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oZG9scGhpbiwgJ2RvbHBoaW4nKTtcbiAgICAgICAgY2hlY2tQYXJhbShjbGFzc1JlcG9zaXRvcnksICdjbGFzc1JlcG9zaXRvcnknKTtcbiAgICAgICAgY2hlY2tQYXJhbShjb25uZWN0b3IsICdjb25uZWN0b3InKTtcblxuICAgICAgICB0aGlzLmRvbHBoaW4gPSBkb2xwaGluO1xuICAgICAgICB0aGlzLmNsYXNzUmVwb3NpdG9yeSA9IGNsYXNzUmVwb3NpdG9yeTtcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBjb25uZWN0b3I7XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMgPSBuZXcgU2V0KCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jcmVhdGVDb250cm9sbGVyKG5hbWUsIG51bGwpXG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgcGFyZW50Q29udHJvbGxlcklkKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlci5jcmVhdGVDb250cm9sbGVyKG5hbWUpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obmFtZSwgJ25hbWUnKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBjb250cm9sbGVySWQsIG1vZGVsSWQsIG1vZGVsLCBjb250cm9sbGVyO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmdldEhpZ2hsYW5kZXJQTSgpLnRoZW4oKGhpZ2hsYW5kZXJQTSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmludm9rZShDb21tYW5kRmFjdG9yeS5jcmVhdGVDcmVhdGVDb250cm9sbGVyQ29tbWFuZChuYW1lLCBwYXJlbnRDb250cm9sbGVySWQpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlcklkID0gaGlnaGxhbmRlclBNLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShDT05UUk9MTEVSX0lEKS5nZXRWYWx1ZSgpO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbElkID0gaGlnaGxhbmRlclBNLmZpbmRBdHRyaWJ1dGVCeVByb3BlcnR5TmFtZShNT0RFTCkuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwgPSBzZWxmLmNsYXNzUmVwb3NpdG9yeS5tYXBEb2xwaGluVG9CZWFuKG1vZGVsSWQpO1xuICAgICAgICAgICAgICAgICAgICBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXJQcm94eShjb250cm9sbGVySWQsIG1vZGVsLCBzZWxmKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb250cm9sbGVycy5hZGQoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoY29udHJvbGxlcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW52b2tlQWN0aW9uKGNvbnRyb2xsZXJJZCwgYWN0aW9uTmFtZSwgcGFyYW1zKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlci5pbnZva2VBY3Rpb24oY29udHJvbGxlcklkLCBhY3Rpb25OYW1lLCBwYXJhbXMpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oYWN0aW9uTmFtZSwgJ2FjdGlvbk5hbWUnKTtcblxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PntcblxuICAgICAgICAgICAgbGV0IGF0dHJpYnV0ZXMgPSBbXG4gICAgICAgICAgICAgICAgc2VsZi5kb2xwaGluLmF0dHJpYnV0ZShTT1VSQ0VfU1lTVEVNLCBudWxsLCBTT1VSQ0VfU1lTVEVNX0NMSUVOVCksXG4gICAgICAgICAgICAgICAgc2VsZi5kb2xwaGluLmF0dHJpYnV0ZShFUlJPUl9DT0RFKVxuICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgbGV0IHBtID0gc2VsZi5kb2xwaGluLnByZXNlbnRhdGlvbk1vZGVsLmFwcGx5KHNlbGYuZG9scGhpbiwgW251bGwsIEFDVElPTl9DQUxMX0JFQU5dLmNvbmNhdChhdHRyaWJ1dGVzKSk7XG5cbiAgICAgICAgICAgIGxldCBhY3Rpb25QYXJhbXMgPSBbXTtcbiAgICAgICAgICAgIGlmKGV4aXN0cyhwYXJhbXMpKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBzZWxmLmNsYXNzUmVwb3NpdG9yeS5tYXBQYXJhbVRvRG9scGhpbihwYXJhbXNbcGFyYW1dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvblBhcmFtcy5wdXNoKHtuOiBwYXJhbSwgdjogdmFsdWV9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5jb25uZWN0b3IuaW52b2tlKENvbW1hbmRGYWN0b3J5LmNyZWF0ZUNhbGxBY3Rpb25Db21tYW5kKGNvbnRyb2xsZXJJZCwgYWN0aW9uTmFtZSwgYWN0aW9uUGFyYW1zKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGlzRXJyb3IgPSBwbS5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoRVJST1JfQ09ERSkuZ2V0VmFsdWUoKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNFcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKFwiQ29udHJvbGxlckFjdGlvbiBjYXVzZWQgYW4gZXJyb3JcIikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5kb2xwaGluLmRlbGV0ZVByZXNlbnRhdGlvbk1vZGVsKHBtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95Q29udHJvbGxlcihjb250cm9sbGVyKSB7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyTWFuYWdlci5kZXN0cm95Q29udHJvbGxlcihjb250cm9sbGVyKScpO1xuICAgICAgICBjaGVja1BhcmFtKGNvbnRyb2xsZXIsICdjb250cm9sbGVyJyk7XG5cbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmdldEhpZ2hsYW5kZXJQTSgpLnRoZW4oKGhpZ2hsYW5kZXJQTSkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYuY29udHJvbGxlcnMuZGVsZXRlKGNvbnRyb2xsZXIpO1xuICAgICAgICAgICAgICAgIGhpZ2hsYW5kZXJQTS5maW5kQXR0cmlidXRlQnlQcm9wZXJ0eU5hbWUoQ09OVFJPTExFUl9JRCkuc2V0VmFsdWUoY29udHJvbGxlci5jb250cm9sbGVySWQpO1xuICAgICAgICAgICAgICAgIHNlbGYuY29ubmVjdG9yLmludm9rZShDb21tYW5kRmFjdG9yeS5jcmVhdGVEZXN0cm95Q29udHJvbGxlckNvbW1hbmQoY29udHJvbGxlci5nZXRJZCgpKSkudGhlbihyZXNvbHZlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBsZXQgY29udHJvbGxlcnNDb3B5ID0gdGhpcy5jb250cm9sbGVycztcbiAgICAgICAgbGV0IHByb21pc2VzID0gW107XG4gICAgICAgIHRoaXMuY29udHJvbGxlcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGNvbnRyb2xsZXJzQ29weS5mb3JFYWNoKChjb250cm9sbGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goY29udHJvbGxlci5kZXN0cm95KCkpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIC8vIGlnbm9yZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKTtcbiAgICB9XG59XG4iLCIvKiBDb3B5cmlnaHQgMjAxNSBDYW5vbyBFbmdpbmVlcmluZyBBRy5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cblxuLypqc2xpbnQgYnJvd3NlcmlmeTogdHJ1ZSAqL1xuLyogZ2xvYmFsIGNvbnNvbGUgKi9cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU2V0IGZyb20gJy4uL2Jvd2VyX2NvbXBvbmVudHMvY29yZS5qcy9saWJyYXJ5L2ZuL3NldCc7XG5pbXBvcnQge2NoZWNrTWV0aG9kfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7Y2hlY2tQYXJhbX0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRyb2xsZXJQcm94eXtcblxuICAgIGNvbnN0cnVjdG9yKGNvbnRyb2xsZXJJZCwgbW9kZWwsIG1hbmFnZXIpe1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlclByb3h5KGNvbnRyb2xsZXJJZCwgbW9kZWwsIG1hbmFnZXIpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0oY29udHJvbGxlcklkLCAnY29udHJvbGxlcklkJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obW9kZWwsICdtb2RlbCcpO1xuICAgICAgICBjaGVja1BhcmFtKG1hbmFnZXIsICdtYW5hZ2VyJyk7XG5cbiAgICAgICAgdGhpcy5jb250cm9sbGVySWQgPSBjb250cm9sbGVySWQ7XG4gICAgICAgIHRoaXMubW9kZWwgPSBtb2RlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzID0gbmV3IFNldCgpO1xuICAgIH1cblxuICAgIGdldE1vZGVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tb2RlbDtcbiAgICB9XG5cbiAgICBnZXRJZCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udHJvbGxlcklkO1xuICAgIH1cblxuICAgIGludm9rZShuYW1lLCBwYXJhbXMpe1xuICAgICAgICBjaGVja01ldGhvZCgnQ29udHJvbGxlclByb3h5Lmludm9rZShuYW1lLCBwYXJhbXMpJyk7XG4gICAgICAgIGNoZWNrUGFyYW0obmFtZSwgJ25hbWUnKTtcblxuICAgICAgICBpZiAodGhpcy5kZXN0cm95ZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIGNvbnRyb2xsZXIgd2FzIGFscmVhZHkgZGVzdHJveWVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFuYWdlci5pbnZva2VBY3Rpb24odGhpcy5jb250cm9sbGVySWQsIG5hbWUsIHBhcmFtcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbGxlcihuYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuX2NyZWF0ZUNvbnRyb2xsZXIobmFtZSwgdGhpcy5nZXRJZCgpKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCl7XG4gICAgICAgIGlmICh0aGlzLmRlc3Ryb3llZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgY29udHJvbGxlciB3YXMgYWxyZWFkeSBkZXN0cm95ZWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG4gICAgICAgIHRoaXMub25EZXN0cm95ZWRIYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIodGhpcyk7XG4gICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0FuIGV4Y2VwdGlvbiBvY2N1cnJlZCB3aGlsZSBjYWxsaW5nIGFuIG9uRGVzdHJveWVkLWhhbmRsZXInLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmFnZXIuZGVzdHJveUNvbnRyb2xsZXIodGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95ZWQoaGFuZGxlcil7XG4gICAgICAgIGNoZWNrTWV0aG9kKCdDb250cm9sbGVyUHJveHkub25EZXN0cm95ZWQoaGFuZGxlciknKTtcbiAgICAgICAgY2hlY2tQYXJhbShoYW5kbGVyLCAnaGFuZGxlcicpO1xuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3llZEhhbmRsZXJzLmFkZChoYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVuc3Vic2NyaWJlOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5vbkRlc3Ryb3llZEhhbmRsZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRG9scGhpblJlbW90aW5nRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnUmVtb3RpbmcgRXJyb3InLCBkZXRhaWwpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmRldGFpbCA9IGRldGFpbCB8fCB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERvbHBoaW5TZXNzaW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnU2Vzc2lvbiBFcnJvcicpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHR0cFJlc3BvbnNlRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UgPSAnSHR0cCBSZXNwb25zZSBFcnJvcicpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgSHR0cE5ldHdvcmtFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3RvcihtZXNzYWdlID0gJ0h0dHAgTmV0d29yayBFcnJvcicpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgfVxufSIsIi8qIENvcHlyaWdodCAyMDE2IENhbm9vIEVuZ2luZWVyaW5nIEFHLlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqL1xuXG5pbXBvcnQgRW1pdHRlciBmcm9tICdlbWl0dGVyLWNvbXBvbmVudCc7XG5cblxuaW1wb3J0IHsgZXhpc3RzIH0gZnJvbSAnLi91dGlscyc7XG5pbXBvcnQgeyBEb2xwaGluUmVtb3RpbmdFcnJvciwgSHR0cE5ldHdvcmtFcnJvciwgRG9scGhpblNlc3Npb25FcnJvciwgSHR0cFJlc3BvbnNlRXJyb3IgfSBmcm9tICcuL2Vycm9ycy5qcyc7XG5pbXBvcnQgQ29kZWMgZnJvbSAnLi9jb2RlYy5qcyc7XG5pbXBvcnQgUmVtb3RpbmdFcnJvckhhbmRsZXIgZnJvbSAnLi9yZW1vdGluZ0Vycm9ySGFuZGxlcic7XG5cblxuY29uc3QgRklOSVNIRUQgPSA0O1xuY29uc3QgU1VDQ0VTUyA9IDIwMDtcbmNvbnN0IFJFUVVFU1RfVElNRU9VVCA9IDQwODtcblxuY29uc3QgRE9MUEhJTl9QTEFURk9STV9QUkVGSVggPSAnZG9scGhpbl9wbGF0Zm9ybV9pbnRlcm5fJztcbmNvbnN0IENMSUVOVF9JRF9IVFRQX0hFQURFUl9OQU1FID0gRE9MUEhJTl9QTEFURk9STV9QUkVGSVggKyAnZG9scGhpbkNsaWVudElkJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIge1xuXG4gICAgY29uc3RydWN0b3IodXJsLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy51cmwgPSB1cmw7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLmhlYWRlcnNJbmZvID0gZXhpc3RzKGNvbmZpZykgPyBjb25maWcuaGVhZGVyc0luZm8gOiBudWxsO1xuICAgICAgICBsZXQgY29ubmVjdGlvbkNvbmZpZyA9IGV4aXN0cyhjb25maWcpID8gY29uZmlnLmNvbm5lY3Rpb24gOiBudWxsO1xuICAgICAgICB0aGlzLm1heFJldHJ5ID0gZXhpc3RzKGNvbm5lY3Rpb25Db25maWcpICYmIGV4aXN0cyhjb25uZWN0aW9uQ29uZmlnLm1heFJldHJ5KT9jb25uZWN0aW9uQ29uZmlnLm1heFJldHJ5OiAzO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSBleGlzdHMoY29ubmVjdGlvbkNvbmZpZykgJiYgZXhpc3RzKGNvbm5lY3Rpb25Db25maWcudGltZW91dCk/Y29ubmVjdGlvbkNvbmZpZy50aW1lb3V0OiA1MDAwO1xuICAgICAgICB0aGlzLmZhaWxlZF9hdHRlbXB0ID0gMDtcbiAgICB9XG5cbiAgICBfaGFuZGxlRXJyb3IocmVqZWN0LCBlcnJvcikge1xuICAgICAgICBsZXQgY29ubmVjdGlvbkNvbmZpZyA9IGV4aXN0cyh0aGlzLmNvbmZpZykgPyB0aGlzLmNvbmZpZy5jb25uZWN0aW9uIDogbnVsbDtcbiAgICAgICAgbGV0IGVycm9ySGFuZGxlcnMgPSBleGlzdHMoY29ubmVjdGlvbkNvbmZpZykgJiYgZXhpc3RzKGNvbm5lY3Rpb25Db25maWcuZXJyb3JIYW5kbGVycyk/Y29ubmVjdGlvbkNvbmZpZy5lcnJvckhhbmRsZXJzOiBbbmV3IFJlbW90aW5nRXJyb3JIYW5kbGVyKCldO1xuICAgICAgICBlcnJvckhhbmRsZXJzLmZvckVhY2goZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlci5vbkVycm9yKGVycm9yKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgfVxuXG4gICAgX3NlbmQoY29tbWFuZHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGh0dHAgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGh0dHAud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcbiAgICAgICAgICAgIGh0dHAub25lcnJvciA9IChlcnJvckNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBIdHRwTmV0d29ya0Vycm9yKCdQbGF0Zm9ybUh0dHBUcmFuc21pdHRlcjogTmV0d29yayBlcnJvcicsIGVycm9yQ29udGVudCkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBodHRwLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaHR0cC5yZWFkeVN0YXRlID09PSBGSU5JU0hFRCl7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaHR0cC5zdGF0dXMpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBTVUNDRVNTOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbGVkX2F0dGVtcHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDbGllbnRJZCA9IGh0dHAuZ2V0UmVzcG9uc2VIZWFkZXIoQ0xJRU5UX0lEX0hUVFBfSEVBREVSX05BTUUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGlzdHMoY3VycmVudENsaWVudElkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RzKHRoaXMuY2xpZW50SWQpICYmIHRoaXMuY2xpZW50SWQgIT09IGN1cnJlbnRDbGllbnRJZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgRG9scGhpblNlc3Npb25FcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IENsaWVudElkIG9mIHRoZSByZXNwb25zZSBkaWQgbm90IG1hdGNoJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50SWQgPSBjdXJyZW50Q2xpZW50SWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGFuZGxlRXJyb3IocmVqZWN0LCBuZXcgRG9scGhpblNlc3Npb25FcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFNlcnZlciBkaWQgbm90IHNlbmQgYSBjbGllbnRJZCcpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShodHRwLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgUkVRVUVTVF9USU1FT1VUOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hhbmRsZUVycm9yKHJlamVjdCwgbmV3IERvbHBoaW5TZXNzaW9uRXJyb3IoJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBTZXNzaW9uIFRpbWVvdXQnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5mYWlsZWRfYXR0ZW1wdCA8PSB0aGlzLm1heFJldHJ5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mYWlsZWRfYXR0ZW1wdCA9IHRoaXMuZmFpbGVkX2F0dGVtcHQgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9oYW5kbGVFcnJvcihyZWplY3QsIG5ldyBIdHRwUmVzcG9uc2VFcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IEhUVFAgU3RhdHVzICE9IDIwMCAoJyArIGh0dHAuc3RhdHVzICsgJyknKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBodHRwLm9wZW4oJ1BPU1QnLCB0aGlzLnVybCk7XG4gICAgICAgICAgICBpZiAoZXhpc3RzKHRoaXMuY2xpZW50SWQpKSB7XG4gICAgICAgICAgICAgICAgaHR0cC5zZXRSZXF1ZXN0SGVhZGVyKENMSUVOVF9JRF9IVFRQX0hFQURFUl9OQU1FLCB0aGlzLmNsaWVudElkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGV4aXN0cyh0aGlzLmhlYWRlcnNJbmZvKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gdGhpcy5oZWFkZXJzSW5mbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5oZWFkZXJzSW5mby5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5zZXRSZXF1ZXN0SGVhZGVyKGksIHRoaXMuaGVhZGVyc0luZm9baV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmFpbGVkX2F0dGVtcHQgPiB0aGlzLm1heFJldHJ5KSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kKENvZGVjLmVuY29kZShjb21tYW5kcykpO1xuICAgICAgICAgICAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBodHRwLnNlbmQoQ29kZWMuZW5jb2RlKGNvbW1hbmRzKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdHJhbnNtaXQoY29tbWFuZHMsIG9uRG9uZSkge1xuICAgICAgICB0aGlzLl9zZW5kKGNvbW1hbmRzKVxuICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2VUZXh0ID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2VUZXh0LnRyaW0oKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZUNvbW1hbmRzID0gQ29kZWMuZGVjb2RlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkRvbmUocmVzcG9uc2VDb21tYW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0KCdlcnJvcicsIG5ldyBEb2xwaGluUmVtb3RpbmdFcnJvcignUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXI6IFBhcnNlIGVycm9yOiAoSW5jb3JyZWN0IHJlc3BvbnNlID0gJyArIHJlc3BvbnNlVGV4dCArICcpJykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdCgnZXJyb3InLCBuZXcgRG9scGhpblJlbW90aW5nRXJyb3IoJ1BsYXRmb3JtSHR0cFRyYW5zbWl0dGVyOiBFbXB0eSByZXNwb25zZScpKTtcbiAgICAgICAgICAgICAgICAgICAgb25Eb25lKFtdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgICAgIG9uRG9uZShbXSk7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzaWduYWwoY29tbWFuZCkge1xuICAgICAgICB0aGlzLl9zZW5kKFtjb21tYW5kXSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVtaXQoJ2Vycm9yJywgZXJyb3IpKTtcbiAgICB9XG59XG5cbkVtaXR0ZXIoUGxhdGZvcm1IdHRwVHJhbnNtaXR0ZXIucHJvdG90eXBlKTtcbiIsIlxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVtb3RpbmdFcnJvckhhbmRsZXIge1xuXG4gICAgb25FcnJvcihlcnJvcikge1xuICAgICAgICB3aW5kb3cuY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfVxuXG59IiwiLyogQ29weXJpZ2h0IDIwMTUgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbi8qanNsaW50IGJyb3dzZXJpZnk6IHRydWUgKi9cblwidXNlIHN0cmljdFwiO1xuXG52YXIgY2hlY2tNZXRob2ROYW1lO1xuXG52YXIgZXhpc3RzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgIT09ICd1bmRlZmluZWQnICYmIG9iamVjdCAhPT0gbnVsbDtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmV4aXN0cyA9IGV4aXN0cztcblxubW9kdWxlLmV4cG9ydHMuY2hlY2tNZXRob2QgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgY2hlY2tNZXRob2ROYW1lID0gbmFtZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzLmNoZWNrUGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgcGFyYW1ldGVyTmFtZSkge1xuICAgIGlmICghZXhpc3RzKHBhcmFtKSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBwYXJhbWV0ZXIgJyArIHBhcmFtZXRlck5hbWUgKyAnIGlzIG1hbmRhdG9yeSBpbiAnICsgY2hlY2tNZXRob2ROYW1lKTtcbiAgICB9XG59O1xuIiwiLyogQ29weXJpZ2h0IDIwMTUgQ2Fub28gRW5naW5lZXJpbmcgQUcuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG4ndXNlIHN0cmljdCc7XG52YXIgZG9scGhpbkNsaWVudCA9IHJlcXVpcmUoJy4uL2Jvd2VyX2NvbXBvbmVudHMvZG9scGhpbi1wbGF0Zm9ybS1qcy9kaXN0L2RvbHBoaW4tcGxhdGZvcm0uanMnKTtcbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nLCBbXSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5wcm92aWRlcignJGRvbHBoaW5Db25maWcnLCBbZnVuY3Rpb24gKCkge1xuXG4gICAgdmFyICRjZmcgPSB7fTtcbiAgICB0aGlzLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uIChjZmcpIHtcbiAgICAgICAgJGNmZyA9IGNmZztcbiAgICB9O1xuXG4gICAgdGhpcy4kZ2V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJGNmZztcbiAgICB9O1xuXG59XSk7XG5cbmFuZ3VsYXIubW9kdWxlKCdEb2xwaGluUGxhdGZvcm0nKS5mYWN0b3J5KCdjbGllbnRDb250ZXh0RmFjdG9yeScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IGRvbHBoaW5DbGllbnQuQ2xpZW50Q29udGV4dEZhY3RvcnkoKTtcbn0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgndmFuaWxsYUNsaWVudENvbnRleHQnLCBbJ2NsaWVudENvbnRleHRGYWN0b3J5JywgJyRkb2xwaGluQ29uZmlnJywgZnVuY3Rpb24gKGNsaWVudENvbnRleHRGYWN0b3J5LCAkZG9scGhpbkNvbmZpZykge1xuICAgIHJldHVybiBjbGllbnRDb250ZXh0RmFjdG9yeS5jcmVhdGUoJGRvbHBoaW5Db25maWcuRE9MUEhJTl9VUkwsICRkb2xwaGluQ29uZmlnKTtcbn1dKTtcblxuYW5ndWxhci5tb2R1bGUoJ0RvbHBoaW5QbGF0Zm9ybScpLmZhY3RvcnkoJ2RvbHBoaW5CaW5kaW5nJywgWyckcm9vdFNjb3BlJywgJyR0aW1lb3V0JywgJ3ZhbmlsbGFDbGllbnRDb250ZXh0JywgJyRsb2cnLCBmdW5jdGlvbiAoJHJvb3RTY29wZSwgJHRpbWVvdXQsIHZhbmlsbGFDbGllbnRDb250ZXh0LCAkbG9nKSB7XG5cbiAgICAkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkgPSBmYWxzZTtcblxuICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJHJvb3RTY29wZS53YWl0aW5nRm9yR2xvYmFsRG9scGhpbkFwcGx5KSB7XG4gICAgICAgICAgICAkcm9vdFNjb3BlLndhaXRpbmdGb3JHbG9iYWxEb2xwaGluQXBwbHkgPSB0cnVlO1xuICAgICAgICAgICAgJHRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRyb290U2NvcGUud2FpdGluZ0Zvckdsb2JhbERvbHBoaW5BcHBseSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0FuZ3VsYXIgYXBwbHkgaXMgY2FsbGVkIGJ5IERvbHBoaW4gUGxhdGZvcm0nKTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgZG9scGhpbkJpbmRpbmcgPSB7XG5cbiAgICAgICAgaW5qZWN0QXJyYXk6IGZ1bmN0aW9uIChiYXNlQXJyYXksIHN0YXJ0SW5kZXgsIGluc2VydEFycmF5KSB7XG4gICAgICAgICAgICBiYXNlQXJyYXkuc3BsaWNlLmFwcGx5KGJhc2VBcnJheSwgW3N0YXJ0SW5kZXgsIDBdLmNvbmNhdChpbnNlcnRBcnJheSkpO1xuICAgICAgICB9LFxuICAgICAgICBleGlzdHM6IGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygb2JqZWN0ICE9PSAndW5kZWZpbmVkJyAmJiBvYmplY3QgIT09IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlZXBFcXVhbDogZnVuY3Rpb24gKGFycmF5MSwgYXJyYXkyKSB7XG4gICAgICAgICAgICBpZiAoYXJyYXkxID09PSBhcnJheTIgfHwgKCF0aGlzLmV4aXN0cyhhcnJheTEpICYmICF0aGlzLmV4aXN0cyhhcnJheTIpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZXhpc3RzKGFycmF5MSkgIT09IHRoaXMuZXhpc3RzKGFycmF5MikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbiA9IGFycmF5MS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoYXJyYXkyLmxlbmd0aCAhPT0gbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFycmF5MVtpXSAhPT0gYXJyYXkyW2ldKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKGJlYW5NYW5hZ2VyKSB7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vbkFkZGVkKGRvbHBoaW5CaW5kaW5nLm9uQmVhbkFkZGVkSGFuZGxlcik7XG4gICAgICAgICAgICBiZWFuTWFuYWdlci5vblJlbW92ZWQoZG9scGhpbkJpbmRpbmcub25CZWFuUmVtb3ZlZEhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25CZWFuVXBkYXRlKGRvbHBoaW5CaW5kaW5nLm9uQmVhblVwZGF0ZUhhbmRsZXIpO1xuICAgICAgICAgICAgYmVhbk1hbmFnZXIub25BcnJheVVwZGF0ZShkb2xwaGluQmluZGluZy5vbkFycmF5VXBkYXRlSGFuZGxlcik7XG5cbiAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gYmluZGluZyBsaXN0ZW5lcnMgZm9yIEFuZ3VsYXIgcmVnaXN0ZXJlZCcpO1xuICAgICAgICB9LFxuICAgICAgICB3YXRjaEF0dHJpYnV0ZTogZnVuY3Rpb24gKGJlYW4sIGF0dHJpYnV0ZSkge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQWRkZWQgQW5ndWxhciBsaXN0ZW5lciBmb3IgcHJvcGVydHkgJyArIGF0dHJpYnV0ZSArICcgb2YgYmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS4kd2F0Y2goXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmVhblthdHRyaWJ1dGVdO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdWYWx1ZSAnICsgYXR0cmlidXRlICsgJyBvZiBiZWFuICcgKyBKU09OLnN0cmluZ2lmeShiZWFuKSArICcgY2hhbmdlZCBmcm9tICcgKyBvbGRWYWx1ZSArICcgdG8gJyArIG5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgdmFuaWxsYUNsaWVudENvbnRleHQuYmVhbk1hbmFnZXIuY2xhc3NSZXBvc2l0b3J5Lm5vdGlmeUJlYW5DaGFuZ2UoYmVhbiwgYXR0cmlidXRlLCBuZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWFuQWRkZWRIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikgKyAnIGFkZGVkJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4gYmVhbikge1xuICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLndhdGNoQXR0cmlidXRlKGJlYW4sIGF0dHIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQmVhblJlbW92ZWRIYW5kbGVyOiBmdW5jdGlvbiAoYmVhbikge1xuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQmVhbiAnICsgSlNPTi5zdHJpbmdpZnkoYmVhbikgKyAnIHJlbW92ZWQnKTtcbiAgICAgICAgICAgICRyb290U2NvcGUuYXBwbHlJbkFuZ3VsYXIoKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CZWFuVXBkYXRlSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4sIHByb3BlcnR5TmFtZSwgbmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmV3UHJvcGVydHkgPSB0cnVlO1xuICAgICAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBiZWFuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dHIgPT09IHByb3BlcnR5TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG5ld1Byb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnVmFsdWUgJyArIHByb3BlcnR5TmFtZSArICcgd2FzIGFkZGVkIHRvIGJlYW4gJyArIEpTT04uc3RyaW5naWZ5KGJlYW4pKTtcbiAgICAgICAgICAgICAgICBkb2xwaGluQmluZGluZy53YXRjaEF0dHJpYnV0ZShiZWFuLCBwcm9wZXJ0eU5hbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAob2xkVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnUmVjZWl2ZWQgYmVhbiB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdpdGhvdXQgYW55IGNoYW5nZScpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQmVhbiB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHdpdGggbmV3IHZhbHVlIFwiJyArIG5ld1ZhbHVlICsgJ1wiJyk7XG5cbiAgICAgICAgICAgIGJlYW5bcHJvcGVydHlOYW1lXSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5hcHBseUluQW5ndWxhcigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkFycmF5VXBkYXRlSGFuZGxlcjogZnVuY3Rpb24gKGJlYW4sIHByb3BlcnR5TmFtZSwgaW5kZXgsIGNvdW50LCBuZXdFbGVtZW50cykge1xuICAgICAgICAgICAgdmFyIGFycmF5ID0gYmVhbltwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgdmFyIG9sZEVsZW1lbnRzID0gYXJyYXkuc2xpY2UoaW5kZXgsIGluZGV4ICsgY291bnQpO1xuICAgICAgICAgICAgaWYgKGRvbHBoaW5CaW5kaW5nLmRlZXBFcXVhbChuZXdFbGVtZW50cywgb2xkRWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkbG9nLmRlYnVnKCdBcnJheSB1cGRhdGUgZm9yIHByb3BlcnR5ICcgKyBwcm9wZXJ0eU5hbWUgKyAnIHN0YXJ0aW5nIGF0IGluZGV4ICcgKyBpbmRleCArICcgd2l0aCAnICsgSlNPTi5zdHJpbmdpZnkobmV3RWxlbWVudHMpKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBuZXdFbGVtZW50cyA9PT0gJ3VuZGVmaW5lZCcgfHwgKG5ld0VsZW1lbnRzICYmIG5ld0VsZW1lbnRzLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIGNvdW50KTtcbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbHBoaW5CaW5kaW5nLmluamVjdEFycmF5KGFycmF5LCBpbmRleCwgbmV3RWxlbWVudHMpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChiZWFuIGluIG5ld0VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGF0dHIgaW4gYmVhbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9scGhpbkJpbmRpbmcud2F0Y2hBdHRyaWJ1dGUoYmVhbiwgYXR0cik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkcm9vdFNjb3BlLmFwcGx5SW5Bbmd1bGFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBiaW5kaW5nIGNyZWF0ZWQnKTtcblxuICAgIHJldHVybiBkb2xwaGluQmluZGluZztcblxufV0pO1xuXG5hbmd1bGFyLm1vZHVsZSgnRG9scGhpblBsYXRmb3JtJykuZmFjdG9yeSgnY2xpZW50Q29udGV4dCcsIFsndmFuaWxsYUNsaWVudENvbnRleHQnLCAnZG9scGhpbkJpbmRpbmcnLCAnJHdpbmRvdycsICckbG9nJywgZnVuY3Rpb24gKHZhbmlsbGFDbGllbnRDb250ZXh0LCBkb2xwaGluQmluZGluZywgJHdpbmRvdywgJGxvZykge1xuICAgIHZhciBjbGllbnRDb250ZXh0ID0ge1xuICAgICAgICBjcmVhdGVDb250cm9sbGVyOiBmdW5jdGlvbiAoc2NvcGUsIGNvbnRyb2xsZXJOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFuaWxsYUNsaWVudENvbnRleHQuY3JlYXRlQ29udHJvbGxlcihjb250cm9sbGVyTmFtZSkudGhlbihmdW5jdGlvbiAoY29udHJvbGxlclByb3h5KSB7XG4gICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnQ3JlYXRpbmcgRG9scGhpbiBQbGF0Zm9ybSBjb250cm9sbGVyICcgKyBjb250cm9sbGVyTmFtZSk7XG4gICAgICAgICAgICAgICAgc2NvcGUuJG9uKCckZGVzdHJveScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJGxvZy5kZWJ1ZygnRGVzdHJveWluZyBEb2xwaGluIFBsYXRmb3JtIGNvbnRyb2xsZXIgJyArIGNvbnRyb2xsZXJOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgY29udHJvbGxlclByb3h5LmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzY29wZS5tb2RlbCA9IGNvbnRyb2xsZXJQcm94eS5tb2RlbDtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29udHJvbGxlclByb3h5O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2Nvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbmlsbGFDbGllbnRDb250ZXh0LmRpc2Nvbm5lY3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgZGlzY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY29ubmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFuaWxsYUNsaWVudENvbnRleHQuY29ubmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICRsb2cuZGVidWcoJ0RvbHBoaW4gUGxhdGZvcm0gY29udGV4dCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbm5lY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB2YW5pbGxhQ2xpZW50Q29udGV4dC5vbkNvbm5lY3QoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkbG9nLmRlYnVnKCdEb2xwaGluIFBsYXRmb3JtIGNvbnRleHQgY29ubmVjdGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBkb2xwaGluQmluZGluZy5pbml0KHZhbmlsbGFDbGllbnRDb250ZXh0LmJlYW5NYW5hZ2VyKTtcbiAgICAkd2luZG93Lm9uYmVmb3JldW5sb2FkID0gY2xpZW50Q29udGV4dC5kaXNjb25uZWN0O1xuXG4gICAgJGxvZy5kZWJ1ZygnRG9scGhpbiBQbGF0Zm9ybSBjb250ZXh0IGNyZWF0ZWQnKTtcblxuICAgIHJldHVybiBjbGllbnRDb250ZXh0O1xufV0pO1xuIl19
