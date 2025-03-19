import { resolveAfter } from "../../utils/resolve";
import * as _$ from "@marko/runtime-tags/debug/html";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  _$.write("a");
  _$.tryContent(_scope0_id, "#text/0", _$.registerContent("__tests__/template.marko_1_renderer", () => {
    const _scope1_id = _$.nextScopeId();
    _$.write("b");
    _$.fork(_scope1_id, "#text/0", resolveAfter("c", 2), data => {
      const _scope3_id = _$.nextScopeId();
      _$.write(_$.escapeXML(data));
    });
    _$.write("d");
  }, _scope0_id), {
    catch: _$.attrTag({
      content: _$.registerContent("__tests__/template.marko_2_renderer", error => {
        const _scope2_id = _$.nextScopeId();
        _$.write("ERROR!");
      }, _scope0_id)
    })
  });
  _$.write("f");
  _$.fork(_scope0_id, "#text/1", resolveAfter("g", 1), data => {
    const _scope4_id = _$.nextScopeId();
    _$.write(_$.escapeXML(data));
  });
  _$.write("h");
});