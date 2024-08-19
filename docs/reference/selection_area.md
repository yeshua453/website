---
sidebar_label: selection_area
title: selection_area
---

## SelectionArea Objects

```python
class SelectionArea(Control)
```

Flet controls are not selectable by default. SelectionArea is used to enable selection for its child control.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.add(
        ft.SelectionArea(
            content=ft.Column([ft.Text("Selectable text"), ft.Text("Also selectable")])
        )
    )
    page.add(ft.Text("Not selectable"))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/selectionarea

