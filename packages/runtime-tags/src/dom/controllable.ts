import {
  type Accessor,
  AccessorPrefix,
  ControlledType,
  type Scope,
} from "../common/types";
import { attr, normalizeAttrValue } from "./dom";
import { createDelegator } from "./event";
import { pendingEffects, run } from "./queue";
import { resolveCursorPosition } from "./resolve-cursor-position";
import { isResuming } from "./resume";

export function controllable_input_checked(
  scope: Scope,
  nodeAccessor: Accessor,
  checked: unknown,
  checkedChange: unknown,
) {
  setCheckboxValue(
    scope,
    nodeAccessor,
    ControlledType.InputChecked,
    normalizeBoolProp(checked),
    checkedChange,
  );
}
export function controllable_input_checked_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  syncControllable(el, "input", hasCheckboxChanged, () => {
    const checkedChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (checkedChange) {
      const newValue = el.checked;
      el.checked = !newValue;
      checkedChange(newValue);
      run();
    }
  });
}

export function controllable_input_checkedValue(
  scope: Scope,
  nodeAccessor: Accessor,
  checkedValue: unknown,
  checkedValueChange: unknown,
  value: unknown,
) {
  scope[AccessorPrefix.ControlledValue + nodeAccessor] = checkedValue;
  attr(scope[nodeAccessor] as HTMLInputElement, "value", value);
  setCheckboxValue(
    scope,
    nodeAccessor,
    ControlledType.InputCheckedValue,
    Array.isArray(checkedValue)
      ? checkedValue.includes(value)
      : checkedValue === value,
    checkedValueChange,
  );
}
export function controllable_input_checkedValue_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  syncControllable(el, "input", hasCheckboxChanged, () => {
    const checkedValueChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (checkedValueChange) {
      const oldValue = scope[AccessorPrefix.ControlledValue + nodeAccessor];
      const newValue = Array.isArray(oldValue)
        ? updateList(oldValue, el.value, el.checked)
        : el.checked
          ? el.value
          : undefined;

      if (el.name && el.type[0] === "r") {
        for (const radio of (
          el.getRootNode() as Document | ShadowRoot
        ).querySelectorAll<HTMLInputElement>(
          `[type=radio][name=${CSS.escape(el.name)}]`,
        )) {
          if (radio.form === el.form) {
            radio.checked = Array.isArray(oldValue)
              ? oldValue.includes(radio.value)
              : oldValue === radio.value;
          }
        }
      } else {
        el.checked = !el.checked;
      }
      checkedValueChange(newValue);
      run();
    }
  });
}

export function controllable_input_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  const normalizedValue = normalizeStrProp(value);
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = valueChange;

  if (valueChange) {
    scope[AccessorPrefix.ControlledType + nodeAccessor] =
      ControlledType.InputChecked;
    scope[AccessorPrefix.ControlledValue + nodeAccessor] = value;

    if (el.isConnected) {
      setValueAndUpdateSelection(el, normalizedValue);
    } else {
      el.defaultValue = normalizedValue;
    }
  } else {
    scope[AccessorPrefix.ControlledType + nodeAccessor] = ControlledType.None;
    el.defaultValue = normalizedValue;
  }
}
export function controllable_input_value_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLInputElement;
  if (isResuming) {
    scope[AccessorPrefix.ControlledValue + nodeAccessor] = el.defaultValue;
  }
  syncControllable(el, "input", hasValueChanged, (ev?: Event) => {
    const valueChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (valueChange) {
      const newValue = el.value;
      inputType = (ev as InputEvent)?.inputType;
      setValueAndUpdateSelection(
        el,
        scope[AccessorPrefix.ControlledValue + nodeAccessor],
      );
      valueChange(newValue);
      run();
      inputType = "";
    }
  });
}

export {
  controllable_input_value as controllable_textarea_value,
  controllable_input_value_effect as controllable_textarea_value_effect,
};

export function controllable_select_value(
  scope: Scope,
  nodeAccessor: Accessor,
  value: unknown,
  valueChange: unknown,
) {
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = valueChange;

  if (valueChange) {
    scope[AccessorPrefix.ControlledType + nodeAccessor] =
      ControlledType.SelectValue;
    scope[AccessorPrefix.ControlledValue + nodeAccessor] = value;
  } else {
    scope[AccessorPrefix.ControlledType + nodeAccessor] = ControlledType.None;
  }

  pendingEffects.unshift(
    () =>
      setSelectOptions(
        scope[nodeAccessor] as HTMLSelectElement,
        value,
        valueChange,
      ),
    scope,
  );
}
export function controllable_select_value_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLSelectElement;
  const onChange = () => {
    const valueChange = scope[
      AccessorPrefix.ControlledHandler + nodeAccessor
    ] as undefined | ((value: unknown) => unknown);
    if (valueChange) {
      const newValue = Array.isArray(
        scope[AccessorPrefix.ControlledValue + nodeAccessor],
      )
        ? Array.from(el.selectedOptions, toValueProp)
        : el.value;
      setSelectOptions(
        el,
        scope[AccessorPrefix.ControlledValue + nodeAccessor],
        valueChange,
      );
      valueChange(newValue);
      run();
    }
  };

  if (!(el as any)._) {
    new MutationObserver(() => {
      const value = scope[AccessorPrefix.ControlledValue + nodeAccessor];
      if (
        Array.isArray(value)
          ? value.length !== el.selectedOptions.length ||
            value.some((value, i) => value != el.selectedOptions[i].value)
          : el.value != value
      ) {
        onChange();
      }
    }).observe(el, {
      childList: true,
      subtree: true,
    });
  }

  syncControllable(el, "input", hasSelectChanged, onChange);
}

function setSelectOptions(
  el: HTMLSelectElement,
  value: unknown,
  valueChange?: unknown,
) {
  if (Array.isArray(value)) {
    for (const opt of el.options) {
      const selected = value.includes(opt.value);
      if (valueChange) {
        opt.selected = selected;
      } else {
        opt.defaultSelected = selected;
      }
    }
  } else {
    const normalizedValue = normalizeStrProp(value);
    if (valueChange) {
      el.value = normalizedValue;
    } else {
      for (const opt of el.options) {
        opt.defaultSelected = opt.value === normalizedValue;
      }
    }
  }
}

export function controllable_detailsOrDialog_open(
  scope: Scope,
  nodeAccessor: Accessor,
  open: unknown,
  openChange: unknown,
) {
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = openChange;
  if (openChange) {
    scope[AccessorPrefix.ControlledType + nodeAccessor] =
      ControlledType.DetailsOrDialogOpen;
  } else {
    scope[AccessorPrefix.ControlledType + nodeAccessor] = ControlledType.None;
  }

  (scope[nodeAccessor] as HTMLDetailsElement).open = scope[
    AccessorPrefix.ControlledValue + nodeAccessor
  ] = normalizeBoolProp(open);
}
export function controllable_detailsOrDialog_open_effect(
  scope: Scope,
  nodeAccessor: Accessor,
) {
  const el = scope[nodeAccessor] as HTMLDetailsElement;
  const hasChanged = () =>
    el.open !== scope[AccessorPrefix.ControlledValue + nodeAccessor];
  syncControllable(
    el,
    el.tagName === "DIALOG" ? "close" : "toggle",
    hasChanged,
    () => {
      const openChange = scope[
        AccessorPrefix.ControlledHandler + nodeAccessor
      ] as undefined | ((value: unknown) => unknown);
      if (openChange && hasChanged()) {
        const newValue = el.open;
        el.open = !newValue;
        openChange(newValue);
        run();
      }
    },
  );
}

let inputType = "";
function setValueAndUpdateSelection(el: HTMLInputElement, value: string) {
  if (el.value !== value) {
    const updatedPosition = resolveCursorPosition(
      inputType,
      (el.getRootNode() as Document | ShadowRoot).activeElement === el &&
        el.selectionStart,
      el.value,
      (el.value = value),
    );
    if (~updatedPosition) {
      el.selectionStart = updatedPosition;
    }
  }
}

function setCheckboxValue(
  scope: Scope,
  nodeAccessor: Accessor,
  type: ControlledType,
  checked: boolean,
  checkedChange: unknown,
) {
  scope[AccessorPrefix.ControlledHandler + nodeAccessor] = checkedChange;

  if (checkedChange) {
    scope[AccessorPrefix.ControlledType + nodeAccessor] = type;
    (scope[nodeAccessor] as HTMLInputElement).checked = checked;
  } else {
    scope[AccessorPrefix.ControlledType + nodeAccessor] = ControlledType.None;
    (scope[nodeAccessor] as HTMLInputElement).defaultChecked = checked;
  }
}

const controllableDelegate = createDelegator();
function syncControllable<T extends Element>(
  el: T,
  event: "input" | "close" | "toggle",
  hasChanged: (el: T) => boolean | undefined,
  onChange: (ev?: Event) => void,
) {
  if (!(el as any)._) {
    controllableDelegate(el, event, handleChange);
    if ((el as any).form) {
      controllableDelegate((el as any).form!, "reset", handleFormReset);
    }

    if (isResuming && hasChanged(el)) {
      queueMicrotask(onChange);
    }
  }

  (el as any)._ = onChange;
}

function handleChange(ev: Event) {
  (ev.target as any)._?.(ev);
}

function handleFormReset(ev: Event) {
  const handlers: (() => void)[] = [];
  for (const el of (ev.target as HTMLFormElement).elements) {
    if ((el as any)._ && hasFormElementChanged(el)) {
      handlers.push((el as any)._);
    }
  }

  requestAnimationFrame(() => {
    if (!ev.defaultPrevented) {
      for (const change of handlers) {
        change();
      }
    }
  });
}

function hasValueChanged(el: HTMLInputElement) {
  return el.value !== el.defaultValue;
}

function hasCheckboxChanged(el: HTMLInputElement) {
  return el.checked !== el.defaultChecked;
}

function hasSelectChanged(el: HTMLSelectElement) {
  for (const opt of el.options) {
    if (opt.selected !== opt.defaultSelected) {
      return true;
    }
  }
}

function hasFormElementChanged(el: Element) {
  return (el as HTMLSelectElement).options
    ? hasSelectChanged(el as HTMLSelectElement)
    : hasValueChanged(el as HTMLInputElement) ||
        hasCheckboxChanged(el as HTMLInputElement);
}

function normalizeStrProp(value: unknown) {
  return normalizeAttrValue(value) || "";
}

function normalizeBoolProp(value: unknown) {
  return value != null && value !== false;
}

function updateList(arr: unknown[], val: unknown, push: boolean) {
  const index = arr.indexOf(val);
  return (
    (push
      ? !~index && [...arr, val]
      : ~index && arr.slice(0, index).concat(arr.slice(index + 1))) || arr
  );
}

function toValueProp(it: { value: string }) {
  return it.value;
}
