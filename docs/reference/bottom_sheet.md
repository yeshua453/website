---
sidebar_label: bottom_sheet
title: bottom_sheet
---

## BottomSheet Objects

```python
class BottomSheet(Control)
```

A modal bottom sheet is an alternative to a menu or a dialog and prevents the user from interacting with the rest of the app.

**Example**:

```
import flet as ft


def main(page: ft.Page):
    page.horizontal_alignment = ft.CrossAxisAlignment.CENTER

    def handle_dismissal(e):
        page.add(ft.Text("Bottom sheet dismissed"))
    bs = ft.BottomSheet(
        on_dismiss=handle_dismissal,
        content=ft.Container(
            padding=50,
            content=ft.Column(
                tight=True,
                controls=[
                    ft.Text("This is bottom sheet's content!"),
                    ft.ElevatedButton("Close bottom sheet", on_click=lambda _: page.close(bs)),
                ],
            ),
        ),
    )
    page.add(ft.ElevatedButton("Display bottom sheet", on_click=lambda _: page.open(bs)))


ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/bottomsheet

