---
sidebar_label: pagelet
title: pagelet
---

## Pagelet Objects

```python
class Pagelet(ConstrainedControl, AdaptiveControl)
```

Pagelet implements the basic Material Design visual layout structure.

Use it for projects that require &quot;page within a page&quot; layouts with its own AppBar, BottomBar, Drawer, such as demos and galleries.

**Example**:

    ```
import flet as ft


def main(page: ft.Page):
    page.add(
        ft.Pagelet(
            appbar=ft.CupertinoAppBar(middle=ft.Text("AppBar title")),
            content=ft.Text("This is pagelet"),
        )
    )


ft.app(target=main)
    ```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/pagelet

