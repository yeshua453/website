---
sidebar_label: flashlight
title: flashlight
---

## Flashlight Objects

```python
class Flashlight(Control)
```

A control to use FlashLight. Works on iOS and Android. Based on torch_light Flutter widget (https://pub.dev/packages/torch_light).

Flashlight control is non-visual and should be added to `page.overlay` list.

**Example**:

```
import flet as ft

def main(page: ft.Page):
    flashLight = ft.Flashlight()
    page.overlay.append(flashLight)
    page.add(
        ft.TextButton("toggle", on_click: lambda _: flashlight.toggle())
    )

ft.app(target=main)
```

