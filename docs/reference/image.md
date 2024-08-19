---
sidebar_label: image
title: image
---

## Image Objects

```python
class Image(ConstrainedControl)
```

A control that displays an image.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    page.title = "Image Example"

    img = ft.Image(
        src=f"/icons/icon-512.png",
        width=100,
        height=100,
        fit=ft.ImageFit.CONTAIN,
    )

    page.add(img)

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/image

