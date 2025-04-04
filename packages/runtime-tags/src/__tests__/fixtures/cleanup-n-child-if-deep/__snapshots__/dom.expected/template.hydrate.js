// size: 1374 (min) 517 (brotli)
const _template_ = "<div><!> a</div><span><!> a</span><p><!> a</p>",
  _expr_name_write_effect = _$.effect("a0", (_scope, { 5: name, 6: write }) => {
    write(`${name} mounted`),
      (_$.getAbortSignal(_scope, 0).onabort = () => {
        write(`${name} destroyed`);
      });
  }),
  _expr_name_write = _$.intersection(7, (_scope) => {
    _$.resetAbortSignal(_scope, 0), _expr_name_write_effect(_scope);
  }),
  _write_ = _$.value(6, (_scope, write) => _expr_name_write(_scope)),
  _name_ = _$.value(5, (_scope, name) => {
    _$.data(_scope[0], name),
      _$.data(_scope[1], name),
      _$.data(_scope[2], name),
      _expr_name_write(_scope);
  }),
  _write$if_content3 = _$.dynamicClosureRead(
    8,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._._,
  ),
  _setup$if_content3 = (_scope) => {
    _scope[0], _name_(_scope[0], "Inner");
  },
  _if_content3 = _$.createRenderer(
    _template_,
    "/D%lD%lD%l&",
    _setup$if_content3,
    0,
    (_scope) => _write$if_content3(_scope),
  ),
  _if$if_content = _$.conditional(1, _if_content3),
  _write$if_content2 = _$.dynamicClosureRead(
    8,
    (_scope, write) => _write_(_scope[0], write),
    (_scope) => _scope._._,
  ),
  _showInner$if_content = _$.dynamicClosureRead(
    7,
    (_scope, showInner) => _if$if_content(_scope, showInner ? 0 : 1),
    (_scope) => _scope._._,
  ),
  _setup$if_content2 = (_scope) => {
    _scope[0], _name_(_scope[0], "Middle");
  },
  _if_content2 = _$.createRenderer(
    `<div>${_template_}<!></div>`,
    "D/D%lD%lD%l&%",
    _setup$if_content2,
    0,
    (_scope) => {
      _showInner$if_content(_scope), _write$if_content2(_scope);
    },
  ),
  _if$if_content2 = _$.conditional(1, _if_content2),
  _write$if_content = _$.conditionalClosure(8, 4, 0, (_scope, write) =>
    _write_(_scope[0], write),
  ),
  _showMiddle$if_content = _$.conditionalClosure(
    6,
    4,
    0,
    (_scope, showMiddle) => _if$if_content2(_scope, showMiddle ? 0 : 1),
  ),
  _setup$if_content = (_scope) => {
    _scope[0], _name_(_scope[0], "Outer");
  },
  _if_content = _$.createRenderer(
    `<div>${_template_}<!></div>`,
    "D/D%lD%lD%l&%",
    _setup$if_content,
    0,
    (_scope) => {
      _showMiddle$if_content._(_scope), _write$if_content._(_scope);
    },
  ),
  _if = _$.conditional(4, _if_content),
  _showInner_closure = _$.dynamicClosure(_showInner$if_content),
  _showInner_effect = _$.effect("b1", (_scope, { 7: showInner }) =>
    _$.on(_scope[2], "click", function () {
      _showInner(_scope, !showInner);
    }),
  ),
  _showInner = _$.state(7, (_scope, showInner) => {
    _showInner_closure(_scope), _showInner_effect(_scope);
  }),
  _showMiddle_effect = _$.effect("b2", (_scope, { 6: showMiddle }) =>
    _$.on(_scope[1], "click", function () {
      _showMiddle(_scope, !showMiddle);
    }),
  ),
  _showMiddle = _$.state(6, (_scope, showMiddle) => {
    _showMiddle$if_content(_scope), _showMiddle_effect(_scope);
  }),
  _showOuter_effect = _$.effect("b3", (_scope, { 5: showOuter }) =>
    _$.on(_scope[0], "click", function () {
      _showOuter(_scope, !showOuter);
    }),
  ),
  _showOuter = _$.state(5, (_scope, showOuter) => {
    _if(_scope, showOuter ? 0 : 1), _showOuter_effect(_scope);
  });
_$.register("b0", function (_scope) {
  return function (msg) {
    _scope[3].innerHTML += "\n" + msg;
  };
}),
  init();
