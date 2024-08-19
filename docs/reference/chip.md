---
sidebar_label: chip
title: chip
---

## Chip Objects

```python
class Chip(ConstrainedControl)
```

Chips are compact elements that represent an attribute, text, entity, or action.

**Example**:

```
import flet as ft


def main(page: ft.Page):
    def save_to_favorites_clicked(e):
        e.control.label.value = "Saved to favorites"
        e.control.leading = ft.Icon(ft.icons.FAVORITE_OUTLINED)
        e.control.disabled = True
        page.update()

    def open_google_maps(e):
        page.launch_url("https://maps.google.com")
        page.update()

    save_to_favourites = ft.Chip(
        label=ft.Text("Save to favourites"),
        leading=ft.Icon(ft.icons.FAVORITE_BORDER_OUTLINED),
        bgcolor=ft.colors.GREEN_200,
        disabled_color=ft.colors.GREEN_100,
        autofocus=True,
        on_click=save_to_favorites_clicked,
    )

    open_in_maps = ft.Chip(
        label=ft.Text("9 min walk"),
        leading=ft.Icon(ft.icons.MAP_SHARP),
        bgcolor=ft.colors.GREEN_200,
        on_click=open_google_maps,
    )

    page.add(ft.Row([save_to_favourites, open_in_maps]))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/chip

