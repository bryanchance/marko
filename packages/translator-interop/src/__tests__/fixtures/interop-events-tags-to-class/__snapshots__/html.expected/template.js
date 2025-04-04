import { s as _s } from "marko/src/runtime/helpers/tags-compat/html-debug.mjs";
import _classCounter from "./components/class-counter.marko";
_s(_classCounter, "__tests__/components/class-counter.marko");
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let count = 0;
  const _dynamicScope = _$.peekNextScope();
  _$.dynamicTagInput(_scope0_id, "#text/0", _classCounter, {
    onCount: _$.register(function (newCount) {
      count = newCount;
    }, "__tests__/template.marko_0/onCount", _scope0_id)
  });
  _$.write(`<div id=tags-api>${_$.escapeXML(count)}${_$.markResumeNode(_scope0_id, "#text/1")}</div>`);
  _$.writeScope(_scope0_id, {
    "ConditionalScope:#text/0": _$.writeExistingScope(_dynamicScope),
    "ConditionalRenderer:#text/0": _$.dynamicTagId(_classCounter)
  }, "__tests__/template.marko", 0);
  _$.resumeClosestBranch(_scope0_id);
});