import * as _$ from "@marko/runtime-tags/debug/html";
const _renderer = /* @__PURE__ */_$.createRenderer((input, _tagVar) => {
  const _scope0_id = _$.nextScopeId();
  _$.write("<div>");
  const _scope1_ = new Map();
  _$.resumeForTo(input.to, input.from, input.step, n => {
    const _scope1_id = _$.nextScopeId();
    _scope1_.set(n, _$.ensureScopeWithId(_scope1_id));
    _$.write(`${_$.escapeXML(n)}${_$.markResumeNode(_scope1_id, "#text/0")}, `);
    _$.writeScope(_scope1_id, {});
  }, _scope0_id, "#div/0");
  _$.write(`</div>${_$.markResumeNode(_scope0_id, "#div/0")}`);
  _$.writeScope(_scope0_id, {
    "input_from": input.from,
    "input_to": input.to,
    "input_step": input.step,
    "#div/0(": _scope1_.size ? _scope1_ : undefined
  });
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _renderer);