import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer(input => {
  const _scope0_id = _$.nextScopeId();
  const {
    value
  } = input;
  _$.write("<div>");
  let _ifScopeId, _ifRenderer;
  _$.resumeSingleNodeConditional(() => {
    if (value) {
      const _scope1_id = _$.nextScopeId();
      _$.write(`<span>${_$.escapeXML(value)}${_$.markResumeNode(_scope1_id, "#text/0")}</span>`);
      _$.debug(_$.writeScope(_scope1_id, {
        "_": _$.ensureScopeWithId(_scope0_id)
      }), "__tests__/template.marko", "3:4");
      _$.register(_ifRenderer = /* @__PURE__ */_$.createRenderer(() => {}), "__tests__/template.marko_1_renderer");
      _ifScopeId = _scope1_id;
    }
  }, _scope0_id, "#text/0");
  _$.write("<span></span><span></span></div>");
  _$.debug(_$.writeScope(_scope0_id, {
    "value": value,
    "#text/0(": _ifRenderer,
    "#text/0!": _$.getScopeById(_ifScopeId)
  }), "__tests__/template.marko", 0, {
    "value": "1:10"
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);