import customTag from './tags/custom-tag.marko';
const tags = [customTag];
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let x = 1;
  _$.write(`<button>Count: <!>${_$.escapeXML(x)}${_$.markResumeNode(_scope0_id, "#text/1")}</button>${_$.markResumeNode(_scope0_id, "#button/0")}`);
  const _dynamicScope = _$.peekNextScope();
  const y = _$.dynamicTagInput(_scope0_id, "#text/2", tags[0], x, void 0);
  _$.setTagVar(_scope0_id, "#scopeOffset/3", _dynamicScope, "__tests__/template.marko_0_y/var");
  _$.write(`<div>Parent: <!>${_$.escapeXML(y)}${_$.markResumeNode(_scope0_id, "#text/4")}</div>`);
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_x");
  _$.writeScope(_scope0_id, {
    x,
    "ConditionalScope:#text/2": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/2": _$.dynamicTagId(tags[0])
  }, "__tests__/template.marko", 0, {
    x: "3:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});