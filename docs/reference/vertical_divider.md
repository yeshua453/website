---
sidebar_label: vertical_divider
title: vertical_divider
---

## VerticalDivider Objects

```python
class VerticalDivider(Control)
```

A thin vertical line, with padding on either side.

In the material design language, this represents a divider.

**Example**:

  
```
import flet as ft

def main(page: ft.Page):

    page.add(
        ft.Row(
            [
                ft.Container(
                    bgcolor=ft.colors.ORANGE_300,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
                ft.VerticalDivider(),
                ft.Container(
                    bgcolor=ft.colors.BROWN_400,
                    alignment=ft.alignment.center,
                    expand=True,
                ),
            ],
            spacing=0,
            expand=True,
        )
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/verticaldivider

