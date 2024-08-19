---
sidebar_label: list_tile
title: list_tile
---

## ListTile Objects

```python
class ListTile(ConstrainedControl, AdaptiveControl)
```

A single fixed-height row that typically contains some text as well as a leading or trailing icon.

**Example**:

  
```
import flet as ft

def main(page):
    page.title = "ListTile Example"
    page.add(
        ft.Card(
            content=ft.Container(
                width=500,
                content=ft.Column(
                    [
                        ft.ListTile(
                            title=ft.Text("One-line list tile"),
                        ),
                        ft.ListTile(
                            leading=ft.Icon(ft.icons.SETTINGS),
                            title=ft.Text("One-line selected list tile"),
                            selected=True,
                        ),
                    ],
                    spacing=0,
                ),
                padding=ft.padding.symmetric(vertical=10),
            )
        )
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/listtile

