---
sidebar_label: slider
title: slider
---

## Slider Objects

```python
class Slider(ConstrainedControl, AdaptiveControl)
```

A slider provides a visual indication of adjustable content, as well as the current setting in the total range of content.

Use a slider when you want people to set defined values (such as volume or brightness), or when people would benefit from instant feedback on the effect of setting changes.

**Example**:

```
import flet as ft

def main(page):
    page.add(
        ft.Text("Slider with value:"),
        ft.Slider(value=0.3),
        ft.Text("Slider with a custom range and label:"),
        ft.Slider(min=0, max=100, divisions=10, label="{value}%"))

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/slider

