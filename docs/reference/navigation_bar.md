---
sidebar_label: navigation_bar
title: navigation_bar
---

## NavigationBarLabelBehavior Objects

```python
class NavigationBarLabelBehavior(Enum)
```

Defines how the destinations&#x27; labels will be laid out and when they&#x27;ll be displayed.

## NavigationBarDestination Objects

```python
class NavigationBarDestination(Control)
```

Defines the appearance of the button items that are arrayed within the navigation bar.

The value must be a list of two or more NavigationBarDestination instances.

## NavigationBar Objects

```python
class NavigationBar(ConstrainedControl, AdaptiveControl)
```

Material 3 Navigation Bar component.

Navigation bars offer a persistent and convenient way to switch between primary destinations in an app.

**Example**:

  
```
import flet as ft

def main(page: ft.Page):
    page.title = "NavigationBar Example"
    page.navigation_bar = ft.NavigationBar(
        destinations=[
            ft.NavigationBarDestination(icon=ft.icons.EXPLORE, label="Explore"),
            ft.NavigationBarDestination(icon=ft.icons.COMMUTE, label="Commute"),
            ft.NavigationBarDestination(
                icon=ft.icons.BOOKMARK_BORDER,
                selected_icon=ft.icons.BOOKMARK,
                label="Explore"
            ),
        ]
    )
    page.add(ft.Text("Body!"))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/navigationbar

