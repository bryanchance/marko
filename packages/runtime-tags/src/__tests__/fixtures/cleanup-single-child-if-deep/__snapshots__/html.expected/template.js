import * as _$ from "@marko/runtime-tags/debug/html";
import _child from "./tags/child.marko";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", input => {
  const _scope0_id = _$.nextScopeId();
  const _showInner_closures = new Set();
  let _ifScopeId3, _ifBranch3;
  let showOuter = true;
  let showMiddle = true;
  let showInner = true;
  const el = _$.nodeRef();
  const write = _$.register(function (msg) {
    el().innerHTML += '\n' + msg;
  }, "__tests__/template.marko_0/write", _scope0_id);
  _$.write(`<button id=outer>Toggle Outer</button>${_$.markResumeNode(_scope0_id, "#button/0")}<button id=middle>Toggle Middle</button>${_$.markResumeNode(_scope0_id, "#button/1")}<button id=inner>Toggle Inner</button>${_$.markResumeNode(_scope0_id, "#button/2")}<pre></pre>${_$.markResumeNode(_scope0_id, "#pre/3")}`);
  _$.resumeSingleNodeConditional(() => {
    if (showOuter) {
      const _scope1_id = _$.nextScopeId();
      let _ifScopeId2, _ifBranch2;
      _$.write("<div>");
      _child({
        write: write,
        name: "Outer"
      });
      _$.resumeSingleNodeConditional(() => {
        if (showMiddle) {
          const _scope2_id = _$.nextScopeId();
          let _ifScopeId, _ifBranch;
          _$.write("<div>");
          _child({
            write: write,
            name: "Middle"
          });
          _$.resumeSingleNodeConditional(() => {
            if (showInner) {
              const _scope3_id = _$.nextScopeId();
              _child({
                write: write,
                name: "Inner"
              });
              _$.writeScope(_scope3_id, {}, "__tests__/template.marko", "17:10");
              _ifBranch = 0;
              _ifScopeId = _scope3_id;
            }
          }, _scope2_id, "#text/1");
          _$.write("</div>");
          _$.writeSubscribe(_showInner_closures, _$.writeScope(_scope2_id, {
            "ConditionalRenderer:#text/1": _ifBranch,
            "ConditionalScope:#text/1": _$.getScopeById(_ifScopeId),
            _: _$.ensureScopeWithId(_scope1_id),
            "ClosureSignalIndex:showInner": 0
          }, "__tests__/template.marko", "14:6"));
          _ifBranch2 = 0;
          _ifScopeId2 = _scope2_id;
        }
      }, _scope1_id, "#text/1");
      _$.write("</div>");
      _$.writeScope(_scope1_id, {
        _: _$.ensureScopeWithId(_scope0_id),
        "ConditionalRenderer:#text/1": _ifBranch2,
        "ConditionalScope:#text/1": _$.getScopeById(_ifScopeId2)
      }, "__tests__/template.marko", "11:2");
      _ifBranch3 = 0;
      _ifScopeId3 = _scope1_id;
    }
  }, _scope0_id, "#text/4");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showInner");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showMiddle");
  _$.writeEffect(_scope0_id, "__tests__/template.marko_0_showOuter");
  _$.writeScope(_scope0_id, {
    showOuter,
    showMiddle,
    showInner,
    write,
    "ClosureScopes:showInner": _showInner_closures,
    "ConditionalRenderer:#text/4": _ifBranch3,
    "ConditionalScope:#text/4": _$.getScopeById(_ifScopeId3)
  }, "__tests__/template.marko", 0, {
    showOuter: "1:6",
    showMiddle: "2:6",
    showInner: "3:6",
    write: "9:8"
  });
  _$.resumeClosestBranch(_scope0_id);
});