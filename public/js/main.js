!function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e);
    } : t(e);
}("undefined" != typeof window ? window : this, function(C, e) {
    "use strict";
    var t = [], j = C.document, r = Object.getPrototypeOf, s = t.slice, g = t.concat, u = t.push, i = t.indexOf, n = {}, o = n.toString, h = n.hasOwnProperty, a = h.toString, l = a.call(Object), m = {};
    function y(e, t) {
        t = t || j;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n);
    }
    var c = "3.1.1", k = function(e, t) {
        return new k.fn.init(e, t);
    }, f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, d = /-([a-z])/g, v = function(e, t) {
        return t.toUpperCase();
    };
    k.fn = k.prototype = {
        jquery: c,
        constructor: k,
        length: 0,
        toArray: function() {
            return s.call(this);
        },
        get: function(e) {
            return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
        },
        pushStack: function(e) {
            var t = k.merge(this.constructor(), e);
            return t.prevObject = this, t;
        },
        each: function(e) {
            return k.each(this, e);
        },
        map: function(n) {
            return this.pushStack(k.map(this, function(e, t) {
                return n.call(e, t, e);
            }));
        },
        slice: function() {
            return this.pushStack(s.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(e) {
            var t = this.length, n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [ this[n] ] : []);
        },
        end: function() {
            return this.prevObject || this.constructor();
        },
        push: u,
        sort: t.sort,
        splice: t.splice
    }, k.extend = k.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || k.isFunction(a) || (a = {}), 
        s === u && (a = this, s--); s < u; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], 
        r = e[t], a !== r && (l && r && (k.isPlainObject(r) || (i = k.isArray(r))) ? (i ? (i = !1, 
        o = n && k.isArray(n) ? n : []) : o = n && k.isPlainObject(n) ? n : {}, a[t] = k.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a;
    }, k.extend({
        expando: "jQuery" + (c + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e);
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === k.type(e);
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return null != e && e === e.window;
        },
        isNumeric: function(e) {
            var t = k.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || (n = h.call(t, "constructor") && t.constructor, 
            "function" == typeof n && a.call(n) === l));
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0;
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e;
        },
        globalEval: function(e) {
            y(e);
        },
        camelCase: function(e) {
            return e.replace(p, "ms-").replace(d, v);
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function(e, t) {
            var n, r = 0;
            if (x(e)) {
                for (n = e.length; r < n; r++) if (t.call(e[r], r, e[r]) === !1) break;
            } else for (r in e) if (t.call(e[r], r, e[r]) === !1) break;
            return e;
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(f, "");
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (x(Object(e)) ? k.merge(n, "string" == typeof e ? [ e ] : e) : u.call(n, e)), 
            n;
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : i.call(t, e, n);
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e;
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, a = e.length, s = !n; o < a; o++) r = !t(e[o], o), r !== s && i.push(e[o]);
            return i;
        },
        map: function(e, t, n) {
            var r, i, o = 0, a = [];
            if (x(e)) for (r = e.length; o < r; o++) i = t(e[o], o, n), null != i && a.push(i); else for (o in e) i = t(e[o], o, n), 
            null != i && a.push(i);
            return g.apply([], a);
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), k.isFunction(e)) return r = s.call(arguments, 2), 
            i = function() {
                return e.apply(t || this, r.concat(s.call(arguments)));
            }, i.guid = e.guid = e.guid || k.guid++, i;
        },
        now: Date.now,
        support: m
    }), "function" == typeof Symbol && (k.fn[Symbol.iterator] = t[Symbol.iterator]), 
    k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
    });
    function x(e) {
        var t = !!e && "length" in e && e.length, n = k.type(e);
        return "function" !== n && !k.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }
    var b = function(n) {
        var e, d, b, o, i, h, f, g, w, u, l, T, C, a, j, m, s, c, y, k = "sizzle" + 1 * new Date(), v = n.document, E = 0, r = 0, p = ae(), x = ae(), S = ae(), N = function(e, t) {
            return e === t && (l = !0), 0;
        }, D = {}.hasOwnProperty, t = [], A = t.pop, q = t.push, L = t.push, H = t.slice, F = function(e, t) {
            for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
            return -1;
        }, O = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", R = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", P = "\\[" + R + "*(" + M + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + M + "))|)" + R + "*\\]", I = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", W = new RegExp(R + "+", "g"), $ = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"), B = new RegExp("^" + R + "*," + R + "*"), Q = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"), _ = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"), X = new RegExp(I), z = new RegExp("^" + M + "$"), U = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M + "|[*])"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + O + ")$", "i"),
            needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i")
        }, V = /^(?:input|select|textarea|button)$/i, G = /^h\d$/i, J = /^[^{]+\{\s*\[native \w/, Y = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, K = /[+~]/, Z = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"), ee = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        }, te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ne = function(e, t) {
            return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
        }, re = function() {
            T();
        }, ie = ve(function(e) {
            return e.disabled === !0 && ("form" in e || "label" in e);
        }, {
            dir: "parentNode",
            next: "legend"
        });
        try {
            L.apply(t = H.call(v.childNodes), v.childNodes), t[v.childNodes.length].nodeType;
        } catch (e) {
            L = {
                apply: t.length ? function(e, t) {
                    q.apply(e, H.call(t));
                } : function(e, t) {
                    var n = e.length, r = 0;
                    while (e[n++] = t[r++]) ;
                    e.length = n - 1;
                }
            };
        }
        function oe(e, t, n, r) {
            var i, o, a, s, u, l, c, f = t && t.ownerDocument, p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!r && ((t ? t.ownerDocument || t : v) !== C && T(t), t = t || C, j)) {
                if (11 !== p && (u = Y.exec(e))) if (i = u[1]) {
                    if (9 === p) {
                        if (!(a = t.getElementById(i))) return n;
                        if (a.id === i) return n.push(a), n;
                    } else if (f && (a = f.getElementById(i)) && y(t, a) && a.id === i) return n.push(a), 
                    n;
                } else {
                    if (u[2]) return L.apply(n, t.getElementsByTagName(e)), n;
                    if ((i = u[3]) && d.getElementsByClassName && t.getElementsByClassName) return L.apply(n, t.getElementsByClassName(i)), 
                    n;
                }
                if (d.qsa && !S[e + " "] && (!m || !m.test(e))) {
                    if (1 !== p) f = t, c = e; else if ("object" !== t.nodeName.toLowerCase()) {
                        (s = t.getAttribute("id")) ? s = s.replace(te, ne) : t.setAttribute("id", s = k), 
                        l = h(e), o = l.length;
                        while (o--) l[o] = "#" + s + " " + ye(l[o]);
                        c = l.join(","), f = K.test(e) && ge(t.parentNode) || t;
                    }
                    if (c) try {
                        return L.apply(n, f.querySelectorAll(c)), n;
                    } catch (e) {} finally {
                        s === k && t.removeAttribute("id");
                    }
                }
            }
            return g(e.replace($, "$1"), t, n, r);
        }
        function ae() {
            var n = [];
            function r(e, t) {
                return n.push(e + " ") > b.cacheLength && delete r[n.shift()], r[e + " "] = t;
            }
            return r;
        }
        function se(e) {
            return e[k] = !0, e;
        }
        function ue(e) {
            var t = C.createElement("fieldset");
            try {
                return !!e(t);
            } catch (e) {
                return !1;
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null;
            }
        }
        function le(e, t) {
            var n = e.split("|"), r = n.length;
            while (r--) b.attrHandle[n[r]] = t;
        }
        function ce(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) while (n = n.nextSibling) if (n === t) return -1;
            return e ? 1 : -1;
        }
        function fe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return "input" === t && e.type === n;
            };
        }
        function pe(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n;
            };
        }
        function de(t) {
            return function(e) {
                return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ie(e) === t : e.disabled === t : "label" in e && e.disabled === t;
            };
        }
        function he(a) {
            return se(function(o) {
                return o = +o, se(function(e, t) {
                    var n, r = a([], e.length, o), i = r.length;
                    while (i--) e[n = r[i]] && (e[n] = !(t[n] = e[n]));
                });
            });
        }
        function ge(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e;
        }
        d = oe.support = {}, i = oe.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
        }, T = oe.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : v;
            return r !== C && 9 === r.nodeType && r.documentElement ? (C = r, a = C.documentElement, 
            j = !i(C), v !== C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", re, !1) : n.attachEvent && n.attachEvent("onunload", re)), 
            d.attributes = ue(function(e) {
                return e.className = "i", !e.getAttribute("className");
            }), d.getElementsByTagName = ue(function(e) {
                return e.appendChild(C.createComment("")), !e.getElementsByTagName("*").length;
            }), d.getElementsByClassName = J.test(C.getElementsByClassName), d.getById = ue(function(e) {
                return a.appendChild(e).id = k, !C.getElementsByName || !C.getElementsByName(k).length;
            }), d.getById ? (b.filter.ID = function(e) {
                var t = e.replace(Z, ee);
                return function(e) {
                    return e.getAttribute("id") === t;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && j) {
                    var n = t.getElementById(e);
                    return n ? [ n ] : [];
                }
            }) : (b.filter.ID = function(e) {
                var n = e.replace(Z, ee);
                return function(e) {
                    var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === n;
                };
            }, b.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && j) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if (n = o.getAttributeNode("id"), n && n.value === e) return [ o ];
                        i = t.getElementsByName(e), r = 0;
                        while (o = i[r++]) if (n = o.getAttributeNode("id"), n && n.value === e) return [ o ];
                    }
                    return [];
                }
            }), b.find.TAG = d.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
            } : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++]) 1 === n.nodeType && r.push(n);
                    return r;
                }
                return o;
            }, b.find.CLASS = d.getElementsByClassName && function(e, t) {
                if ("undefined" != typeof t.getElementsByClassName && j) return t.getElementsByClassName(e);
            }, s = [], m = [], (d.qsa = J.test(C.querySelectorAll)) && (ue(function(e) {
                a.appendChild(e).innerHTML = "<a id='" + k + "'></a><select id='" + k + "-\r\\' msallowcapture=''><option selected=''></option></select>", 
                e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + R + "*(?:''|\"\")"), 
                e.querySelectorAll("[selected]").length || m.push("\\[" + R + "*(?:value|" + O + ")"), 
                e.querySelectorAll("[id~=" + k + "-]").length || m.push("~="), e.querySelectorAll(":checked").length || m.push(":checked"), 
                e.querySelectorAll("a#" + k + "+*").length || m.push(".#.+[+~]");
            }), ue(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && m.push("name" + R + "*[*^$|!~]?="), 
                2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), 
                a.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), 
                e.querySelectorAll("*,:x"), m.push(",.*:");
            })), (d.matchesSelector = J.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ue(function(e) {
                d.disconnectedMatch = c.call(e, "*"), c.call(e, "[s!='']:x"), s.push("!=", I);
            }), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), 
            t = J.test(a.compareDocumentPosition), y = t || J.test(a.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
            } : function(e, t) {
                if (t) while (t = t.parentNode) if (t === e) return !0;
                return !1;
            }, N = t ? function(e, t) {
                if (e === t) return l = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 
                1 & n || !d.sortDetached && t.compareDocumentPosition(e) === n ? e === C || e.ownerDocument === v && y(v, e) ? -1 : t === C || t.ownerDocument === v && y(v, t) ? 1 : u ? F(u, e) - F(u, t) : 0 : 4 & n ? -1 : 1);
            } : function(e, t) {
                if (e === t) return l = !0, 0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [ e ], s = [ t ];
                if (!i || !o) return e === C ? -1 : t === C ? 1 : i ? -1 : o ? 1 : u ? F(u, e) - F(u, t) : 0;
                if (i === o) return ce(e, t);
                n = e;
                while (n = n.parentNode) a.unshift(n);
                n = t;
                while (n = n.parentNode) s.unshift(n);
                while (a[r] === s[r]) r++;
                return r ? ce(a[r], s[r]) : a[r] === v ? -1 : s[r] === v ? 1 : 0;
            }, C) : C;
        }, oe.matches = function(e, t) {
            return oe(e, null, null, t);
        }, oe.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== C && T(e), t = t.replace(_, "='$1']"), d.matchesSelector && j && !S[t + " "] && (!s || !s.test(t)) && (!m || !m.test(t))) try {
                var n = c.call(e, t);
                if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
            } catch (e) {}
            return oe(t, C, null, [ e ]).length > 0;
        }, oe.contains = function(e, t) {
            return (e.ownerDocument || e) !== C && T(e), y(e, t);
        }, oe.attr = function(e, t) {
            (e.ownerDocument || e) !== C && T(e);
            var n = b.attrHandle[t.toLowerCase()], r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !j) : void 0;
            return void 0 !== r ? r : d.attributes || !j ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }, oe.escape = function(e) {
            return (e + "").replace(te, ne);
        }, oe.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (l = !d.detectDuplicates, u = !d.sortStable && e.slice(0), e.sort(N), l) {
                while (t = e[i++]) t === e[i] && (r = n.push(i));
                while (r--) e.splice(n[r], 1);
            }
            return u = null, e;
        }, o = oe.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
                } else if (3 === i || 4 === i) return e.nodeValue;
            } else while (t = e[r++]) n += o(t);
            return n;
        }, b = oe.selectors = {
            cacheLength: 50,
            createPseudo: se,
            match: U,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(Z, ee), e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee), 
                    "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), 
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), 
                    e;
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), 
                    e[2] = n.slice(0, t)), e.slice(0, 3));
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(Z, ee).toLowerCase();
                    return "*" === e ? function() {
                        return !0;
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                    };
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "");
                    });
                },
                ATTR: function(n, r, i) {
                    return function(e) {
                        var t = oe.attr(e, n);
                        return null == t ? "!=" === r : !r || (t += "", "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && t.indexOf(i) > -1 : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? (" " + t.replace(W, " ") + " ").indexOf(i) > -1 : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"));
                    };
                },
                CHILD: function(h, e, t, g, m) {
                    var y = "nth" !== h.slice(0, 3), v = "last" !== h.slice(-4), x = "of-type" === e;
                    return 1 === g && 0 === m ? function(e) {
                        return !!e.parentNode;
                    } : function(e, t, n) {
                        var r, i, o, a, s, u, l = y !== v ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                        if (c) {
                            if (y) {
                                while (l) {
                                    a = e;
                                    while (a = a[l]) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                                    u = l = "only" === h && !u && "nextSibling";
                                }
                                return !0;
                            }
                            if (u = [ v ? c.firstChild : c.lastChild ], v && p) {
                                a = c, o = a[k] || (a[k] = {}), i = o[a.uniqueID] || (o[a.uniqueID] = {}), r = i[h] || [], 
                                s = r[0] === E && r[1], d = s && r[2], a = s && c.childNodes[s];
                                while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if (1 === a.nodeType && ++d && a === e) {
                                    i[h] = [ E, s, d ];
                                    break;
                                }
                            } else if (p && (a = e, o = a[k] || (a[k] = {}), i = o[a.uniqueID] || (o[a.uniqueID] = {}), 
                            r = i[h] || [], s = r[0] === E && r[1], d = s), d === !1) while (a = ++s && a && a[l] || (d = s = 0) || u.pop()) if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && (o = a[k] || (a[k] = {}), 
                            i = o[a.uniqueID] || (o[a.uniqueID] = {}), i[h] = [ E, d ]), a === e)) break;
                            return d -= m, d === g || d % g === 0 && d / g >= 0;
                        }
                    };
                },
                PSEUDO: function(e, o) {
                    var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
                    return a[k] ? a(o) : a.length > 1 ? (t = [ e, e, "", o ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function(e, t) {
                        var n, r = a(e, o), i = r.length;
                        while (i--) n = F(e, r[i]), e[n] = !(t[n] = r[i]);
                    }) : function(e) {
                        return a(e, 0, t);
                    }) : a;
                }
            },
            pseudos: {
                not: se(function(e) {
                    var r = [], i = [], s = f(e.replace($, "$1"));
                    return s[k] ? se(function(e, t, n, r) {
                        var i, o = s(e, null, r, []), a = e.length;
                        while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                    }) : function(e, t, n) {
                        return r[0] = e, s(r, null, n, i), r[0] = null, !i.pop();
                    };
                }),
                has: se(function(t) {
                    return function(e) {
                        return oe(t, e).length > 0;
                    };
                }),
                contains: se(function(t) {
                    return t = t.replace(Z, ee), function(e) {
                        return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                    };
                }),
                lang: se(function(n) {
                    return z.test(n || "") || oe.error("unsupported lang: " + n), n = n.replace(Z, ee).toLowerCase(), 
                    function(e) {
                        var t;
                        do {
                            if (t = j ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return t = t.toLowerCase(), 
                            t === n || 0 === t.indexOf(n + "-");
                        } while ((e = e.parentNode) && 1 === e.nodeType);
                        return !1;
                    };
                }),
                target: function(e) {
                    var t = n.location && n.location.hash;
                    return t && t.slice(1) === e.id;
                },
                root: function(e) {
                    return e === a;
                },
                focus: function(e) {
                    return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: de(!1),
                disabled: de(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected;
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
                    return !0;
                },
                parent: function(e) {
                    return !b.pseudos.empty(e);
                },
                header: function(e) {
                    return G.test(e.nodeName);
                },
                input: function(e) {
                    return V.test(e.nodeName);
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t;
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
                },
                first: he(function() {
                    return [ 0 ];
                }),
                last: he(function(e, t) {
                    return [ t - 1 ];
                }),
                eq: he(function(e, t, n) {
                    return [ n < 0 ? n + t : n ];
                }),
                even: he(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                }),
                odd: he(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                }),
                lt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
                    return e;
                }),
                gt: he(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                    return e;
                })
            }
        }, b.pseudos.nth = b.pseudos.eq;
        for (e in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) b.pseudos[e] = fe(e);
        for (e in {
            submit: !0,
            reset: !0
        }) b.pseudos[e] = pe(e);
        function me() {}
        me.prototype = b.filters = b.pseudos, b.setFilters = new me(), h = oe.tokenize = function(e, t) {
            var n, r, i, o, a, s, u, l = x[e + " "];
            if (l) return t ? 0 : l.slice(0);
            a = e, s = [], u = b.preFilter;
            while (a) {
                n && !(r = B.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), 
                n = !1, (r = Q.exec(a)) && (n = r.shift(), i.push({
                    value: n,
                    type: r[0].replace($, " ")
                }), a = a.slice(n.length));
                for (o in b.filter) !(r = U[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(), 
                i.push({
                    value: n,
                    type: o,
                    matches: r
                }), a = a.slice(n.length));
                if (!n) break;
            }
            return t ? a.length : a ? oe.error(e) : x(e, s).slice(0);
        };
        function ye(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
        }
        function ve(s, e, t) {
            var u = e.dir, l = e.next, c = l || u, f = t && "parentNode" === c, p = r++;
            return e.first ? function(e, t, n) {
                while (e = e[u]) if (1 === e.nodeType || f) return s(e, t, n);
                return !1;
            } : function(e, t, n) {
                var r, i, o, a = [ E, p ];
                if (n) {
                    while (e = e[u]) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
                } else while (e = e[u]) if (1 === e.nodeType || f) if (o = e[k] || (e[k] = {}), 
                i = o[e.uniqueID] || (o[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[u] || e; else {
                    if ((r = i[c]) && r[0] === E && r[1] === p) return a[2] = r[2];
                    if (i[c] = a, a[2] = s(e, t, n)) return !0;
                }
                return !1;
            };
        }
        function xe(i) {
            return i.length > 1 ? function(e, t, n) {
                var r = i.length;
                while (r--) if (!i[r](e, t, n)) return !1;
                return !0;
            } : i[0];
        }
        function be(e, t, n) {
            for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
            return n;
        }
        function we(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && (n && !n(o, r, i) || (a.push(o), 
            l && t.push(s)));
            return a;
        }
        function Te(d, h, g, m, y, e) {
            return m && !m[k] && (m = Te(m)), y && !y[k] && (y = Te(y, e)), se(function(e, t, n, r) {
                var i, o, a, s = [], u = [], l = t.length, c = e || be(h || "*", n.nodeType ? [ n ] : n, []), f = !d || !e && h ? c : we(c, s, d, n, r), p = g ? y || (e ? d : l || m) ? [] : t : f;
                if (g && g(f, p, n, r), m) {
                    i = we(p, u), m(i, [], n, r), o = i.length;
                    while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
                }
                if (e) {
                    if (y || d) {
                        if (y) {
                            i = [], o = p.length;
                            while (o--) (a = p[o]) && i.push(f[o] = a);
                            y(null, p = [], i, r);
                        }
                        o = p.length;
                        while (o--) (a = p[o]) && (i = y ? F(e, a) : s[o]) > -1 && (e[i] = !(t[i] = a));
                    }
                } else p = we(p === t ? p.splice(l, p.length) : p), y ? y(null, t, p, r) : L.apply(t, p);
            });
        }
        function Ce(e) {
            for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = ve(function(e) {
                return e === i;
            }, a, !0), l = ve(function(e) {
                return F(i, e) > -1;
            }, a, !0), c = [ function(e, t, n) {
                var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                return i = null, r;
            } ]; s < r; s++) if (t = b.relative[e[s].type]) c = [ ve(xe(c), t) ]; else {
                if (t = b.filter[e[s].type].apply(null, e[s].matches), t[k]) {
                    for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
                    return Te(s > 1 && xe(c), s > 1 && ye(e.slice(0, s - 1).concat({
                        value: " " === e[s - 2].type ? "*" : ""
                    })).replace($, "$1"), t, s < n && Ce(e.slice(s, n)), n < r && Ce(e = e.slice(n)), n < r && ye(e));
                }
                c.push(t);
            }
            return xe(c);
        }
        function je(m, y) {
            var v = y.length > 0, x = m.length > 0, e = function(e, t, n, r, i) {
                var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = E += null == p ? 1 : Math.random() || .1, g = d.length;
                for (i && (w = t === C || t || i); l !== g && null != (o = d[l]); l++) {
                    if (x && o) {
                        a = 0, t || o.ownerDocument === C || (T(o), n = !j);
                        while (s = m[a++]) if (s(o, t || C, n)) {
                            r.push(o);
                            break;
                        }
                        i && (E = h);
                    }
                    v && ((o = !s && o) && u--, e && c.push(o));
                }
                if (u += l, v && l !== u) {
                    a = 0;
                    while (s = y[a++]) s(c, f, t, n);
                    if (e) {
                        if (u > 0) while (l--) c[l] || f[l] || (f[l] = A.call(r));
                        f = we(f);
                    }
                    L.apply(r, f), i && !e && f.length > 0 && u + y.length > 1 && oe.uniqueSort(r);
                }
                return i && (E = h, w = p), c;
            };
            return v ? se(e) : e;
        }
        return f = oe.compile = function(e, t) {
            var n, r = [], i = [], o = S[e + " "];
            if (!o) {
                t || (t = h(e)), n = t.length;
                while (n--) o = Ce(t[n]), o[k] ? r.push(o) : i.push(o);
                o = S(e, je(i, r)), o.selector = e;
            }
            return o;
        }, g = oe.select = function(e, t, n, r) {
            var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
            if (n = n || [], 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && j && b.relative[o[1].type]) {
                    if (t = (b.find.ID(a.matches[0].replace(Z, ee), t) || [])[0], !t) return n;
                    l && (t = t.parentNode), e = e.slice(o.shift().value.length);
                }
                i = U.needsContext.test(e) ? 0 : o.length;
                while (i--) {
                    if (a = o[i], b.relative[s = a.type]) break;
                    if ((u = b.find[s]) && (r = u(a.matches[0].replace(Z, ee), K.test(o[0].type) && ge(t.parentNode) || t))) {
                        if (o.splice(i, 1), e = r.length && ye(o), !e) return L.apply(n, r), n;
                        break;
                    }
                }
            }
            return (l || f(e, c))(r, t, !j, n, !t || K.test(e) && ge(t.parentNode) || t), n;
        }, d.sortStable = k.split("").sort(N).join("") === k, d.detectDuplicates = !!l, 
        T(), d.sortDetached = ue(function(e) {
            return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
        }), ue(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || le("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), d.attributes && ue(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || le("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), ue(function(e) {
            return null == e.getAttribute("disabled");
        }) || le(O, function(e, t, n) {
            var r;
            if (!n) return e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
    }(C);
    k.find = b, k.expr = b.selectors, k.expr[":"] = k.expr.pseudos, k.uniqueSort = k.unique = b.uniqueSort, 
    k.text = b.getText, k.isXMLDoc = b.isXML, k.contains = b.contains, k.escapeSelector = b.escape;
    var w = function(e, t, n) {
        var r = [], i = void 0 !== n;
        while ((e = e[t]) && 9 !== e.nodeType) if (1 === e.nodeType) {
            if (i && k(e).is(n)) break;
            r.push(e);
        }
        return r;
    }, T = function(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n;
    }, E = k.expr.match.needsContext, S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i, N = /^.[^:#\[\.,]*$/;
    function D(e, n, r) {
        return k.isFunction(n) ? k.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== r;
        }) : n.nodeType ? k.grep(e, function(e) {
            return e === n !== r;
        }) : "string" != typeof n ? k.grep(e, function(e) {
            return i.call(n, e) > -1 !== r;
        }) : N.test(n) ? k.filter(n, e, r) : (n = k.filter(n, e), k.grep(e, function(e) {
            return i.call(n, e) > -1 !== r && 1 === e.nodeType;
        }));
    }
    k.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? k.find.matchesSelector(r, e) ? [ r ] : [] : k.find.matches(e, k.grep(t, function(e) {
            return 1 === e.nodeType;
        }));
    }, k.fn.extend({
        find: function(e) {
            var t, n, r = this.length, i = this;
            if ("string" != typeof e) return this.pushStack(k(e).filter(function() {
                for (t = 0; t < r; t++) if (k.contains(i[t], this)) return !0;
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) k.find(e, i[t], n);
            return r > 1 ? k.uniqueSort(n) : n;
        },
        filter: function(e) {
            return this.pushStack(D(this, e || [], !1));
        },
        not: function(e) {
            return this.pushStack(D(this, e || [], !0));
        },
        is: function(e) {
            return !!D(this, "string" == typeof e && E.test(e) ? k(e) : e || [], !1).length;
        }
    });
    var A, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, L = k.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || A, "string" == typeof e) {
            if (r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [ null, e, null ] : q.exec(e), 
            !r || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof k ? t[0] : t, k.merge(this, k.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : j, !0)), 
                S.test(r[1]) && k.isPlainObject(t)) for (r in t) k.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this;
            }
            return i = j.getElementById(r[2]), i && (this[0] = i, this.length = 1), this;
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : k.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(k) : k.makeArray(e, this);
    };
    L.prototype = k.fn, A = k(j);
    var H = /^(?:parents|prev(?:Until|All))/, F = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    k.fn.extend({
        has: function(e) {
            var t = k(e, this), n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++) if (k.contains(this, t[e])) return !0;
            });
        },
        closest: function(e, t) {
            var n, r = 0, i = this.length, o = [], a = "string" != typeof e && k(e);
            if (!E.test(e)) for (;r < i; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && k.find.matchesSelector(n, e))) {
                o.push(n);
                break;
            }
            return this.pushStack(o.length > 1 ? k.uniqueSort(o) : o);
        },
        index: function(e) {
            return e ? "string" == typeof e ? i.call(k(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(e, t) {
            return this.pushStack(k.uniqueSort(k.merge(this.get(), k(e, t))));
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        }
    });
    function O(e, t) {
        while ((e = e[t]) && 1 !== e.nodeType) ;
        return e;
    }
    k.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null;
        },
        parents: function(e) {
            return w(e, "parentNode");
        },
        parentsUntil: function(e, t, n) {
            return w(e, "parentNode", n);
        },
        next: function(e) {
            return O(e, "nextSibling");
        },
        prev: function(e) {
            return O(e, "previousSibling");
        },
        nextAll: function(e) {
            return w(e, "nextSibling");
        },
        prevAll: function(e) {
            return w(e, "previousSibling");
        },
        nextUntil: function(e, t, n) {
            return w(e, "nextSibling", n);
        },
        prevUntil: function(e, t, n) {
            return w(e, "previousSibling", n);
        },
        siblings: function(e) {
            return T((e.parentNode || {}).firstChild, e);
        },
        children: function(e) {
            return T(e.firstChild);
        },
        contents: function(e) {
            return e.contentDocument || k.merge([], e.childNodes);
        }
    }, function(r, i) {
        k.fn[r] = function(e, t) {
            var n = k.map(this, i, e);
            return "Until" !== r.slice(-5) && (t = e), t && "string" == typeof t && (n = k.filter(t, n)), 
            this.length > 1 && (F[r] || k.uniqueSort(n), H.test(r) && n.reverse()), this.pushStack(n);
        };
    });
    var R = /[^\x20\t\r\n\f]+/g;
    function M(e) {
        var n = {};
        return k.each(e.match(R) || [], function(e, t) {
            n[t] = !0;
        }), n;
    }
    k.Callbacks = function(r) {
        r = "string" == typeof r ? M(r) : k.extend({}, r);
        var n, e, t, i, o = [], a = [], s = -1, u = function() {
            for (i = r.once, t = n = !0; a.length; s = -1) {
                e = a.shift();
                while (++s < o.length) o[s].apply(e[0], e[1]) === !1 && r.stopOnFalse && (s = o.length, 
                e = !1);
            }
            r.memory || (e = !1), n = !1, i && (o = e ? [] : "");
        }, l = {
            add: function() {
                return o && (e && !n && (s = o.length - 1, a.push(e)), function n(e) {
                    k.each(e, function(e, t) {
                        k.isFunction(t) ? r.unique && l.has(t) || o.push(t) : t && t.length && "string" !== k.type(t) && n(t);
                    });
                }(arguments), e && !n && u()), this;
            },
            remove: function() {
                return k.each(arguments, function(e, t) {
                    var n;
                    while ((n = k.inArray(t, o, n)) > -1) o.splice(n, 1), n <= s && s--;
                }), this;
            },
            has: function(e) {
                return e ? k.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function() {
                return o && (o = []), this;
            },
            disable: function() {
                return i = a = [], o = e = "", this;
            },
            disabled: function() {
                return !o;
            },
            lock: function() {
                return i = a = [], e || n || (o = e = ""), this;
            },
            locked: function() {
                return !!i;
            },
            fireWith: function(e, t) {
                return i || (t = t || [], t = [ e, t.slice ? t.slice() : t ], a.push(t), n || u()), 
                this;
            },
            fire: function() {
                return l.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!t;
            }
        };
        return l;
    };
    function P(e) {
        return e;
    }
    function I(e) {
        throw e;
    }
    function W(e, t, n) {
        var r;
        try {
            e && k.isFunction(r = e.promise) ? r.call(e).done(t).fail(n) : e && k.isFunction(r = e.then) ? r.call(e, t, n) : t.call(void 0, e);
        } catch (e) {
            n.call(void 0, e);
        }
    }
    k.extend({
        Deferred: function(e) {
            var o = [ [ "notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2 ], [ "resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected" ] ], i = "pending", a = {
                state: function() {
                    return i;
                },
                always: function() {
                    return s.done(arguments).fail(arguments), this;
                },
                catch: function(e) {
                    return a.then(null, e);
                },
                pipe: function() {
                    var i = arguments;
                    return k.Deferred(function(r) {
                        k.each(o, function(e, t) {
                            var n = k.isFunction(i[t[4]]) && i[t[4]];
                            s[t[1]](function() {
                                var e = n && n.apply(this, arguments);
                                e && k.isFunction(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [ e ] : arguments);
                            });
                        }), i = null;
                    }).promise();
                },
                then: function(t, n, r) {
                    var u = 0;
                    function l(i, o, a, s) {
                        return function() {
                            var n = this, r = arguments, e = function() {
                                var e, t;
                                if (!(i < u)) {
                                    if (e = a.apply(n, r), e === o.promise()) throw new TypeError("Thenable self-resolution");
                                    t = e && ("object" == typeof e || "function" == typeof e) && e.then, k.isFunction(t) ? s ? t.call(e, l(u, o, P, s), l(u, o, I, s)) : (u++, 
                                    t.call(e, l(u, o, P, s), l(u, o, I, s), l(u, o, P, o.notifyWith))) : (a !== P && (n = void 0, 
                                    r = [ e ]), (s || o.resolveWith)(n, r));
                                }
                            }, t = s ? e : function() {
                                try {
                                    e();
                                } catch (e) {
                                    k.Deferred.exceptionHook && k.Deferred.exceptionHook(e, t.stackTrace), i + 1 >= u && (a !== I && (n = void 0, 
                                    r = [ e ]), o.rejectWith(n, r));
                                }
                            };
                            i ? t() : (k.Deferred.getStackHook && (t.stackTrace = k.Deferred.getStackHook()), 
                            C.setTimeout(t));
                        };
                    }
                    return k.Deferred(function(e) {
                        o[0][3].add(l(0, e, k.isFunction(r) ? r : P, e.notifyWith)), o[1][3].add(l(0, e, k.isFunction(t) ? t : P)), 
                        o[2][3].add(l(0, e, k.isFunction(n) ? n : I));
                    }).promise();
                },
                promise: function(e) {
                    return null != e ? k.extend(e, a) : a;
                }
            }, s = {};
            return k.each(o, function(e, t) {
                var n = t[2], r = t[5];
                a[t[1]] = n.add, r && n.add(function() {
                    i = r;
                }, o[3 - e][2].disable, o[0][2].lock), n.add(t[3].fire), s[t[0]] = function() {
                    return s[t[0] + "With"](this === s ? void 0 : this, arguments), this;
                }, s[t[0] + "With"] = n.fireWith;
            }), a.promise(s), e && e.call(s, s), s;
        },
        when: function(e) {
            var n = arguments.length, t = n, r = Array(t), i = s.call(arguments), o = k.Deferred(), a = function(t) {
                return function(e) {
                    r[t] = this, i[t] = arguments.length > 1 ? s.call(arguments) : e, --n || o.resolveWith(r, i);
                };
            };
            if (n <= 1 && (W(e, o.done(a(t)).resolve, o.reject), "pending" === o.state() || k.isFunction(i[t] && i[t].then))) return o.then();
            while (t--) W(i[t], a(t), o.reject);
            return o.promise();
        }
    });
    var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    k.Deferred.exceptionHook = function(e, t) {
        C.console && C.console.warn && e && $.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, k.readyException = function(e) {
        C.setTimeout(function() {
            throw e;
        });
    };
    var B = k.Deferred();
    k.fn.ready = function(e) {
        return B.then(e)["catch"](function(e) {
            k.readyException(e);
        }), this;
    }, k.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? k.readyWait++ : k.ready(!0);
        },
        ready: function(e) {
            (e === !0 ? --k.readyWait : k.isReady) || (k.isReady = !0, e !== !0 && --k.readyWait > 0 || B.resolveWith(j, [ k ]));
        }
    }), k.ready.then = B.then;
    function Q() {
        j.removeEventListener("DOMContentLoaded", Q), C.removeEventListener("load", Q), 
        k.ready();
    }
    "complete" === j.readyState || "loading" !== j.readyState && !j.documentElement.doScroll ? C.setTimeout(k.ready) : (j.addEventListener("DOMContentLoaded", Q), 
    C.addEventListener("load", Q));
    var _ = function(e, t, n, r, i, o, a) {
        var s = 0, u = e.length, l = null == n;
        if ("object" === k.type(n)) {
            i = !0;
            for (s in n) _(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, k.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), 
        t = null) : (l = t, t = function(e, t, n) {
            return l.call(k(e), n);
        })), t)) for (;s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    }, X = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };
    function z() {
        this.expando = k.expando + z.uid++;
    }
    z.uid = 1, z.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, X(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t;
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[k.camelCase(t)] = n; else for (r in t) i[k.camelCase(r)] = t[r];
            return i;
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][k.camelCase(t)];
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), 
            void 0 !== n ? n : t);
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    k.isArray(t) ? t = t.map(k.camelCase) : (t = k.camelCase(t), t = t in r ? [ t ] : t.match(R) || []), 
                    n = t.length;
                    while (n--) delete r[t[n]];
                }
                (void 0 === t || k.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !k.isEmptyObject(t);
        }
    };
    var U = new z(), V = new z(), G = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, J = /[A-Z]/g;
    function Y(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : G.test(e) ? JSON.parse(e) : e);
    }
    function K(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(J, "-$&").toLowerCase(), 
        n = e.getAttribute(r), "string" == typeof n) {
            try {
                n = Y(n);
            } catch (e) {}
            V.set(e, t, n);
        } else n = void 0;
        return n;
    }
    k.extend({
        hasData: function(e) {
            return V.hasData(e) || U.hasData(e);
        },
        data: function(e, t, n) {
            return V.access(e, t, n);
        },
        removeData: function(e, t) {
            V.remove(e, t);
        },
        _data: function(e, t, n) {
            return U.access(e, t, n);
        },
        _removeData: function(e, t) {
            U.remove(e, t);
        }
    }), k.fn.extend({
        data: function(n, e) {
            var t, r, i, o = this[0], a = o && o.attributes;
            if (void 0 === n) {
                if (this.length && (i = V.get(o), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                    t = a.length;
                    while (t--) a[t] && (r = a[t].name, 0 === r.indexOf("data-") && (r = k.camelCase(r.slice(5)), 
                    K(o, r, i[r])));
                    U.set(o, "hasDataAttrs", !0);
                }
                return i;
            }
            return "object" == typeof n ? this.each(function() {
                V.set(this, n);
            }) : _(this, function(e) {
                var t;
                if (o && void 0 === e) {
                    if (t = V.get(o, n), void 0 !== t) return t;
                    if (t = K(o, n), void 0 !== t) return t;
                } else this.each(function() {
                    V.set(this, n, e);
                });
            }, null, e, arguments.length > 1, null, !0);
        },
        removeData: function(e) {
            return this.each(function() {
                V.remove(this, e);
            });
        }
    }), k.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = U.get(e, t), n && (!r || k.isArray(n) ? r = U.access(e, t, k.makeArray(n)) : r.push(n)), 
            r || [];
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = k.queue(e, t), r = n.length, i = n.shift(), o = k._queueHooks(e, t), a = function() {
                k.dequeue(e, t);
            };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), 
            delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire();
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: k.Callbacks("once memory").add(function() {
                    U.remove(e, [ t + "queue", n ]);
                })
            });
        }
    }), k.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? k.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = k.queue(this, t, n);
                k._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && k.dequeue(this, t);
            });
        },
        dequeue: function(e) {
            return this.each(function() {
                k.dequeue(this, e);
            });
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", []);
        },
        promise: function(e, t) {
            var n, r = 1, i = k.Deferred(), o = this, a = this.length, s = function() {
                --r || i.resolveWith(o, [ o ]);
            };
            "string" != typeof e && (t = e, e = void 0), e = e || "fx";
            while (a--) n = U.get(o[a], e + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
            return s(), i.promise(t);
        }
    });
    var Z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, ee = new RegExp("^(?:([+-])=|)(" + Z + ")([a-z%]*)$", "i"), te = [ "Top", "Right", "Bottom", "Left" ], ne = function(e, t) {
        return e = t || e, "none" === e.style.display || "" === e.style.display && k.contains(e.ownerDocument, e) && "none" === k.css(e, "display");
    }, re = function(e, t, n, r) {
        var i, o, a = {};
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
    };
    function ie(e, t, n, r) {
        var i, o = 1, a = 20, s = r ? function() {
            return r.cur();
        } : function() {
            return k.css(e, t, "");
        }, u = s(), l = n && n[3] || (k.cssNumber[t] ? "" : "px"), c = (k.cssNumber[t] || "px" !== l && +u) && ee.exec(k.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +u || 1;
            do {
                o = o || ".5", c /= o, k.style(e, t, c + l);
            } while (o !== (o = s() / u) && 1 !== o && --a);
        }
        return n && (c = +c || +u || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, 
        r.start = c, r.end = i)), i;
    }
    var oe = {};
    function ae(e) {
        var t, n = e.ownerDocument, r = e.nodeName, i = oe[r];
        return i ? i : (t = n.body.appendChild(n.createElement(r)), i = k.css(t, "display"), 
        t.parentNode.removeChild(t), "none" === i && (i = "block"), oe[r] = i, i);
    }
    function se(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, 
        t ? ("none" === n && (i[o] = U.get(r, "display") || null, i[o] || (r.style.display = "")), 
        "" === r.style.display && ne(r) && (i[o] = ae(r))) : "none" !== n && (i[o] = "none", 
        U.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
    }
    k.fn.extend({
        show: function() {
            return se(this, !0);
        },
        hide: function() {
            return se(this);
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                ne(this) ? k(this).show() : k(this).hide();
            });
        }
    });
    var ue = /^(?:checkbox|radio)$/i, le = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, ce = /^$|\/(?:java|ecma)script/i, fe = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        thead: [ 1, "<table>", "</table>" ],
        col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: [ 0, "", "" ]
    };
    fe.optgroup = fe.option, fe.tbody = fe.tfoot = fe.colgroup = fe.caption = fe.thead, 
    fe.th = fe.td;
    function pe(e, t) {
        var n;
        return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [], 
        void 0 === t || t && k.nodeName(e, t) ? k.merge([ e ], n) : n;
    }
    function de(e, t) {
        for (var n = 0, r = e.length; n < r; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"));
    }
    var he = /<|&#?\w+;/;
    function ge(e, t, n, r, i) {
        for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++) if (o = e[d], 
        o || 0 === o) if ("object" === k.type(o)) k.merge(p, o.nodeType ? [ o ] : o); else if (he.test(o)) {
            a = a || f.appendChild(t.createElement("div")), s = (le.exec(o) || [ "", "" ])[1].toLowerCase(), 
            u = fe[s] || fe._default, a.innerHTML = u[1] + k.htmlPrefilter(o) + u[2], c = u[0];
            while (c--) a = a.lastChild;
            k.merge(p, a.childNodes), a = f.firstChild, a.textContent = "";
        } else p.push(t.createTextNode(o));
        f.textContent = "", d = 0;
        while (o = p[d++]) if (r && k.inArray(o, r) > -1) i && i.push(o); else if (l = k.contains(o.ownerDocument, o), 
        a = pe(f.appendChild(o), "script"), l && de(a), n) {
            c = 0;
            while (o = a[c++]) ce.test(o.type || "") && n.push(o);
        }
        return f;
    }
    !function() {
        var e = j.createDocumentFragment(), t = e.appendChild(j.createElement("div")), n = j.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), 
        t.appendChild(n), m.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        t.innerHTML = "<textarea>x</textarea>", m.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    }();
    var me = j.documentElement, ye = /^key/, ve = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, xe = /^([^.]*)(?:\.(.+)|)/;
    function be() {
        return !0;
    }
    function we() {
        return !1;
    }
    function Te() {
        try {
            return j.activeElement;
        } catch (e) {}
    }
    function Ce(e, t, n, r, i, o) {
        var a, s;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (s in t) Ce(e, s, n, r, t[s], o);
            return e;
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, 
        r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = we; else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return k().off(e), a.apply(this, arguments);
        }, i.guid = a.guid || (a.guid = k.guid++)), e.each(function() {
            k.event.add(this, t, i, r, n);
        });
    }
    k.event = {
        global: {},
        add: function(t, e, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = U.get(t);
            if (m) {
                n.handler && (o = n, n = o.handler, i = o.selector), i && k.find.matchesSelector(me, i), 
                n.guid || (n.guid = k.guid++), (u = m.events) || (u = m.events = {}), (a = m.handle) || (a = m.handle = function(e) {
                    return "undefined" != typeof k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
                }), e = (e || "").match(R) || [ "" ], l = e.length;
                while (l--) s = xe.exec(e[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), 
                d && (f = k.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, 
                f = k.event.special[d] || {}, c = k.extend({
                    type: d,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && k.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, h, a) !== !1 || t.addEventListener && t.addEventListener(d, a)), 
                f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), 
                k.event.global[d] = !0);
            }
        },
        remove: function(e, t, n, r, i) {
            var o, a, s, u, l, c, f, p, d, h, g, m = U.hasData(e) && U.get(e);
            if (m && (u = m.events)) {
                t = (t || "").match(R) || [ "" ], l = t.length;
                while (l--) if (s = xe.exec(t[l]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), 
                d) {
                    f = k.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], 
                    s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length;
                    while (o--) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), 
                    c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                    a && !p.length && (f.teardown && f.teardown.call(e, h, m.handle) !== !1 || k.removeEvent(e, d, m.handle), 
                    delete u[d]);
                } else for (d in u) k.event.remove(e, d + t[l], n, r, !0);
                k.isEmptyObject(u) && U.remove(e, "handle events");
            }
        },
        dispatch: function(e) {
            var t = k.event.fix(e), n, r, i, o, a, s, u = new Array(arguments.length), l = (U.get(this, "events") || {})[t.type] || [], c = k.event.special[t.type] || {};
            for (u[0] = t, n = 1; n < arguments.length; n++) u[n] = arguments[n];
            if (t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                s = k.event.handlers.call(this, t, l), n = 0;
                while ((o = s[n++]) && !t.isPropagationStopped()) {
                    t.currentTarget = o.elem, r = 0;
                    while ((a = o.handlers[r++]) && !t.isImmediatePropagationStopped()) t.rnamespace && !t.rnamespace.test(a.namespace) || (t.handleObj = a, 
                    t.data = a.data, i = ((k.event.special[a.origType] || {}).handle || a.handler).apply(o.elem, u), 
                    void 0 !== i && (t.result = i) === !1 && (t.preventDefault(), t.stopPropagation()));
                }
                return c.postDispatch && c.postDispatch.call(this, t), t.result;
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
            if (u && l.nodeType && !("click" === e.type && e.button >= 1)) for (;l !== this; l = l.parentNode || this) if (1 === l.nodeType && ("click" !== e.type || l.disabled !== !0)) {
                for (o = [], a = {}, n = 0; n < u; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? k(i, this).index(l) > -1 : k.find(i, this, null, [ l ]).length), 
                a[i] && o.push(r);
                o.length && s.push({
                    elem: l,
                    handlers: o
                });
            }
            return l = this, u < t.length && s.push({
                elem: l,
                handlers: t.slice(u)
            }), s;
        },
        addProp: function(t, e) {
            Object.defineProperty(k.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: k.isFunction(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent);
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t];
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    });
                }
            });
        },
        fix: function(e) {
            return e[k.expando] ? e : new k.Event(e);
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Te() && this.focus) return this.focus(), !1;
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Te() && this.blur) return this.blur(), !1;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && k.nodeName(this, "input")) return this.click(), 
                    !1;
                },
                _default: function(e) {
                    return k.nodeName(e.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
                }
            }
        }
    }, k.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n);
    }, k.Event = function(e, t) {
        return this instanceof k.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, 
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? be : we, 
        this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, 
        this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, 
        t && k.extend(this, t), this.timeStamp = e && e.timeStamp || k.now(), void (this[k.expando] = !0)) : new k.Event(e, t);
    }, k.Event.prototype = {
        constructor: k.Event,
        isDefaultPrevented: we,
        isPropagationStopped: we,
        isImmediatePropagationStopped: we,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = be, e && !this.isSimulated && e.preventDefault();
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = be, e && !this.isSimulated && e.stopPropagation();
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = be, e && !this.isSimulated && e.stopImmediatePropagation(), 
            this.stopPropagation();
        }
    }, k.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ye.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ve.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
        }
    }, k.event.addProp), k.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, o) {
        k.event.special[e] = {
            delegateType: o,
            bindType: o,
            handle: function(e) {
                var t, n = this, r = e.relatedTarget, i = e.handleObj;
                return r && (r === n || k.contains(n, r)) || (e.type = i.origType, t = i.handler.apply(this, arguments), 
                e.type = o), t;
            }
        };
    }), k.fn.extend({
        on: function(e, t, n, r) {
            return Ce(this, e, t, n, r);
        },
        one: function(e, t, n, r) {
            return Ce(this, e, t, n, r, 1);
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, k(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), 
            this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this;
            }
            return t !== !1 && "function" != typeof t || (n = t, t = void 0), n === !1 && (n = we), 
            this.each(function() {
                k.event.remove(this, e, n, t);
            });
        }
    });
    var je = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi, ke = /<script|<style|<link/i, Ee = /checked\s*(?:[^=]|=\s*.checked.)/i, Se = /^true\/(.*)/, Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    function De(e, t) {
        return k.nodeName(e, "table") && k.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e : e;
    }
    function Ae(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }
    function qe(e) {
        var t = Se.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function Le(e, t) {
        var n, r, i, o, a, s, u, l;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (o = U.access(e), a = U.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l) for (n = 0, r = l[i].length; n < r; n++) k.event.add(t, i, l[i][n]);
            }
            V.hasData(e) && (s = V.access(e), u = k.extend({}, s), V.set(t, u));
        }
    }
    function He(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ue.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue);
    }
    function Fe(n, r, i, o) {
        r = g.apply([], r);
        var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = k.isFunction(d);
        if (h || f > 1 && "string" == typeof d && !m.checkClone && Ee.test(d)) return n.each(function(e) {
            var t = n.eq(e);
            h && (r[0] = d.call(this, e, t.html())), Fe(t, r, i, o);
        });
        if (f && (e = ge(r, n[0].ownerDocument, !1, n, o), t = e.firstChild, 1 === e.childNodes.length && (e = t), 
        t || o)) {
            for (a = k.map(pe(e, "script"), Ae), s = a.length; c < f; c++) u = e, c !== p && (u = k.clone(u, !0, !0), 
            s && k.merge(a, pe(u, "script"))), i.call(n[c], u, c);
            if (s) for (l = a[a.length - 1].ownerDocument, k.map(a, qe), c = 0; c < s; c++) u = a[c], 
            ce.test(u.type || "") && !U.access(u, "globalEval") && k.contains(l, u) && (u.src ? k._evalUrl && k._evalUrl(u.src) : y(u.textContent.replace(Ne, ""), l));
        }
        return n;
    }
    function Oe(e, t, n) {
        for (var r, i = t ? k.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || k.cleanData(pe(r)), 
        r.parentNode && (n && k.contains(r.ownerDocument, r) && de(pe(r, "script")), r.parentNode.removeChild(r));
        return e;
    }
    k.extend({
        htmlPrefilter: function(e) {
            return e.replace(je, "<$1></$2>");
        },
        clone: function(e, t, n) {
            var r, i, o, a, s = e.cloneNode(!0), u = k.contains(e.ownerDocument, e);
            if (!(m.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || k.isXMLDoc(e))) for (a = pe(s), 
            o = pe(e), r = 0, i = o.length; r < i; r++) He(o[r], a[r]);
            if (t) if (n) for (o = o || pe(e), a = a || pe(s), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]); else Le(e, s);
            return a = pe(s, "script"), a.length > 0 && de(a, !u && pe(e, "script")), s;
        },
        cleanData: function(e) {
            for (var t, n, r, i = k.event.special, o = 0; void 0 !== (n = e[o]); o++) if (X(n)) {
                if (t = n[U.expando]) {
                    if (t.events) for (r in t.events) i[r] ? k.event.remove(n, r) : k.removeEvent(n, r, t.handle);
                    n[U.expando] = void 0;
                }
                n[V.expando] && (n[V.expando] = void 0);
            }
        }
    }), k.fn.extend({
        detach: function(e) {
            return Oe(this, e, !0);
        },
        remove: function(e) {
            return Oe(this, e);
        },
        text: function(e) {
            return _(this, function(e) {
                return void 0 === e ? k.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
                });
            }, null, e, arguments.length);
        },
        append: function() {
            return Fe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.appendChild(e);
                }
            });
        },
        prepend: function() {
            return Fe(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = De(this, e);
                    t.insertBefore(e, t.firstChild);
                }
            });
        },
        before: function() {
            return Fe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this);
            });
        },
        after: function() {
            return Fe(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
            });
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (k.cleanData(pe(e, !1)), 
            e.textContent = "");
            return this;
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return k.clone(this, e, t);
            });
        },
        html: function(e) {
            return _(this, function(e) {
                var t = this[0] || {}, n = 0, r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !ke.test(e) && !fe[(le.exec(e) || [ "", "" ])[1].toLowerCase()]) {
                    e = k.htmlPrefilter(e);
                    try {
                        for (;n < r; n++) t = this[n] || {}, 1 === t.nodeType && (k.cleanData(pe(t, !1)), 
                        t.innerHTML = e);
                        t = 0;
                    } catch (e) {}
                }
                t && this.empty().append(e);
            }, null, e, arguments.length);
        },
        replaceWith: function() {
            var n = [];
            return Fe(this, arguments, function(e) {
                var t = this.parentNode;
                k.inArray(this, n) < 0 && (k.cleanData(pe(this)), t && t.replaceChild(e, this));
            }, n);
        }
    }), k.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, a) {
        k.fn[e] = function(e) {
            for (var t, n = [], r = k(e), i = r.length - 1, o = 0; o <= i; o++) t = o === i ? this : this.clone(!0), 
            k(r[o])[a](t), u.apply(n, t.get());
            return this.pushStack(n);
        };
    });
    var Re = /^margin/, Me = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), Pe = function(e) {
        var t = e.ownerDocument.defaultView;
        return t && t.opener || (t = C), t.getComputedStyle(e);
    };
    !function() {
        function e() {
            if (a) {
                a.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", 
                a.innerHTML = "", me.appendChild(o);
                var e = C.getComputedStyle(a);
                t = "1%" !== e.top, i = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", 
                r = "4px" === e.marginRight, me.removeChild(o), a = null;
            }
        }
        var t, n, r, i, o = j.createElement("div"), a = j.createElement("div");
        a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", 
        m.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", 
        o.appendChild(a), k.extend(m, {
            pixelPosition: function() {
                return e(), t;
            },
            boxSizingReliable: function() {
                return e(), n;
            },
            pixelMarginRight: function() {
                return e(), r;
            },
            reliableMarginLeft: function() {
                return e(), i;
            }
        }));
    }();
    function Ie(e, t, n) {
        var r, i, o, a, s = e.style;
        return n = n || Pe(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || k.contains(e.ownerDocument, e) || (a = k.style(e, t)), 
        !m.pixelMarginRight() && Me.test(a) && Re.test(t) && (r = s.width, i = s.minWidth, 
        o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, 
        s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
    }
    function We(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments);
            }
        };
    }
    var $e = /^(none|table(?!-c[ea]).+)/, Be = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Qe = {
        letterSpacing: "0",
        fontWeight: "400"
    }, _e = [ "Webkit", "Moz", "ms" ], Xe = j.createElement("div").style;
    function ze(e) {
        if (e in Xe) return e;
        var t = e[0].toUpperCase() + e.slice(1), n = _e.length;
        while (n--) if (e = _e[n] + t, e in Xe) return e;
    }
    function Ue(e, t, n) {
        var r = ee.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
    }
    function Ve(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += k.css(e, n + te[o], !0, i)), 
        r ? ("content" === n && (a -= k.css(e, "padding" + te[o], !0, i)), "margin" !== n && (a -= k.css(e, "border" + te[o] + "Width", !0, i))) : (a += k.css(e, "padding" + te[o], !0, i), 
        "padding" !== n && (a += k.css(e, "border" + te[o] + "Width", !0, i)));
        return a;
    }
    function Ge(e, t, n) {
        var r, i = !0, o = Pe(e), a = "border-box" === k.css(e, "boxSizing", !1, o);
        if (e.getClientRects().length && (r = e.getBoundingClientRect()[t]), r <= 0 || null == r) {
            if (r = Ie(e, t, o), (r < 0 || null == r) && (r = e.style[t]), Me.test(r)) return r;
            i = a && (m.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0;
        }
        return r + Ve(e, t, n || (a ? "border" : "content"), i, o) + "px";
    }
    k.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Ie(e, "opacity");
                        return "" === n ? "1" : n;
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, a, s = k.camelCase(t), u = e.style;
                return t = k.cssProps[s] || (k.cssProps[s] = ze(s) || s), a = k.cssHooks[t] || k.cssHooks[s], 
                void 0 === n ? a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : u[t] : (o = typeof n, 
                "string" === o && (i = ee.exec(n)) && i[1] && (n = ie(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (k.cssNumber[s] ? "" : "px")), 
                m.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), 
                a && "set" in a && void 0 === (n = a.set(e, n, r)) || (u[t] = n)), void 0);
            }
        },
        css: function(e, t, n, r) {
            var i, o, a, s = k.camelCase(t);
            return t = k.cssProps[s] || (k.cssProps[s] = ze(s) || s), a = k.cssHooks[t] || k.cssHooks[s], 
            a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ie(e, t, r)), "normal" === i && t in Qe && (i = Qe[t]), 
            "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i;
        }
    }), k.each([ "height", "width" ], function(e, a) {
        k.cssHooks[a] = {
            get: function(e, t, n) {
                if (t) return !$e.test(k.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Ge(e, a, n) : re(e, Be, function() {
                    return Ge(e, a, n);
                });
            },
            set: function(e, t, n) {
                var r, i = n && Pe(e), o = n && Ve(e, a, n, "border-box" === k.css(e, "boxSizing", !1, i), i);
                return o && (r = ee.exec(t)) && "px" !== (r[3] || "px") && (e.style[a] = t, t = k.css(e, a)), 
                Ue(e, t, o);
            }
        };
    }), k.cssHooks.marginLeft = We(m.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Ie(e, "marginLeft")) || e.getBoundingClientRect().left - re(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left;
        })) + "px";
    }), k.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(i, o) {
        k.cssHooks[i + o] = {
            expand: function(e) {
                for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [ e ]; t < 4; t++) n[i + te[t] + o] = r[t] || r[t - 2] || r[0];
                return n;
            }
        }, Re.test(i) || (k.cssHooks[i + o].set = Ue);
    }), k.fn.extend({
        css: function(e, t) {
            return _(this, function(e, t, n) {
                var r, i, o = {}, a = 0;
                if (k.isArray(t)) {
                    for (r = Pe(e), i = t.length; a < i; a++) o[t[a]] = k.css(e, t[a], !1, r);
                    return o;
                }
                return void 0 !== n ? k.style(e, t, n) : k.css(e, t);
            }, e, t, arguments.length > 1);
        }
    });
    function Je(e, t, n, r, i) {
        return new Je.prototype.init(e, t, n, r, i);
    }
    k.Tween = Je, Je.prototype = {
        constructor: Je,
        init: function(e, t, n, r, i, o) {
            this.elem = e, this.prop = n, this.easing = i || k.easing._default, this.options = t, 
            this.start = this.now = this.cur(), this.end = r, this.unit = o || (k.cssNumber[n] ? "" : "px");
        },
        cur: function() {
            var e = Je.propHooks[this.prop];
            return e && e.get ? e.get(this) : Je.propHooks._default.get(this);
        },
        run: function(e) {
            var t, n = Je.propHooks[this.prop];
            return this.options.duration ? this.pos = t = k.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, 
            this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            n && n.set ? n.set(this) : Je.propHooks._default.set(this), this;
        }
    }, Je.prototype.init.prototype = Je.prototype, Je.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = k.css(e.elem, e.prop, ""), 
                t && "auto" !== t ? t : 0);
            },
            set: function(e) {
                k.fx.step[e.prop] ? k.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[k.cssProps[e.prop]] && !k.cssHooks[e.prop] ? e.elem[e.prop] = e.now : k.style(e.elem, e.prop, e.now + e.unit);
            }
        }
    }, Je.propHooks.scrollTop = Je.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        }
    }, k.easing = {
        linear: function(e) {
            return e;
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2;
        },
        _default: "swing"
    }, k.fx = Je.prototype.init, k.fx.step = {};
    var Ye, Ke, Ze = /^(?:toggle|show|hide)$/, et = /queueHooks$/;
    function tt() {
        Ke && (C.requestAnimationFrame(tt), k.fx.tick());
    }
    function nt() {
        return C.setTimeout(function() {
            Ye = void 0;
        }), Ye = k.now();
    }
    function rt(e, t) {
        var n, r = 0, i = {
            height: e
        };
        for (t = t ? 1 : 0; r < 4; r += 2 - t) n = te[r], i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
    }
    function it(e, t, n) {
        for (var r, i = (st.tweeners[t] || []).concat(st.tweeners["*"]), o = 0, a = i.length; o < a; o++) if (r = i[o].call(n, t, e)) return r;
    }
    function ot(e, t, n) {
        var r, i, o, a, s, u, l, c, f = "width" in t || "height" in t, p = this, d = {}, h = e.style, g = e.nodeType && ne(e), m = U.get(e, "fxshow");
        n.queue || (a = k._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, 
        a.empty.fire = function() {
            a.unqueued || s();
        }), a.unqueued++, p.always(function() {
            p.always(function() {
                a.unqueued--, k.queue(e, "fx").length || a.empty.fire();
            });
        }));
        for (r in t) if (i = t[r], Ze.test(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                if ("show" !== i || !m || void 0 === m[r]) continue;
                g = !0;
            }
            d[r] = m && m[r] || k.style(e, r);
        }
        if (u = !k.isEmptyObject(t), u || !k.isEmptyObject(d)) {
            f && 1 === e.nodeType && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], 
            l = m && m.display, null == l && (l = U.get(e, "display")), c = k.css(e, "display"), 
            "none" === c && (l ? c = l : (se([ e ], !0), l = e.style.display || l, c = k.css(e, "display"), 
            se([ e ]))), ("inline" === c || "inline-block" === c && null != l) && "none" === k.css(e, "float") && (u || (p.done(function() {
                h.display = l;
            }), null == l && (c = h.display, l = "none" === c ? "" : c)), h.display = "inline-block")), 
            n.overflow && (h.overflow = "hidden", p.always(function() {
                h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
            })), u = !1;
            for (r in d) u || (m ? "hidden" in m && (g = m.hidden) : m = U.access(e, "fxshow", {
                display: l
            }), o && (m.hidden = !g), g && se([ e ], !0), p.done(function() {
                g || se([ e ]), U.remove(e, "fxshow");
                for (r in d) k.style(e, r, d[r]);
            })), u = it(g ? m[r] : 0, r, p), r in m || (m[r] = u.start, g && (u.end = u.start, 
            u.start = 0));
        }
    }
    function at(e, t) {
        var n, r, i, o, a;
        for (n in e) if (r = k.camelCase(n), i = t[r], o = e[n], k.isArray(o) && (i = o[1], 
        o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = k.cssHooks[r], a && "expand" in a) {
            o = a.expand(o), delete e[r];
            for (n in o) n in e || (e[n] = o[n], t[n] = i);
        } else t[r] = i;
    }
    function st(a, e, t) {
        var n, s, r = 0, i = st.prefilters.length, u = k.Deferred().always(function() {
            delete o.elem;
        }), o = function() {
            if (s) return !1;
            for (var e = Ye || nt(), t = Math.max(0, l.startTime + l.duration - e), n = t / l.duration || 0, r = 1 - n, i = 0, o = l.tweens.length; i < o; i++) l.tweens[i].run(r);
            return u.notifyWith(a, [ l, r, t ]), r < 1 && o ? t : (u.resolveWith(a, [ l ]), 
            !1);
        }, l = u.promise({
            elem: a,
            props: k.extend({}, e),
            opts: k.extend(!0, {
                specialEasing: {},
                easing: k.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: Ye || nt(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var n = k.Tween(a, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(n), n;
            },
            stop: function(e) {
                var t = 0, n = e ? l.tweens.length : 0;
                if (s) return this;
                for (s = !0; t < n; t++) l.tweens[t].run(1);
                return e ? (u.notifyWith(a, [ l, 1, 0 ]), u.resolveWith(a, [ l, e ])) : u.rejectWith(a, [ l, e ]), 
                this;
            }
        }), c = l.props;
        for (at(c, l.opts.specialEasing); r < i; r++) if (n = st.prefilters[r].call(l, a, c, l.opts)) return k.isFunction(n.stop) && (k._queueHooks(l.elem, l.opts.queue).stop = k.proxy(n.stop, n)), 
        n;
        return k.map(c, it, l), k.isFunction(l.opts.start) && l.opts.start.call(a, l), k.fx.timer(k.extend(o, {
            elem: a,
            anim: l,
            queue: l.opts.queue
        })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always);
    }
    k.Animation = k.extend(st, {
        tweeners: {
            "*": [ function(e, t) {
                var n = this.createTween(e, t);
                return ie(n.elem, e, ee.exec(t), n), n;
            } ]
        },
        tweener: function(e, t) {
            k.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.match(R);
            for (var n, r = 0, i = e.length; r < i; r++) n = e[r], st.tweeners[n] = st.tweeners[n] || [], 
            st.tweeners[n].unshift(t);
        },
        prefilters: [ ot ],
        prefilter: function(e, t) {
            t ? st.prefilters.unshift(e) : st.prefilters.push(e);
        }
    }), k.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? k.extend({}, e) : {
            complete: n || !n && t || k.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !k.isFunction(t) && t
        };
        return k.fx.off || j.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in k.fx.speeds ? r.duration = k.fx.speeds[r.duration] : r.duration = k.fx.speeds._default), 
        null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
            k.isFunction(r.old) && r.old.call(this), r.queue && k.dequeue(this, r.queue);
        }, r;
    }, k.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(ne).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r);
        },
        animate: function(t, e, n, r) {
            var i = k.isEmptyObject(t), o = k.speed(e, n, r), a = function() {
                var e = st(this, k.extend({}, t), o);
                (i || U.get(this, "finish")) && e.stop(!0);
            };
            return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function(i, e, o) {
            var a = function(e) {
                var t = e.stop;
                delete e.stop, t(o);
            };
            return "string" != typeof i && (o = e, e = i, i = void 0), e && i !== !1 && this.queue(i || "fx", []), 
            this.each(function() {
                var e = !0, t = null != i && i + "queueHooks", n = k.timers, r = U.get(this);
                if (t) r[t] && r[t].stop && a(r[t]); else for (t in r) r[t] && r[t].stop && et.test(t) && a(r[t]);
                for (t = n.length; t--; ) n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o), 
                e = !1, n.splice(t, 1));
                !e && o || k.dequeue(this, i);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var e, t = U.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = k.timers, o = n ? n.length : 0;
                for (t.finish = !0, k.queue(this, a, []), r && r.stop && r.stop.call(this, !0), 
                e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), 
                i.splice(e, 1));
                for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish;
            });
        }
    }), k.each([ "toggle", "show", "hide" ], function(e, r) {
        var i = k.fn[r];
        k.fn[r] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(rt(r, !0), e, t, n);
        };
    }), k.each({
        slideDown: rt("show"),
        slideUp: rt("hide"),
        slideToggle: rt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, r) {
        k.fn[e] = function(e, t, n) {
            return this.animate(r, e, t, n);
        };
    }), k.timers = [], k.fx.tick = function() {
        var e, t = 0, n = k.timers;
        for (Ye = k.now(); t < n.length; t++) e = n[t], e() || n[t] !== e || n.splice(t--, 1);
        n.length || k.fx.stop(), Ye = void 0;
    }, k.fx.timer = function(e) {
        k.timers.push(e), e() ? k.fx.start() : k.timers.pop();
    }, k.fx.interval = 13, k.fx.start = function() {
        Ke || (Ke = C.requestAnimationFrame ? C.requestAnimationFrame(tt) : C.setInterval(k.fx.tick, k.fx.interval));
    }, k.fx.stop = function() {
        C.cancelAnimationFrame ? C.cancelAnimationFrame(Ke) : C.clearInterval(Ke), Ke = null;
    }, k.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, k.fn.delay = function(r, e) {
        return r = k.fx ? k.fx.speeds[r] || r : r, e = e || "fx", this.queue(e, function(e, t) {
            var n = C.setTimeout(e, r);
            t.stop = function() {
                C.clearTimeout(n);
            };
        });
    }, function() {
        var e = j.createElement("input"), t = j.createElement("select"), n = t.appendChild(j.createElement("option"));
        e.type = "checkbox", m.checkOn = "" !== e.value, m.optSelected = n.selected, e = j.createElement("input"), 
        e.value = "t", e.type = "radio", m.radioValue = "t" === e.value;
    }();
    var ut, lt = k.expr.attrHandle;
    k.fn.extend({
        attr: function(e, t) {
            return _(this, k.attr, e, t, arguments.length > 1);
        },
        removeAttr: function(e) {
            return this.each(function() {
                k.removeAttr(this, e);
            });
        }
    }), k.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof e.getAttribute ? k.prop(e, t, n) : (1 === o && k.isXMLDoc(e) || (i = k.attrHooks[t.toLowerCase()] || (k.expr.match.bool.test(t) ? ut : void 0)), 
            void 0 !== n ? null === n ? void k.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), 
            n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = k.find.attr(e, t), 
            null == r ? void 0 : r));
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!m.radioValue && "radio" === t && k.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0, i = t && t.match(R);
            if (i && 1 === e.nodeType) while (n = i[r++]) e.removeAttribute(n);
        }
    }), ut = {
        set: function(e, t, n) {
            return t === !1 ? k.removeAttr(e, n) : e.setAttribute(n, n), n;
        }
    }, k.each(k.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var a = lt[t] || k.find.attr;
        lt[t] = function(e, t, n) {
            var r, i, o = t.toLowerCase();
            return n || (i = lt[o], lt[o] = r, r = null != a(e, t, n) ? o : null, lt[o] = i), 
            r;
        };
    });
    var ct = /^(?:input|select|textarea|button)$/i, ft = /^(?:a|area)$/i;
    k.fn.extend({
        prop: function(e, t) {
            return _(this, k.prop, e, t, arguments.length > 1);
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[k.propFix[e] || e];
            });
        }
    }), k.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && k.isXMLDoc(e) || (t = k.propFix[t] || t, 
            i = k.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = k.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : ct.test(e.nodeName) || ft.test(e.nodeName) && e.href ? 0 : -1;
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), m.optSelected || (k.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        }
    }), k.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        k.propFix[this.toLowerCase()] = this;
    });
    function pt(e) {
        var t = e.match(R) || [];
        return t.join(" ");
    }
    function dt(e) {
        return e.getAttribute && e.getAttribute("class") || "";
    }
    k.fn.extend({
        addClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).addClass(t.call(this, e, dt(this)));
            });
            if ("string" == typeof t && t) {
                e = t.match(R) || [];
                while (n = this[u++]) if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                    a = 0;
                    while (o = e[a++]) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = pt(r), i !== s && n.setAttribute("class", s);
                }
            }
            return this;
        },
        removeClass: function(t) {
            var e, n, r, i, o, a, s, u = 0;
            if (k.isFunction(t)) return this.each(function(e) {
                k(this).removeClass(t.call(this, e, dt(this)));
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t) {
                e = t.match(R) || [];
                while (n = this[u++]) if (i = dt(n), r = 1 === n.nodeType && " " + pt(i) + " ") {
                    a = 0;
                    while (o = e[a++]) while (r.indexOf(" " + o + " ") > -1) r = r.replace(" " + o + " ", " ");
                    s = pt(r), i !== s && n.setAttribute("class", s);
                }
            }
            return this;
        },
        toggleClass: function(i, t) {
            var o = typeof i;
            return "boolean" == typeof t && "string" === o ? t ? this.addClass(i) : this.removeClass(i) : k.isFunction(i) ? this.each(function(e) {
                k(this).toggleClass(i.call(this, e, dt(this), t), t);
            }) : this.each(function() {
                var e, t, n, r;
                if ("string" === o) {
                    t = 0, n = k(this), r = i.match(R) || [];
                    while (e = r[t++]) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                } else void 0 !== i && "boolean" !== o || (e = dt(this), e && U.set(this, "__className__", e), 
                this.setAttribute && this.setAttribute("class", e || i === !1 ? "" : U.get(this, "__className__") || ""));
            });
        },
        hasClass: function(e) {
            var t, n, r = 0;
            t = " " + e + " ";
            while (n = this[r++]) if (1 === n.nodeType && (" " + pt(dt(n)) + " ").indexOf(t) > -1) return !0;
            return !1;
        }
    });
    var ht = /\r/g;
    k.fn.extend({
        val: function(n) {
            var r, e, i, t = this[0];
            {
                if (arguments.length) return i = k.isFunction(n), this.each(function(e) {
                    var t;
                    1 === this.nodeType && (t = i ? n.call(this, e, k(this).val()) : n, null == t ? t = "" : "number" == typeof t ? t += "" : k.isArray(t) && (t = k.map(t, function(e) {
                        return null == e ? "" : e + "";
                    })), r = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()], r && "set" in r && void 0 !== r.set(this, t, "value") || (this.value = t));
                });
                if (t) return r = k.valHooks[t.type] || k.valHooks[t.nodeName.toLowerCase()], r && "get" in r && void 0 !== (e = r.get(t, "value")) ? e : (e = t.value, 
                "string" == typeof e ? e.replace(ht, "") : null == e ? "" : e);
            }
        }
    }), k.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = k.find.attr(e, "value");
                    return null != t ? t : pt(k.text(e));
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                    for (r = o < 0 ? u : a ? o : 0; r < u; r++) if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k.nodeName(n.parentNode, "optgroup"))) {
                        if (t = k(n).val(), a) return t;
                        s.push(t);
                    }
                    return s;
                },
                set: function(e, t) {
                    var n, r, i = e.options, o = k.makeArray(t), a = i.length;
                    while (a--) r = i[a], (r.selected = k.inArray(k.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o;
                }
            }
        }
    }), k.each([ "radio", "checkbox" ], function() {
        k.valHooks[this] = {
            set: function(e, t) {
                if (k.isArray(t)) return e.checked = k.inArray(k(e).val(), t) > -1;
            }
        }, m.checkOn || (k.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value;
        });
    });
    var gt = /^(?:focusinfocus|focusoutblur)$/;
    k.extend(k.event, {
        trigger: function(e, t, n, r) {
            var i, o, a, s, u, l, c, f = [ n || j ], p = h.call(e, "type") ? e.type : e, d = h.call(e, "namespace") ? e.namespace.split(".") : [];
            if (o = a = n = n || j, 3 !== n.nodeType && 8 !== n.nodeType && !gt.test(p + k.event.triggered) && (p.indexOf(".") > -1 && (d = p.split("."), 
            p = d.shift(), d.sort()), u = p.indexOf(":") < 0 && "on" + p, e = e[k.expando] ? e : new k.Event(p, "object" == typeof e && e), 
            e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            e.result = void 0, e.target || (e.target = n), t = null == t ? [ e ] : k.makeArray(t, [ e ]), 
            c = k.event.special[p] || {}, r || !c.trigger || c.trigger.apply(n, t) !== !1)) {
                if (!r && !c.noBubble && !k.isWindow(n)) {
                    for (s = c.delegateType || p, gt.test(s + p) || (o = o.parentNode); o; o = o.parentNode) f.push(o), 
                    a = o;
                    a === (n.ownerDocument || j) && f.push(a.defaultView || a.parentWindow || C);
                }
                i = 0;
                while ((o = f[i++]) && !e.isPropagationStopped()) e.type = i > 1 ? s : c.bindType || p, 
                l = (U.get(o, "events") || {})[e.type] && U.get(o, "handle"), l && l.apply(o, t), 
                l = u && o[u], l && l.apply && X(o) && (e.result = l.apply(o, t), e.result === !1 && e.preventDefault());
                return e.type = p, r || e.isDefaultPrevented() || c._default && c._default.apply(f.pop(), t) !== !1 || !X(n) || u && k.isFunction(n[p]) && !k.isWindow(n) && (a = n[u], 
                a && (n[u] = null), k.event.triggered = p, n[p](), k.event.triggered = void 0, a && (n[u] = a)), 
                e.result;
            }
        },
        simulate: function(e, t, n) {
            var r = k.extend(new k.Event(), n, {
                type: e,
                isSimulated: !0
            });
            k.event.trigger(r, null, t);
        }
    }), k.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                k.event.trigger(e, t, this);
            });
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return k.event.trigger(e, t, n, !0);
        }
    }), k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        k.fn[n] = function(e, t) {
            return arguments.length > 0 ? this.on(n, null, e, t) : this.trigger(n);
        };
    }), k.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e);
        }
    }), m.focusin = "onfocusin" in C, m.focusin || k.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, r) {
        var i = function(e) {
            k.event.simulate(r, e.target, k.event.fix(e));
        };
        k.event.special[r] = {
            setup: function() {
                var e = this.ownerDocument || this, t = U.access(e, r);
                t || e.addEventListener(n, i, !0), U.access(e, r, (t || 0) + 1);
            },
            teardown: function() {
                var e = this.ownerDocument || this, t = U.access(e, r) - 1;
                t ? U.access(e, r, t) : (e.removeEventListener(n, i, !0), U.remove(e, r));
            }
        };
    });
    var mt = C.location, yt = k.now(), vt = /\?/;
    k.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = new C.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
            t = void 0;
        }
        return t && !t.getElementsByTagName("parsererror").length || k.error("Invalid XML: " + e), 
        t;
    };
    var xt = /\[\]$/, bt = /\r?\n/g, wt = /^(?:submit|button|image|reset|file)$/i, Tt = /^(?:input|select|textarea|keygen)/i;
    function Ct(n, e, r, i) {
        var t;
        if (k.isArray(e)) k.each(e, function(e, t) {
            r || xt.test(n) ? i(n, t) : Ct(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i);
        }); else if (r || "object" !== k.type(e)) i(n, e); else for (t in e) Ct(n + "[" + t + "]", e[t], r, i);
    }
    k.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            var n = k.isFunction(t) ? t() : t;
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
        };
        if (k.isArray(e) || e.jquery && !k.isPlainObject(e)) k.each(e, function() {
            i(this.name, this.value);
        }); else for (n in e) Ct(n, e[n], t, i);
        return r.join("&");
    }, k.fn.extend({
        serialize: function() {
            return k.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var e = k.prop(this, "elements");
                return e ? k.makeArray(e) : this;
            }).filter(function() {
                var e = this.type;
                return this.name && !k(this).is(":disabled") && Tt.test(this.nodeName) && !wt.test(e) && (this.checked || !ue.test(e));
            }).map(function(e, t) {
                var n = k(this).val();
                return null == n ? null : k.isArray(n) ? k.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(bt, "\r\n")
                    };
                }) : {
                    name: t.name,
                    value: n.replace(bt, "\r\n")
                };
            }).get();
        }
    });
    var jt = /%20/g, kt = /#.*$/, Et = /([?&])_=[^&]*/, St = /^(.*?):[ \t]*([^\r\n]*)$/gm, Nt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Dt = /^(?:GET|HEAD)$/, At = /^\/\//, qt = {}, Lt = {}, Ht = "*/".concat("*"), Ft = j.createElement("a");
    Ft.href = mt.href;
    function Ot(o) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, r = 0, i = e.toLowerCase().match(R) || [];
            if (k.isFunction(t)) while (n = i[r++]) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
        };
    }
    function Rt(t, i, o, a) {
        var s = {}, u = t === Lt;
        function l(e) {
            var r;
            return s[e] = !0, k.each(t[e] || [], function(e, t) {
                var n = t(i, o, a);
                return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n), 
                l(n), !1);
            }), r;
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*");
    }
    function Mt(e, t) {
        var n, r, i = k.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && k.extend(!0, e, r), e;
    }
    function Pt(e, t, n) {
        var r, i, o, a, s = e.contents, u = e.dataTypes;
        while ("*" === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r) for (i in s) if (s[i] && s[i].test(r)) {
            u.unshift(i);
            break;
        }
        if (u[0] in n) o = u[0]; else {
            for (i in n) {
                if (!u[0] || e.converters[i + " " + u[0]]) {
                    o = i;
                    break;
                }
                a || (a = i);
            }
            o = o || a;
        }
        if (o) return o !== u[0] && u.unshift(o), n[o];
    }
    function It(e, t, n, r) {
        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
        if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), 
        u = o, o = c.shift()) if ("*" === o) o = u; else if ("*" !== u && u !== o) {
            if (a = l[u + " " + o] || l["* " + o], !a) for (i in l) if (s = i.split(" "), s[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                a === !0 ? a = l[i] : l[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break;
            }
            if (a !== !0) if (a && e["throws"]) t = a(t); else try {
                t = a(t);
            } catch (e) {
                return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + u + " to " + o
                };
            }
        }
        return {
            state: "success",
            data: t
        };
    }
    k.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: mt.href,
            type: "GET",
            isLocal: Nt.test(mt.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Ht,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": k.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Mt(Mt(e, k.ajaxSettings), t) : Mt(k.ajaxSettings, e);
        },
        ajaxPrefilter: Ot(qt),
        ajaxTransport: Ot(Lt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var c, f, p, n, d, r, h, g, i, o, m = k.ajaxSetup({}, t), y = m.context || m, v = m.context && (y.nodeType || y.jquery) ? k(y) : k.event, x = k.Deferred(), b = k.Callbacks("once memory"), w = m.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (h) {
                        if (!n) {
                            n = {};
                            while (t = St.exec(p)) n[t[1].toLowerCase()] = t[2];
                        }
                        t = n[e.toLowerCase()];
                    }
                    return null == t ? null : t;
                },
                getAllResponseHeaders: function() {
                    return h ? p : null;
                },
                setRequestHeader: function(e, t) {
                    return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), 
                    this;
                },
                overrideMimeType: function(e) {
                    return null == h && (m.mimeType = e), this;
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (h) T.always(e[T.status]); else for (t in e) w[t] = [ w[t], e[t] ];
                    return this;
                },
                abort: function(e) {
                    var t = e || u;
                    return c && c.abort(t), l(0, t), this;
                }
            };
            if (x.promise(T), m.url = ((e || m.url || mt.href) + "").replace(At, mt.protocol + "//"), 
            m.type = t.method || t.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(R) || [ "" ], 
            null == m.crossDomain) {
                r = j.createElement("a");
                try {
                    r.href = m.url, r.href = r.href, m.crossDomain = Ft.protocol + "//" + Ft.host != r.protocol + "//" + r.host;
                } catch (e) {
                    m.crossDomain = !0;
                }
            }
            if (m.data && m.processData && "string" != typeof m.data && (m.data = k.param(m.data, m.traditional)), 
            Rt(qt, m, t, T), h) return T;
            g = k.event && m.global, g && 0 === k.active++ && k.event.trigger("ajaxStart"), 
            m.type = m.type.toUpperCase(), m.hasContent = !Dt.test(m.type), f = m.url.replace(kt, ""), 
            m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(jt, "+")) : (o = m.url.slice(f.length), 
            m.data && (f += (vt.test(f) ? "&" : "?") + m.data, delete m.data), m.cache === !1 && (f = f.replace(Et, "$1"), 
            o = (vt.test(f) ? "&" : "?") + "_=" + yt++ + o), m.url = f + o), m.ifModified && (k.lastModified[f] && T.setRequestHeader("If-Modified-Since", k.lastModified[f]), 
            k.etag[f] && T.setRequestHeader("If-None-Match", k.etag[f])), (m.data && m.hasContent && m.contentType !== !1 || t.contentType) && T.setRequestHeader("Content-Type", m.contentType), 
            T.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ht + "; q=0.01" : "") : m.accepts["*"]);
            for (i in m.headers) T.setRequestHeader(i, m.headers[i]);
            if (m.beforeSend && (m.beforeSend.call(y, T, m) === !1 || h)) return T.abort();
            if (u = "abort", b.add(m.complete), T.done(m.success), T.fail(m.error), c = Rt(Lt, m, t, T)) {
                if (T.readyState = 1, g && v.trigger("ajaxSend", [ T, m ]), h) return T;
                m.async && m.timeout > 0 && (d = C.setTimeout(function() {
                    T.abort("timeout");
                }, m.timeout));
                try {
                    h = !1, c.send(a, l);
                } catch (e) {
                    if (h) throw e;
                    l(-1, e);
                }
            } else l(-1, "No Transport");
            function l(e, t, n, r) {
                var i, o, a, s, u, l = t;
                h || (h = !0, d && C.clearTimeout(d), c = void 0, p = r || "", T.readyState = e > 0 ? 4 : 0, 
                i = e >= 200 && e < 300 || 304 === e, n && (s = Pt(m, T, n)), s = It(m, s, T, i), 
                i ? (m.ifModified && (u = T.getResponseHeader("Last-Modified"), u && (k.lastModified[f] = u), 
                u = T.getResponseHeader("etag"), u && (k.etag[f] = u)), 204 === e || "HEAD" === m.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state, 
                o = s.data, a = s.error, i = !a)) : (a = l, !e && l || (l = "error", e < 0 && (e = 0))), 
                T.status = e, T.statusText = (t || l) + "", i ? x.resolveWith(y, [ o, l, T ]) : x.rejectWith(y, [ T, l, a ]), 
                T.statusCode(w), w = void 0, g && v.trigger(i ? "ajaxSuccess" : "ajaxError", [ T, m, i ? o : a ]), 
                b.fireWith(y, [ T, l ]), g && (v.trigger("ajaxComplete", [ T, m ]), --k.active || k.event.trigger("ajaxStop")));
            }
            return T;
        },
        getJSON: function(e, t, n) {
            return k.get(e, t, n, "json");
        },
        getScript: function(e, t) {
            return k.get(e, void 0, t, "script");
        }
    }), k.each([ "get", "post" ], function(e, i) {
        k[i] = function(e, t, n, r) {
            return k.isFunction(t) && (r = r || n, n = t, t = void 0), k.ajax(k.extend({
                url: e,
                type: i,
                dataType: r,
                data: t,
                success: n
            }, k.isPlainObject(e) && e));
        };
    }), k._evalUrl = function(e) {
        return k.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        });
    }, k.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (k.isFunction(e) && (e = e.call(this[0])), t = k(e, this[0].ownerDocument).eq(0).clone(!0), 
            this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
            }).append(this)), this;
        },
        wrapInner: function(n) {
            return k.isFunction(n) ? this.each(function(e) {
                k(this).wrapInner(n.call(this, e));
            }) : this.each(function() {
                var e = k(this), t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n);
            });
        },
        wrap: function(t) {
            var n = k.isFunction(t);
            return this.each(function(e) {
                k(this).wrapAll(n ? t.call(this, e) : t);
            });
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                k(this).replaceWith(this.childNodes);
            }), this;
        }
    }), k.expr.pseudos.hidden = function(e) {
        return !k.expr.pseudos.visible(e);
    }, k.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, k.ajaxSettings.xhr = function() {
        try {
            return new C.XMLHttpRequest();
        } catch (e) {}
    };
    var Wt = {
        0: 200,
        1223: 204
    }, $t = k.ajaxSettings.xhr();
    m.cors = !!$t && "withCredentials" in $t, m.ajax = $t = !!$t, k.ajaxTransport(function(i) {
        var o, a;
        if (m.cors || $t && !i.crossDomain) return {
            send: function(e, t) {
                var n, r = i.xhr();
                if (r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields) for (n in i.xhrFields) r[n] = i.xhrFields[n];
                i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                for (n in e) r.setRequestHeader(n, e[n]);
                o = function(e) {
                    return function() {
                        o && (o = a = r.onload = r.onerror = r.onabort = r.onreadystatechange = null, "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Wt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                            binary: r.response
                        } : {
                            text: r.responseText
                        }, r.getAllResponseHeaders()));
                    };
                }, r.onload = o(), a = r.onerror = o("error"), void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                    4 === r.readyState && C.setTimeout(function() {
                        o && a();
                    });
                }, o = o("abort");
                try {
                    r.send(i.hasContent && i.data || null);
                } catch (e) {
                    if (o) throw e;
                }
            },
            abort: function() {
                o && o();
            }
        };
    }), k.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1);
    }), k.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return k.globalEval(e), e;
            }
        }
    }), k.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), k.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, i;
            return {
                send: function(e, t) {
                    r = k("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", i = function(e) {
                        r.remove(), i = null, e && t("error" === e.type ? 404 : 200, e.type);
                    }), j.head.appendChild(r[0]);
                },
                abort: function() {
                    i && i();
                }
            };
        }
    });
    var Bt = [], Qt = /(=)\?(?=&|$)|\?\?/;
    k.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Bt.pop() || k.expando + "_" + yt++;
            return this[e] = !0, e;
        }
    }), k.ajaxPrefilter("json jsonp", function(e, t, n) {
        var r, i, o, a = e.jsonp !== !1 && (Qt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Qt.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = k.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, 
        a ? e[a] = e[a].replace(Qt, "$1" + r) : e.jsonp !== !1 && (e.url += (vt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), 
        e.converters["script json"] = function() {
            return o || k.error(r + " was not called"), o[0];
        }, e.dataTypes[0] = "json", i = C[r], C[r] = function() {
            o = arguments;
        }, n.always(function() {
            void 0 === i ? k(C).removeProp(r) : C[r] = i, e[r] && (e.jsonpCallback = t.jsonpCallback, 
            Bt.push(r)), o && k.isFunction(i) && i(o[0]), o = i = void 0;
        }), "script";
    }), m.createHTMLDocument = function() {
        var e = j.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length;
    }(), k.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (m.createHTMLDocument ? (t = j.implementation.createHTMLDocument(""), 
        r = t.createElement("base"), r.href = j.location.href, t.head.appendChild(r)) : t = j), 
        i = S.exec(e), o = !n && [], i ? [ t.createElement(i[1]) ] : (i = ge([ e ], t, o), 
        o && o.length && k(o).remove(), k.merge([], i.childNodes));
    }, k.fn.load = function(e, t, n) {
        var r, i, o, a = this, s = e.indexOf(" ");
        return s > -1 && (r = pt(e.slice(s)), e = e.slice(0, s)), k.isFunction(t) ? (n = t, 
        t = void 0) : t && "object" == typeof t && (i = "POST"), a.length > 0 && k.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments, a.html(r ? k("<div>").append(k.parseHTML(e)).find(r) : e);
        }).always(n && function(e, t) {
            a.each(function() {
                n.apply(this, o || [ e.responseText, t, e ]);
            });
        }), this;
    }, k.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(e, t) {
        k.fn[t] = function(e) {
            return this.on(t, e);
        };
    }), k.expr.pseudos.animated = function(t) {
        return k.grep(k.timers, function(e) {
            return t === e.elem;
        }).length;
    };
    function _t(e) {
        return k.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
    }
    k.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, s, u, l, c = k.css(e, "position"), f = k(e), p = {};
            "static" === c && (e.style.position = "relative"), s = f.offset(), o = k.css(e, "top"), 
            u = k.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1, 
            l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), 
            k.isFunction(t) && (t = t.call(e, n, k.extend({}, s))), null != t.top && (p.top = t.top - s.top + a), 
            null != t.left && (p.left = t.left - s.left + i), "using" in t ? t.using.call(e, p) : f.css(p);
        }
    }, k.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                k.offset.setOffset(this, t, e);
            });
            var e, n, r, i, o = this[0];
            if (o) return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, 
            n = _t(i), e = i.documentElement, {
                top: r.top + n.pageYOffset - e.clientTop,
                left: r.left + n.pageXOffset - e.clientLeft
            }) : r) : {
                top: 0,
                left: 0
            };
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0], r = {
                    top: 0,
                    left: 0
                };
                return "fixed" === k.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), 
                t = this.offset(), k.nodeName(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + k.css(e[0], "borderTopWidth", !0),
                    left: r.left + k.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - k.css(n, "marginTop", !0),
                    left: t.left - r.left - k.css(n, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && "static" === k.css(e, "position")) e = e.offsetParent;
                return e || me;
            });
        }
    }), k.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, i) {
        var o = "pageYOffset" === i;
        k.fn[t] = function(e) {
            return _(this, function(e, t, n) {
                var r = _t(e);
                return void 0 === n ? r ? r[i] : e[t] : void (r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n);
            }, t, e, arguments.length);
        };
    }), k.each([ "top", "left" ], function(e, n) {
        k.cssHooks[n] = We(m.pixelPosition, function(e, t) {
            if (t) return t = Ie(e, n), Me.test(t) ? k(e).position()[n] + "px" : t;
        });
    }), k.each({
        Height: "height",
        Width: "width"
    }, function(a, s) {
        k.each({
            padding: "inner" + a,
            content: s,
            "": "outer" + a
        }, function(r, o) {
            k.fn[o] = function(e, t) {
                var n = arguments.length && (r || "boolean" != typeof e), i = r || (e === !0 || t === !0 ? "margin" : "border");
                return _(this, function(e, t, n) {
                    var r;
                    return k.isWindow(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement, 
                    Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? k.css(e, t, i) : k.style(e, t, n, i);
                }, s, n ? e : void 0, n);
            };
        });
    }), k.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    }), k.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function() {
        return k;
    });
    var Xt = C.jQuery, zt = C.$;
    return k.noConflict = function(e) {
        return C.$ === k && (C.$ = zt), e && C.jQuery === k && (C.jQuery = Xt), k;
    }, e || (C.jQuery = C.$ = k), k;
});

"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0), function(s, n) {
    "use strict";
    function u(e) {
        var t = n.console;
        r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), 
        s.migrateTrace && t.trace && t.trace()));
    }
    function t(e, t, n, r) {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return u(r), n;
            }
        });
    }
    s.migrateVersion = "3.0.0", function() {
        var e = n.console && n.console.log && function() {
            n.console.log.apply(n.console, arguments);
        }, t = /^[12]\./;
        e && (s && !t.test(s.fn.jquery) || e("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && e("JQMIGRATE: Migrate plugin loaded multiple times"), 
        e("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
    }();
    var r = {};
    s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
        r = {}, s.migrateWarnings.length = 0;
    }, "BackCompat" === document.compatMode && u("jQuery is not compatible with Quirks Mode");
    var i = s.fn.init, o = s.isNumeric, e = s.find, a = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, l = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    s.fn.init = function(e) {
        var t = Array.prototype.slice.call(arguments);
        return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), 
        t[0] = []), i.apply(this, t);
    }, s.fn.init.prototype = s.fn, s.find = function(t) {
        var n = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && a.test(t)) try {
            document.querySelector(t);
        } catch (e) {
            t = t.replace(l, function(e, t, n, r) {
                return "[" + t + n + '"' + r + '"]';
            });
            try {
                document.querySelector(t), u("Attribute selector with '#' must be quoted: " + n[0]), 
                n[0] = t;
            } catch (e) {
                u("Attribute selector with '#' was not fixed: " + n[0]);
            }
        }
        return e.apply(this, n);
    };
    var c;
    for (c in e) Object.prototype.hasOwnProperty.call(e, c) && (s.find[c] = e[c]);
    s.fn.size = function() {
        return u("jQuery.fn.size() is deprecated; use the .length property"), this.length;
    }, s.parseJSON = function() {
        return u("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments);
    }, s.isNumeric = function(e) {
        function t(e) {
            var t = e && e.toString();
            return !s.isArray(e) && t - parseFloat(t) + 1 >= 0;
        }
        var n = o(e), r = t(e);
        return n !== r && u("jQuery.isNumeric() should not be called on constructed objects"), 
        r;
    }, t(s, "unique", s.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), 
    t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), 
    t(s.expr, ":", s.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
    var f = s.ajax;
    s.ajax = function() {
        var e = f.apply(this, arguments);
        return e.promise && (t(e, "success", e.done, "jQXHR.success is deprecated and removed"), 
        t(e, "error", e.fail, "jQXHR.error is deprecated and removed"), t(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), 
        e;
    };
    var p = s.fn.removeAttr, d = s.fn.toggleClass, h = /\S+/g;
    s.fn.removeAttr = function(e) {
        var n = this;
        return s.each(e.match(h), function(e, t) {
            s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), 
            n.prop(t, !1));
        }), p.apply(this, arguments);
    }, s.fn.toggleClass = function(t) {
        return void 0 !== t && "boolean" != typeof t ? d.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), 
        this.each(function() {
            var e = this.getAttribute && this.getAttribute("class") || "";
            e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : s.data(this, "__className__") || "");
        }));
    };
    var g = !1;
    s.swap && s.each([ "height", "width", "reliableMarginRight" ], function(e, t) {
        var n = s.cssHooks[t] && s.cssHooks[t].get;
        n && (s.cssHooks[t].get = function() {
            var e;
            return g = !0, e = n.apply(this, arguments), g = !1, e;
        });
    }), s.swap = function(e, t, n, r) {
        var i, o, a = {};
        g || u("jQuery.swap() is undocumented and deprecated");
        for (o in t) a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t) e.style[o] = a[o];
        return i;
    };
    var m = s.data;
    s.data = function(e, t, n) {
        var r;
        return t && t !== s.camelCase(t) && (r = s.hasData(e) && m.call(this, e), r && t in r) ? (u("jQuery.data() always sets/gets camelCased names: " + t), 
        arguments.length > 2 && (r[t] = n), r[t]) : m.apply(this, arguments);
    };
    var y = s.Tween.prototype.run;
    s.Tween.prototype.run = function(e) {
        s.easing[this.easing].length > 1 && (u('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), 
        s.easing[this.easing] = s.easing[this.easing].bind(s.easing, e, this.options.duration * e, 0, 1, this.options.duration)), 
        y.apply(this, arguments);
    };
    var v = s.fn.load, x = s.event.fix;
    s.event.props = [], s.event.fixHooks = {}, s.event.fix = function(e) {
        var t, n = e.type, r = this.fixHooks[n], i = s.event.props;
        if (i.length) for (u("jQuery.event.props are deprecated and removed: " + i.join()); i.length; ) s.event.addProp(i.pop());
        if (r && !r._migrated_ && (r._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + n), 
        (i = r.props) && i.length)) for (;i.length; ) s.event.addProp(i.pop());
        return t = x.call(this, e), r && r.filter ? r.filter(t, e) : t;
    }, s.each([ "load", "unload", "error" ], function(e, t) {
        s.fn[t] = function() {
            var e = Array.prototype.slice.call(arguments, 0);
            return "load" === t && "string" == typeof e[0] ? v.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), 
            e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), 
            this));
        };
    }), s(function() {
        s(document).triggerHandler("ready");
    }), s.event.special.ready = {
        setup: function() {
            this === document && u("'ready' event is deprecated");
        }
    }, s.fn.extend({
        bind: function(e, t, n) {
            return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, n);
        },
        unbind: function(e, t) {
            return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t);
        },
        delegate: function(e, t, n, r) {
            return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, n, r);
        },
        undelegate: function(e, t, n) {
            return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        }
    });
    var b = s.fn.offset;
    s.fn.offset = function() {
        var e, t = this[0], n = {
            top: 0,
            left: 0
        };
        return t && t.nodeType ? (e = (t.ownerDocument || document).documentElement, s.contains(e, t) ? b.apply(this, arguments) : (u("jQuery.fn.offset() requires an element connected to a document"), 
        n)) : (u("jQuery.fn.offset() requires a valid DOM element"), n);
    };
    var w = s.param;
    s.param = function(e, t) {
        var n = s.ajaxSettings && s.ajaxSettings.traditional;
        return void 0 === t && n && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), 
        t = n), w.call(this, e, t);
    };
    var T = s.fn.andSelf || s.fn.addBack;
    s.fn.andSelf = function() {
        return u("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), T.apply(this, arguments);
    };
    var C = s.Deferred, j = [ [ "resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved" ], [ "reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected" ], [ "notify", "progress", s.Callbacks("memory"), s.Callbacks("memory") ] ];
    s.Deferred = function(e) {
        var o = C(), a = o.promise();
        return o.pipe = a.pipe = function() {
            var i = arguments;
            return u("deferred.pipe() is deprecated"), s.Deferred(function(r) {
                s.each(j, function(e, t) {
                    var n = s.isFunction(i[e]) && i[e];
                    o[t[1]](function() {
                        var e = n && n.apply(this, arguments);
                        e && s.isFunction(e.promise) ? e.promise().done(r.resolve).fail(r.reject).progress(r.notify) : r[t[0] + "With"](this === a ? r.promise() : this, n ? [ e ] : arguments);
                    });
                }), i = null;
            }).promise();
        }, e && e.call(o, o), o;
    };
}(jQuery, window);

"use strict";

$(document).on("ready", function() {});