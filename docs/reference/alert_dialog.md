---
sidebar_label: alert_dialog
title: alert_dialog
---

## AlertDialog Objects

```python
class AlertDialog(AdaptiveControl)
```

An alert dialog informs the user about situations that require acknowledgement. An alert dialog has an optional title and an optional list of actions. The title is displayed above the content and the actions are displayed below the content.

__Example__

```python
import flet as ft


def main(page: ft.Page):
    page.title = "AlertDialog examples"
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    dlg = ft.AlertDialog(
        title=ft.Text("Hi, this is a non-modal dialog!"),
        on_dismiss=lambda e: page.add(ft.Text("Non-modal dialog dismissed")),
    )

    def handle_close(e):
        page.close(dlg_modal)
        page.add(ft.Text(f"Modal dialog closed with action: {e.control.text}"))

    dlg_modal = ft.AlertDialog(
        modal=True,
        title=ft.Text("Please confirm"),
        content=ft.Text("Do you really want to delete all those files?"),
        actions=[
            ft.TextButton("Yes", on_click=handle_close),
            ft.TextButton("No", on_click=handle_close),
        ],
        actions_alignment=ft.MainAxisAlignment.END,
        on_dismiss=lambda e: page.add(
            ft.Text("Modal dialog dismissed"),
        ),
    )

    page.add(
        ft.ElevatedButton("Open dialog", on_click=lambda e: page.open(dlg)),
        ft.ElevatedButton("Open modal dialog", on_click=lambda e: page.open(dlg_modal)),
    )


ft.app(target=main)
```
-----

Online docs: https://flet.dev/docs/controls/alertdialog

#### open

```python
@property
def open() -> bool
```

Set to `True` to display a dialog.

Value is of type `bool` and defaults to `False`.

#### bgcolor

```python
@property
def bgcolor() -> Optional[str]
```

The background [color](/docs/reference/colors) of the dialog&#x27;s surface.

Value is of type `str`.

#### shadow\_color

```python
@property
def shadow_color() -> Optional[str]
```

The [color](/docs/reference/colors) used to paint a drop shadow under the dialog, which reflects the dialog&#x27;s elevation.

Value is of type `str`.

#### surface\_tint\_color

```python
@property
def surface_tint_color() -> Optional[str]
```

The [color](/docs/reference/colors) used as a surface tint overlay on the dialog&#x27;s background color, which reflects the dialog&#x27;s elevation.

Value is of type `str`.

#### icon\_color

```python
@property
def icon_color() -> Optional[str]
```

The [color](/docs/reference/colors) of the icon displayed in the dialog.

Value is of type `str`.

#### elevation

```python
@property
def elevation() -> OptionalNumber
```

Defines the elevation (z-coordinate) at which the dialog should appear.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

#### actions\_overflow\_button\_spacing

```python
@property
def actions_overflow_button_spacing() -> OptionalNumber
```

Spacing between the action buttons when they overflow.

Value is of type [`OptionalNumber`](/docs/reference/types/aliases#optionalnumber).

#### modal

```python
@property
def modal() -> bool
```

If `True`, the dialog will be modal and block user interaction with other parts of the app.

Value is of type `bool` and defaults to `False`.

#### title

```python
@property
def title() -> Optional[Control]
```

Optional title widget for the dialog.

Value is of type [`Optional[Control]`](/docs/reference/types/aliases#optionalcontrol).

#### title\_padding

```python
@property
def title_padding() -> PaddingValue
```

Padding around the title widget.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `None`.

#### content

```python
@property
def content() -> Optional[Control]
```

The main content of the dialog.

Value is of type [`Optional[Control]`](/docs/reference/types/aliases#optionalcontrol).

#### content\_padding

```python
@property
def content_padding() -> PaddingValue
```

Padding around the content widget.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `None`.

#### actions

```python
@property
def actions() -> Optional[List[Control]]
```

List of actions displayed at the bottom of the dialog.

Value is of type [`Optional[List[Control]]`](/docs/reference/types/aliases#optionalcontrol).

#### actions\_padding

```python
@property
def actions_padding() -> PaddingValue
```

Padding around the actions.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `None`.

#### actions\_alignment

```python
@property
def actions_alignment() -> Optional[MainAxisAlignment]
```

Alignment of the action buttons.

Value is of type [`Optional[MainAxisAlignment]`](/docs/reference/types/aliases#optionalmainaxisalignment) and defaults to `None`.

#### shape

```python
@property
def shape() -> Optional[OutlinedBorder]
```

Defines the shape of the dialog&#x27;s surface.

Value is of type [`Optional[OutlinedBorder]`](/docs/reference/types/aliases#optionaloutlinedborder) and defaults to `None`.

#### inset\_padding

```python
@property
def inset_padding() -> PaddingValue
```

Padding around the dialog&#x27;s surface, between the dialog and the edge of its parent.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `None`.

#### icon\_padding

```python
@property
def icon_padding() -> PaddingValue
```

Padding around the icon.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `None`.

#### action\_button\_padding

```python
@property
def action_button_padding() -> PaddingValue
```

Padding around each action button.

Value is of type [`PaddingValue`](/docs/reference/types/aliases#paddingvalue) and defaults to `None`.

#### alignment

```python
@property
def alignment() -> Optional[Alignment]
```

Alignment of the dialog on the screen.

Value is of type [`Optional[Alignment]`](/docs/reference/types/aliases#optionalalignment) and defaults to `None`.

#### content\_text\_style

```python
@property
def content_text_style() -> Optional[TextStyle]
```

Text style for the content.

Value is of type [`Optional[TextStyle]`](/docs/reference/types/aliases#optionaltextstyle) and defaults to `None`.

#### title\_text\_style

```python
@property
def title_text_style() -> Optional[TextStyle]
```

Text style for the title.

Value is of type [`Optional[TextStyle]`](/docs/reference/types/aliases#optionaltextstyle) and defaults to `None`.

#### clip\_behavior

```python
@property
def clip_behavior() -> Optional[ClipBehavior]
```

Determines how the dialog&#x27;s content is clipped.

Value is of type [`Optional[ClipBehavior]`](/docs/reference/types/aliases#optionalclipbehavior) and defaults to `None`.

#### semantics\_label

```python
@property
def semantics_label() -> Optional[str]
```

Optional label for accessibility purposes.

Value is of type `str`.

#### on\_dismiss

```python
@property
def on_dismiss() -> OptionalEventCallable
```

Callback triggered when the dialog is dismissed.

Value is of type [`OptionalEventCallable`](/docs/reference/types/aliases#optionaleventcallable).

