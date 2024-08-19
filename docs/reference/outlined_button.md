---
sidebar_label: outlined_button
title: outlined_button
---

## OutlinedButton Objects

```python
class OutlinedButton(ConstrainedControl, AdaptiveControl)
```

Outlined buttons are medium-emphasis buttons. They contain actions that are important, but aren’t the primary action in an app. Outlined buttons pair well with filled buttons to indicate an alternative, secondary action.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "Basic outlined buttons"
    page.add(
        ft.OutlinedButton(text="Outlined button"),
        ft.OutlinedButton("Disabled button", disabled=True),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/outlinedbutton

