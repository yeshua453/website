---
sidebar_label: text_button
title: text_button
---

## TextButton Objects

```python
class TextButton(ConstrainedControl, AdaptiveControl)
```

Text buttons are used for the lowest priority actions, especially when presenting multiple options. Text buttons can be placed on a variety of backgrounds. Until the button is interacted with, its container isn’t visible.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "Basic text buttons"
    page.add(
        ft.TextButton(text="Text button"),
        ft.TextButton("Disabled button", disabled=True),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/textbutton

