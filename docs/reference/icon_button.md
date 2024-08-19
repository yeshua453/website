---
sidebar_label: icon_button
title: icon_button
---

## IconButton Objects

```python
class IconButton(ConstrainedControl, AdaptiveControl)
```

An icon button is a round button with an icon in the middle that reacts to touches by filling with color (ink).

Icon buttons are commonly used in the toolbars, but they can be used in many other places as well.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "Icon buttons"
    page.add(
        ft.Row(
            [
                ft.IconButton(
                    icon=ft.icons.PAUSE_CIRCLE_FILLED_ROUNDED,
                    icon_color="blue400",
                    icon_size=20,
                    tooltip="Pause record",
                ),
                ft.IconButton(
                    icon=ft.icons.DELETE_FOREVER_ROUNDED,
                    icon_color="pink600",
                    icon_size=40,
                    tooltip="Delete record",
                ),
            ]
        ),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/iconbutton

