export const _template_ = "<div>B <!></div>";
export const _walks_ = /* get, next(1), over(1), replace, out(1) */" Db%l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _dynamicTag = /* @__PURE__ */_$.dynamicTag("#text/1");
export const _content_ = /* @__PURE__ */_$.value("content/6", (_scope, content) => _dynamicTag(_scope, content));
export const _other_ = /* @__PURE__ */_$.value("other/5", (_scope, other) => _$.attr(_scope["#div/0"], "data-other", other));
export const _className_ = /* @__PURE__ */_$.value("className/4", (_scope, className) => _$.classAttr(_scope["#div/0"], className));
export const _input_ = /* @__PURE__ */_$.value("input/3", (_scope, input) => {
  _className_(_scope, input.class);
  _other_(_scope, input.other);
  _content_(_scope, input.content);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/2", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/tag-b/index.marko", _template_, _walks_, _setup_, () => _params__);