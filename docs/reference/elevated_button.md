---
sidebar_label: elevated_button
title: elevated_button
---

## ElevatedButton Objects

```python
class ElevatedButton(ConstrainedControl, AdaptiveControl)
```

Elevated buttons are essentially filled tonal buttons with a shadow. To prevent shadow creep, only use them when absolutely necessary, such as when the button requires visual separation from a patterned background.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "Basic elevated buttons"
    page.add(
        ft.ElevatedButton(text="Elevated button"),
        ft.ElevatedButton("Disabled button", disabled=True),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/elevatedbutton

