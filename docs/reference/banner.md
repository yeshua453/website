---
sidebar_label: banner
title: banner
---

## Banner Objects

```python
class Banner(Control)
```

A banner displays an important, succinct message, and provides actions for users to address (or dismiss the banner). A user action is required for it to be dismissed.

Banners are displayed at the top of the screen, below a top app bar. They are persistent and non-modal, allowing the user to either ignore them or interact with them at any time.

__Example__

```python
import flet as ft

def main(page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def close_banner(e):
        page.close(banner)
        page.add(ft.Text(&quot;Action clicked: &quot; + e.control.text))

    action_button_style = ft.ButtonStyle(color=ft.colors.BLUE)
    banner = ft.Banner(
        bgcolor=ft.colors.AMBER_100,
        leading=ft.Icon(ft.icons.WARNING_AMBER_ROUNDED, color=ft.colors.AMBER, size=40),
        content=ft.Text(
            value=&quot;Oops, there were some errors while trying to delete the file. What would you like me to do?&quot;,
            color=ft.colors.BLACK,
        ),
        actions=[
            ft.TextButton(text=&quot;Retry&quot;, style=action_button_style, on_click=close_banner),
            ft.TextButton(text=&quot;Ignore&quot;, style=action_button_style, on_click=close_banner),
            ft.TextButton(text=&quot;Cancel&quot;, style=action_button_style, on_click=close_banner),
        ],
    )

    page.add(ft.ElevatedButton(&quot;Show Banner&quot;, on_click=lambda e: page.open(banner)))

ft.app(main)

-----

Online docs: https://flet.dev/docs/controls/banner

#### open

```python
@property
def open() -> bool
```

Determines whether the banner is open and visible.

Defaults to `False`. Set to `True` to display the banner.

#### modal

```python
@property
def modal() -> bool
```

Determines whether the banner is modal.

Modal banners block user interaction with the rest of the interface until they are dismissed.
Defaults to `False`.

#### leading

```python
@property
def leading() -> Optional[Control]
```

The leading control of the banner.

Typically an [Icon](/docs/controls/icon) control.

#### leading\_padding

```python
@property
def leading_padding() -> PaddingValue
```

The padding around the leading control.

Defaults to 16 virtual pixels.

#### content

```python
@property
def content() -> Control
```

The content of the banner.

Typically a [Text](/docs/controls/text) control.

#### content\_padding

```python
@property
def content_padding() -> PaddingValue
```

The padding around the content.

If the actions are below the content, defaults to padding.only(left=16.0, top=24.0, right=16.0, bottom=4.0).
If the actions are trailing the content, defaults to padding.only(left=16.0, top=2.0).

#### margin

```python
@property
def margin() -> MarginValue
```

The margin around the banner.

The value is an instance of [Margin](/docs/reference/types/margin) class or a number.

#### actions

```python
@property
def actions() -> List[Control]
```

The actions displayed at the bottom or trailing side of the banner.

Typically a list of [TextButton](/docs/controls/textbutton) controls.

#### force\_actions\_below

```python
@property
def force_actions_below() -> bool
```

Forces actions to be below the content regardless of how many there are.

Defaults to `False`. If `True`, actions are always placed below the content.
If `False`, actions are placed trailing if there is only one, otherwise below the content.

#### bgcolor

```python
@property
def bgcolor() -> Optional[str]
```

The color of the banner&#x27;s surface.

Defaults to `None`, meaning no specific background color is applied.

#### content\_text\_style

```python
@property
def content_text_style() -> Optional[TextStyle]
```

The style used for the Text controls in the content.

Value is of type [TextStyle](/docs/reference/types/textstyle).

#### shadow\_color

```python
@property
def shadow_color() -> Optional[str]
```

The color of the shadow below the banner.

#### surface\_tint\_color

```python
@property
def surface_tint_color() -> Optional[str]
```

The color used as an overlay on `bgcolor` to indicate elevation.

#### divider\_color

```python
@property
def divider_color() -> Optional[str]
```

The color of the divider line, if applicable.

#### elevation

```python
@property
def elevation() -> OptionalNumber
```

The elevation of the banner, which affects the shadow depth.

Defaults to `None`, meaning no specific elevation is applied. Elevation cannot be negative.

#### on\_visible

```python
@property
def on_visible() -> OptionalControlEventCallable
```

Event handler for when the banner is shown or made visible for the first time.

