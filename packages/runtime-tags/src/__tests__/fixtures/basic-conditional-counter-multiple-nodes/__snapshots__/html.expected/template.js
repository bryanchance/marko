import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId, _ifBranch;
  let show = true;
  let count = 0;
  _$.write(`<button class=inc></button>${_$.markResumeNode(_scope0_id, "#button/0")}<button class=toggle></button>${_$.markResumeNode(_scope0_id, "#button/1")}`);
  _$.resumeConditional(() => {
    if (show) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`The count is <!>${_$.escapeXML(count)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id)
      }, "__tests__/template.marko", "5:2");
      _ifBranch = 0;
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/2");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_show");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_count");
  _$.writeScope(_scope0_id, {
    show,
    count,
    "ConditionalRenderer:#text/2": _ifBranch,
    "ConditionalScope:#text/2": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    show: "1:6",
    count: "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});