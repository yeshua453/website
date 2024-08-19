---
sidebar_label: app_bar
title: app_bar
---

## AppBar Objects

```python
class AppBar(AdaptiveControl)
```

A material design app bar.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    page.appbar = ft.AppBar(
        leading=ft.Icon(ft.icons.PALETTE),
        leading_width=40,
        title=ft.Text("AppBar Example"),
        center_title=False,
        bgcolor=ft.colors.SURFACE_VARIANT,
        actions=[
            ft.IconButton(ft.icons.WB_SUNNY_OUTLINED),
            ft.IconButton(ft.icons.FILTER_3),
            ft.PopupMenuButton(
                items=[
                    ft.PopupMenuItem(text="Item 1"),
                    ft.PopupMenuItem(),  # divider
                    ft.PopupMenuItem(
                        text="Checked item", checked=False, on_click=check_item_clicked
                    ),
                ]
            ),
        ],
    )
    page.add(ft.Text("Body!"))

ft.app(target=main)

```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/appbar

#### leading

```python
@property
def leading() -> Optional[Control]
```

A `Control` to display before the toolbar&#x27;s title.

Typically the leading control is an [`Icon`](/docs/controls/icon) or an [`IconButton`](/docs/controls/iconbutton).

#### leading\_width

```python
@property
def leading_width() -> OptionalNumber
```

Defines the width of the leading control.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `56.0`.

#### title\_spacing

```python
@property
def title_spacing() -> OptionalNumber
```

The spacing around the `title` on the horizontal axis. It is applied even if there are no `leading` or `actions` controls.

If you want `title` to take all the space available, set this value to `0.0`.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

#### toolbar\_opacity

```python
@property
def toolbar_opacity() -> float
```

The opacity of the toolbar. Value ranges from `0.0` (transparent) to `1.0` (fully opaque).

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber) and defaults to `1.0`.

#### shape

```python
@property
def shape() -> Optional[OutlinedBorder]
```

The shape of the app bar&#x27;s Material as well as its shadow.

Value is of type [`OutlinedBorder`](/docs/reference/types/outlinedborder).

#### title\_text\_style

```python
@property
def title_text_style() -> Optional[TextStyle]
```

The style to be used for the `Text` controls in the `title`.

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

#### toolbar\_text\_style

```python
@property
def toolbar_text_style() -> Optional[TextStyle]
```

The style to be used for the `Text` controls in the app bar&#x27;s `leading` and `actions` (but not `title`).

Value is of type [`TextStyle`](/docs/reference/types/textstyle).

#### automatically\_imply\_leading

```python
@property
def automatically_imply_leading() -> bool
```

Controls whether the leading widget should be implied if `leading` is `None`.

If `True` and `leading` is `None`, the system will automatically try to deduce what the leading widget should be. If `False` and `leading` is `None`, the leading space is given to the title. If a leading widget is provided, this parameter has no effect.

Value is of type `bool`.

#### title

```python
@property
def title() -> Optional[Control]
```

The primary widget displayed in the app bar, typically a `Text` widget.

The title is placed between the `leading` and `actions` widgets.

#### center\_title

```python
@property
def center_title() -> bool
```

Whether the `title` is centered.

If set to `True`, the `title` widget will be centered within the app bar. Otherwise, the `title` will align to the start of the space between `leading` and `actions`.

Value is of type `bool`.

#### toolbar\_height

```python
@property
def toolbar_height() -> OptionalNumber
```

The height of the toolbar.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

#### color

```python
@property
def color() -> Optional[str]
```

The foreground color to be used within the app bar, typically applied to text and iconography.

Value is of type `str`.

#### bgcolor

```python
@property
def bgcolor() -> Optional[str]
```

The background color of the app bar.

Value is of type `str`.

#### elevation

```python
@property
def elevation() -> OptionalNumber
```

The z-coordinate at which to place this app bar. This controls the size of the shadow below the app bar.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

#### elevation\_on\_scroll

```python
@property
def elevation_on_scroll() -> OptionalNumber
```

The elevation to be applied to the app bar when the user scrolls up.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

#### shadow\_color

```python
@property
def shadow_color() -> Optional[str]
```

The color of the shadow below the app bar.

Value is of type `str`.

#### surface\_tint\_color

```python
@property
def surface_tint_color() -> Optional[str]
```

The color used as an overlay on the app bar when it has a background color.

Value is of type `str`.

#### clip\_behavior

```python
@property
def clip_behavior() -> Optional[ClipBehavior]
```

The content of the app bar will be clipped (or not) according to this option.

Value is of type [`ClipBehavior`](/docs/reference/types/clipbehavior).

#### force\_material\_transparency

```python
@property
def force_material_transparency() -> Optional[bool]
```

Forces the app bar to use a material design with transparent background, even if it is not secondary.

Value is of type `bool`.

#### is\_secondary

```python
@property
def is_secondary() -> Optional[bool]
```

Indicates whether the app bar is a secondary app bar.

Value is of type `bool`.

#### exclude\_header\_semantics

```python
@property
def exclude_header_semantics() -> Optional[bool]
```

Whether to exclude the app bar&#x27;s header semantics from the overall app bar semantics.

Value is of type `bool`.

#### actions

```python
@property
def actions() -> Optional[List[Control]]
```

A list of `Control` objects displayed on the right side of the app bar.

Typically these controls are icons or buttons for various actions.

