---
sidebar_label: row
title: row
---

## Row Objects

```python
class Row(ConstrainedControl, ScrollableControl, AdaptiveControl)
```

A control that displays its children in a horizontal array.

To cause a child control to expand and fill the available horizontal space, set its `expand` property.

**Example**:

  
```
import flet as ft


def main(page: ft.Page):
    page.title = "Row example"

    page.add(
        ft.Row(
            controls=[
                ft.Container(
                    expand=1,
                    content=ft.Text("Container 1"),
                    bgcolor=ft.colors.GREEN_100,
                ),
                ft.Container(
                    expand=2, content=ft.Text("Container 2"), bgcolor=ft.colors.RED_100
                ),
            ],
        ),
    ),


ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/row

