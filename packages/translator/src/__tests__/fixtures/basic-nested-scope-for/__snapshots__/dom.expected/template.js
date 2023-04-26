import { on as _on, attr as _attr, queueSource as _queueSource, data as _data, intersection as _intersection, register as _register, queueEffect as _queueEffect, value as _value, closure as _closure, createRenderer as _createRenderer, loop as _loop, inLoopScope as _inLoopScope, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _expr_selected_num$forBody = /* @__PURE__ */_intersection(2, _scope => {
  const selected = _scope._["selected"],
    num = _scope["num"];
  _attr(_scope["#button/0"], "data-selected", selected === num);
  _attr(_scope["#button/0"], "data-multiple", num % selected === 0);
});
const _num$forBody_effect = _register("packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num", _scope => _on(_scope["#button/0"], "click", function () {
  const num = _scope["num"];
  _queueSource(_scope._, _selected, num);
}));
const _num$forBody = /* @__PURE__ */_value("num", (_scope, num, _dirty) => {
  if (_dirty) {
    _data(_scope["#text/1"], num);
    _queueEffect(_scope, _num$forBody_effect);
  }
  _expr_selected_num$forBody(_scope, _dirty);
});
const _selected$forBody = /* @__PURE__ */_closure("selected", (_scope, selected, _dirty) => _expr_selected_num$forBody(_scope, _dirty));
const _forBody = /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", null, [_selected$forBody]);
const _for = /* @__PURE__ */_loop("#text/0", _forBody, (_scope, _destructure, _dirty = true) => {
  let num;
  if (_dirty) [num] = _destructure;
  _num$forBody(_scope, num, _dirty);
});
const _selected = /* @__PURE__ */_value("selected", (_scope, selected, _dirty) => _inLoopScope(_scope, _dirty, _selected$forBody, "#text/0"));
const _setup = _scope => {
  _selected(_scope, 0);
  _for(_scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], null]);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/basic-nested-scope-for/template.marko");