---
sidebar_label: container
title: container
---

## Container Objects

```python
class Container(ConstrainedControl, AdaptiveControl)
```

Container allows to decorate a control with background color and border and position it with padding, margin and alignment.

**Example**:

  
```
import flet as ft

def main(page: ft.Page):
    page.title = "Container"

    c1 = ft.Container(
        content=ft.Text("Container with background"),
        bgcolor=ft.colors.AMBER_100,
        padding=5,
    )
    page.add(c1)

ft.app(target=main)
```
  
  -----
  
  Online docs: https://flet.dev/docs/controls/container

#### alignment

```python
@property
def alignment() -> Optional[Alignment]
```

:obj:`Alignment`, optional: Align the child control within the container.

Alignment is an instance of `alignment.Alignment` class object with `x` and `y` properties
representing the distance from the center of a rectangle.

