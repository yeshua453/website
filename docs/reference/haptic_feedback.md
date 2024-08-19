---
sidebar_label: haptic_feedback
title: haptic_feedback
---

## HapticFeedback Objects

```python
class HapticFeedback(Control)
```

Allows access to the haptic feedback interface on the device.

It is non-visual and should be added to `page.overlay` list.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    hf = ft.HapticFeedback()
    page.overlay.append(hf)

    page.add(
        ft.ElevatedButton("Heavy impact", on_click=lambda _: hf.heavy_impact()),
        ft.ElevatedButton("Medium impact", on_click=lambda _: hf.medium_impact()),
        ft.ElevatedButton("Light impact", on_click=lambda _: hf.light_impact()),
        ft.ElevatedButton("Vibrate", on_click=lambda _: hf.vibrate()),
    )

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/hapticfeedback

