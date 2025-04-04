import * as _$ from "@marko/runtime-tags/debug/html";
import _myButton from "./tags/my-button.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _clickCount_closures = new Set();
  let clickCount = 0;
  const _childScope = _$.peekNextScope();
  _myButton({
    onClick: _$.register(function () {
      clickCount++;
    }, "__tests__/template.marko_0/onClick", _scope0_id),
    content: /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", () => {
      const _scope1_id = _$.nextScopeId();
      _$.write(`${_$.escapeXML(clickCount)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
      _$.writeSubscribe(_clickCount_closures, _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "ClosureSignalIndex:clickCount": 0
      }, "__tests__/template.marko", "2:2"));
      _$.resumeClosestBranch(_scope1_id);
    })
  });
  _$.writeScope(_scope0_id, {
    clickCount,
    "ClosureScopes:clickCount": _clickCount_closures,
    "#childScope/0": _$.writeExistingScope(_childScope)
  }, "__tests__/template.marko", 0, {
    clickCount: "1:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});