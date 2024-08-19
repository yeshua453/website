---
sidebar_label: cupertino_list_tile
title: cupertino_list_tile
---

## CupertinoListTile Objects

```python
class CupertinoListTile(ConstrainedControl)
```

An iOS-style list tile. The CupertinoListTile is a Cupertino equivalent of Material ListTile.

**Example**:

  
```
import flet as ft


def main(page: ft.Page):
    def tile_clicked(e):
        print("Tile Clicked!")

    page.add(
        ft.CupertinoListTile(
            notched=True,
            additional_info=ft.Text("Wed Jan 25"),
            bgcolor_activated=ft.colors.AMBER_ACCENT,
            leading=ft.Icon(name=ft.cupertino_icons.GAME_CONTROLLER),
            title=ft.Text("CupertinoListTile not notched"),
            subtitle=ft.Text("Subtitle"),
            trailing=ft.Icon(name=ft.cupertino_icons.ALARM),
            on_click=tile_clicked,
        ),

    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/cupertinolisttile

