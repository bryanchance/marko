// size: 730 (min) 338 (brotli)
const _Child_content2 = _$.registerContent("a0", "Hi"),
  _Child_content = _$.registerContent("a1", "Hi"),
  _input_value$Parent_content = _$.dynamicClosureRead(
    10,
    (_scope, input_value) => _$.html(_scope, input_value, 0),
  ),
  _Parent_content = _$.registerContent("a2", " ", " ", 0, 0, (_scope) =>
    _input_value$Parent_content(_scope),
  ),
  _expr_Parent_Child_effect = _$.effect(
    "a3",
    (_scope, { 11: Parent, 12: Child }) => {
      for (const node of _scope[0].querySelectorAll("a"))
        node.getAttribute("ns") !== node.namespaceURI &&
          node.setAttribute("ns", node.namespaceURI);
    },
  ),
  _expr_Parent_Child = _$.intersection(13, (_scope) => {
    _expr_Parent_Child_effect(_scope);
  }),
  _dynamicTag3 = _$.dynamicTag(5, _Parent_content),
  _dynamicTag2 = _$.dynamicTag(4, _Child_content2),
  _dynamicTag = _$.dynamicTag(2, _Child_content),
  _Child_effect = _$.effect("a4", (_scope, { 12: Child }) =>
    _$.on(_scope[7], "click", function () {
      _Child(_scope, "a" === Child ? null : "a");
    }),
  ),
  _Child = _$.state(12, (_scope, Child) => {
    _dynamicTag(_scope, Child, () => ({ href: "#bar" })),
      _dynamicTag2(_scope, Child, () => ({ href: "#bar" })),
      _expr_Parent_Child(_scope),
      _Child_effect(_scope);
  }),
  _Parent_effect = _$.effect("a5", (_scope, { 11: Parent }) =>
    _$.on(_scope[6], "click", function () {
      _Parent(_scope, "div" === Parent ? "svg" : "div");
    }),
  ),
  _Parent = _$.state(11, (_scope, Parent) => {
    _dynamicTag3(_scope, Parent),
      _expr_Parent_Child(_scope),
      _Parent_effect(_scope);
  });
init();
