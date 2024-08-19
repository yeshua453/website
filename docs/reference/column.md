---
sidebar_label: column
title: column
---

## Column Objects

```python
class Column(ConstrainedControl, ScrollableControl, AdaptiveControl)
```

Container allows to decorate a control with background color and border and position it with padding, margin and alignment.

**Example**:

  
```
import flet as ft

def main(page: ft.Page):
    page.title = "Column example"

    page.add(
        ft.Column(
            expand=True,
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
  
  Online docs: https://flet.dev/docs/controls/column

