import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const count = 0;
  _$.write("<section>");
  const _childScope = _$.peekNextScope();
  _child({});
  _$.write(`</section><div>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.debug(_$.writeScope(_scope0_id, {
    "#childScope/0": _$.writeExistingScope(_childScope)
  }), "__tests__/template.marko", 0, {
    "count": "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);