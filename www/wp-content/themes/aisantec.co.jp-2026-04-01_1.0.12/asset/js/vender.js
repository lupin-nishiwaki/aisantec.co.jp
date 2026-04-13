/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (e, t) {
  "use strict";
  var n = [],
    r = e.document,
    i = Object.getPrototypeOf,
    o = n.slice,
    a = n.concat,
    s = n.push,
    u = n.indexOf,
    l = {},
    c = l.toString,
    f = l.hasOwnProperty,
    p = f.toString,
    d = p.call(Object),
    h = {},
    g = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    v = function (e) {
      return null != e && e === e.window;
    },
    y = { type: !0, src: !0, noModule: !0 };
  function m(e, t, n) {
    var i,
      o = (t = t || r).createElement("script");
    if (((o.text = e), n)) for (i in y) n[i] && (o[i] = n[i]);
    t.head.appendChild(o).parentNode.removeChild(o);
  }
  function x(e) {
    return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? l[c.call(e)] || "object" : typeof e;
  }
  var b = "3.3.1",
    w = function (e, t) {
      return new w.fn.init(e, t);
    },
    T = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  function C(e) {
    var t = !!e && "length" in e && e.length,
      n = x(e);
    return !g(e) && !v(e) && ("array" === n || 0 === t || ("number" == typeof t && t > 0 && t - 1 in e));
  }
  (w.fn = w.prototype = {
    jquery: b,
    constructor: w,
    length: 0,
    toArray: function () {
      return o.call(this);
    },
    get: function (e) {
      return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e];
    },
    pushStack: function (e) {
      var t = w.merge(this.constructor(), e);
      return (t.prevObject = this), t;
    },
    each: function (e) {
      return w.each(this, e);
    },
    map: function (e) {
      return this.pushStack(
        w.map(this, function (t, n) {
          return e.call(t, n, t);
        })
      );
    },
    slice: function () {
      return this.pushStack(o.apply(this, arguments));
    },
    first: function () {
      return this.eq(0);
    },
    last: function () {
      return this.eq(-1);
    },
    eq: function (e) {
      var t = this.length,
        n = +e + (e < 0 ? t : 0);
      return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
    },
    end: function () {
      return this.prevObject || this.constructor();
    },
    push: s,
    sort: n.sort,
    splice: n.splice,
  }),
    (w.extend = w.fn.extend = function () {
      var e,
        t,
        n,
        r,
        i,
        o,
        a = arguments[0] || {},
        s = 1,
        u = arguments.length,
        l = !1;
      for (
        "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
          "object" == typeof a || g(a) || (a = {}),
          s === u && ((a = this), s--);
        s < u;
        s++
      )
        if (null != (e = arguments[s]))
          for (t in e)
            (n = a[t]),
              a !== (r = e[t]) &&
                (l && r && (w.isPlainObject(r) || (i = Array.isArray(r)))
                  ? (i ? ((i = !1), (o = n && Array.isArray(n) ? n : [])) : (o = n && w.isPlainObject(n) ? n : {}),
                    (a[t] = w.extend(l, o, r)))
                  : void 0 !== r && (a[t] = r));
      return a;
    }),
    w.extend({
      expando: "jQuery" + (b + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== c.call(e)) &&
          (!(t = i(e)) || ("function" == typeof (n = f.call(t, "constructor") && t.constructor) && p.call(n) === d))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e) {
        m(e);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (C(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
        else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      trim: function (e) {
        return null == e ? "" : (e + "").replace(T, "");
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (C(Object(e)) ? w.merge(n, "string" == typeof e ? [e] : e) : s.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : u.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          s = [];
        if (C(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && s.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
        return a.apply([], s);
      },
      guid: 1,
      support: h,
    }),
    "function" == typeof Symbol && (w.fn[Symbol.iterator] = n[Symbol.iterator]),
    w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      l["[object " + t + "]"] = t.toLowerCase();
    });
  var E =
    /*!
     * Sizzle CSS Selector Engine v2.3.3
     * https://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2016-08-08
     */
    (function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v,
        y,
        m,
        x,
        b = "sizzle" + 1 * new Date(),
        w = e.document,
        T = 0,
        C = 0,
        E = ae(),
        k = ae(),
        S = ae(),
        D = function (e, t) {
          return e === t && (f = !0), 0;
        },
        N = {}.hasOwnProperty,
        A = [],
        j = A.pop,
        q = A.push,
        L = A.push,
        H = A.slice,
        O = function (e, t) {
          for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
          return -1;
        },
        P =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        M = "[\\x20\\t\\r\\n\\f]",
        R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
        I =
          "\\[" +
          M +
          "*(" +
          R +
          ")(?:" +
          M +
          "*([*^$|!~]?=)" +
          M +
          "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
          R +
          "))|)" +
          M +
          "*\\]",
        W =
          ":(" +
          R +
          ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
          I +
          ")*)|.*)\\)|)",
        $ = new RegExp(M + "+", "g"),
        B = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
        F = new RegExp("^" + M + "*," + M + "*"),
        _ = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
        z = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
        X = new RegExp(W),
        U = new RegExp("^" + R + "$"),
        V = {
          ID: new RegExp("^#(" + R + ")"),
          CLASS: new RegExp("^\\.(" + R + ")"),
          TAG: new RegExp("^(" + R + "|[*])"),
          ATTR: new RegExp("^" + I),
          PSEUDO: new RegExp("^" + W),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              M +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              M +
              "*(?:([+-]|)" +
              M +
              "*(\\d+)|))" +
              M +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + P + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              M +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              M +
              "*((?:-\\d)?\\d*)" +
              M +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        G = /^(?:input|select|textarea|button)$/i,
        Y = /^h\d$/i,
        Q = /^[^{]+\{\s*\[native \w/,
        J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        K = /[+~]/,
        Z = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
        ee = function (e, t, n) {
          var r = "0x" + t - 65536;
          return r != r || n
            ? t
            : r < 0
            ? String.fromCharCode(r + 65536)
            : String.fromCharCode((r >> 10) | 55296, (1023 & r) | 56320);
        },
        te = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
        ne = function (e, t) {
          return t
            ? "\0" === e
              ? "�"
              : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " "
            : "\\" + e;
        },
        re = function () {
          p();
        },
        ie = me(
          function (e) {
            return !0 === e.disabled && ("form" in e || "label" in e);
          },
          { dir: "parentNode", next: "legend" }
        );
      try {
        L.apply((A = H.call(w.childNodes)), w.childNodes), A[w.childNodes.length].nodeType;
      } catch (e) {
        L = {
          apply: A.length
            ? function (e, t) {
                q.apply(e, H.call(t));
              }
            : function (e, t) {
                for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                e.length = n - 1;
              },
        };
      }
      function oe(e, t, r, i) {
        var o,
          s,
          l,
          c,
          f,
          h,
          y,
          m = t && t.ownerDocument,
          T = t ? t.nodeType : 9;
        if (((r = r || []), "string" != typeof e || !e || (1 !== T && 9 !== T && 11 !== T))) return r;
        if (!i && ((t ? t.ownerDocument || t : w) !== d && p(t), (t = t || d), g)) {
          if (11 !== T && (f = J.exec(e)))
            if ((o = f[1])) {
              if (9 === T) {
                if (!(l = t.getElementById(o))) return r;
                if (l.id === o) return r.push(l), r;
              } else if (m && (l = m.getElementById(o)) && x(t, l) && l.id === o) return r.push(l), r;
            } else {
              if (f[2]) return L.apply(r, t.getElementsByTagName(e)), r;
              if ((o = f[3]) && n.getElementsByClassName && t.getElementsByClassName)
                return L.apply(r, t.getElementsByClassName(o)), r;
            }
          if (n.qsa && !S[e + " "] && (!v || !v.test(e))) {
            if (1 !== T) (m = t), (y = e);
            else if ("object" !== t.nodeName.toLowerCase()) {
              for (
                (c = t.getAttribute("id")) ? (c = c.replace(te, ne)) : t.setAttribute("id", (c = b)),
                  s = (h = a(e)).length;
                s--;

              )
                h[s] = "#" + c + " " + ye(h[s]);
              (y = h.join(",")), (m = (K.test(e) && ge(t.parentNode)) || t);
            }
            if (y)
              try {
                return L.apply(r, m.querySelectorAll(y)), r;
              } catch (e) {
              } finally {
                c === b && t.removeAttribute("id");
              }
          }
        }
        return u(e.replace(B, "$1"), t, r, i);
      }
      function ae() {
        var e = [];
        return function t(n, i) {
          return e.push(n + " ") > r.cacheLength && delete t[e.shift()], (t[n + " "] = i);
        };
      }
      function se(e) {
        return (e[b] = !0), e;
      }
      function ue(e) {
        var t = d.createElement("fieldset");
        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), (t = null);
        }
      }
      function le(e, t) {
        for (var n = e.split("|"), i = n.length; i--; ) r.attrHandle[n[i]] = t;
      }
      function ce(e, t) {
        var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (r) return r;
        if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
        return e ? 1 : -1;
      }
      function fe(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }
      function pe(e) {
        return function (t) {
          var n = t.nodeName.toLowerCase();
          return ("input" === n || "button" === n) && t.type === e;
        };
      }
      function de(e) {
        return function (t) {
          return "form" in t
            ? t.parentNode && !1 === t.disabled
              ? "label" in t
                ? "label" in t.parentNode
                  ? t.parentNode.disabled === e
                  : t.disabled === e
                : t.isDisabled === e || (t.isDisabled !== !e && ie(t) === e)
              : t.disabled === e
            : "label" in t && t.disabled === e;
        };
      }
      function he(e) {
        return se(function (t) {
          return (
            (t = +t),
            se(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--; ) n[(i = o[a])] && (n[i] = !(r[i] = n[i]));
            })
          );
        });
      }
      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }
      for (t in ((n = oe.support = {}),
      (o = oe.isXML = function (e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName;
      }),
      (p = oe.setDocument = function (e) {
        var t,
          i,
          a = e ? e.ownerDocument || e : w;
        return a !== d && 9 === a.nodeType && a.documentElement
          ? ((h = (d = a).documentElement),
            (g = !o(d)),
            w !== d &&
              (i = d.defaultView) &&
              i.top !== i &&
              (i.addEventListener
                ? i.addEventListener("unload", re, !1)
                : i.attachEvent && i.attachEvent("onunload", re)),
            (n.attributes = ue(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (n.getElementsByTagName = ue(function (e) {
              return e.appendChild(d.createComment("")), !e.getElementsByTagName("*").length;
            })),
            (n.getElementsByClassName = Q.test(d.getElementsByClassName)),
            (n.getById = ue(function (e) {
              return (h.appendChild(e).id = b), !d.getElementsByName || !d.getElementsByName(b).length;
            })),
            n.getById
              ? ((r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((r.filter.ID = function (e) {
                  var t = e.replace(Z, ee);
                  return function (e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t;
                  };
                }),
                (r.find.ID = function (e, t) {
                  if (void 0 !== t.getElementById && g) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                      for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (r.find.TAG = n.getElementsByTagName
              ? function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : n.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (r.find.CLASS =
              n.getElementsByClassName &&
              function (e, t) {
                if (void 0 !== t.getElementsByClassName && g) return t.getElementsByClassName(e);
              }),
            (y = []),
            (v = []),
            (n.qsa = Q.test(d.querySelectorAll)) &&
              (ue(function (e) {
                (h.appendChild(e).innerHTML =
                  "<a id='" +
                  b +
                  "'></a><select id='" +
                  b +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + P + ")"),
                  e.querySelectorAll("[id~=" + b + "-]").length || v.push("~="),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]");
              }),
              ue(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = d.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                  (h.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (n.matchesSelector = Q.test(
              (m =
                h.matches ||
                h.webkitMatchesSelector ||
                h.mozMatchesSelector ||
                h.oMatchesSelector ||
                h.msMatchesSelector)
            )) &&
              ue(function (e) {
                (n.disconnectedMatch = m.call(e, "*")), m.call(e, "[s!='']:x"), y.push("!=", W);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (y = y.length && new RegExp(y.join("|"))),
            (t = Q.test(h.compareDocumentPosition)),
            (x =
              t || Q.test(h.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) for (; (t = t.parentNode); ) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var r = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    r ||
                    (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) ||
                    (!n.sortDetached && t.compareDocumentPosition(e) === r)
                      ? e === d || (e.ownerDocument === w && x(w, e))
                        ? -1
                        : t === d || (t.ownerDocument === w && x(w, t))
                        ? 1
                        : c
                        ? O(c, e) - O(c, t)
                        : 0
                      : 4 & r
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (f = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o) return e === d ? -1 : t === d ? 1 : i ? -1 : o ? 1 : c ? O(c, e) - O(c, t) : 0;
                  if (i === o) return ce(e, t);
                  for (n = e; (n = n.parentNode); ) a.unshift(n);
                  for (n = t; (n = n.parentNode); ) s.unshift(n);
                  for (; a[r] === s[r]; ) r++;
                  return r ? ce(a[r], s[r]) : a[r] === w ? -1 : s[r] === w ? 1 : 0;
                }),
            d)
          : d;
      }),
      (oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }),
      (oe.matchesSelector = function (e, t) {
        if (
          ((e.ownerDocument || e) !== d && p(e),
          (t = t.replace(z, "='$1']")),
          n.matchesSelector && g && !S[t + " "] && (!y || !y.test(t)) && (!v || !v.test(t)))
        )
          try {
            var r = m.call(e, t);
            if (r || n.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return r;
          } catch (e) {}
        return oe(t, d, null, [e]).length > 0;
      }),
      (oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== d && p(e), x(e, t);
      }),
      (oe.attr = function (e, t) {
        (e.ownerDocument || e) !== d && p(e);
        var i = r.attrHandle[t.toLowerCase()],
          o = i && N.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !g) : void 0;
        return void 0 !== o
          ? o
          : n.attributes || !g
          ? e.getAttribute(t)
          : (o = e.getAttributeNode(t)) && o.specified
          ? o.value
          : null;
      }),
      (oe.escape = function (e) {
        return (e + "").replace(te, ne);
      }),
      (oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }),
      (oe.uniqueSort = function (e) {
        var t,
          r = [],
          i = 0,
          o = 0;
        if (((f = !n.detectDuplicates), (c = !n.sortStable && e.slice(0)), e.sort(D), f)) {
          for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
          for (; i--; ) e.splice(r[i], 1);
        }
        return (c = null), e;
      }),
      (i = oe.getText = function (e) {
        var t,
          n = "",
          r = 0,
          o = e.nodeType;
        if (o) {
          if (1 === o || 9 === o || 11 === o) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
          } else if (3 === o || 4 === o) return e.nodeValue;
        } else for (; (t = e[r++]); ) n += i(t);
        return n;
      }),
      ((r = oe.selectors = {
        cacheLength: 50,
        createPseudo: se,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(Z, ee)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(Z, ee)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || oe.error(e[0]),
                  (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && oe.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return V.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = a(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(Z, ee).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = E[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                E(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      (void 0 !== e.getAttribute && e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (e, t, n) {
            return function (r) {
              var i = oe.attr(r, e);
              return null == i
                ? "!=" === t
                : !t ||
                    ((i += ""),
                    "=" === t
                      ? i === n
                      : "!=" === t
                      ? i !== n
                      : "^=" === t
                      ? n && 0 === i.indexOf(n)
                      : "*=" === t
                      ? n && i.indexOf(n) > -1
                      : "$=" === t
                      ? n && i.slice(-n.length) === n
                      : "~=" === t
                      ? (" " + i.replace($, " ") + " ").indexOf(n) > -1
                      : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
            };
          },
          CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;
            return 1 === r && 0 === i
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? "nextSibling" : "previousSibling",
                    v = t.parentNode,
                    y = s && t.nodeName.toLowerCase(),
                    m = !u && !s,
                    x = !1;
                  if (v) {
                    if (o) {
                      for (; g; ) {
                        for (p = t; (p = p[g]); ) if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                        h = g = "only" === e && !h && "nextSibling";
                      }
                      return !0;
                    }
                    if (((h = [a ? v.firstChild : v.lastChild]), a && m)) {
                      for (
                        x =
                          (d =
                            (l =
                              (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                              T && l[1]) && l[2],
                          p = d && v.childNodes[d];
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop());

                      )
                        if (1 === p.nodeType && ++x && p === t) {
                          c[e] = [T, d, x];
                          break;
                        }
                    } else if (
                      (m &&
                        (x = d =
                          (l =
                            (c = (f = (p = t)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                            T && l[1]),
                      !1 === x)
                    )
                      for (
                        ;
                        (p = (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                        ((s ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) ||
                          !++x ||
                          (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[e] = [T, x]),
                          p !== t));

                      );
                    return (x -= i) === r || (x % r == 0 && x / r >= 0);
                  }
                };
          },
          PSEUDO: function (e, t) {
            var n,
              i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
            return i[b]
              ? i(t)
              : i.length > 1
              ? ((n = [e, e, "", t]),
                r.setFilters.hasOwnProperty(e.toLowerCase())
                  ? se(function (e, n) {
                      for (var r, o = i(e, t), a = o.length; a--; ) e[(r = O(e, o[a]))] = !(n[r] = o[a]);
                    })
                  : function (e) {
                      return i(e, 0, n);
                    })
              : i;
          },
        },
        pseudos: {
          not: se(function (e) {
            var t = [],
              n = [],
              r = s(e.replace(B, "$1"));
            return r[b]
              ? se(function (e, t, n, i) {
                  for (var o, a = r(e, null, i, []), s = e.length; s--; ) (o = a[s]) && (e[s] = !(t[s] = o));
                })
              : function (e, i, o) {
                  return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop();
                };
          }),
          has: se(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: se(function (e) {
            return (
              (e = e.replace(Z, ee)),
              function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              }
            );
          }),
          lang: se(function (e) {
            return (
              U.test(e || "") || oe.error("unsupported lang: " + e),
              (e = e.replace(Z, ee).toLowerCase()),
              function (t) {
                var n;
                do {
                  if ((n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")))
                    return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1;
              }
            );
          }),
          target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id;
          },
          root: function (e) {
            return e === h;
          },
          focus: function (e) {
            return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: de(!1),
          disabled: de(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && !!e.checked) || ("option" === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !r.pseudos.empty(e);
          },
          header: function (e) {
            return Y.test(e.nodeName);
          },
          input: function (e) {
            return G.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
            );
          },
          first: he(function () {
            return [0];
          }),
          last: he(function (e, t) {
            return [t - 1];
          }),
          eq: he(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: he(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: he(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
            return e;
          }),
          gt: he(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = r.pseudos.eq),
      { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
        r.pseudos[t] = fe(t);
      for (t in { submit: !0, reset: !0 }) r.pseudos[t] = pe(t);
      function ve() {}
      function ye(e) {
        for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
        return r;
      }
      function me(e, t, n) {
        var r = t.dir,
          i = t.next,
          o = i || r,
          a = n && "parentNode" === o,
          s = C++;
        return t.first
          ? function (t, n, i) {
              for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i);
              return !1;
            }
          : function (t, n, u) {
              var l,
                c,
                f,
                p = [T, s];
              if (u) {
                for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0;
              } else
                for (; (t = t[r]); )
                  if (1 === t.nodeType || a)
                    if (
                      ((c = (f = t[b] || (t[b] = {}))[t.uniqueID] || (f[t.uniqueID] = {})),
                      i && i === t.nodeName.toLowerCase())
                    )
                      t = t[r] || t;
                    else {
                      if ((l = c[o]) && l[0] === T && l[1] === s) return (p[2] = l[2]);
                      if (((c[o] = p), (p[2] = e(t, n, u)))) return !0;
                    }
              return !1;
            };
      }
      function xe(e) {
        return e.length > 1
          ? function (t, n, r) {
              for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
              return !0;
            }
          : e[0];
      }
      function be(e, t, n, r, i) {
        for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
          (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
        return a;
      }
      function we(e, t, n, r, i, o) {
        return (
          r && !r[b] && (r = we(r)),
          i && !i[b] && (i = we(i, o)),
          se(function (o, a, s, u) {
            var l,
              c,
              f,
              p = [],
              d = [],
              h = a.length,
              g =
                o ||
                (function (e, t, n) {
                  for (var r = 0, i = t.length; r < i; r++) oe(e, t[r], n);
                  return n;
                })(t || "*", s.nodeType ? [s] : s, []),
              v = !e || (!o && t) ? g : be(g, p, e, s, u),
              y = n ? (i || (o ? e : h || r) ? [] : a) : v;
            if ((n && n(v, y, s, u), r))
              for (l = be(y, d), r(l, [], s, u), c = l.length; c--; ) (f = l[c]) && (y[d[c]] = !(v[d[c]] = f));
            if (o) {
              if (i || e) {
                if (i) {
                  for (l = [], c = y.length; c--; ) (f = y[c]) && l.push((v[c] = f));
                  i(null, (y = []), l, u);
                }
                for (c = y.length; c--; ) (f = y[c]) && (l = i ? O(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f));
              }
            } else (y = be(y === a ? y.splice(h, y.length) : y)), i ? i(null, a, y, u) : L.apply(a, y);
          })
        );
      }
      function Te(e) {
        for (
          var t,
            n,
            i,
            o = e.length,
            a = r.relative[e[0].type],
            s = a || r.relative[" "],
            u = a ? 1 : 0,
            c = me(
              function (e) {
                return e === t;
              },
              s,
              !0
            ),
            f = me(
              function (e) {
                return O(t, e) > -1;
              },
              s,
              !0
            ),
            p = [
              function (e, n, r) {
                var i = (!a && (r || n !== l)) || ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                return (t = null), i;
              },
            ];
          u < o;
          u++
        )
          if ((n = r.relative[e[u].type])) p = [me(xe(p), n)];
          else {
            if ((n = r.filter[e[u].type].apply(null, e[u].matches))[b]) {
              for (i = ++u; i < o && !r.relative[e[i].type]; i++);
              return we(
                u > 1 && xe(p),
                u > 1 && ye(e.slice(0, u - 1).concat({ value: " " === e[u - 2].type ? "*" : "" })).replace(B, "$1"),
                n,
                u < i && Te(e.slice(u, i)),
                i < o && Te((e = e.slice(i))),
                i < o && ye(e)
              );
            }
            p.push(n);
          }
        return xe(p);
      }
      return (
        (ve.prototype = r.filters = r.pseudos),
        (r.setFilters = new ve()),
        (a = oe.tokenize = function (e, t) {
          var n,
            i,
            o,
            a,
            s,
            u,
            l,
            c = k[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (s = e, u = [], l = r.preFilter; s; ) {
            for (a in ((n && !(i = F.exec(s))) || (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
            (n = !1),
            (i = _.exec(s)) &&
              ((n = i.shift()), o.push({ value: n, type: i[0].replace(B, " ") }), (s = s.slice(n.length))),
            r.filter))
              !(i = V[a].exec(s)) ||
                (l[a] && !(i = l[a](i))) ||
                ((n = i.shift()), o.push({ value: n, type: a, matches: i }), (s = s.slice(n.length)));
            if (!n) break;
          }
          return t ? s.length : s ? oe.error(e) : k(e, u).slice(0);
        }),
        (s = oe.compile = function (e, t) {
          var n,
            i,
            o,
            s,
            u,
            c,
            f = [],
            h = [],
            v = S[e + " "];
          if (!v) {
            for (t || (t = a(e)), n = t.length; n--; ) (v = Te(t[n]))[b] ? f.push(v) : h.push(v);
            (v = S(
              e,
              ((i = h),
              (s = (o = f).length > 0),
              (u = i.length > 0),
              (c = function (e, t, n, a, c) {
                var f,
                  h,
                  v,
                  y = 0,
                  m = "0",
                  x = e && [],
                  b = [],
                  w = l,
                  C = e || (u && r.find.TAG("*", c)),
                  E = (T += null == w ? 1 : Math.random() || 0.1),
                  k = C.length;
                for (c && (l = t === d || t || c); m !== k && null != (f = C[m]); m++) {
                  if (u && f) {
                    for (h = 0, t || f.ownerDocument === d || (p(f), (n = !g)); (v = i[h++]); )
                      if (v(f, t || d, n)) {
                        a.push(f);
                        break;
                      }
                    c && (T = E);
                  }
                  s && ((f = !v && f) && y--, e && x.push(f));
                }
                if (((y += m), s && m !== y)) {
                  for (h = 0; (v = o[h++]); ) v(x, b, t, n);
                  if (e) {
                    if (y > 0) for (; m--; ) x[m] || b[m] || (b[m] = j.call(a));
                    b = be(b);
                  }
                  L.apply(a, b), c && !e && b.length > 0 && y + o.length > 1 && oe.uniqueSort(a);
                }
                return c && ((T = E), (l = w)), x;
              }),
              s ? se(c) : c)
            )).selector = e;
          }
          return v;
        }),
        (u = oe.select = function (e, t, n, i) {
          var o,
            u,
            l,
            c,
            f,
            p = "function" == typeof e && e,
            d = !i && a((e = p.selector || e));
          if (((n = n || []), 1 === d.length)) {
            if (
              (u = d[0] = d[0].slice(0)).length > 2 &&
              "ID" === (l = u[0]).type &&
              9 === t.nodeType &&
              g &&
              r.relative[u[1].type]
            ) {
              if (!(t = (r.find.ID(l.matches[0].replace(Z, ee), t) || [])[0])) return n;
              p && (t = t.parentNode), (e = e.slice(u.shift().value.length));
            }
            for (o = V.needsContext.test(e) ? 0 : u.length; o-- && ((l = u[o]), !r.relative[(c = l.type)]); )
              if (
                (f = r.find[c]) &&
                (i = f(l.matches[0].replace(Z, ee), (K.test(u[0].type) && ge(t.parentNode)) || t))
              ) {
                if ((u.splice(o, 1), !(e = i.length && ye(u)))) return L.apply(n, i), n;
                break;
              }
          }
          return (p || s(e, d))(i, t, !g, n, !t || (K.test(e) && ge(t.parentNode)) || t), n;
        }),
        (n.sortStable = b.split("").sort(D).join("") === b),
        (n.detectDuplicates = !!f),
        p(),
        (n.sortDetached = ue(function (e) {
          return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
        })),
        ue(function (e) {
          return (e.innerHTML = "<a href='#'></a>"), "#" === e.firstChild.getAttribute("href");
        }) ||
          le("type|href|height|width", function (e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
          }),
        (n.attributes &&
          ue(function (e) {
            return (
              (e.innerHTML = "<input/>"),
              e.firstChild.setAttribute("value", ""),
              "" === e.firstChild.getAttribute("value")
            );
          })) ||
          le("value", function (e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
          }),
        ue(function (e) {
          return null == e.getAttribute("disabled");
        }) ||
          le(P, function (e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
          }),
        oe
      );
    })(e);
  (w.find = E),
    (w.expr = E.selectors),
    (w.expr[":"] = w.expr.pseudos),
    (w.uniqueSort = w.unique = E.uniqueSort),
    (w.text = E.getText),
    (w.isXMLDoc = E.isXML),
    (w.contains = E.contains),
    (w.escapeSelector = E.escape);
  var k = function (e, t, n) {
      for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
        if (1 === e.nodeType) {
          if (i && w(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    S = function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    D = w.expr.match.needsContext;
  function N(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var A = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, t, n) {
    return g(t)
      ? w.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        })
      : t.nodeType
      ? w.grep(e, function (e) {
          return (e === t) !== n;
        })
      : "string" != typeof t
      ? w.grep(e, function (e) {
          return u.call(t, e) > -1 !== n;
        })
      : w.filter(t, e, n);
  }
  (w.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? w.find.matchesSelector(r, e)
          ? [r]
          : []
        : w.find.matches(
            e,
            w.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    w.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            w(e).filter(function () {
              for (t = 0; t < r; t++) if (w.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) w.find(e, i[t], n);
        return r > 1 ? w.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, "string" == typeof e && D.test(e) ? w(e) : e || [], !1).length;
      },
    });
  var q,
    L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((w.fn.init = function (e, t, n) {
    var i, o;
    if (!e) return this;
    if (((n = n || q), "string" == typeof e)) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : L.exec(e)) || (!i[1] && t))
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (
          ((t = t instanceof w ? t[0] : t),
          w.merge(this, w.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : r, !0)),
          A.test(i[1]) && w.isPlainObject(t))
        )
          for (i in t) g(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this;
      }
      return (o = r.getElementById(i[2])) && ((this[0] = o), (this.length = 1)), this;
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : g(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(w)
      : w.makeArray(e, this);
  }).prototype = w.fn),
    (q = w(r));
  var H = /^(?:parents|prev(?:Until|All))/,
    O = { children: !0, contents: !0, next: !0, prev: !0 };
  function P(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType; );
    return e;
  }
  w.fn.extend({
    has: function (e) {
      var t = w(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (w.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && w(e);
      if (!D.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && w.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(o.length > 1 ? w.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? u.call(w(e), this[0])
          : u.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(w.uniqueSort(w.merge(this.get(), w(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    w.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return k(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return k(e, "parentNode", n);
        },
        next: function (e) {
          return P(e, "nextSibling");
        },
        prev: function (e) {
          return P(e, "previousSibling");
        },
        nextAll: function (e) {
          return k(e, "nextSibling");
        },
        prevAll: function (e) {
          return k(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return k(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return k(e, "previousSibling", n);
        },
        siblings: function (e) {
          return S((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return S(e.firstChild);
        },
        contents: function (e) {
          return N(e, "iframe")
            ? e.contentDocument
            : (N(e, "template") && (e = e.content || e), w.merge([], e.childNodes));
        },
      },
      function (e, t) {
        w.fn[e] = function (n, r) {
          var i = w.map(this, t, n);
          return (
            "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = w.filter(r, i)),
            this.length > 1 && (O[e] || w.uniqueSort(i), H.test(e) && i.reverse()),
            this.pushStack(i)
          );
        };
      }
    );
  var M = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function I(e) {
    throw e;
  }
  function W(e, t, n, r) {
    var i;
    try {
      e && g((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && g((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (w.Callbacks = function (e) {
    var t, n;
    e =
      "string" == typeof e
        ? ((t = e),
          (n = {}),
          w.each(t.match(M) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : w.extend({}, e);
    var r,
      i,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || e.once, o = r = !0; u.length; l = -1)
          for (i = u.shift(); ++l < s.length; )
            !1 === s[l].apply(i[0], i[1]) && e.stopOnFalse && ((l = s.length), (i = !1));
        e.memory || (i = !1), (r = !1), a && (s = i ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (i && !r && ((l = s.length - 1), u.push(i)),
              (function t(n) {
                w.each(n, function (n, r) {
                  g(r) ? (e.unique && f.has(r)) || s.push(r) : r && r.length && "string" !== x(r) && t(r);
                });
              })(arguments),
              i && !r && c()),
            this
          );
        },
        remove: function () {
          return (
            w.each(arguments, function (e, t) {
              for (var n; (n = w.inArray(t, s, n)) > -1; ) s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? w.inArray(e, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = i = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), i || r || (s = i = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), r || c()), this;
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    w.extend({
      Deferred: function (t) {
        var n = [
            ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
            ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
            ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"],
          ],
          r = "pending",
          i = {
            state: function () {
              return r;
            },
            always: function () {
              return o.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return i.then(null, e);
            },
            pipe: function () {
              var e = arguments;
              return w
                .Deferred(function (t) {
                  w.each(n, function (n, r) {
                    var i = g(e[r[4]]) && e[r[4]];
                    o[r[1]](function () {
                      var e = i && i.apply(this, arguments);
                      e && g(e.promise)
                        ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject)
                        : t[r[0] + "With"](this, i ? [e] : arguments);
                    });
                  }),
                    (e = null);
                })
                .promise();
            },
            then: function (t, r, i) {
              var o = 0;
              function a(t, n, r, i) {
                return function () {
                  var s = this,
                    u = arguments,
                    l = function () {
                      var e, l;
                      if (!(t < o)) {
                        if ((e = r.apply(s, u)) === n.promise()) throw new TypeError("Thenable self-resolution");
                        (l = e && ("object" == typeof e || "function" == typeof e) && e.then),
                          g(l)
                            ? i
                              ? l.call(e, a(o, n, R, i), a(o, n, I, i))
                              : (o++, l.call(e, a(o, n, R, i), a(o, n, I, i), a(o, n, R, n.notifyWith)))
                            : (r !== R && ((s = void 0), (u = [e])), (i || n.resolveWith)(s, u));
                      }
                    },
                    c = i
                      ? l
                      : function () {
                          try {
                            l();
                          } catch (e) {
                            w.Deferred.exceptionHook && w.Deferred.exceptionHook(e, c.stackTrace),
                              t + 1 >= o && (r !== I && ((s = void 0), (u = [e])), n.rejectWith(s, u));
                          }
                        };
                  t ? c() : (w.Deferred.getStackHook && (c.stackTrace = w.Deferred.getStackHook()), e.setTimeout(c));
                };
              }
              return w
                .Deferred(function (e) {
                  n[0][3].add(a(0, e, g(i) ? i : R, e.notifyWith)),
                    n[1][3].add(a(0, e, g(t) ? t : R)),
                    n[2][3].add(a(0, e, g(r) ? r : I));
                })
                .promise();
            },
            promise: function (e) {
              return null != e ? w.extend(e, i) : i;
            },
          },
          o = {};
        return (
          w.each(n, function (e, t) {
            var a = t[2],
              s = t[5];
            (i[t[1]] = a.add),
              s &&
                a.add(
                  function () {
                    r = s;
                  },
                  n[3 - e][2].disable,
                  n[3 - e][3].disable,
                  n[0][2].lock,
                  n[0][3].lock
                ),
              a.add(t[3].fire),
              (o[t[0]] = function () {
                return o[t[0] + "With"](this === o ? void 0 : this, arguments), this;
              }),
              (o[t[0] + "With"] = a.fireWith);
          }),
          i.promise(o),
          t && t.call(o, o),
          o
        );
      },
      when: function (e) {
        var t = arguments.length,
          n = t,
          r = Array(n),
          i = o.call(arguments),
          a = w.Deferred(),
          s = function (e) {
            return function (n) {
              (r[e] = this), (i[e] = arguments.length > 1 ? o.call(arguments) : n), --t || a.resolveWith(r, i);
            };
          };
        if (t <= 1 && (W(e, a.done(s(n)).resolve, a.reject, !t), "pending" === a.state() || g(i[n] && i[n].then)))
          return a.then();
        for (; n--; ) W(i[n], s(n), a.reject);
        return a.promise();
      },
    });
  var $ = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (w.Deferred.exceptionHook = function (t, n) {
    e.console &&
      e.console.warn &&
      t &&
      $.test(t.name) &&
      e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n);
  }),
    (w.readyException = function (t) {
      e.setTimeout(function () {
        throw t;
      });
    });
  var B = w.Deferred();
  function F() {
    r.removeEventListener("DOMContentLoaded", F), e.removeEventListener("load", F), w.ready();
  }
  (w.fn.ready = function (e) {
    return (
      B.then(e).catch(function (e) {
        w.readyException(e);
      }),
      this
    );
  }),
    w.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --w.readyWait : w.isReady) ||
          ((w.isReady = !0), (!0 !== e && --w.readyWait > 0) || B.resolveWith(r, [w]));
      },
    }),
    (w.ready.then = B.then),
    "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll)
      ? e.setTimeout(w.ready)
      : (r.addEventListener("DOMContentLoaded", F), e.addEventListener("load", F));
  var _ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === x(n)) for (s in ((i = !0), n)) _(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        g(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(w(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    z = /^-ms-/,
    X = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function V(e) {
    return e.replace(z, "ms-").replace(X, U);
  }
  var G = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function Y() {
    this.expando = w.expando + Y.uid++;
  }
  (Y.uid = 1),
    (Y.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            G(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[V(t)] = n;
        else for (r in t) i[V(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][V(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(V) : (t = V(t)) in r ? [t] : t.match(M) || []).length;
            for (; n--; ) delete r[t[n]];
          }
          (void 0 === t || w.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !w.isEmptyObject(t);
      },
    });
  var Q = new Y(),
    J = new Y(),
    K = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    Z = /[A-Z]/g;
  function ee(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (((r = "data-" + t.replace(Z, "-$&").toLowerCase()), "string" == typeof (n = e.getAttribute(r)))) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i && ("null" === i ? null : i === +i + "" ? +i : K.test(i) ? JSON.parse(i) : i));
        } catch (e) {}
        J.set(e, t, n);
      } else n = void 0;
    return n;
  }
  w.extend({
    hasData: function (e) {
      return J.hasData(e) || Q.hasData(e);
    },
    data: function (e, t, n) {
      return J.access(e, t, n);
    },
    removeData: function (e, t) {
      J.remove(e, t);
    },
    _data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    _removeData: function (e, t) {
      Q.remove(e, t);
    },
  }),
    w.fn.extend({
      data: function (e, t) {
        var n,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === e) {
          if (this.length && ((i = J.get(o)), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
            for (n = a.length; n--; )
              a[n] && 0 === (r = a[n].name).indexOf("data-") && ((r = V(r.slice(5))), ee(o, r, i[r]));
            Q.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof e
          ? this.each(function () {
              J.set(this, e);
            })
          : _(
              this,
              function (t) {
                var n;
                if (o && void 0 === t) return void 0 !== (n = J.get(o, e)) ? n : void 0 !== (n = ee(o, e)) ? n : void 0;
                this.each(function () {
                  J.set(this, e, t);
                });
              },
              null,
              t,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          J.remove(this, e);
        });
      },
    }),
    w.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Q.get(e, t)),
            n && (!r || Array.isArray(n) ? (r = Q.access(e, t, w.makeArray(n))) : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = w.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = w._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                w.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Q.get(e, n) ||
          Q.access(e, n, {
            empty: w.Callbacks("once memory").add(function () {
              Q.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    w.fn.extend({
      queue: function (e, t) {
        var n = 2;
        return (
          "string" != typeof e && ((t = e), (e = "fx"), n--),
          arguments.length < n
            ? w.queue(this[0], e)
            : void 0 === t
            ? this
            : this.each(function () {
                var n = w.queue(this, e, t);
                w._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && w.dequeue(this, e);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          w.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = w.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        for ("string" != typeof e && ((t = e), (e = void 0)), e = e || "fx"; a--; )
          (n = Q.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
    re = ["Top", "Right", "Bottom", "Left"],
    ie = function (e, t) {
      return (
        "none" === (e = t || e).style.display ||
        ("" === e.style.display && w.contains(e.ownerDocument, e) && "none" === w.css(e, "display"))
      );
    },
    oe = function (e, t, n, r) {
      var i,
        o,
        a = {};
      for (o in t) (a[o] = e.style[o]), (e.style[o] = t[o]);
      for (o in ((i = n.apply(e, r || [])), t)) e.style[o] = a[o];
      return i;
    };
  function ae(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return w.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (w.cssNumber[t] ? "" : "px"),
      c = (w.cssNumber[t] || ("px" !== l && +u)) && ne.exec(w.css(e, t));
    if (c && c[3] !== l) {
      for (u /= 2, l = l || c[3], c = +u || 1; a--; )
        w.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
      (c *= 2), w.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var se = {};
  function ue(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n && ((l[c] = Q.get(r, "display") || null), l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ie(r) &&
              (l[c] =
                ((o = void 0),
                (a = void 0),
                void 0,
                (u = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = se[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = w.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (se[s] = u),
                  u))))
          : "none" !== n && ((l[c] = "none"), Q.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  w.fn.extend({
    show: function () {
      return ue(this, !0);
    },
    hide: function () {
      return ue(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ie(this) ? w(this).show() : w(this).hide();
          });
    },
  });
  var le = /^(?:checkbox|radio)$/i,
    ce = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
    fe = /^$|^module$|\/(?:java|ecma)script/i,
    pe = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  function de(e, t) {
    var n;
    return (
      (n =
        void 0 !== e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : void 0 !== e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && N(e, t)) ? w.merge([e], n) : n
    );
  }
  function he(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Q.set(e[n], "globalEval", !t || Q.get(t[n], "globalEval"));
  }
  (pe.optgroup = pe.option), (pe.tbody = pe.tfoot = pe.colgroup = pe.caption = pe.thead), (pe.th = pe.td);
  var ge,
    ve,
    ye = /<|&#?\w+;/;
  function me(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ("object" === x(o)) w.merge(p, o.nodeType ? [o] : o);
        else if (ye.test(o)) {
          for (
            a = a || f.appendChild(t.createElement("div")),
              s = (ce.exec(o) || ["", ""])[1].toLowerCase(),
              u = pe[s] || pe._default,
              a.innerHTML = u[1] + w.htmlPrefilter(o) + u[2],
              c = u[0];
            c--;

          )
            a = a.lastChild;
          w.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    for (f.textContent = "", d = 0; (o = p[d++]); )
      if (r && w.inArray(o, r) > -1) i && i.push(o);
      else if (((l = w.contains(o.ownerDocument, o)), (a = de(f.appendChild(o), "script")), l && he(a), n))
        for (c = 0; (o = a[c++]); ) fe.test(o.type || "") && n.push(o);
    return f;
  }
  (ge = r.createDocumentFragment().appendChild(r.createElement("div"))),
    (ve = r.createElement("input")).setAttribute("type", "radio"),
    ve.setAttribute("checked", "checked"),
    ve.setAttribute("name", "t"),
    ge.appendChild(ve),
    (h.checkClone = ge.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ge.innerHTML = "<textarea>x</textarea>"),
    (h.noCloneChecked = !!ge.cloneNode(!0).lastChild.defaultValue);
  var xe = r.documentElement,
    be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function ke() {
    try {
      return r.activeElement;
    } catch (e) {}
  }
  function Se(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t)) Se(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i && ("string" == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return w().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = w.guid++))),
      e.each(function () {
        w.event.add(this, t, i, r, n);
      })
    );
  }
  (w.event = {
    global: {},
    add: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.get(e);
      if (v)
        for (
          n.handler && ((n = (o = n).handler), (i = o.selector)),
            i && w.find.matchesSelector(xe, i),
            n.guid || (n.guid = w.guid++),
            (u = v.events) || (u = v.events = {}),
            (a = v.handle) ||
              (a = v.handle = function (t) {
                return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0;
              }),
            l = (t = (t || "").match(M) || [""]).length;
          l--;

        )
          (d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = w.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = w.event.special[d] || {}),
              (c = w.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && w.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(e, r, h, a)) || (e.addEventListener && e.addEventListener(d, a))),
              f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (w.event.global[d] = !0));
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Q.hasData(e) && Q.get(e);
      if (v && (u = v.events)) {
        for (l = (t = (t || "").match(M) || [""]).length; l--; )
          if (((d = g = (s = Te.exec(t[l]) || [])[1]), (h = (s[2] || "").split(".").sort()), d)) {
            for (
              f = w.event.special[d] || {},
                p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                a = o = p.length;
              o--;

            )
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || w.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) w.event.remove(e, d + t[l], n, r, !0);
        w.isEmptyObject(u) && Q.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = w.event.fix(e),
        u = new Array(arguments.length),
        l = (Q.get(this, "events") || {})[s.type] || [],
        c = w.event.special[s.type] || {};
      for (u[0] = s, t = 1; t < arguments.length; t++) u[t] = arguments[t];
      if (((s.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, s))) {
        for (a = w.event.handlers.call(this, s, l), t = 0; (i = a[t++]) && !s.isPropagationStopped(); )
          for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped(); )
            (s.rnamespace && !s.rnamespace.test(o.namespace)) ||
              ((s.handleObj = o),
              (s.data = o.data),
              void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) &&
                !1 === (s.result = r) &&
                (s.preventDefault(), s.stopPropagation()));
        return c.postDispatch && c.postDispatch.call(this, s), s.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && e.button >= 1))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext ? w(i, this).index(l) > -1 : w.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
    },
    addProp: function (e, t) {
      Object.defineProperty(w.Event.prototype, e, {
        enumerable: !0,
        configurable: !0,
        get: g(t)
          ? function () {
              if (this.originalEvent) return t(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[e];
            },
        set: function (t) {
          Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t });
        },
      });
    },
    fix: function (e) {
      return e[w.expando] ? e : new w.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          if (this !== ke() && this.focus) return this.focus(), !1;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          if (this === ke() && this.blur) return this.blur(), !1;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          if ("checkbox" === this.type && this.click && N(this, "input")) return this.click(), !1;
        },
        _default: function (e) {
          return N(e.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (w.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (w.Event = function (e, t) {
      if (!(this instanceof w.Event)) return new w.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? Ce : Ee),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && w.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[w.expando] = !0);
    }),
    (w.Event.prototype = {
      constructor: w.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    w.each(
      {
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
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      w.event.addProp
    ),
    w.each(
      { mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" },
      function (e, t) {
        w.event.special[e] = {
          delegateType: t,
          bindType: t,
          handle: function (e) {
            var n,
              r = e.relatedTarget,
              i = e.handleObj;
            return (
              (r && (r === this || w.contains(this, r))) ||
                ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
              n
            );
          },
        };
      }
    ),
    w.fn.extend({
      on: function (e, t, n, r) {
        return Se(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Se(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            w(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            w.event.remove(this, e, n, t);
          })
        );
      },
    });
  var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
    Ne = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (N(e, "table") && N(11 !== t.nodeType ? t : t.firstChild, "tr") && w(e).children("tbody")[0]) || e;
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return "true/" === (e.type || "").slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute("type"), e;
  }
  function Oe(e, t) {
    var n, r, i, o, a, s, u, l;
    if (1 === t.nodeType) {
      if (Q.hasData(e) && ((o = Q.access(e)), (a = Q.set(t, o)), (l = o.events)))
        for (i in (delete a.handle, (a.events = {}), l))
          for (n = 0, r = l[i].length; n < r; n++) w.event.add(t, i, l[i][n]);
      J.hasData(e) && ((s = J.access(e)), (u = w.extend({}, s)), J.set(t, u));
    }
  }
  function Pe(e, t, n, r) {
    t = a.apply([], t);
    var i,
      o,
      s,
      u,
      l,
      c,
      f = 0,
      p = e.length,
      d = p - 1,
      v = t[0],
      y = g(v);
    if (y || (p > 1 && "string" == typeof v && !h.checkClone && Ae.test(v)))
      return e.each(function (i) {
        var o = e.eq(i);
        y && (t[0] = v.call(this, i, o.html())), Pe(o, t, n, r);
      });
    if (
      p &&
      ((o = (i = me(t, e[0].ownerDocument, !1, e, r)).firstChild), 1 === i.childNodes.length && (i = o), o || r)
    ) {
      for (u = (s = w.map(de(i, "script"), Le)).length; f < p; f++)
        (l = i), f !== d && ((l = w.clone(l, !0, !0)), u && w.merge(s, de(l, "script"))), n.call(e[f], l, f);
      if (u)
        for (c = s[s.length - 1].ownerDocument, w.map(s, He), f = 0; f < u; f++)
          (l = s[f]),
            fe.test(l.type || "") &&
              !Q.access(l, "globalEval") &&
              w.contains(c, l) &&
              (l.src && "module" !== (l.type || "").toLowerCase()
                ? w._evalUrl && w._evalUrl(l.src)
                : m(l.textContent.replace(je, ""), c, l));
    }
    return e;
  }
  function Me(e, t, n) {
    for (var r, i = t ? w.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || w.cleanData(de(r)),
        r.parentNode && (n && w.contains(r.ownerDocument, r) && he(de(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  w.extend({
    htmlPrefilter: function (e) {
      return e.replace(De, "<$1></$2>");
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = w.contains(e.ownerDocument, e);
      if (!(h.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || w.isXMLDoc(e)))
        for (a = de(c), r = 0, i = (o = de(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && le.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) || (u.defaultValue = s.defaultValue);
      if (t)
        if (n) for (o = o || de(e), a = a || de(c), r = 0, i = o.length; r < i; r++) Oe(o[r], a[r]);
        else Oe(e, c);
      return (a = de(c, "script")).length > 0 && he(a, !f && de(e, "script")), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = w.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (G(n)) {
          if ((t = n[Q.expando])) {
            if (t.events) for (r in t.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, t.handle);
            n[Q.expando] = void 0;
          }
          n[J.expando] && (n[J.expando] = void 0);
        }
    },
  }),
    w.fn.extend({
      detach: function (e) {
        return Me(this, e, !0);
      },
      remove: function (e) {
        return Me(this, e);
      },
      text: function (e) {
        return _(
          this,
          function (e) {
            return void 0 === e
              ? w.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (w.cleanData(de(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return w.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return _(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !Ne.test(e) && !pe[(ce.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = w.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (w.cleanData(de(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var e = [];
        return Pe(
          this,
          arguments,
          function (t) {
            var n = this.parentNode;
            w.inArray(this, e) < 0 && (w.cleanData(de(this)), n && n.replaceChild(t, this));
          },
          e
        );
      },
    }),
    w.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, t) {
        w.fn[e] = function (e) {
          for (var n, r = [], i = w(e), o = i.length - 1, a = 0; a <= o; a++)
            (n = a === o ? this : this.clone(!0)), w(i[a])[t](n), s.apply(r, n.get());
          return this.pushStack(r);
        };
      }
    );
  var Re = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
    Ie = function (t) {
      var n = t.ownerDocument.defaultView;
      return (n && n.opener) || (n = e), n.getComputedStyle(t);
    },
    We = new RegExp(re.join("|"), "i");
  function $e(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) || w.contains(e.ownerDocument, e) || (a = w.style(e, t)),
        !h.pixelBoxStyles() &&
          Re.test(a) &&
          We.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function Be(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function t() {
      if (c) {
        (l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (c.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          xe.appendChild(l).appendChild(c);
        var t = e.getComputedStyle(c);
        (i = "1%" !== t.top),
          (u = 12 === n(t.marginLeft)),
          (c.style.right = "60%"),
          (s = 36 === n(t.right)),
          (o = 36 === n(t.width)),
          (c.style.position = "absolute"),
          (a = 36 === c.offsetWidth || "absolute"),
          xe.removeChild(l),
          (c = null);
      }
    }
    function n(e) {
      return Math.round(parseFloat(e));
    }
    var i,
      o,
      a,
      s,
      u,
      l = r.createElement("div"),
      c = r.createElement("div");
    c.style &&
      ((c.style.backgroundClip = "content-box"),
      (c.cloneNode(!0).style.backgroundClip = ""),
      (h.clearCloneStyle = "content-box" === c.style.backgroundClip),
      w.extend(h, {
        boxSizingReliable: function () {
          return t(), o;
        },
        pixelBoxStyles: function () {
          return t(), s;
        },
        pixelPosition: function () {
          return t(), i;
        },
        reliableMarginLeft: function () {
          return t(), u;
        },
        scrollboxSize: function () {
          return t(), a;
        },
      }));
  })();
  var Fe = /^(none|table(?!-c[ea]).+)/,
    _e = /^--/,
    ze = { position: "absolute", visibility: "hidden", display: "block" },
    Xe = { letterSpacing: "0", fontWeight: "400" },
    Ue = ["Webkit", "Moz", "ms"],
    Ve = r.createElement("div").style;
  function Ge(e) {
    var t = w.cssProps[e];
    return (
      t ||
        (t = w.cssProps[e] =
          (function (e) {
            if (e in Ve) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Ue.length; n--; ) if ((e = Ue[n] + t) in Ve) return e;
          })(e) || e),
      t
    );
  }
  function Ye(e, t, n) {
    var r = ne.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += w.css(e, n + re[a], !0, i)),
        r
          ? ("content" === n && (u -= w.css(e, "padding" + re[a], !0, i)),
            "margin" !== n && (u -= w.css(e, "border" + re[a] + "Width", !0, i)))
          : ((u += w.css(e, "padding" + re[a], !0, i)),
            "padding" !== n
              ? (u += w.css(e, "border" + re[a] + "Width", !0, i))
              : (s += w.css(e, "border" + re[a] + "Width", !0, i)));
    return (
      !r && o >= 0 && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5))), u
    );
  }
  function Je(e, t, n) {
    var r = Ie(e),
      i = $e(e, t, r),
      o = "border-box" === w.css(e, "boxSizing", !1, r),
      a = o;
    if (Re.test(i)) {
      if (!n) return i;
      i = "auto";
    }
    return (
      (a = a && (h.boxSizingReliable() || i === e.style[t])),
      ("auto" === i || (!parseFloat(i) && "inline" === w.css(e, "display", !1, r))) &&
        ((i = e["offset" + t[0].toUpperCase() + t.slice(1)]), (a = !0)),
      (i = parseFloat(i) || 0) + Qe(e, t, n || (o ? "border" : "content"), a, r, i) + "px"
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  w.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = $e(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
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
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = V(t),
          u = _e.test(t),
          l = e.style;
        if ((u || (t = Ge(s)), (a = w.cssHooks[t] || w.cssHooks[s]), void 0 === n))
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) && (i = ne.exec(n)) && i[1] && ((n = ae(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" === o && (n += (i && i[3]) || (w.cssNumber[s] ? "" : "px")),
            h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = V(t);
      return (
        _e.test(t) || (t = Ge(s)),
        (a = w.cssHooks[t] || w.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = $e(e, t, r)),
        "normal" === i && t in Xe && (i = Xe[t]),
        "" === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    },
  }),
    w.each(["height", "width"], function (e, t) {
      w.cssHooks[t] = {
        get: function (e, n, r) {
          if (n)
            return !Fe.test(w.css(e, "display")) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, t, r)
              : oe(e, ze, function () {
                  return Je(e, t, r);
                });
        },
        set: function (e, n, r) {
          var i,
            o = Ie(e),
            a = "border-box" === w.css(e, "boxSizing", !1, o),
            s = r && Qe(e, t, r, a, o);
          return (
            a &&
              h.scrollboxSize() === o.position &&
              (s -= Math.ceil(
                e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(o[t]) - Qe(e, t, "border", !1, o) - 0.5
              )),
            s && (i = ne.exec(n)) && "px" !== (i[3] || "px") && ((e.style[t] = n), (n = w.css(e, t))),
            Ye(0, n, s)
          );
        },
      };
    }),
    (w.cssHooks.marginLeft = Be(h.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat($e(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              oe(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    w.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
      (w.cssHooks[e + t] = {
        expand: function (n) {
          for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)
            i[e + re[r] + t] = o[r] || o[r - 2] || o[0];
          return i;
        },
      }),
        "margin" !== e && (w.cssHooks[e + t].set = Ye);
    }),
    w.fn.extend({
      css: function (e, t) {
        return _(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++) o[t[a]] = w.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? w.style(e, t, n) : w.css(e, t);
          },
          e,
          t,
          arguments.length > 1
        );
      },
    }),
    (w.Tween = Ke),
    (Ke.prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || w.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (w.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t = w.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }),
    (Ke.prototype.init.prototype = Ke.prototype),
    (Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = w.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          w.fx.step[e.prop]
            ? w.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType || (null == e.elem.style[w.cssProps[e.prop]] && !w.cssHooks[e.prop])
            ? (e.elem[e.prop] = e.now)
            : w.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }),
    (Ke.propHooks.scrollTop = Ke.propHooks.scrollLeft = {
      set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      },
    }),
    (w.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (w.fx = Ke.prototype.init),
    (w.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et &&
      (!1 === r.hidden && e.requestAnimationFrame ? e.requestAnimationFrame(ot) : e.setTimeout(ot, w.fx.interval),
      w.fx.tick());
  }
  function at() {
    return (
      e.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i["margin" + (n = re[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
      if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(e, t, n) {
    var r,
      i,
      o = 0,
      a = lt.prefilters.length,
      s = w.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (i) return !1;
        for (
          var t = Ze || at(),
            n = Math.max(0, l.startTime + l.duration - t),
            r = 1 - (n / l.duration || 0),
            o = 0,
            a = l.tweens.length;
          o < a;
          o++
        )
          l.tweens[o].run(r);
        return (
          s.notifyWith(e, [l, r, n]), r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
        );
      },
      l = s.promise({
        elem: e,
        props: w.extend({}, t),
        opts: w.extend(!0, { specialEasing: {}, easing: w.easing._default }, n),
        originalProperties: t,
        originalOptions: n,
        startTime: Ze || at(),
        duration: n.duration,
        tweens: [],
        createTween: function (t, n) {
          var r = w.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing);
          return l.tweens.push(r), r;
        },
        stop: function (t) {
          var n = 0,
            r = t ? l.tweens.length : 0;
          if (i) return this;
          for (i = !0; n < r; n++) l.tweens[n].run(1);
          return t ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t])) : s.rejectWith(e, [l, t]), this;
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = V(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = w.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      o < a;
      o++
    )
      if ((r = lt.prefilters[o].call(l, e, c, l.opts)))
        return g(r.stop) && (w._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
    return (
      w.map(c, ut, l),
      g(l.opts.start) && l.opts.start.call(e, l),
      l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
      w.fx.timer(w.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (w.Animation = w.extend(lt, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return ae(n.elem, e, ne.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      g(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]), (lt.tweeners[n] = lt.tweeners[n] || []), lt.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ie(e),
          v = Q.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = w._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, w.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if ((delete t[r], (o = o || "toggle" === i), i === (g ? "hide" : "show"))) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || w.style(e, r);
          }
        if ((u = !w.isEmptyObject(t)) || !w.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Q.get(e, "display")),
            "none" === (c = w.css(e, "display")) &&
              (l ? (c = l) : (ue([e], !0), (l = e.style.display || l), (c = w.css(e, "display")), ue([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === w.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v ? "hidden" in v && (g = v.hidden) : (v = Q.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && ue([e], !0),
              p.done(function () {
                for (r in (g || ue([e]), Q.remove(e, "fxshow"), d)) w.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (w.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? w.extend({}, e)
          : { complete: n || (!n && t) || (g(e) && e), duration: e, easing: (n && t) || (t && !g(t) && t) };
      return (
        w.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in w.fx.speeds ? (r.duration = w.fx.speeds[r.duration]) : (r.duration = w.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          g(r.old) && r.old.call(this), r.queue && w.dequeue(this, r.queue);
        }),
        r
      );
    }),
    w.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ie).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (e, t, n, r) {
        var i = w.isEmptyObject(e),
          o = w.speed(t, n, r),
          a = function () {
            var t = lt(this, w.extend({}, e), o);
            (i || Q.get(this, "finish")) && t.stop(!0);
          };
        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function (e, t, n) {
        var r = function (e) {
          var t = e.stop;
          delete e.stop, t(n);
        };
        return (
          "string" != typeof e && ((n = t), (t = e), (e = void 0)),
          t && !1 !== e && this.queue(e || "fx", []),
          this.each(function () {
            var t = !0,
              i = null != e && e + "queueHooks",
              o = w.timers,
              a = Q.get(this);
            if (i) a[i] && a[i].stop && r(a[i]);
            else for (i in a) a[i] && a[i].stop && it.test(i) && r(a[i]);
            for (i = o.length; i--; )
              o[i].elem !== this || (null != e && o[i].queue !== e) || (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
            (!t && n) || w.dequeue(this, e);
          })
        );
      },
      finish: function (e) {
        return (
          !1 !== e && (e = e || "fx"),
          this.each(function () {
            var t,
              n = Q.get(this),
              r = n[e + "queue"],
              i = n[e + "queueHooks"],
              o = w.timers,
              a = r ? r.length : 0;
            for (n.finish = !0, w.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--; )
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish;
          })
        );
      },
    }),
    w.each(["toggle", "show", "hide"], function (e, t) {
      var n = w.fn[t];
      w.fn[t] = function (e, r, i) {
        return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(st(t, !0), e, r, i);
      };
    }),
    w.each(
      {
        slideDown: st("show"),
        slideUp: st("hide"),
        slideToggle: st("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, t) {
        w.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }
    ),
    (w.timers = []),
    (w.fx.tick = function () {
      var e,
        t = 0,
        n = w.timers;
      for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || w.fx.stop(), (Ze = void 0);
    }),
    (w.fx.timer = function (e) {
      w.timers.push(e), w.fx.start();
    }),
    (w.fx.interval = 13),
    (w.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (w.fx.stop = function () {
      et = null;
    }),
    (w.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (w.fn.delay = function (t, n) {
      return (
        (t = (w.fx && w.fx.speeds[t]) || t),
        (n = n || "fx"),
        this.queue(n, function (n, r) {
          var i = e.setTimeout(n, t);
          r.stop = function () {
            e.clearTimeout(i);
          };
        })
      );
    }),
    (tt = r.createElement("input")),
    (nt = r.createElement("select").appendChild(r.createElement("option"))),
    (tt.type = "checkbox"),
    (h.checkOn = "" !== tt.value),
    (h.optSelected = nt.selected),
    ((tt = r.createElement("input")).value = "t"),
    (tt.type = "radio"),
    (h.radioValue = "t" === tt.value);
  var ct,
    ft = w.expr.attrHandle;
  w.fn.extend({
    attr: function (e, t) {
      return _(this, w.attr, e, t, arguments.length > 1);
    },
    removeAttr: function (e) {
      return this.each(function () {
        w.removeAttr(this, e);
      });
    },
  }),
    w.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return void 0 === e.getAttribute
            ? w.prop(e, t, n)
            : ((1 === o && w.isXMLDoc(e)) ||
                (i = w.attrHooks[t.toLowerCase()] || (w.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void w.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = w.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!h.radioValue && "radio" === t && N(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(M);
        if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n);
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? w.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    w.each(w.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var n = ft[t] || w.find.attr;
      ft[t] = function (e, t, r) {
        var i,
          o,
          a = t.toLowerCase();
        return r || ((o = ft[a]), (ft[a] = i), (i = null != n(e, t, r) ? a : null), (ft[a] = o)), i;
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(M) || []).join(" ");
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function vt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(M)) || [];
  }
  w.fn.extend({
    prop: function (e, t) {
      return _(this, w.prop, e, t, arguments.length > 1);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[w.propFix[e] || e];
      });
    },
  }),
    w.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && w.isXMLDoc(e)) || ((t = w.propFix[t] || t), (i = w.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = w.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    h.optSelected ||
      (w.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    w.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        w.propFix[this.toLowerCase()] = this;
      }
    ),
    w.fn.extend({
      addClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (g(e))
          return this.each(function (t) {
            w(this).addClass(e.call(this, t, gt(this)));
          });
        if ((t = vt(e)).length)
          for (; (n = this[u++]); )
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              for (a = 0; (o = t[a++]); ) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (e) {
        var t,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (g(e))
          return this.each(function (t) {
            w(this).removeClass(e.call(this, t, gt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((t = vt(e)).length)
          for (; (n = this[u++]); )
            if (((i = gt(n)), (r = 1 === n.nodeType && " " + ht(i) + " "))) {
              for (a = 0; (o = t[a++]); ) for (; r.indexOf(" " + o + " ") > -1; ) r = r.replace(" " + o + " ", " ");
              i !== (s = ht(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (e, t) {
        var n = typeof e,
          r = "string" === n || Array.isArray(e);
        return "boolean" == typeof t && r
          ? t
            ? this.addClass(e)
            : this.removeClass(e)
          : g(e)
          ? this.each(function (n) {
              w(this).toggleClass(e.call(this, n, gt(this), t), t);
            })
          : this.each(function () {
              var t, i, o, a;
              if (r)
                for (i = 0, o = w(this), a = vt(e); (t = a[i++]); ) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
              else
                (void 0 !== e && "boolean" !== n) ||
                  ((t = gt(this)) && Q.set(this, "__className__", t),
                  this.setAttribute &&
                    this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        for (t = " " + e + " "; (n = this[r++]); )
          if (1 === n.nodeType && (" " + ht(gt(n)) + " ").indexOf(t) > -1) return !0;
        return !1;
      },
    });
  var yt = /\r/g;
  w.fn.extend({
    val: function (e) {
      var t,
        n,
        r,
        i = this[0];
      return arguments.length
        ? ((r = g(e)),
          this.each(function (n) {
            var i;
            1 === this.nodeType &&
              (null == (i = r ? e.call(this, n, w(this).val()) : e)
                ? (i = "")
                : "number" == typeof i
                ? (i += "")
                : Array.isArray(i) &&
                  (i = w.map(i, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((t = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in t &&
                void 0 !== t.set(this, i, "value")) ||
                (this.value = i));
          }))
        : i
        ? (t = w.valHooks[i.type] || w.valHooks[i.nodeName.toLowerCase()]) &&
          "get" in t &&
          void 0 !== (n = t.get(i, "value"))
          ? n
          : "string" == typeof (n = i.value)
          ? n.replace(yt, "")
          : null == n
          ? ""
          : n
        : void 0;
    },
  }),
    w.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = w.find.attr(e, "value");
            return null != t ? t : ht(w.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
              ) {
                if (((t = w(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            for (var n, r, i = e.options, o = w.makeArray(t), a = i.length; a--; )
              ((r = i[a]).selected = w.inArray(w.valHooks.option.get(r), o) > -1) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    w.each(["radio", "checkbox"], function () {
      (w.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = w.inArray(w(e).val(), t) > -1);
        },
      }),
        h.checkOn ||
          (w.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (h.focusin = "onfocusin" in e);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation();
    };
  w.extend(w.event, {
    trigger: function (t, n, i, o) {
      var a,
        s,
        u,
        l,
        c,
        p,
        d,
        h,
        y = [i || r],
        m = f.call(t, "type") ? t.type : t,
        x = f.call(t, "namespace") ? t.namespace.split(".") : [];
      if (
        ((s = h = u = i = i || r),
        3 !== i.nodeType &&
          8 !== i.nodeType &&
          !mt.test(m + w.event.triggered) &&
          (m.indexOf(".") > -1 && ((m = (x = m.split(".")).shift()), x.sort()),
          (c = m.indexOf(":") < 0 && "on" + m),
          ((t = t[w.expando] ? t : new w.Event(m, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
          (t.namespace = x.join(".")),
          (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + x.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
          (t.result = void 0),
          t.target || (t.target = i),
          (n = null == n ? [t] : w.makeArray(n, [t])),
          (d = w.event.special[m] || {}),
          o || !d.trigger || !1 !== d.trigger.apply(i, n)))
      ) {
        if (!o && !d.noBubble && !v(i)) {
          for (l = d.delegateType || m, mt.test(l + m) || (s = s.parentNode); s; s = s.parentNode) y.push(s), (u = s);
          u === (i.ownerDocument || r) && y.push(u.defaultView || u.parentWindow || e);
        }
        for (a = 0; (s = y[a++]) && !t.isPropagationStopped(); )
          (h = s),
            (t.type = a > 1 ? l : d.bindType || m),
            (p = (Q.get(s, "events") || {})[t.type] && Q.get(s, "handle")) && p.apply(s, n),
            (p = c && s[c]) && p.apply && G(s) && ((t.result = p.apply(s, n)), !1 === t.result && t.preventDefault());
        return (
          (t.type = m),
          o ||
            t.isDefaultPrevented() ||
            (d._default && !1 !== d._default.apply(y.pop(), n)) ||
            !G(i) ||
            (c &&
              g(i[m]) &&
              !v(i) &&
              ((u = i[c]) && (i[c] = null),
              (w.event.triggered = m),
              t.isPropagationStopped() && h.addEventListener(m, xt),
              i[m](),
              t.isPropagationStopped() && h.removeEventListener(m, xt),
              (w.event.triggered = void 0),
              u && (i[c] = u))),
          t.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = w.extend(new w.Event(), n, { type: e, isSimulated: !0 });
      w.event.trigger(r, null, t);
    },
  }),
    w.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          w.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return w.event.trigger(e, t, n, !0);
      },
    }),
    h.focusin ||
      w.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function (e) {
          w.event.simulate(t, e.target, w.event.fix(e));
        };
        w.event.special[t] = {
          setup: function () {
            var r = this.ownerDocument || this,
              i = Q.access(r, t);
            i || r.addEventListener(e, n, !0), Q.access(r, t, (i || 0) + 1);
          },
          teardown: function () {
            var r = this.ownerDocument || this,
              i = Q.access(r, t) - 1;
            i ? Q.access(r, t, i) : (r.removeEventListener(e, n, !0), Q.remove(r, t));
          },
        };
      });
  var bt = e.location,
    wt = Date.now(),
    Tt = /\?/;
  w.parseXML = function (t) {
    var n;
    if (!t || "string" != typeof t) return null;
    try {
      n = new e.DOMParser().parseFromString(t, "text/xml");
    } catch (e) {
      n = void 0;
    }
    return (n && !n.getElementsByTagName("parsererror").length) || w.error("Invalid XML: " + t), n;
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    kt = /^(?:submit|button|image|reset|file)$/i,
    St = /^(?:input|select|textarea|keygen)/i;
  function Dt(e, t, n, r) {
    var i;
    if (Array.isArray(t))
      w.each(t, function (t, i) {
        n || Ct.test(e) ? r(e, i) : Dt(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r);
      });
    else if (n || "object" !== x(t)) r(e, t);
    else for (i in t) Dt(e + "[" + i + "]", t[i], n, r);
  }
  (w.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = g(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (Array.isArray(e) || (e.jquery && !w.isPlainObject(e)))
      w.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    w.fn.extend({
      serialize: function () {
        return w.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = w.prop(this, "elements");
          return e ? w.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !w(this).is(":disabled") &&
              St.test(this.nodeName) &&
              !kt.test(e) &&
              (this.checked || !le.test(e))
            );
          })
          .map(function (e, t) {
            var n = w(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? w.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, "\r\n") };
                })
              : { name: t.name, value: n.replace(Et, "\r\n") };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    At = /#.*$/,
    jt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Mt = "*/".concat("*"),
    Rt = r.createElement("a");
  function It(e) {
    return function (t, n) {
      "string" != typeof t && ((n = t), (t = "*"));
      var r,
        i = 0,
        o = t.toLowerCase().match(M) || [];
      if (g(n))
        for (; (r = o[i++]); )
          "+" === r[0] ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }
  function Wt(e, t, n, r) {
    var i = {},
      o = e === Pt;
    function a(s) {
      var u;
      return (
        (i[s] = !0),
        w.each(e[s] || [], function (e, s) {
          var l = s(t, n, r);
          return "string" != typeof l || o || i[l] ? (o ? !(u = l) : void 0) : (t.dataTypes.unshift(l), a(l), !1);
        }),
        u
      );
    }
    return a(t.dataTypes[0]) || (!i["*"] && a("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = w.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && w.extend(!0, e, r), e;
  }
  (Rt.href = bt.href),
    w.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Mt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": w.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, w.ajaxSettings), t) : $t(w.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (t, n) {
        "object" == typeof t && ((n = t), (t = void 0)), (n = n || {});
        var i,
          o,
          a,
          s,
          u,
          l,
          c,
          f,
          p,
          d,
          h = w.ajaxSetup({}, n),
          g = h.context || h,
          v = h.context && (g.nodeType || g.jquery) ? w(g) : w.event,
          y = w.Deferred(),
          m = w.Callbacks("once memory"),
          x = h.statusCode || {},
          b = {},
          T = {},
          C = "canceled",
          E = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (c) {
                if (!s) for (s = {}; (t = qt.exec(a)); ) s[t[1].toLowerCase()] = t[2];
                t = s[e.toLowerCase()];
              }
              return null == t ? null : t;
            },
            getAllResponseHeaders: function () {
              return c ? a : null;
            },
            setRequestHeader: function (e, t) {
              return null == c && ((e = T[e.toLowerCase()] = T[e.toLowerCase()] || e), (b[e] = t)), this;
            },
            overrideMimeType: function (e) {
              return null == c && (h.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (c) E.always(e[E.status]);
                else for (t in e) x[t] = [x[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || C;
              return i && i.abort(t), k(0, t), this;
            },
          };
        if (
          (y.promise(E),
          (h.url = ((t || h.url || bt.href) + "").replace(Ht, bt.protocol + "//")),
          (h.type = n.method || n.type || h.method || h.type),
          (h.dataTypes = (h.dataType || "*").toLowerCase().match(M) || [""]),
          null == h.crossDomain)
        ) {
          l = r.createElement("a");
          try {
            (l.href = h.url),
              (l.href = l.href),
              (h.crossDomain = Rt.protocol + "//" + Rt.host != l.protocol + "//" + l.host);
          } catch (e) {
            h.crossDomain = !0;
          }
        }
        if (
          (h.data && h.processData && "string" != typeof h.data && (h.data = w.param(h.data, h.traditional)),
          Wt(Ot, h, n, E),
          c)
        )
          return E;
        for (p in ((f = w.event && h.global) && 0 == w.active++ && w.event.trigger("ajaxStart"),
        (h.type = h.type.toUpperCase()),
        (h.hasContent = !Lt.test(h.type)),
        (o = h.url.replace(At, "")),
        h.hasContent
          ? h.data &&
            h.processData &&
            0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") &&
            (h.data = h.data.replace(Nt, "+"))
          : ((d = h.url.slice(o.length)),
            h.data &&
              (h.processData || "string" == typeof h.data) &&
              ((o += (Tt.test(o) ? "&" : "?") + h.data), delete h.data),
            !1 === h.cache && ((o = o.replace(jt, "$1")), (d = (Tt.test(o) ? "&" : "?") + "_=" + wt++ + d)),
            (h.url = o + d)),
        h.ifModified &&
          (w.lastModified[o] && E.setRequestHeader("If-Modified-Since", w.lastModified[o]),
          w.etag[o] && E.setRequestHeader("If-None-Match", w.etag[o])),
        ((h.data && h.hasContent && !1 !== h.contentType) || n.contentType) &&
          E.setRequestHeader("Content-Type", h.contentType),
        E.setRequestHeader(
          "Accept",
          h.dataTypes[0] && h.accepts[h.dataTypes[0]]
            ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Mt + "; q=0.01" : "")
            : h.accepts["*"]
        ),
        h.headers))
          E.setRequestHeader(p, h.headers[p]);
        if (h.beforeSend && (!1 === h.beforeSend.call(g, E, h) || c)) return E.abort();
        if (((C = "abort"), m.add(h.complete), E.done(h.success), E.fail(h.error), (i = Wt(Pt, h, n, E)))) {
          if (((E.readyState = 1), f && v.trigger("ajaxSend", [E, h]), c)) return E;
          h.async &&
            h.timeout > 0 &&
            (u = e.setTimeout(function () {
              E.abort("timeout");
            }, h.timeout));
          try {
            (c = !1), i.send(b, k);
          } catch (e) {
            if (c) throw e;
            k(-1, e);
          }
        } else k(-1, "No Transport");
        function k(t, n, r, s) {
          var l,
            p,
            d,
            b,
            T,
            C = n;
          c ||
            ((c = !0),
            u && e.clearTimeout(u),
            (i = void 0),
            (a = s || ""),
            (E.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && t < 300) || 304 === t),
            r &&
              (b = (function (e, t, n) {
                for (var r, i, o, a, s = e.contents, u = e.dataTypes; "*" === u[0]; )
                  u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
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
              })(h, E, r)),
            (b = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              for (o = c.shift(); o; )
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                          !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e.throws) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return { state: "parsererror", error: a ? e : "No conversion from " + u + " to " + o };
                        }
                  }
              return { state: "success", data: t };
            })(h, b, E, l)),
            l
              ? (h.ifModified &&
                  ((T = E.getResponseHeader("Last-Modified")) && (w.lastModified[o] = T),
                  (T = E.getResponseHeader("etag")) && (w.etag[o] = T)),
                204 === t || "HEAD" === h.type
                  ? (C = "nocontent")
                  : 304 === t
                  ? (C = "notmodified")
                  : ((C = b.state), (p = b.data), (l = !(d = b.error))))
              : ((d = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
            (E.status = t),
            (E.statusText = (n || C) + ""),
            l ? y.resolveWith(g, [p, C, E]) : y.rejectWith(g, [E, C, d]),
            E.statusCode(x),
            (x = void 0),
            f && v.trigger(l ? "ajaxSuccess" : "ajaxError", [E, h, l ? p : d]),
            m.fireWith(g, [E, C]),
            f && (v.trigger("ajaxComplete", [E, h]), --w.active || w.event.trigger("ajaxStop")));
        }
        return E;
      },
      getJSON: function (e, t, n) {
        return w.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return w.get(e, void 0, t, "script");
      },
    }),
    w.each(["get", "post"], function (e, t) {
      w[t] = function (e, n, r, i) {
        return (
          g(n) && ((i = i || r), (r = n), (n = void 0)),
          w.ajax(w.extend({ url: e, type: t, dataType: i, data: n, success: r }, w.isPlainObject(e) && e))
        );
      };
    }),
    (w._evalUrl = function (e) {
      return w.ajax({ url: e, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
    }),
    w.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (g(e) && (e = e.call(this[0])),
            (t = w(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                for (var e = this; e.firstElementChild; ) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (e) {
        return g(e)
          ? this.each(function (t) {
              w(this).wrapInner(e.call(this, t));
            })
          : this.each(function () {
              var t = w(this),
                n = t.contents();
              n.length ? n.wrapAll(e) : t.append(e);
            });
      },
      wrap: function (e) {
        var t = g(e);
        return this.each(function (n) {
          w(this).wrapAll(t ? e.call(this, n) : e);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              w(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (w.expr.pseudos.hidden = function (e) {
      return !w.expr.pseudos.visible(e);
    }),
    (w.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (w.ajaxSettings.xhr = function () {
      try {
        return new e.XMLHttpRequest();
      } catch (e) {}
    });
  var Bt = { 0: 200, 1223: 204 },
    Ft = w.ajaxSettings.xhr();
  (h.cors = !!Ft && "withCredentials" in Ft),
    (h.ajax = Ft = !!Ft),
    w.ajaxTransport(function (t) {
      var n, r;
      if (h.cors || (Ft && !t.crossDomain))
        return {
          send: function (i, o) {
            var a,
              s = t.xhr();
            if ((s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields))
              for (a in t.xhrFields) s[a] = t.xhrFields[a];
            for (a in (t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
            t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"),
            i))
              s.setRequestHeader(a, i[a]);
            (n = function (e) {
              return function () {
                n &&
                  ((n = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                  "abort" === e
                    ? s.abort()
                    : "error" === e
                    ? "number" != typeof s.status
                      ? o(0, "error")
                      : o(s.status, s.statusText)
                    : o(
                        Bt[s.status] || s.status,
                        s.statusText,
                        "text" !== (s.responseType || "text") || "string" != typeof s.responseText
                          ? { binary: s.response }
                          : { text: s.responseText },
                        s.getAllResponseHeaders()
                      ));
              };
            }),
              (s.onload = n()),
              (r = s.onerror = s.ontimeout = n("error")),
              void 0 !== s.onabort
                ? (s.onabort = r)
                : (s.onreadystatechange = function () {
                    4 === s.readyState &&
                      e.setTimeout(function () {
                        n && r();
                      });
                  }),
              (n = n("abort"));
            try {
              s.send((t.hasContent && t.data) || null);
            } catch (e) {
              if (n) throw e;
            }
          },
          abort: function () {
            n && n();
          },
        };
    }),
    w.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    w.ajaxSetup({
      accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return w.globalEval(e), e;
        },
      },
    }),
    w.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    w.ajaxTransport("script", function (e) {
      var t, n;
      if (e.crossDomain)
        return {
          send: function (i, o) {
            (t = w("<script>")
              .prop({ charset: e.scriptCharset, src: e.url })
              .on(
                "load error",
                (n = function (e) {
                  t.remove(), (n = null), e && o("error" === e.type ? 404 : 200, e.type);
                })
              )),
              r.head.appendChild(t[0]);
          },
          abort: function () {
            n && n();
          },
        };
    });
  var _t,
    zt = [],
    Xt = /(=)\?(?=&|$)|\?\?/;
  w.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = zt.pop() || w.expando + "_" + wt++;
      return (this[e] = !0), e;
    },
  }),
    w.ajaxPrefilter("json jsonp", function (t, n, r) {
      var i,
        o,
        a,
        s =
          !1 !== t.jsonp &&
          (Xt.test(t.url)
            ? "url"
            : "string" == typeof t.data &&
              0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") &&
              Xt.test(t.data) &&
              "data");
      if (s || "jsonp" === t.dataTypes[0])
        return (
          (i = t.jsonpCallback = g(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
          s
            ? (t[s] = t[s].replace(Xt, "$1" + i))
            : !1 !== t.jsonp && (t.url += (Tt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
          (t.converters["script json"] = function () {
            return a || w.error(i + " was not called"), a[0];
          }),
          (t.dataTypes[0] = "json"),
          (o = e[i]),
          (e[i] = function () {
            a = arguments;
          }),
          r.always(function () {
            void 0 === o ? w(e).removeProp(i) : (e[i] = o),
              t[i] && ((t.jsonpCallback = n.jsonpCallback), zt.push(i)),
              a && g(o) && o(a[0]),
              (a = o = void 0);
          }),
          "script"
        );
    }),
    (h.createHTMLDocument =
      (((_t = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"),
      2 === _t.childNodes.length)),
    (w.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (h.createHTMLDocument
              ? (((i = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href),
                t.head.appendChild(i))
              : (t = r)),
          (o = A.exec(e)),
          (a = !n && []),
          o
            ? [t.createElement(o[1])]
            : ((o = me([e], t, a)), a && a.length && w(a).remove(), w.merge([], o.childNodes)));
      var i, o, a;
    }),
    (w.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        s > -1 && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        g(t) ? ((n = t), (t = void 0)) : t && "object" == typeof t && (i = "POST"),
        a.length > 0 &&
          w
            .ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments), a.html(r ? w("<div>").append(w.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      w.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
    (w.expr.pseudos.animated = function (e) {
      return w.grep(w.timers, function (t) {
        return e === t.elem;
      }).length;
    }),
    (w.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = w.css(e, "position"),
          c = w(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = w.css(e, "top")),
          (u = w.css(e, "left")),
          ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          g(t) && (t = t.call(e, n, w.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t ? t.using.call(e, f) : c.css(f);
      },
    }),
    w.fn.extend({
      offset: function (e) {
        if (arguments.length)
          return void 0 === e
            ? this
            : this.each(function (t) {
                w.offset.setOffset(this, e, t);
              });
        var t,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((t = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === w.css(r, "position")) t = r.getBoundingClientRect();
          else {
            for (
              t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
              e && (e === n.body || e === n.documentElement) && "static" === w.css(e, "position");

            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = w(e).offset()).top += w.css(e, "borderTopWidth", !0)),
              (i.left += w.css(e, "borderLeftWidth", !0)));
          }
          return { top: t.top - i.top - w.css(r, "marginTop", !0), left: t.left - i.left - w.css(r, "marginLeft", !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === w.css(e, "position"); ) e = e.offsetParent;
          return e || xe;
        });
      },
    }),
    w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
      var n = "pageYOffset" === t;
      w.fn[e] = function (r) {
        return _(
          this,
          function (e, r, i) {
            var o;
            if ((v(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i)) return o ? o[t] : e[r];
            o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i);
          },
          e,
          r,
          arguments.length
        );
      };
    }),
    w.each(["top", "left"], function (e, t) {
      w.cssHooks[t] = Be(h.pixelPosition, function (e, n) {
        if (n) return (n = $e(e, t)), Re.test(n) ? w(e).position()[t] + "px" : n;
      });
    }),
    w.each({ Height: "height", Width: "width" }, function (e, t) {
      w.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
        w.fn[r] = function (i, o) {
          var a = arguments.length && (n || "boolean" != typeof i),
            s = n || (!0 === i || !0 === o ? "margin" : "border");
          return _(
            this,
            function (t, n, i) {
              var o;
              return v(t)
                ? 0 === r.indexOf("outer")
                  ? t["inner" + e]
                  : t.document.documentElement["client" + e]
                : 9 === t.nodeType
                ? ((o = t.documentElement),
                  Math.max(
                    t.body["scroll" + e],
                    o["scroll" + e],
                    t.body["offset" + e],
                    o["offset" + e],
                    o["client" + e]
                  ))
                : void 0 === i
                ? w.css(t, n, s)
                : w.style(t, n, i, s);
            },
            t,
            a ? i : void 0,
            a
          );
        };
      });
    }),
    w.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, t) {
        w.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }
    ),
    w.fn.extend({
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    w.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
      },
    }),
    (w.proxy = function (e, t) {
      var n, r, i;
      if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), g(e)))
        return (
          (r = o.call(arguments, 2)),
          ((i = function () {
            return e.apply(t || this, r.concat(o.call(arguments)));
          }).guid = e.guid = e.guid || w.guid++),
          i
        );
    }),
    (w.holdReady = function (e) {
      e ? w.readyWait++ : w.ready(!0);
    }),
    (w.isArray = Array.isArray),
    (w.parseJSON = JSON.parse),
    (w.nodeName = N),
    (w.isFunction = g),
    (w.isWindow = v),
    (w.camelCase = V),
    (w.type = x),
    (w.now = Date.now),
    (w.isNumeric = function (e) {
      var t = w.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return w;
      });
  var Ut = e.jQuery,
    Vt = e.$;
  return (
    (w.noConflict = function (t) {
      return e.$ === w && (e.$ = Vt), t && e.jQuery === w && (e.jQuery = Ut), w;
    }),
    t || (e.jQuery = e.$ = w),
    w
  );
});
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
!(function (e) {
  "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : "object" == typeof exports
    ? (module.exports = e(require("jquery")))
    : e(jQuery);
})(function (e) {
  var n = /\+/g;
  function o(e) {
    return r.raw ? e : encodeURIComponent(e);
  }
  function i(o, i) {
    var t = r.raw
      ? o
      : (function (e) {
          0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
          try {
            return (e = decodeURIComponent(e.replace(n, " "))), r.json ? JSON.parse(e) : e;
          } catch (e) {}
        })(o);
    return e.isFunction(i) ? i(t) : t;
  }
  var r = (e.cookie = function (n, t, c) {
    if (arguments.length > 1 && !e.isFunction(t)) {
      if ("number" == typeof (c = e.extend({}, r.defaults, c)).expires) {
        var u = c.expires,
          s = (c.expires = new Date());
        s.setMilliseconds(s.getMilliseconds() + 864e5 * u);
      }
      return (document.cookie = [
        o(n),
        "=",
        ((a = t), o(r.json ? JSON.stringify(a) : String(a))),
        c.expires ? "; expires=" + c.expires.toUTCString() : "",
        c.path ? "; path=" + c.path : "",
        c.domain ? "; domain=" + c.domain : "",
        c.secure ? "; secure" : "",
      ].join(""));
    }
    for (
      var a, d, p = n ? void 0 : {}, f = document.cookie ? document.cookie.split("; ") : [], l = 0, m = f.length;
      l < m;
      l++
    ) {
      var x = f[l].split("="),
        g = ((d = x.shift()), r.raw ? d : decodeURIComponent(d)),
        v = x.join("=");
      if (n === g) {
        p = i(v, t);
        break;
      }
      n || void 0 === (v = i(v)) || (p[g] = v);
    }
    return p;
  });
  (r.defaults = {}),
    (e.removeCookie = function (n, o) {
      return e.cookie(n, "", e.extend({}, o, { expires: -1 })), !e.cookie(n);
    });
});
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blog/master/licenses.txt
*/
!(function () {
  "use strict";
  function t(o) {
    if (!o) throw new Error("No options passed to Waypoint constructor");
    if (!o.element) throw new Error("No element option passed to Waypoint constructor");
    if (!o.handler) throw new Error("No handler option passed to Waypoint constructor");
    (this.key = "waypoint-" + e),
      (this.options = t.Adapter.extend({}, t.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new t.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = t.Group.findOrCreate({ name: this.options.group, axis: this.axis })),
      (this.context = t.Context.findOrCreateByElement(this.options.context)),
      t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (i[this.key] = this),
      (e += 1);
  }
  var e = 0,
    i = {};
  (t.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t);
  }),
    (t.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t);
    }),
    (t.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete i[this.key];
    }),
    (t.prototype.disable = function () {
      return (this.enabled = !1), this;
    }),
    (t.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this;
    }),
    (t.prototype.next = function () {
      return this.group.next(this);
    }),
    (t.prototype.previous = function () {
      return this.group.previous(this);
    }),
    (t.invokeAll = function (t) {
      var e = [];
      for (var o in i) e.push(i[o]);
      for (var n = 0, r = e.length; r > n; n++) e[n][t]();
    }),
    (t.destroyAll = function () {
      t.invokeAll("destroy");
    }),
    (t.disableAll = function () {
      t.invokeAll("disable");
    }),
    (t.enableAll = function () {
      t.invokeAll("enable");
    }),
    (t.refreshAll = function () {
      t.Context.refreshAll();
    }),
    (t.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }),
    (t.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }),
    (t.adapters = []),
    (t.defaults = { context: window, continuous: !0, enabled: !0, group: "default", horizontal: !1, offset: 0 }),
    (t.offsetAliases = {
      "bottom-in-view": function () {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function () {
        return this.context.innerWidth() - this.adapter.outerWidth();
      },
    }),
    (window.Waypoint = t);
})(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = { x: this.adapter.scrollLeft(), y: this.adapter.scrollTop() }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      r = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical);
        t && e && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) && ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll ? o.forward : o.backward;
          for (var r in this.waypoints[i]) {
            var s = this.waypoints[i][r],
              a = o.oldScroll < s.triggerPoint,
              l = o.newScroll >= s.triggerPoint;
            ((a && l) || (!a && !l)) && (s.queueTrigger(n), (t[s.group.id] = s.group));
          }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        for (var r in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var s = t[r];
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              c,
              u = this.waypoints[r][a],
              d = u.options.offset,
              f = u.triggerPoint,
              w = 0,
              y = null == f;
            u.element !== u.element.window && (w = u.adapter.offset()[s.offsetProp]),
              "function" == typeof d
                ? (d = d.apply(u))
                : "string" == typeof d &&
                  ((d = parseFloat(d)),
                  u.options.offset.indexOf("%") > -1 && (d = Math.ceil((s.contextDimension * d) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (u.triggerPoint = w + l - d),
              (h = f < s.oldScroll),
              (p = u.triggerPoint >= s.oldScroll),
              (c = !h && !p),
              !y && h && p
                ? (u.queueTrigger(s.backward), (o[u.group.id] = u.group))
                : !y && c
                ? (u.queueTrigger(s.forward), (o[u.group.id] = u.group))
                : y && s.oldScroll >= u.triggerPoint && (u.queueTrigger(s.forward), (o[u.group.id] = u.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        r && r(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        ).call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var r = 0, s = o.length; s > r; r += 1) {
            var a = o[r];
            (a.options.continuous || r === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      ["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) && ((o = t.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context && (n.context = t(this).closest(n.context)[0]), i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })();
!(function (i) {
  "use strict";
  "function" == typeof define && define.amd
    ? define(["jquery"], i)
    : "undefined" != typeof exports
    ? (module.exports = i(require("jquery")))
    : i(jQuery);
})(function (i) {
  "use strict";
  var e = window.Slick || {};
  ((e = (function () {
    var e = 0;
    return function (t, o) {
      var s,
        n = this;
      (n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: i(t),
        appendDots: i(t),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (e, t) {
          return i('<button type="button" />').text(t + 1);
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: 0.35,
        fade: !1,
        focusOnSelect: !1,
        focusOnChange: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3,
      }),
        (n.initials = {
          animating: !1,
          dragging: !1,
          autoPlayTimer: null,
          currentDirection: 0,
          currentLeft: null,
          currentSlide: 0,
          direction: 1,
          $dots: null,
          listWidth: null,
          listHeight: null,
          loadIndex: 0,
          $nextArrow: null,
          $prevArrow: null,
          scrolling: !1,
          slideCount: null,
          slideWidth: null,
          $slideTrack: null,
          $slides: null,
          sliding: !1,
          slideOffset: 0,
          swipeLeft: null,
          swiping: !1,
          $list: null,
          touchObject: {},
          transformsEnabled: !1,
          unslicked: !1,
        }),
        i.extend(n, n.initials),
        (n.activeBreakpoint = null),
        (n.animType = null),
        (n.animProp = null),
        (n.breakpoints = []),
        (n.breakpointSettings = []),
        (n.cssTransitions = !1),
        (n.focussed = !1),
        (n.interrupted = !1),
        (n.hidden = "hidden"),
        (n.paused = !0),
        (n.positionProp = null),
        (n.respondTo = null),
        (n.rowCount = 1),
        (n.shouldClick = !0),
        (n.$slider = i(t)),
        (n.$slidesCache = null),
        (n.transformType = null),
        (n.transitionType = null),
        (n.visibilityChange = "visibilitychange"),
        (n.windowWidth = 0),
        (n.windowTimer = null),
        (s = i(t).data("slick") || {}),
        (n.options = i.extend({}, n.defaults, o, s)),
        (n.currentSlide = n.options.initialSlide),
        (n.originalSettings = n.options),
        void 0 !== document.mozHidden
          ? ((n.hidden = "mozHidden"), (n.visibilityChange = "mozvisibilitychange"))
          : void 0 !== document.webkitHidden &&
            ((n.hidden = "webkitHidden"), (n.visibilityChange = "webkitvisibilitychange")),
        (n.autoPlay = i.proxy(n.autoPlay, n)),
        (n.autoPlayClear = i.proxy(n.autoPlayClear, n)),
        (n.autoPlayIterator = i.proxy(n.autoPlayIterator, n)),
        (n.changeSlide = i.proxy(n.changeSlide, n)),
        (n.clickHandler = i.proxy(n.clickHandler, n)),
        (n.selectHandler = i.proxy(n.selectHandler, n)),
        (n.setPosition = i.proxy(n.setPosition, n)),
        (n.swipeHandler = i.proxy(n.swipeHandler, n)),
        (n.dragHandler = i.proxy(n.dragHandler, n)),
        (n.keyHandler = i.proxy(n.keyHandler, n)),
        (n.instanceUid = e++),
        (n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
        n.registerBreakpoints(),
        n.init(!0);
    };
  })()).prototype.activateADA = function () {
    this.$slideTrack
      .find(".slick-active")
      .attr({ "aria-hidden": "false" })
      .find("a, input, button, select")
      .attr({ tabindex: "0" });
  }),
    (e.prototype.addSlide = e.prototype.slickAdd = function (e, t, o) {
      var s = this;
      if ("boolean" == typeof t) (o = t), (t = null);
      else if (t < 0 || t >= s.slideCount) return !1;
      s.unload(),
        "number" == typeof t
          ? 0 === t && 0 === s.$slides.length
            ? i(e).appendTo(s.$slideTrack)
            : o
            ? i(e).insertBefore(s.$slides.eq(t))
            : i(e).insertAfter(s.$slides.eq(t))
          : !0 === o
          ? i(e).prependTo(s.$slideTrack)
          : i(e).appendTo(s.$slideTrack),
        (s.$slides = s.$slideTrack.children(this.options.slide)),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function (e, t) {
          i(t).attr("data-slick-index", e);
        }),
        (s.$slidesCache = s.$slides),
        s.reinit();
    }),
    (e.prototype.animateHeight = function () {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.animate({ height: e }, i.options.speed);
      }
    }),
    (e.prototype.animateSlide = function (e, t) {
      var o = {},
        s = this;
      s.animateHeight(),
        !0 === s.options.rtl && !1 === s.options.vertical && (e = -e),
        !1 === s.transformsEnabled
          ? !1 === s.options.vertical
            ? s.$slideTrack.animate({ left: e }, s.options.speed, s.options.easing, t)
            : s.$slideTrack.animate({ top: e }, s.options.speed, s.options.easing, t)
          : !1 === s.cssTransitions
          ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft),
            i({ animStart: s.currentLeft }).animate(
              { animStart: e },
              {
                duration: s.options.speed,
                easing: s.options.easing,
                step: function (i) {
                  (i = Math.ceil(i)),
                    !1 === s.options.vertical
                      ? ((o[s.animType] = "translate(" + i + "px, 0px)"), s.$slideTrack.css(o))
                      : ((o[s.animType] = "translate(0px," + i + "px)"), s.$slideTrack.css(o));
                },
                complete: function () {
                  t && t.call();
                },
              }
            ))
          : (s.applyTransition(),
            (e = Math.ceil(e)),
            !1 === s.options.vertical
              ? (o[s.animType] = "translate3d(" + e + "px, 0px, 0px)")
              : (o[s.animType] = "translate3d(0px," + e + "px, 0px)"),
            s.$slideTrack.css(o),
            t &&
              setTimeout(function () {
                s.disableTransition(), t.call();
              }, s.options.speed));
    }),
    (e.prototype.getNavTarget = function () {
      var e = this.options.asNavFor;
      return e && null !== e && (e = i(e).not(this.$slider)), e;
    }),
    (e.prototype.asNavFor = function (e) {
      var t = this.getNavTarget();
      null !== t &&
        "object" == typeof t &&
        t.each(function () {
          var t = i(this).slick("getSlick");
          t.unslicked || t.slideHandler(e, !0);
        });
    }),
    (e.prototype.applyTransition = function (i) {
      var e = this,
        t = {};
      !1 === e.options.fade
        ? (t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase)
        : (t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
        !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t);
    }),
    (e.prototype.autoPlay = function () {
      var i = this;
      i.autoPlayClear(),
        i.slideCount > i.options.slidesToShow &&
          (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed));
    }),
    (e.prototype.autoPlayClear = function () {
      this.autoPlayTimer && clearInterval(this.autoPlayTimer);
    }),
    (e.prototype.autoPlayIterator = function () {
      var i = this,
        e = i.currentSlide + i.options.slidesToScroll;
      i.paused ||
        i.interrupted ||
        i.focussed ||
        (!1 === i.options.infinite &&
          (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1
            ? (i.direction = 0)
            : 0 === i.direction &&
              ((e = i.currentSlide - i.options.slidesToScroll), i.currentSlide - 1 == 0 && (i.direction = 1))),
        i.slideHandler(e));
    }),
    (e.prototype.buildArrows = function () {
      var e = this;
      !0 === e.options.arrows &&
        ((e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow")),
        (e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow")),
        e.slideCount > e.options.slidesToShow
          ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
            e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
            e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
            !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
          : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
    }),
    (e.prototype.buildDots = function () {
      var e,
        t,
        o = this;
      if (!0 === o.options.dots && o.slideCount > o.options.slidesToShow) {
        for (
          o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0;
          e <= o.getDotCount();
          e += 1
        )
          t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
        (o.$dots = t.appendTo(o.options.appendDots)), o.$dots.find("li").first().addClass("slick-active");
      }
    }),
    (e.prototype.buildOut = function () {
      var e = this;
      (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.$slides.each(function (e, t) {
          i(t)
            .attr("data-slick-index", e)
            .data("originalStyling", i(t).attr("style") || "");
        }),
        e.$slider.addClass("slick-slider"),
        (e.$slideTrack =
          0 === e.slideCount
            ? i('<div class="slick-track"/>').appendTo(e.$slider)
            : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
        e.$slideTrack.css("opacity", 0),
        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
        i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        !0 === e.options.draggable && e.$list.addClass("draggable");
    }),
    (e.prototype.buildRows = function () {
      var i,
        e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      if (((o = document.createDocumentFragment()), (n = l.$slider.children()), l.options.rows > 0)) {
        for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
          var d = document.createElement("div");
          for (e = 0; e < l.options.rows; e++) {
            var a = document.createElement("div");
            for (t = 0; t < l.options.slidesPerRow; t++) {
              var c = i * r + (e * l.options.slidesPerRow + t);
              n.get(c) && a.appendChild(n.get(c));
            }
            d.appendChild(a);
          }
          o.appendChild(d);
        }
        l.$slider.empty().append(o),
          l.$slider
            .children()
            .children()
            .children()
            .css({ width: 100 / l.options.slidesPerRow + "%", display: "inline-block" });
      }
    }),
    (e.prototype.checkResponsive = function (e, t) {
      var o,
        s,
        n,
        r = this,
        l = !1,
        d = r.$slider.width(),
        a = window.innerWidth || i(window).width();
      if (
        ("window" === r.respondTo
          ? (n = a)
          : "slider" === r.respondTo
          ? (n = d)
          : "min" === r.respondTo && (n = Math.min(a, d)),
        r.options.responsive && r.options.responsive.length && null !== r.options.responsive)
      ) {
        for (o in ((s = null), r.breakpoints))
          r.breakpoints.hasOwnProperty(o) &&
            (!1 === r.originalSettings.mobileFirst
              ? n < r.breakpoints[o] && (s = r.breakpoints[o])
              : n > r.breakpoints[o] && (s = r.breakpoints[o]));
        null !== s
          ? null !== r.activeBreakpoint
            ? (s !== r.activeBreakpoint || t) &&
              ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
            : ((r.activeBreakpoint = s),
              "unslick" === r.breakpointSettings[s]
                ? r.unslick(s)
                : ((r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s])),
                  !0 === e && (r.currentSlide = r.options.initialSlide),
                  r.refresh(e)),
              (l = s))
          : null !== r.activeBreakpoint &&
            ((r.activeBreakpoint = null),
            (r.options = r.originalSettings),
            !0 === e && (r.currentSlide = r.options.initialSlide),
            r.refresh(e),
            (l = s)),
          e || !1 === l || r.$slider.trigger("breakpoint", [r, l]);
      }
    }),
    (e.prototype.changeSlide = function (e, t) {
      var o,
        s,
        n = this,
        r = i(e.currentTarget);
      switch (
        (r.is("a") && e.preventDefault(),
        r.is("li") || (r = r.closest("li")),
        (o =
          n.slideCount % n.options.slidesToScroll != 0
            ? 0
            : (n.slideCount - n.currentSlide) % n.options.slidesToScroll),
        e.data.message)
      ) {
        case "previous":
          (s = 0 === o ? n.options.slidesToScroll : n.options.slidesToShow - o),
            n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - s, !1, t);
          break;
        case "next":
          (s = 0 === o ? n.options.slidesToScroll : o),
            n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + s, !1, t);
          break;
        case "index":
          var l = 0 === e.data.index ? 0 : e.data.index || r.index() * n.options.slidesToScroll;
          n.slideHandler(n.checkNavigable(l), !1, t), r.children().trigger("focus");
          break;
        default:
          return;
      }
    }),
    (e.prototype.checkNavigable = function (i) {
      var e, t;
      if (((t = 0), i > (e = this.getNavigableIndexes())[e.length - 1])) i = e[e.length - 1];
      else
        for (var o in e) {
          if (i < e[o]) {
            i = t;
            break;
          }
          t = e[o];
        }
      return i;
    }),
    (e.prototype.cleanUpEvents = function () {
      var e = this;
      e.options.dots &&
        null !== e.$dots &&
        (i("li", e.$dots)
          .off("click.slick", e.changeSlide)
          .off("mouseenter.slick", i.proxy(e.interrupt, e, !0))
          .off("mouseleave.slick", i.proxy(e.interrupt, e, !1)),
        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
        e.$slider.off("focus.slick blur.slick"),
        !0 === e.options.arrows &&
          e.slideCount > e.options.slidesToShow &&
          (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
          e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
          !0 === e.options.accessibility &&
            (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler),
            e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
        e.$list.off("click.slick", e.clickHandler),
        i(document).off(e.visibilityChange, e.visibility),
        e.cleanUpSlideEvents(),
        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler),
        i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
        i(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
        i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
        i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
    }),
    (e.prototype.cleanUpSlideEvents = function () {
      var e = this;
      e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.cleanUpRows = function () {
      var i;
      this.options.rows > 0 &&
        ((i = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(i));
    }),
    (e.prototype.clickHandler = function (i) {
      !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault());
    }),
    (e.prototype.destroy = function (e) {
      var t = this;
      t.autoPlayClear(),
        (t.touchObject = {}),
        t.cleanUpEvents(),
        i(".slick-cloned", t.$slider).detach(),
        t.$dots && t.$dots.remove(),
        t.$prevArrow &&
          t.$prevArrow.length &&
          (t.$prevArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()),
        t.$nextArrow &&
          t.$nextArrow.length &&
          (t.$nextArrow
            .removeClass("slick-disabled slick-arrow slick-hidden")
            .removeAttr("aria-hidden aria-disabled tabindex")
            .css("display", ""),
          t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()),
        t.$slides &&
          (t.$slides
            .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
            .removeAttr("aria-hidden")
            .removeAttr("data-slick-index")
            .each(function () {
              i(this).attr("style", i(this).data("originalStyling"));
            }),
          t.$slideTrack.children(this.options.slide).detach(),
          t.$slideTrack.detach(),
          t.$list.detach(),
          t.$slider.append(t.$slides)),
        t.cleanUpRows(),
        t.$slider.removeClass("slick-slider"),
        t.$slider.removeClass("slick-initialized"),
        t.$slider.removeClass("slick-dotted"),
        (t.unslicked = !0),
        e || t.$slider.trigger("destroy", [t]);
    }),
    (e.prototype.disableTransition = function (i) {
      var e = {};
      (e[this.transitionType] = ""), !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(i).css(e);
    }),
    (e.prototype.fadeSlide = function (i, e) {
      var t = this;
      !1 === t.cssTransitions
        ? (t.$slides.eq(i).css({ zIndex: t.options.zIndex }),
          t.$slides.eq(i).animate({ opacity: 1 }, t.options.speed, t.options.easing, e))
        : (t.applyTransition(i),
          t.$slides.eq(i).css({ opacity: 1, zIndex: t.options.zIndex }),
          e &&
            setTimeout(function () {
              t.disableTransition(i), e.call();
            }, t.options.speed));
    }),
    (e.prototype.fadeSlideOut = function (i) {
      var e = this;
      !1 === e.cssTransitions
        ? e.$slides.eq(i).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
        : (e.applyTransition(i), e.$slides.eq(i).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
    }),
    (e.prototype.filterSlides = e.prototype.slickFilter = function (i) {
      var e = this;
      null !== i &&
        ((e.$slidesCache = e.$slides),
        e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(i).appendTo(e.$slideTrack),
        e.reinit());
    }),
    (e.prototype.focusHandler = function () {
      var e = this;
      e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (t) {
        t.stopImmediatePropagation();
        var o = i(this);
        setTimeout(function () {
          e.options.pauseOnFocus && ((e.focussed = o.is(":focus")), e.autoPlay());
        }, 0);
      });
    }),
    (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
      return this.currentSlide;
    }),
    (e.prototype.getDotCount = function () {
      var i = this,
        e = 0,
        t = 0,
        o = 0;
      if (!0 === i.options.infinite)
        if (i.slideCount <= i.options.slidesToShow) ++o;
        else
          for (; e < i.slideCount; )
            ++o,
              (e = t + i.options.slidesToScroll),
              (t +=
                i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
      else if (!0 === i.options.centerMode) o = i.slideCount;
      else if (i.options.asNavFor)
        for (; e < i.slideCount; )
          ++o,
            (e = t + i.options.slidesToScroll),
            (t +=
              i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow);
      else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
      return o - 1;
    }),
    (e.prototype.getLeft = function (i) {
      var e,
        t,
        o,
        s,
        n = this,
        r = 0;
      return (
        (n.slideOffset = 0),
        (t = n.$slides.first().outerHeight(!0)),
        !0 === n.options.infinite
          ? (n.slideCount > n.options.slidesToShow &&
              ((n.slideOffset = n.slideWidth * n.options.slidesToShow * -1),
              (s = -1),
              !0 === n.options.vertical &&
                !0 === n.options.centerMode &&
                (2 === n.options.slidesToShow ? (s = -1.5) : 1 === n.options.slidesToShow && (s = -2)),
              (r = t * n.options.slidesToShow * s)),
            n.slideCount % n.options.slidesToScroll != 0 &&
              i + n.options.slidesToScroll > n.slideCount &&
              n.slideCount > n.options.slidesToShow &&
              (i > n.slideCount
                ? ((n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1),
                  (r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1))
                : ((n.slideOffset = (n.slideCount % n.options.slidesToScroll) * n.slideWidth * -1),
                  (r = (n.slideCount % n.options.slidesToScroll) * t * -1))))
          : i + n.options.slidesToShow > n.slideCount &&
            ((n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth),
            (r = (i + n.options.slidesToShow - n.slideCount) * t)),
        n.slideCount <= n.options.slidesToShow && ((n.slideOffset = 0), (r = 0)),
        !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow
          ? (n.slideOffset =
              (n.slideWidth * Math.floor(n.options.slidesToShow)) / 2 - (n.slideWidth * n.slideCount) / 2)
          : !0 === n.options.centerMode && !0 === n.options.infinite
          ? (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth)
          : !0 === n.options.centerMode &&
            ((n.slideOffset = 0), (n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2))),
        (e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r),
        !0 === n.options.variableWidth &&
          ((o =
            n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
              ? n.$slideTrack.children(".slick-slide").eq(i)
              : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow)),
          (e =
            !0 === n.options.rtl
              ? o[0]
                ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                : 0
              : o[0]
              ? -1 * o[0].offsetLeft
              : 0),
          !0 === n.options.centerMode &&
            ((o =
              n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite
                ? n.$slideTrack.children(".slick-slide").eq(i)
                : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1)),
            (e =
              !0 === n.options.rtl
                ? o[0]
                  ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width())
                  : 0
                : o[0]
                ? -1 * o[0].offsetLeft
                : 0),
            (e += (n.$list.width() - o.outerWidth()) / 2))),
        e
      );
    }),
    (e.prototype.getOption = e.prototype.slickGetOption = function (i) {
      return this.options[i];
    }),
    (e.prototype.getNavigableIndexes = function () {
      var i,
        e = this,
        t = 0,
        o = 0,
        s = [];
      for (
        !1 === e.options.infinite
          ? (i = e.slideCount)
          : ((t = -1 * e.options.slidesToScroll), (o = -1 * e.options.slidesToScroll), (i = 2 * e.slideCount));
        t < i;

      )
        s.push(t),
          (t = o + e.options.slidesToScroll),
          (o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
      return s;
    }),
    (e.prototype.getSlick = function () {
      return this;
    }),
    (e.prototype.getSlideCount = function () {
      var e,
        t,
        o = this;
      return (
        (t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0),
        !0 === o.options.swipeToSlide
          ? (o.$slideTrack.find(".slick-slide").each(function (s, n) {
              if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return (e = n), !1;
            }),
            Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1)
          : o.options.slidesToScroll
      );
    }),
    (e.prototype.goTo = e.prototype.slickGoTo = function (i, e) {
      this.changeSlide({ data: { message: "index", index: parseInt(i) } }, e);
    }),
    (e.prototype.init = function (e) {
      var t = this;
      i(t.$slider).hasClass("slick-initialized") ||
        (i(t.$slider).addClass("slick-initialized"),
        t.buildRows(),
        t.buildOut(),
        t.setProps(),
        t.startLoad(),
        t.loadSlider(),
        t.initializeEvents(),
        t.updateArrows(),
        t.updateDots(),
        t.checkResponsive(!0),
        t.focusHandler()),
        e && t.$slider.trigger("init", [t]),
        !0 === t.options.accessibility && t.initADA(),
        t.options.autoplay && ((t.paused = !1), t.autoPlay());
    }),
    (e.prototype.initADA = function () {
      var e = this,
        t = Math.ceil(e.slideCount / e.options.slidesToShow),
        o = e.getNavigableIndexes().filter(function (i) {
          return i >= 0 && i < e.slideCount;
        });
      e.$slides
        .add(e.$slideTrack.find(".slick-cloned"))
        .attr({ "aria-hidden": "true", tabindex: "-1" })
        .find("a, input, button, select")
        .attr({ tabindex: "-1" }),
        null !== e.$dots &&
          (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (t) {
            var s = o.indexOf(t);
            if ((i(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + t, tabindex: -1 }), -1 !== s)) {
              var n = "slick-slide-control" + e.instanceUid + s;
              i("#" + n).length && i(this).attr({ "aria-describedby": n });
            }
          }),
          e.$dots
            .attr("role", "tablist")
            .find("li")
            .each(function (s) {
              var n = o[s];
              i(this).attr({ role: "presentation" }),
                i(this)
                  .find("button")
                  .first()
                  .attr({
                    role: "tab",
                    id: "slick-slide-control" + e.instanceUid + s,
                    "aria-controls": "slick-slide" + e.instanceUid + n,
                    "aria-label": s + 1 + " of " + t,
                    "aria-selected": null,
                    tabindex: "-1",
                  });
            })
            .eq(e.currentSlide)
            .find("button")
            .attr({ "aria-selected": "true", tabindex: "0" })
            .end());
      for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++)
        e.options.focusOnChange ? e.$slides.eq(s).attr({ tabindex: "0" }) : e.$slides.eq(s).removeAttr("tabindex");
      e.activateADA();
    }),
    (e.prototype.initArrowEvents = function () {
      var i = this;
      !0 === i.options.arrows &&
        i.slideCount > i.options.slidesToShow &&
        (i.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, i.changeSlide),
        i.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, i.changeSlide),
        !0 === i.options.accessibility &&
          (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)));
    }),
    (e.prototype.initDotEvents = function () {
      var e = this;
      !0 === e.options.dots &&
        e.slideCount > e.options.slidesToShow &&
        (i("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide),
        !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
        !0 === e.options.dots &&
          !0 === e.options.pauseOnDotsHover &&
          e.slideCount > e.options.slidesToShow &&
          i("li", e.$dots)
            .on("mouseenter.slick", i.proxy(e.interrupt, e, !0))
            .on("mouseleave.slick", i.proxy(e.interrupt, e, !1));
    }),
    (e.prototype.initSlideEvents = function () {
      var e = this;
      e.options.pauseOnHover &&
        (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)),
        e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)));
    }),
    (e.prototype.initializeEvents = function () {
      var e = this;
      e.initArrowEvents(),
        e.initDotEvents(),
        e.initSlideEvents(),
        e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
        e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
        e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
        e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
        e.$list.on("click.slick", e.clickHandler),
        i(document).on(e.visibilityChange, i.proxy(e.visibility, e)),
        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)),
        i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)),
        i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
        i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
        i(e.setPosition);
    }),
    (e.prototype.initUI = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show();
    }),
    (e.prototype.keyHandler = function (i) {
      var e = this;
      i.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
        (37 === i.keyCode && !0 === e.options.accessibility
          ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
          : 39 === i.keyCode &&
            !0 === e.options.accessibility &&
            e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
    }),
    (e.prototype.lazyLoad = function () {
      var e,
        t,
        o,
        s = this;
      function n(e) {
        i("img[data-lazy]", e).each(function () {
          var e = i(this),
            t = i(this).attr("data-lazy"),
            o = i(this).attr("data-srcset"),
            n = i(this).attr("data-sizes") || s.$slider.attr("data-sizes"),
            r = document.createElement("img");
          (r.onload = function () {
            e.animate({ opacity: 0 }, 100, function () {
              o && (e.attr("srcset", o), n && e.attr("sizes", n)),
                e.attr("src", t).animate({ opacity: 1 }, 200, function () {
                  e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                }),
                s.$slider.trigger("lazyLoaded", [s, e, t]);
            });
          }),
            (r.onerror = function () {
              e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                s.$slider.trigger("lazyLoadError", [s, e, t]);
            }),
            (r.src = t);
        });
      }
      if (
        (!0 === s.options.centerMode
          ? !0 === s.options.infinite
            ? (o = (t = s.currentSlide + (s.options.slidesToShow / 2 + 1)) + s.options.slidesToShow + 2)
            : ((t = Math.max(0, s.currentSlide - (s.options.slidesToShow / 2 + 1))),
              (o = s.options.slidesToShow / 2 + 1 + 2 + s.currentSlide))
          : ((t = s.options.infinite ? s.options.slidesToShow + s.currentSlide : s.currentSlide),
            (o = Math.ceil(t + s.options.slidesToShow)),
            !0 === s.options.fade && (t > 0 && t--, o <= s.slideCount && o++)),
        (e = s.$slider.find(".slick-slide").slice(t, o)),
        "anticipated" === s.options.lazyLoad)
      )
        for (var r = t - 1, l = o, d = s.$slider.find(".slick-slide"), a = 0; a < s.options.slidesToScroll; a++)
          r < 0 && (r = s.slideCount - 1), (e = (e = e.add(d.eq(r))).add(d.eq(l))), r--, l++;
      n(e),
        s.slideCount <= s.options.slidesToShow
          ? n(s.$slider.find(".slick-slide"))
          : s.currentSlide >= s.slideCount - s.options.slidesToShow
          ? n(s.$slider.find(".slick-cloned").slice(0, s.options.slidesToShow))
          : 0 === s.currentSlide && n(s.$slider.find(".slick-cloned").slice(-1 * s.options.slidesToShow));
    }),
    (e.prototype.loadSlider = function () {
      var i = this;
      i.setPosition(),
        i.$slideTrack.css({ opacity: 1 }),
        i.$slider.removeClass("slick-loading"),
        i.initUI(),
        "progressive" === i.options.lazyLoad && i.progressiveLazyLoad();
    }),
    (e.prototype.next = e.prototype.slickNext = function () {
      this.changeSlide({ data: { message: "next" } });
    }),
    (e.prototype.orientationChange = function () {
      this.checkResponsive(), this.setPosition();
    }),
    (e.prototype.pause = e.prototype.slickPause = function () {
      this.autoPlayClear(), (this.paused = !0);
    }),
    (e.prototype.play = e.prototype.slickPlay = function () {
      var i = this;
      i.autoPlay(), (i.options.autoplay = !0), (i.paused = !1), (i.focussed = !1), (i.interrupted = !1);
    }),
    (e.prototype.postSlide = function (e) {
      var t = this;
      t.unslicked ||
        (t.$slider.trigger("afterChange", [t, e]),
        (t.animating = !1),
        t.slideCount > t.options.slidesToShow && t.setPosition(),
        (t.swipeLeft = null),
        t.options.autoplay && t.autoPlay(),
        !0 === t.options.accessibility &&
          (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()));
    }),
    (e.prototype.prev = e.prototype.slickPrev = function () {
      this.changeSlide({ data: { message: "previous" } });
    }),
    (e.prototype.preventDefault = function (i) {
      i.preventDefault();
    }),
    (e.prototype.progressiveLazyLoad = function (e) {
      e = e || 1;
      var t,
        o,
        s,
        n,
        r,
        l = this,
        d = i("img[data-lazy]", l.$slider);
      d.length
        ? ((t = d.first()),
          (o = t.attr("data-lazy")),
          (s = t.attr("data-srcset")),
          (n = t.attr("data-sizes") || l.$slider.attr("data-sizes")),
          ((r = document.createElement("img")).onload = function () {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)),
              t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
              !0 === l.options.adaptiveHeight && l.setPosition(),
              l.$slider.trigger("lazyLoaded", [l, t, o]),
              l.progressiveLazyLoad();
          }),
          (r.onerror = function () {
            e < 3
              ? setTimeout(function () {
                  l.progressiveLazyLoad(e + 1);
                }, 500)
              : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),
                l.$slider.trigger("lazyLoadError", [l, t, o]),
                l.progressiveLazyLoad());
          }),
          (r.src = o))
        : l.$slider.trigger("allImagesLoaded", [l]);
    }),
    (e.prototype.refresh = function (e) {
      var t,
        o,
        s = this;
      (o = s.slideCount - s.options.slidesToShow),
        !s.options.infinite && s.currentSlide > o && (s.currentSlide = o),
        s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0),
        (t = s.currentSlide),
        s.destroy(!0),
        i.extend(s, s.initials, { currentSlide: t }),
        s.init(),
        e || s.changeSlide({ data: { message: "index", index: t } }, !1);
    }),
    (e.prototype.registerBreakpoints = function () {
      var e,
        t,
        o,
        s = this,
        n = s.options.responsive || null;
      if ("array" === i.type(n) && n.length) {
        for (e in ((s.respondTo = s.options.respondTo || "window"), n))
          if (((o = s.breakpoints.length - 1), n.hasOwnProperty(e))) {
            for (t = n[e].breakpoint; o >= 0; )
              s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
            s.breakpoints.push(t), (s.breakpointSettings[t] = n[e].settings);
          }
        s.breakpoints.sort(function (i, e) {
          return s.options.mobileFirst ? i - e : e - i;
        });
      }
    }),
    (e.prototype.reinit = function () {
      var e = this;
      (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
        (e.slideCount = e.$slides.length),
        e.currentSlide >= e.slideCount &&
          0 !== e.currentSlide &&
          (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.registerBreakpoints(),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.cleanUpSlideEvents(),
        e.initSlideEvents(),
        e.checkResponsive(!1, !0),
        !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler),
        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
        e.setPosition(),
        e.focusHandler(),
        (e.paused = !e.options.autoplay),
        e.autoPlay(),
        e.$slider.trigger("reInit", [e]);
    }),
    (e.prototype.resize = function () {
      var e = this;
      i(window).width() !== e.windowWidth &&
        (clearTimeout(e.windowDelay),
        (e.windowDelay = window.setTimeout(function () {
          (e.windowWidth = i(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
        }, 50)));
    }),
    (e.prototype.removeSlide = e.prototype.slickRemove = function (i, e, t) {
      var o = this;
      if (
        ((i = "boolean" == typeof i ? (!0 === (e = i) ? 0 : o.slideCount - 1) : !0 === e ? --i : i),
        o.slideCount < 1 || i < 0 || i > o.slideCount - 1)
      )
        return !1;
      o.unload(),
        !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(),
        (o.$slides = o.$slideTrack.children(this.options.slide)),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        (o.$slidesCache = o.$slides),
        o.reinit();
    }),
    (e.prototype.setCSS = function (i) {
      var e,
        t,
        o = this,
        s = {};
      !0 === o.options.rtl && (i = -i),
        (e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px"),
        (s[o.positionProp] = i),
        !1 === o.transformsEnabled
          ? o.$slideTrack.css(s)
          : ((s = {}),
            !1 === o.cssTransitions
              ? ((s[o.animType] = "translate(" + e + ", " + t + ")"), o.$slideTrack.css(s))
              : ((s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)"), o.$slideTrack.css(s)));
    }),
    (e.prototype.setDimensions = function () {
      var i = this;
      !1 === i.options.vertical
        ? !0 === i.options.centerMode && i.$list.css({ padding: "0px " + i.options.centerPadding })
        : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow),
          !0 === i.options.centerMode && i.$list.css({ padding: i.options.centerPadding + " 0px" })),
        (i.listWidth = i.$list.width()),
        (i.listHeight = i.$list.height()),
        !1 === i.options.vertical && !1 === i.options.variableWidth
          ? ((i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow)),
            i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length)))
          : !0 === i.options.variableWidth
          ? i.$slideTrack.width(5e3 * i.slideCount)
          : ((i.slideWidth = Math.ceil(i.listWidth)),
            i.$slideTrack.height(
              Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)
            ));
      var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
      !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e);
    }),
    (e.prototype.setFade = function () {
      var e,
        t = this;
      t.$slides.each(function (o, s) {
        (e = t.slideWidth * o * -1),
          !0 === t.options.rtl
            ? i(s).css({ position: "relative", right: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 })
            : i(s).css({ position: "relative", left: e, top: 0, zIndex: t.options.zIndex - 2, opacity: 0 });
      }),
        t.$slides.eq(t.currentSlide).css({ zIndex: t.options.zIndex - 1, opacity: 1 });
    }),
    (e.prototype.setHeight = function () {
      var i = this;
      if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
        var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
        i.$list.css("height", e);
      }
    }),
    (e.prototype.setOption = e.prototype.slickSetOption = function () {
      var e,
        t,
        o,
        s,
        n,
        r = this,
        l = !1;
      if (
        ("object" === i.type(arguments[0])
          ? ((o = arguments[0]), (l = arguments[1]), (n = "multiple"))
          : "string" === i.type(arguments[0]) &&
            ((o = arguments[0]),
            (s = arguments[1]),
            (l = arguments[2]),
            "responsive" === arguments[0] && "array" === i.type(arguments[1])
              ? (n = "responsive")
              : void 0 !== arguments[1] && (n = "single")),
        "single" === n)
      )
        r.options[o] = s;
      else if ("multiple" === n)
        i.each(o, function (i, e) {
          r.options[i] = e;
        });
      else if ("responsive" === n)
        for (t in s)
          if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
          else {
            for (e = r.options.responsive.length - 1; e >= 0; )
              r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
            r.options.responsive.push(s[t]);
          }
      l && (r.unload(), r.reinit());
    }),
    (e.prototype.setPosition = function () {
      var i = this;
      i.setDimensions(),
        i.setHeight(),
        !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(),
        i.$slider.trigger("setPosition", [i]);
    }),
    (e.prototype.setProps = function () {
      var i = this,
        e = document.body.style;
      (i.positionProp = !0 === i.options.vertical ? "top" : "left"),
        "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"),
        (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) ||
          (!0 === i.options.useCSS && (i.cssTransitions = !0)),
        i.options.fade &&
          ("number" == typeof i.options.zIndex
            ? i.options.zIndex < 3 && (i.options.zIndex = 3)
            : (i.options.zIndex = i.defaults.zIndex)),
        void 0 !== e.OTransform &&
          ((i.animType = "OTransform"),
          (i.transformType = "-o-transform"),
          (i.transitionType = "OTransition"),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.MozTransform &&
          ((i.animType = "MozTransform"),
          (i.transformType = "-moz-transform"),
          (i.transitionType = "MozTransition"),
          void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)),
        void 0 !== e.webkitTransform &&
          ((i.animType = "webkitTransform"),
          (i.transformType = "-webkit-transform"),
          (i.transitionType = "webkitTransition"),
          void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)),
        void 0 !== e.msTransform &&
          ((i.animType = "msTransform"),
          (i.transformType = "-ms-transform"),
          (i.transitionType = "msTransition"),
          void 0 === e.msTransform && (i.animType = !1)),
        void 0 !== e.transform &&
          !1 !== i.animType &&
          ((i.animType = "transform"), (i.transformType = "transform"), (i.transitionType = "transition")),
        (i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType);
    }),
    (e.prototype.setSlideClasses = function (i) {
      var e,
        t,
        o,
        s,
        n = this;
      if (
        ((t = n.$slider
          .find(".slick-slide")
          .removeClass("slick-active slick-center slick-current")
          .attr("aria-hidden", "true")),
        n.$slides.eq(i).addClass("slick-current"),
        !0 === n.options.centerMode)
      ) {
        var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
        (e = Math.floor(n.options.slidesToShow / 2)),
          !0 === n.options.infinite &&
            (i >= e && i <= n.slideCount - 1 - e
              ? n.$slides
                  .slice(i - e + r, i + e + 1)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : ((o = n.options.slidesToShow + i),
                t
                  .slice(o - e + 1 + r, o + e + 2)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")),
            0 === i
              ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center")
              : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")),
          n.$slides.eq(i).addClass("slick-center");
      } else
        i >= 0 && i <= n.slideCount - n.options.slidesToShow
          ? n.$slides
              .slice(i, i + n.options.slidesToShow)
              .addClass("slick-active")
              .attr("aria-hidden", "false")
          : t.length <= n.options.slidesToShow
          ? t.addClass("slick-active").attr("aria-hidden", "false")
          : ((s = n.slideCount % n.options.slidesToShow),
            (o = !0 === n.options.infinite ? n.options.slidesToShow + i : i),
            n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow
              ? t
                  .slice(o - (n.options.slidesToShow - s), o + s)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false")
              : t
                  .slice(o, o + n.options.slidesToShow)
                  .addClass("slick-active")
                  .attr("aria-hidden", "false"));
      ("ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad) || n.lazyLoad();
    }),
    (e.prototype.setupInfinite = function () {
      var e,
        t,
        o,
        s = this;
      if (
        (!0 === s.options.fade && (s.options.centerMode = !1),
        !0 === s.options.infinite && !1 === s.options.fade && ((t = null), s.slideCount > s.options.slidesToShow))
      ) {
        for (
          o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount;
          e > s.slideCount - o;
          e -= 1
        )
          (t = e - 1),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t - s.slideCount)
              .prependTo(s.$slideTrack)
              .addClass("slick-cloned");
        for (e = 0; e < o + s.slideCount; e += 1)
          (t = e),
            i(s.$slides[t])
              .clone(!0)
              .attr("id", "")
              .attr("data-slick-index", t + s.slideCount)
              .appendTo(s.$slideTrack)
              .addClass("slick-cloned");
        s.$slideTrack
          .find(".slick-cloned")
          .find("[id]")
          .each(function () {
            i(this).attr("id", "");
          });
      }
    }),
    (e.prototype.interrupt = function (i) {
      i || this.autoPlay(), (this.interrupted = i);
    }),
    (e.prototype.selectHandler = function (e) {
      var t = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
        o = parseInt(t.attr("data-slick-index"));
      o || (o = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(o, !1, !0) : this.slideHandler(o);
    }),
    (e.prototype.slideHandler = function (i, e, t) {
      var o,
        s,
        n,
        r,
        l,
        d,
        a = this;
      if (
        ((e = e || !1),
        !((!0 === a.animating && !0 === a.options.waitForAnimate) || (!0 === a.options.fade && a.currentSlide === i)))
      )
        if (
          (!1 === e && a.asNavFor(i),
          (o = i),
          (l = a.getLeft(o)),
          (r = a.getLeft(a.currentSlide)),
          (a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft),
          !1 === a.options.infinite &&
            !1 === a.options.centerMode &&
            (i < 0 || i > a.getDotCount() * a.options.slidesToScroll))
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t && a.slideCount > a.options.slidesToShow
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else if (
          !1 === a.options.infinite &&
          !0 === a.options.centerMode &&
          (i < 0 || i > a.slideCount - a.options.slidesToScroll)
        )
          !1 === a.options.fade &&
            ((o = a.currentSlide),
            !0 !== t && a.slideCount > a.options.slidesToShow
              ? a.animateSlide(r, function () {
                  a.postSlide(o);
                })
              : a.postSlide(o));
        else {
          if (
            (a.options.autoplay && clearInterval(a.autoPlayTimer),
            (s =
              o < 0
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? a.slideCount - (a.slideCount % a.options.slidesToScroll)
                  : a.slideCount + o
                : o >= a.slideCount
                ? a.slideCount % a.options.slidesToScroll != 0
                  ? 0
                  : o - a.slideCount
                : o),
            (a.animating = !0),
            a.$slider.trigger("beforeChange", [a, a.currentSlide, s]),
            (n = a.currentSlide),
            (a.currentSlide = s),
            a.setSlideClasses(a.currentSlide),
            a.options.asNavFor &&
              (d = (d = a.getNavTarget()).slick("getSlick")).slideCount <= d.options.slidesToShow &&
              d.setSlideClasses(a.currentSlide),
            a.updateDots(),
            a.updateArrows(),
            !0 === a.options.fade)
          )
            return (
              !0 !== t
                ? (a.fadeSlideOut(n),
                  a.fadeSlide(s, function () {
                    a.postSlide(s);
                  }))
                : a.postSlide(s),
              void a.animateHeight()
            );
          !0 !== t && a.slideCount > a.options.slidesToShow
            ? a.animateSlide(l, function () {
                a.postSlide(s);
              })
            : a.postSlide(s);
        }
    }),
    (e.prototype.startLoad = function () {
      var i = this;
      !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()),
        !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(),
        i.$slider.addClass("slick-loading");
    }),
    (e.prototype.swipeDirection = function () {
      var i,
        e,
        t,
        o,
        s = this;
      return (
        (i = s.touchObject.startX - s.touchObject.curX),
        (e = s.touchObject.startY - s.touchObject.curY),
        (t = Math.atan2(e, i)),
        (o = Math.round((180 * t) / Math.PI)) < 0 && (o = 360 - Math.abs(o)),
        o <= 45 && o >= 0
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o <= 360 && o >= 315
          ? !1 === s.options.rtl
            ? "left"
            : "right"
          : o >= 135 && o <= 225
          ? !1 === s.options.rtl
            ? "right"
            : "left"
          : !0 === s.options.verticalSwiping
          ? o >= 35 && o <= 135
            ? "down"
            : "up"
          : "vertical"
      );
    }),
    (e.prototype.swipeEnd = function (i) {
      var e,
        t,
        o = this;
      if (((o.dragging = !1), (o.swiping = !1), o.scrolling)) return (o.scrolling = !1), !1;
      if (((o.interrupted = !1), (o.shouldClick = !(o.touchObject.swipeLength > 10)), void 0 === o.touchObject.curX))
        return !1;
      if (
        (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]),
        o.touchObject.swipeLength >= o.touchObject.minSwipe)
      ) {
        switch ((t = o.swipeDirection())) {
          case "left":
          case "down":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide + o.getSlideCount())
              : o.currentSlide + o.getSlideCount()),
              (o.currentDirection = 0);
            break;
          case "right":
          case "up":
            (e = o.options.swipeToSlide
              ? o.checkNavigable(o.currentSlide - o.getSlideCount())
              : o.currentSlide - o.getSlideCount()),
              (o.currentDirection = 1);
        }
        "vertical" != t && (o.slideHandler(e), (o.touchObject = {}), o.$slider.trigger("swipe", [o, t]));
      } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), (o.touchObject = {}));
    }),
    (e.prototype.swipeHandler = function (i) {
      var e = this;
      if (
        !(
          !1 === e.options.swipe ||
          ("ontouchend" in document && !1 === e.options.swipe) ||
          (!1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))
        )
      )
        switch (
          ((e.touchObject.fingerCount =
            i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1),
          (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
          !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
          i.data.action)
        ) {
          case "start":
            e.swipeStart(i);
            break;
          case "move":
            e.swipeMove(i);
            break;
          case "end":
            e.swipeEnd(i);
        }
    }),
    (e.prototype.swipeMove = function (i) {
      var e,
        t,
        o,
        s,
        n,
        r,
        l = this;
      return (
        (n = void 0 !== i.originalEvent ? i.originalEvent.touches : null),
        !(!l.dragging || l.scrolling || (n && 1 !== n.length)) &&
          ((e = l.getLeft(l.currentSlide)),
          (l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX),
          (l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY),
          (l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2)))),
          (r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2)))),
          !l.options.verticalSwiping && !l.swiping && r > 4
            ? ((l.scrolling = !0), !1)
            : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r),
              (t = l.swipeDirection()),
              void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && ((l.swiping = !0), i.preventDefault()),
              (s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1)),
              !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1),
              (o = l.touchObject.swipeLength),
              (l.touchObject.edgeHit = !1),
              !1 === l.options.infinite &&
                ((0 === l.currentSlide && "right" === t) || (l.currentSlide >= l.getDotCount() && "left" === t)) &&
                ((o = l.touchObject.swipeLength * l.options.edgeFriction), (l.touchObject.edgeHit = !0)),
              !1 === l.options.vertical
                ? (l.swipeLeft = e + o * s)
                : (l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s),
              !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s),
              !0 !== l.options.fade &&
                !1 !== l.options.touchMove &&
                (!0 === l.animating ? ((l.swipeLeft = null), !1) : void l.setCSS(l.swipeLeft))))
      );
    }),
    (e.prototype.swipeStart = function (i) {
      var e,
        t = this;
      if (((t.interrupted = !0), 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow))
        return (t.touchObject = {}), !1;
      void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]),
        (t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX),
        (t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY),
        (t.dragging = !0);
    }),
    (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
      var i = this;
      null !== i.$slidesCache &&
        (i.unload(),
        i.$slideTrack.children(this.options.slide).detach(),
        i.$slidesCache.appendTo(i.$slideTrack),
        i.reinit());
    }),
    (e.prototype.unload = function () {
      var e = this;
      i(".slick-cloned", e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
        e.$slides
          .removeClass("slick-slide slick-active slick-visible slick-current")
          .attr("aria-hidden", "true")
          .css("width", "");
    }),
    (e.prototype.unslick = function (i) {
      this.$slider.trigger("unslick", [this, i]), this.destroy();
    }),
    (e.prototype.updateArrows = function () {
      var i = this;
      Math.floor(i.options.slidesToShow / 2),
        !0 === i.options.arrows &&
          i.slideCount > i.options.slidesToShow &&
          !i.options.infinite &&
          (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
          i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
          0 === i.currentSlide
            ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode
            ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
            : i.currentSlide >= i.slideCount - 1 &&
              !0 === i.options.centerMode &&
              (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"),
              i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
    }),
    (e.prototype.updateDots = function () {
      var i = this;
      null !== i.$dots &&
        (i.$dots.find("li").removeClass("slick-active").end(),
        i.$dots
          .find("li")
          .eq(Math.floor(i.currentSlide / i.options.slidesToScroll))
          .addClass("slick-active"));
    }),
    (e.prototype.visibility = function () {
      this.options.autoplay && (document[this.hidden] ? (this.interrupted = !0) : (this.interrupted = !1));
    }),
    (i.fn.slick = function () {
      var i,
        t,
        o = this,
        s = arguments[0],
        n = Array.prototype.slice.call(arguments, 1),
        r = o.length;
      for (i = 0; i < r; i++)
        if (
          ("object" == typeof s || void 0 === s
            ? (o[i].slick = new e(o[i], s))
            : (t = o[i].slick[s].apply(o[i].slick, n)),
          void 0 !== t)
        )
          return t;
      return o;
    });
});
!(function (e) {
  "use strict";
  var s,
    i,
    a,
    c,
    o,
    t,
    d,
    l,
    n,
    r,
    v,
    u,
    b,
    k,
    p,
    m,
    h,
    f,
    g,
    x,
    y,
    w,
    C,
    _,
    B,
    P,
    E,
    O,
    D,
    M,
    N,
    U,
    V,
    I,
    z,
    R,
    X,
    Y,
    j,
    W,
    q;
  e.fn.extend({
    venobox: function ($) {
      var A = this,
        H = e.extend(
          {
            arrowsColor: "#B6B6B6",
            autoplay: !1,
            bgcolor: "#fff",
            border: "0",
            closeBackground: "#161617",
            closeColor: "#d2d2d2",
            framewidth: "",
            frameheight: "",
            gallItems: !1,
            infinigall: !1,
            htmlClose: "&times;",
            htmlNext: "<span>Next</span>",
            htmlPrev: "<span>Prev</span>",
            numeratio: !1,
            numerationBackground: "#161617",
            numerationColor: "#d2d2d2",
            numerationPosition: "top",
            overlayClose: !0,
            overlayColor: "rgba(23,23,23,0.85)",
            spinner: "double-bounce",
            spinColor: "#d2d2d2",
            titleattr: "title",
            titleBackground: "#161617",
            titleColor: "#d2d2d2",
            titlePosition: "top",
            cb_pre_open: function () {
              return !0;
            },
            cb_post_open: function () {},
            cb_pre_close: function () {
              return !0;
            },
            cb_post_close: function () {},
            cb_post_resize: function () {},
            cb_after_nav: function () {},
            cb_content_loaded: function () {},
            cb_init: function () {},
          },
          $
        );
      return (
        H.cb_init(A),
        this.each(function () {
          if ((D = e(this)).data("venobox")) return !0;
          function $() {
            (y = D.data("gall")),
              (h = D.data("numeratio")),
              (u = D.data("gallItems")),
              (b = D.data("infinigall")),
              (k = u || e('.vbox-item[data-gall="' + y + '"]')),
              (w = k.eq(k.index(D) + 1)),
              (C = k.eq(k.index(D) - 1)),
              w.length || !0 !== b || (w = k.eq(0)),
              k.length > 1 ? ((M = k.index(D) + 1), a.html(M + " / " + k.length)) : (M = 1),
              !0 === h ? a.show() : a.hide(),
              "" !== x ? c.show() : c.hide(),
              w.length || !0 === b
                ? (e(".vbox-next").css("display", "block"), (_ = !0))
                : (e(".vbox-next").css("display", "none"), (_ = !1)),
              k.index(D) > 0 || !0 === b
                ? (e(".vbox-prev").css("display", "block"), (B = !0))
                : (e(".vbox-prev").css("display", "none"), (B = !1)),
              (!0 !== B && !0 !== _) || (d.on(K.DOWN, F), d.on(K.MOVE, G), d.on(K.UP, J));
          }
          function Q(e) {
            return (
              !(e.length < 1) &&
              !p &&
              ((p = !0),
              (f = e.data("overlay") || e.data("overlaycolor")),
              (r = e.data("framewidth")),
              (v = e.data("frameheight")),
              (o = e.data("border")),
              (i = e.data("bgcolor")),
              (l = e.data("href") || e.attr("href")),
              (s = e.data("autoplay")),
              (x = e.attr(e.data("titleattr")) || ""),
              e === C && d.addClass("animated").addClass("swipe-right"),
              e === w && d.addClass("animated").addClass("swipe-left"),
              E.show(),
              void d.animate({ opacity: 0 }, 500, function () {
                g.css("background", f),
                  d
                    .removeClass("animated")
                    .removeClass("swipe-left")
                    .removeClass("swipe-right")
                    .css({ marginLeft: 0, marginRight: 0 }),
                  "iframe" == e.data("vbtype")
                    ? ae()
                    : "inline" == e.data("vbtype")
                    ? oe()
                    : "ajax" == e.data("vbtype")
                    ? ie()
                    : "video" == e.data("vbtype")
                    ? ce(s)
                    : (d.html('<img src="' + l + '">'), te()),
                  (D = e),
                  $(),
                  (p = !1),
                  H.cb_after_nav(D, M, w, C);
              }))
            );
          }
          function S(e) {
            27 === e.keyCode && T(), 37 == e.keyCode && !0 === B && Q(C), 39 == e.keyCode && !0 === _ && Q(w);
          }
          function T() {
            if (!1 === H.cb_pre_close(D, M, w, C)) return !1;
            e("body").off("keydown", S).removeClass("vbox-open"),
              D.focus(),
              g.animate({ opacity: 0 }, 500, function () {
                g.remove(), (p = !1), H.cb_post_close();
              });
          }
          (A.VBclose = function () {
            T();
          }),
            D.addClass("vbox-item"),
            D.data("framewidth", H.framewidth),
            D.data("frameheight", H.frameheight),
            D.data("border", H.border),
            D.data("bgcolor", H.bgcolor),
            D.data("numeratio", H.numeratio),
            D.data("gallItems", H.gallItems),
            D.data("infinigall", H.infinigall),
            D.data("overlaycolor", H.overlayColor),
            D.data("titleattr", H.titleattr),
            D.data("venobox", !0),
            D.on("click", function (u) {
              if ((u.preventDefault(), (D = e(this)), !1 === H.cb_pre_open(D))) return !1;
              switch (
                ((A.VBnext = function () {
                  Q(w);
                }),
                (A.VBprev = function () {
                  Q(C);
                }),
                (f = D.data("overlay") || D.data("overlaycolor")),
                (r = D.data("framewidth")),
                (v = D.data("frameheight")),
                (s = D.data("autoplay") || H.autoplay),
                (o = D.data("border")),
                (i = D.data("bgcolor")),
                (_ = !1),
                (B = !1),
                (p = !1),
                (l = D.data("href") || D.attr("href")),
                (n = D.data("css") || ""),
                (x = D.attr(D.data("titleattr")) || ""),
                (P = '<div class="vbox-preloader">'),
                H.spinner)
              ) {
                case "rotating-plane":
                  P += '<div class="sk-rotating-plane"></div>';
                  break;
                case "double-bounce":
                  P +=
                    '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                  break;
                case "wave":
                  P +=
                    '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                  break;
                case "wandering-cubes":
                  P +=
                    '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                  break;
                case "spinner-pulse":
                  P += '<div class="sk-spinner sk-spinner-pulse"></div>';
                  break;
                case "chasing-dots":
                  P +=
                    '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
                  break;
                case "three-bounce":
                  P +=
                    '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                  break;
                case "circle":
                  P +=
                    '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
                  break;
                case "cube-grid":
                  P +=
                    '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
                  break;
                case "fading-circle":
                  P +=
                    '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
                  break;
                case "folding-cube":
                  P +=
                    '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>';
              }
              return (
                (P += "</div>"),
                (O = '<a class="vbox-next">' + H.htmlNext + '</a><a class="vbox-prev">' + H.htmlPrev + "</a>"),
                (U =
                  '<div class="vbox-title"></div><div class="vbox-num">0/0</div><div class="vbox-close">' +
                  H.htmlClose +
                  "</div>"),
                (t =
                  '<div class="vbox-overlay ' +
                  n +
                  '" style="background:' +
                  f +
                  '">' +
                  P +
                  '<div class="vbox-container"><div class="vbox-content"></div></div>' +
                  U +
                  O +
                  "</div>"),
                e("body").append(t).addClass("vbox-open"),
                e(
                  ".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse"
                ).css("background-color", H.spinColor),
                (g = e(".vbox-overlay")),
                e(".vbox-container"),
                (d = e(".vbox-content")),
                (a = e(".vbox-num")),
                (c = e(".vbox-title")),
                (E = e(".vbox-preloader")).show(),
                c.css(H.titlePosition, "-1px"),
                c.css({ color: H.titleColor, backgroundColor: H.titleBackground }),
                e(".vbox-close").css({ color: H.closeColor, backgroundColor: H.closeBackground }),
                e(".vbox-num").css(H.numerationPosition, "-1px"),
                e(".vbox-num").css({ color: H.numerationColor, backgroundColor: H.numerationBackground }),
                e(".vbox-next span, .vbox-prev span").css({
                  borderTopColor: H.arrowsColor,
                  borderRightColor: H.arrowsColor,
                }),
                d.html(""),
                d.css("opacity", "0"),
                g.css("opacity", "0"),
                $(),
                g.animate({ opacity: 1 }, 250, function () {
                  "iframe" == D.data("vbtype")
                    ? ae()
                    : "inline" == D.data("vbtype")
                    ? oe()
                    : "ajax" == D.data("vbtype")
                    ? ie()
                    : "video" == D.data("vbtype")
                    ? ce(s)
                    : (d.html('<img src="' + l + '">'), te()),
                    H.cb_post_open(D, M, w, C);
                }),
                e("body").keydown(S),
                e(".vbox-prev").on("click", function () {
                  Q(C);
                }),
                e(".vbox-next").on("click", function () {
                  Q(w);
                }),
                !1
              );
            });
          var Z = ".vbox-overlay";
          function F(e) {
            d.addClass("animated"), (I = R = e.pageY), (z = X = e.pageX), (N = !0);
          }
          function G(e) {
            if (!0 === N) {
              (X = e.pageX), (R = e.pageY), (j = X - z), (W = R - I);
              var s = Math.abs(j);
              s > Math.abs(W) && s <= 100 && (e.preventDefault(), d.css("margin-left", j));
            }
          }
          function J(e) {
            if (!0 === N) {
              N = !1;
              var s = D,
                i = !1;
              (Y = X - z) < 0 && !0 === _ && ((s = w), (i = !0)),
                Y > 0 && !0 === B && ((s = C), (i = !0)),
                Math.abs(Y) >= q && !0 === i ? Q(s) : d.css({ marginLeft: 0, marginRight: 0 });
            }
          }
          H.overlayClose || (Z = ".vbox-close"),
            e("body").on("click touchstart", Z, function (s) {
              (e(s.target).is(".vbox-overlay") ||
                e(s.target).is(".vbox-content") ||
                e(s.target).is(".vbox-close") ||
                e(s.target).is(".vbox-preloader") ||
                e(s.target).is(".vbox-container")) &&
                T();
            }),
            (z = 0),
            (X = 0),
            (Y = 0),
            (q = 50),
            (N = !1);
          var K = { DOWN: "touchmousedown", UP: "touchmouseup", MOVE: "touchmousemove" },
            L = function (s) {
              var i;
              switch (s.type) {
                case "mousedown":
                  i = K.DOWN;
                  break;
                case "mouseup":
                case "mouseout":
                  i = K.UP;
                  break;
                case "mousemove":
                  i = K.MOVE;
                  break;
                default:
                  return;
              }
              var a = se(i, s, s.pageX, s.pageY);
              e(s.target).trigger(a);
            },
            ee = function (s) {
              var i;
              switch (s.type) {
                case "touchstart":
                  i = K.DOWN;
                  break;
                case "touchend":
                  i = K.UP;
                  break;
                case "touchmove":
                  i = K.MOVE;
                  break;
                default:
                  return;
              }
              var a,
                c = s.originalEvent.touches[0];
              (a = i == K.UP ? se(i, s, null, null) : se(i, s, c.pageX, c.pageY)), e(s.target).trigger(a);
            },
            se = function (s, i, a, c) {
              return e.Event(s, { pageX: a, pageY: c, originalEvent: i });
            };
          function ie() {
            e.ajax({ url: l, cache: !1 })
              .done(function (e) {
                d.html('<div class="vbox-inline">' + e + "</div>"), te();
              })
              .fail(function () {
                d.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'), de();
              });
          }
          function ae() {
            d.html('<iframe class="venoframe" src="' + l + '"></iframe>'), de();
          }
          function ce(e) {
            var s,
              i,
              a =
                (l.match(
                  /(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
                ),
                RegExp.$3.indexOf("youtu") > -1 ? (i = "youtube") : RegExp.$3.indexOf("vimeo") > -1 && (i = "vimeo"),
                { type: i, id: RegExp.$6 }),
              c =
                (e ? "?rel=0&autoplay=1" : "?rel=0") +
                (function (e) {
                  var s = "",
                    i = decodeURIComponent(l).split("?");
                  if (void 0 !== i[1]) {
                    var a,
                      c,
                      o = i[1].split("&");
                    for (c = 0; c < o.length; c++) s = s + "&" + (a = o[c].split("="))[0] + "=" + a[1];
                  }
                  return encodeURI(s);
                })();
            "vimeo" == a.type
              ? (s = "https://player.vimeo.com/video/")
              : "youtube" == a.type && (s = "https://www.youtube.com/embed/"),
              d.html(
                '<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' +
                  s +
                  a.id +
                  c +
                  '"></iframe>'
              ),
              de();
          }
          function oe() {
            d.html('<div class="vbox-inline">' + e(l).html() + "</div>"), de();
          }
          function te() {
            (V = d.find("img")).length
              ? V.each(function () {
                  e(this).one("load", function () {
                    de();
                  });
                })
              : de();
          }
          function de() {
            c.html(x),
              d.find(">:first-child").addClass("figlio").css({ width: r, height: v, padding: o, background: i }),
              e("img.figlio").on("dragstart", function (e) {
                e.preventDefault();
              }),
              le(),
              d.animate({ opacity: "1" }, "slow", function () {
                E.hide();
              }),
              H.cb_content_loaded(D, M, w, C);
          }
          function le() {
            var s = d.outerHeight(),
              i = e(window).height();
            (m = s + 60 < i ? (i - s) / 2 : "30px"),
              d.css("margin-top", m),
              d.css("margin-bottom", m),
              H.cb_post_resize();
          }
          "ontouchstart" in window
            ? (e(document).on("touchstart", ee), e(document).on("touchmove", ee), e(document).on("touchend", ee))
            : (e(document).on("mousedown", L),
              e(document).on("mouseup", L),
              e(document).on("mouseout", L),
              e(document).on("mousemove", L)),
            e(window).resize(function () {
              e(".vbox-content").length && setTimeout(le(), 800);
            });
        })
      );
    },
  });
})(jQuery);
/*!
 * perfect-scrollbar v1.2.0
 * (c) 2017 Hyunje Jun
 * @license MIT
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define(e)
    : (t.PerfectScrollbar = e());
})(this, function () {
  "use strict";
  function t(t) {
    return getComputedStyle(t);
  }
  function e(t, e) {
    for (var i in e) {
      var r = e[i];
      "number" == typeof r && (r += "px"), (t.style[i] = r);
    }
    return t;
  }
  function i(t) {
    var e = document.createElement("div");
    return (e.className = t), e;
  }
  var r = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.msMatchesSelector;
  function n(t, e) {
    if (!r) throw new Error("No element matching method supported");
    return r.call(t, e);
  }
  function l(t) {
    t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t);
  }
  function o(t, e) {
    return Array.prototype.filter.call(t.children, function (t) {
      return n(t, e);
    });
  }
  var s = {
      main: "ps",
      element: {
        thumb: function (t) {
          return "ps__thumb-" + t;
        },
        rail: function (t) {
          return "ps__rail-" + t;
        },
        consuming: "ps__child--consume",
      },
      state: {
        focus: "ps--focus",
        active: function (t) {
          return "ps--active-" + t;
        },
        scrolling: function (t) {
          return "ps--scrolling-" + t;
        },
      },
    },
    a = { x: null, y: null };
  function c(t, e) {
    var i = t.element.classList,
      r = s.state.scrolling(e);
    i.contains(r) ? clearTimeout(a[e]) : i.add(r);
  }
  function h(t, e) {
    a[e] = setTimeout(function () {
      return t.isAlive && t.element.classList.remove(s.state.scrolling(e));
    }, t.settings.scrollingThreshold);
  }
  var u = function (t) {
      (this.element = t), (this.handlers = {});
    },
    d = { isEmpty: { configurable: !0 } };
  (u.prototype.bind = function (t, e) {
    void 0 === this.handlers[t] && (this.handlers[t] = []),
      this.handlers[t].push(e),
      this.element.addEventListener(t, e, !1);
  }),
    (u.prototype.unbind = function (t, e) {
      var i = this;
      this.handlers[t] = this.handlers[t].filter(function (r) {
        return !(!e || r === e) || (i.element.removeEventListener(t, r, !1), !1);
      });
    }),
    (u.prototype.unbindAll = function () {
      for (var t in this.handlers) this.unbind(t);
    }),
    (d.isEmpty.get = function () {
      var t = this;
      return Object.keys(this.handlers).every(function (e) {
        return 0 === t.handlers[e].length;
      });
    }),
    Object.defineProperties(u.prototype, d);
  var p = function () {
    this.eventElements = [];
  };
  function f(t) {
    if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
    var e = document.createEvent("CustomEvent");
    return e.initCustomEvent(t, !1, !1, void 0), e;
  }
  (p.prototype.eventElement = function (t) {
    var e = this.eventElements.filter(function (e) {
      return e.element === t;
    })[0];
    return e || ((e = new u(t)), this.eventElements.push(e)), e;
  }),
    (p.prototype.bind = function (t, e, i) {
      this.eventElement(t).bind(e, i);
    }),
    (p.prototype.unbind = function (t, e, i) {
      var r = this.eventElement(t);
      r.unbind(e, i), r.isEmpty && this.eventElements.splice(this.eventElements.indexOf(r), 1);
    }),
    (p.prototype.unbindAll = function () {
      this.eventElements.forEach(function (t) {
        return t.unbindAll();
      }),
        (this.eventElements = []);
    }),
    (p.prototype.once = function (t, e, i) {
      var r = this.eventElement(t),
        n = function (t) {
          r.unbind(e, n), i(t);
        };
      r.bind(e, n);
    });
  var b = function (t, e, i, r, n) {
    var l;
    if ((void 0 === r && (r = !0), void 0 === n && (n = !1), "top" === e))
      l = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
    else {
      if ("left" !== e) throw new Error("A proper axis should be provided");
      l = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
    }
    !(function (t, e, i, r, n) {
      var l = i[0],
        o = i[1],
        s = i[2],
        a = i[3],
        u = i[4],
        d = i[5];
      void 0 === r && (r = !0);
      void 0 === n && (n = !1);
      var p = t.element;
      (t.reach[a] = null), p[s] < 1 && (t.reach[a] = "start");
      p[s] > t[l] - t[o] - 1 && (t.reach[a] = "end");
      e &&
        (p.dispatchEvent(f("ps-scroll-" + a)),
        e < 0 ? p.dispatchEvent(f("ps-scroll-" + u)) : e > 0 && p.dispatchEvent(f("ps-scroll-" + d)),
        r && (c((b = t), (g = a)), h(b, g)));
      var b, g;
      t.reach[a] && (e || n) && p.dispatchEvent(f("ps-" + a + "-reach-" + t.reach[a]));
    })(t, i, l, r, n);
  };
  function g(t) {
    return parseInt(t, 10) || 0;
  }
  var v = {
      isWebKit: document && "WebkitAppearance" in document.documentElement.style,
      supportsTouch:
        window && ("ontouchstart" in window || (window.DocumentTouch && document instanceof window.DocumentTouch)),
      supportsIePointer: navigator && navigator.msMaxTouchPoints,
    },
    m = function (t) {
      var i = t.element;
      (t.containerWidth = i.clientWidth),
        (t.containerHeight = i.clientHeight),
        (t.contentWidth = i.scrollWidth),
        (t.contentHeight = i.scrollHeight),
        i.contains(t.scrollbarXRail) ||
          (o(i, s.element.rail("x")).forEach(function (t) {
            return l(t);
          }),
          i.appendChild(t.scrollbarXRail)),
        i.contains(t.scrollbarYRail) ||
          (o(i, s.element.rail("y")).forEach(function (t) {
            return l(t);
          }),
          i.appendChild(t.scrollbarYRail)),
        !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth
          ? ((t.scrollbarXActive = !0),
            (t.railXWidth = t.containerWidth - t.railXMarginWidth),
            (t.railXRatio = t.containerWidth / t.railXWidth),
            (t.scrollbarXWidth = w(t, g((t.railXWidth * t.containerWidth) / t.contentWidth))),
            (t.scrollbarXLeft = g(
              ((t.negativeScrollAdjustment + i.scrollLeft) * (t.railXWidth - t.scrollbarXWidth)) /
                (t.contentWidth - t.containerWidth)
            )))
          : (t.scrollbarXActive = !1),
        !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight
          ? ((t.scrollbarYActive = !0),
            (t.railYHeight = t.containerHeight - t.railYMarginHeight),
            (t.railYRatio = t.containerHeight / t.railYHeight),
            (t.scrollbarYHeight = w(t, g((t.railYHeight * t.containerHeight) / t.contentHeight))),
            (t.scrollbarYTop = g(
              (i.scrollTop * (t.railYHeight - t.scrollbarYHeight)) / (t.contentHeight - t.containerHeight)
            )))
          : (t.scrollbarYActive = !1),
        t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth),
        t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
        (function (t, i) {
          var r = { width: i.railXWidth };
          i.isRtl
            ? (r.left = i.negativeScrollAdjustment + t.scrollLeft + i.containerWidth - i.contentWidth)
            : (r.left = t.scrollLeft);
          i.isScrollbarXUsingBottom
            ? (r.bottom = i.scrollbarXBottom - t.scrollTop)
            : (r.top = i.scrollbarXTop + t.scrollTop);
          e(i.scrollbarXRail, r);
          var n = { top: t.scrollTop, height: i.railYHeight };
          i.isScrollbarYUsingRight
            ? i.isRtl
              ? (n.right =
                  i.contentWidth -
                  (i.negativeScrollAdjustment + t.scrollLeft) -
                  i.scrollbarYRight -
                  i.scrollbarYOuterWidth)
              : (n.right = i.scrollbarYRight - t.scrollLeft)
            : i.isRtl
            ? (n.left =
                i.negativeScrollAdjustment +
                t.scrollLeft +
                2 * i.containerWidth -
                i.contentWidth -
                i.scrollbarYLeft -
                i.scrollbarYOuterWidth)
            : (n.left = i.scrollbarYLeft + t.scrollLeft);
          e(i.scrollbarYRail, n),
            e(i.scrollbarX, { left: i.scrollbarXLeft, width: i.scrollbarXWidth - i.railBorderXWidth }),
            e(i.scrollbarY, { top: i.scrollbarYTop, height: i.scrollbarYHeight - i.railBorderYWidth });
        })(i, t),
        t.scrollbarXActive
          ? i.classList.add(s.state.active("x"))
          : (i.classList.remove(s.state.active("x")),
            (t.scrollbarXWidth = 0),
            (t.scrollbarXLeft = 0),
            (i.scrollLeft = 0)),
        t.scrollbarYActive
          ? i.classList.add(s.state.active("y"))
          : (i.classList.remove(s.state.active("y")),
            (t.scrollbarYHeight = 0),
            (t.scrollbarYTop = 0),
            (i.scrollTop = 0));
    };
  function w(t, e) {
    return (
      t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)),
      t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)),
      e
    );
  }
  function Y(t, e) {
    var i = e[0],
      r = e[1],
      n = e[2],
      l = e[3],
      o = e[4],
      s = e[5],
      a = e[6],
      u = e[7],
      d = t.element,
      p = null,
      f = null,
      b = null;
    function g(e) {
      (d[a] = p + b * (e[n] - f)), c(t, u), m(t), e.stopPropagation(), e.preventDefault();
    }
    function v() {
      h(t, u), t.event.unbind(t.ownerDocument, "mousemove", g);
    }
    t.event.bind(t[o], "mousedown", function (e) {
      (p = d[a]),
        (f = e[n]),
        (b = (t[r] - t[i]) / (t[l] - t[s])),
        t.event.bind(t.ownerDocument, "mousemove", g),
        t.event.once(t.ownerDocument, "mouseup", v),
        e.stopPropagation(),
        e.preventDefault();
    });
  }
  var X = {
      "click-rail": function (t) {
        t.event.bind(t.scrollbarY, "mousedown", function (t) {
          return t.stopPropagation();
        }),
          t.event.bind(t.scrollbarYRail, "mousedown", function (e) {
            var i =
              e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
            (t.element.scrollTop += i * t.containerHeight), m(t), e.stopPropagation();
          }),
          t.event.bind(t.scrollbarX, "mousedown", function (t) {
            return t.stopPropagation();
          }),
          t.event.bind(t.scrollbarXRail, "mousedown", function (e) {
            var i =
              e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
            (t.element.scrollLeft += i * t.containerWidth), m(t), e.stopPropagation();
          });
      },
      "drag-thumb": function (t) {
        Y(t, [
          "containerWidth",
          "contentWidth",
          "pageX",
          "railXWidth",
          "scrollbarX",
          "scrollbarXWidth",
          "scrollLeft",
          "x",
        ]),
          Y(t, [
            "containerHeight",
            "contentHeight",
            "pageY",
            "railYHeight",
            "scrollbarY",
            "scrollbarYHeight",
            "scrollTop",
            "y",
          ]);
      },
      keyboard: function (t) {
        var e = t.element;
        t.event.bind(t.ownerDocument, "keydown", function (i) {
          if (
            !((i.isDefaultPrevented && i.isDefaultPrevented()) || i.defaultPrevented) &&
            (n(e, ":hover") || n(t.scrollbarX, ":focus") || n(t.scrollbarY, ":focus"))
          ) {
            var r,
              l = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
            if (l) {
              if ("IFRAME" === l.tagName) l = l.contentDocument.activeElement;
              else for (; l.shadowRoot; ) l = l.shadowRoot.activeElement;
              if (
                n((r = l), "input,[contenteditable]") ||
                n(r, "select,[contenteditable]") ||
                n(r, "textarea,[contenteditable]") ||
                n(r, "button,[contenteditable]")
              )
                return;
            }
            var o = 0,
              s = 0;
            switch (i.which) {
              case 37:
                o = i.metaKey ? -t.contentWidth : i.altKey ? -t.containerWidth : -30;
                break;
              case 38:
                s = i.metaKey ? t.contentHeight : i.altKey ? t.containerHeight : 30;
                break;
              case 39:
                o = i.metaKey ? t.contentWidth : i.altKey ? t.containerWidth : 30;
                break;
              case 40:
                s = i.metaKey ? -t.contentHeight : i.altKey ? -t.containerHeight : -30;
                break;
              case 32:
                s = i.shiftKey ? t.containerHeight : -t.containerHeight;
                break;
              case 33:
                s = t.containerHeight;
                break;
              case 34:
                s = -t.containerHeight;
                break;
              case 36:
                s = t.contentHeight;
                break;
              case 35:
                s = -t.contentHeight;
                break;
              default:
                return;
            }
            (t.settings.suppressScrollX && 0 !== o) ||
              (t.settings.suppressScrollY && 0 !== s) ||
              ((e.scrollTop -= s),
              (e.scrollLeft += o),
              m(t),
              (function (i, r) {
                var n = e.scrollTop;
                if (0 === i) {
                  if (!t.scrollbarYActive) return !1;
                  if ((0 === n && r > 0) || (n >= t.contentHeight - t.containerHeight && r < 0))
                    return !t.settings.wheelPropagation;
                }
                var l = e.scrollLeft;
                if (0 === r) {
                  if (!t.scrollbarXActive) return !1;
                  if ((0 === l && i < 0) || (l >= t.contentWidth - t.containerWidth && i > 0))
                    return !t.settings.wheelPropagation;
                }
                return !0;
              })(o, s) && i.preventDefault());
          }
        });
      },
      wheel: function (e) {
        var i = e.element;
        function r(r) {
          var n,
            l,
            o,
            a =
              ((l = (n = r).deltaX),
              (o = -1 * n.deltaY),
              (void 0 !== l && void 0 !== o) || ((l = (-1 * n.wheelDeltaX) / 6), (o = n.wheelDeltaY / 6)),
              n.deltaMode && 1 === n.deltaMode && ((l *= 10), (o *= 10)),
              l != l && o != o && ((l = 0), (o = n.wheelDelta)),
              n.shiftKey ? [-o, -l] : [l, o]),
            c = a[0],
            h = a[1];
          if (
            !(function (e, r, n) {
              if (!v.isWebKit && i.querySelector("select:focus")) return !0;
              if (!i.contains(e)) return !1;
              for (var l = e; l && l !== i; ) {
                if (l.classList.contains(s.element.consuming)) return !0;
                var o = t(l);
                if ([o.overflow, o.overflowX, o.overflowY].join("").match(/(scroll|auto)/)) {
                  var a = l.scrollHeight - l.clientHeight;
                  if (a > 0 && !((0 === l.scrollTop && n > 0) || (l.scrollTop === a && n < 0))) return !0;
                  var c = l.scrollLeft - l.clientWidth;
                  if (c > 0 && !((0 === l.scrollLeft && r < 0) || (l.scrollLeft === c && r > 0))) return !0;
                }
                l = l.parentNode;
              }
              return !1;
            })(r.target, c, h)
          ) {
            var u = !1;
            e.settings.useBothWheelAxes
              ? e.scrollbarYActive && !e.scrollbarXActive
                ? (h ? (i.scrollTop -= h * e.settings.wheelSpeed) : (i.scrollTop += c * e.settings.wheelSpeed),
                  (u = !0))
                : e.scrollbarXActive &&
                  !e.scrollbarYActive &&
                  (c ? (i.scrollLeft += c * e.settings.wheelSpeed) : (i.scrollLeft -= h * e.settings.wheelSpeed),
                  (u = !0))
              : ((i.scrollTop -= h * e.settings.wheelSpeed), (i.scrollLeft += c * e.settings.wheelSpeed)),
              m(e),
              (u =
                u ||
                (function (t, r) {
                  var n = i.scrollTop;
                  if (0 === t) {
                    if (!e.scrollbarYActive) return !1;
                    if ((0 === n && r > 0) || (n >= e.contentHeight - e.containerHeight && r < 0))
                      return !e.settings.wheelPropagation;
                  }
                  var l = i.scrollLeft;
                  if (0 === r) {
                    if (!e.scrollbarXActive) return !1;
                    if ((0 === l && t < 0) || (l >= e.contentWidth - e.containerWidth && t > 0))
                      return !e.settings.wheelPropagation;
                  }
                  return !0;
                })(c, h)) &&
                !r.ctrlKey &&
                (r.stopPropagation(), r.preventDefault());
          }
        }
        void 0 !== window.onwheel
          ? e.event.bind(i, "wheel", r)
          : void 0 !== window.onmousewheel && e.event.bind(i, "mousewheel", r);
      },
      touch: function (t) {
        if (v.supportsTouch || v.supportsIePointer) {
          var e = t.element,
            i = {},
            r = 0,
            n = {},
            l = null,
            o = !1,
            s = !1;
          v.supportsTouch
            ? (t.event.bind(window, "touchstart", c),
              t.event.bind(window, "touchend", h),
              t.event.bind(e, "touchstart", p),
              t.event.bind(e, "touchmove", f),
              t.event.bind(e, "touchend", b))
            : v.supportsIePointer &&
              (window.PointerEvent
                ? (t.event.bind(window, "pointerdown", c),
                  t.event.bind(window, "pointerup", h),
                  t.event.bind(e, "pointerdown", p),
                  t.event.bind(e, "pointermove", f),
                  t.event.bind(e, "pointerup", b))
                : window.MSPointerEvent &&
                  (t.event.bind(window, "MSPointerDown", c),
                  t.event.bind(window, "MSPointerUp", h),
                  t.event.bind(e, "MSPointerDown", p),
                  t.event.bind(e, "MSPointerMove", f),
                  t.event.bind(e, "MSPointerUp", b)));
        }
        function a(i, r) {
          (e.scrollTop -= r), (e.scrollLeft -= i), m(t);
        }
        function c() {
          o = !0;
        }
        function h() {
          o = !1;
        }
        function u(t) {
          return t.targetTouches ? t.targetTouches[0] : t;
        }
        function d(t) {
          return !(
            (t.pointerType && "pen" === t.pointerType && 0 === t.buttons) ||
            ((!t.targetTouches || 1 !== t.targetTouches.length) &&
              (!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
          );
        }
        function p(t) {
          if (d(t)) {
            s = !0;
            var e = u(t);
            (i.pageX = e.pageX),
              (i.pageY = e.pageY),
              (r = new Date().getTime()),
              null !== l && clearInterval(l),
              t.stopPropagation();
          }
        }
        function f(l) {
          if ((!s && t.settings.swipePropagation && p(l), !o && s && d(l))) {
            var c = u(l),
              h = { pageX: c.pageX, pageY: c.pageY },
              f = h.pageX - i.pageX,
              b = h.pageY - i.pageY;
            a(f, b), (i = h);
            var g = new Date().getTime(),
              v = g - r;
            v > 0 && ((n.x = f / v), (n.y = b / v), (r = g));
            var m = (function (i, r) {
                var n = e.scrollTop,
                  l = e.scrollLeft,
                  o = Math.abs(i),
                  s = Math.abs(r);
                if (s > o) {
                  if ((r < 0 && n === t.contentHeight - t.containerHeight) || (r > 0 && 0 === n))
                    return { stop: !t.settings.swipePropagation, prevent: 0 === window.scrollY };
                } else if (o > s && ((i < 0 && l === t.contentWidth - t.containerWidth) || (i > 0 && 0 === l)))
                  return { stop: !t.settings.swipePropagation, prevent: !0 };
                return { stop: !0, prevent: !0 };
              })(f, b),
              w = m.stop,
              Y = m.prevent;
            w && l.stopPropagation(), Y && l.preventDefault();
          }
        }
        function b() {
          !o &&
            s &&
            ((s = !1),
            t.settings.swipeEasing &&
              (clearInterval(l),
              (l = setInterval(function () {
                t.isInitialized
                  ? clearInterval(l)
                  : n.x || n.y
                  ? Math.abs(n.x) < 0.01 && Math.abs(n.y) < 0.01
                    ? clearInterval(l)
                    : (a(30 * n.x, 30 * n.y), (n.x *= 0.8), (n.y *= 0.8))
                  : clearInterval(l);
              }, 10))));
        }
      },
    },
    W = function (r, n) {
      var l = this;
      if ((void 0 === n && (n = {}), "string" == typeof r && (r = document.querySelector(r)), !r || !r.nodeName))
        throw new Error("no element is specified to initialize PerfectScrollbar");
      for (var o in ((this.element = r),
      r.classList.add(s.main),
      (this.settings = {
        handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
        maxScrollbarLength: null,
        minScrollbarLength: null,
        scrollingThreshold: 1e3,
        scrollXMarginOffset: 0,
        scrollYMarginOffset: 0,
        suppressScrollX: !1,
        suppressScrollY: !1,
        swipePropagation: !0,
        swipeEasing: !0,
        useBothWheelAxes: !1,
        wheelPropagation: !1,
        wheelSpeed: 1,
      }),
      n))
        l.settings[o] = n[o];
      (this.containerWidth = null),
        (this.containerHeight = null),
        (this.contentWidth = null),
        (this.contentHeight = null);
      var a,
        c,
        h = function () {
          return r.classList.add(s.state.focus);
        },
        u = function () {
          return r.classList.remove(s.state.focus);
        };
      (this.isRtl = "rtl" === t(r).direction),
        (this.isNegativeScroll =
          ((c = r.scrollLeft), (r.scrollLeft = -1), (a = r.scrollLeft < 0), (r.scrollLeft = c), a)),
        (this.negativeScrollAdjustment = this.isNegativeScroll ? r.scrollWidth - r.clientWidth : 0),
        (this.event = new p()),
        (this.ownerDocument = r.ownerDocument || document),
        (this.scrollbarXRail = i(s.element.rail("x"))),
        r.appendChild(this.scrollbarXRail),
        (this.scrollbarX = i(s.element.thumb("x"))),
        this.scrollbarXRail.appendChild(this.scrollbarX),
        this.scrollbarX.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarX, "focus", h),
        this.event.bind(this.scrollbarX, "blur", u),
        (this.scrollbarXActive = null),
        (this.scrollbarXWidth = null),
        (this.scrollbarXLeft = null);
      var d = t(this.scrollbarXRail);
      (this.scrollbarXBottom = parseInt(d.bottom, 10)),
        isNaN(this.scrollbarXBottom)
          ? ((this.isScrollbarXUsingBottom = !1), (this.scrollbarXTop = g(d.top)))
          : (this.isScrollbarXUsingBottom = !0),
        (this.railBorderXWidth = g(d.borderLeftWidth) + g(d.borderRightWidth)),
        e(this.scrollbarXRail, { display: "block" }),
        (this.railXMarginWidth = g(d.marginLeft) + g(d.marginRight)),
        e(this.scrollbarXRail, { display: "" }),
        (this.railXWidth = null),
        (this.railXRatio = null),
        (this.scrollbarYRail = i(s.element.rail("y"))),
        r.appendChild(this.scrollbarYRail),
        (this.scrollbarY = i(s.element.thumb("y"))),
        this.scrollbarYRail.appendChild(this.scrollbarY),
        this.scrollbarY.setAttribute("tabindex", 0),
        this.event.bind(this.scrollbarY, "focus", h),
        this.event.bind(this.scrollbarY, "blur", u),
        (this.scrollbarYActive = null),
        (this.scrollbarYHeight = null),
        (this.scrollbarYTop = null);
      var f,
        b,
        v = t(this.scrollbarYRail);
      (this.scrollbarYRight = parseInt(v.right, 10)),
        isNaN(this.scrollbarYRight)
          ? ((this.isScrollbarYUsingRight = !1), (this.scrollbarYLeft = g(v.left)))
          : (this.isScrollbarYUsingRight = !0),
        (this.scrollbarYOuterWidth = this.isRtl
          ? ((f = this.scrollbarY),
            g((b = t(f)).width) + g(b.paddingLeft) + g(b.paddingRight) + g(b.borderLeftWidth) + g(b.borderRightWidth))
          : null),
        (this.railBorderYWidth = g(v.borderTopWidth) + g(v.borderBottomWidth)),
        e(this.scrollbarYRail, { display: "block" }),
        (this.railYMarginHeight = g(v.marginTop) + g(v.marginBottom)),
        e(this.scrollbarYRail, { display: "" }),
        (this.railYHeight = null),
        (this.railYRatio = null),
        (this.reach = {
          x: r.scrollLeft <= 0 ? "start" : r.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
          y: r.scrollTop <= 0 ? "start" : r.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null,
        }),
        (this.isAlive = !0),
        this.settings.handlers.forEach(function (t) {
          return X[t](l);
        }),
        (this.lastScrollTop = r.scrollTop),
        (this.lastScrollLeft = r.scrollLeft),
        this.event.bind(this.element, "scroll", function (t) {
          return l.onScroll(t);
        }),
        m(this);
    };
  return (
    (W.prototype.update = function () {
      this.isAlive &&
        ((this.negativeScrollAdjustment = this.isNegativeScroll
          ? this.element.scrollWidth - this.element.clientWidth
          : 0),
        e(this.scrollbarXRail, { display: "block" }),
        e(this.scrollbarYRail, { display: "block" }),
        (this.railXMarginWidth = g(t(this.scrollbarXRail).marginLeft) + g(t(this.scrollbarXRail).marginRight)),
        (this.railYMarginHeight = g(t(this.scrollbarYRail).marginTop) + g(t(this.scrollbarYRail).marginBottom)),
        e(this.scrollbarXRail, { display: "none" }),
        e(this.scrollbarYRail, { display: "none" }),
        m(this),
        b(this, "top", 0, !1, !0),
        b(this, "left", 0, !1, !0),
        e(this.scrollbarXRail, { display: "" }),
        e(this.scrollbarYRail, { display: "" }));
    }),
    (W.prototype.onScroll = function (t) {
      this.isAlive &&
        (m(this),
        b(this, "top", this.element.scrollTop - this.lastScrollTop),
        b(this, "left", this.element.scrollLeft - this.lastScrollLeft),
        (this.lastScrollTop = this.element.scrollTop),
        (this.lastScrollLeft = this.element.scrollLeft));
    }),
    (W.prototype.destroy = function () {
      this.isAlive &&
        (this.event.unbindAll(),
        l(this.scrollbarX),
        l(this.scrollbarY),
        l(this.scrollbarXRail),
        l(this.scrollbarYRail),
        this.removePsClasses(),
        (this.element = null),
        (this.scrollbarX = null),
        (this.scrollbarY = null),
        (this.scrollbarXRail = null),
        (this.scrollbarYRail = null),
        (this.isAlive = !1));
    }),
    (W.prototype.removePsClasses = function () {
      this.element.className = this.element.className
        .split(" ")
        .filter(function (t) {
          return !t.match(/^ps([-_].+|)$/);
        })
        .join(" ");
    }),
    W
  );
});
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define(t)
    : ((e = e || self).barba = t());
})(this, function () {
  function e(e, t) {
    for (var r = 0; r < t.length; r++) {
      var n = t[r];
      (n.enumerable = n.enumerable || !1),
        (n.configurable = !0),
        "value" in n && (n.writable = !0),
        Object.defineProperty(e, n.key, n);
    }
  }
  function t(t, r, n) {
    return r && e(t.prototype, r), n && e(t, n), t;
  }
  function r() {
    return (r =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
        }
        return e;
      }).apply(this, arguments);
  }
  function n(e, t) {
    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
  }
  function o(e) {
    return (o = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (e) {
          return e.__proto__ || Object.getPrototypeOf(e);
        })(e);
  }
  function i(e, t) {
    return (i =
      Object.setPrototypeOf ||
      function (e, t) {
        return (e.__proto__ = t), e;
      })(e, t);
  }
  function s(e, t, r) {
    return (s = (function () {
      if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
      if (Reflect.construct.sham) return !1;
      if ("function" == typeof Proxy) return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
      } catch (e) {
        return !1;
      }
    })()
      ? Reflect.construct
      : function (e, t, r) {
          var n = [null];
          n.push.apply(n, t);
          var o = new (Function.bind.apply(e, n))();
          return r && i(o, r.prototype), o;
        }).apply(null, arguments);
  }
  function a(e) {
    var t = "function" == typeof Map ? new Map() : void 0;
    return (a = function (e) {
      if (null === e || -1 === Function.toString.call(e).indexOf("[native code]")) return e;
      if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t) {
        if (t.has(e)) return t.get(e);
        t.set(e, r);
      }
      function r() {
        return s(e, arguments, o(this).constructor);
      }
      return (
        (r.prototype = Object.create(e.prototype, {
          constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 },
        })),
        i(r, e)
      );
    })(e);
  }
  function u(e, t) {
    try {
      var r = e();
    } catch (e) {
      return t(e);
    }
    return r && r.then ? r.then(void 0, t) : r;
  }
  "undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))),
    "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
  var c,
    h,
    f = "2.9.7";
  ((h = c || (c = {}))[(h.off = 0)] = "off"),
    (h[(h.error = 1)] = "error"),
    (h[(h.warning = 2)] = "warning"),
    (h[(h.info = 3)] = "info"),
    (h[(h.debug = 4)] = "debug");
  var l = c.off,
    p = (function () {
      function e(e) {
        this.t = e;
      }
      (e.getLevel = function () {
        return l;
      }),
        (e.setLevel = function (e) {
          return (l = c[e]);
        });
      var t = e.prototype;
      return (
        (t.error = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          this.i(console.error, c.error, t);
        }),
        (t.warn = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          this.i(console.warn, c.warning, t);
        }),
        (t.info = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          this.i(console.info, c.info, t);
        }),
        (t.debug = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          this.i(console.log, c.debug, t);
        }),
        (t.i = function (t, r, n) {
          r <= e.getLevel() && t.apply(console, ["[" + this.t + "] "].concat(n));
        }),
        e
      );
    })(),
    v = S,
    d = x,
    m = P,
    g = E,
    y = A,
    w = "/",
    b = new RegExp(
      ["(\\\\.)", "(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?"].join("|"),
      "g"
    );
  function P(e, t) {
    for (
      var r, n = [], o = 0, i = 0, s = "", a = (t && t.delimiter) || w, u = (t && t.whitelist) || void 0, c = !1;
      null !== (r = b.exec(e));

    ) {
      var h = r[0],
        f = r[1],
        l = r.index;
      if (((s += e.slice(i, l)), (i = l + h.length), f)) (s += f[1]), (c = !0);
      else {
        var p = "",
          v = r[2],
          d = r[3],
          m = r[4],
          g = r[5];
        if (!c && s.length) {
          var y = s.length - 1,
            P = s[y];
          (!u || u.indexOf(P) > -1) && ((p = P), (s = s.slice(0, y)));
        }
        s && (n.push(s), (s = ""), (c = !1));
        var x = d || m,
          E = p || a;
        n.push({
          name: v || o++,
          prefix: p,
          delimiter: E,
          optional: "?" === g || "*" === g,
          repeat: "+" === g || "*" === g,
          pattern: x ? ((j = x), j.replace(/([=!:$/()])/g, "\\$1")) : "[^" + k(E === a ? E : E + a) + "]+?",
        });
      }
    }
    var j;
    return (s || i < e.length) && n.push(s + e.substr(i)), n;
  }
  function x(e, t) {
    return function (r, n) {
      var o = e.exec(r);
      if (!o) return !1;
      for (var i = o[0], s = o.index, a = {}, u = (n && n.decode) || decodeURIComponent, c = 1; c < o.length; c++)
        if (void 0 !== o[c]) {
          var h = t[c - 1];
          a[h.name] = h.repeat
            ? o[c].split(h.delimiter).map(function (e) {
                return u(e, h);
              })
            : u(o[c], h);
        }
      return { path: i, index: s, params: a };
    };
  }
  function E(e, t) {
    for (var r = new Array(e.length), n = 0; n < e.length; n++)
      "object" == typeof e[n] && (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", j(t)));
    return function (t, n) {
      for (
        var o = "", i = (n && n.encode) || encodeURIComponent, s = !n || !1 !== n.validate, a = 0;
        a < e.length;
        a++
      ) {
        var u = e[a];
        if ("string" != typeof u) {
          var c,
            h = t ? t[u.name] : void 0;
          if (Array.isArray(h)) {
            if (!u.repeat) throw new TypeError('Expected "' + u.name + '" to not repeat, but got array');
            if (0 === h.length) {
              if (u.optional) continue;
              throw new TypeError('Expected "' + u.name + '" to not be empty');
            }
            for (var f = 0; f < h.length; f++) {
              if (((c = i(h[f], u)), s && !r[a].test(c)))
                throw new TypeError('Expected all "' + u.name + '" to match "' + u.pattern + '"');
              o += (0 === f ? u.prefix : u.delimiter) + c;
            }
          } else if ("string" != typeof h && "number" != typeof h && "boolean" != typeof h) {
            if (!u.optional)
              throw new TypeError('Expected "' + u.name + '" to be ' + (u.repeat ? "an array" : "a string"));
          } else {
            if (((c = i(String(h), u)), s && !r[a].test(c)))
              throw new TypeError('Expected "' + u.name + '" to match "' + u.pattern + '", but got "' + c + '"');
            o += u.prefix + c;
          }
        } else o += u;
      }
      return o;
    };
  }
  function k(e) {
    return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
  }
  function j(e) {
    return e && e.sensitive ? "" : "i";
  }
  function A(e, t, r) {
    for (
      var n = (r = r || {}).strict,
        o = !1 !== r.start,
        i = !1 !== r.end,
        s = r.delimiter || w,
        a = []
          .concat(r.endsWith || [])
          .map(k)
          .concat("$")
          .join("|"),
        u = o ? "^" : "",
        c = 0;
      c < e.length;
      c++
    ) {
      var h = e[c];
      if ("string" == typeof h) u += k(h);
      else {
        var f = h.repeat ? "(?:" + h.pattern + ")(?:" + k(h.delimiter) + "(?:" + h.pattern + "))*" : h.pattern;
        t && t.push(h),
          (u += h.optional
            ? h.prefix
              ? "(?:" + k(h.prefix) + "(" + f + "))?"
              : "(" + f + ")?"
            : k(h.prefix) + "(" + f + ")");
      }
    }
    if (i) n || (u += "(?:" + k(s) + ")?"), (u += "$" === a ? "$" : "(?=" + a + ")");
    else {
      var l = e[e.length - 1],
        p = "string" == typeof l ? l[l.length - 1] === s : void 0 === l;
      n || (u += "(?:" + k(s) + "(?=" + a + "))?"), p || (u += "(?=" + k(s) + "|" + a + ")");
    }
    return new RegExp(u, j(r));
  }
  function S(e, t, r) {
    return e instanceof RegExp
      ? (function (e, t) {
          if (!t) return e;
          var r = e.source.match(/\((?!\?)/g);
          if (r)
            for (var n = 0; n < r.length; n++)
              t.push({ name: n, prefix: null, delimiter: null, optional: !1, repeat: !1, pattern: null });
          return e;
        })(e, t)
      : Array.isArray(e)
      ? (function (e, t, r) {
          for (var n = [], o = 0; o < e.length; o++) n.push(S(e[o], t, r).source);
          return new RegExp("(?:" + n.join("|") + ")", j(r));
        })(e, t, r)
      : ((n = t), A(P(e, (o = r)), n, o));
    var n, o;
  }
  (v.match = function (e, t) {
    var r = [];
    return x(S(e, r, t), r);
  }),
    (v.regexpToFunction = d),
    (v.parse = m),
    (v.compile = function (e, t) {
      return E(P(e, t), t);
    }),
    (v.tokensToFunction = g),
    (v.tokensToRegExp = y);
  var R = {
      container: "container",
      history: "history",
      namespace: "namespace",
      prefix: "data-barba",
      prevent: "prevent",
      wrapper: "wrapper",
    },
    O = new ((function () {
      function e() {
        (this.o = R), (this.u = new DOMParser());
      }
      var t = e.prototype;
      return (
        (t.toString = function (e) {
          return e.outerHTML;
        }),
        (t.toDocument = function (e) {
          return this.u.parseFromString(e, "text/html");
        }),
        (t.toElement = function (e) {
          var t = document.createElement("div");
          return (t.innerHTML = e), t;
        }),
        (t.getHtml = function (e) {
          return void 0 === e && (e = document), this.toString(e.documentElement);
        }),
        (t.getWrapper = function (e) {
          return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.wrapper + '"]');
        }),
        (t.getContainer = function (e) {
          return void 0 === e && (e = document), e.querySelector("[" + this.o.prefix + '="' + this.o.container + '"]');
        }),
        (t.removeContainer = function (e) {
          document.body.contains(e) && e.parentNode.removeChild(e);
        }),
        (t.addContainer = function (e, t) {
          var r = this.getContainer();
          r ? this.s(e, r) : t.appendChild(e);
        }),
        (t.getNamespace = function (e) {
          void 0 === e && (e = document);
          var t = e.querySelector("[" + this.o.prefix + "-" + this.o.namespace + "]");
          return t ? t.getAttribute(this.o.prefix + "-" + this.o.namespace) : null;
        }),
        (t.getHref = function (e) {
          if (e.tagName && "a" === e.tagName.toLowerCase()) {
            if ("string" == typeof e.href) return e.href;
            var t = e.getAttribute("href") || e.getAttribute("xlink:href");
            if (t) return this.resolveUrl(t.baseVal || t);
          }
          return null;
        }),
        (t.resolveUrl = function () {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          var n = t.length;
          if (0 === n) throw new Error("resolveUrl requires at least one argument; got none.");
          var o = document.createElement("base");
          if (((o.href = arguments[0]), 1 === n)) return o.href;
          var i = document.getElementsByTagName("head")[0];
          i.insertBefore(o, i.firstChild);
          for (var s, a = document.createElement("a"), u = 1; u < n; u++)
            (a.href = arguments[u]), (o.href = s = a.href);
          return i.removeChild(o), s;
        }),
        (t.s = function (e, t) {
          t.parentNode.insertBefore(e, t.nextSibling);
        }),
        e
      );
    })())(),
    L = new ((function () {
      function e() {
        (this.h = []), (this.v = -1);
      }
      var n = e.prototype;
      return (
        (n.init = function (e, t) {
          this.l = "barba";
          var r = { ns: t, scroll: { x: window.scrollX, y: window.scrollY }, url: e };
          this.h.push(r), (this.v = 0);
          var n = { from: this.l, index: 0, states: [].concat(this.h) };
          window.history && window.history.replaceState(n, "", e);
        }),
        (n.change = function (e, t, r) {
          if (r && r.state) {
            var n = r.state,
              o = n.index;
            (t = this.m(this.v - o)), this.replace(n.states), (this.v = o);
          } else this.add(e, t);
          return t;
        }),
        (n.add = function (e, t) {
          var r = this.size,
            n = this.p(t),
            o = { ns: "tmp", scroll: { x: window.scrollX, y: window.scrollY }, url: e };
          this.h.push(o), (this.v = r);
          var i = { from: this.l, index: r, states: [].concat(this.h) };
          switch (n) {
            case "push":
              window.history && window.history.pushState(i, "", e);
              break;
            case "replace":
              window.history && window.history.replaceState(i, "", e);
          }
        }),
        (n.update = function (e, t) {
          var n = t || this.v,
            o = r({}, this.get(n), {}, e);
          this.set(n, o);
        }),
        (n.remove = function (e) {
          e ? this.h.splice(e, 1) : this.h.pop(), this.v--;
        }),
        (n.clear = function () {
          (this.h = []), (this.v = -1);
        }),
        (n.replace = function (e) {
          this.h = e;
        }),
        (n.get = function (e) {
          return this.h[e];
        }),
        (n.set = function (e, t) {
          return (this.h[e] = t);
        }),
        (n.p = function (e) {
          var t = "push",
            r = e,
            n = R.prefix + "-" + R.history;
          return r.hasAttribute && r.hasAttribute(n) && (t = r.getAttribute(n)), t;
        }),
        (n.m = function (e) {
          return Math.abs(e) > 1 ? (e > 0 ? "forward" : "back") : 0 === e ? "popstate" : e > 0 ? "back" : "forward";
        }),
        t(e, [
          {
            key: "current",
            get: function () {
              return this.h[this.v];
            },
          },
          {
            key: "state",
            get: function () {
              return this.h[this.h.length - 1];
            },
          },
          {
            key: "previous",
            get: function () {
              return this.v < 1 ? null : this.h[this.v - 1];
            },
          },
          {
            key: "size",
            get: function () {
              return this.h.length;
            },
          },
        ]),
        e
      );
    })())(),
    T = function (e, t) {
      try {
        var r = (function () {
          if (!t.next.html)
            return Promise.resolve(e).then(function (e) {
              var r = t.next;
              if (e) {
                var n = O.toElement(e);
                (r.namespace = O.getNamespace(n)),
                  (r.container = O.getContainer(n)),
                  (r.html = e),
                  L.update({ ns: r.namespace });
                var o = O.toDocument(e);
                document.title = o.title;
              }
            });
        })();
        return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
      } catch (e) {
        return Promise.reject(e);
      }
    },
    q = v,
    _ = {
      __proto__: null,
      update: T,
      nextTick: function () {
        return new Promise(function (e) {
          window.requestAnimationFrame(e);
        });
      },
      pathToRegexp: q,
    },
    H = function () {
      return window.location.origin;
    },
    M = function (e) {
      return void 0 === e && (e = window.location.href), C(e).port;
    },
    C = function (e) {
      var t,
        r = e.match(/:\d+/);
      if (null === r) /^http/.test(e) && (t = 80), /^https/.test(e) && (t = 443);
      else {
        var n = r[0].substring(1);
        t = parseInt(n, 10);
      }
      var o,
        i = e.replace(H(), ""),
        s = {},
        a = i.indexOf("#");
      a >= 0 && ((o = i.slice(a + 1)), (i = i.slice(0, a)));
      var u = i.indexOf("?");
      return u >= 0 && ((s = N(i.slice(u + 1))), (i = i.slice(0, u))), { hash: o, path: i, port: t, query: s };
    },
    N = function (e) {
      return e.split("&").reduce(function (e, t) {
        var r = t.split("=");
        return (e[r[0]] = r[1]), e;
      }, {});
    },
    B = function (e) {
      return void 0 === e && (e = window.location.href), e.replace(/(\/#.*|\/|#.*)$/, "");
    },
    I = {
      __proto__: null,
      getHref: function () {
        return window.location.href;
      },
      getOrigin: H,
      getPort: M,
      getPath: function (e) {
        return void 0 === e && (e = window.location.href), C(e).path;
      },
      parse: C,
      parseQuery: N,
      clean: B,
    };
  function D(e, t, r) {
    return (
      void 0 === t && (t = 2e3),
      new Promise(function (n, o) {
        var i = new XMLHttpRequest();
        (i.onreadystatechange = function () {
          if (i.readyState === XMLHttpRequest.DONE)
            if (200 === i.status) n(i.responseText);
            else if (i.status) {
              var t = { status: i.status, statusText: i.statusText };
              r(e, t), o(t);
            }
        }),
          (i.ontimeout = function () {
            var n = new Error("Timeout error [" + t + "]");
            r(e, n), o(n);
          }),
          (i.onerror = function () {
            var t = new Error("Fetch error");
            r(e, t), o(t);
          }),
          i.open("GET", e),
          (i.timeout = t),
          i.setRequestHeader("Accept", "text/html,application/xhtml+xml,application/xml"),
          i.setRequestHeader("x-barba", "yes"),
          i.send();
      })
    );
  }
  var U = function (e) {
    return !!e && ("object" == typeof e || "function" == typeof e) && "function" == typeof e.then;
  };
  function $(e, t) {
    return (
      void 0 === t && (t = {}),
      function () {
        for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
        var i = !1;
        return new Promise(function (r, o) {
          t.async = function () {
            return (
              (i = !0),
              function (e, t) {
                e ? o(e) : r(t);
              }
            );
          };
          var s = e.apply(t, n);
          i || (U(s) ? s.then(r, o) : r(s));
        });
      }
    );
  }
  var F = new ((function (e) {
      function t() {
        var t;
        return (
          ((t = e.call(this) || this).logger = new p("@barba/core")),
          (t.all = [
            "ready",
            "page",
            "reset",
            "currentAdded",
            "currentRemoved",
            "nextAdded",
            "nextRemoved",
            "beforeOnce",
            "once",
            "afterOnce",
            "before",
            "beforeLeave",
            "leave",
            "afterLeave",
            "beforeEnter",
            "enter",
            "afterEnter",
            "after",
          ]),
          (t.registered = new Map()),
          t.init(),
          t
        );
      }
      n(t, e);
      var r = t.prototype;
      return (
        (r.init = function () {
          var e = this;
          this.registered.clear(),
            this.all.forEach(function (t) {
              e[t] ||
                (e[t] = function (r, n) {
                  e.registered.has(t) || e.registered.set(t, new Set()),
                    e.registered.get(t).add({ ctx: n || {}, fn: r });
                });
            });
        }),
        (r.do = function (e) {
          for (var t = this, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            n[o - 1] = arguments[o];
          if (this.registered.has(e)) {
            var i = Promise.resolve();
            return (
              this.registered.get(e).forEach(function (e) {
                i = i.then(function () {
                  return $(e.fn, e.ctx).apply(void 0, n);
                });
              }),
              i.catch(function (r) {
                t.logger.debug("Hook error [" + e + "]"), t.logger.error(r);
              })
            );
          }
          return Promise.resolve();
        }),
        (r.clear = function () {
          var e = this;
          this.all.forEach(function (t) {
            delete e[t];
          }),
            this.init();
        }),
        (r.help = function () {
          this.logger.info("Available hooks: " + this.all.join(","));
          var e = [];
          this.registered.forEach(function (t, r) {
            return e.push(r);
          }),
            this.logger.info("Registered hooks: " + e.join(","));
        }),
        t
      );
    })(function () {}))(),
    W = (function () {
      function e(e) {
        if (((this.P = []), "boolean" == typeof e)) this.g = e;
        else {
          var t = Array.isArray(e) ? e : [e];
          this.P = t.map(function (e) {
            return q(e);
          });
        }
      }
      return (
        (e.prototype.checkHref = function (e) {
          if ("boolean" == typeof this.g) return this.g;
          var t = C(e).path;
          return this.P.some(function (e) {
            return null !== e.exec(t);
          });
        }),
        e
      );
    })(),
    K = (function (e) {
      function t(t) {
        var r;
        return ((r = e.call(this, t) || this).k = new Map()), r;
      }
      n(t, e);
      var o = t.prototype;
      return (
        (o.set = function (e, t, r) {
          return this.k.set(e, { action: r, request: t }), { action: r, request: t };
        }),
        (o.get = function (e) {
          return this.k.get(e);
        }),
        (o.getRequest = function (e) {
          return this.k.get(e).request;
        }),
        (o.getAction = function (e) {
          return this.k.get(e).action;
        }),
        (o.has = function (e) {
          return !this.checkHref(e) && this.k.has(e);
        }),
        (o.delete = function (e) {
          return this.k.delete(e);
        }),
        (o.update = function (e, t) {
          var n = r({}, this.k.get(e), {}, t);
          return this.k.set(e, n), n;
        }),
        t
      );
    })(W),
    X = function () {
      return !window.history.pushState;
    },
    z = function (e) {
      return !e.el || !e.href;
    },
    Y = function (e) {
      var t = e.event;
      return t.which > 1 || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey;
    },
    G = function (e) {
      var t = e.el;
      return t.hasAttribute("target") && "_blank" === t.target;
    },
    Q = function (e) {
      var t = e.el;
      return (
        (void 0 !== t.protocol && window.location.protocol !== t.protocol) ||
        (void 0 !== t.hostname && window.location.hostname !== t.hostname)
      );
    },
    V = function (e) {
      var t = e.el;
      return void 0 !== t.port && M() !== M(t.href);
    },
    J = function (e) {
      var t = e.el;
      return t.getAttribute && "string" == typeof t.getAttribute("download");
    },
    Z = function (e) {
      return e.el.hasAttribute(R.prefix + "-" + R.prevent);
    },
    ee = function (e) {
      return Boolean(e.el.closest("[" + R.prefix + "-" + R.prevent + '="all"]'));
    },
    te = function (e) {
      var t = e.href;
      return B(t) === B() && M(t) === M();
    },
    re = (function (e) {
      function t(t) {
        var r;
        return ((r = e.call(this, t) || this).suite = []), (r.tests = new Map()), r.init(), r;
      }
      n(t, e);
      var r = t.prototype;
      return (
        (r.init = function () {
          this.add("pushState", X),
            this.add("exists", z),
            this.add("newTab", Y),
            this.add("blank", G),
            this.add("corsDomain", Q),
            this.add("corsPort", V),
            this.add("download", J),
            this.add("preventSelf", Z),
            this.add("preventAll", ee),
            this.add("sameUrl", te, !1);
        }),
        (r.add = function (e, t, r) {
          void 0 === r && (r = !0), this.tests.set(e, t), r && this.suite.push(e);
        }),
        (r.run = function (e, t, r, n) {
          return this.tests.get(e)({ el: t, event: r, href: n });
        }),
        (r.checkLink = function (e, t, r) {
          var n = this;
          return this.suite.some(function (o) {
            return n.run(o, e, t, r);
          });
        }),
        t
      );
    })(W),
    ne = (function (e) {
      function t(r, n) {
        var o;
        void 0 === n && (n = "Barba error");
        for (var i = arguments.length, s = new Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) s[a - 2] = arguments[a];
        return (
          ((o = e.call.apply(e, [this].concat(s)) || this).error = r),
          (o.label = n),
          Error.captureStackTrace &&
            Error.captureStackTrace(
              (function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
              })(o),
              t
            ),
          (o.name = "BarbaError"),
          o
        );
      }
      return n(t, e), t;
    })(a(Error)),
    oe = (function () {
      function e(e) {
        void 0 === e && (e = []),
          (this.logger = new p("@barba/core")),
          (this.all = []),
          (this.page = []),
          (this.once = []),
          (this.A = [
            { name: "namespace", type: "strings" },
            { name: "custom", type: "function" },
          ]),
          e && (this.all = this.all.concat(e)),
          this.update();
      }
      var t = e.prototype;
      return (
        (t.add = function (e, t) {
          switch (e) {
            case "rule":
              this.A.splice(t.position || 0, 0, t.value);
              break;
            case "transition":
            default:
              this.all.push(t);
          }
          this.update();
        }),
        (t.resolve = function (e, t) {
          var r = this;
          void 0 === t && (t = {});
          var n = t.once ? this.once : this.page;
          n = n.filter(
            t.self
              ? function (e) {
                  return e.name && "self" === e.name;
                }
              : function (e) {
                  return !e.name || "self" !== e.name;
                }
          );
          var o = new Map(),
            i = n.find(function (n) {
              var i = !0,
                s = {};
              return (
                !(!t.self || "self" !== n.name) ||
                (r.A.reverse().forEach(function (t) {
                  i &&
                    ((i = r.R(n, t, e, s)),
                    n.from && n.to && (i = r.R(n, t, e, s, "from") && r.R(n, t, e, s, "to")),
                    n.from && !n.to && (i = r.R(n, t, e, s, "from")),
                    !n.from && n.to && (i = r.R(n, t, e, s, "to")));
                }),
                o.set(n, s),
                i)
              );
            }),
            s = o.get(i),
            a = [];
          if ((a.push(t.once ? "once" : "page"), t.self && a.push("self"), s)) {
            var u,
              c = [i];
            Object.keys(s).length > 0 && c.push(s),
              (u = this.logger).info.apply(u, ["Transition found [" + a.join(",") + "]"].concat(c));
          } else this.logger.info("No transition found [" + a.join(",") + "]");
          return i;
        }),
        (t.update = function () {
          var e = this;
          (this.all = this.all
            .map(function (t) {
              return e.T(t);
            })
            .sort(function (e, t) {
              return e.priority - t.priority;
            })
            .reverse()
            .map(function (e) {
              return delete e.priority, e;
            })),
            (this.page = this.all.filter(function (e) {
              return void 0 !== e.leave || void 0 !== e.enter;
            })),
            (this.once = this.all.filter(function (e) {
              return void 0 !== e.once;
            }));
        }),
        (t.R = function (e, t, r, n, o) {
          var i = !0,
            s = !1,
            a = e,
            u = t.name,
            c = u,
            h = u,
            f = u,
            l = o ? a[o] : a,
            p = "to" === o ? r.next : r.current;
          if (o ? l && l[u] : l[u]) {
            switch (t.type) {
              case "strings":
              default:
                var v = Array.isArray(l[c]) ? l[c] : [l[c]];
                p[c] && -1 !== v.indexOf(p[c]) && (s = !0), -1 === v.indexOf(p[c]) && (i = !1);
                break;
              case "object":
                var d = Array.isArray(l[h]) ? l[h] : [l[h]];
                p[h]
                  ? (p[h].name && -1 !== d.indexOf(p[h].name) && (s = !0), -1 === d.indexOf(p[h].name) && (i = !1))
                  : (i = !1);
                break;
              case "function":
                l[f](r) ? (s = !0) : (i = !1);
            }
            s && (o ? ((n[o] = n[o] || {}), (n[o][u] = a[o][u])) : (n[u] = a[u]));
          }
          return i;
        }),
        (t.O = function (e, t, r) {
          var n = 0;
          return (
            (e[t] || (e.from && e.from[t]) || (e.to && e.to[t])) &&
              ((n += Math.pow(10, r)), e.from && e.from[t] && (n += 1), e.to && e.to[t] && (n += 2)),
            n
          );
        }),
        (t.T = function (e) {
          var t = this;
          e.priority = 0;
          var r = 0;
          return (
            this.A.forEach(function (n, o) {
              r += t.O(e, n.name, o + 1);
            }),
            (e.priority = r),
            e
          );
        }),
        e
      );
    })(),
    ie = (function () {
      function e(e) {
        void 0 === e && (e = []), (this.logger = new p("@barba/core")), (this.S = !1), (this.store = new oe(e));
      }
      var r = e.prototype;
      return (
        (r.get = function (e, t) {
          return this.store.resolve(e, t);
        }),
        (r.doOnce = function (e) {
          var t = e.data,
            r = e.transition;
          try {
            var n = function () {
                o.S = !1;
              },
              o = this,
              i = r || {};
            o.S = !0;
            var s = u(
              function () {
                return Promise.resolve(o.j("beforeOnce", t, i)).then(function () {
                  return Promise.resolve(o.once(t, i)).then(function () {
                    return Promise.resolve(o.j("afterOnce", t, i)).then(function () {});
                  });
                });
              },
              function (e) {
                (o.S = !1), o.logger.debug("Transition error [before/after/once]"), o.logger.error(e);
              }
            );
            return Promise.resolve(s && s.then ? s.then(n) : n());
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.doPage = function (e) {
          var t = e.data,
            r = e.transition,
            n = e.page,
            o = e.wrapper;
          try {
            var i = function (e) {
                if (s) return e;
                a.S = !1;
              },
              s = !1,
              a = this,
              c = r || {},
              h = !0 === c.sync || !1;
            a.S = !0;
            var f = u(
              function () {
                function e() {
                  return Promise.resolve(a.j("before", t, c)).then(function () {
                    var e = !1;
                    function r(r) {
                      return e
                        ? r
                        : Promise.resolve(a.remove(t)).then(function () {
                            return Promise.resolve(a.j("after", t, c)).then(function () {});
                          });
                    }
                    var i = (function () {
                      if (h)
                        return u(
                          function () {
                            return Promise.resolve(a.add(t, o)).then(function () {
                              return Promise.resolve(a.j("beforeLeave", t, c)).then(function () {
                                return Promise.resolve(a.j("beforeEnter", t, c)).then(function () {
                                  return Promise.resolve(Promise.all([a.leave(t, c), a.enter(t, c)])).then(function () {
                                    return Promise.resolve(a.j("afterLeave", t, c)).then(function () {
                                      return Promise.resolve(a.j("afterEnter", t, c)).then(function () {});
                                    });
                                  });
                                });
                              });
                            });
                          },
                          function (e) {
                            if (a.M(e)) throw new ne(e, "Transition error [sync]");
                          }
                        );
                      var r = function (r) {
                          return e
                            ? r
                            : u(
                                function () {
                                  var e = (function () {
                                    if (!1 !== i)
                                      return Promise.resolve(a.add(t, o)).then(function () {
                                        return Promise.resolve(a.j("beforeEnter", t, c)).then(function () {
                                          return Promise.resolve(a.enter(t, c, i)).then(function () {
                                            return Promise.resolve(a.j("afterEnter", t, c)).then(function () {});
                                          });
                                        });
                                      });
                                  })();
                                  if (e && e.then) return e.then(function () {});
                                },
                                function (e) {
                                  if (a.M(e)) throw new ne(e, "Transition error [before/after/enter]");
                                }
                              );
                        },
                        i = !1,
                        s = u(
                          function () {
                            return Promise.resolve(a.j("beforeLeave", t, c)).then(function () {
                              return Promise.resolve(
                                Promise.all([a.leave(t, c), T(n, t)]).then(function (e) {
                                  return e[0];
                                })
                              ).then(function (e) {
                                return (i = e), Promise.resolve(a.j("afterLeave", t, c)).then(function () {});
                              });
                            });
                          },
                          function (e) {
                            if (a.M(e)) throw new ne(e, "Transition error [before/after/leave]");
                          }
                        );
                      return s && s.then ? s.then(r) : r(s);
                    })();
                    return i && i.then ? i.then(r) : r(i);
                  });
                }
                var r = (function () {
                  if (h) return Promise.resolve(T(n, t)).then(function () {});
                })();
                return r && r.then ? r.then(e) : e();
              },
              function (e) {
                if (((a.S = !1), e.name && "BarbaError" === e.name))
                  throw (a.logger.debug(e.label), a.logger.error(e.error), e);
                throw (a.logger.debug("Transition error [page]"), a.logger.error(e), e);
              }
            );
            return Promise.resolve(f && f.then ? f.then(i) : i(f));
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.once = function (e, t) {
          try {
            return Promise.resolve(F.do("once", e, t)).then(function () {
              return t.once ? $(t.once, t)(e) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.leave = function (e, t) {
          try {
            return Promise.resolve(F.do("leave", e, t)).then(function () {
              return t.leave ? $(t.leave, t)(e) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.enter = function (e, t, r) {
          try {
            return Promise.resolve(F.do("enter", e, t)).then(function () {
              return t.enter ? $(t.enter, t)(e, r) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.add = function (e, t) {
          try {
            return O.addContainer(e.next.container, t), F.do("nextAdded", e), Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.remove = function (e) {
          try {
            return O.removeContainer(e.current.container), F.do("currentRemoved", e), Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        (r.M = function (e) {
          return e.message ? !/Timeout error|Fetch error/.test(e.message) : !e.status;
        }),
        (r.j = function (e, t, r) {
          try {
            return Promise.resolve(F.do(e, t, r)).then(function () {
              return r[e] ? $(r[e], r)(t) : Promise.resolve();
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }),
        t(e, [
          {
            key: "isRunning",
            get: function () {
              return this.S;
            },
            set: function (e) {
              this.S = e;
            },
          },
          {
            key: "hasOnce",
            get: function () {
              return this.store.once.length > 0;
            },
          },
          {
            key: "hasSelf",
            get: function () {
              return this.store.all.some(function (e) {
                return "self" === e.name;
              });
            },
          },
          {
            key: "shouldWait",
            get: function () {
              return this.store.all.some(function (e) {
                return (e.to && !e.to.route) || e.sync;
              });
            },
          },
        ]),
        e
      );
    })(),
    se = (function () {
      function e(e) {
        var t = this;
        (this.names = ["beforeLeave", "afterLeave", "beforeEnter", "afterEnter"]),
          (this.byNamespace = new Map()),
          0 !== e.length &&
            (e.forEach(function (e) {
              t.byNamespace.set(e.namespace, e);
            }),
            this.names.forEach(function (e) {
              F[e](t.L(e));
            }));
      }
      return (
        (e.prototype.L = function (e) {
          var t = this;
          return function (r) {
            var n = e.match(/enter/i) ? r.next : r.current,
              o = t.byNamespace.get(n.namespace);
            return o && o[e] ? $(o[e], o)(r) : Promise.resolve();
          };
        }),
        e
      );
    })();
  Element.prototype.matches ||
    (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector),
    Element.prototype.closest ||
      (Element.prototype.closest = function (e) {
        var t = this;
        do {
          if (t.matches(e)) return t;
          t = t.parentElement || t.parentNode;
        } while (null !== t && 1 === t.nodeType);
        return null;
      });
  var ae = { container: null, html: "", namespace: "", url: { hash: "", href: "", path: "", port: null, query: {} } };
  return new ((function () {
    function e() {
      (this.version = f),
        (this.schemaPage = ae),
        (this.Logger = p),
        (this.logger = new p("@barba/core")),
        (this.plugins = []),
        (this.hooks = F),
        (this.dom = O),
        (this.helpers = _),
        (this.history = L),
        (this.request = D),
        (this.url = I);
    }
    var n = e.prototype;
    return (
      (n.use = function (e, t) {
        var r = this.plugins;
        r.indexOf(e) > -1
          ? this.logger.warn("Plugin [" + e.name + "] already installed.")
          : "function" == typeof e.install
          ? (e.install(this, t), r.push(e))
          : this.logger.warn("Plugin [" + e.name + '] has no "install" method.');
      }),
      (n.init = function (e) {
        var t = void 0 === e ? {} : e,
          n = t.transitions,
          o = void 0 === n ? [] : n,
          i = t.views,
          s = void 0 === i ? [] : i,
          a = t.schema,
          u = void 0 === a ? R : a,
          c = t.requestError,
          h = t.timeout,
          f = void 0 === h ? 2e3 : h,
          l = t.cacheIgnore,
          v = void 0 !== l && l,
          d = t.prefetchIgnore,
          m = void 0 !== d && d,
          g = t.preventRunning,
          y = void 0 !== g && g,
          w = t.prevent,
          b = void 0 === w ? null : w,
          P = t.debug,
          x = t.logLevel;
        if (
          (p.setLevel(!0 === (void 0 !== P && P) ? "debug" : void 0 === x ? "off" : x),
          this.logger.info(this.version),
          Object.keys(u).forEach(function (e) {
            R[e] && (R[e] = u[e]);
          }),
          (this.$ = c),
          (this.timeout = f),
          (this.cacheIgnore = v),
          (this.prefetchIgnore = m),
          (this.preventRunning = y),
          (this._ = this.dom.getWrapper()),
          !this._)
        )
          throw new Error("[@barba/core] No Barba wrapper found");
        this._.setAttribute("aria-live", "polite"), this.q();
        var E = this.data.current;
        if (!E.container) throw new Error("[@barba/core] No Barba container found");
        if (
          ((this.cache = new K(v)),
          (this.prevent = new re(m)),
          (this.transitions = new ie(o)),
          (this.views = new se(s)),
          null !== b)
        ) {
          if ("function" != typeof b) throw new Error("[@barba/core] Prevent should be a function");
          this.prevent.add("preventCustom", b);
        }
        this.history.init(E.url.href, E.namespace),
          (this.B = this.B.bind(this)),
          (this.U = this.U.bind(this)),
          (this.D = this.D.bind(this)),
          this.F(),
          this.plugins.forEach(function (e) {
            return e.init();
          });
        var k = this.data;
        (k.trigger = "barba"),
          (k.next = k.current),
          (k.current = r({}, this.schemaPage)),
          this.hooks.do("ready", k),
          this.once(k),
          this.q();
      }),
      (n.destroy = function () {
        this.q(), this.H(), this.history.clear(), this.hooks.clear(), (this.plugins = []);
      }),
      (n.force = function (e) {
        window.location.assign(e);
      }),
      (n.go = function (e, t, r) {
        var n;
        if ((void 0 === t && (t = "barba"), this.transitions.isRunning)) this.force(e);
        else if (
          !(n =
            "popstate" === t
              ? this.history.current && this.url.getPath(this.history.current.url) === this.url.getPath(e)
              : this.prevent.run("sameUrl", null, null, e)) ||
          this.transitions.hasSelf
        )
          return (t = this.history.change(e, t, r)), r && (r.stopPropagation(), r.preventDefault()), this.page(e, t, n);
      }),
      (n.once = function (e) {
        try {
          var t = this;
          return Promise.resolve(t.hooks.do("beforeEnter", e)).then(function () {
            function r() {
              return Promise.resolve(t.hooks.do("afterEnter", e)).then(function () {});
            }
            var n = (function () {
              if (t.transitions.hasOnce) {
                var r = t.transitions.get(e, { once: !0 });
                return Promise.resolve(t.transitions.doOnce({ transition: r, data: e })).then(function () {});
              }
            })();
            return n && n.then ? n.then(r) : r();
          });
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (n.page = function (e, t, n) {
        try {
          var o = function () {
              var e = i.data;
              return Promise.resolve(i.hooks.do("page", e)).then(function () {
                var t = u(
                  function () {
                    var t = i.transitions.get(e, { once: !1, self: n });
                    return Promise.resolve(
                      i.transitions.doPage({ data: e, page: s, transition: t, wrapper: i._ })
                    ).then(function () {
                      i.q();
                    });
                  },
                  function () {
                    0 === p.getLevel() && i.force(e.current.url.href);
                  }
                );
                if (t && t.then) return t.then(function () {});
              });
            },
            i = this;
          (i.data.next.url = r({ href: e }, i.url.parse(e))), (i.data.trigger = t);
          var s = i.cache.has(e)
              ? i.cache.update(e, { action: "click" }).request
              : i.cache.set(e, i.request(e, i.timeout, i.onRequestError.bind(i, t)), "click").request,
            a = (function () {
              if (i.transitions.shouldWait) return Promise.resolve(T(s, i.data)).then(function () {});
            })();
          return Promise.resolve(a && a.then ? a.then(o) : o());
        } catch (e) {
          return Promise.reject(e);
        }
      }),
      (n.onRequestError = function (e) {
        this.transitions.isRunning = !1;
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        var o = r[0],
          i = r[1],
          s = this.cache.getAction(o);
        return this.cache.delete(o), !((this.$ && !1 === this.$(e, s, o, i)) || ("click" === s && this.force(o), 1));
      }),
      (n.prefetch = function (e) {
        var t = this;
        this.cache.has(e) ||
          this.cache.set(
            e,
            this.request(e, this.timeout, this.onRequestError.bind(this, "barba")).catch(function (e) {
              t.logger.error(e);
            }),
            "prefetch"
          );
      }),
      (n.F = function () {
        !0 !== this.prefetchIgnore &&
          (document.addEventListener("mouseover", this.B), document.addEventListener("touchstart", this.B)),
          document.addEventListener("click", this.U),
          window.addEventListener("popstate", this.D);
      }),
      (n.H = function () {
        !0 !== this.prefetchIgnore &&
          (document.removeEventListener("mouseover", this.B), document.removeEventListener("touchstart", this.B)),
          document.removeEventListener("click", this.U),
          window.removeEventListener("popstate", this.D);
      }),
      (n.B = function (e) {
        var t = this,
          r = this.I(e);
        if (r) {
          var n = this.dom.getHref(r);
          this.prevent.checkHref(n) ||
            this.cache.has(n) ||
            this.cache.set(
              n,
              this.request(n, this.timeout, this.onRequestError.bind(this, r)).catch(function (e) {
                t.logger.error(e);
              }),
              "enter"
            );
        }
      }),
      (n.U = function (e) {
        var t = this.I(e);
        if (t)
          return this.transitions.isRunning && this.preventRunning
            ? (e.preventDefault(), void e.stopPropagation())
            : void this.go(this.dom.getHref(t), t, e);
      }),
      (n.D = function (e) {
        this.go(this.url.getHref(), "popstate", e);
      }),
      (n.I = function (e) {
        for (var t = e.target; t && !this.dom.getHref(t); ) t = t.parentNode;
        if (t && !this.prevent.checkLink(t, e, this.dom.getHref(t))) return t;
      }),
      (n.q = function () {
        var e = this.url.getHref(),
          t = {
            container: this.dom.getContainer(),
            html: this.dom.getHtml(),
            namespace: this.dom.getNamespace(),
            url: r({ href: e }, this.url.parse(e)),
          };
        (this.C = { current: t, next: r({}, this.schemaPage), trigger: void 0 }), this.hooks.do("reset", this.data);
      }),
      t(e, [
        {
          key: "data",
          get: function () {
            return this.C;
          },
        },
        {
          key: "wrapper",
          get: function () {
            return this._;
          },
        },
      ]),
      e
    );
  })())();
});
/*!
 * GSAP 3.7.0
 * https://greensock.com
 *
 * @license Copyright 2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], e)
    : e(((t = t || self).window = t.window || {}));
})(this, function (t) {
  "use strict";
  function e(t, e) {
    (t.prototype = Object.create(e.prototype)), ((t.prototype.constructor = t).__proto__ = e);
  }
  function r(t) {
    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t;
  }
  function i(t) {
    return "string" == typeof t;
  }
  function n(t) {
    return "function" == typeof t;
  }
  function s(t) {
    return "number" == typeof t;
  }
  function a(t) {
    return void 0 === t;
  }
  function o(t) {
    return "object" == typeof t;
  }
  function u(t) {
    return !1 !== t;
  }
  function h() {
    return "undefined" != typeof window;
  }
  function f(t) {
    return n(t) || i(t);
  }
  function l(t) {
    return (vt = ce(t, ne)) && cr;
  }
  function p(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()");
  }
  function c(t, e) {
    return !e && console.warn(t);
  }
  function _(t, e) {
    return (t && (ne[t] = e) && vt && (vt[t] = e)) || ne;
  }
  function d() {
    return 0;
  }
  function m(t) {
    var e,
      r,
      i = t[0];
    if ((o(i) || n(i) || (t = [t]), !(e = (i._gsap || {}).harness))) {
      for (r = le.length; r-- && !le[r].targetTest(i); );
      e = le[r];
    }
    for (r = t.length; r--; ) (t[r] && (t[r]._gsap || (t[r]._gsap = new Ie(t[r], e)))) || t.splice(r, 1);
    return t;
  }
  function g(t) {
    return t._gsap || m(Te(t))[0]._gsap;
  }
  function v(t, e, r) {
    return (r = t[e]) && n(r) ? t[e]() : (a(r) && t.getAttribute && t.getAttribute(e)) || r;
  }
  function y(t, e) {
    return (t = t.split(",")).forEach(e) || t;
  }
  function T(t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  }
  function x(t, e) {
    for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r; );
    return i < r;
  }
  function w() {
    var t,
      e,
      r = ae.length,
      i = ae.slice(0);
    for (oe = {}, t = ae.length = 0; t < r; t++)
      (e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  }
  function b(t, e, r, i) {
    ae.length && w(), t.render(e, r, i), ae.length && w();
  }
  function M(t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(re).length < 2 ? e : i(t) ? t.trim() : t;
  }
  function O(t) {
    return t;
  }
  function k(t, e) {
    for (var r in e) r in t || (t[r] = e[r]);
    return t;
  }
  function A(t, e) {
    for (var r in e) r in t || "duration" === r || "ease" === r || (t[r] = e[r]);
  }
  function C(t, e) {
    for (var r in e)
      "__proto__" !== r &&
        "constructor" !== r &&
        "prototype" !== r &&
        (t[r] = o(e[r]) ? C(t[r] || (t[r] = {}), e[r]) : e[r]);
    return t;
  }
  function D(t, e) {
    var r,
      i = {};
    for (r in t) r in e || (i[r] = t[r]);
    return i;
  }
  function P(t) {
    var e = t.parent || _t,
      r = t.keyframes ? A : k;
    if (u(t.inherit)) for (; e; ) r(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  }
  function S(t, e, r, i) {
    void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
    var n = e._prev,
      s = e._next;
    n ? (n._next = s) : t[r] === e && (t[r] = s),
      s ? (s._prev = n) : t[i] === e && (t[i] = n),
      (e._next = e._prev = e.parent = null);
  }
  function z(t, e) {
    !t.parent || (e && !t.parent.autoRemoveChildren) || t.parent.remove(t), (t._act = 0);
  }
  function R(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0)) for (var r = t; r; ) (r._dirty = 1), (r = r.parent);
    return t;
  }
  function E(t) {
    return t._repeat ? _e(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  }
  function F(t, e) {
    return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur);
  }
  function B(t) {
    return (t._end = T(t._start + (t._tDur / Math.abs(t._ts || t._rts || Xt) || 0)));
  }
  function I(t, e) {
    var r = t._dp;
    return (
      r &&
        r.smoothChildTiming &&
        t._ts &&
        ((t._start = T(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts))),
        B(t),
        r._dirty || R(r, t)),
      t
    );
  }
  function L(t, e) {
    var r;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((r = F(t.rawTime(), e)), (!e._dur || ve(0, e.totalDuration(), r) - e._tTime > Xt) && e.render(r, !0)),
      R(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration()) for (r = t; r._dp; ) 0 <= r.rawTime() && r.totalTime(r._tTime), (r = r._dp);
      t._zTime = -Xt;
    }
  }
  function Y(t, e, r, i) {
    return (
      e.parent && z(e),
      (e._start = T((s(r) ? r : r || t !== _t ? ge(t, r, e) : t._time) + e._delay)),
      (e._end = T(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0))),
      (function (t, e, r, i, n) {
        void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
        var s,
          a = t[i];
        if (n) for (s = e[n]; a && a[n] > s; ) a = a._prev;
        a ? ((e._next = a._next), (a._next = e)) : ((e._next = t[r]), (t[r] = e)),
          e._next ? (e._next._prev = e) : (t[i] = e),
          (e._prev = a),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      de(e) || (t._recent = e),
      i || L(t, e),
      t
    );
  }
  function U(t, e) {
    return (ne.ScrollTrigger || p("scrollTrigger", e)) && ne.ScrollTrigger.create(e, t);
  }
  function N(t, e, r, i) {
    return (
      Ve(t, e),
      t._initted
        ? !r && t._pt && ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) && Tt !== Ae.frame
          ? (ae.push(t), (t._lazy = [e, i]), 1)
          : void 0
        : 1
    );
  }
  function X(t, e, r, i) {
    var n = t._repeat,
      s = T(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !i && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = n ? (n < 0 ? 1e10 : T(s * (n + 1) + t._rDelay * n)) : s),
      a && !i ? I(t, (t._tTime = t._tDur * a)) : t.parent && B(t),
      r || R(t.parent, t),
      t
    );
  }
  function q(t) {
    return t instanceof Ue ? R(t) : X(t, t._dur);
  }
  function V(t, e, r) {
    var i,
      n,
      a = s(e[1]),
      o = (a ? 2 : 1) + (t < 2 ? 0 : 1),
      h = e[o];
    if ((a && (h.duration = e[1]), (h.parent = r), t)) {
      for (i = h, n = r; n && !("immediateRender" in i); )
        (i = n.vars.defaults || {}), (n = u(n.vars.inherit) && n.parent);
      (h.immediateRender = u(i.immediateRender)), t < 2 ? (h.runBackwards = 1) : (h.startAt = e[o - 1]);
    }
    return new We(e[0], h, e[1 + o]);
  }
  function j(t, e) {
    return t || 0 === t ? e(t) : e;
  }
  function Q(t) {
    if ("string" != typeof t) return "";
    var e = ie.exec(t);
    return e ? t.substr(e.index + e[0].length) : "";
  }
  function G(t, e) {
    return (
      t && o(t) && "length" in t && ((!e && !t.length) || (t.length - 1 in t && o(t[0]))) && !t.nodeType && t !== dt
    );
  }
  function W(t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  }
  function H(t) {
    if (n(t)) return t;
    var e = o(t) ? t : { each: t },
      r = Re(e.ease),
      s = e.from || 0,
      a = parseFloat(e.base) || 0,
      u = {},
      h = 0 < s && s < 1,
      f = isNaN(s) || h,
      l = e.axis,
      p = s,
      c = s;
    return (
      i(s) ? (p = c = { center: 0.5, edges: 0.5, end: 1 }[s] || 0) : !h && f && ((p = s[0]), (c = s[1])),
      function (t, i, n) {
        var o,
          h,
          _,
          d,
          m,
          g,
          v,
          y,
          x,
          w = (n || e).length,
          b = u[w];
        if (!b) {
          if (!(x = "auto" === e.grid ? 0 : (e.grid || [1, Nt])[1])) {
            for (v = -Nt; v < (v = n[x++].getBoundingClientRect().left) && x < w; );
            x--;
          }
          for (
            b = u[w] = [],
              o = f ? Math.min(x, w) * p - 0.5 : s % x,
              h = f ? (w * c) / x - 0.5 : (s / x) | 0,
              y = Nt,
              g = v = 0;
            g < w;
            g++
          )
            (_ = (g % x) - o),
              (d = h - ((g / x) | 0)),
              (b[g] = m = l ? Math.abs("y" === l ? d : _) : Qt(_ * _ + d * d)),
              v < m && (v = m),
              m < y && (y = m);
          "random" === s && W(b),
            (b.max = v - y),
            (b.min = y),
            (b.v = w =
              (parseFloat(e.amount) ||
                parseFloat(e.each) * (w < x ? w - 1 : l ? ("y" === l ? w / x : x) : Math.max(x, w / x)) ||
                0) * ("edges" === s ? -1 : 1)),
            (b.b = w < 0 ? a - w : a),
            (b.u = Q(e.amount || e.each) || 0),
            (r = r && w < 0 ? ze(r) : r);
        }
        return (w = (b[t] - b.min) / b.max || 0), T(b.b + (r ? r(w) : w) * b.v) + b.u;
      }
    );
  }
  function Z(t) {
    var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
    return function (r) {
      var i = Math.round(parseFloat(r) / t) * t * e;
      return (i - (i % 1)) / e + (s(r) ? 0 : Q(r));
    };
  }
  function $(t, e) {
    var r,
      i,
      a = Zt(t);
    return (
      !a &&
        o(t) &&
        ((r = a = t.radius || Nt), t.values ? ((t = Te(t.values)), (i = !s(t[0])) && (r *= r)) : (t = Z(t.increment))),
      j(
        e,
        a
          ? n(t)
            ? function (e) {
                return (i = t(e)), Math.abs(i - e) <= r ? i : e;
              }
            : function (e) {
                for (
                  var n, a, o = parseFloat(i ? e.x : e), u = parseFloat(i ? e.y : 0), h = Nt, f = 0, l = t.length;
                  l--;

                )
                  (n = i ? (n = t[l].x - o) * n + (a = t[l].y - u) * a : Math.abs(t[l] - o)) < h && ((h = n), (f = l));
                return (f = !r || h <= r ? t[f] : e), i || f === e || s(e) ? f : f + Q(e);
              }
          : Z(t)
      )
    );
  }
  function J(t, e, r, i) {
    return j(Zt(t) ? !e : !0 === r ? !!(r = 0) : !i, function () {
      return Zt(t)
        ? t[~~(Math.random() * t.length)]
        : (r = r || 1e-5) &&
            (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) &&
            Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + 0.99 * r)) / r) * r * i) / i;
    });
  }
  function K(t, e, r) {
    return j(r, function (r) {
      return t[~~e(r)];
    });
  }
  function tt(t) {
    for (var e, r, i, n, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
      (i = t.indexOf(")", e)),
        (n = "[" === t.charAt(e + 7)),
        (r = t.substr(e + 7, i - e - 7).match(n ? re : $t)),
        (a += t.substr(s, e - s) + J(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5)),
        (s = i + 1);
    return a + t.substr(s, t.length - s);
  }
  function et(t, e, r) {
    var i,
      n,
      s,
      a = t.labels,
      o = Nt;
    for (i in a) (n = a[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && ((s = i), (o = n));
    return s;
  }
  function rt(t) {
    return z(t), t.scrollTrigger && t.scrollTrigger.kill(!1), t.progress() < 1 && we(t, "onInterrupt"), t;
  }
  function it(t, e, r) {
    return (
      ((6 * (t = t < 0 ? t + 1 : 1 < t ? t - 1 : t) < 1
        ? e + (r - e) * t * 6
        : t < 0.5
        ? r
        : 3 * t < 2
        ? e + (r - e) * (2 / 3 - t) * 6
        : e) *
        be +
        0.5) |
      0
    );
  }
  function nt(t, e, r) {
    var i,
      n,
      a,
      o,
      u,
      h,
      f,
      l,
      p,
      c,
      _ = t ? (s(t) ? [t >> 16, (t >> 8) & be, t & be] : 0) : Me.black;
    if (!_) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Me[t])) _ = Me[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            (t =
              "#" +
              (i = t.charAt(1)) +
              i +
              (n = t.charAt(2)) +
              n +
              (a = t.charAt(3)) +
              a +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : "")),
          9 === t.length)
        )
          return [(_ = parseInt(t.substr(1, 6), 16)) >> 16, (_ >> 8) & be, _ & be, parseInt(t.substr(7), 16) / 255];
        _ = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & be, t & be];
      } else if ("hsl" === t.substr(0, 3))
        if (((_ = c = t.match($t)), e)) {
          if (~t.indexOf("=")) return (_ = t.match(Jt)), r && _.length < 4 && (_[3] = 1), _;
        } else
          (o = (+_[0] % 360) / 360),
            (u = _[1] / 100),
            (i = 2 * (h = _[2] / 100) - (n = h <= 0.5 ? h * (u + 1) : h + u - h * u)),
            3 < _.length && (_[3] *= 1),
            (_[0] = it(o + 1 / 3, i, n)),
            (_[1] = it(o, i, n)),
            (_[2] = it(o - 1 / 3, i, n));
      else _ = t.match($t) || Me.transparent;
      _ = _.map(Number);
    }
    return (
      e &&
        !c &&
        ((i = _[0] / be),
        (n = _[1] / be),
        (a = _[2] / be),
        (h = ((f = Math.max(i, n, a)) + (l = Math.min(i, n, a))) / 2),
        f === l
          ? (o = u = 0)
          : ((p = f - l),
            (u = 0.5 < h ? p / (2 - f - l) : p / (f + l)),
            (o = f === i ? (n - a) / p + (n < a ? 6 : 0) : f === n ? (a - i) / p + 2 : (i - n) / p + 4),
            (o *= 60)),
        (_[0] = ~~(o + 0.5)),
        (_[1] = ~~(100 * u + 0.5)),
        (_[2] = ~~(100 * h + 0.5))),
      r && _.length < 4 && (_[3] = 1),
      _
    );
  }
  function st(t) {
    var e = [],
      r = [],
      i = -1;
    return (
      t.split(Oe).forEach(function (t) {
        var n = t.match(Kt) || [];
        e.push.apply(e, n), r.push((i += n.length + 1));
      }),
      (e.c = r),
      e
    );
  }
  function at(t, e, r) {
    var i,
      n,
      s,
      a,
      o = "",
      u = (t + o).match(Oe),
      h = e ? "hsla(" : "rgba(",
      f = 0;
    if (!u) return t;
    if (
      ((u = u.map(function (t) {
        return (t = nt(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")";
      })),
      r && ((s = st(t)), (i = r.c).join(o) !== s.c.join(o)))
    )
      for (a = (n = t.replace(Oe, "1").split(Kt)).length - 1; f < a; f++)
        o += n[f] + (~i.indexOf(f) ? u.shift() || h + "0,0,0,0)" : (s.length ? s : u.length ? u : r).shift());
    if (!n) for (a = (n = t.split(Oe)).length - 1; f < a; f++) o += n[f] + u[f];
    return o + n[a];
  }
  function ot(t) {
    var e,
      r = t.join(" ");
    if (((Oe.lastIndex = 0), Oe.test(r)))
      return (e = ke.test(r)), (t[1] = at(t[1], e)), (t[0] = at(t[0], e, st(t[1]))), !0;
  }
  function ut(t, e) {
    for (var r, i = t._first; i; )
      i instanceof Ue
        ? ut(i, e)
        : !i.vars.yoyoEase ||
          (i._yoyo && i._repeat) ||
          i._yoyo === e ||
          (i.timeline ? ut(i.timeline, e) : ((r = i._ease), (i._ease = i._yEase), (i._yEase = r), (i._yoyo = e))),
        (i = i._next);
  }
  function ht(t, e, r, i) {
    void 0 === r &&
      (r = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === i &&
        (i = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var n,
      s = { easeIn: e, easeOut: r, easeInOut: i };
    return (
      y(t, function (t) {
        for (var e in ((De[t] = ne[t] = s), (De[(n = t.toLowerCase())] = r), s))
          De[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = De[t + "." + e] = s[e];
      }),
      s
    );
  }
  function ft(t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  }
  function lt(t, e, r) {
    function i(t) {
      return 1 === t ? 1 : n * Math.pow(2, -10 * t) * Wt((t - a) * s) + 1;
    }
    var n = 1 <= e ? e : 1,
      s = (r || (t ? 0.3 : 0.45)) / (e < 1 ? e : 1),
      a = (s / qt) * (Math.asin(1 / n) || 0),
      o =
        "out" === t
          ? i
          : "in" === t
          ? function (t) {
              return 1 - i(1 - t);
            }
          : ft(i);
    return (
      (s = qt / s),
      (o.config = function (e, r) {
        return lt(t, e, r);
      }),
      o
    );
  }
  function pt(t, e) {
    function r(t) {
      return t ? --t * t * ((e + 1) * t + e) + 1 : 0;
    }
    void 0 === e && (e = 1.70158);
    var i =
      "out" === t
        ? r
        : "in" === t
        ? function (t) {
            return 1 - r(1 - t);
          }
        : ft(r);
    return (
      (i.config = function (e) {
        return pt(t, e);
      }),
      i
    );
  }
  var ct,
    _t,
    dt,
    mt,
    gt,
    vt,
    yt,
    Tt,
    xt,
    wt,
    bt,
    Mt,
    Ot,
    kt,
    At,
    Ct,
    Dt,
    Pt,
    St,
    zt,
    Rt,
    Et,
    Ft,
    Bt,
    It,
    Lt,
    Yt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } },
    Ut = { duration: 0.5, overwrite: !1, delay: 0 },
    Nt = 1e8,
    Xt = 1 / Nt,
    qt = 2 * Math.PI,
    Vt = qt / 4,
    jt = 0,
    Qt = Math.sqrt,
    Gt = Math.cos,
    Wt = Math.sin,
    Ht = ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
    Zt = Array.isArray,
    $t = /(?:-?\.?\d|\.)+/gi,
    Jt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Kt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    te = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ee = /[+-]=-?[.\d]+/,
    re = /[^,'"\[\]\s]+/gi,
    ie = /[\d.+\-=]+(?:e[-+]\d*)*/i,
    ne = {},
    se = {},
    ae = [],
    oe = {},
    ue = {},
    he = {},
    fe = 30,
    le = [],
    pe = "",
    ce = function (t, e) {
      for (var r in e) t[r] = e[r];
      return t;
    },
    _e = function (t, e) {
      var r = Math.floor((t /= e));
      return t && r === t ? r - 1 : r;
    },
    de = function (t) {
      var e = t.data;
      return "isFromStart" === e || "isStart" === e;
    },
    me = { _start: 0, endTime: d, totalDuration: d },
    ge = function t(e, r, n) {
      var s,
        a,
        o,
        u = e.labels,
        h = e._recent || me,
        f = e.duration() >= Nt ? h.endTime(!1) : e._dur;
      return i(r) && (isNaN(r) || r in u)
        ? ((a = r.charAt(0)),
          (o = "%" === r.substr(-1)),
          (s = r.indexOf("=")),
          "<" === a || ">" === a
            ? (0 <= s && (r = r.replace(/=/, "")),
              ("<" === a ? h._start : h.endTime(0 <= h._repeat)) +
                (parseFloat(r.substr(1)) || 0) * (o ? (s < 0 ? h : n).totalDuration() / 100 : 1))
            : s < 0
            ? (r in u || (u[r] = f), u[r])
            : ((a = parseFloat(r.charAt(s - 1) + r.substr(s + 1))),
              o && n && (a = (a / 100) * (Zt(n) ? n[0] : n).totalDuration()),
              1 < s ? t(e, r.substr(0, s - 1), n) + a : f + a))
        : null == r
        ? f
        : +r;
    },
    ve = function (t, e, r) {
      return r < t ? t : e < r ? e : r;
    },
    ye = [].slice,
    Te = function (t, e, r) {
      return !i(t) || r || (!mt && Ce())
        ? Zt(t)
          ? ((n = r),
            void 0 === s && (s = []),
            t.forEach(function (t) {
              return (i(t) && !n) || G(t, 1) ? s.push.apply(s, Te(t)) : s.push(t);
            }) || s)
          : G(t)
          ? ye.call(t, 0)
          : t
          ? [t]
          : []
        : ye.call((e || gt).querySelectorAll(t), 0);
      var n, s;
    },
    xe = function (t, e, r, i, n) {
      var s = e - t,
        a = i - r;
      return j(n, function (e) {
        return r + (((e - t) / s) * a || 0);
      });
    },
    we = function (t, e, r) {
      var i,
        n,
        s = t.vars,
        a = s[e];
      if (a)
        return (i = s[e + "Params"]), (n = s.callbackScope || t), r && ae.length && w(), i ? a.apply(n, i) : a.call(n);
    },
    be = 255,
    Me = {
      aqua: [0, be, be],
      lime: [0, be, 0],
      silver: [192, 192, 192],
      black: [0, 0, 0],
      maroon: [128, 0, 0],
      teal: [0, 128, 128],
      blue: [0, 0, be],
      navy: [0, 0, 128],
      white: [be, be, be],
      olive: [128, 128, 0],
      yellow: [be, be, 0],
      orange: [be, 165, 0],
      gray: [128, 128, 128],
      purple: [128, 0, 128],
      green: [0, 128, 0],
      red: [be, 0, 0],
      pink: [be, 192, 203],
      cyan: [0, be, be],
      transparent: [be, be, be, 0],
    },
    Oe = (function () {
      var t,
        e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
      for (t in Me) e += "|" + t + "\\b";
      return new RegExp(e + ")", "gi");
    })(),
    ke = /hsl[a]?\(/,
    Ae =
      ((Dt = Date.now),
      (Pt = 500),
      (St = 33),
      (zt = Dt()),
      (Rt = zt),
      (Ft = Et = 1e3 / 240),
      (kt = {
        time: 0,
        frame: 0,
        tick: function () {
          Ee(!0);
        },
        deltaRatio: function (t) {
          return At / (1e3 / (t || 60));
        },
        wake: function () {
          yt &&
            (!mt &&
              h() &&
              ((dt = mt = window),
              (gt = dt.document || {}),
              (ne.gsap = cr),
              (dt.gsapVersions || (dt.gsapVersions = [])).push(cr.version),
              l(vt || dt.GreenSockGlobals || (!dt.gsap && dt) || {}),
              (Ot = dt.requestAnimationFrame)),
            bt && kt.sleep(),
            (Mt =
              Ot ||
              function (t) {
                return setTimeout(t, (Ft - 1e3 * kt.time + 1) | 0);
              }),
            (wt = 1),
            Ee(2));
        },
        sleep: function () {
          (Ot ? dt.cancelAnimationFrame : clearTimeout)(bt), (wt = 0), (Mt = d);
        },
        lagSmoothing: function (t, e) {
          (Pt = t || 1e8), (St = Math.min(e, Pt, 0));
        },
        fps: function (t) {
          (Et = 1e3 / (t || 240)), (Ft = 1e3 * kt.time + Et);
        },
        add: function (t) {
          Bt.indexOf(t) < 0 && Bt.push(t), Ce();
        },
        remove: function (t) {
          var e;
          ~(e = Bt.indexOf(t)) && Bt.splice(e, 1) && e <= Ct && Ct--;
        },
        _listeners: (Bt = []),
      })),
    Ce = function () {
      return !wt && Ae.wake();
    },
    De = {},
    Pe = /^[\d.\-M][\d.\-,\s]/,
    Se = /["']/g,
    ze = function (t) {
      return function (e) {
        return 1 - t(1 - e);
      };
    },
    Re = function (t, e) {
      return (
        (t &&
          (n(t)
            ? t
            : De[t] ||
              ((u = ((r = t) + "").split("(")),
              (h = De[u[0]]) && 1 < u.length && h.config
                ? h.config.apply(
                    null,
                    ~r.indexOf("{")
                      ? [
                          (function (t) {
                            for (
                              var e,
                                r,
                                i,
                                n = {},
                                s = t.substr(1, t.length - 3).split(":"),
                                a = s[0],
                                o = 1,
                                u = s.length;
                              o < u;
                              o++
                            )
                              (r = s[o]),
                                (e = o !== u - 1 ? r.lastIndexOf(",") : r.length),
                                (i = r.substr(0, e)),
                                (n[a] = isNaN(i) ? i.replace(Se, "").trim() : +i),
                                (a = r.substr(e + 1).trim());
                            return n;
                          })(u[1]),
                        ]
                      : ((i = r),
                        (s = i.indexOf("(") + 1),
                        (a = i.indexOf(")")),
                        (o = i.indexOf("(", s)),
                        i.substring(s, ~o && o < a ? i.indexOf(")", a + 1) : a))
                          .split(",")
                          .map(M)
                  )
                : De._CE && Pe.test(r)
                ? De._CE("", r)
                : h))) ||
        e
      );
      var r, i, s, a, o, u, h;
    };
  function Ee(t) {
    var e,
      r,
      i,
      n,
      s = Dt() - Rt,
      a = !0 === t;
    if (
      (Pt < s && (zt += s - St),
      (0 < (e = (i = (Rt += s) - zt) - Ft) || a) &&
        ((n = ++kt.frame), (At = i - 1e3 * kt.time), (kt.time = i /= 1e3), (Ft += e + (Et <= e ? 4 : Et - e)), (r = 1)),
      a || (bt = Mt(Ee)),
      r)
    )
      for (Ct = 0; Ct < Bt.length; Ct++) Bt[Ct](i, At, n, t);
  }
  function Fe(t) {
    return t < Lt
      ? It * t * t
      : t < 0.7272727272727273
      ? It * Math.pow(t - 1.5 / 2.75, 2) + 0.75
      : t < 0.9090909090909092
      ? It * (t -= 2.25 / 2.75) * t + 0.9375
      : It * Math.pow(t - 2.625 / 2.75, 2) + 0.984375;
  }
  y("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
    var r = e < 5 ? e + 1 : e;
    ht(
      t + ",Power" + (r - 1),
      e
        ? function (t) {
            return Math.pow(t, r);
          }
        : function (t) {
            return t;
          },
      function (t) {
        return 1 - Math.pow(1 - t, r);
      },
      function (t) {
        return t < 0.5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2;
      }
    );
  }),
    (De.Linear.easeNone = De.none = De.Linear.easeIn),
    ht("Elastic", lt("in"), lt("out"), lt()),
    (It = 7.5625),
    (Lt = 1 / 2.75),
    ht(
      "Bounce",
      function (t) {
        return 1 - Fe(1 - t);
      },
      Fe
    ),
    ht("Expo", function (t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0;
    }),
    ht("Circ", function (t) {
      return -(Qt(1 - t * t) - 1);
    }),
    ht("Sine", function (t) {
      return 1 === t ? 1 : 1 - Gt(t * Vt);
    }),
    ht("Back", pt("in"), pt("out"), pt()),
    (De.SteppedEase = De.steps = ne.SteppedEase = {
      config: function (t, e) {
        void 0 === t && (t = 1);
        var r = 1 / t,
          i = t + (e ? 0 : 1),
          n = e ? 1 : 0;
        return function (t) {
          return (((i * ve(0, 0.99999999, t)) | 0) + n) * r;
        };
      },
    }),
    (Ut.ease = De["quad.out"]),
    y("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function (t) {
      return (pe += t + "," + t + "Params,");
    });
  var Be,
    Ie = function (t, e) {
      (this.id = jt++),
        ((t._gsap = this).target = t),
        (this.harness = e),
        (this.get = e ? e.get : v),
        (this.set = e ? e.getSetter : tr);
    },
    Le =
      (((Be = Ye.prototype).delay = function (t) {
        return t || 0 === t
          ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (Be.duration = function (t) {
        return arguments.length
          ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t)
          : this.totalDuration() && this._dur;
      }),
      (Be.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0), X(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1)))
          : this._tDur;
      }),
      (Be.totalTime = function (t, e) {
        if ((Ce(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (I(this, t), !r._dp || r.parent || L(r, this); r.parent; )
            r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((0 < this._ts && t < this._tDur) || (this._ts < 0 && 0 < t) || (!this._tDur && !t)) &&
            Y(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && Math.abs(this._zTime) === Xt) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), b(this, t, e)),
          this
        );
      }),
      (Be.time = function (t, e) {
        return arguments.length
          ? this.totalTime(Math.min(this.totalDuration(), t + E(this)) % this._dur || (t ? this._dur : 0), e)
          : this._time;
      }),
      (Be.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (Be.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + E(this), e)
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (Be.iteration = function (t, e) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * r, e)
          : this._repeat
          ? _e(this._tTime, r) + 1
          : 1;
      }),
      (Be.timeScale = function (t) {
        if (!arguments.length) return this._rts === -Xt ? 0 : this._rts;
        if (this._rts === t) return this;
        var e = this.parent && this._ts ? F(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || t === -Xt ? 0 : this._rts),
          (function (t) {
            for (var e = t.parent; e && e.parent; ) (e._dirty = 1), e.totalDuration(), (e = e.parent);
            return t;
          })(this.totalTime(ve(-this._delay, this._tDur, e), !0))
        );
      }),
      (Be.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t)
                ? ((this._pTime = this._tTime || Math.max(-this._delay, this.rawTime())), (this._ts = this._act = 0))
                : (Ce(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime,
                    1 === this.progress() && (this._tTime -= Xt) && Math.abs(this._zTime) !== Xt
                  ))),
            this)
          : this._ps;
      }),
      (Be.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return !e || (!e._sort && this.parent) || Y(e, this, t - this._delay), this;
        }
        return this._start;
      }),
      (Be.endTime = function (t) {
        return this._start + (u(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts);
      }),
      (Be.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t && (!this._ts || (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? F(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (Be.globalTime = function (t) {
        for (var e = this, r = arguments.length ? t : e.rawTime(); e; ) (r = e._start + r / (e._ts || 1)), (e = e._dp);
        return r;
      }),
      (Be.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), q(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (Be.repeatDelay = function (t) {
        return arguments.length ? ((this._rDelay = t), q(this)) : this._rDelay;
      }),
      (Be.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (Be.seek = function (t, e) {
        return this.totalTime(ge(this, t), u(e));
      }),
      (Be.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, u(e));
      }),
      (Be.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (Be.reverse = function (t, e) {
        return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1);
      }),
      (Be.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (Be.resume = function () {
        return this.paused(!1);
      }),
      (Be.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -Xt : 0)), this)
          : this._rts < 0;
      }),
      (Be.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -Xt), this;
      }),
      (Be.isActive = function () {
        var t,
          e = this.parent || this._dp,
          r = this._start;
        return !(
          e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - Xt)
        );
      }),
      (Be.eventCallback = function (t, e, r) {
        var i = this.vars;
        return 1 < arguments.length
          ? (e ? ((i[t] = e), r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this)
          : i[t];
      }),
      (Be.then = function (t) {
        var e = this;
        return new Promise(function (r) {
          function i() {
            var t = e.then;
            (e.then = null), n(s) && (s = s(e)) && (s.then || s === e) && (e.then = t), r(s), (e.then = t);
          }
          var s = n(t) ? t : O;
          (e._initted && 1 === e.totalProgress() && 0 <= e._ts) || (!e._tTime && e._ts < 0) ? i() : (e._prom = i);
        });
      }),
      (Be.kill = function () {
        rt(this);
      }),
      Ye);
  function Ye(t) {
    (this.vars = t),
      (this._delay = +t.delay || 0),
      (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
        ((this._rDelay = t.repeatDelay || 0), (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
      (this._ts = 1),
      X(this, +t.duration, 1, 1),
      (this.data = t.data),
      wt || Ae.wake();
  }
  k(Le.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -Xt,
    _prom: 0,
    _ps: !1,
    _rts: 1,
  });
  var Ue = (function (t) {
    function a(e, i) {
      var n;
      return (
        void 0 === e && (e = {}),
        ((n = t.call(this, e) || this).labels = {}),
        (n.smoothChildTiming = !!e.smoothChildTiming),
        (n.autoRemoveChildren = !!e.autoRemoveChildren),
        (n._sort = u(e.sortChildren)),
        _t && Y(e.parent || _t, r(n), i),
        e.reversed && n.reverse(),
        e.paused && n.paused(!0),
        e.scrollTrigger && U(r(n), e.scrollTrigger),
        n
      );
    }
    e(a, t);
    var o = a.prototype;
    return (
      (o.to = function (t, e, r) {
        return V(0, arguments, this), this;
      }),
      (o.from = function (t, e, r) {
        return V(1, arguments, this), this;
      }),
      (o.fromTo = function (t, e, r, i) {
        return V(2, arguments, this), this;
      }),
      (o.set = function (t, e, r) {
        return (
          (e.duration = 0),
          (e.parent = this),
          P(e).repeatDelay || (e.repeat = 0),
          (e.immediateRender = !!e.immediateRender),
          new We(t, e, ge(this, r), 1),
          this
        );
      }),
      (o.call = function (t, e, r) {
        return Y(this, We.delayedCall(0, t, e), r);
      }),
      (o.staggerTo = function (t, e, r, i, n, s, a) {
        return (
          (r.duration = e),
          (r.stagger = r.stagger || i),
          (r.onComplete = s),
          (r.onCompleteParams = a),
          (r.parent = this),
          new We(t, r, ge(this, n)),
          this
        );
      }),
      (o.staggerFrom = function (t, e, r, i, n, s, a) {
        return (r.runBackwards = 1), (P(r).immediateRender = u(r.immediateRender)), this.staggerTo(t, e, r, i, n, s, a);
      }),
      (o.staggerFromTo = function (t, e, r, i, n, s, a, o) {
        return (i.startAt = r), (P(i).immediateRender = u(i.immediateRender)), this.staggerTo(t, e, i, n, s, a, o);
      }),
      (o.render = function (t, e, r) {
        var i,
          n,
          s,
          a,
          o,
          u,
          h,
          f,
          l,
          p,
          c,
          _,
          d = this._time,
          m = this._dirty ? this.totalDuration() : this._tDur,
          g = this._dur,
          v = this !== _t && m - Xt < t && 0 <= t ? m : t < Xt ? 0 : t,
          y = this._zTime < 0 != t < 0 && (this._initted || !g);
        if (v !== this._tTime || r || y) {
          if (
            (d !== this._time && g && ((v += this._time - d), (t += this._time - d)),
            (i = v),
            (l = this._start),
            (u = !(f = this._ts)),
            y && (g || (d = this._zTime), (!t && e) || (this._zTime = t)),
            this._repeat)
          ) {
            if (((c = this._yoyo), (o = g + this._rDelay), this._repeat < -1 && t < 0))
              return this.totalTime(100 * o + t, e, r);
            if (
              ((i = T(v % o)),
              v === m
                ? ((a = this._repeat), (i = g))
                : ((a = ~~(v / o)) && a === v / o && ((i = g), a--), g < i && (i = g)),
              (p = _e(this._tTime, o)),
              !d && this._tTime && p !== a && (p = a),
              c && 1 & a && ((i = g - i), (_ = 1)),
              a !== p && !this._lock)
            ) {
              var x = c && 1 & p,
                w = x === (c && 1 & a);
              if (
                (a < p && (x = !x),
                (d = x ? 0 : g),
                (this._lock = 1),
                (this.render(d || (_ ? 0 : T(a * o)), e, !g)._lock = 0),
                (this._tTime = v),
                !e && this.parent && we(this, "onRepeat"),
                this.vars.repeatRefresh && !_ && (this.invalidate()._lock = 1),
                (d && d !== this._time) || u != !this._ts || (this.vars.onRepeat && !this.parent && !this._act))
              )
                return this;
              if (
                ((g = this._dur),
                (m = this._tDur),
                w &&
                  ((this._lock = 2),
                  (d = x ? g : -1e-4),
                  this.render(d, !0),
                  this.vars.repeatRefresh && !_ && this.invalidate()),
                (this._lock = 0),
                !this._ts && !u)
              )
                return this;
              ut(this, _);
            }
          }
          if (
            (this._hasPause &&
              !this._forcing &&
              this._lock < 2 &&
              (h = (function (t, e, r) {
                var i;
                if (e < r)
                  for (i = t._first; i && i._start <= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start > e) return i;
                    i = i._next;
                  }
                else
                  for (i = t._last; i && i._start >= r; ) {
                    if (!i._dur && "isPause" === i.data && i._start < e) return i;
                    i = i._prev;
                  }
              })(this, T(d), T(i))) &&
              (v -= i - (i = h._start)),
            (this._tTime = v),
            (this._time = i),
            (this._act = !f),
            this._initted || ((this._onUpdate = this.vars.onUpdate), (this._initted = 1), (this._zTime = t), (d = 0)),
            !d && i && !e && (we(this, "onStart"), this._tTime !== v))
          )
            return this;
          if (d <= i && 0 <= t)
            for (n = this._first; n; ) {
              if (((s = n._next), (n._act || i >= n._start) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (i - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), s && (v += this._zTime = -Xt);
                  break;
                }
              }
              n = s;
            }
          else {
            n = this._last;
            for (var b = t < 0 ? t : i; n; ) {
              if (((s = n._prev), (n._act || b <= n._end) && n._ts && h !== n)) {
                if (n.parent !== this) return this.render(t, e, r);
                if (
                  (n.render(
                    0 < n._ts
                      ? (b - n._start) * n._ts
                      : (n._dirty ? n.totalDuration() : n._tDur) + (b - n._start) * n._ts,
                    e,
                    r
                  ),
                  i !== this._time || (!this._ts && !u))
                ) {
                  (h = 0), s && (v += this._zTime = b ? -Xt : Xt);
                  break;
                }
              }
              n = s;
            }
          }
          if (h && !e && (this.pause(), (h.render(d <= i ? 0 : -Xt)._zTime = d <= i ? 1 : -1), this._ts))
            return (this._start = l), B(this), this.render(t, e, r);
          this._onUpdate && !e && we(this, "onUpdate", !0),
            ((v === m && m >= this.totalDuration()) || (!v && d)) &&
              ((l !== this._start && Math.abs(f) === Math.abs(this._ts)) ||
                this._lock ||
                ((!t && g) || !((v === m && 0 < this._ts) || (!v && this._ts < 0)) || z(this, 1),
                e ||
                  (t < 0 && !d) ||
                  (!v && !d && m) ||
                  (we(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0),
                  !this._prom || (v < m && 0 < this.timeScale()) || this._prom())));
        }
        return this;
      }),
      (o.add = function (t, e) {
        var r = this;
        if ((s(e) || (e = ge(this, e, t)), !(t instanceof Le))) {
          if (Zt(t))
            return (
              t.forEach(function (t) {
                return r.add(t, e);
              }),
              this
            );
          if (i(t)) return this.addLabel(t, e);
          if (!n(t)) return this;
          t = We.delayedCall(0, t);
        }
        return this !== t ? Y(this, t, e) : this;
      }),
      (o.getChildren = function (t, e, r, i) {
        void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -Nt);
        for (var n = [], s = this._first; s; )
          s._start >= i &&
            (s instanceof We ? e && n.push(s) : (r && n.push(s), t && n.push.apply(n, s.getChildren(!0, e, r)))),
            (s = s._next);
        return n;
      }),
      (o.getById = function (t) {
        for (var e = this.getChildren(1, 1, 1), r = e.length; r--; ) if (e[r].vars.id === t) return e[r];
      }),
      (o.remove = function (t) {
        return i(t)
          ? this.removeLabel(t)
          : n(t)
          ? this.killTweensOf(t)
          : (S(this, t), t === this._recent && (this._recent = this._last), R(this));
      }),
      (o.totalTime = function (e, r) {
        return arguments.length
          ? ((this._forcing = 1),
            !this._dp &&
              this._ts &&
              (this._start = T(Ae.time - (0 < this._ts ? e / this._ts : (this.totalDuration() - e) / -this._ts))),
            t.prototype.totalTime.call(this, e, r),
            (this._forcing = 0),
            this)
          : this._tTime;
      }),
      (o.addLabel = function (t, e) {
        return (this.labels[t] = ge(this, e)), this;
      }),
      (o.removeLabel = function (t) {
        return delete this.labels[t], this;
      }),
      (o.addPause = function (t, e, r) {
        var i = We.delayedCall(0, e || d, r);
        return (i.data = "isPause"), (this._hasPause = 1), Y(this, i, ge(this, t));
      }),
      (o.removePause = function (t) {
        var e = this._first;
        for (t = ge(this, t); e; ) e._start === t && "isPause" === e.data && z(e), (e = e._next);
      }),
      (o.killTweensOf = function (t, e, r) {
        for (var i = this.getTweensOf(t, r), n = i.length; n--; ) Xe !== i[n] && i[n].kill(t, e);
        return this;
      }),
      (o.getTweensOf = function (t, e) {
        for (var r, i = [], n = Te(t), a = this._first, o = s(e); a; )
          a instanceof We
            ? x(a._targets, n) &&
              (o
                ? (!Xe || (a._initted && a._ts)) && a.globalTime(0) <= e && a.globalTime(a.totalDuration()) > e
                : !e || a.isActive()) &&
              i.push(a)
            : (r = a.getTweensOf(n, e)).length && i.push.apply(i, r),
            (a = a._next);
        return i;
      }),
      (o.tweenTo = function (t, e) {
        e = e || {};
        var r,
          i = this,
          n = ge(i, t),
          s = e.startAt,
          a = e.onStart,
          o = e.onStartParams,
          u = e.immediateRender,
          h = We.to(
            i,
            k(
              {
                ease: e.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: n,
                overwrite: "auto",
                duration: e.duration || Math.abs((n - (s && "time" in s ? s.time : i._time)) / i.timeScale()) || Xt,
                onStart: function () {
                  if ((i.pause(), !r)) {
                    var t = e.duration || Math.abs((n - (s && "time" in s ? s.time : i._time)) / i.timeScale());
                    h._dur !== t && X(h, t, 0, 1).render(h._time, !0, !0), (r = 1);
                  }
                  a && a.apply(h, o || []);
                },
              },
              e
            )
          );
        return u ? h.render(0) : h;
      }),
      (o.tweenFromTo = function (t, e, r) {
        return this.tweenTo(e, k({ startAt: { time: ge(this, t) } }, r));
      }),
      (o.recent = function () {
        return this._recent;
      }),
      (o.nextLabel = function (t) {
        return void 0 === t && (t = this._time), et(this, ge(this, t));
      }),
      (o.previousLabel = function (t) {
        return void 0 === t && (t = this._time), et(this, ge(this, t), 1);
      }),
      (o.currentLabel = function (t) {
        return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + Xt);
      }),
      (o.shiftChildren = function (t, e, r) {
        void 0 === r && (r = 0);
        for (var i, n = this._first, s = this.labels; n; )
          n._start >= r && ((n._start += t), (n._end += t)), (n = n._next);
        if (e) for (i in s) s[i] >= r && (s[i] += t);
        return R(this);
      }),
      (o.invalidate = function () {
        var e = this._first;
        for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
        return t.prototype.invalidate.call(this);
      }),
      (o.clear = function (t) {
        void 0 === t && (t = !0);
        for (var e, r = this._first; r; ) (e = r._next), this.remove(r), (r = e);
        return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), R(this);
      }),
      (o.totalDuration = function (t) {
        var e,
          r,
          i,
          n = 0,
          s = this,
          a = s._last,
          o = Nt;
        if (arguments.length)
          return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -t : t));
        if (s._dirty) {
          for (i = s.parent; a; )
            (e = a._prev),
              a._dirty && a.totalDuration(),
              o < (r = a._start) && s._sort && a._ts && !s._lock
                ? ((s._lock = 1), (Y(s, a, r - a._delay, 1)._lock = 0))
                : (o = r),
              r < 0 &&
                a._ts &&
                ((n -= r),
                ((!i && !s._dp) || (i && i.smoothChildTiming)) &&
                  ((s._start += r / s._ts), (s._time -= r), (s._tTime -= r)),
                s.shiftChildren(-r, !1, -1 / 0),
                (o = 0)),
              a._end > n && a._ts && (n = a._end),
              (a = e);
          X(s, s === _t && s._time > n ? s._time : n, 1, 1), (s._dirty = 0);
        }
        return s._tDur;
      }),
      (a.updateRoot = function (t) {
        if ((_t._ts && (b(_t, F(t, _t)), (Tt = Ae.frame)), Ae.frame >= fe)) {
          fe += Yt.autoSleep || 120;
          var e = _t._first;
          if ((!e || !e._ts) && Yt.autoSleep && Ae._listeners.length < 2) {
            for (; e && !e._ts; ) e = e._next;
            e || Ae.sleep();
          }
        }
      }),
      a
    );
  })(Le);
  function Ne(t, e, r, s, a, u) {
    var h, f, l, p;
    if (
      ue[t] &&
      !1 !==
        (h = new ue[t]()).init(
          a,
          h.rawVars
            ? e[t]
            : (function (t, e, r, s, a) {
                if ((n(t) && (t = je(t, a, e, r, s)), !o(t) || (t.style && t.nodeType) || Zt(t) || Ht(t)))
                  return i(t) ? je(t, a, e, r, s) : t;
                var u,
                  h = {};
                for (u in t) h[u] = je(t[u], a, e, r, s);
                return h;
              })(e[t], s, a, u, r),
          r,
          s,
          u
        ) &&
      ((r._pt = f = new ur(r._pt, a, t, 0, 1, h.render, h, 0, h.priority)), r !== xt)
    )
      for (l = r._ptLookup[r._targets.indexOf(a)], p = h._props.length; p--; ) l[h._props[p]] = f;
    return h;
  }
  k(Ue.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Xe,
    qe = function (t, e, r, s, a, o, u, h, f) {
      n(s) && (s = s(a || 0, t, o));
      var l,
        c = t[e],
        _ =
          "get" !== r
            ? r
            : n(c)
            ? f
              ? t[e.indexOf("set") || !n(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](f)
              : t[e]()
            : c,
        d = n(c) ? (f ? Ke : Je) : $e;
      if (
        (i(s) &&
          (~s.indexOf("random(") && (s = tt(s)),
          "=" === s.charAt(1) &&
            ((!(l = parseFloat(_) + parseFloat(s.substr(2)) * ("-" === s.charAt(0) ? -1 : 1) + (Q(_) || 0)) &&
              0 !== l) ||
              (s = l))),
        _ !== s)
      )
        return isNaN(_ * s) || "" === s
          ? (c || e in t || p(e, s),
            function (t, e, r, i, n, s, a) {
              var o,
                u,
                h,
                f,
                l,
                p,
                c,
                _,
                d = new ur(this._pt, t, e, 0, 1, ir, null, n),
                m = 0,
                g = 0;
              for (
                d.b = r,
                  d.e = i,
                  r += "",
                  (c = ~(i += "").indexOf("random(")) && (i = tt(i)),
                  s && (s((_ = [r, i]), t, e), (r = _[0]), (i = _[1])),
                  u = r.match(te) || [];
                (o = te.exec(i));

              )
                (f = o[0]),
                  (l = i.substring(m, o.index)),
                  h ? (h = (h + 1) % 5) : "rgba(" === l.substr(-5) && (h = 1),
                  f !== u[g++] &&
                    ((p = parseFloat(u[g - 1]) || 0),
                    (d._pt = {
                      _next: d._pt,
                      p: l || 1 === g ? l : ",",
                      s: p,
                      c:
                        "=" === f.charAt(1)
                          ? parseFloat(f.substr(2)) * ("-" === f.charAt(0) ? -1 : 1)
                          : parseFloat(f) - p,
                      m: h && h < 4 ? Math.round : 0,
                    }),
                    (m = te.lastIndex));
              return (
                (d.c = m < i.length ? i.substring(m, i.length) : ""),
                (d.fp = a),
                (ee.test(i) || c) && (d.e = 0),
                (this._pt = d)
              );
            }.call(this, t, e, _, s, d, h || Yt.stringFilter, f))
          : ((l = new ur(this._pt, t, e, +_ || 0, s - (_ || 0), "boolean" == typeof c ? rr : er, 0, d)),
            f && (l.fp = f),
            u && l.modifier(u, this, t),
            (this._pt = l));
    },
    Ve = function t(e, r) {
      var i,
        n,
        s,
        a,
        o,
        h,
        f,
        l,
        p,
        c,
        _,
        d,
        v,
        y = e.vars,
        T = y.ease,
        x = y.startAt,
        b = y.immediateRender,
        M = y.lazy,
        O = y.onUpdate,
        A = y.onUpdateParams,
        C = y.callbackScope,
        P = y.runBackwards,
        S = y.yoyoEase,
        R = y.keyframes,
        E = y.autoRevert,
        F = e._dur,
        B = e._startAt,
        I = e._targets,
        L = e.parent,
        Y = L && "nested" === L.data ? L.parent._targets : I,
        U = "auto" === e._overwrite && !ct,
        N = e.timeline;
      if (
        (!N || (R && T) || (T = "none"),
        (e._ease = Re(T, Ut.ease)),
        (e._yEase = S ? ze(Re(!0 === S ? T : S, Ut.ease)) : 0),
        S && e._yoyo && !e._repeat && ((S = e._yEase), (e._yEase = e._ease), (e._ease = S)),
        (e._from = !N && !!y.runBackwards),
        !N)
      ) {
        if (((d = (l = I[0] ? g(I[0]).harness : 0) && y[l.prop]), (i = D(y, se)), B && B.render(-1, !0).kill(), x))
          if (
            (z(
              (e._startAt = We.set(
                I,
                k(
                  {
                    data: "isStart",
                    overwrite: !1,
                    parent: L,
                    immediateRender: !0,
                    lazy: u(M),
                    startAt: null,
                    delay: 0,
                    onUpdate: O,
                    onUpdateParams: A,
                    callbackScope: C,
                    stagger: 0,
                  },
                  x
                )
              ))
            ),
            r < 0 && !b && !E && e._startAt.render(-1, !0),
            b)
          ) {
            if ((0 < r && !E && (e._startAt = 0), F && r <= 0)) return void (r && (e._zTime = r));
          } else !1 === E && (e._startAt = 0);
        else if (P && F)
          if (B) E || (e._startAt = 0);
          else if (
            (r && (b = !1),
            (s = k(
              { overwrite: !1, data: "isFromStart", lazy: b && u(M), immediateRender: b, stagger: 0, parent: L },
              i
            )),
            d && (s[l.prop] = d),
            z((e._startAt = We.set(I, s))),
            r < 0 && e._startAt.render(-1, !0),
            b)
          ) {
            if (!r) return;
          } else t(e._startAt, Xt);
        for (e._pt = 0, M = (F && u(M)) || (M && !F), n = 0; n < I.length; n++) {
          if (
            ((f = (o = I[n])._gsap || m(I)[n]._gsap),
            (e._ptLookup[n] = c = {}),
            oe[f.id] && ae.length && w(),
            (_ = Y === I ? n : Y.indexOf(o)),
            l &&
              !1 !== (p = new l()).init(o, d || i, e, _, Y) &&
              ((e._pt = a = new ur(e._pt, o, p.name, 0, 1, p.render, p, 0, p.priority)),
              p._props.forEach(function (t) {
                c[t] = a;
              }),
              p.priority && (h = 1)),
            !l || d)
          )
            for (s in i)
              ue[s] && (p = Ne(s, i, e, _, o, Y))
                ? p.priority && (h = 1)
                : (c[s] = a = qe.call(e, o, s, "get", i[s], _, Y, 0, y.stringFilter));
          e._op && e._op[n] && e.kill(o, e._op[n]),
            U && e._pt && ((Xe = e), _t.killTweensOf(o, c, e.globalTime(0)), (v = !e.parent), (Xe = 0)),
            e._pt && M && (oe[f.id] = 1);
        }
        h && or(e), e._onInit && e._onInit(e);
      }
      (e._onUpdate = O), (e._initted = (!e._op || e._pt) && !v);
    },
    je = function (t, e, r, s, a) {
      return n(t) ? t.call(e, r, s, a) : i(t) && ~t.indexOf("random(") ? tt(t) : t;
    },
    Qe = pe + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
    Ge = (Qe + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
    We = (function (t) {
      function n(e, i, n, a) {
        var h;
        "number" == typeof i && ((n.duration = i), (i = n), (n = null));
        var l,
          p,
          _,
          g,
          v,
          y,
          x,
          w,
          b = (h = t.call(this, a ? i : P(i)) || this).vars,
          M = b.duration,
          O = b.delay,
          A = b.immediateRender,
          C = b.stagger,
          D = b.overwrite,
          S = b.keyframes,
          z = b.defaults,
          R = b.scrollTrigger,
          E = b.yoyoEase,
          F = i.parent || _t,
          B = (Zt(e) || Ht(e) ? s(e[0]) : "length" in i) ? [e] : Te(e);
        if (
          ((h._targets = B.length
            ? m(B)
            : c("GSAP target " + e + " not found. https://greensock.com", !Yt.nullTargetWarn) || []),
          (h._ptLookup = []),
          (h._overwrite = D),
          S || C || f(M) || f(O))
        ) {
          if (
            ((i = h.vars),
            (l = h.timeline = new Ue({ data: "nested", defaults: z || {} })).kill(),
            (l.parent = l._dp = r(h)),
            (l._start = 0),
            S)
          )
            k(l.vars.defaults, { ease: "none" }),
              C
                ? B.forEach(function (t, e) {
                    return S.forEach(function (r, i) {
                      return l.to(t, r, i ? ">" : e * C);
                    });
                  })
                : S.forEach(function (t) {
                    return l.to(B, t, ">");
                  });
          else {
            if (((g = B.length), (x = C ? H(C) : d), o(C))) for (v in C) ~Qe.indexOf(v) && ((w = w || {})[v] = C[v]);
            for (p = 0; p < g; p++) {
              for (v in ((_ = {}), i)) Ge.indexOf(v) < 0 && (_[v] = i[v]);
              (_.stagger = 0),
                E && (_.yoyoEase = E),
                w && ce(_, w),
                (y = B[p]),
                (_.duration = +je(M, r(h), p, y, B)),
                (_.delay = (+je(O, r(h), p, y, B) || 0) - h._delay),
                !C && 1 === g && _.delay && ((h._delay = O = _.delay), (h._start += O), (_.delay = 0)),
                l.to(y, _, x(p, y, B));
            }
            l.duration() ? (M = O = 0) : (h.timeline = 0);
          }
          M || h.duration((M = l.duration()));
        } else h.timeline = 0;
        return (
          !0 !== D || ct || ((Xe = r(h)), _t.killTweensOf(B), (Xe = 0)),
          Y(F, r(h), n),
          i.reversed && h.reverse(),
          i.paused && h.paused(!0),
          (A ||
            (!M &&
              !S &&
              h._start === T(F._time) &&
              u(A) &&
              (function t(e) {
                return !e || (e._ts && t(e.parent));
              })(r(h)) &&
              "nested" !== F.data)) &&
            ((h._tTime = -Xt), h.render(Math.max(0, -O))),
          R && U(r(h), R),
          h
        );
      }
      e(n, t);
      var a = n.prototype;
      return (
        (a.render = function (t, e, r) {
          var i,
            n,
            s,
            a,
            o,
            u,
            h,
            f,
            l,
            p = this._time,
            c = this._tDur,
            _ = this._dur,
            d = c - Xt < t && 0 <= t ? c : t < Xt ? 0 : t;
          if (_) {
            if (
              d !== this._tTime ||
              !t ||
              r ||
              (!this._initted && this._tTime) ||
              (this._startAt && this._zTime < 0 != t < 0)
            ) {
              if (((i = d), (f = this.timeline), this._repeat)) {
                if (((a = _ + this._rDelay), this._repeat < -1 && t < 0)) return this.totalTime(100 * a + t, e, r);
                if (
                  ((i = T(d % a)),
                  d === c
                    ? ((s = this._repeat), (i = _))
                    : ((s = ~~(d / a)) && s === d / a && ((i = _), s--), _ < i && (i = _)),
                  (u = this._yoyo && 1 & s) && ((l = this._yEase), (i = _ - i)),
                  (o = _e(this._tTime, a)),
                  i === p && !r && this._initted)
                )
                  return this;
                s !== o &&
                  (f && this._yEase && ut(f, u),
                  !this.vars.repeatRefresh ||
                    u ||
                    this._lock ||
                    ((this._lock = r = 1), (this.render(T(a * s), !0).invalidate()._lock = 0)));
              }
              if (!this._initted) {
                if (N(this, t < 0 ? t : i, r, e)) return (this._tTime = 0), this;
                if (_ !== this._dur) return this.render(t, e, r);
              }
              if (
                ((this._tTime = d),
                (this._time = i),
                !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
                (this.ratio = h = (l || this._ease)(i / _)),
                this._from && (this.ratio = h = 1 - h),
                !i || p || e || we(this, "onStart"),
                i && !p && !e && (we(this, "onStart"), this._tTime !== d))
              )
                return this;
              for (n = this._pt; n; ) n.r(h, n.d), (n = n._next);
              (f && f.render(t < 0 ? t : !i && u ? -Xt : f._dur * h, e, r)) || (this._startAt && (this._zTime = t)),
                this._onUpdate &&
                  !e &&
                  (t < 0 && this._startAt && this._startAt.render(t, !0, r), we(this, "onUpdate")),
                this._repeat && s !== o && this.vars.onRepeat && !e && this.parent && we(this, "onRepeat"),
                (d !== this._tDur && d) ||
                  this._tTime !== d ||
                  (t < 0 && this._startAt && !this._onUpdate && this._startAt.render(t, !0, !0),
                  (!t && _) || !((d === this._tDur && 0 < this._ts) || (!d && this._ts < 0)) || z(this, 1),
                  e ||
                    (t < 0 && !p) ||
                    (!d && !p) ||
                    (we(this, d === c ? "onComplete" : "onReverseComplete", !0),
                    !this._prom || (d < c && 0 < this.timeScale()) || this._prom()));
            }
          } else
            !(function (t, e, r, i) {
              var n,
                s,
                a,
                o = t.ratio,
                u =
                  e < 0 ||
                  (!e &&
                    ((!t._start &&
                      (function t(e) {
                        var r = e.parent;
                        return r && r._ts && r._initted && !r._lock && (r.rawTime() < 0 || t(r));
                      })(t) &&
                      (t._initted || !de(t))) ||
                      ((t._ts < 0 || t._dp._ts < 0) && !de(t))))
                    ? 0
                    : 1,
                h = t._rDelay,
                f = 0;
              if (
                (h &&
                  t._repeat &&
                  ((f = ve(0, t._tDur, e)),
                  (s = _e(f, h)),
                  (a = _e(t._tTime, h)),
                  t._yoyo && 1 & s && (u = 1 - u),
                  s !== a && ((o = 1 - u), t.vars.repeatRefresh && t._initted && t.invalidate())),
                u !== o || i || t._zTime === Xt || (!e && t._zTime))
              ) {
                if (!t._initted && N(t, e, i, r)) return;
                for (
                  a = t._zTime,
                    t._zTime = e || (r ? Xt : 0),
                    r = r || (e && !a),
                    t.ratio = u,
                    t._from && (u = 1 - u),
                    t._time = 0,
                    t._tTime = f,
                    n = t._pt;
                  n;

                )
                  n.r(u, n.d), (n = n._next);
                t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                  t._onUpdate && !r && we(t, "onUpdate"),
                  f && t._repeat && !r && t.parent && we(t, "onRepeat"),
                  (e >= t._tDur || e < 0) &&
                    t.ratio === u &&
                    (u && z(t, 1), r || (we(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()));
              } else t._zTime || (t._zTime = e);
            })(this, t, e, r);
          return this;
        }),
        (a.targets = function () {
          return this._targets;
        }),
        (a.invalidate = function () {
          return (
            (this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0),
            (this._ptLookup = []),
            this.timeline && this.timeline.invalidate(),
            t.prototype.invalidate.call(this)
          );
        }),
        (a.kill = function (t, e) {
          if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
            return (this._lazy = this._pt = 0), this.parent ? rt(this) : this;
          if (this.timeline) {
            var r = this.timeline.totalDuration();
            return (
              this.timeline.killTweensOf(t, e, Xe && !0 !== Xe.vars.overwrite)._first || rt(this),
              this.parent &&
                r !== this.timeline.totalDuration() &&
                X(this, (this._dur * this.timeline._tDur) / r, 0, 1),
              this
            );
          }
          var n,
            s,
            a,
            o,
            u,
            h,
            f,
            l = this._targets,
            p = t ? Te(t) : l,
            c = this._ptLookup,
            _ = this._pt;
          if (
            (!e || "all" === e) &&
            (function (t, e) {
              for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r]; );
              return r < 0;
            })(l, p)
          )
            return "all" === e && (this._pt = 0), rt(this);
          for (
            n = this._op = this._op || [],
              "all" !== e &&
                (i(e) &&
                  ((u = {}),
                  y(e, function (t) {
                    return (u[t] = 1);
                  }),
                  (e = u)),
                (e = (function (t, e) {
                  var r,
                    i,
                    n,
                    s,
                    a = t[0] ? g(t[0]).harness : 0,
                    o = a && a.aliases;
                  if (!o) return e;
                  for (i in ((r = ce({}, e)), o))
                    if ((i in r)) for (n = (s = o[i].split(",")).length; n--; ) r[s[n]] = r[i];
                  return r;
                })(l, e))),
              f = l.length;
            f--;

          )
            if (~p.indexOf(l[f]))
              for (u in ((s = c[f]),
              "all" === e ? ((n[f] = e), (o = s), (a = {})) : ((a = n[f] = n[f] || {}), (o = e)),
              o))
                (h = s && s[u]) && (("kill" in h.d && !0 !== h.d.kill(u)) || S(this, h, "_pt"), delete s[u]),
                  "all" !== a && (a[u] = 1);
          return this._initted && !this._pt && _ && rt(this), this;
        }),
        (n.to = function (t, e, r) {
          return new n(t, e, r);
        }),
        (n.from = function (t, e) {
          return V(1, arguments);
        }),
        (n.delayedCall = function (t, e, r, i) {
          return new n(e, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: t,
            onComplete: e,
            onReverseComplete: e,
            onCompleteParams: r,
            onReverseCompleteParams: r,
            callbackScope: i,
          });
        }),
        (n.fromTo = function (t, e, r) {
          return V(2, arguments);
        }),
        (n.set = function (t, e) {
          return (e.duration = 0), e.repeatDelay || (e.repeat = 0), new n(t, e);
        }),
        (n.killTweensOf = function (t, e, r) {
          return _t.killTweensOf(t, e, r);
        }),
        n
      );
    })(Le);
  function He(t, e, r) {
    return t.setAttribute(e, r);
  }
  function Ze(t, e, r, i) {
    i.mSet(t, e, i.m.call(i.tween, r, i.mt), i);
  }
  k(We.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
    y("staggerTo,staggerFrom,staggerFromTo", function (t) {
      We[t] = function () {
        var e = new Ue(),
          r = ye.call(arguments, 0);
        return r.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, r);
      };
    });
  var $e = function (t, e, r) {
      return (t[e] = r);
    },
    Je = function (t, e, r) {
      return t[e](r);
    },
    Ke = function (t, e, r, i) {
      return t[e](i.fp, r);
    },
    tr = function (t, e) {
      return n(t[e]) ? Je : a(t[e]) && t.setAttribute ? He : $e;
    },
    er = function (t, e) {
      return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
    },
    rr = function (t, e) {
      return e.set(e.t, e.p, !!(e.s + e.c * t), e);
    },
    ir = function (t, e) {
      var r = e._pt,
        i = "";
      if (!t && e.b) i = e.b;
      else if (1 === t && e.e) i = e.e;
      else {
        for (; r; ) (i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i), (r = r._next);
        i += e.c;
      }
      e.set(e.t, e.p, i, e);
    },
    nr = function (t, e) {
      for (var r = e._pt; r; ) r.r(t, r.d), (r = r._next);
    },
    sr = function (t, e, r, i) {
      for (var n, s = this._pt; s; ) (n = s._next), s.p === i && s.modifier(t, e, r), (s = n);
    },
    ar = function (t) {
      for (var e, r, i = this._pt; i; )
        (r = i._next), (i.p === t && !i.op) || i.op === t ? S(this, i, "_pt") : i.dep || (e = 1), (i = r);
      return !e;
    },
    or = function (t) {
      for (var e, r, i, n, s = t._pt; s; ) {
        for (e = s._next, r = i; r && r.pr > s.pr; ) r = r._next;
        (s._prev = r ? r._prev : n) ? (s._prev._next = s) : (i = s), (s._next = r) ? (r._prev = s) : (n = s), (s = e);
      }
      t._pt = i;
    },
    ur =
      ((hr.prototype.modifier = function (t, e, r) {
        (this.mSet = this.mSet || this.set), (this.set = Ze), (this.m = t), (this.mt = r), (this.tween = e);
      }),
      hr);
  function hr(t, e, r, i, n, s, a, o, u) {
    (this.t = e),
      (this.s = i),
      (this.c = n),
      (this.p = r),
      (this.r = s || er),
      (this.d = a || this),
      (this.set = o || $e),
      (this.pr = u || 0),
      (this._next = t) && (t._prev = this);
  }
  y(
    pe +
      "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
    function (t) {
      return (se[t] = 1);
    }
  ),
    (ne.TweenMax = ne.TweenLite = We),
    (ne.TimelineLite = ne.TimelineMax = Ue),
    (_t = new Ue({ sortChildren: !1, defaults: Ut, autoRemoveChildren: !0, id: "root", smoothChildTiming: !0 })),
    (Yt.stringFilter = ot);
  var fr = {
    registerPlugin: function () {
      for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
      e.forEach(function (t) {
        return (function (t) {
          var e = (t = (!t.name && t.default) || t).name,
            r = n(t),
            i =
              e && !r && t.init
                ? function () {
                    this._props = [];
                  }
                : t,
            s = { init: d, render: nr, add: qe, kill: ar, modifier: sr, rawVars: 0 },
            a = { targetTest: 0, get: 0, getSetter: tr, aliases: {}, register: 0 };
          if ((Ce(), t !== i)) {
            if (ue[e]) return;
            k(i, k(D(t, s), a)),
              ce(i.prototype, ce(s, D(t, a))),
              (ue[(i.prop = e)] = i),
              t.targetTest && (le.push(i), (se[e] = 1)),
              (e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin");
          }
          _(e, i), t.register && t.register(cr, i, ur);
        })(t);
      });
    },
    timeline: function (t) {
      return new Ue(t);
    },
    getTweensOf: function (t, e) {
      return _t.getTweensOf(t, e);
    },
    getProperty: function (t, e, r, n) {
      i(t) && (t = Te(t)[0]);
      var s = g(t || {}).get,
        a = r ? O : M;
      return (
        "native" === r && (r = ""),
        t
          ? e
            ? a(((ue[e] && ue[e].get) || s)(t, e, r, n))
            : function (e, r, i) {
                return a(((ue[e] && ue[e].get) || s)(t, e, r, i));
              }
          : t
      );
    },
    quickSetter: function (t, e, r) {
      if (1 < (t = Te(t)).length) {
        var i = t.map(function (t) {
            return cr.quickSetter(t, e, r);
          }),
          n = i.length;
        return function (t) {
          for (var e = n; e--; ) i[e](t);
        };
      }
      t = t[0] || {};
      var s = ue[e],
        a = g(t),
        o = (a.harness && (a.harness.aliases || {})[e]) || e,
        u = s
          ? function (e) {
              var i = new s();
              (xt._pt = 0), i.init(t, r ? e + r : e, xt, 0, [t]), i.render(1, i), xt._pt && nr(1, xt);
            }
          : a.set(t, o);
      return s
        ? u
        : function (e) {
            return u(t, o, r ? e + r : e, a, 1);
          };
    },
    isTweening: function (t) {
      return 0 < _t.getTweensOf(t, !0).length;
    },
    defaults: function (t) {
      return t && t.ease && (t.ease = Re(t.ease, Ut.ease)), C(Ut, t || {});
    },
    config: function (t) {
      return C(Yt, t || {});
    },
    registerEffect: function (t) {
      var e = t.name,
        r = t.effect,
        i = t.plugins,
        n = t.defaults,
        s = t.extendTimeline;
      (i || "").split(",").forEach(function (t) {
        return t && !ue[t] && !ne[t] && c(e + " effect requires " + t + " plugin.");
      }),
        (he[e] = function (t, e, i) {
          return r(Te(t), k(e || {}, n), i);
        }),
        s &&
          (Ue.prototype[e] = function (t, r, i) {
            return this.add(he[e](t, o(r) ? r : (i = r) && {}, this), i);
          });
    },
    registerEase: function (t, e) {
      De[t] = Re(e);
    },
    parseEase: function (t, e) {
      return arguments.length ? Re(t, e) : De;
    },
    getById: function (t) {
      return _t.getById(t);
    },
    exportRoot: function (t, e) {
      void 0 === t && (t = {});
      var r,
        i,
        n = new Ue(t);
      for (
        n.smoothChildTiming = u(t.smoothChildTiming),
          _t.remove(n),
          n._dp = 0,
          n._time = n._tTime = _t._time,
          r = _t._first;
        r;

      )
        (i = r._next),
          (!e && !r._dur && r instanceof We && r.vars.onComplete === r._targets[0]) || Y(n, r, r._start - r._delay),
          (r = i);
      return Y(_t, n, 0), n;
    },
    utils: {
      wrap: function t(e, r, i) {
        var n = r - e;
        return Zt(e)
          ? K(e, t(0, e.length), r)
          : j(i, function (t) {
              return ((n + ((t - e) % n)) % n) + e;
            });
      },
      wrapYoyo: function t(e, r, i) {
        var n = r - e,
          s = 2 * n;
        return Zt(e)
          ? K(e, t(0, e.length - 1), r)
          : j(i, function (t) {
              return e + (n < (t = (s + ((t - e) % s)) % s || 0) ? s - t : t);
            });
      },
      distribute: H,
      random: J,
      snap: $,
      normalize: function (t, e, r) {
        return xe(t, e, 0, 1, r);
      },
      getUnit: Q,
      clamp: function (t, e, r) {
        return j(r, function (r) {
          return ve(t, e, r);
        });
      },
      splitColor: nt,
      toArray: Te,
      selector: function (t) {
        return (
          (t = Te(t)[0] || c("Invalid scope") || {}),
          function (e) {
            var r = t.current || t.nativeElement || t;
            return Te(e, r.querySelectorAll ? r : r === t ? c("Invalid scope") || gt.createElement("div") : t);
          }
        );
      },
      mapRange: xe,
      pipe: function () {
        for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
        return function (t) {
          return e.reduce(function (t, e) {
            return e(t);
          }, t);
        };
      },
      unitize: function (t, e) {
        return function (r) {
          return t(parseFloat(r)) + (e || Q(r));
        };
      },
      interpolate: function t(e, r, n, s) {
        var a = isNaN(e + r)
          ? 0
          : function (t) {
              return (1 - t) * e + t * r;
            };
        if (!a) {
          var o,
            u,
            h,
            f,
            l,
            p = i(e),
            c = {};
          if ((!0 === n && (s = 1) && (n = null), p)) (e = { p: e }), (r = { p: r });
          else if (Zt(e) && !Zt(r)) {
            for (h = [], f = e.length, l = f - 2, u = 1; u < f; u++) h.push(t(e[u - 1], e[u]));
            f--,
              (a = function (t) {
                t *= f;
                var e = Math.min(l, ~~t);
                return h[e](t - e);
              }),
              (n = r);
          } else s || (e = ce(Zt(e) ? [] : {}, e));
          if (!h) {
            for (o in r) qe.call(c, e, o, "get", r[o]);
            a = function (t) {
              return nr(t, c) || (p ? e.p : e);
            };
          }
        }
        return j(n, a);
      },
      shuffle: W,
    },
    install: l,
    effects: he,
    ticker: Ae,
    updateRoot: Ue.updateRoot,
    plugins: ue,
    globalTimeline: _t,
    core: {
      PropTween: ur,
      globals: _,
      Tween: We,
      Timeline: Ue,
      Animation: Le,
      getCache: g,
      _removeLinkedListItem: S,
      suppressOverwrites: function (t) {
        return (ct = t);
      },
    },
  };
  function lr(t, e) {
    for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e; ) r = r._next;
    return r;
  }
  function pr(t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, r, n) {
        n._onInit = function (t) {
          var n, s;
          if (
            (i(r) &&
              ((n = {}),
              y(r, function (t) {
                return (n[t] = 1);
              }),
              (r = n)),
            e)
          ) {
            for (s in ((n = {}), r)) n[s] = e(r[s]);
            r = n;
          }
          !(function (t, e) {
            var r,
              i,
              n,
              s = t._targets;
            for (r in e)
              for (i = s.length; i--; )
                (n = (n = t._ptLookup[i][r]) && n.d) &&
                  (n._pt && (n = lr(n, r)), n && n.modifier && n.modifier(e[r], t, s[i], r));
          })(t, r);
        };
      },
    };
  }
  y("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
    return (fr[t] = We[t]);
  }),
    Ae.add(Ue.updateRoot),
    (xt = fr.to({}, { duration: 0 }));
  var cr =
    fr.registerPlugin(
      {
        name: "attr",
        init: function (t, e, r, i, n) {
          var s, a;
          for (s in e)
            (a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], i, n, 0, 0, s)) && (a.op = s),
              this._props.push(s);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var r = e.length; r--; ) this.add(t, r, t[r] || 0, e[r]);
        },
      },
      pr("roundProps", Z),
      pr("modifiers"),
      pr("snap", $)
    ) || fr;
  function _r(t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function dr(t, e) {
    return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  }
  function mr(t, e) {
    return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e);
  }
  function gr(t, e) {
    var r = e.s + e.c * t;
    e.set(e.t, e.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + e.u, e);
  }
  function vr(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  }
  function yr(t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  }
  function Tr(t, e, r) {
    return (t.style[e] = r);
  }
  function xr(t, e, r) {
    return t.style.setProperty(e, r);
  }
  function wr(t, e, r) {
    return (t._gsap[e] = r);
  }
  function br(t, e, r) {
    return (t._gsap.scaleX = t._gsap.scaleY = r);
  }
  function Mr(t, e, r, i, n) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = r), s.renderTransform(n, s);
  }
  function Or(t, e, r, i, n) {
    var s = t._gsap;
    (s[e] = r), s.renderTransform(n, s);
  }
  function kr(t, e) {
    var r = Gr.createElementNS
      ? Gr.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t)
      : Gr.createElement(t);
    return r.style ? r : Gr.createElement(t);
  }
  function Ar(t, e, r) {
    var i = getComputedStyle(t);
    return (
      i[e] ||
      i.getPropertyValue(e.replace(xi, "-$1").toLowerCase()) ||
      i.getPropertyValue(e) ||
      (!r && Ar(t, Ci(e) || e, 1)) ||
      ""
    );
  }
  function Cr() {
    "undefined" != typeof window &&
      window.document &&
      ((Qr = window),
      (Gr = Qr.document),
      (Wr = Gr.documentElement),
      (Zr = kr("div") || { style: {} }),
      kr("div"),
      (Oi = Ci(Oi)),
      (ki = Oi + "Origin"),
      (Zr.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"),
      (Jr = !!Ci("perspective")),
      (Hr = 1));
  }
  function Dr(t) {
    var e,
      r = kr(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"
      ),
      i = this.parentNode,
      n = this.nextSibling,
      s = this.style.cssText;
    if ((Wr.appendChild(r), r.appendChild(this), (this.style.display = "block"), t))
      try {
        (e = this.getBBox()), (this._gsapBBox = this.getBBox), (this.getBBox = Dr);
      } catch (t) {}
    else this._gsapBBox && (e = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Wr.removeChild(r), (this.style.cssText = s), e;
  }
  function Pr(t, e) {
    for (var r = e.length; r--; ) if (t.hasAttribute(e[r])) return t.getAttribute(e[r]);
  }
  function Sr(t) {
    var e;
    try {
      e = t.getBBox();
    } catch (r) {
      e = Dr.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === Dr || (e = Dr.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : { x: +Pr(t, ["x", "cx", "x1"]) || 0, y: +Pr(t, ["y", "cy", "y1"]) || 0, width: 0, height: 0 }
    );
  }
  function zr(t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !Sr(t));
  }
  function Rr(t, e) {
    if (e) {
      var r = t.style;
      e in gi && e !== ki && (e = Oi),
        r.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) || (e = "-" + e),
            r.removeProperty(e.replace(xi, "-$1").toLowerCase()))
          : r.removeAttribute(e);
    }
  }
  function Er(t, e, r, i, n, s) {
    var a = new ur(t._pt, e, r, 0, 1, s ? yr : vr);
    return ((t._pt = a).b = i), (a.e = n), t._props.push(r), a;
  }
  function Fr(t, e, r, i) {
    var n,
      s,
      a,
      o,
      u = parseFloat(r) || 0,
      h = (r + "").trim().substr((u + "").length) || "px",
      f = Zr.style,
      l = wi.test(e),
      p = "svg" === t.tagName.toLowerCase(),
      c = (p ? "client" : "offset") + (l ? "Width" : "Height"),
      _ = "px" === i,
      d = "%" === i;
    return i === h || !u || Di[i] || Di[h]
      ? u
      : ("px" === h || _ || (u = Fr(t, e, r, "px")),
        (o = t.getCTM && zr(t)),
        (!d && "%" !== h) || (!gi[e] && !~e.indexOf("adius"))
          ? ((f[l ? "width" : "height"] = 100 + (_ ? h : i)),
            (s = ~e.indexOf("adius") || ("em" === i && t.appendChild && !p) ? t : t.parentNode),
            o && (s = (t.ownerSVGElement || {}).parentNode),
            (s && s !== Gr && s.appendChild) || (s = Gr.body),
            (a = s._gsap) && d && a.width && l && a.time === Ae.time
              ? T((u / a.width) * 100)
              : ((!d && "%" !== h) || (f.position = Ar(t, "position")),
                s === t && (f.position = "static"),
                s.appendChild(Zr),
                (n = Zr[c]),
                s.removeChild(Zr),
                (f.position = "absolute"),
                l && d && (((a = g(s)).time = Ae.time), (a.width = s[c])),
                T(_ ? (n * u) / 100 : n && u ? (100 / n) * u : 0)))
          : ((n = o ? t.getBBox()[l ? "width" : "height"] : t[c]), T(d ? (u / n) * 100 : (u / 100) * n)));
  }
  function Br(t, e, r, i) {
    var n;
    return (
      Hr || Cr(),
      e in Mi && "transform" !== e && ~(e = Mi[e]).indexOf(",") && (e = e.split(",")[0]),
      gi[e] && "transform" !== e
        ? ((n = Ei(t, i)),
          (n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : Fi(Ar(t, ki)) + " " + n.zOrigin + "px"))
        : ((n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(")) ||
          (n = (Si[e] && Si[e](t, e, r)) || Ar(t, e) || v(t, e) || ("opacity" === e ? 1 : 0)),
      r && !~(n + "").trim().indexOf(" ") ? Fr(t, e, n, r) + r : n
    );
  }
  function Ir(t, e, r, i) {
    if (!r || "none" === r) {
      var n = Ci(e, t, 1),
        s = n && Ar(t, n, 1);
      s && s !== r ? ((e = n), (r = s)) : "borderColor" === e && (r = Ar(t, "borderTopColor"));
    }
    var a,
      o,
      u,
      h,
      f,
      l,
      p,
      c,
      _,
      d,
      m,
      g,
      v = new ur(this._pt, t.style, e, 0, 1, ir),
      y = 0,
      T = 0;
    if (
      ((v.b = r),
      (v.e = i),
      (r += ""),
      "auto" == (i += "") && ((t.style[e] = i), (i = Ar(t, e) || i), (t.style[e] = r)),
      ot((a = [r, i])),
      (i = a[1]),
      (u = (r = a[0]).match(Kt) || []),
      (i.match(Kt) || []).length)
    ) {
      for (; (o = Kt.exec(i)); )
        (p = o[0]),
          (_ = i.substring(y, o.index)),
          f ? (f = (f + 1) % 5) : ("rgba(" !== _.substr(-5) && "hsla(" !== _.substr(-5)) || (f = 1),
          p !== (l = u[T++] || "") &&
            ((h = parseFloat(l) || 0),
            (m = l.substr((h + "").length)),
            (g = "=" === p.charAt(1) ? +(p.charAt(0) + "1") : 0) && (p = p.substr(2)),
            (c = parseFloat(p)),
            (d = p.substr((c + "").length)),
            (y = Kt.lastIndex - d.length),
            d || ((d = d || Yt.units[e] || m), y === i.length && ((i += d), (v.e += d))),
            m !== d && (h = Fr(t, e, l, d) || 0),
            (v._pt = {
              _next: v._pt,
              p: _ || 1 === T ? _ : ",",
              s: h,
              c: g ? g * c : c - h,
              m: (f && f < 4) || "zIndex" === e ? Math.round : 0,
            }));
      v.c = y < i.length ? i.substring(y, i.length) : "";
    } else v.r = "display" === e && "none" === i ? yr : vr;
    return ee.test(i) && (v.e = 0), (this._pt = v);
  }
  function Lr(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var r,
        i,
        n,
        s = e.t,
        a = s.style,
        o = e.u,
        u = s._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (i = 1);
      else
        for (n = (o = o.split(",")).length; -1 < --n; )
          (r = o[n]), gi[r] && ((i = 1), (r = "transformOrigin" === r ? ki : Oi)), Rr(s, r);
      i && (Rr(s, Oi), u && (u.svg && s.removeAttribute("transform"), Ei(s, 1), (u.uncache = 1)));
    }
  }
  function Yr(t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  }
  function Ur(t) {
    var e = Ar(t, Oi);
    return Yr(e) ? zi : e.substr(7).match(Jt).map(T);
  }
  function Nr(t, e) {
    var r,
      i,
      n,
      s,
      a = t._gsap || g(t),
      o = t.style,
      u = Ur(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",")
        ? zi
        : u
      : (u !== zi ||
          t.offsetParent ||
          t === Wr ||
          a.svg ||
          ((n = o.display),
          (o.display = "block"),
          ((r = t.parentNode) && t.offsetParent) || ((s = 1), (i = t.nextSibling), Wr.appendChild(t)),
          (u = Ur(t)),
          n ? (o.display = n) : Rr(t, "display"),
          s && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Wr.removeChild(t))),
        e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
  }
  function Xr(t, e, r, i, n, s) {
    var a,
      o,
      u,
      h = t._gsap,
      f = n || Nr(t, !0),
      l = h.xOrigin || 0,
      p = h.yOrigin || 0,
      c = h.xOffset || 0,
      _ = h.yOffset || 0,
      d = f[0],
      m = f[1],
      g = f[2],
      v = f[3],
      y = f[4],
      T = f[5],
      x = e.split(" "),
      w = parseFloat(x[0]) || 0,
      b = parseFloat(x[1]) || 0;
    r
      ? f !== zi &&
        (o = d * v - m * g) &&
        ((u = w * (-m / o) + b * (d / o) - (d * T - m * y) / o),
        (w = w * (v / o) + b * (-g / o) + (g * T - v * y) / o),
        (b = u))
      : ((w = (a = Sr(t)).x + (~x[0].indexOf("%") ? (w / 100) * a.width : w)),
        (b = a.y + (~(x[1] || x[0]).indexOf("%") ? (b / 100) * a.height : b))),
      i || (!1 !== i && h.smooth)
        ? ((y = w - l), (T = b - p), (h.xOffset = c + (y * d + T * g) - y), (h.yOffset = _ + (y * m + T * v) - T))
        : (h.xOffset = h.yOffset = 0),
      (h.xOrigin = w),
      (h.yOrigin = b),
      (h.smooth = !!i),
      (h.origin = e),
      (h.originIsAbsolute = !!r),
      (t.style[ki] = "0px 0px"),
      s &&
        (Er(s, h, "xOrigin", l, w),
        Er(s, h, "yOrigin", p, b),
        Er(s, h, "xOffset", c, h.xOffset),
        Er(s, h, "yOffset", _, h.yOffset)),
      t.setAttribute("data-svg-origin", w + " " + b);
  }
  function qr(t, e, r) {
    var i = Q(e);
    return T(parseFloat(e) + parseFloat(Fr(t, "x", r + "px", i))) + i;
  }
  function Vr(t, e) {
    for (var r in e) t[r] = e[r];
    return t;
  }
  function jr(t, e, r) {
    var i,
      n,
      s,
      a,
      o,
      u,
      h,
      f = Vr({}, r._gsap),
      l = r.style;
    for (n in (f.svg
      ? ((s = r.getAttribute("transform")),
        r.setAttribute("transform", ""),
        (l[Oi] = e),
        (i = Ei(r, 1)),
        Rr(r, Oi),
        r.setAttribute("transform", s))
      : ((s = getComputedStyle(r)[Oi]), (l[Oi] = e), (i = Ei(r, 1)), (l[Oi] = s)),
    gi))
      (s = f[n]) !== (a = i[n]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 &&
        ((o = Q(s) !== (h = Q(a)) ? Fr(r, n, s, h) : parseFloat(s)),
        (u = parseFloat(a)),
        (t._pt = new ur(t._pt, i, n, o, u - o, _r)),
        (t._pt.u = h || 0),
        t._props.push(n));
    Vr(i, f);
  }
  (We.version = Ue.version = cr.version = "3.7.0"), (yt = 1), h() && Ce();
  var Qr,
    Gr,
    Wr,
    Hr,
    Zr,
    $r,
    Jr,
    Kr = De.Power0,
    ti = De.Power1,
    ei = De.Power2,
    ri = De.Power3,
    ii = De.Power4,
    ni = De.Linear,
    si = De.Quad,
    ai = De.Cubic,
    oi = De.Quart,
    ui = De.Quint,
    hi = De.Strong,
    fi = De.Elastic,
    li = De.Back,
    pi = De.SteppedEase,
    ci = De.Bounce,
    _i = De.Sine,
    di = De.Expo,
    mi = De.Circ,
    gi = {},
    vi = 180 / Math.PI,
    yi = Math.PI / 180,
    Ti = Math.atan2,
    xi = /([A-Z])/g,
    wi = /(?:left|right|width|margin|padding|x)/i,
    bi = /[\s,\(]\S/,
    Mi = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" },
    Oi = "transform",
    ki = Oi + "Origin",
    Ai = "O,Moz,ms,Ms,Webkit".split(","),
    Ci = function (t, e, r) {
      var i = (e || Zr).style,
        n = 5;
      if (t in i && !r) return t;
      for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(Ai[n] + t in i); );
      return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? Ai[n] : "") + t;
    },
    Di = { deg: 1, rad: 1, turn: 1 },
    Pi = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
    Si = {
      clearProps: function (t, e, r, i, n) {
        if ("isFromStart" !== n.data) {
          var s = (t._pt = new ur(t._pt, e, r, 0, 0, Lr));
          return (s.u = i), (s.pr = -10), (s.tween = n), t._props.push(r), 1;
        }
      },
    },
    zi = [1, 0, 0, 1, 0, 0],
    Ri = {},
    Ei = function (t, e) {
      var r = t._gsap || new Ie(t);
      if ("x" in r && !e && !r.uncache) return r;
      var i,
        n,
        s,
        a,
        o,
        u,
        h,
        f,
        l,
        p,
        c,
        _,
        d,
        m,
        g,
        v,
        y,
        x,
        w,
        b,
        M,
        O,
        k,
        A,
        C,
        D,
        P,
        S,
        z,
        R,
        E,
        F,
        B = t.style,
        I = r.scaleX < 0,
        L = "deg",
        Y = Ar(t, ki) || "0";
      return (
        (i = n = s = u = h = f = l = p = c = 0),
        (a = o = 1),
        (r.svg = !(!t.getCTM || !zr(t))),
        (m = Nr(t, r.svg)),
        r.svg &&
          Xr(
            t,
            (A = (!r.uncache || "0px 0px" === Y) && !e && t.getAttribute("data-svg-origin")) || Y,
            !!A || r.originIsAbsolute,
            !1 !== r.smooth,
            m
          ),
        (_ = r.xOrigin || 0),
        (d = r.yOrigin || 0),
        m !== zi &&
          ((x = m[0]),
          (w = m[1]),
          (b = m[2]),
          (M = m[3]),
          (i = O = m[4]),
          (n = k = m[5]),
          6 === m.length
            ? ((a = Math.sqrt(x * x + w * w)),
              (o = Math.sqrt(M * M + b * b)),
              (u = x || w ? Ti(w, x) * vi : 0),
              (l = b || M ? Ti(b, M) * vi + u : 0) && (o *= Math.abs(Math.cos(l * yi))),
              r.svg && ((i -= _ - (_ * x + d * b)), (n -= d - (_ * w + d * M))))
            : ((F = m[6]),
              (R = m[7]),
              (P = m[8]),
              (S = m[9]),
              (z = m[10]),
              (E = m[11]),
              (i = m[12]),
              (n = m[13]),
              (s = m[14]),
              (h = (g = Ti(F, z)) * vi),
              g &&
                ((A = O * (v = Math.cos(-g)) + P * (y = Math.sin(-g))),
                (C = k * v + S * y),
                (D = F * v + z * y),
                (P = O * -y + P * v),
                (S = k * -y + S * v),
                (z = F * -y + z * v),
                (E = R * -y + E * v),
                (O = A),
                (k = C),
                (F = D)),
              (f = (g = Ti(-b, z)) * vi),
              g &&
                ((v = Math.cos(-g)),
                (E = M * (y = Math.sin(-g)) + E * v),
                (x = A = x * v - P * y),
                (w = C = w * v - S * y),
                (b = D = b * v - z * y)),
              (u = (g = Ti(w, x)) * vi),
              g &&
                ((A = x * (v = Math.cos(g)) + w * (y = Math.sin(g))),
                (C = O * v + k * y),
                (w = w * v - x * y),
                (k = k * v - O * y),
                (x = A),
                (O = C)),
              h && 359.9 < Math.abs(h) + Math.abs(u) && ((h = u = 0), (f = 180 - f)),
              (a = T(Math.sqrt(x * x + w * w + b * b))),
              (o = T(Math.sqrt(k * k + F * F))),
              (g = Ti(O, k)),
              (l = 2e-4 < Math.abs(g) ? g * vi : 0),
              (c = E ? 1 / (E < 0 ? -E : E) : 0)),
          r.svg &&
            ((A = t.getAttribute("transform")),
            (r.forceCSS = t.setAttribute("transform", "") || !Yr(Ar(t, Oi))),
            A && t.setAttribute("transform", A))),
        90 < Math.abs(l) &&
          Math.abs(l) < 270 &&
          (I
            ? ((a *= -1), (l += u <= 0 ? 180 : -180), (u += u <= 0 ? 180 : -180))
            : ((o *= -1), (l += l <= 0 ? 180 : -180))),
        (r.x =
          i -
          ((r.xPercent = i && (r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0)))
            ? (t.offsetWidth * r.xPercent) / 100
            : 0) +
          "px"),
        (r.y =
          n -
          ((r.yPercent = n && (r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0)))
            ? (t.offsetHeight * r.yPercent) / 100
            : 0) +
          "px"),
        (r.z = s + "px"),
        (r.scaleX = T(a)),
        (r.scaleY = T(o)),
        (r.rotation = T(u) + L),
        (r.rotationX = T(h) + L),
        (r.rotationY = T(f) + L),
        (r.skewX = l + L),
        (r.skewY = p + L),
        (r.transformPerspective = c + "px"),
        (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (B[ki] = Fi(Y)),
        (r.xOffset = r.yOffset = 0),
        (r.force3D = Yt.force3D),
        (r.renderTransform = r.svg ? Ni : Jr ? Ui : Bi),
        (r.uncache = 0),
        r
      );
    },
    Fi = function (t) {
      return (t = t.split(" "))[0] + " " + t[1];
    },
    Bi = function (t, e) {
      (e.z = "0px"), (e.rotationY = e.rotationX = "0deg"), (e.force3D = 0), Ui(t, e);
    },
    Ii = "0deg",
    Li = "0px",
    Yi = ") ",
    Ui = function (t, e) {
      var r = e || this,
        i = r.xPercent,
        n = r.yPercent,
        s = r.x,
        a = r.y,
        o = r.z,
        u = r.rotation,
        h = r.rotationY,
        f = r.rotationX,
        l = r.skewX,
        p = r.skewY,
        c = r.scaleX,
        _ = r.scaleY,
        d = r.transformPerspective,
        m = r.force3D,
        g = r.target,
        v = r.zOrigin,
        y = "",
        T = ("auto" === m && t && 1 !== t) || !0 === m;
      if (v && (f !== Ii || h !== Ii)) {
        var x,
          w = parseFloat(h) * yi,
          b = Math.sin(w),
          M = Math.cos(w);
        (w = parseFloat(f) * yi),
          (s = qr(g, s, b * (x = Math.cos(w)) * -v)),
          (a = qr(g, a, -Math.sin(w) * -v)),
          (o = qr(g, o, M * x * -v + v));
      }
      d !== Li && (y += "perspective(" + d + Yi),
        (i || n) && (y += "translate(" + i + "%, " + n + "%) "),
        (!T && s === Li && a === Li && o === Li) ||
          (y += o !== Li || T ? "translate3d(" + s + ", " + a + ", " + o + ") " : "translate(" + s + ", " + a + Yi),
        u !== Ii && (y += "rotate(" + u + Yi),
        h !== Ii && (y += "rotateY(" + h + Yi),
        f !== Ii && (y += "rotateX(" + f + Yi),
        (l === Ii && p === Ii) || (y += "skew(" + l + ", " + p + Yi),
        (1 === c && 1 === _) || (y += "scale(" + c + ", " + _ + Yi),
        (g.style[Oi] = y || "translate(0, 0)");
    },
    Ni = function (t, e) {
      var r,
        i,
        n,
        s,
        a,
        o = e || this,
        u = o.xPercent,
        h = o.yPercent,
        f = o.x,
        l = o.y,
        p = o.rotation,
        c = o.skewX,
        _ = o.skewY,
        d = o.scaleX,
        m = o.scaleY,
        g = o.target,
        v = o.xOrigin,
        y = o.yOrigin,
        x = o.xOffset,
        w = o.yOffset,
        b = o.forceCSS,
        M = parseFloat(f),
        O = parseFloat(l);
      (p = parseFloat(p)),
        (c = parseFloat(c)),
        (_ = parseFloat(_)) && ((c += _ = parseFloat(_)), (p += _)),
        p || c
          ? ((p *= yi),
            (c *= yi),
            (r = Math.cos(p) * d),
            (i = Math.sin(p) * d),
            (n = Math.sin(p - c) * -m),
            (s = Math.cos(p - c) * m),
            c &&
              ((_ *= yi),
              (a = Math.tan(c - _)),
              (n *= a = Math.sqrt(1 + a * a)),
              (s *= a),
              _ && ((a = Math.tan(_)), (r *= a = Math.sqrt(1 + a * a)), (i *= a))),
            (r = T(r)),
            (i = T(i)),
            (n = T(n)),
            (s = T(s)))
          : ((r = d), (s = m), (i = n = 0)),
        ((M && !~(f + "").indexOf("px")) || (O && !~(l + "").indexOf("px"))) &&
          ((M = Fr(g, "x", f, "px")), (O = Fr(g, "y", l, "px"))),
        (v || y || x || w) && ((M = T(M + v - (v * r + y * n) + x)), (O = T(O + y - (v * i + y * s) + w))),
        (u || h) && ((M = T(M + (u / 100) * (a = g.getBBox()).width)), (O = T(O + (h / 100) * a.height))),
        (a = "matrix(" + r + "," + i + "," + n + "," + s + "," + M + "," + O + ")"),
        g.setAttribute("transform", a),
        b && (g.style[Oi] = a);
    };
  y("padding,margin,Width,Radius", function (t, e) {
    var r = "Right",
      i = "Bottom",
      n = "Left",
      s = (e < 3 ? ["Top", r, i, n] : ["Top" + n, "Top" + r, i + r, i + n]).map(function (r) {
        return e < 2 ? t + r : "border" + r + t;
      });
    Si[1 < e ? "border" + t : t] = function (t, e, r, i, n) {
      var a, o;
      if (arguments.length < 4)
        return (
          (a = s.map(function (e) {
            return Br(t, e, r);
          })),
          5 === (o = a.join(" ")).split(a[0]).length ? a[0] : o
        );
      (a = (i + "").split(" ")),
        (o = {}),
        s.forEach(function (t, e) {
          return (o[t] = a[e] = a[e] || a[((e - 1) / 2) | 0]);
        }),
        t.init(e, o, n);
    };
  });
  var Xi,
    qi,
    Vi,
    ji = {
      name: "css",
      register: Cr,
      targetTest: function (t) {
        return t.style && t.nodeType;
      },
      init: function (t, e, r, n, s) {
        var a,
          o,
          u,
          h,
          f,
          l,
          c,
          _,
          d,
          m,
          g,
          v,
          y,
          T,
          x,
          w,
          b,
          M,
          O,
          k,
          A,
          C,
          D,
          P,
          S,
          z,
          R,
          E,
          F,
          B,
          I,
          L,
          Y = this._props,
          U = t.style,
          N = r.vars.startAt;
        for (c in (Hr || Cr(), e))
          if ("autoRound" !== c && ((o = e[c]), !ue[c] || !Ne(c, e, r, n, t, s)))
            if (
              ((f = typeof o),
              (l = Si[c]),
              "function" === f && (f = typeof (o = o.call(r, n, t, s))),
              "string" === f && ~o.indexOf("random(") && (o = tt(o)),
              l)
            )
              l(this, t, c, o, r) && (x = 1);
            else if ("--" === c.substr(0, 2))
              (a = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
                (o += ""),
                (Oe.lastIndex = 0),
                Oe.test(a) || ((_ = Q(a)), (d = Q(o))),
                d ? _ !== d && (a = Fr(t, c, a, d) + d) : _ && (o += _),
                this.add(U, "setProperty", a, o, n, s, 0, 0, c),
                Y.push(c);
            else if ("undefined" !== f) {
              if (
                (N && c in N
                  ? ((a = "function" == typeof N[c] ? N[c].call(r, n, t, s) : N[c]),
                    c in Yt.units && !Q(a) && (a += Yt.units[c]),
                    "=" === (a + "").charAt(1) && (a = Br(t, c)))
                  : (a = Br(t, c)),
                (h = parseFloat(a)),
                (m = "string" === f && "=" === o.charAt(1) ? +(o.charAt(0) + "1") : 0) && (o = o.substr(2)),
                (u = parseFloat(o)),
                c in Mi &&
                  ("autoAlpha" === c &&
                    (1 === h && "hidden" === Br(t, "visibility") && u && (h = 0),
                    Er(this, U, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)),
                  "scale" !== c && "transform" !== c && ~(c = Mi[c]).indexOf(",") && (c = c.split(",")[0])),
                (g = c in gi))
              )
                if (
                  (v ||
                    (((y = t._gsap).renderTransform && !e.parseTransform) || Ei(t, e.parseTransform),
                    (T = !1 !== e.smoothOrigin && y.smooth),
                    ((v = this._pt = new ur(this._pt, U, Oi, 0, 1, y.renderTransform, y, 0, -1)).dep = 1)),
                  "scale" === c)
                )
                  (this._pt = new ur(this._pt, y, "scaleY", y.scaleY, (m ? m * u : u - y.scaleY) || 0)),
                    Y.push("scaleY", c),
                    (c += "X");
                else {
                  if ("transformOrigin" === c) {
                    (B = void 0),
                      (I = void 0),
                      (L = void 0),
                      (B = (F = o).split(" ")),
                      (I = B[0]),
                      (L = B[1] || "50%"),
                      ("top" !== I && "bottom" !== I && "left" !== L && "right" !== L) || ((F = I), (I = L), (L = F)),
                      (B[0] = Pi[I] || I),
                      (B[1] = Pi[L] || L),
                      (o = B.join(" ")),
                      y.svg
                        ? Xr(t, o, 0, T, 0, this)
                        : ((d = parseFloat(o.split(" ")[2]) || 0) !== y.zOrigin && Er(this, y, "zOrigin", y.zOrigin, d),
                          Er(this, U, c, Fi(a), Fi(o)));
                    continue;
                  }
                  if ("svgOrigin" === c) {
                    Xr(t, o, 1, T, 0, this);
                    continue;
                  }
                  if (c in Ri) {
                    (w = this),
                      (b = y),
                      (M = c),
                      (O = h),
                      (A = m),
                      (C = void 0),
                      (D = void 0),
                      void 0,
                      void 0,
                      void 0,
                      (R = void 0),
                      void 0,
                      (P = 360),
                      (S = i((k = o))),
                      (z = parseFloat(k) * (S && ~k.indexOf("rad") ? vi : 1)),
                      (E = O + (R = A ? z * A : z - O) + "deg"),
                      S &&
                        ("short" === (C = k.split("_")[1]) && (R %= P) != R % 180 && (R += R < 0 ? P : -P),
                        "cw" === C && R < 0
                          ? (R = ((R + 36e9) % P) - ~~(R / P) * P)
                          : "ccw" === C && 0 < R && (R = ((R - 36e9) % P) - ~~(R / P) * P)),
                      (w._pt = D = new ur(w._pt, b, M, O, R, dr)),
                      (D.e = E),
                      (D.u = "deg"),
                      w._props.push(M);
                    continue;
                  }
                  if ("smoothOrigin" === c) {
                    Er(this, y, "smooth", y.smooth, o);
                    continue;
                  }
                  if ("force3D" === c) {
                    y[c] = o;
                    continue;
                  }
                  if ("transform" === c) {
                    jr(this, o, t);
                    continue;
                  }
                }
              else c in U || (c = Ci(c) || c);
              if (g || ((u || 0 === u) && (h || 0 === h) && !bi.test(o) && c in U))
                (u = u || 0),
                  (_ = (a + "").substr((h + "").length)) !== (d = Q(o) || (c in Yt.units ? Yt.units[c] : _)) &&
                    (h = Fr(t, c, a, d)),
                  (this._pt = new ur(
                    this._pt,
                    g ? y : U,
                    c,
                    h,
                    m ? m * u : u - h,
                    g || ("px" !== d && "zIndex" !== c) || !1 === e.autoRound ? _r : gr
                  )),
                  (this._pt.u = d || 0),
                  _ !== d && ((this._pt.b = a), (this._pt.r = mr));
              else if (c in U) Ir.call(this, t, c, a, o);
              else {
                if (!(c in t)) {
                  p(c, o);
                  continue;
                }
                this.add(t, c, a || t[c], o, n, s);
              }
              Y.push(c);
            }
        x && or(this);
      },
      get: Br,
      aliases: Mi,
      getSetter: function (t, e, r) {
        var i = Mi[e];
        return (
          i && i.indexOf(",") < 0 && (e = i),
          e in gi && e !== ki && (t._gsap.x || Br(t, "x"))
            ? r && $r === r
              ? "scale" === e
                ? br
                : wr
              : ($r = r || {}) && ("scale" === e ? Mr : Or)
            : t.style && !a(t.style[e])
            ? Tr
            : ~e.indexOf("-")
            ? xr
            : tr(t, e)
        );
      },
      core: { _removeProperty: Rr, _getMatrix: Nr },
    };
  (cr.utils.checkPrefix = Ci),
    (Vi = y(
      (Xi = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
        "," +
        (qi = "rotation,rotationX,rotationY,skewX,skewY") +
        ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
      function (t) {
        gi[t] = 1;
      }
    )),
    y(qi, function (t) {
      (Yt.units[t] = "deg"), (Ri[t] = 1);
    }),
    (Mi[Vi[13]] = Xi + "," + qi),
    y("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function (t) {
      var e = t.split(":");
      Mi[e[1]] = Vi[e[0]];
    }),
    y("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function (t) {
      Yt.units[t] = "px";
    }),
    cr.registerPlugin(ji);
  var Qi = cr.registerPlugin(ji) || cr,
    Gi = Qi.core.Tween;
  (t.Back = li),
    (t.Bounce = ci),
    (t.CSSPlugin = ji),
    (t.Circ = mi),
    (t.Cubic = ai),
    (t.Elastic = fi),
    (t.Expo = di),
    (t.Linear = ni),
    (t.Power0 = Kr),
    (t.Power1 = ti),
    (t.Power2 = ei),
    (t.Power3 = ri),
    (t.Power4 = ii),
    (t.Quad = si),
    (t.Quart = oi),
    (t.Quint = ui),
    (t.Sine = _i),
    (t.SteppedEase = pi),
    (t.Strong = hi),
    (t.TimelineLite = Ue),
    (t.TimelineMax = Ue),
    (t.TweenLite = We),
    (t.TweenMax = Gi),
    (t.default = Qi),
    (t.gsap = Qi),
    "undefined" == typeof window || window !== t
      ? Object.defineProperty(t, "__esModule", { value: !0 })
      : delete t.default;
});
