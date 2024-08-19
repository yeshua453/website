---
sidebar_label: popup_menu_button
title: popup_menu_button
---

## PopupMenuButton Objects

```python
class PopupMenuButton(ConstrainedControl)
```

An icon button which displays a menu when clicked.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    def check_item_clicked(e):
        e.control.checked = not e.control.checked
        page.update()

    pb = ft.PopupMenuButton(
        items=[
            ft.PopupMenuItem(text="Item 1"),
            ft.PopupMenuItem(icon=ft.icons.POWER_INPUT, text="Check power"),
            ft.PopupMenuItem(
                content=ft.Row(
                    [
                        ft.Icon(ft.icons.HOURGLASS_TOP_OUTLINED),
                        ft.Text("Item with a custom content"),
                    ]
                ),
                on_click=lambda _: print("Button with a custom content clicked!"),
            ),
            ft.PopupMenuItem(),  # divider
            ft.PopupMenuItem(
                text="Checked item", checked=False, on_click=check_item_clicked
            ),
        ]
    )
    page.add(pb)

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/popupmenubutton

