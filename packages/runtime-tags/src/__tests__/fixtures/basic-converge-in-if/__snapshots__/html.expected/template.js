import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  let _ifScopeId;
  const a = 0;
  const b = 0;
  if (true) {
    const _scope1_id = _$.nextScopeId();
    _$.write(`${_$.escapeXML(a + b)}${_$.markResumeNode(_scope1_id, "#text/0")}`);
    _$.writeScope(_scope1_id, {
      _: _$.ensureScopeWithId(_scope0_id)
    }, "__tests__/template.marko", "3:2");
    _ifScopeId = _scope1_id;
  }
  _$.writeScope(_scope0_id, {
    "a/1": a,
    "b/2": b,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }, "__tests__/template.marko", 0, {
    "a/1": "1:6",
    "b/2": "2:6"
  });
  _$.resumeClosestBranch(_scope0_id);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);