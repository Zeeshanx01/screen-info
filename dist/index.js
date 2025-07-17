import re, { useState as k, useEffect as te } from "react";
var A = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var L;
function ne() {
  if (L) return R;
  L = 1;
  var t = Symbol.for("react.transitional.element"), l = Symbol.for("react.fragment");
  function i(p, c, u) {
    var b = null;
    if (u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), "key" in c) {
      u = {};
      for (var d in c)
        d !== "key" && (u[d] = c[d]);
    } else u = c;
    return c = u.ref, {
      $$typeof: t,
      type: p,
      key: b,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return R.Fragment = l, R.jsx = i, R.jsxs = i, R;
}
var h = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var M;
function oe() {
  return M || (M = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Q ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case B:
          return "Profiler";
        case U:
          return "StrictMode";
        case G:
          return "Suspense";
        case J:
          return "SuspenseList";
        case Z:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case W:
            return "Portal";
          case X:
            return (e.displayName || "Context") + ".Provider";
          case V:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case H:
            return r = e.displayName || null, r !== null ? r : t(e.type) || "Memo";
          case N:
            r = e._payload, e = e._init;
            try {
              return t(e(r));
            } catch {
            }
        }
      return null;
    }
    function l(e) {
      return "" + e;
    }
    function i(e) {
      try {
        l(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var n = r.error, o = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          o
        ), l(e);
      }
    }
    function p(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === N)
        return "<...>";
      try {
        var r = t(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function c() {
      var e = j.A;
      return e === null ? null : e.getOwner();
    }
    function u() {
      return Error("react-stack-top-frame");
    }
    function b(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, r) {
      function n() {
        Y || (Y = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      n.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: n,
        configurable: !0
      });
    }
    function x() {
      var e = t(this.type);
      return z[e] || (z[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function v(e, r, n, o, m, f, y, w) {
      return n = f.ref, e = {
        $$typeof: C,
        type: e,
        key: r,
        props: f,
        _owner: m
      }, (n !== void 0 ? n : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: x
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: y
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function _(e, r, n, o, m, f, y, w) {
      var a = r.children;
      if (a !== void 0)
        if (o)
          if (K(a)) {
            for (o = 0; o < a.length; o++)
              P(a[o]);
            Object.freeze && Object.freeze(a);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(a);
      if (I.call(r, "key")) {
        a = t(e);
        var E = Object.keys(r).filter(function(ee) {
          return ee !== "key";
        });
        o = 0 < E.length ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}", D[a + o] || (E = 0 < E.length ? "{" + E.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          o,
          a,
          E,
          a
        ), D[a + o] = !0);
      }
      if (a = null, n !== void 0 && (i(n), a = "" + n), b(r) && (i(r.key), a = "" + r.key), "key" in r) {
        n = {};
        for (var O in r)
          O !== "key" && (n[O] = r[O]);
      } else n = r;
      return a && d(
        n,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), v(
        e,
        a,
        f,
        m,
        c(),
        n,
        y,
        w
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === C && e._store && (e._store.validated = 1);
    }
    var g = re, C = Symbol.for("react.transitional.element"), W = Symbol.for("react.portal"), T = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), B = Symbol.for("react.profiler"), V = Symbol.for("react.consumer"), X = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), G = Symbol.for("react.suspense"), J = Symbol.for("react.suspense_list"), H = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), Z = Symbol.for("react.activity"), Q = Symbol.for("react.client.reference"), j = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, K = Array.isArray, S = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var Y, z = {}, F = g["react-stack-bottom-frame"].bind(
      g,
      u
    )(), $ = S(p(u)), D = {};
    h.Fragment = T, h.jsx = function(e, r, n, o, m) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        n,
        !1,
        o,
        m,
        f ? Error("react-stack-top-frame") : F,
        f ? S(p(e)) : $
      );
    }, h.jsxs = function(e, r, n, o, m) {
      var f = 1e4 > j.recentlyCreatedOwnerStacks++;
      return _(
        e,
        r,
        n,
        !0,
        o,
        m,
        f ? Error("react-stack-top-frame") : F,
        f ? S(p(e)) : $
      );
    };
  }()), h;
}
process.env.NODE_ENV === "production" ? A.exports = ne() : A.exports = oe();
var s = A.exports;
const ae = (t) => {
  const l = [], i = [];
  return t >= 640 && l.push("sm"), t >= 768 && l.push("md"), t >= 1024 && l.push("lg"), t >= 1280 && l.push("xl"), t >= 1536 && l.push("2xl"), t < 1536 && i.push("max-2xl"), t < 1280 && i.push("max-xl"), t < 1024 && i.push("max-lg"), t < 768 && i.push("max-md"), t < 640 && i.push("max-sm"), { min: l, max: i };
}, se = (t) => t < 640 ? "base" : t < 768 ? "sm" : t < 1024 ? "md" : t < 1280 ? "lg" : t < 1536 ? "xl" : "2xl";
function le() {
  const [t, l] = k({ width: 0, height: 0 }), [i, p] = k({ min: [], max: [] }), [c, u] = k("base"), [b, d] = k(!1);
  return te(() => {
    const x = () => {
      const v = window.innerWidth, _ = window.innerHeight;
      l({ width: v, height: _ }), p(ae(v)), u(se(v));
    };
    return x(), window.addEventListener("resize", x), () => window.removeEventListener("resize", x);
  }, []), b ? /* @__PURE__ */ s.jsxs(
    "div",
    {
      style: {
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        color: "black",
        backdropFilter: "blur(2px)",
        padding: "1rem",
        borderRadius: "1rem",
        boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        fontSize: "0.85rem",
        fontFamily: "monospace",
        maxWidth: "90vw",
        width: "fit-content"
      },
      children: [
        /* @__PURE__ */ s.jsxs(
          "div",
          {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.5rem"
            },
            children: [
              /* @__PURE__ */ s.jsx("strong", { style: { color: "rgba(0, 0, 0, 0.6)", marginRight: "1rem" }, children: "Screen Info" }),
              /* @__PURE__ */ s.jsx(
                "button",
                {
                  onClick: () => d(!1),
                  style: {
                    fontSize: "0.75rem",
                    padding: "0.25rem 0.5rem",
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer"
                  },
                  children: "Hide"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Primary:" }),
          " ",
          /* @__PURE__ */ s.jsx("span", { style: {
            color: "#4338ca"
            /* indigo-700 */
          }, children: c })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Min Breakpoints:" }),
          " ",
          /* @__PURE__ */ s.jsx("span", { style: {
            color: "#15803d"
            /* green-700 */
          }, children: i.min.join(", ") || "none" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Max Breakpoints:" }),
          " ",
          /* @__PURE__ */ s.jsx("span", { style: {
            color: "#b91c1c"
            /* red-700 */
          }, children: i.max.join(", ") || "none" })
        ] }),
        /* @__PURE__ */ s.jsxs("div", { children: [
          /* @__PURE__ */ s.jsx("strong", { children: "Size:" }),
          " ",
          t.width,
          "px × ",
          t.height,
          "px"
        ] })
      ]
    }
  ) : /* @__PURE__ */ s.jsx(
    "button",
    {
      style: {
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
        padding: "0.25rem 1rem",
        borderRadius: "6px",
        fontSize: "0.75rem",
        opacity: 0.8,
        cursor: "pointer"
      },
      onClick: () => d(!0),
      children: "Show ScreenInfo"
    }
  );
}
export {
  le as default
};
