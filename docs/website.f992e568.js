parcelRequire = (function(e, r, n, t) {
  var i = "function" == typeof parcelRequire && parcelRequire,
    o = "function" == typeof require && require;
  function u(n, t) {
    if (!r[n]) {
      if (!e[n]) {
        var f = "function" == typeof parcelRequire && parcelRequire;
        if (!t && f) return f(n, !0);
        if (i) return i(n, !0);
        if (o && "string" == typeof n) return o(n);
        var c = new Error("Cannot find module '" + n + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function(r) {
        return e[n][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[n] = new u.Module(n));
      e[n][0].call(l.exports, p, l, l.exports, this);
    }
    return r[n].exports;
    function p(e) {
      return u(p.resolve(e));
    }
  }
  (u.isParcelRequire = !0),
    (u.Module = function(e) {
      (this.id = e), (this.bundle = u), (this.exports = {});
    }),
    (u.modules = e),
    (u.cache = r),
    (u.parent = i),
    (u.register = function(r, n) {
      e[r] = [
        function(e, r) {
          r.exports = n;
        },
        {}
      ];
    });
  for (var f = 0; f < n.length; f++) u(n[f]);
  if (n.length) {
    var c = u(n[n.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = c)
      : "function" == typeof define && define.amd
      ? define(function() {
          return c;
        })
      : t && (this[t] = c);
  }
  return u;
})(
  {
    "/xJO": [
      function(require, module, exports) {
        "use strict";
        function e(e, n) {
          for (var t = [], r = [], o = arguments.length; o-- > 2; )
            t.push(arguments[o]);
          for (; t.length; ) {
            var l = t.pop();
            if (l && l.pop) for (o = l.length; o--; ) t.push(l[o]);
            else null != l && !0 !== l && !1 !== l && r.push(l);
          }
          return "function" == typeof e
            ? e(n || {}, r)
            : {
                nodeName: e,
                attributes: n || {},
                children: r,
                key: n && n.key
              };
        }
        function n(e, n, t, r) {
          var o,
            l = [].map,
            u = (r && r.children[0]) || null,
            i =
              u &&
              (function e(n) {
                return {
                  nodeName: n.nodeName.toLowerCase(),
                  attributes: {},
                  children: l.call(n.childNodes, function(n) {
                    return 3 === n.nodeType ? n.nodeValue : e(n);
                  })
                };
              })(u),
            a = [],
            f = !0,
            s = p(e),
            c = (function e(n, t, r) {
              for (var o in r)
                "function" == typeof r[o]
                  ? (function(e, o) {
                      r[e] = function(e) {
                        var l = o(e);
                        return (
                          "function" == typeof l && (l = l(g(n, s), r)),
                          l &&
                            l !== (t = g(n, s)) &&
                            !l.then &&
                            h((s = y(n, p(t, l), s))),
                          l
                        );
                      };
                    })(o, r[o])
                  : e(n.concat(o), (t[o] = p(t[o])), (r[o] = p(r[o])));
              return r;
            })([], s, p(n));
          return h(), c;
          function d(e) {
            return "function" == typeof e ? d(e(s, c)) : null != e ? e : "";
          }
          function v() {
            o = !o;
            var e = d(t);
            for (
              r &&
                !o &&
                (u = (function e(n, t, r, o, l) {
                  if (o === r);
                  else if (null == r || r.nodeName !== o.nodeName) {
                    var u = (function e(n, t) {
                      var r =
                        "string" == typeof n || "number" == typeof n
                          ? document.createTextNode(n)
                          : (t = t || "svg" === n.nodeName)
                          ? document.createElementNS(
                              "http://www.w3.org/2000/svg",
                              n.nodeName
                            )
                          : document.createElement(n.nodeName);
                      var o = n.attributes;
                      if (o) {
                        o.oncreate &&
                          a.push(function() {
                            o.oncreate(r);
                          });
                        for (var l = 0; l < n.children.length; l++)
                          r.appendChild(
                            e((n.children[l] = d(n.children[l])), t)
                          );
                        for (var u in o) b(r, u, o[u], null, t);
                      }
                      return r;
                    })(o, l);
                    n.insertBefore(u, t), null != r && k(n, t, r), (t = u);
                  } else if (null == r.nodeName) t.nodeValue = o;
                  else {
                    !(function(e, n, t, r) {
                      for (var o in p(n, t))
                        t[o] !==
                          ("value" === o || "checked" === o ? e[o] : n[o]) &&
                          b(e, o, t[o], n[o], r);
                      var l = f ? t.oncreate : t.onupdate;
                      l &&
                        a.push(function() {
                          l(e, n);
                        });
                    })(
                      t,
                      r.attributes,
                      o.attributes,
                      (l = l || "svg" === o.nodeName)
                    );
                    for (
                      var i = {},
                        s = {},
                        c = [],
                        v = r.children,
                        h = o.children,
                        y = 0;
                      y < v.length;
                      y++
                    ) {
                      c[y] = t.childNodes[y];
                      var g = m(v[y]);
                      null != g && (i[g] = [c[y], v[y]]);
                    }
                    for (var y = 0, N = 0; N < h.length; ) {
                      var g = m(v[y]),
                        x = m((h[N] = d(h[N])));
                      if (s[g]) y++;
                      else if (null == x || x !== m(v[y + 1]))
                        if (null == x || f)
                          null == g && (e(t, c[y], v[y], h[N], l), N++), y++;
                        else {
                          var T = i[x] || [];
                          g === x
                            ? (e(t, T[0], T[1], h[N], l), y++)
                            : T[0]
                            ? e(t, t.insertBefore(T[0], c[y]), T[1], h[N], l)
                            : e(t, c[y], null, h[N], l),
                            (s[x] = h[N]),
                            N++;
                        }
                      else null == g && k(t, c[y], v[y]), y++;
                    }
                    for (; y < v.length; )
                      null == m(v[y]) && k(t, c[y], v[y]), y++;
                    for (var y in i) s[y] || k(t, i[y][0], i[y][1]);
                  }
                  return t;
                })(r, u, i, (i = e))),
                f = !1;
              a.length;

            )
              a.pop()();
          }
          function h() {
            o || ((o = !0), setTimeout(v));
          }
          function p(e, n) {
            var t = {};
            for (var r in e) t[r] = e[r];
            for (var r in n) t[r] = n[r];
            return t;
          }
          function y(e, n, t) {
            var r = {};
            return e.length
              ? ((r[e[0]] = e.length > 1 ? y(e.slice(1), n, t[e[0]]) : n),
                p(t, r))
              : n;
          }
          function g(e, n) {
            for (var t = 0; t < e.length; ) n = n[e[t++]];
            return n;
          }
          function m(e) {
            return e ? e.key : null;
          }
          function N(e) {
            return e.currentTarget.events[e.type](e);
          }
          function b(e, n, t, r, o) {
            if ("key" === n);
            else if ("style" === n)
              if ("string" == typeof t) e.style.cssText = t;
              else
                for (var l in ("string" == typeof r &&
                  (r = e.style.cssText = ""),
                p(r, t))) {
                  var u = null == t || null == t[l] ? "" : t[l];
                  "-" === l[0] ? e.style.setProperty(l, u) : (e.style[l] = u);
                }
            else
              "o" === n[0] && "n" === n[1]
                ? ((n = n.slice(2)),
                  e.events ? r || (r = e.events[n]) : (e.events = {}),
                  (e.events[n] = t),
                  t
                    ? r || e.addEventListener(n, N)
                    : e.removeEventListener(n, N))
                : n in e &&
                  "list" !== n &&
                  "type" !== n &&
                  "draggable" !== n &&
                  "spellcheck" !== n &&
                  "translate" !== n &&
                  !o
                ? (e[n] = null == t ? "" : t)
                : null != t && !1 !== t && e.setAttribute(n, t),
                (null != t && !1 !== t) || e.removeAttribute(n);
          }
          function k(e, n, t) {
            function r() {
              e.removeChild(
                (function e(n, t) {
                  var r = t.attributes;
                  if (r) {
                    for (var o = 0; o < t.children.length; o++)
                      e(n.childNodes[o], t.children[o]);
                    r.ondestroy && r.ondestroy(n);
                  }
                  return n;
                })(n, t)
              );
            }
            var o = t.attributes && t.attributes.onremove;
            o ? o(n, r) : r();
          }
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.h = e),
          (exports.app = n);
      },
      {}
    ],
    "4NwI": [function(require, module, exports) {}, {}],
    z5eR: [
      function(require, module, exports) {
        module.exports = [
          {
            name: "alert.md",
            shortTip: "Alert user for updates",
            longTip:
              'Make on the fly content changes accessible by making use of `WAI-ARIA` attributes on those elements. When notifying the user about a certain behavior use `aria-live` attribute to let the screen reader know about new changes. Set the value of `aria-live` to `polite` if your changes aren\'t urgent or use `aria-live="assertive"` if you want to notify the user immediately.\n\n',
            links: [
              "[ARIA Live Regions](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)"
            ],
            category: "pro-tip"
          },
          {
            name: "alt-full-stop.md",
            shortTip: "Put a full stop at the end of the `alt` tag",
            longTip:
              "Put a full stop at the end of an image's description inside the `alt` tag, so that screen readers can make a short pause which leads to better user experience.\n\n",
            links: [],
            category: "pro-tip"
          },
          {
            name: "alt-image-text.md",
            shortTip: "Images with text should be accessible to screen readers",
            longTip:
              "Images that contain text in them such as logos should make that text available to screen readers in some form. The most straightforward way to do this is to style a `header` element as image and use `text-indent: -9999px` as its text content.\n\n",
            links: [],
            category: "tip"
          },
          {
            name: "animation-pause.md",
            shortTip: "Allow user to stop an animation",
            longTip:
              "Complex or even simple animations can make it hard for some users to focus on the actual content of the webpage. Therefore your website should allow users to stop animations on the webpage at a particular keyframe.\n\n",
            links: [],
            category: "pro-tip"
          },
          {
            name: "auto-audio.md",
            shortTip: "Avoid auto-playing audio on your website",
            longTip:
              "Do not auto-play any audio or video material on page load. Users with screen readers will hear both 3rd party audio and their screen reader which makes for a poor user experience.\n\n",
            links: [],
            category: "tip"
          },
          {
            name: "contrast.md",
            shortTip: "Always feature optimal contrast",
            longTip:
              "Whenever possible make your websites accessible to the eye by avoiding poor contrast between text and background.\n\n",
            links: [
              "[Accessible color picker](https://cloudflare.design/color/)",
              "[Color contrast docs by MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Perceivable/Color_contrast)"
            ],
            category: "tip"
          },
          {
            name: "focus.md",
            shortTip: "Don't remove `:focus` on elements",
            longTip:
              "If an element is interactive never remove the highlight by setting `outline: none;` on a focused state of that element. If the default browser outline doesn't align with the design be sure to replace it with a custom accessible one instead of hiding it completely. Removing an element's highlight on focus makes filling out forms difficult for some users.\n\n",
            links: [
              "[Focusing on Focus Styles](https://css-tricks.com/focusing-on-focus-styles/)"
            ],
            category: "tip"
          },
          {
            name: "form-label.md",
            shortTip: "Use labels on `form` fields",
            longTip:
              "Once implemented properly, `label` elements make the form accessible. Each `label` element should have a `for` attribute that has the value of the corresponding filed's `id`.\n\n",
            links: [
              "[The `label` element docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form#The_%3Clabel%3E_element)"
            ],
            category: "tip"
          },
          {
            name: "form-validation.md",
            shortTip: "Make self-validating forms accessible",
            longTip:
              "If your form needs to meet specific input criteria and errors on mistaken input be sure to provide feedback to the user. Alongside the common red border include a text-based informative explanation of the encountered error.\n\n",
            links: [
              "[Sensible Forms: A Form Usability Checklist](https://alistapart.com/article/sensibleforms)"
            ],
            category: "tip"
          },
          {
            name: "logical-flow.md",
            shortTip: "HTML should have a logical flow",
            longTip:
              "Some screen readers can not figure out the styled layout, so they work with the plain HTML document to figure out in which order they should read the page. Although many screen readers support styled layouts, the safest method is to structure your HTML in a logical flow, so the content is understandable without the need for styles.\n\n",
            links: [],
            category: "fact"
          },
          {
            name: "logo-alt.md",
            shortTip: "Avoid `alt` tags on images of your logo",
            longTip:
              "Hearing screen readers pronounce the description of your logo over and over gets tiresome. Use a descriptive `alt` tag just on the first image of your logo. Remember to include an empty `alt` tag on others since screen readers will read the image source as the fallback.\n\n",
            links: [],
            category: "pro-tip"
          },
          {
            name: "semantic-elements.md",
            shortTip: "Avoid non-semantic patterns",
            longTip:
              'Use semantic HTML elements that clearly define their content as much as possible. By using semantic elements you provide the user with a more meaningful way to navigate and interact with your website. Semantic elements, such as `<header>`, `<main>` and `<article>` are by default accessible compared to non-semantic elements like `<div>` or `<span>`. Avoid using non-accessible `<div class="button">` when `<button>` is already available to you. If for some reason you must use non-semantic elements be sure to implement accessibility functionality to them.\n\n',
            links: [
              "[Semantics in HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)",
              "[The practical value of semantic HTML](https://www.brucelawson.co.uk/2018/the-practical-value-of-semantic-html/)"
            ],
            category: "tip"
          },
          {
            name: "skip-links.md",
            shortTip: "Use skip-links",
            longTip:
              "Let users skip long navigation by implementing invisible focusable links that leads to the main content. Screen readers perceive the page from top to bottom which means that if there is no skip-link implemented and the website is already familiar to the end user, the screen reader will read redundant navigation.\n\n",
            links: [
              "[Codepen example](https://codepen.io/joe-watkins/pen/rjhiK)"
            ],
            category: "tip"
          },
          {
            name: "tab-friendly.md",
            shortTip: "Make `tab` friendly navigation",
            longTip:
              "Allow users to use keyboard-only navigation on your website by ensuring that all interactive elements are focusable and in a logical order.\n\n",
            links: [
              "[Keyboard navigation explained in detail](https://webaim.org/techniques/keyboard/)"
            ],
            category: "tip"
          },
          {
            name: "table-scope.md",
            shortTip: "Tables should always include scoping in their HTML",
            longTip:
              "Although `scope` attributes aren't mandatory in `table` elements it's is highly recommended to use the `scope` to indicate what type of data each column contains and what should be read out as a row.\n\n",
            links: [
              "[HTML table advanced features and accessibility](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced)"
            ],
            category: "pro-tip"
          },
          {
            name: "table.md",
            shortTip:
              "When you need to display tabular data use `table` instead series of `div` elements",
            longTip:
              "When you need to display some tabular data be sure to use the semantically correct `<table>` element as it is accessible by default, in contrast to non-semantic elements like `<div>`. You should provide a `<caption>` for your `<table>` element and allow users to skip through the table with a skip-link if they don't want it read by the screen reader.\n\n",
            links: [
              "[Semantic table docs](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)"
            ],
            category: "tip"
          },
          {
            name: "testing-li.md",
            shortTip: "Don't rely just on Lighthouse when testing",
            longTip:
              "Testing your websites for accessibility with off the shelf solutions like Lighthouse isn't enough. Instead, manually test your websites. There are great extensions to help you simulate common user conditions.\n\n",
            links: [
              "[The Importance Of Manual Accessibility Testing](https://www.smashingmagazine.com/2018/09/importance-manual-accessibility-testing/)"
            ],
            category: "fact"
          },
          {
            name: "video-captions.md",
            shortTip: "Avoid poor video captions",
            longTip:
              "Videos on your websites should have proper captioning. When transcribing video content, it is considered a good practice to avoid vocal pauses and verbal missteps.\n\n",
            links: [],
            category: "pro-tip"
          }
        ];
      },
      {}
    ],
    "7ceU": [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = t(require("../../data.json"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var r = { tips: e.default };
        exports.default = r;
      },
      { "../../data.json": "z5eR" }
    ],
    sv0e: [
      function(require, module, exports) {
        var define;
        var global = arguments[3];
        var e,
          o = arguments[3];
        !(function(o, n) {
          "object" == typeof exports && "object" == typeof module
            ? (module.exports = n())
            : "function" == typeof e && e.amd
            ? e([], n)
            : "object" == typeof exports
            ? (exports.feather = n())
            : (o.feather = n());
        })("undefined" != typeof self ? self : this, function() {
          return (function(e) {
            var o = {};
            function n(l) {
              if (o[l]) return o[l].exports;
              var i = (o[l] = { i: l, l: !1, exports: {} });
              return (
                e[l].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = e),
              (n.c = o),
              (n.d = function(e, o, l) {
                n.o(e, o) ||
                  Object.defineProperty(e, o, {
                    configurable: !1,
                    enumerable: !0,
                    get: l
                  });
              }),
              (n.r = function(e) {
                Object.defineProperty(e, "__esModule", { value: !0 });
              }),
              (n.n = function(e) {
                var o =
                  e && e.__esModule
                    ? function() {
                        return e.default;
                      }
                    : function() {
                        return e;
                      };
                return n.d(o, "a", o), o;
              }),
              (n.o = function(e, o) {
                return Object.prototype.hasOwnProperty.call(e, o);
              }),
              (n.p = ""),
              n((n.s = 0))
            );
          })({
            "./dist/icons.json": function(e) {
              e.exports = {
                activity:
                  '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
                airplay:
                  '<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',
                "alert-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
                "alert-octagon":
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line>',
                "alert-triangle":
                  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12" y2="17"></line>',
                "align-center":
                  '<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',
                "align-justify":
                  '<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',
                "align-left":
                  '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',
                "align-right":
                  '<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',
                anchor:
                  '<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',
                aperture:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',
                archive:
                  '<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',
                "arrow-down-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',
                "arrow-down-left":
                  '<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',
                "arrow-down-right":
                  '<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',
                "arrow-down":
                  '<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',
                "arrow-left-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',
                "arrow-left":
                  '<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',
                "arrow-right-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',
                "arrow-right":
                  '<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',
                "arrow-up-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',
                "arrow-up-left":
                  '<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',
                "arrow-up-right":
                  '<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',
                "arrow-up":
                  '<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',
                "at-sign":
                  '<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',
                award:
                  '<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',
                "bar-chart-2":
                  '<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',
                "bar-chart":
                  '<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',
                "battery-charging":
                  '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',
                battery:
                  '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',
                "bell-off":
                  '<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                bell:
                  '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',
                bluetooth:
                  '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',
                bold:
                  '<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',
                "book-open":
                  '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',
                book:
                  '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',
                bookmark:
                  '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',
                box:
                  '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line>',
                briefcase:
                  '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
                calendar:
                  '<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',
                "camera-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',
                camera:
                  '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',
                cast:
                  '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2" y2="20"></line>',
                "check-circle":
                  '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
                "check-square":
                  '<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',
                check: '<polyline points="20 6 9 17 4 12"></polyline>',
                "chevron-down": '<polyline points="6 9 12 15 18 9"></polyline>',
                "chevron-left":
                  '<polyline points="15 18 9 12 15 6"></polyline>',
                "chevron-right":
                  '<polyline points="9 18 15 12 9 6"></polyline>',
                "chevron-up": '<polyline points="18 15 12 9 6 15"></polyline>',
                "chevrons-down":
                  '<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',
                "chevrons-left":
                  '<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',
                "chevrons-right":
                  '<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',
                "chevrons-up":
                  '<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',
                chrome:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',
                circle: '<circle cx="12" cy="12" r="10"></circle>',
                clipboard:
                  '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',
                clock:
                  '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
                "cloud-drizzle":
                  '<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-lightning":
                  '<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',
                "cloud-off":
                  '<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                "cloud-rain":
                  '<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',
                "cloud-snow":
                  '<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="8" y1="20" x2="8" y2="20"></line><line x1="12" y1="18" x2="12" y2="18"></line><line x1="12" y1="22" x2="12" y2="22"></line><line x1="16" y1="16" x2="16" y2="16"></line><line x1="16" y1="20" x2="16" y2="20"></line>',
                cloud:
                  '<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',
                code:
                  '<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',
                codepen:
                  '<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',
                coffee:
                  '<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',
                command:
                  '<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',
                compass:
                  '<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',
                copy:
                  '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',
                "corner-down-left":
                  '<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',
                "corner-down-right":
                  '<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',
                "corner-left-down":
                  '<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',
                "corner-left-up":
                  '<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',
                "corner-right-down":
                  '<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',
                "corner-right-up":
                  '<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',
                "corner-up-left":
                  '<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',
                "corner-up-right":
                  '<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',
                cpu:
                  '<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',
                "credit-card":
                  '<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',
                crop:
                  '<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',
                crosshair:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',
                database:
                  '<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',
                delete:
                  '<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',
                disc:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',
                "dollar-sign":
                  '<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',
                "download-cloud":
                  '<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',
                download:
                  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',
                droplet:
                  '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',
                "edit-2":
                  '<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',
                "edit-3":
                  '<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',
                edit:
                  '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',
                "external-link":
                  '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',
                "eye-off":
                  '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                eye:
                  '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',
                facebook:
                  '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',
                "fast-forward":
                  '<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',
                feather:
                  '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',
                "file-minus":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-plus":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',
                "file-text":
                  '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
                file:
                  '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',
                film:
                  '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',
                filter:
                  '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
                flag:
                  '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',
                "folder-minus":
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',
                "folder-plus":
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',
                folder:
                  '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
                frown:
                  '<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                gift:
                  '<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',
                "git-branch":
                  '<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',
                "git-commit":
                  '<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',
                "git-merge":
                  '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',
                "git-pull-request":
                  '<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',
                github:
                  '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',
                gitlab:
                  '<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',
                globe:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',
                grid:
                  '<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',
                "hard-drive":
                  '<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6" y2="16"></line><line x1="10" y1="16" x2="10" y2="16"></line>',
                hash:
                  '<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',
                headphones:
                  '<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',
                heart:
                  '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',
                "help-circle":
                  '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12" y2="17"></line>',
                home:
                  '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',
                image:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',
                inbox:
                  '<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',
                info:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line>',
                instagram:
                  '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>',
                italic:
                  '<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',
                key:
                  '<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',
                layers:
                  '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
                layout:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',
                "life-buoy":
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',
                "link-2":
                  '<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',
                link:
                  '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',
                linkedin:
                  '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
                list:
                  '<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line>',
                loader:
                  '<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',
                lock:
                  '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
                "log-in":
                  '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',
                "log-out":
                  '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',
                mail:
                  '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',
                "map-pin":
                  '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',
                map:
                  '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',
                "maximize-2":
                  '<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                maximize:
                  '<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',
                meh:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                menu:
                  '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',
                "message-circle":
                  '<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',
                "message-square":
                  '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',
                "mic-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                mic:
                  '<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',
                "minimize-2":
                  '<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',
                minimize:
                  '<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',
                "minus-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',
                "minus-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',
                minus: '<line x1="5" y1="12" x2="19" y2="12"></line>',
                monitor:
                  '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',
                moon:
                  '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',
                "more-horizontal":
                  '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
                "more-vertical":
                  '<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',
                "mouse-pointer":
                  '<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',
                move:
                  '<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',
                music:
                  '<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',
                "navigation-2":
                  '<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',
                navigation:
                  '<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',
                octagon:
                  '<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',
                package:
                  '<path d="M12.89 1.45l8 4A2 2 0 0 1 22 7.24v9.53a2 2 0 0 1-1.11 1.79l-8 4a2 2 0 0 1-1.79 0l-8-4a2 2 0 0 1-1.1-1.8V7.24a2 2 0 0 1 1.11-1.79l8-4a2 2 0 0 1 1.78 0z"></path><polyline points="2.32 6.16 12 11 21.68 6.16"></polyline><line x1="12" y1="22.76" x2="12" y2="11"></line><line x1="7" y1="3.5" x2="17" y2="8.5"></line>',
                paperclip:
                  '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',
                "pause-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',
                pause:
                  '<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',
                "pen-tool":
                  '<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',
                percent:
                  '<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',
                "phone-call":
                  '<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-forwarded":
                  '<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-incoming":
                  '<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-missed":
                  '<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "phone-off":
                  '<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',
                "phone-outgoing":
                  '<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                phone:
                  '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',
                "pie-chart":
                  '<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',
                "play-circle":
                  '<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',
                play: '<polygon points="5 3 19 12 5 21 5 3"></polygon>',
                "plus-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                "plus-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',
                plus:
                  '<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',
                pocket:
                  '<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',
                power:
                  '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',
                printer:
                  '<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',
                radio:
                  '<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',
                "refresh-ccw":
                  '<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',
                "refresh-cw":
                  '<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',
                repeat:
                  '<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',
                rewind:
                  '<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',
                "rotate-ccw":
                  '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
                "rotate-cw":
                  '<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',
                rss:
                  '<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',
                save:
                  '<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',
                scissors:
                  '<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',
                search:
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',
                send:
                  '<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',
                server:
                  '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6" y2="6"></line><line x1="6" y1="18" x2="6" y2="18"></line>',
                settings:
                  '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
                "share-2":
                  '<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',
                share:
                  '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',
                "shield-off":
                  '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                shield:
                  '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
                "shopping-bag":
                  '<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',
                "shopping-cart":
                  '<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',
                shuffle:
                  '<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',
                sidebar:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',
                "skip-back":
                  '<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',
                "skip-forward":
                  '<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',
                slack:
                  '<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',
                slash:
                  '<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',
                sliders:
                  '<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',
                smartphone:
                  '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
                smile:
                  '<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',
                speaker:
                  '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12" y2="6"></line>',
                square:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',
                star:
                  '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',
                "stop-circle":
                  '<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',
                sun:
                  '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',
                sunrise:
                  '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',
                sunset:
                  '<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',
                tablet:
                  '<rect x="4" y="2" width="16" height="20" rx="2" ry="2" transform="rotate(180 12 12)"></rect><line x1="12" y1="18" x2="12" y2="18"></line>',
                tag:
                  '<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7" y2="7"></line>',
                target:
                  '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',
                terminal:
                  '<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',
                thermometer:
                  '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',
                "thumbs-down":
                  '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',
                "thumbs-up":
                  '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',
                "toggle-left":
                  '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',
                "toggle-right":
                  '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',
                "trash-2":
                  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',
                trash:
                  '<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',
                trello:
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',
                "trending-down":
                  '<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',
                "trending-up":
                  '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
                triangle:
                  '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',
                truck:
                  '<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',
                tv:
                  '<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',
                twitter:
                  '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',
                type:
                  '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',
                umbrella:
                  '<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',
                underline:
                  '<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',
                unlock:
                  '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',
                "upload-cloud":
                  '<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',
                upload:
                  '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',
                "user-check":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',
                "user-minus":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-plus":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',
                "user-x":
                  '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',
                user:
                  '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',
                users:
                  '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
                "video-off":
                  '<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',
                video:
                  '<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',
                voicemail:
                  '<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',
                "volume-1":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-2":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',
                "volume-x":
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',
                volume:
                  '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',
                watch:
                  '<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',
                "wifi-off":
                  '<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
                wifi:
                  '<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12" y2="20"></line>',
                wind:
                  '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',
                "x-circle":
                  '<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',
                "x-square":
                  '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',
                x:
                  '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',
                youtube:
                  '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',
                "zap-off":
                  '<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',
                zap:
                  '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',
                "zoom-in":
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',
                "zoom-out":
                  '<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'
              };
            },
            "./node_modules/classnames/dedupe.js": function(e, o, n) {
              var l;
              !(function() {
                "use strict";
                var n = (function() {
                  function e() {}
                  function o(e, o) {
                    for (var n = o.length, l = 0; l < n; ++l) i(e, o[l]);
                  }
                  e.prototype = Object.create(null);
                  var n = {}.hasOwnProperty;
                  var l = /\s+/;
                  function i(e, i) {
                    if (i) {
                      var t = typeof i;
                      "string" === t
                        ? (function(e, o) {
                            for (
                              var n = o.split(l), i = n.length, t = 0;
                              t < i;
                              ++t
                            )
                              e[n[t]] = !0;
                          })(e, i)
                        : Array.isArray(i)
                        ? o(e, i)
                        : "object" === t
                        ? (function(e, o) {
                            for (var l in o) n.call(o, l) && (e[l] = !!o[l]);
                          })(e, i)
                        : "number" === t &&
                          (function(e, o) {
                            e[o] = !0;
                          })(e, i);
                    }
                  }
                  return function() {
                    for (
                      var n = arguments.length, l = Array(n), i = 0;
                      i < n;
                      i++
                    )
                      l[i] = arguments[i];
                    var t = new e();
                    o(t, l);
                    var r = [];
                    for (var c in t) t[c] && r.push(c);
                    return r.join(" ");
                  };
                })();
                void 0 !== e && e.exports
                  ? (e.exports = n)
                  : void 0 ===
                      (l = function() {
                        return n;
                      }.apply(o, [])) || (e.exports = l);
              })();
            },
            "./node_modules/core-js/fn/array/from.js": function(e, o, n) {
              n("./node_modules/core-js/modules/es6.string.iterator.js"),
                n("./node_modules/core-js/modules/es6.array.from.js"),
                (e.exports = n(
                  "./node_modules/core-js/modules/_core.js"
                ).Array.from);
            },
            "./node_modules/core-js/modules/_a-function.js": function(e, o) {
              e.exports = function(e) {
                if ("function" != typeof e)
                  throw TypeError(e + " is not a function!");
                return e;
              };
            },
            "./node_modules/core-js/modules/_an-object.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_is-object.js");
              e.exports = function(e) {
                if (!l(e)) throw TypeError(e + " is not an object!");
                return e;
              };
            },
            "./node_modules/core-js/modules/_array-includes.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_to-iobject.js"),
                i = n("./node_modules/core-js/modules/_to-length.js"),
                t = n("./node_modules/core-js/modules/_to-absolute-index.js");
              e.exports = function(e) {
                return function(o, n, r) {
                  var c,
                    a = l(o),
                    s = i(a.length),
                    y = t(r, s);
                  if (e && n != n) {
                    for (; s > y; ) if ((c = a[y++]) != c) return !0;
                  } else
                    for (; s > y; y++)
                      if ((e || y in a) && a[y] === n) return e || y || 0;
                  return !e && -1;
                };
              };
            },
            "./node_modules/core-js/modules/_classof.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_cof.js"),
                i = n("./node_modules/core-js/modules/_wks.js")("toStringTag"),
                t =
                  "Arguments" ==
                  l(
                    (function() {
                      return arguments;
                    })()
                  );
              e.exports = function(e) {
                var o, n, r;
                return void 0 === e
                  ? "Undefined"
                  : null === e
                  ? "Null"
                  : "string" ==
                    typeof (n = (function(e, o) {
                      try {
                        return e[o];
                      } catch (n) {}
                    })((o = Object(e)), i))
                  ? n
                  : t
                  ? l(o)
                  : "Object" == (r = l(o)) && "function" == typeof o.callee
                  ? "Arguments"
                  : r;
              };
            },
            "./node_modules/core-js/modules/_cof.js": function(e, o) {
              var n = {}.toString;
              e.exports = function(e) {
                return n.call(e).slice(8, -1);
              };
            },
            "./node_modules/core-js/modules/_core.js": function(e, o) {
              var n = (e.exports = { version: "2.5.6" });
              "number" == typeof __e && (__e = n);
            },
            "./node_modules/core-js/modules/_create-property.js": function(
              e,
              o,
              n
            ) {
              "use strict";
              var l = n("./node_modules/core-js/modules/_object-dp.js"),
                i = n("./node_modules/core-js/modules/_property-desc.js");
              e.exports = function(e, o, n) {
                o in e ? l.f(e, o, i(0, n)) : (e[o] = n);
              };
            },
            "./node_modules/core-js/modules/_ctx.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_a-function.js");
              e.exports = function(e, o, n) {
                if ((l(e), void 0 === o)) return e;
                switch (n) {
                  case 1:
                    return function(n) {
                      return e.call(o, n);
                    };
                  case 2:
                    return function(n, l) {
                      return e.call(o, n, l);
                    };
                  case 3:
                    return function(n, l, i) {
                      return e.call(o, n, l, i);
                    };
                }
                return function() {
                  return e.apply(o, arguments);
                };
              };
            },
            "./node_modules/core-js/modules/_defined.js": function(e, o) {
              e.exports = function(e) {
                if (null == e) throw TypeError("Can't call method on  " + e);
                return e;
              };
            },
            "./node_modules/core-js/modules/_descriptors.js": function(
              e,
              o,
              n
            ) {
              e.exports = !n("./node_modules/core-js/modules/_fails.js")(
                function() {
                  return (
                    7 !=
                    Object.defineProperty({}, "a", {
                      get: function() {
                        return 7;
                      }
                    }).a
                  );
                }
              );
            },
            "./node_modules/core-js/modules/_dom-create.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_is-object.js"),
                i = n("./node_modules/core-js/modules/_global.js").document,
                t = l(i) && l(i.createElement);
              e.exports = function(e) {
                return t ? i.createElement(e) : {};
              };
            },
            "./node_modules/core-js/modules/_enum-bug-keys.js": function(e, o) {
              e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
                ","
              );
            },
            "./node_modules/core-js/modules/_export.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js"),
                i = n("./node_modules/core-js/modules/_core.js"),
                t = n("./node_modules/core-js/modules/_hide.js"),
                r = n("./node_modules/core-js/modules/_redefine.js"),
                c = n("./node_modules/core-js/modules/_ctx.js"),
                a = function(e, o, n) {
                  var s,
                    y,
                    p,
                    d,
                    u = e & a.F,
                    h = e & a.G,
                    x = e & a.S,
                    m = e & a.P,
                    f = e & a.B,
                    j = h
                      ? l
                      : x
                      ? l[o] || (l[o] = {})
                      : (l[o] || {}).prototype,
                    g = h ? i : i[o] || (i[o] = {}),
                    v = g.prototype || (g.prototype = {});
                  for (s in (h && (n = o), n))
                    (p = ((y = !u && j && void 0 !== j[s]) ? j : n)[s]),
                      (d =
                        f && y
                          ? c(p, l)
                          : m && "function" == typeof p
                          ? c(Function.call, p)
                          : p),
                      j && r(j, s, p, e & a.U),
                      g[s] != p && t(g, s, d),
                      m && v[s] != p && (v[s] = p);
                };
              (l.core = i),
                (a.F = 1),
                (a.G = 2),
                (a.S = 4),
                (a.P = 8),
                (a.B = 16),
                (a.W = 32),
                (a.U = 64),
                (a.R = 128),
                (e.exports = a);
            },
            "./node_modules/core-js/modules/_fails.js": function(e, o) {
              e.exports = function(e) {
                try {
                  return !!e();
                } catch (o) {
                  return !0;
                }
              };
            },
            "./node_modules/core-js/modules/_global.js": function(e, o) {
              var n = (e.exports =
                "undefined" != typeof window && window.Math == Math
                  ? window
                  : "undefined" != typeof self && self.Math == Math
                  ? self
                  : Function("return this")());
              "number" == typeof __g && (__g = n);
            },
            "./node_modules/core-js/modules/_has.js": function(e, o) {
              var n = {}.hasOwnProperty;
              e.exports = function(e, o) {
                return n.call(e, o);
              };
            },
            "./node_modules/core-js/modules/_hide.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_object-dp.js"),
                i = n("./node_modules/core-js/modules/_property-desc.js");
              e.exports = n("./node_modules/core-js/modules/_descriptors.js")
                ? function(e, o, n) {
                    return l.f(e, o, i(1, n));
                  }
                : function(e, o, n) {
                    return (e[o] = n), e;
                  };
            },
            "./node_modules/core-js/modules/_html.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js").document;
              e.exports = l && l.documentElement;
            },
            "./node_modules/core-js/modules/_ie8-dom-define.js": function(
              e,
              o,
              n
            ) {
              e.exports =
                !n("./node_modules/core-js/modules/_descriptors.js") &&
                !n("./node_modules/core-js/modules/_fails.js")(function() {
                  return (
                    7 !=
                    Object.defineProperty(
                      n("./node_modules/core-js/modules/_dom-create.js")("div"),
                      "a",
                      {
                        get: function() {
                          return 7;
                        }
                      }
                    ).a
                  );
                });
            },
            "./node_modules/core-js/modules/_iobject.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_cof.js");
              e.exports = Object("z").propertyIsEnumerable(0)
                ? Object
                : function(e) {
                    return "String" == l(e) ? e.split("") : Object(e);
                  };
            },
            "./node_modules/core-js/modules/_is-array-iter.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_iterators.js"),
                i = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                t = Array.prototype;
              e.exports = function(e) {
                return void 0 !== e && (l.Array === e || t[i] === e);
              };
            },
            "./node_modules/core-js/modules/_is-object.js": function(e, o) {
              e.exports = function(e) {
                return "object" == typeof e
                  ? null !== e
                  : "function" == typeof e;
              };
            },
            "./node_modules/core-js/modules/_iter-call.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_an-object.js");
              e.exports = function(e, o, n, i) {
                try {
                  return i ? o(l(n)[0], n[1]) : o(n);
                } catch (r) {
                  var t = e.return;
                  throw (void 0 !== t && l(t.call(e)), r);
                }
              };
            },
            "./node_modules/core-js/modules/_iter-create.js": function(
              e,
              o,
              n
            ) {
              "use strict";
              var l = n("./node_modules/core-js/modules/_object-create.js"),
                i = n("./node_modules/core-js/modules/_property-desc.js"),
                t = n("./node_modules/core-js/modules/_set-to-string-tag.js"),
                r = {};
              n("./node_modules/core-js/modules/_hide.js")(
                r,
                n("./node_modules/core-js/modules/_wks.js")("iterator"),
                function() {
                  return this;
                }
              ),
                (e.exports = function(e, o, n) {
                  (e.prototype = l(r, { next: i(1, n) })),
                    t(e, o + " Iterator");
                });
            },
            "./node_modules/core-js/modules/_iter-define.js": function(
              e,
              o,
              n
            ) {
              "use strict";
              var l = n("./node_modules/core-js/modules/_library.js"),
                i = n("./node_modules/core-js/modules/_export.js"),
                t = n("./node_modules/core-js/modules/_redefine.js"),
                r = n("./node_modules/core-js/modules/_hide.js"),
                c = n("./node_modules/core-js/modules/_iterators.js"),
                a = n("./node_modules/core-js/modules/_iter-create.js"),
                s = n("./node_modules/core-js/modules/_set-to-string-tag.js"),
                y = n("./node_modules/core-js/modules/_object-gpo.js"),
                p = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                d = !([].keys && "next" in [].keys()),
                u = function() {
                  return this;
                };
              e.exports = function(e, o, n, h, x, m, f) {
                a(n, o, h);
                var j,
                  g,
                  v,
                  _ = function(e) {
                    if (!d && e in z) return z[e];
                    switch (e) {
                      case "keys":
                      case "values":
                        return function() {
                          return new n(this, e);
                        };
                    }
                    return function() {
                      return new n(this, e);
                    };
                  },
                  M = o + " Iterator",
                  w = "values" == x,
                  b = !1,
                  z = e.prototype,
                  k = z[p] || z["@@iterator"] || (x && z[x]),
                  A = k || _(x),
                  H = x ? (w ? _("entries") : A) : void 0,
                  V = ("Array" == o && z.entries) || k;
                if (
                  (V &&
                    (v = y(V.call(new e()))) !== Object.prototype &&
                    v.next &&
                    (s(v, M, !0), l || "function" == typeof v[p] || r(v, p, u)),
                  w &&
                    k &&
                    "values" !== k.name &&
                    ((b = !0),
                    (A = function() {
                      return k.call(this);
                    })),
                  (l && !f) || (!d && !b && z[p]) || r(z, p, A),
                  (c[o] = A),
                  (c[M] = u),
                  x)
                )
                  if (
                    ((j = {
                      values: w ? A : _("values"),
                      keys: m ? A : _("keys"),
                      entries: H
                    }),
                    f)
                  )
                    for (g in j) g in z || t(z, g, j[g]);
                  else i(i.P + i.F * (d || b), o, j);
                return j;
              };
            },
            "./node_modules/core-js/modules/_iter-detect.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                i = !1;
              try {
                var t = [7][l]();
                (t.return = function() {
                  i = !0;
                }),
                  Array.from(t, function() {
                    throw 2;
                  });
              } catch (r) {}
              e.exports = function(e, o) {
                if (!o && !i) return !1;
                var n = !1;
                try {
                  var t = [7],
                    c = t[l]();
                  (c.next = function() {
                    return { done: (n = !0) };
                  }),
                    (t[l] = function() {
                      return c;
                    }),
                    e(t);
                } catch (r) {}
                return n;
              };
            },
            "./node_modules/core-js/modules/_iterators.js": function(e, o) {
              e.exports = {};
            },
            "./node_modules/core-js/modules/_library.js": function(e, o) {
              e.exports = !1;
            },
            "./node_modules/core-js/modules/_object-create.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_an-object.js"),
                i = n("./node_modules/core-js/modules/_object-dps.js"),
                t = n("./node_modules/core-js/modules/_enum-bug-keys.js"),
                r = n("./node_modules/core-js/modules/_shared-key.js")(
                  "IE_PROTO"
                ),
                c = function() {},
                a = function() {
                  var e,
                    o = n("./node_modules/core-js/modules/_dom-create.js")(
                      "iframe"
                    ),
                    l = t.length;
                  for (
                    o.style.display = "none",
                      n("./node_modules/core-js/modules/_html.js").appendChild(
                        o
                      ),
                      o.src = "javascript:",
                      (e = o.contentWindow.document).open(),
                      e.write("<script>document.F=Object</script>"),
                      e.close(),
                      a = e.F;
                    l--;

                  )
                    delete a.prototype[t[l]];
                  return a();
                };
              e.exports =
                Object.create ||
                function(e, o) {
                  var n;
                  return (
                    null !== e
                      ? ((c.prototype = l(e)),
                        (n = new c()),
                        (c.prototype = null),
                        (n[r] = e))
                      : (n = a()),
                    void 0 === o ? n : i(n, o)
                  );
                };
            },
            "./node_modules/core-js/modules/_object-dp.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_an-object.js"),
                i = n("./node_modules/core-js/modules/_ie8-dom-define.js"),
                t = n("./node_modules/core-js/modules/_to-primitive.js"),
                r = Object.defineProperty;
              o.f = n("./node_modules/core-js/modules/_descriptors.js")
                ? Object.defineProperty
                : function(e, o, n) {
                    if ((l(e), (o = t(o, !0)), l(n), i))
                      try {
                        return r(e, o, n);
                      } catch (c) {}
                    if ("get" in n || "set" in n)
                      throw TypeError("Accessors not supported!");
                    return "value" in n && (e[o] = n.value), e;
                  };
            },
            "./node_modules/core-js/modules/_object-dps.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_object-dp.js"),
                i = n("./node_modules/core-js/modules/_an-object.js"),
                t = n("./node_modules/core-js/modules/_object-keys.js");
              e.exports = n("./node_modules/core-js/modules/_descriptors.js")
                ? Object.defineProperties
                : function(e, o) {
                    i(e);
                    for (var n, r = t(o), c = r.length, a = 0; c > a; )
                      l.f(e, (n = r[a++]), o[n]);
                    return e;
                  };
            },
            "./node_modules/core-js/modules/_object-gpo.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_has.js"),
                i = n("./node_modules/core-js/modules/_to-object.js"),
                t = n("./node_modules/core-js/modules/_shared-key.js")(
                  "IE_PROTO"
                ),
                r = Object.prototype;
              e.exports =
                Object.getPrototypeOf ||
                function(e) {
                  return (
                    (e = i(e)),
                    l(e, t)
                      ? e[t]
                      : "function" == typeof e.constructor &&
                        e instanceof e.constructor
                      ? e.constructor.prototype
                      : e instanceof Object
                      ? r
                      : null
                  );
                };
            },
            "./node_modules/core-js/modules/_object-keys-internal.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_has.js"),
                i = n("./node_modules/core-js/modules/_to-iobject.js"),
                t = n("./node_modules/core-js/modules/_array-includes.js")(!1),
                r = n("./node_modules/core-js/modules/_shared-key.js")(
                  "IE_PROTO"
                );
              e.exports = function(e, o) {
                var n,
                  c = i(e),
                  a = 0,
                  s = [];
                for (n in c) n != r && l(c, n) && s.push(n);
                for (; o.length > a; )
                  l(c, (n = o[a++])) && (~t(s, n) || s.push(n));
                return s;
              };
            },
            "./node_modules/core-js/modules/_object-keys.js": function(
              e,
              o,
              n
            ) {
              var l = n(
                  "./node_modules/core-js/modules/_object-keys-internal.js"
                ),
                i = n("./node_modules/core-js/modules/_enum-bug-keys.js");
              e.exports =
                Object.keys ||
                function(e) {
                  return l(e, i);
                };
            },
            "./node_modules/core-js/modules/_property-desc.js": function(e, o) {
              e.exports = function(e, o) {
                return {
                  enumerable: !(1 & e),
                  configurable: !(2 & e),
                  writable: !(4 & e),
                  value: o
                };
              };
            },
            "./node_modules/core-js/modules/_redefine.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_global.js"),
                i = n("./node_modules/core-js/modules/_hide.js"),
                t = n("./node_modules/core-js/modules/_has.js"),
                r = n("./node_modules/core-js/modules/_uid.js")("src"),
                c = Function.toString,
                a = ("" + c).split("toString");
              (n(
                "./node_modules/core-js/modules/_core.js"
              ).inspectSource = function(e) {
                return c.call(e);
              }),
                (e.exports = function(e, o, n, c) {
                  var s = "function" == typeof n;
                  s && (t(n, "name") || i(n, "name", o)),
                    e[o] !== n &&
                      (s &&
                        (t(n, r) ||
                          i(n, r, e[o] ? "" + e[o] : a.join(String(o)))),
                      e === l
                        ? (e[o] = n)
                        : c
                        ? e[o]
                          ? (e[o] = n)
                          : i(e, o, n)
                        : (delete e[o], i(e, o, n)));
                })(Function.prototype, "toString", function() {
                  return ("function" == typeof this && this[r]) || c.call(this);
                });
            },
            "./node_modules/core-js/modules/_set-to-string-tag.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_object-dp.js").f,
                i = n("./node_modules/core-js/modules/_has.js"),
                t = n("./node_modules/core-js/modules/_wks.js")("toStringTag");
              e.exports = function(e, o, n) {
                e &&
                  !i((e = n ? e : e.prototype), t) &&
                  l(e, t, { configurable: !0, value: o });
              };
            },
            "./node_modules/core-js/modules/_shared-key.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_shared.js")("keys"),
                i = n("./node_modules/core-js/modules/_uid.js");
              e.exports = function(e) {
                return l[e] || (l[e] = i(e));
              };
            },
            "./node_modules/core-js/modules/_shared.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_core.js"),
                i = n("./node_modules/core-js/modules/_global.js"),
                t = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
              (e.exports = function(e, o) {
                return t[e] || (t[e] = void 0 !== o ? o : {});
              })("versions", []).push({
                version: l.version,
                mode: n("./node_modules/core-js/modules/_library.js")
                  ? "pure"
                  : "global",
                copyright: "© 2018 Denis Pushkarev (zloirock.ru)"
              });
            },
            "./node_modules/core-js/modules/_string-at.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_to-integer.js"),
                i = n("./node_modules/core-js/modules/_defined.js");
              e.exports = function(e) {
                return function(o, n) {
                  var t,
                    r,
                    c = String(i(o)),
                    a = l(n),
                    s = c.length;
                  return a < 0 || a >= s
                    ? e
                      ? ""
                      : void 0
                    : (t = c.charCodeAt(a)) < 55296 ||
                      t > 56319 ||
                      a + 1 === s ||
                      (r = c.charCodeAt(a + 1)) < 56320 ||
                      r > 57343
                    ? e
                      ? c.charAt(a)
                      : t
                    : e
                    ? c.slice(a, a + 2)
                    : r - 56320 + ((t - 55296) << 10) + 65536;
                };
              };
            },
            "./node_modules/core-js/modules/_to-absolute-index.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_to-integer.js"),
                i = Math.max,
                t = Math.min;
              e.exports = function(e, o) {
                return (e = l(e)) < 0 ? i(e + o, 0) : t(e, o);
              };
            },
            "./node_modules/core-js/modules/_to-integer.js": function(e, o) {
              var n = Math.ceil,
                l = Math.floor;
              e.exports = function(e) {
                return isNaN((e = +e)) ? 0 : (e > 0 ? l : n)(e);
              };
            },
            "./node_modules/core-js/modules/_to-iobject.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_iobject.js"),
                i = n("./node_modules/core-js/modules/_defined.js");
              e.exports = function(e) {
                return l(i(e));
              };
            },
            "./node_modules/core-js/modules/_to-length.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_to-integer.js"),
                i = Math.min;
              e.exports = function(e) {
                return e > 0 ? i(l(e), 9007199254740991) : 0;
              };
            },
            "./node_modules/core-js/modules/_to-object.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_defined.js");
              e.exports = function(e) {
                return Object(l(e));
              };
            },
            "./node_modules/core-js/modules/_to-primitive.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_is-object.js");
              e.exports = function(e, o) {
                if (!l(e)) return e;
                var n, i;
                if (
                  o &&
                  "function" == typeof (n = e.toString) &&
                  !l((i = n.call(e)))
                )
                  return i;
                if ("function" == typeof (n = e.valueOf) && !l((i = n.call(e))))
                  return i;
                if (
                  !o &&
                  "function" == typeof (n = e.toString) &&
                  !l((i = n.call(e)))
                )
                  return i;
                throw TypeError("Can't convert object to primitive value");
              };
            },
            "./node_modules/core-js/modules/_uid.js": function(e, o) {
              var n = 0,
                l = Math.random();
              e.exports = function(e) {
                return "Symbol(".concat(
                  void 0 === e ? "" : e,
                  ")_",
                  (++n + l).toString(36)
                );
              };
            },
            "./node_modules/core-js/modules/_wks.js": function(e, o, n) {
              var l = n("./node_modules/core-js/modules/_shared.js")("wks"),
                i = n("./node_modules/core-js/modules/_uid.js"),
                t = n("./node_modules/core-js/modules/_global.js").Symbol,
                r = "function" == typeof t;
              (e.exports = function(e) {
                return (
                  l[e] || (l[e] = (r && t[e]) || (r ? t : i)("Symbol." + e))
                );
              }).store = l;
            },
            "./node_modules/core-js/modules/core.get-iterator-method.js": function(
              e,
              o,
              n
            ) {
              var l = n("./node_modules/core-js/modules/_classof.js"),
                i = n("./node_modules/core-js/modules/_wks.js")("iterator"),
                t = n("./node_modules/core-js/modules/_iterators.js");
              e.exports = n(
                "./node_modules/core-js/modules/_core.js"
              ).getIteratorMethod = function(e) {
                if (null != e) return e[i] || e["@@iterator"] || t[l(e)];
              };
            },
            "./node_modules/core-js/modules/es6.array.from.js": function(
              e,
              o,
              n
            ) {
              "use strict";
              var l = n("./node_modules/core-js/modules/_ctx.js"),
                i = n("./node_modules/core-js/modules/_export.js"),
                t = n("./node_modules/core-js/modules/_to-object.js"),
                r = n("./node_modules/core-js/modules/_iter-call.js"),
                c = n("./node_modules/core-js/modules/_is-array-iter.js"),
                a = n("./node_modules/core-js/modules/_to-length.js"),
                s = n("./node_modules/core-js/modules/_create-property.js"),
                y = n(
                  "./node_modules/core-js/modules/core.get-iterator-method.js"
                );
              i(
                i.S +
                  i.F *
                    !n("./node_modules/core-js/modules/_iter-detect.js")(
                      function(e) {
                        Array.from(e);
                      }
                    ),
                "Array",
                {
                  from: function(e) {
                    var o,
                      n,
                      i,
                      p,
                      d = t(e),
                      u = "function" == typeof this ? this : Array,
                      h = arguments.length,
                      x = h > 1 ? arguments[1] : void 0,
                      m = void 0 !== x,
                      f = 0,
                      j = y(d);
                    if (
                      (m && (x = l(x, h > 2 ? arguments[2] : void 0, 2)),
                      null == j || (u == Array && c(j)))
                    )
                      for (n = new u((o = a(d.length))); o > f; f++)
                        s(n, f, m ? x(d[f], f) : d[f]);
                    else
                      for (
                        p = j.call(d), n = new u();
                        !(i = p.next()).done;
                        f++
                      )
                        s(n, f, m ? r(p, x, [i.value, f], !0) : i.value);
                    return (n.length = f), n;
                  }
                }
              );
            },
            "./node_modules/core-js/modules/es6.string.iterator.js": function(
              e,
              o,
              n
            ) {
              "use strict";
              var l = n("./node_modules/core-js/modules/_string-at.js")(!0);
              n("./node_modules/core-js/modules/_iter-define.js")(
                String,
                "String",
                function(e) {
                  (this._t = String(e)), (this._i = 0);
                },
                function() {
                  var e,
                    o = this._t,
                    n = this._i;
                  return n >= o.length
                    ? { value: void 0, done: !0 }
                    : ((e = l(o, n)),
                      (this._i += e.length),
                      { value: e, done: !1 });
                }
              );
            },
            "./src/default-attrs.json": function(e) {
              e.exports = {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              };
            },
            "./src/icon.js": function(e, o, n) {
              "use strict";
              Object.defineProperty(o, "__esModule", { value: !0 });
              var l =
                  Object.assign ||
                  function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                      var n = arguments[o];
                      for (var l in n)
                        Object.prototype.hasOwnProperty.call(n, l) &&
                          (e[l] = n[l]);
                    }
                    return e;
                  },
                i = (function() {
                  function e(e, o) {
                    for (var n = 0; n < o.length; n++) {
                      var l = o[n];
                      (l.enumerable = l.enumerable || !1),
                        (l.configurable = !0),
                        "value" in l && (l.writable = !0),
                        Object.defineProperty(e, l.key, l);
                    }
                  }
                  return function(o, n, l) {
                    return n && e(o.prototype, n), l && e(o, l), o;
                  };
                })(),
                t = c(n("./node_modules/classnames/dedupe.js")),
                r = c(n("./src/default-attrs.json"));
              function c(e) {
                return e && e.__esModule ? e : { default: e };
              }
              var a = (function() {
                function e(o, n) {
                  var i =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : [];
                  !(function(e, o) {
                    if (!(e instanceof o))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.name = o),
                    (this.contents = n),
                    (this.tags = i),
                    (this.attrs = l({}, r.default, {
                      class: "feather feather-" + o
                    }));
                }
                return (
                  i(e, [
                    {
                      key: "toSvg",
                      value: function() {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {};
                        return (
                          "<svg " +
                          (function(e) {
                            return Object.keys(e)
                              .map(function(o) {
                                return o + '="' + e[o] + '"';
                              })
                              .join(" ");
                          })(
                            l({}, this.attrs, e, {
                              class: (0, t.default)(this.attrs.class, e.class)
                            })
                          ) +
                          ">" +
                          this.contents +
                          "</svg>"
                        );
                      }
                    },
                    {
                      key: "toString",
                      value: function() {
                        return this.contents;
                      }
                    }
                  ]),
                  e
                );
              })();
              o.default = a;
            },
            "./src/icons.js": function(e, o, n) {
              "use strict";
              Object.defineProperty(o, "__esModule", { value: !0 });
              var l = r(n("./src/icon.js")),
                i = r(n("./dist/icons.json")),
                t = r(n("./src/tags.json"));
              function r(e) {
                return e && e.__esModule ? e : { default: e };
              }
              o.default = Object.keys(i.default)
                .map(function(e) {
                  return new l.default(e, i.default[e], t.default[e]);
                })
                .reduce(function(e, o) {
                  return (e[o.name] = o), e;
                }, {});
            },
            "./src/index.js": function(e, o, n) {
              "use strict";
              var l = r(n("./src/icons.js")),
                i = r(n("./src/to-svg.js")),
                t = r(n("./src/replace.js"));
              function r(e) {
                return e && e.__esModule ? e : { default: e };
              }
              e.exports = {
                icons: l.default,
                toSvg: i.default,
                replace: t.default
              };
            },
            "./src/replace.js": function(e, o, n) {
              "use strict";
              Object.defineProperty(o, "__esModule", { value: !0 });
              var l =
                  Object.assign ||
                  function(e) {
                    for (var o = 1; o < arguments.length; o++) {
                      var n = arguments[o];
                      for (var l in n)
                        Object.prototype.hasOwnProperty.call(n, l) &&
                          (e[l] = n[l]);
                    }
                    return e;
                  },
                i = r(n("./node_modules/classnames/dedupe.js")),
                t = r(n("./src/icons.js"));
              function r(e) {
                return e && e.__esModule ? e : { default: e };
              }
              o.default = function() {
                var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                if ("undefined" == typeof document)
                  throw new Error(
                    "`feather.replace()` only works in a browser environment."
                  );
                var o = document.querySelectorAll("[data-feather]");
                Array.from(o).forEach(function(o) {
                  return (function(e) {
                    var o =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {},
                      n = (function(e) {
                        return Array.from(e.attributes).reduce(function(e, o) {
                          return (e[o.name] = o.value), e;
                        }, {});
                      })(e),
                      r = n["data-feather"];
                    delete n["data-feather"];
                    var c = t.default[r].toSvg(
                        l({}, o, n, { class: (0, i.default)(o.class, n.class) })
                      ),
                      a = new DOMParser()
                        .parseFromString(c, "image/svg+xml")
                        .querySelector("svg");
                    e.parentNode.replaceChild(a, e);
                  })(o, e);
                });
              };
            },
            "./src/tags.json": function(e) {
              e.exports = {
                activity: ["pulse", "health", "action", "motion"],
                airplay: ["stream", "cast", "mirroring"],
                "alert-circle": ["warning"],
                "alert-octagon": ["warning"],
                "alert-triangle": ["warning"],
                "at-sign": ["mention"],
                award: ["achievement", "badge"],
                aperture: ["camera", "photo"],
                bell: ["alarm", "notification"],
                "bell-off": ["alarm", "notification", "silent"],
                bluetooth: ["wireless"],
                "book-open": ["read"],
                book: ["read", "dictionary", "booklet", "magazine"],
                bookmark: ["read", "clip", "marker", "tag"],
                briefcase: ["work", "bag", "baggage", "folder"],
                clipboard: ["copy"],
                clock: ["time", "watch", "alarm"],
                "cloud-drizzle": ["weather", "shower"],
                "cloud-lightning": ["weather", "bolt"],
                "cloud-rain": ["weather"],
                "cloud-snow": ["weather", "blizzard"],
                cloud: ["weather"],
                codepen: ["logo"],
                coffee: [
                  "drink",
                  "cup",
                  "mug",
                  "tea",
                  "cafe",
                  "hot",
                  "beverage"
                ],
                command: ["keyboard", "cmd"],
                compass: ["navigation", "safari", "travel"],
                copy: ["clone", "duplicate"],
                "corner-down-left": ["arrow"],
                "corner-down-right": ["arrow"],
                "corner-left-down": ["arrow"],
                "corner-left-up": ["arrow"],
                "corner-right-down": ["arrow"],
                "corner-right-up": ["arrow"],
                "corner-up-left": ["arrow"],
                "corner-up-right": ["arrow"],
                "credit-card": ["purchase", "payment", "cc"],
                crop: ["photo", "image"],
                crosshair: ["aim", "target"],
                database: ["storage"],
                delete: ["remove"],
                disc: ["album", "cd", "dvd", "music"],
                "dollar-sign": ["currency", "money", "payment"],
                droplet: ["water"],
                edit: ["pencil", "change"],
                "edit-2": ["pencil", "change"],
                "edit-3": ["pencil", "change"],
                eye: ["view", "watch"],
                "eye-off": ["view", "watch"],
                "external-link": ["outbound"],
                facebook: ["logo"],
                "fast-forward": ["music"],
                film: ["movie", "video"],
                "folder-minus": ["directory"],
                "folder-plus": ["directory"],
                folder: ["directory"],
                frown: ["emoji", "face", "bad", "sad", "emotion"],
                gift: ["present", "box", "birthday", "party"],
                "git-branch": ["code", "version control"],
                "git-commit": ["code", "version control"],
                "git-merge": ["code", "version control"],
                "git-pull-request": ["code", "version control"],
                github: ["logo", "version control"],
                gitlab: ["logo", "version control"],
                global: ["world", "browser", "language", "translate"],
                "hard-drive": ["computer", "server"],
                hash: ["hashtag", "number", "pound"],
                headphones: ["music", "audio"],
                heart: ["like", "love"],
                "help-circle": ["question mark"],
                home: ["house"],
                image: ["picture"],
                inbox: ["email"],
                instagram: ["logo", "camera"],
                key: ["password", "login", "authentication"],
                "life-bouy": ["help", "life ring", "support"],
                linkedin: ["logo"],
                lock: ["security", "password"],
                "log-in": ["sign in", "arrow"],
                "log-out": ["sign out", "arrow"],
                mail: ["email"],
                "map-pin": ["location", "navigation", "travel", "marker"],
                map: ["location", "navigation", "travel"],
                maximize: ["fullscreen"],
                "maximize-2": ["fullscreen", "arrows"],
                meh: ["emoji", "face", "neutral", "emotion"],
                menu: ["bars", "navigation", "hamburger"],
                "message-circle": ["comment", "chat"],
                "message-square": ["comment", "chat"],
                "mic-off": ["record"],
                mic: ["record"],
                minimize: ["exit fullscreen"],
                "minimize-2": ["exit fullscreen", "arrows"],
                monitor: ["tv"],
                moon: ["dark", "night"],
                "more-horizontal": ["ellipsis"],
                "more-vertical": ["ellipsis"],
                "mouse-pointer": ["arrow", "cursor"],
                move: ["arrows"],
                navigation: ["location", "travel"],
                "navigation-2": ["location", "travel"],
                octagon: ["stop"],
                package: ["box"],
                paperclip: ["attachment"],
                pause: ["music", "stop"],
                "pause-circle": ["music", "stop"],
                "pen-tool": ["vector", "drawing"],
                play: ["music", "start"],
                "play-circle": ["music", "start"],
                plus: ["add", "new"],
                "plus-circle": ["add", "new"],
                "plus-square": ["add", "new"],
                pocket: ["logo", "save"],
                power: ["on", "off"],
                radio: ["signal"],
                rewind: ["music"],
                rss: ["feed", "subscribe"],
                save: ["floppy disk"],
                search: ["find", "magnifier", "magnifying glass"],
                send: ["message", "mail", "paper airplane"],
                settings: ["cog", "edit", "gear", "preferences"],
                shield: ["security"],
                "shield-off": ["security"],
                "shopping-bag": ["ecommerce", "cart", "purchase", "store"],
                "shopping-cart": ["ecommerce", "cart", "purchase", "store"],
                shuffle: ["music"],
                "skip-back": ["music"],
                "skip-forward": ["music"],
                slash: ["ban", "no"],
                sliders: ["settings", "controls"],
                smile: ["emoji", "face", "happy", "good", "emotion"],
                speaker: ["music"],
                star: ["bookmark", "favorite", "like"],
                sun: ["brightness", "weather", "light"],
                sunrise: ["weather"],
                sunset: ["weather"],
                tag: ["label"],
                target: ["bullseye"],
                terminal: ["code", "command line"],
                "thumbs-down": ["dislike", "bad"],
                "thumbs-up": ["like", "good"],
                "toggle-left": ["on", "off", "switch"],
                "toggle-right": ["on", "off", "switch"],
                trash: ["garbage", "delete", "remove"],
                "trash-2": ["garbage", "delete", "remove"],
                triangle: ["delta"],
                truck: ["delivery", "van", "shipping"],
                twitter: ["logo"],
                umbrella: ["rain", "weather"],
                "video-off": ["camera", "movie", "film"],
                video: ["camera", "movie", "film"],
                voicemail: ["phone"],
                volume: ["music", "sound", "mute"],
                "volume-1": ["music", "sound"],
                "volume-2": ["music", "sound"],
                "volume-x": ["music", "sound", "mute"],
                watch: ["clock", "time"],
                wind: ["weather", "air"],
                "x-circle": ["cancel", "close", "delete", "remove", "times"],
                "x-square": ["cancel", "close", "delete", "remove", "times"],
                x: ["cancel", "close", "delete", "remove", "times"],
                youtube: ["logo", "video", "play"],
                "zap-off": ["flash", "camera", "lightning"],
                zap: ["flash", "camera", "lightning"]
              };
            },
            "./src/to-svg.js": function(e, o, n) {
              "use strict";
              Object.defineProperty(o, "__esModule", { value: !0 });
              var l,
                i = n("./src/icons.js"),
                t = (l = i) && l.__esModule ? l : { default: l };
              o.default = function(e) {
                var o =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                if (
                  (console.warn(
                    "feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."
                  ),
                  !e)
                )
                  throw new Error(
                    "The required `key` (icon name) parameter is missing."
                  );
                if (!t.default[e])
                  throw new Error(
                    "No icon matching '" +
                      e +
                      "'. See the complete list of icons at https://feathericons.com"
                  );
                return t.default[e].toSvg(o);
              };
            },
            0: function(e, o, n) {
              n("./node_modules/core-js/fn/array/from.js"),
                (e.exports = n("./src/index.js"));
            }
          });
        });
      },
      {}
    ],
    Phou: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("hyperapp"),
          r = t(require("feather-icons"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e, r) {
          if (null == e) return {};
          var t,
            n,
            o = u(e, r);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++)
              (t = i[n]),
                r.indexOf(t) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (o[t] = e[t]));
          }
          return o;
        }
        function u(e, r) {
          if (null == e) return {};
          var t,
            n,
            u = {},
            o = Object.keys(e);
          for (n = 0; n < o.length; n++)
            (t = o[n]), r.indexOf(t) >= 0 || (u[t] = e[t]);
          return u;
        }
        var o = function(e) {
            return function(r) {
              r.innerHTML = e;
            };
          },
          i = function(e) {
            var t = e.name,
              u = n(e, ["name"]);
            return r.default.icons[t].toSvg(u);
          },
          f = function(r) {
            return (0, e.h)("i", { oncreate: o(i(r)) });
          };
        exports.default = f;
      },
      { hyperapp: "/xJO", "feather-icons": "sv0e" }
    ],
    cSP6: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("hyperapp"),
          t = i(require("./Icon"));
        function i(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var a = function() {
          return (0, e.h)(
            "div",
            null,
            (0, e.h)(
              "header",
              null,
              (0, e.h)(
                "a",
                { href: "#main", class: "skip-link" },
                "Skip to main content"
              ),
              (0, e.h)("h1", { class: "title" }, "Web Accessibility Guide"),
              (0, e.h)(
                "p",
                { class: "introduction" },
                "A curated collection of web accessibility tips, tricks and best practices. ",
                (0, e.h)("br", null),
                " Let's make the web a better place for everyone."
              ),
              (0, e.h)(
                "div",
                { class: "social" },
                (0, e.h)(
                  "a",
                  {
                    class: "social-github",
                    href: "https://github.com/fejes713/accessibility-guide",
                    target: "_blank",
                    rel: "noopener"
                  },
                  (0, e.h)(t.default, { class: "icon", name: "github" }),
                  "Star on Github"
                ),
                (0, e.h)(
                  "a",
                  {
                    class: "social-twitter",
                    href: "https://github.com/fejes713/accessibility-guide",
                    target: "_blank",
                    rel: "noopener"
                  },
                  (0, e.h)(t.default, { class: "icon", name: "twitter" }),
                  "Tweet"
                ),
                (0, e.h)(
                  "a",
                  {
                    class: "social-donate",
                    href: "https://github.com/fejes713/accessibility-guide",
                    target: "_blank",
                    rel: "noopener"
                  },
                  (0, e.h)(t.default, { class: "icon", name: "gift" }),
                  "Donate"
                )
              )
            )
          );
        };
        exports.default = a;
      },
      { hyperapp: "/xJO", "./Icon": "Phou" }
    ],
    "3F7m": [
      function(require, module, exports) {
        var define;
        var global = arguments[3];
        var e,
          t = arguments[3];
        !(function(t) {
          "use strict";
          var n = {
            newline: /^\n+/,
            code: /^( {4}[^\n]+\n*)+/,
            fences: m,
            hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
            heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
            nptable: m,
            blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
            list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
            html:
              "^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?\\?>\\n*|<![A-Z][\\s\\S]*?>\\n*|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=\\h*\\n)[\\s\\S]*?(?:\\n{2,}|$))",
            def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
            table: m,
            lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
            paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
            text: /^[^\n]+/
          };
          function r(e) {
            (this.tokens = []),
              (this.tokens.links = Object.create(null)),
              (this.options = e || _.defaults),
              (this.rules = n.normal),
              this.options.pedantic
                ? (this.rules = n.pedantic)
                : this.options.gfm &&
                  (this.options.tables
                    ? (this.rules = n.tables)
                    : (this.rules = n.gfm));
          }
          (n._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/),
            (n._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/),
            (n.def = c(n.def)
              .replace("label", n._label)
              .replace("title", n._title)
              .getRegex()),
            (n.bullet = /(?:[*+-]|\d{1,9}\.)/),
            (n.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/),
            (n.item = c(n.item, "gm")
              .replace(/bull/g, n.bullet)
              .getRegex()),
            (n.list = c(n.list)
              .replace(/bull/g, n.bullet)
              .replace(
                "hr",
                "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))"
              )
              .replace("def", "\\n+(?=" + n.def.source + ")")
              .getRegex()),
            (n._tag =
              "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul"),
            (n._comment = /<!--(?!-?>)[\s\S]*?-->/),
            (n.html = c(n.html, "i")
              .replace("comment", n._comment)
              .replace("tag", n._tag)
              .replace(
                "attribute",
                / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
              )
              .getRegex()),
            (n.paragraph = c(n.paragraph)
              .replace("hr", n.hr)
              .replace("heading", n.heading)
              .replace("lheading", n.lheading)
              .replace("tag", n._tag)
              .getRegex()),
            (n.blockquote = c(n.blockquote)
              .replace("paragraph", n.paragraph)
              .getRegex()),
            (n.normal = b({}, n)),
            (n.gfm = b({}, n.normal, {
              fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
              paragraph: /^/,
              heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
            })),
            (n.gfm.paragraph = c(n.paragraph)
              .replace(
                "(?!",
                "(?!" +
                  n.gfm.fences.source.replace("\\1", "\\2") +
                  "|" +
                  n.list.source.replace("\\1", "\\3") +
                  "|"
              )
              .getRegex()),
            (n.tables = b({}, n.gfm, {
              nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
              table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
            })),
            (n.pedantic = b({}, n.normal, {
              html: c(
                "^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))"
              )
                .replace("comment", n._comment)
                .replace(
                  /tag/g,
                  "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b"
                )
                .getRegex(),
              def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
            })),
            (r.rules = n),
            (r.lex = function(e, t) {
              return new r(t).lex(e);
            }),
            (r.prototype.lex = function(e) {
              return (
                (e = e
                  .replace(/\r\n|\r/g, "\n")
                  .replace(/\t/g, "    ")
                  .replace(/\u00a0/g, " ")
                  .replace(/\u2424/g, "\n")),
                this.token(e, !0)
              );
            }),
            (r.prototype.token = function(e, t) {
              var r, s, i, l, o, a, h, p, u, c, g, f, d, m, b, y;
              for (e = e.replace(/^ +$/gm, ""); e; )
                if (
                  ((i = this.rules.newline.exec(e)) &&
                    ((e = e.substring(i[0].length)),
                    i[0].length > 1 && this.tokens.push({ type: "space" })),
                  (i = this.rules.code.exec(e)))
                )
                  (e = e.substring(i[0].length)),
                    (i = i[0].replace(/^ {4}/gm, "")),
                    this.tokens.push({
                      type: "code",
                      text: this.options.pedantic ? i : x(i, "\n")
                    });
                else if ((i = this.rules.fences.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "code",
                      lang: i[2] ? i[2].trim() : i[2],
                      text: i[3] || ""
                    });
                else if ((i = this.rules.heading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: i[1].length,
                      text: i[2]
                    });
                else if (
                  t &&
                  (i = this.rules.nptable.exec(e)) &&
                  (a = {
                    type: "table",
                    header: k(i[1].replace(/^ *| *\| *$/g, "")),
                    align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: i[3] ? i[3].replace(/\n$/, "").split("\n") : []
                  }).header.length === a.align.length
                ) {
                  for (
                    e = e.substring(i[0].length), g = 0;
                    g < a.align.length;
                    g++
                  )
                    /^ *-+: *$/.test(a.align[g])
                      ? (a.align[g] = "right")
                      : /^ *:-+: *$/.test(a.align[g])
                      ? (a.align[g] = "center")
                      : /^ *:-+ *$/.test(a.align[g])
                      ? (a.align[g] = "left")
                      : (a.align[g] = null);
                  for (g = 0; g < a.cells.length; g++)
                    a.cells[g] = k(a.cells[g], a.header.length);
                  this.tokens.push(a);
                } else if ((i = this.rules.hr.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "hr" });
                else if ((i = this.rules.blockquote.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "blockquote_start" }),
                    (i = i[0].replace(/^ *> ?/gm, "")),
                    this.token(i, t),
                    this.tokens.push({ type: "blockquote_end" });
                else if ((i = this.rules.list.exec(e))) {
                  for (
                    e = e.substring(i[0].length),
                      h = {
                        type: "list_start",
                        ordered: (m = (l = i[2]).length > 1),
                        start: m ? +l : "",
                        loose: !1
                      },
                      this.tokens.push(h),
                      p = [],
                      r = !1,
                      d = (i = i[0].match(this.rules.item)).length,
                      g = 0;
                    g < d;
                    g++
                  )
                    (c = (a = i[g]).length),
                      ~(a = a.replace(/^ *([*+-]|\d+\.) */, "")).indexOf(
                        "\n "
                      ) &&
                        ((c -= a.length),
                        (a = this.options.pedantic
                          ? a.replace(/^ {1,4}/gm, "")
                          : a.replace(
                              new RegExp("^ {1," + c + "}", "gm"),
                              ""
                            ))),
                      g !== d - 1 &&
                        ((o = n.bullet.exec(i[g + 1])[0]),
                        (l.length > 1
                          ? 1 === o.length
                          : o.length > 1 ||
                            (this.options.smartLists && o !== l)) &&
                          ((e = i.slice(g + 1).join("\n") + e), (g = d - 1))),
                      (s = r || /\n\n(?!\s*$)/.test(a)),
                      g !== d - 1 &&
                        ((r = "\n" === a.charAt(a.length - 1)), s || (s = r)),
                      s && (h.loose = !0),
                      (y = void 0),
                      (b = /^\[[ xX]\] /.test(a)) &&
                        ((y = " " !== a[1]),
                        (a = a.replace(/^\[[ xX]\] +/, ""))),
                      (u = {
                        type: "list_item_start",
                        task: b,
                        checked: y,
                        loose: s
                      }),
                      p.push(u),
                      this.tokens.push(u),
                      this.token(a, !1),
                      this.tokens.push({ type: "list_item_end" });
                  if (h.loose)
                    for (d = p.length, g = 0; g < d; g++) p[g].loose = !0;
                  this.tokens.push({ type: "list_end" });
                } else if ((i = this.rules.html.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: this.options.sanitize ? "paragraph" : "html",
                      pre:
                        !this.options.sanitizer &&
                        ("pre" === i[1] ||
                          "script" === i[1] ||
                          "style" === i[1]),
                      text: i[0]
                    });
                else if (t && (i = this.rules.def.exec(e)))
                  (e = e.substring(i[0].length)),
                    i[3] && (i[3] = i[3].substring(1, i[3].length - 1)),
                    (f = i[1].toLowerCase().replace(/\s+/g, " ")),
                    this.tokens.links[f] ||
                      (this.tokens.links[f] = { href: i[2], title: i[3] });
                else if (
                  t &&
                  (i = this.rules.table.exec(e)) &&
                  (a = {
                    type: "table",
                    header: k(i[1].replace(/^ *| *\| *$/g, "")),
                    align: i[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
                    cells: i[3]
                      ? i[3].replace(/(?: *\| *)?\n$/, "").split("\n")
                      : []
                  }).header.length === a.align.length
                ) {
                  for (
                    e = e.substring(i[0].length), g = 0;
                    g < a.align.length;
                    g++
                  )
                    /^ *-+: *$/.test(a.align[g])
                      ? (a.align[g] = "right")
                      : /^ *:-+: *$/.test(a.align[g])
                      ? (a.align[g] = "center")
                      : /^ *:-+ *$/.test(a.align[g])
                      ? (a.align[g] = "left")
                      : (a.align[g] = null);
                  for (g = 0; g < a.cells.length; g++)
                    a.cells[g] = k(
                      a.cells[g].replace(/^ *\| *| *\| *$/g, ""),
                      a.header.length
                    );
                  this.tokens.push(a);
                } else if ((i = this.rules.lheading.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "heading",
                      depth: "=" === i[2] ? 1 : 2,
                      text: i[1]
                    });
                else if (t && (i = this.rules.paragraph.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({
                      type: "paragraph",
                      text:
                        "\n" === i[1].charAt(i[1].length - 1)
                          ? i[1].slice(0, -1)
                          : i[1]
                    });
                else if ((i = this.rules.text.exec(e)))
                  (e = e.substring(i[0].length)),
                    this.tokens.push({ type: "text", text: i[0] });
                else if (e)
                  throw new Error("Infinite loop on byte: " + e.charCodeAt(0));
              return this.tokens;
            });
          var s = {
            escape: /^\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/,
            autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
            url: m,
            tag:
              "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
            link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
            reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
            nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
            strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
            em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
            code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
            br: /^( {2,}|\\)\n(?!\s*$)/,
            del: m,
            text: /^(`+|[^`])[\s\S]*?(?=[\\<!\[`*]|\b_| {2,}\n|$)/
          };
          function i(e, t) {
            if (
              ((this.options = t || _.defaults),
              (this.links = e),
              (this.rules = s.normal),
              (this.renderer = this.options.renderer || new l()),
              (this.renderer.options = this.options),
              !this.links)
            )
              throw new Error("Tokens array requires a `links` property.");
            this.options.pedantic
              ? (this.rules = s.pedantic)
              : this.options.gfm &&
                (this.options.breaks
                  ? (this.rules = s.breaks)
                  : (this.rules = s.gfm));
          }
          function l(e) {
            this.options = e || _.defaults;
          }
          function o() {}
          function a(e) {
            (this.tokens = []),
              (this.token = null),
              (this.options = e || _.defaults),
              (this.options.renderer = this.options.renderer || new l()),
              (this.renderer = this.options.renderer),
              (this.renderer.options = this.options),
              (this.slugger = new h());
          }
          function h() {
            this.seen = {};
          }
          function p(e, t) {
            if (t) {
              if (p.escapeTest.test(e))
                return e.replace(p.escapeReplace, function(e) {
                  return p.replacements[e];
                });
            } else if (p.escapeTestNoEncode.test(e))
              return e.replace(p.escapeReplaceNoEncode, function(e) {
                return p.replacements[e];
              });
            return e;
          }
          function u(e) {
            return e.replace(
              /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,
              function(e, t) {
                return "colon" === (t = t.toLowerCase())
                  ? ":"
                  : "#" === t.charAt(0)
                  ? "x" === t.charAt(1)
                    ? String.fromCharCode(parseInt(t.substring(2), 16))
                    : String.fromCharCode(+t.substring(1))
                  : "";
              }
            );
          }
          function c(e, t) {
            return (
              (e = e.source || e),
              (t = t || ""),
              {
                replace: function(t, n) {
                  return (
                    (n = (n = n.source || n).replace(/(^|[^\[])\^/g, "$1")),
                    (e = e.replace(t, n)),
                    this
                  );
                },
                getRegex: function() {
                  return new RegExp(e, t);
                }
              }
            );
          }
          function g(e, t, n) {
            if (e) {
              try {
                var r = decodeURIComponent(u(n))
                  .replace(/[^\w:]/g, "")
                  .toLowerCase();
              } catch (s) {
                return null;
              }
              if (
                0 === r.indexOf("javascript:") ||
                0 === r.indexOf("vbscript:") ||
                0 === r.indexOf("data:")
              )
                return null;
            }
            t &&
              !d.test(n) &&
              (n = (function(e, t) {
                f[" " + e] ||
                  (/^[^:]+:\/*[^\/]*$/.test(e)
                    ? (f[" " + e] = e + "/")
                    : (f[" " + e] = x(e, "/", !0)));
                return (
                  (e = f[" " + e]),
                  "//" === t.slice(0, 2)
                    ? e.replace(/:[\s\S]*/, ":") + t
                    : "/" === t.charAt(0)
                    ? e.replace(/(:\/*[^\/]*)[\s\S]*/, "$1") + t
                    : e + t
                );
              })(t, n));
            try {
              n = encodeURI(n).replace(/%25/g, "%");
            } catch (s) {
              return null;
            }
            return n;
          }
          (s._punctuation = "!\"#$%&'()*+,\\-./:;<=>?@\\[^_{|}~"),
            (s.em = c(s.em)
              .replace(/punctuation/g, s._punctuation)
              .getRegex()),
            (s._escapes = /\\([!"#$%&'()*+,\-.\/:;<=>?@\[\]\\^_`{|}~])/g),
            (s._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
            (s._email = /[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
            (s.autolink = c(s.autolink)
              .replace("scheme", s._scheme)
              .replace("email", s._email)
              .getRegex()),
            (s._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
            (s.tag = c(s.tag)
              .replace("comment", n._comment)
              .replace("attribute", s._attribute)
              .getRegex()),
            (s._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|[^\[\]\\])*?/),
            (s._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/),
            (s._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
            (s.link = c(s.link)
              .replace("label", s._label)
              .replace("href", s._href)
              .replace("title", s._title)
              .getRegex()),
            (s.reflink = c(s.reflink)
              .replace("label", s._label)
              .getRegex()),
            (s.normal = b({}, s)),
            (s.pedantic = b({}, s.normal, {
              strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
              em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
              link: c(/^!?\[(label)\]\((.*?)\)/)
                .replace("label", s._label)
                .getRegex(),
              reflink: c(/^!?\[(label)\]\s*\[([^\]]*)\]/)
                .replace("label", s._label)
                .getRegex()
            })),
            (s.gfm = b({}, s.normal, {
              escape: c(s.escape)
                .replace("])", "~|])")
                .getRegex(),
              _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
              url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
              _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
              del: /^~+(?=\S)([\s\S]*?\S)~+/,
              text: c(s.text)
                .replace("]|", "~]|")
                .replace(
                  "|$",
                  "|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|$"
                )
                .getRegex()
            })),
            (s.gfm.url = c(s.gfm.url, "i")
              .replace("email", s.gfm._extended_email)
              .getRegex()),
            (s.breaks = b({}, s.gfm, {
              br: c(s.br)
                .replace("{2,}", "*")
                .getRegex(),
              text: c(s.gfm.text)
                .replace("{2,}", "*")
                .getRegex()
            })),
            (i.rules = s),
            (i.output = function(e, t, n) {
              return new i(t, n).output(e);
            }),
            (i.prototype.output = function(e) {
              for (var t, n, r, s, l, o, a = ""; e; )
                if ((l = this.rules.escape.exec(e)))
                  (e = e.substring(l[0].length)), (a += p(l[1]));
                else if ((l = this.rules.tag.exec(e)))
                  !this.inLink && /^<a /i.test(l[0])
                    ? (this.inLink = !0)
                    : this.inLink && /^<\/a>/i.test(l[0]) && (this.inLink = !1),
                    !this.inRawBlock &&
                    /^<(pre|code|kbd|script)(\s|>)/i.test(l[0])
                      ? (this.inRawBlock = !0)
                      : this.inRawBlock &&
                        /^<\/(pre|code|kbd|script)(\s|>)/i.test(l[0]) &&
                        (this.inRawBlock = !1),
                    (e = e.substring(l[0].length)),
                    (a += this.options.sanitize
                      ? this.options.sanitizer
                        ? this.options.sanitizer(l[0])
                        : p(l[0])
                      : l[0]);
                else if ((l = this.rules.link.exec(e))) {
                  var h = y(l[2], "()");
                  if (h > -1) {
                    var u = l[2].length - h;
                    (l[2] = l[2].substring(0, h)),
                      (l[0] = l[0].substring(0, l[0].length - u));
                  }
                  (e = e.substring(l[0].length)),
                    (this.inLink = !0),
                    (r = l[2]),
                    this.options.pedantic
                      ? (t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(r))
                        ? ((r = t[1]), (s = t[3]))
                        : (s = "")
                      : (s = l[3] ? l[3].slice(1, -1) : ""),
                    (r = r.trim().replace(/^<([\s\S]*)>$/, "$1")),
                    (a += this.outputLink(l, {
                      href: i.escapes(r),
                      title: i.escapes(s)
                    })),
                    (this.inLink = !1);
                } else if (
                  (l = this.rules.reflink.exec(e)) ||
                  (l = this.rules.nolink.exec(e))
                ) {
                  if (
                    ((e = e.substring(l[0].length)),
                    (t = (l[2] || l[1]).replace(/\s+/g, " ")),
                    !(t = this.links[t.toLowerCase()]) || !t.href)
                  ) {
                    (a += l[0].charAt(0)), (e = l[0].substring(1) + e);
                    continue;
                  }
                  (this.inLink = !0),
                    (a += this.outputLink(l, t)),
                    (this.inLink = !1);
                } else if ((l = this.rules.strong.exec(e)))
                  (e = e.substring(l[0].length)),
                    (a += this.renderer.strong(
                      this.output(l[4] || l[3] || l[2] || l[1])
                    ));
                else if ((l = this.rules.em.exec(e)))
                  (e = e.substring(l[0].length)),
                    (a += this.renderer.em(
                      this.output(l[6] || l[5] || l[4] || l[3] || l[2] || l[1])
                    ));
                else if ((l = this.rules.code.exec(e)))
                  (e = e.substring(l[0].length)),
                    (a += this.renderer.codespan(p(l[2].trim(), !0)));
                else if ((l = this.rules.br.exec(e)))
                  (e = e.substring(l[0].length)), (a += this.renderer.br());
                else if ((l = this.rules.del.exec(e)))
                  (e = e.substring(l[0].length)),
                    (a += this.renderer.del(this.output(l[1])));
                else if ((l = this.rules.autolink.exec(e)))
                  (e = e.substring(l[0].length)),
                    (r =
                      "@" === l[2]
                        ? "mailto:" + (n = p(this.mangle(l[1])))
                        : (n = p(l[1]))),
                    (a += this.renderer.link(r, null, n));
                else if (this.inLink || !(l = this.rules.url.exec(e))) {
                  if ((l = this.rules.text.exec(e)))
                    (e = e.substring(l[0].length)),
                      this.inRawBlock
                        ? (a += this.renderer.text(l[0]))
                        : (a += this.renderer.text(p(this.smartypants(l[0]))));
                  else if (e)
                    throw new Error(
                      "Infinite loop on byte: " + e.charCodeAt(0)
                    );
                } else {
                  if ("@" === l[2]) r = "mailto:" + (n = p(l[0]));
                  else {
                    do {
                      (o = l[0]), (l[0] = this.rules._backpedal.exec(l[0])[0]);
                    } while (o !== l[0]);
                    (n = p(l[0])), (r = "www." === l[1] ? "http://" + n : n);
                  }
                  (e = e.substring(l[0].length)),
                    (a += this.renderer.link(r, null, n));
                }
              return a;
            }),
            (i.escapes = function(e) {
              return e ? e.replace(i.rules._escapes, "$1") : e;
            }),
            (i.prototype.outputLink = function(e, t) {
              var n = t.href,
                r = t.title ? p(t.title) : null;
              return "!" !== e[0].charAt(0)
                ? this.renderer.link(n, r, this.output(e[1]))
                : this.renderer.image(n, r, p(e[1]));
            }),
            (i.prototype.smartypants = function(e) {
              return this.options.smartypants
                ? e
                    .replace(/---/g, "—")
                    .replace(/--/g, "–")
                    .replace(/(^|[-\u2014\/(\[{"\s])'/g, "$1‘")
                    .replace(/'/g, "’")
                    .replace(/(^|[-\u2014\/(\[{\u2018\s])"/g, "$1“")
                    .replace(/"/g, "”")
                    .replace(/\.{3}/g, "…")
                : e;
            }),
            (i.prototype.mangle = function(e) {
              if (!this.options.mangle) return e;
              for (var t, n = "", r = e.length, s = 0; s < r; s++)
                (t = e.charCodeAt(s)),
                  Math.random() > 0.5 && (t = "x" + t.toString(16)),
                  (n += "&#" + t + ";");
              return n;
            }),
            (l.prototype.code = function(e, t, n) {
              var r = (t || "").match(/\S*/)[0];
              if (this.options.highlight) {
                var s = this.options.highlight(e, r);
                null != s && s !== e && ((n = !0), (e = s));
              }
              return r
                ? '<pre><code class="' +
                    this.options.langPrefix +
                    p(r, !0) +
                    '">' +
                    (n ? e : p(e, !0)) +
                    "</code></pre>\n"
                : "<pre><code>" + (n ? e : p(e, !0)) + "</code></pre>";
            }),
            (l.prototype.blockquote = function(e) {
              return "<blockquote>\n" + e + "</blockquote>\n";
            }),
            (l.prototype.html = function(e) {
              return e;
            }),
            (l.prototype.heading = function(e, t, n, r) {
              return this.options.headerIds
                ? "<h" +
                    t +
                    ' id="' +
                    this.options.headerPrefix +
                    r.slug(n) +
                    '">' +
                    e +
                    "</h" +
                    t +
                    ">\n"
                : "<h" + t + ">" + e + "</h" + t + ">\n";
            }),
            (l.prototype.hr = function() {
              return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
            }),
            (l.prototype.list = function(e, t, n) {
              var r = t ? "ol" : "ul";
              return (
                "<" +
                r +
                (t && 1 !== n ? ' start="' + n + '"' : "") +
                ">\n" +
                e +
                "</" +
                r +
                ">\n"
              );
            }),
            (l.prototype.listitem = function(e) {
              return "<li>" + e + "</li>\n";
            }),
            (l.prototype.checkbox = function(e) {
              return (
                "<input " +
                (e ? 'checked="" ' : "") +
                'disabled="" type="checkbox"' +
                (this.options.xhtml ? " /" : "") +
                "> "
              );
            }),
            (l.prototype.paragraph = function(e) {
              return "<p>" + e + "</p>\n";
            }),
            (l.prototype.table = function(e, t) {
              return (
                t && (t = "<tbody>" + t + "</tbody>"),
                "<table>\n<thead>\n" + e + "</thead>\n" + t + "</table>\n"
              );
            }),
            (l.prototype.tablerow = function(e) {
              return "<tr>\n" + e + "</tr>\n";
            }),
            (l.prototype.tablecell = function(e, t) {
              var n = t.header ? "th" : "td";
              return (
                (t.align
                  ? "<" + n + ' align="' + t.align + '">'
                  : "<" + n + ">") +
                e +
                "</" +
                n +
                ">\n"
              );
            }),
            (l.prototype.strong = function(e) {
              return "<strong>" + e + "</strong>";
            }),
            (l.prototype.em = function(e) {
              return "<em>" + e + "</em>";
            }),
            (l.prototype.codespan = function(e) {
              return "<code>" + e + "</code>";
            }),
            (l.prototype.br = function() {
              return this.options.xhtml ? "<br/>" : "<br>";
            }),
            (l.prototype.del = function(e) {
              return "<del>" + e + "</del>";
            }),
            (l.prototype.link = function(e, t, n) {
              if (
                null === (e = g(this.options.sanitize, this.options.baseUrl, e))
              )
                return n;
              var r = '<a href="' + p(e) + '"';
              return t && (r += ' title="' + t + '"'), (r += ">" + n + "</a>");
            }),
            (l.prototype.image = function(e, t, n) {
              if (
                null === (e = g(this.options.sanitize, this.options.baseUrl, e))
              )
                return n;
              var r = '<img src="' + e + '" alt="' + n + '"';
              return (
                t && (r += ' title="' + t + '"'),
                (r += this.options.xhtml ? "/>" : ">")
              );
            }),
            (l.prototype.text = function(e) {
              return e;
            }),
            (o.prototype.strong = o.prototype.em = o.prototype.codespan = o.prototype.del = o.prototype.text = function(
              e
            ) {
              return e;
            }),
            (o.prototype.link = o.prototype.image = function(e, t, n) {
              return "" + n;
            }),
            (o.prototype.br = function() {
              return "";
            }),
            (a.parse = function(e, t) {
              return new a(t).parse(e);
            }),
            (a.prototype.parse = function(e) {
              (this.inline = new i(e.links, this.options)),
                (this.inlineText = new i(
                  e.links,
                  b({}, this.options, { renderer: new o() })
                )),
                (this.tokens = e.reverse());
              for (var t = ""; this.next(); ) t += this.tok();
              return t;
            }),
            (a.prototype.next = function() {
              return (this.token = this.tokens.pop());
            }),
            (a.prototype.peek = function() {
              return this.tokens[this.tokens.length - 1] || 0;
            }),
            (a.prototype.parseText = function() {
              for (var e = this.token.text; "text" === this.peek().type; )
                e += "\n" + this.next().text;
              return this.inline.output(e);
            }),
            (a.prototype.tok = function() {
              switch (this.token.type) {
                case "space":
                  return "";
                case "hr":
                  return this.renderer.hr();
                case "heading":
                  return this.renderer.heading(
                    this.inline.output(this.token.text),
                    this.token.depth,
                    u(this.inlineText.output(this.token.text)),
                    this.slugger
                  );
                case "code":
                  return this.renderer.code(
                    this.token.text,
                    this.token.lang,
                    this.token.escaped
                  );
                case "table":
                  var e,
                    t,
                    n,
                    r,
                    s = "",
                    i = "";
                  for (n = "", e = 0; e < this.token.header.length; e++)
                    n += this.renderer.tablecell(
                      this.inline.output(this.token.header[e]),
                      { header: !0, align: this.token.align[e] }
                    );
                  for (
                    s += this.renderer.tablerow(n), e = 0;
                    e < this.token.cells.length;
                    e++
                  ) {
                    for (
                      t = this.token.cells[e], n = "", r = 0;
                      r < t.length;
                      r++
                    )
                      n += this.renderer.tablecell(this.inline.output(t[r]), {
                        header: !1,
                        align: this.token.align[r]
                      });
                    i += this.renderer.tablerow(n);
                  }
                  return this.renderer.table(s, i);
                case "blockquote_start":
                  for (i = ""; "blockquote_end" !== this.next().type; )
                    i += this.tok();
                  return this.renderer.blockquote(i);
                case "list_start":
                  i = "";
                  for (
                    var l = this.token.ordered, o = this.token.start;
                    "list_end" !== this.next().type;

                  )
                    i += this.tok();
                  return this.renderer.list(i, l, o);
                case "list_item_start":
                  i = "";
                  var a = this.token.loose;
                  for (
                    this.token.task &&
                    (i += this.renderer.checkbox(this.token.checked));
                    "list_item_end" !== this.next().type;

                  )
                    i +=
                      a || "text" !== this.token.type
                        ? this.tok()
                        : this.parseText();
                  return this.renderer.listitem(i);
                case "html":
                  return this.renderer.html(this.token.text);
                case "paragraph":
                  return this.renderer.paragraph(
                    this.inline.output(this.token.text)
                  );
                case "text":
                  return this.renderer.paragraph(this.parseText());
                default:
                  var h =
                    'Token with "' + this.token.type + '" type was not found.';
                  if (!this.options.silent) throw new Error(h);
                  console.log(h);
              }
            }),
            (h.prototype.slug = function(e) {
              var t = e
                .toLowerCase()
                .trim()
                .replace(
                  /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,.\/:;<=>?@[\]^`{|}~]/g,
                  ""
                )
                .replace(/\s/g, "-");
              if (this.seen.hasOwnProperty(t)) {
                var n = t;
                do {
                  this.seen[n]++, (t = n + "-" + this.seen[n]);
                } while (this.seen.hasOwnProperty(t));
              }
              return (this.seen[t] = 0), t;
            }),
            (p.escapeTest = /[&<>"']/),
            (p.escapeReplace = /[&<>"']/g),
            (p.replacements = {
              "&": "&amp;",
              "<": "&lt;",
              ">": "&gt;",
              '"': "&quot;",
              "'": "&#39;"
            }),
            (p.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/),
            (p.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g);
          var f = {},
            d = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
          function m() {}
          function b(e) {
            for (var t, n, r = 1; r < arguments.length; r++)
              for (n in (t = arguments[r]))
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e;
          }
          function k(e, t) {
            var n = e
                .replace(/\|/g, function(e, t, n) {
                  for (var r = !1, s = t; --s >= 0 && "\\" === n[s]; ) r = !r;
                  return r ? "|" : " |";
                })
                .split(/ \|/),
              r = 0;
            if (n.length > t) n.splice(t);
            else for (; n.length < t; ) n.push("");
            for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, "|");
            return n;
          }
          function x(e, t, n) {
            if (0 === e.length) return "";
            for (var r = 0; r < e.length; ) {
              var s = e.charAt(e.length - r - 1);
              if (s !== t || n) {
                if (s === t || !n) break;
                r++;
              } else r++;
            }
            return e.substr(0, e.length - r);
          }
          function y(e, t) {
            if (-1 === e.indexOf(t[1])) return -1;
            for (var n = 0, r = 0; r < e.length; r++)
              if ("\\" === e[r]) r++;
              else if (e[r] === t[0]) n++;
              else if (e[r] === t[1] && --n < 0) return r;
            return -1;
          }
          function _(e, t, n) {
            if (null == e)
              throw new Error("marked(): input parameter is undefined or null");
            if ("string" != typeof e)
              throw new Error(
                "marked(): input parameter is of type " +
                  Object.prototype.toString.call(e) +
                  ", string expected"
              );
            if (n || "function" == typeof t) {
              n || ((n = t), (t = null));
              var s,
                i,
                l = (t = b({}, _.defaults, t || {})).highlight,
                o = 0;
              try {
                s = r.lex(e, t);
              } catch (u) {
                return n(u);
              }
              i = s.length;
              var h = function(e) {
                if (e) return (t.highlight = l), n(e);
                var r;
                try {
                  r = a.parse(s, t);
                } catch (u) {
                  e = u;
                }
                return (t.highlight = l), e ? n(e) : n(null, r);
              };
              if (!l || l.length < 3) return h();
              if ((delete t.highlight, !i)) return h();
              for (; o < s.length; o++)
                !(function(e) {
                  "code" !== e.type
                    ? --i || h()
                    : l(e.text, e.lang, function(t, n) {
                        return t
                          ? h(t)
                          : null == n || n === e.text
                          ? --i || h()
                          : ((e.text = n), (e.escaped = !0), void (--i || h()));
                      });
                })(s[o]);
            } else
              try {
                return t && (t = b({}, _.defaults, t)), a.parse(r.lex(e, t), t);
              } catch (u) {
                if (
                  ((u.message +=
                    "\nPlease report this to https://github.com/markedjs/marked."),
                  (t || _.defaults).silent)
                )
                  return (
                    "<p>An error occurred:</p><pre>" +
                    p(u.message + "", !0) +
                    "</pre>"
                  );
                throw u;
              }
          }
          (m.exec = m),
            (_.options = _.setOptions = function(e) {
              return b(_.defaults, e), _;
            }),
            (_.getDefaults = function() {
              return {
                baseUrl: null,
                breaks: !1,
                gfm: !0,
                headerIds: !0,
                headerPrefix: "",
                highlight: null,
                langPrefix: "language-",
                mangle: !0,
                pedantic: !1,
                renderer: new l(),
                sanitize: !1,
                sanitizer: null,
                silent: !1,
                smartLists: !1,
                smartypants: !1,
                tables: !0,
                xhtml: !1
              };
            }),
            (_.defaults = _.getDefaults()),
            (_.Parser = a),
            (_.parser = a.parse),
            (_.Renderer = l),
            (_.TextRenderer = o),
            (_.Lexer = r),
            (_.lexer = r.lex),
            (_.InlineLexer = i),
            (_.inlineLexer = i.output),
            (_.Slugger = h),
            (_.parse = _),
            "undefined" != typeof module && "object" == typeof exports
              ? (module.exports = _)
              : "function" == typeof e && e.amd
              ? e(function() {
                  return _;
                })
              : (t.marked = _);
        })(this || ("undefined" != typeof window ? window : t));
      },
      {}
    ],
    kcUG: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("hyperapp"),
          r = t(require("marked"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        function n(e) {
          for (var r = 1; r < arguments.length; r++) {
            var t = null != arguments[r] ? arguments[r] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols &&
              (n = n.concat(
                Object.getOwnPropertySymbols(t).filter(function(e) {
                  return Object.getOwnPropertyDescriptor(t, e).enumerable;
                })
              )),
              n.forEach(function(r) {
                o(e, r, t[r]);
              });
          }
          return e;
        }
        function o(e, r, t) {
          return (
            r in e
              ? Object.defineProperty(e, r, {
                  value: t,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                })
              : (e[r] = t),
            e
          );
        }
        function u(e, r) {
          if (null == e) return {};
          var t,
            n,
            o = c(e, r);
          if (Object.getOwnPropertySymbols) {
            var u = Object.getOwnPropertySymbols(e);
            for (n = 0; n < u.length; n++)
              (t = u[n]),
                r.indexOf(t) >= 0 ||
                  (Object.prototype.propertyIsEnumerable.call(e, t) &&
                    (o[t] = e[t]));
          }
          return o;
        }
        function c(e, r) {
          if (null == e) return {};
          var t,
            n,
            o = {},
            u = Object.keys(e);
          for (n = 0; n < u.length; n++)
            (t = u[n]), r.indexOf(t) >= 0 || (o[t] = e[t]);
          return o;
        }
        var i = Object.create(null),
          f = function(e) {
            return function(r) {
              r.innerHTML = e;
            };
          },
          l = function(e) {
            if (e in i) return i[e];
            var t = (0, r.default)(e);
            return (i[e] = t), t;
          },
          a = function(r) {
            var t = r.node,
              o = void 0 === t ? "div" : t,
              c = r.content,
              i = u(r, ["node", "content"]);
            return (0, e.h)(o, n({}, i, { oncreate: f(l(c)) }));
          };
        exports.default = a;
      },
      { hyperapp: "/xJO", marked: "3F7m" }
    ],
    "/VSm": [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("hyperapp"),
          r = require("../utils"),
          t = n(require("./Icon")),
          s = n(require("./Markdown"));
        function n(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var o = function(r) {
          var t = r.name,
            n = r.shortTip,
            o = r.longTip,
            l = r.links,
            u = r.category;
          return function(r, c) {
            return (0, e.h)(
              "li",
              { class: "card", key: t, id: t.slice(0, t.length - 3) },
              (0, e.h)("span", { class: "category" }, u),
              (0, e.h)(s.default, {
                node: "h2",
                class: "short-tip",
                content: n
              }),
              (0, e.h)(s.default, { node: "p", class: "long-tip", content: o }),
              (0, e.h)(
                "section",
                null,
                (0, e.h)("p", { class: "resource-title" }, "Resources"),
                (0, e.h)(
                  "ul",
                  { class: "resource-list" },
                  l.map(function(r) {
                    return (0,
                    e.h)(s.default, { node: "li", class: "resource", content: r });
                  })
                )
              )
            );
          };
        };
        exports.default = o;
      },
      {
        hyperapp: "/xJO",
        "../utils": "4NwI",
        "./Icon": "Phou",
        "./Markdown": "kcUG"
      }
    ],
    Y7qW: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var r = require("hyperapp"),
          t = e(require("./Card"));
        function e(r) {
          return r && r.__esModule ? r : { default: r };
        }
        function n(r) {
          return a(r) || u(r) || o();
        }
        function o() {
          throw new TypeError(
            "Invalid attempt to spread non-iterable instance"
          );
        }
        function u(r) {
          if (
            Symbol.iterator in Object(r) ||
            "[object Arguments]" === Object.prototype.toString.call(r)
          )
            return Array.from(r);
        }
        function a(r) {
          if (Array.isArray(r)) {
            for (var t = 0, e = new Array(r.length); t < r.length; t++)
              e[t] = r[t];
            return e;
          }
        }
        var i = function() {
          return function(e) {
            return (0, r.h)(
              "main",
              null,
              (0, r.h)(
                "div",
                { class: "container" },
                (0, r.h)(
                  "ul",
                  { class: "cards" },
                  n(e.tips).map(function(e) {
                    return (0, r.h)(t.default, e);
                  })
                )
              )
            );
          };
        };
        exports.default = i;
      },
      { hyperapp: "/xJO", "./Card": "/VSm" }
    ],
    kWCP: [
      function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.default = void 0);
        var e = require("hyperapp"),
          r = u(require("./components/Header")),
          t = u(require("./components/Cards"));
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        var n = function() {
          return (0, e.h)(
            "div",
            { class: "container" },
            (0, e.h)(r.default, null),
            (0, e.h)(t.default, null)
          );
        };
        exports.default = n;
      },
      {
        hyperapp: "/xJO",
        "./components/Header": "cSP6",
        "./components/Cards": "Y7qW"
      }
    ],
    Focm: [
      function(require, module, exports) {
        "use strict";
        var e = require("hyperapp");
        require("./css/index.scss"), require("./js/browser");
        var r = t(require("./js/state")),
          s = t(require("./js/actions")),
          u = t(require("./js/view"));
        function t(e) {
          return e && e.__esModule ? e : { default: e };
        }
        (0, e.app)(r.default, s.default, u.default, document.body);
      },
      {
        hyperapp: "/xJO",
        "./css/index.scss": "4NwI",
        "./js/browser": "4NwI",
        "./js/state": "7ceU",
        "./js/actions": "4NwI",
        "./js/view": "kWCP"
      }
    ]
  },
  {},
  ["Focm"],
  null
);
//# sourceMappingURL=website.2416d3ba.map
