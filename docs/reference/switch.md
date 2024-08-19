---
sidebar_label: switch
title: switch
---

## Switch Objects

```python
class Switch(ConstrainedControl, AdaptiveControl)
```

A toggle represents a physical switch that allows someone to choose between two mutually exclusive options.

or example, &quot;On/Off&quot;, &quot;Show/Hide&quot;. Choosing an option should produce an immediate result.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    def theme_changed(e):
        page.theme_mode = (
            ft.ThemeMode.DARK
            if page.theme_mode == ft.ThemeMode.LIGHT
            else ft.ThemeMode.LIGHT
        )
        c.label = (
            "Light theme" if page.theme_mode == ft.ThemeMode.LIGHT else "Dark theme"
        )
        page.update()

    page.theme_mode = ft.ThemeMode.LIGHT
    c = ft.Switch(label="Light theme", on_change=theme_changed)
    page.add(c)

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/switch

#### value

```python
@property
def value() -> bool
```

Current value of the Switch.

#### label

```python
@property
def label() -> Optional[str]
```

The clickable label to display on the right of the Switch.

#### hover\_color

```python
@property
def hover_color() -> Optional[str]
```

The [color](/docs/reference/colors) to be used when it is being hovered over by the mouse pointer.

#### track\_outline\_color

```python
@property
def track_outline_color() -> Union[None, str, Dict[ControlState, str]]
```

The outline [color](/docs/reference/colors) of this switch&#x27;s track in various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

#### overlay\_color

```python
@property
def overlay_color() -> Union[None, str, Dict[ControlState, str]]
```

The [color](/docs/reference/colors) for the switch&#x27;s Material in various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are supported: `PRESSED`, `SELECTED`, `HOVERED`, `FOCUSED` and `DEFAULT`.

#### splash\_radius

```python
@property
def splash_radius() -> OptionalNumber
```

The radius of the splash effect when the switch is pressed.

#### label\_style

```python
@property
def label_style() -> Optional[TextStyle]
```

The label&#x27;s style.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

#### label\_position

```python
@property
def label_position() -> Optional[LabelPosition]
```

Value is of type [`LabelPosition`](/docs/reference/types/labelposition) and defaults to `LabelPosition.RIGHT`.

#### mouse\_cursor

```python
@property
def mouse_cursor() -> Optional[MouseCursor]
```

The cursor to be displayed when a mouse pointer enters or is hovering over this control.
The value is [`MouseCursor`](/docs/reference/types/mousecursor) enum.

#### autofocus

```python
@property
def autofocus() -> bool
```

True if the control will be selected as the initial focus. If there is more than one control on a page with autofocus set, then the first one added to the page will get focus.

#### active\_color

```python
@property
def active_color() -> Optional[str]
```

The [color](/docs/reference/colors) to use when this switch is on.

#### active\_track\_color

```python
@property
def active_track_color() -> Optional[str]
```

The [color](/docs/reference/colors) to use on the track when this switch is on.

If `track_color` returns a non-null color in the `selected` state, it will be used instead of this color.

#### focus\_color

```python
@property
def focus_color() -> Optional[str]
```

The [color](/docs/reference/colors) to use for the focus highlight for keyboard interactions.

#### inactive\_thumb\_color

```python
@property
def inactive_thumb_color() -> Optional[str]
```

The [color](/docs/reference/colors) to use on the thumb when this switch is off.

If `thumb_color` returns a non-null color in the default state, it will be used instead of this color.

#### inactive\_track\_color

```python
@property
def inactive_track_color() -> Optional[str]
```

The [color](/docs/reference/colors) to use on the track when this switch is off.

If `track_color` returns a non-null color in the default state, it will be used instead of this color.

#### thumb\_color

```python
@property
def thumb_color() -> Union[None, str, Dict[ControlState, str]]
```

The [color](/docs/reference/colors) of this switch&#x27;s thumb in various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

#### thumb\_icon

```python
@property
def thumb_icon() -> Union[None, str, Dict[ControlState, str]]
```

The icon of this Switch&#x27;s thumb in various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

#### track\_color

```python
@property
def track_color() -> Union[None, str, Dict[ControlState, str]]
```

The [color](/docs/reference/colors) of this switch&#x27;s track in various [`ControlState`](/docs/reference/types/controlstate) states.
The following [`ControlState`](/docs/reference/types/controlstate) values are supported: `SELECTED`, `HOVERED`, `DISABLED`, `FOCUSED` and `DEFAULT` (fallback).

