---
sidebar_label: grid_view
title: grid_view
---

## GridView Objects

```python
class GridView(ConstrainedControl, ScrollableControl, AdaptiveControl)
```

A scrollable, 2D array of controls.

GridView is very effective for large lists (thousands of items). Prefer it over wrapping `Column` or `Row` for smooth scrolling.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "GridView Example"
    page.theme_mode = ft.ThemeMode.DARK
    page.padding = 50
    page.update()

    images = ft.GridView(
        expand=1,
        runs_count=5,
        max_extent=150,
        child_aspect_ratio=1.0,
        spacing=5,
        run_spacing=5,
    )

    page.add(images)

    for i in range(0, 60):
        images.controls.append(
            ft.Image(
                src=f"https://picsum.photos/150/150?{i}",
                fit=ft.ImageFit.NONE,
                repeat=ft.ImageRepeat.NO_REPEAT,
                border_radius=ft.border_radius.all(10),
            )
        )
    page.update()

ft.app(target=main)

```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/gridview

