import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  const dummy = {};
  _$.write(`<div>${_$.escapeXML((dummy, value))}${_$.markResumeNode(_scope0_id, "#text/0")}</div>`);
  _$.writeScope(_scope0_id, {
    "value/3": value,
    "dummy/4": dummy
  }, "__tests__/tags/display-intersection.marko", 0, {
    "value/3": "1:10",
    "dummy/4": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/display-intersection.marko", _renderer);