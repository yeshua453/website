---
sidebar_label: cupertino_app_bar
title: cupertino_app_bar
---

## CupertinoAppBar Objects

```python
class CupertinoAppBar(Control)
```

An iOS-styled application bar.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.theme_mode = ft.ThemeMode.LIGHT

    page.appbar = ft.CupertinoAppBar(
        leading=ft.Icon(ft.icons.PALETTE),
        bgcolor=ft.colors.SURFACE_VARIANT,
        trailing=ft.Icon(ft.icons.WB_SUNNY_OUTLINED),
        middle=ft.Text("AppBar Example"),
    )
    page.add(ft.Text("Body!"))


ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/cupertinoappbar

#### leading

```python
@leading.setter
def leading(value: Optional[Control])
```

A Control to display before the toolbar&#x27;s title.

Typically the leading control is an Icon or an IconButton.

